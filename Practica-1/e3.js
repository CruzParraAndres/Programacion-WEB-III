function miFuncion(arreglo) {
  let pares = []
  let impares = []

  for (let i = 0; i < arreglo.length; i = i + 1) {
    let numero = arreglo[i]
    if (numero % 2 === 0) {
      pares[pares.length] = numero
    } else {
      impares[impares.length] = numero
    }
  }

  let resultado = {
    pares: pares,
    impares: impares
  }

  return resultado
}

let obj = miFuncion([1, 2, 3, 4, 5])
console.log(obj) // { pares: [2,4], impares: [1,3,5] }