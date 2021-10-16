const $ = require('jquery')(require('jsdom').jsdom().parentWindow)

const store = {
  currentPlayer: 'x',
  boardState: [
    $('#topLeft').data('play'),
    $('#topMid').data('play'),
    $('#topRight').data('play'),
    $('#midLeft').data('play'),
    $('#mid').data('play'),
    $('#midRight').data('play'),
    $('#botLeft').data('play'),
    $('#botMid').data('play'),
    $('#botRight').data('play')
  ],
  over: false
}
console.log(store.boardState)

module.exports = store
