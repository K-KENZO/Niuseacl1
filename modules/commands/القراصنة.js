module.exports.config = {
  name: "القراصنة",
  version: "1.0.2",
  hasPermssion: 0,
  credits: "Ιнaв",
  description: "",
  usePrefix: "false",
  commandCategory: "𝗚 𝗥 𝗢 𝗜 𝗣",
  usages: "[Name module]",
  cooldowns: 1,
  envConfig: {
    autoUnsend: true,
    delayUnsend: 20
  }
};

module.exports.run = async function({ api, event }) {

  api.sendMessage(`👑ً🕸️==هـشـتـاغـات فـرق الـقـراصـنـة==👑ً🕸️

-الأول: •----------•
♔[#قراصنة_اللحية_البيضاء]♔

-الثاني: •----------•
♔[#قراصنة_قبعة_القش]♔

-الثالث: •----------•
♔[#قراصنة_الوحوش]♔

-الرابع: •----------•
♔[#قراصنة_الشعر_الاحمر]♔

-الخامس: •----------•
♔[#قراصنة_اللحية_السوداء]♔

-السادس: •----------•
♔[#قراصنة_الروكس]♔

-السابع: •----------•
♔[#قراصنة_القلب_الأسود]♔

🕸️👑ً==هـذه هـي هـشتـاغـات فـرق إقـلـيـم_الـقـراصـنـة==👑ً🕸️`,
  
  event.threadID, event.messageID);
  

}
  