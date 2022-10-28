
function generateChunk(number) {  
  if(number>1){
    return 'chunk-'+ generateChunk(number-1);
  }else if(number === 1){
    return 'chunk';
  }else{
    return '';
  }
  
  return resp;
}

console.log(generateChunk(20));
console.log(generateChunk(0));
console.log(generateChunk(5));
console.log(generateChunk(1));
console.log(generateChunk(-5));