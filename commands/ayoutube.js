const { SlashCommandBuilder, EmbedBuilder } = require('discord.js')


const ayoutube = [
	{
		id: 1,
		name: '**Gronkh**',
		value: '*https://www.youtube.com/@gronkh*'
	},
	{
		id: 2,
		name: '**PietSmiet**',
		value: '*https://www.youtube.com/@pietsmiet*'
	},
	{
		id: 3,
		name: '**Dagi Bee**',
		value: '*https://www.youtube.com/@dagibee*'
	},
	{
		id: 4,
		name: '**BibisBeautyPalace**',
		value: '*https://www.youtube.com/@BibisBeautyPalace*'
	},
	{
		id: 5,
		name: '**maiLab**',
		value: '*https://www.youtube.com/@maiLab*'
	},
	{
		id: 6,
		name: '**MrWissen2go**',
		value: '*https://www.youtube.com/@MrWissen2go*'
	},
	{
		id: 7,
		name: '**Coldmirror**',
		value: '*https://www.youtube.com/@coldmirror*'
	},
	{
		id: 8,
		name: '**Y-Titty**',
		value: '*https://www.youtube.com/@YTITTY*'
	},
]

const ayoutubeEmbed = new EmbedBuilder()
	.setColor(0x0099FF)
	.setTitle('**List of Youtube channels for Advanced**')
    .setTimestamp()
    .addFields({ name: '\u200B', value: '\u200B' });


ayoutube.forEach(item => {
    ayoutubeEmbed.addFields({ name: item.name, value: item.value })
    if (item.id === ayoutube.length) {
        ayoutubeEmbed.addFields({ name: '\u200B', value: '\u200B' });
    }
})
	
module.exports = {
	cooldown: 5,
    data: new SlashCommandBuilder()
        .setName('ayoutube')
        .setDescription('List of Youtube channels for Advanced.'),

    async execute(interaction) {
        await interaction.reply({ embeds: [ayoutubeEmbed] })
    }
}