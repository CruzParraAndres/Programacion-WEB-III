function pasoUno() {
  return Promise.resolve("Paso 1 completado")
}

function pasoDos() {
  return Promise.resolve("Paso 2 completado")
}

function pasoTres() {
  return Promise.resolve("Paso 3 completado")
}
async function ejecutarPasos() {
  let mensaje1 = await pasoUno()
  console.log(mensaje1)

  let mensaje2 = await pasoDos()
  console.log(mensaje2)

  let mensaje3 = await pasoTres()
  console.log(mensaje3)

  console.log("Todos los pasos completados")
}

ejecutarPasos()
