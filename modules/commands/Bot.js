module.exports.config = {
  name: "بوت",
  version: "1.0.1",
  hasPermission: 0,
  credits: "Ιнaв",
  description: "بدون بادئة",
  commandCategory: "𝗚 𝗥 𝗢 𝗜 𝗣",
  usages: "[بوت]",
  cooldowns: 5,
  usePrefix: false,
};

module.exports.handleEvent = async function ({ api, event, Users }) {
  var { threadID, messageID } = event;

  var tl = [ 
    "الملك*ستورم*معك شو تحتاج👑😛","نعم يا رأس البطيخة","تفضل يا خادمي🕶️","هل تعلم انت ثرثار كبير ازعجتني😐🔪","تعرف انني مللت مللت من تظاهر باللطف😒","اسمي الملك ستورم تذكر اسمي جيدا يا غبي","تعرف ماهو الفرق بين الذكاء و الغباء الفرق هو ان الذكاء محدود لكن الغباء لا فهذه هي حالتك الان😐","بوت بوت وجعتم رأسي انا الملك ستورم وعشان ذا الصراخ راح اجلدكم كلكم","هل يمكنك فعل شيء مفيد بدل البقاء هنا و ازعاجي","عمك🕶️","بما أساعدك يا****._.","تفووو عليك وعلى لي جابتك🥲","اكتب الاوامر لعرض الفئات المتاحه😐","تفضل ماهو سؤالك الغبي هذه المرة تعرف لو اراه غبي اذبحك واخليك عبرة","تعرفو لم ارى جروب كرنج مثلكم😐","مطوري إيهاب😌","اكرهك يالك من تافه","اسكت ترى انا ابحث عن فارسة احلامي هل انتي هي🙂⚔️","تبا لك._.","لن اكررها كثيرا اسمي ستورم ياغبي","احب ايهاب","هل تركتك حبيبتك مريم😃","هل تركتك حبيبتك رزان😂","يالك من احمق 😂","تعرفو مللت من الحديث ابقو تنبحو☹️"," فرقة الصقور في انمي غولد يرحب بك😊","ماذا هل وجدت لي فارسة احلامي؟","اشتقت الى حبيبتي اذكر كان اسمها بوتة كيوتة كنت اود ان ننام ننجب اطفال واسمي ابني نصير😌","اريد 130 مليون لحفل زفافي","تفاعل في بروفايل🙂","حط ابوني في ملف المطور 😘",
  ];

  var rand = tl[Math.floor(Math.random() * tl.length)];
  let yan = event.body ? event.body.toLowerCase() : '';

  if (yan.indexOf("بوت") === 0) {
    api.setMessageReaction("💗", event.messageID, (err) => {}, true);
    api.sendTypingIndicator(event.threadID, true);

    let userH = event.senderID;
    const userInfo = global.data.userName.get(userH) || await Users.getUserInfo(userH);
    if (event.senderID == api.getCurrentUserID()) return;

    var msg = {
      body: "@" + userInfo + ", " + rand, 
      mentions: [{
        tag: "@" + userInfo,
        id: userH
      }]
    };

    setTimeout(function() {
      return api.sendMessage(msg, threadID, messageID);
    }, 2000);
  }

  if (
    yan.includes("هه") ||
    yan.includes("غبي") ||
    yan.includes("غاضب") ||
    yan.includes("😹") ||
    yan.includes("كلب") ||
    yan.includes("قطة") ||
    yan.includes("غباء") ||
    yan.includes("😄") ||
    yan.includes("🤣") ||
    yan.includes("😆") ||
    yan.includes("😂") ||
    yan.includes("😅") ||
    yan.includes("xd")
  ) {
    return api.setMessageReaction("😆", event.messageID, (err) => {}, true);
  } 

  if (
    yan.includes("ستورم") ||
    yan.includes("مرحبا") ||
    yan.includes("اهلا") ||
    yan.includes("حب") ||
    yan.includes("ايهاب") ||
    yan.includes("بوت") ||
    yan.includes("صباح")
  ) {
    return api.setMessageReaction("💗", event.messageID, (err) => {}, true);
  }
};

module.exports.run = async function ({ api, event, __GLOBAL }) {};
