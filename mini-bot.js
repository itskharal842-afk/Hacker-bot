const readline = require('readline');

const botName = 'MiniBot';

const apps = [
  { name: 'WhatsApp', type: 'Messaging', description: 'Fast messaging and calls' },
  { name: 'Telegram', type: 'Messaging', description: 'Cloud-based chats and groups' },
  { name: 'Spotify', type: 'Music', description: 'Streaming music and podcasts' },
  { name: 'YouTube', type: 'Video', description: 'Videos, music, and tutorials' },
  { name: 'Netflix', type: 'Entertainment', description: 'Movies and TV shows' },
  { name: 'Canva', type: 'Design', description: 'Design and social media tools' },
  { name: 'Google Drive', type: 'Storage', description: 'Cloud file storage and sync' },
  { name: 'Instagram', type: 'Social', description: 'Photos, reels, and short videos' }
];

const songs = [
  { name: 'Shape of You', artist: 'Ed Sheeran', genre: 'Pop' },
  { name: 'Blinding Lights', artist: 'The Weeknd', genre: 'Synth-pop' },
  { name: 'Sunflower', artist: 'Post Malone & Swae Lee', genre: 'Pop' },
  { name: 'Levitating', artist: 'Dua Lipa', genre: 'Pop' },
  { name: 'Perfect', artist: 'Ed Sheeran', genre: 'Ballad' },
  { name: 'Someone You Loved', artist: 'Lewis Capaldi', genre: 'Pop' },
  { name: 'Until I Found You', artist: 'Stephen Sanchez', genre: 'Pop' },
  { name: 'Faded', artist: 'Alan Walker', genre: 'Electronic' }
];

function findBestMatch(list, keyword) {
  const normalized = keyword.toLowerCase().trim();
  if (!normalized) return null;

  return list.find((item) => {
    const haystack = `${item.name} ${item.artist || ''} ${item.genre || ''} ${item.type || ''}`.toLowerCase();
    return haystack.includes(normalized);
  }) || null;
}

const commands = {
  hello: () => `Hello! I'm ${botName}. Type !help for available commands.`,
  help: () => 'Available commands: !help, !apps, !app <name>, !songs, !song <name>, !about, !quit',
  apps: () => {
    const list = apps.map((app) => `${app.name} (${app.type})`).join(', ');
    return `Recommended apps: ${list}`;
  },
  app: (query) => {
    if (!query) return 'Please type an app name after !app. Example: !app spotify';
    const match = findBestMatch(apps, query);
    if (!match) return `No app found for "${query}". Try: spotify, youtube, netflix, telegram, whatsapp.`;
    return `${match.name} - ${match.description} (${match.type})`;
  },
  songs: () => {
    const list = songs.map((song) => `${song.name} by ${song.artist}`).join(', ');
    return `Popular songs: ${list}`;
  },
  song: (query) => {
    if (!query) return 'Please type a song name after !song. Example: !song sunflower';
    const match = findBestMatch(songs, query);
    if (!match) return `No song found for "${query}". Try: sunflower, shape of you, faded, perfect.`;
    return `${match.name} by ${match.artist} (${match.genre})`;
  },
  about: () => 'This bot provides app suggestions and song recommendations for entertainment and learning.',
  default: (text) => `I don't understand "${text}". Type !help to see available commands.`
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function ask() {
  rl.question('You> ', (input) => {
    const trimmed = input.trim();

    if (!trimmed) {
      console.log(`${botName}> I did not catch that. Try !help.`);
      return ask();
    }

    if (trimmed.toLowerCase() === '!quit') {
      console.log(`${botName}> Goodbye!`);
      rl.close();
      return;
    }

    const [rawCommand, ...args] = trimmed.split(/\s+/);
    const normalized = rawCommand.toLowerCase().replace(/^!/, '');
    const handler = commands[normalized] || (() => commands.default(rawCommand));
    const response = handler(args.join(' '));

    console.log(`${botName}> ${response}`);
    ask();
  });
}

console.log(`${botName} is online. Type !help to see available commands.`);
ask();
