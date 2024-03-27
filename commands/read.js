const { SlashCommandBuilder, EmbedBuilder } = require('discord.js')


const read = [
	{
		id: 1,
		name: '**Deutsche Welle (DW)**',
		value: '*https://www.dw.com/de/themen/s-9077*'
	},
	{
		id: 2,
		name: '**Nachrichtenleicht**',
		value: '*https://www.nachrichtenleicht.de/*'
	},
	{
		id: 3,
		name: '**Der Spiegel**',
		value: '*https://www.spiegel.de/*'
	},
	{
		id: 4,
		name: '**Die Zeit**',
		value: '*https://www.zeit.de/index*'
	},
	{
		id: 5,
		name: '**Süddeutsche Zeitung**',
		value: '*https://www.sueddeutsche.de/*'
	},
	{
		id: 6,
		name: '\u200B',
		value: '\u200B'
	},
	{
		id: 7,
		name: 'Free ebooks',
		value: 'https://zulu-ebooks.com/belletristik'
	},
]

const readEmbed = new EmbedBuilder()
	.setColor(0x0099FF)
	.setTitle('**List of Articles and Reading Material**')
    .setTimestamp()
    .addFields({ name: '\u200B', value: '\u200B' });

	
read.forEach(item => {
    readEmbed.addFields({ name: item.name, value: item.value })
    if (item.id === read.length) {
        readEmbed.addFields({ name: '\u200B', value: '\u200B' });
    }
})

module.exports = {
	cooldown: 5,
    data: new SlashCommandBuilder()
        .setName('read')
        .setDescription('List of Articles and Reading Material.'),

    async execute(interaction) {
        await interaction.reply({ embeds: [readEmbed] })
    }
}