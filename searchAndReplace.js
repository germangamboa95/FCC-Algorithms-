/*
  This is my initial solution! 

*/
function myReplace(str, before, after){

  var x = before.charCodeAt(0);
  if (x < 96){
    after = after.split('');
    after[0] = after[0].toUpperCase();
    after = after.join('');
    console.log(after);
  }
  var arr = str.split(' ');
  var index = arr.indexOf(before);
  arr.splice(index, 1, after);
  str = arr.join(' ');
  //console.log(x);
  return str;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
