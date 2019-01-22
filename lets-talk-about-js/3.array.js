const myArray = [1, 2, 3];







// const myArray2 = { 0: 1, 1: 2, 2: 3 };


// for (let i of myArray) {
//   console.log(i)
// }





// console.log(myArray instanceof Array)
// console.log(myArray2 instanceof Array)






















// myArray2[Symbol.iterator] = function*() {
//   for (let t of Object.keys(this)) {
//     yield t
//   }
// }

// console.log(myArray[1])
// console.log(myArray2[2])

// myArray2.__proto__ = Array.prototype

// myArray2.push(1)

// myArray2[1] = 6

// myArray2.forEach(i => {
//   console.log(i);
// });





// console.log(myArray instanceof Array)
// console.log(myArray2 instanceof Array)

// Array.prototype[Symbol.hasInstance] = () => true;

// console.log(Array.isArray(myArray))
// console.log(Array.isArray(myArray2))

