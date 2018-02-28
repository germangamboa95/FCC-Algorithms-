function rot13(str){ // LBH QVQ VG!
  str.toUpperCase();
  var arr = [];
  for(var i = 0; i < str.length; i++){
    var x = str.charCodeAt(i);

    if(x < 65){
      arr.push(String.fromCharCode(x));
    } else if(x < 78){
      arr.push(String.fromCharCode(x+13));
    } else{
      arr.push(String.fromCharCode(x - 13));
    }
  }
  str = arr.join('');
  return str;
 }

// Change the inputs below to test
console.log(rot13("SERR PBQR PNZC"));
