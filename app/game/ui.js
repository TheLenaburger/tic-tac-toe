// contains the ui events for game-related content

const store = require('../store')

const startNewGame = (responseData) => {
  // Store the game data for us to use in future API calls
  // also reset the game's over state to false and current player to 'x'
  store.game = responseData.game
  store.boardState = ['', '', '', '', '', '', '', '', '']
  store.over = false
  store.currentPlayer = 'x'

  $('.square').text('')
  $('#play-mat').show(500)
  $('#gameplay-feedback').text("Make your move! Show 'em what you got! X is up first!")
}

const playSuccessful = (playedSpace) => {
  if (store.currentPlayer === 'x') {
    playedSpace.text('X').removeClass('bg-primary')
  } else {
    playedSpace.text('O').removeClass('bg-primary')
  }

  store.currentPlayer = store.currentPlayer === 'x' ? 'o' : 'x'

  if (store.over === false) {
    $('#gameplay-feedback').text(store.currentPlayer + ' is playing now!')
  }
}

const onWinner = () => {
  if (store.currentPlayer === 'x') {
    $('#gameplay-feedback').text('Wowzers, looks like X was the winner! Play again?')
  } else {
    $('#gameplay-feedback').text('Wa-hey! Against all odds, O is the winner! Play again?')
  }
}

const onTie = () => {
  $('#gameplay-feedback').text('Huh... Looks like it was a tie. Play again?')
}

module.exports = {
  startNewGame,
  playSuccessful,
  onWinner,
  onTie
}
