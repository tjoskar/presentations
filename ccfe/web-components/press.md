build-lists: true

# Web Component

---

## Fyra specifikationer

- Custom Elements
- Shadow DOM
- ES Modules
- HTML Template

--- 

## HTML Template

```html
<template>
  <div class="image-warpper">
    <img class="movie-poster" src="https://bit.ly/2NJfrte">
    <a class="title" href="http://www.imdb.com/title/tt0468569/">The Dark Knight</a>
  </div>
</template>
```

---

## HTML Template

```js
const myTemplate = document.getElementsByTagName("template")[0];
const root = this.attachShadow({ mode: 'open' })
root.appendChild(myTemplate.content.cloneNode(true))
```

---

## Länk kommer i slack
