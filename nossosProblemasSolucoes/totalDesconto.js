const produtos = [
    { nome: "Camiseta", preco: 24.69 },
    { nome: "Calça", preco: 69.24 },
    { nome: "Tênis", preco: 89.90 },
  ];
  
  const desconto = 0.1; 
  
  const valorTotal = produtos.reduce(
    (total, produto) => total + produto.preco,
    0
  );
  
  const valorComDesconto = valorTotal * (1 - desconto);
  
  console.log(valorComDesconto);
  