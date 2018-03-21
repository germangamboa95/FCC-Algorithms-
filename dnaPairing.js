/**
  My basic solution using a switch and the reduce funtion. A better solution would be creating a map then using the map function.
**/



function pairElement(str) {
  var temp = str.split('');
  temp = temp.reduce((pairs,solo) => {
    switch(solo){
      case 'A':
        solo = [solo,'T'];
        break;
      case 'T':
        solo = [solo,'A'];
        break;
      case 'C':
        solo = [solo,'G'];
        break;
      case 'G':
        solo = [solo,'C'];
        break;
    }
    pairs.push(solo);

    return pairs;
  },[]);
  console.log(temp);

  return temp;
}

pairElement("GCG");
