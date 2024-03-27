const { SlashCommandBuilder, EmbedBuilder } = require('discord.js')


const watch = [
	{
		id: 1,
		name: '**Movies**',
		value: '*"Der Untergang", "Good Bye Lenin!", "Das Leben der Anderen"*'
	},
	{
		id: 2,
		name: '**Series**',
		value: '*"Dark", "Deutschland 83", "Tatort"*'
	}
]

const watchEmbed = new EmbedBuilder()
	.setColor(0x0099FF)
	.setTitle('**List of Movies and Series**')
    .setTimestamp()
    .addFields({ name: '\u200B', value: '\u200B' });

	
watch.forEach(item => {
    watchEmbed.addFields({ name: item.name, value: item.value })
    if (item.id === watch.length) {
        watchEmbed.addFields({ name: '\u200B', value: '\u200B' });
    }
})

module.exports = {
	cooldown: 5,
    data: new SlashCommandBuilder()
        .setName('watch')
        .setDescription('List of Movies and Series.'),

    async execute(interaction) {
        await interaction.reply({ embeds: [watchEmbed] })
    }
}