const Commando = require('discord.js-commando');
const discord = require('discord.js');

class InfoAboutMeCommand extends Commando.Command
{
    constructor(client,)
        {
        super(client,{
            name: 'info',
            group: 'simple',
            memberName: 'info',
            description: 'Learn a little more about the bot creator and the server owner!'
        });
    }
        
        
    async run(message, args)
    {
        if(args = "sylveon")
        {
    {
        var myInfo = new discord.RichEmbed()
             .setTitle("All about Sylveon!")
             .addField("About Me", "Hello, my name is Greg, and I am the owner of this fine server! BitterSweet Man is the king! Bow down to him!", true)   
             .addField("Music", "I am a pretty sweet musician. Check it out!", true)   
             .setDescription("Hello, my name is Greg!")
             .setColor(0xFF0000)
             .setThumbnail("https://cdn.discordapp.com/avatars/413754421365964800/d11fedaa7a0e6ad43b1aeef8e62655d9.png?size=2048")
             .setURL("https://youtu.be/m7gnQ2CiXHA")
             .setFooter("Thanks for reading. I hope you learned a little about me :D")


       message.channel.send(myInfo);      
    }
}
        
        if(args = "Jack")
        {

            var myInfo = new discord.RichEmbed()
            .setTitle("All about me!")
            .addField("About Me", "Hello, my name is Jack, and I created Sylveon Bot!", true)   
            .addField("Why", "Why are you even reading this XD", true)   
            .setDescription("Hello, my name is Jack!")
            .setColor(0xFF0000)
            .setThumbnail("https://cdn.discordapp.com/avatars/462709446121095169/be9c47f1f27c592f82da92c27de9fe6a.png?size=2048")
            .setURL("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
            .setFooter("Thanks for reading. I hope you learned a little about me :D")


                 message.channel.send(myInfo);   
        }   
    

    }
}

module.exports = InfoAboutMeCommand