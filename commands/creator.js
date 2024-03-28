const { SlashCommandBuilder, EmbedBuilder } = require('discord.js') 


const creatorEmbed = new EmbedBuilder()
	.setColor(0x0099FF)
	.setTitle(`Hey I'm Igor`)
	.setAuthor({ name: 'Igor Gomes', iconURL: 'https://avatars.githubusercontent.com/u/75487736?v=4', url: 'https://github.com/IgorDGomes' })
	.setDescription(`I made this bot with the purpose of learning more about discord.js, german and other languages. The bot still needs improvements and I'll be working on it in my free time.`)
	.addFields(
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Feel free to give me your opnion:', value: 'https://www.linkedin.com/in/igordgomes/' },
	)
	.setImage('https://i.imgur.com/qX3nWyw.jpeg')
	.setTimestamp()

module.exports = {
	cooldown: 5,
    data: new SlashCommandBuilder()
        .setName('creator')
        .setDescription('Creator info.'),

    async execute(interaction) {
        await interaction.reply({ embeds: [creatorEmbed] })
    }
}