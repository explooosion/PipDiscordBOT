import fs from 'fs';

module.exports.send = (bot, param) => {

    const {
        user,
        userID,
        channelID,
        message,
        event
    } = param;

    let args = message.substring(2).split(' ');
    const cmd = args[0];

    args = args.splice(1);

    switch (cmd) {
        case 'ping':
            bot.sendMessage({
                to: channelID,
                message: 'Pong!'
            });
            break;

        case '#0':
            bot.sendMessage({
                to: channelID,
                message: '4大GG!'
            });
            break;

        case 'hi':
            bot.sendMessage({
                to: channelID,
                message: `hi ${getAllMentions(event.d.mentions)}`
            });
            break;

        case 'pubg':
            bot.sendMessage({
                to: channelID,
                message: '打槍槍!! 😍 @everyone',
                embed: {
                    color: 0xff00ff,
                    description: '來打 PUBG',
                    image: {
                        url: 'https://i.imgur.com/88SGzV0.jpg',
                    },
                }
            });
            break;

        case 'map':

            console.log(args);
            bot.sendMessage({
                to: channelID,
                embed: {
                    color: 0xff00ff,
                    description: `地圖路線 - [點我](https://www.google.com.tw/maps/search/${args[0]})`,
                    timestamp: new Date(),
                    footer: {
                        text: 'Pip-Bot Team'
                    }
                }
            });
            break;

        case 'help':

            console.log(param);

            bot.sendMessage({
                to: channelID,
                embed: {
                    color: 0xff00ff,
                    author: {
                        name: 'Pip-Bot',
                        icon_url: 'https://i.imgur.com/RZP1rAx.png',
                    },
                    title: '關於 [PipDiscordBOT](https://github.com/explooosion/PipDiscordBOT) 的資訊',
                    description: 'Hi~ 以下為小妹的基本指令，不可以做色色的事情哦！',
                    fields: [{
                        name: 'Info Commands',
                        value: '`ping` `help` `hi`',
                    }, {
                        name: 'Game Commands',
                        value: '`pubg`',
                    }, {
                        name: 'Utility Commands',
                        value: '`map`',
                    }, {
                        name: 'Unknow Commands',
                        value: '`#0`',
                    }],
                    timestamp: new Date(),
                    footer: {
                        text: 'Pip-Bot Team'
                    }
                }
            });
            break;
            
        default:
            break;
    }
}

function getAllMentions(mentions) {
    let tag = '';
    mentions.forEach(user => {
        tag += ` <@${user.id}>`;
    });
    return tag;
}