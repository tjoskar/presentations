// Helper methos
// Mocking fetch and create a fake DOM
function fetch() {
  return Promise.resolve([{
    deleted: false,
    text: 'This is a comment'
  }, {
    deleted: false,
    text: 'This is an other comment'
  }, {
    deleted: true,
    text: 'This is a deleted comment'
  }])
}

const document = {
  getElementById() {
    return {
      set innerHTML(commentDom) {
        const html = commentDom.split('</p><p>').join('\n').replace('<p>', '').replace('</p>', '')
        console.log(html)
      }
    }
  }
}

const map = fun => arr => Array.prototype.map.call(arr, fun)
const filter = fun => arr => Array.prototype.filter.call(arr, fun)

const pipe = (...ops) => ops.reduce((a, b) => arg => b(a(arg)));
const compose = (...ops) => ops.reduceRight((a, b) => arg => b(a(arg)));
// helper section end 


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
    document.getElementById('comments').innerHTML = comments.join(''); // What if there is no #comments? Ps. use a monad
  }
}

initComments()

// Instead of:

// async function initComments() {
//   // Get comments from server
//   const url = 'https://mydomain.se/api/comments';
//   const comments = await fetch(url);

//   // Filter out deleted comments
//   const newCommentList = [];
//   for (const i in comments) {
//     const comment = comments[i];
//     if (comment.deleted) {
//       continue;
//     }
//     const domComment = '<p>' + comment.text + '<p>';
//     newCommentList.push(domComment);
//   }

//   // Insert the comment into the DOM
//   const commentDom = newCommentList.join('');
//   document.getElementById('comments').innerHTML = commentDom;
// }
