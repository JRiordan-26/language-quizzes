// Irish (Gaeilge) quiz data — no Udemy course exists for Irish, so this section
// was authored from the standard curriculum (An Caighdeán Oifigiúil), modeled on
// the German/Italian/Dutch sections. Course 2 focuses on Irish's unique grammar:
// séimhiú (lenition), urú (eclipsis), the copula, prepositional pronouns, VSO
// order, answering without yes/no, and the two counting systems.
window.QUIZ_DATA = window.QUIZ_DATA || {};
window.QUIZ_DATA.irish = {
  name: "Irish",
  flag: "🇮🇪",
  ttsLang: "ga-IE",
  courses: [
    {
      id: "ga_core",
      title: "Irish Essentials (A1)",
      units: [
        { id: "ga_v1", type: "vocab", title: "Vocab: Greetings & essentials", items: [
          {t:"Dia dhuit", e:"hello (lit. God to you)"}, {t:"Dia is Muire dhuit", e:"hello (reply)"},
          {t:"maidin mhaith", e:"good morning"}, {t:"oíche mhaith", e:"good night"},
          {t:"slán", e:"goodbye"}, {t:"slán go fóill", e:"bye for now"},
          {t:"go raibh maith agat", e:"thank you"}, {t:"tá fáilte romhat", e:"you're welcome"},
          {t:"le do thoil", e:"please"}, {t:"más é do thoil é", e:"please (formal)"},
          {t:"gabh mo leithscéal", e:"excuse me"}, {t:"tá brón orm", e:"I'm sorry"},
          {t:"conas atá tú?", e:"how are you? (Munster)"}, {t:"cén chaoi a bhfuil tú?", e:"how are you? (Connacht)"},
          {t:"tá mé go maith", e:"I am well"}, {t:"go breá", e:"fine / grand"},
          {t:"cad is ainm duit?", e:"what is your name?"}, {t:"… is ainm dom", e:"… is my name (lit. is name to me)"},
          {t:"cé as thú?", e:"where are you from?"}, {t:"is as Meiriceá mé", e:"I am from America"},
          {t:"an bhfuil Gaeilge agat?", e:"do you speak Irish? (lit. do you have Irish)"},
          {t:"tá beagán Gaeilge agam", e:"I speak a little Irish"},
          {t:"ní thuigim", e:"I don't understand"}, {t:"abair arís é", e:"say it again"},
          {t:"go mall, le do thoil", e:"slowly, please"},
          {t:"fáilte", e:"welcome"}, {t:"céad míle fáilte", e:"a hundred thousand welcomes"},
          {t:"a chara", e:"my friend (addressing someone)"}, {t:"maith thú", e:"well done / good on you"},
          {t:"ceart go leor", e:"okay / alright"}
        ]},
        { id: "ga_v2", type: "vocab", title: "Vocab: Family & people", items: [
          {t:"an teaghlach", e:"the family"}, {t:"an mháthair", e:"the mother"},
          {t:"an t-athair", e:"the father"}, {t:"mamaí", e:"mommy"}, {t:"daidí", e:"daddy"},
          {t:"an deartháir", e:"the brother"}, {t:"an deirfiúr", e:"the sister"},
          {t:"an mac", e:"the son"}, {t:"an iníon", e:"the daughter"},
          {t:"an seanathair", e:"the grandfather"}, {t:"an tseanmháthair", e:"the grandmother"},
          {t:"an fear", e:"the man"}, {t:"an bhean", e:"the woman"},
          {t:"an buachaill", e:"the boy"}, {t:"an cailín", e:"the girl"},
          {t:"an páiste", e:"the child"}, {t:"an leanbh", e:"the baby / infant"},
          {t:"na páistí", e:"the children"}, {t:"an cara", e:"the friend"},
          {t:"an duine", e:"the person"}, {t:"na daoine", e:"the people"},
          {t:"an múinteoir", e:"the teacher"}, {t:"an dochtúir", e:"the doctor"},
          {t:"an garda", e:"the police officer"}, {t:"an feirmeoir", e:"the farmer"},
          {t:"an t-ainm", e:"the name"}, {t:"an aois", e:"the age"},
          {t:"pósta", e:"married"}, {t:"singil", e:"single"}
        ]},
        { id: "ga_v3", type: "vocab", title: "Vocab: Numbers, days & time", items: [
          {t:"a haon", e:"one"}, {t:"a dó", e:"two"}, {t:"a trí", e:"three"},
          {t:"a ceathair", e:"four"}, {t:"a cúig", e:"five"}, {t:"a sé", e:"six"},
          {t:"a seacht", e:"seven"}, {t:"a hocht", e:"eight"}, {t:"a naoi", e:"nine"},
          {t:"a deich", e:"ten"}, {t:"fiche", e:"twenty"}, {t:"tríocha", e:"thirty"},
          {t:"caoga", e:"fifty"}, {t:"céad", e:"one hundred"}, {t:"míle", e:"one thousand"},
          {t:"beirt", e:"two people"}, {t:"triúr", e:"three people"}, {t:"ceathrar", e:"four people"},
          {t:"Dé Luain", e:"Monday"}, {t:"Dé Máirt", e:"Tuesday"}, {t:"Dé Céadaoin", e:"Wednesday"},
          {t:"Déardaoin", e:"Thursday"}, {t:"Dé hAoine", e:"Friday"}, {t:"Dé Sathairn", e:"Saturday"},
          {t:"Dé Domhnaigh", e:"Sunday"}, {t:"inniu", e:"today"}, {t:"inné", e:"yesterday"},
          {t:"amárach", e:"tomorrow"}, {t:"anois", e:"now"}, {t:"an tseachtain", e:"the week"},
          {t:"an mhí", e:"the month"}, {t:"an bhliain", e:"the year"},
          {t:"cén t-am é?", e:"what time is it?"}, {t:"a chlog", e:"o'clock"}
        ]},
        { id: "ga_v4", type: "vocab", title: "Vocab: Food & drink", items: [
          {t:"an bia", e:"the food"}, {t:"an t-arán", e:"the bread"}, {t:"an t-im", e:"the butter"},
          {t:"an cháis", e:"the cheese"}, {t:"an bainne", e:"the milk"}, {t:"an t-uisce", e:"the water"},
          {t:"an tae", e:"the tea"}, {t:"an caife", e:"the coffee"}, {t:"an bheoir", e:"the beer"},
          {t:"an fíon", e:"the wine"}, {t:"uisce beatha", e:"whiskey (lit. water of life)"},
          {t:"na prátaí", e:"the potatoes"}, {t:"an t-iasc", e:"the fish"}, {t:"an fheoil", e:"the meat"},
          {t:"an sicín", e:"the chicken"}, {t:"an ubh", e:"the egg"}, {t:"an t-úll", e:"the apple"},
          {t:"an t-oráiste", e:"the orange"}, {t:"an t-anraith", e:"the soup"},
          {t:"an cáca", e:"the cake"}, {t:"an bricfeasta", e:"the breakfast"},
          {t:"an lón", e:"the lunch"}, {t:"an dinnéar", e:"the dinner"},
          {t:"ag ithe", e:"eating"}, {t:"ag ól", e:"drinking"},
          {t:"tá ocras orm", e:"I am hungry (lit. hunger is on me)"},
          {t:"tá tart orm", e:"I am thirsty (lit. thirst is on me)"},
          {t:"blasta", e:"tasty"}, {t:"an siopa", e:"the shop"}, {t:"an bord", e:"the table"}
        ]},
        { id: "ga_v5", type: "vocab", title: "Vocab: Home & places", items: [
          {t:"an teach", e:"the house"}, {t:"an baile", e:"the home / town"},
          {t:"an seomra", e:"the room"}, {t:"an chistin", e:"the kitchen"},
          {t:"an seomra leapa", e:"the bedroom"}, {t:"an seomra folctha", e:"the bathroom"},
          {t:"an doras", e:"the door"}, {t:"an fhuinneog", e:"the window"},
          {t:"an chathaoir", e:"the chair"}, {t:"an leaba", e:"the bed"},
          {t:"an teilifís", e:"the television"}, {t:"an gairdín", e:"the garden"},
          {t:"an tsráid", e:"the street"}, {t:"an bóthar", e:"the road"},
          {t:"an scoil", e:"the school"}, {t:"an séipéal", e:"the church"},
          {t:"an teach tábhairne", e:"the pub"}, {t:"an oifig", e:"the office"},
          {t:"an chathair", e:"the city"}, {t:"an sráidbhaile", e:"the village"},
          {t:"an fheirm", e:"the farm"}, {t:"an pháirc", e:"the field / park"},
          {t:"an trá", e:"the beach"}, {t:"an fharraige", e:"the sea"},
          {t:"an sliabh", e:"the mountain"}, {t:"an abhainn", e:"the river"},
          {t:"an t-oileán", e:"the island"}, {t:"an tuath", e:"the countryside"},
          {t:"faoin tuath", e:"in the countryside"}, {t:"sa bhaile", e:"at home"}
        ]},
        { id: "ga_v6", type: "vocab", title: "Vocab: An Aimsir — weather & seasons", items: [
          {t:"an aimsir", e:"the weather"}, {t:"tá sé fuar", e:"it is cold"},
          {t:"tá sé te", e:"it is hot"}, {t:"tá sé fliuch", e:"it is wet"},
          {t:"tá sé tirim", e:"it is dry"}, {t:"tá sé grianmhar", e:"it is sunny"},
          {t:"tá sé gaofar", e:"it is windy"}, {t:"tá sé scamallach", e:"it is cloudy"},
          {t:"an bháisteach", e:"the rain"}, {t:"ag cur báistí", e:"raining"},
          {t:"an sneachta", e:"the snow"}, {t:"ag cur sneachta", e:"snowing"},
          {t:"an ghaoth", e:"the wind"}, {t:"an ghrian", e:"the sun"},
          {t:"an scamall", e:"the cloud"}, {t:"an ceo", e:"the fog"},
          {t:"an stoirm", e:"the storm"}, {t:"an tintreach", e:"the lightning"},
          {t:"an toirneach", e:"the thunder"}, {t:"an séasúr", e:"the season"},
          {t:"an t-earrach", e:"the spring"}, {t:"an samhradh", e:"the summer"},
          {t:"an fómhar", e:"the autumn / harvest"}, {t:"an geimhreadh", e:"the winter"},
          {t:"lá breá", e:"a fine day"}, {t:"drochaimsir", e:"bad weather"},
          {t:"tá sé ag éirí fuar", e:"it's getting cold"}
        ]},
        { id: "ga_v7", type: "vocab", title: "Vocab: Common verbs", items: [
          {t:"bí", e:"to be"}, {t:"ól", e:"to drink"}, {t:"ith", e:"to eat"},
          {t:"déan", e:"to do / make"}, {t:"téigh", e:"to go"}, {t:"tar", e:"to come"},
          {t:"feic", e:"to see"}, {t:"clois", e:"to hear"}, {t:"abair", e:"to say"},
          {t:"tabhair", e:"to give"}, {t:"faigh", e:"to get"}, {t:"cuir", e:"to put"},
          {t:"tóg", e:"to take / build"}, {t:"ceannaigh", e:"to buy"}, {t:"díol", e:"to sell"},
          {t:"rith", e:"to run"}, {t:"siúil", e:"to walk"}, {t:"léigh", e:"to read"},
          {t:"scríobh", e:"to write"}, {t:"foghlaim", e:"to learn"}, {t:"labhair", e:"to speak"},
          {t:"éist", e:"to listen"}, {t:"oscail", e:"to open"}, {t:"dún", e:"to close"},
          {t:"codail", e:"to sleep"}, {t:"dúisigh", e:"to wake up"}, {t:"imir", e:"to play (sport)"},
          {t:"seinn", e:"to play (music)"}, {t:"snámh", e:"to swim"}, {t:"ag obair", e:"working"}
        ]},
        { id: "ga_v8", type: "vocab", title: "Vocab: Idioms & seanfhocail (proverbs)", items: [
          {t:"Sláinte!", e:"Cheers! (lit. health)"},
          {t:"Céad míle fáilte", e:"a hundred thousand welcomes"},
          {t:"Cén chraic?", e:"what's the craic? / what's up?"},
          {t:"Bhí an-chraic againn", e:"we had great fun"},
          {t:"Go n-éirí an bóthar leat", e:"may the road rise with you / good luck"},
          {t:"Níl aon tinteán mar do thinteán féin", e:"there's no place like home (no hearth like your own)"},
          {t:"Is fearr Gaeilge briste ná Béarla cliste", e:"broken Irish is better than clever English"},
          {t:"Tús maith leath na hoibre", e:"a good start is half the work"},
          {t:"Mol an óige agus tiocfaidh sí", e:"praise the young and they will flourish"},
          {t:"Ar scáth a chéile a mhaireann na daoine", e:"people live in each other's shelter"},
          {t:"Ní neart go cur le chéile", e:"there is no strength without unity"},
          {t:"Giorraíonn beirt bóthar", e:"two people shorten the road"},
          {t:"Is glas iad na cnoic i bhfad uainn", e:"faraway hills are green (grass is greener)"},
          {t:"Bíonn blas ar an mbeagán", e:"a little tastes sweet / less is more"},
          {t:"Aithníonn ciaróg ciaróg eile", e:"one beetle recognizes another (takes one to know one)"},
          {t:"An té a bhíonn siúlach, bíonn scéalach", e:"the traveller has tales to tell"},
          {t:"Níor bhris focal maith fiacail riamh", e:"a good word never broke a tooth"},
          {t:"Is minic a bhris béal duine a shrón", e:"a person's mouth often broke their nose (words get you in trouble)"},
          {t:"Ní thagann ciall roimh aois", e:"sense doesn't come before age"},
          {t:"Is maith an scéalaí an aimsir", e:"time is a good storyteller (time will tell)"},
          {t:"Fad saoil agat", e:"long life to you"},
          {t:"Le cúnamh Dé", e:"with God's help / hopefully"}
        ]},
        { id: "ga_g1", type: "grammar", title: "Grammar: Word order (VSO) & the present", lesson: "Irish word order is Verb–Subject–Object: the verb comes FIRST. Ólann Seán tae (Seán drinks tea — literally 'drinks Seán tea'). The verb bí gives tá for 'is/am/are': tá mé / táim (I am). Irish has no verb 'to have' — things are 'at' you: Tá carr agam (I have a car, lit. a car is at me) — and feelings sit 'on' you: Tá ocras orm (I am hungry, lit. hunger is on me). Present-tense 1st-conjugation verbs add -ann before a pronoun: ólann sé (he drinks); only mé fuses into the ending — ólaim (I drink) — and 'we' is synthetic: ólaimid (we drink). The progressive is bí + ag + verbal noun: Tá mé ag ól tae (I am drinking tea).", items: [
          {q:"Irish sentences normally begin with:", c:["the verb","the subject","the object","an article"], a:0, x:"Irish is a VSO language: the conjugated verb comes first, then subject, then object — Ólann Seán tae, literally 'drinks Seán tea'. Starting with the subject is English order, not Irish.", ex:"Ólann Seán tae.", tr:"Seán drinks tea (verb first)."},
          {q:"'Seán drinks tea' in Irish:", c:["Ólann Seán tae.","Seán ólann tae.","Tae ólann Seán.","Seán tae ólann."], a:0, x:"The verb must open an Irish sentence (VSO): Ólann Seán tae. 'Seán ólann tae' copies English subject-first order, which Irish allows only in special emphatic constructions.", ex:"Ólann Seán tae.", tr:"Seán drinks tea."},
          {q:"'Tá mé' means:", c:["I am","I have","I do","I go"], a:0, x:"Tá is the present of the verb bí (to be), used for states and locations: tá mé / táim = I am. It never means 'have' — possession needs tá + ag: Tá carr agam.", ex:"Tá mé go maith.", tr:"I am"},
          {q:"How do you say 'I have a car'?", c:["Tá carr agam.","Tá mé carr.","Is carr mé.","Agam carr tá."], a:0, x:"Irish has no verb 'to have'; possession is expressed as something being AT you: Tá carr agam = a car is at me. 'Tá mé carr' translates English word-for-word and is impossible.", ex:"Tá carr agam.", tr:"I have a car."},
          {q:"'Tá ocras orm' literally means:", c:["hunger is on me (I'm hungry)","I eat a lot","I am heavy","the food is mine"], a:0, x:"Feelings and states are nouns that sit ON you, with the preposition ar: Tá ocras orm = hunger is on me = I am hungry. The same pattern gives tart orm (thirst), áthas orm (joy), brón orm (sorrow).", ex:"Tá ocras orm.", tr:"I am hungry."},
          {q:"The present of a 1st-conjugation verb like 'ól' with 'sé' is:", c:["ólann sé","ólaim sé","ólfaidh sé","d'ól sé"], a:0, x:"First-conjugation present adds -ann before a separate pronoun: ólann sé = he drinks. Only mé fuses into the verb (ólaim = I drink); ólfaidh and d'ól are the future and past — wrong tense.", ex:"Ólann sé tae.", tr:"he drinks"},
          {q:"'We drink' (present) is:", c:["ólaimid","ólann muid é féin","ól sinn","ólfaimid"], a:0, x:"'We' is synthetic: the ending -imid replaces the pronoun — ólaimid = we drink (ólann muid is also heard in speech). Ólfaimid is the trap: that -f- makes it the future, 'we will drink'.", ex:"Ólaimid tae gach maidin.", tr:"we drink"},
          {q:"'ag ól' in 'Tá mé ag ól tae' is:", c:["a verbal noun (drinking)","the past tense","an adjective","a preposition"], a:0, x:"The progressive is bí + ag + verbal noun: Tá mé ag ól tae = I am at the drinking of tea. Ag ól is a verbal noun — Irish's version of '-ing' — not a conjugated tense or a preposition alone.", ex:"Tá mé ag ól tae.", tr:"I am drinking tea."}
        ]},
        { id: "ga_g2", type: "grammar", title: "Grammar: Questions — a language with no yes or no", lesson: "Irish has no words for 'yes' and 'no' — you answer by echoing the verb of the question. An bhfuil tú tuirseach? — Tá. / Níl. (Are you tired? — I am. / I am not.). Past questions echo the past verb: Ar ól tú an tae? — D'ól. / Níor ól. (Did you drink the tea? — I did. / I didn't.). Present questions start with An + urú (eclipsis): An gceannaíonn tú…?; past questions use Ar + séimhiú. Negate the present with Ní + lenition (vowels unchanged): Ní ólann sé (He doesn't drink). Question words: Cad/Céard = what, Cé = who, Cá = where — Cá bhfuil an leithreas? (Where is the toilet?) — Cathain = when. Only copula questions (Is…? An múinteoir é?) are answered Is ea / Ní hea (it is / it is not).", items: [
          {q:"Irish has no words for 'yes' and 'no'. You answer by:", c:["echoing the verb of the question","saying sea/ní hea always","nodding only","using English"], a:0, x:"Irish has no words for yes and no: you answer by echoing the question's verb, positive or negative — An bhfuil tú tuirseach? Tá. / Níl. Sea/ní hea answer only copula questions, not verb questions.", ex:"An bhfuil tú tuirseach? — Tá.", tr:"Are you tired? — I am."},
          {q:"'An bhfuil tú go maith?' — the positive answer is:", c:["Tá.","Sea.","Bhfuil.","Ní hea."], a:0, x:"Answer by echoing the verb of the question: An bhfuil…? takes Tá (I am) or Níl (I am not). 'Sea' is the trap — it answers only copula (Is…?) questions — and bhfuil is a dependent form that can't stand alone.", ex:"An bhfuil tú go maith? — Tá.", tr:"Are you well? — I am (yes)."},
          {q:"'Ar ól tú an tae?' (Did you drink the tea?) — 'yes' is:", c:["D'ól.","Tá.","Sea.","Ólaim."], a:0, x:"Past questions are answered by echoing the past-tense verb: Ar ól tú…? — D'ól (I did) or Níor ól (I didn't). Tá answers a present bí question and Sea belongs to the copula — both wrong here.", ex:"Ar ól tú an tae? — D'ól.", tr:"Did you drink the tea? — I did (drank)."},
          {q:"Present-tense questions begin with:", c:["An + eclipsis","Ar + lenition","Ní + lenition","Cad"], a:0, x:"Present yes/no questions start with the particle An, which causes urú (eclipsis): An gceannaíonn tú…? The trap is Ar — that is the PAST question particle, and it causes séimhiú instead.", ex:"An gceannaíonn tú arán?", tr:"Do you buy bread?"},
          {q:"Negate the present: 'Ní ___ sé' (he doesn't drink)", c:["ólann","ól","n-ólann","hólann"], a:0, x:"The present negative is Ní + séimhiú on the verb; but vowels cannot be lenited, so ólann stays unchanged: Ní ólann sé. Bare 'ól' would be the past/root form, and n-/h prefixes have other triggers.", tr:"He doesn't drink."},
          {q:"'Cad é sin?' means:", c:["What is that?","Who is that?","Where is that?","When is that?"], a:0, x:"The question words must be memorized: Cad/Céard = what, Cé = who, Cá = where, Cathain = when. So Cad é sin? = What is that? — mixing up cad and cé is the usual slip.", ex:"Cad é sin?", tr:"What is that?"},
          {q:"'Cá bhfuil an leithreas?' means:", c:["Where is the toilet?","What is the toilet?","Is there a toilet?","Whose toilet is it?"], a:0, x:"Cá means 'where' and, like an, ní and go, must be followed by the DEPENDENT form of bí — bhfuil, never tá: Cá bhfuil an leithreas? = Where is the toilet?", ex:"Cá bhfuil an leithreas?", tr:"Where is the toilet?"},
          {q:"'Sea' and 'ní hea' are used:", c:["to answer copula questions (Is…?)","for every question","only in the past","only by children"], a:0, x:"Sea / ní hea ('it is / it is not') answer only COPULA questions like An múinteoir é? Ordinary verb questions are answered by echoing their own verb (Tá/Níl, D'ól/Níor ól) — never with sea.", ex:"An múinteoir é? — Is ea.", tr:"it is / it is not"}
        ]},
        { id: "ga_g3", type: "grammar", title: "Grammar: Past & future tenses", lesson: "The past tense lenites the verb's first consonant: cuir → chuir sí (she put), ceannaigh → cheannaigh mé (I bought). Vowel-initial verbs take d' instead: d'ól mé (I drank). The past negative is níor + the lenited verb: Níor ól mé (I did not drink). Bí is irregular: bhí (was) and beidh (will be) — Beidh mé ann amárach (I will be there tomorrow); the dependent form raibh appears after ní/an/go. The future of 1st-conjugation verbs adds -faidh/-fidh: ólfaidh tú (you will drink). Bí also has a special habitual present, bíonn, for what usually happens: Bíonn sé fuar sa gheimhreadh (It is usually cold in the winter).", items: [
          {q:"The past of 'ól' (drink) with 'mé':", c:["d'ól mé","ólann mé","ólfaidh mé","óladh mé"], a:0, x:"The past tense is marked by lenition, but a vowel cannot take séimhiú, so vowel-initial verbs prefix d' instead: d'ól mé = I drank. Ólann is the present and ólfaidh the future — tense traps.", ex:"D'ól mé tae ar maidin.", tr:"I drank"},
          {q:"The past of 'cuir' (put) with 'sí':", c:["chuir sí","cuirfidh sí","cuireann sí","gcuir sí"], a:0, x:"The past tense lenites the verb's first consonant: cuir → chuir sí = she put. Unlenited cuireann is the present; gcuir shows urú, which plain past statements never take.", ex:"Chuir sí an leabhar ar an mbord.", tr:"she put"},
          {q:"The past of 'bí' is:", c:["bhí","beidh","tá","raibh"], a:0, x:"Bí is irregular: its independent past is bhí — Bhí mé = I was. Raibh is the trap: it is the DEPENDENT past, used only after particles like ní, an and go (ní raibh, an raibh).", ex:"Bhí mé tuirseach inné.", tr:"was"},
          {q:"The future of 'ól' with 'tú':", c:["ólfaidh tú","ólann tú","d'ól tú","ólta tú"], a:0, x:"The future of 1st-conjugation verbs adds -faidh (broad) or -fidh (slender): ólfaidh tú = you will drink. The -f- is the future's signature — ólann is present and d'ól is past.", ex:"Ólfaidh tú tae amárach.", tr:"you will drink"},
          {q:"The future of 'bí' is:", c:["beidh","bhí","bíonn","bheadh"], a:0, x:"Bí is irregular in the future: beidh — Beidh mé ann amárach = I will be there tomorrow. Bhí is the past, bíonn the habitual present, and bheadh the conditional 'would be'.", ex:"Beidh mé ann amárach.", tr:"will be"},
          {q:"'Níor ól mé' means:", c:["I did not drink","I will not drink","I do not drink","I would not drink"], a:0, x:"The past negative particle is níor + lenited verb: Níor ól mé = I did not drink. Ní (without -or) negates the present — the choice of particle itself tells you the tense.", ex:"Níor ól mé tae inné.", tr:"I did not drink."},
          {q:"'Bíonn sé fuar sa gheimhreadh' — 'bíonn' expresses:", c:["a habitual state (usually is)","right now","the future","a wish"], a:0, x:"Bí uniquely has TWO presents: tá for right now, bíonn for what habitually happens — Bíonn sé fuar sa gheimhreadh = it is usually cold in winter. Tá would state a current fact instead.", ex:"Bíonn sé fuar sa gheimhreadh.", tr:"It is (usually) cold in the winter."},
          {q:"'Cheannaigh mé' means:", c:["I bought","I buy","I will buy","I would buy"], a:0, x:"The initial séimhiú (c → ch) marks the past tense: ceannaigh (buy) → cheannaigh mé = I bought. The present would be ceannaíonn and the future ceannóidh — the lenition is the past-tense flag.", ex:"Cheannaigh mé arán inné.", tr:"I bought."}
        ]},
        { id: "ga_g4", type: "grammar", title: "Grammar: The article & plurals", lesson: "Irish has NO indefinite article: teach on its own means 'a house'. 'The' has two forms: an in the singular and na in the plural — an bhean (the woman), na mná (the women). After an, feminine singular nouns take séimhiú (lenition): bean → an bhean; masculine nouns beginning with a vowel take a t- prefix: an t-úll (the apple), an t-uisce (the water). After plural na, vowel-initial nouns take an h instead: na húlla (the apples). Plurals vary by noun: many add -í (cailín → cailíní, girls), others add endings like -anna, and key nouns are irregular — teach → tithe (houses), bean → mná (women).", items: [
          {q:"Irish has how many words for 'the'?", c:["two: an (sg.) and na (pl.)","one: an","three","none"], a:0, x:"'The' has two forms: an with singular nouns and na with plurals — an bhean (the woman), na mná (the women). Irish has no indefinite article at all, so 'a woman' is simply bean.", ex:"an fear, na fir", tr:"the man, the men"},
          {q:"How do you say 'a house'?", c:["teach (no article at all)","an teach","aon teach","na teach"], a:0, x:"Irish has NO word for 'a/an': a bare noun already means 'a X', so teach = a house. Adding an makes it definite (the house), and aon means 'one/any' — both change the meaning.", ex:"Tá teach agam.", tr:"a house"},
          {q:"After 'an', feminine nouns take:", c:["séimhiú (lenition): an bhean","urú: an mbean","a t- prefix always","no change ever"], a:0, x:"After the article an, feminine singular nouns take séimhiú: bean → an bhean. Urú ('an mbean') is a different mutation with different triggers, and the t- prefix belongs to masculine vowel-initial nouns.", ex:"an bhean", tr:"the woman (bean → bhean)"},
          {q:"Masculine nouns beginning with a vowel take ___ after 'an':", c:["t- : an t-úll","h : an húll","n- : an n-úll","nothing"], a:0, x:"Masculine nouns beginning with a vowel take a t- prefix after an: an t-úll, an t-uisce. This is masculine-only — after plural na, vowel-initial nouns take h instead (na húlla)."},
          {q:"The plural of 'teach' (house) is:", c:["tithe","teachanna","teachaí","teacha"], a:0, x:"Teach is one of the key irregular nouns: its plural is tithe, not a regular form like 'teachanna'. Irregular plurals such as teach → tithe and bean → mná simply have to be memorized.", ex:"na tithe", tr:"houses"},
          {q:"The plural of 'cailín' (girl) is:", c:["cailíní","cailíns","cailínna","cailín"], a:0, x:"Many nouns form the plural by adding -í: cailín → cailíní = girls. It is one of the commonest plural patterns, alongside endings like -anna and true irregulars like mná.", ex:"na cailíní", tr:"girls"},
          {q:"The plural of 'bean' (woman) is:", c:["mná","beana","banna","beaní"], a:0, x:"Bean (woman) has one of the most irregular plurals in Irish: mná — na mná = the women. No regular ending applies; this form (and its genitive ban) must be learned outright.", ex:"na mná", tr:"women"},
          {q:"Plural nouns beginning with a vowel take ___ after 'na':", c:["h : na húlla","t- : na t-úlla","n- : na núlla","nothing"], a:0, x:"After plural na, a vowel-initial noun takes an h prefix: na húlla = the apples. The t- prefix is the trap — it belongs to masculine singulars after an (an t-úll), never after na."}
        ]}
      ]
    },
    {
      id: "ga_gram",
      title: "Unique Irish Grammar — the tricky bits",
      units: [
        { id: "ga_u1", type: "grammar", title: "Grammar: Séimhiú (lenition)", lesson: "Séimhiú (lenition) softens a word's first consonant and is written by inserting h after it: cat → chat, bean → bhean, mór → mhór. The possessives mo (my), do (your) and a (his) trigger it: mo chat (my cat), do theach (your house). Crucially, 'a' is disambiguated by mutation alone: a chóta = his coat (lenited), a cóta = her coat (no change). The letters l, n, r — plus vowels and h — can never be lenited. Sa (in the) lenites: sa bhaile (at home). Lenited f (fh) is completely silent: an fhuinneog (the window). Adjectives lenite after a feminine singular noun: bean mhaith (a good woman), oíche mhaith (good night). Even Dia dhuit (hello) shows lenition, triggered historically by the preposition do/de.", items: [
          {q:"Séimhiú (lenition) is shown in writing by:", c:["inserting h after the first consonant","doubling the consonant","an accent mark","a hyphen"], a:0, x:"Séimhiú (lenition) softens a word's first consonant and is written by inserting h after it: cat → chat, bean → bhean, mór → mhór. The h marks a changed sound, not a new letter of the word.", ex:"cat → mo chat", tr:"cat → my cat (c becomes ch)"},
          {q:"'mo' (my) + 'cat' =", c:["mo chat","mo cat","mo gcat","mo t-chat"], a:0, x:"The singular possessives mo (my), do (your) and a (his) all trigger séimhiú: mo chat, do theach. Unmutated 'mo cat' misses the rule, and urú ('mo gcat') belongs to the plural possessives like ár.", ex:"mo chat", tr:"my cat"},
          {q:"'a' meaning 'his' vs 'her': 'a chóta' vs 'a cóta' —", c:["his coat (lenited) vs her coat (unchanged)","her coat vs his coat","both mean his","both mean her"], a:0, x:"The word a means his, her AND their — only the mutation tells them apart: a chóta (séimhiú) = his coat, a cóta (no change) = her coat, a gcóta (urú) = their coat.", ex:"a chóta / a cóta", tr:"his coat / her coat"},
          {q:"Which letters can NEVER be lenited?", c:["l, n, r","b, c, d","m, p, s","f, g, t"], a:0, x:"Rule: the consonants l, n, r — plus vowels and h — can never be lenited. Every consonant in the other choices (b, c, d, m, p, s, f, g, t) takes séimhiú normally.", ex:"mo lámh", tr:"my hand (l never lenites)"},
          {q:"After 'sa' (in the): sa + 'baile' =", c:["sa bhaile","sa baile","sa mbaile","san baile"], a:0, x:"Sa (in the) triggers séimhiú: sa bhaile = at home. Urú ('sa mbaile') is a Connacht dialect pattern, not the standard, and before vowels and f the word becomes san.", ex:"sa bhaile", tr:"at home"},
          {q:"Lenited 'f' (fh) is pronounced:", c:["silent","like v","like h","like w"], a:0, x:"Lenited f is written fh and is completely SILENT — the word starts from its next sound: an fhuinneog ≈ 'an in-yog'. It does not soften to v; that is what bh and mh do.", ex:"an fhuinneog", tr:"the window (fh is silent)"},
          {q:"'bean mhaith' (a good woman) — why is 'maith' lenited?", c:["adjectives lenite after feminine singular nouns","all adjectives lenite","maith is irregular","it isn't lenited"], a:0, x:"Adjectives agree by mutation: after a feminine singular noun the adjective is lenited — bean mhaith, oíche mhaith (good night). After a masculine noun it stays plain: fear maith.", ex:"oíche mhaith", tr:"good night (mhaith after feminine oíche)"},
          {q:"'Dia dhuit' shows lenition because:", c:["the preposition do/de triggers séimhiú","Dia is feminine","greetings are always lenited","it doesn't"], a:0, x:"Dia dhuit (hello, lit. 'God to you') preserves the séimhiú historically triggered by the preposition do/de — hence dhuit. It is fossilized grammar, not a special rule for greetings.", ex:"Dia dhuit!", tr:"Hello (lit. God to you)"}
        ]},
        { id: "ga_u2", type: "grammar", title: "Grammar: Urú (eclipsis)", lesson: "Urú (eclipsis) prefixes a new letter that takes over the pronunciation: c→gc, b→mb, d→nd, f→bhf, g→ng, p→bp, t→dt — in i gCorcaigh (in Cork) you pronounce only the g. Triggers include the preposition i (in): i mBaile Átha Cliath (in Dublin); the plural possessives ár (our), bhur (your pl.) and a (their): ár dteach (our house); and the numbers 7–10: seacht mbó (seven cows). Eclipsed f is written bhf and sounds like v/w: an bhfuil…? Vowel-initial words take n- instead: ár n-athair (our father). So the three meanings of 'a' are told apart by mutation: a mbád = their boat (urú), a bhád = his boat (séimhiú), a bád = her boat (no change).", items: [
          {q:"Urú (eclipsis) means:", c:["a new letter is prefixed and takes over the sound","the first letter is dropped","an h is added","the vowel changes"], a:0, x:"Urú (eclipsis) prefixes a voiced letter that takes over the pronunciation: c→gc, b→mb, d→nd, f→bhf, g→ng, p→bp, t→dt. Unlike séimhiú's added h, the original letter goes silent.", ex:"bó → ár mbó", tr:"cow → our cow (b eclipsed by m)"},
          {q:"'i' (in) + 'Corcaigh' (Cork) =", c:["i gCorcaigh","i Corcaigh","i Chorcaigh","in Corcaigh"], a:0, x:"The preposition i (in) triggers urú: i gCorcaigh = in Cork, i mBaile Átha Cliath = in Dublin. Séimhiú ('i Chorcaigh') is the wrong mutation — i is an eclipsing word.", ex:"i gCorcaigh", tr:"in Cork"},
          {q:"How is 'gc' in 'i gCorcaigh' pronounced?", c:["like g (the c is silenced)","like k","like both g and c","like ch"], a:0, x:"In an eclipsed pair only the NEW letter is pronounced: gc sounds as g, mb as m, bhf as v/w. So i gCorcaigh is said 'i Gorcaigh' — the original c is completely silenced, not blended.", ex:"Tá mé i gCorcaigh.", tr:"I am in Cork (say 'Gorcaigh')."},
          {q:"'ár' (our) + 'teach' =", c:["ár dteach","ár theach","ár teach","ár t-each"], a:0, x:"The plural possessives ár (our), bhur (your pl.) and a (their) all cause urú: ár dteach = our house. Séimhiú ('ár theach') is the trap — that belongs to the singular possessives mo, do, a (his).", ex:"ár dteach", tr:"our house"},
          {q:"'seacht' (7) + 'bó' (cow) =", c:["seacht mbó","seacht bó","seacht bhó","seacht bpó"], a:0, x:"The numbers 7–10 eclipse the counted noun: seacht mbó = seven cows, ocht gcapall, deich dteach. Lenition ('seacht bhó') is the trap — lenition after numbers belongs to 1–6, not 7–10.", ex:"seacht mbó", tr:"seven cows"},
          {q:"Eclipsed 'f' is written:", c:["bhf","f h","ff","vf"], a:0, x:"Eclipsed f is written bhf and pronounced v or w: fuil → an bhfuil…? F is the only letter whose eclipsis is written with two letters, and it appears constantly in questions with bí.", ex:"An bhfuil tú anseo?", tr:"Are you here? (fuil → bhfuil)"},
          {q:"Vowel-initial words after an eclipsing word take:", c:["n- : ár n-athair","h : ár hathair","t- : ár t-athair","nothing"], a:0, x:"Eclipsing words put n- (with a hyphen) before a vowel-initial noun: ár n-athair = our father. The t- and h prefixes are article rules (an t-úll, na húlla), not part of eclipsis.", ex:"ár n-athair", tr:"our father (n- before a vowel)"},
          {q:"'a mbád' means ___, 'a bhád' means ___, 'a bád' means ___:", c:["their boat / his boat / her boat","his / her / their","her / their / his","their / her / his"], a:0, x:"With the possessive a, the mutation alone carries the meaning: urú (a mbád) = their boat, séimhiú (a bhád) = his boat, no change (a bád) = her boat. Read the mutation before translating.", tr:"their boat / his boat / her boat"}
        ]},
        { id: "ga_u3", type: "grammar", title: "Grammar: The copula 'is' vs 'bí'", lesson: "Irish has two verbs 'to be'. The copula is handles identity and classification — saying X IS a Y — and origin: Is dochtúir mé (I am a doctor), Is as Éirinn mé (I am from Ireland). Bí (tá) handles states, locations and temporary conditions: Tá mé tuirseach (I am tired), Tá mé in Éirinn (I am in Ireland). Never mix them: 'Tá mé dochtúir' is wrong. The copula's negative is ní: Ní múinteoir é (He is not a teacher) — níl belongs to bí: Níl sé anseo (He isn't here). The copula also builds likes and preferences with le: Is maith liom tae (I like tea, lit. tea is good with me), Is fearr liom caife (I prefer coffee). Identification uses sin é / seo í: Sin é an fear (That is the man).", items: [
          {q:"Irish has two verbs 'to be'. 'Is' (the copula) is used for:", c:["identity & classification (X is a Y)","location","temporary states","weather"], a:0, x:"The copula is handles identity and classification — saying X IS a Y — plus origin: Is múinteoir mé = I am a teacher. Location, temporary states and weather all belong to bí (tá) instead.", ex:"Is múinteoir mé.", tr:"I am a teacher."},
          {q:"'I am a doctor':", c:["Is dochtúir mé.","Tá mé dochtúir.","Tá dochtúir mé.","Bíonn mé dochtúir."], a:0, x:"Stating a profession classifies you (X is a Y), so it takes the copula: Is dochtúir mé. 'Tá mé dochtúir' is the classic error — bí can never link two nouns directly.", ex:"Is dochtúir mé.", tr:"I am a doctor."},
          {q:"'I am tired':", c:["Tá mé tuirseach.","Is tuirseach mé.","Is mé tuirseach.","Tá tuirseach agam."], a:0, x:"Temporary states and adjectives take bí: Tá mé tuirseach = I am tired. The copula ('Is tuirseach mé') is for identifying or classifying with NOUNS, not for describing conditions.", ex:"Tá mé tuirseach.", tr:"I am tired."},
          {q:"'Is maith liom tae' means:", c:["I like tea","tea is good quality","I am good at tea","give me tea"], a:0, x:"Likes are built on the copula + le: Is maith liom tae, literally 'tea is good with me' = I like tea. The negative is Ní maith liom. It marks YOUR taste, not the tea's quality.", ex:"Is maith liom tae.", tr:"I like tea."},
          {q:"'Is fearr liom caife' means:", c:["I prefer coffee","coffee is expensive","I make good coffee","I want coffee now"], a:0, x:"Fearr is the comparative 'better', so Is fearr liom caife = coffee is better with me = I prefer coffee. It is the same copula + le pattern as is maith liom, one step stronger.", ex:"Is fearr liom caife.", tr:"I prefer coffee."},
          {q:"The negative of 'Is múinteoir é':", c:["Ní múinteoir é.","Níl múinteoir é.","Ní bhíonn múinteoir é.","Níor múinteoir é."], a:0, x:"Each 'to be' has its own negative: the copula's is ní — Ní múinteoir é = he is not a teacher. Níl is the trap: it negates bí (Níl sé anseo) and never appears in a copula sentence.", ex:"Ní múinteoir é.", tr:"He is not a teacher."},
          {q:"'Is as Éirinn mé' uses the copula to express:", c:["origin (I am from Ireland)","location right now","possession","a job"], a:0, x:"Origin — where you are FROM — is permanent identity and takes the copula: Is as Éirinn mé. Current location takes bí: Tá mé in Éirinn. The verb choice separates roots from whereabouts.", ex:"Is as Éirinn mé.", tr:"I am from Ireland."},
          {q:"'Sin é an fear' means:", c:["that is the man","the man is old","there is a man","this man is mine"], a:0, x:"Pointing something out (identification) uses the copula structures sin é / seo í: Sin é an fear = that is the man. The é agrees with the masculine noun; a feminine noun takes í: Sin í an bhean.", ex:"Sin é an fear.", tr:"That is the man."}
        ]},
        { id: "ga_u4", type: "grammar", title: "Grammar: Prepositional pronouns (agam, orm, liom…)", lesson: "Irish prepositions fuse with pronouns into single words you must memorize. ag (at): agam, agat, aige, aici, againn, agaibh, acu — possession uses it, since Irish has no 'to have': Tá airgead agam (I have money). ar (on): orm, ort, air, uirthi… — feelings and states sit ON you: Tá áthas orm (I am happy, lit. joy is on me); Cad atá ort? (What's wrong with you?). le (with): liom, leat, leis, léi… — used for liking: Is maith léi ceol (She likes music). do (to): dom, duit, dó, di… — as in Dia dhuit (hello, lit. God to you). Idioms build on these: Tá súil agam (I hope, lit. I have an eye).", items: [
          {q:"Prepositions fuse with pronouns. 'ag' + 'mé' =", c:["agam","ag mé","agams","dom"], a:0, x:"Irish prepositions fuse with pronouns into single inflected words: ag + mé = agam ('at me'). The set agam, agat, aige, aici, againn, agaibh, acu must be memorized — 'ag mé' is never written.", ex:"Tá leabhar agam.", tr:"at me"},
          {q:"'Tá airgead ___' (I have money)", c:["agam","orm","liom","dom"], a:0, x:"Irish has no verb 'have': possession is bí + ag — the thing 'is at' you: Tá airgead agam = I have money. Orm (on me) marks feelings and liom (with me) marks liking — the wrong idiom here.", tr:"I have money."},
          {q:"'Tá áthas ___' (I am happy — joy is on me)", c:["orm","agam","liom","asam"], a:0, x:"Feelings and states sit ON a person, using ar: Tá áthas orm = joy is on me = I am happy. Agam would claim possession of an object; emotion idioms take orm, ort, air, uirthi…", tr:"I am happy."},
          {q:"'le' + 'mé' =", c:["liom","lem","le mé","dom"], a:0, x:"Le (with) fuses with its pronoun: le + mé = liom, then leat, leis, léi, linn, libh, leo. Liom appears in Is maith liom (I like); the unfused 'le mé' does not exist.", ex:"Tar liom!", tr:"with me"},
          {q:"'Is maith ___ ceol' (SHE likes music)", c:["léi","liom","leis","aici"], a:0, x:"In is maith le X, the fused pronoun names the liker: léi = with her, so Is maith léi ceol = she likes music. Liom would make it 'I like' — changing the pronoun changes who likes.", tr:"She likes music."},
          {q:"'do' + 'tú' =", c:["duit","dat","dot","díot"], a:0, x:"Do (to/for) fuses as dom, duit, dó, di, dúinn, daoibh, dóibh: do + tú = duit, as in Dia dhuit (hello, lit. God to you). Díot is the trap — it comes from de (off/from), a different preposition.", ex:"Dia dhuit!", tr:"to you"},
          {q:"'Tá súil agam' literally 'I have an eye' means:", c:["I hope","I see well","I am watching you","I am tired"], a:0, x:"Many idioms ride on prepositional pronouns: Tá súil agam, literally 'I have an eye', means 'I hope', usually with go: Tá súil agam go… Translate the idiom, not the literal anatomy.", ex:"Tá súil agam go bhfuil tú go maith.", tr:"I hope."},
          {q:"'Cad atá ort?' asks:", c:["what's wrong with you?","what are you wearing only","where are you?","who are you?"], a:0, x:"Because states sit ON you (ar), Cad atá ort? — literally 'what is on you?' — is the idiom for 'What's wrong with you?'. Only context makes it literal ('what are you wearing'); the default reading is trouble.", ex:"Cad atá ort?", tr:"What's wrong with you?"}
        ]},
        { id: "ga_u5", type: "grammar", title: "Grammar: Counting things & counting people", lesson: "Irish counts PEOPLE with special personal numbers: beirt (two people), triúr (three), ceathrar (four) — triúr fear (three men). Beirt causes lenition and takes a genitive plural: beirt bhan (two women). Counting THINGS: aon (1) and dhá (2) lenite the noun — dhá charr (two cars) — while 7–10 eclipse it: seacht mbád (seven boats). Nouns after numbers 3–10 stay SINGULAR in form: trí charr = three cars (lit. 'three car'). Reciting numbers aloud or telling time uses the particle a: a haon, a dó, a trí (one, two, three).", items: [
          {q:"Irish uses different numbers for counting people. 'Two people' is:", c:["beirt","dó daoine","dhá dhuine","a dó duine"], a:0, x:"Irish counts PEOPLE with a special set of personal numbers: beirt (2), triúr (3), ceathrar (4), cúigear (5)… 'Dhá dhuine' applies the object numbers to people, which Irish avoids.", ex:"Tá beirt sa seomra.", tr:"two people"},
          {q:"'Three people' is:", c:["triúr","trí daoine","a trí","treo"], a:0, x:"Three people = triúr, a personal number used only for humans: triúr fear = three men. Trí is for things (trí charr), and a trí is just the reciting form used when counting aloud.", ex:"triúr fear", tr:"three people"},
          {q:"'Two cars': 'dhá' + 'carr' =", c:["dhá charr","dhá carr","dhá gcarr","dó carr"], a:0, x:"The numbers aon (1) and dhá (2) lenite the noun they count: dhá charr = two cars. Unmutated 'dhá carr' misses the rule, and urú ('dhá gcarr') belongs to the numbers 7–10, not 2.", ex:"dhá charr", tr:"two cars"},
          {q:"'Seven boats': 'seacht' + 'bád' =", c:["seacht mbád","seacht bád","seacht bhád","seachtar bád"], a:0, x:"The numbers 7–10 trigger urú on the counted noun: seacht mbád = seven boats. Lenition ('seacht bhád') is the lower numbers' pattern, and seachtar is the PERSONAL number, used only for people.", ex:"seacht mbád", tr:"seven boats"},
          {q:"Counting objects aloud (one, two, three…) uses:", c:["a haon, a dó, a trí","aon, dhá, trí","haon, dó, trí gan 'a'","beirt, triúr"], a:0, x:"When reciting numbers in the abstract — counting aloud, phone numbers, telling time — Irish uses the particle a: a haon, a dó, a trí. Vowel-initial numbers take an h after a: a haon, a hocht.", ex:"a haon, a dó, a trí", tr:"one, two, three"},
          {q:"Nouns after numbers 3–10 are usually:", c:["singular in form (trí charr)","plural (trí charranna)","in the genitive","capitalized"], a:0, x:"After the numbers 3–10 the noun stays SINGULAR in form: trí charr, literally 'three car'. Using the plural ('trí charranna') is the natural English-speaker error this rule forbids.", ex:"trí charr", tr:"three cars (noun stays singular)"},
          {q:"'Beirt bhan' shows that 'beirt' causes:", c:["lenition + a special plural (mná→ban gen.)","eclipsis","no change","an h-prefix"], a:0, x:"Beirt (two people) both lenites and takes a genitive plural noun: beirt bhan = two women (bean → gen. pl. ban, lenited to bhan). Beirt fhear works the same way — two rules in one small phrase.", ex:"beirt bhan", tr:"two women"}
        ]},
        { id: "ga_u6", type: "grammar", title: "Grammar: The genitive case", lesson: "To say 'X of Y' or 'Y's X', Irish puts the possessor AFTER the noun, in the genitive case: doras an tí (the door of the house — teach becomes tí), fear an tí (the man of the house). Masculine genitive singular keeps an and lenites, often with a vowel change: hata an fhir (the man's hat — fear → fir). Feminine genitive singular switches the article to na: hata na mná (the woman's hat — bean → mná); Éire becomes na hÉireann: muintir na hÉireann (the people of Ireland). The object of ag + verbal noun also goes into the genitive: ag foghlaim na Gaeilge (learning Irish), ag ól tae (drinking tea).", items: [
          {q:"'The door of the house' is:", c:["doras an tí","doras an teach","an doras teach","teach an dorais"], a:0, x:"'X of Y' puts the possessor AFTER the head noun, in the genitive case: doras an tí = the door of the house, with teach changing to tí. Keeping the base form ('doras an teach') skips the required case.", ex:"doras an tí", tr:"the door of the house"},
          {q:"'The woman's hat' is:", c:["hata na mná","hata an bhean","an hata bean","bean an hata"], a:0, x:"Feminine singular nouns switch their article to na in the genitive: hata na mná = the woman's hat (bean → gen. mná). 'An bhean' is the trap — that is the nominative, wrong after a possessed noun.", ex:"hata na mná", tr:"the woman's hat"},
          {q:"After 'ag' + verbal noun, the object is in the:", c:["genitive: ag ól tae","nominative: ag ól an tae always","dative","plural"], a:0, x:"Rule: the object of ag + verbal noun stands in the genitive case: ag foghlaim na Gaeilge (learning Irish), ag ól tae (drinking tea). The progressive construction itself governs the genitive.", ex:"ag foghlaim na Gaeilge", tr:"learning Irish (genitive object)"},
          {q:"'muintir na hÉireann' means:", c:["the people of Ireland","Irish food","the Irish language","in Ireland"], a:0, x:"Éire (Ireland) has the genitive na hÉireann, so muintir na hÉireann = the people of Ireland. The feminine genitive article na puts h before the vowel — the same pattern as stair na hÉireann.", ex:"muintir na hÉireann", tr:"the people of Ireland"},
          {q:"'fear an tí' means:", c:["the man of the house","the house of the man","a male house","the man is home"], a:0, x:"Fear an tí is a genitive phrase: 'the man of the house' (teach → tí after an). Word order decides the meaning — the possessor comes second, so it cannot be 'the house of the man'. Also the term for a céilí host.", ex:"fear an tí", tr:"the man of the house"},
          {q:"Genitive of 'an fear' (the man):", c:["an fhir","an fear","na fear","an bhfear"], a:0, x:"Masculine genitive singular keeps the article an but lenites the noun, often with a vowel change: fear → an fhir — hata an fhir = the man's hat. Urú ('an bhfear') never marks the genitive.", ex:"hata an fhir", tr:"of the man"}
        ]},
        // ---------- CONJUGATION ----------
        { id: "ga_c1", type: "conj", title: "Conjugate: Bí — present (tá)", tense:"Aimsir láithreach", items: [
          {inf:"bí", irr:1, en:"to be (present: tá)", forms:["táim/tá mé","tá tú","tá sé/tá sí","táimid","tá sibh","tá siad"]}
        ]},
        { id: "ga_c2", type: "conj", title: "Conjugate: Present tense (1st & 2nd conjugation)", tense:"Aimsir láithreach", items: [
          {inf:"ól", en:"to drink", forms:["ólaim","ólann tú","ólann sé/ólann sí","ólaimid","ólann sibh","ólann siad"]},
          {inf:"cuir", en:"to put", forms:["cuirim","cuireann tú","cuireann sé/cuireann sí","cuirimid","cuireann sibh","cuireann siad"]},
          {inf:"ceannaigh", en:"to buy (2nd conj.)", forms:["ceannaím","ceannaíonn tú","ceannaíonn sé/ceannaíonn sí","ceannaímid","ceannaíonn sibh","ceannaíonn siad"]},
          {inf:"imir", en:"to play (2nd conj.)", forms:["imrím","imríonn tú","imríonn sé/imríonn sí","imrímid","imríonn sibh","imríonn siad"]}
        ]},
        { id: "ga_c3", type: "conj", title: "Conjugate: Past tense (séimhiú & d')", tense:"Aimsir chaite", items: [
          {inf:"bí", irr:1, en:"to be → was", forms:["bhí mé","bhí tú","bhí sé/bhí sí","bhíomar","bhí sibh","bhí siad"]},
          {inf:"ól", en:"to drink → drank (d' + vowel)", forms:["d'ól mé","d'ól tú","d'ól sé/d'ól sí","d'ólamar","d'ól sibh","d'ól siad"]},
          {inf:"cuir", en:"to put → put (lenited)", forms:["chuir mé","chuir tú","chuir sé/chuir sí","chuireamar","chuir sibh","chuir siad"]},
          {inf:"ceannaigh", en:"to buy → bought", forms:["cheannaigh mé","cheannaigh tú","cheannaigh sé/cheannaigh sí","cheannaíomar","cheannaigh sibh","cheannaigh siad"]}
        ]},
        { id: "ga_c4", type: "conj", title: "Conjugate: Future tense (-faidh / -fidh)", tense:"Aimsir fháistineach", items: [
          {inf:"bí", irr:1, en:"to be → will be", forms:["beidh mé","beidh tú","beidh sé/beidh sí","beimid","beidh sibh","beidh siad"]},
          {inf:"ól", en:"to drink → will drink", forms:["ólfaidh mé","ólfaidh tú","ólfaidh sé/ólfaidh sí","ólfaimid","ólfaidh sibh","ólfaidh siad"]},
          {inf:"cuir", en:"to put → will put", forms:["cuirfidh mé","cuirfidh tú","cuirfidh sé/cuirfidh sí","cuirfimid","cuirfidh sibh","cuirfidh siad"]}
        ]}
      ]
    }
  ]
};
