const prompt = require('prompt-sync')();

/*
1. Conversión de temperatura
Una temperatura en grados Celsius puede ser convertida a una temperatura en Fahrenheit de acuerdo a la siguiente fórmula:
F = (9/5) * C + 32
*/

let celsius, f;
celsius = parseInt(prompt('ingrese la temperatura celsius actual de su ciudad:'));
f = (9/5) * celsius + 32;
console.log('Su temperatura celsius en Fahrenheit es:', f);

/*
2. Sistema de facturación – Alquiler de automotor
Una empresa de alquiler de automotor sin conductor desea un programa para emitir las facturas a sus clientes, teniendo en cuenta los siguientes puntos:
•	a) Cantidad fija de $5000 si no se superan los 300 kilómetros.
•	b) Si la distancia recorrida es mayor de 300 km y menor o igual a 1000 km: $5000 + kilometraje .
•	c) Si la distancia es mayor a 1000 km: $5000 + kilometraje ($30 por km para distancias entre 300 y 1000 km,
 y $20 por km para distancias mayores a 1000 km).
*/

const base = 5000;
let kilometraje, valor;
kilometraje = parseInt(prompt('ingrese su kilometraje:'));

if (kilometraje < 300){
    valor = base
}
else if (kilometraje > 300 && kilometraje <= 1000){
    valor = base + kilometraje * 30;
}
else if (kilometraje > 1000){
    valor = base + kilometraje * 20;
}
console.log('Su factura es:', valor);

/*
3. Número primo o compuesto
Escribir un programa que determine si un número ingresado es primo o compuesto.
Un número es primo si no tiene más divisores que 1 y él mismo.
*/

let numero, divisor_2, divisor_3
numero = parseInt(prompt('ingrese su numero:'));
divisor_2 = numero % 2
divisor_3 = numero % 3
if (divisor_2 != 0 && divisor_3 != 0){
    console.log('su numero es primo')
}
else {
    console.log('su numero es compuesto')
}
