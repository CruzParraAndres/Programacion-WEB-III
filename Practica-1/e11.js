function pasoUno() {
  return Promise.resolve("Paso 1 completado")
}

function pasoDos() {
  return Promise.resolve("Paso 2 completado")
}

function pasoTres() {
  return Promise.resolve("Paso 3 completado")
}

// Encadenamiento
pasoUno().then(function(mensaje1) {
  console.log(mensaje1)
  return pasoDos()
}).then(function(mensaje2) {
  console.log(mensaje2)
  return pasoTres()
}).then(function(mensaje3) {
  console.log(mensaje3)
  console.log("Todos los pasos completados")
})
