function miFuncion(arreglo) {
  let mayor = arreglo[0]
  let menor = arreglo[0]

  for (let i = 1; i < arreglo.length; i = i + 1) {
    let numero = arreglo[i]
    if (numero > mayor) {
      mayor = numero
    }
    if (numero < menor) {
      menor = numero
    }
  }

  let resultado = {
    mayor: mayor,
    menor: menor
  }

  return resultado
}

let obj = miFuncion([3, 1, 5, 4, 2])
console.log(obj) // { mayor: 5, menor: 1 }