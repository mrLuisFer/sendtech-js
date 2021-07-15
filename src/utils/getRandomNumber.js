/**
 * @function getRandomNumber
 * @param {number} legth
 * @returns number
 */
const getRandomNumber = (legth = 5) => {
  return Math.floor(Math.random() * legth)
}

module.export = getRandomNumber
