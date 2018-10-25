

async function run() {
  for await (let episode of getEpisodes()) {
    console.log(episode.name)
  }
}



















async function* getEpisodes() {
  let page = 0
  while(true) {
    const response = await getFromServer(`https://some-url.com/show/12/episodes?page=${page}`)
    for (let episode of response.episodes) {
      yield episode
    }
    if (response.nextPage) {
      page = response.nextPage
    } else {
      return
    }
  }
}





let c = -1
function getFromServer() {
  c = c + 1
  if (c === 0) {
    return new Promise(r => {
      setTimeout(r, 100, {
        nextPage: 1,
        episodes: [{
          name: 'Winter Is Coming'
        }, {
          name: 'The Kingsroad'
        }]
      })
    })
  }
  if (c === 1) {
    return new Promise(r => {
      setTimeout(r, 1000, {
        nextPage: 2,
        episodes: [{
          name: 'Lord Snow'
        }, {
          name: 'Cripples, Bastards, and Broken Things'
        }]
      })
    })
  }
  if (c === 2) {
    return new Promise(r => {
      setTimeout(r, 3000, {
        nextPage: null,
        episodes: [{
          name: 'The Wolf and the Lion'
        }, {
          name: 'A Golden Crown'
        }]
      })
    })
  }
}

run()
