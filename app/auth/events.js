// location of all event handlers for authorization events

const getFormFields = require('../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onSignUp = (event) => {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)

  api.signUp(formData)
    .then(ui.signUpSuccess)
    .catch(ui.onError)
}

const onSignIn = (event) => {
  event.preventDefault()

  const formData = getFormFields(event.target)

  api.signIn(formData)
    .then(ui.signInSuccess)
    .catch(ui.onError)
}

const onSignOut = () => {
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.onError)
}

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut
}
