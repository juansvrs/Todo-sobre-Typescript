import 'colors';
import { Estudiante } from "./modelos/Estudiante";

let alumno:Estudiante={
    nombre:'Juanchis',
    edad:21,
    promedio:4,
    deportista:false
}
//destructuring:
const{nombre,edad,promedio,deportista}=alumno;
console.log(`${nombre} tiene una edad de ${edad} y su promedio es de ${promedio}`.green);