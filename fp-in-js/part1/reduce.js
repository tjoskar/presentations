const names = ['Oskar Karlsson', 'Jon Snow', 'Daenerys Targaryen'];

// Bad: uses a temp variable
let counter = 0
for (const name of names) {
  counter = counter + name.length
}

console.log(counter)

// Good:
const numberOfChars = names.reduce((counter, name) => counter + name.length, 0);

console.log(numberOfChars);
