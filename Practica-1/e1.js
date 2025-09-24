function miFuncion(texto) {
  let resultado = { a: 0, e: 0, i: 0, o: 0, u: 0 }
  let i = 0

  while (i < texto.length) {
    let letra = texto[i]
    if (letra === 'a') resultado.a++
    else if (letra === 'e') resultado.e++
    else if (letra === 'i') resultado.i++
    else if (letra === 'o') resultado.o++
    else if (letra === 'u') resultado.u++
    i++
  }

  return resultado
}

let obj = miFuncion("euforia")
console.log(obj) // { a: 1, e: 1, i: 1, o: 1, u: 1 }