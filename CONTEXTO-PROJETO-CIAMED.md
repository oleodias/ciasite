# 📋 Contexto do Projeto — Novo Site Ciamed (handoff para nova sessão)

> **Objetivo deste documento:** permitir que uma nova sessão do Claude continue o
> trabalho exatamente de onde paramos, sem perder contexto. Leia tudo antes de começar.

---

## 0. Como retomar (faça primeiro)

1. O repositório é **`oleodias/ciasite`**. O site publicado sai da branch **`main`**.
2. `git pull origin main` para pegar o estado mais recente.
3. Site publicado (GitHub Pages): **https://oleodias.github.io/ciasite/prototipo/**
   - A raiz `https://oleodias.github.io/ciasite/` redireciona para `/prototipo/`.
   - Todo push na `main` atualiza o site em ~1–2 min.
4. **Fluxo git combinado:** desenvolver na branch de feature designada da sessão
   (ex.: `claude/ciamed-molde-08-authority-*`), depois `git fetch origin main` →
   `git rebase origin/main` → `git checkout main` → `git merge --ff-only <feature>` →
   push `main` (retry/backoff em erro de rede) → voltar p/ a feature e `merge --ff-only main`.
   **O Leo frequentemente commita direto na `main`** entre pushes — sempre rebase antes.
   Se não houver branch designada, pode trabalhar direto na `main`.

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
- **Manifesto oficial:** _"O que importa é a VIDA. Cuidar das pessoas pode mudar o mundo."_
- **Copy do hero:** _"Você chegou na Ciamed"_ (sem o "Respire" — foi removido a pedido).
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
- **Tipografia oficial:** **Helvetica Neue** (corpo). No **Molde 08 atual** o protótipo usa
  **Inter** (corpo) + **Libre Franklin** (títulos/display), carregadas via Google Fonts `<link>` —
  dão um ar premium e legível. Tokens: `--font:"Inter"`, `--display:"Libre Franklin"`.
- **Ícone:** "A" triangular (seta/montanha). **Pattern:** textura do "A" triangular repetido
  (arquivo `prototipo/assets/flecha cinza fundo de tela.png`, usado no molde 11).
- Manual completo: `prototipo/assets/Manual de Identidade Visual CIAMED correto.pdf`
  (NÃO reprocessar por PDF sem necessidade — é pesado em tokens; os dados já estão aqui).

---

## 3. Estado atual dos moldes (protótipos da Home)

Todos em `prototipo/molde-*/index.html`. Índice navegável: `prototipo/index.html`.

| Molde  | Nome                            | Estado                                                           |
| ------ | ------------------------------- | ---------------------------------------------------------------- |
| 01–04  | Impacto/Suave/Imersivo/Jornada  | antigos (scroll-jacking) — descartados na prática                |
| 05     | Jornada Clara                   | antigo                                                           |
| 06     | Imersão (vídeo fixo)            | tem o hero de vídeo; scroll-jacking                              |
| 07     | Cortina (vídeo sobe)            | idem                                                             |
| **08** | **Autoridade**                  | ⭐ **MOLDE ATUAL / principal** — é aqui que estamos evoluindo    |
| 09     | Imersão sóbria                  | tema escuro premium, scroll normal                               |
| 10     | Prova viva                      | editorial (manifesto + teaser de notícias)                       |
| 11     | Corte do Diretor                | proposta autoral (posicionamento c/ pattern + depoimento)        |
| —      | Componente **Cards flutuantes** | `prototipo/componentes/cards-flutuantes/` (carrossel estilo GSK) |

### ⭐ Molde 08 "Autoridade" — o foco atual

Arquivo: `prototipo/molde-08-autoridade/index.html` (~2850 linhas, HTML de arquivo único
com `<style>` inline). Scroll NORMAL, com reveal-ao-rolar (IntersectionObserver) que não
repete na volta. **Ordem atual das seções (validada pelo Leo em 07/2026):**

1. **Hero:** vídeo em tela cheia + **título** "Você chegou na Ciamed". Header com **logo
   wordmark que troca** (`../assets/logo-wordmark.png`) e vira sólido no scroll.
2. **Atuação (Setores):** "Uma parceira para cada setor da saúde" — 3 trilhas
   (Setor Público / Privado / Indústria & Laboratórios).
3. **Cards flutuantes (Descubra):** "Descubra como avançamos" — carrossel nativo
   (ver seção 5.1). É o 2º bloco depois do hero.
4. **Marcas (marquee):** "Distribuímos as marcas em que o Brasil confia" + faixa de
   certificações. É o 3º bloco.
5. **Faixa fixa (manifesto):** imagem estática, conteúdo passa por cima.
6. **Cobertura + Mapa:** mapa do Brasil (SVG) com as 5 unidades + lista.
7. **Destaques (notícias):** carrossel que puxa as notícias reais (ver seção 5.2).
8. **CTA** ("Pronto para distribuir com quem o mercado confia?") **+ Footer**
   (barra de contato Telefone/E-mail/WhatsApp + card "Nossa sede" + skyline de Encantado).

> Decisões de design já validadas: **manter hero vídeo + slogan**; **scroll normal**;
> tom **corporativo que vende**; **sem faixa de KPIs**. **A ordem Setores→Cards→Marcas
> foi escolhida pelo Leo** (antes era Marcas→Cards→Setores).

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

### 5.1. Cards flutuantes (Descubra) — componente NATIVO

- **Foi reconstruído de forma nativa** (antes era iframe — descartado). Hoje é um
  motor JS (IIFE) dentro do próprio `index.html` do molde 08: slots que rotacionam,
  autoplay 6s, tilt 3D no mouse, barra de progresso, dots, play/pause.
- **Fotos reais** em `prototipo/componentes/cards-flutuantes/img/` — a lista `SLIDES`
  (img/pos/tag/title) fica no `<script>`. `IMGBASE="../componentes/cards-flutuantes/img/"`.
  Imagens atuais: `Prancheta-5.png` (presença), `carreiras_03.jpg` (pessoas),
  `chuttersnap-...unsplash.jpg` (logística), `atuacao-xl.jpg` (atendimento),
  `Prancheta-7.png` (compromisso). Trocar foto = trocar arquivo/entrada na lista.

### 5.2. Módulo de Notícias (aba completa) — data-driven

Fica em `prototipo/molde-08-autoridade/noticias/`. **Adicionar notícia = adicionar 1
objeto** — listagem, artigo e o carrossel "Destaques" da home leem tudo da mesma base.

- **`dados.js`** — `window.NOTICIAS = [...]` (mais recente primeiro). Campos por notícia:
  `id` (slug da URL), `titulo`, `categoria` (campo existe mas **os chips foram removidos** —
  Leo não gostou), `data` (ISO), `dataLabel`, `resumo`, `imagem`, `legenda`, `corpo` (HTML) e,
  opcional, `galeria: [{src, legenda}]`. Hoje há **4 notícias reais** (Unimed, Gincana,
  Latinhas/AME, HBB), importadas do site antigo.
- **`index.html`** — listagem (destaque + grade), renderizada por JS a partir de `NOTICIAS`.
- **`artigo.html`** — template do artigo, lê `?id=slug`; renderiza título/data/capa/corpo,
  **galeria com lightbox** (clicar amplia, teclado ←/→/Esc) e "outras notícias".
- **`estilo.css`** — estilos compartilhados (header, hero, cards, artigo/prose, galeria,
  lightbox, footer, responsivo).
- A **Gincana** tem galeria de **11 fotos** em `../../assets/noticias/gincana/` (+ `cover.jpg`).
- **Carrossel "Destaques" da home** já está fiado nas 4 notícias reais (mapeia
  `NOTICIAS.slice(0,4)` → título/resumo/data/imagem/link do artigo).
- Fotos das notícias em `prototipo/assets/noticias/`.
- **Regra do Leo p/ o texto:** liberado a ajustar títulos, gramática, formatação e deixar
  mais corporativo — **sem alterar NENHUMA informação factual**.

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

### ✅ Já concluído nesta fase (Molde 08)
- Cards flutuantes reconstruídos de forma **nativa** com fotos reais.
- **Módulo de Notícias completo:** aba (listagem + artigo), 4 notícias reais, galeria com
  lightbox na Gincana, carrossel "Destaques" da home fiado nas notícias reais, chips de
  categoria removidos.
- Header com **logo wordmark que troca**; área final/CTA + footer reformulados
  (uma CTA + barra de contato + card "Nossa sede").
- **Ordem dos blocos** reordenada para Setores → Cards → Marcas.

### ⏳ Em aberto / próximos
- [ ] Ofertas feitas (aguardando o Leo confirmar): botão **"Ver todas as notícias"** abaixo
      do carrossel da home; **legendas por foto** na galeria da Gincana.
- [ ] **Novartis:** aguardar o `nota.txt` e recriar a peça (provável "Nossa história"/timeline).
- [ ] Continuar **peça por peça** conforme o Leo traz referências.
- [ ] Preencher o **depoimento** real do molde 11 (hoje "[Nome do cliente]").
- [ ] Eventualmente: escolher o molde final e montar as demais páginas internas.
- [ ] Ajuste possível: **velocidade do marquee** (32s → 60–75s) se o Leo pedir.

> **Contexto:** o Leo estava prestes a **apresentar o site para a chefe dele** — capriche
> no acabamento visual.

---

## 10. Mensagem sugerida para iniciar a nova sessão

> "Estou continuando o projeto do site da Ciamed. Leia o arquivo
> `CONTEXTO-PROJETO-CIAMED.md` na raiz do repo `oleodias/ciasite` (branch `main`) para
> pegar todo o contexto. Estamos evoluindo o **Molde 08 (Autoridade)** peça por peça a
> partir de referências. Já estão prontos: os **cards flutuantes nativos** e o **módulo de
> Notícias completo** (aba + carrossel da home). A ordem atual dos blocos é
> **Setores → Cards flutuantes → Marcas**. Trabalhe em português, renderize o mínimo (eu
> confiro pelo GitHub Pages) e junte vários ajustes antes de conferir. Commit + push na `main`
> a cada etapa. Me diga por onde quer que a gente comece."
