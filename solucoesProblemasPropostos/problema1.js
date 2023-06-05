var participantes = ["ash", "vitinho", "kaua", "felipe", "bernardo", "pedro", "daniel", "verona", "davi", "leo" ]

function getRandomInt(min, max){
    min = Math.ceil(min);
    max = Math.ceil(max);
    return Math.floor(Math.random()*(max - min + 1)) + min;
}

var random = getRandomInt(0, participantes.length -1);
var nomeSorteado= participantes[random];

console.log("O participante sorteado é: " + nomeSorteado);