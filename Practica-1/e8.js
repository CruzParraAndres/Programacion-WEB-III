function esperarDosSegundos(callback) {
  setTimeout(function() {
    callback()
  }, 2000)
}

// Ejemplo de uso
esperarDosSegundos(function() {
  console.log("Ejecutado después de 2 segundos")
})