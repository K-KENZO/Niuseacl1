module.exports.config = {
    name: "الرتب",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Ιнaв",
    description: "رؤبة رتب الاقليم",
  usePrefix: false,
    commandCategory: "𝗚 𝗥 𝗢 𝗜 𝗣",
    usages: "قاعدة البوت",
    cooldowns: 5,
    dependencies: {
        "request": "",
        "fs-extra": "",
        "axios": ""
    }
};

module.exports.run = async({ api, event, args, client, Users, Threads, __GLOBAL, Currencies }) => {
    const axios = global.nodemodule["axios"];
    const request = global.nodemodule["request"];
    const fs = global.nodemodule["fs-extra"];
    var ZiaRein3 = (`الـرتـب داخـل الـإقـلـيـم:
❏───━━࿇━━───❏
رتـب الـتـجـنيـد:  

° [قـرصــــان ناشــئ ✓]

° [قــاطــع الطـــرق ⌘] 

° [جــنــدي البــحـريـة ♤] 

° [قـرصــــــــــــان ♧] 

° [مــــــلاح ✧] 

° [صــائـد القــراصـنـة ✦] 

° [نـــائــب الأدمــيــرال ❅] 

° [عــضــو فــي CP0 ✲] 

° [الأدمــيـــرال ✱] 

° [قـائـد ٱســطـول ناشــئ ♘] 

° [تــشــوبــڪـاي ❈] 

° [قـائـد الٱســطـول ♞] 

° [قـائـد طـاقـم تحت التدريـب ❀] 

° [الجــيـــروســـي ✵] 

° [قـائـد الطـــــــاقـــــم ✿] 

° [نـــائـــب الثــــوار ❃] 

° [مــــخــــطـط ✪] 

° [قـائـد الثـــــوار ✾] 

° [نـــائـب يــونــڪو ♖] 

° [تــنــيــن ســمــاوي ☤] 

° [اليـــونــــڪـو ♜] 

° [عــيـــن الصـــقـــر ☫] 

° [قـائـد حـڪـومـة الـعـالـم⇜卐] 
❏───━━࿇━━───❏

رتـب خـطـوط الـحـمايـة : 

『فـــيــدࢪالي الحـمـايـة ٭』

『مـــڛـــؤول الفــࢪيـق ☆』

『مـؤڛــــس الخــط ♝』
❏───━━࿇━━───❏

رتـب قـيـادة الـفـريـق : 

| مـڛـﭢـڜـار الـقـࢪاصـنة ♆|

| نــــائـــپ الـقـࢪاصـنة ✯|

| ڙعـــيـم الـقـࢪاصـنة ♛|
❏───━━࿇━━───❏

رتـب الـقـيـادة الـعـليا: 

❘「المــسـتـشار الأعلى لإقـلـيــم الـقـࢪاصـنة」❘

❘「الـنـائـب الأعلى لإقـلـيــم الـقـࢪاصـنة」❘

❘「الـقـائـد الأعلى لإقـلـيــم الـقـࢪاصـنة」❘
❏───━━࿇━━───❏`);
   var ZiaRein = [
"https://i.imgur.com/AOFE3al.jpg",
"https://i.imgur.com/19BI3ys.jpg",
"https://i.imgur.com/qHM9dJu.jpg",
"https://i.imgur.com/7h8xa0u.jpg",
"https://i.imgur.com/acRiU24.jpg",
"https://i.imgur.com/oH8hycL.jpg","https://i.imgur.com/CNekb7o.jpg","https://i.imgur.com/0i5oniK.jpg",   

    ];
    var ZiaRein2 = () => api.sendMessage({ body: ZiaRein3, attachment: fs.createReadStream(__dirname + "/cache/ZiaRein1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/ZiaRein1.jpg"), event.messageID);
    return request(encodeURI(ZiaRein[Math.floor(Math.random() * ZiaRein.length)])).pipe(fs.createWriteStream(__dirname + "/cache/ZiaRein1.jpg")).on("close", () => ZiaRein2());
};
