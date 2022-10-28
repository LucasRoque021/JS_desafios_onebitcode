
function calculaMedia(...numbers) {
 // let sum = 0;

  /*numbers.forEach(element => {   modo mais simples
    sum += element;
  });*/

  const sum = numbers.reduce((accum, num) => accum + num, 0);

  return sum/numbers.length;

}

console.log(calculaMedia(10, 5))
console.log(calculaMedia(10, 9, 9, 10))