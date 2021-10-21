const config = require('../config')
const store = require('../store')

const newGame = function () {
  return $.ajax({
    url: `${config.apiUrl}/games`,
    method: 'Post',
    headers: {
      Authorization: `Bearer ${store.user.token}`
    },
    data: {}
  })
}

const makePlay = function () {
  return $.ajax({
    url: `${config.apiUrl}/games/${store.game._id}`,
    method: 'Patch',
    headers: {
      Authorization: `Bearer ${store.user.token}`
    },
    data: {
      game: {
        cell: {
          index: store.index,
          value: `${store.currentPlayer}`
        },
        over: store.over
      }
    }
  })
}

module.exports = {
  newGame,
  makePlay
}
