// contains the ui events for game-related content

const store = require('../store')

const startNewGame = (responseData) => {
  // Store the game data for us to use in future API calls
  store.game = responseData.game

  $('#play-mat').show(500)
  $('#gameplay-feedback').text("Make your move! Show 'em what you got! X is up first!")
}

module.exports = {
  startNewGame
}
