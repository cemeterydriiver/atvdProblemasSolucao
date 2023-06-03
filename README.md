# 🖳 Problemas e soluções
> Grupo: Ash, Vitor e Kauã.

**Scripts para a atividade proposta em sala de aula na qual, criamos problemas que podem ser resolvidos com os conteúdos aprendidos em java script, em seguida, o grupo sorteado terá que resolver nossos problemas também utilizando java script.**

## ↪ Primeiro problema:
> Uma biblioteca ao cadastrar um novo livro preenche os seguintes parâmetros: título, autor, gênero e descrição. Frequentemente o bibliotecário responsável tem que procurar livros através de determinados gêneros, como por exemplo, ao procurar algum livro de ficção, o sistema deve mostrar todos os livros de ficção (junto aos parâmetros definidos anteriormente). Tal bibliotecário pediu sua ajuda para fazer esse script que busca os livros cadastrados através do gênero, como você resolveria esse problema?

**Solução**
```js
function Livro(titulo, autor, genero, descricao) {
  this.titulo = titulo;
  this.autor = autor;
  this.genero = genero;
  this.descricao = descricao;
}

const livro1 = new Livro(
  "Percy Jackson e o ladrão de raios",
  "Rick Riordan",
  "Fantasia",
  "O adolescente Percy Jackson descobre que os deuses gregos e as criaturas mitológicas são reais. Ele é filho de uma divindade e logo entra para um acampamento de treinamento para semideuses."
);
const livro2 = new Livro(
  "Corte de asas e ruína",
  "Sarah J. Maas",
  "Fantasia",
  "Em Corte de asas e ruína, a guerra se aproxima, um conflito que promete devastar Prythian. Em meio à Corte Primaveril, em um perigoso jogo de intrigas e mentiras, a Grã-Senhora da Corte Noturna esconde seu laço de parceria e sua verdadeira lealdade. Tamlin está fazendo acordos com o invasor, Jurian recuperou suas forças e as rainhas humanas prometem condescender aos desejos de Hybern em troca de imortalidade. Enquanto isso, Feyre e seus amigos precisam aprender em quais Grão-Senhores confiar e procurar aliados nos lugares mais improváveis. Porém, a Quebradora da Maldição ainda tem uma ou duas cartas na manga antes que sua ilha queime."
);
const livro3 = new Livro(
  "Harry Potter e a criança amaldiçoada",
  "J.K Rowling",
  "Fantasia",
  ""
);
const livro4 = new Livro(
  "O pequeno príncipe",
  "Antonie De Saint-Exupéry",
  "Literatura infantil",
  "Le Petit Prince é uma novela do escritor, aviador aristocrata francês Antoine de Saint-Exupéry, originalmente publicada em inglês e francês em abril de 1943 nos Estados Unidos. Durante a Segunda Guerra Mundial, Saint-Exupéry foi exilado para a América do Norte. "
);
const livro5 = new Livro(
  "O Lorax",
  "Dr. Seuss",
  "Literatura infantil",
  "The Lorax é um livro infantil do escritor americano Dr. Seuss. Publicado em 1971, trata-se uma fábula com mensagem de ambientalismo, em que se explora o tema da ganância de grandes corporativistas que ignoram os danos causados ao meio ambiente. Assim como na maioria dos livros de Dr."
);

const generos = ["Fantasia", "Literatura infantil"];

function mostrarLivrosPorGenero(genero) {
  console.log(`Livros do gênero "${genero}":`);
  const livrosGenero = [livro1, livro2, livro3, livro4, livro5].filter(
    (Livro) => Livro.genero === genero
  );
  livrosGenero.forEach((Livro) =>
    console.log(`- ${Livro.titulo} (${Livro.autor}) (${Livro.descricao})`)
  );
}

mostrarLivrosPorGenero("Fantasia");
```

## ↪ Segundo problema:
> Durante as aulas, diversos alunos acabam tendo dúvidas (em sua maioria extensas) e pedidos para ir ao banheiro, os professores acabam se esquecendo das ordens dos pedidos e tendem a se confundir, atrapalhando na organização da aula. Crie um script que facilite e agilize essa organização de pedidos de dúvidas e banheiro.

**Solução**
```js
const d1 = ".palú"
const d2 = ".ash"
const d3 = ".kauã"
const duvidao = d1+"\n"+d2+"\n"+d3

const b1 = ".ryan"
const b2 = ".william"
const b3 = ".bernardo"
const banheirao = b1+"\n"+b2+"\n"+b3

console.log("-=Dúvidas=- \n"+duvidao)
console.log("-=Banheiro=- \n"+banheirao)
```


## ↪ Terceiro problema:
>  Muitas das vezes quando vamos ao mercado, esquecemos quais itens e suas quantidades devemos comprar. Crie um script para resolver tal problema.

**Solução**
```js
const Item1 = "ABACATE"
const Item2 = "CACETINHO"
const Item3 = "QUEIJO"
const Item4 = "BANANA"
const Item5 = "AVEIA"
console.log("-==LISTA DE COMPRAS==- \n-"+Item1+"\n-"+Item2+"\n-"+Item3+"\n-"+Item4+"\n-"+Item5) 
```
## ↪ Quarto problema:
> Facilite o cálculo que um professor deve fazer ao realizar a média de um conjunto de notas dos alunos.

**Solução*
```js
const nota1 = 7
const nota2 = 4
const nota3 = 8
const nota4 = 8

const calcularMedia = (nota1 + nota2 + nota3 + nota4)/4

console.log("A Média do Aluno foi " + calcularMedia)
```


## ↪ Quinto problema:
> Ao adicionar desconto em algum item ou compra, as lojas e estabelecimentos possuem dificuldades ao calcular o valor total.

**Solução**
```js
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
  ```

