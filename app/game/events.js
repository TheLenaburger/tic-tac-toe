// location of event handlers for gameplay events

// const getFormFields = require('../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const store = require('../store')

const checkForWinner = () => {

}

const onNewGame = () => {
  api.newGame()
    .then(ui.startNewGame)
    .catch(ui.onError)
}

const onPlay = (event) => {
  const playedSpace = event.target

  // Store the cell-index and value of the played space for use in our PATCH api calls
  store.index = $(playedSpace).data('cell-index')
  store.play = store.currentPlayer
  $(playedSpace).data('play', store.play)

  api.makePlay()
    .then(ui.playSuccessful)
    .catch(ui.onError)
}

module.exports = {
  onNewGame,
  onPlay
}
