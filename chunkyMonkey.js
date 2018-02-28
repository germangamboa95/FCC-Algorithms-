
function chunkArrayInGroups(arr, size) {
  var bigArr = [];
  var mini;
  for(var i = 0; i < arr.length ; i+= size){
    mini = arr.slice(i, size+ i);
    bigArr.push(mini);

  }
   console.log(bigArr);
  return bigArr;

}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
