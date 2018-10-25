function rangeFromZero(stop) {
  let i = 0
  return () => {
    return i++
  }
}

const range = rangeFromZero(6)

for (let i = range(); i < 10; i = range()) {
  console.log(i)
}
