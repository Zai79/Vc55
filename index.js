// 📌 استدعاء المكتبات
const { Client } = require("discord.js-selfbot-v13");
const { joinVoiceChannel } = require("@discordjs/voice");
const express = require("express");

// 📌 إنشاء الكلاينت (حساب شخصي للتعلم فقط)
const client = new Client();

// 📌 التوكن والمعرفات (من القفل Environment Variables)
const TOKEN = process.env.TOKEN;
const GUILD_ID = process.env.GUILD_ID;
const VOICE_ID = process.env.VOICE_ID;

client.on("ready", async () => {
  console.log(`${client.user.username} ✅ الحساب شغال`);

  try {
    const guild = await client.guilds.fetch(GUILD_ID);

    // 📌 دخول الروم الصوتي
    joinVoiceChannel({
      channelId: VOICE_ID,
      guildId: GUILD_ID,
      adapterCreator: guild.voiceAdapterCreator,
      selfDeaf: false,
      selfMute: true
    });

    console.log("🎧 الحساب دخل الروم الصوتي!");
  } catch (err) {
    console.error("❌ خطأ:", err);
  }
});

// 📌 تسجيل الدخول
client.login(TOKEN);

// 📌 إضافة ويب سيرفر صغير عشان Render ما يوقف البوت
const app = express();
app.get("/", (req, res) => res.send("✅ Bot is running 24/7 on Render"));
app.listen(process.env.PORT || 3000, () => {
  console.log("🌐 Web server is running");
});
