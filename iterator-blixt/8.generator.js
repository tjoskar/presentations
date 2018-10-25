function* rangeFromZero(stop) {
  let i = 0
  while (i <= stop) {
    yield i++
  }
}

for (let value of rangeFromZero(6)) {
  console.log(value)
}
