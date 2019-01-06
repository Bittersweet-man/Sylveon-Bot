const commando = require('discord.js-commando');
const YTDL = require('ytdl-core');
const servers = {};

function Play(connection, message) {
    var server = servers[message.guild.id];
    server.dipatcher = connection.playStream(YTDL(server.queue[0], {
        filter: "audioonly"
    }));
    server.queue.shift();
    server.dipatcher.on("end", function () {
        if (server.queue[0]) {
            Play(connection, message);
        } else {
            connection.disconnect();
        }
    });
}

class JoinChannelCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'join',
            group: 'music',
            memberName: 'join',
            description: 'Join the voice channel the commander is currently in. Then if u want to play music, you can just copy and paste the link onto the end of the command and it will play your music!'
        });
    }

    async run(message, args) {
      if(!args) {
        message.channel.send("Please attach a youtube link to your message!");}
      else{
        if (message.member.voiceChannel) {
            if (!message.guild.voiceConnection) {
                if (!servers[message.guild.id]) {
                    servers[message.guild.id] = {
                        queue: []
                    }
                }
              
                message.member.voiceChannel.join()
                    .then(connection => {
                        var server = servers[message.guild.id];
                        message.react("👍");
                        server.queue.push(args);
                        Play(connection, message);
                    })
            }
        } else {
            message.reply("You must be in a Voice Channel to summon me!");
        }
    }
}
}
module.exports = JoinChannelCommand;