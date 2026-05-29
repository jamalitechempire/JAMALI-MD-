const fs = require('fs');
const dotenv = require('dotenv');
if (fs.existsSync('.env')) dotenv.config();

module.exports = {
    // ========== MUHIMU: Hakuna mwingiliano na zamani ==========
    SESSION_ID: process.env.SESSION_ID || 'JAMALI-MD-V5',
    MONGODB_URI: process.env.MONGODB_URI || 'mongodb+srv://kxshrii:i7sgjXF6SO2cTJwU@kelumxz.zggub8h.mongodb.net/jamali_md_db',

    // ========== Taarifa za bot ==========
    PREFIX: '.',
    OWNER_NUMBER: '255784062158',
    BOT_NAME: 'JAMALI MD',
    BOT_FOOTER: '> 🔥 Powered by JAMALI TECH TZ',
    WORK_TYPE: 'public',

    // ========== AUTO-REPLY (imewashwa na ina jibu zilizopo) ==========
    AUTO_REPLY_ENABLE: 'true',
    AUTO_REPLIES: {
        'hi': '👋 *JAMALI MD* – Hello! How can I help you?',
        'mambo': '💫 *JAMALI MD* – Poa sana! Nikusaidie kuhusu?',
        'hey': '⚡ *JAMALI MD* – Hey there! Use .menu for commands',
        'vip': '👑 *JAMALI MD* – Hello VIP! How can I assist you?',
        'mkuu': '🔥 *JAMALI MD* – Hey mkuu! Nikusaidie kuhusu?',
        'boss': '🎯 *JAMALI MD* – Yes boss! How can I help you?',
        'habari': '🌟 *JAMALI MD* – Nzuri sana! Habari yako?',
        'hello': '🤖 *JAMALI MD* – Hi there! Use .menu for commands',
        'bot': '⚙️ *JAMALI MD* – Yes, I am JAMALI MD BOT! How can I assist you?',
        'menu': '📜 *JAMALI MD* – Type .menu for all commands!',
        'owner': '👑 *JAMALI MD* – Contact owner using .owner',
        'thanks': '✨ *JAMALI MD* – You’re welcome!',
        'thank you': '💫 *JAMALI MD* – Anytime! Let me know if you need help',
        'channel': `📢 *JAMALI MD Channel*\n🔗 Link: https://whatsapp.com/channel/0029VbC7AgJK5cD71vGIpO3h\n🆔 JID: 120363425061263455@newsletter`
    },

    // ========== Sifa nyingine ==========
    AUTO_VIEW_STATUS: 'true',
    AUTO_LIKE_STATUS: 'true',
    AUTO_LIKE_EMOJI: ['🔥', '❤️', '👍', '😎', '💫', '👑'],
    ANTI_CALL: 'false',
    ANTI_DELETE: 'false',
    READ_MESSAGE: 'false',
    WELCOME_ENABLE: 'true',
    GOODBYE_ENABLE: 'true',
    CHANNEL_JID: '120363425061263455@newsletter',
    GROUP_LINK: 'https://chat.whatsapp.com/GPdlJ8ip88K39E5Hok7rJh',
    CHANNEL_LINK: 'https://whatsapp.com/channel/0029VbC7AgJK5cD71vGIpO3h',
    IMAGE_PATH: 'https://files.catbox.moe/0e3rok.jpg',
    TELEGRAM_BOT_TOKEN: '',
    TELEGRAM_CHAT_ID: ''
};
