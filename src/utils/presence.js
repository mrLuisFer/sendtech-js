const config = require('../../config')

/**
 * Establece el estado del bot (cambia cada 5s)
 * @param {Client} client
 * @returns {void} void
 */
function presence(client) {
  setInterval(() => {
    const botStatus = config.statusBOT
    const status = Math.floor(Math.random() * botStatus.length)
    const statusName = botStatus[status]

    client.user.setPresence({
      status: 'online',
      activity: {
        name: `${statusName}`,
        type: 'WATCHING',
      },
    })
  }, 5000)
}

module.exports = presence
