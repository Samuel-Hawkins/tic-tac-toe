const store = require('./../store')

const drawMessage = function () {
  $('#game-message').text('it is a draw')
}

const winMessage = function (player) {
  $('#game-message').text(`The winner is ${player}`)
}

const newGameMessage = function (response) {
  store.game = response.game
  $('.box').html('')
  $('#game-message').html('')
  $('.container').show()
}

module.exports = {
  drawMessage: drawMessage,
  winMessage: winMessage,
  newGameMessage: newGameMessage
}
