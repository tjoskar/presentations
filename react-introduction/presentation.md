# React

---

# Fördelar med SPA

- Rendera endast delar av sidan en gång
- Skickar inte onödig vy-data (html, css, js)
- En entry point
- Kan ladda in applikationen asynkront

---

# Nackdelar med SPA

- Sökmotoroptimering
- Kan ta tid för första meningsfulla rendering
- Är mer beroende av klienten (olika runtimes)

---

# Traditionella js ramverk (jQuery)

- View (allt)

---

# Traditionella js ramverk (backbone, knockout)

- Model (Data)
- Controller (Logik)
- ModelView (Skräddarsydd data)
- View (Template (HTML))

---

# React

> Kan vi göra det annorlunda?
- Facebook

---

# JavaScript

```js
const myButtonText = 'Press me!'

function createButton(text) {
  return '<button>' + text + '</button>'
}

createApp(createButton(myButtonText))

```
#### https://jsbin.com/pavusih/1/edit?html,js,output

---

# React

> f(d) = v

---

# React

```js
const myButtonText = 'Press me!'

function MyButton(props) {
  return React.createElement('button', undefined, props.text)
}

ReactDOM.render(
  React.createElement(MyButton, { text: myButtonText }),
  document.getElementById('app')
);
```

---

# React

```js
const myButtonText = 'Press me!'

function onButtonPress() {
  console.log('Pressing Me!')
}

function MyButton(props) {
  return React.createElement('button', { onClick: onButtonPress }, props.text)
}

ReactDOM.render(
  React.createElement(MyButton, { text: myButtonText }),
  document.getElementById('app')
)
```

#### https://jsbin.com/qadebam/edit?js,console,output

---

# React - JSX

```js
function MyButton(props) {
  return React.createElement('button', { onClick: onButtonPress }, props.text)
}
```

---

# React - JSX

```js
function MyButton(props) {
  return <button onClick={onButtonPress}>{props.text}</button>
}
```

---

# React - JSX

```js
function MyButton(props) {
  return React.createElement('button', { onClick: onButtonPress }, props.text)
}
```

```js
function MyButton(props) {
  return <button onClick={onButtonPress}>{props.text}</button>
}
```

---

# React - JSX

```js
function MyButton(props) {
  return React.createElement('button', { onClick: onButtonPress }, props.text)
}
```

```js
function MyButton(props) {
  return <button onClick={onButtonPress}>{props.text}</button>
}
```

---

# React - Class

```js
import React from 'react'

class MyButton extends React.Component {

  onButtonPress = () => {
    console.log('Pressing Me!')
  }

  render() {
    return <button onClick={this.onButtonPress}>{this.props.text}</button>
  }

}
```

---

# React - Component Lifecycle

```js
import React from 'react'

class MyButton extends React.Component {

  constructor() {}

  componentDidMount() {}

  componentWillUnmount() {}

  onButtonPress = () => {
    console.log('Pressing Me!')
  }

  render() {
    return <button onClick={this.onButtonPress}>{this.props.text}</button>
  }

}
```
#### https://reactjs.org/docs/react-component.html#the-component-lifecycle

---

# React – Virtual DOM

1. Exekvera alla vy funktioner
2. Skapa en intern representation av DOM trädet
3. Jämför med vad som är renderat nu
4. Rendera om de noder som krävs

---

# React - state 

https://jsbin.com/liguseh/1/edit?js,output

---

# React - Redux / MobX

---

![](https://media.giphy.com/media/TqRkEhK7Dnv6U/giphy.gif)
