// Conjugation-drill data. Each unit lists verbs; a quiz question shows one verb
// and the user types the form for every person. Alternate accepted forms are
// separated by "/" (e.g. "wärst/wärest").
// Persons per language are defined in index.html (6 rows each).
window.QUIZ_CONJ = {
  german: [
    { course: "de_a1", unit: { id:"de_irr5", type:"conj", title:"Conjugate: Top 5 irregular verbs (Präsens)", tense:"Präsens", items: [
      {inf:"sein", en:"to be", forms:["bin","bist","ist","sind","seid","sind"]},
      {inf:"haben", en:"to have", forms:["habe","hast","hat","haben","habt","haben"]},
      {inf:"werden", en:"to become / will", forms:["werde","wirst","wird","werden","werdet","werden"]},
      {inf:"können", en:"can / to be able to", forms:["kann","kannst","kann","können","könnt","können"]},
      {inf:"müssen", en:"must / to have to", forms:["muss","musst","muss","müssen","müsst","müssen"]}
    ]}},
    { course: "de_a1", unit: { id:"de_a1_c1", type:"conj", title:"Conjugate: Present – regular & vowel-change", tense:"Präsens", items: [
      {inf:"machen", en:"to do / make", forms:["mache","machst","macht","machen","macht","machen"]},
      {inf:"wohnen", en:"to live", forms:["wohne","wohnst","wohnt","wohnen","wohnt","wohnen"]},
      {inf:"arbeiten", en:"to work", forms:["arbeite","arbeitest","arbeitet","arbeiten","arbeitet","arbeiten"]},
      {inf:"sprechen", en:"to speak", forms:["spreche","sprichst","spricht","sprechen","sprecht","sprechen"]},
      {inf:"lesen", en:"to read", forms:["lese","liest","liest","lesen","lest","lesen"]},
      {inf:"fahren", en:"to drive / ride", forms:["fahre","fährst","fährt","fahren","fahrt","fahren"]},
      {inf:"essen", en:"to eat", forms:["esse","isst","isst","essen","esst","essen"]},
      {inf:"nehmen", en:"to take", forms:["nehme","nimmst","nimmt","nehmen","nehmt","nehmen"]},
      {inf:"schlafen", en:"to sleep", forms:["schlafe","schläfst","schläft","schlafen","schlaft","schlafen"]},
      {inf:"sehen", en:"to see", forms:["sehe","siehst","sieht","sehen","seht","sehen"]},
      {inf:"geben", en:"to give", forms:["gebe","gibst","gibt","geben","gebt","geben"]},
      {inf:"aufstehen", en:"to get up (separable!)", forms:["stehe auf","stehst auf","steht auf","stehen auf","steht auf","stehen auf"]},
      {inf:"einkaufen", en:"to shop (separable!)", forms:["kaufe ein","kaufst ein","kauft ein","kaufen ein","kauft ein","kaufen ein"]}
    ]}},
    { course: "de_a1", unit: { id:"de_a1_c2", type:"conj", title:"Conjugate: sein, haben & werden (Präsens)", tense:"Präsens", items: [
      {inf:"sein", en:"to be", forms:["bin","bist","ist","sind","seid","sind"]},
      {inf:"haben", en:"to have", forms:["habe","hast","hat","haben","habt","haben"]},
      {inf:"werden", en:"to become", forms:["werde","wirst","wird","werden","werdet","werden"]}
    ]}},
    { course: "de_a1", unit: { id:"de_a1_c3", type:"conj", title:"Conjugate: all 6 modal verbs + möchten", tense:"Präsens", items: [
      {inf:"können", en:"can / to be able to", forms:["kann","kannst","kann","können","könnt","können"]},
      {inf:"müssen", en:"must / to have to", forms:["muss","musst","muss","müssen","müsst","müssen"]},
      {inf:"wollen", en:"to want", forms:["will","willst","will","wollen","wollt","wollen"]},
      {inf:"dürfen", en:"may / to be allowed", forms:["darf","darfst","darf","dürfen","dürft","dürfen"]},
      {inf:"sollen", en:"should / to be supposed to", forms:["soll","sollst","soll","sollen","sollt","sollen"]},
      {inf:"mögen", en:"to like", forms:["mag","magst","mag","mögen","mögt","mögen"]},
      {inf:"möchten", en:"would like", forms:["möchte","möchtest","möchte","möchten","möchtet","möchten"]}
    ]}},
    { course: "de_a1", unit: { id:"de_a1_c4", type:"conj", title:"Conjugate: Präteritum (sein, haben, modals)", tense:"Präteritum", items: [
      {inf:"sein", en:"to be → was/were", forms:["war","warst","war","waren","wart","waren"]},
      {inf:"haben", en:"to have → had", forms:["hatte","hattest","hatte","hatten","hattet","hatten"]},
      {inf:"werden", en:"to become → became", forms:["wurde","wurdest","wurde","wurden","wurdet","wurden"]},
      {inf:"können", en:"could", forms:["konnte","konntest","konnte","konnten","konntet","konnten"]},
      {inf:"müssen", en:"had to", forms:["musste","musstest","musste","mussten","musstet","mussten"]},
      {inf:"wollen", en:"wanted", forms:["wollte","wolltest","wollte","wollten","wolltet","wollten"]},
      {inf:"dürfen", en:"was allowed to", forms:["durfte","durftest","durfte","durften","durftet","durften"]},
      {inf:"sollen", en:"was supposed to", forms:["sollte","solltest","sollte","sollten","solltet","sollten"]}
    ]}},
    { course: "de_a1", unit: { id:"de_a1_c5", type:"conj", title:"Conjugate: Perfekt — the spoken past (habe gemacht…)", tense:"Perfekt", items: [
      {inf:"machen", en:"to do → have done", forms:["habe gemacht","hast gemacht","hat gemacht","haben gemacht","habt gemacht","haben gemacht"]},
      {inf:"sehen", en:"to see → have seen", forms:["habe gesehen","hast gesehen","hat gesehen","haben gesehen","habt gesehen","haben gesehen"]},
      {inf:"essen", en:"to eat → have eaten", forms:["habe gegessen","hast gegessen","hat gegessen","haben gegessen","habt gegessen","haben gegessen"]},
      {inf:"gehen", en:"to go → have gone (sein!)", forms:["bin gegangen","bist gegangen","ist gegangen","sind gegangen","seid gegangen","sind gegangen"]},
      {inf:"fahren", en:"to drive → have driven (sein!)", forms:["bin gefahren","bist gefahren","ist gefahren","sind gefahren","seid gefahren","sind gefahren"]},
      {inf:"sein", en:"to be → have been (sein!)", forms:["bin gewesen","bist gewesen","ist gewesen","sind gewesen","seid gewesen","sind gewesen"]},
      {inf:"haben", en:"to have → have had", forms:["habe gehabt","hast gehabt","hat gehabt","haben gehabt","habt gehabt","haben gehabt"]},
      {inf:"einkaufen", en:"to shop → have shopped (separable!)", forms:["habe eingekauft","hast eingekauft","hat eingekauft","haben eingekauft","habt eingekauft","haben eingekauft"]},
      {inf:"sein", en:"to be → have been (gewesen, with sein!)", forms:["bin gewesen","bist gewesen","ist gewesen","sind gewesen","seid gewesen","sind gewesen"]},
      {inf:"haben", en:"to have → have had (gehabt)", forms:["habe gehabt","hast gehabt","hat gehabt","haben gehabt","habt gehabt","haben gehabt"]},
      {inf:"werden", en:"to become → have become (geworden, with sein!)", forms:["bin geworden","bist geworden","ist geworden","sind geworden","seid geworden","sind geworden"]}
    ]}},
    { course: "de_a1", unit: { id:"de_a1_c6", type:"conj", title:"Conjugate: Präteritum — strong & regular verbs", tense:"Präteritum", items: [
      {inf:"machen", en:"to do → did (regular)", forms:["machte","machtest","machte","machten","machtet","machten"]},
      {inf:"spielen", en:"to play → played (regular)", forms:["spielte","spieltest","spielte","spielten","spieltet","spielten"]},
      {inf:"gehen", en:"to go → went", forms:["ging","gingst","ging","gingen","gingt","gingen"]},
      {inf:"kommen", en:"to come → came", forms:["kam","kamst","kam","kamen","kamt","kamen"]},
      {inf:"sprechen", en:"to speak → spoke", forms:["sprach","sprachst","sprach","sprachen","spracht","sprachen"]},
      {inf:"essen", en:"to eat → ate", forms:["aß","aßest","aß","aßen","aßt","aßen"]},
      {inf:"fahren", en:"to drive → drove", forms:["fuhr","fuhrst","fuhr","fuhren","fuhrt","fuhren"]},
      {inf:"sehen", en:"to see → saw", forms:["sah","sahst","sah","sahen","saht","sahen"]},
      {inf:"geben", en:"to give → gave", forms:["gab","gabst","gab","gaben","gabt","gaben"]}
    ]}},
    { course: "de_a2b1", unit: { id:"de_b1_c2", type:"conj", title:"Conjugate: Futur I (werde machen…)", tense:"Futur I", items: [
      {inf:"machen", en:"to do → will do", forms:["werde machen","wirst machen","wird machen","werden machen","werdet machen","werden machen"]},
      {inf:"gehen", en:"to go → will go", forms:["werde gehen","wirst gehen","wird gehen","werden gehen","werdet gehen","werden gehen"]},
      {inf:"sein", en:"to be → will be", forms:["werde sein","wirst sein","wird sein","werden sein","werdet sein","werden sein"]},
      {inf:"haben", en:"to have → will have", forms:["werde haben","wirst haben","wird haben","werden haben","werdet haben","werden haben"]},
      {inf:"kommen", en:"to come → will come", forms:["werde kommen","wirst kommen","wird kommen","werden kommen","werdet kommen","werden kommen"]}
    ]}},
    { course: "de_a2b1", unit: { id:"de_b1_c1", type:"conj", title:"Conjugate: Konjunktiv II (wäre, hätte, würde…)", tense:"Konjunktiv II", items: [
      {inf:"sein", en:"would be", forms:["wäre","wärst/wärest","wäre","wären","wärt/wäret","wären"]},
      {inf:"haben", en:"would have", forms:["hätte","hättest","hätte","hätten","hättet","hätten"]},
      {inf:"werden", en:"would (würde-form)", forms:["würde","würdest","würde","würden","würdet","würden"]},
      {inf:"können", en:"could (polite)", forms:["könnte","könntest","könnte","könnten","könntet","könnten"]},
      {inf:"müssen", en:"would have to", forms:["müsste","müsstest","müsste","müssten","müsstet","müssten"]},
      {inf:"sollen", en:"should (advice)", forms:["sollte","solltest","sollte","sollten","solltet","sollten"]}
    ]}}
  ],
  italian: [
    { course: "it_a0a2", unit: { id:"it_irr5", type:"conj", title:"Conjugate: Top 5 irregular verbs (Presente)", tense:"Presente", items: [
      {inf:"essere", en:"to be", forms:["sono","sei","è","siamo","siete","sono"]},
      {inf:"avere", en:"to have", forms:["ho","hai","ha","abbiamo","avete","hanno"]},
      {inf:"fare", en:"to do / make", forms:["faccio","fai","fa","facciamo","fate","fanno"]},
      {inf:"dire", en:"to say / tell", forms:["dico","dici","dice","diciamo","dite","dicono"]},
      {inf:"andare", en:"to go", forms:["vado","vai","va","andiamo","andate","vanno"]}
    ]}},
    { course: "it_a0a2", unit: { id:"it_a0_c1", type:"conj", title:"Conjugate: Presente – 3 conjugations (-are/-ere/-ire)", tense:"Presente", items: [
      {inf:"parlare", en:"to speak", forms:["parlo","parli","parla","parliamo","parlate","parlano"]},
      {inf:"mangiare", en:"to eat", forms:["mangio","mangi","mangia","mangiamo","mangiate","mangiano"]},
      {inf:"lavorare", en:"to work", forms:["lavoro","lavori","lavora","lavoriamo","lavorate","lavorano"]},
      {inf:"scrivere", en:"to write", forms:["scrivo","scrivi","scrive","scriviamo","scrivete","scrivono"]},
      {inf:"leggere", en:"to read", forms:["leggo","leggi","legge","leggiamo","leggete","leggono"]},
      {inf:"prendere", en:"to take", forms:["prendo","prendi","prende","prendiamo","prendete","prendono"]},
      {inf:"dormire", en:"to sleep", forms:["dormo","dormi","dorme","dormiamo","dormite","dormono"]},
      {inf:"aprire", en:"to open", forms:["apro","apri","apre","apriamo","aprite","aprono"]},
      {inf:"finire", en:"to finish (-isc-)", forms:["finisco","finisci","finisce","finiamo","finite","finiscono"]},
      {inf:"capire", en:"to understand (-isc-)", forms:["capisco","capisci","capisce","capiamo","capite","capiscono"]}
    ]}},
    { course: "it_a0a2", unit: { id:"it_a0_c2", type:"conj", title:"Conjugate: Presente – irregular verbs", tense:"Presente", items: [
      {inf:"essere", en:"to be", forms:["sono","sei","è","siamo","siete","sono"]},
      {inf:"avere", en:"to have", forms:["ho","hai","ha","abbiamo","avete","hanno"]},
      {inf:"fare", en:"to do / make", forms:["faccio","fai","fa","facciamo","fate","fanno"]},
      {inf:"andare", en:"to go", forms:["vado","vai","va","andiamo","andate","vanno"]},
      {inf:"stare", en:"to stay / be", forms:["sto","stai","sta","stiamo","state","stanno"]},
      {inf:"dare", en:"to give", forms:["do","dai","dà","diamo","date","danno"]},
      {inf:"dire", en:"to say", forms:["dico","dici","dice","diciamo","dite","dicono"]},
      {inf:"venire", en:"to come", forms:["vengo","vieni","viene","veniamo","venite","vengono"]},
      {inf:"uscire", en:"to go out", forms:["esco","esci","esce","usciamo","uscite","escono"]},
      {inf:"bere", en:"to drink", forms:["bevo","bevi","beve","beviamo","bevete","bevono"]},
      {inf:"potere", en:"can", forms:["posso","puoi","può","possiamo","potete","possono"]},
      {inf:"dovere", en:"must", forms:["devo","devi","deve","dobbiamo","dovete","devono"]},
      {inf:"volere", en:"to want", forms:["voglio","vuoi","vuole","vogliamo","volete","vogliono"]}
    ]}},
    { course: "it_a0a2", unit: { id:"it_a1_c1", type:"conj", title:"Conjugate: Passato prossimo — the spoken past (ho parlato…)", tense:"Passato prossimo", items: [
      {inf:"parlare", en:"to speak → have spoken", forms:["ho parlato","hai parlato","ha parlato","abbiamo parlato","avete parlato","hanno parlato"]},
      {inf:"avere", en:"to have → have had", forms:["ho avuto","hai avuto","ha avuto","abbiamo avuto","avete avuto","hanno avuto"]},
      {inf:"fare", en:"to do → have done", forms:["ho fatto","hai fatto","ha fatto","abbiamo fatto","avete fatto","hanno fatto"]},
      {inf:"vedere", en:"to see → have seen", forms:["ho visto","hai visto","ha visto","abbiamo visto","avete visto","hanno visto"]},
      {inf:"essere", en:"to be → have been (essere! participle agrees)", forms:["sono stato/sono stata","sei stato/sei stata","è stato/è stata","siamo stati/siamo state","siete stati/siete state","sono stati/sono state"]},
      {inf:"andare", en:"to go → have gone (essere! participle agrees)", forms:["sono andato/sono andata","sei andato/sei andata","è andato/è andata","siamo andati/siamo andate","siete andati/siete andate","sono andati/sono andate"]},
      {inf:"venire", en:"to come → have come (essere!)", forms:["sono venuto/sono venuta","sei venuto/sei venuta","è venuto/è venuta","siamo venuti/siamo venute","siete venuti/siete venute","sono venuti/sono venute"]},
      {inf:"dire", en:"to say → said (detto)", forms:["ho detto","hai detto","ha detto","abbiamo detto","avete detto","hanno detto"]}
    ]}},
    { course: "it_a0a2", unit: { id:"it_a2_c1", type:"conj", title:"Conjugate: Imperfetto", tense:"Imperfetto", items: [
      {inf:"essere", en:"to be", forms:["ero","eri","era","eravamo","eravate","erano"]},
      {inf:"avere", en:"to have", forms:["avevo","avevi","aveva","avevamo","avevate","avevano"]},
      {inf:"parlare", en:"to speak", forms:["parlavo","parlavi","parlava","parlavamo","parlavate","parlavano"]},
      {inf:"fare", en:"to do / make", forms:["facevo","facevi","faceva","facevamo","facevate","facevano"]},
      {inf:"bere", en:"to drink", forms:["bevevo","bevevi","beveva","bevevamo","bevevate","bevevano"]},
      {inf:"dire", en:"to say", forms:["dicevo","dicevi","diceva","dicevamo","dicevate","dicevano"]},
      {inf:"dormire", en:"to sleep", forms:["dormivo","dormivi","dormiva","dormivamo","dormivate","dormivano"]},
      {inf:"andare", en:"to go → used to go", forms:["andavo","andavi","andava","andavamo","andavate","andavano"]}
    ]}},
    { course: "it_a0a2", unit: { id:"it_a2_c2", type:"conj", title:"Conjugate: Futuro", tense:"Futuro", items: [
      {inf:"essere", en:"to be", forms:["sarò","sarai","sarà","saremo","sarete","saranno"]},
      {inf:"avere", en:"to have", forms:["avrò","avrai","avrà","avremo","avrete","avranno"]},
      {inf:"parlare", en:"to speak", forms:["parlerò","parlerai","parlerà","parleremo","parlerete","parleranno"]},
      {inf:"mangiare", en:"to eat", forms:["mangerò","mangerai","mangerà","mangeremo","mangerete","mangeranno"]},
      {inf:"andare", en:"to go", forms:["andrò","andrai","andrà","andremo","andrete","andranno"]},
      {inf:"fare", en:"to do / make", forms:["farò","farai","farà","faremo","farete","faranno"]},
      {inf:"venire", en:"to come", forms:["verrò","verrai","verrà","verremo","verrete","verranno"]},
      {inf:"volere", en:"to want", forms:["vorrò","vorrai","vorrà","vorremo","vorrete","vorranno"]},
      {inf:"dire", en:"to say → will say", forms:["dirò","dirai","dirà","diremo","direte","diranno"]}
    ]}},
    { course: "it_a0a2", unit: { id:"it_a2_c3", type:"conj", title:"Conjugate: Condizionale presente", tense:"Condizionale", items: [
      {inf:"volere", en:"to want → would like", forms:["vorrei","vorresti","vorrebbe","vorremmo","vorreste","vorrebbero"]},
      {inf:"essere", en:"to be → would be", forms:["sarei","saresti","sarebbe","saremmo","sareste","sarebbero"]},
      {inf:"avere", en:"to have → would have", forms:["avrei","avresti","avrebbe","avremmo","avreste","avrebbero"]},
      {inf:"potere", en:"can → could", forms:["potrei","potresti","potrebbe","potremmo","potreste","potrebbero"]},
      {inf:"dovere", en:"must → should", forms:["dovrei","dovresti","dovrebbe","dovremmo","dovreste","dovrebbero"]},
      {inf:"parlare", en:"to speak → would speak", forms:["parlerei","parleresti","parlerebbe","parleremmo","parlereste","parlerebbero"]},
      {inf:"fare", en:"to do → would do", forms:["farei","faresti","farebbe","faremmo","fareste","farebbero"]},
      {inf:"dire", en:"to say → would say", forms:["direi","diresti","direbbe","diremmo","direste","direbbero"]},
      {inf:"andare", en:"to go → would go", forms:["andrei","andresti","andrebbe","andremmo","andreste","andrebbero"]}
    ]}},
    { course: "it_b1b2", unit: { id:"it_b1_c1", type:"conj", title:"Conjugate: Congiuntivo presente", tense:"Congiuntivo presente", items: [
      {inf:"essere", en:"to be", forms:["sia","sia","sia","siamo","siate","siano"]},
      {inf:"avere", en:"to have", forms:["abbia","abbia","abbia","abbiamo","abbiate","abbiano"]},
      {inf:"parlare", en:"to speak", forms:["parli","parli","parli","parliamo","parliate","parlino"]},
      {inf:"fare", en:"to do / make", forms:["faccia","faccia","faccia","facciamo","facciate","facciano"]},
      {inf:"andare", en:"to go", forms:["vada","vada","vada","andiamo","andiate","vadano"]},
      {inf:"finire", en:"to finish", forms:["finisca","finisca","finisca","finiamo","finiate","finiscano"]},
      {inf:"dire", en:"to say (che io dica…)", forms:["dica","dica","dica","diciamo","diciate","dicano"]}
    ]}},
    { course: "it_b1b2", unit: { id:"it_b1_c2", type:"conj", title:"Conjugate: Congiuntivo imperfetto", tense:"Congiuntivo imperfetto", items: [
      {inf:"essere", en:"to be", forms:["fossi","fossi","fosse","fossimo","foste","fossero"]},
      {inf:"avere", en:"to have", forms:["avessi","avessi","avesse","avessimo","aveste","avessero"]},
      {inf:"parlare", en:"to speak", forms:["parlassi","parlassi","parlasse","parlassimo","parlaste","parlassero"]},
      {inf:"fare", en:"to do / make", forms:["facessi","facessi","facesse","facessimo","faceste","facessero"]},
      {inf:"dire", en:"to say (se io dicessi…)", forms:["dicessi","dicessi","dicesse","dicessimo","diceste","dicessero"]},
      {inf:"andare", en:"to go (se io andassi…)", forms:["andassi","andassi","andasse","andassimo","andaste","andassero"]}
    ]}},
    { course: "it_b1b2", unit: { id:"it_b1_c3", type:"conj", title:"Conjugate: Passato remoto", tense:"Passato remoto", items: [
      {inf:"essere", en:"to be", forms:["fui","fosti","fu","fummo","foste","furono"]},
      {inf:"avere", en:"to have", forms:["ebbi","avesti","ebbe","avemmo","aveste","ebbero"]},
      {inf:"fare", en:"to do / make", forms:["feci","facesti","fece","facemmo","faceste","fecero"]},
      {inf:"parlare", en:"to speak", forms:["parlai","parlasti","parlò","parlammo","parlaste","parlarono"]},
      {inf:"dire", en:"to say", forms:["dissi","dicesti","disse","dicemmo","diceste","dissero"]},
      {inf:"andare", en:"to go → went (regular in the remoto!)", forms:["andai","andasti","andò","andammo","andaste","andarono"]}
    ]}}
  ],
  dutch: [
    { course: "nl_gram", unit: { id:"nl_irr5", type:"conj", title:"Conjugate: Top 5 irregular verbs (presens)", tense:"Presens", items: [
      {inf:"zijn", en:"to be", forms:["ben","bent","is","zijn","zijn","zijn"]},
      {inf:"hebben", en:"to have", forms:["heb","hebt","heeft","hebben","hebben","hebben"]},
      {inf:"kunnen", en:"can / to be able to", forms:["kan","kunt/kan","kan","kunnen","kunnen","kunnen"]},
      {inf:"zullen", en:"will / shall", forms:["zal","zult/zal","zal","zullen","zullen","zullen"]},
      {inf:"willen", en:"to want", forms:["wil","wilt/wil","wil","willen","willen","willen"]}
    ]}},
    { course: "nl_speak", unit: { id:"nl_sp_c1", type:"conj", title:"Conjugate: Present – zijn, hebben & regular verbs", tense:"Present", items: [
      {inf:"zijn", en:"to be", forms:["ben","bent","is","zijn","zijn","zijn"]},
      {inf:"hebben", en:"to have", forms:["heb","hebt","heeft","hebben","hebben","hebben"]},
      {inf:"werken", en:"to work", forms:["werk","werkt","werkt","werken","werken","werken"]},
      {inf:"wonen", en:"to live", forms:["woon","woont","woont","wonen","wonen","wonen"]},
      {inf:"spreken", en:"to speak", forms:["spreek","spreekt","spreekt","spreken","spreken","spreken"]},
      {inf:"komen", en:"to come", forms:["kom","komt","komt","komen","komen","komen"]},
      {inf:"gaan", en:"to go", forms:["ga","gaat","gaat","gaan","gaan","gaan"]},
      {inf:"doen", en:"to do", forms:["doe","doet","doet","doen","doen","doen"]},
      {inf:"zien", en:"to see", forms:["zie","ziet","ziet","zien","zien","zien"]},
      {inf:"schrijven", en:"to write (f/v!)", forms:["schrijf","schrijft","schrijft","schrijven","schrijven","schrijven"]},
      {inf:"lezen", en:"to read (s/z!)", forms:["lees","leest","leest","lezen","lezen","lezen"]}
    ]}},
    { course: "nl_gram", unit: { id:"nl_g_c1", type:"conj", title:"Conjugate: the 5 modal verbs (present)", tense:"Present", items: [
      {inf:"kunnen", en:"can / to be able to", forms:["kan","kunt/kan","kan","kunnen","kunnen","kunnen"]},
      {inf:"moeten", en:"must / to have to", forms:["moet","moet","moet","moeten","moeten","moeten"]},
      {inf:"mogen", en:"may / to be allowed", forms:["mag","mag","mag","mogen","mogen","mogen"]},
      {inf:"willen", en:"to want", forms:["wil","wilt/wil","wil","willen","willen","willen"]},
      {inf:"zullen", en:"will / shall", forms:["zal","zult/zal","zal","zullen","zullen","zullen"]}
    ]}},
    { course: "nl_gram", unit: { id:"nl_g_c2", type:"conj", title:"Conjugate: Imperfectum (simple past)", tense:"Imperfectum", items: [
      {inf:"zijn", en:"to be → was/were", forms:["was","was","was","waren","waren","waren"]},
      {inf:"hebben", en:"to have → had", forms:["had","had","had","hadden","hadden","hadden"]},
      {inf:"werken", en:"to work ('t kofschip → -te)", forms:["werkte","werkte","werkte","werkten","werkten","werkten"]},
      {inf:"wonen", en:"to live (→ -de)", forms:["woonde","woonde","woonde","woonden","woonden","woonden"]},
      {inf:"gaan", en:"to go → went", forms:["ging","ging","ging","gingen","gingen","gingen"]},
      {inf:"komen", en:"to come → came", forms:["kwam","kwam","kwam","kwamen","kwamen","kwamen"]},
      {inf:"kunnen", en:"can → could", forms:["kon","kon","kon","konden","konden","konden"]},
      {inf:"willen", en:"to want → wanted", forms:["wilde/wou","wilde/wou","wilde/wou","wilden","wilden","wilden"]},
      {inf:"zullen", en:"will → would", forms:["zou","zou","zou","zouden","zouden","zouden"]}
    ]}},
    { course: "nl_gram", unit: { id:"nl_g_c3", type:"conj", title:"Conjugate: Perfectum — the spoken past (heb gewerkt…)", tense:"Perfectum", items: [
      {inf:"werken", en:"to work → have worked ('t kofschip → -t)", forms:["heb gewerkt","hebt gewerkt","heeft gewerkt","hebben gewerkt","hebben gewerkt","hebben gewerkt"]},
      {inf:"wonen", en:"to live → have lived (→ -d)", forms:["heb gewoond","hebt gewoond","heeft gewoond","hebben gewoond","hebben gewoond","hebben gewoond"]},
      {inf:"kopen", en:"to buy → have bought (irregular)", forms:["heb gekocht","hebt gekocht","heeft gekocht","hebben gekocht","hebben gekocht","hebben gekocht"]},
      {inf:"zien", en:"to see → have seen", forms:["heb gezien","hebt gezien","heeft gezien","hebben gezien","hebben gezien","hebben gezien"]},
      {inf:"gaan", en:"to go → have gone (zijn!)", forms:["ben gegaan","bent gegaan","is gegaan","zijn gegaan","zijn gegaan","zijn gegaan"]},
      {inf:"komen", en:"to come → have come (zijn!)", forms:["ben gekomen","bent gekomen","is gekomen","zijn gekomen","zijn gekomen","zijn gekomen"]},
      {inf:"zijn", en:"to be → have been (zijn!)", forms:["ben geweest","bent geweest","is geweest","zijn geweest","zijn geweest","zijn geweest"]},
      {inf:"hebben", en:"to have → have had", forms:["heb gehad","hebt gehad","heeft gehad","hebben gehad","hebben gehad","hebben gehad"]}
    ]}},
    { course: "nl_gram", unit: { id:"nl_g_c4", type:"conj", title:"Conjugate: Future (zullen + infinitive)", tense:"Futurum", items: [
      {inf:"werken", en:"to work → will work", forms:["zal werken","zult werken/zal werken","zal werken","zullen werken","zullen werken","zullen werken"]},
      {inf:"gaan", en:"to go → will go", forms:["zal gaan","zult gaan/zal gaan","zal gaan","zullen gaan","zullen gaan","zullen gaan"]},
      {inf:"zijn", en:"to be → will be", forms:["zal zijn","zult zijn/zal zijn","zal zijn","zullen zijn","zullen zijn","zullen zijn"]},
      {inf:"komen", en:"to come → will come", forms:["zal komen","zult komen/zal komen","zal komen","zullen komen","zullen komen","zullen komen"]},
      {inf:"doen", en:"to do → will do", forms:["zal doen","zult doen/zal doen","zal doen","zullen doen","zullen doen","zullen doen"]}
    ]}}
  ],
  spanish: [
    { course: "es_core", unit: { id:"es_irr5_pret", type:"conj", title:"Conjugate: Top 5 irregulars — pretérito (fui, tuve, hice…)", tense:"Pretérito indefinido", items: [
      {inf:"ser", en:"to be → was/were (identical to ir!)", forms:["fui","fuiste","fue","fuimos","fueron","fueron"]},
      {inf:"estar", en:"to be → was/were (estuv-)", forms:["estuve","estuviste","estuvo","estuvimos","estuvieron","estuvieron"]},
      {inf:"ir", en:"to go → went (identical to ser!)", forms:["fui","fuiste","fue","fuimos","fueron","fueron"]},
      {inf:"tener", en:"to have → had (tuv-)", forms:["tuve","tuviste","tuvo","tuvimos","tuvieron","tuvieron"]},
      {inf:"hacer", en:"to do/make → did/made (hic-, note hizo)", forms:["hice","hiciste","hizo","hicimos","hicieron","hicieron"]}
    ]}},
    { course: "es_core", unit: { id:"es_irr_fut", type:"conj", title:"Conjugate: Futuro — the irregular stems (tendré, haré…)", tense:"Futuro", items: [
      {inf:"tener", en:"to have → will have (tendr-)", forms:["tendré","tendrás","tendrá","tendremos","tendrán","tendrán"]},
      {inf:"hacer", en:"to do → will do (har-)", forms:["haré","harás","hará","haremos","harán","harán"]},
      {inf:"decir", en:"to say → will say (dir-)", forms:["diré","dirás","dirá","diremos","dirán","dirán"]},
      {inf:"poder", en:"can → will be able (podr-)", forms:["podré","podrás","podrá","podremos","podrán","podrán"]},
      {inf:"saber", en:"to know → will know (sabr-)", forms:["sabré","sabrás","sabrá","sabremos","sabrán","sabrán"]},
      {inf:"venir", en:"to come → will come (vendr-)", forms:["vendré","vendrás","vendrá","vendremos","vendrán","vendrán"]}
    ]}},
    { course: "es_core", unit: { id:"es_irr5", type:"conj", title:"Conjugate: Top 5 irregular verbs (presente)", tense:"Presente", items: [
      {inf:"ser", en:"to be (permanent)", forms:["soy","eres","es","somos","son","son"]},
      {inf:"estar", en:"to be (state/location)", forms:["estoy","estás","está","estamos","están","están"]},
      {inf:"ir", en:"to go", forms:["voy","vas","va","vamos","van","van"]},
      {inf:"tener", en:"to have", forms:["tengo","tienes","tiene","tenemos","tienen","tienen"]},
      {inf:"hacer", en:"to do / make", forms:["hago","haces","hace","hacemos","hacen","hacen"]}
    ]}}
  ],
  irish: [
    { course: "ga_core", unit: { id:"ga_irr5_pres", type:"conj", title:"Conjugate: Top 5 irregulars — present (An Aimsir Láithreach)", tense:"Aimsir Láithreach", items: [
      {inf:"bí", en:"to be (tá — the state/location be)", forms:["táim/tá mé","tá tú","tá sé/tá sí","táimid/tá muid","tá sibh","tá siad"]},
      {inf:"déan", en:"to do / make", forms:["déanaim","déanann tú","déanann sé/déanann sí","déanaimid","déanann sibh","déanann siad"]},
      {inf:"abair", en:"to say (deir- stem)", forms:["deirim","deir tú","deir sé/deir sí","deirimid","deir sibh","deir siad"]},
      {inf:"faigh", en:"to get", forms:["faighim","faigheann tú","faigheann sé/faigheann sí","faighimid","faigheann sibh","faigheann siad"]},
      {inf:"téigh", en:"to go (té- stem)", forms:["téim","téann tú","téann sé/téann sí","téimid","téann sibh","téann siad"]}
    ]}},
    { course: "ga_core", unit: { id:"ga_irr5", type:"conj", title:"Conjugate: Top 5 irregular verbs (past — An Aimsir Chaite)", tense:"Aimsir Chaite", items: [
      {inf:"bí", en:"to be → was/were (type pronoun too: bhí mé)", forms:["bhí mé","bhí tú","bhí sé/bhí sí","bhíomar/bhí muid","bhí sibh","bhí siad"]},
      {inf:"déan", en:"to do/make → did/made", forms:["rinne mé","rinne tú","rinne sé/rinne sí","rinneamar/rinne muid","rinne sibh","rinne siad"]},
      {inf:"abair", en:"to say → said", forms:["dúirt mé","dúirt tú","dúirt sé/dúirt sí","dúramar/dúirt muid","dúirt sibh","dúirt siad"]},
      {inf:"faigh", en:"to get → got", forms:["fuair mé","fuair tú","fuair sé/fuair sí","fuaireamar/fuair muid","fuair sibh","fuair siad"]},
      {inf:"téigh", en:"to go → went", forms:["chuaigh mé","chuaigh tú","chuaigh sé/chuaigh sí","chuamar/chuaigh muid","chuaigh sibh","chuaigh siad"]}
    ]}}
  ],
  japanese: [
    { course: "ja_core", unit: { id:"ja_irr5_b", type:"conj", title:"Conjugate: Top 5 irregulars II — polite past, negatives & potential", tense:"Forms II", items: [
      {inf:"する (suru)", en:"to do", rows:["polite past (〜ました)","plain negative past (〜なかった)","polite negative (〜ません)","polite negative past","potential (can do)"], forms:["しました","しなかった","しません","しませんでした","できる"]},
      {inf:"来る (kuru)", en:"to come — reading shifts to き/こ", rows:["polite past (〜ました)","plain negative past (〜なかった)","polite negative (〜ません)","polite negative past","potential (can come)"], forms:["来ました/きました","来なかった/こなかった","来ません/きません","来ませんでした/きませんでした","来られる/こられる/これる"]},
      {inf:"ある (aru)", en:"to exist (things) — negatives use ない", rows:["polite past (〜ました)","plain negative past","polite negative (〜ません)","polite negative past","potential (can exist)"], forms:["ありました","なかった","ありません","ありませんでした","あり得る/ありえる"]},
      {inf:"行く (iku)", en:"to go", rows:["polite past (〜ました)","plain negative past (〜なかった)","polite negative (〜ません)","polite negative past","potential (can go)"], forms:["行きました/いきました","行かなかった/いかなかった","行きません/いきません","行きませんでした/いきませんでした","行ける/いける"]},
      {inf:"だ・です (copula)", en:"to be (X is Y)", rows:["polite past (でした)","plain negative past","polite negative","polite negative past"], forms:["でした","じゃなかった/ではなかった","じゃありません/ではありません/じゃないです","じゃありませんでした/ではありませんでした"]}
    ]}},
    { course: "ja_core", unit: { id:"ja_irr5", type:"conj", title:"Conjugate: Top 5 irregular verbs (plain & polite)", tense:"Forms", items: [
      {inf:"する (suru)", en:"to do", rows:["dictionary (plain)","polite (〜ます)","negative (plain)","past (plain)","te-form"], forms:["する","します","しない","した","して"]},
      {inf:"来る (kuru)", en:"to come — the reading changes!", rows:["dictionary (plain)","polite (〜ます)","negative (plain)","past (plain)","te-form"], forms:["来る/くる","来ます/きます","来ない/こない","来た/きた","来て/きて"]},
      {inf:"ある (aru)", en:"to exist (things) — negative is just ない", rows:["dictionary (plain)","polite (〜ます)","negative (plain)","past (plain)","te-form"], forms:["ある","あります","ない","あった","あって"]},
      {inf:"行く (iku)", en:"to go — past/te are irregular (行った, not 行いた)", rows:["dictionary (plain)","polite (〜ます)","negative (plain)","past (plain)","te-form"], forms:["行く/いく","行きます/いきます","行かない/いかない","行った/いった","行って/いって"]},
      {inf:"だ・です (copula)", en:"to be (X is Y)", rows:["dictionary (plain)","polite","negative (plain)","past (plain)","te-form"], forms:["だ","です","じゃない","だった","で"]}
    ]}}
  ]
};
