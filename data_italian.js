// Italian quiz data — mirrors the two Udemy courses:
//  1. "Italian for Beginners A0-A1-A2 | Complete Grammar + Writing"
//  2. "Italian Intermediate: B1-B2 | Complete Grammar + Listening"
// Vocab units follow the course's explicit Vocabolario lectures (cibo, vestiti,
// colori, casa, viaggio, oggetti, corpo umano, posti...). Grammar follows the
// [A0-x]/[A1-x]/[A2-x]/B1/B2 lecture list.
window.QUIZ_DATA = window.QUIZ_DATA || {};
window.QUIZ_DATA.italian = {
  name: "Italian",
  flag: "🇮🇹",
  ttsLang: "it-IT",
  courses: [
    {
      id: "it_a0a2",
      title: "Italian for Beginners A0–A1–A2",
      units: [
        // ---------- A0 ----------
        { id: "it_a0_v1", type: "vocab", title: "Vocab A0: Greetings & introductions (saluti & presentazioni)", items: [
          {t:"ciao", e:"hi / bye (informal)"}, {t:"buongiorno", e:"good morning"},
          {t:"buonasera", e:"good evening"}, {t:"buonanotte", e:"good night"},
          {t:"arrivederci", e:"goodbye (polite)"}, {t:"salve", e:"hello (neutral)"},
          {t:"per favore", e:"please"}, {t:"grazie", e:"thank you"}, {t:"prego", e:"you're welcome"},
          {t:"scusa", e:"excuse me / sorry (informal)"}, {t:"scusi", e:"excuse me (formal)"},
          {t:"come stai?", e:"how are you? (informal)"}, {t:"come sta?", e:"how are you? (formal)"},
          {t:"bene", e:"well"}, {t:"male", e:"badly"}, {t:"così così", e:"so-so"},
          {t:"come ti chiami?", e:"what's your name?"}, {t:"mi chiamo…", e:"my name is…"},
          {t:"piacere", e:"nice to meet you"}, {t:"di dove sei?", e:"where are you from?"},
          {t:"sono americano", e:"I am American (m.)"}, {t:"parli inglese?", e:"do you speak English?"},
          {t:"non capisco", e:"I don't understand"}, {t:"sì", e:"yes"}, {t:"no", e:"no"},
          {t:"signore", e:"sir / Mr."}, {t:"signora", e:"madam / Mrs."},
          {t:"a presto", e:"see you soon"}, {t:"a domani", e:"see you tomorrow"},
          {t:"benvenuto", e:"welcome"}
        ]},
        { id: "it_a0_v2", type: "vocab", title: "Vocab A0: Names & family (i nomi e la famiglia)", items: [
          {t:"la famiglia", e:"the family"}, {t:"la madre", e:"the mother"}, {t:"il padre", e:"the father"},
          {t:"la mamma", e:"the mom"}, {t:"il papà", e:"the dad"}, {t:"il fratello", e:"the brother"},
          {t:"la sorella", e:"the sister"}, {t:"il figlio", e:"the son"}, {t:"la figlia", e:"the daughter"},
          {t:"il nonno", e:"the grandfather"}, {t:"la nonna", e:"the grandmother"},
          {t:"lo zio", e:"the uncle"}, {t:"la zia", e:"the aunt"}, {t:"il cugino", e:"the cousin (m.)"},
          {t:"la cugina", e:"the cousin (f.)"}, {t:"il marito", e:"the husband"},
          {t:"la moglie", e:"the wife"}, {t:"i genitori", e:"the parents"},
          {t:"l'uomo", e:"the man"}, {t:"la donna", e:"the woman"}, {t:"il bambino", e:"the child (m.)"},
          {t:"la bambina", e:"the child (f.)"}, {t:"il ragazzo", e:"the boy"}, {t:"la ragazza", e:"the girl"},
          {t:"l'amico", e:"the friend (m.)"}, {t:"l'amica", e:"the friend (f.)"},
          {t:"il nome", e:"the name"}, {t:"il cognome", e:"the surname"}
        ]},
        { id: "it_a0_v3", type: "vocab", title: "Vocab A0: Food & cooking (cibo e cucina)", items: [
          {t:"il cibo", e:"the food"}, {t:"il pane", e:"the bread"}, {t:"la pasta", e:"the pasta"},
          {t:"la pizza", e:"the pizza"}, {t:"il formaggio", e:"the cheese"}, {t:"il latte", e:"the milk"},
          {t:"l'uovo", e:"the egg"}, {t:"la carne", e:"the meat"}, {t:"il pesce", e:"the fish"},
          {t:"il pollo", e:"the chicken"}, {t:"il riso", e:"the rice"}, {t:"la zuppa", e:"the soup"},
          {t:"l'insalata", e:"the salad"}, {t:"la verdura", e:"the vegetables"}, {t:"la frutta", e:"the fruit"},
          {t:"la mela", e:"the apple"}, {t:"l'arancia", e:"the orange"}, {t:"il pomodoro", e:"the tomato"},
          {t:"la patata", e:"the potato"}, {t:"l'acqua", e:"the water"}, {t:"il vino", e:"the wine"},
          {t:"la birra", e:"the beer"}, {t:"il caffè", e:"the coffee"}, {t:"il tè", e:"the tea"},
          {t:"il succo", e:"the juice"}, {t:"il dolce", e:"the dessert"}, {t:"il gelato", e:"the ice cream"},
          {t:"la colazione", e:"the breakfast"}, {t:"il pranzo", e:"the lunch"}, {t:"la cena", e:"the dinner"},
          {t:"mangiare", e:"to eat"}, {t:"bere", e:"to drink"}, {t:"cucinare", e:"to cook"},
          {t:"il ristorante", e:"the restaurant"}, {t:"il conto", e:"the bill"}
        ]},
        { id: "it_a0_g1", type: "grammar", title: "Grammar A0: Pronouns, essere & avere", lesson: "The subject pronouns are io (I), tu (you), lui/lei (he/she), noi (we), voi (you all), loro (they). Because each verb ending already shows who is acting, Italians usually drop the pronoun: Sono avvocato (I am a lawyer). The two most important verbs are essere (to be): sono, sei, è, siamo, siete, sono — and avere (to have): ho, hai, ha, abbiamo, avete, hanno.\n\nItalian uses avere for many states where English uses 'to be': Ho fame (I am hungry — literally 'I have hunger'), Ho sete (I am thirsty), Ho sonno (I am sleepy). Age works the same way: Quanti anni hai? — Ho 40 anni (How old are you? — I am 40).", items: [
          {q:"'Io' means:", c:["I","you","he","we"], a:0, x:"The Italian subject pronouns are io, tu, lui/lei, noi, voi, loro (I, you, he/she, we, you all, they). Io always means 'I' — don't confuse it with lui (he) or noi (we).", ex:"Io parlo inglese e italiano.", tr:"I speak English and Italian."},
          {q:"Conjugate: io ___ (essere)", c:["sono","sei","è","siamo"], a:0, x:"Essere (to be) is irregular: sono, sei, è, siamo, siete, sono. With io the form is sono; sei is the tu form and è the lui/lei form — the verb must match its subject.", tr:"I am."},
          {q:"Conjugate: tu ___ (avere)", c:["hai","ho","ha","hanno"], a:0, x:"Avere (to have) is irregular: ho, hai, ha, abbiamo, avete, hanno. Tu takes hai; ho is the io form and ha the lui/lei form — match the ending to the subject.", tr:"You have."},
          {q:"Noi ___ italiani.", c:["siamo","sono","siete","è"], a:0, x:"Each subject needs its own form of essere: sono, sei, è, siamo, siete, sono. Noi takes siamo: noi siamo italiani. Sono fits io or loro, not noi, and siete belongs to voi.", tr:"We are Italian."},
          {q:"Loro ___ una casa grande.", c:["hanno","ha","avete","abbiamo"], a:0, x:"Avere conjugates ho, hai, ha, abbiamo, avete, hanno; loro takes hanno: loro hanno una casa grande. Ha is singular (lui/lei), so it cannot go with plural loro.", tr:"They have a big house."},
          {q:"'Ho fame' literally means 'I have hunger'. It translates as:", c:["I am hungry","I have food","I eat","I am tired"], a:0, x:"Italian uses avere (to have) for physical states where English uses 'to be': ho fame = I have hunger = I am hungry. Same pattern: ho sete (thirsty), ho sonno (sleepy). Don't translate these with essere.", ex:"Ho fame, mangio un panino.", tr:"I am hungry."},
          {q:"Quanti anni ___? (How old are you?)", c:["hai","sei","ha","è"], a:0, x:"Age in Italian uses avere, not essere — you 'have' years: Quanti anni hai? — Ho 40 anni. Choosing sei/è (essere) is the classic English-speaker trap: 'I am 40' but 'ho 40 anni'.", tr:"How old are you?"},
          {q:"Subject pronouns in Italian are:", c:["usually omitted","always required","only for questions","used only in writing"], a:0, x:"Because each verb ending already identifies the subject, Italian normally drops subject pronouns: Sono avvocato, not Io sono avvocato. They are kept only for emphasis or contrast (io lavoro, tu no).", ex:"Sono avvocato e lavoro a Roma.", tr:"I am a lawyer and I work in Rome."}
        ]},
        { id: "it_a0_g2", type: "grammar", title: "Grammar A0: The three conjugations (-are, -ere, -ire)", lesson: "Italian verbs fall into three families by their infinitive ending: -are (first conjugation: parlare, amare), -ere (second: scrivere, vedere, leggere), and -ire (third: dormire, aprire, partire). In the present tense, -are verbs take -o, -i, -a, -iamo, -ate, -ano: io parlo, tu parli, lei parla (I speak, you speak, she speaks). -ere verbs take -o, -i, -e, -iamo, -ete, -ono: lei scrive (she writes), loro scrivono (they write). Plain -ire verbs follow the same pattern with -ite for voi: io dormo (I sleep), voi partite (you all leave), loro aprono (they open).\n\nHandy notes: the noi form is -iamo for ALL three groups (noi leggiamo — we read), and verbs ending in -iare keep just one i: tu mangi, not 'mangii' (you eat).", items: [
          {q:"Conjugate: io ___ (parlare)", c:["parlo","parli","parla","parlano"], a:0, x:"-are verbs take -o, -i, -a, -iamo, -ate, -ano in the present. With io the ending is -o: parlo. Parli is the tu form and parla the lui/lei form — always match the ending to the subject.", tr:"I speak."},
          {q:"Conjugate: tu ___ (mangiare)", c:["mangi","mangio","mangia","mangiate"], a:0, x:"The tu form of -are verbs ends in -i, and verbs in -iare keep just one i: mangiare → tu mangi, never 'mangii'. The stem's i and the ending's i merge into a single i.", tr:"You eat."},
          {q:"Conjugate: lei ___ (scrivere)", c:["scrive","scrivo","scrivi","scrivono"], a:0, x:"-ere verbs take -o, -i, -e, -iamo, -ete, -ono. The lui/lei form ends in -e: lei scrive. Don't use -a — that's the -are pattern (parla), the classic mix-up between conjugations.", tr:"She writes."},
          {q:"Conjugate: noi ___ (leggere)", c:["leggiamo","leggemo","leggamo","leggono"], a:0, x:"The noi ending is -iamo for all three conjugations (-are, -ere, -ire): noi leggiamo, parliamo, dormiamo. Forms like 'leggemo' wrongly borrow the -ete/-ono vowel; noi is always -iamo.", tr:"We read."},
          {q:"Conjugate: io ___ (dormire)", c:["dormo","dormisco","dormio","dorme"], a:0, x:"Dormire is a plain -ire verb: dormo, dormi, dorme, dormiamo, dormite, dormono. Only -isc- verbs like finire give forms such as finisco; dormire never takes -isc-, so io dormo.", tr:"I sleep."},
          {q:"Conjugate: loro ___ (aprire)", c:["aprono","aprano","apriscono","aprete"], a:0, x:"Plain -ire verbs share most endings with -ere verbs: the loro form ends in -ono, so aprire → loro aprono. Aprano is the subjunctive, and -iscono belongs only to -isc- verbs like finiscono.", tr:"They open."},
          {q:"Conjugate: voi ___ (partire)", c:["partite","partete","partiate","partiscono"], a:0, x:"-ire verbs take -ite in the voi form: voi partite. This is the one spot where -ire differs from -ere (voi scrivete but voi partite) — 'partete' mixes the two patterns.", tr:"You all leave."},
          {q:"Which verb is in the second conjugation?", c:["vedere","amare","finire","andare"], a:0, x:"The conjugation is read off the infinitive ending: -are = first, -ere = second, -ire = third. Vedere ends in -ere, so it is second; amare is first, finire third, and andare an irregular -are verb.", ex:"Vedo il mare dalla finestra.", tr:"I see the sea from the window."}
        ]},
        // ---------- A1 ----------
        { id: "it_a1_v1", type: "vocab", title: "Vocab A1: Numbers (i numeri)", items: [
          {t:"uno", e:"one"}, {t:"due", e:"two"}, {t:"tre", e:"three"}, {t:"quattro", e:"four"},
          {t:"cinque", e:"five"}, {t:"sei", e:"six"}, {t:"sette", e:"seven"}, {t:"otto", e:"eight"},
          {t:"nove", e:"nine"}, {t:"dieci", e:"ten"}, {t:"undici", e:"eleven"}, {t:"dodici", e:"twelve"},
          {t:"tredici", e:"thirteen"}, {t:"quattordici", e:"fourteen"}, {t:"quindici", e:"fifteen"},
          {t:"sedici", e:"sixteen"}, {t:"diciassette", e:"seventeen"}, {t:"diciotto", e:"eighteen"},
          {t:"diciannove", e:"nineteen"}, {t:"venti", e:"twenty"}, {t:"trenta", e:"thirty"},
          {t:"quaranta", e:"forty"}, {t:"cinquanta", e:"fifty"}, {t:"sessanta", e:"sixty"},
          {t:"settanta", e:"seventy"}, {t:"ottanta", e:"eighty"}, {t:"novanta", e:"ninety"},
          {t:"cento", e:"one hundred"}, {t:"mille", e:"one thousand"}, {t:"un milione", e:"one million"}
        ]},
        { id: "it_a1_v2", type: "vocab", title: "Vocab A1: Clothes (i vestiti)", items: [
          {t:"i vestiti", e:"the clothes"}, {t:"la camicia", e:"the shirt"}, {t:"la maglietta", e:"the t-shirt"},
          {t:"il maglione", e:"the sweater"}, {t:"i pantaloni", e:"the pants"}, {t:"i jeans", e:"the jeans"},
          {t:"la gonna", e:"the skirt"}, {t:"il vestito", e:"the dress / suit"},
          {t:"la giacca", e:"the jacket"}, {t:"il cappotto", e:"the coat"},
          {t:"le scarpe", e:"the shoes"}, {t:"gli stivali", e:"the boots"},
          {t:"i calzini", e:"the socks"}, {t:"il cappello", e:"the hat"},
          {t:"la sciarpa", e:"the scarf"}, {t:"i guanti", e:"the gloves"},
          {t:"la cintura", e:"the belt"}, {t:"la borsa", e:"the bag / purse"},
          {t:"gli occhiali", e:"the glasses"}, {t:"l'ombrello", e:"the umbrella"},
          {t:"indossare", e:"to wear"}, {t:"mettersi", e:"to put on"},
          {t:"la taglia", e:"the size"}, {t:"comprare", e:"to buy"}, {t:"costare", e:"to cost"}
        ]},
        { id: "it_a1_v3", type: "vocab", title: "Vocab A1: Colors (i colori)", items: [
          {t:"il colore", e:"the color"}, {t:"rosso", e:"red"}, {t:"blu", e:"blue"},
          {t:"giallo", e:"yellow"}, {t:"verde", e:"green"}, {t:"arancione", e:"orange"},
          {t:"viola", e:"purple"}, {t:"rosa", e:"pink"}, {t:"nero", e:"black"},
          {t:"bianco", e:"white"}, {t:"grigio", e:"gray"}, {t:"marrone", e:"brown"},
          {t:"azzurro", e:"light blue"}, {t:"chiaro", e:"light (shade)"}, {t:"scuro", e:"dark (shade)"},
          {t:"colorato", e:"colorful"}
        ]},
        { id: "it_a1_v4", type: "vocab", title: "Vocab A1: Days, months & time (giorni, mesi, ore)", items: [
          {t:"lunedì", e:"Monday"}, {t:"martedì", e:"Tuesday"}, {t:"mercoledì", e:"Wednesday"},
          {t:"giovedì", e:"Thursday"}, {t:"venerdì", e:"Friday"}, {t:"sabato", e:"Saturday"},
          {t:"domenica", e:"Sunday"}, {t:"gennaio", e:"January"}, {t:"febbraio", e:"February"},
          {t:"marzo", e:"March"}, {t:"aprile", e:"April"}, {t:"maggio", e:"May"},
          {t:"giugno", e:"June"}, {t:"luglio", e:"July"}, {t:"agosto", e:"August"},
          {t:"settembre", e:"September"}, {t:"ottobre", e:"October"}, {t:"novembre", e:"November"},
          {t:"dicembre", e:"December"}, {t:"oggi", e:"today"}, {t:"domani", e:"tomorrow"},
          {t:"ieri", e:"yesterday"}, {t:"la settimana", e:"the week"}, {t:"il mese", e:"the month"},
          {t:"l'anno", e:"the year"}, {t:"che ore sono?", e:"what time is it?"},
          {t:"mezzogiorno", e:"noon"}, {t:"mezzanotte", e:"midnight"},
          {t:"il fine settimana", e:"the weekend"}, {t:"la stagione", e:"the season"}
        ]},
        { id: "it_a1_v5", type: "vocab", title: "Vocab A1: The home (la casa)", items: [
          {t:"la casa", e:"the house"}, {t:"l'appartamento", e:"the apartment"},
          {t:"la stanza", e:"the room"}, {t:"la cucina", e:"the kitchen"},
          {t:"il bagno", e:"the bathroom"}, {t:"la camera da letto", e:"the bedroom"},
          {t:"il soggiorno", e:"the living room"}, {t:"il giardino", e:"the garden"},
          {t:"il balcone", e:"the balcony"}, {t:"la porta", e:"the door"},
          {t:"la finestra", e:"the window"}, {t:"il muro", e:"the wall"},
          {t:"il pavimento", e:"the floor"}, {t:"il tavolo", e:"the table"},
          {t:"la sedia", e:"the chair"}, {t:"il letto", e:"the bed"},
          {t:"l'armadio", e:"the wardrobe"}, {t:"il divano", e:"the sofa"},
          {t:"la lampada", e:"the lamp"}, {t:"il frigorifero", e:"the refrigerator"},
          {t:"le scale", e:"the stairs"}, {t:"la chiave", e:"the key"},
          {t:"l'affitto", e:"the rent"}, {t:"abitare", e:"to live / reside"},
          {t:"pulire", e:"to clean"}, {t:"i vicini", e:"the neighbors"}
        ]},
        { id: "it_a1_v6", type: "vocab", title: "Vocab A1: Transport & going places (mezzi di trasporto)", items: [
          {t:"andare", e:"to go"}, {t:"la macchina", e:"the car"}, {t:"l'auto", e:"the car (auto)"},
          {t:"il treno", e:"the train"}, {t:"l'autobus", e:"the bus"}, {t:"l'aereo", e:"the airplane"},
          {t:"la bicicletta", e:"the bicycle"}, {t:"la moto", e:"the motorcycle"},
          {t:"la nave", e:"the ship"}, {t:"il taxi", e:"the taxi"}, {t:"la metropolitana", e:"the subway"},
          {t:"a piedi", e:"on foot"}, {t:"la stazione", e:"the station"}, {t:"l'aeroporto", e:"the airport"},
          {t:"il biglietto", e:"the ticket"}, {t:"il binario", e:"the platform / track"},
          {t:"partire", e:"to depart"}, {t:"arrivare", e:"to arrive"}, {t:"viaggiare", e:"to travel"},
          {t:"guidare", e:"to drive"}, {t:"in orario", e:"on time"}, {t:"in ritardo", e:"late / delayed"}
        ]},
        { id: "it_a1_v7", type: "vocab", title: "Vocab A1: Common verbs (verbi comuni)", items: [
          {t:"parlare", e:"to speak"}, {t:"studiare", e:"to study"}, {t:"lavorare", e:"to work"},
          {t:"leggere", e:"to read"}, {t:"scrivere", e:"to write"}, {t:"vedere", e:"to see"},
          {t:"dormire", e:"to sleep"}, {t:"aprire", e:"to open"}, {t:"finire", e:"to finish"},
          {t:"capire", e:"to understand"}, {t:"dare", e:"to give"}, {t:"dire", e:"to say"},
          {t:"sapere", e:"to know (facts)"}, {t:"conoscere", e:"to know (people/places)"},
          {t:"prendere", e:"to take"}, {t:"mettere", e:"to put"}, {t:"trovare", e:"to find"},
          {t:"pensare", e:"to think"}, {t:"amare", e:"to love"}, {t:"aiutare", e:"to help"},
          {t:"chiamare", e:"to call"}, {t:"aspettare", e:"to wait"}, {t:"ascoltare", e:"to listen"},
          {t:"guardare", e:"to watch / look at"}, {t:"giocare", e:"to play (a game)"},
          {t:"suonare", e:"to play (an instrument)"}, {t:"uscire", e:"to go out"},
          {t:"venire", e:"to come"}, {t:"tornare", e:"to return"}, {t:"restare", e:"to stay"}
        ]},
        { id: "it_a1_g1", type: "grammar", title: "Grammar A1: Plurals & articles (il plurale)", lesson: "To make plurals: masculine -o becomes -i (il libro → i libri, the book → the books), feminine -a becomes -e (la casa → le case, the house → the houses), and nouns in -e become -i whatever their gender (la chiave → le chiavi, the key → the keys). Words ending in an accented vowel never change: il caffè → i caffè, la città → le città.\n\nThe articles change too: il → i, la → le, and lo/l' → gli. Lo is the special masculine article used before s+consonant, z, gn, and ps: lo studente → gli studenti (the student → the students), lo zio (the uncle). Before a vowel, masculine l' also becomes gli: l'amico → gli amici (the friend → the friends).", items: [
          {q:"The plural of 'il libro' is:", c:["i libri","i libros","gli libri","le libri"], a:0, x:"Masculine nouns in -o form the plural in -i, and the article il becomes i: il libro → i libri. Italian never adds -s ('libros'), and gli is reserved for lo/l' nouns like gli studenti.", ex:"I libri sono sul tavolo.", tr:"The books are on the table."},
          {q:"The plural of 'la casa' is:", c:["le case","le casi","la case","li case"], a:0, x:"Feminine nouns in -a form the plural in -e, and la becomes le: la casa → le case. Watch the trap: -a → -e, not -i — 'le casi' wrongly applies the pattern of -e nouns.", ex:"Le case qui sono molto vecchie.", tr:"The houses here are very old."},
          {q:"The plural of 'lo studente' is:", c:["gli studenti","i studenti","le studenti","los studenti"], a:0, x:"Nouns in -e pluralize to -i, and the article lo (used before s+consonant) becomes gli: lo studente → gli studenti. 'I studenti' is wrong because il/i never appear before s+consonant.", ex:"Gli studenti studiano in biblioteca.", tr:"The students study in the library."},
          {q:"The plural of 'l'amico' is:", c:["gli amici","i amici","le amiche","gli amichi"], a:0, x:"Masculine l' (used before vowels) becomes gli in the plural: l'amico → gli amici. Note the spelling: -co becomes -ci here (amici), and 'i amici' is impossible before a vowel.", ex:"Gli amici di Marco sono simpatici.", tr:"Marco's friends are nice."},
          {q:"'Lo' is used before masculine nouns starting with:", c:["s+consonant, z, gn, ps","any consonant","vowels","only z"], a:0, x:"Lo replaces il before masculine nouns starting with s+consonant, z, gn, or ps: lo studente, lo zio, lo gnocco, lo psicologo. Before ordinary consonants use il; before vowels use l'.", ex:"Lo studente aspetta lo zio.", tr:"The student is waiting for the uncle."},
          {q:"The plural of 'il caffè' is:", c:["i caffè","i caffi","i caffé","le caffè"], a:0, x:"Nouns ending in an accented vowel are invariable — only the article changes: il caffè → i caffè. Never alter the ending or the accent: 'i caffi' and 'i caffé' are both wrong.", ex:"I caffè di questo bar sono ottimi.", tr:"The coffees at this bar are excellent."},
          {q:"The plural of 'la città' is:", c:["le città","le cittè","le citti","la città"], a:0, x:"Nouns with a final accented vowel do not change in the plural; the article does the work: la città → le città. So 'many cities' is le città, never 'le citti'.", ex:"Le città italiane sono molto belle.", tr:"Italian cities are very beautiful."},
          {q:"Nouns ending in -e (e.g. 'la chiave') pluralize to:", c:["-i (le chiavi)","-e (le chiave)","-a (le chiava)","-es (le chiaves)"], a:0, x:"Nouns ending in -e take -i in the plural regardless of gender: la chiave → le chiavi, il padre → i padri. You can't tell gender from -e, but the plural ending is always -i.", ex:"Le chiavi sono nella borsa.", tr:"The keys are in the bag."}
        ]},
        { id: "it_a1_g2", type: "grammar", title: "Grammar A1: Adjectives & possessives (aggettivi & possessivi)", lesson: "Adjectives agree in gender and number with their noun: la macchina rossa (the red car), i ragazzi alti (the tall boys). Adjectives ending in -o have four forms (rosso/rossa/rossi/rosse), but adjectives ending in -e have only two: verde in the singular, verdi in the plural, for both genders.\n\nPossessives normally take the article: il mio libro (my book), i loro amici (their friends — loro itself never changes). The big exception: no article with singular, unmodified family members — mia sorella (my sister), mio padre (my father).\n\nTwo useful verbs also appear here: vorrei (I would like — polite form of volere: Vorrei un caffè), and the irregular fare (to do/make): faccio, fai, fa, facciamo, fate, fanno. Jobs use fare: Faccio l'avvocato (I'm a lawyer).", items: [
          {q:"La macchina ___ (rosso)", c:["rossa","rosso","rossi","rosse"], a:0, x:"Adjectives agree in gender and number with their noun. Macchina is feminine singular, so rosso becomes rossa: la macchina rossa. Rosso would only fit a masculine noun (il libro rosso).", tr:"The red car."},
          {q:"I ragazzi ___ (alto)", c:["alti","alte","alto","alta"], a:0, x:"Adjectives agree with their noun: ragazzi is masculine plural, so alto takes the masculine plural ending -i: i ragazzi alti. Alte is the feminine plural (le ragazze alte).", tr:"The tall boys."},
          {q:"Adjectives in -e (e.g. 'verde') have how many forms?", c:["two (verde/verdi)","four","one","three"], a:0, x:"Adjectives ending in -e have only two forms: -e in the singular and -i in the plural, for both genders — il libro verde, la casa verde, i libri verdi. Only -o adjectives have four forms.", ex:"Le case verdi sono grandi.", tr:"The green houses are big."},
          {q:"___ libro è interessante. (my)", c:["Il mio","Mio","La mia","Il mia"], a:0, x:"Possessives normally take the definite article in Italian: il mio libro, la mia casa. Bare 'mio libro' is the anglophone trap — the article is dropped only with singular, unmodified family members.", tr:"My book is interesting."},
          {q:"___ sorella abita a Roma. (my)", c:["Mia","La mia","Il mio","Mie"], a:0, x:"Exception to the possessive+article rule: singular, unmodified family members drop the article — mia sorella, mio padre. The article returns in the plural or with loro: le mie sorelle, la loro sorella.", tr:"My sister lives in Rome."},
          {q:"___ amici sono simpatici. (their)", c:["I loro","Loro","Gli loro","Le loro"], a:0, x:"Loro is invariable — it never changes its ending — but it always keeps the article, even with family: i loro amici, la loro madre. The article (i) agrees with amici, not with loro.", tr:"Their friends are nice."},
          {q:"'Vorrei' means:", c:["I would like","I want (strong)","I have","I go"], a:0, x:"Vorrei is the conditional of volere and softens a request to 'I would like': Vorrei un caffè. Voglio (I want) is grammatical but sounds blunt — Italians use the conditional to be polite.", ex:"Vorrei un caffè, per favore.", tr:"I would like a coffee, please."},
          {q:"Che lavoro fai? — ___ l'avvocato.", c:["Faccio","Fo","Faco","Facio"], a:0, x:"Fare (to do/make) is irregular: faccio, fai, fa, facciamo, fate, fanno. Professions are stated with fare + article: Faccio l'avvocato. Regularized forms like 'facio' or 'faco' don't exist.", tr:"What do you do for work? — I'm a lawyer."}
        ]},
        { id: "it_a1_g3", type: "grammar", title: "Grammar A1: The spoken past (passato prossimo)", lesson: "The passato prossimo (I ate, I have eaten) = present of avere or essere + past participle. Regular participles: -are → -ato (parlare → parlato), -ere → -uto (avere → avuto), -ire → -ito (dormire → dormito). Many common verbs are irregular: fare → fatto, vedere → visto, leggere → letto, aprire → aperto.\n\nMost verbs take avere: Ieri ho mangiato la pizza (Yesterday I ate pizza). Verbs of movement and change of state take essere: andare, partire, arrivare, tornare. With essere, the participle agrees with the subject: Maria è andata al cinema (Maria went to the cinema), Noi siamo partiti alle otto (We left at eight). With avere, it normally does not change.", items: [
          {q:"Ieri ___ mangiato la pizza.", c:["ho","sono","ha","è"], a:0, x:"The passato prossimo = present of avere or essere + past participle. Transitive verbs like mangiare take avere: ho mangiato. 'Sono mangiato' is the classic trap — essere is reserved for movement/change-of-state verbs.", tr:"Yesterday I ate pizza."},
          {q:"Maria ___ andata al cinema.", c:["è","ha","sono","hanno"], a:0, x:"Verbs of movement like andare form the passato prossimo with essere, and the participle then agrees with the subject: Maria è andata. 'Ha andato' is the avere/essere trap — andare never takes avere.", tr:"Maria went to the cinema."},
          {q:"The past participle of 'parlare' is:", c:["parlato","parlito","parluto","parlado"], a:0, x:"Regular past participles follow the infinitive: -are → -ato, -ere → -uto, -ire → -ito. Parlare is a regular -are verb, so parlato (compare avuto, dormito). The other options invent non-existent endings.", ex:"Ho parlato con mia madre ieri.", tr:"I spoke with my mother yesterday."},
          {q:"The past participle of 'vedere' is:", c:["visto","veduto sempre","vedato","visito"], a:0, x:"Many -ere verbs have irregular past participles: vedere → visto, like leggere → letto or prendere → preso. The regular form veduto exists but visto is the standard everyday participle.", ex:"Ho visto un bel film ieri.", tr:"I saw a nice film yesterday."},
          {q:"The past participle of 'fare' is:", c:["fatto","fato","facuto","fareto"], a:0, x:"Fare has an irregular past participle: fatto (ho fatto = I did/made). Regularized forms like 'fareto' or 'facuto' don't exist — common irregulars (fatto, detto, letto, visto) must be memorized.", ex:"Ho fatto i compiti stamattina.", tr:"I did my homework this morning."},
          {q:"Noi ___ partiti alle otto.", c:["siamo","abbiamo","siete","sono"], a:0, x:"Partire is a verb of movement, so its passato prossimo uses essere and the participle agrees with the subject: noi siamo partiti. 'Abbiamo partito' is the avere/essere trap — movement verbs never take avere.", tr:"We left at eight."},
          {q:"With essere, the past participle agrees with:", c:["the subject","the object","nothing","the verb"], a:0, x:"With essere as auxiliary, the past participle agrees in gender and number with the subject: Maria è andata, i ragazzi sono andati. With avere it stays -o unless a direct object pronoun precedes the verb.", ex:"Maria è andata al mercato ieri.", tr:"Maria went to the market yesterday."},
          {q:"The past participle of 'leggere' is:", c:["letto","leggiuto","leggato","lesso"], a:0, x:"Leggere has an irregular past participle: letto (ho letto = I read). Many -ere verbs resist the regular -uto pattern — 'leggiuto' doesn't exist; compare scrivere → scritto, vedere → visto.", ex:"Ho letto un libro interessante.", tr:"I read an interesting book."},
          {q:"The past participle of 'aprire' is:", c:["aperto","aprito","apruto","operto"], a:0, x:"Aprire has an irregular past participle: aperto (ho aperto = I opened). Regular -ire verbs take -ito (dormito), but a small group is irregular: aprire → aperto, offrire → offerto, morire → morto.", ex:"Ho aperto la finestra della cucina.", tr:"I opened the kitchen window."}
        ]},
        { id: "it_a1_g4", type: "grammar", title: "Grammar A1: Modal verbs & simple prepositions (verbi servili)", lesson: "The three modal (servile) verbs are irregular and are followed by an infinitive. Dovere (must/have to): devo, devi, deve, dobbiamo, dovete, devono — Devo studiare stasera (I have to study tonight). Potere (can): posso, puoi, può, possiamo, potete, possono — Puoi venire con noi? (Can you come with us?). Volere (want): voglio, vuoi, vuole, vogliamo, volete, vogliono.\n\nKey simple prepositions: cities take a (Vado a Roma — I'm going to Rome) but countries and regions take in (Vado in Italia — I'm going to Italy). Possession uses di (Il libro è di Marco — the book is Marco's). Origin/provenance with venire uses da (Vengo da New York — I come from New York; but with essere: Sono di New York). Per means for: Questo regalo è per te (This gift is for you).", items: [
          {q:"Io ___ studiare stasera. (dovere)", c:["devo","dovo","debo","devi"], a:0, x:"The modal dovere (must) is irregular — devo, devi, deve, dobbiamo, dovete, devono — and is followed directly by an infinitive: Devo studiare. 'Dovo' regularizes a stem that alternates; devi is the tu form.", tr:"I have to study tonight."},
          {q:"Tu ___ venire con noi? (potere)", c:["puoi","posso","può","potete"], a:0, x:"The modal potere (can) is irregular: posso, puoi, può, possiamo, potete, possono. Tu takes puoi: Puoi venire con noi? Posso is the io form and può the lui/lei form — match the subject.", tr:"Can you come with us?"},
          {q:"Loro ___ un gelato. (volere)", c:["vogliono","volono","vuolono","volete"], a:0, x:"The modal volere (want) is irregular: voglio, vuoi, vuole, vogliamo, volete, vogliono. Loro takes vogliono; 'volono' and 'vuolono' wrongly regularize the alternating vogli-/vuo- stem.", tr:"They want an ice cream."},
          {q:"Vado ___ Roma.", c:["a","in","da","per"], a:0, x:"Destination with city names takes the preposition a: vado a Roma. In is the trap — it is used for countries and regions (in Italia); da means 'from' and per means 'for'.", tr:"I'm going to Rome."},
          {q:"Vado ___ Italia.", c:["in","a","da","su"], a:0, x:"Countries and regions take in: vado in Italia, in Toscana. Cities take a (a Roma) — choosing a for a country is the mirror image of the a/in city trap.", tr:"I'm going to Italy."},
          {q:"Il libro è ___ Marco. (belongs to)", c:["di","da","a","per"], a:0, x:"Possession is expressed with di: il libro è di Marco = the book is Marco's. Da is the trap — di Marco means Marco's, while da Marco means at/to Marco's place.", tr:"The book is Marco's."},
          {q:"Vengo ___ New York. (origin)", c:["da","di","a","in"], a:0, x:"Origin with venire uses da: vengo da New York. But with essere you switch to di: sono di New York. Mixing them (vengo di / sono da) is the classic da/di provenance trap.", tr:"I come from New York."},
          {q:"Questo regalo è ___ te.", c:["per","a","di","con"], a:0, x:"Per expresses the beneficiary or purpose, 'for': questo regalo è per te. A would mean 'to' (lo do a te), di marks possession, and con means 'with' — only per translates 'for you' here.", tr:"This gift is for you."}
        ]},
        // ---------- A2 ----------
        { id: "it_a2_v1", type: "vocab", title: "Vocab A2: Everyday objects (gli oggetti)", items: [
          {t:"l'oggetto", e:"the object"}, {t:"il telefono", e:"the telephone"},
          {t:"il cellulare", e:"the cell phone"}, {t:"il computer", e:"the computer"},
          {t:"la penna", e:"the pen"}, {t:"la matita", e:"the pencil"}, {t:"il quaderno", e:"the notebook"},
          {t:"il libro", e:"the book"}, {t:"il giornale", e:"the newspaper"},
          {t:"la rivista", e:"the magazine"}, {t:"la carta", e:"the paper"},
          {t:"le forbici", e:"the scissors"}, {t:"il coltello", e:"the knife"},
          {t:"la forchetta", e:"the fork"}, {t:"il cucchiaio", e:"the spoon"},
          {t:"il piatto", e:"the plate"}, {t:"il bicchiere", e:"the glass"},
          {t:"la tazza", e:"the cup"}, {t:"la bottiglia", e:"the bottle"},
          {t:"lo specchio", e:"the mirror"}, {t:"l'orologio", e:"the watch / clock"},
          {t:"il portafoglio", e:"the wallet"}, {t:"gli occhiali da sole", e:"the sunglasses"},
          {t:"la valigia", e:"the suitcase"}, {t:"lo zaino", e:"the backpack"}
        ]},
        { id: "it_a2_v2", type: "vocab", title: "Vocab A2: Travel (il viaggio)", items: [
          {t:"il viaggio", e:"the trip"}, {t:"le vacanze", e:"the vacation"},
          {t:"l'albergo", e:"the hotel"}, {t:"la prenotazione", e:"the reservation"},
          {t:"prenotare", e:"to book"}, {t:"la camera", e:"the room (hotel)"},
          {t:"il passaporto", e:"the passport"}, {t:"la valigia", e:"the suitcase"},
          {t:"fare la valigia", e:"to pack"}, {t:"il mare", e:"the sea"},
          {t:"la spiaggia", e:"the beach"}, {t:"la montagna", e:"the mountain"},
          {t:"il lago", e:"the lake"}, {t:"la città", e:"the city"},
          {t:"il paese", e:"the country / village"}, {t:"la mappa", e:"the map"},
          {t:"il turista", e:"the tourist"}, {t:"visitare", e:"to visit"},
          {t:"il museo", e:"the museum"}, {t:"la chiesa", e:"the church"},
          {t:"il monumento", e:"the monument"}, {t:"la guida", e:"the guide"},
          {t:"la foto", e:"the photo"}, {t:"fare una foto", e:"to take a photo"},
          {t:"il souvenir", e:"the souvenir"}, {t:"all'estero", e:"abroad"}
        ]},
        { id: "it_a2_v3", type: "vocab", title: "Vocab A2: The human body (il corpo umano)", items: [
          {t:"il corpo", e:"the body"}, {t:"la testa", e:"the head"}, {t:"i capelli", e:"the hair"},
          {t:"il viso", e:"the face"}, {t:"l'occhio", e:"the eye"}, {t:"gli occhi", e:"the eyes"},
          {t:"il naso", e:"the nose"}, {t:"la bocca", e:"the mouth"}, {t:"l'orecchio", e:"the ear"},
          {t:"il dente", e:"the tooth"}, {t:"la lingua", e:"the tongue"}, {t:"il collo", e:"the neck"},
          {t:"la spalla", e:"the shoulder"}, {t:"il braccio", e:"the arm"}, {t:"la mano", e:"the hand"},
          {t:"il dito", e:"the finger"}, {t:"la gamba", e:"the leg"}, {t:"il ginocchio", e:"the knee"},
          {t:"il piede", e:"the foot"}, {t:"la schiena", e:"the back"}, {t:"lo stomaco", e:"the stomach"},
          {t:"il cuore", e:"the heart"}, {t:"la pelle", e:"the skin"}, {t:"il sangue", e:"the blood"},
          {t:"mal di testa", e:"headache"}, {t:"mal di stomaco", e:"stomachache"},
          {t:"il medico", e:"the doctor"}, {t:"la salute", e:"the health"}
        ]},
        { id: "it_a2_v4", type: "vocab", title: "Vocab A2: Places & weather (alcuni posti & il tempo)", items: [
          {t:"il posto", e:"the place"}, {t:"il negozio", e:"the shop"}, {t:"il supermercato", e:"the supermarket"},
          {t:"il mercato", e:"the market"}, {t:"la banca", e:"the bank"}, {t:"l'ufficio", e:"the office"},
          {t:"la posta", e:"the post office"}, {t:"la farmacia", e:"the pharmacy"},
          {t:"l'ospedale", e:"the hospital"}, {t:"la scuola", e:"the school"},
          {t:"l'università", e:"the university"}, {t:"la biblioteca", e:"the library"},
          {t:"il parco", e:"the park"}, {t:"la piazza", e:"the square"}, {t:"il ponte", e:"the bridge"},
          {t:"la strada", e:"the street / road"}, {t:"il cinema", e:"the cinema"},
          {t:"il teatro", e:"the theater"}, {t:"la palestra", e:"the gym"}, {t:"il bar", e:"the café / bar"},
          {t:"che tempo fa?", e:"what's the weather like?"}, {t:"fa caldo", e:"it's hot"},
          {t:"fa freddo", e:"it's cold"}, {t:"c'è il sole", e:"it's sunny"},
          {t:"piove", e:"it's raining"}, {t:"nevica", e:"it's snowing"},
          {t:"il vento", e:"the wind"}, {t:"la nuvola", e:"the cloud"},
          {t:"la pioggia", e:"the rain"}, {t:"la neve", e:"the snow"}
        ]},
        { id: "it_a2_g1", type: "grammar", title: "Grammar A2: Combined prepositions (preposizioni articolate) & articles again", lesson: "When the prepositions a, di, da, in, su meet a definite article, they fuse into one word. With a: a + il = al, a + la = alla, a + lo = allo, a + i = ai, a + gli = agli, a + le = alle. The same logic applies to the others: di + la = della, in + il = nel, su + gli = sugli, da + le = dalle. Before a vowel the fused form uses l': da + l'ufficio = dall'ufficio.\n\nExamples: Vado al supermercato (I'm going to the supermarket — a + il), Il libro è sul tavolo (The book is on the table — su + il), Torno dall'ufficio alle sei (I come back from the office at six). Tip: build the form in two steps — pick the right article for the noun first, then fuse it with the preposition.", items: [
          {q:"a + il =", c:["al","all'","alla","ai"], a:0, x:"When a, di, da, in, su meet a definite article they fuse into one word (preposizione articolata): a + il = al. The full a-set: al, allo, alla, all', ai, agli, alle — the fusion mirrors the noun's own article.", ex:"Vado al cinema con Marco.", tr:"I'm going to the cinema with Marco."},
          {q:"di + la =", c:["della","dalla","dela","delle"], a:0, x:"Di + article fuses into one word: di + la = della. Don't confuse it with dalla (da + la, 'from the') — di keeps its e-vowel in fusion: del, dello, della, dei, degli, delle.", ex:"La porta della casa è aperta.", tr:"The door of the house is open."},
          {q:"in + il =", c:["nel","nell'","nella","nei"], a:0, x:"In changes shape when fusing with an article: in + il = nel (nello, nella, nell', nei, negli, nelle). Nell' is used only before a vowel (nell'acqua); nella needs a feminine noun.", ex:"Il gatto dorme nel giardino.", tr:"The cat sleeps in the garden."},
          {q:"su + gli =", c:["sugli","sui","su gli","sulle"], a:0, x:"Su + article fuses into one word: su + gli = sugli. The article stays visible inside the fusion (sul, sullo, sulla, sui, sugli, sulle); writing 'su gli' as two words is incorrect.", ex:"Gli uccelli cantano sugli alberi.", tr:"The birds sing in the trees."},
          {q:"da + le =", c:["dalle","delle","dagli","dalla"], a:0, x:"Da + article fuses: da + le = dalle. Watch the da/di trap: dalle = from the, delle = of the/some — the first vowel tells you which preposition the fusion started from.", ex:"Lavoro dalle nove alle cinque.", tr:"I work from nine to five."},
          {q:"Vado ___ supermercato.", c:["al","allo","alla","all'"], a:0, x:"Build articulated prepositions in two steps: pick the noun's article, then fuse. Supermercato takes il, so a + il = al. Allo would need an s+consonant/z noun (allo stadio), alla a feminine one.", tr:"I'm going to the supermarket."},
          {q:"Il libro è ___ tavolo.", c:["sul","sullo","sulla","sui"], a:0, x:"Location 'on' uses su + article, fused: tavolo takes il, so su + il = sul tavolo. Sullo and sulla would need lo/la nouns — the fused form always mirrors the noun's own article.", tr:"The book is on the table."},
          {q:"Torno ___ ufficio alle sei.", c:["dall'","dal","dalla","dagli"], a:0, x:"Before a vowel the article is l', and the fusion keeps the apostrophe: da + l'ufficio = dall'ufficio. Dal would suit a consonant noun (dal bar). Alle sei applies the same fusion rule to clock times.", tr:"I come back from the office at six."}
        ]},
        { id: "it_a2_g2", type: "grammar", title: "Grammar A2: Imperfect & gerund (imperfetto & gerundio)", lesson: "The imperfetto describes ongoing or habitual past actions, background and descriptions — not single completed events (those take the passato prossimo). Endings: -avo/-evo/-ivo etc.: Da bambino giocavo al parco (As a child I used to play at the park). Essere is irregular: ero, eri, era, eravamo, eravate, erano. It is also the tense for an action interrupted by another: Mentre dormivo, è arrivato Marco (While I was sleeping, Marco arrived).\n\nThe gerundio is formed with -ando for -are verbs and -endo for -ere/-ire verbs: mangiando (eating), leggendo (reading). With stare it makes the present continuous: Sto studiando (I am studying right now).\n\nAlso remember: many -ire verbs like finire insert -isc- in the present: finisco, finisci, finisce, finiamo, finite, finiscono.", items: [
          {q:"Da bambino ___ sempre al parco. (giocare)", c:["giocavo","ho giocato","giocai","giocherò"], a:0, x:"Habitual or repeated past actions take the imperfetto: da bambino giocavo = I used to play. The passato prossimo (ho giocato) is the trap — it reports one completed event, not a childhood habit.", tr:"As a child I always used to play at the park."},
          {q:"The imperfetto of 'essere' (io) is:", c:["ero","fui","sono stato","era"], a:0, x:"Essere is irregular in the imperfetto: ero, eri, era, eravamo, eravate, erano. Fui is the passato remoto and sono stato the passato prossimo — different past tenses, not the imperfetto.", ex:"Da bambino ero molto timido.", tr:"As a child I was very shy."},
          {q:"The imperfetto describes:", c:["ongoing/habitual past actions & descriptions","completed single actions","the future","commands"], a:0, x:"The imperfetto sets the scene: ongoing or habitual past actions, descriptions, background states. Single completed events take the passato prossimo — the choice is about aspect, not how long ago.", ex:"Ogni estate andavamo al mare.", tr:"Every summer we went to the seaside."},
          {q:"Mentre ___ , è arrivato Marco. (dormire)", c:["dormivo","ho dormito","dormii","dormirò"], a:0, x:"An ongoing action interrupted by another goes in the imperfetto; the interrupting event takes the passato prossimo: Mentre dormivo, è arrivato Marco. 'Ho dormito' would wrongly present the sleeping as a finished event.", tr:"While I was sleeping, Marco arrived."},
          {q:"The gerundio of 'mangiare' is:", c:["mangiando","mangiente","mangiato","mangiare"], a:0, x:"The gerundio of -are verbs ends in -ando: mangiare → mangiando. Only -ere and -ire verbs take -endo — swapping the two vowels is the usual error, and mangiato is the participle, not the gerund.", ex:"Sto mangiando una pizza adesso.", tr:"I am eating a pizza right now."},
          {q:"The gerundio of 'leggere' is:", c:["leggendo","leggando","letto","leggiendo"], a:0, x:"-ere and -ire verbs form the gerundio in -endo: leggere → leggendo, dormire → dormendo. -ando ('leggando') belongs only to -are verbs, and letto is the past participle, not the gerund.", ex:"Marco sta leggendo il giornale.", tr:"Marco is reading the newspaper."},
          {q:"Sto ___ (studiare) — right now", c:["studiando","studiato","studiare","studiavo"], a:0, x:"Stare + gerundio expresses an action in progress right now: sto studiando = I am studying. After stare you need the -ando/-endo form — the infinitive or participle cannot follow it here.", tr:"I am studying."},
          {q:"Verbs like 'finire' insert -isc- in the present. Io ___:", c:["finisco","fino","finio","finesco"], a:0, x:"Many -ire verbs (finire, capire, preferire) insert -isc- in the singular forms and loro: finisco, finisci, finisce — but finiamo, finite. Plain 'fino' wrongly treats finire like the dormire type.", tr:"I finish."}
        ]},
        { id: "it_a2_g3", type: "grammar", title: "Grammar A2: Direct & indirect pronouns (pronomi diretti e indiretti)", lesson: "Direct object pronouns replace the thing/person acted on directly: lo (him/it), la (her/it), li (them, masc.), le (them, fem.). Vedi Marco? — Sì, lo vedo (Do you see Marco? — Yes, I see him). Indirect pronouns replace a + person: gli (to him), le (to her). Telefoni a Maria? — Sì, le telefono (I phone her); Scrivi a Marco? — Sì, gli scrivo (I write to him). Watch out: le = 'them (fem.)' as direct but 'to her' as indirect.\n\nIn the passato prossimo, the participle agrees with a preceding direct pronoun: Hai mangiato la pizza? — Sì, l'ho mangiata (Yes, I ate it).\n\nPiacere works backwards: the thing liked is the subject. Mi piace la pizza (I like pizza — pizza pleases me); with a plural, use piacciono: Ti piacciono i gelati?", items: [
          {q:"Vedi Marco? — Sì, ___ vedo.", c:["lo","gli","le","li"], a:0, x:"Direct object pronouns replace the person or thing acted on directly; masculine singular = lo. Vedere takes a direct object, so lo vedo. Gli is the trap — it means 'to him' (indirect), as with scrivere a.", tr:"Do you see Marco? — Yes, I see him."},
          {q:"Chiami Maria? — Sì, ___ chiamo.", c:["la","le","lo","gli"], a:0, x:"Chiamare takes a direct object, and the feminine singular direct pronoun is la: la chiamo. Le is the trap — before a verb it means 'to her' (indirect), not 'her'.", tr:"Are you calling Maria? — Yes, I'm calling her."},
          {q:"Telefoni a Maria? — Sì, ___ telefono.", c:["le","la","gli","lo"], a:0, x:"Telefonare takes a + person, so it needs an indirect pronoun: 'to her' = le. Le telefono = I phone her. La is the trap — telefonare is not direct in Italian, unlike English 'call her'.", tr:"Are you phoning Maria? — Yes, I'm phoning her."},
          {q:"Scrivi a Marco? — Sì, ___ scrivo.", c:["gli","lo","le","li"], a:0, x:"Scrivere a qualcuno takes an indirect object: 'to him' = gli. Gli scrivo = I write to him. Lo would be a direct object ('him'), but writing is done to someone — hence the indirect gli.", tr:"Are you writing to Marco? — Yes, I'm writing to him."},
          {q:"Compri i libri? — Sì, ___ compro.", c:["li","le","gli","lo"], a:0, x:"Plural direct object pronouns: li (masculine), le (feminine). I libri is masculine plural, so li compro = I buy them. Le would suit a feminine plural (le riviste → le compro).", tr:"Are you buying the books? — Yes, I'm buying them."},
          {q:"Hai mangiato la pizza? — Sì, ___ ho mangiat___.", c:["l' / -a","lo / -o","la / -o","le / -e"], a:0, x:"When lo/la/li/le precedes a passato prossimo, the past participle agrees with that pronoun: la pizza → l'ho mangiata. The default masculine -o ('l'ho mangiato') misses the required feminine agreement.", tr:"Did you eat the pizza? — Yes, I ate it."},
          {q:"'Mi piace la pizza' — the subject of piacere is:", c:["la pizza","io","mi","piace"], a:0, x:"Piacere works backwards: the thing liked is the grammatical subject and the liker is an indirect object. In 'mi piace la pizza', pizza is the subject — literally 'pizza is pleasing to me' — not io.", ex:"Mi piace la pizza.", tr:"I like pizza."},
          {q:"Ti piacciono i gelati? — uses 'piacciono' because:", c:["the thing liked is plural","'tu' is plural","it's polite","it's past tense"], a:0, x:"Because the thing liked is the subject, piacere agrees with it: plural i gelati → piacciono. It is the liked noun, not the person, that decides singular piace vs plural piacciono.", ex:"Ti piacciono i gelati?", tr:"Do you like ice cream?"}
        ]},
        { id: "it_a2_g4", type: "grammar", title: "Grammar A2: The imperative, ne & ci (imperativo)", lesson: "Commands (imperativo): for tu, -are verbs end in -a: Mangia! (Eat!). The negative tu-command is simply non + infinitive: Non parlare! (Don't speak!). The formal Lei command flips the vowel: -are verbs take -i: Scusi! (Excuse me!).\n\nNe means 'of it / of them' and replaces quantities or di + something: Quanti caffè bevi? — Ne bevo due (I drink two of them); Hai voglia di uscire? — No, non ne ho voglia (I don't feel like it).\n\nCi replaces a place already mentioned: Vai spesso a Roma? — Sì, ci vado spesso (Yes, I go there often). Ci also appears in c'è / ci sono = there is / there are: C'è un problema, ci sono due problemi.", items: [
          {q:"Informal command (tu) of 'mangiare':", c:["Mangia!","Mangi!","Mangiare!","Mangiate!"], a:0, x:"The informal tu-imperative of -are verbs ends in -a: Mangia! Note the flip: present tu mangi, but command mangia. Mangi! is the formal Lei command and mangiate the voi form.", ex:"Mangia la pasta, Marco!", tr:"Eat!"},
          {q:"Negative tu-imperative of 'parlare':", c:["Non parlare!","Non parla!","Non parli!","Non parlate!"], a:0, x:"The negative tu-command is simply non + infinitive: Non parlare! Never keep a conjugated form after non in the tu-imperative ('non parla' is wrong); this infinitive rule applies only to tu.", ex:"Non parlare durante il film!", tr:"Don't speak!"},
          {q:"Formal command (Lei) of 'scusare':", c:["Scusi!","Scusa!","Scusare!","Scusate!"], a:0, x:"Formal Lei commands flip the vowel: -are verbs take -i, so Scusi! (tu takes -a: Scusa!). Using Scusa with a stranger is the informal trap — the polite 'excuse me' is Scusi.", ex:"Scusi, dov'è la stazione?", tr:"Excuse me!"},
          {q:"Quanti caffè bevi? — ___ bevo due.", c:["Ne","Ci","Li","Lo"], a:0, x:"Ne means 'of it/of them' and is required with quantities: Ne bevo due = I drink two of them. A bare number without its noun needs ne — plain 'bevo due' or li is the trap.", tr:"How many coffees do you drink? — I drink two of them."},
          {q:"Vai spesso a Roma? — Sì, ___ vado spesso.", c:["ci","ne","la","vi"], a:0, x:"Ci replaces a place already mentioned ('there'): a Roma → ci vado spesso = I go there often. Ne is the trap — ne stands for di + something or quantities, never a destination.", tr:"Do you go to Rome often? — Yes, I go there often."},
          {q:"Hai voglia di uscire? — No, non ___ ho voglia.", c:["ne","ci","lo","la"], a:0, x:"Ne also replaces di + something: avere voglia di uscire → non ne ho voglia = I don't feel like it. Ci is the trap — ci stands for places or a + thing, not for di-phrases.", tr:"Do you feel like going out? — No, I don't feel like it."},
          {q:"'C'è' and 'ci sono' mean:", c:["there is / there are","it is / they are","here / there","he has / they have"], a:0, x:"Ci + essere expresses existence: c'è = there is (singular), ci sono = there are (plural). The verb agrees with what exists: c'è un problema, but ci sono due problemi.", ex:"Ci sono due banche in piazza.", tr:"There are two banks in the square."}
        ]},
        { id: "it_a2_g5", type: "grammar", title: "Grammar A2: Future, conditional & comparatives (futuro, condizionale)", lesson: "The future tense endings are -ò, -ai, -à, -emo, -ete, -anno on the future stem. Some stems are irregular: andare → andr- (Domani andrò a Milano — Tomorrow I will go to Milan), essere → sar- (saremo — we will be).\n\nThe conditional uses the same stems with -ei, -esti, -ebbe…: Vorrei un caffè, per favore (I would like a coffee, please — polite volere), Potresti aiutarmi? (Could you help me?).\n\nComparatives: use più/meno … di before nouns and pronouns (Roma è più grande di Firenze — Rome is bigger than Florence), but più … che when comparing two verbs, adjectives, or prepositional phrases (Mi piace più leggere che guardare la TV). The -issimo ending is the absolute superlative: buonissimo = very good. Irregulars: buono → migliore (adjective 'better'), bene → meglio (adverb).", items: [
          {q:"Domani ___ a Milano. (andare, futuro)", c:["andrò","vado","andrei","andavo"], a:0, x:"The future adds -ò, -ai, -à, -emo, -ete, -anno to the future stem, and andare contracts to andr-: andrò. Andrei is the conditional trap ('I would go'), and andavo is the imperfetto.", tr:"Tomorrow I will go to Milan."},
          {q:"The future of 'essere' (noi) is:", c:["saremo","seremo","essereremo","siamo"], a:0, x:"Essere has the irregular future stem sar-: sarò, sarai, sarà, saremo, sarete, saranno. Noi = saremo. Siamo is the present tense — the future needs the sar- stem plus the -emo ending.", ex:"Domani saremo a casa alle otto.", tr:"Tomorrow we will be at home at eight."},
          {q:"___ un caffè, per favore. (volere, conditional)", c:["Vorrei","Voglio","Vorrò","Volevo"], a:0, x:"The conditional (future stem + -ei, -esti, -ebbe...) softens requests: vorrei = I would like. Voglio is grammatical but blunt, and vorrò (future, 'I will want') doesn't work for a polite order.", tr:"I would like a coffee, please."},
          {q:"The conditional of 'potere' (tu) is:", c:["potresti","potrai","potevi","possa"], a:0, x:"The conditional uses the future stem plus -ei, -esti, -ebbe...: potere → potr- + -esti = potresti ('you could'). Potrai is the future trap ('you will be able'), potevi the imperfetto.", ex:"Potresti aprire la finestra, per favore?", tr:"Could you open the window, please?"},
          {q:"Roma è ___ grande ___ Firenze.", c:["più / di","più / che","tanto / di","meno / che"], a:0, x:"Before a noun or pronoun, comparison uses più/meno ... di: Roma è più grande di Firenze. Che is the trap — it is reserved for comparing two verbs, two adjectives, or two prepositional phrases.", tr:"Rome is bigger than Florence."},
          {q:"Mi piace ___ leggere ___ guardare la TV.", c:["più / che","più / di","tanto / di","così / come"], a:0, x:"When comparing two elements of the same kind — two verbs, adjectives, or prepositional phrases — use più ... che: mi piace più leggere che guardare la TV. Di would need a noun or pronoun as the second term.", tr:"I like reading more than watching TV."},
          {q:"'Buonissimo' means:", c:["very good (absolute superlative)","better","the best","quite good"], a:0, x:"The suffix -issimo forms the absolute superlative, 'very/extremely X' with no comparison: buonissimo = very good. It differs from the relative superlative il più buono ('the best'), which ranks within a group.", ex:"Questo gelato è buonissimo!", tr:"This ice cream is very good!"},
          {q:"The irregular comparative of 'buono' is:", c:["migliore","più buonissimo","ottimo sempre","meglio come aggettivo"], a:0, x:"Buono has the irregular comparative migliore (adjective: un vino migliore). The trap is meglio, which is the comparative of the adverb bene: si mangia meglio, but un ristorante migliore.", ex:"Questo vino è migliore di quello.", tr:"This wine is better than that one."}
        ]}
      ]
    },
    {
      id: "it_b1b2",
      title: "Italian Intermediate B1–B2",
      units: [
        { id: "it_b1_g1", type: "grammar", title: "Grammar B1: Relative & double pronouns (pronomi relativi & doppi)", lesson: "Relative pronouns: che covers 'who/that/which' as subject or direct object — Il libro che leggo è interessante (The book that I'm reading is interesting). After any preposition, switch to cui: la ragazza con cui parlo (the girl I'm talking with). Il quale / la quale is a more formal alternative that agrees in gender and number. Chi (no antecedent) means 'whoever / the one who': Chi studia, impara (Whoever studies, learns).\n\nDouble pronouns: when an indirect pronoun meets lo/la/li/le, mi and ti become me and te: Te lo do (I give it to you), Te la presto (I lend it to you). Gli and le both merge into glie-: gliele do (I give them to her/him). With the imperative they attach to the end of the verb: Dammelo! (Give it to me!).", items: [
          {q:"Il libro ___ leggo è interessante.", c:["che","cui","quale","chi"], a:0, x:"Che is the all-purpose relative pronoun for subject or direct object: il libro che leggo. Cui is the trap — it is used only after a preposition (con cui, a cui), never bare as subject or object.", tr:"The book I'm reading is interesting."},
          {q:"La ragazza ___ parlo è mia cugina. (with 'con')", c:["con cui","con che","con quale","chi"], a:0, x:"After any preposition the relative pronoun must be cui, not che: la ragazza con cui parlo. 'Con che' is the classic error — che works only when no preposition precedes.", tr:"The girl I'm talking with is my cousin."},
          {q:"'Il quale / la quale' can replace:", c:["che or cui (more formal)","only chi","only che","nothing"], a:0, x:"Article + quale (il quale, la quale, i quali, le quali) is a formal alternative to che/cui that shows gender and number, useful to avoid ambiguity: la ragazza con la quale parlo.", ex:"La ragazza con la quale parlo è italiana.", tr:"The girl with whom I speak is Italian."},
          {q:"___ studia, impara. (the one who)", c:["Chi","Che","Cui","Quale"], a:0, x:"Chi is the relative pronoun that contains its own antecedent: 'the one who / whoever'. Chi studia, impara. Che is the trap — it always needs a noun before it, so it can't open this sentence.", tr:"Whoever studies, learns."},
          {q:"Mi dai il libro? — Sì, ___ do. (double pronoun)", c:["te lo","ti lo","te la","lo ti"], a:0, x:"In double pronouns, mi/ti/ci/vi change -i to -e before lo/la/li/le: ti + lo = te lo do. The order is fixed — indirect first, then direct — so 'ti lo' and 'lo ti' are both impossible.", tr:"Will you give me the book? — Yes, I'll give it to you."},
          {q:"Dai le chiavi a Maria? — Sì, ___ do.", c:["gliele","le le","gliela","le do"], a:0, x:"Both gli (to him) and le (to her) become glie- and join the direct pronoun as one word: glie + le = gliele do = I give them to her. Le chiavi is feminine plural, hence -le, not -la.", tr:"Are you giving the keys to Maria? — Yes, I'm giving them to her."},
          {q:"Mi presti la penna? — Sì, ___ presto.", c:["te la","te lo","ti la","la te"], a:0, x:"Indirect + direct pronoun: ti becomes te before la (la penna is feminine): te la presto. The indirect pronoun always comes first and mi/ti shift to me/te — 'ti la' is the standard trap.", tr:"Will you lend me the pen? — Yes, I'll lend it to you."},
          {q:"With the imperative, double pronouns:", c:["attach to the end (Dammelo!)","come before","are not used","split around the verb"], a:0, x:"With the informal imperative, double pronouns attach to the end of the verb as one word: da' + me + lo = Dammelo! (note the doubled m). They precede the verb only in the negative or with formal Lei.", ex:"Dammelo subito, per favore!", tr:"Give it to me right away, please!"}
        ]},
        { id: "it_b1_g2", type: "grammar", title: "Grammar B1: The subjunctive (congiuntivo presente & imperfetto)", lesson: "The congiuntivo (subjunctive) follows verbs of opinion, doubt, desire, emotion and impersonal expressions: penso che, credo che, voglio che, è possibile che, and conjunctions like benché (although). Certainty takes the plain indicative: So che ha ragione (I know he is right) — no subjunctive after sapere.\n\nCongiuntivo presente: che io sia (essere), che lui abbia (avere), che loro partano. Penso che lui abbia ragione (I think he is right); Credo che loro partano domani (I believe they leave tomorrow); È importante che voi stiate attenti (It's important that you pay attention).\n\nWhen the main verb is in a past tense, use the congiuntivo imperfetto: che io fossi (essere), che tu venissi. Volevo che tu venissi con me (I wanted you to come with me); Benché fosse tardi, siamo usciti (Although it was late, we went out).", items: [
          {q:"Penso che lui ___ ragione. (avere)", c:["abbia","ha","avesse","avrà"], a:0, x:"Verbs of opinion like pensare che trigger the congiuntivo: penso che lui abbia ragione. The indicative ha is the classic trap — it is fine after so che (certainty) but not after penso che.", tr:"I think he is right."},
          {q:"The congiuntivo presente of 'essere' (lui) is:", c:["sia","è","fosse","sarà"], a:0, x:"The congiuntivo presente of essere: che io sia, tu sia, lui sia, noi siamo, voi siate, loro siano. Fosse is the imperfetto subjunctive, used after a past main verb — not after present penso che.", ex:"Penso che lui sia molto stanco.", tr:"I think he is very tired."},
          {q:"Credo che loro ___ domani. (partire)", c:["partano","partono","partissero","partiranno"], a:0, x:"Belief verbs (credere che) take the congiuntivo: che loro partano. Partono (indicative) is the trap, and since the main verb credo is present, the present subjunctive — not partissero — is required.", tr:"I believe they are leaving tomorrow."},
          {q:"After which expression do you NOT need the congiuntivo?", c:["So che…","Penso che…","È possibile che…","Voglio che…"], a:0, x:"The congiuntivo is triggered by opinion, doubt, desire and emotion (penso che, è possibile che, voglio che). Sapere expresses certainty, so it takes the plain indicative: so che ha ragione.", ex:"So che hai ragione tu.", tr:"I know that you are right."},
          {q:"Volevo che tu ___ con me. (venire, imperfetto cong.)", c:["venissi","vieni","venga","verresti"], a:0, x:"Sequence of tenses: a past main verb (volevo) requires the congiuntivo imperfetto: volevo che tu venissi. Venga is the trap — the present subjunctive pairs with a present main verb (voglio che tu venga).", tr:"I wanted you to come with me."},
          {q:"The congiuntivo imperfetto of 'essere' (io) is:", c:["fossi","ero","sia","sarei"], a:0, x:"The congiuntivo imperfetto of essere: che io fossi, tu fossi, lui fosse, noi fossimo, voi foste, loro fossero. Ero is the plain indicative imperfetto — fossi is used after past triggers and in se-clauses.", ex:"Pensava che io fossi italiano.", tr:"He thought I was Italian."},
          {q:"È importante che voi ___ attenti. (stare)", c:["stiate","state","stavate","stareste"], a:0, x:"Impersonal expressions of importance or necessity (è importante che) trigger the congiuntivo: che voi stiate attenti. State (indicative) is the trap; stare's present subjunctive is stia, stia, stia, stiamo, stiate, stiano.", tr:"It's important that you pay attention."},
          {q:"Benché ___ tardi, siamo usciti. (essere)", c:["fosse","era","sia stato","sarebbe"], a:0, x:"Concessive conjunctions like benché (although) always take the congiuntivo, and the past context calls for the imperfetto: benché fosse tardi. Era (indicative) is the trap — benché/sebbene never take the indicative.", tr:"Although it was late, we went out."}
        ]},
        { id: "it_b1_g3", type: "grammar", title: "Grammar B1: If-clauses & past conditional (periodo ipotetico)", lesson: "Italian if-clauses come in three types. Type 1 (real): se + presente, presente/futuro — Se piove, resto a casa (If it rains, I stay home). Type 2 (unlikely/unreal present): se + congiuntivo imperfetto, condizionale — Se avessi tempo, viaggerei di più (If I had time, I would travel more); Se fossi in te, partirei subito (If I were you, I'd leave right away). Type 3 (unreal past): se + congiuntivo trapassato, condizionale passato — Se avessi studiato, avrei passato l'esame (If I had studied, I would have passed the exam).\n\nThe condizionale passato = conditional of avere/essere + participle: avrei passato, sarei andato (essere-verbs agree: sarei andata). It also expresses the 'future in the past' in reported speech: Ha detto che sarebbe venuto (He said he would come).", items: [
          {q:"Se piove, ___ a casa. (restare - real condition)", c:["resto","resterei","restassi","sarei restato"], a:0, x:"Type 1 (real) conditions use the indicative on both sides: se + presente, then presente or futuro: Se piove, resto a casa. No subjunctive or conditional is needed when the condition is realistic.", tr:"If it rains, I stay home."},
          {q:"Se avessi tempo, ___ di più. (viaggiare)", c:["viaggerei","viaggio","viaggiassi","avrei viaggiato"], a:0, x:"Type 2 (unlikely/unreal present): se + congiuntivo imperfetto in the if-clause, condizionale in the result: Se avessi tempo, viaggerei. Putting the conditional inside the se-clause is the classic error.", tr:"If I had time, I would travel more."},
          {q:"Se avessi studiato, ___ l'esame. (passare)", c:["avrei passato","passerei","passavo","abbia passato"], a:0, x:"Type 3 (unreal past): se + congiuntivo trapassato (avessi studiato), result in the condizionale passato: avrei passato l'esame. Plain passerei would wrongly shift the unreal-past result into the present.", tr:"If I had studied, I would have passed the exam."},
          {q:"The condizionale passato of 'andare' (io) is:", c:["sarei andato","avrei andato","andrei","fossi andato"], a:0, x:"The condizionale passato = conditional of the auxiliary + participle, and andare takes essere: sarei andato/a. 'Avrei andato' is the avere/essere trap — movement verbs keep essere in every compound tense.", ex:"Sarei andato alla festa con te.", tr:"I would have gone to the party with you."},
          {q:"'Ha detto che sarebbe venuto' — the condizionale passato expresses:", c:["future in the past","a wish","politeness","doubt"], a:0, x:"In reported speech after a past verb, the condizionale passato expresses the future-in-the-past: Ha detto che sarebbe venuto = he said he would come. Italian uses this compound form, not the simple conditional.", ex:"Ha detto che sarebbe venuto presto.", tr:"He said he would come."},
          {q:"Se fossi in te, ___ subito. (partire)", c:["partirei","parto","partissi","sarei partito"], a:0, x:"Type 2 hypothetical: the se-clause takes the congiuntivo imperfetto (se fossi in te = if I were you), so the main clause takes the conditional: partirei. Parto or partissi in the result clause breaks the pattern.", tr:"If I were you, I would leave right away."}
        ]},
        { id: "it_b1_g4", type: "grammar", title: "Grammar B1: Indefinites, impersonal 'si' & historic past (passato remoto)", lesson: "Indefinites: ogni (every) and qualche (some) are always followed by a SINGULAR noun, even when the meaning is plural — ogni persona (every person), qualche libro (some books). For a plural form use alcuni/alcune: alcuni libri (some books).\n\nThe impersonal si means 'one/people in general': In Italia si mangia bene (In Italy one eats well). The passive si (si passivante) makes the noun the subject, so the verb agrees with it: Si vendono case qui (Houses are sold here — plural verb).\n\nThe passato remoto is the literary past, used in written narrative and in everyday speech mainly in southern Italy. Essere: fui, fosti, fu, fummo, foste, furono (lui fu — he was). Fare: feci, facesti, fece, facemmo, faceste, fecero (loro fecero — they did).", items: [
          {q:"___ persona può imparare. (every)", c:["Ogni","Ognuno","Tutti","Qualche"], a:0, x:"Ogni (every) is invariable and always takes a singular noun: ogni persona, ogni giorno. Tutti would need article + plural (tutte le persone), and qualche means 'some', not 'every'.", tr:"Every person can learn."},
          {q:"'Qualche' is always followed by:", c:["a singular noun","a plural noun","an article","a verb"], a:0, x:"Qualche always takes a singular noun even though the meaning is plural: qualche libro = some books. Following it with a plural ('qualche libri') is the classic trap; for a plural form use alcuni.", ex:"Ho comprato qualche libro nuovo.", tr:"I bought some new books."},
          {q:"'Alcuni/alcune' means:", c:["some (plural)","none","each","someone"], a:0, x:"Alcuni/alcune + plural noun is the plural way to say 'some': alcuni libri = some books. It matches qualche + singular in meaning — only the grammar (plural vs obligatory singular) differs.", ex:"Alcuni amici vengono a cena stasera.", tr:"Some friends are coming to dinner tonight."},
          {q:"In Italia ___ mangia bene. (impersonal si)", c:["si","ci","ne","uno si"], a:0, x:"The impersonal si + 3rd-person singular verb means 'one/people in general': in Italia si mangia bene. No extra pronoun is added — 'uno si mangia' doubles the impersonal marker.", tr:"In Italy one eats well."},
          {q:"___ vendono case qui. (passive si)", c:["Si","Ci","Ne","Le"], a:0, x:"In the passive si (si passivante) the noun becomes the subject, so the verb agrees with it: si vendono case (plural verb). With a singular noun it would be si vende una casa — agreement is the test.", tr:"Houses are sold here."},
          {q:"The passato remoto of 'essere' (lui) is:", c:["fu","era","è stato","fosse"], a:0, x:"The passato remoto of essere: fui, fosti, fu, fummo, foste, furono; lui = fu. Era is the imperfetto and è stato the passato prossimo — three distinct past tenses of essere.", ex:"Dante fu un grande poeta.", tr:"Dante was a great poet."},
          {q:"The passato remoto of 'fare' (loro) is:", c:["fecero","facevano","fanno","facessero"], a:0, x:"Fare has an irregular passato remoto: feci, facesti, fece, facemmo, faceste, fecero; loro = fecero. Facevano is the imperfetto trap, and facessero is the congiuntivo imperfetto.", ex:"I nonni fecero un lungo viaggio.", tr:"The grandparents took a long trip."},
          {q:"The passato remoto is mostly used:", c:["in written narrative & (spoken) southern Italy","in everyday northern speech","for the future","for politeness"], a:0, x:"The passato remoto narrates completed, distant events in writing (novels, history); in speech it survives mainly in southern Italy. Northern and central spoken Italian uses the passato prossimo instead.", ex:"Nel 1990 la famiglia partì per Roma.", tr:"In 1990 the family left for Rome."}
        ]},
        { id: "it_b2_g1", type: "grammar", title: "Grammar B2: Future perfect & past subjunctives (futuro anteriore, congiuntivi)", lesson: "The futuro anteriore (future perfect) = future of avere/essere + participle: Quando arriverai, io avrò già mangiato (When you arrive, I will have already eaten). It is also very common for guesses about the past: Sarà già partito (He has probably already left).\n\nThe congiuntivo passato = congiuntivo presente of avere/essere + participle (che io abbia mangiato, che io sia andato). Use it for a PRESENT opinion about a PAST event: Penso che lui sia arrivato ieri (I think he arrived yesterday).\n\nThe congiuntivo trapassato = congiuntivo imperfetto of avere/essere + participle (avessi detto, fosse arrivato). Use it when the main verb is in the past and the event is earlier still: Pensavo che lui fosse arrivato prima (I thought he had arrived earlier); Speravo che tu avessi detto la verità (I hoped you had told the truth).", items: [
          {q:"Quando arriverai, io ___ già ___. (mangiare, futuro anteriore)", c:["avrò … mangiato","ho … mangiato","avrei … mangiato","avevo … mangiato"], a:0, x:"The futuro anteriore (future of the auxiliary + participle) marks an action completed before another future event: quando arriverai, avrò già mangiato. Ho/avevo mangiato are past tenses and can't sit in this future frame.", tr:"When you arrive, I will have already eaten."},
          {q:"'Sarà già partito' can express:", c:["a guess about the past","a certainty","a command","a habit"], a:0, x:"Besides future-before-future, the futuro anteriore commonly expresses a guess about the past: Sarà già partito = he has probably already left. It conveys probability, not certainty or command.", ex:"Sarà già partito per Milano.", tr:"He has probably already left."},
          {q:"Penso che lui ___ ieri. (arrivare, congiuntivo passato)", c:["sia arrivato","è arrivato","fosse arrivato","arrivasse"], a:0, x:"A present opinion about a past event takes the congiuntivo passato (present subjunctive of the auxiliary + participle): penso che sia arrivato. Fosse arrivato is the trap — the trapassato needs a past main verb (pensavo).", tr:"I think he arrived yesterday."},
          {q:"Pensavo che lui ___ prima. (arrivare, congiuntivo trapassato)", c:["fosse arrivato","sia arrivato","arrivasse","è arrivato"], a:0, x:"With a past main verb (pensavo) and an event earlier still, use the congiuntivo trapassato: fosse arrivato. Sia arrivato is the trap — the congiuntivo passato pairs with a present main verb (penso che).", tr:"I thought he had arrived earlier."},
          {q:"The congiuntivo passato is formed with:", c:["congiuntivo presente of avere/essere + participle","avere/essere imperfetto + participle","the future + participle","the gerund"], a:0, x:"The congiuntivo passato = congiuntivo presente of avere/essere + past participle: che io abbia mangiato, che io sia andato. Using the imperfetto auxiliary instead (avessi mangiato) gives the trapassato.", ex:"Penso che Maria sia già partita.", tr:"I think Maria has already left."},
          {q:"Speravo che tu ___ la verità. (dire, cong. trapassato)", c:["avessi detto","abbia detto","dicessi","hai detto"], a:0, x:"Sequence of tenses: past main verb (speravo) + an earlier event → congiuntivo trapassato: avessi detto. Abbia detto would need a present main verb, and hai detto (indicative) can't follow sperare che.", tr:"I hoped you had told the truth."}
        ]},
        { id: "it_b2_g2", type: "grammar", title: "Grammar B2: Passives, pluperfect & agreement (passivo, trapassato)", lesson: "The passive is formed with essere + past participle (agreeing with the subject): La casa è stata costruita nel 1990 (The house was built in 1990). Venire can replace essere in simple tenses to stress the process: La porta viene chiusa ogni sera (The door is/gets closed every evening). Andare + participle adds necessity: Il lavoro va finito entro oggi (The work must be finished by today).\n\nThe trapassato prossimo (past perfect) = imperfetto of avere/essere + participle: Quando arrivai, il treno era già partito (When I arrived, the train had already left).\n\nConcordanza dei tempi (sequence of tenses): after a present main verb, a later event takes the future — Dice che verrà (He says he will come); after a past main verb, condizionale passato — Disse che sarebbe venuto (He said he would come). 'Improper' prepositions include oltre, verso, presso: oltre il ponte (beyond the bridge).", items: [
          {q:"La casa ___ costruita nel 1990.", c:["è stata","ha stata","era stato","fu essere"], a:0, x:"The passive = essere + past participle, with both parts agreeing with the subject: la casa è stata costruita. Avere ('ha stata') is impossible — passives are always built on essere (or venire).", tr:"The house was built in 1990."},
          {q:"The passive can also be formed with 'venire':", c:["La porta viene chiusa ogni sera.","La porta va chiusa ieri.","La porta è venuta chiusa.","La porta venne di chiudere."], a:0, x:"Venire can replace essere in the passive to stress the process, but only in simple tenses: la porta viene chiusa ogni sera. In compound tenses (è stata chiusa) you must return to essere.", ex:"La cena viene servita alle otto.", tr:"The door is closed every evening."},
          {q:"'Il lavoro va finito entro oggi' (andare + participle) expresses:", c:["necessity (must be finished)","a completed action","possibility","a wish"], a:0, x:"Andare + past participle is a passive of necessity: il lavoro va finito = the work must be finished (va finito ≈ deve essere finito). It expresses obligation, not motion or a completed action.", ex:"Questa lettera va spedita oggi.", tr:"The work must be finished by today."},
          {q:"Quando arrivai, il treno ___ già ___. (partire, trapassato)", c:["era … partito","è … partito","fu … partito","aveva … partito"], a:0, x:"The trapassato prossimo (imperfetto of the auxiliary + participle) marks a past event before another past event: il treno era già partito. Partire takes essere, so era partito — 'aveva partito' is the auxiliary trap.", tr:"When I arrived, the train had already left."},
          {q:"Concordanza: Dice che ___ domani. (venire)", c:["verrà","venga sempre","sarebbe venuto","veniva"], a:0, x:"Concordanza dei tempi: after a present main verb, a later event takes the futuro: dice che verrà. Dire states a fact, so no subjunctive (venga); sarebbe venuto pairs only with a past main verb.", tr:"He says he will come tomorrow."},
          {q:"Concordanza: Disse che ___ il giorno dopo. (venire)", c:["sarebbe venuto","verrà","venga","viene"], a:0, x:"After a past main verb (disse), a later event takes the condizionale passato — Italian's future-in-the-past: disse che sarebbe venuto. The simple future (verrà) is the classic anglophone trap here.", tr:"He said he would come the next day."},
          {q:"Preposizione impropria: '___ il ponte' (beyond)", c:["oltre","fra","verso","presso"], a:0, x:"Improper prepositions are adverb-like words used prepositionally: oltre, verso, presso, lungo. Oltre = beyond: oltre il ponte. Verso = towards and presso = at/near — same category, different meanings.", tr:"Beyond the bridge."}
        ]},
        { id: "it_b1_v1", type: "vocab", title: "Vocab B1: Emotions (emozioni)", items: [
          {t:"l'emozione", e:"the emotion"}, {t:"felice", e:"happy"}, {t:"triste", e:"sad"},
          {t:"arrabbiato", e:"angry"}, {t:"la rabbia", e:"the anger"}, {t:"la paura", e:"the fear"},
          {t:"spaventato", e:"scared"}, {t:"preoccupato", e:"worried"}, {t:"la gioia", e:"the joy"},
          {t:"l'amore", e:"the love"}, {t:"l'odio", e:"the hate"}, {t:"la speranza", e:"the hope"},
          {t:"deluso", e:"disappointed"}, {t:"la delusione", e:"the disappointment"},
          {t:"sorpreso", e:"surprised"}, {t:"la vergogna", e:"the shame"},
          {t:"imbarazzato", e:"embarrassed"}, {t:"geloso", e:"jealous"},
          {t:"l'invidia", e:"the envy"}, {t:"orgoglioso", e:"proud"},
          {t:"stressato", e:"stressed"}, {t:"rilassato", e:"relaxed"},
          {t:"annoiato", e:"bored"}, {t:"entusiasta", e:"enthusiastic"},
          {t:"commosso", e:"moved / touched"}, {t:"sentirsi", e:"to feel"}
        ]},
        { id: "it_b1_v2", type: "vocab", title: "Vocab B1: Connectors & fillers (connettori testuali)", items: [
          {t:"quindi", e:"therefore / so"}, {t:"però", e:"however / but"}, {t:"infatti", e:"in fact"},
          {t:"inoltre", e:"moreover"}, {t:"tuttavia", e:"nevertheless"}, {t:"invece", e:"instead"},
          {t:"anzi", e:"on the contrary / rather"}, {t:"cioè", e:"that is / I mean"},
          {t:"insomma", e:"in short / well"}, {t:"comunque", e:"anyway"},
          {t:"allora", e:"so / then"}, {t:"dunque", e:"therefore"},
          {t:"mentre", e:"while / whereas"}, {t:"siccome", e:"since / because"},
          {t:"perciò", e:"for this reason"}, {t:"nonostante", e:"despite"},
          {t:"a proposito", e:"by the way"}, {t:"in effetti", e:"indeed / actually"},
          {t:"purtroppo", e:"unfortunately"}, {t:"per fortuna", e:"luckily"},
          {t:"magari", e:"maybe / if only"}, {t:"addirittura", e:"even / no less"},
          {t:"praticamente", e:"practically"}, {t:"insieme", e:"together"}
        ]},
        { id: "it_b2_v1", type: "vocab", title: "Vocab B2: Advice & opinions (consigli & opinioni)", items: [
          {t:"il consiglio", e:"the advice"}, {t:"consigliare", e:"to advise"},
          {t:"suggerire", e:"to suggest"}, {t:"proporre", e:"to propose"},
          {t:"secondo me", e:"in my opinion"}, {t:"dal mio punto di vista", e:"from my point of view"},
          {t:"sono d'accordo", e:"I agree"}, {t:"non sono d'accordo", e:"I disagree"},
          {t:"avere ragione", e:"to be right"}, {t:"avere torto", e:"to be wrong"},
          {t:"il vantaggio", e:"the advantage"}, {t:"lo svantaggio", e:"the disadvantage"},
          {t:"la scelta", e:"the choice"}, {t:"scegliere", e:"to choose"},
          {t:"decidere", e:"to decide"}, {t:"la decisione", e:"the decision"},
          {t:"convincere", e:"to convince"}, {t:"dubitare", e:"to doubt"},
          {t:"il dubbio", e:"the doubt"}, {t:"la questione", e:"the issue / question"},
          {t:"discutere", e:"to discuss"}, {t:"la discussione", e:"the discussion"},
          {t:"valutare", e:"to evaluate"}, {t:"conviene", e:"it is advisable / worth it"}
        ]}
      ]
    }
  ]
};
