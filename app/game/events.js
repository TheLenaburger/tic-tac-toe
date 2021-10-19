// location of event handlers for gameplay events

// const getFormFields = require('../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const store = require('../store')

const checkForWinner = (array) => {
  // define all winning combinations as nested arrays
  const winConditions = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]
  // check each winning array against the same positions on our boardState array
  // if there is a winning play, then run our onWinner event and end the game
  winConditions.forEach((inARow) => {
    if (inARow.every((space) => store.boardState[space] === store.currentPlayer)) {
      store.over = true
      $('.square').removeClass('bg-primary')
      $('.square').off()
      ui.onWinner()
    }
  })

  // This is our 'tie' catcher. if our array doesn't include any free spaces, and no winner was found
  if (!array.includes('')) {
    store.over = true
    $('.square').removeClass('bg-primary')
    $('.square').off()
    ui.onTie()
  }
}

const onNewGame = () => {
  // Make sure the event listeners for play areas are clear, and then active
  $('.square').off()
  $('.square').on('click', onPlay)
  $('.square').hover(onHover, onMouseOut)

  api.newGame()
    .then(ui.startNewGame)
    .catch(ui.onError)
}

// event handler for hovering a play space
const onHover = (event) => {
  const playedSpace = $(event.target)

  // Only execute code if space is empty, otherwise, do nothing
  if (playedSpace.text() === '') {
    playedSpace.addClass('bg-primary')
  }
}

const onMouseOut = (event) => {
  const playedSpace = $(event.target)
  playedSpace.removeClass('bg-primary')
}

// event handler for clicking a playable space
const onPlay = (event) => {
  const playedSpace = $(event.target)
  // Only execute code if the space is empty, otherwise, do nothing.
  if (playedSpace.text() === '') {
    // Store the cell-index and value of the played space for use in our PATCH api calls
    store.index = $(playedSpace).data('cell-index')
    store.boardState[store.index] = store.currentPlayer

    console.log(store.boardState)

    // Then check for a winner on the new boardState array
    checkForWinner(store.boardState)

    api.makePlay()
      .then(ui.playSuccessful(playedSpace))
      .catch(ui.onError)
  }
}

module.exports = {
  onNewGame,
  onHover,
  onPlay
}
