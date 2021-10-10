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

module.exports = {
  newGame
}
