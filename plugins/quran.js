const { ezra } = require('../fredi/ezra');
const axios = require('axios');
const conf = require(__dirname + "/../set");
const { translate } = require('@vitalets/google-translate-api');

ezra({
  nomCom: "surah",
 aliases: ["surahh", "qurann"],
  reaction: '🤲',
  categorie: "God"
}, async (dest, zk, commandeOptions) => {
  const { repondre, arg, ms } = commandeOptions;
  const reference = arg.join(" ");
  
  if (!reference) {
    return repondre("Please specify the surah number or name.", {
      contextInfo: {
         isForwarded: true,
         forwardedNewsletterMessageInfo: {
         newsletterJid: '𝗗𝗜𝗔𝗡𝗔 𝗢𝗙𝗙𝗜𝗖𝗜𝗔𝗟',
         newsletterName: "𝐃𝐈𝐀𝐍𝐀 ~ 𝐗𝐌𝐃",
         serverMessageId: 143,
        },
      },
    });
  }
  
  try {
    const response = await axios.get(`https://quran-endpoint.vercel.app/quran/${reference}`);
    
    if (response.data.status !== 200) {
      return repondre("Invalid surah reference. Please specify a valid surah number or name.", {
        contextInfo: {
         isForwarded: true,
         forwardedNewsletterMessageInfo: {
         newsletterJid: '120363421677960956@newsletter',
         newsletterName: "𝗗𝗜𝗔𝗡𝗔 𝗢𝗙𝗙𝗜𝗖𝗜𝗔𝗟",
         serverMessageId: 143,
          },
        },
      });
    }
    
    const data = response.data.data;
    const messageText = `
ᬑ *DIANA QURAN SURAH* ᬒ

*🕌 Quran: The Holy Book*
📜 *Surah:* 🕌❤️${data.number}: ${data.asma.ar.long} (${data.asma.en.long})❤️🕌
📝 *Type:* ${data.type.en}
🏮 *Number of verses:* ${data.ayahCount}
🔮 *Explanation (Urdu):* ${data.tafsir.id}
🔮 *Explanation (English):* ${data.tafsir.en}
╭────────────────◆
│ *_Powered by ${conf.OWNER_NAME}*
╰─────────────────◆ `;
    
    await zk.sendMessage(dest, {
      text: messageText,
      contextInfo: {
         isForwarded: true,
         forwardedNewsletterMessageInfo: {
         newsletterJid: '120363421677960956@newsletter',
         newsletterName: "120363421677960956@newsletter",
         serverMessageId: 143,
        },
      },
    }, { quoted: ms });
    
  } catch (error) {
    console.error("Error fetching Quran passage:", error);
    await repondre("An error occurred while fetching the Quran passage. Please try again later.", {
      contextInfo: {
         isForwarded: true,
         forwardedNewsletterMessageInfo: {
         newsletterJid: '120363421677960956@newsletter',
         newsletterName: "𝗗𝗜𝗔𝗡𝗔 𝗢𝗙𝗙𝗜𝗖𝗜𝗔𝗟",
         serverMessageId: 143,
        },
      },
    });
  }
});






ezra({
  nomCom: "quran",
 aliases: ["surahh", "qurann"],
  reaction: '🤲',
  categorie: "God"
}, async (dest, zk, commandeOptions) => {
  const { repondre, arg, ms } = commandeOptions;
  const reference = arg.join(" ");
  
  if (!reference) {
    return repondre("Please specify the surah number or name.", {
      contextInfo: {
         isForwarded: true,
         forwardedNewsletterMessageInfo: {
         newsletterJid: '120363421677960956@newsletter',
         newsletterName: "𝗗𝗜𝗔𝗡𝗔 𝗢𝗙𝗙𝗜𝗖𝗜𝗔𝗟",
         serverMessageId: 143,
        },
      },
    });
  }
  
  try {
    const response = await axios.get(`https://quran-endpoint.vercel.app/quran/${reference}`);
    
    if (response.data.status !== 200) {
      return repondre("Invalid surah reference. Please specify a valid surah number or name.", {
        contextInfo: {
         isForwarded: true,
         forwardedNewsletterMessageInfo: {
         newsletterJid: '120363421677960956@newsletter',
         newsletterName: "𝗗𝗜𝗔𝗡𝗔 𝗢𝗙𝗙𝗜𝗖𝗜𝗔𝗟",
         serverMessageId: 143,
          },
        },
      });
    }
    
    const data = response.data.data;
    const messageText = `
ᬑ *DIANA QURAN SURAH* ᬒ

*🕌 Quran: The Holy Book*
📜 *Surah:* 🕌❤️${data.number}: ${data.asma.ar.long} (${data.asma.en.long})❤️🕌
📝 *Type:* ${data.type.en}
🏮 *Number of verses:* ${data.ayahCount}
🔮 *Explanation (Urdu):* ${data.tafsir.id}
🔮 *Explanation (English):* ${data.tafsir.en}
╭────────────────◆
│ *_Powered by ${conf.OWNER_NAME}*
╰─────────────────◆ `;
    
    await zk.sendMessage(dest, {
      text: messageText,
      contextInfo: {
         isForwarded: true,
         forwardedNewsletterMessageInfo: {
         newsletterJid: '120363421677960956@newsletter',
         newsletterName: "𝗗𝗜𝗔𝗡𝗔 𝗢𝗙𝗙𝗜𝗖𝗜𝗔𝗟",
         serverMessageId: 143,
        },
      },
    }, { quoted: ms });
    
  } catch (error) {
    console.error("Error fetching Quran passage:", error);
    await repondre("An error occurred while fetching the Quran passage. Please try again later.", {
      contextInfo: {
         isForwarded: true,
         forwardedNewsletterMessageInfo: {
         newsletterJid: '120363421677960956@newsletter',
         newsletterName: "𝗗𝗜𝗔𝗡𝗔 𝗢𝗙𝗙𝗜𝗖𝗜𝗔𝗟",
         serverMessageId: 143,
        },
      },
    });
  }
});
