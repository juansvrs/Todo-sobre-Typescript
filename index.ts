import 'colors';

let saludo:String='gol del nacional, hola b';
let numero:number=0;
let falso:boolean=true;

console.log(saludo +' Andresito'.green);


//Ciclos y asignacion de var
let m:number=20;
console.log(`${typeof m}`.red);
while (m>1){
    console.log(`${m}`.blue);
    m/=2;
}

//Tipo de dato o otro tipo de dato, reemplaza any
let dato:number | string;
dato='Upamecano';
console.log(dato);
dato=10;
console.log(`${dato} soy un numero`.cyan );

