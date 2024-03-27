const { SlashCommandBuilder, EmbedBuilder } = require('discord.js')


const bpodcasts = [
	{
		id: 1,
		name: '**Coffee Break German**',
		value: '*https://coffeebreaklanguages.com/category/coffee-break-german/*'
	},
	{
		id: 2,
		name: '**Slow German**',
		value: '*https://slowgerman.com/*'
	}
]

const bpodcastsEmbed = new EmbedBuilder()
	.setColor(0x0099FF)
	.setTitle('**List of Podcasts for Beginners**')
    .setTimestamp()
    .addFields({ name: '\u200B', value: '\u200B' });


bpodcasts.forEach(item => {
    bpodcastsEmbed.addFields({ name: item.name, value: item.value })
    if (item.id === bpodcasts.length) {
        bpodcastsEmbed.addFields({ name: '\u200B', value: '\u200B' });
    }
})

module.exports = {
	cooldown: 5,
    data: new SlashCommandBuilder()
        .setName('bpodcasts')
        .setDescription('List of Podcasts for Beginners.'),

    async execute(interaction) {
        await interaction.reply({ embeds: [bpodcastsEmbed] })
    }
}