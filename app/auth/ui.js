const store = require('../store')

const signUpSuccess = function (responseData) {
  $('#user-feedback').text("You've successfully created a new account!")
  $('#user-feedback').addClass('text-success')
  $('form').trigger('reset')

  // $('#rules-text').show()
  // $('#game-board').show()

  // This will reset the feedback message div to blank after 5 sec
  setTimeout(() => {
    $('#user-feedback').removeClass()
    $('#user-feedback').text('')
  }, 5000)

  console.log(responseData)
}

const signUpFailure = function (error) {
  $('#user-feedback').text('There was an error getting you signed up. Please try again.')
  $('#user-feedback').addClass('text-danger')

  setTimeout(() => {
    $('#user-feedback').removeClass()
    $('#user-feedback').text('')
  }, 5000)

  console.error('The error is ', error)
}

const signInSuccess = function (responseData) {
  // on sign-in, we need to store user data for authorization purposes
  store.user = responseData.user

  $('#user-feedback').text("You've signed in successfully! Enjoy the game!")
  $('#user-feedback').addClass('text-success')
  $('form').trigger('reset')

  // changes in the ui: hiding signin/sign up buttons, showing the gameboard, rules, and sign out button
  $('#before-sign-in').hide(1000)
  $('#sign-out').show(1000)
  $('#rules-text').show(1000)
  $('#game-board').show(1000)

  setTimeout(() => {
    $('#user-feedback').removeClass()
    $('#user-feedback').text('')
  }, 5000)

  console.log(responseData)
}

const signInFailure = function (error) {
  $('#user-feedback').text('There was an error signing in. Please try again.')
  $('#user-feedback').addClass('text-danger')

  setTimeout(() => {
    $('#user-feedback').removeClass()
    $('#user-feedback').text('')
  }, 5000)

  console.error('The error is ', error)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure
}
