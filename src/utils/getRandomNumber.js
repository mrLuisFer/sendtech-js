function getRandomNumber(legth = 5) {
  const randomNumber = Math.floor(Math.random() * legth)
  return randomNumber
}

module.exports = getRandomNumber
