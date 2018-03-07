import fs from 'fs';
import fetch from 'node-fetch';
import request from 'ajax-request';

import https from 'https';
import qs from 'querystring';

import twitch from './include/twich'
import images from './include/images'

module.exports.send = (bot, param) => {
    const {
        user,
        userID,
        channelID,
        message,
        event
    } = param;

    if (!randomEvent() || userID === '414702149772247050') return;

    twitch(bot, param)
    images(bot, param)


    if (message.includes('尻槍') || message.includes('打槍')) {
        bot.sendMessage({
            to: channelID,
            message: '請克制一點! 少量一點! 👉👌'
        });
    }

    if (message.includes('88') || message.includes('掰') || message.includes('bye') || message.includes('88') || message.includes('cu')) {
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

    if (message.includes('睡') || message.includes('晚安')) {
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
            message: '+1'
        });
    }

    if (message.includes('...')) {
        bot.sendMessage({
            to: channelID,
            message: '😨'
        });
    }

    if (message.includes('OK')) {
        bot.sendMessage({
            to: channelID,
            message: 'hen棒'
        });
    }

    if (message.includes('ㄌㄐ')) {
        bot.sendMessage({
            to: channelID,
            message: 'B嘴 包莖仔🤮'
        });
    }

    if (message.includes('低能')) {
        bot.sendMessage({
            to: channelID,
            message: 'D能兒 -.-'
        });
    }

    if (message.includes('沒4')) {
        bot.sendMessage({
            to: channelID,
            message: '快滾好咪 🤬'
        });
    }

    if (message.includes('-.-')) {
        bot.sendMessage({
            to: channelID,
            message: '傻眼🐱'
        });
    }

    if (message.includes('87') && !message.includes('@')) {
        bot.sendMessage({
            to: channelID,
            message: 'ㄅEY'
        });
    }

    if (message.includes('0.0')) {
        bot.sendMessage({
            to: channelID,
            message: '0.0'
        });
    }

    if (message.includes('777')) {
        bot.sendMessage({
            to: channelID,
            message: '77777777777777777'
        });
    }
}

function randomEvent() {
    return (Math.floor(Math.random() * 10) + 1) > 4 ? true : false;
}