function mensajeExito() {
  return new Promise(function(resolver) {
    setTimeout(function() {
      resolver("Éxito: la operación se completó")
    }, 3000)
  })
}

// Ejemplo de uso
mensajeExito().then(function(mensaje) {
  console.log(mensaje) // Éxito: la operación se completó
})