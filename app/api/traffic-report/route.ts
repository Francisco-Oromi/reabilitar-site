import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

export const maxDuration = 60;

export async function POST(req: NextRequest) {
  if (!process.env.ANTHROPIC_API_KEY) {
    return NextResponse.json({ error: "ANTHROPIC_API_KEY não configurada." }, { status: 500 });
  }

  let body: { files: { name: string; type: string; data: string }[]; period?: string; instructions?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Payload inválido." }, { status: 400 });
  }

  const { files, period, instructions } = body;
  if (!files?.length && !instructions?.trim()) {
    return NextResponse.json({ error: "Envie ao menos um arquivo ou escreva uma mensagem." }, { status: 400 });
  }

  // Build content blocks for Claude
  const contentBlocks: Anthropic.MessageParam["content"] = [];

  contentBlocks.push({
    type: "text",
    text: `Você é um especialista em análise de tráfego pago e orgânico para clínicas de saúde.
A clínica é a **Reabilitar Wellness**, clínica de fisioterapia em Juiz de Fora (MG).
${period ? `Período dos dados: ${period}` : ""}
${instructions ? `\nInstruções específicas do usuário: ${instructions}\n\nLeve essas instruções em conta ao estruturar e priorizar o relatório.` : ""}

Analise os arquivos de campanha abaixo (podem ser prints de Google Ads, Meta Ads, planilhas ou relatórios) e gere um relatório estruturado em português do Brasil com as seguintes seções:

## 1. Resumo Executivo
Panorama geral do período em 3–5 linhas. O que foi bem, o que precisa atenção.

## 2. Métricas Principais
Tabela com as métricas encontradas: Impressões, Cliques, CTR, CPC, Conversões, CPL (Custo por Lead), ROAS, Valor Gasto. Se não houver uma métrica no arquivo, omita a linha.

## 3. Análise por Canal
Para cada canal identificado (Google Ads, Meta Ads, orgânico, etc.), escreva um parágrafo com performance e contexto.

## 4. Pontos Fortes
Lista de 3–5 bullet points sobre o que está funcionando bem.

## 5. Alertas e Problemas
Lista de pontos negativos, anomalias ou métricas abaixo do esperado para uma clínica de fisioterapia.

## 6. Recomendações Prioritárias
3–5 ações concretas e priorizadas por impacto. Seja específico: não diga "melhore os anúncios" — diga o que mudar e por quê.

## 7. Benchmark do Setor
Compare as métricas encontradas com benchmarks típicos de clínicas de saúde no Brasil (CPC médio Google ~R$3–8, CPL médio ~R$40–120, CTR médio 2–5%).

Formate usando Markdown. Seja direto e orientado a dados.`,
  });

  for (const file of files) {
    const mediaType = file.type as
      | "image/png"
      | "image/jpeg"
      | "image/gif"
      | "image/webp"
      | "application/pdf";

    if (file.type.startsWith("image/")) {
      contentBlocks.push({
        type: "image",
        source: {
          type: "base64",
          media_type: mediaType as "image/png" | "image/jpeg" | "image/gif" | "image/webp",
          data: file.data,
        },
      });
      contentBlocks.push({ type: "text", text: `[Arquivo: ${file.name}]` });
    } else if (file.type === "application/pdf") {
      contentBlocks.push({
        type: "document",
        source: {
          type: "base64",
          media_type: "application/pdf",
          data: file.data,
        },
      } as Anthropic.DocumentBlockParam);
      contentBlocks.push({ type: "text", text: `[Arquivo: ${file.name}]` });
    } else {
      // CSV / text / spreadsheet — data is plain text
      contentBlocks.push({
        type: "text",
        text: `[Arquivo: ${file.name}]\n\`\`\`\n${file.data}\n\`\`\``,
      });
    }
  }

  try {
    const message = await client.messages.create({
      model: "claude-sonnet-4-6",
      max_tokens: 4096,
      messages: [{ role: "user", content: contentBlocks }],
    });

    const text = message.content
      .filter((b) => b.type === "text")
      .map((b) => (b as Anthropic.TextBlock).text)
      .join("\n");

    return NextResponse.json({ report: text });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : "Erro desconhecido";
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
