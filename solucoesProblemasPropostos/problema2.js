function getRandomInt(min, max){
    min = Math.ceil(min);
    max = Math.ceil(max);
    return Math.floor(Math.random()* (max - min + 1)) + min;
}

function rolarD20(){
    return getRandomInt(1, 20);
}

var resultado = rolarD20();
console.log("O número rolado no D20 foi: " +resultado)