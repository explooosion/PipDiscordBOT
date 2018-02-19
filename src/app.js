require('dotenv').config();

import Discord from 'discord.io';
import logger from 'winston';
import cmd from './lib/cmd';
import auto from './lib/auto';
import greet from './lib/greet';

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

bot.on('ready', (event) => {
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

bot.on('presence', (user, userID, status, game, event) => {

    logger.info(`${user}(${userID}): ${status}`);

    const param = {
        user,
        userID,
        status,
        game,
        event
    };
    // greet.send(bot, param);
});

bot.on('message', (user, userID, channelID, message, event) => {

    logger.info(`${channelID}-${user}(${userID}): ${message}`);

    const param = {
        user,
        userID,
        channelID,
        message,
        event
    };

    if (message.substring(0, 2) === prefix) {
        cmd.send(bot, param);
    } else {
        auto.send(bot, param);
    }

});