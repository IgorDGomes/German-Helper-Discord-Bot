const { SlashCommandBuilder, EmbedBuilder } = require('discord.js')


const texts = [
    {
        id: 1,
        name: `Café`,
        value: `
            Person 1: Guten Morgen! Darf ich mich hier setzen?

            Person 2: Ja, natürlich! Bitte, nehmen Sie Platz. Was darf ich Ihnen anbieten?

            Person 1: Vielen Dank! Ich hätte gerne einen Cappuccino, bitte.

            Person 2: Ein Cappuccino, verstehe. Möchten Sie noch etwas dazu, vielleicht ein Stück Kuchen oder ein Croissant?

            Person 1: Ein Stück Kuchen hört sich gut an. Haben Sie eine Empfehlung?

            Person 2: Wir haben heute frischen Apfelkuchen oder Schokoladenkuchen. Beides ist sehr lecker!

            Person 1: Dann nehme ich den Apfelkuchen, bitte.

            Person 2: Ein Cappuccino und ein Stück Apfelkuchen. Kommt sofort! Darf es sonst noch etwas sein?

            Person 1: Nein danke, das ist alles für mich.

            Person 2: In Ordnung, ich bringe es gleich vorbei.
        `,
        translationname: `Coffee Shop`,
        translationvalue: `
            Person 1: Good morning! May I sit here?

            Person 2: Yes, of course! Please, have a seat. What can I offer you?

            Person 1: Thank you very much! I would like a cappuccino, please.

            Person 2: A cappuccino, I see. Would you like something else with that, perhaps a piece of cake or a croissant?

            Person 1: A piece of cake sounds good. Do you have a recommendation?

            Person 2: Today we have fresh apple cake or chocolate cake. Both are very delicious!

            Person 1: Then I'll have the apple cake, please.

            Person 2: One cappuccino and a piece of apple cake. Coming right up! Is there anything else you'd like?

            Person 1: No thank you, that's all for me.

            Person 2: Alright, I'll bring it over shortly.
        `,
    },
    {
        id: 2,
        name: `Konditorei`,
        value: `
            Kunde: Guten Tag! Was für leckere Köstlichkeiten haben Sie heute?

            Verkäuferin: Guten Tag! Wir haben eine große Auswahl an frischen Backwaren. Kann ich Ihnen etwas Bestimmtes empfehlen?

            Kunde: Haben Sie vielleicht etwas mit Schokolade oder Beeren?

            Verkäuferin: Natürlich, wir haben Schokoladenkuchen, Beerenmuffins und Schokoladenkekse. Welches davon interessiert Sie?

            Kunde: Die Beerenmuffins klingen gut! Kann ich bitte zwei davon bekommen?

            Verkäuferin: Selbstverständlich! Möchten Sie noch etwas dazu, wie einen Kaffee oder Tee?

            Kunde: Einen Kaffee wäre perfekt, danke!

            Verkäuferin: Alles klar, ich bereite das für Sie vor. Bitte nehmen Sie Platz, ich bringe es gleich zu Ihnen.
        `,
        translationname: `Pastry shop`,
        translationvalue: `
            Customer: Good day! What delicious treats do you have today?

            Shopkeeper: Good day! We have a wide selection of fresh pastries. Can I recommend something specific to you?

            Customer: Do you have anything with chocolate or berries perhaps?

            Shopkeeper: Certainly, we have chocolate cake, berry muffins, and chocolate cookies. Which one interests you?

            Customer: The berry muffins sound good! Could I please have two of those?

            Shopkeeper: Of course! Would you like anything else with that, like a coffee or tea?

            Customer: A coffee would be perfect, thank you!

            Shopkeeper: Alright, I'll prepare that for you. Please take a seat, I'll bring it to you shortly.
        `,
    },
    {
        id: 3,
        name: `Flughafen`,
        value: `
            Person 1: Entschuldigung, könnten Sie mir sagen, wo sich das Gate für den Flug nach Berlin befindet?

            Person 2: Ja, natürlich. Sie gehen einfach geradeaus den Gang entlang und biegen dann links ab. Das Gate für Ihren Flug ist Nr. 23.

            Person 1: Vielen Dank! Können Sie mir auch sagen, wann das Boarding beginnt?

            Person 2: Das Boarding beginnt in ungefähr 30 Minuten. Es gibt genügend Zeit für Sie, durch die Sicherheitskontrolle zu gehen und sich zu entspannen.

            Person 1: Super, danke für die Information. Wissen Sie zufällig, ob es Verspätungen gibt?

            Person 2: Bisher gibt es keine gemeldeten Verspätungen. Aber es ist immer eine gute Idee, regelmäßig die Anzeigetafeln zu überprüfen, falls sich etwas ändert.

            Person 1: Gut, ich werde darauf achten. Vielen Dank für Ihre Hilfe!

            Person 2: Gern geschehen! Haben Sie einen angenehmen Flug nach Berlin!
        `,
        translationname: `Airport`,
        translationvalue: `
            Person 1: Excuse me, could you tell me where the gate for the flight to Berlin is?

            Person 2: Yes, of course. You just go straight down the corridor and then turn left. The gate for your flight is number 23.

            Person 1: Thank you very much! Can you also tell me when the boarding will begin?

            Person 2: Boarding will begin in about 30 minutes. There's plenty of time for you to go through security and relax.

            Person 1: Great, thanks for the information. Do you happen to know if there are any delays?

            Person 2: So far, there are no reported delays. But it's always a good idea to regularly check the departure boards in case anything changes.

            Person 1: Alright, I'll keep an eye out. Thank you for your help!

            Person 2: You're welcome! Have a pleasant flight to Berlin!
        `,
    },
    {
        id: 4,
        name: `Krankenhaus`,
        value: `
            Person 1: Entschuldigung, könnten Sie mir bitte helfen?

            Person 2: Ja, natürlich. Was scheint das Problem zu sein?

            Person 1: Ich habe seit ein paar Tagen starke Kopfschmerzen und Schwindelgefühle. Ich mache mir Sorgen, dass es etwas Ernstes sein könnte.

            Person 2: Das klingt besorgniserregend. Haben Sie noch andere Symptome bemerkt?

            Person 1: Ja, ich habe auch Probleme mit dem Sehen und fühle mich schwach.

            Person 2: Ich denke, es wäre am besten, wenn wir Sie gleich zur Notaufnahme bringen. Dort können die Ärzte Sie gründlich untersuchen und die richtige Behandlung verschreiben.

            Person 1: Danke, das wäre großartig. Ich bin wirklich besorgt.

            Person 2: Keine Sorge, Sie sind hier in guten Händen. Lassen Sie uns gleich dorthin gehen.
        `,
        translationname: `Hospital`,
        translationvalue: `
            Person 1: Excuse me, could you please help me?

            Person 2: Yes, of course. What seems to be the problem?

            Person 1: I've been experiencing severe headaches and dizziness for a few days now. I'm worried it might be something serious.

            Person 2: That sounds concerning. Have you noticed any other symptoms?

            Person 1: Yes, I've also been having problems with my vision and feeling weak.

            Person 2: I think it would be best if we take you to the emergency room right away. There, the doctors can examine you thoroughly and prescribe the appropriate treatment.

            Person 1: Thank you, that would be great. I'm really worried.

            Person 2: Don't worry, you're in good hands here. Let's go there right away.
        `,
    },
    {
        id: 5,
        name: `Polizeistation`,
        value: `
            Person 1: Guten Tag, ich würde gerne eine Anzeige erstatten.

            Polizist: Guten Tag. Natürlich, worum geht es denn?

            Person 1: Mein Fahrrad wurde gestohlen. Es war letzte Nacht vor meinem Haus.

            Polizist: Verstehe. Haben Sie eine Beschreibung des Fahrrads und können Sie uns den genauen Ort des Diebstahls zeigen?

            Person 1: Ja, es ist ein schwarzes Damenrad mit einem weißen Korb vorne. Und der Diebstahl passierte direkt vor meinem Haus in der Müllerstraße.

            Polizist: Gut, bitte füllen Sie dieses Formular aus und wir werden eine Untersuchung einleiten. Haben Sie noch weitere Informationen, die uns helfen könnten?

            Person 1: Ich habe keine verdächtigen Personen gesehen, aber ich habe ein Foto des Fahrrads auf meinem Handy.

            Polizist: Das ist hilfreich. Bitte zeigen Sie mir das Foto. Wir werden unser Bestes tun, um Ihr Fahrrad zu finden.
        `,
        translationname: `Police Station`,
        translationvalue: `
            Person 1: Good day, I would like to file a report.

            Police Officer: Good day. Of course, what is it about?

            Person 1: My bike was stolen. It was last night in front of my house.

            Police Officer: I see. Do you have a description of the bike, and can you show us the exact location of the theft?

            Person 1: Yes, it's a black ladies' bike with a white basket in front. And the theft happened right in front of my house on Müller Street.

            Police Officer: Alright, please fill out this form, and we will initiate an investigation. Do you have any other information that could help us?

            Person 1: I didn't see any suspicious individuals, but I have a photo of the bike on my phone.

            Police Officer: That's helpful. Please show me the photo. We'll do our best to find your bike.
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