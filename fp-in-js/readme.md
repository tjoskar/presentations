# Functional programing in javascript

A 3 part series:

- Part 1: Basic concept: Pure function, shared state, mutable data, side-effects, map, filter, reduce etc.
- Part 2: Reactive programing (with RxJs)
- Part 3: Monad, Pipe, Compose
Workshop: https://github.com/tjoskar/react-fp-workshop

The presentations are in Swedish, but the code examples are in English

TLDR;

Write code like this:
```js
async function initComments() {
  compose(
    insertCommentsInDom,
    map(convertCommentToHtml),
    filter(isCommentNotDeleted)
  )(await getCommentsFromServer(fetch))
}

async function getCommentsFromServer(get = fetch) {
  return await get('https://mydomain.se/api/comments');
}

function isCommentNotDeleted(comment) {
  return !comment.deleted
}

function convertCommentToHtml(comment) {
  return '<p>' + comment.text + '</p>'
}

const insertCommentsInDom = insertCommentsInDocument(document)

function insertCommentsInDocument(document) {
  return comments => {
    document.getElementById('comments').innerHTML = comments.join(''); // What if there is no #comments? Ps. use a maybe monad
  }
}
```

not like this:
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

Do not write code like this:

```js
function getPrimaryLanguageUrlForUser(user) {
  if (user === null || user === undefined) {
    return languageUrls['en'];
  }
  if (user.meta && user.meta.languages && user.meta.languages.primary) {
    if (languageUrls[user.meta.languages.primary]) {
      return languageUrls[user.meta.languages.primary];
    } else {
      return languageUrls['en'];
    }
  }
  return languageUrls['en'];
}
```

write code more like this:

```ts
function getPrimaryLanguageUrlForUser(user, langUrls = languageUrls) {
  return Maybe(user)
    .chain(maybePath((u: User) => u.meta.languages.primary))
    .chain(primary => Maybe(langUrls[primary]))
    .getOrElse(langUrls['en'])
}
```

Check par1, part2 and part3 for more example 
