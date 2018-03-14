/** this is my first solution using a flag variable **/
function dropElements(arr, func) {
  const flag = false;
  arr = arr.filter(item => {
    if(flag){
      return true;
    }
    flag = func(item);
    return flag;

  });
  return arr;
}
/** this is my second solution just using a while loop. arr.length is important to avoid an endless loop if the array passed
happens to be empty. I guess this one is not a fully pure function since it alters the original array. **/
function dropElements(arr, func) {
  while(arr.length > 0 && !func(arr[0])) {
    arr.shift();
  }
  return arr;
}


dropElements([1, 2, 3], function(n) {return n < 3; });
