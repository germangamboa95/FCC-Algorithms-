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

dropElements([1, 2, 3], function(n) {return n < 3; });
