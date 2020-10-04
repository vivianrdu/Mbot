/*eslint-env es6*/
/*eslint-env node*/
/*global require*/
const Discord = require("discord.js");
const config = require("./config.json");
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
    client.user.setActivity("out for milan", {type: 'WATCHING'}).catch(console.error); 
});

client.login(config.token)


