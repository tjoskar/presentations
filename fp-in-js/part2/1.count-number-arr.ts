const myArr = Array.of('1', '5.2', '2', 'Oskar', '10')

const isNotNaN = obj => !isNaN(obj)
const add = (a, b) => a + b

const result = myArr
  .map(Number)
  .filter(isNotNaN)
  .reduce(add)

console.log(result)
