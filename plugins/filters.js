/* Copyright (C) 2020 farhan-dqz.
julie 
*/
const fs = require('fs')
const Asena = require('../events');
const {MessageType, Mimetype } = require('@adiwajshing/baileys');
const FilterDb = require('./sql/filters');
const Config = require('../config')
const jid = Config.DISBGM !== false ? Config.DISBGM.split(',') : [];
const afn = Config.PLKS !== false ? Config.PLKS.split(',') : [];
const Language = require('../language');
const Lang = Language.getString('filters');


Asena.addCommand({pattern: 'filter ?(.*)', fromMe: true, desc: Lang.FILTER_DESC, dontAddCommandList: true}, (async (message, match) => {
    match = match[1].match(/[\'\"\“](.*?)[\'\"\“]/gsm);

    if (match === null) {
        filtreler = await FilterDb.getFilter(message.jid);
        if (filtreler === false) {
            await message.client.sendMessage(message.jid,Lang.NO_FILTER,MessageType.text)
        } else {
            var mesaj = Lang.FILTERS + '\n';
            filtreler.map((filter) => mesaj += '```' + filter.dataValues.pattern + '```\n');
            await message.client.sendMessage(message.jid,mesaj,MessageType.text);
        }
    } else {
        if (match.length < 2) {
            return await message.client.sendMessage(message.jid,Lang.NEED_REPLY + ' ```.filter "sa" "as"',MessageType.text);
        }
        await FilterDb.setFilter(message.jid, match[0].replace(/['"“]+/g, ''), match[1].replace(/['"“]+/g, '').replace(/[#]+/g, '\n'), match[0][0] === "'" ? true : false);
        await message.client.sendMessage(message.jid,Lang.FILTERED.format(match[0].replace(/['"]+/g, '')),MessageType.text);
    }
}));
Asena.addCommand({pattern: 'stop ?(.*)', fromMe: true, desc: Lang.STOP_DESC, dontAddCommandList: true}, (async (message, match) => {
    match = match[1].match(/[\'\"\“](.*?)[\'\"\“]/gsm);
    if (match === null) {
        return await message.client.sendMessage(message.jid,Lang.NEED_REPLY + '\n*Example:* ```.stop "hello"```',MessageType.text)
    }

    del = await FilterDb.deleteFilter(message.jid, match[0].replace(/['"“]+/g, ''));
    
    if (!del) {
        await message.client.sendMessage(message.jid,Lang.ALREADY_NO_FILTER, MessageType.text)
    } else {
        await message.client.sendMessage(message.jid,Lang.DELETED, MessageType.text)
    }
}));
    
if (Config.GEAR == 'one') {  
    
Asena.addCommand({on: 'text', fromMe: false}, (async (message, match) => {
        if(Config.BGMFILTER){
            var uri = encodeURI(match[1])
        let banned = jid.find( Jid => Jid === message.jid);
        if(banned !== undefined) return
        if (!!message.mention && message.mention[0] == '918921483992@s.whatsapp.net') {
await message.client.sendMessage(message.jid, fs.readFileSync('./media/uploads/mention.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio, quoted : message.data, ptt: true})
        }
        if (!!message.mention && message.mention[0] == Config.MENTION) {
await message.client.sendMessage(message.jid, fs.readFileSync('./media/uploads/mention.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio, quoted : message.data, ptt: true})
        }
        
const array = ['Aara','Aarulle','Age','Ah','Air','Album','Aliya','Andi','Arulle','Ayn','Baby','Bgm','Bgm1','Block','Bot','Bott chathu','Bpower','Breakup','Brthrspvr','Business','Chaya','Cr7','Da','Dii','Dude','Ee','Ellarum','Enne','Fan','Food','Friend','Good morning','Good night','Group active','Group chathu','Grp','Ha','Hh','Happy','Happy Birthday','Hacker','Home','Hoi','Hlo','Hi','Insult','Ijjathi','I love u','I hate you','Hy','Ijjathi','Insult','Ivan','Janu','Jerry','Jocker','Kanja','Kanjav','Kannappi','KilKozhi','','Kollam','Koye','Kunna','Life','Line','Love status','Love','love','M1','M2','Manassilayo','Mandan','Marannu','Mass','Miss you','Mm','Mng','Mole','Mrng','Myr','Naayi','Name','Nee etha','Nee','Nikk','Ramshad','Noob','Njan vannu','Njan','Number','Nunban','mOk da','Ottapettavan','Padika','Para','Parayatte','Patti','Pavam','Penn','pedi','pm','poda','podi','poli','pova','poyi','poyo','problem','rinhas','rinhas','rip','saralla','sarasu','sed akki','sed song','senti','song','sorry','sry','thair','troll','uff','umma','uyir','va','vannu','vaza','vazha','venda','verupikal','verupikkalle','vilikk','what']
array.map( async (a) => {
let pattern = new RegExp(`\\b${a}\\b`, 'g');
if(pattern.test(message.message)){
       await message.client.sendMessage(message.jid, fs.readFileSync('./media/uploads/' + a + '.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio,duration: Config.MWOL, quoted: message.data, ptt: true})
}
});
    }

    var filtreler = await FilterDb.getFilter(message.jid);
    if (!filtreler) return; 
    filtreler.map(
        async (filter) => {
            pattern = new RegExp(filter.dataValues.regex ? filter.dataValues.pattern : ('\\b(' + filter.dataValues.pattern + ')\\b'), 'gm');
            if (pattern.test(message.message)) {
                await message.client.sendMessage(message.jid,filter.dataValues.text, MessageType.text, {quoted: message.data});
            }
        }
    );
}));
}
    if (Config.GEAR == 'two') {    
    Asena.addCommand({on: 'text', fromMe: false}, (async (message, match) => {   
        if(Config.BGMFILTER){
        let banned = jid.find( Jid => Jid === message.jid);
        if(banned !== undefined) return
        if (!!message.mention && message.mention[0] == '918921483992@s.whatsapp.net') {
await message.client.sendMessage(message.jid, fs.readFileSync('./media/files/mention.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio,contextInfo: { forwardingScore: 5, isForwarded: true }, quoted : message.data, ptt: true})
        }
        if (!!message.mention && message.mention[0] == Config.MENTION) {
await message.client.sendMessage(message.jid, fs.readFileSync('./media/files/mention.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio, quoted : message.data, ptt: true})
        }
        var uri = encodeURI(match[1])
const array = ['Aara','Aarulle','Age','Ah','Air','Album','Aliya','Andi','Arulle','Ayn','Baby','Bgm','Bgm1','Block','Bot','Bott chathu','Bpower','Breakup','Brthrspvr','Business','Chaya','Cr7','Da','Dii','Dude','Ee','Ellarum','Enne','Fan','Food','Friend','Good morning','Good night','Group active','Group chathu','Grp','Ha','Hh','Happy','Happy Birthday','Hacker','Home','Hoi','Hlo','Hi','Insult','Ijjathi','I love u','I hate you','Hy','Ijjathi','Insult','Ivan','Janu','Jerry','Jocker','Kanja','Kanjav','Kannappi','KilKozhi','','Kollam','Koye','Kunna','Life','Line','Love status','Love','love','M1','M2','Manassilayo','Mandan','Marannu','Mass','Miss you','Mm','Mng','Mole','Mrng','Myr','Naayi','Name','Nee etha','Nee','Nikk','Ramshad','Noob','Njan vannu','Njan','Number','Nunban','mOk da','Ottapettavan','Padika','Para','Parayatte','Patti','Pavam','Penn','pedi','pm','poda','podi','poli','pova','poyi','poyo','problem','rinhas','rinhas','rip','saralla','sarasu','sed akki','sed song','senti','song','sorry','sry','thair','troll','uff','umma','uyir','va','vannu','vaza','vazha','venda','verupikal','verupikkalle','vilikk','what']
array.map( async (a) => {
let pattern = new RegExp(`\\b${a}\\b`, 'g');
if(pattern.test(message.message)){
       await message.client.sendMessage(message.jid, fs.readFileSync('./media/files/' + a + '.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio,contextInfo: { forwardingScore: 10, isForwarded: true },quoted: message.data, ptt: true})
}
});
    }

    var filtreler = await FilterDb.getFilter(message.jid);
    if (!filtreler) return; 
    filtreler.map(
        async (filter) => {
            pattern = new RegExp(filter.dataValues.regex ? filter.dataValues.pattern : ('\\b(' + filter.dataValues.pattern + ')\\b'), 'gm');
            if (pattern.test(message.message)) {
                await message.client.sendMessage(message.jid,filter.dataValues.text, MessageType.text, {quoted: message.data});
            }
        }
    );
}));
}
Asena.addCommand({on: 'text', fromMe: false}, (async (message, match) => {
    if(Config.STICKERP){
    let banned = jid.find( Jid => Jid === message.jid);
    if(banned !== undefined) return
    if (!!message.mention && message.mention[0] == '918921483992@s.whatsapp.net') {
await message.client.sendMessage(message.jid, fs.readFileSync('./media/stickers/mention.webp'), MessageType.sticker, { mimetype: Mimetype.webp, quoted : message.data, ptt: false})
    }
const array = ['Aara','Aarulle','Age','Ah','Air','Album','Aliya','Andi','Arulle','Ayn','Baby','Bgm','Bgm1','Block','Bot','Bott chathu','Bpower','Breakup','Brthrspvr','Business','Chaya','Cr7','Da','Dii','Dude','Ee','Ellarum','Enne','Fan','Food','Friend','Good morning','Good night','Group active','Group chathu','Grp','Ha','Hh','Happy','Happy Birthday','Hacker','Home','Hoi','Hlo','Hi','Insult','Ijjathi','I love u','I hate you','Hy','Ijjathi','Insult','Ivan','Janu','Jerry','Jocker','Kanja','Kanjav','Kannappi','KilKozhi','','Kollam','Koye','Kunna','Life','Line','Love status','Love','love','M1','M2','Manassilayo','Mandan','Marannu','Mass','Miss you','Mm','Mng','Mole','Mrng','Myr','Naayi','Name','Nee etha','Nee','Nikk','Ramshad','Noob','Njan vannu','Njan','Number','Nunban','mOk da','Ottapettavan','Padika','Para','Parayatte','Patti','Pavam','Penn','pedi','pm','poda','podi','poli','pova','poyi','poyo','problem','rinhas','rinhas','rip','saralla','sarasu','sed akki','sed song','senti','song','sorry','sry','thair','troll','uff','umma','uyir','va','vannu','vaza','vazha','venda','verupikal','verupikkalle','vilikk','what']
array.map( async (a) => {
let pattern = new RegExp(`\\b${a}\\b`, 'g');
if(pattern.test(message.message)){
   await message.client.sendMessage(message.jid, fs.readFileSync('./media/stickers/' + a + '.webp'), MessageType.sticker, { mimetype: Mimetype.webp, quoted: message.data, ptt: false})
}
});
}

var filtreler = await FilterDb.getFilter(message.jid);
if (!filtreler) return; 
filtreler.map(
    async (filter) => {
        pattern = new RegExp(filter.dataValues.regex ? filter.dataValues.pattern : ('\\b(' + filter.dataValues.pattern + ')\\b'), 'gm');
        if (pattern.test(message.message)) {
            await message.client.sendMessage(message.jid,filter.dataValues.text, MessageType.text, {quoted: message.data});
        }
    }
);
}));
    
    async function checkUsAdmin(message, user = message.data.participant) {
    var grup = await message.client.groupMetadata(message.jid);
    var sonuc = grup['participants'].map((member) => {     
        if (member.jid.split("@")[0] == user.split("@")[0] && member.isAdmin) return true; else; return false;
    });
    return sonuc.includes(true);
}
async function checkImAdmin(message, user = message.client.user.jid) {
    var grup = await message.client.groupMetadata(message.jid);
    var sonuc = grup['participants'].map((member) => {     
        if (member.jid.split("@")[0] == user.split("@")[0] && member.isAdmin) return true; else; return false;
    });
    return sonuc.includes(true);
}
 
     Asena.addCommand({on: 'text', fromMe: false}, (async (message, match) => {

        if(Config.THERI_KICK){
        let banned = jid.find( Jid => Jid === message.jid);
        if(banned !== undefined) return
        
const array = afn 
array.map( async (a) => {
let pattern = new RegExp(`\\b${a}\\b`, 'g');
if(pattern.test(message.message)){
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
    await message.client.sendMessage(message.jid,'you used a bad word that we dont allow here \n -admin panal ', MessageType.text, {quoted: message.data });  
    await message.client.groupRemove(message.jid, [message.data.participant]);                
}
});
    }

    var filtreler = await FilterDb.getFilter(message.jid);
    if (!filtreler) return; 
    filtreler.map(
        async (filter) => {
            pattern = new RegExp(filter.dataValues.regex ? filter.dataValues.pattern : ('\\b(' + filter.dataValues.pattern + ')\\b'), 'gm');
            if (pattern.test(message.message)) {
                await message.client.sendMessage(message.jid,filter.dataValues.text, MessageType.text, {quoted: message.data});
            }
        }
    );
}));

