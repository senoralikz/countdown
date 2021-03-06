'use strict'

const authEvents = require('./events.js')

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('.authenticated').hide()

  $('#sign-up').on('submit', authEvents.onSignUp)

  $('#sign-in').on('submit', authEvents.onSignIn)
})
