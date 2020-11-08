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
	const match = msg.content.match(regCMD);
	console.log(match[2]);

	switch(match[1]){

	case "follow" :
        followingUser = msg.author;
        console.log(msg);
		console.log("Following user: " + followingUser.id);
	break;

	case "warn":
		if(channel.get(match[2])){
			console.log("Server "+match[2]+" found.");
		}
		else{
			console.log("Server "+match[2]+" not found.");
		}

    break;
	}
}
else{
    console.log(msg.author.username+": "+msg);
}
});


//Important 3 (logs in)
//client.login(token.token); //for json
client.login(YAML.safeLoad(token).token);