import fs from 'fs';
import fetch from 'node-fetch';
import request from 'ajax-request';

import https from 'https';
import qs from 'querystring';

import twitch from './include/twich'
import images from './include/images'
import words from './include/words'

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
    words(bot, param)

}

function randomEvent() {
    return (Math.floor(Math.random() * 10) + 1) > 4 ? true : false;
}