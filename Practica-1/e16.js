async function mostrarDato() {
  let resultado = await obtenerDato()
  console.log("Con async/await:", resultado)
}

mostrarDato()
