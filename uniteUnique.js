// Initial solution
function uniteUnique(arr) {
  arr = Array.from(arguments);
  arr = arr.reduce((acc, cur) => {
    //cur = cur.sort( (a,b) => a - b);

    cur = cur.filter( item => acc.indexOf(item) == -1);
    return acc.concat(cur);
  }, []);
  return arr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
