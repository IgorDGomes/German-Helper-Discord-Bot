const { SlashCommandBuilder, EmbedBuilder } = require('discord.js')


const apps = [
	{
		id: 1,
		name: '**Duolingo**',
		value: '*https://de.duolingo.com/*'
	},
	{
		id: 2,
		name: '**Babbel**',
		value: '*https://de.babbel.com/*'
	},
	{
		id: 3,
		name: '**Memrise**',
		value: '*https://www.memrise.com/de/*'
	},
]

const appsEmbed = new EmbedBuilder()
	.setColor(0x0099FF)
	.setTitle('**List of Apps**')
    .setTimestamp()
    .addFields({ name: '\u200B', value: '\u200B' });


apps.forEach(item => {
    appsEmbed.addFields({ name: item.name, value: item.value })
    if (item.id === apps.length) {
        appsEmbed.addFields({ name: '\u200B', value: '\u200B' });
    }
})

module.exports = {
	cooldown: 5,
    data: new SlashCommandBuilder()
        .setName('apps')
        .setDescription('List of Apps.'),

    async execute(interaction) {
        await interaction.reply({ embeds: [appsEmbed] })
    }
}