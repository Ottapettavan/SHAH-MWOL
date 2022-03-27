const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const Config = require('../config');
const fs = require("fs")
const Language = require('../language');
const Lang = Language.getString('gitlink');

Asena.addCommand({pattern: 'git', fromMe: false, desc: Lang.GL}, (async (message, match) => {

    var respoimage = await axios.get(config.SHAH, { responseType: 'arraybuffer' })


    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {quoted: message.data , thumbnail: fs.readFileSync('SHAMOWL.jpg'), mimetype: Mimetype.png, caption: `~========~ ʟɪɴᴋs ~========~ 
 
ᴏᴡɴᴇʀ ɴᴜᴍʙᴇʀ wa.me/917736951082
   
ᴏᴡɴᴇʀ ɴᴜᴍʙᴇʀ wa.me/994406368079


Wʜᴀᴛsᴀᴘᴘ ɢʀᴏᴜᴘ : https://chat.whatsapp.com/F7p4E5x9972EcD9w6pAPYg


ɢɪᴛʜᴜʙ ʟɪɴᴋ : https://github.com/Ottapettavan/SHAH-MWOL

 
`}) 

})); 
