import fs from 'fs';
import fetch from 'node-fetch';
import request from 'ajax-request';

import https from 'https';
import qs from 'querystring';

const twich = (bot, param) => {

    const {
        user,
        userID,
        channelID,
        message,
        event
    } = param;

    if (message.includes('72') && !message.includes('@')) {
        bot.sendMessage({
            to: channelID,
            embed: {
                color: 0xff00ff,
                title: '',
                description: '🐧🐧 [https://www.twitch.tv/jinnytty](https://www.twitch.tv/jinnytty) 🐧🐧',
                image: {
                    url: 'https://static-cdn.jtvnw.net/jtv_user_pictures/397dc1dfc1a96bb1-profile_image-300x300.png'
                },
                timestamp: new Date(),
                footer: {
                    text: 'Pip-Bot 74團 皇家禁衛軍'
                }
            }
        });
        return
    }

    if (message.includes('鳳梨')) {
        bot.sendMessage({
            to: channelID,
            embed: {
                color: 0xff00ff,
                title: '',
                description: '🍍🍍 [https://www.twitch.tv/vickypan](https://www.twitch.tv/vickypan) 🍍🍍',
                image: {
                    url: 'https://static-cdn.jtvnw.net/jtv_user_pictures/4dab8adf-753e-488f-a7d9-d60f4e426b67-profile_image-300x300.png'
                },
                timestamp: new Date(),
                footer: {
                    text: 'Pip-Bot 鳳梨團 皇家禁衛軍'
                }
            }
        });
        return
    }

    if (message.includes('蝴蝶')) {
        bot.sendMessage({
            to: channelID,
            embed: {
                color: 0xDD968C,
                title: '',
                description: '🦋🦋 [https://www.twitch.tv/butterflyouo](https://www.twitch.tv/butterflyouo) 🦋🦋',
                image: {
                    url: 'https://scontent.ftpe7-1.fna.fbcdn.net/v/t1.0-9/22851673_1967425600191577_6794008167558874724_n.png?_nc_fx=ftpe7-3&oh=eaccd83af2a9912ba04fdd3f6d6f8145&oe=5B10F963'
                },
                timestamp: new Date(),
                footer: {
                    text: 'Pip-Bot 蝴蝶團 皇家禁衛軍'
                }
            }
        });
    }

    if (message.includes('小雲')) {
        bot.sendMessage({
            to: channelID,
            embed: {
                color: 0xFFC766,
                title: '',
                description: '⛅️️☁️ [https://www.twitch.tv/babybaby1111](https://www.twitch.tv/babybaby1111) ☁️⛅️',
                image: {
                    url: 'https://static-cdn.jtvnw.net/jtv_user_pictures/582d325c08881fd1-profile_image-300x300.jpeg'
                },
                timestamp: new Date(),
                footer: {
                    text: 'Pip-Bot 寶寶團 開水自衛隊'
                }
            }
        });
    }

    if (message.includes('妮妮')) {
        bot.sendMessage({
            to: channelID,
            embed: {
                color: 0xFE659B,
                title: '',
                description: '👼🏼👼🏼 [https://www.twitch.tv/niniko_w](https://www.twitch.tv/niniko_w) 👼🏼👼🏼',
                image: {
                    url: 'https://static-cdn.jtvnw.net/jtv_user_pictures/niniko_w-profile_image-58966583229acfef-300x300.jpeg'
                },
                timestamp: new Date(),
                footer: {
                    text: 'Pip-Bot ㄋㄋ團 皇家禁衛軍'
                }
            }
        });
    }

    if (message.includes('JJ') || message.includes('jj') || message.includes('接接') || message.includes('godjj') || message.includes('GodJJ')) {
        bot.sendMessage({
            to: channelID,
            embed: {
                color: 0x30FE42,
                title: '',
                description: '🔰🔰 [https://www.twitch.tv/godjj](https://www.twitch.tv/godjj) 🔰🔰',
                image: {
                    url: 'http://i.imgur.com/CCrTc5s.png'
                },
                timestamp: new Date(),
                footer: {
                    text: 'Pip-Bot JJ團 朝聖團'
                }
            }
        });
    }
}

export default twich