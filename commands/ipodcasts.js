const { SlashCommandBuilder, EmbedBuilder } = require('discord.js')


const ipodcasts = [
    {
        id: 1,
        name: '**Langsam gesprochene Nachrichten**',
        value: '*https://learngerman.dw.com/de/langsam-gesprochene-nachrichten/s-60040332*'
    },
    {
        id: 2,
        name: '**Schlaflos in München**',
        value: '*https://slowgerman.com/*'
    },
    {
        id: 3,
        name: '**Easy German Poetry**', 
        value: '*https://www.easygerman.org/podcast*'
    },
    {
        id: 4,
        name: '**Schlaflos in München**', 
        value: '*https://slowgerman.com/*'
    },
]

const ipodcastsEmbed = new EmbedBuilder()
	.setColor(0x0099FF)
	.setTitle('**List of Podcasts for Intermediates**')
    .setTimestamp()
    .addFields({ name: '\u200B', value: '\u200B' });


ipodcasts.forEach(item => {
    ipodcastsEmbed.addFields({ name: item.name, value: item.value })
    if (item.id === ipodcasts.length) {
        ipodcastsEmbed.addFields({ name: '\u200B', value: '\u200B' });
    }
})

module.exports = {
	cooldown: 5,
    data: new SlashCommandBuilder()
        .setName('ipodcasts')
        .setDescription('List of Podcasts for Intermediates.'),

    async execute(interaction) {
        await interaction.reply({ embeds: [ipodcastsEmbed] })
    }
}