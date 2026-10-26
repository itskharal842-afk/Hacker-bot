const readline = require('readline');

const botName = 'MiniBot';

const commands = {
  hello: () => `Hello! I'm ${botName}. Type !help for available commands.`,
  help: () => 'Available commands: !hello, !time, !echo <message>, !about, !quit',
  time: () => new Date().toLocaleString(),
  about: () => 'This is a lightweight Node.js bot built for quick interactive use.',
  echo: (message) => message ? message : 'Please provide a message after !echo.'
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function ask() {
  rl.question('You> ', (input) => {
    const trimmed = input.trim();

    if (!trimmed) {
      console.log(`${botName}> I didn't catch that. Try !help.`);
      return ask();
    }

    if (trimmed.toLowerCase() === '!quit') {
      console.log(`${botName}> Goodbye!`);
      rl.close();
      return;
    }

    const [rawCommand, ...args] = trimmed.split(/\s+/);
    const commandKey = rawCommand.toLowerCase().replace(/^!/, '');
    const handler = commands[commandKey] || (() => `Unknown command: ${rawCommand}. Type !help.`);
    const response = handler(args.join(' '));

    console.log(`${botName}> ${response}`);
    ask();
  });
}

console.log(`${botName} is online. Type !help to see available commands.`);
ask();
