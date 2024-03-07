module.exports.config = {
	name: "لوح",
	version: "9.7.5",
	hasPermssion: 0,
	credits: "Ιнaв",
	description: "كتابه على لوح اعلانات",
usePrefix: false,
	commandCategory: "𝗚 𝗔 𝗠 𝗘 𝗦",
	usages: "[لوح و نص]",
	cooldowns: 5,
	dependencies: {
		"canvas":"",
		 "axios":"",
		 "fs-extra":""
	}
};

module.exports.wrapText = (ctx, text, maxWidth) => {
	return new Promise(resolve => {
		if (ctx.measureText(text).width < maxWidth) return resolve([text]);
		if (ctx.measureText('W').width > maxWidth) return resolve(null);
		const words = text.split(' ');
		const lines = [];
		let line = '';
		while (words.length > 0) {
			let split = false;
			while (ctx.measureText(words[0]).width >= maxWidth) {
				const temp = words[0];
				words[0] = temp.slice(0, -1);
				if (split) words[1] = `${temp.slice(-1)}${words[1]}`;
				else {
					split = true;
					words.splice(1, 0, temp.slice(-1));
				}
			}
			if (ctx.measureText(`${line}${words[0]}`).width < maxWidth) line += `${words.shift()} `;
			else {
				lines.push(line.trim());
				line = '';
			}
			if (words.length === 0) lines.push(line.trim());
		}
		return resolve(lines);
	});
} 

module.exports.run = async function({ api, event, args }) {
	let { senderID, threadID, messageID } = event;
	const { loadImage, createCanvas } = require("canvas");
	const fs = global.nodemodule["fs-extra"];
	const axios = global.nodemodule["axios"];
	let pathImg = __dirname + '/cache/fact.jpg';
	var text = args.join(" ");
	if (!text) return api.sendMessage("ادخل النص ايضا", threadID, messageID);
	let getPorn = (await axios.get(`https://i.imgur.com/aOZUbNm.jpg`, { responseType: 'arraybuffer' })).data;
	fs.writeFileSync(pathImg, Buffer.from(getPorn, 'utf-8'));
	let baseImage = await loadImage(pathImg);
	let canvas = createCanvas(baseImage.width, baseImage.height);
	let ctx = canvas.getContext("2d");
	ctx.drawImage(baseImage, 0, 0, canvas.width, canvas.height);
	ctx.font = "bold 400 30px Arial";
	ctx.fillStyle = "#000000";
	ctx.textAlign = "center";
	let fontSize = 40;
	while (ctx.measureText(text).width > 3800) {
		fontSize--;
		ctx.font = `bold 400 ${fontSize}px Arial`;
	}
	const lines = await this.wrapText(ctx, text, 500);
	ctx.fillText(lines.join('\n'), 330,100);//comment
	ctx.beginPath();
	const imageBuffer = canvas.toBuffer();
	fs.writeFileSync(pathImg, imageBuffer);
return api.sendMessage({ attachment: fs.createReadStream(pathImg) }, threadID, () => fs.unlinkSync(pathImg), messageID);        
}