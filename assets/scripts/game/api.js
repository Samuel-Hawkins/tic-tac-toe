const config = require('./../config')
const store = require('./../store')

const newGame = function () {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: { Authorization: 'Bearer ' + store.user.token },
    data: {}
  })
}

const updateGame = function (data) {
  return $.ajax({
    url: config.apiUrl + '/games/' + store.game._id,
    method: 'PATCH',
    headers: { Authorization: 'Bearer ' + store.user.token },
    data: data
  })
}

module.exports = {
  newGame: newGame,
  updateGame: updateGame
}
