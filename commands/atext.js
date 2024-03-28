const { SlashCommandBuilder, EmbedBuilder } = require('discord.js')


const texts = [
    {
        id: 1,
        name: `Café`,
        value: `
            Person 1: Guten Tag! Entschuldigen Sie, ist dieser Platz noch frei?

            Person 2: Ja, selbstverständlich! Bitte setzen Sie sich. Kann ich Ihnen etwas zu trinken anbieten?

            Person 1: Vielen Dank! Ich hätte gerne einen doppelten Espresso, aber könnten Sie ihn bitte extra stark machen?

            Person 2: Natürlich, kein Problem. Möchten Sie dazu vielleicht noch einen Schuss Sirup, um ihm eine zusätzliche Geschmacksnote zu verleihen?

            Person 1: Das klingt interessant. Haben Sie einen Vanille-Sirup?

            Person 1: Guten Tag! Ist dieser Platz noch frei?

            Person 2: Ja, selbstverständlich! Bitte nehmen Sie Platz. Wie kann ich Ihnen behilflich sein?

            Person 1: Vielen Dank! Ich bin hier zum ersten Mal. Was empfehlen Sie?

            Person 2: Unser Kaffee ist sehr beliebt. Vielleicht möchten Sie unseren hausgemachten Latte Macchiato probieren?

            Person 1: Das klingt gut! Ich nehme einen Latte Macchiato. Aber ich bin auch ein wenig hungrig. Haben Sie Snacks?

            Person 2: Ja, wir haben eine Auswahl an Bagels, Sandwiches und Gebäck. Was hätten Sie gerne?

            Person 1: Ich hätte gerne einen Bagel mit Lachs und Frischkäse, bitte.

            Person 2: Ausgezeichnete Wahl! Möchten Sie dazu vielleicht noch einen frisch gepressten Orangensaft?

            Person 1: Ja, das wäre fantastisch. Bitte bringen Sie mir einen Orangensaft.

            Person 2: Ein Latte Macchiato, ein Bagel mit Lachs und Frischkäse und ein frisch gepresster Orangensaft. Kommt sofort! Darf ich Ihnen außerdem noch unsere Tageszeitung anbieten?

            Person 1: Oh, das wäre nett, danke. Ich bin gerade auf der Suche nach den aktuellen Nachrichten.

            Person 2: Hier ist die Zeitung. Genießen Sie Ihren Aufenthalt hier!

            Person 1: Vielen Dank! Ich freue mich schon darauf.

            [Person 1 setzt sich und beginnt zu lesen, während Person 2 die Bestellung vorbereitet und an den Tisch bringt.]

            Person 2: Hier ist Ihr Latte Macchiato, Ihr Bagel und der Orangensaft. Haben Sie noch etwas vergessen?

            Person 1: Nein, das sieht perfekt aus. Vielen Dank!

            Person 2: Bitte schön! Lassen Sie es mich wissen, wenn Sie noch etwas brauchen.

            Person 1: Mach ich. Nochmals vielen Dank!

            [Person 2 geht zurück zur Theke, um anderen Kunden zu helfen.]
        `,
    },
    {
        id: 2,
        name: `Konditorei`,
        value: `
            Person 1: Guten Tag! Was für Köstlichkeiten haben Sie heute?

            Person 2: Guten Tag! Wir haben eine Vielzahl an Leckereien zur Auswahl. Unter anderem haben wir frisch gebackene Croissants, bunte Macarons, cremige Torten und knusprige Kekse.

            Person 1: Das klingt verlockend! Ich kann mich kaum entscheiden. Was würden Sie empfehlen?

            Person 2: Wenn Sie etwas Leichtes und Luftiges möchten, würde ich unsere französischen Croissants empfehlen. Sie sind knusprig von außen und herrlich fluffig von innen.

            Person 1: Klingt köstlich! Ich nehme ein Croissant, bitte. Aber ich möchte auch etwas Süßes dazu. Haben Sie eine besondere Empfehlung?

            Person 2: Für etwas Süßes würde ich Ihnen unsere hausgemachten Macarons empfehlen. Sie sind in verschiedenen Geschmacksrichtungen erhältlich und schmelzen förmlich auf der Zunge.

            Person 1: Das klingt großartig! Ich nehme ein Croissant und drei Macarons, bitte. Einen in Erdbeer, einen in Pistazie und einen in Schokolade.

            Person 2: Sehr gerne! Möchten Sie noch etwas zu trinken dazu?

            Person 1: Ja, ich hätte gerne einen Latte Macchiato, bitte.

            Person 2: Ein Croissant, drei Macarons und einen Latte Macchiato. Alles klar! Möchten Sie hier essen oder zum Mitnehmen?

            Person 1: Ich denke, ich nehme es zum Mitnehmen. Ich habe noch ein paar Erledigungen zu machen.

            Person 2: Kein Problem! Ich werde alles für Sie einpacken. Das macht dann 12,50 Euro, bitte.

            Person 1: Hier ist mein Geld. Vielen Dank für die Hilfe und die Empfehlungen!

            Person 2: Gern geschehen! Ich wünsche Ihnen einen wundervollen Tag und hoffe, dass Ihnen unsere Leckereien schmecken.

            Person 1: Vielen Dank, das wünsche ich Ihnen auch!
        `,
    },
    {
        id: 3,
        name: `Flughafen`,
        value: `
            Person 1: Entschuldigung, könnten Sie mir bitte helfen? Ich bin etwas verwirrt.

            Person 2: Natürlich, gerne! Was kann ich für Sie tun?

            Person 1: Ich habe meinen Flug verpasst und weiß nicht, was ich jetzt tun soll.

            Person 2: Keine Sorge, das kann jedem passieren. Haben Sie Ihre Bordkarte dabei?

            Person 1: Ja, hier ist sie.

            Person 2: Gut, dann schauen wir uns Ihre Optionen an. Haben Sie einen Anschlussflug?

            Person 1: Nein, ich war auf dem Weg zu einer Konferenz.

            Person 2: Verstehe. Lassen Sie uns zu den Informationsschaltern gehen. Dort können wir herausfinden, ob es alternative Flüge gibt.

            Person 1: Danke, das wäre sehr hilfreich.

            (Personen 1 und 2 gehen zu den Informationsschaltern und warten in der Schlange.)

            Person 2: Gibt es noch andere Flughäfen in der Nähe Ihres Ziels, die Sie erreichen könnten?

            Person 1: Ich bin nicht sicher. Können Sie mir dabei helfen, das herauszufinden?

            Person 2: Natürlich. Lassen Sie mich mal auf meinem Smartphone nachsehen.

            (Person 2 sucht nach alternativen Flughäfen und Flugverbindungen.)

            Person 2: Es scheint, als gäbe es einen Flug in zwei Stunden von einem anderen Flughafen in der Nähe Ihres Ziels. Würde das für Sie passen?

            Person 1: Ja, das wäre großartig! Wie komme ich dorthin?

            Person 2: Es gibt einen Shuttlebus, der alle 30 Minuten fährt. Ich werde Ihnen helfen, den richtigen Bus zu finden.

            (Personen 1 und 2 machen sich auf den Weg zum Shuttlebus.)

            Person 1: Ich danke Ihnen vielmals für Ihre Hilfe. Ich hätte das alleine nicht geschafft.

            Person 2: Keine Ursache, ich freue mich, dass ich helfen konnte. Haben Sie eine angenehme Reise!

            Person 1: Ihnen auch, vielen Dank nochmal!
        `,
    },
    {
        id: 4,
        name: `Krankenhaus`,
        value: `
            \n
            Person 1: Guten Tag, ich habe einen Termin zur Untersuchung bei Dr. Müller.

            Empfangspersonal: Guten Tag! Darf ich Ihren Namen und Ihre Krankenakte bitte haben?

            Person 1: Ja, mein Name ist Sarah Meier. Hier ist meine Krankenakte.

            Empfangspersonal: Vielen Dank, Frau Meier. Bitte nehmen Sie im Wartebereich Platz. Dr. Müller wird Sie bald aufrufen.

            Person 1: Danke schön.

            Eine Weile später

            Dr. Müller: Guten Tag, Frau Meier. Wie geht es Ihnen heute?

            Person 1: Guten Tag, Herr Doktor. Danke, mir geht es soweit gut, aber ich habe seit einiger Zeit starke Kopfschmerzen und Schwindelgefühle.

            Dr. Müller: Verstehe. Haben Sie irgendwelche anderen Symptome bemerkt?

            Person 1: Ja, ich habe auch Probleme mit meiner Sehkraft und gelegentlich Übelkeit.

            Dr. Müller: Das klingt besorgniserregend. Wir werden einige Untersuchungen durchführen müssen, um die Ursache Ihrer Symptome festzustellen. Zuerst werden wir eine Blutuntersuchung machen und dann eine MRT-Untersuchung planen.

            Person 1: In Ordnung, das hört sich gut an. Ich mache mir wirklich Sorgen darüber.

            Dr. Müller: Keine Sorge, wir werden unser Bestes tun, um herauszufinden, was los ist. Wir werden uns darum kümmern. Ich werde die notwendigen Untersuchungen veranlassen und wir werden uns dann besprechen, wenn die Ergebnisse vorliegen.

            Person 1: Vielen Dank, Herr Doktor. Ich bin froh, dass Sie mir helfen können.

            Dr. Müller: Es ist mein Beruf und meine Verpflichtung, Ihnen zu helfen. Bitte machen Sie sich keine Sorgen. Ich werde alles tun, um Ihnen zu helfen.

            Person 1: Danke, das bedeutet mir wirklich viel.

            Dr. Müller: Keine Ursache. Wir werden uns bald wiedersehen, sobald die Ergebnisse da sind.

            Person 1: Auf Wiedersehen, Herr Doktor.

            Dr. Müller: Auf Wiedersehen, Frau Meier. Bis bald.

            Person 1 verlässt das Büro von Dr. Müller

            Empfangspersonal: Frau Meier, wir haben Ihre Termine für die Blutuntersuchung und das MRT vereinbart. Hier ist Ihr Zeitplan. Bitte melden Sie sich bei Fragen.

            Person 1: Vielen Dank für Ihre Hilfe.

            Empfangspersonal: Bitte schön. Alles Gute, Frau Meier.
        `,
    },
    {
        id: 5,
        name: `Polizeistation`,
        value: `
            Person 1: Guten Tag, ich würde gerne eine Anzeige erstatten.

            Polizist: Guten Tag. Natürlich, bitte nehmen Sie Platz. Um was geht es denn?

            Person 1: Mein Fahrrad wurde gestohlen. Es war letzte Nacht vor meinem Haus.

            Polizist: Verstehe. Haben Sie bereits eine genaue Beschreibung des Fahrrads?

            Person 1: Ja, es ist ein schwarzes Mountainbike der Marke Trek. Es hat weiße Streifen und eine kleine Delle am hinteren Schutzblech.

            Polizist: Haben Sie irgendwelche Verdächtigen gesehen oder kam Ihnen etwas Ungewöhnliches in der Nähe Ihres Hauses auf?

            Person 1: Nun, ich habe in der letzten Woche einige verdächtige Gestalten herumlungern sehen, aber ich kann nicht sicher sagen, ob einer von ihnen etwas mit dem Diebstahl zu tun hat.

            Polizist: Das ist dennoch hilfreich. Haben Sie die Seriennummer Ihres Fahrrads?

            Person 1: Ja, ich habe sie zu Hause. Soll ich sie mitbringen?

            Polizist: Ja, bitte. Das wird uns bei der Identifizierung des Fahrrads helfen, falls es gefunden wird. Haben Sie sonst noch etwas, das Sie hinzufügen möchten?

            Person 1: Nein, das war es eigentlich. Ich hoffe nur, dass das Fahrrad gefunden wird.

            Polizist: Wir werden unser Bestes tun, um Ihnen zu helfen. Bitte füllen Sie dieses Formular aus und bringen Sie die Seriennummer so bald wie möglich vorbei.

            Person 1: Vielen Dank, das werde ich tun.
        `,
    },
]

const random = () => {
    return Math.floor(Math.random() * texts.length)
}

module.exports = {
    cooldown: 5,
    data: new SlashCommandBuilder()
        .setName('atext')
        .setDescription('Gives a random text for Advanced.'),

    async execute(interaction) {
        const randomIndex = random();
        const randomText = texts[randomIndex];
        
        const chunks = randomText.value.match(/[\s\S]{1,1024}/g);

        const fields = chunks.map((chunk, index) => ({
            name: index === 0 ? randomText.name : '\u200B',
            value: chunk
        }))

        const atextEmbed = new EmbedBuilder()
            .setColor(0x0099FF)
            .setTitle('**Gives a random text for Advanced**')
            .setTimestamp()
            .addFields(fields)

        await interaction.reply({ embeds: [atextEmbed] });
    }
};