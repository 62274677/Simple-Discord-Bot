const Discord = require('discord.js');
const YAML = require('js-yaml');
const fs = require('fs');

//const auth = require('./token.json');
const client = new Discord.Client();


var prefix = "z!";
const token = fs.readFileSync('./token.yaml', 'utf8');

//Important (initializes bot)
client.once('ready', () => {
	console.log('Ready!');

});


const regCMD = new RegExp(prefix+"(.*)");

client.on('message', msg => {
if(regCMD.test(msg)){
	const match = msg.content.match(regCMD);//array of regex match

	
}
else{
    console.log(msg.author.username+": "+msg);
}
});


//Important (logs in)
//client.login(token.token); //for json
client.login(YAML.safeLoad(token).token);