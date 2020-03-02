require('dotenv').config()
const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
    console.log('TARS is up and running!');
});

client.login(process.env.discordToken);