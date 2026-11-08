// Scenario sentence templates for the 💬 Sentences quiz (one noun slot per
// slotted template, filled from reviewed vocabulary — see index.html sentFill
// for placeholder semantics: {E}/{Eb} English, {N}/{Nacc}/{Nb} target language).
window.QUIZ_SENT = {};
// German sentence templates for QUIZ_SENT (6 slotted + 4 fixed per scenario)
window.QUIZ_SENT.german = {
  restaurant: [
    {en:"I would like {E}, please.", fl:"Ich hätte gern {Nacc}, bitte.", slot:"food"},
    {en:"I'll take {E}.", fl:"Ich nehme {Nacc}.", slot:"food"},
    {en:"I would like to order {E}.", fl:"Ich möchte {Nacc} bestellen.", slot:"food"},
    {en:"Do you have {Eb}?", fl:"Haben Sie {Nb}?", slot:"drink"},
    {en:"Can I please have {E}?", fl:"Kann ich bitte {Nacc} haben?", slot:"drink"},
    {en:"Could you bring me {E}, please?", fl:"Können Sie mir bitte {Nacc} bringen?", slot:"drink"},
    {en:"A table for two, please.", fl:"Einen Tisch für zwei Personen, bitte."},
    {en:"The menu, please.", fl:"Die Speisekarte, bitte."},
    {en:"The bill, please.", fl:"Die Rechnung, bitte."},
    {en:"That was delicious, thank you.", fl:"Das war lecker, danke."}
  ],
  coffee: [
    {en:"I would like {E} to go, please.", fl:"Ich hätte gern {Nacc} zum Mitnehmen, bitte.", slot:"drink"},
    {en:"I'll take {E}, please.", fl:"Ich nehme {Nacc}, bitte.", slot:"drink"},
    {en:"Could I get {E}, please?", fl:"Könnte ich bitte {Nacc} bekommen?", slot:"drink"},
    {en:"Do you also have {Eb}?", fl:"Haben Sie auch {Nb}?", slot:"food"},
    {en:"I would also like {E}.", fl:"Ich möchte auch {Nacc}.", slot:"food"},
    {en:"We would like to order {E}.", fl:"Wir möchten {Nacc} bestellen.", slot:"food"},
    {en:"A coffee with milk, please.", fl:"Einen Kaffee mit Milch, bitte."},
    {en:"To go, please.", fl:"Zum Mitnehmen, bitte."},
    {en:"Do you have free Wi-Fi?", fl:"Haben Sie kostenloses WLAN?"},
    {en:"Is this table free?", fl:"Ist dieser Tisch frei?"}
  ],
  hotel: [
    {en:"I need {E}.", fl:"Ich brauche {Nacc}.", slot:"hthing"},
    {en:"Excuse me, I can't find {E}.", fl:"Entschuldigung, ich kann {Nacc} nicht finden.", slot:"hthing"},
    {en:"Could you please check {E}?", fl:"Könnten Sie bitte {Nacc} überprüfen?", slot:"hthing"},
    {en:"Can I see {E}, please?", fl:"Kann ich bitte {Nacc} sehen?", slot:"hthing"},
    {en:"I am looking for {E}.", fl:"Ich suche {Nacc}.", slot:"hthing"},
    {en:"Can I get {E}, please?", fl:"Kann ich bitte {Nacc} bekommen?", slot:"hthing"},
    {en:"I have a reservation.", fl:"Ich habe eine Reservierung."},
    {en:"I would like to check in.", fl:"Ich möchte einchecken."},
    {en:"What time is breakfast?", fl:"Um wie viel Uhr gibt es Frühstück?"},
    {en:"I would like to check out, please.", fl:"Ich möchte bitte auschecken."}
  ],
  ski: [
    {en:"I love {E}!", fl:"Ich liebe {Nacc}!", slot:"wscen"},
    {en:"Do you see {E}?", fl:"Sehen Sie {Nacc}?", slot:"wscen"},
    {en:"Where can I find {E}?", fl:"Wo finde ich {Nacc}?", slot:"wgear"},
    {en:"I would like to rent {E}.", fl:"Ich möchte {Nacc} ausleihen.", slot:"wgear"},
    {en:"After skiing, I would like {E}.", fl:"Nach dem Skifahren hätte ich gern {Nacc}.", slot:"drink"},
    {en:"Can we order {E} here?", fl:"Können wir hier {Nacc} bestellen?", slot:"drink"},
    {en:"I would like to rent skis.", fl:"Ich möchte Ski ausleihen."},
    {en:"Where is the ski lift?", fl:"Wo ist der Skilift?"},
    {en:"How much does a day pass cost?", fl:"Was kostet eine Tageskarte?"},
    {en:"Is the slope open today?", fl:"Ist die Piste heute geöffnet?"}
  ],
  city: [
    {en:"Excuse me, where can I find {E}?", fl:"Entschuldigung, wo finde ich {Nacc}?", slot:"place"},
    {en:"We are looking for {E}.", fl:"Wir suchen {Nacc}.", slot:"place"},
    {en:"Can you show me {E} on the map?", fl:"Können Sie mir {Nacc} auf der Karte zeigen?", slot:"place"},
    {en:"I would like to take {E}.", fl:"Ich möchte {Nacc} nehmen.", slot:"trans"},
    {en:"Can I take {E} to the city center?", fl:"Kann ich {Nacc} ins Stadtzentrum nehmen?", slot:"trans"},
    {en:"Where do I wait for {E}?", fl:"Wo warte ich auf {Nacc}?", slot:"trans"},
    {en:"Excuse me, how do I get to the city center?", fl:"Entschuldigung, wie komme ich ins Stadtzentrum?"},
    {en:"Is it far from here?", fl:"Ist es weit von hier?"},
    {en:"Can you help me, please?", fl:"Können Sie mir bitte helfen?"},
    {en:"I am lost.", fl:"Ich habe mich verlaufen."}
  ],
  sights: [
    {en:"I would like to visit {E}.", fl:"Ich möchte {Nacc} besichtigen.", slot:"sight"},
    {en:"We would like to see {E}.", fl:"Wir möchten {Nacc} sehen.", slot:"sight"},
    {en:"Can we photograph {E}?", fl:"Können wir {Nacc} fotografieren?", slot:"sight"},
    {en:"Have you already seen {E}?", fl:"Haben Sie {Nacc} schon gesehen?", slot:"sight"},
    {en:"Can we take {E} to the old town?", fl:"Können wir {Nacc} in die Altstadt nehmen?", slot:"trans"},
    {en:"I'll take {E} back to the hotel.", fl:"Ich nehme {Nacc} zurück zum Hotel.", slot:"trans"},
    {en:"When does the tour start?", fl:"Wann beginnt die Führung?"},
    {en:"How much does the entrance cost?", fl:"Was kostet der Eintritt?"},
    {en:"Two tickets, please.", fl:"Zwei Eintrittskarten, bitte."},
    {en:"The view is beautiful.", fl:"Die Aussicht ist wunderschön."}
  ],
  airport: [
    {en:"Where can I find {E} here?", fl:"Wo finde ich hier {Nacc}?", slot:"place"},
    {en:"Excuse me, I am looking for {E}.", fl:"Entschuldigung, ich suche {Nacc}.", slot:"place"},
    {en:"After landing, I would like to take {E}.", fl:"Nach der Landung möchte ich {Nacc} nehmen.", slot:"trans"},
    {en:"How do I reach {E}?", fl:"Wie erreiche ich {Nacc}?", slot:"trans"},
    {en:"I missed {E}.", fl:"Ich habe {Nacc} verpasst.", slot:"trans"},
    {en:"Can I take {E} from the airport?", fl:"Kann ich {Nacc} vom Flughafen nehmen?", slot:"trans"},
    {en:"Here is my passport.", fl:"Hier ist mein Reisepass."},
    {en:"Where is my gate?", fl:"Wo ist mein Gate?"},
    {en:"When does boarding start?", fl:"Wann beginnt das Boarding?"},
    {en:"I would like a window seat, please.", fl:"Ich hätte gern einen Fensterplatz, bitte."}
  ],
  shopping: [
    {en:"I would like to buy {E}.", fl:"Ich möchte {Nacc} kaufen.", slot:"buy"},
    {en:"Where can I pay for {E}?", fl:"Wo kann ich {Nacc} bezahlen?", slot:"buy"},
    {en:"Can I take a look at {E}?", fl:"Kann ich mir {Nacc} ansehen?", slot:"buy"},
    {en:"I think I'll take {E}.", fl:"Ich glaube, ich nehme {Nacc}.", slot:"buy"},
    {en:"Do you have {E} in another color?", fl:"Haben Sie {Nacc} in einer anderen Farbe?", slot:"buy"},
    {en:"Can I exchange {E}?", fl:"Kann ich {Nacc} umtauschen?", slot:"buy"},
    {en:"How much does that cost?", fl:"Was kostet das?"},
    {en:"Can I pay by card?", fl:"Kann ich mit Karte zahlen?"},
    {en:"I'm just looking, thank you.", fl:"Ich schaue nur, danke."},
    {en:"That is too expensive.", fl:"Das ist zu teuer."}
  ]
};
// Italian sentence templates — 8 scenarios x 10 templates (6 slotted + 4 fixed).
// Placeholders: EN {E}="the <noun>", {Eb}=bare noun; IT {N}=noun with dictionary definite article, {Nb}=bare noun.
// All slotted frames are number/gender-agreement-free and avoid article-contracting prepositions.
window.QUIZ_SENT = window.QUIZ_SENT || {};
window.QUIZ_SENT.italian = {
  restaurant: [
    {en: "I would like {E}, please.", fl: "Vorrei {N}, per favore.", slot: "food"},
    {en: "I'll have {E}.", fl: "Prendo {N}.", slot: "food"},
    {en: "Can you bring me {E}?", fl: "Mi può portare {N}?", slot: "food"},
    {en: "Do you have {E}?", fl: "Avete {N}?", slot: "food"},
    {en: "For me, {E}, please.", fl: "Per me, {N}, per favore.", slot: "drink"},
    {en: "Can I have {E}?", fl: "Posso avere {N}?", slot: "drink"},
    {en: "A table for two, please.", fl: "Un tavolo per due, per favore."},
    {en: "The check, please.", fl: "Il conto, per favore."},
    {en: "The menu, please.", fl: "Il menù, per favore."},
    {en: "What do you recommend?", fl: "Cosa mi consiglia?"}
  ],
  coffee: [
    {en: "I'll have {E}, please.", fl: "Prendo {N}, per favore.", slot: "drink"},
    {en: "I would like {E} to go.", fl: "Vorrei {N} da portare via.", slot: "drink"},
    {en: "Can I also have {E}?", fl: "Posso avere anche {N}?", slot: "drink"},
    {en: "Do you also have {E}?", fl: "Avete anche {N}?", slot: "food"},
    {en: "I'll also take {E}.", fl: "Prendo anche {N}.", slot: "food"},
    {en: "Can you bring me {E}, please?", fl: "Mi può portare {N}, per favore?", slot: "food"},
    {en: "A coffee and a croissant, please.", fl: "Un caffè e un cornetto, per favore."},
    {en: "How much is it?", fl: "Quant'è?"},
    {en: "Do you have soy milk?", fl: "Avete latte di soia?"},
    {en: "Can I sit outside?", fl: "Posso sedermi fuori?"}
  ],
  hotel: [
    {en: "Where is {E}?", fl: "Dov'è {N}?", slot: "hthing"},
    {en: "I'm looking for {E}.", fl: "Cerco {N}.", slot: "hthing"},
    {en: "Can you show me {E}?", fl: "Mi può mostrare {N}?", slot: "hthing"},
    {en: "I can't find {E}.", fl: "Non trovo {N}.", slot: "hthing"},
    {en: "There is a problem with {E}.", fl: "C'è un problema con {N}.", slot: "hthing"},
    {en: "Can you check {E}, please?", fl: "Può controllare {N}, per favore?", slot: "hthing"},
    {en: "I have a reservation.", fl: "Ho una prenotazione."},
    {en: "What time is breakfast?", fl: "A che ora è la colazione?"},
    {en: "What time is check-out?", fl: "A che ora è il check-out?"},
    {en: "Can you call a taxi for me, please?", fl: "Mi può chiamare un taxi, per favore?"}
  ],
  ski: [
    {en: "Excuse me, I'm looking for {E}.", fl: "Scusi, cerco {N}.", slot: "wgear"},
    {en: "Look at {E}!", fl: "Guardi {N}!", slot: "wscen"},
    {en: "Can you point {E} out to me?", fl: "Mi può indicare {N}?", slot: "wscen"},
    {en: "I would like to rent {E}.", fl: "Vorrei noleggiare {N}.", slot: "wgear"},
    {en: "After skiing, I'll have {E}.", fl: "Dopo lo sci, prendo {N}.", slot: "drink"},
    {en: "Now I would like {E}.", fl: "Adesso vorrei {N}.", slot: "drink"},
    {en: "How much is a ski pass?", fl: "Quanto costa uno skipass?"},
    {en: "Is the slope open?", fl: "La pista è aperta?"},
    {en: "It's very cold today.", fl: "Oggi fa molto freddo."},
    {en: "I would like to rent skis.", fl: "Vorrei noleggiare gli sci."}
  ],
  city: [
    {en: "Excuse me, where is {E}?", fl: "Scusi, dov'è {N}?", slot: "place"},
    {en: "I'm looking for {E}, can you help me?", fl: "Cerco {N}, mi può aiutare?", slot: "place"},
    {en: "Can you show me {E} on the map?", fl: "Mi può mostrare {N} sulla mappa?", slot: "place"},
    {en: "Where can I catch {E}?", fl: "Dove posso prendere {N}?", slot: "trans"},
    {en: "Today I'll take {E}.", fl: "Oggi prendo {N}.", slot: "trans"},
    {en: "We can take {E}.", fl: "Possiamo prendere {N}.", slot: "trans"},
    {en: "How much does a ticket cost?", fl: "Quanto costa un biglietto?"},
    {en: "Is it far from here?", fl: "È lontano da qui?"},
    {en: "Can you help me, please?", fl: "Mi può aiutare, per favore?"},
    {en: "Which way is the center?", fl: "Da che parte è il centro?"}
  ],
  sights: [
    {en: "I would like to see {E}.", fl: "Vorrei vedere {N}.", slot: "sight"},
    {en: "We would like to visit {E}.", fl: "Vorremmo visitare {N}.", slot: "sight"},
    {en: "Can we photograph {E}?", fl: "Possiamo fotografare {N}?", slot: "sight"},
    {en: "Where is {E} located?", fl: "Dove si trova {N}?", slot: "sight"},
    {en: "To get there, we take {E}.", fl: "Per arrivare, prendiamo {N}.", slot: "trans"},
    {en: "Is it better to take {E}?", fl: "È meglio prendere {N}?", slot: "trans"},
    {en: "How much does the entrance cost?", fl: "Quanto costa l'ingresso?"},
    {en: "What time does it open?", fl: "A che ora apre?"},
    {en: "Two tickets, please.", fl: "Due biglietti, per favore."},
    {en: "Can you take a photo of us, please?", fl: "Ci può fare una foto, per favore?"}
  ],
  airport: [
    {en: "I'm waiting for {E}.", fl: "Aspetto {N}.", slot: "trans"},
    {en: "I have to take {E}.", fl: "Devo prendere {N}.", slot: "trans"},
    {en: "What time does {E} leave?", fl: "A che ora parte {N}?", slot: "trans"},
    {en: "Where do I find {E}?", fl: "Dove trovo {N}?", slot: "place"},
    {en: "Please, where is {E}?", fl: "Per favore, dov'è {N}?", slot: "place"},
    {en: "Sorry, I can't find {E}.", fl: "Mi scusi, non trovo {N}.", slot: "place"},
    {en: "Where is the gate?", fl: "Dov'è il gate?"},
    {en: "Here is my passport.", fl: "Ecco il mio passaporto."},
    {en: "My flight is delayed.", fl: "Il mio volo è in ritardo."},
    {en: "Where is baggage claim?", fl: "Dov'è il ritiro bagagli?"}
  ],
  shopping: [
    {en: "I would like to buy {E}.", fl: "Vorrei comprare {N}.", slot: "buy"},
    {en: "Can I see {E}, please?", fl: "Posso vedere {N}, per favore?", slot: "buy"},
    {en: "I'll take {E}, thank you.", fl: "Prendo {N}, grazie.", slot: "buy"},
    {en: "Do you have {E} in another color?", fl: "Avete {N} in un altro colore?", slot: "buy"},
    {en: "I'm looking for {E} for a gift.", fl: "Cerco {N} per un regalo.", slot: "buy"},
    {en: "Can you wrap {E}, please?", fl: "Può incartare {N}, per favore?", slot: "buy"},
    {en: "How much does it cost?", fl: "Quanto costa?"},
    {en: "It's too expensive.", fl: "È troppo caro."},
    {en: "Can I pay by card?", fl: "Posso pagare con la carta?"},
    {en: "I'm just looking, thank you.", fl: "Sto solo guardando, grazie."}
  ]
};
// Dutch sentence templates for the language quiz app.
// {E} = "the <noun>" (EN), {Eb} = bare noun (EN)
// {N} = noun WITH dictionary article (NL), {Nb} = bare noun (NL)
window.QUIZ_SENT = window.QUIZ_SENT || {};
window.QUIZ_SENT.dutch = {
  restaurant: [
    { en: "I would like {E}, please.", fl: "Ik wil graag {N}, alstublieft.", slot: "food" },
    { en: "I'll take {E}.", fl: "Ik neem {N}.", slot: "food" },
    { en: "Do you have {Eb}?", fl: "Heeft u {Nb}?", slot: "food" },
    { en: "Can I order {E}?", fl: "Kan ik {N} bestellen?", slot: "food" },
    { en: "Can I have {E}, please?", fl: "Mag ik {N}, alstublieft?", slot: "drink" },
    { en: "I would like to order {E}.", fl: "Ik wil graag {N} bestellen.", slot: "drink" },
    { en: "The bill, please.", fl: "De rekening, alstublieft." },
    { en: "A table for two, please.", fl: "Een tafel voor twee, alstublieft." },
    { en: "The menu, please.", fl: "De menukaart, alstublieft." },
    { en: "It was delicious.", fl: "Het was heerlijk." }
  ],
  coffee: [
    { en: "Can I get {E} to go?", fl: "Mag ik {N} om mee te nemen?", slot: "drink" },
    { en: "For me {E}, please.", fl: "Voor mij {N}, alstublieft.", slot: "drink" },
    { en: "I would like {E}.", fl: "Ik zou graag {N} willen.", slot: "drink" },
    { en: "Do you also have {Eb}?", fl: "Heeft u ook {Nb}?", slot: "drink" },
    { en: "I'll take {E} with it.", fl: "Ik neem {N} erbij.", slot: "food" },
    { en: "Can I also have {E}?", fl: "Mag ik ook {N}?", slot: "food" },
    { en: "A coffee with milk, please.", fl: "Een koffie met melk, alstublieft." },
    { en: "Do you have Wi-Fi here?", fl: "Heeft u hier wifi?" },
    { en: "With sugar, please.", fl: "Met suiker, alstublieft." },
    { en: "Is this seat free?", fl: "Is deze plaats vrij?" }
  ],
  hotel: [
    { en: "Where is {E}?", fl: "Waar is {N}?", slot: "hthing" },
    { en: "I'm looking for {E}.", fl: "Ik zoek {N}.", slot: "hthing" },
    { en: "There is a problem with {E}.", fl: "Er is een probleem met {N}.", slot: "hthing" },
    { en: "I can't find {E}.", fl: "Ik kan {N} niet vinden.", slot: "hthing" },
    { en: "Can you show me {E}?", fl: "Kunt u mij {N} laten zien?", slot: "hthing" },
    { en: "I need {E}.", fl: "Ik heb {N} nodig.", slot: "hthing" },
    { en: "What time is breakfast?", fl: "Hoe laat is het ontbijt?" },
    { en: "I have a reservation.", fl: "Ik heb een reservering." },
    { en: "I would like to check out.", fl: "Ik wil graag uitchecken." },
    { en: "Can you help me, please?", fl: "Kunt u mij helpen, alstublieft?" }
  ],
  ski: [
    { en: "I see {E}.", fl: "Ik zie {N}.", slot: "wscen" },
    { en: "Today I need {E}.", fl: "Vandaag heb ik {N} nodig.", slot: "wgear" },
    { en: "I would like to rent {E}.", fl: "Ik wil graag {N} huren.", slot: "wgear" },
    { en: "I want to take a photo of {E}.", fl: "Ik wil een foto van {N} maken.", slot: "wscen" },
    { en: "After skiing I drink {Eb}.", fl: "Na het skiën drink ik {Nb}.", slot: "drink" },
    { en: "Can I order {Eb} here?", fl: "Kan ik hier {Nb} bestellen?", slot: "drink" },
    { en: "It is cold outside.", fl: "Het is koud buiten." },
    { en: "I want to rent skis.", fl: "Ik wil ski's huren." },
    { en: "Where is the ski lift?", fl: "Waar is de skilift?" },
    { en: "Be careful, it is slippery.", fl: "Voorzichtig, het is glad." }
  ],
  city: [
    { en: "Excuse me, where is {E}?", fl: "Pardon, waar is {N}?", slot: "place" },
    { en: "How do I get to {E}?", fl: "Hoe kom ik bij {N}?", slot: "place" },
    { en: "Is {E} far from here?", fl: "Is {N} ver hier vandaan?", slot: "place" },
    { en: "I take {E} to the center.", fl: "Ik neem {N} naar het centrum.", slot: "trans" },
    { en: "Where can I take {E}?", fl: "Waar kan ik {N} nemen?", slot: "trans" },
    { en: "Can I get there by {Eb}?", fl: "Kan ik daar met {N} komen?", slot: "trans" },
    { en: "I am lost.", fl: "Ik ben verdwaald." },
    { en: "Is it far on foot?", fl: "Is het ver lopen?" },
    { en: "One ticket, please.", fl: "Eén kaartje, alstublieft." },
    { en: "Where is the city center?", fl: "Waar is het centrum?" }
  ],
  sights: [
    { en: "I want to visit {E}.", fl: "Ik wil {N} bezoeken.", slot: "sight" },
    { en: "How old is {E}?", fl: "Hoe oud is {N}?", slot: "sight" },
    { en: "Is {E} open today?", fl: "Is {N} vandaag open?", slot: "sight" },
    { en: "May I take a photo of {E} here?", fl: "Mag ik hier een foto van {N} maken?", slot: "sight" },
    { en: "We take {E} there.", fl: "We nemen {N} daarnaartoe.", slot: "trans" },
    { en: "Where does {E} leave from?", fl: "Waar vertrekt {N}?", slot: "trans" },
    { en: "What a beautiful view!", fl: "Wat een mooi uitzicht!" },
    { en: "How much is the entrance?", fl: "Hoeveel kost de entree?" },
    { en: "Is there a guided tour?", fl: "Is er een rondleiding?" },
    { en: "The city is very beautiful.", fl: "De stad is erg mooi." }
  ],
  airport: [
    { en: "I travel by {Eb}.", fl: "Ik reis met {N}.", slot: "trans" },
    { en: "Is {E} on time?", fl: "Is {N} op tijd?", slot: "trans" },
    { en: "We wait for {E}.", fl: "We wachten op {N}.", slot: "trans" },
    { en: "Is there a bus to {E}?", fl: "Is er een bus naar {N}?", slot: "place" },
    { en: "I have to go to {E}.", fl: "Ik moet naar {N}.", slot: "place" },
    { en: "Is {E} nearby?", fl: "Is {N} dichtbij?", slot: "place" },
    { en: "Where is the gate?", fl: "Waar is de gate?" },
    { en: "Here is my passport.", fl: "Hier is mijn paspoort." },
    { en: "My flight is delayed.", fl: "Mijn vlucht is vertraagd." },
    { en: "I have one suitcase.", fl: "Ik heb één koffer." }
  ],
  shopping: [
    { en: "Excuse me, I'm looking for {E}.", fl: "Pardon, ik zoek {N}.", slot: "buy" },
    { en: "Can I try on {E}?", fl: "Mag ik {N} passen?", slot: "buy" },
    { en: "Then I'll take {E}.", fl: "Dan neem ik {N}.", slot: "buy" },
    { en: "Can I see {E}?", fl: "Mag ik {N} zien?", slot: "buy" },
    { en: "Do you have {E} in another color?", fl: "Heeft u {N} in een andere kleur?", slot: "buy" },
    { en: "I really like {E}.", fl: "Ik vind {N} erg mooi.", slot: "buy" },
    { en: "How much does this cost?", fl: "Hoeveel kost dit?" },
    { en: "Can I pay by card?", fl: "Kan ik met de kaart betalen?" },
    { en: "That is too expensive.", fl: "Dat is te duur." },
    { en: "I'm just looking.", fl: "Ik kijk alleen even." }
  ]
};
// Sentence templates — Latin American Spanish (usted/ustedes register)
// {E} = "the <noun>" (EN), {Eb} = bare noun (EN)
// {N} = noun with dictionary definite article (ES), {Nb} = bare noun (ES)
window.QUIZ_SENT = window.QUIZ_SENT || {};
window.QUIZ_SENT.spanish = {
  restaurant: [
    { en: "I would like {E}, please.", fl: "Quisiera {N}, por favor.", slot: "food" },
    { en: "Can you bring me {E}?", fl: "¿Me puede traer {N}?", slot: "food" },
    { en: "Do you recommend {E}?", fl: "¿Me recomienda {N}?", slot: "food" },
    { en: "I'll have {E}, please.", fl: "Voy a tomar {N}, por favor.", slot: "drink" },
    { en: "Do you have {Eb}?", fl: "¿Tiene {Nb}?", slot: "drink" },
    { en: "My friend wants {E}.", fl: "Mi amigo quiere {N}.", slot: "drink" },
    { en: "The check, please.", fl: "La cuenta, por favor." },
    { en: "A table for two, please.", fl: "Una mesa para dos, por favor." },
    { en: "The menu, please.", fl: "El menú, por favor." },
    { en: "Everything was delicious.", fl: "Todo estuvo delicioso." }
  ],
  coffee: [
    { en: "I would like {E} to go.", fl: "Quisiera {N} para llevar.", slot: "drink" },
    { en: "Can I have {E}, please?", fl: "¿Me da {N}, por favor?", slot: "drink" },
    { en: "I'm going to order {E}.", fl: "Voy a pedir {N}.", slot: "drink" },
    { en: "Do you sell {Eb} here?", fl: "¿Venden {Nb} aquí?", slot: "food" },
    { en: "I want {E}, please.", fl: "Quiero {N}, por favor.", slot: "food" },
    { en: "We are going to share {E}.", fl: "Vamos a compartir {N}.", slot: "food" },
    { en: "A coffee with milk, please.", fl: "Un café con leche, por favor." },
    { en: "With sugar, please.", fl: "Con azúcar, por favor." },
    { en: "Do you have Wi-Fi?", fl: "¿Tienen wifi?" },
    { en: "Can I pay by card?", fl: "¿Puedo pagar con tarjeta?" }
  ],
  hotel: [
    { en: "Where is {E}?", fl: "¿Dónde está {N}?", slot: "hthing" },
    { en: "I need {E}.", fl: "Necesito {N}.", slot: "hthing" },
    { en: "There is a problem with {E}.", fl: "Hay un problema con {N}.", slot: "hthing" },
    { en: "Can you check {E}, please?", fl: "¿Puede revisar {N}, por favor?", slot: "hthing" },
    { en: "I can't find {E}.", fl: "No encuentro {N}.", slot: "hthing" },
    { en: "I would like to change {E}.", fl: "Quisiera cambiar {N}.", slot: "hthing" },
    { en: "What time is breakfast?", fl: "¿A qué hora es el desayuno?" },
    { en: "I have a reservation.", fl: "Tengo una reservación." },
    { en: "What time is checkout?", fl: "¿A qué hora es la salida?" },
    { en: "The elevator doesn't work.", fl: "El elevador no funciona." }
  ],
  ski: [
    { en: "I want to see {E}.", fl: "Quiero ver {N}.", slot: "wscen" },
    { en: "I want to rent {E}.", fl: "Quiero alquilar {N}.", slot: "wgear" },
    { en: "Be careful with {E}!", fl: "¡Cuidado con {N}!", slot: "wscen" },
    { en: "Where can I find {E}?", fl: "¿Dónde puedo encontrar {N}?", slot: "wgear" },
    { en: "After skiing, I want {E}.", fl: "Después de esquiar, quiero {N}.", slot: "drink" },
    { en: "Can you bring us {E}?", fl: "¿Nos puede traer {N}?", slot: "drink" },
    { en: "How much is a ski pass?", fl: "¿Cuánto cuesta el pase de esquí?" },
    { en: "Where can I rent skis?", fl: "¿Dónde puedo alquilar esquís?" },
    { en: "What time do the slopes close?", fl: "¿A qué hora cierran las pistas?" },
    { en: "I am a beginner.", fl: "Soy principiante." }
  ],
  city: [
    { en: "I prefer to go by {Eb}.", fl: "Prefiero ir en {Nb}.", slot: "trans" },
    { en: "We are going to take {E}.", fl: "Vamos a tomar {N}.", slot: "trans" },
    { en: "Is it possible to go by {Eb}?", fl: "¿Se puede ir en {Nb}?", slot: "trans" },
    { en: "I'm looking for {E}.", fl: "Busco {N}.", slot: "place" },
    { en: "Is {E} far from here?", fl: "¿Está lejos de aquí {N}?", slot: "place" },
    { en: "Can you take me to {E}?", fl: "¿Me puede llevar hasta {N}?", slot: "place" },
    { en: "How much does a ticket cost?", fl: "¿Cuánto cuesta un boleto?" },
    { en: "I got lost.", fl: "Me perdí." },
    { en: "Is it far on foot?", fl: "¿Está lejos a pie?" },
    { en: "Can you help me?", fl: "¿Me puede ayudar?" }
  ],
  sights: [
    { en: "I want to visit {E}.", fl: "Quiero visitar {N}.", slot: "sight" },
    { en: "Is it possible to visit {E}?", fl: "¿Se puede visitar {N}?", slot: "sight" },
    { en: "I want to photograph {E}.", fl: "Quiero fotografiar {N}.", slot: "sight" },
    { en: "From here you can see {E}.", fl: "Desde aquí se ve {N}.", slot: "sight" },
    { en: "Can I get there by {Eb}?", fl: "¿Puedo llegar en {Nb}?", slot: "trans" },
    { en: "We are going to go by {Eb}.", fl: "Vamos a ir en {Nb}.", slot: "trans" },
    { en: "How much is the entrance?", fl: "¿Cuánto cuesta la entrada?" },
    { en: "Is there a guided tour?", fl: "¿Hay una visita guiada?" },
    { en: "Can I take photos here?", fl: "¿Puedo tomar fotos aquí?" },
    { en: "How beautiful!", fl: "¡Qué hermoso!" }
  ],
  airport: [
    { en: "At what time does {E} arrive?", fl: "¿A qué hora llega {N}?", slot: "trans" },
    { en: "I'm going to travel by {Eb}.", fl: "Voy a viajar en {Nb}.", slot: "trans" },
    { en: "Where can I take {E}?", fl: "¿Dónde puedo tomar {N}?", slot: "trans" },
    { en: "We have to wait for {E}.", fl: "Tenemos que esperar {N}.", slot: "trans" },
    { en: "Where is {E}, please?", fl: "¿Dónde está {N}, por favor?", slot: "place" },
    { en: "Is {E} close by?", fl: "¿Está cerca {N}?", slot: "place" },
    { en: "Where is the boarding gate?", fl: "¿Dónde está la puerta de embarque?" },
    { en: "Here is my passport.", fl: "Aquí está mi pasaporte." },
    { en: "I lost my suitcase.", fl: "Perdí mi maleta." },
    { en: "What time does boarding start?", fl: "¿A qué hora empieza el abordaje?" }
  ],
  shopping: [
    { en: "I want to buy {E}.", fl: "Quiero comprar {N}.", slot: "buy" },
    { en: "Can you show me {E}?", fl: "¿Me puede mostrar {N}?", slot: "buy" },
    { en: "Can I see {E}, please?", fl: "¿Puedo ver {N}, por favor?", slot: "buy" },
    { en: "I'll take {E}.", fl: "Me llevo {N}.", slot: "buy" },
    { en: "I'm looking for {E} for my wife.", fl: "Busco {N} para mi esposa.", slot: "buy" },
    { en: "How much do I owe you for {E}?", fl: "¿Cuánto le debo por {N}?", slot: "buy" },
    { en: "How much is it?", fl: "¿Cuánto cuesta?" },
    { en: "It's very expensive.", fl: "Es muy caro." },
    { en: "Do you accept credit cards?", fl: "¿Aceptan tarjetas de crédito?" },
    { en: "I'm just looking, thank you.", fl: "Solo estoy mirando, gracias." }
  ]
};
window.QUIZ_SENT.irish = {
  restaurant: [
    {en:"I would like {Eb}, please.", fl:"Ba mhaith liom {Nb}, le do thoil.", slot:"food"},
    {en:"Do you have {Eb}?", fl:"An bhfuil {Nb} agaibh?", slot:"drink"},
    {en:"I don't see {Eb} on the menu.", fl:"Ní fheicim {Nb} ar an mbiachlár.", slot:"food"},
    {en:"I will have {Eb}, please.", fl:"Beidh {Nb} agam, le do thoil.", slot:"food"},
    {en:"Can I get {Eb}, please?", fl:"An féidir liom {Nb} a fháil, le do thoil?", slot:"drink"},
    {en:"I want {Eb}, please.", fl:"Tá {Nb} uaim, le do thoil.", slot:"drink"},
    {en:"The bill, please.", fl:"An bille, le do thoil."},
    {en:"A table for two, please.", fl:"Bord do bheirt, le do thoil."},
    {en:"The food is very tasty.", fl:"Tá an bia an-bhlasta."},
    {en:"Where are the toilets?", fl:"Cá bhfuil na leithris?"}
  ],
  coffee: [
    {en:"I would like {Eb} to take away.", fl:"Ba mhaith liom {Nb} le tabhairt liom.", slot:"drink"},
    {en:"Can I get {Eb} here?", fl:"An féidir liom {Nb} a fháil anseo?", slot:"food"},
    {en:"Do you have {Eb} this morning?", fl:"An bhfuil {Nb} agaibh ar maidin?", slot:"food"},
    {en:"I want {Eb}, without sugar.", fl:"Tá {Nb} uaim, gan siúcra.", slot:"drink"},
    {en:"I will have {Eb} and a scone.", fl:"Beidh {Nb} agam agus bonnóg.", slot:"drink"},
    {en:"My friend wants {Eb} too.", fl:"Tá {Nb} ó mo chara freisin.", slot:"drink"},
    {en:"A black coffee, please.", fl:"Caife dubh, le do thoil."},
    {en:"How much is that?", fl:"Cé mhéad atá air sin?"},
    {en:"Do you have Wi-Fi here?", fl:"An bhfuil Wi-Fi agaibh anseo?"},
    {en:"The coffee is very good here.", fl:"Tá an caife an-mhaith anseo."}
  ],
  hotel: [
    {en:"I need {E} for the room.", fl:"Tá {Nb} uaim don seomra.", slot:"hthing"},
    {en:"Is {E} available?", fl:"An bhfuil {Nb} ar fáil?", slot:"hthing"},
    {en:"Can I get another {Eb}?", fl:"An féidir liom {Nb} eile a fháil?", slot:"hthing"},
    {en:"Is {E} clean?", fl:"An bhfuil {Nb} glan?", slot:"hthing"},
    {en:"I can't find {E}.", fl:"Ní féidir liom {Nb} a aimsiú.", slot:"hthing"},
    {en:"I don't see {E} in the room.", fl:"Ní fheicim {Nb} sa seomra.", slot:"hthing"},
    {en:"I have a reservation.", fl:"Tá áirithint agam."},
    {en:"What time is breakfast?", fl:"Cén t-am a bhíonn an bricfeasta?"},
    {en:"I am staying for two nights.", fl:"Tá mé ag fanacht ar feadh dhá oíche."},
    {en:"Where is the lift?", fl:"Cá bhfuil an t-ardaitheoir?"}
  ],
  ski: [
    {en:"I need {E} today.", fl:"Teastaíonn {Nb} uaim inniu.", slot:"wgear"},
    {en:"I see {E} outside.", fl:"Feicim {Nb} amuigh.", slot:"wscen"},
    {en:"Do you have {E} for rent?", fl:"An bhfuil {Nb} ar cíos agaibh?", slot:"wgear"},
    {en:"Well, {E} is beautiful today.", fl:"Bhuel, tá {Nb} go hálainn inniu.", slot:"wscen"},
    {en:"I want {Eb} by the fire.", fl:"Tá {Nb} uaim cois tine.", slot:"drink"},
    {en:"Can I get {Eb} at the lodge?", fl:"An féidir liom {Nb} a fháil sa lóiste?", slot:"drink"},
    {en:"It is very cold today.", fl:"Tá sé an-fhuar inniu."},
    {en:"Is the slope open?", fl:"An bhfuil an fána oscailte?"},
    {en:"Where is the ski lift?", fl:"Cá bhfuil an t-ardaitheoir sciála?"},
    {en:"The snow is lovely today.", fl:"Tá an sneachta go hálainn inniu."}
  ],
  city: [
    {en:"Is {E} nearby?", fl:"An bhfuil {Nb} in aice láimhe?", slot:"place"},
    {en:"How do I get to {E}?", fl:"Conas a théim go dtí {Nb}?", slot:"place"},
    {en:"Does {E} stop here?", fl:"An stopann {Nb} anseo?", slot:"trans"},
    {en:"When does {E} leave?", fl:"Cathain a imíonn {Nb}?", slot:"trans"},
    {en:"I will take {E} to the city centre.", fl:"Tógfaidh mé {Nb} go lár na cathrach.", slot:"trans"},
    {en:"I see {E} coming.", fl:"Feicim {Nb} ag teacht.", slot:"trans"},
    {en:"Where is the bus stop?", fl:"Cá bhfuil stad an bhus?"},
    {en:"One ticket, please.", fl:"Ticéad amháin, le do thoil."},
    {en:"Is it far from here?", fl:"An bhfuil sé i bhfad as seo?"},
    {en:"I am lost.", fl:"Tá mé ar strae."}
  ],
  sights: [
    {en:"I would like to see {E}.", fl:"Ba mhaith liom {Nb} a fheiceáil.", slot:"sight"},
    {en:"Is {E} open today?", fl:"An bhfuil {Nb} oscailte inniu?", slot:"sight"},
    {en:"I see {E} over there.", fl:"Feicim {Nb} thall ansin.", slot:"sight"},
    {en:"When does {E} return?", fl:"Cathain a fhilleann {Nb}?", slot:"trans"},
    {en:"Can I find {E} on the map?", fl:"An féidir liom {Nb} a aimsiú ar an léarscáil?", slot:"sight"},
    {en:"Does {E} go to the old town?", fl:"An dtéann {Nb} go dtí an seanbhaile?", slot:"trans"},
    {en:"The view is beautiful.", fl:"Tá an radharc go hálainn."},
    {en:"How much is a ticket?", fl:"Cé mhéad atá ar thicéad?"},
    {en:"Can I take a photo here?", fl:"An féidir liom grianghraf a thógáil anseo?"},
    {en:"What time does it close?", fl:"Cén t-am a dhúnann sé?"}
  ],
  airport: [
    {en:"When does {E} arrive?", fl:"Cathain a thagann {Nb}?", slot:"trans"},
    {en:"Is {E} late?", fl:"An bhfuil {Nb} déanach?", slot:"trans"},
    {en:"Where can I find {E}?", fl:"Cá bhfaighidh mé {Nb}?", slot:"place"},
    {en:"Is {E} near the airport?", fl:"An bhfuil {Nb} in aice leis an aerfort?", slot:"place"},
    {en:"Does {E} go to the airport?", fl:"An dtéann {Nb} chuig an aerfort?", slot:"trans"},
    {en:"I will get {E} outside.", fl:"Gheobhaidh mé {Nb} taobh amuigh.", slot:"trans"},
    {en:"Where is the gate?", fl:"Cá bhfuil an geata?"},
    {en:"Here is my passport.", fl:"Seo é mo phas."},
    {en:"I have one suitcase.", fl:"Tá cás amháin agam."},
    {en:"The flight is delayed.", fl:"Tá moill ar an eitilt."}
  ],
  shopping: [
    {en:"I would like to buy {E}.", fl:"Ba mhaith liom {Nb} a cheannach.", slot:"buy"},
    {en:"Do you have {E} in this shop?", fl:"An bhfuil {Nb} agaibh sa siopa seo?", slot:"buy"},
    {en:"How much for {E}?", fl:"Cé mhéad a chosnaíonn {Nb}?", slot:"buy"},
    {en:"Show me {E}, please.", fl:"Taispeáin {Nb} dom, le do thoil.", slot:"buy"},
    {en:"I will take {E}, thanks.", fl:"Tógfaidh mé {Nb}, go raibh maith agat.", slot:"buy"},
    {en:"I need {E} for the trip.", fl:"Teastaíonn {Nb} uaim don turas.", slot:"buy"},
    {en:"I am only looking, thanks.", fl:"Níl mé ach ag féachaint, go raibh maith agat."},
    {en:"Do you take cards?", fl:"An nglacann sibh le cártaí?"},
    {en:"It is too expensive.", fl:"Tá sé ródhaor."},
    {en:"Where do I pay?", fl:"Cá n-íocfaidh mé?"}
  ]
};
// Japanese sentence templates for the language quiz app.
// fl is KANA ONLY (hiragana + katakana for loanwords) — no kanji, no spaces.
// Placeholders: EN {E} = "the <noun>", {Eb} = bare noun; JA {Nb} = stored kana noun.
window.QUIZ_SENT = window.QUIZ_SENT || {};
window.QUIZ_SENT.japanese = {
  restaurant: [
    {en:"Excuse me, could I have {E}, please?", fl:"すみません、{Nb}をください。", slot:"food"},
    {en:"Do you have {Eb} on the menu?", fl:"メニューに{Nb}はありますか。", slot:"food"},
    {en:"Excuse me, what is the price of {E}?", fl:"すみません、{Nb}はいくらですか。", slot:"food"},
    {en:"I like {Eb} very much.", fl:"わたしは{Nb}がだいすきです。", slot:"drink"},
    {en:"I will drink {Eb}.", fl:"わたしは{Nb}をのみます。", slot:"drink"},
    {en:"One more glass of {Eb}, please.", fl:"もういっぱい、{Nb}をおねがいします。", slot:"drink"},
    {en:"The check, please.", fl:"おかいけいをおねがいします。"},
    {en:"It is very delicious.", fl:"とてもおいしいです。"},
    {en:"Thank you for the meal.", fl:"ごちそうさまでした。"},
    {en:"Do you have an English menu?", fl:"えいごのメニューはありますか。"}
  ],
  coffee: [
    {en:"I will have {Eb}.", fl:"わたしは{Nb}にします。", slot:"drink"},
    {en:"Do you have {Eb} at this shop?", fl:"このおみせに{Nb}はありますか。", slot:"drink"},
    {en:"My friend will drink {Eb}.", fl:"ともだちは{Nb}をのみます。", slot:"drink"},
    {en:"And {Eb} as well, please.", fl:"それから、{Nb}もおねがいします。", slot:"food"},
    {en:"I will eat {Eb} here.", fl:"ここで{Nb}をたべます。", slot:"food"},
    {en:"I want to eat {Eb}.", fl:"わたしは{Nb}がたべたいです。", slot:"food"},
    {en:"To go, please.", fl:"もちかえりでおねがいします。"},
    {en:"A small size, please.", fl:"ちいさいサイズをおねがいします。"},
    {en:"Do you have sugar?", fl:"さとうはありますか。"},
    {en:"Where is the restroom?", fl:"トイレはどこですか。"}
  ],
  hotel: [
    {en:"Excuse me, there is no {Eb}.", fl:"すみません、{Nb}がありません。", slot:"hthing"},
    {en:"A new {Eb}, please.", fl:"あたらしい{Nb}をおねがいします。", slot:"hthing"},
    {en:"This {Eb} is old.", fl:"この{Nb}はふるいです。", slot:"hthing"},
    {en:"Where is my {Eb}?", fl:"わたしの{Nb}はどこですか。", slot:"hthing"},
    {en:"This {Eb} is a little small.", fl:"この{Nb}はすこしちいさいです。", slot:"hthing"},
    {en:"Is that {Eb} clean?", fl:"その{Nb}はきれいですか。", slot:"hthing"},
    {en:"Check-in, please.", fl:"チェックインをおねがいします。"},
    {en:"What time is breakfast?", fl:"あさごはんはなんじですか。"},
    {en:"What time is check-out?", fl:"チェックアウトはなんじですか。"},
    {en:"Do you have Wi-Fi?", fl:"ワイファイはありますか。"}
  ],
  ski: [
    {en:"Please take a look at {E}.", fl:"ちょっと{Nb}をみてください。", slot:"wscen"},
    {en:"Excuse me, I am looking for {E}.", fl:"すみません、{Nb}をさがしています。", slot:"wgear"},
    {en:"You can see {E} from here.", fl:"ここから{Nb}がみえます。", slot:"wscen"},
    {en:"Excuse me, I would like to rent {E}.", fl:"すみません、{Nb}をかりたいです。", slot:"wgear"},
    {en:"After skiing, I will drink {Eb}.", fl:"スキーのあとで{Nb}をのみます。", slot:"drink"},
    {en:"Is there {Eb} at the lodge?", fl:"ロッジに{Nb}はありますか。", slot:"drink"},
    {en:"I will ski today.", fl:"きょうはスキーをします。"},
    {en:"It is very cold.", fl:"とてもさむいです。"},
    {en:"A lift ticket, please.", fl:"リフトのチケットをおねがいします。"},
    {en:"Please be careful.", fl:"きをつけてください。"}
  ],
  city: [
    {en:"Let's go together by {Eb}.", fl:"いっしょに{Nb}でいきましょう。", slot:"trans"},
    {en:"I will go to the hotel by {Eb}.", fl:"ホテルまで{Nb}でいきます。", slot:"trans"},
    {en:"I want to ride {E}.", fl:"わたしは{Nb}にのりたいです。", slot:"trans"},
    {en:"Excuse me, where is {E}?", fl:"すみません、{Nb}はどこですか。", slot:"place"},
    {en:"Is {E} near here?", fl:"このちかくに{Nb}はありますか。", slot:"place"},
    {en:"Tomorrow I will go to {E}.", fl:"あした、{Nb}にいきます。", slot:"place"},
    {en:"How much is the fare?", fl:"りょうきんはいくらですか。"},
    {en:"Please stop here.", fl:"ここでとまってください。"},
    {en:"Please turn right.", fl:"みぎにまがってください。"},
    {en:"Is it far from here?", fl:"ここからとおいですか。"}
  ],
  sights: [
    {en:"I want to see {E}.", fl:"わたしは{Nb}がみたいです。", slot:"sight"},
    {en:"Is this {Eb} famous?", fl:"この{Nb}はゆうめいですか。", slot:"sight"},
    {en:"Let's take a picture of {E} here.", fl:"ここで{Nb}のしゃしんをとりましょう。", slot:"sight"},
    {en:"That {Eb} over there is beautiful, isn't it?", fl:"あの{Nb}はきれいですね。", slot:"sight"},
    {en:"Can we go there by {Eb}?", fl:"そこまで{Nb}でいけますか。", slot:"trans"},
    {en:"Shall we all go by {Eb}?", fl:"みんなで{Nb}でいきませんか。", slot:"trans"},
    {en:"How much is the entrance fee?", fl:"にゅうじょうりょうはいくらですか。"},
    {en:"Please take a photo.", fl:"しゃしんをとってください。"},
    {en:"What time does it open?", fl:"なんじにあきますか。"},
    {en:"It is a beautiful view, isn't it?", fl:"きれいなけしきですね。"}
  ],
  airport: [
    {en:"We came by {Eb}.", fl:"わたしたちは{Nb}できました。", slot:"trans"},
    {en:"Does this {Eb} go to the city?", fl:"この{Nb}はまちにいきますか。", slot:"trans"},
    {en:"I will get on {E} from here.", fl:"ここから{Nb}にのります。", slot:"trans"},
    {en:"I am looking for {E}.", fl:"わたしは{Nb}をさがしています。", slot:"place"},
    {en:"Is {E} far from the airport?", fl:"くうこうから{Nb}はとおいですか。", slot:"place"},
    {en:"Excuse me, please go to {E}.", fl:"すみません、{Nb}までいってください。", slot:"place"},
    {en:"Here is my passport.", fl:"パスポートです。"},
    {en:"Where is the check-in counter?", fl:"チェックインカウンターはどこですか。"},
    {en:"A window seat, please.", fl:"まどがわのせきをおねがいします。"},
    {en:"What time is boarding?", fl:"とうじょうはなんじですか。"}
  ],
  shopping: [
    {en:"Um, please tell me the price of {E}.", fl:"あのう、{Nb}のねだんをおしえてください。", slot:"buy"},
    {en:"Excuse me, please show me {E}.", fl:"すみません、{Nb}をみせてください。", slot:"buy"},
    {en:"Then I will buy {E}.", fl:"では、{Nb}をかいます。", slot:"buy"},
    {en:"Today I want to buy {E}.", fl:"きょうは{Nb}をかいたいです。", slot:"buy"},
    {en:"Hmm, {E} might be a little expensive.", fl:"うーん、{Nb}はちょっとたかいですね。", slot:"buy"},
    {en:"Well then, I'll take {E}.", fl:"じゃあ、{Nb}にします。", slot:"buy"},
    {en:"Can I pay by credit card?", fl:"クレジットカードではらえますか。"},
    {en:"A bag, please.", fl:"ふくろをおねがいします。"},
    {en:"I am just looking.", fl:"みているだけです。"},
    {en:"Please make it a little cheaper.", fl:"すこしやすくしてください。"}
  ]
};
