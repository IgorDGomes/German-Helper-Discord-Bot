const { SlashCommandBuilder, EmbedBuilder } = require('discord.js')


const texts = [
    {
        id: 1,
        name: `Café`,
        value: `
            
        `,
    },
    {
        id: 2,
        name: `Konditorei`,
        value: `
            
        `,
    },
    {
        id: 3,
        name: `Flughafen`,
        value: `
            
        `,
    },
    {
        id: 4,
        name: `Krankenhaus`,
        value: `
            
        `,
    },
    {
        id: 5,
        name: `Polizeistation`,
        value: `
            
        `,
    },
]

const random = () => {
    return Math.floor(Math.random() * texts.length)
}

module.exports = {
	cooldown: 5,
    data: new SlashCommandBuilder()
        .setName('itext')
        .setDescription('Gives a random text for Intermediates.'),

    async execute(interaction) {
        const randomIndex = random()
        const randomText = texts[randomIndex]

        const itextEmbed = new EmbedBuilder()
            .setColor(0x0099FF)
            .setTitle('**Gives a random text for Intermediates**')
            .setTimestamp()
            .addFields(
                { name: '\u200B', value: '\u200B' },
                { name: randomText.name, value: randomText.value },
                { name: '\u200B', value: '\u200B' },
                { name: randomText.translationname, value: randomText.translationvalue },
                { name: '\u200B', value: '\u200B' },
            );

        await interaction.reply({ embeds: [itextEmbed] })
    }
}