const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: "Gives github link of the bot"}, (async (message, match) => {

    var skl = await axios.get("SHAMOWL.jpg", { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(skl.data), MessageType.image, {mimetype: Mimetype.png, caption: `*SHAH MWOL* CODDED BY OTTAPETTAVAN 
Creator number 👉: wa.me/"/917736951082"

Githublink (Setup)  👇:    https://github.com/Ottapettavan/SHAH-MWOL

PUBLIC BOT GROUP 👇: https://chat.whatsapp.com/F7p4E5x9972EcD9w6pAPYg


`}) 

}));
