const { SlashCommandBuilder, EmbedBuilder } = require('discord.js')


const iyoutube = [
	{
		id: 1,
		name: '**Learn German with Anja**',
		value: '*https://www.youtube.com/@LearnGermanwithAnja/videos*'
	},
	{
		id: 2,
		name: '**German with Jenny**',
		value: '*https://www.youtube.com/@lingoniGERMAN*'
	},
	{
		id: 3,
		name: '**Learn German with Herr Antrim**',
		value: '*https://www.youtube.com/@MrLAntrim/videos*'
	},
]

const iyoutubeEmbed = new EmbedBuilder()
	.setColor(0x0099FF)
	.setTitle('**List of Youtube channels for Intermediates**')
    .setTimestamp()
    .addFields({ name: '\u200B', value: '\u200B' });


iyoutube.forEach(item => {
    iyoutubeEmbed.addFields({ name: item.name, value: item.value })
    if (item.id === iyoutube.length) {
        iyoutubeEmbed.addFields({ name: '\u200B', value: '\u200B' });
    }
})
	
module.exports = {
	cooldown: 5,
    data: new SlashCommandBuilder()
        .setName('iyoutube')
        .setDescription('List of Youtube channels for Intermediates.'),

    async execute(interaction) {
        await interaction.reply({ embeds: [iyoutubeEmbed] })
    }
}