//This is my solution. I guess a better method would be to use reduce. 
function largestOfFour(arr) {
  let four = [];
  arr.forEach(item => {
    item = item.sort((a,b) => b-a);
    four.push(item[0]);
  });
  return four;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
