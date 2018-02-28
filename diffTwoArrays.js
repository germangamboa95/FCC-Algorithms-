/*
  I wanted to get by on just using higher order functions since they make the code easier to reason about. 
*/

function diffArray(arr1, arr2) {
  var newArr = [];
  var partOne,
      partTwo = [];

  partOne = arr1.filter(item => arr2.indexOf(item) === -1);
  partTwo = arr2.filter(item => arr1.indexOf(item) === -1);
  newArr = partOne.concat(partTwo);

  // Same, same; but different.
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
