const Commando = require('discord.js-commando');

class JokesCommands extends Commando.Command {
    constructor(client, ) {
        super(client, {
            name: 'joke',
            group: 'simple',
            memberName: 'joke',
            description: 'Gives you a fun joke!'
        });
    }


    async run(message, args) {
        var chance = Math.floor(Math.random() * 21)
        if (chance == 0) {
            message.reply("Why did the chicken cross the road?");
            message.reply("To get to the other side!");
        }
        if (chance == 1) {
            message.reply("YOUR LIFE LOLOLOLOL");
        }
        if (chance == 2) {
            message.reply("Sylveon bot is in need of more jokes! To submit jokes, go to https://docs.google.com/document/d/1sQyRty3VcOR4zKKkFH0tCkI4eqJ0IfgwtJvzKcGMfa8/edit?usp=sharing");
        }
        if (chance == 3) {
            message.reply("the mitochondria is the powerhouse of the cell");
        }
        if (chance == 4) {
            message.reply("🍆");
        }
        if (chance == 5) {
            message.reply("GUCCI GANG GUCCI GANG GUCCI GANG GUCCI GANG");
        }
        if (chance == 6) {
            message.reply("PENIS HAHAHAHAHAHA");
        }
        if (chance == 7) {
            message.reply("The only thing dumber than you is… uh. Idk tbh");
        }
        if (chance == 8) {
            message.reply("Tenage mutat ninnjy tutllez");
        }
        if (chance == 9) {
            message.reply("WHOEVER TYPED THE MESSAGE ABOVE ME IS AN IDIOT");
        }
        if (chance == 10) {
            message.reply("What am I supposed to write here?");
        }
        if (chance == 11) {
            message.reply("d rose d rose d rose d rose d rose d-");
        }
        if (chance == 12) {
            message.reply("In time, I will leave the city");
            message.reply("For now, I will stay alive");
        }
        if (chance == 13) {
            message.reply("My dog like walks");
        }
        if (chance == 14) {
            message.reply("My dog also like walks. Just kidding, they died.");
        }
        if (chance == 15) {
            message.reply("Hey guys. food.");
        }
        if (chance == 16) {
            message.reply("We're going on a trip to a place called Auschwitz. It's shower time, little jewsteins.");
        }
        if (chance == 17) {
            message.reply("knees knees the magical joint. the more you crack the more you heighten your chances of getting arthritis");
        }
        if (chance == 18) {
            message.reply("lol")
        };
        if (chance == 19) {
            message.reply("Glaceon")
        };
        if (chance == 20) {
            message.channel.send(message.member.displayName)
        }

    }
}
module.exports = JokesCommands;