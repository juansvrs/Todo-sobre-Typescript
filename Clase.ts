import { Carro } from "./modelos/Carro";

let carro1:Carro=new Carro(2022,'Toyota',2800);

console.log(carro1);
//Para usar el set:
carro1.Modelo=2023;
console.log(carro1);

//para uso del get

let marquita=carro1.Marca;
console.log(marquita);

//Uso de las otras cositas raras

console.log(carro1.Nuevo);