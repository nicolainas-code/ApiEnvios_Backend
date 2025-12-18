 const readlineSync = require('readline-sync');
 const { generarNumeroAleatorio, verificarAdivinanza} = require('./adivinanza');

 const obtenerNumeroUsuario = () => {
    const input =  readlineSync.question('ingrese un numero:');
    return Number(input);
 };

 const juegoAdivinanza = () => {
    const  numeroSecreto = generarNumeroAleatorio();
    let numeroAdivinado = 0;

    console.log('bienvenido a Adivina el numero Secreto !');
    console.log('intenta adivinar el numero del 0 al 100.\n');
    // while : codigo a ejecutar mientras se cumple la condicion, osea miemntras sea  el numeroSecreto != numeroAdivinado
    while(numeroAdivinado !== numeroSecreto) {
        numeroAdivinado = obtenerNumeroUsuario();
        verificarAdivinanza(numeroSecreto,numeroAdivinado);
    }
 };

 juegoAdivinanza();
