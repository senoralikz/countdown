'use strict'

const store = require('./store')
// const api = require('./api')

const onSignUpSuccess = function (response) {
  // $('#message').html('<p>Signed Up Successfully!</p>')
  $('#successFailureMessage').html('<div class="card text-white bg-success"><div class="card-header">Success</div><div class="card-body"><p class="card-text">Successfully Signed Up.</p></div></div>')
  $('#successFailureMessage').fadeIn()
  $('#successFailureMessage').delay(2000).fadeOut('slow')
  $('#sign-up').trigger('reset')
}

const onSignInSuccess = function (response) {
  // $('#message').html('<p>Signed In Successfully!</p>')
  // $('#successFailureMessage').html('<div class="alert alert-success" role="alert">Signed In Successfully!</div>')
  $('#successFailureMessage').html('<div class="card text-white bg-success"><div class="card-header">Success</div><div class="card-body"><p class="card-text">Successfully Signed In!</p></div></div>')
  $('#successFailureMessage').fadeIn()
  $('#successFailureMessage').delay(2000).fadeOut('slow')
  $('#sign-in').trigger('reset')

  store.user = response.user

  $('.unauthenticated').hide()
  $('.authenticated').show()
}

module.exports = {
  onSignUpSuccess,
  onSignInSuccess
}
