const ui = require('./ui')

let player = 'X'

const game = ['', '', '', '', '', '', '', '', '']

let over = false

const gameWinningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 2],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

const onBoxClick = function () {
  const targetBox = event.target

  const dataCellNum = $(targetBox).attr('data-cell-index')

  game[dataCellNum] = player

  $(targetBox).text(player)

  player = player === 'X' ? 'O' : 'X'

  console.log(game)

  gameWin()

  gameDraw()
}

const gameWin = function () {
  for (let i = 0; i < gameWinningCombos.length; i++) {
    const val1 = game[gameWinningCombos[0]]
    const val2 = game[gameWinningCombos[1]]
    const val3 = game[gameWinningCombos[2]]

    if (val1 === '' || val2 === '' || val3 === '') {

    } else if (val1 === val2 && val2 === val3) {
      ui.winMessage()
    }
  }
}

const gameDraw = function () {
  const emptyStringGame = game.some(element => element === '')
  if (emptyStringGame !== true) {
    ui.drawMessage()
    over = true
    console.log(over)
  }
}

module.exports = {
  onBoxClick: onBoxClick,
  gameDraw: gameDraw
}
