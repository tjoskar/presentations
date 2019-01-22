console.log('Hello')

setTimeout(() => console.log('Hello from timeout'))

// Promise
//   .resolve()
//   .then(() => console.log('Hello from promise'))
//   .then(() => console.log('Hello from promise2'))

// new Promise(r => r()).then(() => console.log('Hello from promise3'))

// const p = new Promise(reslove => {
//   console.log('Hello from inner promise')
//   reslove()
// })
// p.then(() => console.log('Hello from promise4'))

console.log('End')
