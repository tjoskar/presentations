function rangeFromZero(stop) {
  let i = 0
  return () => {
    if (i >= stop) {
      return { done: true }
    }
    return { done: false, value: i++ }
  }
}

const range = rangeFromZero(6)

for (let next = range(); next.done === false; next = range()) {
  console.log(next.value)
}
