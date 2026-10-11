// Declension / paradigm table drills (same fill-every-cell format as the
// conjugation quiz, under the "Conjugation & tables" tab). Each item defines its
// own row labels via `rows`; alternates are separated by "/". Attached to
// courses through the same QUIZ_ADDON_UNITS mechanism as the idiom units.
window.QUIZ_ADDON_UNITS = window.QUIZ_ADDON_UNITS || [];

// ---------- GERMAN ----------
window.QUIZ_ADDON_UNITS.push(
{ lang:"german", course:"de_a1", unit:{ id:"de_p1", type:"conj", title:"Tables: Definite article (der/die/das) by case", tense:"Artikel", items:[
  {inf:"the — Nominativ", en:"definite article, subject case", rows:["masculine","feminine","neuter","plural"], forms:["der","die","das","die"]},
  {inf:"the — Akkusativ", en:"definite article, direct object", rows:["masculine","feminine","neuter","plural"], forms:["den","die","das","die"]},
  {inf:"the — Dativ", en:"definite article, indirect object", rows:["masculine","feminine","neuter","plural"], forms:["dem","der","dem","den"]}
]}},
{ lang:"german", course:"de_a1", unit:{ id:"de_p2", type:"conj", title:"Tables: ein & kein by case", tense:"Artikel", items:[
  {inf:"a/an (ein) — Nominativ", en:"indefinite article", rows:["masculine","feminine","neuter"], forms:["ein","eine","ein"]},
  {inf:"a/an (ein) — Akkusativ", en:"indefinite article, direct object", rows:["masculine","feminine","neuter"], forms:["einen","eine","ein"]},
  {inf:"a/an (ein) — Dativ", en:"indefinite article, indirect object", rows:["masculine","feminine","neuter"], forms:["einem","einer","einem"]},
  {inf:"no/not a (kein) — Nominativ", en:"negative article", rows:["masculine","feminine","neuter","plural"], forms:["kein","keine","kein","keine"]},
  {inf:"no/not a (kein) — Akkusativ", en:"negative article, direct object", rows:["masculine","feminine","neuter","plural"], forms:["keinen","keine","kein","keine"]}
]}},
{ lang:"german", course:"de_a1", unit:{ id:"de_p3", type:"conj", title:"Tables: Possessive articles (mein) by case", tense:"Possessiv", items:[
  {inf:"my (mein) — Nominativ", en:"possessive article", rows:["masculine","feminine","neuter","plural"], forms:["mein","meine","mein","meine"]},
  {inf:"my (mein) — Akkusativ", en:"possessive article, direct object", rows:["masculine","feminine","neuter","plural"], forms:["meinen","meine","mein","meine"]},
  {inf:"my (mein) — Dativ", en:"possessive article, indirect object", rows:["masculine","feminine","neuter","plural"], forms:["meinem","meiner","meinem","meinen"]},
  {inf:"the possessive words themselves", en:"my, your, his, her, its, our, your (pl.), their (base forms)", rows:["my","your (sg.)","his","her","its","our","your (pl.)","their"], forms:["mein","dein","sein","ihr","sein","unser","euer","ihr"]}
]}},
{ lang:"german", course:"de_a1", unit:{ id:"de_p4", type:"conj", title:"Tables: Personal pronouns by case", tense:"Pronomen", items:[
  {inf:"pronouns — Akkusativ (me, you, him…)", en:"direct-object pronouns", rows:["me","you (sg.)","him","her","it","us","you (pl.)","them"], forms:["mich","dich","ihn","sie","es","uns","euch","sie"]},
  {inf:"pronouns — Dativ (to me, to you…)", en:"indirect-object pronouns", rows:["(to) me","(to) you (sg.)","(to) him","(to) her","(to) it","(to) us","(to) you (pl.)","(to) them"], forms:["mir","dir","ihm","ihr","ihm","uns","euch","ihnen"]}
]}},
{ lang:"german", course:"de_a2b1", unit:{ id:"de_p5", type:"conj", title:"Tables: Genitiv & relative pronouns", tense:"Deklination", items:[
  {inf:"the — Genitiv", en:"definite article, possession case", rows:["masculine","feminine","neuter","plural"], forms:["des","der","des","der"]},
  {inf:"relative pronouns — Nominativ", en:"who/which (subject)", rows:["masculine","feminine","neuter","plural"], forms:["der","die","das","die"]},
  {inf:"relative pronouns — Dativ", en:"who/which (indirect object)", rows:["masculine","feminine","neuter","plural"], forms:["dem","der","dem","denen"]},
  {inf:"relative pronouns — Genitiv", en:"whose", rows:["masculine","feminine","neuter","plural"], forms:["dessen","deren","dessen","deren"]}
]}});

// ---------- ITALIAN ----------
window.QUIZ_ADDON_UNITS.push(
{ lang:"italian", course:"it_a0a2", unit:{ id:"it_p1", type:"conj", title:"Tables: Definite & indefinite articles (articoli)", tense:"Articoli", items:[
  {inf:"the — singular", en:"definite article by noun type", rows:["masculine (standard)","masc. + s-consonant/z/gn/ps","masc. + vowel","feminine","fem. + vowel"], forms:["il","lo","l'","la","l'"]},
  {inf:"the — plural", en:"definite article by noun type", rows:["masculine (standard)","masc. + s-consonant/z/gn/ps","masc. + vowel","feminine"], forms:["i","gli","gli","le"]},
  {inf:"a/an", en:"indefinite article by noun type", rows:["masculine (standard)","masc. + s-consonant/z/gn/ps","masc. + vowel","feminine","fem. + vowel"], forms:["un","uno","un","una","un'"]}
]}},
{ lang:"italian", course:"it_a0a2", unit:{ id:"it_p2", type:"conj", title:"Tables: Combined prepositions (preposizioni articolate)", tense:"Preposizioni", items:[
  {inf:"a + article (to/at the)", en:"a combined with il/lo/la/i/gli/le", rows:["a + il","a + lo","a + la","a + i","a + gli","a + le"], forms:["al","allo","alla","ai","agli","alle"]},
  {inf:"di + article (of the)", en:"di combined with il/lo/la/i/gli/le", rows:["di + il","di + lo","di + la","di + i","di + gli","di + le"], forms:["del","dello","della","dei","degli","delle"]},
  {inf:"in + article (in the)", en:"in combined with il/lo/la/i/gli/le", rows:["in + il","in + lo","in + la","in + i","in + gli","in + le"], forms:["nel","nello","nella","nei","negli","nelle"]},
  {inf:"su + article (on the)", en:"su combined with il/lo/la/i/gli/le", rows:["su + il","su + lo","su + la","su + i","su + gli","su + le"], forms:["sul","sullo","sulla","sui","sugli","sulle"]},
  {inf:"da + article (from/by the)", en:"da combined with il/lo/la/i/gli/le", rows:["da + il","da + lo","da + la","da + i","da + gli","da + le"], forms:["dal","dallo","dalla","dai","dagli","dalle"]}
]}},
{ lang:"italian", course:"it_a0a2", unit:{ id:"it_p3", type:"conj", title:"Tables: Possessives with article (possessivi)", tense:"Possessivi", items:[
  {inf:"my — il mio…", en:"possessive with its article", rows:["masc. singular","fem. singular","masc. plural","fem. plural"], forms:["il mio","la mia","i miei","le mie"]},
  {inf:"your (sg.) — il tuo…", en:"possessive with its article", rows:["masc. singular","fem. singular","masc. plural","fem. plural"], forms:["il tuo","la tua","i tuoi","le tue"]},
  {inf:"his/her — il suo…", en:"possessive with its article", rows:["masc. singular","fem. singular","masc. plural","fem. plural"], forms:["il suo","la sua","i suoi","le sue"]},
  {inf:"our — il nostro…", en:"possessive with its article", rows:["masc. singular","fem. singular","masc. plural","fem. plural"], forms:["il nostro","la nostra","i nostri","le nostre"]},
  {inf:"their — il loro…", en:"possessive with its article (loro never changes)", rows:["masc. singular","fem. singular","masc. plural","fem. plural"], forms:["il loro","la loro","i loro","le loro"]}
]}},
{ lang:"italian", course:"it_a0a2", unit:{ id:"it_p4", type:"conj", title:"Tables: Object pronouns (pronomi oggetto)", tense:"Pronomi", items:[
  {inf:"direct-object pronouns (mi vedi?)", en:"me, you, him/it, her/it, us, you pl., them", rows:["me","you (sg.)","him / it (m.)","her / it (f.)","us","you (pl.)","them (m.)","them (f.)"], forms:["mi","ti","lo","la","ci","vi","li","le"]},
  {inf:"indirect-object pronouns (mi scrivi?)", en:"to me, to you, to him, to her…", rows:["(to) me","(to) you (sg.)","(to) him","(to) her","(to) us","(to) you (pl.)","(to) them"], forms:["mi","ti","gli","le","ci","vi","gli/loro"]}
]}});

// ---------- DUTCH ----------
window.QUIZ_ADDON_UNITS.push(
{ lang:"dutch", course:"nl_gram", unit:{ id:"nl_p1", type:"conj", title:"Tables: Articles & demonstratives", tense:"Lidwoorden", items:[
  {inf:"the / a", en:"Dutch articles", rows:["common gender (de-word)","neuter (het-word)","indefinite (any noun)","any plural"], forms:["de","het","een","de"]},
  {inf:"this / that", en:"demonstratives by noun type", rows:["this + de-word","this + het-word","that + de-word","that + het-word","these (plural)","those (plural)"], forms:["deze","dit","die","dat","deze","die"]}
]}},
{ lang:"dutch", course:"nl_gram", unit:{ id:"nl_p2", type:"conj", title:"Tables: Possessives by person", tense:"Bezittelijk", items:[
  {inf:"my, your, his… (possessives)", en:"one for each person", rows:["my","your (sg.)","his","her","our (+ het-word)","our (+ de-word)","your (pl.)","their"], forms:["mijn","jouw/je","zijn","haar","ons","onze","jullie","hun"]}
]}},
{ lang:"dutch", course:"nl_gram", unit:{ id:"nl_p3", type:"conj", title:"Tables: Object pronouns by person", tense:"Voornaamwoorden", items:[
  {inf:"me, you, him… (object pronouns)", en:"after a verb or preposition", rows:["me","you (sg.)","him","her","us","you (pl.)","them"], forms:["mij/me","jou/je","hem","haar","ons","jullie","hen/hun/ze"]}
]}});

// ---------- IRISH ----------
window.QUIZ_ADDON_UNITS.push(
{ lang:"irish", course:"ga_gram", unit:{ id:"ga_p1", type:"conj", title:"Tables: Prepositional pronouns (ag, ar, le, do)", tense:"Forainmneacha réamhfhoclacha", items:[
  {inf:"ag (at) — agam, agat…", en:"as in 'tá carr agam' = I have a car", rows:["at me","at you (sg.)","at him","at her","at us","at you (pl.)","at them"], forms:["agam","agat","aige","aici","againn","agaibh","acu"]},
  {inf:"ar (on) — orm, ort…", en:"as in 'tá ocras orm' = I am hungry", rows:["on me","on you (sg.)","on him","on her","on us","on you (pl.)","on them"], forms:["orm","ort","air","uirthi","orainn","oraibh","orthu"]},
  {inf:"le (with) — liom, leat…", en:"as in 'is maith liom' = I like", rows:["with me","with you (sg.)","with him","with her","with us","with you (pl.)","with them"], forms:["liom","leat","leis","léi","linn","libh","leo"]},
  {inf:"do (to/for) — dom, duit…", en:"as in 'Dia dhuit'", rows:["to me","to you (sg.)","to him","to her","to us","to you (pl.)","to them"], forms:["dom","duit","dó","di","dúinn","daoibh","dóibh"]}
]}},
{ lang:"irish", course:"ga_gram", unit:{ id:"ga_p2", type:"conj", title:"Tables: Possessives & mutations (mo chat…)", tense:"Sealbhaigh", items:[
  {inf:"my/your/his/her… + cat", en:"watch the mutations: séimhiú for mo/do/his, urú for our/your/their", rows:["my cat","your (sg.) cat","his cat","her cat","our cat","your (pl.) cat","their cat"], forms:["mo chat","do chat","a chat","a cat","ár gcat","bhur gcat","a gcat"]},
  {inf:"the — an/na", en:"definite article (no indefinite article exists!)", rows:["singular","plural","fem. singular (+ séimhiú: bean)","masc. + vowel (+ t-: úll)","plural + vowel (+ h: úlla)"], forms:["an","na","an bhean","an t-úll","na húlla"]}
]}});

// ---------- SPANISH (Latin American) ----------
window.QUIZ_ADDON_UNITS.push(
{ lang:"spanish", course:"es_core", unit:{ id:"es_p1", type:"conj", title:"Tables: Definite & indefinite articles", tense:"Artículos", items:[
  {inf:"the — definite article", en:"el/la/los/las by gender and number", rows:["masculine singular","feminine singular","masculine plural","feminine plural"], forms:["el","la","los","las"]},
  {inf:"a/an/some — indefinite article", en:"un/una/unos/unas by gender and number", rows:["masculine singular","feminine singular","masculine plural","feminine plural"], forms:["un","una","unos","unas"]},
  {inf:"a/de + el — contractions", en:"the only two contractions in Spanish", rows:["a + el","de + el"], forms:["al","del"]}
]}},
{ lang:"spanish", course:"es_core", unit:{ id:"es_p2", type:"conj", title:"Tables: Subject pronouns", tense:"Pronombres", items:[
  {inf:"subject pronouns (yo, tú…)", en:"who is doing the action (Latin America: ustedes, never vosotros)", rows:["I","you (informal)","he","she","you (formal)","we","you (plural)","they (m.)","they (f.)"], forms:["yo","tú","él","ella","usted","nosotros/nosotras","ustedes","ellos","ellas"]}
]}},
{ lang:"spanish", course:"es_core", unit:{ id:"es_p3", type:"conj", title:"Tables: Direct & indirect object pronouns", tense:"Pronombres", items:[
  {inf:"direct-object pronouns (¿me ves?)", en:"me, you, him/her/it, us, them", rows:["me","you (informal)","him / her / it / you (formal)","us","them / you (plural)"], forms:["me","te","lo/la","nos","los/las"]},
  {inf:"indirect-object pronouns (¿me escribes?)", en:"to me, to you, to him/her…", rows:["(to) me","(to) you (informal)","(to) him / her / you (formal)","(to) us","(to) them / you (plural)"], forms:["me","te","le","nos","les"]},
  {inf:"pronouns after prepositions (para mí…)", en:"after para, de, sin, por…", rows:["me","you (informal)","him / her / you (formal)","us","you (plural)","them"], forms:["mí","ti","él/ella/usted","nosotros","ustedes","ellos/ellas"]},
  {inf:"with me / with you — conmigo, contigo", en:"con + mí/ti fuse into special forms", rows:["with me","with you"], forms:["conmigo","contigo"]}
]}},
{ lang:"spanish", course:"es_core", unit:{ id:"es_p4", type:"conj", title:"Tables: Possessive adjectives", tense:"Posesivos", items:[
  {inf:"my, your, his… + singular noun", en:"possessive before a singular noun (mi casa)", rows:["my","your (informal)","his/her/your (formal)","our","your (plural)","their"], forms:["mi","tu","su","nuestro/nuestra","su","su"]},
  {inf:"my, your, his… + plural noun", en:"possessive before a plural noun (mis casas)", rows:["my","your (informal)","his/her/your (formal)","our","your (plural)","their"], forms:["mis","tus","sus","nuestros/nuestras","sus","sus"]}
]}},
{ lang:"spanish", course:"es_core", unit:{ id:"es_p5", type:"conj", title:"Tables: Demonstratives", tense:"Demostrativos", items:[
  {inf:"this / these — este…", en:"near the speaker", rows:["masculine singular","feminine singular","masculine plural","feminine plural"], forms:["este","esta","estos","estas"]},
  {inf:"that / those — ese…", en:"near the listener", rows:["masculine singular","feminine singular","masculine plural","feminine plural"], forms:["ese","esa","esos","esas"]},
  {inf:"that / those (over there) — aquel…", en:"far from both", rows:["masculine singular","feminine singular","masculine plural","feminine plural"], forms:["aquel","aquella","aquellos","aquellas"]}
]}},
{ lang:"spanish", course:"es_core", unit:{ id:"es_p6", type:"conj", title:"Tables: Question words", tense:"Interrogativos", items:[
  {inf:"question words (¿qué? ¿quién?…)", en:"all carry a written accent", rows:["what","who","where","when","why","how","how much","which"], forms:["qué","quién","dónde","cuándo","por qué","cómo","cuánto","cuál"]}
]}});
