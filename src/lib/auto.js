module.exports.send = (bot, param) => {
    const {
        user,
        userID,
        channelID,
        message,
        evt
    } = param;
    console.log('receive:' + message);
}