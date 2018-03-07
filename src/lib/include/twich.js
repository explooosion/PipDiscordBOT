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
}

export default twich