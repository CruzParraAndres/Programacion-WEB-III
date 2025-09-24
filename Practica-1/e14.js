function obtenerTextoConCallback(callback) {
  let texto = "Texto listo"
  callback(texto)
}

// Ejemplo de uso
obtenerTextoConCallback(function(resultado) {
  console.log("Con callback:", resultado)
})
