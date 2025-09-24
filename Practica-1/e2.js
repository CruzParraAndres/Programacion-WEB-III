function miFuncion(x) {
  let invertido = ""
  let i = x.length - 1

  while (i >= 0) {
    invertido = invertido + x[i]
    i = i - 1
  }

  return invertido
}

let cad = miFuncion("abcd")
console.log(cad) // dcba