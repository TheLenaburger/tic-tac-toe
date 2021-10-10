// contains the ui events for game-related content

const startNewGame = () => {
  $('#play-mat').show(500)
  $('#gameplay-feedback').text("Make your move! Show 'em what you got!")
}

module.exports = {
  startNewGame
}
