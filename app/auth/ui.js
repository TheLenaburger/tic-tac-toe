const store = require('../store')

const onError = function (error) {
  $('#user-feedback').text('There was an error handling that request. Please try again.')
  $('#user-feedback').addClass('text-danger')

  setTimeout(() => {
    $('#user-feedback').removeClass('text-danger')
    $('#user-feedback').text('')
  }, 5000)

  console.error('The error is ', error)
}

const signInSuccess = function (responseData) {
  // on sign-in, we need to store user data for authorization purposes, and we'll overwrite the credentials we stored, if automatically signing in after creating new user
  store.user = responseData.user
  store.credentials = ''

  $('#user-feedback').text("You've signed in successfully! Enjoy the game!")
  $('#user-feedback').addClass('text-success')
  $('form').trigger('reset')

  // changes in the ui: hiding signin/sign up buttons, showing the gameboard, rules, and sign out button
  $('#before-sign-in').hide(1000)
  $('#after-sign-in').show(1000)
  $('#new-game').show(1000)
  $('#gameplay-feedback').show(1000)
  $('#sign-out').show(1000)
  $('#scoreboard').show(1000)

  setTimeout(() => {
    $('#user-feedback').removeClass('text-success')
    $('#user-feedback').text('')
  }, 5000)

  console.log(responseData)
}

const signOutSuccess = function () {
  $('#user-feedback').text("You've successfully signed out; see ya next time!")
  $('#user-feedback').addClass('text-success')
  $('form').trigger('reset')

  $('#before-sign-in').show(1000)
  $('#sign-out').hide(1000)
  $('#new-game').hide(1000)
  $('#play-mat').hide(1000)
  $('#gameplay-feedback').text('').hide(1000)
  $('#xScore').text(0)
  $('#oScore').text(0)
  $('#catScore').text(0)
  $('#scoreboard').hide(1000)

  setTimeout(() => {
    $('#user-feedback').removeClass('text-success')
    $('#user-feedback').text('')
  }, 5000)
}

module.exports = {
  onError,
  signInSuccess,
  signOutSuccess
}
