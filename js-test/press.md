# Test

---

# Test i JavaScript

---

### Hands on

---

### Vanliga ramverk

- AVA
- Jest
- Mocha
- Jasmin
- Tape

---

### Alla ramverk skiljer sig lite åt men alla har en sak gemensamt

---

### De kan anropa din kod och validera resultatet

---

## Jest

---

```js
function add(a, b) {
  return a + b
}
```

---

```js
test('2 + 2 is 4', () => {
  const result = add(2, 2)

  expect(result).toBe(4)
})
```

---

```js
it('should sum 2 and 2', () => {
  const result = add(2, 2)

  expect(result).toBe(4)
})
```

---

```js
test('2 + 2 is 4', () => {
  const result = add(2, 2)

  expect(result).toBe(4)
})
```

---

```js
describe('Math add', () => {

  test('2 + 2 is 4', () => {
    const result = add(2, 2)
    expect(result).toBe(4)
  })

  test('3 + 2 is 5', () => {
    const result = add(3, 2)
    expect(result).toBe(5)
  })

})

describe('Math sub', () => {

  test('2 - 2 is 4', () => {
    const result = sub(2, 2)
    expect(result).toBe(0)
  })

  test('3 - 2 is -1', () => {
    const result = sub(3, 2)
    expect(result).toBe(-1)
  })

})
```

---

### Vart körs koden?

---

### I nodejs

---

### Men jag skriver ju kod för FE

---

- Mocha
- Jasmin
- Tape

---

```html
<link rel="stylesheet" type="text/css" href="jasmine/lib/jasmine-3.2.1/jasmine.css">

<script type="text/javascript" src="jasmine/lib/jasmine-3.2.1/jasmine.js"></script>
<script type="text/javascript" src="jasmine/lib/jasmine-3.2.1/jasmine-html.js"></script>
<script type="text/javascript" src="jasmine/lib/jasmine-3.2.1/boot.js"></script>

<script type="text/javascript" src="add.js"></script>
<script type="text/javascript" src="__test__/add.test.js"></script>
```

---

### Jätte jobbigt 😭

---

### Karma ☺️

---

### Karma startar automatiskt en webbläsare åt dig och kör testerna 😀

---

### Du måste dock ha webbläsaren installerad

---

- Mac/Linux 💔 IE/Edge
- Windows/Linux 💔 Safari

---

- Kan endast ha en version av webbläsaren
- Processkrävande att köra flera olika webbläsare
- Tidskrävande
- Sårbart (nya versioner/nya apier/externa beroenden)

---

## V8 ❤️

---

## V8 finns i både Chrome och nodejs


---

## Nodejs är mycket snabbare och stabilare

---

## Låt oss prata test igen

---

```js
function add(a, b) {
  return a + a
}
```

---

```js
test('adds 2 + 2 to equal 4', () => {
  const result = sum(2, 2)
  
  expect(result).toBe(4)
});
```

---

```js
function averageAgeInClass(studentClass) {
  const sumAge = studentClass.pupils.reduce((total, pupil) => total + pupil.age, 0)
  const averageAge = sumAge / studentClass.pupils.length

  return averageAge
}
```

---

```ts
class StudentClass {
  name: string
  points: number
  pupils: Pupil[]
  startDate: Date
  endDate: Date
  ...
}
```

---

```ts
class Pupil {
  name: string
  age: number
  ...
}
```

---

```js
test('Calculate the average age in class', () => {
  // Arrange
  const pupil1 = new Pupil('Oskar', 29)
  const pupil2 = new Pupil('Hans', 28)
  const pupil2pupil2 = new Pupil('Mia', 30)
  const pupils = [ pupil1, pupil2, pupil2 ]
  const studentClass = new StudentClass()
  studentClass.pupils = pupils

  // Act
  const result = averageAgeInClass(studentClass)

  // Assert
  expect(result).toBe(29)
})
```

---

```js
test('Calculate the average age in class', () => {
  // Arrange
  const studentClass = {
    pupils: [{ age: 20 }, { age: 21 }, { age: 30 }]
  }

  // Act
  const result = averageAgeInClass(studentClass)

  // Assert
  expect(result).toBe(23.6)
})
```

---

```js
function daysUntilNextBirthday(birthday) {
  const birthdayCopy = new Date(birthday)
  const today = new Date()

  birthdayCopy.setFullYear(today.getFullYear())
  if (today > birthdayCopy) {
    birthdayCopy.setFullYear(today.getFullYear() + 1)
  }

  return Math.floor((birthdayCopy - today) / (1000*60*60*24))
}
```

---

```js
test('365 days to my next birthday', () => {
  // Arrange
  const myBirthday = new Date(1989, 8, 27)

  // Act
  const result = daysUntilNextBirthday(myBirthday)

  // Assert
  expect(result).toBe(365)
})
```

---

```js
const myDay1 = new Date()
// 2018-09-27

global.Date = function() {
  return new Date(2015, 4, 15)
}

const myDay2 = new Date()
// 2015-05-15
```

---

```js
global.Date = function() {
  return new Date(2018, 8, 27)
}

test('365 days to my next birthday', () => {
  // Arrange
  const myBirthday = new Date(1989, 8, 27)

  // Act
  const result = daysUntilNextBirthday(myBirthday)

  // Assert
  expect(result).toBe(365)
})
```

---

```js
function daysUntilNextBirthday(birthday) {
  const birthdayCopy = new Date(birthday)
  const today = new Date()
```

---

```js
function daysUntilNextBirthday(birthday, today) {
  const birthdayCopy = new Date(birthday)
```

---

```js
function daysUntilNextBirthday(birthday, today) {
  const birthdayCopy = new Date(birthday)

  birthdayCopy.setFullYear(today.getFullYear())
  if (today > birthdayCopy) {
    birthdayCopy.setFullYear(today.getFullYear() + 1)
  }

  return Math.floor((birthdayCopy - today) / (1000*60*60*24))
}
```

---

```js
test('365 days to my next birthday', () => {
  // Arrange
  const myBirthday = new Date(1989, 8, 27)
  const today = new Date(2019, 8, 27)

  // Act
  const result = daysUntilNextBirthday(myBirthday, today)

  // Assert
  expect(result).toBe(365)
})
```

---

# 🙌

---

```js
const numberOfDays = daysUntilNextBirthday(pupil.birthday)
```

---

```js
const numberOfDays = daysUntilNextBirthday(pupil.birthday, new Date()) // 😕
```

---

```js
function daysUntilNextBirthday(birthday, today = new Date()) {
```

---

```js
const numberOfDays = daysUntilNextBirthday(pupil.birthday) // 🙌
```

---

---

```js
import { database } from './database'

async function getUsersAverageAge() {
  const users = await database.select('age').from('users')
  const ageSum = users.reduce((total, user) => total + user.age, 0)
  const averageAge = ageSum / users.length

  return averageAge
}

```

---

```js
import { databas } from './database'

async function getUsersAverageAge() {
  const users = await database.select('age').from('users')
  const ageSum = users.reduce((total, user) => total + user.age, 0)
  const averageAge = ageSum / users.length

  return averageAge
}
```

---

```js
// database.js

import mysql from 'mysql'

export const connection = mysql.connect()
```

---

# Snapshot testing

---

```jsx
export function MyButton({ text }) {
  return <Button>{text}</Button>
}
```

---

```ts
import React from 'react';
import renderer from 'react-test-renderer';
import { MyButton } from '../my-button';

it('renders my button', () => {
  const tree = renderer
    .create(<MyButton text="Click me!" />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
```

---

## `__snapshots__`

---

```snap
// Jest Snapshot v1, https://goo.gl/fbAQLP

exports[`renders my button`] = `
<button>Click me!</button>
`;

```


