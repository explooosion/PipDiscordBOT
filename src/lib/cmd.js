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