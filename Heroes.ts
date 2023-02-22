import { Heroe } from "./modelos/Heroe";
let heroes:Heroe[]=[
    {
        id:1,
        name:'Gepetto',
        poderes:["Empatia","Chiquitolina"],
        fuerza:1,
        especie:'Humano'

    },
    {
        id:2,
        name:'Saitama',
        poderes:["Superfuerza","Calvicie","Poggers"],
        fuerza:999999999,
        especie:'Humano'

    },

    {
        id:3,
        name:'Goku',
        poderes:["Superfuerza","Volar","Kamehame ha!","Henki Dama","Teleport"],
        fuerza:12391124,
        especie:'Saiyajin'

    },

    {
        id:4,
        name:'Petro',
        poderes:["Comunista"],
        fuerza:-155,
        especie:'Humano'

    },

    
]


function ordenarPoderes(a:Heroe,b:Heroe):number{
    return a.poderes.length-b.poderes.length;

}

function ordenarFuerza(a:Heroe,b:Heroe):number{
    return a.fuerza-b.fuerza;

}


//heroes.sort(ordenarPoderes);
heroes.sort(ordenarFuerza);

//Iterar sobre mis heroes...
heroes.map((hero:Heroe)=>{
    const{name,fuerza,especie}=hero;
    console.log(`El superheroe ${name} tiene fuerza de
      ${fuerza} y su especie es ${especie}`);

})

//Filters: Traer si se cumple tal cosa.
//Heroes que tengan menos de 5 de fuerza:

heroes.filter((hero:Heroe)=>(hero.fuerza<5)).map((hero:Heroe)=>{
    const{name,fuerza,especie}=hero;
    console.log(`El superheroe ${name} tiene fuerza chiquita de de
      ${fuerza} y su especie es ${especie}`);

})

//find devuelve uno, devuelve el primero: clase 8 feb de 2023


console.log(heroes);
