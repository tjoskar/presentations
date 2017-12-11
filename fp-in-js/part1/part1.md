# Funktionell programmering i JavaScript, Part 1️⃣ ⚔️

---

# FP i JS, part 1

---

# Part 1?

---

# Ja, part 1!

---

# Ja, part 1!

* Part 1, Grunder (kul att du är här)
* Part 2, RxJs
* Part 3, Fortsättning med FP i JS och med React

---

![](../gif/excitment.gif)

# Hoppas ni är lika förväntansfulla som jag

---

# Grunderna i FP och varför ska jag bry mig?

---

# Uppmaning till er!

Säg till när:

* ni inte håller med.

---

# Uppmaning till er!

Säg till när:

* ni inte håller med.
* ni undrar något.

---

# Uppmaning till er!

Säg till när:

* ni inte håller med.
* ni undrar något.
* ni vill förtydliga något.

---

# Uppmaning till er!

Säg till när:

* ni inte håller med.
* ni undrar något.
* ni vill förtydliga något.
* ni vill.

---

![](../gif/no-idea.gif)

# Likt alla andra programmerare så vet jag inte vad jag sysslar med

---

# Vart var vi?

---

# Grunderna i fp

---

> Functional programming is the process of building software by composing **pure functions**, **avoiding shared state**, **mutable data**, and **side-effects**.

---

> Functional programming is **declarative** rather than **imperative**, and application
> state flows through pure functions.

---

## Nog med lombo jimbo, låt oss reda ut vissa begrepp

---

> PS. Jag kommer inte gå igenom vad en monad är eller functor är _(denna gång)_. Häng inte
> upp er på alla nya begrepp

---

## Pure function

1. Givet samma input, returnerar alltid samma output
2. Inga sidoeffekter

---

## Pure function

1. Givet samma input, returnerar alltid samma output
2. Inga sidoeffekter

```js
function double(x) {
  return x * 2;
}
```

---

```js
function impure(x) {
  return x + Math.random();
}
```

---

```js
function pure(x) {
  return x.value;
}
```

---

```js
function pure(x) {
  return x.value;
}

const y = {
  value: 5
};
const result = pure(y);
```

---

```js
function pure(x) { // Is it?
  return x.value;
}

const y = {
  get value() {
    return Math.random();
  }
};
const result = pure(y);
```

---

```js
function pure(fun) { // Is it?
  return fun();
}

function myFunFunction() {
  return 1;
}
const result = pure(fun);
```

---

```js
function pure(fun) { // Is it?
  return fun();
}

let a = 1;

function myFunFunction() {
  makeHttpRequest();
  a = 2;
  Math.random = () => 5; // I used a dice
  return 1;
}
const result = pure(fun);
```

---

## Bry dig inte om ifall din funktion är pure eller inte. Fokuserar istället på varför det är en bra ide

---

* Enkla att resonera om
* Enkla att testa

---

> Functional programming is the process of building software by composing **pure functions**, **avoiding shared state**, **mutable data**, and **side-effects**.

---

- pure functions
- side-effects
- mutable data <--
- avoiding shared state

---

## Mutable data & Shared State

---

```js
const nameList = [
  'Oskar Karlsson',
  'Jon Snow',
  'Daenerys Targaryen'
]

function uppercaseNames(names) {
  for (const index in names) {
    names[index] = names[index].toUpperCase()
  }
  return names
}

const uppercaseNameList = uppercaseNames(nameList)
```

---

# map, filter, reduce

---

# map

> Konverterar en array till en annan

```js
const names = ['Oskar Karlsson', 'Jon Snow', 'Daenerys Targaryen'];
const newList = names.map(name => name.toUpperCase());

names === newList; // false
```

---

# filter

> Filterar värden i en array och skapar en ny

```js
const names = ['Oskar Karlsson', 'Jon Snow', 'Daenerys Targaryen'];
const listOfOskar = names.filter(name => name.startsWith('Oskar'));

names; // [ 'Oskar Karlsson', 'Jon Snow', 'Daenerys Targaryen' ]

listOfOskar; // [ 'Oskar Karlsson' ]
```

---

# reduce

> Ackumulerar alla värden i en array till ett värde

```js
const names = ['Oskar Karlsson', 'Jon Snow', 'Daenerys Targaryen'];
const numberOfChars = names.reduce((counter, name) => counter + name.length, 0);

numberOfChars; // 40
```

---

# Är javascript ett fp språk?

---

# Korta svaret: Ja

---

# Långa svaret: Nej

---

Javascript saknar

* pipe operator
* currying / partial application
* monad

---

Javascript kan ej garantera pure functions

---

Javascript kan ej garantera immutable satte

---

```js
const myArr = [1];
myArr.concat(5); // [ 1, 5 ]
myArr; // [ 1 ]
```

---

```js
const myArr = [1];
myArr.push(5); // 2
myArr; // [ 1, 5 ]
```

---

![](../gif/what.gif)

---

# Ska jag tänka funktionellt?

---

# JA!

---

# PS.

* Det ligger förslag på en pipe operator
* Det ligger förslag på att få in currying native
* Det ligger förslag på flera andra operatorer som kommer förenkla vår vardag

https://github.com/tc39/proposals

---

# Låt oss ta ett exempel

---

```js
async function initComments() {
  // Get comments from server
  const url = 'https://mydomain.se/api/comments';
  const comments = await fetch(url);

  // Filter out deleted comments
  const newCommentList = [];
  for (const i in comments) {
    const comment = comments[i];
    if (comment.deleted) {
      continue;
    }
    const domComment = '<p>' + comment.text + '<p>';
    newCommentList.push(domComment);
  }

  // Insert the comment into the DOM
  const commentDom = newCommentList.join('');
  document.getElementById('comments').innerHTML = commentDom;
}
```

---

# To be continued

---

# Nästa vecka
