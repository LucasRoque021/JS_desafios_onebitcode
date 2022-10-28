function inverterArray(lista){
  const invertedArray = [];

  for (let i = 1; i <= lista.length; i++) {
    invertedArray[i-1] = lista[lista.length - i];
    
  }
  return invertedArray;
}

console.log(inverterArray([1,2,3,45,90]));
console.log(inverterArray(['Oh','hi','Mark']));
console.log(inverterArray(['Oh',false,3,true,'hi']));