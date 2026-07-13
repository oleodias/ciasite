/* ==== Ciamed · base de notícias ====
 * Para publicar uma nova notícia, basta adicionar um objeto no topo da lista.
 * A listagem e o artigo são gerados automaticamente a partir daqui.
 * Campos: id (slug da URL), titulo, categoria, data (ISO), dataLabel,
 *         resumo, imagem, legenda, corpo (HTML).
 */
window.NOTICIAS = [
  {
    id: "visita-comite-gestao-farmacia-unimed-rs",
    titulo:
      "Ciamed recebe o Comitê Estadual de Gestão de Farmácia da Unimed Federação RS",
    categoria: "Institucional",
    data: "2023-12-05",
    dataLabel: "5 de dezembro de 2023",
    resumo:
      "No 1º Ciclo de Visitas Técnicas para Avaliação de Fornecedores, a matriz da Ciamed, em Encantado (RS), recebeu o Comitê Estadual de Gestão de Farmácia da Unimed Federação RS.",
    imagem: "../../assets/noticias/2023-12-visita-unimed.jpg",
    legenda:
      "Comitê da Unimed Federação RS ao lado das farmacêuticas da matriz da Ciamed, em Encantado (RS).",
    corpo: `
      <p>Na manhã do dia 5 de dezembro de 2023, a matriz da Ciamed, em Encantado (RS), recebeu a visita do Comitê Estadual de Gestão de Farmácia da Unimed Federação RS, no âmbito do <strong>1º Ciclo de Visitas Técnicas para Avaliação de Fornecedores</strong>.</p>
      <p>O Comitê foi representado pelas farmacêuticas Mayara Becker Delwing, da Unimed VTRP, e Carla Suris, da Farmácia da Unimed Central RS. A comitiva foi recepcionada pelas farmacêuticas da matriz da Ciamed, Suélen de Oliveira dos Santos e Kerlin Conzatti Casanova.</p>
      <p>Conduzidas junto a fornecedores estratégicos, as visitas técnicas têm como principais objetivos qualificar e verificar o desempenho técnico dos parceiros — um processo que fortalece a confiança e a segurança em toda a cadeia de distribuição de medicamentos.</p>
      <p class="pull">O que importa é a VIDA. Cuidar das pessoas pode mudar o mundo.</p>
    `,
  },
];
