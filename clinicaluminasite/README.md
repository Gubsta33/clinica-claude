# Clínica Lúmina — Website

Site institucional multi-página de clínica de estética premium, construído com
Next.js (App Router), TypeScript, Tailwind CSS 4 e **anime.js v4** como motor
de todas as animações (reveals com stagger, split-text por máscara, parallax,
objetos flutuantes, botões magnéticos, marquee, carrossel, acordeões e
transições de página), além de Lenis para rolagem suave.

## Rotas

- `/` — home com todas as seções de conversão
- `/clinica` — história, valores, estrutura e equipe
- `/tratamentos` — listagem com filtro por categoria
- `/tratamentos/[slug]` — 7 páginas completas de tratamento (indicações, benefícios, etapas, cuidados, FAQ, especialista responsável, relacionados)
- `/especialistas` e `/especialistas/[slug]` — equipe e perfis individuais
- `/resultados` — metodologia de acompanhamento (sem antes/depois fabricado)
- `/conteudos` e `/conteudos/[slug]` — artigos editoriais
- `/contato` — formulário (React Hook Form + Zod) que envia para o WhatsApp, canais, horários e mapa
- `/politica-de-privacidade` — LGPD

SEO: metadata por página, Open Graph, `sitemap.xml`, `robots.txt`, canônicas e
dados estruturados (MedicalBusiness/LocalBusiness, Person, Article, FAQPage).

## Rodando localmente

```bash
npm install
npm run dev    # http://localhost:3000
npm run build  # build de produção
```

## Personalização

Todo o conteúdo editável está centralizado em `src/data/`:

- `site.ts` — nome, endereço, telefone/WhatsApp, horários, redes (os dados de contato atuais são placeholders)
- `treatments.ts` — os 7 tratamentos e todo o conteúdo de suas páginas
- `specialists.ts` — equipe (fictícia; substitua por profissionais reais com registros verdadeiros e fotos autorizadas)
- `articles.ts` — artigos do blog
- `testimonials.ts` — depoimentos (ilustrativos; substitua por depoimentos autorizados)

## Imagens

As imagens de `public/images/` foram geradas por IA com direção de arte única
(campanha de skincare de luxo, tons de lilás/marfim/champanhe). O workflow
`.github/workflows/fetch-assets.yml` baixa e otimiza os arquivos originais
(execução manual via *workflow dispatch*). Substitua pelas fotos reais da
clínica quando disponíveis, mantendo os mesmos nomes de arquivo.

## Deploy

Pronto para Vercel: `vercel deploy` ou conecte o repositório ao painel.
