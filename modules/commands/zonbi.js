module.exports.config = {
  name: "شغل",
  version: "2.0.4",
  hasPermssion: 0,
  credits: "Ιнaв",
  description: "قم بتشغيل الأغنية التي تحب",
  usePrefix: false,
  commandCategory: "𝗦 𝗘 𝗥 𝗩 𝗜 𝗖 𝗘 𝗦",
  usages: "[إسم الأغنية]",
  cooldowns: 10,
  dependencies: {
    "fs-extra": "",
    "request": "",
    "axios": "",
    "ytdl-core": "",
    "yt-search": ""
  }
};

module.exports.run = async ({ api, event }) => {
  const axios = require("axios");
  const fs = require("fs-extra");
  const ytdl = require("ytdl-core");
  const request = require("request");
  const yts = require("yt-search");

  const input = event.body;
  const text = input.substring(12);
  const data = input.split(" ");

  if (data.length < 2) {
    return api.sendMessage("من فضلك قم بإدخال إسم الأغنية […]", event.threadID);
  }

  data.shift();
  const song = data.join(" ");

  try {
    api.sendMessage(` 🔍 | جاري البحث عن "${song}". أرجوك إنتظر...`, event.threadID);

    const searchResults = await yts(song);
    if (!searchResults.videos.length) {
      return api.sendMessage("Error: Invalid request.", event.threadID, event.messageID);
    }

    const video = searchResults.videos[0];
    const videoUrl = video.url;

    const stream = ytdl(videoUrl, { filter: "audioonly" });

    const fileName = `${event.senderID}.mp3`;
    const filePath = __dirname + `/cache/${fileName}`;

    stream.pipe(fs.createWriteStream(filePath));

    stream.on('response', () => {
      console.info('[DOWNLOADER]', 'Starting download now!');
    });

    stream.on('info', (info) => {
      console.info('[DOWNLOADER]', `Downloading ${info.videoDetails.title} by ${info.videoDetails.author.name}`);
    });

    stream.on('end', () => {
      console.info('[DOWNLOADER] Downloaded');

      if (fs.statSync(filePath).size > 26214400) {
        fs.unlinkSync(filePath);
        return api.sendMessage('[⚠️] تعذر إرسال الملف لأن حجمه أكبر من 25 ميغابايت.', event.threadID);
      }

      const message = {
        body: `ها هي موسيقاك، استمتع بها!🎀\n\nالعنوان: ${video.title}\nالفنان: ${video.author.name}`,
        attachment: fs.createReadStream(filePath)
      };

      api.sendMessage(message, event.threadID, () => {
        fs.unlinkSync(filePath);
      });
    });
  } catch (error) {
    console.error('[❌]', error);
    api.sendMessage('حدث خطأ أثناء معالجة الأمر.', event.threadID);
  }
};