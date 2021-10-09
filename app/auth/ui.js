// const store = require('../store')

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

module.exports = {
  signUpSuccess,
  signUpFailure
}
