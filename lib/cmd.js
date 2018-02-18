export function messageByCmd(message) {
    
    let args = message.substring(2).split(' ');
    const cmd = args[0];

    args = args.splice(1);

    switch (cmd) {
        // !ping
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

            console.log(args);
            const user = getMentionUser(args);
            console.log(user);

            bot.sendMessage({
                to: channelID,
                message: `hi ${user}`
            });
            break;
    }
}