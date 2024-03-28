const { SlashCommandBuilder, EmbedBuilder } = require('discord.js')


const texts = [
    {
        id: 1,
        name: `Café`,
        value: `
            Person 1: "Guten Morgen! Wie geht es Ihnen heute?"

            Person 2: "Danke, gut! Und Ihnen?"

            Person 1: "Auch gut, danke! Was möchten Sie bestellen?"

            Person 2: "Ich hätte gerne einen Cappuccino, bitte."

            Person 1: "Ein Cappuccino, verstanden. Möchten Sie noch etwas dazu?"

            Person 2: "Nein danke, das reicht."

            Person 1: "Alles klar, das macht dann 3 Euro bitte."

            Person 2: "Hier ist das Geld. Vielen Dank!"
            
            Person 1: "Bitte sehr, hier ist Ihr Cappuccino. Einen schönen Tag noch!"
        `,
        translationname: `Coffee Shop`,
        translationvalue: `
            Person 1: "Good morning! How are you today?"

            Person 2: "Thank you, I'm good! And you?"

            Person 1: "Also good, thank you! What would you like to order?"

            Person 2: "I'd like a cappuccino, please."

            Person 1: "One cappuccino, understood. Would you like anything else with that?"

            Person 2: "No thank you, that's all."

            Person 1: "Alright, that will be 3 euros, please."

            Person 2: "Here's the money. Thank you very much!"

            Person 1: "You're welcome, here's your cappuccino. Have a nice day!"
        `,
    },
    {
        id: 2,
        name: `Konditorei`,
        value: `
            Kunde: Guten Tag! Ich hätte gerne zwei Stücke Schwarzwälder Kirschtorte, bitte.

            Verkäufer: Natürlich, hier sind Ihre Stücke. Möchten Sie noch etwas dazu?

            Kunde: Nein danke, das reicht für heute. Wie viel macht das?

            Verkäufer: Das macht zusammen 6 Euro, bitte.

            Kunde: Hier ist das Geld. Vielen Dank!

            Verkäufer: Bitte schön! Ihnen noch einen schönen Tag!
        `,
        translationname: `Pastry shop`,
        translationvalue: `
            Customer: Good day! I would like to have two slices of Black Forest cake, please.

            Vendor: Of course, here are your slices. Would you like anything else with that?

            Customer: No thank you, that's enough for today. How much is it?

            Vendor: That's a total of 6 euros, please.

            Customer: Here's the money. Thank you very much!

            Vendor: You're welcome! Have a nice day!
        `,
    },
    {
        id: 3,
        name: `Flughafen`,
        value: `
            Passagier: Entschuldigung, können Sie mir sagen, von welchem Gate mein Flug abfliegt?

            Mitarbeiter: Ja, natürlich. Ihr Flug geht von Gate 12 ab. Sie müssen nur dieser Halle geradeaus folgen, dann nach links abbiegen und es wird auf Ihrer rechten Seite sein.

            Passagier: Vielen Dank für die Hilfe!
        `,
        translationname: `Airport`,
        translationvalue: `
            Passenger: Excuse me, can you tell me which gate my flight is departing from?

            Staff: Yes, of course. Your flight is departing from Gate 12. You just need to follow this hall straight ahead, then turn left, and it will be on your right side.

            Passenger: Thank you very much for your help!
        `,
    },
    {
        id: 4,
        name: `Krankenhaus`,
        value: `
            Person 1: Entschuldigung, können Sie mir bitte helfen? Ich brauche dringend medizinische Hilfe.

            Person 2: Natürlich, was ist los? Wie kann ich Ihnen helfen?

            Person 1: Ich habe starke Bauchschmerzen und Übelkeit. Ich glaube, ich muss zum Arzt.

            Person 2: Kein Problem, folgen Sie mir bitte zum Notfallbereich. Wir werden uns um Sie kümmern.
        `,
        translationname: `Hospital`,
        translationvalue: `
            Person 1: Excuse me, can you please help me? I need urgent medical assistance.

            Person 2: Of course, what's wrong? How can I help you?

            Person 1: I have severe abdominal pain and nausea. I think I need to see a doctor.

            Person 2: No problem, please follow me to the emergency area. We'll take care of you.
        `,
    },
    {
        id: 5,
        name: `Polizeistation`,
        value: `
            Polizist: Guten Tag, wie kann ich Ihnen helfen?

            Bürger: Ich wurde bestohlen. Meine Geldbörse ist weg.

            Polizist: Kein Problem, bitte nehmen Sie Platz. Können Sie mir beschreiben, was passiert ist?

            Bürger: Ja, ich war gerade auf dem Weg zur Arbeit, als ich bemerkte, dass meine Geldbörse fehlte.

            Polizist: Verstehe. Haben Sie bemerkt, ob jemand verdächtiges in der Nähe war?

            Bürger: Nein, ich habe niemanden gesehen.

            Polizist: Gut, wir werden eine Untersuchung starten. Bitte füllen Sie dieses Formular aus und wir werden Sie kontaktieren, wenn es Neuigkeiten gibt.

            Bürger: Vielen Dank, ich hoffe, Sie können den Dieb finden.
        `,
        translationname: `Police Station`,
        translationvalue: `
            Police Officer: Good day, how can I help you?

            Citizen: I've been robbed. My wallet is missing.

            Police Officer: No problem, please have a seat. Can you describe to me what happened?

            Citizen: Yes, I was on my way to work when I noticed that my wallet was missing.

            Police Officer: I see. Did you notice if anyone suspicious was nearby?

            Citizen: No, I didn't see anyone.

            Police Officer: Alright, we will launch an investigation. Please fill out this form, and we will contact you if there are any updates.

            Citizen: Thank you very much, I hope you can find the thief.
        `,
    },
]

const random = () => {
    return Math.floor(Math.random() * texts.length)
}

module.exports = {
	cooldown: 5,
    data: new SlashCommandBuilder()
        .setName('btext')
        .setDescription('Gives a random text for Beginners.'),

    async execute(interaction) {
        const randomIndex = random()
        const randomText = texts[randomIndex]

        const btextEmbed = new EmbedBuilder()
            .setColor(0x0099FF)
            .setTitle('**Gives a random text for Beginners**')
            .setTimestamp()
            .addFields(
                { name: '\u200B', value: '\u200B' },
                { name: randomText.name, value: randomText.value },
                { name: '\u200B', value: '\u200B' },
                { name: randomText.translationname, value: randomText.translationvalue },
                { name: '\u200B', value: '\u200B' },
            );

        await interaction.reply({ embeds: [btextEmbed] })
    }
}