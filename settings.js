const fs = require('fs')
const chalk = require('chalk')
const  { indonesia, english} = require(`./language`)

// Website Api
global.APIs = {
	alfa: 'https://api.zeeoneofc.xyz', //apabila link api eror, segera laporkan ke owner
}

// Free apikey
global.APIKeys = {
	'https://api.zeeoneofc.xyz': 'V12',  // login https://api.zeeoneofc.xyz to get apikey || https://api-alphabot.herokuapp.com
}

// setting 
global.autoread = false // auto read pesan / message
global.autobio = true 

//language
//Available in indonesia & english
//You can request others language 
global.language = english  //change indonesia to english if you don't understand the language used by the bot


// Other
global.botname = "𝚂𝚑𝚒𝚛𝚘𝙱𝙾𝚃-𝙼𝙳ོ" //namabot kalian
global.ownername= "︎ᴹᴿ᭄ 𝔸𝕟𝕕𝕙𝕪𝕔𝕒𝔾𝕒𝕟𝕫ོ ×፝֟͜×" //nama kalian
global.myweb ="https://instagram.com/andhycarsrofficial?igshid=YmMyMTA2M2Y=" //bebas asal jan hapus
global.youtube = "https://youtube.com/channel/UCtt_8qM9i8x83BY_U8oozOg" //bebas asal jan hapus
global.github = "https://github.com/andhyca-offc" //bebas
global.email = "pastibisayh@gmail.com" //bebas
global.region = "Jepang" //bebas
global.timezone = 'Asia/Jakarta' //  timezone wib
global.owner = ["6285872761910","6285794408499","62895330584590"] //ganti agar fitur owner bisa di gunakan
global.ownernomer = "6285872761910","6285794408498","62895330584590 // nomor wa kalian
global.ownernomerr = "+6285872761910","+6285794408499","+62895330584590" //nmr wa kalian
global.thumbnail = "./image/loli.jpg" // ini lol.jpg adalah nama foto di folder image. untuk foto bot
global.donasi = "./image/donati.jpg" // foto donasi di folder image
global.background_welcome="https://telegra.ph/file/90a931648de597820bc08.jpg" // maks size 30kb, agar welcome image nya tdk delay

global.packname = '© 𝚂𝚑𝚒𝚛𝚘𝙱𝙾𝚃-𝙼𝙳ོ' //sticker wm ubah
global.author = 'Di Buat Oleh ᴹᴿ᭄ 𝔸𝕟𝕕𝕙𝕪𝕔𝕒𝔾𝕒𝕟𝕫ོ ×፝֟͜×︎︎' //sticker wm ganti nama kalian
global.sessionName = 'session'
global.typemenu = 'templateLocation'
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    sukses: '🤗Done, Oke Desu~',
    admin: 'Perintah Ini Hanya Bisa Digunakan Oleh Admin !',
    botAdmin: 'Perintah Ini Hanya Bisa Digunakan Ketika Bot Menjadi Admin !',
    owner: 'Perintah Ini Hanya Bisa Digunakan Oleh Owner !',
    group: 'Perintah Ini Hanya Bisa Digunakan Di Group !',
    private: 'Perintah Ini Hanya Bisa Digunakan Di Private !',
	bot: 'Fitur Khusus Pengguna Nomor Bot',
    errtoimg: 'Maaf Saat Ini Belum Support Sticker Gif !',
    wait: '「⏳」 𝗣𝗹𝗲𝗮𝘀𝗲 𝗪𝗮𝗶𝘁 𝗔 𝗠𝗼𝗺𝗲𝗻𝘁',
	lockCmd: 'Fitur Tidak Diaktifkan Oleh Owner!',
	example1: 'Selamat Datang @user Di Group @subject Jangan Lupa Baca Rules @desc\n\nNote :\n1. @user (Mention User Join)\n2. @bio (Get Bio User Join)\n3. @tanggal (Date Now)\n4. @desc (Get Description Group)\n5. @subject (Group Name)'
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
