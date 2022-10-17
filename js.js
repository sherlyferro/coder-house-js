let Edad = parseInt(prompt('Ingrese su edad por favor'));

if (Edad > 17) {
    alert('Felicidades usted puede acceder a ver los tours');
} else {
    alert('Lo sentimos usted es menor de edad');
}


// par la condicional if //
let pedirPresupuesto = prompt('Ingrese su presupuesto para el tour');

if (pedirPresupuesto>= 1000) {
    console.log( 'Con' +pedirPresupuesto+'  usted puede acceder al tours Machupicchu')
} else if ((pedirPresupuesto < 1000) && (pedirPresupuesto > 801)){
    console.log('Con' +pedirPresupuesto+'  usted puede acceder al tours2 de santa teresa')
}else if ((pedirPresupuesto <= 699)&&  (pedirPresupuesto > 500)){
    console.log( 'Con' +pedirPresupuesto+'  usted puede acceder al tours3 de Quillabamba')
}else if((pedirPresupuesto > 800)&&(pedirPresupuesto >=700)){
    console.log( 'Con' +pedirPresupuesto+'  usted puede acceder al tours4  de la laguna HUmaytay')
}else{
    console.log( 'Lo sentimos   con ' + pedirPresupuesto +' soles  no tenemos tour disponibles')
}
//para lo funcion for ,mostrar todos los tours//

let tour$1 = {
    nombre: 'Machupicchu ',
    costo: 1000,
}
let tour$2 = {
    nombre: 'Santa Teresa',
    costo: 800,
}
let tour$3 = {
    nombre: 'Quillabamba',
    costo: 500,
}
let tour$4 = {
    nombre: 'Laguna Humaytay',
    costo: 700,
}

let tours = [tour$1, tour$2, tour$3, tour$4];

for (let index = 0; index < tours.length; index++) {
    const mostrartours = tours[index];
    console.log(mostrartours);
}


let pedircomboTour = prompt('¿  Desea ver la oferta de los  4 tours ?').toLowerCase();

function sumarCostodetodoslosTour() {
    let sumadeTour = (tour$1.costo + tour$2.costo + tour$3.costo+ tour$4.costo) - ((tour$1.costo + tour$2.costo + tour$3.costo + tour$4.costo) * 0.1)
    return sumadeTour
}

if(pedircomboTour=='si'){
    console.log("El precion total -10% de los 4  tours es : ", sumarCostodetodoslosTour())
}














