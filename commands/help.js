const { SlashCommandBuilder, EmbedBuilder } = require('discord.js')


const helpEmbed = new EmbedBuilder()
	.setColor(0x0099FF)
	.setTitle('**Deutsch Helfer Commands**')
    .setDescription('The bot is still in development so it may not have all the commands yet.')
    .setTimestamp()
	.addFields(
		{ name: '\u200B', value: '\u200B' },
		{ name: '**:flag_de: General**', value: '`/ping`, `/help`, `/artists`, `/watch`, `/read`, `/apps`, `/jokes`, `/dailyword`' },
        
        // Beginner resources
        
		{ name: '**:thinking: Beginner**', value: '`/byoutube`, `/bpodcasts`, `btext`'  },
        
        // Intermediate resources
        
		{ name: '**:sunglasses: Intermediate**', value: '`/iyoutube`, `/ipodcasts`, `itext`'  },
        
        // Advanced resources
        
		{ name: '**:ninja: Advanced**', value: '`/ayoutube`, `/apodcasts`, `atext`'  },
        
        
		{ name: '**:gear: Other**', value: '`/creator`' },
		{ name: '\u200B', value: '\u200B' },
	)

module.exports = {
	cooldown: 5,
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('List of commands!'),

    async execute(interaction) {
        await interaction.reply({ embeds: [helpEmbed] })
    }
}