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
