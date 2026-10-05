// Dutch quiz data — mirrors the two Udemy courses:
//  1. "Learn Dutch: Fast & Fun Speaking Method for Beginners" (conversation-based)
//  2. "Complete Dutch grammar course: from zero to expert"
// Vocab units follow the speaking course's Real-World Conversation topics.
// Grammar units follow the grammar course's tiers (basic → most advanced).
window.QUIZ_DATA = window.QUIZ_DATA || {};
window.QUIZ_DATA.dutch = {
  name: "Dutch",
  flag: "🇳🇱",
  ttsLang: "nl-NL",
  courses: [
    {
      id: "nl_speak",
      title: "Learn Dutch: Fast & Fun Speaking Method",
      units: [
        { id: "nl_sp_v1", type: "vocab", title: "Vocab: Greetings & introductions (Conv. 1-5)", items: [
          {t:"hallo", e:"hello"}, {t:"hoi", e:"hi"}, {t:"goedemorgen", e:"good morning"},
          {t:"goedemiddag", e:"good afternoon"}, {t:"goedenavond", e:"good evening"},
          {t:"dag", e:"hello / bye"}, {t:"doei", e:"bye (informal)"}, {t:"tot ziens", e:"goodbye"},
          {t:"tot morgen", e:"see you tomorrow"}, {t:"tot straks", e:"see you later"},
          {t:"alsjeblieft", e:"please / here you go (informal)"}, {t:"alstublieft", e:"please (formal)"},
          {t:"dank je wel", e:"thank you (informal)"}, {t:"dank u wel", e:"thank you (formal)"},
          {t:"graag gedaan", e:"you're welcome"}, {t:"sorry", e:"sorry"},
          {t:"pardon", e:"excuse me"}, {t:"hoe gaat het?", e:"how are you?"},
          {t:"het gaat goed", e:"I'm doing well"}, {t:"hoe heet je?", e:"what's your name?"},
          {t:"ik heet…", e:"my name is…"}, {t:"wie ben jij?", e:"who are you?"},
          {t:"aangenaam", e:"nice to meet you"}, {t:"waar kom je vandaan?", e:"where are you from?"},
          {t:"ik kom uit Amerika", e:"I come from America"}, {t:"spreek je Engels?", e:"do you speak English?"},
          {t:"ik spreek een beetje Nederlands", e:"I speak a little Dutch"},
          {t:"ik begrijp het niet", e:"I don't understand"}, {t:"ja", e:"yes"}, {t:"nee", e:"no"},
          {t:"misschien", e:"maybe"}, {t:"welkom", e:"welcome"}
        ]},
        { id: "nl_sp_v2", type: "vocab", title: "Vocab: Family, languages & nationalities (Conv. 6)", items: [
          {t:"de familie", e:"the family"}, {t:"de moeder", e:"the mother"}, {t:"de vader", e:"the father"},
          {t:"de ouders", e:"the parents"}, {t:"de broer", e:"the brother"}, {t:"de zus", e:"the sister"},
          {t:"de zoon", e:"the son"}, {t:"de dochter", e:"the daughter"},
          {t:"de opa", e:"the grandpa"}, {t:"de oma", e:"the grandma"},
          {t:"de man", e:"the man / husband"}, {t:"de vrouw", e:"the woman / wife"},
          {t:"het kind", e:"the child"}, {t:"de kinderen", e:"the children"},
          {t:"de vriend", e:"the friend (m.) / boyfriend"}, {t:"de vriendin", e:"the friend (f.) / girlfriend"},
          {t:"de baby", e:"the baby"}, {t:"getrouwd", e:"married"},
          {t:"het land", e:"the country"}, {t:"de taal", e:"the language"},
          {t:"Nederland", e:"the Netherlands"}, {t:"Nederlands", e:"Dutch (language)"},
          {t:"Duitsland", e:"Germany"}, {t:"Frankrijk", e:"France"},
          {t:"Engels", e:"English"}, {t:"Amerikaans", e:"American"},
          {t:"de nationaliteit", e:"the nationality"}, {t:"wonen", e:"to live / reside"},
          {t:"ik woon in…", e:"I live in…"}, {t:"spreken", e:"to speak"}
        ]},
        { id: "nl_sp_v3", type: "vocab", title: "Vocab: Numbers 1-1000 & time", items: [
          {t:"een", e:"one"}, {t:"twee", e:"two"}, {t:"drie", e:"three"}, {t:"vier", e:"four"},
          {t:"vijf", e:"five"}, {t:"zes", e:"six"}, {t:"zeven", e:"seven"}, {t:"acht", e:"eight"},
          {t:"negen", e:"nine"}, {t:"tien", e:"ten"}, {t:"elf", e:"eleven"}, {t:"twaalf", e:"twelve"},
          {t:"dertien", e:"thirteen"}, {t:"veertien", e:"fourteen"}, {t:"vijftien", e:"fifteen"},
          {t:"zestien", e:"sixteen"}, {t:"zeventien", e:"seventeen"}, {t:"achttien", e:"eighteen"},
          {t:"negentien", e:"nineteen"}, {t:"twintig", e:"twenty"},
          {t:"eenentwintig", e:"twenty-one"}, {t:"dertig", e:"thirty"}, {t:"veertig", e:"forty"},
          {t:"vijftig", e:"fifty"}, {t:"zestig", e:"sixty"}, {t:"zeventig", e:"seventy"},
          {t:"tachtig", e:"eighty"}, {t:"negentig", e:"ninety"}, {t:"honderd", e:"one hundred"},
          {t:"duizend", e:"one thousand"}, {t:"hoe laat is het?", e:"what time is it?"},
          {t:"het is drie uur", e:"it is three o'clock"}, {t:"half vier", e:"half past three (lit. half four)"},
          {t:"kwart over twee", e:"quarter past two"}, {t:"kwart voor vijf", e:"quarter to five"}
        ]},
        { id: "nl_sp_v4", type: "vocab", title: "Vocab: Living arrangements & surroundings (Conv. 7-8)", items: [
          {t:"het huis", e:"the house"}, {t:"de woning", e:"the home / dwelling"},
          {t:"de flat", e:"the apartment"}, {t:"de kamer", e:"the room"},
          {t:"de keuken", e:"the kitchen"}, {t:"de badkamer", e:"the bathroom"},
          {t:"de slaapkamer", e:"the bedroom"}, {t:"de woonkamer", e:"the living room"},
          {t:"de tuin", e:"the garden"}, {t:"het balkon", e:"the balcony"},
          {t:"de deur", e:"the door"}, {t:"het raam", e:"the window"},
          {t:"de tafel", e:"the table"}, {t:"de stoel", e:"the chair"},
          {t:"het bed", e:"the bed"}, {t:"de kast", e:"the closet / cupboard"},
          {t:"de bank", e:"the couch / bank"}, {t:"de trap", e:"the stairs"},
          {t:"de huur", e:"the rent"}, {t:"huren", e:"to rent"}, {t:"verhuizen", e:"to move (house)"},
          {t:"de buren", e:"the neighbors"}, {t:"de stad", e:"the city"},
          {t:"het dorp", e:"the village"}, {t:"de straat", e:"the street"},
          {t:"de buurt", e:"the neighborhood"}, {t:"dichtbij", e:"nearby"},
          {t:"ver weg", e:"far away"}, {t:"gezellig", e:"cozy / convivial"},
          {t:"de fiets", e:"the bicycle"}
        ]},
        { id: "nl_sp_v5", type: "vocab", title: "Vocab: Locations & appointments (Conv. 9)", items: [
          {t:"waar is…?", e:"where is…?"}, {t:"de afspraak", e:"the appointment"},
          {t:"het station", e:"the station"}, {t:"de trein", e:"the train"},
          {t:"de bus", e:"the bus"}, {t:"de auto", e:"the car"},
          {t:"de winkel", e:"the shop"}, {t:"de markt", e:"the market"},
          {t:"het café", e:"the café"}, {t:"het restaurant", e:"the restaurant"},
          {t:"het park", e:"the park"}, {t:"het museum", e:"the museum"},
          {t:"de kerk", e:"the church"}, {t:"het ziekenhuis", e:"the hospital"},
          {t:"de school", e:"the school"}, {t:"het kantoor", e:"the office"},
          {t:"links", e:"left"}, {t:"rechts", e:"right"}, {t:"rechtdoor", e:"straight ahead"},
          {t:"de hoek", e:"the corner"}, {t:"naast", e:"next to"}, {t:"tegenover", e:"opposite"},
          {t:"tussen", e:"between"}, {t:"achter", e:"behind"}, {t:"voor", e:"in front of / for"},
          {t:"boven", e:"above / upstairs"}, {t:"beneden", e:"below / downstairs"},
          {t:"vandaag", e:"today"}, {t:"morgen", e:"tomorrow"}, {t:"gisteren", e:"yesterday"},
          {t:"volgende week", e:"next week"}, {t:"het weekend", e:"the weekend"}
        ]},
        { id: "nl_sp_v6", type: "vocab", title: "Vocab: Buying food & groceries (Conv. 10-13)", items: [
          {t:"het eten", e:"the food"}, {t:"de boodschappen", e:"the groceries"},
          {t:"boodschappen doen", e:"to do the shopping"}, {t:"de supermarkt", e:"the supermarket"},
          {t:"het brood", e:"the bread"}, {t:"de kaas", e:"the cheese"},
          {t:"de melk", e:"the milk"}, {t:"het ei", e:"the egg"}, {t:"de boter", e:"the butter"},
          {t:"het vlees", e:"the meat"}, {t:"de vis", e:"the fish"}, {t:"de kip", e:"the chicken"},
          {t:"de groente", e:"the vegetables"}, {t:"het fruit", e:"the fruit"},
          {t:"de appel", e:"the apple"}, {t:"de banaan", e:"the banana"},
          {t:"de sinaasappel", e:"the orange"}, {t:"de aardappel", e:"the potato"},
          {t:"de tomaat", e:"the tomato"}, {t:"de ui", e:"the onion"},
          {t:"het water", e:"the water"}, {t:"de koffie", e:"the coffee"}, {t:"de thee", e:"the tea"},
          {t:"het bier", e:"the beer"}, {t:"de wijn", e:"the wine"}, {t:"het sap", e:"the juice"},
          {t:"de koek", e:"the cookie / cake"}, {t:"het snoep", e:"the candy"},
          {t:"hoeveel kost het?", e:"how much does it cost?"}, {t:"duur", e:"expensive"},
          {t:"goedkoop", e:"cheap"}, {t:"betalen", e:"to pay"}, {t:"kopen", e:"to buy"},
          {t:"verkopen", e:"to sell"}, {t:"ik wil graag…", e:"I would like…"},
          {t:"een kilo", e:"a kilo"}, {t:"een stukje", e:"a little piece"}
        ]},
        { id: "nl_sp_v7", type: "vocab", title: "Vocab: Colors, basics & 'How to say' topics", items: [
          {t:"de kleur", e:"the color"}, {t:"rood", e:"red"}, {t:"blauw", e:"blue"},
          {t:"geel", e:"yellow"}, {t:"groen", e:"green"}, {t:"oranje", e:"orange"},
          {t:"paars", e:"purple"}, {t:"roze", e:"pink"}, {t:"zwart", e:"black"},
          {t:"wit", e:"white"}, {t:"grijs", e:"gray"}, {t:"bruin", e:"brown"},
          {t:"gefeliciteerd", e:"congratulations / happy birthday"},
          {t:"fijne verjaardag", e:"happy birthday"}, {t:"ik hou van jou", e:"I love you"},
          {t:"veel succes", e:"good luck"}, {t:"beterschap", e:"get well soon"},
          {t:"smakelijk eten", e:"enjoy your meal"}, {t:"proost", e:"cheers"},
          {t:"het alfabet", e:"the alphabet"}, {t:"de verjaardag", e:"the birthday"},
          {t:"het feest", e:"the party"}, {t:"het cadeau", e:"the present / gift"},
          {t:"mooi", e:"beautiful"}, {t:"lelijk", e:"ugly"}, {t:"groot", e:"big"},
          {t:"klein", e:"small"}, {t:"nieuw", e:"new"}, {t:"oud", e:"old"},
          {t:"goed", e:"good"}, {t:"slecht", e:"bad"}, {t:"leuk", e:"nice / fun"}
        ]},
        { id: "nl_sp_g1", type: "grammar", title: "Grammar Boosters: present tense & pronouns", lesson: "Dutch present tense is built on the verb's stem (the infinitive minus -en). Use the bare stem with ik: Ik werk (I work). Add -t for jij/hij/zij/u: Jij werkt (You work). Two twists: when the verb comes before jij/je in a question, the -t drops — Werk jij? (Do you work?) — and plural subjects (wij/jullie/zij) simply use the full infinitive: Wij werken (We work). Memorize the irregulars zijn (ik ben, jij bent, hij is, wij zijn) and hebben (ik heb, jij hebt, hij heeft). Use u as the polite, formal 'you'. Pronouns also change as objects: ik becomes mij/me — Hij ziet mij (He sees me) — and spoken Dutch usually uses ze for 'them': Ik zie ze (I see them).", items: [
          {q:"Conjugate: ik ___ (werken)", c:["werk","werkt","werken","werke"], a:0, x:"The ik-form is always the bare stem: the infinitive minus -en, so werken → werk. 'Werkt' adds the -t that belongs to jij/hij/zij, and 'werken' is the plural/infinitive form — neither fits ik.", tr:"I work."},
          {q:"Conjugate: jij ___ (werken)", c:["werkt","werk","werken","werkte"], a:0, x:"Second and third person singular (jij/hij/zij/u) add -t to the stem: jij werkt. Bare 'werk' is only for ik (or inverted questions), and 'werken' is reserved for plural subjects.", tr:"You work."},
          {q:"'Werk jij?' — why no -t on werk?", c:["jij after the verb drops the -t","it's a mistake","werk is irregular","questions never use -t"], a:0, x:"When the verb comes BEFORE jij/je (inversion, as in questions), the -t drops: Werk jij? This happens only with jij/je — with hij or u the -t stays: Werkt hij? Werkt u?", ex:"Werk jij?", tr:"Do you work?"},
          {q:"Conjugate: wij ___ (werken)", c:["werken","werkt","werk","werkens"], a:0, x:"All plural subjects (wij/jullie/zij) simply use the full infinitive: wij werken. The stem and stem+t forms (werk, werkt) belong to the singular persons only.", tr:"We work."},
          {q:"Conjugate: hij ___ (zijn)", c:["is","ben","bent","zijn"], a:0, x:"Zijn is irregular and must be memorized: ik ben, jij bent, hij is, wij zijn. 'Ben' and 'bent' are first and second person, so only 'is' fits hij.", tr:"He is."},
          {q:"Conjugate: ik ___ (hebben)", c:["heb","hebt","heeft","hebben"], a:0, x:"Hebben is irregular: ik heb, jij hebt, hij heeft, wij hebben. The ik-form is the bare stem heb — 'heeft' is a trap because it belongs only to hij/zij/u.", tr:"I have."},
          {q:"'U' is used for:", c:["formal address","plural only","children","family"], a:0, x:"U is the polite, formal 'you' used with strangers, elders and in business — singular or plural. Informal address uses jij/je instead; u signals politeness, not number.", ex:"Hoe heet u?", tr:"What is your name? (formal)"},
          {q:"The object pronoun for 'ik' is:", c:["mij / me","ik","mijn","wij"], a:0, x:"Subject pronouns change form as objects: ik (I) becomes mij/me (me) — Hij ziet mij. 'Mijn' is the trap: it is the possessive 'my', not an object pronoun.", ex:"Hij ziet mij.", tr:"He sees me."},
          {q:"'Hun' vs 'hen' vs 'ze' — 'Ik zie ___' (them, common spoken form):", c:["ze","hun","zij","hem"], a:0, x:"For 'them', spoken Dutch normally uses unstressed ze: Ik zie ze. Formal writing distinguishes hen (direct object) from hun (indirect), but 'hun' as a default object or subject is a classic error.", tr:"I see them."}
        ]},
        { id: "nl_sp_g2", type: "grammar", title: "Grammar Boosters: de/het/een, plurals & possessives", lesson: "Every Dutch noun is either a de-word or a het-word, and the article must be memorized with the noun: de man (the man), het huis (the house). Two reliable shortcuts: ALL plurals take de (de huizen — the houses), and ALL diminutives ending in -je take het (het huisje — the little house). The most common plural ending is -en (boek → boeken); words with unstressed endings take -s (tafels), and a few are irregular, like kind → kinderen (children). Possessives: mijn (my), jouw (your), zijn (his), haar (her), hun (their). 'Our' has two forms that follow the de/het split: ons before het-words and onze before de-words — ons huis (our house) but onze auto (our car).", items: [
          {q:"___ huis (house)", c:["het","de","den","een de"], a:0, x:"Every noun is either a de-word or a het-word, and the article must be memorized with it: huis is a het-word — het huis. No rule predicts it from the word's shape, so 'de huis' is simply wrong.", tr:"The house."},
          {q:"___ man (man)", c:["de","het","dat","dit"], a:0, x:"Each noun's article must be learned: man is a de-word — de man. Most nouns (about 75%), and nearly all words for people, take de; het-words are the exceptions you memorize.", tr:"The man."},
          {q:"All plural nouns take which article?", c:["de","het","een","geen"], a:0, x:"One rule with no exceptions: every plural noun takes de, even if its singular is a het-word — het huis but de huizen. So in the plural you never have to guess the article.", ex:"de huizen", tr:"the houses (plurals always take de)"},
          {q:"Diminutives (-je) take which article?", c:["het","de","either","none"], a:0, x:"Every diminutive in -je is automatically a het-word, no exceptions: het huisje, het biertje — even when the base noun is a de-word (de bloem → het bloemetje).", ex:"het huisje", tr:"the little house"},
          {q:"The most common plural ending is:", c:["-en","-s","-es","-eren"], a:0, x:"The default Dutch plural adds -en: boek → boeken. Words ending in an unstressed syllable take -s instead (tafels), and -eren is a small irregular class (kinderen).", ex:"één boek, twee boeken", tr:"one book, two books"},
          {q:"The plural of 'kind' is:", c:["kinderen","kinds","kinden","kindjes"], a:0, x:"A small group of nouns takes the irregular plural -eren: kind → kinderen, ei → eieren. The regular endings -en and -s do not apply here — 'kinds' or 'kinden' are wrong.", ex:"De kinderen spelen buiten.", tr:"The children are playing outside."},
          {q:"'My book' is:", c:["mijn boek","mij boek","me boeken","ik boek"], a:0, x:"Possessives sit directly before the noun: mijn boek = my book (informally m'n). 'Mij' is the trap — it is the object pronoun 'me', not the possessive 'my'.", ex:"Mijn boek ligt op tafel.", tr:"My book is on the table."},
          {q:"'His car' and 'her car':", c:["zijn auto / haar auto","haar auto / zijn auto","hun auto / ze auto","zij auto / hij auto"], a:0, x:"Dutch possessives match the OWNER, as in English: zijn = his, haar = her — zijn auto (his car), haar auto (her car). Don't swap them: haar looks like 'her' and means exactly that.", ex:"Zijn auto is nieuw.", tr:"His car is new."},
          {q:"'Our house' is:", c:["ons huis","onze huis","ons huizen","onzer huis"], a:0, x:"'Our' is the only possessive that changes form: ons before singular het-words, onze before de-words and all plurals. Huis is a het-word, so ons huis — but onze auto, onze huizen.", ex:"Ons huis is groot.", tr:"Our house is big."}
        ]}
      ]
    },
    {
      id: "nl_gram",
      title: "Complete Dutch Grammar: Zero to Expert",
      units: [
        { id: "nl_g_g1", type: "grammar", title: "Basic: present tense, questions & negation", lesson: "To ask a yes/no question, put the verb first; before jij/je the -t drops: Woon jij in Amsterdam? (Do you live in Amsterdam?). Negation uses two words: niet negates verbs and usually moves toward the end — Ik werk vandaag niet (I'm not working today) — while geen replaces een before nouns: Ik heb geen auto (I don't have a car). Spelling rules shape the stem: final v and z become f and s, and long vowels are preserved, so schrijven → ik schrijf (I write) and lezen → hij leest (he reads). The everyday future is gaan + infinitive, like English 'going to': Ik ga morgen werken (I'm going to work tomorrow); zullen gives 'will': ik zal, jij zult, wij zullen. Finally, 'there is / there are' = er is / er zijn: Er is een probleem (There is a problem).", items: [
          {q:"Make a question: 'Jij woont in Amsterdam.'", c:["Woon jij in Amsterdam?","Woont jij in Amsterdam?","Jij woont in Amsterdam?","In Amsterdam jij woont?"], a:0, x:"Yes/no questions put the verb first, and when the verb precedes jij/je the -t drops: Woon jij…? 'Woont jij' keeps the -t and is the classic mistake; the -t only stays with hij and u.", ex:"Woon jij in Amsterdam?", tr:"Do you live in Amsterdam?"},
          {q:"Negate: 'Ik werk vandaag.'", c:["Ik werk vandaag niet.","Ik niet werk vandaag.","Ik werk niet vandaag altijd.","Niet ik werk vandaag."], a:0, x:"Niet negates verbs and whole clauses and normally moves toward the end of the sentence: Ik werk vandaag niet. Placing niet directly before the verb, English-style, is ungrammatical.", ex:"Ik werk vandaag niet.", tr:"I am not working today."},
          {q:"Negate: 'Ik heb een auto.'", c:["Ik heb geen auto.","Ik heb niet een auto.","Ik heb een auto niet.","Ik geen auto heb."], a:0, x:"To negate an indefinite noun, geen replaces een entirely: Ik heb geen auto. 'Niet een' is the trap — niet negates verbs and definite phrases; een + noun always takes geen.", ex:"Ik heb geen auto.", tr:"I don't have a car."},
          {q:"The stem of 'schrijven' (to write) for 'ik' is:", c:["schrijf","schrijv","schrijft","schrijve"], a:0, x:"Rule: a Dutch stem may not end in v or z, so final v becomes f: schrijven → ik schrijf. 'Schrijv' keeps the illegal v, and adding -t would give the jij/hij form instead of ik.", ex:"Ik schrijf.", tr:"I write."},
          {q:"Conjugate: hij ___ (lezen)", c:["leest","leest niet zo","lees","lezet"], a:0, x:"Hij takes stem + t, and spelling keeps the long vowel by doubling the e: lezen → lees + t = leest (final z also becomes s). Bare 'lees' would be the ik-form.", tr:"He reads."},
          {q:"The future with 'gaan': 'Ik ___ morgen werken.'", c:["ga","zal ga","gaat","gaan"], a:0, x:"The everyday future is conjugated gaan + infinitive at the end, like English 'going to': ik ga morgen werken. Ga must agree with ik — 'gaat' is the hij/zij form.", tr:"I am going to work tomorrow."},
          {q:"The future with 'zullen': 'Wij ___ komen.'", c:["zullen","zult","zallen","zulen"], a:0, x:"Zullen ('will') is irregular: ik zal, jij zult, hij zal, wij zullen. Plural wij needs zullen; 'zult' is the jij-form, a common trap.", tr:"We will come."},
          {q:"'Er is / er zijn' means:", c:["there is / there are","he is / they are","it is","here is"], a:0, x:"Er + zijn is how Dutch says 'there is / there are': er is een probleem (singular), er zijn twee problemen (plural). This er is a dummy subject, not the place word 'here/there'.", ex:"Er is een probleem.", tr:"There is / there are."}
        ]},
        { id: "nl_g_g2", type: "grammar", title: "Basic: modal verbs", lesson: "Dutch modal verbs are irregular in the singular: kunnen (can) — ik kan, jij kunt, hij kan; mogen (may) — mag; moeten (must) — moet; willen (want) — ik wil, jij wilt, zij wil. With a modal, the second verb goes to the END of the sentence as an infinitive: Ik kan morgen niet komen (I can't come tomorrow). Mogen asks permission: Mag ik hier parkeren? (May I park here?); moeten is obligation: Je moet nu gaan (You must go now). Careful with 'don't have to': hoeven + niet + te — Ik hoef niet te werken (I don't have to work); moeten niet means more like 'shouldn't'. Zou (would) makes polite requests and conditionals: Zou je me kunnen helpen? (Could you help me?).", items: [
          {q:"Ik ___ goed zwemmen. (can)", c:["kan","kun","ken","kunt"], a:0, x:"Modal verbs are irregular in the singular: kunnen gives ik kan, jij kunt/kan, hij kan. 'Kunt' with ik is the trap — -t forms belong to jij and u, never to ik.", tr:"I can swim well."},
          {q:"___ ik hier parkeren? (may)", c:["Mag","Moet","Wil","Zal"], a:0, x:"Mogen expresses permission ('may / be allowed to'): Mag ik hier parkeren? Moet would turn it into an obligation ('must I'), and wil/zal don't ask permission at all.", tr:"May I park here?"},
          {q:"Je ___ nu gaan. (must)", c:["moet","mag","kunt","wilt"], a:0, x:"Moeten expresses obligation ('must / have to'): Je moet nu gaan. Mag would merely grant permission and kunt states ability — only moet imposes the action.", tr:"You must go now."},
          {q:"Zij ___ een huis kopen. (want)", c:["wil","wilt","willen zij","wou"], a:0, x:"Willen is irregular: ik wil, jij wilt, but third-person singular zij WIL — no -t, unlike regular verbs. 'Wilt' with zij (sg.) is the classic trap.", tr:"She wants to buy a house."},
          {q:"With a modal verb, the second verb goes:", c:["to the end as infinitive","right after the modal","in position 2","nowhere"], a:0, x:"Rule: the modal takes position 2 and pushes the second verb to the very END as a bare infinitive: Ik kan morgen niet komen. Keeping the infinitive next to the modal is English word order, not Dutch.", ex:"Ik kan morgen niet komen.", tr:"I can't come tomorrow."},
          {q:"'Ik hoef niet te werken' means:", c:["I don't have to work","I must not work","I can't work","I won't work"], a:0, x:"'Don't have to' (absence of obligation) is hoeven + niet + te: Ik hoef niet te werken. The trap is moeten niet, which means 'shouldn't / must not' — a prohibition, not an exemption.", ex:"Ik hoef niet te werken.", tr:"I don't have to work."},
          {q:"'Zou' in 'Zou je me kunnen helpen?' expresses:", c:["a polite request","the past","certainty","a command"], a:0, x:"Zou is the conditional 'would' and softens requests into polite ones: Zou je me kunnen helpen? = Could you help me? It marks politeness or hypothesis, not past time or certainty.", ex:"Zou je me kunnen helpen?", tr:"Could you help me?"}
        ]},
        { id: "nl_g_g3", type: "grammar", title: "More than basics: adjectives, comparative & superlative", lesson: "An adjective before a noun normally gets -e: de rode auto (the red car). The one exception: after een (or no article) with a SINGULAR het-word there is no -e — een groot huis (a big house), but het grote huis (the big house). After the noun or a verb (predicative position), adjectives never take an ending: De koffie is lekker (The coffee is tasty). Comparatives add -er — klein → kleiner (smaller); after a final -r insert d: duur → duurder (more expensive) — and use dan for 'than': Amsterdam is groter dan Utrecht (Amsterdam is bigger than Utrecht). Superlatives add -st: het mooist(e) (the most beautiful). Learn the irregular set goed – beter – best (good – better – best).", items: [
          {q:"de ___ auto (rood)", c:["rode","rood","roden","rodes"], a:0, x:"An adjective in front of a noun normally takes -e: de rode auto. The bare form rood appears only predicatively (de auto is rood) or before an indefinite singular het-word (een rood huis).", tr:"The red car."},
          {q:"een ___ huis (groot) — why no -e?", c:["een + het-word drops the -e","groot never changes","it's plural","huis is de-word"], a:0, x:"The one exception to adjective -e: after een (or no article) with a SINGULAR het-word, the adjective stays bare — een groot huis. With the definite article the -e returns: het grote huis.", tr:"A big house."},
          {q:"De koffie is ___ (lekker) — after the noun/verb:", c:["lekker","lekkere","lekkerst","lekkeren"], a:0, x:"After a linking verb (predicative position) adjectives never take an ending: De koffie is lekker. The -e ending ('lekkere') appears only when the adjective stands before a noun.", tr:"The coffee is tasty."},
          {q:"The comparative of 'klein' is:", c:["kleiner","meer klein","kleinst","kleine"], a:0, x:"Dutch comparatives add -er to the adjective: klein → kleiner. Unlike English, even long adjectives do this — 'meer klein' is not how Dutch builds a comparative.", ex:"Mijn huis is kleiner.", tr:"My house is smaller."},
          {q:"The superlative of 'mooi' is:", c:["mooist","mooier","meest mooi","mooiste altijd"], a:0, x:"Superlatives add -st (often with -e): mooi → het mooist(e). 'Mooier' is the comparative, one step short, and 'meest mooi' is un-Dutch — the -st ending does the job.", ex:"Dit is het mooiste huis.", tr:"This is the most beautiful house."},
          {q:"The comparative of 'goed' is:", c:["beter","goeder","meer goed","best"], a:0, x:"Goed is irregular, exactly like English good–better–best: goed – beter – best. Regular 'goeder' doesn't exist, and 'best' is the superlative, not the comparative.", ex:"Jouw idee is beter.", tr:"Your idea is better."},
          {q:"Amsterdam is groter ___ Utrecht.", c:["dan","als","van","dat"], a:0, x:"After a comparative, 'than' is dan: groter dan Utrecht. 'Als' is the trap — common in speech, but standard Dutch reserves als for equality: net zo groot als.", tr:"Amsterdam is bigger than Utrecht."},
          {q:"'Duur' (expensive) in comparative form:", c:["duurder","duurer","meer duur","duurst"], a:0, x:"Adjectives ending in -r insert a d before the comparative ending: duur → duurder (likewise lekker → lekkerder). Plain 'duurer' is the misspelling this rule prevents.", ex:"Wijn is duurder dan bier.", tr:"Wine is more expensive than beer."}
        ]},
        { id: "nl_g_g4", type: "grammar", title: "More than basics: word order, inversion & conjunctions", lesson: "The conjugated verb sits in position 2 of a Dutch main clause. If anything other than the subject comes first, subject and verb invert: Morgen ga ik naar Amsterdam (Tomorrow I'm going to Amsterdam). The five coordinating conjunctions en, maar, of, want, dus keep normal order, but subordinating conjunctions (omdat, dat, als, terwijl…) 'catapult' the conjugated verb to the end: Ik blijf thuis, omdat ik ziek ben (I'm staying home because I am sick); Ik denk dat het morgen regent (I think it will rain tomorrow). If the subclause comes first, the main clause inverts: Als ik tijd heb, help ik je (If I have time, I'll help you). The imperative is just the stem: Kom hier! (Come here!). To like: Ik vind het leuk (I like it), and graag with a verb — Ik zwem graag (I like swimming).", items: [
          {q:"'Morgen ___ ik naar Amsterdam.' (gaan)", c:["ga","ik ga","gaan","gaat"], a:0, x:"The conjugated verb must stay in position 2. When something other than the subject (Morgen) opens the sentence, subject and verb invert: Morgen ga ik… 'Morgen ik ga' breaks the verb-second rule.", tr:"Tomorrow I'm going to Amsterdam."},
          {q:"Which conjunctions do NOT change word order?", c:["en, maar, of, want, dus","omdat, als, dat","toen, terwijl","hoewel, zodat"], a:0, x:"Rule: the five coordinating conjunctions en, maar, of, want, dus join two main clauses and change nothing about word order. Subordinating conjunctions like omdat and als send the verb to the end.", ex:"Ik blijf thuis, want ik ben ziek.", tr:"I'm staying home, because I am sick."},
          {q:"Ik blijf thuis, omdat ik ziek ___.", c:["ben","is","zijn","word"], a:0, x:"Omdat is a subordinating conjunction, so it catapults the conjugated verb to the end of its clause: …omdat ik ziek ben. Keeping main-clause order ('omdat ik ben ziek') is the classic error.", tr:"I'm staying home because I am sick."},
          {q:"'The catapult' in this course refers to:", c:["verb moving to the end in subclauses","dropping pronouns","plural formation","diminutives"], a:0, x:"'The catapult' names the rule that subordinating conjunctions (omdat, dat, als, terwijl…) throw the conjugated verb to the end of the subclause: Ik blijf thuis, omdat ik ziek ben.", ex:"Ik weet dat hij morgen komt.", tr:"I know that he is coming tomorrow."},
          {q:"Ik denk ___ het morgen regent.", c:["dat","of","want","als"], a:0, x:"After verbs of thinking and saying, dat introduces the subordinate clause and sends its verb to the end: Ik denk dat het morgen regent. Want would keep main-clause order and means 'because'.", tr:"I think it will rain tomorrow."},
          {q:"___ ik tijd heb, help ik je. (if/when)", c:["Als","Dat","Want","Maar"], a:0, x:"Als means 'if/when' and, as a subordinating conjunction, pushes the verb to the end of its clause. Because that clause comes first, the main clause then inverts: Als ik tijd heb, help ik je.", tr:"If I have time, I'll help you."},
          {q:"The imperative of 'komen' is:", c:["Kom!","Komt!","Komen!","Kome!"], a:0, x:"The imperative is simply the bare stem of the verb: komen → Kom hier! Adding -t or using the infinitive ('Komt!', 'Komen!') is wrong for a normal command (only formal Komt u… keeps -t).", ex:"Kom hier!", tr:"Come!"},
          {q:"'Ik vind het leuk' means:", c:["I like it","I find it","I make it","I want it"], a:0, x:"Dutch expresses 'to like' with vinden + adjective: Ik vind het leuk, literally 'I find it nice'. It is an opinion idiom, not literal finding; stronger liking uses houden van.", ex:"Ik vind het leuk.", tr:"I like it."},
          {q:"'Ik zwem graag' means:", c:["I like swimming","I swim fast","I must swim","I swam"], a:0, x:"Graag ('gladly') after a verb means you like doing it: Ik zwem graag = I like swimming. Dutch prefers this adverb pattern over an extra verb for enjoying activities.", ex:"Ik zwem graag.", tr:"I like swimming."}
        ]},
        { id: "nl_g_g5", type: "grammar", title: "Past tenses: perfectum & imperfectum", lesson: "The perfectum (conversational past) = hebben/zijn + past participle: Ik heb gewerkt (I worked / have worked). Verbs of movement with a direction take zijn: Wij zijn naar huis gefietst (We cycled home). Regular participles are ge- + stem + t or d: use -t if the stem ends in a 't kofschip consonant (t, k, f, s, ch, p) — gemaakt (made) — otherwise -d: gewoond (lived). Verbs with the unstressed prefixes be-, ver-, ont- drop ge-: betaald (paid). The imperfectum (story past) adds -te(n) or -de(n) by the same 't kofschip rule: ik werkte (I worked), ik woonde (I lived). Learn irregulars like kopen – kocht – gekocht (buy) and zijn: ik was, wij waren (I was, we were). Zou + infinitive means 'would': Ik zou graag komen (I would like to come).", items: [
          {q:"Ik ___ gisteren gewerkt.", c:["heb","ben","had","was"], a:0, x:"The perfectum combines an auxiliary with the past participle, and most verbs take hebben: ik heb gewerkt. Zijn is reserved for movement or change of state — 'ik ben gewerkt' is wrong.", tr:"I worked yesterday."},
          {q:"Wij ___ naar huis gefietst.", c:["zijn","hebben","waren","hadden"], a:0, x:"Verbs of movement with a stated direction (naar huis) take zijn as their auxiliary: Wij zijn naar huis gefietst. Hebben would describe the activity itself, not the journey somewhere.", tr:"We cycled home."},
          {q:"The past participle of 'maken' is:", c:["gemaakt","gemaakd","gemaken","maakte"], a:0, x:"Regular participles are ge- + stem + t/d; the ending is -t when the stem ends in a 't kofschip consonant (t, k, f, s, ch, p). Maken's stem ends in k, so gemaakt — never 'gemaakd'.", ex:"Ik heb een fout gemaakt.", tr:"I made a mistake."},
          {q:"The past participle of 'wonen' is:", c:["gewoond","gewoont","gewonen","woonde"], a:0, x:"'t Kofschip decides -t vs -d: the stem woon ends in n, which is NOT in 't kofschip (t, k, f, s, ch, p), so the participle takes -d: gewoond. 'Gewoont' is the standard spelling trap.", ex:"Ik heb in Utrecht gewoond.", tr:"I lived in Utrecht."},
          {q:"The past participle of 'kopen' is:", c:["gekocht","gekoopt","gekopen","kochtte"], a:0, x:"Kopen is a strong (irregular) verb whose past forms must be memorized: kopen – kocht – gekocht. The regular 't kofschip pattern ('gekoopt') does not apply to irregular verbs.", ex:"Zij heeft een fiets gekocht.", tr:"She bought a bicycle."},
          {q:"Imperfectum of 'werken' (ik):", c:["werkte","werkde","werkete","gewerkt"], a:0, x:"The imperfectum adds -te or -de by the 't kofschip rule: the stem werk ends in k, which IS in 't kofschip, so -te: ik werkte. 'Werkde' picks the wrong ending.", ex:"Ik werkte gisteren.", tr:"I worked."},
          {q:"Imperfectum of 'wonen' (ik):", c:["woonde","woonte","woond","gewoond"], a:0, x:"The stem woon ends in n, not a 't kofschip consonant, so the imperfectum ending is -de: ik woonde. 'Woonte' applies the -t rule to the wrong verb; gewoond is the participle, not the imperfectum.", ex:"Ik woonde in Rotterdam.", tr:"I lived."},
          {q:"Imperfectum of 'zijn' (ik):", c:["was","ben geweest","zijnde","waart"], a:0, x:"Zijn has an irregular imperfectum: ik was, wij waren. 'Ben geweest' is the trap — that is the perfectum (have been); the simple story-past of zijn is was/waren.", ex:"Ik was gisteren ziek.", tr:"I was."},
          {q:"Verbs with prefixes be-, ver-, ont- form the participle:", c:["without ge- (betaald)","with ge- (gebetaald)","with -en only","irregularly always"], a:0, x:"Verbs beginning with the unstressed prefixes be-, ver-, ont- (also ge-, her-) never add ge- in the participle: betalen → betaald, not 'gebetaald'. The prefix already occupies the ge- slot.", ex:"Ik heb de rekening betaald.", tr:"I paid the bill."},
          {q:"'Zou' + infinitive ('Ik zou graag komen') expresses:", c:["would (conditional)","past habit","obligation","future certainty"], a:0, x:"Zou(den) + infinitive is the Dutch conditional 'would': Ik zou graag komen = I would like to come. It marks a hypothetical or polite wish, not past habit, obligation or certain future.", ex:"Ik zou graag komen.", tr:"I would like to come."}
        ]},
        { id: "nl_g_g6", type: "grammar", title: "Past tenses: reflexives, this/that & 'om te'", lesson: "Reflexive verbs use me/je/zich/ons: Ik was me elke ochtend (I wash myself every morning); zich is the 3rd-person form — Hij voelt zich goed (He feels good). Demonstratives follow the de/het split: de-words take deze (this) and die (that); het-words take dit and dat — dit huis (this house), dat huis (that house). All PLURALS behave like de-words: deze boeken (these books), die boeken (those books). Purpose ('in order to') is om … te + infinitive at the end: Ik ga naar de winkel om brood te kopen (I'm going to the store to buy bread). The same pattern follows 'het is + adjective': Het is moeilijk om Nederlands te leren (It is difficult to learn Dutch). And sommige = some: sommige mensen (some people).", items: [
          {q:"Ik was ___ elke ochtend. (reflexive)", c:["me","mij zelf altijd","zich","mezelf niet"], a:0, x:"Reflexive pronouns must match the subject: ik–me, jij–je, hij/zij–zich, wij–ons. So: Ik was me elke ochtend. 'Zich' with ik is the trap — zich is strictly third person (and u).", tr:"I wash myself every morning."},
          {q:"Hij voelt ___ goed.", c:["zich","hem","zijn","ze"], a:0, x:"The third-person reflexive pronoun is zich (hij, zij, u): Hij voelt zich goed. 'Hem' is the trap — the ordinary object pronoun can't be used when subject and object are the same person.", tr:"He feels good."},
          {q:"'Deze' is used with:", c:["de-words (deze man)","het-words","plural only","verbs"], a:0, x:"Demonstratives follow the de/het split: de-words take deze (this) and die (that); het-words take dit and dat. So deze man, die man — dit/dat would need a het-word like huis.", ex:"Deze man is aardig.", tr:"This man is kind."},
          {q:"'___ huis is mooi.' (this)", c:["Dit","Deze","Die","Dat daar"], a:0, x:"Huis is a het-word, and het-words take dit/dat: dit huis (this house), dat huis (that house). Deze and die are the trap — they belong to de-words and to plurals.", tr:"This house is beautiful."},
          {q:"'___ boeken zijn duur.' (those)", c:["Die","Dat","Deze dit","Dit"], a:0, x:"All plurals behave like de-words, so they take deze (these) and die (those): die boeken = those books. Dit and dat can never stand before a plural noun.", tr:"Those books are expensive."},
          {q:"Ik ga naar de winkel ___ brood ___ kopen. (in order to)", c:["om … te","voor … te","om … -","te … om"], a:0, x:"Purpose ('in order to') uses the frame om … te + infinitive, with the infinitive at the end: om brood te kopen. Both om and te are required — 'voor … te' is not standard Dutch.", tr:"I'm going to the store to buy bread."},
          {q:"Het is moeilijk ___ Nederlands ___ leren.", c:["om … te","voor … te","dat … te","om … het"], a:0, x:"After het is + adjective, the same om … te frame follows: Het is moeilijk om Nederlands te leren. Om introduces the infinitive clause and te sits directly before the infinitive.", tr:"It is difficult to learn Dutch."},
          {q:"'Sommige' means:", c:["some","all","none","every"], a:0, x:"Sommige means 'some (but not all)' before plural nouns: sommige mensen = some people. Compare alle (all), geen (no/none) and elke/iedere (every) — each quantifier claims a different amount.", ex:"Sommige mensen fietsen elke dag.", tr:"Some people cycle every day."}
        ]},
        { id: "nl_g_g7", type: "grammar", title: "Er & difficult verbs", lesson: "Kennen vs weten: kennen = be familiar with people/places — Ik ken Amsterdam goed (I know Amsterdam well); weten = know facts — Ik weet niet waar hij woont (I don't know where he lives). The present continuous is zijn + aan het + infinitive: Ik ben aan het lezen (I am reading). Separable verbs split in the present — opbellen: Ik bel je morgen op (I'll call you tomorrow) — and sandwich ge- in the participle: opgebeld. Er is the unstressed 'there' — Ik woon er al tien jaar (I've lived there for ten years) — and fuses with prepositions to mean 'it': Ik denk erover na (I'm thinking about it). Position verbs matter: zetten/staan for upright things, leggen/liggen for flat ones — Het boek ligt op de tafel (The book lies on the table).", items: [
          {q:"'kennen' vs 'weten': Ik ___ Amsterdam goed.", c:["ken","weet","wist","kent"], a:0, x:"Dutch splits 'to know': kennen = be familiar with people, places and things; weten = know facts. Amsterdam is a place you are acquainted with, so Ik ken Amsterdam goed.", tr:"I know Amsterdam well."},
          {q:"Ik ___ niet waar hij woont.", c:["weet","ken","kende","kan"], a:0, x:"Weten is for facts and information, often before a clause: Ik weet niet waar hij woont. Kennen is the trap — it means acquaintance with a person or place, not knowledge of a fact.", tr:"I don't know where he lives."},
          {q:"Present continuous: 'Ik ben ___ lezen.' (aan het)", c:["aan het","bezig","in het","op het"], a:0, x:"The present continuous is zijn + aan het + infinitive: Ik ben aan het lezen = I am (busy) reading. Aan and het are both fixed parts of the pattern — neither can be dropped or swapped.", tr:"I am reading."},
          {q:"Separable verb 'opbellen': 'Ik ___ je morgen ___.'", c:["bel … op","opbel … -","bel op … -","op … bel"], a:0, x:"Separable verbs split in main clauses: the conjugated part takes position 2 and the prefix goes to the very end — Ik bel je morgen op. Keeping opbellen together ('ik opbel') is ungrammatical.", tr:"I'll call you tomorrow."},
          {q:"Participle of the separable verb 'opbellen':", c:["opgebeld","geopbeld","opbelt","gebeld op"], a:0, x:"Separable verbs sandwich ge- between prefix and stem in the past participle: op + ge + beld = opgebeld. 'Geopbeld' is the trap — it treats the verb as inseparable and puts ge- first.", ex:"Ik heb je gisteren opgebeld.", tr:"I called you yesterday."},
          {q:"'Er' in 'Ik woon er al tien jaar' means:", c:["there (in that place)","it","here","then"], a:0, x:"Er is the unstressed counterpart of daar ('there'), referring back to a known place: Ik woon er al tien jaar. Daar is used for emphasis; er can never carry stress.", ex:"Ik woon er al tien jaar.", tr:"I have lived there for ten years."},
          {q:"'Er' + preposition: 'Ik denk ___ na.' (about it)", c:["erover","over het","daaraan het","er"], a:0, x:"Dutch avoids preposition + het for things: over + het fuses into erover — Ik denk erover na. 'Over het' is exactly the combination the er + preposition construction exists to replace.", tr:"I'm thinking about it."},
          {q:"'To put' (vertical position, e.g. a bottle on a table):", c:["zetten","leggen","doen","staan"], a:0, x:"Dutch picks the 'put' verb by orientation: zetten = put something upright (a bottle, a vase); leggen = lay something flat. Staan describes the resulting state, and doen is a vague filler.", ex:"Ik zet de fles op tafel.", tr:"I put the bottle on the table."},
          {q:"'The book lies on the table':", c:["Het boek ligt op de tafel.","Het boek staat op de tafel.","Het boek zit op de tafel.","Het boek legt op de tafel."], a:0, x:"Position verbs match orientation: flat objects liggen (lie), upright objects staan (stand) — Het boek ligt op de tafel. 'Legt' is the trap: leggen is the action of laying, not the position.", ex:"Het boek ligt op de tafel.", tr:"The book lies on the table."}
        ]},
        { id: "nl_g_g8", type: "grammar", title: "Advanced: diminutives, passive & ordinals", lesson: "Diminutives add -je (huis → huisje) with sound-based variants like -pje after m: boom → boompje (little tree); every diminutive is a het-word. The passive uses worden + past participle: Het huis wordt gebouwd (The house is being built). In the passive perfect Dutch drops 'geworden' (unlike German): Het huis is gebouwd (The house has been built). With a modal, worden goes to the end: Het probleem moet opgelost worden (The problem must be solved). Men is the generic 'one/people': Men zegt dat… (People say that…) — spoken Dutch often uses je or ze instead. Ordinals are eerste, tweede, derde (first, second, third); most others add -de or -ste. The particle wel affirms or softens — the opposite of niet: Ik vind het wel leuk (I do quite like it).", items: [
          {q:"The diminutive of 'huis' is:", c:["huisje","huisjen","huislein","huiske"], a:0, x:"The standard diminutive suffix is -je: huis → huisje, and every diminutive automatically becomes a het-word. Endings like -ke are dialect and '-lein' is German — not standard Dutch.", ex:"Wij hebben een klein huisje.", tr:"We have a little house."},
          {q:"The diminutive of 'boom' (tree) is:", c:["boompje","boomje","boomtje","boomkje"], a:0, x:"The diminutive ending adapts to the final sound: after m, Dutch inserts p — boom → boompje. Plain 'boomje' is awkward to pronounce, which is exactly why the -pje variant exists.", ex:"Er staat een boompje in de tuin.", tr:"There is a little tree in the garden."},
          {q:"The passive is formed with:", c:["worden + past participle","zijn + infinitive","hebben + participle","gaan + participle"], a:0, x:"The Dutch passive is worden + past participle: Het huis wordt gebouwd = the house is being built. Zijn + participle gives the finished state, and hebben builds the active perfect — only worden makes a true passive.", ex:"Het huis wordt gebouwd.", tr:"The house is being built."},
          {q:"Passive perfect: 'Het huis is gebouwd ___.'", c:["- (geworden is dropped)","geworden","worden","geweest"], a:0, x:"In the passive perfect Dutch uses zijn + participle and DROPS geworden: Het huis is gebouwd. Adding geworden is a German habit — in Dutch it is simply understood and left out.", tr:"The house has been built."},
          {q:"'One/people/you' in general statements ('men'):", c:["Men zegt dat…","Mensen zegt…","Iemand zeggen…","Er zegt…"], a:0, x:"Men is the generic pronoun 'one/people' and takes a singular verb: Men zegt dat… It is formal and written; spoken Dutch prefers je or ze. 'Mensen zegt' fails agreement — plural mensen needs zeggen.", ex:"Men zegt dat het waar is.", tr:"People say that it is true."},
          {q:"'First, second, third' in Dutch:", c:["eerste, tweede, derde","eenste, tweeste, drieste","eerst, tweed, derd","een, twee, drie"], a:0, x:"Ordinals are built with -de or -ste: tweede, derde, vierde… twintigste. Eerste is irregular (not 'eenste'), so 'first, second, third' = eerste, tweede, derde.", ex:"Dit is mijn eerste les.", tr:"This is my first lesson."},
          {q:"'Wel' in 'Ik vind het wel leuk' functions as:", c:["a softening/affirming particle","a negation","a question word","a tense marker"], a:0, x:"Wel is the positive counter-particle, the mirror image of niet: it affirms or contradicts an expected negative, often softened to 'quite/actually': Ik vind het wel leuk. It adds nuance, never negation or tense.", ex:"Ik vind het wel leuk.", tr:"I do quite like it."},
          {q:"Passive with modal: 'Het probleem moet opgelost ___.'", c:["worden","zijn","hebben","wordt"], a:0, x:"In a passive with a modal, the modal is conjugated and worden moves to the end as an infinitive: Het probleem moet opgelost worden. Conjugated 'wordt' is the trap — after moet you need the infinitive.", tr:"The problem must be solved."}
        ]},
        { id: "nl_g_g9", type: "grammar", title: "Most advanced: er+prepositions, waar+prep & particles", lesson: "For THINGS, Dutch avoids preposition + het/wat. Questions use waar + preposition, split or joined: Waar denk je aan? / Waaraan denk je? (What are you thinking about?). Statements use er + preposition: We praten erover (We're talking about it); the stressed version uses daar: daarover (about THAT). Ergens/nergens/overal combine the same way: ergens over praten (to talk about something). Ik denk van wel = I think so; van niet = I think not. 'Used to' = gewend zijn te, or vroeger + imperfectum: Ik was gewend veel te sporten (I used to exercise a lot). Collocations: een fout maken (make a mistake) but boodschappen doen (do the shopping). Particles even/maar/eens soften commands: Kom even hier (Just come here for a second). And geen covers 'not any': Ik heb geen geld (I don't have any money).", items: [
          {q:"'___ denk je aan?' (what … about — thing)", c:["Waar","Wat","Waaraan je","Aan wat"], a:0, x:"Asking about a THING with a preposition uses waar + preposition, split or joined: Waar denk je aan? / Waaraan denk je? 'Aan wat' mirrors English — Dutch reserves wat for questions without a preposition.", tr:"What are you thinking about?"},
          {q:"Replace 'over het boek': 'We praten ___.'", c:["erover","over hem","daarover het","erop"], a:0, x:"For things, preposition + het is replaced by er + preposition: over het boek → erover — We praten erover. 'Over hem' is the trap: hem refers to a person, not to a book.", tr:"We are talking about it."},
          {q:"Stressed variant of 'erover' (about THAT):", c:["daarover","hierover niet","overdaar","eroverheen"], a:0, x:"Er + preposition has a stressed counterpart built with daar: daarover = about THAT one specifically. Use it for emphasis or contrast; unstressed erover just means 'about it'.", ex:"Daarover praten we morgen.", tr:"We'll talk about that tomorrow."},
          {q:"'Ergens/nergens/overal' + preposition: 'somewhere to talk about':", c:["ergens over","over ergens","ergens aan bij","overal van"], a:0, x:"Ergens, nergens and overal combine with prepositions like er does, with the preposition following: ergens over praten = talk about something. The preposition cannot come first ('over ergens').", ex:"We moeten ergens over praten.", tr:"To talk about something."},
          {q:"'Van wel / van niet': 'Ik denk ___.' (I think so)", c:["van wel","van niet","het wel","zo wel"], a:0, x:"To agree or disagree with a whole statement, Dutch uses the fixed tags van wel / van niet: Ik denk van wel = I think so; Ik denk van niet = I think not. Literal 'het wel' or 'zo wel' are not idiomatic.", tr:"I think so."},
          {q:"'Used to': 'Ik ___ vroeger veel te sporten.' — better Dutch:", c:["was gewend","gebruikte","zou","placht altijd"], a:0, x:"'Used to' has no one-word Dutch verb: use gewend zijn te + infinitive (Ik was gewend veel te sporten) or vroeger + imperfectum. 'Gebruiken' is a false friend — it means to use an object.", tr:"I used to exercise a lot."},
          {q:"'doen' vs 'maken': 'een fout ___'", c:["maken","doen","doen maken","maakt"], a:0, x:"Doen/maken collocations must be learned per noun: een fout maken (make a mistake) but boodschappen doen (do the shopping). Here maken is fixed — 'een fout doen' is not Dutch.", tr:"To make a mistake."},
          {q:"Modal particle 'even' in 'Kom even hier':", c:["softens the request (just quickly)","means 'even/equal'","negates","marks the past"], a:0, x:"Modal particles even, maar and eens soften a command into a friendly request: Kom even hier = just come here for a second. This even means 'briefly/just', not 'equal' — it adds tone, not tense.", ex:"Kom even hier!", tr:"Just come here for a second."},
          {q:"'Any' in negatives: 'Ik heb ___ geld.'", c:["geen","niet","enig altijd","elke"], a:0, x:"Geen negates indefinite and mass nouns, covering English 'no / not any': Ik heb geen geld. Niet cannot stand directly before an indefinite noun — that slot always belongs to geen.", tr:"I don't have any money."}
        ]}
      ]
    }
  ]
};
