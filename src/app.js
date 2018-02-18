require('dotenv').config();

import Discord from 'discord.io';
import logger from 'winston';
import cmd from './lib/cmd';
import auto from './lib/auto';

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

bot.on('ready', (evt) => {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');

    bot.setPresence({
        idle_since: Date.now(),
        game: {
            name: '~! | To use',
        }
    });
});

bot.on('message', (user, userID, channelID, message, evt) => {

    logger.info(`${user}(${userID}): ${message}`);

    const param = {
        user,
        userID,
        channelID,
        message,
        evt
    };

    if (message.substring(0, 2) === prefix) {
        cmd.send(bot, param);
    } else {
        auto.send(bot, param);
    }

});