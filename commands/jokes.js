const { SlashCommandBuilder } = require('discord.js')


const jokes = [
    {
        joke: 'Warum hat der Mathematikbuch schlechte Laune? Weil es viele Probleme hat!'
    },
    {
        joke: 'Was macht eine Null auf einer Party? Sie tanzt im Kreis!'
    },
    {
        joke: 'Wie nennt man einen Bumerang, der nicht zurückkommt? Ein Stock!'
    },
    {
        joke: 'Warum sind Geister so schlecht im Lügen? Weil sie durchsichtig sind!'
    },
    {
        joke: 'Warum können Elefanten nicht fliegen? Weil sie zu schwer für den Flugverkehr sind!'
    },
    {
        joke: 'Warum hat der Teddybär keinen Kuchen gegessen? Weil er schon gestopft ist!'
    },
    {
        joke: 'Warum können Vampire keine Briefe schreiben? Weil sie keinen Blutstift haben!'
    },
    {
        joke: 'Warum ist der Boden beleidigt? Weil alle über ihn treten!'
    },
    {
        joke: 'Was ist ein Keks unter Wasser? Ein Weihnachtskeks!'
    },
    {
        joke: 'Warum sind Friedhöfe so laut? Weil alle ständig am klopfen sind, aber niemand antwortet!'
    },
    {
        joke: 'Warum ist das Meer salzig? Weil das Land nicht winkt zurück!'
    },
    {
        joke: 'Warum ist der Friedhof ein schlechter Ort für einen Picknicktag? Weil die Gäste nie hungrig sind!'
    },
    {
        joke: 'Warum haben Vampire immer kalte Füße? Weil sie nur Nachtschuhe tragen!'
    },
    {
        joke: 'Warum sind Vampire schlechte Köche? Weil sie immer alles blutig machen!'
    },
    {
        joke: 'Warum sind Zombies immer so entspannt? Weil sie sich keine Gedanken über die Zukunft machen!'
    },
]

const random = () => {
    return Math.floor(Math.random() * jokes.length)
}

module.exports = {
	cooldown: 5,
    data: new SlashCommandBuilder()
        .setName('jokes')
        .setDescription('Give you a random joke.'),

    async execute(interaction) {
        await interaction.reply(`${jokes[random()].joke}`)
    }
}