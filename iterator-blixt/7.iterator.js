function rangeFromZero(stop) {
  return {
    [Symbol.iterator]: () => {
      let i = 0
      return {
        next: () => {
          if (i >= stop) {
            return { done: true }
          }
          return { done: false, value: i++ }
        }
      }
    }
  }
}

const range = rangeFromZero(6)

for (let value of range) {
  console.log(value)
}
