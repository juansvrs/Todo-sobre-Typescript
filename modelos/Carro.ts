
export class Carro {
    private modelo:number;
    private marca:String;
    private cilindraje:number;
    constructor(modelo:number,marca:string,cilindraje:number){
        this.modelo=modelo;
        this.marca=marca;
        this.cilindraje=cilindraje;

    }

    public get Modelo(){
        return this.modelo;
    }

    public get Marca(){
        return this.marca;
    }

    public set Modelo(modelo:number){
        this.modelo=modelo;
    } 
    //Puedo agregar gets de cosas adicionales.

    public get Nuevo():boolean{
        return this.modelo==2023;
    }
}