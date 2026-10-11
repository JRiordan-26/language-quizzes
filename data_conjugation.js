// Conjugation-drill data. Each unit lists verbs; a quiz question shows one verb
// and the user types the form for every person. Alternate accepted forms are
// separated by "/" (e.g. "wärst/wärest").
// Persons per language are defined in index.html (6 rows each).
window.QUIZ_CONJ = {
  german: [
    { course: "de_a1", unit: { id:"de_irr5", type:"conj", title:"Conjugate: Top 5 irregular verbs — Present (Präsens)", tense:"Present (Präsens)", items: [
      {inf:"sein", irr:1, en:"to be", forms:["bin","bist","ist","sind","seid","sind"]},
      {inf:"haben", irr:1, en:"to have", forms:["habe","hast","hat","haben","habt","haben"]},
      {inf:"werden", irr:1, en:"to become / will", forms:["werde","wirst","wird","werden","werdet","werden"]},
      {inf:"können", irr:1, en:"can / to be able to", forms:["kann","kannst","kann","können","könnt","können"]},
      {inf:"müssen", irr:1, en:"must / to have to", forms:["muss","musst","muss","müssen","müsst","müssen"]}
    ]}},
    { course: "de_a1", unit: { id:"de_a1_c1", type:"conj", title:"Conjugate: Present – regular & vowel-change", tense:"Present (Präsens)", items: [
      {inf:"machen", en:"to do / make", forms:["mache","machst","macht","machen","macht","machen"]},
      {inf:"wohnen", en:"to live", forms:["wohne","wohnst","wohnt","wohnen","wohnt","wohnen"]},
      {inf:"arbeiten", en:"to work", forms:["arbeite","arbeitest","arbeitet","arbeiten","arbeitet","arbeiten"]},
      {inf:"sprechen", irr:1, en:"to speak", forms:["spreche","sprichst","spricht","sprechen","sprecht","sprechen"]},
      {inf:"lesen", irr:1, en:"to read", forms:["lese","liest","liest","lesen","lest","lesen"]},
      {inf:"fahren", irr:1, en:"to drive / ride", forms:["fahre","fährst","fährt","fahren","fahrt","fahren"]},
      {inf:"essen", irr:1, en:"to eat", forms:["esse","isst","isst","essen","esst","essen"]},
      {inf:"nehmen", irr:1, en:"to take", forms:["nehme","nimmst","nimmt","nehmen","nehmt","nehmen"]},
      {inf:"schlafen", irr:1, en:"to sleep", forms:["schlafe","schläfst","schläft","schlafen","schlaft","schlafen"]},
      {inf:"sehen", irr:1, en:"to see", forms:["sehe","siehst","sieht","sehen","seht","sehen"]},
      {inf:"geben", irr:1, en:"to give", forms:["gebe","gibst","gibt","geben","gebt","geben"]},
      {inf:"aufstehen", irr:1, en:"to get up (separable!)", forms:["stehe auf","stehst auf","steht auf","stehen auf","steht auf","stehen auf"]},
      {inf:"einkaufen", en:"to shop (separable!)", forms:["kaufe ein","kaufst ein","kauft ein","kaufen ein","kauft ein","kaufen ein"]}
    ]}},
    { course: "de_a1", unit: { id:"de_a1_c2", type:"conj", title:"Conjugate: sein, haben & werden — Present (Präsens)", tense:"Present (Präsens)", items: [
      {inf:"sein", irr:1, en:"to be", forms:["bin","bist","ist","sind","seid","sind"]},
      {inf:"haben", irr:1, en:"to have", forms:["habe","hast","hat","haben","habt","haben"]},
      {inf:"werden", irr:1, en:"to become", forms:["werde","wirst","wird","werden","werdet","werden"]}
    ]}},
    { course: "de_a1", unit: { id:"de_a1_c3", type:"conj", title:"Conjugate: all 6 modal verbs + möchten", tense:"Present (Präsens)", items: [
      {inf:"können", irr:1, en:"can / to be able to", forms:["kann","kannst","kann","können","könnt","können"]},
      {inf:"müssen", irr:1, en:"must / to have to", forms:["muss","musst","muss","müssen","müsst","müssen"]},
      {inf:"wollen", irr:1, en:"to want", forms:["will","willst","will","wollen","wollt","wollen"]},
      {inf:"dürfen", irr:1, en:"may / to be allowed", forms:["darf","darfst","darf","dürfen","dürft","dürfen"]},
      {inf:"sollen", irr:1, en:"should / to be supposed to", forms:["soll","sollst","soll","sollen","sollt","sollen"]},
      {inf:"mögen", irr:1, en:"to like", forms:["mag","magst","mag","mögen","mögt","mögen"]},
      {inf:"möchten", irr:1, en:"would like", forms:["möchte","möchtest","möchte","möchten","möchtet","möchten"]}
    ]}},
    { course: "de_a1", unit: { id:"de_a1_c4", type:"conj", title:"Conjugate: Simple past (Präteritum) — sein, haben, modals", tense:"Simple past (Präteritum)", items: [
      {inf:"sein", irr:1, en:"to be → was/were", forms:["war","warst","war","waren","wart","waren"]},
      {inf:"haben", irr:1, en:"to have → had", forms:["hatte","hattest","hatte","hatten","hattet","hatten"]},
      {inf:"werden", irr:1, en:"to become → became", forms:["wurde","wurdest","wurde","wurden","wurdet","wurden"]},
      {inf:"können", irr:1, en:"could", forms:["konnte","konntest","konnte","konnten","konntet","konnten"]},
      {inf:"müssen", irr:1, en:"had to", forms:["musste","musstest","musste","mussten","musstet","mussten"]},
      {inf:"wollen", irr:1, en:"wanted", forms:["wollte","wolltest","wollte","wollten","wolltet","wollten"]},
      {inf:"dürfen", irr:1, en:"was allowed to", forms:["durfte","durftest","durfte","durften","durftet","durften"]},
      {inf:"sollen", irr:1, en:"was supposed to", forms:["sollte","solltest","sollte","sollten","solltet","sollten"]}
    ]}},
    { course: "de_a1", unit: { id:"de_a1_c5", type:"conj", title:"Conjugate: Spoken past (Perfekt) — habe gemacht…", tense:"Spoken past (Perfekt)", items: [
      {inf:"machen", en:"to do → have done", forms:["habe gemacht","hast gemacht","hat gemacht","haben gemacht","habt gemacht","haben gemacht"]},
      {inf:"sehen", irr:1, en:"to see → have seen", forms:["habe gesehen","hast gesehen","hat gesehen","haben gesehen","habt gesehen","haben gesehen"]},
      {inf:"essen", irr:1, en:"to eat → have eaten", forms:["habe gegessen","hast gegessen","hat gegessen","haben gegessen","habt gegessen","haben gegessen"]},
      {inf:"gehen", irr:1, en:"to go → have gone (sein!)", forms:["bin gegangen","bist gegangen","ist gegangen","sind gegangen","seid gegangen","sind gegangen"]},
      {inf:"fahren", irr:1, en:"to drive → have driven (sein!)", forms:["bin gefahren","bist gefahren","ist gefahren","sind gefahren","seid gefahren","sind gefahren"]},
      {inf:"sein", irr:1, en:"to be → have been (sein!)", forms:["bin gewesen","bist gewesen","ist gewesen","sind gewesen","seid gewesen","sind gewesen"]},
      {inf:"haben", irr:1, en:"to have → have had", forms:["habe gehabt","hast gehabt","hat gehabt","haben gehabt","habt gehabt","haben gehabt"]},
      {inf:"einkaufen", en:"to shop → have shopped (separable!)", forms:["habe eingekauft","hast eingekauft","hat eingekauft","haben eingekauft","habt eingekauft","haben eingekauft"]},
      {inf:"sein", irr:1, en:"to be → have been (gewesen, with sein!)", forms:["bin gewesen","bist gewesen","ist gewesen","sind gewesen","seid gewesen","sind gewesen"]},
      {inf:"haben", irr:1, en:"to have → have had (gehabt)", forms:["habe gehabt","hast gehabt","hat gehabt","haben gehabt","habt gehabt","haben gehabt"]},
      {inf:"werden", irr:1, en:"to become → have become (geworden, with sein!)", forms:["bin geworden","bist geworden","ist geworden","sind geworden","seid geworden","sind geworden"]}
    ]}},
    { course: "de_a1", unit: { id:"de_a1_c6", type:"conj", title:"Conjugate: Simple past (Präteritum) — strong & regular verbs", tense:"Simple past (Präteritum)", items: [
      {inf:"machen", en:"to do → did (regular)", forms:["machte","machtest","machte","machten","machtet","machten"]},
      {inf:"spielen", en:"to play → played (regular)", forms:["spielte","spieltest","spielte","spielten","spieltet","spielten"]},
      {inf:"gehen", irr:1, en:"to go → went", forms:["ging","gingst","ging","gingen","gingt","gingen"]},
      {inf:"kommen", irr:1, en:"to come → came", forms:["kam","kamst","kam","kamen","kamt","kamen"]},
      {inf:"sprechen", irr:1, en:"to speak → spoke", forms:["sprach","sprachst","sprach","sprachen","spracht","sprachen"]},
      {inf:"essen", irr:1, en:"to eat → ate", forms:["aß","aßest","aß","aßen","aßt","aßen"]},
      {inf:"fahren", irr:1, en:"to drive → drove", forms:["fuhr","fuhrst","fuhr","fuhren","fuhrt","fuhren"]},
      {inf:"sehen", irr:1, en:"to see → saw", forms:["sah","sahst","sah","sahen","saht","sahen"]},
      {inf:"geben", irr:1, en:"to give → gave", forms:["gab","gabst","gab","gaben","gabt","gaben"]}
    ]}},
    { course: "de_a2b1", unit: { id:"de_b1_c2", type:"conj", title:"Conjugate: Future (Futur I) — werde machen…", tense:"Future (Futur I)", items: [
      {inf:"machen", en:"to do → will do", forms:["werde machen","wirst machen","wird machen","werden machen","werdet machen","werden machen"]},
      {inf:"gehen", irr:1, en:"to go → will go", forms:["werde gehen","wirst gehen","wird gehen","werden gehen","werdet gehen","werden gehen"]},
      {inf:"sein", irr:1, en:"to be → will be", forms:["werde sein","wirst sein","wird sein","werden sein","werdet sein","werden sein"]},
      {inf:"haben", irr:1, en:"to have → will have", forms:["werde haben","wirst haben","wird haben","werden haben","werdet haben","werden haben"]},
      {inf:"kommen", irr:1, en:"to come → will come", forms:["werde kommen","wirst kommen","wird kommen","werden kommen","werdet kommen","werden kommen"]}
    ]}},
    { course: "de_a2b1", unit: { id:"de_b1_c1", type:"conj", title:"Conjugate: Conditional (Konjunktiv II) — wäre, hätte, würde…", tense:"Conditional (Konjunktiv II)", items: [
      {inf:"sein", irr:1, en:"would be", forms:["wäre","wärst/wärest","wäre","wären","wärt/wäret","wären"]},
      {inf:"haben", irr:1, en:"would have", forms:["hätte","hättest","hätte","hätten","hättet","hätten"]},
      {inf:"werden", irr:1, en:"would (würde-form)", forms:["würde","würdest","würde","würden","würdet","würden"]},
      {inf:"können", irr:1, en:"could (polite)", forms:["könnte","könntest","könnte","könnten","könntet","könnten"]},
      {inf:"müssen", irr:1, en:"would have to", forms:["müsste","müsstest","müsste","müssten","müsstet","müssten"]},
      {inf:"sollen", irr:1, en:"should (advice)", forms:["sollte","solltest","sollte","sollten","solltet","sollten"]}
    ]}}
  ],
  italian: [
    { course: "it_a0a2", unit: { id:"it_irr5", type:"conj", title:"Conjugate: Top 5 irregular verbs — Present (Presente)", tense:"Present (Presente)", items: [
      {inf:"essere", irr:1, en:"to be", forms:["sono","sei","è","siamo","siete","sono"]},
      {inf:"avere", irr:1, en:"to have", forms:["ho","hai","ha","abbiamo","avete","hanno"]},
      {inf:"fare", irr:1, en:"to do / make", forms:["faccio","fai","fa","facciamo","fate","fanno"]},
      {inf:"dire", irr:1, en:"to say / tell", forms:["dico","dici","dice","diciamo","dite","dicono"]},
      {inf:"andare", irr:1, en:"to go", forms:["vado","vai","va","andiamo","andate","vanno"]}
    ]}},
    { course: "it_a0a2", unit: { id:"it_a0_c1", type:"conj", title:"Conjugate: Present (Presente) — 3 conjugations (-are/-ere/-ire)", tense:"Present (Presente)", items: [
      {inf:"parlare", en:"to speak", forms:["parlo","parli","parla","parliamo","parlate","parlano"]},
      {inf:"mangiare", en:"to eat", forms:["mangio","mangi","mangia","mangiamo","mangiate","mangiano"]},
      {inf:"lavorare", en:"to work", forms:["lavoro","lavori","lavora","lavoriamo","lavorate","lavorano"]},
      {inf:"scrivere", irr:1, en:"to write", forms:["scrivo","scrivi","scrive","scriviamo","scrivete","scrivono"]},
      {inf:"leggere", irr:1, en:"to read", forms:["leggo","leggi","legge","leggiamo","leggete","leggono"]},
      {inf:"prendere", irr:1, en:"to take", forms:["prendo","prendi","prende","prendiamo","prendete","prendono"]},
      {inf:"dormire", en:"to sleep", forms:["dormo","dormi","dorme","dormiamo","dormite","dormono"]},
      {inf:"aprire", irr:1, en:"to open", forms:["apro","apri","apre","apriamo","aprite","aprono"]},
      {inf:"finire", en:"to finish (-isc-)", forms:["finisco","finisci","finisce","finiamo","finite","finiscono"]},
      {inf:"capire", en:"to understand (-isc-)", forms:["capisco","capisci","capisce","capiamo","capite","capiscono"]}
    ]}},
    { course: "it_a0a2", unit: { id:"it_a0_c2", type:"conj", title:"Conjugate: Present (Presente) — irregular verbs", tense:"Present (Presente)", items: [
      {inf:"essere", irr:1, en:"to be", forms:["sono","sei","è","siamo","siete","sono"]},
      {inf:"avere", irr:1, en:"to have", forms:["ho","hai","ha","abbiamo","avete","hanno"]},
      {inf:"fare", irr:1, en:"to do / make", forms:["faccio","fai","fa","facciamo","fate","fanno"]},
      {inf:"andare", irr:1, en:"to go", forms:["vado","vai","va","andiamo","andate","vanno"]},
      {inf:"stare", irr:1, en:"to stay / be", forms:["sto","stai","sta","stiamo","state","stanno"]},
      {inf:"dare", irr:1, en:"to give", forms:["do","dai","dà","diamo","date","danno"]},
      {inf:"dire", irr:1, en:"to say", forms:["dico","dici","dice","diciamo","dite","dicono"]},
      {inf:"venire", irr:1, en:"to come", forms:["vengo","vieni","viene","veniamo","venite","vengono"]},
      {inf:"uscire", irr:1, en:"to go out", forms:["esco","esci","esce","usciamo","uscite","escono"]},
      {inf:"bere", irr:1, en:"to drink", forms:["bevo","bevi","beve","beviamo","bevete","bevono"]},
      {inf:"potere", irr:1, en:"can", forms:["posso","puoi","può","possiamo","potete","possono"]},
      {inf:"dovere", irr:1, en:"must", forms:["devo","devi","deve","dobbiamo","dovete","devono"]},
      {inf:"volere", irr:1, en:"to want", forms:["voglio","vuoi","vuole","vogliamo","volete","vogliono"]}
    ]}},
    { course: "it_a0a2", unit: { id:"it_a1_c1", type:"conj", title:"Conjugate: Spoken past (Passato prossimo) — ho parlato…", tense:"Spoken past (Passato prossimo)", items: [
      {inf:"parlare", en:"to speak → have spoken", forms:["ho parlato","hai parlato","ha parlato","abbiamo parlato","avete parlato","hanno parlato"]},
      {inf:"avere", irr:1, en:"to have → have had", forms:["ho avuto","hai avuto","ha avuto","abbiamo avuto","avete avuto","hanno avuto"]},
      {inf:"fare", irr:1, en:"to do → have done", forms:["ho fatto","hai fatto","ha fatto","abbiamo fatto","avete fatto","hanno fatto"]},
      {inf:"vedere", irr:1, en:"to see → have seen", forms:["ho visto","hai visto","ha visto","abbiamo visto","avete visto","hanno visto"]},
      {inf:"essere", irr:1, en:"to be → have been (essere! participle agrees)", forms:["sono stato/sono stata","sei stato/sei stata","è stato/è stata","siamo stati/siamo state","siete stati/siete state","sono stati/sono state"]},
      {inf:"andare", irr:1, en:"to go → have gone (essere! participle agrees)", forms:["sono andato/sono andata","sei andato/sei andata","è andato/è andata","siamo andati/siamo andate","siete andati/siete andate","sono andati/sono andate"]},
      {inf:"venire", irr:1, en:"to come → have come (essere!)", forms:["sono venuto/sono venuta","sei venuto/sei venuta","è venuto/è venuta","siamo venuti/siamo venute","siete venuti/siete venute","sono venuti/sono venute"]},
      {inf:"dire", irr:1, en:"to say → said (detto)", forms:["ho detto","hai detto","ha detto","abbiamo detto","avete detto","hanno detto"]}
    ]}},
    { course: "it_a0a2", unit: { id:"it_a2_c1", type:"conj", title:"Conjugate: Imperfect (Imperfetto) — used to / was doing", tense:"Imperfect (Imperfetto)", items: [
      {inf:"essere", irr:1, en:"to be", forms:["ero","eri","era","eravamo","eravate","erano"]},
      {inf:"avere", irr:1, en:"to have", forms:["avevo","avevi","aveva","avevamo","avevate","avevano"]},
      {inf:"parlare", en:"to speak", forms:["parlavo","parlavi","parlava","parlavamo","parlavate","parlavano"]},
      {inf:"fare", irr:1, en:"to do / make", forms:["facevo","facevi","faceva","facevamo","facevate","facevano"]},
      {inf:"bere", irr:1, en:"to drink", forms:["bevevo","bevevi","beveva","bevevamo","bevevate","bevevano"]},
      {inf:"dire", irr:1, en:"to say", forms:["dicevo","dicevi","diceva","dicevamo","dicevate","dicevano"]},
      {inf:"dormire", en:"to sleep", forms:["dormivo","dormivi","dormiva","dormivamo","dormivate","dormivano"]},
      {inf:"andare", irr:1, en:"to go → used to go", forms:["andavo","andavi","andava","andavamo","andavate","andavano"]}
    ]}},
    { course: "it_a0a2", unit: { id:"it_a2_c2", type:"conj", title:"Conjugate: Future (Futuro)", tense:"Future (Futuro)", items: [
      {inf:"essere", irr:1, en:"to be", forms:["sarò","sarai","sarà","saremo","sarete","saranno"]},
      {inf:"avere", irr:1, en:"to have", forms:["avrò","avrai","avrà","avremo","avrete","avranno"]},
      {inf:"parlare", en:"to speak", forms:["parlerò","parlerai","parlerà","parleremo","parlerete","parleranno"]},
      {inf:"mangiare", en:"to eat", forms:["mangerò","mangerai","mangerà","mangeremo","mangerete","mangeranno"]},
      {inf:"andare", irr:1, en:"to go", forms:["andrò","andrai","andrà","andremo","andrete","andranno"]},
      {inf:"fare", irr:1, en:"to do / make", forms:["farò","farai","farà","faremo","farete","faranno"]},
      {inf:"venire", irr:1, en:"to come", forms:["verrò","verrai","verrà","verremo","verrete","verranno"]},
      {inf:"volere", irr:1, en:"to want", forms:["vorrò","vorrai","vorrà","vorremo","vorrete","vorranno"]},
      {inf:"dire", irr:1, en:"to say → will say", forms:["dirò","dirai","dirà","diremo","direte","diranno"]}
    ]}},
    { course: "it_a0a2", unit: { id:"it_a2_c3", type:"conj", title:"Conjugate: Conditional (Condizionale) — would…", tense:"Conditional (Condizionale)", items: [
      {inf:"volere", irr:1, en:"to want → would like", forms:["vorrei","vorresti","vorrebbe","vorremmo","vorreste","vorrebbero"]},
      {inf:"essere", irr:1, en:"to be → would be", forms:["sarei","saresti","sarebbe","saremmo","sareste","sarebbero"]},
      {inf:"avere", irr:1, en:"to have → would have", forms:["avrei","avresti","avrebbe","avremmo","avreste","avrebbero"]},
      {inf:"potere", irr:1, en:"can → could", forms:["potrei","potresti","potrebbe","potremmo","potreste","potrebbero"]},
      {inf:"dovere", irr:1, en:"must → should", forms:["dovrei","dovresti","dovrebbe","dovremmo","dovreste","dovrebbero"]},
      {inf:"parlare", en:"to speak → would speak", forms:["parlerei","parleresti","parlerebbe","parleremmo","parlereste","parlerebbero"]},
      {inf:"fare", irr:1, en:"to do → would do", forms:["farei","faresti","farebbe","faremmo","fareste","farebbero"]},
      {inf:"dire", irr:1, en:"to say → would say", forms:["direi","diresti","direbbe","diremmo","direste","direbbero"]},
      {inf:"andare", irr:1, en:"to go → would go", forms:["andrei","andresti","andrebbe","andremmo","andreste","andrebbero"]}
    ]}},
    { course: "it_b1b2", unit: { id:"it_b1_c1", type:"conj", title:"Conjugate: Present subjunctive (Congiuntivo presente)", tense:"Present subjunctive (Congiuntivo presente)", items: [
      {inf:"essere", irr:1, en:"to be", forms:["sia","sia","sia","siamo","siate","siano"]},
      {inf:"avere", irr:1, en:"to have", forms:["abbia","abbia","abbia","abbiamo","abbiate","abbiano"]},
      {inf:"parlare", en:"to speak", forms:["parli","parli","parli","parliamo","parliate","parlino"]},
      {inf:"fare", irr:1, en:"to do / make", forms:["faccia","faccia","faccia","facciamo","facciate","facciano"]},
      {inf:"andare", irr:1, en:"to go", forms:["vada","vada","vada","andiamo","andiate","vadano"]},
      {inf:"finire", en:"to finish", forms:["finisca","finisca","finisca","finiamo","finiate","finiscano"]},
      {inf:"dire", irr:1, en:"to say (che io dica…)", forms:["dica","dica","dica","diciamo","diciate","dicano"]}
    ]}},
    { course: "it_b1b2", unit: { id:"it_b1_c2", type:"conj", title:"Conjugate: Imperfect subjunctive (Congiuntivo imperfetto)", tense:"Imperfect subjunctive (Congiuntivo imperfetto)", items: [
      {inf:"essere", irr:1, en:"to be", forms:["fossi","fossi","fosse","fossimo","foste","fossero"]},
      {inf:"avere", irr:1, en:"to have", forms:["avessi","avessi","avesse","avessimo","aveste","avessero"]},
      {inf:"parlare", en:"to speak", forms:["parlassi","parlassi","parlasse","parlassimo","parlaste","parlassero"]},
      {inf:"fare", irr:1, en:"to do / make", forms:["facessi","facessi","facesse","facessimo","faceste","facessero"]},
      {inf:"dire", irr:1, en:"to say (se io dicessi…)", forms:["dicessi","dicessi","dicesse","dicessimo","diceste","dicessero"]},
      {inf:"andare", irr:1, en:"to go (se io andassi…)", forms:["andassi","andassi","andasse","andassimo","andaste","andassero"]}
    ]}},
    { course: "it_b1b2", unit: { id:"it_b1_c3", type:"conj", title:"Conjugate: Historic past (Passato remoto) — written & literary", tense:"Historic past (Passato remoto)", items: [
      {inf:"essere", irr:1, en:"to be", forms:["fui","fosti","fu","fummo","foste","furono"]},
      {inf:"avere", irr:1, en:"to have", forms:["ebbi","avesti","ebbe","avemmo","aveste","ebbero"]},
      {inf:"fare", irr:1, en:"to do / make", forms:["feci","facesti","fece","facemmo","faceste","fecero"]},
      {inf:"parlare", en:"to speak", forms:["parlai","parlasti","parlò","parlammo","parlaste","parlarono"]},
      {inf:"dire", irr:1, en:"to say", forms:["dissi","dicesti","disse","dicemmo","diceste","dissero"]},
      {inf:"andare", irr:1, en:"to go → went (regular in the remoto!)", forms:["andai","andasti","andò","andammo","andaste","andarono"]}
    ]}}
  ],
  dutch: [
    { course: "nl_gram", unit: { id:"nl_irr5", type:"conj", title:"Conjugate: Top 5 irregular verbs — Present (presens)", tense:"Present (presens)", items: [
      {inf:"zijn", irr:1, en:"to be", forms:["ben","bent","is","zijn","zijn","zijn"]},
      {inf:"hebben", irr:1, en:"to have", forms:["heb","hebt","heeft","hebben","hebben","hebben"]},
      {inf:"kunnen", irr:1, en:"can / to be able to", forms:["kan","kunt/kan","kan","kunnen","kunnen","kunnen"]},
      {inf:"zullen", irr:1, en:"will / shall", forms:["zal","zult/zal","zal","zullen","zullen","zullen"]},
      {inf:"willen", irr:1, en:"to want", forms:["wil","wilt/wil","wil","willen","willen","willen"]}
    ]}},
    { course: "nl_speak", unit: { id:"nl_sp_c1", type:"conj", title:"Conjugate: Present – zijn, hebben & regular verbs", tense:"Present", items: [
      {inf:"zijn", irr:1, en:"to be", forms:["ben","bent","is","zijn","zijn","zijn"]},
      {inf:"hebben", irr:1, en:"to have", forms:["heb","hebt","heeft","hebben","hebben","hebben"]},
      {inf:"werken", en:"to work", forms:["werk","werkt","werkt","werken","werken","werken"]},
      {inf:"wonen", en:"to live", forms:["woon","woont","woont","wonen","wonen","wonen"]},
      {inf:"spreken", irr:1, en:"to speak", forms:["spreek","spreekt","spreekt","spreken","spreken","spreken"]},
      {inf:"komen", irr:1, en:"to come", forms:["kom","komt","komt","komen","komen","komen"]},
      {inf:"gaan", irr:1, en:"to go", forms:["ga","gaat","gaat","gaan","gaan","gaan"]},
      {inf:"doen", irr:1, en:"to do", forms:["doe","doet","doet","doen","doen","doen"]},
      {inf:"zien", irr:1, en:"to see", forms:["zie","ziet","ziet","zien","zien","zien"]},
      {inf:"schrijven", irr:1, en:"to write (f/v!)", forms:["schrijf","schrijft","schrijft","schrijven","schrijven","schrijven"]},
      {inf:"lezen", irr:1, en:"to read (s/z!)", forms:["lees","leest","leest","lezen","lezen","lezen"]}
    ]}},
    { course: "nl_gram", unit: { id:"nl_g_c1", type:"conj", title:"Conjugate: the 5 modal verbs (present)", tense:"Present", items: [
      {inf:"kunnen", irr:1, en:"can / to be able to", forms:["kan","kunt/kan","kan","kunnen","kunnen","kunnen"]},
      {inf:"moeten", irr:1, en:"must / to have to", forms:["moet","moet","moet","moeten","moeten","moeten"]},
      {inf:"mogen", irr:1, en:"may / to be allowed", forms:["mag","mag","mag","mogen","mogen","mogen"]},
      {inf:"willen", irr:1, en:"to want", forms:["wil","wilt/wil","wil","willen","willen","willen"]},
      {inf:"zullen", irr:1, en:"will / shall", forms:["zal","zult/zal","zal","zullen","zullen","zullen"]}
    ]}},
    { course: "nl_gram", unit: { id:"nl_g_c2", type:"conj", title:"Conjugate: Simple past (Imperfectum)", tense:"Simple past (imperfectum)", items: [
      {inf:"zijn", irr:1, en:"to be → was/were", forms:["was","was","was","waren","waren","waren"]},
      {inf:"hebben", irr:1, en:"to have → had", forms:["had","had","had","hadden","hadden","hadden"]},
      {inf:"werken", en:"to work ('t kofschip → -te)", forms:["werkte","werkte","werkte","werkten","werkten","werkten"]},
      {inf:"wonen", en:"to live (→ -de)", forms:["woonde","woonde","woonde","woonden","woonden","woonden"]},
      {inf:"gaan", irr:1, en:"to go → went", forms:["ging","ging","ging","gingen","gingen","gingen"]},
      {inf:"komen", irr:1, en:"to come → came", forms:["kwam","kwam","kwam","kwamen","kwamen","kwamen"]},
      {inf:"kunnen", irr:1, en:"can → could", forms:["kon","kon","kon","konden","konden","konden"]},
      {inf:"willen", irr:1, en:"to want → wanted", forms:["wilde/wou","wilde/wou","wilde/wou","wilden","wilden","wilden"]},
      {inf:"zullen", irr:1, en:"will → would", forms:["zou","zou","zou","zouden","zouden","zouden"]}
    ]}},
    { course: "nl_gram", unit: { id:"nl_g_c3", type:"conj", title:"Conjugate: Spoken past (Perfectum) — heb gewerkt…", tense:"Spoken past (perfectum)", items: [
      {inf:"werken", en:"to work → have worked ('t kofschip → -t)", forms:["heb gewerkt","hebt gewerkt","heeft gewerkt","hebben gewerkt","hebben gewerkt","hebben gewerkt"]},
      {inf:"wonen", en:"to live → have lived (→ -d)", forms:["heb gewoond","hebt gewoond","heeft gewoond","hebben gewoond","hebben gewoond","hebben gewoond"]},
      {inf:"kopen", irr:1, en:"to buy → have bought (irregular)", forms:["heb gekocht","hebt gekocht","heeft gekocht","hebben gekocht","hebben gekocht","hebben gekocht"]},
      {inf:"zien", irr:1, en:"to see → have seen", forms:["heb gezien","hebt gezien","heeft gezien","hebben gezien","hebben gezien","hebben gezien"]},
      {inf:"gaan", irr:1, en:"to go → have gone (zijn!)", forms:["ben gegaan","bent gegaan","is gegaan","zijn gegaan","zijn gegaan","zijn gegaan"]},
      {inf:"komen", irr:1, en:"to come → have come (zijn!)", forms:["ben gekomen","bent gekomen","is gekomen","zijn gekomen","zijn gekomen","zijn gekomen"]},
      {inf:"zijn", irr:1, en:"to be → have been (zijn!)", forms:["ben geweest","bent geweest","is geweest","zijn geweest","zijn geweest","zijn geweest"]},
      {inf:"hebben", irr:1, en:"to have → have had", forms:["heb gehad","hebt gehad","heeft gehad","hebben gehad","hebben gehad","hebben gehad"]}
    ]}},
    { course: "nl_gram", unit: { id:"nl_g_c4", type:"conj", title:"Conjugate: Future (zullen + infinitive)", tense:"Futurum", items: [
      {inf:"werken", en:"to work → will work", forms:["zal werken","zult werken/zal werken","zal werken","zullen werken","zullen werken","zullen werken"]},
      {inf:"gaan", irr:1, en:"to go → will go", forms:["zal gaan","zult gaan/zal gaan","zal gaan","zullen gaan","zullen gaan","zullen gaan"]},
      {inf:"zijn", irr:1, en:"to be → will be", forms:["zal zijn","zult zijn/zal zijn","zal zijn","zullen zijn","zullen zijn","zullen zijn"]},
      {inf:"komen", irr:1, en:"to come → will come", forms:["zal komen","zult komen/zal komen","zal komen","zullen komen","zullen komen","zullen komen"]},
      {inf:"doen", irr:1, en:"to do → will do", forms:["zal doen","zult doen/zal doen","zal doen","zullen doen","zullen doen","zullen doen"]}
    ]}}
  ],
  spanish: [
    { course: "es_core", unit: { id:"es_irr5_pret", type:"conj", title:"Conjugate: Top 5 irregulars — Simple past (Pretérito): fui, tuve, hice…", tense:"Simple past (pretérito)", items: [
      {inf:"ser", irr:1, en:"to be → was/were (identical to ir!)", forms:["fui","fuiste","fue","fuimos","fueron","fueron"]},
      {inf:"estar", irr:1, en:"to be → was/were (estuv-)", forms:["estuve","estuviste","estuvo","estuvimos","estuvieron","estuvieron"]},
      {inf:"ir", irr:1, en:"to go → went (identical to ser!)", forms:["fui","fuiste","fue","fuimos","fueron","fueron"]},
      {inf:"tener", irr:1, en:"to have → had (tuv-)", forms:["tuve","tuviste","tuvo","tuvimos","tuvieron","tuvieron"]},
      {inf:"hacer", irr:1, en:"to do/make → did/made (hic-, note hizo)", forms:["hice","hiciste","hizo","hicimos","hicieron","hicieron"]}
    ]}},
    { course: "es_core", unit: { id:"es_irr_fut", type:"conj", title:"Conjugate: Future (Futuro) — the irregular stems: tendré, haré…", tense:"Future (Futuro)", items: [
      {inf:"tener", irr:1, en:"to have → will have (tendr-)", forms:["tendré","tendrás","tendrá","tendremos","tendrán","tendrán"]},
      {inf:"hacer", irr:1, en:"to do → will do (har-)", forms:["haré","harás","hará","haremos","harán","harán"]},
      {inf:"decir", irr:1, en:"to say → will say (dir-)", forms:["diré","dirás","dirá","diremos","dirán","dirán"]},
      {inf:"poder", irr:1, en:"can → will be able (podr-)", forms:["podré","podrás","podrá","podremos","podrán","podrán"]},
      {inf:"saber", irr:1, en:"to know → will know (sabr-)", forms:["sabré","sabrás","sabrá","sabremos","sabrán","sabrán"]},
      {inf:"venir", irr:1, en:"to come → will come (vendr-)", forms:["vendré","vendrás","vendrá","vendremos","vendrán","vendrán"]}
    ]}},
    { course: "es_core", unit: { id:"es_irr5", type:"conj", title:"Conjugate: Top 5 irregular verbs — Present (Presente)", tense:"Present (Presente)", items: [
      {inf:"ser", irr:1, en:"to be (permanent)", forms:["soy","eres","es","somos","son","son"]},
      {inf:"estar", irr:1, en:"to be (state/location)", forms:["estoy","estás","está","estamos","están","están"]},
      {inf:"ir", irr:1, en:"to go", forms:["voy","vas","va","vamos","van","van"]},
      {inf:"tener", irr:1, en:"to have", forms:["tengo","tienes","tiene","tenemos","tienen","tienen"]},
      {inf:"hacer", irr:1, en:"to do / make", forms:["hago","haces","hace","hacemos","hacen","hacen"]}
    ]}}
  ],
  irish: [
    { course: "ga_core", unit: { id:"ga_irr5_pres", type:"conj", title:"Conjugate: Top 5 irregulars — Present (An Aimsir Láithreach)", tense:"Present (An Aimsir Láithreach)", items: [
      {inf:"bí", irr:1, en:"to be (tá — the state/location be)", forms:["táim/tá mé","tá tú","tá sé/tá sí","táimid/tá muid","tá sibh","tá siad"]},
      {inf:"déan", irr:1, en:"to do / make", forms:["déanaim","déanann tú","déanann sé/déanann sí","déanaimid","déanann sibh","déanann siad"]},
      {inf:"abair", irr:1, en:"to say (deir- stem)", forms:["deirim","deir tú","deir sé/deir sí","deirimid","deir sibh","deir siad"]},
      {inf:"faigh", irr:1, en:"to get", forms:["faighim","faigheann tú","faigheann sé/faigheann sí","faighimid","faigheann sibh","faigheann siad"]},
      {inf:"téigh", irr:1, en:"to go (té- stem)", forms:["téim","téann tú","téann sé/téann sí","téimid","téann sibh","téann siad"]}
    ]}},
    { course: "ga_core", unit: { id:"ga_irr5", type:"conj", title:"Conjugate: Top 5 irregulars — Past (An Aimsir Chaite)", tense:"Past (An Aimsir Chaite)", items: [
      {inf:"bí", irr:1, en:"to be → was/were (type pronoun too: bhí mé)", forms:["bhí mé","bhí tú","bhí sé/bhí sí","bhíomar/bhí muid","bhí sibh","bhí siad"]},
      {inf:"déan", irr:1, en:"to do/make → did/made", forms:["rinne mé","rinne tú","rinne sé/rinne sí","rinneamar/rinne muid","rinne sibh","rinne siad"]},
      {inf:"abair", irr:1, en:"to say → said", forms:["dúirt mé","dúirt tú","dúirt sé/dúirt sí","dúramar/dúirt muid","dúirt sibh","dúirt siad"]},
      {inf:"faigh", irr:1, en:"to get → got", forms:["fuair mé","fuair tú","fuair sé/fuair sí","fuaireamar/fuair muid","fuair sibh","fuair siad"]},
      {inf:"téigh", irr:1, en:"to go → went", forms:["chuaigh mé","chuaigh tú","chuaigh sé/chuaigh sí","chuamar/chuaigh muid","chuaigh sibh","chuaigh siad"]}
    ]}}
  ],
  japanese: [
    { course: "ja_core", unit: { id:"ja_irr5_b", type:"conj", title:"Conjugate: Top 5 irregulars II — polite past, negatives & potential", tense:"Forms II", items: [
      {inf:"する (suru)", irr:1, en:"to do", rows:["polite past (〜ました)","plain negative past (〜なかった)","polite negative (〜ません)","polite negative past","potential (can do)"], forms:["しました","しなかった","しません","しませんでした","できる"]},
      {inf:"来る (kuru)", irr:1, en:"to come — reading shifts to き/こ", rows:["polite past (〜ました)","plain negative past (〜なかった)","polite negative (〜ません)","polite negative past","potential (can come)"], forms:["来ました/きました","来なかった/こなかった","来ません/きません","来ませんでした/きませんでした","来られる/こられる/これる"]},
      {inf:"ある (aru)", irr:1, en:"to exist (things) — negatives use ない", rows:["polite past (〜ました)","plain negative past","polite negative (〜ません)","polite negative past","potential (can exist)"], forms:["ありました","なかった","ありません","ありませんでした","あり得る/ありえる"]},
      {inf:"行く (iku)", irr:1, en:"to go", rows:["polite past (〜ました)","plain negative past (〜なかった)","polite negative (〜ません)","polite negative past","potential (can go)"], forms:["行きました/いきました","行かなかった/いかなかった","行きません/いきません","行きませんでした/いきませんでした","行ける/いける"]},
      {inf:"だ・です (copula)", irr:1, en:"to be (X is Y)", rows:["polite past (でした)","plain negative past","polite negative","polite negative past"], forms:["でした","じゃなかった/ではなかった","じゃありません/ではありません/じゃないです","じゃありませんでした/ではありませんでした"]}
    ]}},
    { course: "ja_core", unit: { id:"ja_irr5", type:"conj", title:"Conjugate: Top 5 irregular verbs (plain & polite)", tense:"Forms", items: [
      {inf:"する (suru)", irr:1, en:"to do", rows:["dictionary (plain)","polite (〜ます)","negative (plain)","past (plain)","te-form"], forms:["する","します","しない","した","して"]},
      {inf:"来る (kuru)", irr:1, en:"to come — the reading changes!", rows:["dictionary (plain)","polite (〜ます)","negative (plain)","past (plain)","te-form"], forms:["来る/くる","来ます/きます","来ない/こない","来た/きた","来て/きて"]},
      {inf:"ある (aru)", irr:1, en:"to exist (things) — negative is just ない", rows:["dictionary (plain)","polite (〜ます)","negative (plain)","past (plain)","te-form"], forms:["ある","あります","ない","あった","あって"]},
      {inf:"行く (iku)", irr:1, en:"to go — past/te are irregular (行った, not 行いた)", rows:["dictionary (plain)","polite (〜ます)","negative (plain)","past (plain)","te-form"], forms:["行く/いく","行きます/いきます","行かない/いかない","行った/いった","行って/いって"]},
      {inf:"だ・です (copula)", irr:1, en:"to be (X is Y)", rows:["dictionary (plain)","polite","negative (plain)","past (plain)","te-form"], forms:["だ","です","じゃない","だった","で"]}
    ]}}
  ]
};
