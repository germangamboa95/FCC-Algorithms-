// My solution using the every() method on the array object. 
function truthCheck(collection, pre) {
  return collection.every(item => {
      return item[pre];
    }
  );
}

truthCheck([{"name": "Pete", "onBoat": true},
            {"name": "Repeat", "onBoat": true},
            {"name": "FastFoward", "onBoat": null}],
           "onBoat");
