const events = require('./events.js')

const drawMessage = function () {
  $('#game-message').text('it is a draw')
}

const winMessage = function () {
  $('#game-message').text(`the winner is ${events.player}`)
}

module.exports = {
  drawMessage: drawMessage,
  winMessage: winMessage
}
