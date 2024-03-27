const { SlashCommandBuilder, EmbedBuilder } = require('discord.js')


const artists = [
	{
		id: 1,
		name: '**Pop**',
		value: '*Nena Hebert, Herbert Grönemeyer*'
	},
	{
		id: 2,
		name: '**Rock**',
		value: '*Rammstein, Herbert Grönemeyer*'
	},
	{
		id: 3,
		name: '**Hip-hop**',
		value: '*Die Fantastischen Vier*'
	},
	{
		id: 4,
		name: '**Rap**',
		value: '*Cro*'
	},
	{
		id: 5,
		name: '**Electronic**',
		value: '*Kraftwerk*'
	},
]

const artistsEmbed = new EmbedBuilder()
	.setColor(0x0099FF)
	.setTitle('**List of Artists**')
    .setTimestamp()
    .addFields({ name: '\u200B', value: '\u200B' });


artists.forEach(item => {
    artistsEmbed.addFields({ name: item.name, value: item.value })
    if (item.id === artists.length) {
        artistsEmbed.addFields({ name: '\u200B', value: '\u200B' });
    }
})

module.exports = {
	cooldown: 5,
    data: new SlashCommandBuilder()
        .setName('artists')
        .setDescription('List of Artists.'),

    async execute(interaction) {
        await interaction.reply({ embeds: [artistsEmbed] })
    }
}