// Pretty straigh foward solution to the problem. I need to come back and clean up the code a little bit.


function fearNotLetter(str) {
  var prev = str.charCodeAt(0);


  for(var i = 1; i < str.length; i++){
    if((prev - str.charCodeAt(i) ) != -1)
      return String.fromCharCode(str.charCodeAt(i)-1);
    prev = str.charCodeAt(i);
      }


  return undefined;
}

fearNotLetter("abcdefghijklmnopqrstuvwxz");
