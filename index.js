require('dotenv').config();

const Discord = require('discord.io');
const logger = require('winston');

const cmd = require('./lib/cmd');
const auto = require('./lib/auto');

const prefix = '~!';

// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, {
    colorize: true
});

logger.level = 'debug';

// Initialize Discord Bot
const bot = new Discord.Client({
    token: process.env.DISCORD_TOKEN,
    autorun: true
});

bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});

bot.on('message', function (user, userID, channelID, message, evt) {

    if (message.substring(0, 2) === prefix) {
        cmd.messageByCmd(message);
    } else {
        auto.messageByAuto(message);
    }
});


function getMentionUser(args) {
    return String(args).replace('[', '').replace(']', '').trim();
}



function messageByAuto() {

}