
function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  var start = str.length - target.length;
  var newStr = str.substr(start, target.length);

  if(newStr === target)
     return true;
    else
      return false;


}

confirmEnding("Open sesame", "same");
