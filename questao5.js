function inverterString(stringInicial) {
  let stringInvertida = "";
  for (let i = stringInicial.length - 1; i >= 0; i--) {
    stringInvertida += stringInicial[i];
  }
  return stringInvertida;
}

const stringInicial = "Target Sistemas";
const stringInvertida = inverterString(stringInicial);
console.log(stringInvertida); 
