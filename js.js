
let ingreseEdad=Number(prompt('Ingrese su edad por favor '));
if(ingreseEdad>17){
    alert('¡Felicidades¡   Puedes acceder a nuestra pagina' )
}else{
    alert('lo sentimos usted es menor de edad');
 
}

//suma de producos  elegidos por el cliente//

let producto1 = {
    nombre: 'pantalon',
    precio: 40
}

let producto2 = {
    nombre: 'camisa',
    precio: 30
}
let producto3 = {
    nombre: 'blusa',
    precio: 40
}
let producto4 = {
    nombre: 'zapato',
    precio: 80
}
let producto5 = {
    nombre: 'polos',
    precio: 15
}
let productos = [producto1, producto2, producto3, producto4, producto5];
console.log(productos);

let total = 0
for (let i = 0; i < productos.length; i++) {
    total=total+productos[i].precio;
}
document.write ('La cantidad a pagar es de '+total+ 'soles');






