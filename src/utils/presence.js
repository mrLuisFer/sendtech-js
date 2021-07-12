const config = require('../../config')

/**
 * Establece el estado del bot (cambia cada 5s)
 * @param {Client} client
 * @returns {void} void
 */
function presence(client) {
  setInterval(function () {
    const statuses = config.statusBOT
    const status = Math.floor(Math.random() * statuses.length)
    const dstatus = statuses[status]
    client.user.setPresence({
      status: 'online',
      activity: {
        name: `${dstatus}`,
        type: 'WATCHING',
      },
    })
  }, 5000)
}

module.exports = presence
