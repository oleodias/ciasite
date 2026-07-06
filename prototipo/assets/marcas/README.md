# Marcas parceiras

Esta pasta guarda os **logos das marcas/indústrias parceiras** que aparecem na
faixa rolante ("logos que andam para o lado") dos Moldes 06 e 07.

## Como adicionar uma marca

1. Coloque o arquivo do logo aqui dentro, de preferência em **SVG** (vetor, fica
   nítido em qualquer tamanho) ou **PNG com fundo transparente**.
   - Altura ideal: **~120 px**; largura livre.
   - Nome do arquivo sem espaços nem acentos: `nome-da-marca.svg`
     (ex.: `eurofarma.svg`, `ems.png`).
2. Abra o arquivo do molde (`prototipo/molde-06-imersao/index.html` e/ou
   `prototipo/molde-07-cortina/index.html`).
3. Localize o trecho `const MARCAS = [` (perto do fim do arquivo) e adicione/edite
   a lista com os nomes dos arquivos. Exemplo:

   ```js
   const MARCAS = [
     'eurofarma.svg',
     'ems.png',
     'ache.svg',
     // ...
   ];
   ```

   A faixa duplica os logos automaticamente para o efeito de rolagem infinita —
   não precisa repetir nada. Lembre de atualizar a lista nos **três** moldes
   (05, 06 e 07).

## Marcas atuais

`cliente-roche.png`, `cliente-abbott.png`, `cliente-gsk.png`,
`cliente-mucambo.png`, `cliente-supermax.png` (200×100 originais, reamostrados
para 400×200). Para trocar, basta substituir o arquivo mantendo o nome.

## Dica de contraste

A faixa exibe cada logo dentro de um "cartão" branco arredondado, então logos
coloridos ou escuros aparecem bem sobre o fundo petróleo do site.
