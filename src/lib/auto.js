module.exports.send = (bot, param) => {
    const {
        user,
        userID,
        channelID,
        message,
        evt
    } = param;

    if (!randomEvent()) return;

    if (message.includes('尻槍') || message.includes('打槍')) {
        bot.sendMessage({
            to: channelID,
            message: '請克制一點! 少量一點! 👉👌'
        });
    }

    if (message.includes('餓') || message.includes('想吃') || message.includes('吃啥')) {
        bot.sendMessage({
            to: channelID,
            message: '樓上ㄘ我洨喇! 😝'
        });
    }

    if (message.includes('88') || message.includes('掰') || message.includes('bye')) {
        bot.sendMessage({
            to: channelID,
            message: '👋🏻👋🏻👋🏻👋🏻👋🏻'
        });
    }

    if (message.includes('下去')) {
        bot.sendMessage({
            to: channelID,
            message: '聽到沒! BOSS 森77惹! 😡'
        });
    }

    if (message.includes('奶')) {
        bot.sendMessage({
            to: channelID,
            message: '💕有人提到奶子嗎! 😍😍😍'
        });
    }

    if (message.includes('睡')) {
        bot.sendMessage({
            to: channelID,
            message: '📴 晚ㄤ~ 😴'
        });
    }

    if (message.includes('洗澡')) {
        bot.sendMessage({
            to: channelID,
            message: '桑幾咧 🚿 🛁 🛀'
        });
    }

    if (message.includes('三小')) {
        bot.sendMessage({
            to: channelID,
            message: '工三小 🤬'
        });
    }

    if (message.includes('失敗')) {
        bot.sendMessage({
            to: channelID,
            message: 'GG 下次再來 👎'
        });
    }

    if (message.includes('電話')) {
        bot.sendMessage({
            to: channelID,
            message: '說好的打給我呢? 📳'
        });
    }

    if (message.includes('GG') || message.includes('gg')) {
        bot.sendMessage({
            to: channelID,
            message: 'GGGGGGGGG 😎'
        });
    }

    if (message.includes('上車')) {
        bot.sendMessage({
            to: channelID,
            message: '老實點! 每次掃黃都是你! 👮'
        });
    }

    if (message.includes('-1') || message.includes('-2')) {
        bot.sendMessage({
            to: channelID,
            message: '快點就缺你了 😲'
        });
    }

    if (message.includes('++')) {
        bot.sendMessage({
            to: channelID,
            message: '+++++++++++++++++ 👺'
        });
    }
}

function randomEvent() {
    return (Math.floor(Math.random() * 10) + 1) > 4 ? true : false;
}