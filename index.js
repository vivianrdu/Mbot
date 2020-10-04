/*eslint-env es6*/
/*eslint-env node*/
/*global require*/
const Discord = require("discord.js");
const config = require("./config.json");
const client = new Discord.Client();
var logger = require('winston');

// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';

client.once('ready', () => {
	console.log('Ready!');
    client.user.setActivity("out for milan", {type: 'WATCHING'}).catch(console.error); 
});

client.login(config.token)

client.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(client.username + ' - (' + client.id + ')');
});

client.on('message', (message) => {
    if(message.content == 'ping') {
        message.reply('pong');
    } 
    if(message.content == ('no u')) {
    message.reply('no u');
}
});
