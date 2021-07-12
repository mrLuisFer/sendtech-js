require("dotenv").config();

const token = process.env.DISCORD_BOT_TOKEN;

module.exports = {
  prefix: "!",
  BOT_TOKEN: token,
  statusBOT: ["mi prefix !", "Talleres", "a SendTech", "Tiktoks"],
};
