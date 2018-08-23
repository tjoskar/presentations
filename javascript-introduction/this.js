class Animal {
  constructor(name) {
    this.name = name
  }

  getName() {
    return this.name
  }

  sayHi() {
    return 'Hi!'
  }
}

const animal = new Animal('Måns')
