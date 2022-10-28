function concatenarQuadrados(num){
  const digitsArray = num.toString().split('');
 
  const squaredArray = digitsArray.map((digit)=>Number.parseInt(digit)**2).join('');
  //metodo join(): junta os elements de uma array numa string.
  
  return Number(squaredArray);
}

console.log(concatenarQuadrados(234));
console.log(concatenarQuadrados(3514));
console.log(concatenarQuadrados(94571));
console.log(concatenarQuadrados(24));
console.log(concatenarQuadrados(745821698));