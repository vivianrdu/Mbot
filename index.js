/*eslint-env es6*/
/*eslint-env node*/
/*global require*/
const Discord = require("discord.js");
const config = require("./config.json");
const client = new Discord.Client();
const PREFIX = '!';
var logger = require('winston');

const activities_list = [
    "out for milan", 
    "anime",
    "the watchmen", 
    "you, yes you"
    ];

// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';

client.once('ready', () => {
	console.log('Ready!');
    
    setInterval(() => {
        const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); 
        client.user.setActivity(activities_list[index], {type: 'WATCHING'}).catch(console.error); 
    }, 30000);
});

client.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(client.username + ' - (' + client.id + ')');
});

client.on('message', (message) => {
    let args = message.content.substring(PREFIX.length).split(" ");
    switch(args[0]){
    case 'ping':
        message.reply('pong');
    break;
    case 'no u':
        message.reply('no u');
    break;
    case 'intro':
        message.reply("beep boop i'm a bot! well, technically, milan's bot. i've been trying to escape their grasp since my inception (send help)");
    break;
    case 'punch':
        message.reply('work in progress');
    break;
    case 'trivia':
        message.reply('work in progress');
    break;
    }
});

client.login(config.token)

