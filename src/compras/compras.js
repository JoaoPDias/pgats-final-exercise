const calcularTotal = (ferramentas, comprar) => {
  if (
    !ferramentas ||
    !comprar ||
    ferramentas.length === 0 ||
    comprar.length === 0
  ) {
    throw new Error("Ambas as listas precisam ter ao menos um item.");
  }
  let total = 0;
  ferramentas.forEach((ferramenta) => {
    if (comprar.includes(ferramenta.nome)) {
      total += ferramenta.preco;
    }
  });
  if (total === 0) {
    throw new Error("Nenhuma ferramenta desejada encontrada.");
  }
  return `O valor a pagar pelas ferramentas (${comprar.join(
    ", "
  )}) é R$ ${total.toFixed(2)}`;
};

module.exports = { calcularTotal };
