const wmap = new WeakMap();
const map = new Map();

function myFunction() {
  const myObject = {};

  wmap.set(myObject, 'some metadata');
  map.set(myObject, 'some metadata');
  console.log(wmap.has(myObject));
}

myFunction()

// console.log(...map.values())














// function deleteMyObject() {
//   const myObj = map.keys().next().value
//   console.log(myObj)
//   map.delete(myObj)
// }

// deleteMyObject()

