// Initial solution
function findElement(arr, func) {
 return  arr.find(item => func(item));
}

findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; });
