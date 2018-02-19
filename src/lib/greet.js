 module.exports.send = (bot, param) => {

     const {
         user,
         userID,
         status,
         game,
         event
     } = param;

     if (status === 'online' && userID !== '213466096718708737') {
         bot.sendMessage({
             to: '356875861804318723', // general
             message: `古摸尼! 😘  <@${userID}>`
         });
     }

 }