function verificaFibonacci(numero) {
  let anterior = 0;
  let atual = 1;

  if (numero === 0 || numero === 1) {
    return true;
  }

  while (atual <= numero) {
    let proximo = anterior + atual;
    if (proximo === numero) {
      return true;
    }
    anterior = atual;
    atual = proximo;
  }

  return false;
}

const numeroInformado = 233;
if (verificaFibonacci(numeroInformado)) {
  console.log(numeroInformado + " pertence à sequência de Fibonacci.");
} else {
  console.log(numeroInformado + " não pertence à sequência de Fibonacci.");
}
