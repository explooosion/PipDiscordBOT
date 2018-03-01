module.exports.send = (bot, param) => {
    const {
        user,
        userID,
        channelID,
        message,
        event
    } = param;

    if (!randomEvent() || userID === '414702149772247050') return;

    if (message.includes('尻槍') || message.includes('打槍')) {
        bot.sendMessage({
            to: channelID,
            message: '請克制一點! 少量一點! 👉👌'
        });
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

    if (message.includes('奶')) {
        bot.sendMessage({
            to: channelID,
            message: '💕有人提到奶子嗎! 😍😍😍'
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
            message: '+++++++++++++++++'
        });
    }

    if (message.includes('...')) {
        bot.sendMessage({
            to: channelID,
            message: '包莖仔點三小 🤮'
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
            message: 'B嘴ㄌㄐ'
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

    if (message.includes('婆')) {
        bot.sendMessage({
            to: channelID,
            embed: {
                color: 0x00ffff,
                title: '這我婆喇！ 沒看過嗎？ 現在給你看！',
                description: '😍😍 [雞排妹ili鄭家純](https://www.facebook.com/ili19930831official/) 😍😍',
                image: {
                    url: 'https://scontent.ftpe7-1.fna.fbcdn.net/v/t1.0-9/28056098_1460659464056932_7419006765228129584_n.jpg?_nc_fx=ftpe7-3&oh=686d93934a8a36cdc860c0e655f0f913&oe=5B177C67'
                },
                timestamp: new Date(),
                footer: {
                    text: 'Pip-Bot ili團 皇家禁衛軍'
                }
            }
        });
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
    }
}

function randomEvent() {
    return (Math.floor(Math.random() * 10) + 1) > 4 ? true : false;
}