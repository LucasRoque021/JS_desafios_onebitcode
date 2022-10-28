function invertWord(word){
  return word.split('').reverse().join('');
}

function invert(str){
  return str.toLowerCase().split(' ').map(invertWord).join(' ');
}

console.log(invert('Lorem ipsum dolore sec avanti'));
console.log(invert('This is an apple'));
console.log(invert('May the force be with you'));
console.log(invert('It is over nine thousand'));
