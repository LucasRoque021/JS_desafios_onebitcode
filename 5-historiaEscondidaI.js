function Mostrarmaiorletra(txt){
  const arrayText = txt.toLowerCase().split('').sort();
  const biggestLetter = arrayText[arrayText.length - 1];
  return biggestLetter; 
}

console.log(Mostrarmaiorletra('lorem ipsum'));
console.log(Mostrarmaiorletra('Lucas Pereira Roque'));
console.log(Mostrarmaiorletra('Hello'));
console.log(Mostrarmaiorletra('May the force be with you'));
console.log(Mostrarmaiorletra('Its over nine thousand'));