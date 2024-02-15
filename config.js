const fs = require('fs')
const chalk = require('chalk')

//contact details
global.ownernumber = ['917736951082']
global.ownername = "OTTᗩᑭETTᗩᐯᗩᑎ"//owner name
global.ytname = "YT: OttapettavanRKBotz.inc"
global.socialm = "GitHub: Ottapettavan"
global.location = "Indian"

global.botname = '𝐒𝐇𝐀𝐇 𝐌𝐖𝐎𝐋' //name of the bot

//sticker details
global.stickername = 'OTTᗩᑭETTᗩᐯᗩᑎ'
global.packname = 'Sticker By'
global.author = 'SHAHMWOL Bot'
//console view/theme
global.themeemoji = '🧩'
global.wm = "OttapettavanRK botz inc."

//theme link
global.link = 'https://chat.whatsapp.com/F7p4E5x9972EcD9w6pAPYg'

//custom prefix
global.prefa = ['!']

//false=disable and true=enable
global.welcome = false //auto welcome
global.autoRecording = false //auto recording
global.autoTyping = false //auto typing
global.autorecordtype = false //auto typing + recording
global.autoread = false //auto read messages
global.autobio = false //auto update bio
global.anti212 = true //auto block +212
global.autoread_status = false //auto view status/story



//reply messages
global.mess = {
    done: '*here you go!* \n\n*🧞SHAHMWOL Bot 🧚*\n\n*🧩 Bot link:* \nhttps://github.com/Ottapettavan/SHAH-MWOL\n',
    prem: '*This feature can be used by premium user only*',
    admin: '*This feature can be used by admin only*',
    botAdmin: '*This feature can only be used when the bot is a group admin* ',
    owner: '*This feature can be used by owner only*',
    group: '*This feature is only for groups*',
    private: '*This feature is only for private chats*',
    wait: '*In process...* ',    
    error: '*Error!*',
}

global.thumb = fs.readFileSync('./Gallery/SHAMOWL.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
