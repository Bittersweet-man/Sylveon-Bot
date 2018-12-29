const Commando = require('discord.js-commando');

class DiceRollCommand extends Commando.Command
{
    constructor(client,)
        {
        super(client,{
            name: 'roll',
            group: 'simple',
            memberName: 'roll',
            description: 'Rolls a six sided dice, or do !roll (number) to roll a dice with a diffrerent amout of sides!'
        });
    }
        
        
    async run(message, args)
    {   
        let diceRoll;
        if(args == "")
        {
        diceRoll = Math.floor(Math.random() * 6) + 1
        message.reply("Your dice landed on " + diceRoll);
        }
        else
        {
        diceRoll = Math.floor(Math.random() * args) + 1
        if(isNaN(diceRoll))
        {
            message.reply(args + " is not a number!")
            diceRoll = Math.floor(Math.random() * 6) + 1
            
        }    
        message.reply("Your dice landed on " + diceRoll);
        }
  
    }
}

module.exports = DiceRollCommand