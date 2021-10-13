// location of event handlers for gameplay events

// const getFormFields = require('../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onNewGame = () => {
  api.newGame()
    .then(ui.startNewGame)
    .catch(ui.onError)
}

module.exports = {
  onNewGame
}
