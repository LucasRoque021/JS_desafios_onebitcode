
function organizarValores(multiArr){
  const arr = multiArr.join(',').split(',');
  /*for (let i = 0; i < arr.length; i++) {
    arr[i] = Number.parseInt(arr[i]);
  }*/
  const array = arr.map((element) => element = Number.parseInt(element));
  return array.sort();
}

const array = [[1,5,3],[2,6,4],[3,7,5]];
console.log(organizarValores(array));
console.log(organizarValores([[],[],[],[]]));
console.log(organizarValores([[1,3],[4,8],[7,5],[2,6]]));