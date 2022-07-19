//saya hanya menggunakan google translate, so if there is an error please correct it 

exports.noAbsen = () =>{
return `「❌」 𝙉𝙤 𝙖𝙗𝙨𝙚𝙣𝙘𝙚𝙨 𝙩𝙖𝙠𝙚 𝙥𝙡𝙖𝙘𝙚 𝙞𝙣 𝙩𝙝𝙞𝙨 𝙜𝙧𝙤𝙪𝙥!`
}
exports.StartAbsen = () =>{
	return`「🔛」 𝗦𝘁𝗮𝗿𝘁 𝗔𝗯𝘀𝗲𝗻𝗰𝗲`
	}
exports.DahAbsen = () =>{
	return`「✅」 𝗬𝗼𝘂'𝗿𝗲 𝗔𝗯𝘀𝗲𝗻𝘁`
	}
exports.DelAbsen = () =>{
	return`「✅」 𝙎𝙪𝙘𝙘𝙚𝙨𝙨𝙛𝙪𝙡𝙡𝙮 𝙙𝙚𝙡𝙚𝙩𝙚𝙙 𝙖𝙗𝙨𝙚𝙣𝙘𝙚𝙨 𝙞𝙣 𝙩𝙝𝙞𝙨 𝙜𝙧𝙤𝙪𝙥`
	}
exports.adaAbsen = () =>{
	return`「❕」 𝙏𝙝𝙚𝙧𝙚 𝙖𝙧𝙚 𝙨𝙩𝙞𝙡𝙡 𝙖𝙗𝙨𝙚𝙣𝙩 𝙨𝙚𝙨𝙨𝙞𝙤𝙣𝙨 𝙞𝙣 𝙩𝙝𝙞𝙨 𝙜𝙧𝙤𝙪𝙥!`
	}
exports.SAbsen = () =>{
	return`「✅」 𝗔𝗯𝘀𝗲𝗻𝗰𝗲 𝗕𝗲𝗴𝗶𝗻𝘀`
	}
//
exports.SetCmd = (prefix, command) =>{
	return`𝗥𝗲𝗽𝗹𝘆 𝘀𝘁𝗶𝗰𝗸𝗲𝗿!\nExample : ${prefix + command} menu\n\n\n𝙉𝙤𝙩𝙚: 𝘾𝙖𝙣𝙣𝙤𝙩 𝙗𝙚 𝙖𝙘𝙘𝙤𝙢𝙥𝙖𝙣𝙞𝙚𝙙 𝙗𝙮 𝙋𝙧𝙚𝙛𝙞𝙭!`
	}
exports.CmdApa = () =>{
	return`𝗙𝗼𝗿 𝗪𝗵𝗮𝘁 𝗖𝗼𝗺𝗺𝗮𝗻𝗱?`
	}
exports.UCmd = () =>{
	return`「❕」 𝙔𝙤𝙪 𝙙𝙤𝙣'𝙩 𝙝𝙖𝙫𝙚 𝙥𝙚𝙧𝙢𝙞𝙨𝙨𝙞𝙤𝙣 𝙩𝙤 𝙢𝙤𝙙𝙞𝙛𝙮 𝙩𝙝𝙞𝙨 𝙨𝙩𝙞𝙘𝙠𝙚𝙧 𝙤𝙧𝙙𝙚𝙧`
	}
exports.HashCmd = () =>{
	return`「❌」 𝗡𝗼 𝗵𝗮𝘀𝗵𝗲𝘀`
	}
exports.DelCmd = () =>{
	return`「✅」 𝙏𝙝𝙚 𝙘𝙢𝙙 𝙨𝙩𝙞𝙘𝙠𝙚𝙧 𝙝𝙖𝙨 𝙗𝙚𝙚𝙣 𝙧𝙚𝙢𝙤𝙫𝙚𝙙`
	}
exports.LockCmd = () =>{
	return`「❕」 𝗥𝗲𝗽𝗹𝘆 𝗺𝗲𝘀𝘀𝗮𝗴𝗲`
	}
exports.NoCmd = () =>{
	return`「❕」 𝗛𝗮𝘀𝗵 𝗻𝗼𝘁 𝗳𝗼𝘂𝗻𝗱 𝗶𝗻 𝗱𝗮𝘁𝗮𝗯𝗮𝘀𝗲`
	}
exports.ReplyMsg = () =>{
	return`「❕」 𝙍𝙚𝙥𝙡𝙮 𝙈𝙚𝙨𝙨𝙖𝙜𝙚 𝙔𝙤𝙪 𝙒𝙖𝙣𝙩 𝙏𝙤 𝙎𝙖𝙫𝙚 𝙄𝙣 𝘿𝙖𝙩𝙖𝙗𝙖𝙨𝙚`
	}
exports.NoMsg = (prefix, command) =>{
	return`𝗘𝘅𝗮𝗺𝗽𝗹𝗲 : ${prefix + command} filename`
	}
exports.AdMsg = (text) => {
    return `'${text}' 𝙝𝙖𝙨 𝙗𝙚𝙚𝙣 𝙧𝙚𝙜𝙞𝙨𝙩𝙚𝙧𝙚𝙙 𝙞𝙣 𝙩𝙝𝙚 𝙢𝙚𝙨𝙨𝙖𝙜𝙚 𝙡𝙞𝙨𝙩!`
}
exports.DoneMsg = (prefix, text) => {
    return `「✅」 𝙎𝙪𝙘𝙘𝙚𝙨𝙨𝙛𝙪𝙡𝙡𝙮 𝙖𝙙𝙙𝙚𝙙 𝙢𝙚𝙨𝙨𝙖𝙜𝙚 𝙞𝙣 𝙢𝙚𝙨𝙨𝙖𝙜𝙚 𝙡𝙞𝙨𝙩 𝙖𝙨 '${text}'
    
Access with ${prefix}getmsg ${text}
View list of Messages With ${prefix}listmsg`
}
exports.GetMsg = (prefix, command) => {
    return `𝗘𝘅𝗮𝗺𝗽𝗹𝗲 : ${prefix + command} file name\n\nView message list with ${prefix}listmsg`
}
exports.NoInMsg = (text) => {
    return `'${text}' 𝗻𝗼𝘁 𝗹𝗶𝘀𝘁𝗲𝗱 𝗶𝗻 𝘁𝗵𝗲 𝗺𝗲𝘀𝘀𝗮𝗴𝗲 𝗹𝗶𝘀𝘁!`
}
exports.DelMsg = (text) => {
    return `「✅」 𝗗𝗲𝗹𝗲𝘁𝗲 𝘀𝘂𝗰𝘀𝗲𝘀𝘀𝗳𝘂𝗹𝗹𝘆 '${text}' 𝗳𝗿𝗼𝗺 𝘁𝗵𝗲 𝗺𝗲𝘀𝘀𝗮𝗴𝗲 𝗹𝗶𝘀𝘁`
}

exports.OnBef = () => {
    return `「✅」 𝙄𝙩'𝙨 𝙗𝙚𝙚𝙣 𝙖𝙘𝙩𝙞𝙫𝙖𝙩𝙚𝙙 𝙗𝙚𝙛𝙤𝙧𝙚`
}
exports.OffYaBef = () => {
    return `「✅」 𝙄𝙩'𝙨 𝙗𝙚𝙚𝙣 𝗱𝗲𝙖𝙘𝙩𝙞𝙫𝙖𝙩𝙚𝙙 𝙗𝙚𝙛𝙤𝙧𝙚`
}
exports.OkOn = (command) => {
    return `${command} 𝗦𝘂𝗰𝗰𝘀𝗲𝘀𝘀𝗳𝘂𝗹𝗹𝘆 𝗔𝗰𝘁𝗶𝘃𝗲𝗱 !`
}
exports.OffBef = (command) => {
    return `${command} 𝗦𝘂𝗰𝗰𝘀𝗲𝘀𝘀𝗳𝘂𝗹𝗹𝘆 𝗗𝗲𝗮𝗰𝘁𝗶𝘃𝗲𝗱 !`
}
exports.OkMute = () => {
    return `「✅」 𝘽𝙤𝙩 𝙝𝙖𝙨 𝙗𝙚𝙚𝙣 𝙢𝙪𝙩𝙚𝙙 𝙞𝙣 𝙩𝙝𝙞𝙨 𝙜𝙧𝙤𝙪𝙥`
}
exports.OkUnMute = () => {
    return `Bot Succeeded In UnMute`
}
exports.OkUnBanC = () => {
    return `Bot Successfully Unban chat`
}
exports.NoMute = () => {
    return `Bot has not been banned in this group`
}

exports.NoMsgBot = () => {
    return `The message was not sent by a bot!`
}
exports.ToimgErr = () => {
    return `Sorry Currently Not Support Gif Sticker`
}
exports.NoToImg = (prefix, command) => {
    return `Reply Sticker With Caption *${prefix + command}*`
}
exports.BotPublic = () => {
    return `Success Change To Public Mode`
}
exports.BotSelf = () => {
    return `Successfully Change To Self Mode\n\nTo change to public mode, please use the bot number`
}
exports.NoToStik = (prefix, command) => {
    return `Send/Reply Image/Video With Caption ${prefix + command}\n\nVideo Sticker Duration 1-9 Seconds`
}
exports.NoPpBot = (prefix, command) => {
    return `Send/Reply Image With Caption ${prefix + command}`
}
exports.ToAud = (prefix, command) => {
    return `Send/Reply the Video/Audio You Want to Use as Audio With Caption ${prefix + command}`
}
exports.ToMp3 = (prefix, command) => {
    return `Send/Reply Video/Audio You Want to Convert into MP3 With Caption ${prefix + command}`
}
exports.ToVn= (prefix, command) => {
    return `Reply Video/Audio That You Want To Be VN With Caption ${prefix + command}`
}
exports.NoQouted = () => {
    return `The message you replied to does not contain a reply`
}
exports.SetGcName = (prefix, command) => {
    return `Send orders ${prefix + command} *text*`
}
exports.SetPpGc = (prefix, command) => {
    return `Send/Reply Image With Caption ${prefix + command}`
}
exports.JoinGc = () => {
    return `Enter the group link!`
}
exports.MauKick = () => {
    return `Send the target number/tag/reply you want to kick!`
}
exports.MauAdd = () => {
    return `Send the target number/tag/reply you want to add!`
}
exports.NakPm= () => {
    return `Send the target number/tag/reply you want to promote!`
}
exports.NakDm = () => {
    return `Send the target number/tag/reply you want to demote!`
}
exports.Family = () => {
    return `There Are Still Unfinished Sessions!`
}
exports.NoWm = (prefix, command) => {
    return `Send orders ${prefix + command} packname|author`
}
exports.DoneExif = (packname, author) => {
    return `Exif Successfully Converted To\n\nPackname : ${packname}\nAuthor : ${author}`
}
exports.NoTeksOne = (prefix, command) => {
    return `Send orders ${prefix + command} *teks*\n\nExp : ${prefix + command} WhatsApp Bot`
}
exports.NoTeksTwo = (prefix, command) => {
    return `Send orders ${prefix + command} *teks 1|teks 2*\n\nExp : ${prefix + command} WhatsApp|Bot`
}
exports.OffNsfw = () => {
    return `The nsfw feature has not been activated`
}
exports.CoverBanLol = (prefix, command) => {
    return `Exp : ${prefix + command} nama|heroes\nUsage: ${prefix + command} zeeone|jinx7`
}
exports.coverbannerlol = (style) => {
    return `*The Heroes You Entered are Wrong*\n\n_Here's the list of true heroes, Total_ *${style}* _heroes_\n\n`
}
exports.pubglogomaker = (prefix, command) => {
    return `Exp : ${prefix + command} nama|style\nUsage: ${prefix + command} zeeone|women`
}
exports.pubglogomaker_ = (style) => {
    return `*The style you entered is wrong*\n\n_Here's a list of the correct styles, Total_ *${style}* _style_\n\n`
}
exports.colorfulpubg = (prefix, command) => {
    return `Exp : ${prefix + command} nama|color\nUsage: ${prefix + command} zeeone|gold`
}
exports.colorfulpubg_ = (style) => {
    return `*The color you entered is wrong*\n\n_Here's a list of the correct colors, Total_ *${style}* _color_\n\n`
}
exports.astronotspace = (prefix, command) => {
    return `Ex: ${prefix + command} nama|style\nUsage: ${prefix + command} zeeone|anubis`
}
exports.wallpaperaov = (prefix, command) => {
    return `Ex: ${prefix + command} nama|heroes\nUsage: ${prefix + command} zeeone|allain`
}
exports.maketeamlogo = (style, style2, prefix, command) => {
    return `Ex: ${prefix + command} nama|${style}\nUsage: ${prefix + command} zeeone|${style2}`
}

exports.MaketeamlogoT = (a, b, c, d, e, f, g, h) => {
    return `Ex: ${g + h} ${a}|${b}|${c}\nUsage: ${g + h} ${e}|${f}|${d}`
}
exports.maketeamlogo_ = (style, style2) => {
    return `*${style2} What you entered is wrong*\n\n_Here's a List ${style2} Correct, Total_ *${style}* _${style2}_\n\n`
}

exports.KisahNabi = (prefix, command, style) => {
    return `Exp : ${prefix + command} ${style}`
}
exports.quran2 = (prefix, command, juz , brp) => {
    return `Exp : ${prefix + command} ${juz}\nUsage: ${prefix + command} ${brp}`
}

exports.quran3 = (prefix, command, surah , ayat, brp, brp2) => {
return`Exp : ${prefix + command} ${surah}|${ayat}\nUsage: ${prefix + command} ${brp}|${brp2}`
}

exports.JwbErr = () => {
    return `❌ Wrong answer`
}

exports.JwbTrue = (tebak) => {
return`🎮 ${tebak} 🎮\n\nCorrect answer 🎉\n\nWant to play again? press the button below`
}
exports.TbGam = () => {
    return `Guess the picture`
}
exports.TbKa = () => {
    return `Guess the word`
}
exports.TbBe = () => {
    return `Guess the Flag`
}
exports.TbCak = () => {
    return `Cak Lontong`
}
exports.TbSu = () => {
    return `Arrange Words`
}
exports.TbAt = () => {
    return `Guess the Sentence`
}
exports.TbSi = () => {
    return `Guess who`
}
exports.Tbte = () => {
    return `Teka Teki`
}
exports.TbEn = () => {
    return `Guess the District`
}
exports.TbKi = () => {
    return `Guess Chemistry`
}
exports.TbLi = () => {
    return `Guess the Lyrics`
}
exports.TbKan = () => {
    return `Riddles`
}

exports.TbFamily = (soal, jawaban, find) => {
    return `*Answer the following questions :*\n${soal}\n\nThere is *${jawaban}* Answer ${find(v => v.includes(' ')) ? '(Some Answers Have Spaces)' : ''}`
}

exports.TbAfk = (nama, afk) => {
    return `${nama} Has Afk With Reason ${afk ? ': ' + afk : 'Nothing'}`
}

exports.TbGambar = (desk, time) => {
    return `Please answer the questions above\n\nDescription : ${desk}\nTime : ${time}`
}
exports.TbGambar_ = (jawaban) => {
    return `Time has run out\nAnswer:  ${jawaban}`
}
exports.TbGambar__ = (jawaban, desk) => {
    return `Time has run out\nAnswer:  ${jawaban}}\nDescription : ${desk}`
}
exports.TbKata = (soal, time) => {
    return `Please Answer The Following Questions\n\n${soal}\nTime : ${time}`
}
exports.TbBendera = (time) => {
    return `Please Answer The Question Above\n\nWaktu : ${time}`
}
exports.TbKabupaten = (time) => {
    return `The picture above is a picture of the district?\nTime : ${time}`
}
exports.TbKimia = (soal, time) => {
    return `What does the symbol mean? : *${soal}*?\nWaktu : ${time}`
}
exports.TbLirik = (soal, time) => {
    return `These are the lyrics of the song? : *${soal}*?\nTime : ${time}`
}
exports.TbSusun = (soal, tipe, time) => {
    return `*Answer the following questions :*\nQuestion : ${soal}\nType : ${tipe}\nTime : ${time}`
}
exports.TbMath = (modes, prefix, command) => {
    return `Mode: ${modes}\nUsage examples: ${prefix + command} medium`
}
exports.TbMath_ = (soal, time) => {
    return `*What is the result of: ${soal}*?\n\nTime: ${time} detik`
}
exports.TbJail = (prefix, command) => {
    return `Send/Reply Photo/Sticker With Caption ${prefix + command}`
}
exports.TbRepo = (prefix, command) => {
    return `Send orders ${prefix + command} *user* *repo* *branch*\n\nExp. ${prefix + command} *Andhyca-ofc* *Andhyca-Md* *v12*`
}
exports.StalkIg = () => {
    return `Enter username`
}
exports.Tomp4 = (prefix, command) => {
    return `Reply gif sticker with caption ${prefix + command}`
}
exports.Tourl = (prefix, command) => {
    return `Send/Reply Media With Caption ${prefix + command}`
}
exports.Smeme = (prefix, command) => {
    return `Send/Reply Photo With Caption ${prefix + command} *teks*`
}
exports.Smeme_ = (prefix, command) => {
    return `Send/Reply Photo With Caption ${prefix + command} *teks|tesk2*`
}
exports.Bcall = (anu, time, chat) => {
    return `Send Broadcast To ${anu} ${chat}\nTime's up ${time * 1.5} detik`
}
exports.Stag = (prefix, command) => {
    return `Reply sticker with caption ${prefix + command}`
}
exports.Vtag = (prefix, command, video) => {
    return `Send/reply ${video} with caption ${prefix + command}`
}
exports.TrLate = (prefix, command) => {
    return `Example :

1. Send orders ${prefix + command} *language code* *teks*
	• Exp : ${prefix + command} id hi
2. Reply chat with caption ${prefix + command} *language code*
	• Exp : ${prefix + command} id hi
List of supported languages : https://cloud.google.com/translate/docs/languages`
}
exports.Addlist = () => {
    return `Key cannot be the same as feature/command bot`
}
exports.Addlist_ = (prefix, command) => {
    return `Use it in a way ${prefix + command} *key|response*\n\n_Example_\n\n${prefix + command} Hi|Halo`
}
exports.Addlist__ = (arg) => {
    return `List of responses with key : *${arg}* already in this group.`
}
exports.AddlistDone = (arg) => {
    return `Successfully set list message with key : *${arg}*`
}
exports.Dellist = () => {
    return `There is no message list in the database`
}
exports.Dellist_  = (prefix, command) => {
    return `Use it in a way ${prefix + command} *key*\n\n_Example_\n\n${prefix + command} Hi`
}
exports.Dellist__ = (key) => {
    return `List response with key *${key}* not in database!`
}
exports.DellistDone = (key) => {
    return `Successfully delete list message with key *${key}*`
}
exports.ListUp = (key) => {
    return `Sorry, the key *${key}* is not yet registered in this group`
}
exports.UpList = (key) => {
    return `Successfully update list message with key : *${args1}*`
}
exports.Anonymous = (pushname, prefix) => {
    return `Hi ${pushname} Welcome to Anonymous Chat\n\nType ${prefix}start to find your Chat Friend, or you can press the Search button below`
}
exports.Anon = () => {
    return `Find Friends Chat`
}
exports.StopAnon = () => {
    return `You are not in an anonymous session, press the button to find a partner `
}
exports.AnonNew = () => {
    return `Find New Friends`
}
exports.AnonDahStop = () => {
    return `✅ Successfully stopped chat`
}
exports.StopAnonByFren = () => {
    return `⚠️ This chat session has been terminated by your chat friend`
}
exports.AnonOn = () => {
    return `️ You are still in a chat session with a partner!`
}
exports.AnonFind = (prefix) => {
    return `_Partner Found 🐼_\n${prefix}skip -- _find a new partner_\n${prefix}stop -- _stop this dialog_`
}
exports.AnonSearch = () => {
    return `🔎 Please wait looking for chat friends`
}
exports.NoAnon = () => {
    return `⚠️ You've never started a chat!`
}

exports.AllFitur = () => {
    return `\n𝐴𝑙𝑙 𝐵𝑜𝑡𝑧 𝐹𝑒𝑎𝑡𝑢𝑟𝑒𝑠`
}
exports.InfoMenu = () => {
    return `\n𝐿𝑜𝑜𝑘𝑖𝑛𝑔 𝑓𝑜𝑟 𝐿𝑎𝑡𝑒𝑠𝑡 𝐼𝑛𝑓𝑜𝑟𝑚𝑎𝑡𝑖𝑜𝑛 𝑉𝑖𝑎 𝐵𝑜𝑡𝑧`
}
exports.KhususOwn = () => {
    return `\n𝑂𝑤𝑛𝑒𝑟 𝐵𝑜𝑡𝑧 𝑆𝑝𝑒𝑐𝑖𝑎𝑙 𝐹𝑒𝑎𝑡𝑢𝑟𝑒𝑠`
}
exports.DataBor = () => {
    return `\n𝑊𝑖𝑡ℎ 𝑆𝑜𝑚𝑒𝑡ℎ𝑖𝑛𝑔 𝐼𝑛 𝑇ℎ𝑒 𝐵𝑜𝑡 𝐷𝑎𝑡𝑎𝑏𝑎𝑠𝑒`
}
exports.MenuGc = () => {
    return `\n𝑆ℎ𝑜𝑤 𝐺𝑟𝑜𝑢𝑝 𝑆𝑝𝑒𝑐𝑖𝑓𝑖𝑐 𝐹𝑒𝑎𝑡𝑢𝑟𝑒𝑠`
}
exports.MenuAni = () => {
    return `\n𝐿𝑜𝑜𝑘𝑖𝑛𝑔 𝐹𝑜𝑟 𝑅𝑎𝑛𝑑𝑜𝑚 𝐴𝑛𝑖𝑚𝑒 𝑃𝑖𝑐𝑡𝑢𝑟𝑒`
}
exports.TagMem = () => {
    return `\n𝑇𝑎𝑔 𝐺𝑟𝑜𝑢𝑝 𝑀𝑒𝑚𝑏𝑒𝑟`
}
exports.StalkOrk = () => {
    return `\n𝑃𝑒𝑜𝑝𝑙𝑒'𝑠 𝑆𝑜𝑐𝑖𝑎𝑙 𝑀𝑒𝑛𝑑𝑖𝑎 𝑆𝑡𝑎𝑙𝑘𝑖𝑛𝑔`
}
exports.Hoja = () => {
    return `\n𝐿𝑜𝑜𝑘𝑖𝑛𝑔 𝐹𝑜𝑟 𝑆𝑜𝑚𝑒𝑡ℎ𝑖𝑛𝑔 𝑈𝑛𝑖𝑚𝑝𝑜𝑟𝑡𝑎𝑛`
}
exports.CovertWi = () => {
    return `\n𝐶𝑜𝑛𝑣𝑒𝑟𝑡 𝑆𝑜𝑚𝑒𝑡ℎ𝑖𝑛𝑔 𝑊𝑖𝑡ℎ 𝐵𝑜𝑡𝑧`
}
exports.AnuFoto = () => {
    return `\n𝐶ℎ𝑎𝑛𝑔𝑒 𝑇ℎ𝑒 𝑃𝑖𝑐𝑡𝑢𝑟𝑒 𝑇𝑜 𝐵𝑒 𝑀𝑜𝑟𝑒 𝐼𝑛𝑡𝑒𝑟𝑒𝑠𝑡𝑖𝑛𝑔`
}
exports.HajuStik = () => {
    return `\n_𝐶𝑟𝑒𝑎𝑡𝑒 𝑈𝑛𝑖𝑞𝑢𝑒 𝑆𝑡𝑖𝑐𝑘𝑒𝑟𝑠`
}
exports.EloDown= () => {
    return `\n𝑆ℎ𝑜𝑤 𝐷𝑜𝑤𝑛𝑙𝑜𝑎𝑑 𝐹𝑒𝑎𝑡𝑢𝑟𝑒𝑠𝑡`
}
exports.StikerWibu = () => {
    return `\n𝑅𝑎𝑛𝑑𝑜𝑚 𝐴𝑛𝑖𝑚𝑒 𝑆𝑡𝑖𝑐𝑘𝑒𝑟`
}
exports.ImageDewasa = () => {
    return `\n𝑅𝑎𝑛𝑑𝑜𝑚 𝐴𝑛𝑖𝑚𝑒 𝐼𝑚𝑎𝑔𝑒 18+`
}
exports.MakeLogo = () => {
    return `\n_𝑇𝑜 𝐶𝑟𝑒𝑎𝑡𝑒 𝐴 𝐿𝑜𝑔𝑜 𝑈𝑠𝑖𝑛𝑔 𝐴 𝐵𝑜𝑡`
}
exports.oterMenu = () => {
    return `\n𝑀𝑜𝑟𝑒 𝑀𝑒𝑛𝑢`
}
exports.GameBot = () => {
    return `\𝐹𝑒𝑎𝑡𝑢𝑟𝑒𝑠 𝐹𝑜𝑟 𝑃𝑙𝑎𝑦𝑖𝑛𝑔 𝐺𝑎𝑚𝑒 𝑊𝑖𝑡ℎ 𝐵𝑜𝑡𝑧`
}
exports.RandRik = () => {
    return `\n𝑅𝑎𝑛𝑑𝑜𝑚 𝑇𝑖𝑘𝑇𝑜𝑘 𝑉𝑖𝑑𝑒𝑜`
}
exports.RandCew = () => {
    return `\n𝑅𝑎𝑛𝑑𝑜𝑚 𝑃𝑖𝑐𝑡𝑢𝑟𝑒 𝑂𝑓 𝐼𝑚𝑎𝑔𝑒 𝐵𝑒𝑎𝑢𝑡𝑖𝑓𝑢𝑙 𝐺𝑟𝑖𝑙`
}
exports.RamalOi = () => {
    return `\n𝑇𝑜𝑑𝑎𝑦 𝐹𝑜𝑟𝑒𝑠𝑐𝑎𝑡`
}
exports.TeleStik= () => {
    return `\n𝑅𝑎𝑛𝑑𝑜𝑚 𝑆𝑡𝑖𝑐𝑘𝑒𝑟 𝐹𝑜𝑟 𝑇𝑒𝑙𝑒𝑔𝑟𝑎𝑚`
}
exports.BuatLogoLagi = () => {
    return `\n𝐶𝑟𝑒𝑎𝑡𝑒 𝐶𝑜𝑜𝑙 𝐿𝑜𝑔𝑜 𝑊𝑖𝑡ℎ 𝐵𝑜𝑡𝑧`
}
exports.SoundNih= () => {
    return `\n𝑅𝑎𝑛𝑑𝑜𝑚 𝑆𝑜𝑢𝑛𝑑`
}
exports.KanLogoLagi = () => {
    return `\n𝑀𝑎𝑘𝑒 𝐴𝑛 𝐴𝑐𝑡𝑖𝑣𝑒 𝐿𝑜𝑔𝑜`
}
exports.TobatBro = () => {
    return `\n𝐼𝑠𝑙𝑎𝑚𝑖𝑐 𝐹𝑒𝑎𝑡𝑢𝑟𝑒𝑠`
}
exports.MauJualan = () => {
    return `\n𝐹𝑒𝑎𝑡𝑢𝑟𝑒𝑠 𝐹𝑜𝑟 𝑆𝑒𝑙𝑙𝑖𝑛𝑔`
}
exports.GadaChat = () => {
    return `\n𝐹𝑒𝑎𝑡𝑢𝑟𝑒𝑠 𝐹𝑜𝑟 𝑅𝑎𝑛𝑑𝑜𝑚 𝐶ℎ𝑎𝑟`
}
exports.SumberBot = () => {
    return `\n𝑆𝑜𝑢𝑟𝑐𝑒 𝐶𝑜𝑑𝑒 𝐹𝑜𝑟 𝑊𝑖𝑡ℎ 𝐺𝑟𝑜𝑢𝑝 𝐵𝑜𝑡𝑧`
}
exports.Tqnya = () => {
    return `\n_Who contributed to this bot_`
}
exports.SetAh = () => {
    return `Do you want a set menu?`
}
exports.KickAh = (gc) => {
    return `*Antilink Group Detected*\n\nYou will be removed from the group ${gc}`
    }
    exports.GjdKick = () => {
    return `Looks like you sent this group link, you won't be kicked out`
    }
/////////

/////////
exports.private = () =>{
	return`The feature can only be used in private chat`
	}
exports.wait = () => {
    return `「⏳」 𝗣𝗹𝗲𝗮𝘀𝗲 𝗪𝗮𝗶𝘁 𝗔 𝗠𝗼𝗺𝗲𝗻𝘁`
}
exports.ok = () => {
    return `「✅」 𝗗𝗼𝗻𝗲, 𝗕𝘆 ᴹᴿ᭄ 𝔸𝕟𝕕𝕙𝕪𝕔𝕒𝔾𝕒𝕟𝕫ོ ×፝֟͜×`
}

exports.err = () => {
    return `「⚠️」 𝗘𝗿𝗿𝗼𝗿 𝗠𝗼𝗱𝗲𝗿𝗮𝘁𝗲 𝗙𝗲𝗮𝘁𝘂𝗿𝗲𝘀`
}
exports.erorLink = () => {
    return `「⚠️」 𝗧𝗵𝗲 𝗟𝗶𝗻𝗸 𝗜𝘀 𝗘𝗿𝗼𝗿𝗿`
}
exports.media = () => {
    return `Please select the media you want to download`
}
exports.replyImg = (prefix, command) => {
    return `Send/Reply Photo With Caption ${prefix + command}`
}

exports.wrongFormat = (prefix) => {
    return `Incorrect format Please check how to use at *${prefix}allmenu*.`
}

exports.emptyMess = () => {
    return `❎ Please enter the message you want to convey!`
}

exports.cmdNotFound = (cmd, prefix) => {
    return `❎ Command *${cmd}* not registered in *${prefix}allmenu*`
}

exports.ownerOnly = () => {
    return `❎ This command is for the owner`
}

exports.doneOwner = () => {
    return `✅  ️It's done, Owner ~`
}

exports.groupOnly = () => {
    return `👥  This command can only be used in groups!`
}

exports.adminOnly = () => {
    return `🙅  This command can only be used by group admins!`
}

exports.nhFalse = () => {
    return `Invalid code!`
}

exports.listBlock = (blockNumber) => {
    return `*── 「 HALL OF SHAME 」 ──*
    
Totally blocked: *${blockNumber.length}* user\n`
}

exports.notAdmin = () => {
    return `❎ User is not an admin! ❎`
}

exports.adminAlready = () => {
    return `❎ Cannot promote a user who is an admin!`
}

exports.botNotAdmin = () => {
    return `Make bot as admin first! `
}

exports.received = (pushname) => {
    return `
Hello ${pushname}!
Thank you for reporting, we will receive your report soon.`
}

exports.videoLimit = () => {
    return `File size is too big!`
}

exports.notNum = (q) => {
    return `"${q}", not numbers!`
}
exports.menunya = (salam, pushname, botname) =>{
	return`             (⊃｡•́‿•̀｡)⊃\nHi Sis ${pushname} 👋 Good ${salam} , 
I'm ${botname}, this bot is Whatsapp Multi-Device Beta.\n\n⚠︎ Please Chat With The Owner If You Find A Bug, If Your Chat Is Proven To Be Just Playing Games, Then Botz Will Block and Banned You ⚠︎\n\n( ˘ ³˘)♥︎ Thank You ( ˘ ³˘)♥︎
`
}
exports.listMenu = (time, salam, pushname, prefix) => {
    return `*Good ${salam} ${pushname}*
*⌚Time Server : ${time}*
*📚 List-Menu 𝚂𝚑𝚒𝚛𝚘𝙱𝙾𝚃𝚉-𝙼𝚍 :*

╭─❒ 「 𝔹𝕠𝕥𝕫 𝕀𝕟𝕗𝕠 」 
│• ${prefix}owner
│• ${prefix}rules
│• ${prefix}sc
│• ${prefix}ping
│• ${prefix}runtime
│• ${prefix}botstatus
│• ${prefix}donate
│• ${prefix}artisymbol
╰❒


╭─❒ 「 𝕆𝕨𝕟𝕖𝕣 𝕄𝕖𝕟𝕦 」 
│• < evaluate
│• > evaluate
│• $ exec
│• => exec
│• ${prefix}setmenu [query]
│• ${prefix}setmenu templateLocation
│• ${prefix}setmenu templateTenor
│• ${prefix}setmenu katalog
│• ${prefix}setmenu katalog2
│• ${prefix}setmenu list
│• ${prefix}setwm packname|author
│• ${prefix}sendsesi
│• ${prefix}listpc
│• ${prefix}listgc
│• ${prefix}broadcast [text]
│• ${prefix}bc [text]
│• ${prefix}bcgc [text]
│• ${prefix}nsfw [on/off]
│• ${prefix}mute [on/off]
│• ${prefix}banchat
│• ${prefix}unbanchat
│• ${prefix}autorespond [on/off]
│• ${prefix}antiviewonce [on/off]
│• ${prefix}autobio [on/off]
│• ${prefix}join [link]
│• ${prefix}self
│• ${prefix}public [only bot]
│• ${prefix}del [reply pesan bot]
│• ${prefix}setppbot [reply image]
╰❒


╭─❒ 「 𝕊𝕥𝕠𝕣𝕖 𝕄𝕖𝕟𝕦 」
│• ${prefix}list
│• ${prefix}addlist [key|respond]
│• ${prefix}dellist [key]
│• ${prefix}update [key|respond]
│• ${prefix}store
│• ${prefix}kali
│• ${prefix}bagi
│• ${prefix}tambah
│• ${prefix}kurang
│• ${prefix}kalkulator
│• ${prefix}proses
│• ${prefix}done [surah|ayat]
╰❒


╭─❒ 「 𝔸𝕟𝕠𝕟𝕪𝕞𝕠𝕦𝕤 ℂ𝕙𝕒𝕥 」
│• ${prefix}anonymous 
│• ${prefix}start
│• ${prefix}skip [daerah]
│• ${prefix}stop [surah|ayat]
╰❒


╭─❒ 「 𝔻𝕒𝕥𝕒𝕓𝕒𝕤𝕖 𝕄𝕖𝕟𝕦 」 
│• ${prefix}setcmd [reply stiker]
│• ${prefix}delcmd [reply stiker]
│• ${prefix}listcmd
│• ${prefix}absen
│• ${prefix}cekabsen
│• ${prefix}deleteabsen
│• ${prefix}absenstart
│• ${prefix}addmsg [nama file]
│• ${prefix}getmsg [nama file]
│• ${prefix}listmsg
│• ${prefix}delmsg [nama file]
╰❒


╭─❒ 「 𝔾𝕣𝕠𝕦𝕡 𝕄𝕖𝕟𝕦 」 
│• ${prefix}listonline
│• ${prefix}sider
│• ${prefix}wm packname|author
│• ${prefix}infochat
│• ${prefix}setdesk [text]
│• ${prefix}setppgrup [reply image]
│• ${prefix}antilink [on/off]
│• ${prefix}revoke
│• ${prefix}leave
│• ${prefix}add [62***]
│• ${prefix}kick @tag
│• ${prefix}leave
│• ${prefix}linkgc
│• ${prefix}take packname|author
│• ${prefix}group [open/close]
│• ${prefix}tagall [text]
│• ${prefix}hidetag [text]
╰❒


╭─❒ 「 𝔸𝕟𝕚𝕞𝕖 𝕄𝕖𝕟𝕦 」 
│• ${prefix}quotesanime
│• ${prefix}anime [query]
│• ${prefix}manga [query]
│• ${prefix}character [query]
╰❒


╭─❒ 「 𝕋𝕒𝕘 𝕄𝕖𝕟𝕦 」 
│• ${prefix}stickertag
│• ${prefix}videotag [query]
│• ${prefix}vntag [query]
│• ${prefix}imagetag [query]
╰❒


╭─❒ 「 𝕊𝕥𝕒𝕝𝕜𝕚𝕟𝕘 𝕄𝕖𝕟𝕦 」 
│• ${prefix}igstalk [username]
│• ${prefix}ghstalk [username]
│• ${prefix}ytstalk [channel]
╰❒


╭─❒ 「 𝕊𝕖𝕒𝕣𝕔𝕙 𝕄𝕖𝕟𝕦 」 
│• ${prefix}ytsearch [query]
│• ${prefix}wallpaper [query]
│• ${prefix}google [query]
│• ${prefix}wikimedia [query]
│• ${prefix}hentai
│• ${prefix}wattpad [query]
│• ${prefix}webtoons [query]
│• ${prefix}drakor [query]
│• ${prefix}pinterest [query]
╰❒


╭─❒ 「 ℂ𝕠𝕟𝕧𝕖𝕣𝕥𝕖𝕣 𝕄𝕖𝕟𝕦 」
│• ${prefix}toaudio [video]
│• ${prefix}tomp3 [video]
│• ${prefix}tovn [video]
│• ${prefix}stiker [reply image]
│• ${prefix}tourl [image/video/stiker]
│• ${prefix}togif [sticker]
│• ${prefix}tomp4 [sticker]
│• ${prefix}toimg [reply sticker]
╰❒


╭─❒ 「 𝕀𝕞𝕒𝕘𝕖 𝔼𝕗𝕗𝕖𝕔𝕥 𝕄𝕖𝕟𝕦 」 
│• ${prefix}wanted [reply image/stiker]
│• ${prefix}utatoo [reply image/stiker]
│• ${prefix}unsharpen [reply image/stiker]
│• ${prefix}thanos [reply image/stiker]
│• ${prefix}sniper [reply image/stiker]
│• ${prefix}sharpen [reply image/stiker]
│• ${prefix}sepia [reply image/stiker]
│• ${prefix}scary [reply image/stiker]
│• ${prefix}rip [reply image/stiker]
│• ${prefix}redple [reply image/stiker]
│• ${prefix}rejected [reply image/stiker]
│• ${prefix}posterize [reply image/stiker]
│• ${prefix}ps4 [reply image/stiker]
│• ${prefix}pixelize [reply image/stiker]
│• ${prefix}missionpassed [reply image/stiker]
│• ${prefix}moustache [reply image/stiker]
│• ${prefix}lookwhatkarenhave [reply image/stiker]
│• ${prefix}jail [reply image/stiker]
│• ${prefix}invert [reply image/stiker]
│• ${prefix}instagram [reply image/stiker]
│• ${prefix}greyscale [reply image/stiker]
│• ${prefix}glitch [reply image/stiker]
│• ${prefix}gay [reply image/stiker]
│• ${prefix}frame [reply image/stiker]
│• ${prefix}fire [reply image/stiker]
│• ${prefix}distort [reply image/stiker]
│• ${prefix}dictator [reply image/stiker]
│• ${prefix}deepfry [reply image/stiker]
│• ${prefix}ddungeon [reply image/stiker]
│• ${prefix}circle [reply image/stiker]
│• ${prefix}challenger [reply image/stiker]
│• ${prefix}burn [reply image/stiker]
│• ${prefix}brazzers [reply image/stiker]
│• ${prefix}beautiful [reply image/stiker]
╰❒


╭─❒ 「 𝕊𝕥𝕚𝕔𝕜𝕖𝕣 𝔼𝕗𝕗𝕖𝕥𝕔 𝕄𝕖𝕟𝕦 」 
│• ${prefix}jail [reply image/stiker]
│• ${prefix}red [reply image/stiker]
│• ${prefix}gay [reply image/stiker]
│• ${prefix}bloo [reply image/stiker]
│• ${prefix}blue [reply image/stiker]
│• ${prefix}sepia [reply image/stiker]
│• ${prefix}green [reply image/stiker]
│• ${prefix}glass [reply image/stiker]
│• ${prefix}invert [reply image/stiker]
│• ${prefix}blurple [reply image/stiker]
│• ${prefix}blurple2 [reply image/stiker]
│• ${prefix}wasted [reply image/stiker]
│• ${prefix}passed [reply image/stiker]
│• ${prefix}triggered [reply image/stiker]
│• ${prefix}comrade [reply image/stiker]
│• ${prefix}greyscale [reply image/stiker]
│• ${prefix}threshold [reply image/stiker]
│• ${prefix}brightness [reply image/stiker]
│• ${prefix}invertgreyscale [reply image/stiker]
╰❒


╭─❒ 「 𝔻𝕠𝕨𝕟𝕝𝕠𝕒𝕕 𝕄𝕖𝕟𝕦 」 
│• ${prefix}tiktok [link]
│• ${prefix}tiktoknowm [link]
│• ${prefix}tiktokwm [link]
│• ${prefix}tiktokaudio [link]
│• ${prefix}ytdl [link]
│• ${prefix}play [query]
│• ${prefix}ytmp3 [link]
│• ${prefix}ytshortmp3 [link]
│• ${prefix}ytmp4 [link]
│• ${prefix}ytshorts [link]
│• ${prefix}facebook [link]
│• ${prefix}facebooksd [link]
│• ${prefix}facebookhd [link]
│• ${prefix}fbaudio [link]
│• ${prefix}igstory [username]
│• ${prefix}igdl [link]
│• ${prefix}igphoto [link]
│• ${prefix}igvideo [link]
│• ${prefix}igreels [link]
│• ${prefix}igtv [link]
│• ${prefix}soundcloud [link]
│• ${prefix}gitclone [link repo]
│• ${prefix}gitrepo [username repo branch]
│• ${prefix}mediafire [link]
│• ${prefix}twitter link
╰❒


╭─❒ 「 ℙ𝕣𝕚𝕞𝕓𝕠𝕟 𝕄𝕖𝕟𝕦 」
│• ${prefix}nomorhoki 887435047326
│• ${prefix}artimimpi [query]
│• ${prefix}artinama [query]
│• ${prefix}ramaljodoh
│• ${prefix}ramaljodohbali
│• ${prefix}suamiistri
│• ${prefix}ramalcinta
│• ${prefix}cocoknama
│• ${prefix}pasangan
│• ${prefix}jadiannikah
│• ${prefix}sifatusaha
│• ${prefix}rezeki
│• ${prefix}pekerjaan
│• ${prefix}nasib
│• ${prefix}penyakit
│• ${prefix}tarot
│• ${prefix}fengshui
│• ${prefix}haribaik
│• ${prefix}harisangar
│• ${prefix}harisial
│• ${prefix}nagahari
│• ${prefix}arahrezeki
│• ${prefix}peruntungan
│• ${prefix}weton
│• ${prefix}karakter
│• ${prefix}keberuntungan
│• ${prefix}memancing
│• ${prefix}masasubur
│• ${prefix}zodiak 
│• ${prefix}shio [query]
╰❒


╭─❒ 「 ℝ𝕒𝕟𝕕𝕠𝕞 𝔸𝕟𝕚𝕞𝕖 𝕄𝕖𝕟𝕦 」
│• ${prefix}loli
│• ${prefix}neko
│• ${prefix}waifu
│• ${prefix}shinobu
│• ${prefix}megumin
│• ${prefix}bully
│• ${prefix}cuddle
│• ${prefix}cry
│• ${prefix}hug
│• ${prefix}awoo
│• ${prefix}kiss
│• ${prefix}lick
│• ${prefix}pat
│• ${prefix}smug
│• ${prefix}bonk
│• ${prefix}yeet
│• ${prefix}blush
│• ${prefix}smile
│• ${prefix}wave
│• ${prefix}highfive
│• ${prefix}handhold
│• ${prefix}nom
│• ${prefix}bite
│• ${prefix}glomp
│• ${prefix}slap
│• ${prefix}kill
│• ${prefix}happy
│• ${prefix}wink
│• ${prefix}poke
│• ${prefix}dance
│• ${prefix}cringe
╰❒


╭─❒ 「 ℕ𝕤𝕗𝕨 & 𝕤𝕗𝕨 𝕄𝕖𝕟𝕦 」
│• ${prefix}ahegao <Ⓞ︎>
│• ${prefix}ass <Ⓞ︎>
│• ${prefix}bdsm <Ⓞ︎>
│• ${prefix}blowjob <Ⓞ︎>
│• ${prefix}cuckold <Ⓞ︎>
│• ${prefix}cum <Ⓞ︎>
│• ${prefix}ero <Ⓞ︎>
│• ${prefix}femdom <Ⓞ︎>
│• ${prefix}foot <Ⓞ︎>
│• ${prefix}gangbang <Ⓞ︎>
│• ${prefix}glasses <Ⓞ︎>
│• ${prefix}jahy <Ⓞ︎>
│• ${prefix}manga <Ⓞ︎>
│• ${prefix}masturbation <Ⓞ︎>
│• ${prefix}neko <Ⓞ︎>
│• ${prefix}orgy <Ⓞ︎>
│• ${prefix}panties <Ⓞ︎>
│• ${prefix}pussy <Ⓞ︎>
│• ${prefix}tentacles <Ⓞ︎>
│• ${prefix}thighs <Ⓞ︎>
│• ${prefix}yuri <Ⓞ︎>
│• ${prefix}feet <Ⓞ︎>
│• ${prefix}lewdkemo <Ⓞ︎>
│• ${prefix}woof <Ⓞ︎>
│• ${prefix}gasm <Ⓞ︎>
│• ${prefix}solo <Ⓞ︎>
│• ${prefix}8ball <Ⓞ︎>
│• ${prefix}goose <Ⓞ︎>
│• ${prefix}avatar <Ⓞ︎>
│• ${prefix}hololewd <Ⓞ︎>
│• ${prefix}gecg <Ⓞ︎>
│• ${prefix}holo <Ⓞ︎>
│• ${prefix}fox_girl <Ⓞ︎>
│• ${prefix}tits <Ⓞ︎>
│• ${prefix}eroyuri <Ⓞ︎>
│• ${prefix}holoyero <Ⓞ︎>
│• ${prefix}lizard <Ⓞ︎>
│• ${prefix}keta <Ⓞ︎>
│• ${prefix}eron <Ⓞ︎>
│• ${prefix}erok <Ⓞ︎>
│• ${prefix}kemonomimi <Ⓞ︎>
│• ${prefix}cum_jpg <Ⓞ︎>
│• ${prefix}nsfw_avatar <Ⓞ︎>
│• ${prefix}erofeet <Ⓞ︎>
│• ${prefix}meow <Ⓞ︎>
│• ${prefix}wallpaper <Ⓞ︎>
│• ${prefix}waifu <Ⓞ︎>
│• ${prefix}trap <Ⓞ︎>
│• ${prefix}lewd <Ⓞ︎>
│• ${prefix}pussy_jpg <Ⓞ︎>
│• ${prefix}futanari <Ⓞ︎>
│• ${prefix}lewdk <Ⓞ︎>
│• ${prefix}solog <Ⓞ︎>
│• ${prefix}smug <Ⓞ︎>
│• ${prefix}cum <Ⓞ︎>
│• ${prefix}slap <Ⓞ︎>
│• ${prefix}les <Ⓞ︎>
│• ${prefix}erokemo <Ⓞ︎>
│• ${prefix}bj <Ⓞ︎>
│• ${prefix}pwankg <Ⓞ︎>
│• ${prefix}pat <Ⓞ︎>
│• ${prefix}poke <Ⓞ︎>
│• ${prefix}feed <Ⓞ︎>
│• ${prefix}nsfw_neko_gif <Ⓞ︎>
│• ${prefix}pussy <Ⓞ︎>
│• ${prefix}feetg <Ⓞ︎>
│• ${prefix}baka <Ⓞ︎>
│• ${prefix}hug <Ⓞ︎>
│• ${prefix}kiss <Ⓞ︎>
│• ${prefix}tickle <Ⓞ︎>
│• ${prefix}spank <Ⓞ︎>
│• ${prefix}kuni <Ⓞ︎>
│• ${prefix}classic <Ⓞ︎>
│• ${prefix}boobs <Ⓞ︎>
│• ${prefix}anal <Ⓞ︎>
│• ${prefix}ngif <Ⓞ︎>
│• ${prefix}cuddle <Ⓞ︎>
│• ${prefix}zettai <Ⓞ︎>
╰❒


╭─❒ 「 𝔼𝕡𝕙𝕠𝕥𝕠360 𝕄𝕖𝕟𝕦 」
│• ${prefix}youtubegold
│• ${prefix}youtubesilver
│• ${prefix}facebookgold
│• ${prefix}facebooksilver
│• ${prefix}instagramgold
│• ${prefix}instagramsilver
│• ${prefix}twittergold
│• ${prefix}twittersilver
│• ${prefix}retrotext
│• ${prefix}halloweenbats
│• ${prefix}texthalloween
│• ${prefix}cardhalloween
│• ${prefix}birthdaycake
│• ${prefix}thundertext
│• ${prefix}icetext
│• ${prefix}milkcake
│• ${prefix}snowontext
│• ${prefix}metalstar
│• ${prefix}dragonfire
│• ${prefix}zombie3d
│• ${prefix}merrycard
│• ${prefix}generalexam 
│• ${prefix}viettel
│• ${prefix}embroider
│• ${prefix}graffititext
│• ${prefix}graffititext2
│• ${prefix}graffititext3
│• ${prefix}covergraffiti
│• ${prefix}moderngold
│• ${prefix}capercut
│• ${prefix}lovecard
│• ${prefix}heartflashlight
│• ${prefix}heartcup
│• ${prefix}sunglightshadow
│• ${prefix}graffiti3d
│• ${prefix}moderngoldsilver
│• ${prefix}moderngold2
│• ${prefix}moderngold3
│• ${prefix}fabrictext
│• ${prefix}masteryavatar
│• ${prefix}messagecoffee
│• ${prefix}announofwin
│• ${prefix}writeblood
│• ${prefix}horrorletter
│• ${prefix}writehorror
│• ${prefix}shirtclub
│• ${prefix}angelwing
│• ${prefix}christmasseason
│• ${prefix}projectyasuo
│• ${prefix}lovelycute
│• ${prefix}womansday
│• ${prefix}covergamepubg
│• ${prefix}nameonheart
│• ${prefix}funnyhalloween
│• ${prefix}lightningpubg
│• ${prefix}greetingcardvideo 
│• ${prefix}christmascard 
│• ${prefix}galaxybat
│• ${prefix}writegalaxy
│• ${prefix}starsnight
│• ${prefix}noeltext
│• ${prefix}textcakes
│• ${prefix}pubgbirthday
│• ${prefix}galaxywallpaper
│• ${prefix}pubgglicthvideo 
│• ${prefix}pubgmascotlogo
│• ${prefix}realembroidery
│• ${prefix}vintagetelevision
│• ${prefix}funnyanimations
│• ${prefix}glowingtext
│• ${prefix}textonglass
│• ${prefix}cartoonstyle
│• ${prefix}multicolor
│• ${prefix}watercolor2
│• ${prefix}textsky
│• ${prefix}summerbeach
│• ${prefix}1917text
│• ${prefix}puppycute
│• ${prefix}rosebirthday
╰❒


╭─❒ 「 𝕋𝕖𝕩𝕥ℙ𝕣𝕠 𝕄𝕖𝕟𝕦 」
│• ${prefix}halloween2 text|text2
│• ${prefix}horror text|text2
│• ${prefix}game8bit text|text2
│• ${prefix}layered text|text2
│• ${prefix}glitch2 text|text2
│• ${prefix}coolg text|text2
│• ${prefix}coolwg text|text2
│• ${prefix}realistic text|text2
│• ${prefix}space3d text|text2
│• ${prefix}gtiktok text|text2
│• ${prefix}stone text|text2
│• ${prefix}marvel text|text2
│• ${prefix}marvel2 text|text2
│• ${prefix}pornhub text|text2
│• ${prefix}avengers text|text2
│• ${prefix}metalr text|text2
│• ${prefix}metalg text|text2
│• ${prefix}metalg2 text|text2
│• ${prefix}halloween2 text|text2
│• ${prefix}lion text|text2
│• ${prefix}wolf_bw text|text2
│• ${prefix}wolf_g text|text2
│• ${prefix}ninja text|text2
│• ${prefix}3dsteel text|text2
│• ${prefix}horror2 text|text2
│• ${prefix}lava text|text2
│• ${prefix}bagel text|text2
│• ${prefix}blackpink text
│• ${prefix}rainbow2 text
│• ${prefix}water_pipe text
│• ${prefix}halloween text
│• ${prefix}sketch text
│• ${prefix}sircuit text
│• ${prefix}discovery text
│• ${prefix}metallic2 text
│• ${prefix}fiction text
│• ${prefix}demon text
│• ${prefix}transformer text
│• ${prefix}berry text
│• ${prefix}thunder text
│• ${prefix}magma text
│• ${prefix}3dstone text
│• ${prefix}neon text
│• ${prefix}glitch text
│• ${prefix}harry_potter text
│• ${prefix}embossed text
│• ${prefix}broken text
│• ${prefix}papercut text
│• ${prefix}gradient text
│• ${prefix}glossy text
│• ${prefix}watercolor text
│• ${prefix}multicolor text
│• ${prefix}neon_devil text
│• ${prefix}underwater text
│• ${prefix}bear text
│• ${prefix}wonderfulg text
│• ${prefix}christmas text
│• ${prefix}neon_light text
│• ${prefix}snow text
│• ${prefix}cloudsky text
│• ${prefix}luxury2 text
│• ${prefix}gradient2 text
│• ${prefix}summer text
│• ${prefix}writing text
│• ${prefix}engraved text
│• ${prefix}summery text
│• ${prefix}3dglue text
│• ${prefix}metaldark text
│• ${prefix}neonlight text
│• ${prefix}oscar text
│• ${prefix}minion text
│• ${prefix}holographic text
│• ${prefix}purple text
│• ${prefix}glossyb text
│• ${prefix}deluxe2 text
│• ${prefix}glossyc text
│• ${prefix}fabric text
│• ${prefix}neonc text
│• ${prefix}newyear text
│• ${prefix}newyear2 text
│• ${prefix}metals text
│• ${prefix}xmas text
│• ${prefix}blood text
│• ${prefix}darkg text
│• ${prefix}joker text
│• ${prefix}wicker text
│• ${prefix}natural text
│• ${prefix}firework text
│• ${prefix}skeleton text
│• ${prefix}balloon text
│• ${prefix}balloon2 text
│• ${prefix}balloon3 text
│• ${prefix}balloon4 text
│• ${prefix}balloon5 text
│• ${prefix}balloon6 text
│• ${prefix}balloon7 text
│• ${prefix}steel text
│• ${prefix}gloss text
│• ${prefix}denim text
│• ${prefix}decorate text
│• ${prefix}decorate2 text
│• ${prefix}peridot text
│• ${prefix}rock text
│• ${prefix}glass text
│• ${prefix}glass2 text
│• ${prefix}glass3 text
│• ${prefix}glass4 text
│• ${prefix}glass5 text
│• ${prefix}glass6 text
│• ${prefix}glass7 text
│• ${prefix}glass8 text
│• ${prefix}captain_as2 text
│• ${prefix}robot text
│• ${prefix}equalizer text
│• ${prefix}toxic text
│• ${prefix}sparkling text
│• ${prefix}sparkling2 text
│• ${prefix}sparkling3 text
│• ${prefix}sparkling4 text
│• ${prefix}sparkling5 text
│• ${prefix}sparkling6 text
│• ${prefix}sparkling7 text
│• ${prefix}decorative text
│• ${prefix}chocolate text
│• ${prefix}strawberry text
│• ${prefix}koifish text
│• ${prefix}bread text
│• ${prefix}matrix text
│• ${prefix}blood2 text
│• ${prefix}neonligth2 text
│• ${prefix}thunder2 text
│• ${prefix}3dbox text
│• ${prefix}neon2 text
│• ${prefix}roadw text
│• ${prefix}bokeh text
│• ${prefix}gneon text
│• ${prefix}advanced text
│• ${prefix}dropwater text
│• ${prefix}wall text
│• ${prefix}chrismast text
│• ${prefix}honey text
│• ${prefix}drug text
│• ${prefix}marble text
│• ${prefix}marble2 text
│• ${prefix}ice text
│• ${prefix}juice text
│• ${prefix}rusty text
│• ${prefix}abstra text
│• ${prefix}biscuit text
│• ${prefix}wood text
│• ${prefix}scifi text
│• ${prefix}metalr text
│• ${prefix}purpleg text
│• ${prefix}shiny text 
│• ${prefix}jewelry text
│• ${prefix}jewelry2 text
│• ${prefix}jewelry3 text
│• ${prefix}jewelry4 text
│• ${prefix}jewelry5 text
│• ${prefix}jewelry6 text
│• ${prefix}jewelry7 text
│• ${prefix}jewelry8 text
│• ${prefix}metalh text
│• ${prefix}golden text
│• ${prefix}glitter text
│• ${prefix}glitter2 text
│• ${prefix}glitter3 text
│• ${prefix}glitter4 text
│• ${prefix}glitter5 text
│• ${prefix}glitter6 text
│• ${prefix}glitter7 text
│• ${prefix}metale text
│• ${prefix}carbon text
│• ${prefix}candy text
│• ${prefix}metalb text
│• ${prefix}gemb text
│• ${prefix}3dchrome text
│• ${prefix}metalb2 text
│• ${prefix}metalg text
│• ${prefix}metalg text
╰❒


╭─❒ 「 𝕆𝕥𝕙𝕖𝕣𝕤 𝕄𝕖𝕟𝕦 」
│• ${prefix}afk [reason]
│• ${prefix}translate kode_bahasa text
│• ${prefix}kalkulator [query]
│• ${prefix}smeme [text]
│• ${prefix}smeme2 [text|text]
│• ${prefix}memegen [text|text]
│• ${prefix}attp [text] <🅔︎>
│• ${prefix}ttp [text] <🅔︎>
│• ${prefix}botgrup
│• ${prefix}igowner
╰❒


╭─❒ 「 𝔾𝕒𝕞𝕖 𝕄𝕖𝕟𝕦 」
│• ${prefix}kuismath
│• ${prefix}tebak [option]
│• ${prefix}tekateki
│• ${prefix}susunkata
│• ${prefix}caklontong
╰❒


╭─❒ 「 𝔸𝕤𝕦𝕡𝕒𝕟 𝕄𝕖𝕟𝕦 」
│• ${prefix}chika
│• ${prefix}delvira
│• ${prefix}ayu
│• ${prefix}bunga
│• ${prefix}aura
│• ${prefix}nisa
│• ${prefix}ziva
│• ${prefix}yana
│• ${prefix}viona
│• ${prefix}syania
│• ${prefix}riri
│• ${prefix}syifa
│• ${prefix}mama_gina
│• ${prefix}alcakenya
│• ${prefix}mangayutri
│• ${prefix}rikagusriani
│• ${prefix}asupan
│• ${prefix}bocil
│• ${prefix}geayubi
│• ${prefix}santuy
│• ${prefix}ukhty
│• ${prefix}syifa
╰❒


╭─❒ 「 𝕋𝕖𝕝𝕖𝕘𝕣𝕒𝕞 𝕊𝕥𝕚𝕔𝕜𝕖𝕣 𝕄𝕖𝕟𝕦 」
│• ${prefix}awoawo
│• ${prefix}benedict
│• ${prefix}chat
│• ${prefix}dbfly
│• ${prefix}dino_kuning
│• ${prefix}doge
│• ${prefix}gojosatoru
│• ${prefix}hope_boy
│• ${prefix}jisoo
│• ${prefix}kr_robot
│• ${prefix}kucing
│• ${prefix}lonte
│• ${prefix}manusia_lidi
│• ${prefix}menjamet
│• ${prefix}meow
│• ${prefix}nicholas
│• ${prefix}patrick
│• ${prefix}popoci
│• ${prefix}sponsbob
│• ${prefix}kawan_sponsbob
│• ${prefix}tyni
╰❒


╭─❒ 「 ℝ𝕒𝕟𝕕𝕠𝕞 ℂ𝕖𝕨𝕖𝕜 𝕄𝕖𝕟𝕦 」
│• ${prefix}china 
│• ${prefix}indonesia 
│• ${prefix}malaysia 
│• ${prefix}thailand 
│• ${prefix}korea 
│• ${prefix}japan 
│• ${prefix}vietnam 
│• ${prefix}jenni 
│• ${prefix}jiso 
│• ${prefix}lisa  
│• ${prefix}rose
╰❒


╭─❒ 「 𝕃𝕠𝕘𝕠 𝕄𝕖𝕟𝕦 」
│• ${prefix}coverbannerlol text|heroes
│• ${prefix}pubglogomaker text|style
│• ${prefix}colorfulpubg text|color
│• ${prefix}astronotspace text|style
│• ${prefix}wallpaperaov text|heroes
│• ${prefix}maketeamlogo text|style
│• ${prefix}circlemarcotteam text|logo
│• ${prefix}wallpaperml text|heroes
│• ${prefix}dragonballfb text|character
│• ${prefix}bannerofaov text|character
│• ${prefix}effect3donbeach text|background
│• ${prefix}cutegirlgamer text|logo
│• ${prefix}footballteam text|logo
│• ${prefix}beautifulshimmering text|champion
│• ${prefix}pubgcutelogo text|logo
│• ${prefix}elegantrotation text|logo
│• ${prefix}logogamingassasin text|logo
│• ${prefix}introvideomaker text|logo
│• ${prefix}gaminglogo4fvs text|logo
│• ${prefix}blueneon text|logo
│• ${prefix}metalmascot text|logo
│• ${prefix}anonymous2 text|style
│• ${prefix}lolpentakill text|style
│• ${prefix}avatarleagueofking text|style
│• ${prefix}avatarff text|character
│• ${prefix}overwatchwallpaper text|character
│• ${prefix}rovwallpaperhd text|hero
│• ${prefix}rovwallpaper text|avatar
│• ${prefix}beautifulgalaxylol text|style
│• ${prefix}crossfirecover text|character
│• ${prefix}lolwallpaper text|wallpaper
│• ${prefix}coverdota2 text|heroes
│• ${prefix}coverleagueofking text|character
│• ${prefix}avatar3q360 text|avatar
│• ${prefix}coverofwarface text|character
│• ${prefix}newlolavatar text|avatar
│• ${prefix}csgocover text|background
│• ${prefix}coverloknew text|hero
│• ${prefix}coverfblol text|letters
│• ${prefix}overwatchcover text|hero
│• ${prefix}crossfirestyle text|avatar
│• ${prefix}avatarlolbyname text|style
│• ${prefix}lolcoverbyname text|avatar
│• ${prefix}cyberhunterfb text|character
│• ${prefix}coverfreefirefb text|character
│• ${prefix}gamingmascot text|style
│• ${prefix}coveronepiecefb text|character
│• ${prefix}bannerytcsgo text|banner
│• ${prefix}fbgamepubgcover text|template
│• ${prefix}banneroflol text|text2|banner
│• ${prefix}bannerofaov2 text|text2|banner
│• ${prefix}teamlogo text|text2|background
│• ${prefix}companylogo2 text|text2|background
│• ${prefix}companylogo text|text2|background
│• ${prefix}gradientlogo text|text2|background
│• ${prefix}pencilsketch text|text2|icon
│• ${prefix}gunlogogaming text|text2|background
│• ${prefix}banneroffreefire text|text2|background
│• ${prefix}letterlogos text|text2|thumb
│• ${prefix}bannerofoverwatch text|text2|background
│• ${prefix}bannerofapex text|text2|background
│• ${prefix}bannerofpubg text|text2|background
│• ${prefix}mascotstyle text|text2|thumb
│• ${prefix}logoaccording text|text2|thumb
│• ${prefix}avataroverwatch text|text2|thumb
╰❒


╭─❒ 「 𝕀𝕤𝕝𝕒𝕞𝕚𝕔 𝕄𝕖𝕟𝕦 」
│• ${prefix}asmaulhusna
│• ${prefix}kisahnabi [nabi]
│• ${prefix}jadwalshalat [daerah]
│• ${prefix}randomquran
│• ${prefix}randomquran2
│• ${prefix}listsurah
│• ${prefix}tafsirsurah [surah]
│• ${prefix}alquranaudio [surah|ayat]
╰❒


╭─❒ 「 𝕊𝕠𝕦𝕟𝕕 𝕄𝕖𝕟𝕦 」
│• ${prefix}sound1
│• ${prefix}sound2
│• ${prefix}sound3
│• ${prefix}sound4
│• ${prefix}sound5
│• ${prefix}sound6
│• ${prefix}sound7
│• ${prefix}sound8
│• ${prefix}sound9
│• ${prefix}sound10
│• ${prefix}sound11
│• ${prefix}sound12
│• ${prefix}sound13
│• ${prefix}sound14
│• ${prefix}sound15
│• ${prefix}sound16
│• ${prefix}sound17
│• ${prefix}sound18 
│• ${prefix}sound19
│• ${prefix}sound20
│• ${prefix}sound21
│• ${prefix}sound22
│• ${prefix}sound23
│• ${prefix}sound24
│• ${prefix}sound25
│• ${prefix}sound26
│• ${prefix}sound27
│• ${prefix}sound28
│• ${prefix}sound29
│• ${prefix}sound30
│• ${prefix}sound31
│• ${prefix}sound32
│• ${prefix}sound33
│• ${prefix}sound34
│• ${prefix}sound35
│• ${prefix}sound36
│• ${prefix}sound37
│• ${prefix}sound38
│• ${prefix}sound39
│• ${prefix}sound40
│• ${prefix}sound41
│• ${prefix}sound42
│• ${prefix}sound43
│• ${prefix}sound44
│• ${prefix}sound45
│• ${prefix}sound46
│• ${prefix}sound47
│• ${prefix}sound48
│• ${prefix}sound49
│• ${prefix}sound50
│• ${prefix}sound51
│• ${prefix}sound52
│• ${prefix}sound53
│• ${prefix}sound54
│• ${prefix}sound55
│• ${prefix}sound56
│• ${prefix}sound57
│• ${prefix}sound58
│• ${prefix}sound59
│• ${prefix}sound60
│• ${prefix}sound61
│• ${prefix}sound62
│• ${prefix}sound63
│• ${prefix}sound64
│• ${prefix}sound65
│• ${prefix}sound66
│• ${prefix}sound67
│• ${prefix}sound68
│• ${prefix}sound69
│• ${prefix}sound70
╰❒


╭─❒ 「 𝕋𝕙𝕒𝕟𝕜𝕤 𝕋𝕠 」 
├ 𝙰𝚕𝚕𝚊𝚑 𝚂𝚆𝚃. 💕
├ 𝙼𝚢 𝙾𝚛𝚝𝚞
├ 𝚆𝚑𝚊𝚝𝚜𝙰𝚙𝚙
├ 𝚃𝚎𝚛𝚖𝚞𝚡
├ 𝙼𝚃 𝙼𝚊𝚗𝚊𝚐𝚎𝚛
├ 𝙾𝚛𝚊𝚗𝚐-𝙾𝚛𝚊𝚗𝚐 𝚈𝚊𝚗𝚐 𝙱𝚎𝚛𝚍𝚘𝚗𝚊𝚜𝚒
├ 𝙼𝚢 𝚄𝚜𝚎𝚛 𝙱𝚘𝚝𝚣
├ 𝙿𝚊𝚛𝚊 𝙿𝚎𝚗𝚍𝚞𝚔𝚞𝚗𝚐
├ 𝙸𝚗𝚍𝚘𝚜𝚊𝚝
├ 𝙿𝚎𝚗𝚢𝚎𝚍𝚒𝚊 𝙼𝚘𝚍𝚞𝚕𝚎
├ 𝙰𝚗𝚍 𝙰𝚕𝚕 𝚂𝚞𝚙𝚙𝚘𝚛𝚝
╰❒
    `
}

exports.rules = (prefix) => {
    return `
*── 「 RULES AND FAQ 」 ──*

1. Don't spam bots. 🙅
2. Don't call bots. ☎️
3. Don't compare bots 👍

🗯️ Bot not or slow to respond ?
➡️ May be affected by network, signal, banned by Whatsapp and some reason.

🗯️ Can I add to the group?
➡️ For that it depends on the bot owner himself

🗯️ What's the prefix?
➡️ This bot uses multi prefix & you can use it without prefix

If you understand the rules, please type *${prefix}menu* to start!

⚠️ All bot policies and conditions are subject to change at any time 

Thank you! 
`
}
exports.welcome = () =>{
	return`Don't forget the introduction sis 🤗
	
╭ Name :
├ Age :
├ Gender :
├ From country :
╰❒  Please obey the group rules, sis ~`
}
exports.leave = () =>{
	return`Well why out 😣 Mentally safe, right? >.<
Goodbye`
}
exports.source = () =>{
return`*------「 SOURCE CODE 」 ------*

GK ADA USCA ESCE-USCA ESCE, JOIN AJA GRUP GW

*GROUP 1 :*
https://chat.whatsapp.com/FyzFG6U2BaeLX5Te8PDvV7

*GROUP 2 :*
https://chat.whatsapp.com/FlUqXS0bje12Fxdw8BVykk

*GROUP 3 :*
https://chat.whatsapp.com/HELzahc0jAvFZA6bJIbzFQ

_Dont Forget To Join Yeah!_
`
}
exports.tos = (ownernomer) => {
    return `
*-------「 DONATE 」 -------*

Hai kak ☺️ 
Kalian bisa mendukung saya agar bot ini tetap up to date dengan cara donasi

Berapapun donasi kalian akan sangat berarti 👍

• Sqan QR Dana : https://telegra.ph/file/4d91b25a776179f342588.jpg
• Sqan QR GoPay : https://telegra.ph/file/0f1f1b37a5577c73be0f6.jpg
• Transfer Pulsa (Indosat/My IM3) : 085872761910


Gamsahabnida🙏!

Contact person Owner:
wa.me/${ownernomer}

    `
}

exports.info = (prefix) =>{
	return`╭─❒ 「 𝔹𝕠𝕥𝕫 𝕀𝕟𝕗𝕠 」 
│• ${prefix}owner
│• ${prefix}rules
│• ${prefix}sc
│• ${prefix}ping
│• ${prefix}runtime
│• ${prefix}botstatus
│• ${prefix}donate
│• ${prefix}artisymbol
╰❒
`}

exports.ownermenu = (prefix) =>{
return`╭─❒ 「 𝕆𝕨𝕟𝕖𝕣 𝕄𝕖𝕟𝕦 」 
│• < evaluate
│• > evaluate
│• $ exec
│• => exec
│• ${prefix}setmenu [query]
│• ${prefix}setmenu templateLocation
│• ${prefix}setmenu templateTenor
│• ${prefix}setmenu katalog
│• ${prefix}setmenu katalog2
│• ${prefix}setmenu list
│• ${prefix}setwm packname|author
│• ${prefix}sendsesi
│• ${prefix}listpc
│• ${prefix}listgc
│• ${prefix}broadcast [text]
│• ${prefix}bc [text]
│• ${prefix}bcgc [text]
│• ${prefix}nsfw [on/off]
│• ${prefix}mute [on/off]
│• ${prefix}banchat
│• ${prefix}unbanchat
│• ${prefix}autorespond [on/off]
│• ${prefix}antiviewonce [on/off]
│• ${prefix}autobio [on/off]
│• ${prefix}join [link]
│• ${prefix}self
│• ${prefix}public [only bot]
│• ${prefix}del [pesan bot]
│• ${prefix}setppbot [reply image]
╰❒
`}

exports.database = (prefix) =>{
	return`╭─❒ 「 𝔻𝕒𝕥𝕒𝕓𝕒𝕤𝕖 𝕄𝕖𝕟𝕦 」 
│• ${prefix}setcmd [reply stiker]
│• ${prefix}delcmd [reply stiker]
│• ${prefix}listcmd
│• ${prefix}absen
│• ${prefix}cekabsen
│• ${prefix}deleteabsen
│• ${prefix}absenstart
│• ${prefix}addmsg [nama file]
│• ${prefix}getmsg [nama file]
│• ${prefix}listmsg
│• ${prefix}delmsg [nama file]
╰❒
`}

exports.group = (prefix) =>{
	return`╭─❒ 「 𝔾𝕣𝕠𝕦𝕡 𝕄𝕖𝕟𝕦 」 
│• ${prefix}listonline
│• ${prefix}sider
│• ${prefix}wm packname|author
│• ${prefix}infochat
│• ${prefix}setdesk [text]
│• ${prefix}setppgrup [reply image]
│• ${prefix}antilink [on/off]
│• ${prefix}revoke
│• ${prefix}leave
│• ${prefix}add [62***]
│• ${prefix}kick @tag
│• ${prefix}leave
│• ${prefix}linkgc
│• ${prefix}take packname|author
│• ${prefix}group [open/close]
│• ${prefix}tagall [text]
│• ${prefix}hidetag [text]
╰❒
`}

exports.anime = (prefix) =>{
	return`╭─❒ 「 𝔸𝕟𝕚𝕞𝕖 𝕄𝕖𝕟𝕦 」 
│• ${prefix}quotesanime
│• ${prefix}anime [query]
│• ${prefix}manga [query]
│• ${prefix}character [query]
╰❒
`}

exports.tag = (prefix) =>{
	return`╭─❒ 「 𝕋𝕒𝕘 𝕄𝕖𝕟𝕦 」 
│• ${prefix}stickertag
│• ${prefix}videotag [query]
│• ${prefix}vntag [query]
│• ${prefix}imagetag [query]
╰❒
`}

exports.stalk = (prefix) =>{
	return`╭─❒ 「 𝕊𝕥𝕒𝕝𝕜𝕚𝕟𝕘 𝕄𝕖𝕟𝕦 」 
│• ${prefix}igstalk [username]
│• ${prefix}ghstalk [username]
│• ${prefix}ytstalk [channel]
╰❒
`}

exports.search = (prefix) =>{
	return`╭─❒ 「 𝕊𝕖𝕒𝕣𝕔𝕙 𝕄𝕖𝕟𝕦 」 
│• ${prefix}ytsearch [query]
│• ${prefix}wallpaper [query]
│• ${prefix}google [query]
│• ${prefix}wikimedia [query]
│• ${prefix}hentai
│• ${prefix}wattpad [query]
│• ${prefix}webtoons [query]
│• ${prefix}drakor [query]
│• ${prefix}pinterest [query]
╰❒
`}

exports.converter = (prefix) =>{
	return`╭─❒ 「 ℂ𝕠𝕟𝕧𝕖𝕣𝕥𝕖𝕣 𝕄𝕖𝕟𝕦 」 
│• ${prefix}toaudio [video]
│• ${prefix}tomp3 [video]
│• ${prefix}tovn [video]
│• ${prefix}stiker [reply image]
│• ${prefix}tourl [image/video]
│• ${prefix}togif [sticker]
│• ${prefix}tomp4 [sticker]
│• ${prefix}toimg [reply sticker]
╰❒
`}

exports.effect = (prefix) =>{
	return`╭─❒ 「 𝕀𝕞𝕒𝕘𝕖 𝔼𝕗𝕗𝕖𝕔𝕥 𝕄𝕖𝕟𝕦 」 
│• ${prefix}wanted [reply image/stiker]
│• ${prefix}utatoo [reply image/stiker]
│• ${prefix}unsharpen [reply image/stiker]
│• ${prefix}thanos [reply image/stiker]
│• ${prefix}sniper [reply image/stiker]
│• ${prefix}sharpen [reply image/stiker]
│• ${prefix}sepia [reply image/stiker]
│• ${prefix}scary [reply image/stiker]
│• ${prefix}rip [reply image/stiker]
│• ${prefix}redple [reply image/stiker]
│• ${prefix}rejected [reply image/stiker]
│• ${prefix}posterize [reply image/stiker]
│• ${prefix}ps4 [reply image/stiker]
│• ${prefix}pixelize [reply image/stiker]
│• ${prefix}missionpassed [reply image/stiker]
│• ${prefix}moustache [reply image/stiker]
│• ${prefix}lookwhatkarenhave [reply image/stiker]
│• ${prefix}jail [reply image/stiker]
│• ${prefix}invert [reply image/stiker]
│• ${prefix}instagram [reply image/stiker]
│• ${prefix}greyscale [reply image/stiker]
│• ${prefix}glitch [reply image/stiker]
│• ${prefix}gay [reply image/stiker]
│• ${prefix}frame [reply image/stiker]
│• ${prefix}fire [reply image/stiker]
│• ${prefix}distort [reply image/stiker]
│• ${prefix}dictator [reply image/stiker]
│• ${prefix}deepfry [reply image/stiker]
│• ${prefix}ddungeon [reply image/stiker]
│• ${prefix}circle [reply image/stiker]
│• ${prefix}challenger [reply image/stiker]
│• ${prefix}burn [reply image/stiker]
│• ${prefix}brazzers [reply image/stiker]
│• ${prefix}beautiful [reply image/stiker]
╰❒
`}

//
exports.effect2 = (prefix) =>{
	return`╭─❒ 「 𝕊𝕥𝕚𝕔𝕜𝕖𝕣 𝔼𝕗𝕗𝕖𝕔𝕥 𝕄𝕖𝕟𝕦 」 
│• ${prefix}jail [reply image/stiker]
│• ${prefix}red [reply image/stiker]
│• ${prefix}gay [reply image/stiker]
│• ${prefix}bloo [reply image/stiker]
│• ${prefix}blue [reply image/stiker]
│• ${prefix}sepia [reply image/stiker]
│• ${prefix}green [reply image/stiker]
│• ${prefix}glass [reply image/stiker]
│• ${prefix}invert [reply image/stiker]
│• ${prefix}blurple [reply image/stiker]
│• ${prefix}blurple2 [reply image/stiker]
│• ${prefix}wasted [reply image/stiker]
│• ${prefix}passed [reply image/stiker]
│• ${prefix}triggered [reply image/stiker]
│• ${prefix}comrade [reply image/stiker]
│• ${prefix}greyscale [reply image/stiker]
│• ${prefix}threshold [reply image/stiker]
│• ${prefix}brightness [reply image/stiker]
│• ${prefix}invertgreyscale [reply image/stiker]
╰❒`
}

exports.download = (prefix) =>{
return`╭─❒ 「 𝔻𝕠𝕨𝕟𝕝𝕠𝕒𝕕 𝕄𝕖𝕟𝕦 」 
│• ${prefix}tiktok [link]
│• ${prefix}tiktoknowm [link]
│• ${prefix}tiktokwm [link]
│• ${prefix}tiktokaudio [link]
│• ${prefix}ytdl [link]
│• ${prefix}play [query]
│• ${prefix}ytmp3 [link]
│• ${prefix}ytshortmp3 [link]
│• ${prefix}ytmp4 [link]
│• ${prefix}ytshorts [link]
│• ${prefix}facebook [link]
│• ${prefix}facebooksd [link]
│• ${prefix}facebookhd [link]
│• ${prefix}fbaudio [link]
│• ${prefix}igstory [username]
│• ${prefix}igdl [link]
│• ${prefix}igphoto [link]
│• ${prefix}igvideo [link]
│• ${prefix}igreels [link]
│• ${prefix}igtv [link]
│• ${prefix}soundcloud [link]
│• ${prefix}gitclone [link repo]
│• ${prefix}gitrepo [username repo branch]
│• ${prefix}mediafire [link]
│• ${prefix}twitter link
╰❒
`
}

exports.ranime = (prefix) =>{
	return`╭─❒ 「 ℝ𝕒𝕟𝕕𝕠𝕞 𝔸𝕟𝕚𝕞𝕖 𝕄𝕖𝕟𝕦 」
│• ${prefix}loli
│• ${prefix}neko
│• ${prefix}waifu
│• ${prefix}shinobu
│• ${prefix}megumin
│• ${prefix}bully
│• ${prefix}cuddle
│• ${prefix}cry
│• ${prefix}hug
│• ${prefix}awoo
│• ${prefix}kiss
│• ${prefix}lick
│• ${prefix}pat
│• ${prefix}smug
│• ${prefix}bonk
│• ${prefix}yeet
│• ${prefix}blush
│• ${prefix}smile
│• ${prefix}wave
│• ${prefix}highfive
│• ${prefix}handhold
│• ${prefix}nom
│• ${prefix}bite
│• ${prefix}glomp
│• ${prefix}slap
│• ${prefix}kill
│• ${prefix}happy
│• ${prefix}wink
│• ${prefix}poke
│• ${prefix}dance
│• ${prefix}cringe
╰❒
`
}

exports.nsfw = (prefix) =>{
	return`╭─❒ 「 ℕ𝕤𝕗𝕨 & 𝕤𝕗𝕨 𝕄𝕖𝕟𝕦 」
│• ${prefix}ahegao <Ⓞ︎>
│• ${prefix}ass <Ⓞ︎>
│• ${prefix}bdsm <Ⓞ︎>
│• ${prefix}blowjob <Ⓞ︎>
│• ${prefix}cuckold <Ⓞ︎>
│• ${prefix}cum <Ⓞ︎>
│• ${prefix}ero <Ⓞ︎>
│• ${prefix}femdom <Ⓞ︎>
│• ${prefix}foot <Ⓞ︎>
│• ${prefix}gangbang <Ⓞ︎>
│• ${prefix}glasses <Ⓞ︎>
│• ${prefix}jahy <Ⓞ︎>
│• ${prefix}manga <Ⓞ︎>
│• ${prefix}masturbation <Ⓞ︎>
│• ${prefix}neko <Ⓞ︎>
│• ${prefix}orgy <Ⓞ︎>
│• ${prefix}panties <Ⓞ︎>
│• ${prefix}pussy <Ⓞ︎>
│• ${prefix}tentacles <Ⓞ︎>
│• ${prefix}thighs <Ⓞ︎>
│• ${prefix}yuri <Ⓞ︎>
│• ${prefix}feet <Ⓞ︎>
│• ${prefix}lewdkemo <Ⓞ︎>
│• ${prefix}woof <Ⓞ︎>
│• ${prefix}gasm <Ⓞ︎>
│• ${prefix}solo <Ⓞ︎>
│• ${prefix}8ball <Ⓞ︎>
│• ${prefix}goose <Ⓞ︎>
│• ${prefix}avatar <Ⓞ︎>
│• ${prefix}hololewd <Ⓞ︎>
│• ${prefix}gecg <Ⓞ︎>
│• ${prefix}holo <Ⓞ︎>
│• ${prefix}fox_girl <Ⓞ︎>
│• ${prefix}tits <Ⓞ︎>
│• ${prefix}eroyuri <Ⓞ︎>
│• ${prefix}holoyero <Ⓞ︎>
│• ${prefix}lizard <Ⓞ︎>
│• ${prefix}keta <Ⓞ︎>
│• ${prefix}eron <Ⓞ︎>
│• ${prefix}erok <Ⓞ︎>
│• ${prefix}kemonomimi <Ⓞ︎>
│• ${prefix}cum_jpg <Ⓞ︎>
│• ${prefix}nsfw_avatar <Ⓞ︎>
│• ${prefix}erofeet <Ⓞ︎>
│• ${prefix}meow <Ⓞ︎>
│• ${prefix}wallpaper <Ⓞ︎>
│• ${prefix}waifu <Ⓞ︎>
│• ${prefix}trap <Ⓞ︎>
│• ${prefix}lewd <Ⓞ︎>
│• ${prefix}pussy_jpg <Ⓞ︎>
│• ${prefix}futanari <Ⓞ︎>
│• ${prefix}lewdk <Ⓞ︎>
│• ${prefix}solog <Ⓞ︎>
│• ${prefix}smug <Ⓞ︎>
│• ${prefix}cum <Ⓞ︎>
│• ${prefix}slap <Ⓞ︎>
│• ${prefix}les <Ⓞ︎>
│• ${prefix}erokemo <Ⓞ︎>
│• ${prefix}bj <Ⓞ︎>
│• ${prefix}pwankg <Ⓞ︎>
│• ${prefix}pat <Ⓞ︎>
│• ${prefix}poke <Ⓞ︎>
│• ${prefix}feed <Ⓞ︎>
│• ${prefix}nsfw_neko_gif <Ⓞ︎>
│• ${prefix}pussy <Ⓞ︎>
│• ${prefix}feetg <Ⓞ︎>
│• ${prefix}baka <Ⓞ︎>
│• ${prefix}hug <Ⓞ︎>
│• ${prefix}kiss <Ⓞ︎>
│• ${prefix}tickle <Ⓞ︎>
│• ${prefix}spank <Ⓞ︎>
│• ${prefix}kuni <Ⓞ︎>
│• ${prefix}classic <Ⓞ︎>
│• ${prefix}boobs <Ⓞ︎>
│• ${prefix}anal <Ⓞ︎>
│• ${prefix}ngif <Ⓞ︎>
│• ${prefix}cuddle <Ⓞ︎>
│• ${prefix}zettai <Ⓞ︎>
╰❒
`
}

exports.textpro = (prefix) =>{
	return`╭─❒ 「 𝕋𝕖𝕩𝕥ℙ𝕣𝕠 𝕄𝕖𝕟𝕦 」
│• ${prefix}halloween2 text|text2
│• ${prefix}horror text|text2
│• ${prefix}game8bit text|text2
│• ${prefix}layered text|text2
│• ${prefix}glitch2 text|text2
│• ${prefix}coolg text|text2
│• ${prefix}coolwg text|text2
│• ${prefix}realistic text|text2
│• ${prefix}space3d text|text2
│• ${prefix}gtiktok text|text2
│• ${prefix}stone text|text2
│• ${prefix}marvel text|text2
│• ${prefix}marvel2 text|text2
│• ${prefix}pornhub text|text2
│• ${prefix}avengers text|text2
│• ${prefix}metalr text|text2
│• ${prefix}metalg text|text2
│• ${prefix}metalg2 text|text2
│• ${prefix}halloween2 text|text2
│• ${prefix}lion text|text2
│• ${prefix}wolf_bw text|text2
│• ${prefix}wolf_g text|text2
│• ${prefix}ninja text|text2
│• ${prefix}3dsteel text|text2
│• ${prefix}horror2 text|text2
│• ${prefix}lava text|text2
│• ${prefix}bagel text|text2
│• ${prefix}blackpink text
│• ${prefix}rainbow2 text
│• ${prefix}water_pipe text
│• ${prefix}halloween text
│• ${prefix}sketch text
│• ${prefix}sircuit text
│• ${prefix}discovery text
│• ${prefix}metallic2 text
│• ${prefix}fiction text
│• ${prefix}demon text
│• ${prefix}transformer text
│• ${prefix}berry text
│• ${prefix}thunder text
│• ${prefix}magma text
│• ${prefix}3dstone text
│• ${prefix}neon text
│• ${prefix}glitch text
│• ${prefix}harry_potter text
│• ${prefix}embossed text
│• ${prefix}broken text
│• ${prefix}papercut text
│• ${prefix}gradient text
│• ${prefix}glossy text
│• ${prefix}watercolor text
│• ${prefix}multicolor text
│• ${prefix}neon_devil text
│• ${prefix}underwater text
│• ${prefix}bear text
│• ${prefix}wonderfulg text
│• ${prefix}christmas text
│• ${prefix}neon_light text
│• ${prefix}snow text
│• ${prefix}cloudsky text
│• ${prefix}luxury2 text
│• ${prefix}gradient2 text
│• ${prefix}summer text
│• ${prefix}writing text
│• ${prefix}engraved text
│• ${prefix}summery text
│• ${prefix}3dglue text
│• ${prefix}metaldark text
│• ${prefix}neonlight text
│• ${prefix}oscar text
│• ${prefix}minion text
│• ${prefix}holographic text
│• ${prefix}purple text
│• ${prefix}glossyb text
│• ${prefix}deluxe2 text
│• ${prefix}glossyc text
│• ${prefix}fabric text
│• ${prefix}neonc text
│• ${prefix}newyear text
│• ${prefix}newyear2 text
│• ${prefix}metals text
│• ${prefix}xmas text
│• ${prefix}blood text
│• ${prefix}darkg text
│• ${prefix}joker text
│• ${prefix}wicker text
│• ${prefix}natural text
│• ${prefix}firework text
│• ${prefix}skeleton text
│• ${prefix}balloon text
│• ${prefix}balloon2 text
│• ${prefix}balloon3 text
│• ${prefix}balloon4 text
│• ${prefix}balloon5 text
│• ${prefix}balloon6 text
│• ${prefix}balloon7 text
│• ${prefix}steel text
│• ${prefix}gloss text
│• ${prefix}denim text
│• ${prefix}decorate text
│• ${prefix}decorate2 text
│• ${prefix}peridot text
│• ${prefix}rock text
│• ${prefix}glass text
│• ${prefix}glass2 text
│• ${prefix}glass3 text
│• ${prefix}glass4 text
│• ${prefix}glass5 text
│• ${prefix}glass6 text
│• ${prefix}glass7 text
│• ${prefix}glass8 text
│• ${prefix}captain_as2 text
│• ${prefix}robot text
│• ${prefix}equalizer text
│• ${prefix}toxic text
│• ${prefix}sparkling text
│• ${prefix}sparkling2 text
│• ${prefix}sparkling3 text
│• ${prefix}sparkling4 text
│• ${prefix}sparkling5 text
│• ${prefix}sparkling6 text
│• ${prefix}sparkling7 text
│• ${prefix}decorative text
│• ${prefix}chocolate text
│• ${prefix}strawberry text
│• ${prefix}koifish text
│• ${prefix}bread text
│• ${prefix}matrix text
│• ${prefix}blood2 text
│• ${prefix}neonligth2 text
│• ${prefix}thunder2 text
│• ${prefix}3dbox text
│• ${prefix}neon2 text
│• ${prefix}roadw text
│• ${prefix}bokeh text
│• ${prefix}gneon text
│• ${prefix}advanced text
│• ${prefix}dropwater text
│• ${prefix}wall text
│• ${prefix}chrismast text
│• ${prefix}honey text
│• ${prefix}drug text
│• ${prefix}marble text
│• ${prefix}marble2 text
│• ${prefix}ice text
│• ${prefix}juice text
│• ${prefix}rusty text
│• ${prefix}abstra text
│• ${prefix}biscuit text
│• ${prefix}wood text
│• ${prefix}scifi text
│• ${prefix}metalr text
│• ${prefix}purpleg text
│• ${prefix}shiny text 
│• ${prefix}jewelry text
│• ${prefix}jewelry2 text
│• ${prefix}jewelry3 text
│• ${prefix}jewelry4 text
│• ${prefix}jewelry5 text
│• ${prefix}jewelry6 text
│• ${prefix}jewelry7 text
│• ${prefix}jewelry8 text
│• ${prefix}metalh text
│• ${prefix}golden text
│• ${prefix}glitter text
│• ${prefix}glitter2 text
│• ${prefix}glitter3 text
│• ${prefix}glitter4 text
│• ${prefix}glitter5 text
│• ${prefix}glitter6 text
│• ${prefix}glitter7 text
│• ${prefix}metale text
│• ${prefix}carbon text
│• ${prefix}candy text
│• ${prefix}metalb text
│• ${prefix}gemb text
│• ${prefix}3dchrome text
│• ${prefix}metalb2 text
│• ${prefix}metalg text
│• ${prefix}metalg text
╰❒
`
}


exports.other = (prefix) =>{
return`╭─❒ 「 𝕆𝕥𝕙𝕖𝕣𝕤 𝕄𝕖𝕟𝕦 」
│• ${prefix}ttp [text] <🅔︎>
│• ${prefix}attp [text] <🅔︎>
│• ${prefix}afk [reason]
│• ${prefix}translate kode_bahasa text
│• ${prefix}kalkulator [query]
│• ${prefix}smeme [text]
│• ${prefix}smeme2 [text|text]
│• ${prefix}memegen [text|text]
│• ${prefix}botgrup
│• ${prefix}igowner
╰❒
`
}
exports.game = (prefix) =>{
return`╭─❒ 「 Game Menu 」
│• ${prefix}kuismath
│• ${prefix}tebak [option]
│• ${prefix}tekateki
│• ${prefix}susunkata
│• ${prefix}caklontong
╰❒
`
}
exports.asupan = (prefix) =>{
return`╭─❒ 「 Asupan Menu 」
│• ${prefix}chika
│• ${prefix}delvira
│• ${prefix}ayu
│• ${prefix}bunga
│• ${prefix}aura
│• ${prefix}nisa
│• ${prefix}ziva
│• ${prefix}yana
│• ${prefix}viona
│• ${prefix}syania
│• ${prefix}riri
│• ${prefix}syifa
│• ${prefix}mama_gina
│• ${prefix}alcakenya
│• ${prefix}mangayutri
│• ${prefix}rikagusriani
│• ${prefix}asupan
│• ${prefix}bocil
│• ${prefix}geayubi
│• ${prefix}santuy
│• ${prefix}ukhty
│• ${prefix}syifa
╰❒
`
}
exports.cecan = (prefix) =>{
return`╭─❒ 「 Random Cewe 」
│• ${prefix}china 
│• ${prefix}indonesia 
│• ${prefix}malaysia 
│• ${prefix}thailand 
│• ${prefix}korea 
│• ${prefix}japan 
│• ${prefix}vietnam 
│• ${prefix}jenni 
│• ${prefix}jiso 
│• ${prefix}lisa  
│• ${prefix}rose
╰❒
`
}

exports.tqto = () =>{
	return`╭─❒ 「 𝕋𝕙𝕒𝕟𝕜𝕤 𝕋𝕠 」 
├ 𝙰𝚕𝚕𝚊𝚑 𝚂𝚆𝚃. 💕
├ 𝙼𝚢 𝙾𝚛𝚝𝚞
├ 𝚆𝚑𝚊𝚝𝚜𝙰𝚙𝚙
├ 𝚃𝚎𝚛𝚖𝚞𝚡
├ 𝙼𝚃 𝙼𝚊𝚗𝚊𝚐𝚎𝚛
├ 𝙾𝚛𝚊𝚗𝚐-𝙾𝚛𝚊𝚗𝚐 𝚈𝚊𝚗𝚐 𝙱𝚎𝚛𝚍𝚘𝚗𝚊𝚜𝚒
├ 𝙼𝚢 𝚄𝚜𝚎𝚛 𝙱𝚘𝚝𝚣
├ 𝙿𝚊𝚛𝚊 𝙿𝚎𝚗𝚍𝚞𝚔𝚞𝚗𝚐
├ 𝙸𝚗𝚍𝚘𝚜𝚊𝚝
├ 𝙿𝚎𝚗𝚢𝚎𝚍𝚒𝚊 𝙼𝚘𝚍𝚞𝚕𝚎
├ 𝙰𝚗𝚍 𝙰𝚕𝚕 𝚂𝚞𝚙𝚙𝚘𝚛𝚝
╰❒
`
}

exports.primbonmenu = (prefix) =>{
	return`╭─❒ 「 Primbon 」
│• ${prefix}nomorhoki 887435047326
│• ${prefix}artimimpi [query]
│• ${prefix}artinama [query]
│• ${prefix}ramaljodoh
│• ${prefix}ramaljodohbali
│• ${prefix}suamiistri
│• ${prefix}ramalcinta
│• ${prefix}cocoknama
│• ${prefix}pasangan
│• ${prefix}jadiannikah
│• ${prefix}sifatusaha
│• ${prefix}rezeki
│• ${prefix}pekerjaan
│• ${prefix}nasib
│• ${prefix}penyakit
│• ${prefix}tarot
│• ${prefix}fengshui
│• ${prefix}haribaik
│• ${prefix}harisangar
│• ${prefix}harisial
│• ${prefix}nagahari
│• ${prefix}arahrezeki
│• ${prefix}peruntungan
│• ${prefix}weton
│• ${prefix}karakter
│• ${prefix}keberuntungan
│• ${prefix}memancing
│• ${prefix}masasubur
│• ${prefix}zodiak 
│• ${prefix}shio [query]
╰❒
`
}

exports.stcmenu = (prefix) =>{
	return`╭─❒ 「 𝕋𝕖𝕝𝕖𝕘𝕣𝕒𝕞 𝕊𝕥𝕚𝕔𝕜𝕖𝕣 」
│• ${prefix}awoawo
│• ${prefix}benedict
│• ${prefix}chat
│• ${prefix}dbfly
│• ${prefix}dino_kuning
│• ${prefix}doge
│• ${prefix}gojosatoru
│• ${prefix}hope_boy
│• ${prefix}jisoo
│• ${prefix}kr_robot
│• ${prefix}kucing
│• ${prefix}lonte
│• ${prefix}manusia_lidi
│• ${prefix}menjamet
│• ${prefix}meow
│• ${prefix}nicholas
│• ${prefix}patrick
│• ${prefix}popoci
│• ${prefix}sponsbob
│• ${prefix}kawan_sponsbob
│• ${prefix}tyni
╰❒
`}

exports.ephotomenu = (prefix) =>{
	return`╭─❒ 「 𝔼𝕡𝕙𝕠𝕥𝕠360 𝕄𝕖𝕟𝕦 」
│• ${prefix}youtubegold text
│• ${prefix}youtubesilver text
│• ${prefix}facebookgold text
│• ${prefix}facebooksilver text
│• ${prefix}instagramgold text
│• ${prefix}instagramsilver text
│• ${prefix}twittergold text
│• ${prefix}twittersilver text
│• ${prefix}retrotext text
│• ${prefix}halloweenbats text
│• ${prefix}texthalloween text
│• ${prefix}cardhalloween text
│• ${prefix}birthdaycake text
│• ${prefix}thundertext text
│• ${prefix}icetext text
│• ${prefix}milkcake text
│• ${prefix}snowontext text
│• ${prefix}metalstar text
│• ${prefix}dragonfire text
│• ${prefix}zombie3d text
│• ${prefix}merrycard text
│• ${prefix}generalexam text 
│• ${prefix}viettel text
│• ${prefix}embroider text
│• ${prefix}graffititext text
│• ${prefix}graffititext2 text
│• ${prefix}graffititext3 text
│• ${prefix}covergraffiti text
│• ${prefix}moderngold text
│• ${prefix}capercut text
│• ${prefix}lovecard text
│• ${prefix}heartflashlight text
│• ${prefix}heartcup text
│• ${prefix}sunglightshadow text
│• ${prefix}graffiti3d text
│• ${prefix}moderngoldsilver text
│• ${prefix}moderngold2 text
│• ${prefix}moderngold3 text
│• ${prefix}fabrictext text
│• ${prefix}masteryavatar text
│• ${prefix}messagecoffee text
│• ${prefix}announofwin text
│• ${prefix}writeblood text
│• ${prefix}horrorletter text
│• ${prefix}writehorror text
│• ${prefix}shirtclub text
│• ${prefix}angelwing text
│• ${prefix}christmasseason text
│• ${prefix}projectyasuo text
│• ${prefix}lovelycute text
│• ${prefix}womansday text
│• ${prefix}covergamepubg text
│• ${prefix}nameonheart text
│• ${prefix}funnyhalloween text
│• ${prefix}lightningpubg text
│• ${prefix}greetingcardvideo text 
│• ${prefix}christmascard text 
│• ${prefix}galaxybat text
│• ${prefix}writegalaxy text
│• ${prefix}starsnight text
│• ${prefix}noeltext text
│• ${prefix}textcakes text
│• ${prefix}pubgbirthday text
│• ${prefix}galaxywallpaper text
│• ${prefix}pubgglicthvideo text 
│• ${prefix}pubgmascotlogo text
│• ${prefix}realembroidery text
│• ${prefix}vintagetelevision text
│• ${prefix}funnyanimations text
│• ${prefix}glowingtext text
│• ${prefix}textonglass text
│• ${prefix}cartoonstyle text
│• ${prefix}multicolor text
│• ${prefix}watercolor2 text
│• ${prefix}textsky text
│• ${prefix}summerbeach text
│• ${prefix}1917text text
│• ${prefix}puppycute text
│• ${prefix}rosebirthday text
│• ${prefix}steellettering text|text2
│• ${prefix}letterstext text|text2
│• ${prefix}barcashirt text|text2
│• ${prefix}premiercup text|text2
│• ${prefix}stylepoligon text|text2
│• ${prefix}lifebuoys text|text2
│• ${prefix}juventusshirt text|text2
╰❒
`
}

exports.logomenu = (prefix) =>{
	return`╭─❒ 「 𝕃𝕠𝕘𝕠 𝕄𝕖𝕟𝕦 」
│• ${prefix}coverbannerlol text|heroes
│• ${prefix}pubglogomaker text|style
│• ${prefix}colorfulpubg text|color
│• ${prefix}astronotspace text|style
│• ${prefix}wallpaperaov text|heroes
│• ${prefix}maketeamlogo text|style
│• ${prefix}circlemarcotteam text|logo
│• ${prefix}wallpaperml text|heroes
│• ${prefix}dragonballfb text|character
│• ${prefix}bannerofaov text|character
│• ${prefix}effect3donbeach text|background
│• ${prefix}cutegirlgamer text|logo
│• ${prefix}footballteam text|logo
│• ${prefix}beautifulshimmering text|champion
│• ${prefix}pubgcutelogo text|logo
│• ${prefix}elegantrotation text|logo
│• ${prefix}logogamingassasin text|logo
│• ${prefix}introvideomaker text|logo
│• ${prefix}gaminglogo4fvs text|logo
│• ${prefix}blueneon text|logo
│• ${prefix}metalmascot text|logo
│• ${prefix}anonymous2 text|style
│• ${prefix}lolpentakill text|style
│• ${prefix}avatarleagueofking text|style
│• ${prefix}avatarff text|character
│• ${prefix}overwatchwallpaper text|character
│• ${prefix}rovwallpaperhd text|hero
│• ${prefix}rovwallpaper text|avatar
│• ${prefix}beautifulgalaxylol text|style
│• ${prefix}crossfirecover text|character
│• ${prefix}lolwallpaper text|wallpaper
│• ${prefix}coverdota2 text|heroes
│• ${prefix}coverleagueofking text|character
│• ${prefix}avatar3q360 text|avatar
│• ${prefix}coverofwarface text|character
│• ${prefix}newlolavatar text|avatar
│• ${prefix}csgocover text|background
│• ${prefix}coverloknew text|hero
│• ${prefix}coverfblol text|letters
│• ${prefix}overwatchcover text|hero
│• ${prefix}crossfirestyle text|avatar
│• ${prefix}avatarlolbyname text|style
│• ${prefix}lolcoverbyname text|avatar
│• ${prefix}cyberhunterfb text|character
│• ${prefix}coverfreefirefb text|character
│• ${prefix}gamingmascot text|style
│• ${prefix}coveronepiecefb text|character
│• ${prefix}bannerytcsgo text|banner
│• ${prefix}fbgamepubgcover text|template
│• ${prefix}banneroflol text|text2|banner
│• ${prefix}bannerofaov2 text|text2|banner
│• ${prefix}teamlogo text|text2|background
│• ${prefix}companylogo2 text|text2|background
│• ${prefix}companylogo text|text2|background
│• ${prefix}gradientlogo text|text2|background
│• ${prefix}pencilsketch text|text2|icon
│• ${prefix}gunlogogaming text|text2|background
│• ${prefix}banneroffreefire text|text2|background
│• ${prefix}letterlogos text|text2|thumb
│• ${prefix}bannerofoverwatch text|text2|background
│• ${prefix}bannerofapex text|text2|background
│• ${prefix}bannerofpubg text|text2|background
│• ${prefix}mascotstyle text|text2|thumb
│• ${prefix}logoaccording text|text2|thumb
│• ${prefix}avataroverwatch text|text2|thumb
╰❒
`
}

exports.islammenu = (prefix) =>{
	return`╭─❒ 「 𝕀𝕤𝕝𝕒𝕞 𝕄𝕖𝕟𝕦 」
│• ${prefix}asmaulhusna
│• ${prefix}kisahnabi [nabi]
│• ${prefix}jadwalshalat [daerah]
│• ${prefix}randomquran
│• ${prefix}randomquran2
│• ${prefix}listsurah
│• ${prefix}tafsirsurah [surah]
│• ${prefix}alquranaudio [surah|ayat]
╰❒
`
}
exports.anonchat = (prefix) =>{
	return`╭─❒ 「 𝔸𝕟𝕠𝕟𝕪𝕞𝕠𝕦𝕤 ℂ𝕙𝕒𝕥 」
│• ${prefix}anonymous 
│• ${prefix}start
│• ${prefix}skip [daerah]
│• ${prefix}stop [surah|ayat]
╰❒
`
}

exports.storemenu = (prefix) =>{
	return`╭─❒ 「 𝕊𝕥𝕠𝕣𝕖 𝕄𝕖𝕟𝕦 」
│• ${prefix}list
│• ${prefix}addlist [key|respond]
│• ${prefix}dellist [key]
│• ${prefix}update [key|respond]
│• ${prefix}store
│• ${prefix}kali
│• ${prefix}bagi
│• ${prefix}tambah
│• ${prefix}kurang
│• ${prefix}kalkulator
│• ${prefix}proses
│• ${prefix}done
╰❒
`
}


exports.soundmenu = (prefix) =>{
return`╭─❒ 「 𝕊𝕠𝕦𝕟𝕕 𝕄𝕖𝕟𝕦 」
│• ${prefix}sound1
│• ${prefix}sound2
│• ${prefix}sound3
│• ${prefix}sound4
│• ${prefix}sound5
│• ${prefix}sound6
│• ${prefix}sound7
│• ${prefix}sound8
│• ${prefix}sound9
│• ${prefix}sound10
│• ${prefix}sound11
│• ${prefix}sound12
│• ${prefix}sound13
│• ${prefix}sound14
│• ${prefix}sound15
│• ${prefix}sound16
│• ${prefix}sound17
│• ${prefix}sound18 
│• ${prefix}sound19
│• ${prefix}sound20
│• ${prefix}sound21
│• ${prefix}sound22
│• ${prefix}sound23
│• ${prefix}sound24
│• ${prefix}sound25
│• ${prefix}sound26
│• ${prefix}sound27
│• ${prefix}sound28
│• ${prefix}sound29
│• ${prefix}sound30
│• ${prefix}sound31
│• ${prefix}sound32
│• ${prefix}sound33
│• ${prefix}sound34
│• ${prefix}sound35
│• ${prefix}sound36
│• ${prefix}sound37
│• ${prefix}sound38
│• ${prefix}sound39
│• ${prefix}sound40
│• ${prefix}sound41
│• ${prefix}sound42
│• ${prefix}sound43
│• ${prefix}sound44
│• ${prefix}sound45
│• ${prefix}sound46
│• ${prefix}sound47
│• ${prefix}sound48
│• ${prefix}sound49
│• ${prefix}sound50
│• ${prefix}sound51
│• ${prefix}sound52
│• ${prefix}sound53
│• ${prefix}sound54
│• ${prefix}sound55
│• ${prefix}sound56
│• ${prefix}sound57
│• ${prefix}sound58
│• ${prefix}sound59
│• ${prefix}sound60
│• ${prefix}sound61
│• ${prefix}sound62
│• ${prefix}sound63
│• ${prefix}sound64
│• ${prefix}sound65
│• ${prefix}sound66
│• ${prefix}sound67
│• ${prefix}sound68
│• ${prefix}sound69
│• ${prefix}sound70
╰❒
`
}
