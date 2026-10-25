require('dotenv').config();

const config = {
    MONGODB_URL: process.env.MONGODB_URL || 'U mongodb url',

    DB_NAME: process.env.DB_NAME || 'raza-smd',

    COLLECTIONS: {
        SESSIONS: 'whatsapp_sessions',
        NUMBERS: 'active_numbers',
        CONFIGS: 'bot_configs'
    },

    AUTO_VIEW_STATUS: 'true',
    AUTO_STATUS_REACT: 'false',
    AUTO_STATUS_REPLY: 'false',
    STATUS_REPLY_MSG: '*_Your status viewed successfully by 𝐑ᴀᴢᴀ-𝐒ᴍᴅ☠️🚩_*',
    AUTO_RECORDING: 'false',
    AUTO_REACT: 'false',
    AUTO_TYPING: 'false',
    ALWAYS_ONLINE: 'false',
    VERSION: '1.0.0 Bᴇᴛᴀ',
    DESCRIPTION: '*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴹʳ᭄SUFYAN࿐X࿐HACKER☠️🚩*',
    ANTI_DELETE_PATH: 'inbox',
    ANTI_DELETE: 'false',
    ANTI_EDIT_PATH: 'inbox',
    ANTI_EDIT: 'false',
    STICKER_NAME: '.  ̶͟ ̶̽ ̶͟ ̶͟ ͟ᴹʳ᭄SUFYAN࿐X࿐HACKER☠️🚩⸼˺┇🌸• ⑅⃝⃕͜➳ᷝ͢•ⷨ03291572464',
    ANTI_LINK: 'false',
    ANTI_LINK_ACTION: 'warn',
    WELCOME: 'true',
    GOODBYE: 'true',
    WELCOME_MESSAGE: '*_@user joined the group, welcome! 🎉_*',
    GOODBYE_MESSAGE: '*_@user has left the group, we will miss them! 👋_*',
    ADMIN_ACTION: 'false',
    MODE: 'public',
    PREFIX: '.',
    ANTI_CALL: 'false',
    REJECT_MSG: '*Call Rejected Automatically 📵*',
    READ_MESSAGE: 'false',
    AUTO_STATUS_SEEN: 'true',
    OWNER_REACT: 'false',
    CUSTOM_REACT: 'false',
    HEART_REACT: 'false',
    CUSTOM_EMOJIS: ['😊', '👍', '🚀', '💻', '🎉', '🔥'],
    HEART_EMOJIS: ['❤️', '💖', '💝', '💗', '💓', '💞', '💕', '💟', '♥️', '❤️‍🔥', '❤️‍🩹'],
    OWNER_EMOJIS: ['❤️', '🧡', '💛', '💚', '🩵', '💙', '💜', '🩷', '🤎', '🖤', '🩶', '🤍', '❤️‍🔥', '❤️‍🩹', '❣️', '💕', '💞', '💓', '💗', '💖', '💘', '💝', '💟', '♥️'],
    REACT_EMOJIS: [
'❤️','🔥','👏','😮','😢','👍','🎉','🙏','😍','😊','🥰','💕','🤩','✨','😎','🥳','🙌',
'💖','💗','💓','💞','💘','💝','💟','❣️','♥️','❤️‍🔥','❤️‍🩹',
'🧡','💛','💚','🩵','💙','💜','🩷','🤍','🤎','🖤','🩶',
'🌹','🌺','🌸','💐','🌷','🪷','🌻','🌼',
'⭐','🌟','💫','✨','⚡','☀️','🌈','☄️',
'👑','💎','🏆','🥇','🎖️','🏅',
'🎁','🎀','🧸','🍫','🍭','🍬',
'🦋','🕊️','🦢','🦚','🦜','🐬','🐳','🐠',
'🍓','🍒','🍑','🍍','🥭','🍉','🍇',
'🎵','🎶','🎤','🎧','🎸','🎹',
'🚀','🛸','🌍','🌎','🌏','🌙','⭐',
'💯','✔️','✅','☑️','💥','💫','🫶','🤝','💪',
'🏖️','🌊','⛱️','🏝️','🌅','🌄',
'🎇','🎆','🎊','🎈','🎂','🍰','🧁',
'💌','📩','📨','💍','💐','🪄',
'🔮','🪙','💠','🔷','🔹','🔸','🔶',
'🕯️','🪔','🏵️','🎗️','🌠','🌌',
'🫰','🤲','🙌','🙏','💐','💝',
'♾️','☘️','🍀','🌿','🌱','🌴','🎋',
'🧿','🪬','💎','👑','🏰','🗝️'
] ,

    BOT_NAME: 'ᴹʳ᭄SUFYAN࿐X࿐HACKER☠️🚩',
    OWNER_NAME: '*𓆩⤹ᴹʳ᭄SUFYAN࿐X࿐HACKER፝⤸𓆪💀*',
    OWNER_NUMBER: '923291572464',
    DEV: '+923291572464',
    BOT_IMAGE: 'https://i.ibb.co/d4pZGXRx/f5be0b55b39f.jpg',
    NEWSLETTER_JID: '120363428371539684@newsletter',
    NEWSLETTER_NAME: '𝐑ᴀᴢᴀ-𝐒ᴍᴅ☠️🚩',

    MAX_RETRIES: 50,
    OTP_EXPIRY: 300000,
    BANNED: [],
    SUDO: [
        "923450073465@s.whatsapp.net"
    ],

    DEFAULT_SETTINGS: {
        AUTO_VIEW_STATUS: 'true',
        AUTO_STATUS_SEEN: 'true',
        AUTO_STATUS_REACT: 'false',
        AUTO_STATUS_REPLY: 'false',
        STATUS_REPLY_MSG: '*_Your status viewed successfully by 𝐑ᴀᴢᴀ-𝐒ᴍᴅ☠️🚩_*',
        READ_MESSAGE: 'false',

        AUTO_RECORDING: 'false',
        AUTO_REACT: 'false',
        AUTO_TYPING: 'false',
        ALWAYS_ONLINE: 'false',
        OWNER_REACT: 'false',
        CUSTOM_REACT: 'false',
        HEART_REACT: 'false',
        CUSTOM_EMOJIS: ['😊', '👍', '🚀', '💻', '🎉', '🔥'],
        HEART_EMOJIS: ['❤️', '💖', '💝', '💗', '💓', '💞', '💕', '💟', '♥️', '❤️‍🔥', '❤️‍🩹'],

        ANTI_DELETE: 'false',
        ANTI_DELETE_PATH: 'inbox',
        ANTI_EDIT: 'false',
        ANTI_EDIT_PATH: 'inbox',
        ANTI_CALL: 'false',
        ANTI_LINK: 'false',
        ANTI_LINK_ACTION: 'warn',

        WELCOME: 'false',
        GOODBYE: 'false',
        ADMIN_ACTION: 'false',

        WELCOME_MESSAGE: '*_@user joined the group, welcome! 🎉_*',
        GOODBYE_MESSAGE: '*_@user has left the group, we will miss them! 👋_*',
        REJECT_MSG: '*Call Rejected Automatically 📵*',

        VERSION: '1.0.0 Bᴇᴛᴀ',
        OWNER_NAME: '*𓆩⤹ᴹʳ᭄SUFYAN࿐X࿐HACKER፝⤸𓆪💀*',
        OWNER_NUMBER: '923291572464',
        DEV: '+923291572464',
        DESCRIPTION: '*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴹʳ᭄SUFYAN࿐X࿐HACKER☠️🚩*',
        STICKER_NAME: '.  ̶͟ ̶̽ ̶͟ ̶͟ ͟ᴹʳ᭄SUFYAN࿐X࿐HACKER☠️🚩⸼˺┇🌸• ⑅⃝⃕͜➳ᷝ͢•ⷨ𝟎𝟑291572464',
        MODE: 'public',
        PREFIX: '.',
        BOT_NAME: 'ᴹʳ᭄SUFYAN࿐X࿐HACKER☠️🚩',
        BOT_IMAGE: 'https://i.ibb.co/d4pZGXRx/f5be0b55b39f.jpg',
        NEWSLETTER_JID: '120363428371539684@newsletter',
        NEWSLETTER_NAME: '𝐑ᴀᴢᴀ-𝐒ᴍᴅ☠️🚩',

        REACT_EMOJIS: ['😂', '❤️', '🔥', '👏', '😮', '😢', '🤣', '👍', '🎉', '🤔', '🙏', '😍', '😊', '🥰', '💕', '🤩', '✨', '😎', '🥳', '🙌'],
        OWNER_EMOJIS: ['❤️', '🔥', '👑', '⭐', '💎'],

        BANNED: [],
        SUDO: [
            "923291572464"
        ]
    }
};

// CONNECTION WELCOME MESSAGE — used only when the bot successfully connects.
config.CONNECTION_WELCOME_MESSAGE = `🤖 ${config.BOT_NAME} ACTIVATED\n\nType .menu for commands\n\n⚡ Version: ${config.VERSION}`;


module.exports = config;
