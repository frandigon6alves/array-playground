// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex

function cortaPorAqui(corteIzq, corteDer, array) {
    return;
}

/**
 * Utiliza de manera combinada y adecuadamente el método .findIndex y .slice para 'cortar' un array entre dos elementos. Para simplificar, el primer animal siempre está 'a la izquierda' del segundo animal por el que queremos cortar
 */

let animales = ["Elefante", "Tigre", "Leopardo", "Ñu", "Pantera"];

console.log(cortaPorAqui("Elefante", "Leopardo", animales)); // ["Elefante", "Tigre", "Leopardo"]
console.log(cortaPorAqui("Tigre", "Ñu", animales)); // ["Tigre", "Leopardo", "Ñu"]
console.log(cortaPorAqui("Tigre", "Tigre", animales)); // ["Tigre"]

function cortaPorAqui(corteIzq, corteDer, array) {
    const idxIzq = array.findIndex((element) => element === corteIzq);
    const idxDer = array.findIndex((element) => element === corteDer);
    
    if (idxIzq === -1 || idxDer === -1) {
      return [];
    }
  
    const start = Math.min(idxIzq, idxDer);
    const end = Math.max(idxIzq, idxDer);
  
    return array.slice(start, end + 1);
  }
  