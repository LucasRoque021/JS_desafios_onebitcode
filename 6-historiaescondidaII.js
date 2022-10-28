function inverterPalavras (txt){
  const textArray = txt.split(' ');

  const invertedWordArray = textArray.map((word) => {
    let invertedWord = '';
    for (let i = 0; i < word.length; i++) {
      invertedWord += word[word.length - 1 - i];      
    }
    return invertedWord.toLowerCase();
  });
  return invertedWordArray.join(' ');
}

console.log(inverterPalavras('May the force be with you'));
console.log(inverterPalavras('This is an apple'));