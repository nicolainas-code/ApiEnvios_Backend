const generarNumeroAleatorio = () => {
    return Math.floor(Math.random() * 100) + 1;
};
const verificarAdivinanza = (numeroSecreto, numeroAdivinado) => {
    if(numeroAdivinado === numeroSecreto) {
        console.log('felicitaxciones ! adivinaste el num secreto!');
    }else if(numeroAdivinado > numeroSecreto) {
        console.log('el num ingresado es mayor al numero secreto, sigue intentando !');
    }else {
        console.log('el numero ingresado es menor al numero secreto, sigue intentando !');
    }
};

module.exports = {
    generarNumeroAleatorio,
    verificarAdivinanza
};