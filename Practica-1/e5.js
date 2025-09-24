function miFuncion(texto) {
  let nueva = ""
  for (let i = texto.length - 1; i >= 0; i = i - 1) {
    nueva = nueva + texto[i]
  }

  if (nueva === texto) {
    return true
  } else {
    return false
  }
}

// Ejemplo de uso
let band = miFuncion("oruro")
console.log(band) // true

band = miFuncion("hola")
console.log(band) // false
