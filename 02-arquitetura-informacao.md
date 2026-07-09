# ETAPA 5 — Arquitetura da Informação

### Projeto: Novo Site Institucional Ciamed

> Personas, jornada, sitemap multi-público e justificativas. Base direta dos wireframes.

---

## 1. Personas (públicos de peso equilibrado)

### P1 — Comprador do Setor Público / Licitações

- **Quem:** pregoeiro, comprador hospitalar público, gestor de saúde municipal/estadual.
- **Objetivo:** confirmar que a Ciamed é fornecedora **idônea, certificada e capaz**
  de cumprir contratos e prazos.
- **O que procura:** certificações, regularidade, cobertura, capacidade logística,
  canal de licitações, ordem judicial.
- **Gatilhos de confiança:** ANVISA/Boas Práticas, GAFO, compliance, histórico, escala.

### P2 — Comprador do Setor Privado (hospitais, clínicas, operadoras, varejo)

- **Quem:** comprador de hospital/clínica, gestor de operadora, farmacêutico de varejo.
- **Objetivo:** fornecedor **confiável, rápido (24h) e com mix completo** (oncologia,
  reumatologia, oftalmologia).
- **O que procura:** linhas/produtos, especialidades, cotação, prazo de entrega,
  área do cliente, solicitar catálogo.
- **Gatilhos:** agilidade, portfólio, atendimento especializado, clientes de peso.

### P3 — Indústria / Fornecedor (laboratórios)

- **Quem:** gerente comercial de laboratório/indústria farmacêutica.
- **Objetivo:** avaliar a Ciamed como **canal de distribuição confiável** para seus
  produtos.
- **O que procura:** estrutura, cobertura nacional, boas práticas de armazenagem,
  capacidade operacional, parceiros atuais.
- **Gatilhos:** profissionalismo, escala, rastreabilidade, reputação (Roche/GSK/Abbott).

### P4 — Candidato / Talento

- **Quem:** profissional buscando carreira no setor de saúde/distribuição.
- **Objetivo:** entender propósito, cultura e oportunidades.
- **O que procura:** página de carreira, cadastro de currículo, propósito da empresa.
- **Gatilhos:** propósito ("respeitando o que é mais importante, a vida"), solidez,
  crescimento.

---

## 2. Jornada do usuário (resumida)

```
Descoberta → Reconhecimento ("isto é para mim") → Confiança (provas) → Ação (CTA)
```

| Persona      | Entrada típica     | Reconhecimento                   | Prova decisiva            | Ação (CTA)                        |
| ------------ | ------------------ | -------------------------------- | ------------------------- | --------------------------------- |
| P1 Público   | Busca/licitação    | Bloco "Setor Público"            | Certificações + cobertura | Canal de Licitações               |
| P2 Privado   | Busca/indicação    | "Setor Privado" / Especialidades | 24h + clientes de peso    | Cotação / Área do Cliente         |
| P3 Indústria | LinkedIn/indicação | "Por que Ciamed" / Estrutura     | Mapa + boas práticas      | Seja parceiro / Contato comercial |
| P4 Talento   | Vaga/indicação     | "Carreira"                       | Propósito + cultura       | Cadastre-se                       |

---

## 3. Estrutura de navegação (sitemap)

> Mantém a IA do designer, com refinamentos para legibilidade e trilhas por público.

```
HOME

A EMPRESA
 ├─ Sobre / História
 ├─ Unidades (com mapa nacional)
 ├─ Boas Práticas
 ├─ Certificação GAFO
 ├─ Compliance
 ├─ Programa CEAMEDY
 └─ Responsabilidade Socioambiental

ATUAÇÃO
 ├─ Setor Público          (trilha P1)
 ├─ Setor Privado          (trilha P2)
 └─ Por que Ciamed         (diferenciais — relevante p/ P3)

LINHAS / PRODUTOS
 └─ Oncologia · Reumatologia · Oftalmologia · (catálogo)

CARREIRA                    (trilha P4)

CONTATO

[ÁREA DE ACESSO]  → Operadora · Cliente · Colaborador

FOOTER: Acesso rápido (Licitações, Logística, Comercial, 2ª via boleto, Cotações,
        Suporte, Ordem Judicial) · Central de atendimento · Redes · Políticas
```

### Decisões e justificativas

- **"Atuação" como hub de trilhas (P1/P2/P3):** cada público chega ao seu conteúdo em
  1 clique — atende o requisito de "público equilibrado".
- **Acesso Rápido movido para faixa utilitária/footer:** mantém as funções úteis sem
  deixar o site com cara de "portal", liberando a Home para a narrativa institucional.
- **Mapa nacional dentro de Unidades e na Home:** transforma cobertura em prova visual.
- **Áreas de login mantidas** (Operadora/Cliente/Colaborador): sinal de maturidade
  e relacionamento contínuo.

---

## 4. Páginas — objetivo, público, conteúdo, CTA

| Página                                | Objetivo                              | Público    | Conteúdo-chave                                                                       | CTA principal                 |
| ------------------------------------- | ------------------------------------- | ---------- | ------------------------------------------------------------------------------------ | ----------------------------- |
| **Home**                              | Comunicar porte + direcionar públicos | Todos      | Hero, números, por que Ciamed, especialidades, unidades/mapa, prova social, carreira | Falar com comercial / trilhas |
| **A Empresa**                         | Construir autoridade institucional    | P1, P3     | História, propósito, missão/visão/valores, estrutura                                 | Conhecer estrutura/unidades   |
| **Unidades**                          | Provar cobertura/capacidade           | P1, P2, P3 | Mapa + 5 unidades, contatos, 24h                                                     | Consultar região / contato    |
| **Boas Práticas / GAFO / Compliance** | Prova de idoneidade                   | P1, P3     | Certificações, processos, ética                                                      | Baixar/ver certificados       |
| **CEAMEDY / Responsab. Socioamb.**    | Reforçar propósito e ESG              | Todos      | Programas e impacto                                                                  | Saiba mais                    |
| **Setor Público**                     | Converter licitações                  | P1         | Como atendemos licitações, regularidade                                              | Canal de Licitações           |
| **Setor Privado**                     | Converter clientes privados           | P2         | Atendimento, especialidades, agilidade                                               | Solicitar cotação             |
| **Por que Ciamed**                    | Diferenciação competitiva             | P2, P3     | Pilares de valor, números, provas                                                    | Seja parceiro / contato       |
| **Linhas / Produtos**                 | Mostrar portfólio                     | P2         | Oncologia, Reumatologia, Oftalmologia, catálogo                                      | Solicitar catálogo / cotação  |
| **Carreira**                          | Atrair talentos                       | P4         | Propósito, cultura, vagas                                                            | Cadastre-se                   |
| **Contato**                           | Centralizar canais                    | Todos      | Unidades, central, formulário                                                        | Enviar mensagem               |

---

## 5. Tom de comunicação

- **Sóbrio, seguro e humano.** Autoridade sem arrogância.
- Mantém o toque humano da marca: _"respeitando o que é mais importante, a vida."_
- Frases curtas e afirmativas nas seções de prova ("Distribuímos para todo o país").

---

## 6. Próximo passo

Wireframes detalhados em `wireframes/` — começando pela Home (`wireframes/home.md`).
