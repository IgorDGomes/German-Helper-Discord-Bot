const { SlashCommandBuilder, EmbedBuilder } = require('discord.js')


const apodcasts = [
    {
        id: 1,
        name: '**Authentic German Learning**',
        value: '*https://authenticgermanlearning.com/de/german-podcast/*'
    },
    {
        id: 2,
        name: '**Nachrichtenleicht**',
        value: '*https://www.deutschlandfunk.de/podcasts*'
    },
    {
        id: 3,
        name: '**Kulturzeit**', 
        value: '*https://www.3sat.de/service-und-hilfe/podcast/podcast-100.html*'
    },
    {
        id: 4,
        name: '**Wissenschaft im Brennpunkt**', 
        value: '*https://www.deutschlandfunk.de/wissenschaft-im-brennpunkt-102.html*'
    },
    {
        id: 5,
        name: '**Der Finanzwesir rockt**', 
        value: '*https://finanzrocker.net/der-finanzwesir-rockt/*'
    },
    {
        id: 6,
        name: '**Gemischtes Hack**', 
        value: '*https://open.spotify.com/show/7BTOsF2boKmlYr76BelijW*'
    },
]

const apodcastsEmbed = new EmbedBuilder()
	.setColor(0x0099FF)
	.setTitle('**List of Podcasts for Advanced**')
    .setTimestamp()
    .addFields({ name: '\u200B', value: '\u200B' });


apodcasts.forEach(item => {
    apodcastsEmbed.addFields({ name: item.name, value: item.value })
    if (item.id === apodcasts.length) {
        apodcastsEmbed.addFields({ name: '\u200B', value: '\u200B' });
    }
})

module.exports = {
	cooldown: 5,
    data: new SlashCommandBuilder()
        .setName('apodcasts')
        .setDescription('List of Podcasts for Advanced.'),

    async execute(interaction) {
        await interaction.reply({ embeds: [apodcastsEmbed] })
    }
}