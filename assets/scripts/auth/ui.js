'use strict'

const store = require('./../store')

const onSignInButton = function () {
  $('#sign-in-form').show()
}

const onSignUpButton = function () {
  $('#sign-up-form').show()
}

const changePassForm = function () {
  $('#pass-change-form').show()
}

const onSignUpSuccess = function (response) {
  $('#message').text('Thanks for signing up ' + response.user.email)
  $('#sign-up-form').trigger('reset')
}

const onSignUpFailure = function () {
  $('#message').text('Sign up Failed, Try again')
}

const onSignInSuccess = function (response) {
  store.user = response.user

  $('#user-name').text('Welcome ' + response.user.email)
  $('#sign-in-form').trigger('reset')
  $('#sign-up-form').hide()
  $('#sign-in-form').hide()
  $('#sign-out').show()
  $('#change').show()
  $('#sign-in-button').hide()
  $('#sign-up-button').hide()
}

const onSignInFailure = function () {
  $('#sign-in-message').text('Sign in Failed, Try again')
}

const onPassChangeSuccess = function (response) {
  $('#pass-change-message').text('Successful Password Reset')
  $('#pass-change-form').trigger('reset')
}

const onPassChangeFailure = function () {
  $('#message').text('Password Reset Failed, Try again')
}

const onSignOutSuccess = function (response) {
  $('#message').text('Successfully Signed Out')
  $('#pass-change-form').hide()
  $('#sign-out').hide()
  $('#sign-up-form').show()
  $('#sign-in-form').show()
}

const onSignOutFailure = function () {
  $('#message').text('Sign Out Failed, Try again')
}

module.exports = {
  onSignUpSuccess: onSignUpSuccess,
  onSignUpFailure: onSignUpFailure,
  onSignInSuccess: onSignInSuccess,
  onSignInFailure: onSignInFailure,
  onPassChangeSuccess: onPassChangeSuccess,
  onPassChangeFailure: onPassChangeFailure,
  onSignOutSuccess: onSignOutSuccess,
  onSignOutFailure: onSignOutFailure,
  onSignInButton: onSignInButton,
  onSignUpButton: onSignUpButton,
  changePassForm: changePassForm
}
