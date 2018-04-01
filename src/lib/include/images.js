import fs from 'fs';
import fetch from 'node-fetch';
import request from 'ajax-request';

import https from 'https';
import qs from 'querystring';

import url from '../../api/img/data.json';

const images = (bot, param) => {

    const {
        user,
        userID,
        channelID,
        message,
        event
    } = param;

    if (message.includes('婆')) {

        if (userID === '414702149772247050' || userID === '424961764376051732') return;

        const id = Math.floor(Math.random() * 30);

        const check = userID === '213277061555421185' ? true : false
        // console.log(`../../img/ili/ili19930831official/${id}.jpg`)

        let msg = ''
        if (check) {
            msg = `身分驗證正確 <@${userID}>！`
        } else {
            msg = `才不是ㄋ老婆, B嘴 <@${userID}>, 就給ㄋ看看ㄅ`
        }

        bot.sendMessage({
            to: channelID,
            message: msg,
            embed: {
                color: 0x00ffff,
                title: '這4 Robby 喇！ 沒看過嗎？ 現在給你看！ 😘 (照片每次都不一樣哦)',
                description: '😍😍 [雞排妹ili鄭家純](https://www.facebook.com/ili19930831official/) 😍😍',
                image: {
                    url: `https://raw.githubusercontent.com/explooosion/PipDiscordBOT/master/src/api/img/ili19930831official/${id}.jpg`
                },
                timestamp: new Date(),
                footer: {
                    text: 'Pip-Bot ili團 皇家禁衛軍'
                }
            }
        });
        return
    }

    if (message.includes('海草')) {
        bot.sendMessage({
            to: channelID,
            embed: {
                color: 0xF58446,
                title: '*海草舞*',
                description: '🤸🏻‍ [眾水之音文化傳播有限公司](https://www.youtube.com/watch?v=jq6uEUwkGqc/) 🤸🏻‍',
                image: {
                    url: 'https://i.ytimg.com/vi/jq6uEUwkGqc/maxresdefault.jpg'
                },
                timestamp: new Date(),
                footer: {
                    text: 'Pip-Bot 海草團'
                }
            }
        });
        return
    }

    if (message.includes('女乃') || message.includes('豆頁') || message.includes('奶') || message.includes('胸') || message.includes('ㄋㄟ') || message.includes('乳')) {
        let img;
        while (img === undefined) {
            img = url.data[randomImage()].image_url;
        }
        console.log(img)
        bot.sendMessage({
            to: channelID,
            embed: {
                color: 0xFF58ED,
                title: '奶子日報',
                description: '😊 每日新鮮奶子來惹 😊',
                image: {
                    url: img
                },
                timestamp: new Date(),
                footer: {
                    text: 'Pip-Bot 奶圖王'
                }
            }
        });
        return
    }

    if (message.includes('餓') || message.includes('想吃') || message.includes('吃啥') || message.includes('消夜') || message.includes('餐')) {
        bot.sendMessage({
            to: channelID,
            message: '紅燒金目鯛魚 燒烤西京味噌鰆魚 鯛姿蒸 蟹肉奶油可樂餅 牛肉蛋包飯 豬排咖哩飯 蟹肉燴炒飯 焢肉燴飯 烏龍麵 薑汁豬肉片 日式漢堡排 大阪壽司 山藥泥麥飯 燒肉井 美式肋排 中式油淋雞 香蒜牛排 蔥抓餅 泰式辣炒蝦 辣炒花蛤 辣炒花枝 辣炒豬 泰式辣炒蝦 辣炒花蛤 辣炒花枝 辣炒豬 辣炒雞 泰味鳳梨蝦球 香茅辣炒雞肉 肉粽 泰式辣炒海鮮 酸辣叢林燒肉 醉仙牛肉 泰式生菜碎肉 鄉村牛肉 蟳蒸蛋 綜合壽司 綜合生魚片 炸蝦天婦羅 炸豬排 蛋包飯 關東煮 烤香魚 味噌湯 烤味噌魚 海鮮火鍋 和風沙拉 鮭魚飯團 蒜頭蛤湯 酸筍炒豬肉 炸蝦飯 豚天火燒 海老奶油燒 紅酒燉牛肉 干貝起士燒 牛肉奶油燒 牛蘆筍卷燒 鍋貼 鼎邊趖 泡泡冰 天婦羅 營養三明治 豆簽羹 蝦仁肉圓 鐵板燒 紅油抄手 大餅包小餅 刀削麵 豬肝湯 花枝羹 蚵仔煎 藥燉排骨 牛舌餅 新竹肉圓 貢丸 潤餅 蔥花煎餅 魷魚羹 米粉 潤餅 當歸鴨 蚵仔煎 炒花枝 肉羹 米糕 甜不辣 涼圓 大腸麵線 魷魚羹 魚酥羹 麻辣鴨血 麻辣臭豆腐 炸雞排 滷味 炒米粉 鴨肉羹 魯肉飯 排骨飯 煎餃 雞腿飯 臭豆腐 豪大大雞排 花枝羹 豬血糕 雞肉飯 藍藍路 維力雜醬麵 牛肉麵 鴨肉羹 御飯糰 MOS漢堡 肯德基 頂呱呱 丹丹 刺身 涮羊肉 廣東粥 麻辣鍋 雞絲麵 燒餅 油條 薑母鴨 甜不辣 水餃 可麗餅 小籠包 水餃 水煎包 車輪餅 蚵仔煎 炒米粉 炒羊肉 水煎包 車輪餅 蚵仔煎 炒米粉 炒羊肉',
            embed: {
                color: 0xffff00,
                title: '🥖 🧀 🥚 🍳 🥓 🥞 🍤 🍗 🍖 🍕 🌭 🍔 🍟 🥙🌮 🌯 🥗 🥘 🍝',
                description: '[What Do You Want To Eat?](https://www.google.com.tw/search?q=%E6%B6%88%E5%A4%9C&oq=%E6%B6%88%E5%A4%9C&aqs=chrome..69i57j69i59j0l4.2988j0j7&sourceid=chrome&ie=UTF-8)',
                image: {
                    url: 'https://img.appledaily.com.tw/images/ReNews/20171030/640_c6f902162971f542f9b898e95e958113.jpg'
                },
            }
        });
    }

}

function randomImage() {
    return (Math.floor(Math.random() * 100) + 1);
}

export default images