import heroes from "./heroes.js";
//para poder importar modulos o en este caso archivos de afuera
//es necesesario instalar np init -y
// y configurar en el json "type":"module"

//pequeña prueba de funcionamiento
// const h = heroes

// console.log(h)


//Promises/promesas :
const getHeroeByIdAsync = id=>{
    return new Promise((resolve, reject)=>{
        let h=heroes.find( (heroe) => heroe.id === id)
        if (h){ 
            resolve("El heroe con id: "+ h.id+" "+"cuyo nombre es: " +h.name + " existe")   
        }else{
            reject("No existe el heroes con el id: "+id)
        }    
})};
getHeroeByIdAsync(1).then(res=>{
    console.log(res);
}).catch(error=>{
    console.log(error);
})
//La Fetch API 
//'https://api.github.com/users/manishmshiva'
fetch('https://api.github.com/users/manishmshiva')
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(error => console.error(error));
  //último ejercicio
const getName = async () => {
    try{
        const result = await fetch('https://api.github.com/users/manishmshiva');
        const data = await result.json();
        return data;
    }
    catch (error) {
        console.log('reject catched')
        console.log(error)
    } 
 }
 getName().then(text => {
    console.log(text.name);
  }).catch(error=>{
    console.log(error);
});