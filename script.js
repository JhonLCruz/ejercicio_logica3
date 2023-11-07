function calcularFactorial() {
  const numeroInput = document.getElementById("numeroInput").value;
  const resultadoDiv = document.getElementById("resultado");
  
  if (!numeroInput || isNaN(numeroInput) || !Number.isInteger(parseFloat(numeroInput)) || parseInt(numeroInput) < 0) {
    resultadoDiv.textContent = "El valor ingresado no es un número válido o es negativo. Por favor, intente de nuevo.";
    return;
  }

  const numero = parseInt(numeroInput);
  let factorial = 1;

  for (let i = 1; i <= numero; i++) {
    factorial *= i;
  }

  resultadoDiv.textContent = `El factorial de ${numero} es: ${factorial}`;
}
