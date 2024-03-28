const { SlashCommandBuilder, EmbedBuilder } = require('discord.js')


const byoutube = [
	{
		id: 1,
		name: '**Easy German**',
		value: '*https://www.youtube.com/@EasyGerman*'
	},
	{
		id: 2,
		name: '**Get Germanized**',
		value: '*https://www.youtube.com/@GetGermanized*'
	},
	{
		id: 3,
		name: '**Deutsch für Euch**',
		value: '*https://www.youtube.com/@DeutschFuerEuch*'
	},
]

const byoutubeEmbed = new EmbedBuilder()
	.setColor(0x0099FF)
	.setTitle('**List of Youtube channels for Beginners**')
    .setTimestamp()
    .addFields({ name: '\u200B', value: '\u200B' });


byoutube.forEach(item => {
    byoutubeEmbed.addFields({ name: item.name, value: item.value })
    if (item.id === byoutube.length) {
        byoutubeEmbed.addFields({ name: '\u200B', value: '\u200B' });
    }
})

module.exports = {
	cooldown: 5,
    data: new SlashCommandBuilder()
        .setName('byoutube')
        .setDescription('List of Youtube channels for Beginners.'),

    async execute(interaction) {
        await interaction.reply({ embeds: [byoutubeEmbed] })
    }
}