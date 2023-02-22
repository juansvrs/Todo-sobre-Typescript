let numeros:number[]=[6,5,1,6,11,3];
console.log(numeros);

//Adicionar
numeros=[...numeros,29];
numeros.push(22);

console.log(numeros);
numeros.shift();//Elimina el priomer elemento

//Acciones con vectores.

//Map: como un for pero realiza
//la accion despues de la flecha para c/elemento
numeros.map(numero=>{console.log(numero)});
console.log("-----------------------");
numeros.map(numero=>{console.log(numero*numero)});


//Peticiones:En Heroes.ts


//Mas tipos de vectpres

let tupla:[String,number]=["hola",3];

enum tallas{pequeña=1,mediana=5, grande=20}
console.log(tallas.pequeña);

(async()=>{
    function delay(time:number){
        const promise=new Promise<string>((resolve)=>{
            setTimeout(()=>{
                resolve('soy una promesa muy lenta me demoro = que...')
                console.log('Inserte nombre del lentooo')
            },time);
        });
        return promise;
    }
    const rta=await delay(4000);
    console.log(rta);
})();
