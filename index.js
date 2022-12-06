import heroes from "./heroes.js";
//para poder importar modulos o en este caso archivos de afuera
//es necesesario instalar np init -y
// y configurar en el json "type":"module"

//pequeña prueba de funcionamiento
// const h = heroes

// console.log(h)

//Crear una array function asignada a una constante, con el nombre de getHeroeByIdAsync que reciba como parámetro el Id del héroe.

// const getHeroeByIdAsync = (id)=>{
//     //promesa
//     //const getHeroeById = (id) => heroes.find( (heroe) => heroe.id === id );

// }

// const getHeroeById = (id) => heroes.find( (heroe) => heroe.id === id );



//hasta acá pàrece andar, hay que ver si es lo que pide
const getHeroeByIdAsync = id=>{
    return new Promise((resolve, reject)=>{
        resolve(heroes.find( (heroe) => heroe.id === id))
        reject("No existe el heroes con ese id")
})};
getHeroeByIdAsync(1).then(res=>{
    console.log(res);
}).catch(error=>{
    console.log(error);
})