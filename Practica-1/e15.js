function obtenerMensajePromesa() {
  return new Promise(function(resolver) {
    let texto = "Mensaje listo"
    resolver(texto)
  })
}

// Ejemplo de uso
obtenerMensajePromesa().then(function(resultado) {
  console.log("Con promesa:", resultado)
})
