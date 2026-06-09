# ETAPA 1 + 2 — Descoberta e Auditoria
### Projeto: Novo Site Institucional Ciamed Distribuidora Farmacêutica

> Documento de consultoria. Consolida a fase de imersão/descoberta e o diagnóstico
> do material existente. Base para a Arquitetura da Informação e os Wireframes.

---

## 1. Resumo executivo

A Ciamed possui **conteúdo e arquitetura de informação adequados** no projeto
desenvolvido pelo designer externo. O motivo da reprovação pela diretoria
**não é falta de conteúdo nem erro de estrutura** — é a **percepção visual e
experiencial**: o site não está organizado para *demonstrar* a escala, a solidez e
a autoridade que a empresa já possui de fato.

Em outras palavras: **a Ciamed é grande, mas o site não a faz *parecer* grande.**

A maior alavanca de transformação está em dois pontos:

1. **Reestruturar a Home** para amplificar provas de autoridade (números, cobertura
   nacional, clientes de peso, certificações) — tratado já nos wireframes.
2. **Elevar a execução visual** (etapa seguinte: Design System + proposta visual).

---

## 2. Quem é a Ciamed (perfil consolidado)

| Dimensão | Informação |
|---|---|
| Fundação | Julho de 2003 — Encantado/RS (mais de 20 anos de mercado) |
| Atividade | Distribuição de medicamentos e materiais hospitalares |
| Unidades | 5 — Encantado/RS (matriz), Porto Alegre/RS, Palhoça/SC, Leme/SP, Serra/ES |
| Cobertura | Nacional (rodoviária + aérea) |
| Especialidades | Oncologia, Reumatologia, Oftalmologia (linha completa) |
| Públicos | Setor público (licitações), setor privado (hospitais, clínicas, operadoras, varejo farmacêutico) |
| Clientes/parceiros de peso | Roche, GSK, Abbott, Supermax, Mucambo |
| Certificações/Programas | Boas Práticas (ANVISA), Certificação GAFO, Compliance, Programa CEAMEDY, Responsabilidade Socioambiental |
| Promessa logística | "Entregas em até 24h" |
| Contato central | 51 3748-3763 · atendimento@ciamed.com.br |

### Identidade visual disponível
- **Logotipo** (`materiais-fonte/logo-2024.png`): wordmark "CIAMED" + "Distribuidora
  de Medicamentos Ltda".
- **Ícone/símbolo** (`materiais-fonte/iconeciamed.png`): o "A" formando um **pico/
  montanha** — leitura simbólica de **ascensão, solidez e liderança** (excelente
  ativo para um posicionamento de autoridade).
- **Paleta:** gradiente **teal/turquesa → verde-petróleo profundo**. Cor moderna,
  associada a saúde, confiança e tecnologia — boa base, precisa de uma escala
  estendida (neutros, tons de apoio, estados) que será definida no Design System.

---

## 3. Posicionamento

- **Posicionamento atual (site antigo + material):** distribuidora competente e
  certificada, comunicação funcional, foco em "atender".
- **Posicionamento desejado (diretoria):** uma das **principais distribuidoras
  farmacêuticas do país** — solidez, autoridade, inovação e grandeza.
- **Personalidade de marca definida:** **corporativa robusta e confiável**, com
  acentos pontuais de tecnologia (para diferenciar sem copiar a referência Oncoprod).
- **Públicos (peso equilibrado):** clientes B2B (público + privado), fornecedores/
  indústria, e talentos.

---

## 4. Auditoria do material do designer (Home — `sitedaciamednovo.txt`)

### 4.1 O que está BOM (manter)
- **Arquitetura de menu** clara e completa (ver Seção 5).
- **Logins segmentados** por público (Operadora / Cliente / Colaborador) — maduro.
- **Provas de autoridade já presentes** na copy: clientes de peso, 5 unidades,
  especialidades, certificações, "entregas em 24h".
- **Frases de impacto com personalidade** — devem ser preservadas:
  - *"Você chegou na Ciamed" / "Respire"* (hero)
  - *"Distribuímos para todo o país!"*
  - *"Entregas em até 24h!"*
  - *"Existimos para atender o mercado respeitando o que é mais importante, a vida."*
- **Acesso rápido** a funções utilitárias (2ª via, cotações, licitações, etc.) —
  bom para o público recorrente.
- Suporte a **multi-idioma** (PT/EN/ES) — alinhado a uma imagem de empresa de porte.

### 4.2 O que FALTA / oportunidades (gaps de percepção de grandeza)
| # | Gap | Impacto | Solução proposta (wireframe) |
|---|---|---|---|
| G1 | Sem **faixa de números/estatísticas** | Não comunica escala objetivamente | Banda de KPIs após o hero (20+ anos, 5 unidades, cobertura nacional, 24h) |
| G2 | Hero não ancora **autoridade/escala** | Primeira impressão fraca | Hero institucional com imagem real de estrutura + headline de posicionamento |
| G3 | "Por que Ciamed" só existe no **menu** | Diferenciais não aparecem na Home | Bloco de pilares de valor na Home |
| G4 | "Distribuímos para todo o país" é só **texto** | Cobertura não vira prova visual | **Mapa do Brasil** com unidades destacadas |
| G5 | Clientes/certificações **soltos** | Prova social subaproveitada | Faixa de logos + selos orquestrada como "confiança" |
| G6 | Sem hierarquia clara de **público** | Visitante não se reconhece | Trilhas segmentadas (público/privado/fornecedor/carreira) |
| G7 | Foco utilitário ofusca **institucional** | Site parece "portal", não "marca" | Equilibrar narrativa institucional + utilidades |

### 4.3 Riscos técnicos observados
- O material é um **export WordPress/Elementor** (HTML cheio de classes/scripts do
  construtor). **Não é base técnica recomendada** para o site final de alto padrão —
  serve como **fonte de conteúdo**, não de código. A stack será definida na ETAPA 10.

---

## 5. Arquitetura de informação extraída (referência)

```
A Empresa
 ├─ Unidades
 ├─ Boas Práticas
 ├─ Certificação GAFO
 ├─ Compliance
 ├─ Programa CEAMEDY
 ├─ Responsabilidade Socioambiental
 └─ Política de Privacidade
Atuação
 ├─ Setor Público
 ├─ Setor Privado
 └─ Porque Ciamed
Linhas / Produtos
Carreira
Contato
[Login] → Operadora · Cliente · Colaborador
```

**Home (ordem do designer):** Hero → Especialidades → Unidades → Acesso Rápido →
Atendimento público/privado → Parceiros → Carreira → Conteúdos/Redes → Footer.

> Esta IA será refinada e justificada em `02-arquitetura-informacao.md`, incluindo
> as trilhas por público e os amplificadores de grandeza.

---

## 6. Critérios objetivos de aprovação (para não repetir a reprovação)

Para blindar o projeto contra a "reprovação por sensação", proponho validar com a
diretoria estes critérios **mensuráveis** de "solidez/autoridade/grandeza":

1. Nos **primeiros 5 segundos** o visitante percebe porte (números + estrutura).
2. **Cobertura nacional** comunicada visualmente (mapa), não só por texto.
3. **Prova social de peso** (Roche/GSK/Abbott) visível sem rolar muito.
4. **Certificações/compliance** com destaque de selo de confiança.
5. **Cada público** (cliente, fornecedor, talento) encontra sua trilha em 1 clique.
6. Estética **sóbria e premium**, coerente com a paleta da marca.

---

## 7. Próximo passo
Seguir para `02-arquitetura-informacao.md` (personas + sitemap multi-público) e,
na sequência, os wireframes em `wireframes/`.
