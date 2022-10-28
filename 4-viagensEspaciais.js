function concatenarQuadrados(num){
  const text = num.toString();
  let concatenacao = '';

  for (let i = 0; i < text.length; i++) {
    const quadrado = (Number.parseInt(text[i]))**2;
    concatenacao+= quadrado.toString();
  }
  
  return Number.parseInt(concatenacao);
}

console.log(concatenarQuadrados(234));
console.log(concatenarQuadrados(3514));
console.log(concatenarQuadrados(94571));
console.log(concatenarQuadrados(24));
console.log(concatenarQuadrados(745821698));