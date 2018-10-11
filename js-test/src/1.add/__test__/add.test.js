const add = require('../add')

test('2 + 2 is 4', () => {
  const result = add(2, 2)

  expect(result).toBe(4)
})
