# 📋 Contexto do Projeto — Novo Site Ciamed (handoff para nova sessão)

> **Objetivo deste documento:** permitir que uma nova sessão do Claude continue o
> trabalho exatamente de onde paramos, sem perder contexto. Leia tudo antes de começar.

---

## 0. Como retomar (faça primeiro)
1. O repositório é **`oleodias/ciasite`**, trabalhamos direto na branch **`main`**.
2. `git pull origin main` para pegar o estado mais recente.
3. Site publicado (GitHub Pages): **https://oleodias.github.io/ciasite/prototipo/**
   - A raiz `https://oleodias.github.io/ciasite/` redireciona para `/prototipo/`.
   - Todo push na `main` atualiza o site em ~1–2 min.
4. **Sempre committar e dar push na `main`** após cada mudança (com retry/backoff em erro de rede).

### ⚙️ Método de trabalho combinado (IMPORTANTE)
- **Renderizar o MÍNIMO possível.** O usuário confere pelo link do GitHub Pages.
  Só gere screenshot (puppeteer) quando for realmente indispensável — imagens custam
  muitos tokens.
- **Juntar vários ajustes antes de conferir** (evitar o ciclo mexe→print→mexe→print).
- Trabalhamos **em português** e **peça por peça**: o usuário traz referências de sites
  renomados (prints/vídeos/links) e a gente recria cada componente com a marca Ciamed.
- Usuário: **Leonardo (Leo)**. Muito visual, foco em capricho e em "vender" a empresa.

---

## 1. A empresa (dados reais)
- **Razão social:** Ciamed Distribuidora de Medicamentos Ltda. · **CNPJ** 05.782.733/0001-49
- **O que faz:** distribuição de medicamentos p/ setores **público** (licitações, ordem
  judicial) e **privado** (hospitais, clínicas, operadoras, varejo farmacêutico).
- **Manifesto oficial:** *"O que importa é a VIDA. Cuidar das pessoas pode mudar o mundo."*
- **Copy do hero:** *"Você chegou na Ciamed"* (sem o "Respire" — foi removido a pedido).
- **Unidades (5)** — usadas no mapa:
  - **Encantado/RS — Matriz** · Rua Severino Augusto Pretto, 560 · CEP 95960-000
  - **Porto Alegre/RS** · Rua Ramiro Barcelos, 1201
  - **Palhoça/SC** · Rua dos Cisnes, 235
  - **Leme/SP** · Rua Antônio Dellai, 670
  - **Serra/ES** · Rua Samuel Meira Brasil, 394
- **Especialidades:** Oncologia · Reumatologia · Oftalmologia
- **Certificações:** Boas Práticas ANVISA · GAFO · Compliance & Ética
- **Contato:** (51) 3751-9300 · atendimento@ciamed.com.br · www.ciamed.com.br

### ⚠️ Decisão-chave da diretoria / auditoria
- A auditoria apontou que **"a Ciamed não se vende pelo site"** → o site precisa comunicar
  **porte, confiança e valor**.
- **NÃO usar faixa de números** (20 anos/5 unidades/24h): a empresa é grande e esses números
  específicos "vendem pouco". Vender o porte com **palavras e provas visuais** (mapa, marcas,
  certificações, depoimento), não com KPIs.

---

## 2. Identidade visual oficial (seguir à risca)
- **Cor primária (teal):** `#00B3B2` (Pantone 326 C). Trabalhar com a escala de tons.
- **Cinza institucional:** `#6E6E6E`.
- **Apoio p/ fundos escuros imersivos:** petróleo `#02302F` / `#04211F` e menta `#8AF0EF`.
- **Tipografia oficial:** **Helvetica Neue** (corpo). Nos títulos dos moldes 08/11 usamos
  **Sora** (auto-hospedada) — dá um ar premium sem fugir da marca.
- **Ícone:** "A" triangular (seta/montanha). **Pattern:** textura do "A" triangular repetido
  (arquivo `prototipo/assets/flecha cinza fundo de tela.png`, usado no molde 11).
- Manual completo: `prototipo/assets/Manual de Identidade Visual CIAMED correto.pdf`
  (NÃO reprocessar por PDF sem necessidade — é pesado em tokens; os dados já estão aqui).

---

## 3. Estado atual dos moldes (protótipos da Home)
Todos em `prototipo/molde-*/index.html`. Índice navegável: `prototipo/index.html`.

| Molde | Nome | Estado |
|---|---|---|
| 01–04 | Impacto/Suave/Imersivo/Jornada | antigos (scroll-jacking) — descartados na prática |
| 05 | Jornada Clara | antigo |
| 06 | Imersão (vídeo fixo) | tem o hero de vídeo; scroll-jacking |
| 07 | Cortina (vídeo sobe) | idem |
| **08** | **Autoridade** | ⭐ **MOLDE ATUAL / principal** — é aqui que estamos evoluindo |
| 09 | Imersão sóbria | tema escuro premium, scroll normal |
| 10 | Prova viva | editorial (manifesto + teaser de notícias) |
| 11 | Corte do Diretor | proposta autoral (posicionamento c/ pattern + depoimento) |
| — | Componente **Cards flutuantes** | `prototipo/componentes/cards-flutuantes/` (carrossel estilo GSK) |

### ⭐ Molde 08 "Autoridade" — o foco atual
Estrutura (scroll NORMAL, com reveal-ao-rolar que não repete na volta):
1. **Hero:** vídeo em tela cheia + **título SVG** "Você chegou na Ciamed" (com "Ciamed"
   cursivo teal), posicionado no canto inferior esquerdo e deslocado na **diagonal**
   (`transform: translate(70px,-70px)` no `.hero .inner`). **Sem subtítulo e sem botão** —
   só o título. Overlay concentrado no canto inf. esquerdo p/ deixar o vídeo aparente.
2. **Marcas (marquee):** faixa de logos passando + faixa de certificações. Título
   "Distribuímos as marcas em que o Brasil confia".
3. **Por que Ciamed:** 4 pilares.
4. **Atuação:** 3 trilhas (Setor Público / Privado / Indústria & Laboratórios).
5. **Cobertura + Mapa:** mapa do Brasil (SVG) com as 5 unidades + lista.
6. **Especialidades:** cards flutuantes (versão simplificada, GSK-inspired).
7. **CTA + Footer.**

> Decisões de design já validadas: **manter hero vídeo + slogan**; **scroll normal**
> (nada de sequestro); **título maior, diagonal, sozinho**; tom **corporativo que vende**.

---

## 4. Vídeo do hero (CDN)
- **Fonte principal (CDN ImageKit):**
  `https://ik.imagekit.io/ciamedia/video%20ciamed%20nuvem.mp4`
- **Fallback local:** `prototipo/assets/video/ciamed-hero.mp4` (5.6MB, otimizado:
  faststart, sem áudio, 30fps).
- No `<video>` de cada molde há **dois `<source>`**: CDN primeiro, local depois.
- O vídeo mostra: vista aérea (Cristo/nuvens e cidade), estoque com caixas CIAMED,
  farmacêutica, logística, bebê "zelamos pela vida". A logo CIAMED aparece no centro em
  alguns momentos — por isso o título fica deslocado p/ não colidir.
- Aplicado nos moldes 06, 07, 08, 09, 10, 11.

---

## 5. Faixa de marcas (marquee) — como mexer
- Logos em `prototipo/assets/marcas/` (~32 marcas ativas).
- A lista fica na variável **`const MARCAS=[...]`** dentro do `<script>` dos moldes
  05, 06, 07, 08, 11. **Adicionar/remover marca = editar essa lista** (nos moldes que a usam)
  e garantir que o arquivo exista (senão vira "quadrinho em branco").
- **Velocidade:** CSS `.marquee-track{ animation: brandscroll 32s ... }` — **maior = mais
  lento** (o usuário perguntou sobre isso; sugestão 60–75s).
- **Estilo:** chips brancos, logos em **grayscale** que ganham **cor no hover**.
- **Logos brancas** (feitas p/ fundo escuro) foram **recoloridas p/ escuro `#2d4a48`**
  (apsen, laboratorio_globo, airela, abl_antibioticos, accord, etc.) para não sumirem no
  chip branco. Se o usuário mandar versões coloridas, substituir.
- Já removidas (não trabalham mais): **Mucambo, Supermax**.

---

## 6. Referências (pasta `referencias/`)
Método: uma pasta por site, com print(s) + `nota.txt` explicando **o que agradou**.
- **evcomx/** — ⭐ referência-mestre: limpo, corporativo, 1 cor de acento, logos de clientes
  após o hero, casos com depoimento. (Base do molde 08.)
- **gsk/** — cards flutuantes que trocam ("Descubra como estamos avançando") → virou o
  componente `cards-flutuantes`. Também: números coloridos grandes.
- **oncoprod/** — layout de **notícias/blog** (para uma aba futura de conteúdos).
- **novartis/** — 🆕 `novartis-nossa-historia.png` (o `nota.txt` ainda está **vazio** —
  aguardando o usuário explicar o que curtiu). **Pendente.**

---

## 7. Materiais e assets úteis
- `wireframes/home.md` — wireframe textual completo da Home (estrutura + copy real).
- `super-prompt-ia.md` — briefing completo da marca (útil como referência de dados).
- `materiais-fonte/` — logo, ícone, dump do site atual (`sitedaciamednovo.txt`).
- `prototipo/assets/` — logos (logo.png), vídeo, fontes (`fonts/sora-latin.woff2`),
  título (`titulo-capa.svg`), pattern, PDFs (manual, mapa).
- `.nojekyll` na raiz + `index.html` na raiz (redireciona p/ prototipo/) — necessários p/ o Pages.

---

## 8. Ambiente técnico (para renders/vídeo — reinstalar se preciso)
> ⚠️ Ferramentas ficam em `/tmp/node_modules` (efêmero) — **uma sessão/container novo NÃO as
> terá**. Reinstalar quando for gerar imagem/vídeo:
- **Puppeteer** (screenshots): `npm i puppeteer` em /tmp; usar
  `PUPPETEER_CACHE_DIR=/tmp/pup` e args `--no-sandbox`. Renderizar `file://` do molde.
- **ffmpeg/ffprobe** (vídeo): `npm i ffmpeg-static ffprobe-static` em /tmp.
- Fonte Sora foi auto-hospedada baixando o woff2 do Google Fonts via proxy (curl com UA de
  navegador). O proxy do ambiente **bloqueia hosts externos** (403) — CDNs funcionam no
  navegador do usuário, mas não dá p/ validar daqui.

---

## 9. Próximos passos / pendências
- [ ] **Novartis:** aguardar o `nota.txt` do usuário e recriar a peça (provável seção "Nossa
      história"/linha do tempo).
- [ ] Continuar **peça por peça** conforme o usuário traz referências.
- [ ] Fotos reais da estrutura/equipe (hoje há placeholders "[foto a definir]" e retângulos
      coloridos nas especialidades).
- [ ] Preencher o **depoimento** real do molde 11 (hoje "[Nome do cliente]").
- [ ] Eventualmente: escolher o molde final, montar páginas internas, aba de notícias.
- [ ] Ajuste pendente possível: **velocidade do marquee** (32s → 60–75s) se o usuário pedir.

---

## 10. Mensagem sugerida para iniciar a nova sessão
> "Estou continuando o projeto do site da Ciamed. Leia o arquivo
> `CONTEXTO-PROJETO-CIAMED.md` na raiz do repo `oleodias/ciasite` (branch main) para
> pegar todo o contexto. Estamos evoluindo o **Molde 08 (Autoridade)** peça por peça a
> partir de referências. Renderize o mínimo — eu confiro pelo GitHub Pages."
