//saya hanya menggunakan google translate, so if there is an error please correct it 

exports.noAbsen = () =>{
return `ćāć šš¤ šššØšš£šššØ š©šš š š„š”ššš šš£ š©šššØ šš§š¤šŖš„!`
}
exports.StartAbsen = () =>{
	return`ćšć š¦šš®šæš ššÆšš²š»š°š²`
	}
exports.DahAbsen = () =>{
	return`ćāć š¬š¼š'šæš² ššÆšš²š»š`
	}
exports.DelAbsen = () =>{
	return`ćāć ššŖššššØšØššŖš”š”š® ššš”šš©šš šššØšš£šššØ šš£ š©šššØ šš§š¤šŖš„`
	}
exports.adaAbsen = () =>{
	return`ćāć šššš§š šš§š šØš©šš”š” šššØšš£š© šØššØšØšš¤š£šØ šš£ š©šššØ šš§š¤šŖš„!`
	}
exports.SAbsen = () =>{
	return`ćāć ššÆšš²š»š°š² šš²š“š¶š»š`
	}
//
exports.SetCmd = (prefix, command) =>{
	return`š„š²š½š¹š ššš¶š°šøš²šæ!\nExample : ${prefix + command} menu\n\n\nšš¤š©š: š¾šš£š£š¤š© šš šššš¤š¢š„šš£ššš šš® šš§šššš­!`
	}
exports.CmdApa = () =>{
	return`šš¼šæ šŖšµš®š šš¼šŗšŗš®š»š±?`
	}
exports.UCmd = () =>{
	return`ćāć šš¤šŖ šš¤š£'š© ššš«š š„šš§š¢ššØšØšš¤š£ š©š¤ š¢š¤šššš® š©šššØ šØš©ššš šš§ š¤š§ššš§`
	}
exports.HashCmd = () =>{
	return`ćāć š”š¼ šµš®ššµš²š`
	}
exports.DelCmd = () =>{
	return`ćāć ššš šš¢š šØš©ššš šš§ šššØ šššš£ š§šš¢š¤š«šš`
	}
exports.LockCmd = () =>{
	return`ćāć š„š²š½š¹š šŗš²ššš®š“š²`
	}
exports.NoCmd = () =>{
	return`ćāć šš®ššµ š»š¼š š³š¼šš»š± š¶š» š±š®šš®šÆš®šš²`
	}
exports.ReplyMsg = () =>{
	return`ćāć ššš„š”š® šššØšØššš šš¤šŖ ššš£š© šš¤ ššš«š šš£ šæšš©ššššØš`
	}
exports.NoMsg = (prefix, command) =>{
	return`ššš®šŗš½š¹š² : ${prefix + command} filename`
	}
exports.AdMsg = (text) => {
    return `'${text}' šššØ šššš£ š§ššššØš©šš§šš šš£ š©šš š¢ššØšØššš š”ššØš©!`
}
exports.DoneMsg = (prefix, text) => {
    return `ćāć ššŖššššØšØššŖš”š”š® ššššš š¢ššØšØššš šš£ š¢ššØšØššš š”ššØš© ššØ '${text}'
    
Access with ${prefix}getmsg ${text}
View list of Messages With ${prefix}listmsg`
}
exports.GetMsg = (prefix, command) => {
    return `ššš®šŗš½š¹š² : ${prefix + command} file name\n\nView message list with ${prefix}listmsg`
}
exports.NoInMsg = (text) => {
    return `'${text}' š»š¼š š¹š¶ššš²š± š¶š» ššµš² šŗš²ššš®š“š² š¹š¶šš!`
}
exports.DelMsg = (text) => {
    return `ćāć šš²š¹š²šš² ššš°šš²ššš³šš¹š¹š '${text}' š³šæš¼šŗ ššµš² šŗš²ššš®š“š² š¹š¶šš`
}

exports.OnBef = () => {
    return `ćāć šš©'šØ šššš£ ššš©šš«šš©šš šššš¤š§š`
}
exports.OffYaBef = () => {
    return `ćāć šš©'šØ šššš£ š±š²ššš©šš«šš©šš šššš¤š§š`
}
exports.OkOn = (command) => {
    return `${command} š¦šš°š°šš²ššš³šš¹š¹š šš°šš¶šš²š± !`
}
exports.OffBef = (command) => {
    return `${command} š¦šš°š°šš²ššš³šš¹š¹š šš²š®š°šš¶šš²š± !`
}
exports.OkMute = () => {
    return `ćāć š½š¤š© šššØ šššš£ š¢šŖš©šš šš£ š©šššØ šš§š¤šŖš„`
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
    return `ā Wrong answer`
}

exports.JwbTrue = (tebak) => {
return`š® ${tebak} š®\n\nCorrect answer š\n\nWant to play again? press the button below`
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
	ā¢ Exp : ${prefix + command} id hi
2. Reply chat with caption ${prefix + command} *language code*
	ā¢ Exp : ${prefix + command} id hi
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
    return `ā Successfully stopped chat`
}
exports.StopAnonByFren = () => {
    return `ā ļø This chat session has been terminated by your chat friend`
}
exports.AnonOn = () => {
    return `ļø You are still in a chat session with a partner!`
}
exports.AnonFind = (prefix) => {
    return `_Partner Found š¼_\n${prefix}skip -- _find a new partner_\n${prefix}stop -- _stop this dialog_`
}
exports.AnonSearch = () => {
    return `š Please wait looking for chat friends`
}
exports.NoAnon = () => {
    return `ā ļø You've never started a chat!`
}

exports.AllFitur = () => {
    return `\nš“šš šµšš”š§ š¹ššš”š¢ššš `
}
exports.InfoMenu = () => {
    return `\nšæšššššš ššš šæšš”šš š” š¼ššššššš”ššš ššš šµšš”š§`
}
exports.KhususOwn = () => {
    return `\nšš¤ššš šµšš”š§ ššššššš š¹ššš”š¢ššš `
}
exports.DataBor = () => {
    return `\nššš”ā ššššš”āššš š¼š šāš šµšš” š·šš”šššš š`
}
exports.MenuGc = () => {
    return `\nšāšš¤ šŗššš¢š šššššššš š¹ššš”š¢ššš `
}
exports.MenuAni = () => {
    return `\nšæšššššš š¹šš šššššš š“šššš šššš”š¢šš`
}
exports.TagMem = () => {
    return `\nššš šŗššš¢š šššššš`
}
exports.StalkOrk = () => {
    return `\nšššššš'š  šššššš šššššš šš”šššššš`
}
exports.Hoja = () => {
    return `\nšæšššššš š¹šš ššššš”āššš šššššššš”šš`
}
exports.CovertWi = () => {
    return `\nš¶ššš£ššš” ššššš”āššš ššš”ā šµšš”š§`
}
exports.AnuFoto = () => {
    return `\nš¶āšššš šāš šššš”š¢šš šš šµš šššš š¼šš”šššš š”ššš`
}
exports.HajuStik = () => {
    return `\n_š¶šššš”š ššššš¢š šš”šššššš `
}
exports.EloDown= () => {
    return `\nšāšš¤ š·šš¤ššššš š¹ššš”š¢ššš š”`
}
exports.StikerWibu = () => {
    return `\nšššššš š“šššš šš”ššššš`
}
exports.ImageDewasa = () => {
    return `\nšššššš š“šššš š¼šššš 18+`
}
exports.MakeLogo = () => {
    return `\n_šš š¶šššš”š š“ šæššš šš ššš š“ šµšš”`
}
exports.oterMenu = () => {
    return `\nšššš šššš¢`
}
exports.GameBot = () => {
    return `\š¹ššš”š¢ššš  š¹šš šššš¦ššš šŗššš ššš”ā šµšš”š§`
}
exports.RandRik = () => {
    return `\nšššššš šššššš ššššš`
}
exports.RandCew = () => {
    return `\nšššššš šššš”š¢šš šš š¼šššš šµššš¢š”ššš¢š šŗššš`
}
exports.RamalOi = () => {
    return `\nššššš¦ š¹šššš ššš”`
}
exports.TeleStik= () => {
    return `\nšššššš šš”ššššš š¹šš šššššššš`
}
exports.BuatLogoLagi = () => {
    return `\nš¶šššš”š š¶ššš šæššš ššš”ā šµšš”š§`
}
exports.SoundNih= () => {
    return `\nšššššš ššš¢šš`
}
exports.KanLogoLagi = () => {
    return `\nšššš š“š š“šš”šš£š šæššš`
}
exports.TobatBro = () => {
    return `\nš¼š ššššš š¹ššš”š¢ššš `
}
exports.MauJualan = () => {
    return `\nš¹ššš”š¢ššš  š¹šš ššššššš`
}
exports.GadaChat = () => {
    return `\nš¹ššš”š¢ššš  š¹šš šššššš š¶āšš`
}
exports.SumberBot = () => {
    return `\nššš¢ššš š¶ššš š¹šš ššš”ā šŗššš¢š šµšš”š§`
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
    return `ćā³ć š£š¹š²š®šš² šŖš®š¶š š š š¼šŗš²š»š`
}
exports.ok = () => {
    return `ćāć šš¼š»š², šš į“¹į“æį­ šøššššŖššš¾ššš«ą½¼ ĆįÖĶĆ`
}

exports.err = () => {
    return `ćā ļøć ššæšæš¼šæ š š¼š±š²šæš®šš² šš²š®šššæš²š`
}
exports.erorLink = () => {
    return `ćā ļøć š§šµš² šš¶š»šø šš ššæš¼šæšæ`
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
    return `ā Please enter the message you want to convey!`
}

exports.cmdNotFound = (cmd, prefix) => {
    return `ā Command *${cmd}* not registered in *${prefix}allmenu*`
}

exports.ownerOnly = () => {
    return `ā This command is for the owner`
}

exports.doneOwner = () => {
    return `ā  ļøIt's done, Owner ~`
}

exports.groupOnly = () => {
    return `š„  This command can only be used in groups!`
}

exports.adminOnly = () => {
    return `š  This command can only be used by group admins!`
}

exports.nhFalse = () => {
    return `Invalid code!`
}

exports.listBlock = (blockNumber) => {
    return `*āā ć HALL OF SHAME ć āā*
    
Totally blocked: *${blockNumber.length}* user\n`
}

exports.notAdmin = () => {
    return `ā User is not an admin! ā`
}

exports.adminAlready = () => {
    return `ā Cannot promote a user who is an admin!`
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
	return`             (āļ½”ā¢Ģāæā¢Ģļ½”)ā\nHi Sis ${pushname} š Good ${salam} , 
I'm ${botname}, this bot is Whatsapp Multi-Device Beta.\n\nā ļø Please Chat With The Owner If You Find A Bug, If Your Chat Is Proven To Be Just Playing Games, Then Botz Will Block and Banned You ā ļø\n\n( Ė Ā³Ė)ā„ļø Thank You ( Ė Ā³Ė)ā„ļø
`
}
exports.listMenu = (time, salam, pushname, prefix) => {
    return `*Good ${salam} ${pushname}*
*āTime Server : ${time}*
*š List-Menu šššššš±š¾šš-š¼š :*

ā­āā ć š¹š š„š« šššš  ć 
āā¢ ${prefix}owner
āā¢ ${prefix}rules
āā¢ ${prefix}sc
āā¢ ${prefix}ping
āā¢ ${prefix}runtime
āā¢ ${prefix}botstatus
āā¢ ${prefix}donate
āā¢ ${prefix}artisymbol
ā°ā


ā­āā ć ššØššš£ šššš¦ ć 
āā¢ < evaluate
āā¢ > evaluate
āā¢ $ exec
āā¢ => exec
āā¢ ${prefix}setmenu [query]
āā¢ ${prefix}setmenu templateLocation
āā¢ ${prefix}setmenu templateTenor
āā¢ ${prefix}setmenu katalog
āā¢ ${prefix}setmenu katalog2
āā¢ ${prefix}setmenu list
āā¢ ${prefix}setwm packname|author
āā¢ ${prefix}sendsesi
āā¢ ${prefix}listpc
āā¢ ${prefix}listgc
āā¢ ${prefix}broadcast [text]
āā¢ ${prefix}bc [text]
āā¢ ${prefix}bcgc [text]
āā¢ ${prefix}nsfw [on/off]
āā¢ ${prefix}mute [on/off]
āā¢ ${prefix}banchat
āā¢ ${prefix}unbanchat
āā¢ ${prefix}autorespond [on/off]
āā¢ ${prefix}antiviewonce [on/off]
āā¢ ${prefix}autobio [on/off]
āā¢ ${prefix}join [link]
āā¢ ${prefix}self
āā¢ ${prefix}public [only bot]
āā¢ ${prefix}del [reply pesan bot]
āā¢ ${prefix}setppbot [reply image]
ā°ā


ā­āā ć šš„š š£š šššš¦ ć
āā¢ ${prefix}list
āā¢ ${prefix}addlist [key|respond]
āā¢ ${prefix}dellist [key]
āā¢ ${prefix}update [key|respond]
āā¢ ${prefix}store
āā¢ ${prefix}kali
āā¢ ${prefix}bagi
āā¢ ${prefix}tambah
āā¢ ${prefix}kurang
āā¢ ${prefix}kalkulator
āā¢ ${prefix}proses
āā¢ ${prefix}done [surah|ayat]
ā°ā


ā­āā ć šøšš ššŖšš š¦š¤ āššš„ ć
āā¢ ${prefix}anonymous 
āā¢ ${prefix}start
āā¢ ${prefix}skip [daerah]
āā¢ ${prefix}stop [surah|ayat]
ā°ā


ā­āā ć š»šš„šššš¤š šššš¦ ć 
āā¢ ${prefix}setcmd [reply stiker]
āā¢ ${prefix}delcmd [reply stiker]
āā¢ ${prefix}listcmd
āā¢ ${prefix}absen
āā¢ ${prefix}cekabsen
āā¢ ${prefix}deleteabsen
āā¢ ${prefix}absenstart
āā¢ ${prefix}addmsg [nama file]
āā¢ ${prefix}getmsg [nama file]
āā¢ ${prefix}listmsg
āā¢ ${prefix}delmsg [nama file]
ā°ā


ā­āā ć š¾š£š š¦š” šššš¦ ć 
āā¢ ${prefix}listonline
āā¢ ${prefix}sider
āā¢ ${prefix}wm packname|author
āā¢ ${prefix}infochat
āā¢ ${prefix}setdesk [text]
āā¢ ${prefix}setppgrup [reply image]
āā¢ ${prefix}antilink [on/off]
āā¢ ${prefix}revoke
āā¢ ${prefix}leave
āā¢ ${prefix}add [62***]
āā¢ ${prefix}kick @tag
āā¢ ${prefix}leave
āā¢ ${prefix}linkgc
āā¢ ${prefix}take packname|author
āā¢ ${prefix}group [open/close]
āā¢ ${prefix}tagall [text]
āā¢ ${prefix}hidetag [text]
ā°ā


ā­āā ć šøšššš šššš¦ ć 
āā¢ ${prefix}quotesanime
āā¢ ${prefix}anime [query]
āā¢ ${prefix}manga [query]
āā¢ ${prefix}character [query]
ā°ā


ā­āā ć ššš šššš¦ ć 
āā¢ ${prefix}stickertag
āā¢ ${prefix}videotag [query]
āā¢ ${prefix}vntag [query]
āā¢ ${prefix}imagetag [query]
ā°ā


ā­āā ć šš„šššššš šššš¦ ć 
āā¢ ${prefix}igstalk [username]
āā¢ ${prefix}ghstalk [username]
āā¢ ${prefix}ytstalk [channel]
ā°ā


ā­āā ć šššš£šš šššš¦ ć 
āā¢ ${prefix}ytsearch [query]
āā¢ ${prefix}wallpaper [query]
āā¢ ${prefix}google [query]
āā¢ ${prefix}wikimedia [query]
āā¢ ${prefix}hentai
āā¢ ${prefix}wattpad [query]
āā¢ ${prefix}webtoons [query]
āā¢ ${prefix}drakor [query]
āā¢ ${prefix}pinterest [query]
ā°ā


ā­āā ć āš šš§šš£š„šš£ šššš¦ ć
āā¢ ${prefix}toaudio [video]
āā¢ ${prefix}tomp3 [video]
āā¢ ${prefix}tovn [video]
āā¢ ${prefix}stiker [reply image]
āā¢ ${prefix}tourl [image/video/stiker]
āā¢ ${prefix}togif [sticker]
āā¢ ${prefix}tomp4 [sticker]
āā¢ ${prefix}toimg [reply sticker]
ā°ā


ā­āā ć ššššš š¼ššššš„ šššš¦ ć 
āā¢ ${prefix}wanted [reply image/stiker]
āā¢ ${prefix}utatoo [reply image/stiker]
āā¢ ${prefix}unsharpen [reply image/stiker]
āā¢ ${prefix}thanos [reply image/stiker]
āā¢ ${prefix}sniper [reply image/stiker]
āā¢ ${prefix}sharpen [reply image/stiker]
āā¢ ${prefix}sepia [reply image/stiker]
āā¢ ${prefix}scary [reply image/stiker]
āā¢ ${prefix}rip [reply image/stiker]
āā¢ ${prefix}redple [reply image/stiker]
āā¢ ${prefix}rejected [reply image/stiker]
āā¢ ${prefix}posterize [reply image/stiker]
āā¢ ${prefix}ps4 [reply image/stiker]
āā¢ ${prefix}pixelize [reply image/stiker]
āā¢ ${prefix}missionpassed [reply image/stiker]
āā¢ ${prefix}moustache [reply image/stiker]
āā¢ ${prefix}lookwhatkarenhave [reply image/stiker]
āā¢ ${prefix}jail [reply image/stiker]
āā¢ ${prefix}invert [reply image/stiker]
āā¢ ${prefix}instagram [reply image/stiker]
āā¢ ${prefix}greyscale [reply image/stiker]
āā¢ ${prefix}glitch [reply image/stiker]
āā¢ ${prefix}gay [reply image/stiker]
āā¢ ${prefix}frame [reply image/stiker]
āā¢ ${prefix}fire [reply image/stiker]
āā¢ ${prefix}distort [reply image/stiker]
āā¢ ${prefix}dictator [reply image/stiker]
āā¢ ${prefix}deepfry [reply image/stiker]
āā¢ ${prefix}ddungeon [reply image/stiker]
āā¢ ${prefix}circle [reply image/stiker]
āā¢ ${prefix}challenger [reply image/stiker]
āā¢ ${prefix}burn [reply image/stiker]
āā¢ ${prefix}brazzers [reply image/stiker]
āā¢ ${prefix}beautiful [reply image/stiker]
ā°ā


ā­āā ć šš„ššššš£ š¼šššš„š šššš¦ ć 
āā¢ ${prefix}jail [reply image/stiker]
āā¢ ${prefix}red [reply image/stiker]
āā¢ ${prefix}gay [reply image/stiker]
āā¢ ${prefix}bloo [reply image/stiker]
āā¢ ${prefix}blue [reply image/stiker]
āā¢ ${prefix}sepia [reply image/stiker]
āā¢ ${prefix}green [reply image/stiker]
āā¢ ${prefix}glass [reply image/stiker]
āā¢ ${prefix}invert [reply image/stiker]
āā¢ ${prefix}blurple [reply image/stiker]
āā¢ ${prefix}blurple2 [reply image/stiker]
āā¢ ${prefix}wasted [reply image/stiker]
āā¢ ${prefix}passed [reply image/stiker]
āā¢ ${prefix}triggered [reply image/stiker]
āā¢ ${prefix}comrade [reply image/stiker]
āā¢ ${prefix}greyscale [reply image/stiker]
āā¢ ${prefix}threshold [reply image/stiker]
āā¢ ${prefix}brightness [reply image/stiker]
āā¢ ${prefix}invertgreyscale [reply image/stiker]
ā°ā


ā­āā ć š»š šØššš šš šššš¦ ć 
āā¢ ${prefix}tiktok [link]
āā¢ ${prefix}tiktoknowm [link]
āā¢ ${prefix}tiktokwm [link]
āā¢ ${prefix}tiktokaudio [link]
āā¢ ${prefix}ytdl [link]
āā¢ ${prefix}play [query]
āā¢ ${prefix}ytmp3 [link]
āā¢ ${prefix}ytshortmp3 [link]
āā¢ ${prefix}ytmp4 [link]
āā¢ ${prefix}ytshorts [link]
āā¢ ${prefix}facebook [link]
āā¢ ${prefix}facebooksd [link]
āā¢ ${prefix}facebookhd [link]
āā¢ ${prefix}fbaudio [link]
āā¢ ${prefix}igstory [username]
āā¢ ${prefix}igdl [link]
āā¢ ${prefix}igphoto [link]
āā¢ ${prefix}igvideo [link]
āā¢ ${prefix}igreels [link]
āā¢ ${prefix}igtv [link]
āā¢ ${prefix}soundcloud [link]
āā¢ ${prefix}gitclone [link repo]
āā¢ ${prefix}gitrepo [username repo branch]
āā¢ ${prefix}mediafire [link]
āā¢ ${prefix}twitter link
ā°ā


ā­āā ć āš£šššš š šššš¦ ć
āā¢ ${prefix}nomorhoki 887435047326
āā¢ ${prefix}artimimpi [query]
āā¢ ${prefix}artinama [query]
āā¢ ${prefix}ramaljodoh
āā¢ ${prefix}ramaljodohbali
āā¢ ${prefix}suamiistri
āā¢ ${prefix}ramalcinta
āā¢ ${prefix}cocoknama
āā¢ ${prefix}pasangan
āā¢ ${prefix}jadiannikah
āā¢ ${prefix}sifatusaha
āā¢ ${prefix}rezeki
āā¢ ${prefix}pekerjaan
āā¢ ${prefix}nasib
āā¢ ${prefix}penyakit
āā¢ ${prefix}tarot
āā¢ ${prefix}fengshui
āā¢ ${prefix}haribaik
āā¢ ${prefix}harisangar
āā¢ ${prefix}harisial
āā¢ ${prefix}nagahari
āā¢ ${prefix}arahrezeki
āā¢ ${prefix}peruntungan
āā¢ ${prefix}weton
āā¢ ${prefix}karakter
āā¢ ${prefix}keberuntungan
āā¢ ${prefix}memancing
āā¢ ${prefix}masasubur
āā¢ ${prefix}zodiak 
āā¢ ${prefix}shio [query]
ā°ā


ā­āā ć āšššš š šøšššš šššš¦ ć
āā¢ ${prefix}loli
āā¢ ${prefix}neko
āā¢ ${prefix}waifu
āā¢ ${prefix}shinobu
āā¢ ${prefix}megumin
āā¢ ${prefix}bully
āā¢ ${prefix}cuddle
āā¢ ${prefix}cry
āā¢ ${prefix}hug
āā¢ ${prefix}awoo
āā¢ ${prefix}kiss
āā¢ ${prefix}lick
āā¢ ${prefix}pat
āā¢ ${prefix}smug
āā¢ ${prefix}bonk
āā¢ ${prefix}yeet
āā¢ ${prefix}blush
āā¢ ${prefix}smile
āā¢ ${prefix}wave
āā¢ ${prefix}highfive
āā¢ ${prefix}handhold
āā¢ ${prefix}nom
āā¢ ${prefix}bite
āā¢ ${prefix}glomp
āā¢ ${prefix}slap
āā¢ ${prefix}kill
āā¢ ${prefix}happy
āā¢ ${prefix}wink
āā¢ ${prefix}poke
āā¢ ${prefix}dance
āā¢ ${prefix}cringe
ā°ā


ā­āā ć āš¤ššØ & š¤ššØ šššš¦ ć
āā¢ ${prefix}ahegao <āļø>
āā¢ ${prefix}ass <āļø>
āā¢ ${prefix}bdsm <āļø>
āā¢ ${prefix}blowjob <āļø>
āā¢ ${prefix}cuckold <āļø>
āā¢ ${prefix}cum <āļø>
āā¢ ${prefix}ero <āļø>
āā¢ ${prefix}femdom <āļø>
āā¢ ${prefix}foot <āļø>
āā¢ ${prefix}gangbang <āļø>
āā¢ ${prefix}glasses <āļø>
āā¢ ${prefix}jahy <āļø>
āā¢ ${prefix}manga <āļø>
āā¢ ${prefix}masturbation <āļø>
āā¢ ${prefix}neko <āļø>
āā¢ ${prefix}orgy <āļø>
āā¢ ${prefix}panties <āļø>
āā¢ ${prefix}pussy <āļø>
āā¢ ${prefix}tentacles <āļø>
āā¢ ${prefix}thighs <āļø>
āā¢ ${prefix}yuri <āļø>
āā¢ ${prefix}feet <āļø>
āā¢ ${prefix}lewdkemo <āļø>
āā¢ ${prefix}woof <āļø>
āā¢ ${prefix}gasm <āļø>
āā¢ ${prefix}solo <āļø>
āā¢ ${prefix}8ball <āļø>
āā¢ ${prefix}goose <āļø>
āā¢ ${prefix}avatar <āļø>
āā¢ ${prefix}hololewd <āļø>
āā¢ ${prefix}gecg <āļø>
āā¢ ${prefix}holo <āļø>
āā¢ ${prefix}fox_girl <āļø>
āā¢ ${prefix}tits <āļø>
āā¢ ${prefix}eroyuri <āļø>
āā¢ ${prefix}holoyero <āļø>
āā¢ ${prefix}lizard <āļø>
āā¢ ${prefix}keta <āļø>
āā¢ ${prefix}eron <āļø>
āā¢ ${prefix}erok <āļø>
āā¢ ${prefix}kemonomimi <āļø>
āā¢ ${prefix}cum_jpg <āļø>
āā¢ ${prefix}nsfw_avatar <āļø>
āā¢ ${prefix}erofeet <āļø>
āā¢ ${prefix}meow <āļø>
āā¢ ${prefix}wallpaper <āļø>
āā¢ ${prefix}waifu <āļø>
āā¢ ${prefix}trap <āļø>
āā¢ ${prefix}lewd <āļø>
āā¢ ${prefix}pussy_jpg <āļø>
āā¢ ${prefix}futanari <āļø>
āā¢ ${prefix}lewdk <āļø>
āā¢ ${prefix}solog <āļø>
āā¢ ${prefix}smug <āļø>
āā¢ ${prefix}cum <āļø>
āā¢ ${prefix}slap <āļø>
āā¢ ${prefix}les <āļø>
āā¢ ${prefix}erokemo <āļø>
āā¢ ${prefix}bj <āļø>
āā¢ ${prefix}pwankg <āļø>
āā¢ ${prefix}pat <āļø>
āā¢ ${prefix}poke <āļø>
āā¢ ${prefix}feed <āļø>
āā¢ ${prefix}nsfw_neko_gif <āļø>
āā¢ ${prefix}pussy <āļø>
āā¢ ${prefix}feetg <āļø>
āā¢ ${prefix}baka <āļø>
āā¢ ${prefix}hug <āļø>
āā¢ ${prefix}kiss <āļø>
āā¢ ${prefix}tickle <āļø>
āā¢ ${prefix}spank <āļø>
āā¢ ${prefix}kuni <āļø>
āā¢ ${prefix}classic <āļø>
āā¢ ${prefix}boobs <āļø>
āā¢ ${prefix}anal <āļø>
āā¢ ${prefix}ngif <āļø>
āā¢ ${prefix}cuddle <āļø>
āā¢ ${prefix}zettai <āļø>
ā°ā


ā­āā ć š¼š”šš š„š 360 šššš¦ ć
āā¢ ${prefix}youtubegold
āā¢ ${prefix}youtubesilver
āā¢ ${prefix}facebookgold
āā¢ ${prefix}facebooksilver
āā¢ ${prefix}instagramgold
āā¢ ${prefix}instagramsilver
āā¢ ${prefix}twittergold
āā¢ ${prefix}twittersilver
āā¢ ${prefix}retrotext
āā¢ ${prefix}halloweenbats
āā¢ ${prefix}texthalloween
āā¢ ${prefix}cardhalloween
āā¢ ${prefix}birthdaycake
āā¢ ${prefix}thundertext
āā¢ ${prefix}icetext
āā¢ ${prefix}milkcake
āā¢ ${prefix}snowontext
āā¢ ${prefix}metalstar
āā¢ ${prefix}dragonfire
āā¢ ${prefix}zombie3d
āā¢ ${prefix}merrycard
āā¢ ${prefix}generalexam 
āā¢ ${prefix}viettel
āā¢ ${prefix}embroider
āā¢ ${prefix}graffititext
āā¢ ${prefix}graffititext2
āā¢ ${prefix}graffititext3
āā¢ ${prefix}covergraffiti
āā¢ ${prefix}moderngold
āā¢ ${prefix}capercut
āā¢ ${prefix}lovecard
āā¢ ${prefix}heartflashlight
āā¢ ${prefix}heartcup
āā¢ ${prefix}sunglightshadow
āā¢ ${prefix}graffiti3d
āā¢ ${prefix}moderngoldsilver
āā¢ ${prefix}moderngold2
āā¢ ${prefix}moderngold3
āā¢ ${prefix}fabrictext
āā¢ ${prefix}masteryavatar
āā¢ ${prefix}messagecoffee
āā¢ ${prefix}announofwin
āā¢ ${prefix}writeblood
āā¢ ${prefix}horrorletter
āā¢ ${prefix}writehorror
āā¢ ${prefix}shirtclub
āā¢ ${prefix}angelwing
āā¢ ${prefix}christmasseason
āā¢ ${prefix}projectyasuo
āā¢ ${prefix}lovelycute
āā¢ ${prefix}womansday
āā¢ ${prefix}covergamepubg
āā¢ ${prefix}nameonheart
āā¢ ${prefix}funnyhalloween
āā¢ ${prefix}lightningpubg
āā¢ ${prefix}greetingcardvideo 
āā¢ ${prefix}christmascard 
āā¢ ${prefix}galaxybat
āā¢ ${prefix}writegalaxy
āā¢ ${prefix}starsnight
āā¢ ${prefix}noeltext
āā¢ ${prefix}textcakes
āā¢ ${prefix}pubgbirthday
āā¢ ${prefix}galaxywallpaper
āā¢ ${prefix}pubgglicthvideo 
āā¢ ${prefix}pubgmascotlogo
āā¢ ${prefix}realembroidery
āā¢ ${prefix}vintagetelevision
āā¢ ${prefix}funnyanimations
āā¢ ${prefix}glowingtext
āā¢ ${prefix}textonglass
āā¢ ${prefix}cartoonstyle
āā¢ ${prefix}multicolor
āā¢ ${prefix}watercolor2
āā¢ ${prefix}textsky
āā¢ ${prefix}summerbeach
āā¢ ${prefix}1917text
āā¢ ${prefix}puppycute
āā¢ ${prefix}rosebirthday
ā°ā


ā­āā ć ššš©š„āš£š  šššš¦ ć
āā¢ ${prefix}halloween2 text|text2
āā¢ ${prefix}horror text|text2
āā¢ ${prefix}game8bit text|text2
āā¢ ${prefix}layered text|text2
āā¢ ${prefix}glitch2 text|text2
āā¢ ${prefix}coolg text|text2
āā¢ ${prefix}coolwg text|text2
āā¢ ${prefix}realistic text|text2
āā¢ ${prefix}space3d text|text2
āā¢ ${prefix}gtiktok text|text2
āā¢ ${prefix}stone text|text2
āā¢ ${prefix}marvel text|text2
āā¢ ${prefix}marvel2 text|text2
āā¢ ${prefix}pornhub text|text2
āā¢ ${prefix}avengers text|text2
āā¢ ${prefix}metalr text|text2
āā¢ ${prefix}metalg text|text2
āā¢ ${prefix}metalg2 text|text2
āā¢ ${prefix}halloween2 text|text2
āā¢ ${prefix}lion text|text2
āā¢ ${prefix}wolf_bw text|text2
āā¢ ${prefix}wolf_g text|text2
āā¢ ${prefix}ninja text|text2
āā¢ ${prefix}3dsteel text|text2
āā¢ ${prefix}horror2 text|text2
āā¢ ${prefix}lava text|text2
āā¢ ${prefix}bagel text|text2
āā¢ ${prefix}blackpink text
āā¢ ${prefix}rainbow2 text
āā¢ ${prefix}water_pipe text
āā¢ ${prefix}halloween text
āā¢ ${prefix}sketch text
āā¢ ${prefix}sircuit text
āā¢ ${prefix}discovery text
āā¢ ${prefix}metallic2 text
āā¢ ${prefix}fiction text
āā¢ ${prefix}demon text
āā¢ ${prefix}transformer text
āā¢ ${prefix}berry text
āā¢ ${prefix}thunder text
āā¢ ${prefix}magma text
āā¢ ${prefix}3dstone text
āā¢ ${prefix}neon text
āā¢ ${prefix}glitch text
āā¢ ${prefix}harry_potter text
āā¢ ${prefix}embossed text
āā¢ ${prefix}broken text
āā¢ ${prefix}papercut text
āā¢ ${prefix}gradient text
āā¢ ${prefix}glossy text
āā¢ ${prefix}watercolor text
āā¢ ${prefix}multicolor text
āā¢ ${prefix}neon_devil text
āā¢ ${prefix}underwater text
āā¢ ${prefix}bear text
āā¢ ${prefix}wonderfulg text
āā¢ ${prefix}christmas text
āā¢ ${prefix}neon_light text
āā¢ ${prefix}snow text
āā¢ ${prefix}cloudsky text
āā¢ ${prefix}luxury2 text
āā¢ ${prefix}gradient2 text
āā¢ ${prefix}summer text
āā¢ ${prefix}writing text
āā¢ ${prefix}engraved text
āā¢ ${prefix}summery text
āā¢ ${prefix}3dglue text
āā¢ ${prefix}metaldark text
āā¢ ${prefix}neonlight text
āā¢ ${prefix}oscar text
āā¢ ${prefix}minion text
āā¢ ${prefix}holographic text
āā¢ ${prefix}purple text
āā¢ ${prefix}glossyb text
āā¢ ${prefix}deluxe2 text
āā¢ ${prefix}glossyc text
āā¢ ${prefix}fabric text
āā¢ ${prefix}neonc text
āā¢ ${prefix}newyear text
āā¢ ${prefix}newyear2 text
āā¢ ${prefix}metals text
āā¢ ${prefix}xmas text
āā¢ ${prefix}blood text
āā¢ ${prefix}darkg text
āā¢ ${prefix}joker text
āā¢ ${prefix}wicker text
āā¢ ${prefix}natural text
āā¢ ${prefix}firework text
āā¢ ${prefix}skeleton text
āā¢ ${prefix}balloon text
āā¢ ${prefix}balloon2 text
āā¢ ${prefix}balloon3 text
āā¢ ${prefix}balloon4 text
āā¢ ${prefix}balloon5 text
āā¢ ${prefix}balloon6 text
āā¢ ${prefix}balloon7 text
āā¢ ${prefix}steel text
āā¢ ${prefix}gloss text
āā¢ ${prefix}denim text
āā¢ ${prefix}decorate text
āā¢ ${prefix}decorate2 text
āā¢ ${prefix}peridot text
āā¢ ${prefix}rock text
āā¢ ${prefix}glass text
āā¢ ${prefix}glass2 text
āā¢ ${prefix}glass3 text
āā¢ ${prefix}glass4 text
āā¢ ${prefix}glass5 text
āā¢ ${prefix}glass6 text
āā¢ ${prefix}glass7 text
āā¢ ${prefix}glass8 text
āā¢ ${prefix}captain_as2 text
āā¢ ${prefix}robot text
āā¢ ${prefix}equalizer text
āā¢ ${prefix}toxic text
āā¢ ${prefix}sparkling text
āā¢ ${prefix}sparkling2 text
āā¢ ${prefix}sparkling3 text
āā¢ ${prefix}sparkling4 text
āā¢ ${prefix}sparkling5 text
āā¢ ${prefix}sparkling6 text
āā¢ ${prefix}sparkling7 text
āā¢ ${prefix}decorative text
āā¢ ${prefix}chocolate text
āā¢ ${prefix}strawberry text
āā¢ ${prefix}koifish text
āā¢ ${prefix}bread text
āā¢ ${prefix}matrix text
āā¢ ${prefix}blood2 text
āā¢ ${prefix}neonligth2 text
āā¢ ${prefix}thunder2 text
āā¢ ${prefix}3dbox text
āā¢ ${prefix}neon2 text
āā¢ ${prefix}roadw text
āā¢ ${prefix}bokeh text
āā¢ ${prefix}gneon text
āā¢ ${prefix}advanced text
āā¢ ${prefix}dropwater text
āā¢ ${prefix}wall text
āā¢ ${prefix}chrismast text
āā¢ ${prefix}honey text
āā¢ ${prefix}drug text
āā¢ ${prefix}marble text
āā¢ ${prefix}marble2 text
āā¢ ${prefix}ice text
āā¢ ${prefix}juice text
āā¢ ${prefix}rusty text
āā¢ ${prefix}abstra text
āā¢ ${prefix}biscuit text
āā¢ ${prefix}wood text
āā¢ ${prefix}scifi text
āā¢ ${prefix}metalr text
āā¢ ${prefix}purpleg text
āā¢ ${prefix}shiny text 
āā¢ ${prefix}jewelry text
āā¢ ${prefix}jewelry2 text
āā¢ ${prefix}jewelry3 text
āā¢ ${prefix}jewelry4 text
āā¢ ${prefix}jewelry5 text
āā¢ ${prefix}jewelry6 text
āā¢ ${prefix}jewelry7 text
āā¢ ${prefix}jewelry8 text
āā¢ ${prefix}metalh text
āā¢ ${prefix}golden text
āā¢ ${prefix}glitter text
āā¢ ${prefix}glitter2 text
āā¢ ${prefix}glitter3 text
āā¢ ${prefix}glitter4 text
āā¢ ${prefix}glitter5 text
āā¢ ${prefix}glitter6 text
āā¢ ${prefix}glitter7 text
āā¢ ${prefix}metale text
āā¢ ${prefix}carbon text
āā¢ ${prefix}candy text
āā¢ ${prefix}metalb text
āā¢ ${prefix}gemb text
āā¢ ${prefix}3dchrome text
āā¢ ${prefix}metalb2 text
āā¢ ${prefix}metalg text
āā¢ ${prefix}metalg text
ā°ā


ā­āā ć šš„ššš£š¤ šššš¦ ć
āā¢ ${prefix}afk [reason]
āā¢ ${prefix}translate kode_bahasa text
āā¢ ${prefix}kalkulator [query]
āā¢ ${prefix}smeme [text]
āā¢ ${prefix}smeme2 [text|text]
āā¢ ${prefix}memegen [text|text]
āā¢ ${prefix}attp [text] <šļø>
āā¢ ${prefix}ttp [text] <šļø>
āā¢ ${prefix}botgrup
āā¢ ${prefix}igowner
ā°ā


ā­āā ć š¾ššš šššš¦ ć
āā¢ ${prefix}kuismath
āā¢ ${prefix}tebak [option]
āā¢ ${prefix}tekateki
āā¢ ${prefix}susunkata
āā¢ ${prefix}caklontong
ā°ā


ā­āā ć šøš¤š¦š”šš šššš¦ ć
āā¢ ${prefix}chika
āā¢ ${prefix}delvira
āā¢ ${prefix}ayu
āā¢ ${prefix}bunga
āā¢ ${prefix}aura
āā¢ ${prefix}nisa
āā¢ ${prefix}ziva
āā¢ ${prefix}yana
āā¢ ${prefix}viona
āā¢ ${prefix}syania
āā¢ ${prefix}riri
āā¢ ${prefix}syifa
āā¢ ${prefix}mama_gina
āā¢ ${prefix}alcakenya
āā¢ ${prefix}mangayutri
āā¢ ${prefix}rikagusriani
āā¢ ${prefix}asupan
āā¢ ${prefix}bocil
āā¢ ${prefix}geayubi
āā¢ ${prefix}santuy
āā¢ ${prefix}ukhty
āā¢ ${prefix}syifa
ā°ā


ā­āā ć šššššš£šš šš„ššššš£ šššš¦ ć
āā¢ ${prefix}awoawo
āā¢ ${prefix}benedict
āā¢ ${prefix}chat
āā¢ ${prefix}dbfly
āā¢ ${prefix}dino_kuning
āā¢ ${prefix}doge
āā¢ ${prefix}gojosatoru
āā¢ ${prefix}hope_boy
āā¢ ${prefix}jisoo
āā¢ ${prefix}kr_robot
āā¢ ${prefix}kucing
āā¢ ${prefix}lonte
āā¢ ${prefix}manusia_lidi
āā¢ ${prefix}menjamet
āā¢ ${prefix}meow
āā¢ ${prefix}nicholas
āā¢ ${prefix}patrick
āā¢ ${prefix}popoci
āā¢ ${prefix}sponsbob
āā¢ ${prefix}kawan_sponsbob
āā¢ ${prefix}tyni
ā°ā


ā­āā ć āšššš š āššØšš šššš¦ ć
āā¢ ${prefix}china 
āā¢ ${prefix}indonesia 
āā¢ ${prefix}malaysia 
āā¢ ${prefix}thailand 
āā¢ ${prefix}korea 
āā¢ ${prefix}japan 
āā¢ ${prefix}vietnam 
āā¢ ${prefix}jenni 
āā¢ ${prefix}jiso 
āā¢ ${prefix}lisa  
āā¢ ${prefix}rose
ā°ā


ā­āā ć šš šš  šššš¦ ć
āā¢ ${prefix}coverbannerlol text|heroes
āā¢ ${prefix}pubglogomaker text|style
āā¢ ${prefix}colorfulpubg text|color
āā¢ ${prefix}astronotspace text|style
āā¢ ${prefix}wallpaperaov text|heroes
āā¢ ${prefix}maketeamlogo text|style
āā¢ ${prefix}circlemarcotteam text|logo
āā¢ ${prefix}wallpaperml text|heroes
āā¢ ${prefix}dragonballfb text|character
āā¢ ${prefix}bannerofaov text|character
āā¢ ${prefix}effect3donbeach text|background
āā¢ ${prefix}cutegirlgamer text|logo
āā¢ ${prefix}footballteam text|logo
āā¢ ${prefix}beautifulshimmering text|champion
āā¢ ${prefix}pubgcutelogo text|logo
āā¢ ${prefix}elegantrotation text|logo
āā¢ ${prefix}logogamingassasin text|logo
āā¢ ${prefix}introvideomaker text|logo
āā¢ ${prefix}gaminglogo4fvs text|logo
āā¢ ${prefix}blueneon text|logo
āā¢ ${prefix}metalmascot text|logo
āā¢ ${prefix}anonymous2 text|style
āā¢ ${prefix}lolpentakill text|style
āā¢ ${prefix}avatarleagueofking text|style
āā¢ ${prefix}avatarff text|character
āā¢ ${prefix}overwatchwallpaper text|character
āā¢ ${prefix}rovwallpaperhd text|hero
āā¢ ${prefix}rovwallpaper text|avatar
āā¢ ${prefix}beautifulgalaxylol text|style
āā¢ ${prefix}crossfirecover text|character
āā¢ ${prefix}lolwallpaper text|wallpaper
āā¢ ${prefix}coverdota2 text|heroes
āā¢ ${prefix}coverleagueofking text|character
āā¢ ${prefix}avatar3q360 text|avatar
āā¢ ${prefix}coverofwarface text|character
āā¢ ${prefix}newlolavatar text|avatar
āā¢ ${prefix}csgocover text|background
āā¢ ${prefix}coverloknew text|hero
āā¢ ${prefix}coverfblol text|letters
āā¢ ${prefix}overwatchcover text|hero
āā¢ ${prefix}crossfirestyle text|avatar
āā¢ ${prefix}avatarlolbyname text|style
āā¢ ${prefix}lolcoverbyname text|avatar
āā¢ ${prefix}cyberhunterfb text|character
āā¢ ${prefix}coverfreefirefb text|character
āā¢ ${prefix}gamingmascot text|style
āā¢ ${prefix}coveronepiecefb text|character
āā¢ ${prefix}bannerytcsgo text|banner
āā¢ ${prefix}fbgamepubgcover text|template
āā¢ ${prefix}banneroflol text|text2|banner
āā¢ ${prefix}bannerofaov2 text|text2|banner
āā¢ ${prefix}teamlogo text|text2|background
āā¢ ${prefix}companylogo2 text|text2|background
āā¢ ${prefix}companylogo text|text2|background
āā¢ ${prefix}gradientlogo text|text2|background
āā¢ ${prefix}pencilsketch text|text2|icon
āā¢ ${prefix}gunlogogaming text|text2|background
āā¢ ${prefix}banneroffreefire text|text2|background
āā¢ ${prefix}letterlogos text|text2|thumb
āā¢ ${prefix}bannerofoverwatch text|text2|background
āā¢ ${prefix}bannerofapex text|text2|background
āā¢ ${prefix}bannerofpubg text|text2|background
āā¢ ${prefix}mascotstyle text|text2|thumb
āā¢ ${prefix}logoaccording text|text2|thumb
āā¢ ${prefix}avataroverwatch text|text2|thumb
ā°ā


ā­āā ć šš¤ššššš šššš¦ ć
āā¢ ${prefix}asmaulhusna
āā¢ ${prefix}kisahnabi [nabi]
āā¢ ${prefix}jadwalshalat [daerah]
āā¢ ${prefix}randomquran
āā¢ ${prefix}randomquran2
āā¢ ${prefix}listsurah
āā¢ ${prefix}tafsirsurah [surah]
āā¢ ${prefix}alquranaudio [surah|ayat]
ā°ā


ā­āā ć šš š¦šš šššš¦ ć
āā¢ ${prefix}sound1
āā¢ ${prefix}sound2
āā¢ ${prefix}sound3
āā¢ ${prefix}sound4
āā¢ ${prefix}sound5
āā¢ ${prefix}sound6
āā¢ ${prefix}sound7
āā¢ ${prefix}sound8
āā¢ ${prefix}sound9
āā¢ ${prefix}sound10
āā¢ ${prefix}sound11
āā¢ ${prefix}sound12
āā¢ ${prefix}sound13
āā¢ ${prefix}sound14
āā¢ ${prefix}sound15
āā¢ ${prefix}sound16
āā¢ ${prefix}sound17
āā¢ ${prefix}sound18 
āā¢ ${prefix}sound19
āā¢ ${prefix}sound20
āā¢ ${prefix}sound21
āā¢ ${prefix}sound22
āā¢ ${prefix}sound23
āā¢ ${prefix}sound24
āā¢ ${prefix}sound25
āā¢ ${prefix}sound26
āā¢ ${prefix}sound27
āā¢ ${prefix}sound28
āā¢ ${prefix}sound29
āā¢ ${prefix}sound30
āā¢ ${prefix}sound31
āā¢ ${prefix}sound32
āā¢ ${prefix}sound33
āā¢ ${prefix}sound34
āā¢ ${prefix}sound35
āā¢ ${prefix}sound36
āā¢ ${prefix}sound37
āā¢ ${prefix}sound38
āā¢ ${prefix}sound39
āā¢ ${prefix}sound40
āā¢ ${prefix}sound41
āā¢ ${prefix}sound42
āā¢ ${prefix}sound43
āā¢ ${prefix}sound44
āā¢ ${prefix}sound45
āā¢ ${prefix}sound46
āā¢ ${prefix}sound47
āā¢ ${prefix}sound48
āā¢ ${prefix}sound49
āā¢ ${prefix}sound50
āā¢ ${prefix}sound51
āā¢ ${prefix}sound52
āā¢ ${prefix}sound53
āā¢ ${prefix}sound54
āā¢ ${prefix}sound55
āā¢ ${prefix}sound56
āā¢ ${prefix}sound57
āā¢ ${prefix}sound58
āā¢ ${prefix}sound59
āā¢ ${prefix}sound60
āā¢ ${prefix}sound61
āā¢ ${prefix}sound62
āā¢ ${prefix}sound63
āā¢ ${prefix}sound64
āā¢ ${prefix}sound65
āā¢ ${prefix}sound66
āā¢ ${prefix}sound67
āā¢ ${prefix}sound68
āā¢ ${prefix}sound69
āā¢ ${prefix}sound70
ā°ā


ā­āā ć šššššš¤ šš  ć 
ā š°šššš ššš. š
ā š¼š¢ š¾ššš
ā šššššš°šš
ā šššššš”
ā š¼š š¼šššššš
ā š¾šššš-š¾šššš šššš š±šššššššš
ā š¼š¢ šššš š±ššš£
ā šæššš šæšššššššš
ā šøšššššš
ā šæššš¢šššš š¼ššššš
ā š°šš š°šš ššššššš
ā°ā
    `
}

exports.rules = (prefix) => {
    return `
*āā ć RULES AND FAQ ć āā*

1. Don't spam bots. š
2. Don't call bots. āļø
3. Don't compare bots š

šÆļø Bot not or slow to respond ?
ā”ļø May be affected by network, signal, banned by Whatsapp and some reason.

šÆļø Can I add to the group?
ā”ļø For that it depends on the bot owner himself

šÆļø What's the prefix?
ā”ļø This bot uses multi prefix & you can use it without prefix

If you understand the rules, please type *${prefix}menu* to start!

ā ļø All bot policies and conditions are subject to change at any time 

Thank you! 
`
}
exports.welcome = () =>{
	return`Don't forget the introduction sis š¤
	
ā­ Name :
ā Age :
ā Gender :
ā From country :
ā°ā  Please obey the group rules, sis ~`
}
exports.leave = () =>{
	return`Well why out š£ Mentally safe, right? >.<
Goodbye`
}
exports.source = () =>{
return`*------ć SOURCE CODE ć ------*

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
*-------ć DONATE ć -------*

Hai kak āŗļø 
Kalian bisa mendukung saya agar bot ini tetap up to date dengan cara donasi

Berapapun donasi kalian akan sangat berarti š

ā¢ Sqan QR Dana : https://telegra.ph/file/4d91b25a776179f342588.jpg
ā¢ Sqan QR GoPay : https://telegra.ph/file/0f1f1b37a5577c73be0f6.jpg
ā¢ Transfer Pulsa (Indosat/My IM3) : 085872761910


Gamsahabnidaš!

Contact person Owner:
wa.me/${ownernomer}

    `
}

exports.info = (prefix) =>{
	return`ā­āā ć š¹š š„š« šššš  ć 
āā¢ ${prefix}owner
āā¢ ${prefix}rules
āā¢ ${prefix}sc
āā¢ ${prefix}ping
āā¢ ${prefix}runtime
āā¢ ${prefix}botstatus
āā¢ ${prefix}donate
āā¢ ${prefix}artisymbol
ā°ā
`}

exports.ownermenu = (prefix) =>{
return`ā­āā ć ššØššš£ šššš¦ ć 
āā¢ < evaluate
āā¢ > evaluate
āā¢ $ exec
āā¢ => exec
āā¢ ${prefix}setmenu [query]
āā¢ ${prefix}setmenu templateLocation
āā¢ ${prefix}setmenu templateTenor
āā¢ ${prefix}setmenu katalog
āā¢ ${prefix}setmenu katalog2
āā¢ ${prefix}setmenu list
āā¢ ${prefix}setwm packname|author
āā¢ ${prefix}sendsesi
āā¢ ${prefix}listpc
āā¢ ${prefix}listgc
āā¢ ${prefix}broadcast [text]
āā¢ ${prefix}bc [text]
āā¢ ${prefix}bcgc [text]
āā¢ ${prefix}nsfw [on/off]
āā¢ ${prefix}mute [on/off]
āā¢ ${prefix}banchat
āā¢ ${prefix}unbanchat
āā¢ ${prefix}autorespond [on/off]
āā¢ ${prefix}antiviewonce [on/off]
āā¢ ${prefix}autobio [on/off]
āā¢ ${prefix}join [link]
āā¢ ${prefix}self
āā¢ ${prefix}public [only bot]
āā¢ ${prefix}del [pesan bot]
āā¢ ${prefix}setppbot [reply image]
ā°ā
`}

exports.database = (prefix) =>{
	return`ā­āā ć š»šš„šššš¤š šššš¦ ć 
āā¢ ${prefix}setcmd [reply stiker]
āā¢ ${prefix}delcmd [reply stiker]
āā¢ ${prefix}listcmd
āā¢ ${prefix}absen
āā¢ ${prefix}cekabsen
āā¢ ${prefix}deleteabsen
āā¢ ${prefix}absenstart
āā¢ ${prefix}addmsg [nama file]
āā¢ ${prefix}getmsg [nama file]
āā¢ ${prefix}listmsg
āā¢ ${prefix}delmsg [nama file]
ā°ā
`}

exports.group = (prefix) =>{
	return`ā­āā ć š¾š£š š¦š” šššš¦ ć 
āā¢ ${prefix}listonline
āā¢ ${prefix}sider
āā¢ ${prefix}wm packname|author
āā¢ ${prefix}infochat
āā¢ ${prefix}setdesk [text]
āā¢ ${prefix}setppgrup [reply image]
āā¢ ${prefix}antilink [on/off]
āā¢ ${prefix}revoke
āā¢ ${prefix}leave
āā¢ ${prefix}add [62***]
āā¢ ${prefix}kick @tag
āā¢ ${prefix}leave
āā¢ ${prefix}linkgc
āā¢ ${prefix}take packname|author
āā¢ ${prefix}group [open/close]
āā¢ ${prefix}tagall [text]
āā¢ ${prefix}hidetag [text]
ā°ā
`}

exports.anime = (prefix) =>{
	return`ā­āā ć šøšššš šššš¦ ć 
āā¢ ${prefix}quotesanime
āā¢ ${prefix}anime [query]
āā¢ ${prefix}manga [query]
āā¢ ${prefix}character [query]
ā°ā
`}

exports.tag = (prefix) =>{
	return`ā­āā ć ššš šššš¦ ć 
āā¢ ${prefix}stickertag
āā¢ ${prefix}videotag [query]
āā¢ ${prefix}vntag [query]
āā¢ ${prefix}imagetag [query]
ā°ā
`}

exports.stalk = (prefix) =>{
	return`ā­āā ć šš„šššššš šššš¦ ć 
āā¢ ${prefix}igstalk [username]
āā¢ ${prefix}ghstalk [username]
āā¢ ${prefix}ytstalk [channel]
ā°ā
`}

exports.search = (prefix) =>{
	return`ā­āā ć šššš£šš šššš¦ ć 
āā¢ ${prefix}ytsearch [query]
āā¢ ${prefix}wallpaper [query]
āā¢ ${prefix}google [query]
āā¢ ${prefix}wikimedia [query]
āā¢ ${prefix}hentai
āā¢ ${prefix}wattpad [query]
āā¢ ${prefix}webtoons [query]
āā¢ ${prefix}drakor [query]
āā¢ ${prefix}pinterest [query]
ā°ā
`}

exports.converter = (prefix) =>{
	return`ā­āā ć āš šš§šš£š„šš£ šššš¦ ć 
āā¢ ${prefix}toaudio [video]
āā¢ ${prefix}tomp3 [video]
āā¢ ${prefix}tovn [video]
āā¢ ${prefix}stiker [reply image]
āā¢ ${prefix}tourl [image/video]
āā¢ ${prefix}togif [sticker]
āā¢ ${prefix}tomp4 [sticker]
āā¢ ${prefix}toimg [reply sticker]
ā°ā
`}

exports.effect = (prefix) =>{
	return`ā­āā ć ššššš š¼ššššš„ šššš¦ ć 
āā¢ ${prefix}wanted [reply image/stiker]
āā¢ ${prefix}utatoo [reply image/stiker]
āā¢ ${prefix}unsharpen [reply image/stiker]
āā¢ ${prefix}thanos [reply image/stiker]
āā¢ ${prefix}sniper [reply image/stiker]
āā¢ ${prefix}sharpen [reply image/stiker]
āā¢ ${prefix}sepia [reply image/stiker]
āā¢ ${prefix}scary [reply image/stiker]
āā¢ ${prefix}rip [reply image/stiker]
āā¢ ${prefix}redple [reply image/stiker]
āā¢ ${prefix}rejected [reply image/stiker]
āā¢ ${prefix}posterize [reply image/stiker]
āā¢ ${prefix}ps4 [reply image/stiker]
āā¢ ${prefix}pixelize [reply image/stiker]
āā¢ ${prefix}missionpassed [reply image/stiker]
āā¢ ${prefix}moustache [reply image/stiker]
āā¢ ${prefix}lookwhatkarenhave [reply image/stiker]
āā¢ ${prefix}jail [reply image/stiker]
āā¢ ${prefix}invert [reply image/stiker]
āā¢ ${prefix}instagram [reply image/stiker]
āā¢ ${prefix}greyscale [reply image/stiker]
āā¢ ${prefix}glitch [reply image/stiker]
āā¢ ${prefix}gay [reply image/stiker]
āā¢ ${prefix}frame [reply image/stiker]
āā¢ ${prefix}fire [reply image/stiker]
āā¢ ${prefix}distort [reply image/stiker]
āā¢ ${prefix}dictator [reply image/stiker]
āā¢ ${prefix}deepfry [reply image/stiker]
āā¢ ${prefix}ddungeon [reply image/stiker]
āā¢ ${prefix}circle [reply image/stiker]
āā¢ ${prefix}challenger [reply image/stiker]
āā¢ ${prefix}burn [reply image/stiker]
āā¢ ${prefix}brazzers [reply image/stiker]
āā¢ ${prefix}beautiful [reply image/stiker]
ā°ā
`}

//
exports.effect2 = (prefix) =>{
	return`ā­āā ć šš„ššššš£ š¼ššššš„ šššš¦ ć 
āā¢ ${prefix}jail [reply image/stiker]
āā¢ ${prefix}red [reply image/stiker]
āā¢ ${prefix}gay [reply image/stiker]
āā¢ ${prefix}bloo [reply image/stiker]
āā¢ ${prefix}blue [reply image/stiker]
āā¢ ${prefix}sepia [reply image/stiker]
āā¢ ${prefix}green [reply image/stiker]
āā¢ ${prefix}glass [reply image/stiker]
āā¢ ${prefix}invert [reply image/stiker]
āā¢ ${prefix}blurple [reply image/stiker]
āā¢ ${prefix}blurple2 [reply image/stiker]
āā¢ ${prefix}wasted [reply image/stiker]
āā¢ ${prefix}passed [reply image/stiker]
āā¢ ${prefix}triggered [reply image/stiker]
āā¢ ${prefix}comrade [reply image/stiker]
āā¢ ${prefix}greyscale [reply image/stiker]
āā¢ ${prefix}threshold [reply image/stiker]
āā¢ ${prefix}brightness [reply image/stiker]
āā¢ ${prefix}invertgreyscale [reply image/stiker]
ā°ā`
}

exports.download = (prefix) =>{
return`ā­āā ć š»š šØššš šš šššš¦ ć 
āā¢ ${prefix}tiktok [link]
āā¢ ${prefix}tiktoknowm [link]
āā¢ ${prefix}tiktokwm [link]
āā¢ ${prefix}tiktokaudio [link]
āā¢ ${prefix}ytdl [link]
āā¢ ${prefix}play [query]
āā¢ ${prefix}ytmp3 [link]
āā¢ ${prefix}ytshortmp3 [link]
āā¢ ${prefix}ytmp4 [link]
āā¢ ${prefix}ytshorts [link]
āā¢ ${prefix}facebook [link]
āā¢ ${prefix}facebooksd [link]
āā¢ ${prefix}facebookhd [link]
āā¢ ${prefix}fbaudio [link]
āā¢ ${prefix}igstory [username]
āā¢ ${prefix}igdl [link]
āā¢ ${prefix}igphoto [link]
āā¢ ${prefix}igvideo [link]
āā¢ ${prefix}igreels [link]
āā¢ ${prefix}igtv [link]
āā¢ ${prefix}soundcloud [link]
āā¢ ${prefix}gitclone [link repo]
āā¢ ${prefix}gitrepo [username repo branch]
āā¢ ${prefix}mediafire [link]
āā¢ ${prefix}twitter link
ā°ā
`
}

exports.ranime = (prefix) =>{
	return`ā­āā ć āšššš š šøšššš šššš¦ ć
āā¢ ${prefix}loli
āā¢ ${prefix}neko
āā¢ ${prefix}waifu
āā¢ ${prefix}shinobu
āā¢ ${prefix}megumin
āā¢ ${prefix}bully
āā¢ ${prefix}cuddle
āā¢ ${prefix}cry
āā¢ ${prefix}hug
āā¢ ${prefix}awoo
āā¢ ${prefix}kiss
āā¢ ${prefix}lick
āā¢ ${prefix}pat
āā¢ ${prefix}smug
āā¢ ${prefix}bonk
āā¢ ${prefix}yeet
āā¢ ${prefix}blush
āā¢ ${prefix}smile
āā¢ ${prefix}wave
āā¢ ${prefix}highfive
āā¢ ${prefix}handhold
āā¢ ${prefix}nom
āā¢ ${prefix}bite
āā¢ ${prefix}glomp
āā¢ ${prefix}slap
āā¢ ${prefix}kill
āā¢ ${prefix}happy
āā¢ ${prefix}wink
āā¢ ${prefix}poke
āā¢ ${prefix}dance
āā¢ ${prefix}cringe
ā°ā
`
}

exports.nsfw = (prefix) =>{
	return`ā­āā ć āš¤ššØ & š¤ššØ šššš¦ ć
āā¢ ${prefix}ahegao <āļø>
āā¢ ${prefix}ass <āļø>
āā¢ ${prefix}bdsm <āļø>
āā¢ ${prefix}blowjob <āļø>
āā¢ ${prefix}cuckold <āļø>
āā¢ ${prefix}cum <āļø>
āā¢ ${prefix}ero <āļø>
āā¢ ${prefix}femdom <āļø>
āā¢ ${prefix}foot <āļø>
āā¢ ${prefix}gangbang <āļø>
āā¢ ${prefix}glasses <āļø>
āā¢ ${prefix}jahy <āļø>
āā¢ ${prefix}manga <āļø>
āā¢ ${prefix}masturbation <āļø>
āā¢ ${prefix}neko <āļø>
āā¢ ${prefix}orgy <āļø>
āā¢ ${prefix}panties <āļø>
āā¢ ${prefix}pussy <āļø>
āā¢ ${prefix}tentacles <āļø>
āā¢ ${prefix}thighs <āļø>
āā¢ ${prefix}yuri <āļø>
āā¢ ${prefix}feet <āļø>
āā¢ ${prefix}lewdkemo <āļø>
āā¢ ${prefix}woof <āļø>
āā¢ ${prefix}gasm <āļø>
āā¢ ${prefix}solo <āļø>
āā¢ ${prefix}8ball <āļø>
āā¢ ${prefix}goose <āļø>
āā¢ ${prefix}avatar <āļø>
āā¢ ${prefix}hololewd <āļø>
āā¢ ${prefix}gecg <āļø>
āā¢ ${prefix}holo <āļø>
āā¢ ${prefix}fox_girl <āļø>
āā¢ ${prefix}tits <āļø>
āā¢ ${prefix}eroyuri <āļø>
āā¢ ${prefix}holoyero <āļø>
āā¢ ${prefix}lizard <āļø>
āā¢ ${prefix}keta <āļø>
āā¢ ${prefix}eron <āļø>
āā¢ ${prefix}erok <āļø>
āā¢ ${prefix}kemonomimi <āļø>
āā¢ ${prefix}cum_jpg <āļø>
āā¢ ${prefix}nsfw_avatar <āļø>
āā¢ ${prefix}erofeet <āļø>
āā¢ ${prefix}meow <āļø>
āā¢ ${prefix}wallpaper <āļø>
āā¢ ${prefix}waifu <āļø>
āā¢ ${prefix}trap <āļø>
āā¢ ${prefix}lewd <āļø>
āā¢ ${prefix}pussy_jpg <āļø>
āā¢ ${prefix}futanari <āļø>
āā¢ ${prefix}lewdk <āļø>
āā¢ ${prefix}solog <āļø>
āā¢ ${prefix}smug <āļø>
āā¢ ${prefix}cum <āļø>
āā¢ ${prefix}slap <āļø>
āā¢ ${prefix}les <āļø>
āā¢ ${prefix}erokemo <āļø>
āā¢ ${prefix}bj <āļø>
āā¢ ${prefix}pwankg <āļø>
āā¢ ${prefix}pat <āļø>
āā¢ ${prefix}poke <āļø>
āā¢ ${prefix}feed <āļø>
āā¢ ${prefix}nsfw_neko_gif <āļø>
āā¢ ${prefix}pussy <āļø>
āā¢ ${prefix}feetg <āļø>
āā¢ ${prefix}baka <āļø>
āā¢ ${prefix}hug <āļø>
āā¢ ${prefix}kiss <āļø>
āā¢ ${prefix}tickle <āļø>
āā¢ ${prefix}spank <āļø>
āā¢ ${prefix}kuni <āļø>
āā¢ ${prefix}classic <āļø>
āā¢ ${prefix}boobs <āļø>
āā¢ ${prefix}anal <āļø>
āā¢ ${prefix}ngif <āļø>
āā¢ ${prefix}cuddle <āļø>
āā¢ ${prefix}zettai <āļø>
ā°ā
`
}

exports.textpro = (prefix) =>{
	return`ā­āā ć ššš©š„āš£š  šššš¦ ć
āā¢ ${prefix}halloween2 text|text2
āā¢ ${prefix}horror text|text2
āā¢ ${prefix}game8bit text|text2
āā¢ ${prefix}layered text|text2
āā¢ ${prefix}glitch2 text|text2
āā¢ ${prefix}coolg text|text2
āā¢ ${prefix}coolwg text|text2
āā¢ ${prefix}realistic text|text2
āā¢ ${prefix}space3d text|text2
āā¢ ${prefix}gtiktok text|text2
āā¢ ${prefix}stone text|text2
āā¢ ${prefix}marvel text|text2
āā¢ ${prefix}marvel2 text|text2
āā¢ ${prefix}pornhub text|text2
āā¢ ${prefix}avengers text|text2
āā¢ ${prefix}metalr text|text2
āā¢ ${prefix}metalg text|text2
āā¢ ${prefix}metalg2 text|text2
āā¢ ${prefix}halloween2 text|text2
āā¢ ${prefix}lion text|text2
āā¢ ${prefix}wolf_bw text|text2
āā¢ ${prefix}wolf_g text|text2
āā¢ ${prefix}ninja text|text2
āā¢ ${prefix}3dsteel text|text2
āā¢ ${prefix}horror2 text|text2
āā¢ ${prefix}lava text|text2
āā¢ ${prefix}bagel text|text2
āā¢ ${prefix}blackpink text
āā¢ ${prefix}rainbow2 text
āā¢ ${prefix}water_pipe text
āā¢ ${prefix}halloween text
āā¢ ${prefix}sketch text
āā¢ ${prefix}sircuit text
āā¢ ${prefix}discovery text
āā¢ ${prefix}metallic2 text
āā¢ ${prefix}fiction text
āā¢ ${prefix}demon text
āā¢ ${prefix}transformer text
āā¢ ${prefix}berry text
āā¢ ${prefix}thunder text
āā¢ ${prefix}magma text
āā¢ ${prefix}3dstone text
āā¢ ${prefix}neon text
āā¢ ${prefix}glitch text
āā¢ ${prefix}harry_potter text
āā¢ ${prefix}embossed text
āā¢ ${prefix}broken text
āā¢ ${prefix}papercut text
āā¢ ${prefix}gradient text
āā¢ ${prefix}glossy text
āā¢ ${prefix}watercolor text
āā¢ ${prefix}multicolor text
āā¢ ${prefix}neon_devil text
āā¢ ${prefix}underwater text
āā¢ ${prefix}bear text
āā¢ ${prefix}wonderfulg text
āā¢ ${prefix}christmas text
āā¢ ${prefix}neon_light text
āā¢ ${prefix}snow text
āā¢ ${prefix}cloudsky text
āā¢ ${prefix}luxury2 text
āā¢ ${prefix}gradient2 text
āā¢ ${prefix}summer text
āā¢ ${prefix}writing text
āā¢ ${prefix}engraved text
āā¢ ${prefix}summery text
āā¢ ${prefix}3dglue text
āā¢ ${prefix}metaldark text
āā¢ ${prefix}neonlight text
āā¢ ${prefix}oscar text
āā¢ ${prefix}minion text
āā¢ ${prefix}holographic text
āā¢ ${prefix}purple text
āā¢ ${prefix}glossyb text
āā¢ ${prefix}deluxe2 text
āā¢ ${prefix}glossyc text
āā¢ ${prefix}fabric text
āā¢ ${prefix}neonc text
āā¢ ${prefix}newyear text
āā¢ ${prefix}newyear2 text
āā¢ ${prefix}metals text
āā¢ ${prefix}xmas text
āā¢ ${prefix}blood text
āā¢ ${prefix}darkg text
āā¢ ${prefix}joker text
āā¢ ${prefix}wicker text
āā¢ ${prefix}natural text
āā¢ ${prefix}firework text
āā¢ ${prefix}skeleton text
āā¢ ${prefix}balloon text
āā¢ ${prefix}balloon2 text
āā¢ ${prefix}balloon3 text
āā¢ ${prefix}balloon4 text
āā¢ ${prefix}balloon5 text
āā¢ ${prefix}balloon6 text
āā¢ ${prefix}balloon7 text
āā¢ ${prefix}steel text
āā¢ ${prefix}gloss text
āā¢ ${prefix}denim text
āā¢ ${prefix}decorate text
āā¢ ${prefix}decorate2 text
āā¢ ${prefix}peridot text
āā¢ ${prefix}rock text
āā¢ ${prefix}glass text
āā¢ ${prefix}glass2 text
āā¢ ${prefix}glass3 text
āā¢ ${prefix}glass4 text
āā¢ ${prefix}glass5 text
āā¢ ${prefix}glass6 text
āā¢ ${prefix}glass7 text
āā¢ ${prefix}glass8 text
āā¢ ${prefix}captain_as2 text
āā¢ ${prefix}robot text
āā¢ ${prefix}equalizer text
āā¢ ${prefix}toxic text
āā¢ ${prefix}sparkling text
āā¢ ${prefix}sparkling2 text
āā¢ ${prefix}sparkling3 text
āā¢ ${prefix}sparkling4 text
āā¢ ${prefix}sparkling5 text
āā¢ ${prefix}sparkling6 text
āā¢ ${prefix}sparkling7 text
āā¢ ${prefix}decorative text
āā¢ ${prefix}chocolate text
āā¢ ${prefix}strawberry text
āā¢ ${prefix}koifish text
āā¢ ${prefix}bread text
āā¢ ${prefix}matrix text
āā¢ ${prefix}blood2 text
āā¢ ${prefix}neonligth2 text
āā¢ ${prefix}thunder2 text
āā¢ ${prefix}3dbox text
āā¢ ${prefix}neon2 text
āā¢ ${prefix}roadw text
āā¢ ${prefix}bokeh text
āā¢ ${prefix}gneon text
āā¢ ${prefix}advanced text
āā¢ ${prefix}dropwater text
āā¢ ${prefix}wall text
āā¢ ${prefix}chrismast text
āā¢ ${prefix}honey text
āā¢ ${prefix}drug text
āā¢ ${prefix}marble text
āā¢ ${prefix}marble2 text
āā¢ ${prefix}ice text
āā¢ ${prefix}juice text
āā¢ ${prefix}rusty text
āā¢ ${prefix}abstra text
āā¢ ${prefix}biscuit text
āā¢ ${prefix}wood text
āā¢ ${prefix}scifi text
āā¢ ${prefix}metalr text
āā¢ ${prefix}purpleg text
āā¢ ${prefix}shiny text 
āā¢ ${prefix}jewelry text
āā¢ ${prefix}jewelry2 text
āā¢ ${prefix}jewelry3 text
āā¢ ${prefix}jewelry4 text
āā¢ ${prefix}jewelry5 text
āā¢ ${prefix}jewelry6 text
āā¢ ${prefix}jewelry7 text
āā¢ ${prefix}jewelry8 text
āā¢ ${prefix}metalh text
āā¢ ${prefix}golden text
āā¢ ${prefix}glitter text
āā¢ ${prefix}glitter2 text
āā¢ ${prefix}glitter3 text
āā¢ ${prefix}glitter4 text
āā¢ ${prefix}glitter5 text
āā¢ ${prefix}glitter6 text
āā¢ ${prefix}glitter7 text
āā¢ ${prefix}metale text
āā¢ ${prefix}carbon text
āā¢ ${prefix}candy text
āā¢ ${prefix}metalb text
āā¢ ${prefix}gemb text
āā¢ ${prefix}3dchrome text
āā¢ ${prefix}metalb2 text
āā¢ ${prefix}metalg text
āā¢ ${prefix}metalg text
ā°ā
`
}


exports.other = (prefix) =>{
return`ā­āā ć šš„ššš£š¤ šššš¦ ć
āā¢ ${prefix}ttp [text] <šļø>
āā¢ ${prefix}attp [text] <šļø>
āā¢ ${prefix}afk [reason]
āā¢ ${prefix}translate kode_bahasa text
āā¢ ${prefix}kalkulator [query]
āā¢ ${prefix}smeme [text]
āā¢ ${prefix}smeme2 [text|text]
āā¢ ${prefix}memegen [text|text]
āā¢ ${prefix}botgrup
āā¢ ${prefix}igowner
ā°ā
`
}
exports.game = (prefix) =>{
return`ā­āā ć Game Menu ć
āā¢ ${prefix}kuismath
āā¢ ${prefix}tebak [option]
āā¢ ${prefix}tekateki
āā¢ ${prefix}susunkata
āā¢ ${prefix}caklontong
ā°ā
`
}
exports.asupan = (prefix) =>{
return`ā­āā ć Asupan Menu ć
āā¢ ${prefix}chika
āā¢ ${prefix}delvira
āā¢ ${prefix}ayu
āā¢ ${prefix}bunga
āā¢ ${prefix}aura
āā¢ ${prefix}nisa
āā¢ ${prefix}ziva
āā¢ ${prefix}yana
āā¢ ${prefix}viona
āā¢ ${prefix}syania
āā¢ ${prefix}riri
āā¢ ${prefix}syifa
āā¢ ${prefix}mama_gina
āā¢ ${prefix}alcakenya
āā¢ ${prefix}mangayutri
āā¢ ${prefix}rikagusriani
āā¢ ${prefix}asupan
āā¢ ${prefix}bocil
āā¢ ${prefix}geayubi
āā¢ ${prefix}santuy
āā¢ ${prefix}ukhty
āā¢ ${prefix}syifa
ā°ā
`
}
exports.cecan = (prefix) =>{
return`ā­āā ć Random Cewe ć
āā¢ ${prefix}china 
āā¢ ${prefix}indonesia 
āā¢ ${prefix}malaysia 
āā¢ ${prefix}thailand 
āā¢ ${prefix}korea 
āā¢ ${prefix}japan 
āā¢ ${prefix}vietnam 
āā¢ ${prefix}jenni 
āā¢ ${prefix}jiso 
āā¢ ${prefix}lisa  
āā¢ ${prefix}rose
ā°ā
`
}

exports.tqto = () =>{
	return`ā­āā ć šššššš¤ šš  ć 
ā š°šššš ššš. š
ā š¼š¢ š¾ššš
ā šššššš°šš
ā šššššš”
ā š¼š š¼šššššš
ā š¾šššš-š¾šššš šššš š±šššššššš
ā š¼š¢ šššš š±ššš£
ā šæššš šæšššššššš
ā šøšššššš
ā šæššš¢šššš š¼ššššš
ā š°šš š°šš ššššššš
ā°ā
`
}

exports.primbonmenu = (prefix) =>{
	return`ā­āā ć Primbon ć
āā¢ ${prefix}nomorhoki 887435047326
āā¢ ${prefix}artimimpi [query]
āā¢ ${prefix}artinama [query]
āā¢ ${prefix}ramaljodoh
āā¢ ${prefix}ramaljodohbali
āā¢ ${prefix}suamiistri
āā¢ ${prefix}ramalcinta
āā¢ ${prefix}cocoknama
āā¢ ${prefix}pasangan
āā¢ ${prefix}jadiannikah
āā¢ ${prefix}sifatusaha
āā¢ ${prefix}rezeki
āā¢ ${prefix}pekerjaan
āā¢ ${prefix}nasib
āā¢ ${prefix}penyakit
āā¢ ${prefix}tarot
āā¢ ${prefix}fengshui
āā¢ ${prefix}haribaik
āā¢ ${prefix}harisangar
āā¢ ${prefix}harisial
āā¢ ${prefix}nagahari
āā¢ ${prefix}arahrezeki
āā¢ ${prefix}peruntungan
āā¢ ${prefix}weton
āā¢ ${prefix}karakter
āā¢ ${prefix}keberuntungan
āā¢ ${prefix}memancing
āā¢ ${prefix}masasubur
āā¢ ${prefix}zodiak 
āā¢ ${prefix}shio [query]
ā°ā
`
}

exports.stcmenu = (prefix) =>{
	return`ā­āā ć šššššš£šš šš„ššššš£ ć
āā¢ ${prefix}awoawo
āā¢ ${prefix}benedict
āā¢ ${prefix}chat
āā¢ ${prefix}dbfly
āā¢ ${prefix}dino_kuning
āā¢ ${prefix}doge
āā¢ ${prefix}gojosatoru
āā¢ ${prefix}hope_boy
āā¢ ${prefix}jisoo
āā¢ ${prefix}kr_robot
āā¢ ${prefix}kucing
āā¢ ${prefix}lonte
āā¢ ${prefix}manusia_lidi
āā¢ ${prefix}menjamet
āā¢ ${prefix}meow
āā¢ ${prefix}nicholas
āā¢ ${prefix}patrick
āā¢ ${prefix}popoci
āā¢ ${prefix}sponsbob
āā¢ ${prefix}kawan_sponsbob
āā¢ ${prefix}tyni
ā°ā
`}

exports.ephotomenu = (prefix) =>{
	return`ā­āā ć š¼š”šš š„š 360 šššš¦ ć
āā¢ ${prefix}youtubegold text
āā¢ ${prefix}youtubesilver text
āā¢ ${prefix}facebookgold text
āā¢ ${prefix}facebooksilver text
āā¢ ${prefix}instagramgold text
āā¢ ${prefix}instagramsilver text
āā¢ ${prefix}twittergold text
āā¢ ${prefix}twittersilver text
āā¢ ${prefix}retrotext text
āā¢ ${prefix}halloweenbats text
āā¢ ${prefix}texthalloween text
āā¢ ${prefix}cardhalloween text
āā¢ ${prefix}birthdaycake text
āā¢ ${prefix}thundertext text
āā¢ ${prefix}icetext text
āā¢ ${prefix}milkcake text
āā¢ ${prefix}snowontext text
āā¢ ${prefix}metalstar text
āā¢ ${prefix}dragonfire text
āā¢ ${prefix}zombie3d text
āā¢ ${prefix}merrycard text
āā¢ ${prefix}generalexam text 
āā¢ ${prefix}viettel text
āā¢ ${prefix}embroider text
āā¢ ${prefix}graffititext text
āā¢ ${prefix}graffititext2 text
āā¢ ${prefix}graffititext3 text
āā¢ ${prefix}covergraffiti text
āā¢ ${prefix}moderngold text
āā¢ ${prefix}capercut text
āā¢ ${prefix}lovecard text
āā¢ ${prefix}heartflashlight text
āā¢ ${prefix}heartcup text
āā¢ ${prefix}sunglightshadow text
āā¢ ${prefix}graffiti3d text
āā¢ ${prefix}moderngoldsilver text
āā¢ ${prefix}moderngold2 text
āā¢ ${prefix}moderngold3 text
āā¢ ${prefix}fabrictext text
āā¢ ${prefix}masteryavatar text
āā¢ ${prefix}messagecoffee text
āā¢ ${prefix}announofwin text
āā¢ ${prefix}writeblood text
āā¢ ${prefix}horrorletter text
āā¢ ${prefix}writehorror text
āā¢ ${prefix}shirtclub text
āā¢ ${prefix}angelwing text
āā¢ ${prefix}christmasseason text
āā¢ ${prefix}projectyasuo text
āā¢ ${prefix}lovelycute text
āā¢ ${prefix}womansday text
āā¢ ${prefix}covergamepubg text
āā¢ ${prefix}nameonheart text
āā¢ ${prefix}funnyhalloween text
āā¢ ${prefix}lightningpubg text
āā¢ ${prefix}greetingcardvideo text 
āā¢ ${prefix}christmascard text 
āā¢ ${prefix}galaxybat text
āā¢ ${prefix}writegalaxy text
āā¢ ${prefix}starsnight text
āā¢ ${prefix}noeltext text
āā¢ ${prefix}textcakes text
āā¢ ${prefix}pubgbirthday text
āā¢ ${prefix}galaxywallpaper text
āā¢ ${prefix}pubgglicthvideo text 
āā¢ ${prefix}pubgmascotlogo text
āā¢ ${prefix}realembroidery text
āā¢ ${prefix}vintagetelevision text
āā¢ ${prefix}funnyanimations text
āā¢ ${prefix}glowingtext text
āā¢ ${prefix}textonglass text
āā¢ ${prefix}cartoonstyle text
āā¢ ${prefix}multicolor text
āā¢ ${prefix}watercolor2 text
āā¢ ${prefix}textsky text
āā¢ ${prefix}summerbeach text
āā¢ ${prefix}1917text text
āā¢ ${prefix}puppycute text
āā¢ ${prefix}rosebirthday text
āā¢ ${prefix}steellettering text|text2
āā¢ ${prefix}letterstext text|text2
āā¢ ${prefix}barcashirt text|text2
āā¢ ${prefix}premiercup text|text2
āā¢ ${prefix}stylepoligon text|text2
āā¢ ${prefix}lifebuoys text|text2
āā¢ ${prefix}juventusshirt text|text2
ā°ā
`
}

exports.logomenu = (prefix) =>{
	return`ā­āā ć šš šš  šššš¦ ć
āā¢ ${prefix}coverbannerlol text|heroes
āā¢ ${prefix}pubglogomaker text|style
āā¢ ${prefix}colorfulpubg text|color
āā¢ ${prefix}astronotspace text|style
āā¢ ${prefix}wallpaperaov text|heroes
āā¢ ${prefix}maketeamlogo text|style
āā¢ ${prefix}circlemarcotteam text|logo
āā¢ ${prefix}wallpaperml text|heroes
āā¢ ${prefix}dragonballfb text|character
āā¢ ${prefix}bannerofaov text|character
āā¢ ${prefix}effect3donbeach text|background
āā¢ ${prefix}cutegirlgamer text|logo
āā¢ ${prefix}footballteam text|logo
āā¢ ${prefix}beautifulshimmering text|champion
āā¢ ${prefix}pubgcutelogo text|logo
āā¢ ${prefix}elegantrotation text|logo
āā¢ ${prefix}logogamingassasin text|logo
āā¢ ${prefix}introvideomaker text|logo
āā¢ ${prefix}gaminglogo4fvs text|logo
āā¢ ${prefix}blueneon text|logo
āā¢ ${prefix}metalmascot text|logo
āā¢ ${prefix}anonymous2 text|style
āā¢ ${prefix}lolpentakill text|style
āā¢ ${prefix}avatarleagueofking text|style
āā¢ ${prefix}avatarff text|character
āā¢ ${prefix}overwatchwallpaper text|character
āā¢ ${prefix}rovwallpaperhd text|hero
āā¢ ${prefix}rovwallpaper text|avatar
āā¢ ${prefix}beautifulgalaxylol text|style
āā¢ ${prefix}crossfirecover text|character
āā¢ ${prefix}lolwallpaper text|wallpaper
āā¢ ${prefix}coverdota2 text|heroes
āā¢ ${prefix}coverleagueofking text|character
āā¢ ${prefix}avatar3q360 text|avatar
āā¢ ${prefix}coverofwarface text|character
āā¢ ${prefix}newlolavatar text|avatar
āā¢ ${prefix}csgocover text|background
āā¢ ${prefix}coverloknew text|hero
āā¢ ${prefix}coverfblol text|letters
āā¢ ${prefix}overwatchcover text|hero
āā¢ ${prefix}crossfirestyle text|avatar
āā¢ ${prefix}avatarlolbyname text|style
āā¢ ${prefix}lolcoverbyname text|avatar
āā¢ ${prefix}cyberhunterfb text|character
āā¢ ${prefix}coverfreefirefb text|character
āā¢ ${prefix}gamingmascot text|style
āā¢ ${prefix}coveronepiecefb text|character
āā¢ ${prefix}bannerytcsgo text|banner
āā¢ ${prefix}fbgamepubgcover text|template
āā¢ ${prefix}banneroflol text|text2|banner
āā¢ ${prefix}bannerofaov2 text|text2|banner
āā¢ ${prefix}teamlogo text|text2|background
āā¢ ${prefix}companylogo2 text|text2|background
āā¢ ${prefix}companylogo text|text2|background
āā¢ ${prefix}gradientlogo text|text2|background
āā¢ ${prefix}pencilsketch text|text2|icon
āā¢ ${prefix}gunlogogaming text|text2|background
āā¢ ${prefix}banneroffreefire text|text2|background
āā¢ ${prefix}letterlogos text|text2|thumb
āā¢ ${prefix}bannerofoverwatch text|text2|background
āā¢ ${prefix}bannerofapex text|text2|background
āā¢ ${prefix}bannerofpubg text|text2|background
āā¢ ${prefix}mascotstyle text|text2|thumb
āā¢ ${prefix}logoaccording text|text2|thumb
āā¢ ${prefix}avataroverwatch text|text2|thumb
ā°ā
`
}

exports.islammenu = (prefix) =>{
	return`ā­āā ć šš¤ššš šššš¦ ć
āā¢ ${prefix}asmaulhusna
āā¢ ${prefix}kisahnabi [nabi]
āā¢ ${prefix}jadwalshalat [daerah]
āā¢ ${prefix}randomquran
āā¢ ${prefix}randomquran2
āā¢ ${prefix}listsurah
āā¢ ${prefix}tafsirsurah [surah]
āā¢ ${prefix}alquranaudio [surah|ayat]
ā°ā
`
}
exports.anonchat = (prefix) =>{
	return`ā­āā ć šøšš ššŖšš š¦š¤ āššš„ ć
āā¢ ${prefix}anonymous 
āā¢ ${prefix}start
āā¢ ${prefix}skip [daerah]
āā¢ ${prefix}stop [surah|ayat]
ā°ā
`
}

exports.storemenu = (prefix) =>{
	return`ā­āā ć šš„š š£š šššš¦ ć
āā¢ ${prefix}list
āā¢ ${prefix}addlist [key|respond]
āā¢ ${prefix}dellist [key]
āā¢ ${prefix}update [key|respond]
āā¢ ${prefix}store
āā¢ ${prefix}kali
āā¢ ${prefix}bagi
āā¢ ${prefix}tambah
āā¢ ${prefix}kurang
āā¢ ${prefix}kalkulator
āā¢ ${prefix}proses
āā¢ ${prefix}done
ā°ā
`
}


exports.soundmenu = (prefix) =>{
return`ā­āā ć šš š¦šš šššš¦ ć
āā¢ ${prefix}sound1
āā¢ ${prefix}sound2
āā¢ ${prefix}sound3
āā¢ ${prefix}sound4
āā¢ ${prefix}sound5
āā¢ ${prefix}sound6
āā¢ ${prefix}sound7
āā¢ ${prefix}sound8
āā¢ ${prefix}sound9
āā¢ ${prefix}sound10
āā¢ ${prefix}sound11
āā¢ ${prefix}sound12
āā¢ ${prefix}sound13
āā¢ ${prefix}sound14
āā¢ ${prefix}sound15
āā¢ ${prefix}sound16
āā¢ ${prefix}sound17
āā¢ ${prefix}sound18 
āā¢ ${prefix}sound19
āā¢ ${prefix}sound20
āā¢ ${prefix}sound21
āā¢ ${prefix}sound22
āā¢ ${prefix}sound23
āā¢ ${prefix}sound24
āā¢ ${prefix}sound25
āā¢ ${prefix}sound26
āā¢ ${prefix}sound27
āā¢ ${prefix}sound28
āā¢ ${prefix}sound29
āā¢ ${prefix}sound30
āā¢ ${prefix}sound31
āā¢ ${prefix}sound32
āā¢ ${prefix}sound33
āā¢ ${prefix}sound34
āā¢ ${prefix}sound35
āā¢ ${prefix}sound36
āā¢ ${prefix}sound37
āā¢ ${prefix}sound38
āā¢ ${prefix}sound39
āā¢ ${prefix}sound40
āā¢ ${prefix}sound41
āā¢ ${prefix}sound42
āā¢ ${prefix}sound43
āā¢ ${prefix}sound44
āā¢ ${prefix}sound45
āā¢ ${prefix}sound46
āā¢ ${prefix}sound47
āā¢ ${prefix}sound48
āā¢ ${prefix}sound49
āā¢ ${prefix}sound50
āā¢ ${prefix}sound51
āā¢ ${prefix}sound52
āā¢ ${prefix}sound53
āā¢ ${prefix}sound54
āā¢ ${prefix}sound55
āā¢ ${prefix}sound56
āā¢ ${prefix}sound57
āā¢ ${prefix}sound58
āā¢ ${prefix}sound59
āā¢ ${prefix}sound60
āā¢ ${prefix}sound61
āā¢ ${prefix}sound62
āā¢ ${prefix}sound63
āā¢ ${prefix}sound64
āā¢ ${prefix}sound65
āā¢ ${prefix}sound66
āā¢ ${prefix}sound67
āā¢ ${prefix}sound68
āā¢ ${prefix}sound69
āā¢ ${prefix}sound70
ā°ā
`
}
