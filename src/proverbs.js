import bookStoriesEn from './bookStoriesEn.js';
import { englishCorrectionsById } from './englishCorrections.js';

const rawProverbs = [
  { id: 'better-late-than-never', en: { saying: 'Better late than never', explanation: 'It is better to do something late than not do it at all.' }, dk: { saying: 'Bedre sent end aldrig', explanation: 'Det er bedre at gøre noget sent end slet ikke.' }, fo: { saying: 'Betri seint enn ongantíð', explanation: 'Tað er betri at gera okkurt seint enn als ikki.' } },
  { id: 'actions-speak-louder', en: { saying: 'Actions speak louder than words', explanation: 'What people do matters more than what they say.' }, dk: { saying: 'Handlinger taler højere end ord', explanation: 'Det man gør, betyder mere end det man siger.' }, fo: { saying: 'Gerðir tala hægri enn orð', explanation: 'Tað fólk gera, hevur størri týdning enn tað tey siga.' } },
  { id: 'dont-judge-book', en: { saying: 'Don’t judge a book by its cover', explanation: 'Do not judge something only by how it looks.' }, dk: { saying: 'Døm ikke bogen på omslaget', explanation: 'Vurder ikke noget kun ud fra udseendet.' }, fo: { saying: 'Døm ikki bókina eftir permuna', explanation: 'Met ikki um nakað bert eftir útsjóndini.' } },
  { id: 'two-birds-one-stone', en: { saying: 'Kill two birds with one stone', explanation: 'Solve two things with one action.' }, dk: { saying: 'Slå to fluer med ét smæk', explanation: 'Løse to ting med én handling.' }, fo: { saying: 'Sláa tvær flugur við einum smekki', explanation: 'Loysa tvey mál við einari gerð.' } },
  { id: 'elephant-room', en: { saying: 'The elephant in the room', explanation: 'An obvious problem nobody wants to talk about.' }, dk: { saying: 'Elefanten i rummet', explanation: 'Et tydeligt problem, som ingen vil tale om.' }, fo: { saying: 'Elefanturin í rúminum', explanation: 'Ein eyðsýndur trupulleiki, sum eingin vil tosa um.' } },
  { id: 'all-eggs-one-basket', en: { saying: 'Don’t put all your eggs in one basket', explanation: 'Do not risk everything on one plan.' }, dk: { saying: 'Læg ikke alle æg i én kurv', explanation: 'Sats ikke alt på én plan.' }, fo: { saying: 'Legg ikki øll eggini í eina kurv', explanation: 'Set ikki alt upp á eina ætlan.' } },
  { id: 'early-bird', en: { saying: 'The early bird catches the worm', explanation: 'People who act early often get the best chances.' }, dk: { saying: 'Morgenstund har guld i mund', explanation: 'Den der er tidligt ude, får ofte de bedste muligheder.' }, fo: { saying: 'Morgunstund hevur gull í munni', explanation: 'Tann sum er tíðliga úti, fær ofta bestu møguleikarnar.' } },
  { id: 'practice-perfect', en: { saying: 'Practice makes perfect', explanation: 'You improve by practicing.' }, dk: { saying: 'Øvelse gør mester', explanation: 'Man bliver bedre ved at øve sig.' }, fo: { saying: 'Venjing ger meistara', explanation: 'Tú verður betri við at venja.' } },
  { id: 'rome-not-built-day', en: { saying: 'Rome was not built in a day', explanation: 'Big things take time.' }, dk: { saying: 'Rom blev ikke bygget på én dag', explanation: 'Store ting tager tid.' }, fo: { saying: 'Róm varð ikki bygdur eftir einum degi', explanation: 'Stór ting taka tíð.' } },
  { id: 'no-smoke-without-fire', en: { saying: 'Where there’s smoke, there’s fire', explanation: 'Rumors often have a reason behind them.' }, dk: { saying: 'Ingen røg uden ild', explanation: 'Rygter har ofte en årsag bag sig.' }, fo: { saying: 'Eingin roykur uttan eld', explanation: 'Søgur hava ofta eina orsøk aftanfyri seg.' } },
  { id: 'old-habits-die-hard', en: { saying: 'You can’t teach an old dog new tricks', explanation: 'It is difficult to make someone change long-established habits or ways of thinking.' }, dk: { saying: 'Man kan ikke lære en gammel hund nye tricks', explanation: 'Det er svært at ændre gamle vaner eller tankemønstre.' }, fo: { saying: 'Tú kanst ikki læra ein gamlan hund nýggj kynstur', explanation: 'Tað er torført at broyta gamlar vanar ella hugsanarhættir.' } },
  { id: 'strike-iron-hot', en: { saying: 'Strike while the iron is hot', explanation: 'Act while the opportunity is good.' }, dk: { saying: 'Smed mens jernet er varmt', explanation: 'Handl mens muligheden er god.' }, fo: { saying: 'Smíð meðan jarnið er heitt', explanation: 'Ger nakað meðan møguleikin er góður.' } },
  { id: 'too-many-cooks', en: { saying: 'Too many cooks spoil the broth', explanation: 'Too many people controlling something can make it worse.' }, dk: { saying: 'For mange kokke fordærver maden', explanation: 'For mange der bestemmer, kan gøre resultatet dårligere.' }, fo: { saying: 'Ov nógvir kokkar spilla matin', explanation: 'Ov nógv fólk við stýring kunnu gera úrslitið verri.' } },
  { id: 'look-before-leap', en: { saying: 'Look before you leap', explanation: 'Think before you act.' }, dk: { saying: 'Se dig for, før du springer', explanation: 'Tænk dig om, før du handler.' }, fo: { saying: 'Hygg áðrenn tú leypir', explanation: 'Hugsa teg um, áðrenn tú gert nakað.' } },
  { id: 'many-hands-light-work', en: { saying: 'Many hands make light work', explanation: 'A task is easier when more people help.' }, dk: { saying: 'Mange hænder gør arbejdet let', explanation: 'En opgave bliver lettere, når flere hjælper.' }, fo: { saying: 'Mangar hendur gera arbeiðið lætt', explanation: 'Ein uppgáva verður lættari, tá fleiri hjálpa.' } },
  { id: 'honesty-best-policy', en: { saying: 'Honesty is the best policy', explanation: 'It is usually best to tell the truth.' }, dk: { saying: 'Ærlighed varer længst', explanation: 'Det er som regel bedst at sige sandheden.' }, fo: { saying: 'Ærligheit varir longst', explanation: 'Tað er vanliga best at siga sannleikan.' } },
  { id: 'time-flies', en: { saying: 'Time flies', explanation: 'Time seems to pass very quickly.' }, dk: { saying: 'Tiden flyver', explanation: 'Tiden føles som om den går meget hurtigt.' }, fo: { saying: 'Tíðin flýgur', explanation: 'Tíðin kennist at ganga sera skjótt.' } },
  { id: 'you-live-and-learn', en: { saying: 'You live and you learn', explanation: 'Experience and mistakes teach you.' }, dk: { saying: 'Man lever og lærer', explanation: 'Fejl og oplevelser lærer en noget.' }, fo: { saying: 'Tú livir og lærir', explanation: 'Mistøk og upplivingar læra teg nakað.' } },
  { id: 'easy-come-easy-go', en: { saying: 'Easy come, easy go', explanation: 'Something gained easily can be lost easily.' }, dk: { saying: 'Let kommet, let gået', explanation: 'Noget man nemt får, kan man nemt miste.' }, fo: { saying: 'Lætt komið, lætt farið', explanation: 'Okkurt tú lætt fært, kan tú lætt missa.' } },
  { id: 'no-pain-no-gain', en: { saying: 'No pain, no gain', explanation: 'Progress often requires effort.' }, dk: { saying: 'Ingen smerte, ingen gevinst', explanation: 'Fremskridt kræver ofte indsats.' }, fo: { saying: 'Eingin pína, eingin vinningur', explanation: 'Framgongd krevur ofta stríð.' } },
  { id: 'silence-golden', en: { saying: 'Silence is golden', explanation: 'Sometimes it is best not to speak.' }, dk: { saying: 'Tavshed er guld', explanation: 'Nogle gange er det bedst ikke at sige noget.' }, fo: { saying: 'Tøgn er gull', explanation: 'Onkuntíð er best ikki at siga nakað.' } },
  { id: 'knowledge-power', en: { saying: 'Knowledge is power', explanation: 'Knowing more gives you strength and options.' }, dk: { saying: 'Viden er magt', explanation: 'Mere viden giver styrke og muligheder.' }, fo: { saying: 'Vitan er vald', explanation: 'Meiri vitan gevur styrki og møguleikar.' } },
  { id: 'all-that-glitters', en: { saying: 'All that glitters is not gold', explanation: 'Something attractive is not always valuable.' }, dk: { saying: 'Alt der glimter er ikke guld', explanation: 'Noget der ser godt ud, er ikke altid værdifuldt.' }, fo: { saying: 'Alt sum glitrar er ikki gull', explanation: 'Okkurt sum sær gott út, er ikki altíð virðismikið.' } },
  { id: 'blood-thicker-water', en: { saying: 'Blood is thicker than water', explanation: 'Family ties are often very strong.' }, dk: { saying: 'Blod er tykkere end vand', explanation: 'Familiebånd er ofte meget stærke.' }, fo: { saying: 'Blóð er tjúkkari enn vatn', explanation: 'Familjubond eru ofta sera sterk.' } },
  { id: 'walls-have-ears', en: { saying: 'Walls have ears', explanation: 'Be careful what you say; someone may be listening.' }, dk: { saying: 'Væggene har ører', explanation: 'Pas på hvad du siger; nogen kan lytte med.' }, fo: { saying: 'Veggirnir hava oyru', explanation: 'Ansar eftir hvat tú sigur; onkur kann lurta.' } },
  { id: 'love-blind', en: { saying: 'Love is blind', explanation: 'Love can make people ignore faults.' }, dk: { saying: 'Kærlighed gør blind', explanation: 'Kærlighed kan få folk til at overse fejl.' }, fo: { saying: 'Kærleiki ger blindan', explanation: 'Kærleiki kann fáa fólk at síggja burtur frá brekum.' } },
  { id: 'necessity-invention', en: { saying: 'Necessity is the mother of invention', explanation: 'Need often creates new ideas.' }, dk: { saying: 'Nød lærer nøgen kvinde at spinde', explanation: 'Behov kan få mennesker til at finde nye løsninger.' }, fo: { saying: 'Neyð lærir nakna kvinnu at spinna', explanation: 'Tørvur kann fáa fólk at finna nýggjar loysnir.' } },
  { id: 'where-theres-will', en: { saying: 'Where there’s a will, there’s a way', explanation: 'Determination can help you find a solution.' }, dk: { saying: 'Hvor der er vilje, er der vej', explanation: 'Vilje kan hjælpe dig med at finde en løsning.' }, fo: { saying: 'Har vilji er, er vegur', explanation: 'Vilji kann hjálpa tær at finna eina loysn.' } },
  { id: 'nothing-ventured', en: { saying: 'Nothing ventured, nothing gained', explanation: 'You must take chances to gain something.' }, dk: { saying: 'Hvo intet vover, intet vinder', explanation: 'Man må tage chancer for at vinde noget.' }, fo: { saying: 'Tann ið einki váðar, einki vinnur', explanation: 'Tú mást váða nakað fyri at vinna nakað.' } },
  { id: 'empty-vessels', en: { saying: 'Empty vessels make the most noise', explanation: 'People with little knowledge can be the loudest.' }, dk: { saying: 'Tomme tønder buldrer mest', explanation: 'Folk med lidt indhold kan larme mest.' }, fo: { saying: 'Tóm íløt ljóða mest', explanation: 'Fólk við lítlari vitan kunnu vera mest harðmælt.' } },
  { id: 'slow-steady', en: { saying: 'Slow and steady wins the race', explanation: 'Patience and consistency often win.' }, dk: { saying: 'Langsomt men sikkert vinder løbet', explanation: 'Tålmodighed og stabilitet vinder ofte.' }, fo: { saying: 'Seint og trygt vinnur kapprenningina', explanation: 'Tol og støðufesti vinna ofta.' } },
  { id: 'every-beginning-hard', en: { saying: 'The first step is the hardest', explanation: 'Starting something new is often the most difficult part.' }, dk: { saying: 'Al begyndelse er svær', explanation: 'Det kan være svært at starte noget nyt.' }, fo: { saying: 'Øll byrjan er torfør', explanation: 'Tað kann vera torført at byrja nakað nýtt.' } },
  { id: 'like-father-son', en: { saying: 'Like father, like son', explanation: 'Children often resemble their parents.' }, dk: { saying: 'Som far, så søn', explanation: 'Børn ligner ofte deres forældre.' }, fo: { saying: 'Sum faðir, so sonur', explanation: 'Børn líkjast ofta foreldrunum.' } },
  { id: 'out-of-sight', en: { saying: 'Out of sight, out of mind', explanation: 'People often forget what they do not see.' }, dk: { saying: 'Ude af øje, ude af sind', explanation: 'Man glemmer ofte det, man ikke ser.' }, fo: { saying: 'Úr eygsjón, úr huga', explanation: 'Fólk gloyma ofta tað, tey ikki síggja.' } },
  { id: 'one-swallow', en: { saying: 'One swallow does not make a summer', explanation: 'One good sign does not prove everything is fine.' }, dk: { saying: 'Én svale gør ingen sommer', explanation: 'Et enkelt godt tegn beviser ikke, at alt er godt.' }, fo: { saying: 'Ein svala ger onga summar', explanation: 'Eitt gott tekin prógvar ikki, at alt er gott.' } },
  { id: 'opposites-attract', en: { saying: 'Opposites attract', explanation: 'Very different people can be drawn to each other.' }, dk: { saying: 'Modsætninger mødes', explanation: 'Meget forskellige mennesker kan tiltrækkes af hinanden.' }, fo: { saying: 'Andsøgnir dragast at hvørjum øðrum', explanation: 'Sera ymisk fólk kunnu dragast at hvørjum øðrum.' } },
  { id: 'patience-virtue', en: { saying: 'Patience is a virtue', explanation: 'Being patient is a good quality.' }, dk: { saying: 'Tålmodighed er en dyd', explanation: 'Det er en god egenskab at være tålmodig.' }, fo: { saying: 'Tol er ein dygd', explanation: 'Tað er ein góð eginleiki at hava tol.' } },
  { id: 'truth-will-out', en: { saying: 'The truth will out', explanation: 'The truth usually becomes known eventually.' }, dk: { saying: 'Sandheden kommer for en dag', explanation: 'Sandheden bliver som regel kendt til sidst.' }, fo: { saying: 'Sannleikin kemur fyri ein dag', explanation: 'Sannleikin kemur vanliga fram at enda.' } },
  { id: 'haste-makes-waste', en: { saying: 'Haste makes waste', explanation: 'Doing things too quickly can create mistakes.' }, dk: { saying: 'Hastværk er lastværk', explanation: 'Hvis man skynder sig for meget, laver man fejl.' }, fo: { saying: 'Skundur er ofta skaði', explanation: 'Ger mann okkurt ov skjótt, koma ofta mistøk.' } },
  { id: 'better-safe-than-sorry', en: { saying: 'Better safe than sorry', explanation: 'It is better to be careful than regret it later.' }, dk: { saying: 'Hellere være på den sikre side', explanation: 'Det er bedre at være forsigtig end at fortryde senere.' }, fo: { saying: 'Betri tryggur enn harmur', explanation: 'Tað er betri at vera varin enn at angra seinni.' } },
  { id: 'birds-feather', en: { saying: 'Birds of a feather flock together', explanation: 'Similar people often spend time together.' }, dk: { saying: 'Lige børn leger bedst', explanation: 'Folk der ligner hinanden, finder ofte sammen.' }, fo: { saying: 'Lík børn spæla best', explanation: 'Fólk sum líkjast, finna ofta saman.' } },
  { id: 'better-one-bird', en: { saying: 'A bird in the hand is worth two in the bush', explanation: 'A sure thing is better than a risky possibility.' }, dk: { saying: 'Hellere én fugl i hånden end ti på taget', explanation: 'Noget sikkert er bedre end en usikker mulighed.' }, fo: { saying: 'Betri ein fuglur í hond enn tíggju á takinum', explanation: 'Okkurt trygt er betri enn ein óvissur møguleiki.' } },
  { id: 'pick-your-brain', en: { saying: 'Pick someone’s brain', explanation: 'To ask someone for advice, ideas, or knowledge.', origin: 'The phrase imagines gently taking useful thoughts from someone’s mind. It became common in everyday English in the 1900s.' }, dk: { saying: 'Må jeg plukke lidt i din hjerne?', explanation: 'En venlig måde at spørge nogen om råd, idéer eller viden.', origin: 'Det engelske udtryk betyder bogstaveligt at “plukke” i nogens hjerne, men bruges uformelt og ikke voldsomt.' }, fo: { saying: 'Kann eg plukka eitt sindur í heilanum hjá tær?', explanation: 'Ein vinarligur máti at spyrja onkran um ráð, hugskot ella vitan.', origin: 'Enska orðingin merkir bókstaviliga at “plukka” í heilanum hjá onkrum, men verður brúkt óformliga.' } },
  { id: 'bone-to-pick', en: { saying: 'Have a bone to pick', explanation: 'To have a complaint or disagreement you want to discuss.', origin: 'It likely comes from two dogs fighting over the same bone, so today it means there is an issue to settle.' }, dk: { saying: 'Jeg har et ben at pille med dig', explanation: 'Du har en klage eller uenighed, som du vil tage op.', origin: 'Udtrykket forbindes ofte med to hunde, der slås om det samme ben — altså noget der skal afklares.' }, fo: { saying: 'Eg havi eitt bein at pilla við teg', explanation: 'Tú hevur eina klagu ella ósemju, sum tú vilt taka upp.', origin: 'Orðingin verður ofta knýtt at tveimum hundum, sum stríðast um sama bein — nakað má fáast upp á pláss.' } },
  { id: 'break-the-ice', en: { saying: 'Break the ice', explanation: 'To make a first meeting or awkward situation feel easier.', origin: 'Ships once had to break ice to open a route. The phrase later became social: opening the way for conversation.' }, dk: { saying: 'Bryde isen', explanation: 'At gøre et første møde eller en akavet situation lettere.', origin: 'Skibe måtte bryde is for at åbne en vej. Senere blev det brugt om at åbne en samtale.' }, fo: { saying: 'Bróta ísin', explanation: 'At gera ein fyrsta fund ella eina ótrygga støðu lættari.', origin: 'Skip máttu bróta ís fyri at sleppa fram. Seinni varð tað brúkt um at lata upp fyri samrøðu.' } },
  { id: 'bite-the-bullet', en: { saying: 'Bite the bullet', explanation: 'To accept something painful or difficult and get through it.', origin: 'Before modern anaesthetic, soldiers were sometimes said to bite on a bullet during surgery. The history is debated, but the meaning survived.' }, dk: { saying: 'Bide i kuglen', explanation: 'At acceptere noget svært eller ubehageligt og komme igennem det.', origin: 'Udtrykket knyttes ofte til soldater, der bed i en kugle under operationer før moderne bedøvelse. Historien er omdiskuteret.' }, fo: { saying: 'Bíta í kúluna', explanation: 'At taka okkurt trupult ella pínufult á seg og koma ígjøgnum tað.', origin: 'Orðingin verður ofta knýtt at hermonnum, sum bitu í eina kúlu undir skurðviðgerð áðrenn nútímans doyving. Søgan er tó umrødd.' } },
  { id: 'under-the-weather', en: { saying: 'Under the weather', explanation: 'To feel ill, tired, or not quite yourself.', origin: 'Often linked to sailors who went below deck, under the bad weather, when they felt sick.' }, dk: { saying: 'Under vejret', explanation: 'At føle sig syg, træt eller ikke helt som sig selv.', origin: 'Udtrykket forbindes ofte med søfolk, der gik under dæk — væk fra vejret — når de blev søsyge.' }, fo: { saying: 'Undir veðrinum', explanation: 'At kenna seg sjúkan, móðan ella ikki heilt sum vanligt.', origin: 'Orðingin verður ofta knýtt at sjófólki, sum fóru undir dekk — undir veðrinum — tá tey gjørdust sjóverk.' } },
  { id: 'blessing-in-disguise', en: { saying: 'A blessing in disguise', explanation: 'Something that first seems bad but later turns out to be good.', origin: 'The phrase has been used since at least the 1700s and carries a religious idea: good fortune hidden inside trouble.' }, dk: { saying: 'Et held i uheld', explanation: 'Noget der først virker dårligt, men senere viser sig at være godt.', origin: 'Udtrykket har været brugt siden mindst 1700-tallet og bygger på idéen om en skjult velsignelse.' }, fo: { saying: 'Eitt hepni í óhepni', explanation: 'Okkurt sum fyrst tykist ringt, men seinni vísir seg at vera gott.', origin: 'Orðingin hevur verið brúkt í fleiri øldir og ber hugmyndina um eina goymda signing.' } },
  { id: 'good-samaritan', en: { saying: 'A good Samaritan', explanation: 'Someone who helps a stranger or person in need.', origin: 'From Jesus’ parable in the Gospel of Luke, where a Samaritan helps a wounded traveller when others pass by.' }, dk: { saying: 'En barmhjertig samaritaner', explanation: 'En person der hjælper en fremmed eller én i nød.', origin: 'Fra Jesu lignelse i Lukasevangeliet, hvor en samaritaner hjælper en såret rejsende.' }, fo: { saying: 'Ein miskunnsamur samverji', explanation: 'Ein persónur sum hjálpir einum fremmandum ella einum í neyð.', origin: 'Úr líknilsi Jesusar í Lukasevangeliinum, har ein samverji hjálpir einum særdum ferðamanni.' } },
  { id: 'forbidden-fruit', en: { saying: 'Forbidden fruit', explanation: 'Something becomes more tempting because it is not allowed.', origin: 'From the story of Adam and Eve in Genesis. The fruit is not named as an apple in the Bible, though art often shows it that way.' }, dk: { saying: 'Forbuden frugt', explanation: 'Noget bliver mere fristende, fordi det ikke er tilladt.', origin: 'Fra fortællingen om Adam og Eva i Første Mosebog. Bibelen siger ikke, at frugten var et æble.' }, fo: { saying: 'Forboðin frukt', explanation: 'Okkurt verður meira freistandi, tí tað ikki er loyvt.', origin: 'Úr frásøgnini um Ádam og Evu í Fyrstu Mósebók. Bíblian sigur ikki, at fruktin var eitt súrepli.' } },
  { id: 'scapegoat', en: { saying: 'Scapegoat', explanation: 'A person or group blamed for something, often unfairly.', origin: 'From Leviticus, where a goat symbolically carried the community’s sins into the wilderness.' }, dk: { saying: 'Syndebuk', explanation: 'En person eller gruppe der får skylden, ofte uretfærdigt.', origin: 'Fra Tredje Mosebog, hvor en buk symbolsk bar folkets synder ud i ørkenen.' }, fo: { saying: 'Syndabukkur', explanation: 'Ein persónur ella bólkur, sum fær skyldina, ofta órættvíst.', origin: 'Úr Triðju Mósebók, har ein bukkur ímyndarliga bar syndir fólksins út í oyðimørkina.' } },
  { id: 'skin-of-teeth', en: { saying: 'By the skin of your teeth', explanation: 'To only just succeed or escape.', origin: 'From the Book of Job. It survives today as a vivid way to say “barely”.' }, dk: { saying: 'Med huden på tænderne', explanation: 'At klare noget eller slippe væk lige akkurat.', origin: 'Fra Jobs Bog i Bibelen. Udtrykket lever videre som en stærk måde at sige “kun lige”.' }, fo: { saying: 'Við húðini á tonnunum', explanation: 'At klára okkurt ella sleppa burtur akkurát.', origin: 'Úr Jobs bók í Bíbliuni. Orðingin livir víðari sum ein sterk mynd fyri “bara akkurát”.' } },
  { id: 'no-brainer', en: { saying: 'A no-brainer', explanation: 'An easy decision that does not need much thought.', origin: 'Modern informal English from the late 1900s, built on the idea that the answer is so obvious it hardly needs a brain.' }, dk: { saying: 'En no-brainer', explanation: 'En nem beslutning, der næsten ikke kræver overvejelse.', origin: 'Moderne uformelt engelsk fra slutningen af 1900-tallet: svaret er så oplagt, at man næsten ikke behøver hjernen.' }, fo: { saying: 'Ein no-brainer', explanation: 'Ein løtt avgerð, sum næstan ikki krevur umhugsan.', origin: 'Nýggjari óformelt enskt mál: svarið er so eyðsýnt, at tú næstan ikki nýtir heilan.' } },
  { id: 'hangry', en: { saying: 'Hangry', explanation: 'Irritable or angry because you are hungry.', origin: 'A modern blend of “hungry” and “angry”. It became widely used online and in casual speech.' }, dk: { saying: 'Sulten og sur', explanation: 'Irriteret eller vred, fordi man er sulten.', origin: 'Et moderne slangord sammensat af “hungry” og “angry”, især udbredt online og i hverdagssprog.' }, fo: { saying: 'Svangaður og illur', explanation: 'Irriteraður ella illur, tí tú ert svangur.', origin: 'Eitt nýggjari slangorð úr enskum, sett saman av “hungry” og “angry”.' } },
  { id: 'ghost-someone', en: { saying: 'To ghost someone', explanation: 'To suddenly stop replying to someone without explanation.', origin: 'Modern digital slang: the person disappears from contact like a ghost.' }, dk: { saying: 'At ghoste nogen', explanation: 'Pludselig at stoppe med at svare nogen uden forklaring.', origin: 'Moderne digital slang: personen forsvinder fra kontakten som et spøgelse.' }, fo: { saying: 'At ghosta onkran', explanation: 'Brádliga at gevast at svara onkrum uttan frágreiðing.', origin: 'Nýggjari talgilt slang: persónurin hvørvur sum eitt spøkilsi.' } },
  { id: 'throw-shade', en: { saying: 'Throw shade', explanation: 'To subtly criticize or show disrespect.', origin: 'Popularized through Black and LGBTQ+ ballroom culture, then spread widely through media and social platforms.' }, dk: { saying: 'Kaste skygge', explanation: 'At kritisere eller vise mangel på respekt på en indirekte måde.', origin: 'Udbredt gennem Black og LGBTQ+ ballroom-kultur og senere gennem medier og sociale platforme.' }, fo: { saying: 'Kasta skugga', explanation: 'At finnast at ella vísa vanvirðing á ein óbeinleiðis hátt.', origin: 'Vorðið kent gjøgnum Black og LGBTQ+ ballroom-mentan og seinni gjøgnum miðlar og sosialar pallir.' } },
{ id: 'hold-your-horses', en: { saying: 'Hold your horses', explanation: 'Slow down, wait, or think before acting.', origin: 'The phrase comes from literally controlling horses before moving on. It later became a general warning to pause and be patient.' }, dk: { saying: 'Hold lige hestene', explanation: 'Tag det roligt, vent eller tænk dig om før du handler.', origin: 'Udtrykket kommer fra at holde styr på heste, før man kører eller rider videre. Senere blev det brugt om at bremse en beslutning.' }, fo: { saying: 'Halt hestunum aftur', explanation: 'Tak tað róligt, bíða ella hugsa teg um, áðrenn tú gert nakað.', origin: 'Orðingin kemur frá at halda hestunum aftur, áðrenn farið verður víðari. Seinni fekk hon merkingina at bíða og vera varin.' } },
  { id: 'let-cat-out-bag', en: { saying: 'Let the cat out of the bag', explanation: 'To reveal a secret, often accidentally.', origin: 'Often linked to old markets, where a dishonest seller might swap a pig in a bag for a cat. Opening the bag exposed the trick.' }, dk: { saying: 'Lukke katten ud af sækken', explanation: 'At afsløre en hemmelighed, ofte ved et uheld.', origin: 'Forbindes ofte med gamle markeder, hvor en uærlig sælger kunne bytte en gris i en sæk ud med en kat. Når sækken blev åbnet, blev bedraget afsløret.' }, fo: { saying: 'Lata ketuna úr sekkinum', explanation: 'At avdúka eitt loyndarmál, ofta av óvart.', origin: 'Verður ofta knýtt at gomlum marknaðum, har ein óerligur seljari kundi lata ein ketu í sekk í staðin fyri ein grís. Tá sekkurin varð latin upp, kom svikið undan kavi.' } },
  { id: 'bull-china-shop', en: { saying: 'A bull in a china shop', explanation: 'Someone clumsy or careless who causes damage or chaos.', origin: 'The image is simple: a large bull surrounded by fragile china. It has been used for centuries to describe destructive clumsiness.' }, dk: { saying: 'Som en elefant i en glasbutik', explanation: 'En klodset eller uforsigtig person, der skaber kaos.', origin: 'Billedet er enkelt: et stort dyr blandt skrøbelige ting. Derfor bruges det om en person, der ødelægger eller forstyrrer uden finesse.' }, fo: { saying: 'Sum ein tarvur í einum postulínshandli', explanation: 'Ein klombrutur ella óvarin persónur, sum ger skaða ella ruðuleika.', origin: 'Myndin er einføld: eitt stórt dýr millum viðbreknar lutir. Tí verður tað brúkt um klombruta atferð.' } },
  { id: 'turn-blind-eye', en: { saying: 'Turn a blind eye', explanation: 'To deliberately ignore something you know is happening.', origin: 'Often linked to Admiral Horatio Nelson, who supposedly ignored a signal by putting the telescope to his blind eye.' }, dk: { saying: 'Vende det blinde øje til', explanation: 'Bevidst at ignorere noget, man godt ved sker.', origin: 'Forbindes ofte med admiral Horatio Nelson, der efter sigende ignorerede et signal ved at sætte kikkerten for sit blinde øje.' }, fo: { saying: 'Venda blinda eygað til', explanation: 'Tilvitað at lata sum einki, hóast tú veitst, hvat hendir.', origin: 'Verður ofta knýtt at admiral Horatio Nelson, sum sigst hava latið sum um hann ikki sá eitt merki, tí hann setti kikaran fyri blinda eygað.' } },
  { id: 'beat-around-bush', en: { saying: 'Beat around the bush', explanation: 'To avoid saying the main point directly.', origin: 'From hunting, where people beat bushes to drive birds out before the real action began.' }, dk: { saying: 'Gå som katten om den varme grød', explanation: 'At undgå at sige det vigtigste direkte.', origin: 'Udtrykket forbindes med jagt, hvor man slog i buske for at få fugle frem, før selve jagten kunne begynde.' }, fo: { saying: 'Sláa rundan um runnin', explanation: 'At sleppa undan at siga høvuðspunktið beinleiðis.', origin: 'Orðingin verður knýtt at veiðu, har runnar vórðu slignir fyri at fáa fuglar fram, áðrenn sjálv veiðan byrjaði.' } },
  { id: 'read-riot-act', en: { saying: 'Read the riot act', explanation: 'To strongly warn or scold someone.', origin: 'From the British Riot Act of 1714, which was read aloud to unlawful crowds before punishment could follow.' }, dk: { saying: 'Læse nogen teksten', explanation: 'At give nogen en kraftig advarsel eller skideballe.', origin: 'Fra den britiske Riot Act fra 1714, som blev læst højt for ulovlige forsamlinger, før myndighederne kunne gribe ind.' }, fo: { saying: 'Lesa onkrum lógina', explanation: 'At geva onkrum eina harða ávaring ella skolu.', origin: 'Frá bretsku Riot Act frá 1714, sum varð lisin upp fyri ólógligum mannamúgvum, áðrenn revsing kundi fylgja.' } },
  { id: 'horses-mouth', en: { saying: 'Straight from the horse’s mouth', explanation: 'Information from the most direct or reliable source.', origin: 'From horse racing, where people checked a horse’s condition closely — even its mouth — before betting.' }, dk: { saying: 'Fra hestens mund', explanation: 'Information fra den mest direkte eller troværdige kilde.', origin: 'Kommer fra hestevæddeløb, hvor folk ville have information tæt på hesten selv — helt ind i munden — før de satsede penge.' }, fo: { saying: 'Beint úr rossamunninum', explanation: 'Upplýsingar frá beinleiðis ella álítandi keldu.', origin: 'Kemur úr rossakappingum, har fólk vildu hava upplýsingar so nær rossinum sum gjørligt — heilt úr munninum — áðrenn tey settu pengar upp á tað.' } },
  { id: 'put-on-spot', en: { saying: 'Be put on the spot', explanation: 'To be forced to answer or act in an awkward situation.', origin: 'The origin is debated, but the phrase became tied to being marked out for pressure, danger, or public attention.' }, dk: { saying: 'Blive sat på stedet', explanation: 'At blive tvunget til at svare eller handle i en presset situation.', origin: 'Oprindelsen er omdiskuteret, men udtrykket handler om at blive udpeget og sat under pres.' }, fo: { saying: 'Verða settur á staðið', explanation: 'At verða noyddur at svara ella gera okkurt í einari kroystari støðu.', origin: 'Upprunin er umrøddur, men orðingin merkir at verða peikaður út og settur undir trýst.' } },
  { id: 'wet-blanket', en: { saying: 'A wet blanket', explanation: 'Someone who spoils other people’s fun or enthusiasm.', origin: 'A wet blanket can put out a fire. The fire became a metaphor for joy, and the wet blanket became the person who kills it.' }, dk: { saying: 'Et vådt tæppe', explanation: 'En person der ødelægger andres glæde eller entusiasme.', origin: 'Et vådt tæppe kan slukke ild. Ilden blev et billede på glæde, og det våde tæppe blev personen, der slukker den.' }, fo: { saying: 'Eitt vátt teppi', explanation: 'Ein persónur sum oyðileggur gleðina ella hugan hjá øðrum.', origin: 'Eitt vátt teppi kann sløkkja eld. Eldurin gjørdist mynd fyri gleði, og tað váta teppið fyri tann, sum sløkkir hana.' } },
  { id: 'mad-as-hatter', en: { saying: 'Mad as a hatter', explanation: 'Completely eccentric, strange, or mentally unbalanced.', origin: 'Hat makers once used mercury in felt production, and mercury poisoning could cause tremors, anxiety, and strange behaviour.' }, dk: { saying: 'Skør som en hattemager', explanation: 'Meget excentrisk, mærkelig eller ude af balance.', origin: 'Hattemagere brugte engang kviksølv i filtproduktion, og kviksølvforgiftning kunne give rystelser, uro og mærkelig adfærd.' }, fo: { saying: 'Ørur sum ein hattamakari', explanation: 'Sera løgin, ørkymlaður ella ójavnur.', origin: 'Hattamakarar brúktu einaferð kyksilvur í filtframleiðslu, og kyksilvureitran kundi geva ristningar, ótta og løgna atferð.' } },
  { id: 'push-envelope', en: { saying: 'Push the envelope', explanation: 'To test or go beyond normal limits.', origin: 'From aviation, where the “flight envelope” describes the limits within which an aircraft can safely perform.' }, dk: { saying: 'Skubbe konvolutten', explanation: 'At teste eller gå ud over normale grænser.', origin: 'Fra luftfart, hvor “flight envelope” beskriver de grænser, et fly sikkert kan operere indenfor.' }, fo: { saying: 'Skumpa brævbjálvan', explanation: 'At royna ella fara út um vanlig mørk.', origin: 'Úr flogvinnu, har “flight envelope” lýsir mørkini fyri, hvat eitt flogfar trygt kann gera.' } },
  { id: 'cat-got-tongue', en: { saying: 'Cat got your tongue?', explanation: 'Said when someone is unusually silent or cannot answer.', origin: 'The exact origin is uncertain. One common theory links “cat” to the cat-o’-nine-tails whip used at sea, leaving victims unable to speak.' }, dk: { saying: 'Har katten taget din tunge?', explanation: 'Siges når nogen er usædvanligt tavs eller ikke kan svare.', origin: 'Oprindelsen er usikker. En teori forbinder “cat” med pisken cat-o’-nine-tails, som kunne efterlade folk ude af stand til at tale.' }, fo: { saying: 'Hevur ketan tikið tunguna?', explanation: 'Verður sagt, tá onkur er óvanliga tigandi ella ikki fær svarað.', origin: 'Upprunin er óvissur. Ein teori knýtir “cat” at sjómanapískinum cat-o’-nine-tails, sum kundi gera fólk málleys av pínu.' } },
  { id: 'hair-of-dog', en: { saying: 'Hair of the dog', explanation: 'Drinking more alcohol to ease a hangover.', origin: 'From an old belief that a dog bite could be treated with hair from the same dog — a cure made from the cause.' }, dk: { saying: 'En reparationsbajer', explanation: 'At drikke mere alkohol for at dulme tømmermænd.', origin: 'Fra en gammel tro på, at et hundebid kunne behandles med hår fra den samme hund — en kur lavet af årsagen.' }, fo: { saying: 'Hár av hundinum', explanation: 'At drekka meira fyri at linna timburmenn.', origin: 'Frá gamlari trúgv um, at eitt hundabit kundi lekjast við hári frá sama hundi — ein lekidómur úr sjálvari orsøkini.' } },
  { id: 'bury-hatchet', en: { saying: 'Bury the hatchet', explanation: 'To end a conflict and make peace.', origin: 'Often linked to Indigenous North American peace customs, where weapons could be buried as a sign that fighting had ended.' }, dk: { saying: 'Begrave stridsøksen', explanation: 'At afslutte en konflikt og slutte fred.', origin: 'Forbindes ofte med nordamerikanske fredsskikke, hvor våben blev begravet som tegn på, at kampen var slut.' }, fo: { saying: 'Grava stríðsøksina niður', explanation: 'At enda eina ósemju og gera frið.', origin: 'Verður ofta knýtt at norðuramerikanskum friðarsiðum, har vápn vórðu grivin niður sum tekin um, at stríðið var liðugt.' } },
  { id: 'go-belly-up', en: { saying: 'Go belly up', explanation: 'For a business, project, or plan to collapse or go bankrupt.', origin: 'From dead animals or fish floating on their backs with their bellies upward.' }, dk: { saying: 'Med maven opad', explanation: 'At mislykkes, bryde sammen eller gå konkurs.', origin: 'Fra døde dyr eller fisk, der ligger eller flyder på ryggen med bugen opad.' }, fo: { saying: 'Við búkinum uppeftir', explanation: 'At miseydnast, detta saman ella fara á húsagang.', origin: 'Frá deyðum djórum ella fiskum, sum liggja ella flóta á rygginum við búkinum uppeftir.' } },
  { id: 'silver-lining', en: { saying: 'Every cloud has a silver lining', explanation: 'Even a bad situation may contain something positive.', origin: 'The image comes from sunlight glowing around the edge of a dark cloud, famously used by the poet John Milton.' }, dk: { saying: 'Hver sky har en sølvkant', explanation: 'Selv en dårlig situation kan indeholde noget positivt.', origin: 'Billedet kommer fra sollys langs kanten af en mørk sky og blev berømt brugt af digteren John Milton.' }, fo: { saying: 'Hvørt skýggj hevur eina ljósa rond', explanation: 'Sjálvt ein ring støða kann hava okkurt gott í sær.', origin: 'Myndin kemur frá sólarljósi fram við rondini á einum myrkum skýggi og varð kent brúkt av yrkjaranum John Milton.' } },
  { id: 'bigwig', en: { saying: 'A bigwig', explanation: 'An important or powerful person.', origin: 'In the 1700s, wealthy and powerful men often wore large wigs. The bigger the wig, the more important the man appeared.' }, dk: { saying: 'En stor paryk', explanation: 'En vigtig eller magtfuld person.', origin: 'I 1700-tallet bar rige og magtfulde mænd ofte store parykker. Jo større paryk, jo vigtigere virkede personen.' }, fo: { saying: 'Ein stórur parykkur', explanation: 'Ein týdningarmikil ella máttmikil persónur.', origin: 'Í 1700-talinum bóru ríkir og máttmiklir menn ofta stórar parykkar. Jú størri parykkur, jú týdningarmiklari tyktist maðurin.' } },
  { id: 'earworm', en: { saying: 'Earworm', explanation: 'A song or phrase that gets stuck in your head.', origin: 'The term comes through German and was later used for music that seems to crawl into your ear and stay there.' }, dk: { saying: 'Ørehænger', explanation: 'En sang eller sætning, der sætter sig fast i hovedet.', origin: 'Udtrykket kommer via tysk og blev senere brugt om musik, der føles som om den kravler ind i øret og bliver der.' }, fo: { saying: 'Oyraormur', explanation: 'Ein sangur ella setningur, sum setur seg fastan í høvdinum.', origin: 'Orðingin kemur umvegis týskt og varð seinni brúkt um tónleik, sum tykist krúpa inn í oyrað og verða verandi.' } },
  { id: 'cold-feet', en: { saying: 'Get cold feet', explanation: 'To lose courage or confidence before doing something.', origin: 'Often linked to soldiers who literally could not move forward because their feet were frozen or badly protected.' }, dk: { saying: 'Få kolde fødder', explanation: 'At miste modet lige før man skal gøre noget.', origin: 'Forbindes ofte med soldater, der bogstaveligt ikke kunne gå frem, fordi deres fødder var frosne eller dårligt beskyttet.' }, fo: { saying: 'Fáa kaldar føtur', explanation: 'At missa dirvið beint áðrenn tú skalt gera okkurt.', origin: 'Verður ofta knýtt at hermonnum, sum bókstaviliga ikki kundu ganga fram, tí føturnir vóru frystir ella illa vardir.' } },
  { id: 'go-bananas', en: { saying: 'Go bananas', explanation: 'To become very excited, angry, or wild.', origin: 'A modern slang phrase from the 1900s, related to “go ape”, meaning to act wildly.' }, dk: { saying: 'Gå bananas', explanation: 'At blive meget begejstret, vred eller vild.', origin: 'Et moderne slangudtryk fra 1900-tallet, beslægtet med “go ape”, altså at opføre sig vildt.' }, fo: { saying: 'Fara bananas', explanation: 'At gerast sera spentur, illur ella villur.', origin: 'Eitt nýggjari slangorð úr 1900-talinum, í ætt við “go ape”, sum merkir at bera seg villt at.' } },
  { id: 'armed-to-teeth', en: { saying: 'Armed to the teeth', explanation: 'Fully equipped, especially with weapons or tools.', origin: 'Often linked to pirates carrying as many weapons as possible, even knives held in their teeth.' }, dk: { saying: 'Bevæbnet til tænderne', explanation: 'Fuldt udstyret, især med våben eller redskaber.', origin: 'Forbindes ofte med pirater, der bar så mange våben som muligt, endda knive mellem tænderne.' }, fo: { saying: 'Vápnaður upp undir tenn', explanation: 'Fullkomiliga útgjørdur, serliga við vápnum ella amboðum.', origin: 'Verður ofta knýtt at sjórænarum, sum bóru so nógv vápn sum gjørligt, enntá knívar millum tenninar.' } },
  { id: 'bite-dust', en: { saying: 'Bite the dust', explanation: 'To fail badly, fall, or die.', origin: 'The wording was popularized by Westerns, but similar images of enemies licking or falling into dust are much older, including biblical language.' }, dk: { saying: 'Bide i støvet', explanation: 'At fejle stort, falde eller dø.', origin: 'Udtrykket blev gjort populært af westerns, men billedet af fjender der ender i støvet er langt ældre, også i bibelsk sprog.' }, fo: { saying: 'Bíta í dustið', explanation: 'At miseydnast illa, detta ella doyggja.', origin: 'Orðingin varð kend gjøgnum westernfilmar, men myndin av fíggindum, sum enda í dustinum, er nógv eldri og finst eisini í bíbilskum máli.' } },
{ id: 'falling-knife', en: { saying: 'A falling knife has no handle', explanation: 'Do not try to stop a situation while it is moving too fast and dangerously.', origin: 'Used literally as kitchen safety advice and metaphorically in finance: do not try to catch a fast-falling price before it stabilizes.' }, dk: { saying: 'En faldende kniv har intet håndtag', explanation: 'Prøv ikke at stoppe en situation, mens den falder hurtigt og farligt.', origin: 'Udtrykket kendes både som praktisk køkkenråd og som finansielt billede: grib ikke en aktie eller situation i frit fald, før den er stabil.' }, fo: { saying: 'Ein fallandi knívur hevur einki skaft', explanation: 'Royn ikki at steðga einari støðu, meðan hon fellur skjótt og vandamikið.', origin: 'Orðingin verður brúkt bæði sum køksráð og sum fíggjarlig mynd: royn ikki at taka ímóti nøkrum í fríum falli, fyrr enn tað er støðugt.' } },
  { id: 'not-my-circus', en: { saying: 'Not my circus, not my monkeys', explanation: 'Do not take responsibility for someone else’s chaos.', origin: 'A modern English version of Polish “Nie mój cyrk, nie moje małpy”. It is often called old, but seems to have spread widely quite recently.' }, dk: { saying: 'Ikke mit cirkus, ikke mine aber', explanation: 'Tag ikke ansvar for andres kaos, hvis det ikke er dit.', origin: 'En moderne engelsk version af polsk “Nie mój cyrk, nie moje małpy”. Den kaldes ofte gammel, men ser ud til især at være blevet udbredt i nyere tid.' }, fo: { saying: 'Ikki mítt sirkus, ikki mínar apar', explanation: 'Tak ikki ábyrgd av ruðuleikanum hjá øðrum, um hann ikki er tín.', origin: 'Ein nútímans ensk útgáva av pólskum “Nie mój cyrk, nie moje małpy”. Hon verður ofta kallað gomul, men tykist serliga vera vorðin útbreidd í nýggjari tíð.' } },
  { id: 'motion-not-action', en: { saying: 'Never confuse motion with action', explanation: 'Being busy is not the same as making real progress.', origin: 'Widely attributed to Benjamin Franklin, though often circulated without a precise primary source.' }, dk: { saying: 'Forveksl aldrig bevægelse med handling', explanation: 'At have travlt er ikke det samme som at skabe reel fremdrift.', origin: 'Ofte tilskrevet Benjamin Franklin, men cirkulerer mange steder uden én entydig primærkilde.' }, fo: { saying: 'Blanda ongantíð rørslu saman við gerð', explanation: 'At hava nógv at gera er ikki tað sama sum verulig framgongd.', origin: 'Ofta tillutað Benjamin Franklin, men verður ofta endurgivið uttan eina greiða frumkeldu.' } },
  { id: 'writers-difficult', en: { saying: 'Writers are those for whom writing is more difficult than it is for others', explanation: 'Serious craft can feel harder, not easier, to the people who care most about it.', origin: 'Associated with Thomas Mann and close to a passage in his 1903 novella “Tristan”.' }, dk: { saying: 'Forfattere er dem, for hvem det er sværere at skrive end for andre', explanation: 'Håndværk kan føles sværere, ikke lettere, for dem der tager det alvorligt.', origin: 'Forbundet med Thomas Mann og tæt på en formulering i hans novelle “Tristan” fra 1903.' }, fo: { saying: 'Rithøvundar eru tey, ið hava truplari við at skriva enn onnur', explanation: 'Handverk kann kennast truplari, ikki lættari, hjá teimum sum taka tað í álvara.', origin: 'Knýtt at Thomas Mann og nær einari orðing í stuttsøguni “Tristan” frá 1903.' } },
  { id: 'running-from-to-why', en: { saying: 'Learn what you are running from, and to, and why', explanation: 'Understand your motives before life passes you by.', origin: 'Adapted from James Thurber’s fable “The Shore and the Sea” in “Further Fables for Our Time” (1956).' }, dk: { saying: 'Find ud af hvad du løber fra, hvad du løber imod, og hvorfor', explanation: 'Forstå dine motiver, før livet bare bliver bevægelse.', origin: 'Bearbejdet fra James Thurbers fabel “The Shore and the Sea” i “Further Fables for Our Time” fra 1956.' }, fo: { saying: 'Finn út av hvat tú rennur frá, hvat tú rennur ímóti, og hví', explanation: 'Skil tíni motiv, áðrenn lívið bara verður rørslu.', origin: 'Tillagað frá fábli hjá James Thurber, “The Shore and the Sea”, í “Further Fables for Our Time” frá 1956.' } },
  { id: 'time-wounds-heels', en: { saying: 'Time wounds all heels', explanation: 'Bad people may eventually face consequences.', origin: 'A pun on “time heals all wounds”; used in American humor by the 1930s and later often linked to Groucho Marx.' }, dk: { saying: 'Tiden sårer alle skurke', explanation: 'Mennesker der opfører sig dårligt, kan med tiden møde konsekvenserne.', origin: 'Et ordspil på “time heals all wounds”. Det findes i amerikansk humor i 1930’erne og forbindes senere ofte med Groucho Marx.' }, fo: { saying: 'Tíðin særir allar skálkar', explanation: 'Fólk sum bera seg illa at, kunnu við tíðini møta avleiðingunum.', origin: 'Eitt orðaspæl upp á “time heals all wounds”. Tað sæst í amerikanskum skemti í 1930’unum og verður seinni ofta knýtt at Groucho Marx.' } },
  { id: 'fool-experience', en: { saying: 'A fool will drag you down to their level and beat you with experience', explanation: 'Do not waste energy arguing on terms set by someone unreasonable.', origin: 'Often misattributed to Mark Twain; best treated as a modern popular saying with uncertain authorship.' }, dk: { saying: 'En tåbe trækker dig ned på sit niveau og slår dig med erfaring', explanation: 'Spild ikke kræfter på at diskutere på urimelige menneskers præmisser.', origin: 'Ofte fejlagtigt tilskrevet Mark Twain; bør behandles som et moderne, populært ordsprog med usikker ophavsmand.' }, fo: { saying: 'Ein býttlingur dregur teg niður á sítt støði og vinnur við royndum', explanation: 'Brúka ikki orku upp á at kjakast eftir treytunum hjá einum órímiligum persóni.', origin: 'Ofta skeivt tillutað Mark Twain; eigur at verða sæð sum eitt nútímans fólksligt orðatak við óvissum uppruna.' } },
  { id: 'grudge-poison', en: { saying: 'Holding a grudge is like drinking poison and waiting for the other person to die', explanation: 'Resentment hurts the person carrying it more than the target.', origin: 'Often misattributed to famous figures such as Nelson Mandela; similar resentment sayings spread through recovery and spiritual traditions.' }, dk: { saying: 'At bære nag er som at drikke gift og vente på at den anden dør', explanation: 'Nag skader ofte den, der bærer det, mere end den det er rettet mod.', origin: 'Ofte fejlagtigt tilskrevet kendte personer som Nelson Mandela; lignende formuleringer findes i recovery- og spirituelle traditioner.' }, fo: { saying: 'At bera agg er sum at drekka eitur og bíða eftir at hin doyr', explanation: 'Agg skaðar ofta tann, sum ber tað, meira enn tann tað er vent ímóti.', origin: 'Ofta skeivt knýtt at kendum persónum sum Nelson Mandela; líknandi orðingar finnast í andaligum og recovery-samanhangi.' } },
  { id: 'free-rent-head', en: { saying: 'Do not give someone free rent inside your head', explanation: 'Do not let someone you dislike occupy your thoughts for nothing.', origin: 'A modern informal metaphor that turns resentment into a picture of unpaid tenancy.' }, dk: { saying: 'Giv ikke nogen gratis husleje inde i dit hoved', explanation: 'Lad ikke en person, du ikke bryder dig om, fylde dine tanker gratis.', origin: 'Et moderne uformelt billede, hvor nag bliver til en uønsket lejer i hovedet.' }, fo: { saying: 'Lat ikki nakran búgva ókeypis í høvdinum hjá tær', explanation: 'Lat ikki ein persón, tær ikki dámar, fylla tankarnar ókeypis.', origin: 'Ein nútímans óformlig mynd, har agg verður til ein óynsktan leigubúgva í høvdinum.' } },
  { id: 'judge-insides-outsides', en: { saying: 'Do not judge your insides by other people’s outsides', explanation: 'Do not compare your private struggle with someone else’s public image.', origin: 'A modern self-help and recovery saying; authorship is uncertain.' }, dk: { saying: 'Døm ikke dit indre efter andres ydre', explanation: 'Sammenlign ikke dine private kampe med andres offentlige facade.', origin: 'Et moderne selvhjælps- og recovery-ordsprog med usikker ophavsmand.' }, fo: { saying: 'Døm ikki títt innara eftir uttara hjá øðrum', explanation: 'Samanber ikki tínar privatu stríð við almennu myndina hjá øðrum.', origin: 'Eitt nútímans sjálvhjálpar- og recovery-orðatak við óvissum uppruna.' } },
  { id: 'opportunity-overalls', en: { saying: 'Opportunity is missed because it is dressed in overalls and looks like work', explanation: 'People overlook chances when they arrive disguised as effort.', origin: 'Widely attributed to Thomas Edison, but the exact attribution is debated; similar sayings circulated before clear Edison attribution.' }, dk: { saying: 'Muligheden bliver overset, fordi den har overalls på og ligner arbejde', explanation: 'Folk overser ofte chancer, når de ligner indsats.', origin: 'Ofte tilskrevet Thomas Edison, men den præcise tilskrivning er omdiskuteret; lignende formuleringer cirkulerede tidligere.' }, fo: { saying: 'Møguleikin verður ofta ikki sæddur, tí hann er í arbeiðsklæðum og líkist arbeiði', explanation: 'Fólk síggja ofta ikki møguleikar, tá teir líkjast stríði.', origin: 'Ofta tillutað Thomas Edison, men nágreiniliga tilskrivingin er umrødd; líknandi orðingar hava verið í umferð fyrr.' } },
  { id: 'wish-in-one-hand', en: { saying: 'Wish in one hand, shit in the other; see which fills up first', explanation: 'Wishing does not produce results; action does.', origin: 'A blunt folk saying, especially common in American English; exact origin unknown.' }, dk: { saying: 'Ønsk i den ene hånd og skidt i den anden — se hvilken der fyldes først', explanation: 'Ønsker skaber ikke resultater; handling gør.', origin: 'Et groft folkeligt ordsprog, især kendt fra amerikansk engelsk, med ukendt præcis oprindelse.' }, fo: { saying: 'Ynsk í aðra hondina og skít í hina — hygg hvør fyllist fyrst', explanation: 'Ynski skapa ikki úrslit; gerðir gera.', origin: 'Eitt rátt fólksligt orðatak, serliga kent úr amerikanskum enskum, við óvissum uppruna.' } },
  { id: 'make-hay-sun-shines', en: { saying: 'Make hay while the sun shines', explanation: 'Use a good opportunity while conditions are favorable.', origin: 'From farming: hay had to be cut and dried in dry weather before rain spoiled it.' }, dk: { saying: 'Hø skal bjærges mens solen skinner', explanation: 'Brug muligheden, mens forholdene er gode.', origin: 'Fra landbrug: hø skulle slås og tørres i godt vejr, før regn ødelagde det.' }, fo: { saying: 'Ger hoyggj meðan sólin skínur', explanation: 'Brúka møguleikan, meðan umstøðurnar eru góðar.', origin: 'Úr landbúnaði: hoyggj mátti sláast og turkast í góðum veðri, áðrenn regn oyðilegði tað.' } },
  { id: 'hell-keep-going', en: { saying: 'If you are going through hell, keep going', explanation: 'When a situation is awful, do not stop inside it.', origin: 'Often attributed to Winston Churchill, but firm evidence for the exact wording is weak; best treated as a modern motivational saying.' }, dk: { saying: 'Hvis du går gennem helvede, så bliv ved med at gå', explanation: 'Når en situation er forfærdelig, skal du ikke slå lejr midt i den.', origin: 'Ofte tilskrevet Winston Churchill, men sikker dokumentation for den præcise formulering er svag; bedst behandlet som et moderne motivationsord.' }, fo: { saying: 'Um tú gongur gjøgnum helviti, halt fram at ganga', explanation: 'Tá støðan er ræðulig, skalt tú ikki steðga mitt í henni.', origin: 'Ofta tillutað Winston Churchill, men trygg prógv fyri júst hesi orðing eru veik; best at síggja sum nútímans eggjandi orð.' } },
  { id: 'only-way-out-through', en: { saying: 'The only way out is through', explanation: 'Some problems can only be solved by facing them directly.', origin: 'Related to a line in Robert Frost’s 1914 poem “A Servant to Servants”: “the best way out is always through”.' }, dk: { saying: 'Den eneste vej ud er igennem', explanation: 'Nogle problemer kan kun løses ved at gå direkte igennem dem.', origin: 'Beslægtet med en linje i Robert Frosts digt “A Servant to Servants” fra 1914: “the best way out is always through”.' }, fo: { saying: 'Einasti vegurin út er ígjøgnum', explanation: 'Nakrir trupulleikar kunnu bara loysast við at fara beint ígjøgnum teir.', origin: 'Í ætt við eina reglu í yrkingini “A Servant to Servants” hjá Robert Frost frá 1914: “the best way out is always through”.' } },
  { id: 'hurt-people-hurt-people', en: { saying: 'Hurt people hurt people', explanation: 'Unhealed pain often gets passed on to others.', origin: 'A modern therapeutic saying; exact authorship is uncertain.' }, dk: { saying: 'Sårede mennesker sårer mennesker', explanation: 'Uforløst smerte bliver ofte givet videre til andre.', origin: 'Et moderne terapeutisk ordsprog med usikker ophavsmand.' }, fo: { saying: 'Særd fólk særa fólk', explanation: 'Ógrødd pína verður ofta givin víðari til onnur.', origin: 'Eitt nútímans terapeutiskt orðatak við óvissum uppruna.' } },
  { id: 'perfect-enemy-good', en: { saying: 'Perfect is the enemy of good', explanation: 'Trying to make something perfect can prevent it from becoming useful.', origin: 'Commonly linked to Voltaire’s French line “Le mieux est l’ennemi du bien” from the 1700s.' }, dk: { saying: 'Det perfekte er det godes fjende', explanation: 'Jagten på det perfekte kan forhindre noget godt i at blive færdigt.', origin: 'Knyttes ofte til Voltaires franske formulering “Le mieux est l’ennemi du bien” fra 1700-tallet.' }, fo: { saying: 'Tað fullkomna er fíggindi hjá tí góða', explanation: 'Jagstranin eftir tí fullkomna kann forða tí góða í at verða liðugt.', origin: 'Verður ofta knýtt at fronsku orðingini hjá Voltaire “Le mieux est l’ennemi du bien” frá 1700-talinum.' } },
  { id: 'shows-you-believe', en: { saying: 'When someone shows you who they are, believe them', explanation: 'Pay attention to people’s actions, not only their explanations.', origin: 'Widely associated with Maya Angelou, often quoted in the form “When people show you who they are, believe them the first time.”' }, dk: { saying: 'Når nogen viser dig hvem de er, så tro på dem', explanation: 'Læg mærke til menneskers handlinger, ikke kun deres forklaringer.', origin: 'Forbundet med Maya Angelou, ofte citeret som: “When people show you who they are, believe them the first time.”' }, fo: { saying: 'Tá onkur vísir tær hvør hann er, so trúgv tí', explanation: 'Legg merki til gerðir hjá fólki, ikki bara frágreiðingar teirra.', origin: 'Knýtt at Maya Angelou, ofta endurgivið sum: “When people show you who they are, believe them the first time.”' } },
  { id: 'compassion-self-friend', en: { saying: 'Be as compassionate with yourself as you would be with a good friend', explanation: 'Treat yourself with the kindness you would naturally offer someone you care about.', origin: 'A modern self-compassion idea associated with contemporary psychology rather than a traditional proverb.' }, dk: { saying: 'Vær lige så omsorgsfuld mod dig selv som mod en god ven', explanation: 'Behandl dig selv med den venlighed, du ville give én du holder af.', origin: 'En moderne selvomsorgstanke forbundet med nutidig psykologi snarere end et traditionelt ordsprog.' }, fo: { saying: 'Ver eins miskunnsamur við teg sjálvan sum við ein góðan vin', explanation: 'Far við tær sjálvum við somu vælvild sum tú hevði givið einum, tær er góður við.', origin: 'Ein nútímans sjálvumsorganarhugsan knýtt at sálarfrøði heldur enn eitt siðbundið orðatak.' } },
  { id: 'weakest-link', en: { saying: 'A chain is only as strong as its weakest link', explanation: 'A whole system can fail through its most fragile part.', origin: 'A mechanical image that became a social and organizational proverb in the 1800s and 1900s.' }, dk: { saying: 'En kæde er kun så stærk som sit svageste led', explanation: 'Et helt system kan fejle gennem sin mest sårbare del.', origin: 'Et mekanisk billede, der blev til et socialt og organisatorisk ordsprog i 1800- og 1900-tallet.' }, fo: { saying: 'Ein ketta er bara so sterk sum veikasta liðið', explanation: 'Ein heil skipan kann bresta í sínum veikasta parti.', origin: 'Ein mekanisk mynd, sum seinni varð brúkt um felagsskapir, arbeiði og ábyrgd.' } },
  { id: 'measure-twice-cut-once', en: { saying: 'Measure twice, cut once', explanation: 'Check carefully before doing something that is hard to undo.', origin: 'A carpenter’s rule that became a general proverb about preparation.' }, dk: { saying: 'Mål to gange, skær én gang', explanation: 'Tjek grundigt før du gør noget, der er svært at fortryde.', origin: 'En håndværkerregel fra tømrerarbejde, som blev et bredere ordsprog om forberedelse.' }, fo: { saying: 'Mát tvær ferðir, sker eina ferð', explanation: 'Kanna væl, áðrenn tú gert nakað, sum er torført at taka aftur.', origin: 'Eitt handverksráð, sum er vorðið eitt orðatak um fyrireiking.' } },
  { id: 'burn-bridges', en: { saying: 'Do not burn your bridges', explanation: 'Do not destroy relationships or options you may need later.', origin: 'From military and travel images: a burned bridge removes the way back.' }, dk: { saying: 'Brænd ikke dine broer', explanation: 'Ødelæg ikke relationer eller muligheder, du kan få brug for senere.', origin: 'Fra militære og rejsende billeder: en brændt bro fjerner vejen tilbage.' }, fo: { saying: 'Brenn ikki brýrnar aftan fyri teg', explanation: 'Oyðilegg ikki sambond ella møguleikar, sum tú kanst fáa tørv á seinni.', origin: 'Myndin kemur frá ferð og hernaði, har ein brend brúgv tekur afturvegin burtur.' } },
  { id: 'cross-bridge-when-come', en: { saying: 'Cross that bridge when you come to it', explanation: 'Do not worry too early about a problem that has not arrived yet.', origin: 'A travel image that became a practical saying about timing anxiety.' }, dk: { saying: 'Tag den bro, når du kommer til den', explanation: 'Bekymr dig ikke for tidligt om et problem, der ikke er nået frem endnu.', origin: 'Et rejsebillede, som blev et praktisk ordsprog om timing og bekymring.' }, fo: { saying: 'Far um ta brúnna, tá tú kemur til hana', explanation: 'Stúra ikki ov tíðliga um ein trupulleika, sum ikki er komin enn.', origin: 'Ein ferðamynd, sum er vorðin eitt orðatak um røttu løtuna.' } },
  { id: 'dont-count-chickens', en: { saying: 'Do not count your chickens before they hatch', explanation: 'Do not treat a hoped-for result as certain before it happens.', origin: 'A farming proverb known in English from Aesop-like fable traditions and later collections.' }, dk: { saying: 'Sælg ikke skindet før bjørnen er skudt', explanation: 'Regn ikke med et resultat, før det faktisk er sikkert.', origin: 'Den danske form bruger jagtbilledet med bjørneskindet; den engelske form bruger æg, der endnu ikke er klækket.' }, fo: { saying: 'Tel ikki pisurnar, áðrenn tær eru klaktar', explanation: 'Rokna ikki við úrslitinum, fyrr enn tað veruliga er komið.', origin: 'Eitt landbúnaðarligt orðatak um at bíða, til úrslitið er vist.' } },
  { id: 'reap-what-sow', en: { saying: 'You reap what you sow', explanation: 'Your actions tend to produce consequences of the same kind.', origin: 'A farming image with roots in biblical language and older agricultural wisdom.' }, dk: { saying: 'Man høster som man sår', explanation: 'Dine handlinger skaber ofte konsekvenser af samme slags.', origin: 'Et landbrugsbillede med rødder i bibelsk sprog og ældre agrar visdom.' }, fo: { saying: 'Tú heystar tað, tú sáar', explanation: 'Gerðir tínar skapa ofta avleiðingar av sama slag.', origin: 'Ein landbúnaðarmynd við rótum í bíbilskum máli og gomlum royndum.' } },
  { id: 'what-goes-around', en: { saying: 'What goes around comes around', explanation: 'Actions often return to the person who sends them into the world.', origin: 'A circular modern folk saying related to older ideas of karma, justice and reciprocity.' }, dk: { saying: 'Hvad der går rundt, kommer rundt', explanation: 'Handlinger vender ofte tilbage til den, der sender dem ud i verden.', origin: 'Et moderne folkeligt kredsløbsbillede beslægtet med ældre idéer om karma, retfærdighed og gengæld.' }, fo: { saying: 'Tað sum fer runt, kemur runt aftur', explanation: 'Gerðir koma ofta aftur til tann, sum sendi tær út.', origin: 'Eitt nútímans orðatak um ringrás, rættvísi og afturvendandi avleiðingar.' } },
  { id: 'penny-saved', en: { saying: 'A penny saved is a penny earned', explanation: 'Money not wasted has the same value as money gained.', origin: 'A thrift proverb strongly associated with Benjamin Franklin, though similar sayings are older.' }, dk: { saying: 'En sparet krone er en tjent krone', explanation: 'Penge du ikke spilder, har samme værdi som penge du tjener.', origin: 'Et nøjsomhedsordsprog, ofte forbundet med Benjamin Franklin, men lignende formuleringer er ældre.' }, fo: { saying: 'Ein spard króna er ein vunnin króna', explanation: 'Peningur, tú ikki oyðir, hevur sama virði sum peningur, tú vinnur.', origin: 'Eitt orðatak um sparsemi, ofta knýtt at Benjamin Franklin, hóast líknandi orð eru eldri.' } },
  { id: 'penny-wise-pound-foolish', en: { saying: 'Penny wise, pound foolish', explanation: 'Saving small amounts can become expensive if it causes bigger losses.', origin: 'An old British money proverb contrasting pennies with pounds.' }, dk: { saying: 'Ørevis og kroneblind', explanation: 'Små besparelser kan blive dyre, hvis de skaber større tab.', origin: 'Bygger på samme pengebillede som den engelske formulering: klog på småmønter, dum på store beløb.' }, fo: { saying: 'Klókur við oyrum, blindur við krónum', explanation: 'Smáar sparingar kunnu gerast dýrar, um tær skapa størri tap.', origin: 'Ein peningamynd um at síggja tað lítla, men missa tað stóra.' } },
  { id: 'buy-cheap-buy-twice', en: { saying: 'Buy cheap, buy twice', explanation: 'The cheapest solution may cost more if it must be replaced.', origin: 'A practical shopping and craft proverb about false economy.' }, dk: { saying: 'Køb billigt, køb to gange', explanation: 'Den billigste løsning kan blive dyrere, hvis den skal erstattes.', origin: 'Et praktisk ordsprog om falsk økonomi og kvalitet.' }, fo: { saying: 'Keyp bíligt, keyp tvær ferðir', explanation: 'Tað bíligasta kann gerast dýrari, um tað má skiftast út.', origin: 'Eitt praktiskt orðatak um falska sparing og góðsku.' } },
  { id: 'money-talks', en: { saying: 'Money talks', explanation: 'Money often gives people influence and access.', origin: 'A blunt modern proverb about power, commerce and social reality.' }, dk: { saying: 'Penge taler', explanation: 'Penge giver ofte indflydelse og adgang.', origin: 'Et kontant moderne ordsprog om magt, handel og sociale realiteter.' }, fo: { saying: 'Peningur tosar', explanation: 'Peningur gevur ofta ávirkan og atgongd.', origin: 'Eitt rátt nútímans orðatak um vald, handil og veruleika.' } },
  { id: 'time-money', en: { saying: 'Time is money', explanation: 'Time has value and should not be wasted carelessly.', origin: 'A phrase popularized in modern business culture and often linked to Benjamin Franklin.' }, dk: { saying: 'Tid er penge', explanation: 'Tid har værdi og bør ikke spildes uden omtanke.', origin: 'En formulering udbredt i moderne arbejdskultur og ofte knyttet til Benjamin Franklin.' }, fo: { saying: 'Tíð er peningur', explanation: 'Tíð hevur virði og eigur ikki at verða oyðslað uttan umhugsan.', origin: 'Ein orðing úr handils- og arbeiðslívi, ofta knýtt at Benjamin Franklin.' } },
  { id: 'lost-time-never-found', en: { saying: 'Lost time is never found again', explanation: 'Time wasted cannot truly be recovered.', origin: 'A time proverb often associated with Benjamin Franklin and older moral writing.' }, dk: { saying: 'Tabt tid findes aldrig igen', explanation: 'Tid der er spildt, kan aldrig helt vindes tilbage.', origin: 'Et tidsordsprog, ofte forbundet med Benjamin Franklin og ældre moralsk litteratur.' }, fo: { saying: 'Mist tíð verður aldri funnin aftur', explanation: 'Tíð, sum er farin til spillis, fæst ikki veruliga aftur.', origin: 'Eitt orðatak um tíð, ofta knýtt at eldri moralskum tekstum.' } },
  { id: 'tomorrow-never-comes', en: { saying: 'Tomorrow never comes', explanation: 'Postponed action can remain postponed forever.', origin: 'A warning proverb against endless delay, common in English moral sayings.' }, dk: { saying: 'I morgen kommer aldrig', explanation: 'Udsat handling kan blive ved med at være udsat.', origin: 'Et advarselsordsprog mod endeløs udsættelse.' }, fo: { saying: 'Í morgin kemur ongantíð', explanation: 'Útsett gerð kann verða útsett í allar ævir.', origin: 'Eitt ávaringarsorðatak móti at skjóta alt frammanfyri sær.' } },
  { id: 'new-broom-sweeps-clean', en: { saying: 'A new broom sweeps clean', explanation: 'A new person or method often brings fresh energy at first.', origin: 'A household image used for leadership and change since early modern English.' }, dk: { saying: 'En ny kost fejer rent', explanation: 'En ny person eller metode bringer ofte frisk energi i begyndelsen.', origin: 'Et husholdningsbillede, der længe har været brugt om ledelse og forandring.' }, fo: { saying: 'Ein nýggjur kustur sópar reint', explanation: 'Ein nýggjur persónur ella háttur gevur ofta nýggja orku í fyrstuni.', origin: 'Ein húsarhaldsmynd, sum verður brúkt um leiðslu og broyting.' } },
  { id: 'old-broom-corners', en: { saying: 'The old broom knows the corners', explanation: 'Experience knows details that enthusiasm can miss.', origin: 'A companion image to the new broom proverb, common in several European traditions.' }, dk: { saying: 'Den gamle kost kender hjørnerne', explanation: 'Erfaring kender detaljer, som begejstring kan overse.', origin: 'Et modstykke til ordsproget om den nye kost, kendt i flere europæiske traditioner.' }, fo: { saying: 'Gamli kusturin kennir hornini', explanation: 'Royndir kenna smálutir, sum hugur kann missa.', origin: 'Ein mótmynd til nýggja kustin, kend í fleiri evropeiskum siðvenjum.' } },
  { id: 'teach-fish-swim', en: { saying: 'Do not teach fish to swim', explanation: 'Do not explain the obvious to someone who already knows it well.', origin: 'An old image of needless instruction, found in many forms across languages.' }, dk: { saying: 'Lær ikke fisk at svømme', explanation: 'Forklar ikke det oplagte til nogen, der allerede kan det.', origin: 'Et gammelt billede på overflødig belæring, kendt i mange sprog.' }, fo: { saying: 'Lær ikki fisk at svimja', explanation: 'Greið ikki frá tí sjálvsagda fyri einum, sum longu dugir tað.', origin: 'Ein gomul mynd um óneyðuga undirvísing, kend í mongum málum.' } },
  { id: 'still-waters-deep', en: { saying: 'Still waters run deep', explanation: 'Quiet people or situations may contain more than they show.', origin: 'An old water image used in English and European proverb collections.' }, dk: { saying: 'Stille vand har dyb grund', explanation: 'Stille mennesker eller situationer kan rumme mere, end de viser.', origin: 'Et gammelt vandbillede, kendt fra engelske og europæiske ordsprogssamlinger.' }, fo: { saying: 'Stilt vatn rennur djúpt', explanation: 'Still fólk ella støður kunnu rúma meira, enn tey vísa.', origin: 'Ein gomul vatnmynd úr evropeiskari orðatakasøgu.' } },
  { id: 'deep-water', en: { saying: 'Be in deep water', explanation: 'To be in serious difficulty or beyond your comfort zone.', origin: 'A physical danger image that became a common metaphor for trouble.' }, dk: { saying: 'Være på dybt vand', explanation: 'At være i alvorlige vanskeligheder eller uden for sin tryghed.', origin: 'Et fysisk farebillede, der blev en almindelig metafor for problemer.' }, fo: { saying: 'Vera á djúpum vatni', explanation: 'At vera í álvarsomum trupulleikum ella uttan fyri trygga økið.', origin: 'Ein mynd av fysiskum vanda, sum gjørdist metafor fyri trupulleikar.' } },
  { id: 'smooth-seas-sailor', en: { saying: 'Smooth seas do not make skilled sailors', explanation: 'Difficulty is often what builds real ability.', origin: 'A modern nautical proverb built on older sea-learning images.' }, dk: { saying: 'Roligt hav gør ingen dygtig sømand', explanation: 'Vanskeligheder er ofte det, der skaber reel kunnen.', origin: 'Et moderne søbillede bygget på ældre erfaringer om læring gennem vejr og modstand.' }, fo: { saying: 'Slætt hav ger ongan dugnaligan sjómann', explanation: 'Mótburður er ofta tað, sum skapar veruligan dugnaskap.', origin: 'Ein sjómynd um at læra gjøgnum veður, váða og royndir.' } },
  { id: 'rising-tide', en: { saying: 'A rising tide lifts all boats', explanation: 'A broad improvement can help many people at once.', origin: 'A political and economic metaphor popularized in the twentieth century.' }, dk: { saying: 'Et stigende tidevand løfter alle både', explanation: 'En bred forbedring kan hjælpe mange på én gang.', origin: 'En politisk og økonomisk metafor, udbredt i det tyvende århundrede.' }, fo: { saying: 'Flóð lyftir allar bátar', explanation: 'Ein breið framgongd kann hjálpa mongum í senn.', origin: 'Ein politisk og búskaparlig mynd, sum gjørdist kend í 1900-talinum.' } },
  { id: 'miss-boat', en: { saying: 'Miss the boat', explanation: 'To lose an opportunity by acting too late.', origin: 'A travel and shipping image that became a general idiom about timing.' }, dk: { saying: 'Misse båden', explanation: 'At gå glip af en mulighed ved at handle for sent.', origin: 'Et rejse- og søfartsbillede, der blev et almindeligt udtryk om timing.' }, fo: { saying: 'Missa bátin', explanation: 'At missa ein møguleika, tí tú gert ov seint.', origin: 'Ein ferðslu- og sjóferðarmynd, sum varð til orðatak um timing.' } },
  { id: 'plain-sailing', en: { saying: 'Plain sailing', explanation: 'Something is easy once the hard part has passed.', origin: 'From navigation, where clear conditions made sailing straightforward.' }, dk: { saying: 'Ren sejlads', explanation: 'Noget er let, når den svære del er overstået.', origin: 'Fra navigation og sejlads, hvor klare forhold gjorde rejsen enkel.' }, fo: { saying: 'Rein sigling', explanation: 'Okkurt er lætt, tá tann trupli parturin er farin afturum.', origin: 'Frá sigling, har góð og greið viðurskifti gjørdu ferðina lætta.' } },
  { id: 'tip-iceberg', en: { saying: 'The tip of the iceberg', explanation: 'The visible part of a problem may be only a small part of the whole.', origin: 'A sea image made famous by icebergs, where most of the mass is hidden underwater.' }, dk: { saying: 'Toppen af isbjerget', explanation: 'Den synlige del af et problem kan kun være en lille del af helheden.', origin: 'Et havbillede fra isbjerge, hvor det meste er skjult under vandet.' }, fo: { saying: 'Toppurin av ísfjallinum', explanation: 'Tann sjónligi parturin av einum trupulleika kann vera bara ein lítil partur av heildini.', origin: 'Ein havmynd frá ísfjøllum, har mest er fjalt undir vatninum.' } },
  { id: 'when-it-rains-pours', en: { saying: 'When it rains, it pours', explanation: 'Problems or events often arrive all at once.', origin: 'A weather image that became common in English everyday speech.' }, dk: { saying: 'Når det regner, styrter det ned', explanation: 'Problemer eller begivenheder kommer ofte på én gang.', origin: 'Et vejrbillede, der blev almindeligt i engelsk hverdagssprog.' }, fo: { saying: 'Tá tað regnar, oysir tað niður', explanation: 'Trupulleikar ella hendingar koma ofta í einum.', origin: 'Ein veðurmynd, sum er vorðin vanlig í gerandismáli.' } },
  { id: 'save-rainy-day', en: { saying: 'Save it for a rainy day', explanation: 'Keep resources for a time when they will be needed.', origin: 'A thrift proverb using bad weather as a picture of future trouble.' }, dk: { saying: 'Gem det til en regnvejrsdag', explanation: 'Gem ressourcer til en tid, hvor der bliver brug for dem.', origin: 'Et nøjsomhedsordsprog, hvor dårligt vejr bliver billede på fremtidige problemer.' }, fo: { saying: 'Goym tað til ein regndag', explanation: 'Goym tilfeingi til eina tíð, har tørvur verður á tí.', origin: 'Eitt orðatak um sparsemi, har ringt veður er mynd fyri seinni tørv.' } },
  { id: 'look-for-silver-lining', en: { saying: 'Look for the silver lining', explanation: 'Even bad situations may contain something hopeful.', origin: 'The image was popularized from John Milton’s seventeenth-century writing and later proverb use.' }, dk: { saying: 'Led efter sølvkanten', explanation: 'Selv dårlige situationer kan rumme noget håbefuldt.', origin: 'Billedet blev udbredt fra John Miltons 1600-tals-sprog og senere ordsprogsbrug.' }, fo: { saying: 'Leita eftir silvurkantinum', explanation: 'Sjálvt ringar støður kunnu hava okkurt vónríkt í sær.', origin: 'Myndin varð kend úr skrivihátti hjá John Milton og seinni orðatakasøgu.' } },
  { id: 'calm-before-storm', en: { saying: 'The calm before the storm', explanation: 'A quiet moment may come just before trouble begins.', origin: 'A weather observation that became a metaphor for tension before conflict.' }, dk: { saying: 'Stilheden før stormen', explanation: 'Et roligt øjeblik kan komme lige før problemerne begynder.', origin: 'En vejrobservation, der blev metafor for spænding før konflikt.' }, fo: { saying: 'Kvirran undan storminum', explanation: 'Ein still løta kann koma beint undan trupulleikum.', origin: 'Ein veðurroynd, sum gjørdist mynd fyri spenning undan ófriði.' } },
  { id: 'chase-rainbows', en: { saying: 'Chase rainbows', explanation: 'To pursue something attractive but unlikely to be reached.', origin: 'A visual image of chasing something beautiful that moves away as you approach.' }, dk: { saying: 'Jage regnbuer', explanation: 'At forfølge noget smukt, men sandsynligvis uopnåeligt.', origin: 'Et visuelt billede på at jage noget, der flytter sig, når man nærmer sig.' }, fo: { saying: 'Renna eftir ælabogum', explanation: 'At royna at fáa fatur á nøkrum vøkrum, men helst ómøguligum.', origin: 'Ein sjónlig mynd av at renna eftir nøkrum, sum flytur seg, tá tú nærkast.' } },
  { id: 'cant-see-forest', en: { saying: 'Can not see the forest for the trees', explanation: 'Details can hide the larger pattern.', origin: 'A forest image known in several European languages since early modern proverb collections.' }, dk: { saying: 'Ikke kunne se skoven for bare træer', explanation: 'Detaljer kan skjule det større mønster.', origin: 'Et skovbillede kendt i flere europæiske sprog siden tidlige ordsprogssamlinger.' }, fo: { saying: 'Ikki síggja skógin fyri trøunum', explanation: 'Smálutir kunnu fjala størra mynstrið.', origin: 'Ein skógarmynd kend í fleiri evropeiskum málum.' } },
  { id: 'root-of-problem', en: { saying: 'Get to the root of the problem', explanation: 'Find the underlying cause instead of treating only symptoms.', origin: 'A plant image that turns causes into roots beneath the surface.' }, dk: { saying: 'Gå til roden af problemet', explanation: 'Find den underliggende årsag i stedet for kun at behandle symptomer.', origin: 'Et plantebillede, hvor årsager bliver rødder under overfladen.' }, fo: { saying: 'Far til rótina á trupulleikanum', explanation: 'Finn undirliggjandi orsøkina heldur enn bara at viðgera tekinini.', origin: 'Ein plantumynd, har orsøkir eru røtur undir yvirflatuni.' } },
  { id: 'nip-in-bud', en: { saying: 'Nip it in the bud', explanation: 'Stop a problem while it is still small.', origin: 'A gardening image: remove a bud before it grows into something larger.' }, dk: { saying: 'Tag det i opløbet', explanation: 'Stop et problem, mens det stadig er småt.', origin: 'Et havebillede: fjern knoppen, før den vokser til noget større.' }, fo: { saying: 'Tak tað í knoppinum', explanation: 'Steðga einum trupulleika, meðan hann enn er lítil.', origin: 'Ein havamynd: tak knoppin, áðrenn hann veksur til okkurt størri.' } },
  { id: 'grass-greener', en: { saying: 'The grass is always greener on the other side', explanation: 'Other people’s situations can look better from a distance.', origin: 'A pasture image that became a proverb about envy and comparison.' }, dk: { saying: 'Græsset er altid grønnere på den anden side', explanation: 'Andres situation kan se bedre ud på afstand.', origin: 'Et markbillede, der blev et ordsprog om misundelse og sammenligning.' }, fo: { saying: 'Grasið er altíð grønari hinumegin', explanation: 'Støðan hjá øðrum kann síggja betri út úr frástøðu.', origin: 'Ein bømynd, sum gjørdist orðatak um øvund og samanbering.' } },
  { id: 'out-of-woods', en: { saying: 'Out of the woods', explanation: 'Past the most dangerous or difficult part.', origin: 'A woodland travel image where leaving the forest means leaving danger behind.' }, dk: { saying: 'Ude af skoven', explanation: 'Forbi den farligste eller sværeste del.', origin: 'Et skov- og rejsebillede, hvor man forlader fare ved at komme ud af skoven.' }, fo: { saying: 'Úr skóginum', explanation: 'Komin framvið tí vandamiklasta ella truplasta partinum.', origin: 'Ein skógarmynd, har vandin liggur aftan fyri teg, tá tú kemur út.' } },
  { id: 'barking-up-wrong-tree', en: { saying: 'Barking up the wrong tree', explanation: 'To pursue the wrong explanation, target or solution.', origin: 'From hunting dogs that barked at a tree where the quarry was no longer hiding.' }, dk: { saying: 'Gø op ad det forkerte træ', explanation: 'At gå efter den forkerte forklaring, person eller løsning.', origin: 'Fra jagthunde, der gøede ved et træ, hvor byttet ikke længere gemte sig.' }, fo: { saying: 'Goyggja upp eftir skeiva trænum', explanation: 'At fara eftir skeivari frágreiðing, persóni ella loysn.', origin: 'Frá veiðuhundum, sum goyddu við eitt træ, har fongurin ikki longur var.' } },
  { id: 'wolf-sheep-clothing', en: { saying: 'A wolf in sheep’s clothing', explanation: 'A dangerous person or thing can appear harmless.', origin: 'From the Gospel of Matthew and later fable tradition.' }, dk: { saying: 'En ulv i fåreklæder', explanation: 'En farlig person eller ting kan se harmløs ud.', origin: 'Fra Matthæusevangeliet og senere fabeltradition.' }, fo: { saying: 'Ein úlvur í seyðaskinni', explanation: 'Ein vandamikil persónur ella lutur kann síggja óskaðiligur út.', origin: 'Úr Matteusevangeliinum og seinni fáblahevd.' } },
  { id: 'cry-wolf', en: { saying: 'Cry wolf', explanation: 'False alarms make people less likely to believe a real warning.', origin: 'From Aesop’s fable about the boy who repeatedly shouted that a wolf was coming.' }, dk: { saying: 'Råbe ulven kommer', explanation: 'Falske alarmer gør folk mindre tilbøjelige til at tro på en rigtig advarsel.', origin: 'Fra Æsops fabel om drengen, der igen og igen råbte, at ulven kom.' }, fo: { saying: 'Rópa úlvur kemur', explanation: 'Falskar ávaringar gera, at fólk minni trúgva einari veruligari ávaring.', origin: 'Úr fábli hjá Esopi um drongin, sum rópti um úlvin ov ofta.' } },
  { id: 'curiosity-cat', en: { saying: 'Curiosity killed the cat', explanation: 'Curiosity can lead into trouble if it ignores danger.', origin: 'An English cautionary proverb that shifted from “care killed the cat” to curiosity in modern usage.' }, dk: { saying: 'Nysgerrighed slog katten ihjel', explanation: 'Nysgerrighed kan føre til problemer, hvis den ignorerer fare.', origin: 'Et engelsk advarselsordsprog, der ændrede sig fra bekymring til nysgerrighed i moderne brug.' }, fo: { saying: 'Forvitni drap kettuna', explanation: 'Forvitni kann føra til trupulleikar, um hon ikki ansar eftir vanda.', origin: 'Eitt enskt ávaringarsorðatak, sum í nýggjari tíð varð knýtt at forvitni.' } },
  { id: 'let-sleeping-dogs-lie', en: { saying: 'Let sleeping dogs lie', explanation: 'Do not disturb a situation that may cause trouble if reopened.', origin: 'An old animal image warning against waking danger unnecessarily.' }, dk: { saying: 'Lad sovende hunde ligge', explanation: 'Forstyr ikke en situation, der kan skabe problemer, hvis den åbnes igen.', origin: 'Et gammelt dyrebillede om ikke at vække fare uden grund.' }, fo: { saying: 'Lat sovandi hundar liggja', explanation: 'Rør ikki við eina støðu, sum kann skapa trupulleikar, um hon verður latin upp aftur.', origin: 'Ein gomul djóramynd um ikki at vekja vanda uttan orsøk.' } },
  { id: 'dog-days', en: { saying: 'The dog days are over', explanation: 'A hard, heavy or stagnant period has ended.', origin: 'The “dog days” originally referred to the hot season linked with the star Sirius, the Dog Star.' }, dk: { saying: 'Hundedagene er ovre', explanation: 'En tung, hård eller stillestående periode er slut.', origin: 'Hundedagene henviste oprindeligt til den varme tid forbundet med stjernen Sirius, Hundestjernen.' }, fo: { saying: 'Hundadagarnir eru lidnir', explanation: 'Ein tung ella steðgað tíð er farin afturum.', origin: 'Hundadagarnir vístu upprunaliga til heitu tíðina, knýtta at stjørnuni Sirius.' } },
  { id: 'darkest-before-dawn', en: { saying: 'It is darkest before the dawn', explanation: 'Things can feel worst just before they begin to improve.', origin: 'A night-to-morning image common in religious, literary and motivational language.' }, dk: { saying: 'Det er mørkest før daggry', explanation: 'Ting kan føles værst lige før de begynder at blive bedre.', origin: 'Et nat-til-morgen-billede kendt fra religiøst, litterært og motiverende sprog.' }, fo: { saying: 'Tað er myrkast beint undan lýsing', explanation: 'Tað kann kennast ringast beint áðrenn tað batnar.', origin: 'Ein nátt-til-morgun mynd úr átrúnaðarligum, bókmentaligum og eggjandi máli.' } },
  { id: 'light-end-tunnel', en: { saying: 'Light at the end of the tunnel', explanation: 'A difficult period may be approaching its end.', origin: 'A tunnel image popular in modern speech about endurance and hope.' }, dk: { saying: 'Lys for enden af tunnelen', explanation: 'En svær periode kan være ved at nærme sig sin afslutning.', origin: 'Et tunnelbillede udbredt i moderne sprog om udholdenhed og håb.' }, fo: { saying: 'Ljós í endanum á tunlinum', explanation: 'Ein trupul tíð kann vera nær við at enda.', origin: 'Ein tunnilsmynd, sum er vanlig í nútímans máli um tol og vón.' } },
  { id: 'silver-spoon', en: { saying: 'Born with a silver spoon in your mouth', explanation: 'Born into wealth or privilege.', origin: 'A household and class image from a time when silver spoons signaled status.' }, dk: { saying: 'Født med en sølvske i munden', explanation: 'Født ind i rigdom eller privilegier.', origin: 'Et husholdnings- og klassebillede fra en tid, hvor sølvskeer signalerede status.' }, fo: { saying: 'Føddur við silvurskeið í munninum', explanation: 'Føddur inn í ríkidømi ella framíhjárætt.', origin: 'Ein húsarhalds- og stættarmynd frá tíð, har silvurskeiðir vístu støðu.' } },
  { id: 'best-things-free', en: { saying: 'The best things in life are free', explanation: 'Some of the most valuable things cannot be bought.', origin: 'A modern sentimental proverb popularized through songs and everyday speech.' }, dk: { saying: 'De bedste ting i livet er gratis', explanation: 'Nogle af de mest værdifulde ting kan ikke købes.', origin: 'Et moderne, varmt ordsprog udbredt gennem sange og hverdagssprog.' }, fo: { saying: 'Tað besta í lívinum er ókeypis', explanation: 'Nakað av tí mest virðismikla kann ikki keypast.', origin: 'Eitt nútímans orðatak, sum er vorðið kent gjøgnum sangir og gerandismál.' } },
  { id: 'less-is-more', en: { saying: 'Less is more', explanation: 'Simplicity can be stronger than excess.', origin: 'Often associated with modernist design and architect Ludwig Mies van der Rohe, though the phrase is older.' }, dk: { saying: 'Mindre er mere', explanation: 'Enkelhed kan være stærkere end overflod.', origin: 'Ofte forbundet med modernistisk design og arkitekten Ludwig Mies van der Rohe, selv om formuleringen er ældre.' }, fo: { saying: 'Minni er meira', explanation: 'Einfaldleiki kann vera sterkari enn ov nógv.', origin: 'Ofta knýtt at modernistiskum sniði og arkitektinum Ludwig Mies van der Rohe, hóast orðingin er eldri.' } },
  { id: 'devil-details', en: { saying: 'The devil is in the details', explanation: 'Small details can create the biggest problems.', origin: 'A modern form of older sayings about truth, God or difficulty being found in details.' }, dk: { saying: 'Djævelen ligger i detaljen', explanation: 'Små detaljer kan skabe de største problemer.', origin: 'En moderne form af ældre ord om sandhed, Gud eller vanskelighed i detaljerne.' }, fo: { saying: 'Djevulin liggur í smálutunum', explanation: 'Smálutir kunnu skapa størstu trupulleikarnar.', origin: 'Ein nútímans orðing av eldri hugsanum um, at tað avgerandi liggur í smálutunum.' } },
  { id: 'big-picture', en: { saying: 'See the big picture', explanation: 'Understand the larger situation instead of only isolated details.', origin: 'A modern visual metaphor from looking at a whole image rather than one part.' }, dk: { saying: 'Se det store billede', explanation: 'Forstå den større situation i stedet for kun enkelte detaljer.', origin: 'En moderne visuel metafor om at se hele billedet frem for en enkelt del.' }, fo: { saying: 'Síggj stóru myndina', explanation: 'Skil størri støðuna heldur enn bara einstakar smálutir.', origin: 'Ein nútímans sjónlig mynd um at síggja heildina.' } },
  { id: 'read-between-lines', en: { saying: 'Read between the lines', explanation: 'Understand what is implied but not said directly.', origin: 'A reading image from written communication, later used for hidden meaning in speech and behavior.' }, dk: { saying: 'Læs mellem linjerne', explanation: 'Forstå det, der antydes, men ikke siges direkte.', origin: 'Et læsebillede fra skriftlig kommunikation, senere brugt om skjult mening i tale og adfærd.' }, fo: { saying: 'Les millum reglurnar', explanation: 'Skil tað, sum verður sipað til, men ikki sagt beinleiðis.', origin: 'Ein lesimynd úr skrivligum samskifti, seinni brúkt um fjaldar merkingar.' } },
  { id: 'writing-wall', en: { saying: 'The writing is on the wall', explanation: 'The signs of what will happen are already visible.', origin: 'From the Book of Daniel, where mysterious writing on a wall foretells a kingdom’s fall.' }, dk: { saying: 'Skriften står på væggen', explanation: 'Tegnene på det, der vil ske, er allerede synlige.', origin: 'Fra Daniels Bog, hvor mystisk skrift på væggen varsler et riges fald.' }, fo: { saying: 'Skriftin stendur á vegginum', explanation: 'Tekinini um tað, sum fer at henda, síggjast longu.', origin: 'Úr Dánials bók, har løgin skrift á vegginum boðar frá falli einum ríki.' } },
  { id: 'turn-page', en: { saying: 'Turn the page', explanation: 'Leave one chapter behind and begin another.', origin: 'A reading image that became a metaphor for change, recovery and new starts.' }, dk: { saying: 'Vend blad', explanation: 'Lad et kapitel ligge og begynd på et nyt.', origin: 'Et læsebillede, der blev metafor for forandring, heling og nye begyndelser.' }, fo: { saying: 'Vend blaðnum', explanation: 'Lat eitt kapittul liggja og byrja eitt nýtt.', origin: 'Ein lesimynd, sum gjørdist metafor fyri broyting og nýggja byrjan.' } },
  { id: 'chapter-closed', en: { saying: 'That chapter is closed', explanation: 'A period or matter is finished and should not be reopened.', origin: 'A book image often used for endings in relationships, work and life.' }, dk: { saying: 'Det kapitel er lukket', explanation: 'En periode eller sag er afsluttet og bør ikke åbnes igen.', origin: 'Et bogbillede brugt om afslutninger i relationer, arbejde og liv.' }, fo: { saying: 'Tað kapitlið er afturlatið', explanation: 'Ein tíð ella sak er liðug og eigur ikki at latast upp aftur.', origin: 'Ein bókamynd um endar í sambondum, arbeiði og lívi.' } },
  { id: 'blank-slate', en: { saying: 'A blank slate', explanation: 'A fresh start with no marks from what came before.', origin: 'From writing tablets that could be wiped clean; also linked to the Latin idea “tabula rasa”.' }, dk: { saying: 'En blank tavle', explanation: 'En frisk begyndelse uden mærker fra det, der kom før.', origin: 'Fra skrivetavler, der kunne viskes rene; også knyttet til den latinske idé “tabula rasa”.' }, fo: { saying: 'Ein blank talva', explanation: 'Ein nýggj byrjan uttan merkir frá tí, sum var áðrenn.', origin: 'Frá skrivitalvum, sum kundu vaskast reinar; eisini knýtt at latínsku hugsanini “tabula rasa”.' } },
  { id: 'draw-line', en: { saying: 'Draw the line', explanation: 'Set a boundary for what you will accept.', origin: 'A marking image that became a common expression for limits and boundaries.' }, dk: { saying: 'Trække en streg', explanation: 'Sætte en grænse for, hvad du vil acceptere.', origin: 'Et markeringsbillede, der blev et almindeligt udtryk for grænser.' }, fo: { saying: 'Draga eina striku', explanation: 'Seta eitt mark fyri, hvat tú vilt góðtaka.', origin: 'Ein mynd av at merkja, sum gjørdist orðatak um mørk.' } },
  { id: 'line-in-sand', en: { saying: 'A line in the sand', explanation: 'A clear limit that should not be crossed.', origin: 'A boundary image often used in conflict, negotiation and personal decisions.' }, dk: { saying: 'En streg i sandet', explanation: 'En tydelig grænse, der ikke bør krydses.', origin: 'Et grænsebillede brugt i konflikter, forhandlinger og personlige beslutninger.' }, fo: { saying: 'Ein strika í sandinum', explanation: 'Eitt týðiligt mark, sum ikki eigur at verða farið um.', origin: 'Ein marknamynd brúkt í ósemjum, samráðingum og persónligum avgerðum.' } },
  { id: 'thin-ice', en: { saying: 'On thin ice', explanation: 'In a risky situation where one mistake may cause trouble.', origin: 'A winter image where unsafe ice becomes a picture of fragile security.' }, dk: { saying: 'På tynd is', explanation: 'I en risikabel situation, hvor én fejl kan skabe problemer.', origin: 'Et vinterbillede, hvor usikker is bliver et billede på skrøbelig tryghed.' }, fo: { saying: 'Á tunnari ís', explanation: 'Í einari vandamiklari støðu, har eitt mistak kann skapa trupulleikar.', origin: 'Ein vetrarmynd, har veikur ísur verður mynd fyri ótryggleika.' } },
  { id: 'slippery-slope', en: { saying: 'A slippery slope', explanation: 'A first step can lead toward worse consequences.', origin: 'A physical image of losing footing that became common in ethics, politics and everyday warnings.' }, dk: { saying: 'En glidebane', explanation: 'Et første skridt kan føre mod værre konsekvenser.', origin: 'Et fysisk billede på at miste fodfæste, brugt i etik, politik og hverdagssprog.' }, fo: { saying: 'Ein hál brekka', explanation: 'Eitt fyrsta stig kann føra til verri avleiðingar.', origin: 'Ein fysisk mynd av at missa fótafesti, brúkt um ávaringar og val.' } },
  { id: 'uphill-battle', en: { saying: 'An uphill battle', explanation: 'A task is difficult because it goes against resistance.', origin: 'A terrain image where climbing makes effort visible.' }, dk: { saying: 'En kamp op ad bakke', explanation: 'En opgave er svær, fordi den møder modstand.', origin: 'Et terrænbillede, hvor stigning gør anstrengelsen synlig.' }, fo: { saying: 'Ein bardagi niðanbrekku', explanation: 'Ein uppgáva er trupul, tí hon møtir mótstøðu.', origin: 'Ein lendismynd, har brekkan ger stríðið sjónligt.' } },
  { id: 'downhill-from-here', en: { saying: 'It is downhill from here', explanation: 'After the hardest part, the rest may become easier.', origin: 'A road and terrain image that can mean easier progress or decline depending on context.' }, dk: { saying: 'Det går ned ad bakke herfra', explanation: 'Efter den sværeste del kan resten blive lettere.', origin: 'Et vej- og terrænbillede, som kan betyde lettere fremdrift eller forfald alt efter sammenhæng.' }, fo: { saying: 'Nú gongur tað omanbrekku', explanation: 'Eftir tann truplasta partin kann restin gerast lættari.', origin: 'Ein vegamynd, sum kann merkja bæði lættari ferð og afturgongd eftir samanhangi.' } },
  { id: 'keep-ball-rolling', en: { saying: 'Keep the ball rolling', explanation: 'Keep progress or conversation moving.', origin: 'A game and motion image used for maintaining momentum.' }, dk: { saying: 'Hold bolden i gang', explanation: 'Hold fremdrift eller samtale i bevægelse.', origin: 'Et spil- og bevægelsesbillede om at holde momentum.' }, fo: { saying: 'Halt bóltinum í gongd', explanation: 'Halt framgongd ella samrøðu gangandi.', origin: 'Ein spæl- og rørslumynd um at varðveita ferðina.' } },
  { id: 'drop-ball', en: { saying: 'Drop the ball', explanation: 'Fail to do your part or miss an important responsibility.', origin: 'A sports image where losing control of the ball becomes a picture of failure.' }, dk: { saying: 'Tabe bolden', explanation: 'At svigte sin del eller overse et vigtigt ansvar.', origin: 'Et sportsbillede, hvor mistet boldkontrol bliver billede på fejl.' }, fo: { saying: 'Missa bóltin', explanation: 'At svíkja sín part ella gloyma eina týdningarmikla ábyrgd.', origin: 'Ein ítróttarmynd, har mist tamarhald verður mynd fyri mistak.' } },
  { id: 'ball-in-court', en: { saying: 'The ball is in your court', explanation: 'It is now your turn to decide or act.', origin: 'A tennis image that became a general expression for responsibility passing to someone else.' }, dk: { saying: 'Bolden er på din banehalvdel', explanation: 'Nu er det din tur til at beslutte eller handle.', origin: 'Et tennisbillede, der blev et almindeligt udtryk for, at ansvaret går videre.' }, fo: { saying: 'Bólturin er á tínari hálvu', explanation: 'Nú er tað tín túrur at taka avgerð ella gera nakað.', origin: 'Ein tennismynd, sum gjørdist orðatak um, at ábyrgdin er farin víðari.' } },
  { id: 'goalposts-moved', en: { saying: 'The goalposts have been moved', explanation: 'The rules or expectations changed after the game began.', origin: 'A sports image used for unfair changes in standards or targets.' }, dk: { saying: 'Målstolperne er flyttet', explanation: 'Reglerne eller forventningerne ændrede sig, efter spillet var begyndt.', origin: 'Et sportsbillede om uretfærdige ændringer i mål eller krav.' }, fo: { saying: 'Málstólparnir eru fluttir', explanation: 'Reglurnar ella væntanirnar broyttust, eftir at spælið var byrjað.', origin: 'Ein ítróttarmynd um órættvísar broytingar í málum ella krøvum.' } },
  { id: 'level-playing-field', en: { saying: 'A level playing field', explanation: 'A fair situation where everyone has a comparable chance.', origin: 'A sports-field image that became common in business, law and politics.' }, dk: { saying: 'En lige spilleplade', explanation: 'En fair situation, hvor alle har nogenlunde samme chance.', origin: 'Et sportsbillede, der blev almindeligt i erhverv, jura og politik.' }, fo: { saying: 'Ein javnur leikvøllur', explanation: 'Ein rættvís støða, har øll hava nøkulunda sama møguleika.', origin: 'Ein ítróttarmynd, sum varð vanlig í vinnu, lóg og politikki.' } },
  { id: 'home-stretch', en: { saying: 'The home stretch', explanation: 'The final part of a task or journey.', origin: 'From horse racing, where the final straight leads toward the finish.' }, dk: { saying: 'Opløbsstrækningen', explanation: 'Den sidste del af en opgave eller rejse.', origin: 'Fra hestevæddeløb, hvor den sidste lige strækning fører mod mål.' }, fo: { saying: 'Síðsta teinurin heim', explanation: 'Síðsti parturin av einari uppgávu ella ferð.', origin: 'Frá rossakapping, har síðsta beina leiðin førir móti málinum.' } },
  { id: 'finish-line', en: { saying: 'Cross the finish line', explanation: 'Complete what you started.', origin: 'A race image that became a general metaphor for completion.' }, dk: { saying: 'Krydse målstregen', explanation: 'Gør det færdigt, du begyndte på.', origin: 'Et løbsbillede, der blev en generel metafor for afslutning.' }, fo: { saying: 'Fara um málstrikuna', explanation: 'Ger liðugt tað, tú byrjaði.', origin: 'Ein renningarmynd, sum gjørdist almenn mynd fyri at gera liðugt.' } },
  { id: 'marathon-not-sprint', en: { saying: 'It is a marathon, not a sprint', explanation: 'Some goals require endurance more than speed.', origin: 'A sports metaphor comparing long-term effort with short bursts.' }, dk: { saying: 'Det er et maraton, ikke en sprint', explanation: 'Nogle mål kræver udholdenhed mere end fart.', origin: 'En sportsmetafor, der sammenligner langsigtet indsats med korte ryk.' }, fo: { saying: 'Tað er eitt maraton, ikki ein sprintur', explanation: 'Nøkur mál krevja meira úthaldni enn ferð.', origin: 'Ein ítróttarmynd, sum samanber langt stríð við stuttar sprettir.' } },
  { id: 'learn-ropes', en: { saying: 'Learn the ropes', explanation: 'Learn how something works in practice.', origin: 'Often linked to sailing, where knowing the ropes was part of handling a ship.' }, dk: { saying: 'Lære rebene at kende', explanation: 'Lær hvordan noget fungerer i praksis.', origin: 'Ofte forbundet med sejlads, hvor kendskab til rebene var en del af at håndtere et skib.' }, fo: { saying: 'Læra reipini at kenna', explanation: 'Lær hvussu okkurt virkar í verki.', origin: 'Ofta knýtt at sigling, har kunnleiki til reipini var partur av at stýra skipi.' } },
  { id: 'know-ropes', en: { saying: 'Know the ropes', explanation: 'Understand the practical details of a place, job or system.', origin: 'A nautical image that became a workplace idiom.' }, dk: { saying: 'Kende rebene', explanation: 'Forstå de praktiske detaljer i et sted, job eller system.', origin: 'Et søfartsbillede, der blev et arbejdsudtryk.' }, fo: { saying: 'Kenna reipini', explanation: 'Skilja praktisku smálutirnar í einum staði, arbeiði ella skipan.', origin: 'Ein sjóferðarmynd, sum gjørdist arbeiðsmálsligt orðatak.' } },
  { id: 'loose-cannon', en: { saying: 'A loose cannon', explanation: 'An unpredictable person can cause damage to everyone nearby.', origin: 'From ships, where an unsecured cannon rolling on deck was extremely dangerous.' }, dk: { saying: 'En løs kanon', explanation: 'En uforudsigelig person kan skade alle omkring sig.', origin: 'Fra skibe, hvor en kanon uden fastgørelse kunne rulle farligt rundt på dækket.' }, fo: { saying: 'Ein leys kanón', explanation: 'Ein óvæntaður persónur kann gera skaða á øll rundan um seg.', origin: 'Frá skipum, har ein óbundin kanón á dekkinum var sera vandamikil.' } },
  { id: 'anchor-yourself', en: { saying: 'Anchor yourself before the storm', explanation: 'Stabilize what matters before pressure arrives.', origin: 'A modern nautical image based on anchoring a vessel before rough weather.' }, dk: { saying: 'Kast anker før stormen', explanation: 'Skab stabilitet omkring det vigtige, før presset kommer.', origin: 'Et moderne søbillede baseret på at ankre et fartøj før hårdt vejr.' }, fo: { saying: 'Kasta akker undan storminum', explanation: 'Ger tað týdningarmikla støðugt, áðrenn trýstið kemur.', origin: 'Ein nútímans sjómynd um at ankra, áðrenn ringt veður kemur.' } },
  { id: 'compass-map', en: { saying: 'A compass is not a map', explanation: 'Direction helps, but it does not replace detailed knowledge.', origin: 'A modern navigation saying that separates orientation from planning.' }, dk: { saying: 'Et kompas er ikke et kort', explanation: 'Retning hjælper, men erstatter ikke detaljeret viden.', origin: 'Et moderne navigationsordsprog, der skelner mellem orientering og planlægning.' }, fo: { saying: 'Eitt kumpass er ikki eitt kort', explanation: 'Kós hjálpir, men hon kemur ikki í staðin fyri nágreiniliga vitan.', origin: 'Ein nútímans siglingar- og ferðamynd um munin á kós og ætlan.' } },
  { id: 'map-not-territory', en: { saying: 'The map is not the territory', explanation: 'A model of reality is never the same as reality itself.', origin: 'Associated with Alfred Korzybski and general semantics in the twentieth century.' }, dk: { saying: 'Kortet er ikke terrænet', explanation: 'En model af virkeligheden er aldrig det samme som virkeligheden selv.', origin: 'Forbundet med Alfred Korzybski og general semantics i det tyvende århundrede.' }, fo: { saying: 'Kortið er ikki lendið', explanation: 'Ein myndil av veruleikanum er ongantíð tað sama sum veruleikin sjálvur.', origin: 'Knýtt at Alfred Korzybski og hugsanum um mál og veruleika í 1900-talinum.' } },
  { id: 'north-star', en: { saying: 'Follow your north star', explanation: 'Use a clear guiding principle when choices become confusing.', origin: 'A navigation image from the North Star as a fixed point for direction.' }, dk: { saying: 'Følg din nordstjerne', explanation: 'Brug et klart princip som vejviser, når valg bliver forvirrende.', origin: 'Et navigationsbillede fra Nordstjernen som fast punkt for retning.' }, fo: { saying: 'Fylg norðstjørnuni hjá tær', explanation: 'Brúka eina greiða meginreglu, tá valini gerast ógreið.', origin: 'Ein navigatiónsmynd frá norðstjørnuni sum føstum kósarpunkti.' } },
  { id: 'plant-seed', en: { saying: 'Plant a seed', explanation: 'Begin something small that may grow later.', origin: 'A farming and gardening image used for ideas, relationships and plans.' }, dk: { saying: 'Plant et frø', explanation: 'Begynd noget småt, som kan vokse senere.', origin: 'Et landbrugs- og havebillede brugt om idéer, relationer og planer.' }, fo: { saying: 'Set eitt fræ niður', explanation: 'Byrja okkurt lítið, sum kann vaksa seinni.', origin: 'Ein landbúnaðar- og havamynd brúkt um hugskot, sambond og ætlanir.' } },
  { id: 'mighty-oaks-acorns', en: { saying: 'Mighty oaks from little acorns grow', explanation: 'Large achievements can begin from very small starts.', origin: 'An old English proverb from tree growth, often used about patience and development.' }, dk: { saying: 'Store egetræer vokser af små agern', explanation: 'Store resultater kan begynde meget småt.', origin: 'Et gammelt engelsk træbillede om tålmodighed og udvikling.' }, fo: { saying: 'Stór eik veksur úr lítlum akorni', explanation: 'Stór úrslit kunnu byrja sera smátt.', origin: 'Ein gomul ensk træmynd um tol og menning.' } },
  { id: 'fruit-of-labor', en: { saying: 'The fruit of your labor', explanation: 'The result or reward of sustained effort.', origin: 'An agricultural image used in biblical, literary and everyday language.' }, dk: { saying: 'Frugten af dit arbejde', explanation: 'Resultatet eller belønningen af vedholdende indsats.', origin: 'Et landbrugsbillede brugt i bibelsk, litterært og hverdagsligt sprog.' }, fo: { saying: 'Fruktin av arbeiði tínum', explanation: 'Úrslitið ella lønin fyri støðuga roynd.', origin: 'Ein landbúnaðarmynd brúkt í bíbilskum, bókmentaligum og gerandismáli.' } },
  { id: 'thorn-side', en: { saying: 'A thorn in your side', explanation: 'A persistent irritation or problem.', origin: 'From biblical language and the physical image of a painful thorn.' }, dk: { saying: 'En torn i siden', explanation: 'En vedvarende irritation eller et tilbagevendende problem.', origin: 'Fra bibelsk sprog og det fysiske billede af en smertefuld torn.' }, fo: { saying: 'Ein tornur í síðuni', explanation: 'Ein støðug irritatión ella afturvendandi trupulleiki.', origin: 'Úr bíbilskum máli og myndini av einum pínufullum torni.' } },
  { id: 'olive-branch', en: { saying: 'Extend an olive branch', explanation: 'Offer peace or reconciliation.', origin: 'From ancient Mediterranean symbolism, where the olive branch represented peace.' }, dk: { saying: 'Række en olivengren frem', explanation: 'Tilbyd fred eller forsoning.', origin: 'Fra gammel middelhavssymbolik, hvor olivengrenen stod for fred.' }, fo: { saying: 'Rætta eina oljugrein fram', explanation: 'Bjóða frið ella semju.', origin: 'Úr gomlum miðjarhavssymbolikki, har oljugreinin stóð fyri friði.' } },
  { id: 'branch-out', en: { saying: 'Branch out', explanation: 'Expand into new areas or try something different.', origin: 'A tree image where growth moves outward from the trunk.' }, dk: { saying: 'Forgrene sig', explanation: 'Udvid til nye områder eller prøv noget andet.', origin: 'Et træbillede, hvor vækst bevæger sig ud fra stammen.' }, fo: { saying: 'Greina seg út', explanation: 'Vaksa inn á nýggj øki ella royna okkurt annað.', origin: 'Ein træmynd, har vøkstur fer út frá bulinum.' } },
  { id: 'bend-not-break', en: { saying: 'Bend, do not break', explanation: 'Flexibility can help you survive pressure.', origin: 'A reed-and-tree style image found in old fables and modern resilience sayings.' }, dk: { saying: 'Bøj, men knæk ikke', explanation: 'Fleksibilitet kan hjælpe dig gennem pres.', origin: 'Et siv-og-træ-billede kendt fra gamle fabler og moderne ord om modstandskraft.' }, fo: { saying: 'Boygg teg, men brotna ikki', explanation: 'Sveiggj kann hjálpa tær at standa ímóti trýsti.', origin: 'Ein mynd av sevum og trøum úr gomlum fáblahevd og nútímans mótstøðuspráki.' } },
  { id: 'sharpen-axe', en: { saying: 'Sharpen the axe before you cut the tree', explanation: 'Preparation can matter more than rushing into work.', origin: 'A tool image often linked to planning sayings and sometimes misattributed to Abraham Lincoln.' }, dk: { saying: 'Slib øksen før du fælder træet', explanation: 'Forberedelse kan betyde mere end at skynde sig i gang.', origin: 'Et værktøjsbillede ofte knyttet til planlægningsordsprog og fejlagtigt tilskrevet Abraham Lincoln.' }, fo: { saying: 'Brýn øksina, áðrenn tú fellir træið', explanation: 'Fyrireiking kann hava størri týdning enn at skunda sær í gongd.', origin: 'Ein amboðsmýnd, ofta knýtt at ráðlegging og viðhvørt skeivt tillutað Abraham Lincoln.' } },
  { id: 'hammer-nail', en: { saying: 'If all you have is a hammer, everything looks like a nail', explanation: 'People tend to use the tools and ideas they already know, even when they do not fit.', origin: 'A modern tool proverb associated with Abraham Maslow and systems thinking.' }, dk: { saying: 'Hvis alt du har er en hammer, ligner alt et søm', explanation: 'Folk bruger ofte de værktøjer og idéer, de allerede kender, også når de ikke passer.', origin: 'Et moderne værktøjsordsprog forbundet med Abraham Maslow og systemtænkning.' }, fo: { saying: 'Um alt tú hevur er ein hamari, sær alt út sum ein seymur', explanation: 'Fólk nýta ofta tey amboð og hugskot, tey longu kenna, hóast tey ikki hóska.', origin: 'Eitt nútímans amboðsprðatak knýtt at Abraham Maslow og skipanarhugsan.' } },
  { id: 'tool-for-job', en: { saying: 'Use the right tool for the job', explanation: 'The method should fit the task.', origin: 'A workshop proverb that became a general rule for practical thinking.' }, dk: { saying: 'Brug det rette værktøj til opgaven', explanation: 'Metoden skal passe til opgaven.', origin: 'Et værkstedsordsprog, der blev en generel regel for praktisk tænkning.' }, fo: { saying: 'Brúka rætta amboðið til uppgávuna', explanation: 'Hátturin skal hóska til uppgávuna.', origin: 'Eitt verkstaðarorðatak, sum gjørdist almenn regla fyri praktiska hugsan.' } },
  { id: 'too-close-sun', en: { saying: 'Do not fly too close to the sun', explanation: 'Ambition can become dangerous when it ignores limits.', origin: 'From the Greek myth of Icarus, whose wax wings melted when he flew too high.' }, dk: { saying: 'Flyv ikke for tæt på solen', explanation: 'Ambition kan blive farlig, når den ignorerer grænser.', origin: 'Fra den græske myte om Ikaros, hvis voksvinger smeltede, da han fløj for højt.' }, fo: { saying: 'Flúgv ikki ov nær sólini', explanation: 'Ambitión kann gerast vandamikil, tá hon gloymir mørk.', origin: 'Úr griksku søgnini um Ikaros, hvørs vøksveingir bráðnaðu, tá hann fleyg ov høgt.' } },
  { id: 'pandoras-box', en: { saying: 'Open Pandora’s box', explanation: 'Start something that releases many unexpected problems.', origin: 'From Greek mythology, where Pandora opens a container and releases troubles into the world.' }, dk: { saying: 'Åbne Pandoras æske', explanation: 'Starte noget, der slipper mange uventede problemer løs.', origin: 'Fra græsk mytologi, hvor Pandora åbner en beholder og slipper ulykker ud i verden.' }, fo: { saying: 'Lata Pandoru eskið upp', explanation: 'Byrja nakað, sum sleppir nógvum óvæntaðum trupulleikum leysum.', origin: 'Úr grikskari gudalæru, har Pandora letur ein ílat upp og sleppir ólukku út.' } },
  { id: 'achilles-heel', en: { saying: 'Achilles’ heel', explanation: 'One small weakness can make a strong person or system vulnerable.', origin: 'From Greek myth: Achilles was nearly invulnerable except for his heel.' }, dk: { saying: 'Akilleshæl', explanation: 'Én lille svaghed kan gøre en stærk person eller et system sårbart.', origin: 'Fra græsk myte: Akilles var næsten usårlig bortset fra hælen.' }, fo: { saying: 'Akillesar hælur', explanation: 'Ein lítil veikleiki kann gera ein sterkan persón ella skipan viðbrekna.', origin: 'Úr grikskari søgn: Akilles var næstan ósárbarur uttan í hælinum.' } },
  { id: 'sour-grapes', en: { saying: 'Sour grapes', explanation: 'People sometimes pretend not to want what they cannot have.', origin: 'From Aesop’s fable of the fox who says unreachable grapes must be sour.' }, dk: { saying: 'Sure druer', explanation: 'Folk lader nogle gange som om, de ikke vil have det, de ikke kan få.', origin: 'Fra Æsops fabel om ræven, der siger, at de uopnåelige druer nok er sure.' }, fo: { saying: 'Súr vínber', explanation: 'Fólk lata viðhvørt sum um tey ikki vilja hava tað, tey ikki kunnu fáa.', origin: 'Úr fábli hjá Esopi um rev, sum sigur, at vínberini helst eru súr.' } },
  { id: 'golden-goose', en: { saying: 'Do not kill the goose that lays the golden eggs', explanation: 'Do not destroy a source of long-term value for short-term gain.', origin: 'From Aesop’s fable about greed ruining the source of wealth.' }, dk: { saying: 'Slagt ikke gåsen der lægger guldæg', explanation: 'Ødelæg ikke en kilde til langsigtet værdi for kortsigtet gevinst.', origin: 'Fra Æsops fabel om grådighed, der ødelægger kilden til rigdom.' }, fo: { saying: 'Drep ikki gásina, sum verpur gullegg', explanation: 'Oyðilegg ikki eina keldu til langtíðarvirði fyri stuttan vinning.', origin: 'Úr fábli hjá Esopi um grammleika, sum oyðileggur ríkidømisins keldu.' } },
  { id: 'snake-grass', en: { saying: 'A snake in the grass', explanation: 'A hidden danger or deceitful person may be close by.', origin: 'From ancient and later European imagery of danger concealed in harmless-looking grass.' }, dk: { saying: 'En slange i græsset', explanation: 'En skjult fare eller bedragerisk person kan være tæt på.', origin: 'Fra antikke og senere europæiske billeder af fare skjult i uskyldigt græs.' }, fo: { saying: 'Ein slanga í grasinum', explanation: 'Ein fjaldur vandi ella svikafullur persónur kann vera nær.', origin: 'Úr gomlum evropeiskum myndum av vanda, sum fjalir seg í grasinum.' } },
  { id: 'red-herring', en: { saying: 'A red herring', explanation: 'A distracting clue or argument can lead attention away from the real issue.', origin: 'Often linked to strong-smelling smoked fish and trail imagery, though the exact story is debated.' }, dk: { saying: 'En rød sild', explanation: 'Et vildledende spor eller argument kan flytte opmærksomheden fra det egentlige problem.', origin: 'Forbindes ofte med stærkt lugtende røget fisk og falske spor, men historien er omdiskuteret.' }, fo: { saying: 'Ein reyð sild', explanation: 'Eitt villleiðandi spor ella argument kann flyta uppmerksemið frá veruliga málinum.', origin: 'Ofta knýtt at roykta fiski og følskum slóðum, men søgan er umrødd.' } },
  { id: 'white-elephant', en: { saying: 'A white elephant', explanation: 'Something expensive to keep but difficult to use or get rid of.', origin: 'From stories of rare white elephants in Southeast Asia, whose upkeep could be ruinous.' }, dk: { saying: 'En hvid elefant', explanation: 'Noget dyrt at beholde, men svært at bruge eller slippe af med.', origin: 'Fra fortællinger om sjældne hvide elefanter i Sydøstasien, som var dyre at holde.' }, fo: { saying: 'Ein hvítur elefantur', explanation: 'Okkurt dýrt at hava, men torført at brúka ella sleppa av við.', origin: 'Frá søgum um sjáldsamar hvítar elefantar í Suðureysturasia, sum vóru dýrir at halda.' } },
  { id: 'paper-tiger', en: { saying: 'A paper tiger', explanation: 'Something that looks threatening but has little real power.', origin: 'A Chinese expression made widely known in twentieth-century political language.' }, dk: { saying: 'En papirtiger', explanation: 'Noget der ser truende ud, men har lille reel magt.', origin: 'Et kinesisk udtryk, der blev bredt kendt i det tyvende århundredes politiske sprog.' }, fo: { saying: 'Ein pappírstikari', explanation: 'Okkurt sum sær hóttandi út, men hevur lítið veruligt vald.', origin: 'Eitt kinesiskt orðatak, sum gjørdist kent í politiskum máli í 1900-talinum.' } },
  { id: 'needle-haystack', en: { saying: 'A needle in a haystack', explanation: 'Something is extremely hard to find among many similar things.', origin: 'A rural image of a tiny object lost inside a large mass of hay.' }, dk: { saying: 'En nål i en høstak', explanation: 'Noget er ekstremt svært at finde blandt mange lignende ting.', origin: 'Et landligt billede af en lille genstand tabt i en stor mængde hø.' }, fo: { saying: 'Ein nál í hoyrúgvu', explanation: 'Okkurt er sera torført at finna millum nógv líknandi.', origin: 'Ein landlig mynd av einum lítlum luti, sum er mistur í nógvum hoyggi.' } },
  { id: 'thread-needle', en: { saying: 'Thread the needle', explanation: 'Find a narrow path through difficult constraints.', origin: 'A sewing image used for precision in politics, work and problem-solving.' }, dk: { saying: 'Tråde nålen', explanation: 'Find en smal vej gennem svære begrænsninger.', origin: 'Et sybillede brugt om præcision i politik, arbejde og problemløsning.' }, fo: { saying: 'Træða nálina', explanation: 'Finna eina tronga leið gjøgnum truplar avmarkingar.', origin: 'Ein seymimynd brúkt um neyvleika í politikki, arbeiði og loysnum.' } },
  { id: 'fabric-life', en: { saying: 'The fabric of life', explanation: 'Life is made from many threads woven together.', origin: 'A textile metaphor that turns relationships and events into woven material.' }, dk: { saying: 'Livets væv', explanation: 'Livet består af mange tråde vævet sammen.', origin: 'En tekstilmetafor, hvor relationer og begivenheder bliver til vævet stof.' }, fo: { saying: 'Lívsins vevnaður', explanation: 'Lívið er gjørt av nógvum tráðum, sum eru vovnir saman.', origin: 'Ein tekstilmynd, har sambond og hendingar verða til vovin evni.' } },
  { id: 'loose-thread', en: { saying: 'Pull one loose thread and the whole sweater unravels', explanation: 'A small weakness can reveal or undo a larger structure.', origin: 'A modern textile image built from the everyday experience of unraveling fabric.' }, dk: { saying: 'Træk i én løs tråd, og hele trøjen går op', explanation: 'En lille svaghed kan afsløre eller opløse en større struktur.', origin: 'Et moderne tekstilbillede fra den hverdagslige erfaring med stof, der trevler op.' }, fo: { saying: 'Toga í ein leysan tráð, og øll troyggjan raknar', explanation: 'Ein lítil veikleiki kann vísa ella loysa eina størri skipan.', origin: 'Ein nútímans tekstilmynd úr royndini av klæðum, sum rakna.' } },
  { id: 'stitch-time', en: { saying: 'A stitch in time saves nine', explanation: 'A small repair now can prevent a much bigger problem later.', origin: 'A sewing proverb about early maintenance and prevention.' }, dk: { saying: 'Et sting i tide sparer ni', explanation: 'En lille reparation nu kan forhindre et langt større problem senere.', origin: 'Et syordsprog om tidlig vedligeholdelse og forebyggelse.' }, fo: { saying: 'Eitt sting í tøkum tíma sparir níggju', explanation: 'Ein lítil umvæling nú kann forða einum størri trupulleika seinni.', origin: 'Eitt seymiorðatak um tíðliga røkt og fyribyrging.' } },
  { id: 'patch-not-whole', en: { saying: 'A patch is not the whole coat', explanation: 'One fix does not solve every weakness in a larger system.', origin: 'A clothing image adapted into a modern practical proverb.' }, dk: { saying: 'En lap er ikke hele frakken', explanation: 'Én rettelse løser ikke alle svagheder i et større system.', origin: 'Et tøjbillede bearbejdet til et moderne praktisk ordsprog.' }, fo: { saying: 'Ein bøt er ikki allur frakkin', explanation: 'Ein rætting loysir ikki allar veikleikar í einari størri skipan.', origin: 'Ein klæðamynd lagað til eitt nútímans praktiskt orðatak.' } },
  { id: 'wear-many-hats', en: { saying: 'Wear many hats', explanation: 'Have many different roles or responsibilities.', origin: 'A clothing image where each hat represents a different public role.' }, dk: { saying: 'Have mange hatte på', explanation: 'Have mange forskellige roller eller ansvar.', origin: 'Et tøjbillede, hvor hver hat står for en forskellig rolle.' }, fo: { saying: 'Hava nógvar hattar á', explanation: 'Hava nógvar ymiskar leiklutir ella ábyrgdir.', origin: 'Ein klæðamynd, har hvør hattur stendur fyri ein leiklut.' } },
  { id: 'fit-like-glove', en: { saying: 'Fit like a glove', explanation: 'Fit perfectly or feel exactly right.', origin: 'A clothing image from a glove shaped closely to the hand.' }, dk: { saying: 'Passe som hånd i handske', explanation: 'Passe perfekt eller føles helt rigtigt.', origin: 'Et beklædningsbillede fra en handske, der former sig efter hånden.' }, fo: { saying: 'Hóska sum hond í handskar', explanation: 'Hóska fullkomiliga ella kennast heilt rætt.', origin: 'Ein klæðamynd frá handskum, sum laga seg eftir hondini.' } },
  { id: 'shoes-to-fill', en: { saying: 'Big shoes to fill', explanation: 'A new person must live up to a strong predecessor.', origin: 'A clothing image where another person’s shoes represent their role and reputation.' }, dk: { saying: 'Store sko at udfylde', explanation: 'En ny person skal leve op til en stærk forgænger.', origin: 'Et tøjbillede, hvor en andens sko står for rolle og ry.' }, fo: { saying: 'Stórar skógvar at fylla', explanation: 'Ein nýggjur persónur skal liva upp til ein sterkan undanmann.', origin: 'Ein klæðamynd, har skógvarnir hjá øðrum standa fyri leiklut og umdømi.' } },
  { id: 'walk-mile-shoes', en: { saying: 'Walk a mile in someone else’s shoes', explanation: 'Try to understand another person’s experience before judging them.', origin: 'A modern empathy proverb built from the image of literally walking in another person’s place.' }, dk: { saying: 'Gå en mil i en andens sko', explanation: 'Prøv at forstå en andens erfaring, før du dømmer dem.', origin: 'Et moderne empatiordsprog bygget på billedet af at gå i en andens sted.' }, fo: { saying: 'Gang eina míl í skógvunum hjá øðrum', explanation: 'Royn at skilja royndirnar hjá øðrum, áðrenn tú dømir tey.', origin: 'Eitt nútímans orðatak um samkenslu, bygt á myndina av at ganga í staðin hjá øðrum.' } },
  { id: 'heart-sleeve', en: { saying: 'Wear your heart on your sleeve', explanation: 'Show your feelings openly.', origin: 'The phrase is often linked to medieval and Shakespearean language about displaying devotion openly.' }, dk: { saying: 'Bære hjertet uden på tøjet', explanation: 'Vise sine følelser åbent.', origin: 'Udtrykket knyttes ofte til middelalderligt og Shakespeareansk sprog om at vise hengivenhed.' }, fo: { saying: 'Bera hjartað uttan á ermuni', explanation: 'Vísa kenslur sínar opið.', origin: 'Orðingin verður ofta knýtt at miðaldarligum og Shakespeareanskum máli um opna trúfesti.' } },
  { id: 'keep-cards-close', en: { saying: 'Keep your cards close to your chest', explanation: 'Do not reveal your plans or advantages too early.', origin: 'A card-playing image where hidden cards protect strategy.' }, dk: { saying: 'Hold kortene tæt til kroppen', explanation: 'Afslør ikke dine planer eller fordele for tidligt.', origin: 'Et kortspilsbillede, hvor skjulte kort beskytter strategien.' }, fo: { saying: 'Halt kortini tætt at bringuni', explanation: 'Avdúka ikki ætlanir ella fyrimunir ov tíðliga.', origin: 'Ein kortspælsmynd, har fjald kort verja ætlanina.' } },
  { id: 'play-hand-dealt', en: { saying: 'Play the hand you are dealt', explanation: 'Work with the situation you have, not the one you wish you had.', origin: 'A card-playing image that became a proverb about acceptance and action.' }, dk: { saying: 'Spil de kort du har fået', explanation: 'Arbejd med den situation du har, ikke den du ville ønske du havde.', origin: 'Et kortspilsbillede, der blev et ordsprog om accept og handling.' }, fo: { saying: 'Spæl tey kortini, tú hevur fingið', explanation: 'Arbeið við støðuni, tú hevur, ikki henni tú ynskir tær.', origin: 'Ein kortspælsmynd, sum gjørdist orðatak um at góðtaka og gera nakað.' } },
  { id: 'ace-up-sleeve', en: { saying: 'Have an ace up your sleeve', explanation: 'Keep a hidden advantage for the right moment.', origin: 'A card-playing image of a concealed winning card.' }, dk: { saying: 'Have et es i ærmet', explanation: 'Gem en skjult fordel til det rigtige øjeblik.', origin: 'Et kortspilsbillede af et skjult vinderkort.' }, fo: { saying: 'Hava eitt ess í ermuni', explanation: 'Goym ein fjaldan fyrimun til røttu løtuna.', origin: 'Ein kortspælsmynd av einum fjaldum vinnarakorti.' } },
  { id: 'house-of-cards', en: { saying: 'A house of cards', explanation: 'A fragile structure may collapse if one part fails.', origin: 'A playing-card image where balance looks impressive but is easily disturbed.' }, dk: { saying: 'Et korthus', explanation: 'En skrøbelig struktur kan falde sammen, hvis én del svigter.', origin: 'Et kortspilsbillede, hvor balancen ser imponerende ud, men let forstyrres.' }, fo: { saying: 'Eitt korthús', explanation: 'Ein viðbrekin bygnaður kann rapa, um ein partur svíkur.', origin: 'Ein kortspælsmynd, har javnvágin sær flott út, men lættliga verður órógvað.' } },
  { id: 'cards-on-table', en: { saying: 'Put your cards on the table', explanation: 'Be open about your intentions, facts or position.', origin: 'A card-playing image where hidden information becomes visible to everyone.' }, dk: { saying: 'Læg kortene på bordet', explanation: 'Vær åben om dine intentioner, fakta eller position.', origin: 'Et kortspilsbillede, hvor skjult information bliver synlig for alle.' }, fo: { saying: 'Legg kortini á borðið', explanation: 'Ver opin um ætlanir, fakta ella støðu tína.', origin: 'Ein kortspælsmynd, har fjald kunning verður sjónlig fyri øll.' } },
  { id: 'roll-dice', en: { saying: 'Roll the dice', explanation: 'Take a chance when the result is uncertain.', origin: 'A gaming image that became a broad metaphor for risk.' }, dk: { saying: 'Kaste terningerne', explanation: 'Tage en chance, når resultatet er usikkert.', origin: 'Et spilbillede, der blev en bred metafor for risiko.' }, fo: { saying: 'Kasta terningarnar', explanation: 'Taka ein møguleika, tá úrslitið er óvist.', origin: 'Ein spælimynd, sum gjørdist ein breið mynd fyri váða.' } },
  { id: 'loaded-dice', en: { saying: 'Loaded dice', explanation: 'A situation may look fair while the outcome is secretly biased.', origin: 'From gambling, where altered dice make the game unfair.' }, dk: { saying: 'Ladede terninger', explanation: 'En situation kan se fair ud, mens udfaldet i hemmelighed er skævt.', origin: 'Fra hasardspil, hvor manipulerede terninger gør spillet uretfærdigt.' }, fo: { saying: 'Løddir terningar', explanation: 'Ein støða kann síggja rættvís út, hóast úrslitið er loyniliga skeivt.', origin: 'Frá spæli, har broyttir terningar gera spælið órættvíst.' } },
  { id: 'double-edged-sword', en: { saying: 'A double-edged sword', explanation: 'Something can help and harm at the same time.', origin: 'A weapon image known from ancient and biblical language.' }, dk: { saying: 'Et tveægget sværd', explanation: 'Noget kan hjælpe og skade på samme tid.', origin: 'Et våbenbillede kendt fra antikt og bibelsk sprog.' }, fo: { saying: 'Eitt tvíeggjað svørð', explanation: 'Okkurt kann hjálpa og skaða í senn.', origin: 'Ein vápnamynd kend úr fornari og bíbilskari málhevd.' } },
  { id: 'cut-gordian-knot', en: { saying: 'Cut the Gordian knot', explanation: 'Solve a complicated problem with a bold simple action.', origin: 'From the legend of Alexander the Great cutting an impossible knot instead of untying it.' }, dk: { saying: 'Hugge den gordiske knude over', explanation: 'Løs et kompliceret problem med en dristig enkel handling.', origin: 'Fra sagnet om Alexander den Store, der huggede en umulig knude over i stedet for at binde den op.' }, fo: { saying: 'Høgga gordiska knútin av', explanation: 'Loys ein fløktan trupulleika við einari djørvari einfaldari gerð.', origin: 'Úr søgnini um Aleksander Mikla, sum høgdi ein óloysiligan knút av.' } },
  { id: 'tied-up-knots', en: { saying: 'Tied up in knots', explanation: 'Confusion, worry or complexity can make action difficult.', origin: 'A rope image where tangled knots stand for mental or practical difficulty.' }, dk: { saying: 'Bundet i knuder', explanation: 'Forvirring, bekymring eller kompleksitet kan gøre handling svær.', origin: 'Et reb-billede, hvor sammenfiltrede knuder står for mental eller praktisk vanskelighed.' }, fo: { saying: 'Bundin í knútar', explanation: 'Ógreiða, stúran ella fløkja kann gera gerð trupla.', origin: 'Ein reipismynd, har fløktir knútar standa fyri trupulleikum.' } },
  { id: 'black-swan', en: { saying: 'A black swan', explanation: 'A rare and unexpected event can change the whole situation.', origin: 'The old European phrase meant something thought impossible, because Europeans assumed all swans were white. After black swans were found in Australia, the image became a proverb about rare surprises.' }, dk: { saying: 'En sort svane', explanation: 'En sjælden og uventet hændelse kan ændre hele situationen.', origin: 'Det gamle europæiske udtryk betød noget, man troede var umuligt, fordi man antog at alle svaner var hvide. Efter sorte svaner blev kendt fra Australien, blev billedet brugt om sjældne overraskelser.' }, fo: { saying: 'Ein svartur svanur', explanation: 'Ein sjáldsom og óvæntað hending kann broyta alla støðuna.', origin: 'Gamla evropeiska myndin merkti okkurt, sum varð hildið vera ómøguligt, tí fólk hildu allar svanir vera hvítar. Seinni varð hon brúkt um sjáldsamar broytingar.' } },
  { id: 'open-door', en: { saying: 'When one door closes, another opens', explanation: 'A lost opportunity may make room for a new one.', origin: 'A doorway image common in modern motivational language, often linked to Alexander Graham Bell though the attribution is uncertain.' }, dk: { saying: 'Når én dør lukkes, åbnes en anden', explanation: 'En tabt mulighed kan give plads til en ny.', origin: 'Et dørbillede udbredt i moderne motivationssprog og ofte knyttet til Alexander Graham Bell, selv om tilskrivningen er usikker.' }, fo: { saying: 'Tá ein hurð letur aftur, letur onnur upp', explanation: 'Ein mistur møguleiki kann geva pláss fyri einum nýggjum.', origin: 'Ein hurðarmynd, sum er vanlig í nútímans eggjandi máli og ofta knýtt at Alexander Graham Bell, hóast tað er óvist.' } },
  { id: 'glass-half-full', en: { saying: 'The glass is half full', explanation: 'The same situation can be seen through hope instead of lack.', origin: 'A modern everyday image used to contrast optimism and pessimism.' }, dk: { saying: 'Glasset er halvt fuldt', explanation: 'Den samme situation kan ses gennem håb i stedet for mangel.', origin: 'Et moderne hverdagsbillede brugt til at skelne mellem optimisme og pessimisme.' }, fo: { saying: 'Glasið er hálvfult', explanation: 'Sama støða kann síggjast gjøgnum vón heldur enn trot.', origin: 'Ein nútímans gerandismynd brúkt um munin millum vón og vónloysi.' } },
  { id: 'common-thread', en: { saying: 'Find the common thread', explanation: 'Look for the shared pattern connecting different things.', origin: 'A textile image where separate pieces become understandable through one thread running through them.' }, dk: { saying: 'Find den røde tråd', explanation: 'Led efter det fælles mønster, der forbinder forskellige ting.', origin: 'Et tekstilbillede, hvor adskilte dele bliver forståelige gennem én gennemgående tråd.' }, fo: { saying: 'Finn reyða tráðin', explanation: 'Leita eftir felags mynstrinum, sum bindur ymisk ting saman.', origin: 'Ein tekstilmynd, har ymiskir partar verða skildir gjøgnum ein tráð, sum gongur ígjøgnum.' } },
  { id: 'sword-damocles', en: { saying: 'The sword of Damocles', explanation: 'A visible threat can hang over even a powerful or comfortable position.', origin: 'From a Greek story in which Damocles sits in luxury while a sword hangs above him by a single hair.' }, dk: { saying: 'Damoklessværdet', explanation: 'En synlig trussel kan hænge over selv en magtfuld eller komfortabel position.', origin: 'Fra en græsk fortælling, hvor Damokles sidder i luksus, mens et sværd hænger over ham i et enkelt hår.' }, fo: { saying: 'Damoklesar svørð', explanation: 'Ein sjónlig hóttan kann hanga yvir sjálvt einari sterkari ella tryggari støðu.', origin: 'Úr grikskari søgu, har Damokles situr í luksus, meðan eitt svørð hongur yvir honum í einum hári.' } },
  { id: 'broken-clock', en: { saying: 'A broken clock is right twice a day', explanation: 'Even an unreliable source can sometimes be correct by accident.', origin: 'A clock image used in modern argument and everyday speech to separate truth from reliability.' }, dk: { saying: 'Et gået-i-stå ur viser rigtigt to gange i døgnet', explanation: 'Selv en upålidelig kilde kan nogle gange ramme rigtigt ved et tilfælde.', origin: 'Et urbillede brugt i argumentation og hverdagssprog til at skelne mellem sandhed og pålidelighed.' }, fo: { saying: 'Ein steðgað klokka vísir rætt tvær ferðir um dagin', explanation: 'Sjálvt ein óálítandi kelda kann viðhvørt hava rætt av tilvild.', origin: 'Ein klokkumynd brúkt í kjaki og gerandismáli um munin á sannleika og áliti.' } }
];

const categoryById = {
  'better-late-than-never': 'wisdom',
  'actions-speak-louder': 'work',
  'dont-judge-book': 'wisdom',
  'two-birds-one-stone': 'work',
  'elephant-room': 'wisdom',
  'all-eggs-one-basket': 'wisdom',
  'early-bird': 'work',
  'practice-perfect': 'work',
  'rome-not-built-day': 'work',
  'no-smoke-without-fire': 'wisdom',
  'old-habits-die-hard': 'life',
  'strike-iron-hot': 'work',
  'too-many-cooks': 'humour',
  'look-before-leap': 'wisdom',
  'many-hands-light-work': 'work',
  'honesty-best-policy': 'wisdom',
  'time-flies': 'life',
  'you-live-and-learn': 'life',
  'easy-come-easy-go': 'life',
  'no-pain-no-gain': 'work',
  'silence-golden': 'wisdom',
  'knowledge-power': 'wisdom',
  'all-that-glitters': 'wisdom',
  'blood-thicker-water': 'life',
  'walls-have-ears': 'wisdom',
  'love-blind': 'love',
  'necessity-invention': 'work',
  'where-theres-will': 'work',
  'nothing-ventured': 'work',
  'empty-vessels': 'wisdom',
  'slow-steady': 'work',
  'every-beginning-hard': 'life',
  'like-father-son': 'life',
  'out-of-sight': 'love',
  'one-swallow': 'weather',
  'opposites-attract': 'love',
  'patience-virtue': 'wisdom',
  'truth-will-out': 'wisdom',
  'haste-makes-waste': 'work',
  'better-safe-than-sorry': 'wisdom',
  'birds-feather': 'life',
  'better-one-bird': 'sea',
  'after-rain-sun': 'weather',
  'pick-your-brain': 'slang',
  'bone-to-pick': 'slang',
  'break-the-ice': 'life',
  'spill-the-beans': 'slang',
  'bite-the-bullet': 'work',
  'under-the-weather': 'weather',
  'blessing-in-disguise': 'biblical',
  'good-samaritan': 'biblical',
  'forbidden-fruit': 'biblical',
  'scapegoat': 'biblical',
  'skin-of-teeth': 'biblical',
  'no-brainer': 'slang',
  'hangry': 'slang',
  'ghost-someone': 'slang',
  'throw-shade': 'slang',
  'hold-your-horses': 'life',
  'let-cat-out-bag': 'slang',
  'bull-china-shop': 'humour',
  'turn-blind-eye': 'life',
  'beat-around-bush': 'slang',
  'read-riot-act': 'life',
  'horses-mouth': 'life',
  'put-on-spot': 'life',
  'wet-blanket': 'humour',
  'mad-as-hatter': 'humour',
  'push-envelope': 'work',
  'cat-got-tongue': 'slang',
  'hair-of-dog': 'slang',
  'bury-hatchet': 'life',
  'go-belly-up': 'work',
  'silver-lining': 'life',
  'bigwig': 'work',
  'earworm': 'slang',
  'cold-feet': 'life',
  'go-bananas': 'slang',
  'armed-to-teeth': 'work',
  'bite-dust': 'biblical',

  'falling-knife': 'life',
  'not-my-circus': 'life',
  'motion-not-action': 'work',
  'writers-difficult': 'work',
  'running-from-to-why': 'life',
  'time-wounds-heels': 'humour',
  'fool-experience': 'life',
  'grudge-poison': 'life',
  'free-rent-head': 'life',
  'judge-insides-outsides': 'life',
  'opportunity-overalls': 'work',
  'wish-in-one-hand': 'humour',
  'make-hay-sun-shines': 'work',
  'hell-keep-going': 'life',
  'only-way-out-through': 'life',
  'hurt-people-hurt-people': 'life',
  'perfect-enemy-good': 'work',
  'shows-you-believe': 'life',
  'compassion-self-friend': 'love',
};

const removedCategoryFallbacks = {
  wisdom: 'life',
  weather: 'life',
  sea: 'life'
};

const bookMetaById = {
  'better-late-than-never': { category: 'beginning', kind: 'dilemma', order: 1, dkSaying: 'Bedre sent end aldrig', oppositeId: 'haste-makes-waste' },
  'early-bird': { category: 'beginning', kind: 'dilemma', order: 2, dkSaying: 'Morgenstund har guld i mund', oppositeId: 'patience-virtue' },
  'time-flies': { category: 'beginning', kind: 'image', order: 3, dkSaying: 'Tiden flyver', oppositeId: 'slow-steady' },
  'slow-steady': { category: 'beginning', kind: 'dilemma', order: 4, dkSaying: 'Langsomt men sikkert vinder løbet', oppositeId: 'strike-iron-hot' },
  'patience-virtue': { category: 'beginning', kind: 'dilemma', order: 5, dkSaying: 'Tålmodighed er en dyd', oppositeId: 'make-hay-sun-shines' },
  'haste-makes-waste': { category: 'beginning', kind: 'dilemma', order: 6, dkSaying: 'Hastværk er lastværk', oppositeId: 'better-late-than-never' },
  'make-hay-sun-shines': { category: 'beginning', kind: 'image', order: 7, dkSaying: 'Hø skal bjærges mens solen skinner', oppositeId: 'patience-virtue' },
  'falling-knife': { category: 'beginning', kind: 'image', order: 8, dkSaying: 'En faldende kniv har intet håndtag', oppositeId: 'strike-iron-hot' },
  'only-way-out-through': { category: 'beginning', kind: 'dilemma', order: 9, dkSaying: 'Den eneste vej ud er igennem', oppositeId: 'better-safe-than-sorry' },
  'hell-keep-going': { category: 'beginning', kind: 'dilemma', order: 10, dkSaying: 'Hvis du går gennem helvede, så bliv ved med at gå', oppositeId: 'better-safe-than-sorry' },

  'actions-speak-louder': { category: 'beginning', kind: 'dilemma', order: 11, dkSaying: 'Handlinger taler højere end ord', oppositeId: 'look-before-leap' },
  'practice-perfect': { category: 'beginning', kind: 'dilemma', order: 12, dkSaying: 'Øvelse gør mester', oppositeId: 'perfect-enemy-good' },
  'motion-not-action': { category: 'beginning', kind: 'dilemma', order: 13, dkSaying: 'Forveksl aldrig bevægelse med handling', oppositeId: 'actions-speak-louder' },
  'opportunity-overalls': { category: 'beginning', kind: 'image', order: 14, dkSaying: 'Muligheden bliver overset, fordi den har overalls på og ligner arbejde', oppositeId: 'better-safe-than-sorry' },
  'perfect-enemy-good': { category: 'beginning', kind: 'dilemma', order: 15, dkSaying: 'Det perfekte er det godes fjende', oppositeId: 'practice-perfect' },
  'wish-in-one-hand': { category: 'beginning', kind: 'image', order: 16, dkSaying: 'Ønsk i den ene hånd og skidt i den anden — se hvilken der fyldes først', oppositeId: 'where-theres-will' },
  'where-theres-will': { category: 'beginning', kind: 'dilemma', order: 17, dkSaying: 'Hvor der er vilje, er der vej', oppositeId: 'wish-in-one-hand' },
  'nothing-ventured': { category: 'beginning', kind: 'dilemma', order: 18, dkSaying: 'Hvo intet vover, intet vinder', oppositeId: 'better-one-bird' },
  'strike-iron-hot': { category: 'beginning', kind: 'dilemma', order: 19, dkSaying: 'Smed mens jernet er varmt', oppositeId: 'look-before-leap' },
  'rome-not-built-day': { category: 'beginning', kind: 'dilemma', order: 20, dkSaying: 'Rom blev ikke bygget på én dag', oppositeId: 'make-hay-sun-shines' },
  'push-envelope': { category: 'beginning', kind: 'image', order: 21, dkSaying: 'Skubbe konvolutten', oppositeId: 'better-safe-than-sorry' },

  'honesty-best-policy': { category: 'understanding', kind: 'dilemma', order: 22, dkSaying: 'Ærlighed varer længst', oppositeId: 'silence-golden' },
  'truth-will-out': { category: 'understanding', kind: 'dilemma', order: 23, dkSaying: 'Sandheden kommer for en dag', oppositeId: 'turn-blind-eye' },
  'no-smoke-without-fire': { category: 'understanding', kind: 'image', order: 24, dkSaying: 'Ingen røg uden ild', oppositeId: 'dont-judge-book' },
  'elephant-room': { category: 'understanding', kind: 'image', order: 25, dkSaying: 'Elefanten i rummet', oppositeId: 'silence-golden' },
  'beat-around-bush': { category: 'understanding', kind: 'image', order: 26, dkSaying: 'Gå som katten om den varme grød', oppositeId: 'honesty-best-policy' },
  'horses-mouth': { category: 'understanding', kind: 'image', order: 27, dkSaying: 'Fra hestens mund', oppositeId: 'walls-have-ears' },
  'turn-blind-eye': { category: 'understanding', kind: 'image', order: 28, dkSaying: 'Vende det blinde øje til', oppositeId: 'truth-will-out' },
  'walls-have-ears': { category: 'understanding', kind: 'image', order: 29, dkSaying: 'Væggene har ører', oppositeId: 'honesty-best-policy' },
  'cat-got-tongue': { category: 'understanding', kind: 'image', order: 30, dkSaying: 'Har katten taget din tunge?', oppositeId: 'honesty-best-policy' },

  'not-my-circus': { category: 'relating', kind: 'image', order: 31, dkSaying: 'Ikke mit cirkus, ikke mine aber', oppositeId: 'many-hands-light-work' },
  'shows-you-believe': { category: 'relating', kind: 'dilemma', order: 32, dkSaying: 'Når nogen viser dig hvem de er, så tro på dem', oppositeId: 'dont-judge-book' },
  'fool-experience': { category: 'relating', kind: 'dilemma', order: 33, dkSaying: 'En tåbe trækker dig ned på sit niveau og slår dig med erfaring', oppositeId: 'many-hands-light-work' },
  'grudge-poison': { category: 'relating', kind: 'image', order: 34, dkSaying: 'At bære nag er som at drikke gift og vente på at den anden dør', oppositeId: 'bury-hatchet' },
  'free-rent-head': { category: 'relating', kind: 'image', order: 35, dkSaying: 'Giv ikke nogen gratis husleje inde i dit hoved', oppositeId: 'bury-hatchet' },
  'judge-insides-outsides': { category: 'relating', kind: 'dilemma', order: 36, dkSaying: 'Døm ikke dit indre efter andres ydre', oppositeId: 'actions-speak-louder' },
  'hurt-people-hurt-people': { category: 'relating', kind: 'dilemma', order: 37, dkSaying: 'Sårede mennesker sårer mennesker', oppositeId: 'compassion-self-friend' },
  'compassion-self-friend': { category: 'relating', kind: 'dilemma', order: 38, dkSaying: 'Vær lige så omsorgsfuld mod dig selv som mod en god ven', oppositeId: 'hurt-people-hurt-people' },
  'blood-thicker-water': { category: 'relating', kind: 'dilemma', order: 39, dkSaying: 'Blod er tykkere end vand', oppositeId: 'birds-feather' },
  'birds-feather': { category: 'relating', kind: 'dilemma', order: 40, dkSaying: 'Lige børn leger bedst', oppositeId: 'opposites-attract' },
  'opposites-attract': { category: 'relating', kind: 'dilemma', order: 41, dkSaying: 'Modsætninger mødes', oppositeId: 'birds-feather' },
  'love-blind': { category: 'relating', kind: 'dilemma', order: 42, dkSaying: 'Kærlighed gør blind', oppositeId: 'shows-you-believe' },

  'all-eggs-one-basket': { category: 'choosing', kind: 'image', order: 43, dkSaying: 'Læg ikke alle æg i én kurv', oppositeId: 'where-theres-will' },
  'look-before-leap': { category: 'choosing', kind: 'dilemma', order: 44, dkSaying: 'Se dig for, før du springer', oppositeId: 'nothing-ventured' },
  'better-safe-than-sorry': { category: 'choosing', kind: 'dilemma', order: 45, dkSaying: 'Hellere være på den sikre side', oppositeId: 'nothing-ventured' },
  'better-one-bird': { category: 'choosing', kind: 'image', order: 46, dkSaying: 'Hellere én fugl i hånden end ti på taget', oppositeId: 'nothing-ventured' },
  'bite-the-bullet': { category: 'choosing', kind: 'image', order: 47, dkSaying: 'Bide i kuglen', oppositeId: 'better-safe-than-sorry' },
  'cold-feet': { category: 'choosing', kind: 'image', order: 48, dkSaying: 'Få kolde fødder', oppositeId: 'bite-the-bullet' },
  'put-on-spot': { category: 'choosing', kind: 'image', order: 49, dkSaying: 'Blive sat på stedet', oppositeId: 'look-before-leap' },
  'no-brainer': { category: 'choosing', kind: 'dilemma', order: 50, dkSaying: 'En no-brainer', oppositeId: 'look-before-leap' },
  'hold-your-horses': { category: 'choosing', kind: 'image', order: 51, dkSaying: 'Hold lige hestene', oppositeId: 'strike-iron-hot' },
  'running-from-to-why': { category: 'choosing', kind: 'dilemma', order: 52, dkSaying: 'Find ud af hvad du løber fra, hvad du løber imod, og hvorfor', oppositeId: 'hell-keep-going' },

  'go-bananas': { category: 'understanding', kind: 'image', order: 53, dkSaying: 'Gå bananas', oppositeId: 'patience-virtue' },
  'hangry': { category: 'understanding', kind: 'image', order: 54, dkSaying: 'Sulten og sur', oppositeId: 'compassion-self-friend' },
  'ghost-someone': { category: 'understanding', kind: 'image', order: 55, dkSaying: 'At ghoste nogen', oppositeId: 'honesty-best-policy' },
  'throw-shade': { category: 'understanding', kind: 'image', order: 56, dkSaying: 'Kaste skygge', oppositeId: 'honesty-best-policy' },
  'earworm': { category: 'understanding', kind: 'image', order: 57, dkSaying: 'Ørehænger', oppositeId: 'out-of-sight' },
  'hair-of-dog': { category: 'understanding', kind: 'image', order: 58, dkSaying: 'En reparationsbajer', oppositeId: 'only-way-out-through' },
  'mad-as-hatter': { category: 'understanding', kind: 'image', order: 59, dkSaying: 'Skør som en hattemager', oppositeId: 'dont-judge-book' },
  'wet-blanket': { category: 'understanding', kind: 'image', order: 60, dkSaying: 'Et vådt tæppe', oppositeId: 'compassion-self-friend' },
  'time-wounds-heels': { category: 'understanding', kind: 'image', order: 61, dkSaying: 'Tiden sårer alle skurke', oppositeId: 'grudge-poison' },
  'under-the-weather': { category: 'understanding', kind: 'image', order: 62, dkSaying: 'Under vejret', oppositeId: 'no-pain-no-gain' },
  'bull-china-shop': { category: 'understanding', kind: 'image', order: 63, dkSaying: 'Som en elefant i en glasbutik', oppositeId: 'look-before-leap' },

  'good-samaritan': { category: 'understanding', kind: 'image', order: 64, dkSaying: 'En barmhjertig samaritaner', oppositeId: 'not-my-circus' },
  'forbidden-fruit': { category: 'understanding', kind: 'image', order: 65, dkSaying: 'Forbuden frugt', oppositeId: 'better-safe-than-sorry' },
  'scapegoat': { category: 'understanding', kind: 'image', order: 66, dkSaying: 'Syndebuk', oppositeId: 'honesty-best-policy' },
  'skin-of-teeth': { category: 'understanding', kind: 'image', order: 67, dkSaying: 'Med huden på tænderne', oppositeId: 'better-safe-than-sorry' },
  'read-riot-act': { category: 'understanding', kind: 'image', order: 68, dkSaying: 'Læse nogen teksten', oppositeId: 'compassion-self-friend' },
  'bury-hatchet': { category: 'understanding', kind: 'image', order: 69, dkSaying: 'Begrave stridsøksen', oppositeId: 'grudge-poison' },
  'bigwig': { category: 'understanding', kind: 'image', order: 70, dkSaying: 'En stor paryk', oppositeId: 'empty-vessels' },
  'armed-to-teeth': { category: 'understanding', kind: 'image', order: 71, dkSaying: 'Bevæbnet til tænderne', oppositeId: 'better-safe-than-sorry' },
  'silver-lining': { category: 'understanding', kind: 'image', order: 72, dkSaying: 'Hver sky har en sølvkant', oppositeId: 'falling-knife' },

  'you-live-and-learn': { category: 'failing', kind: 'dilemma', order: 73, dkSaying: 'Man lever og lærer', oppositeId: 'old-habits-die-hard' },
  'easy-come-easy-go': { category: 'failing', kind: 'dilemma', order: 74, dkSaying: 'Let kommet, let gået', oppositeId: 'better-one-bird' },
  'no-pain-no-gain': { category: 'failing', kind: 'dilemma', order: 75, dkSaying: 'Ingen smerte, ingen gevinst', oppositeId: 'compassion-self-friend' },
  'blessing-in-disguise': { category: 'failing', kind: 'image', order: 76, dkSaying: 'Et held i uheld', oppositeId: 'better-safe-than-sorry' },
  'one-swallow': { category: 'failing', kind: 'image', order: 77, dkSaying: 'Én svale gør ingen sommer', oppositeId: 'where-theres-will' },
  'all-that-glitters': { category: 'failing', kind: 'image', order: 78, dkSaying: 'Alt der glimter er ikke guld', oppositeId: 'dont-judge-book' },
  'dont-judge-book': { category: 'failing', kind: 'dilemma', order: 79, dkSaying: 'Døm ikke bogen på omslaget', oppositeId: 'no-smoke-without-fire' },
  'empty-vessels': { category: 'failing', kind: 'image', order: 80, dkSaying: 'Tomme tønder buldrer mest', oppositeId: 'silence-golden' },
  'writers-difficult': { category: 'failing', kind: 'dilemma', order: 81, dkSaying: 'Forfattere er dem, for hvem det er sværere at skrive end for andre', oppositeId: 'practice-perfect' },
  'necessity-invention': { category: 'failing', kind: 'dilemma', order: 82, dkSaying: 'Nød lærer nøgen kvinde at spinde', oppositeId: 'better-safe-than-sorry' },
  'out-of-sight': { category: 'failing', kind: 'dilemma', order: 83, dkSaying: 'Ude af øje, ude af sind', oppositeId: 'love-blind' },
  'two-birds-one-stone': { category: 'failing', kind: 'image', order: 84, dkSaying: 'Slå to fluer med ét smæk', oppositeId: 'too-many-cooks' },
  'old-habits-die-hard': { category: 'failing', kind: 'dilemma', order: 85, dkSaying: 'Man kan ikke lære en gammel hund nye tricks', oppositeId: 'you-live-and-learn' },
  'too-many-cooks': { category: 'failing', kind: 'image', order: 86, dkSaying: 'For mange kokke fordærver maden', oppositeId: 'many-hands-light-work' },
  'many-hands-light-work': { category: 'failing', kind: 'dilemma', order: 87, dkSaying: 'Mange hænder gør arbejdet let', oppositeId: 'too-many-cooks' },
  'silence-golden': { category: 'failing', kind: 'dilemma', order: 88, dkSaying: 'Tavshed er guld', oppositeId: 'honesty-best-policy' },
  'knowledge-power': { category: 'failing', kind: 'dilemma', order: 89, dkSaying: 'Viden er magt', oppositeId: 'empty-vessels' },
  'every-beginning-hard': { category: 'failing', kind: 'dilemma', order: 90, dkSaying: 'Al begyndelse er svær', oppositeId: 'better-late-than-never' },
  'like-father-son': { category: 'failing', kind: 'image', order: 91, dkSaying: 'Som far, så søn', oppositeId: 'dont-judge-book' },
  'pick-your-brain': { category: 'failing', kind: 'image', order: 92, dkSaying: 'Må jeg plukke lidt i din hjerne?', oppositeId: 'knowledge-power' },
  'bone-to-pick': { category: 'failing', kind: 'image', order: 93, dkSaying: 'Jeg har et ben at pille med dig', oppositeId: 'bury-hatchet' },
  'break-the-ice': { category: 'relating', kind: 'image', order: 94, dkSaying: 'Bryde isen', oppositeId: 'silence-golden' },
  'let-cat-out-bag': { category: 'failing', kind: 'image', order: 95, dkSaying: 'Lukke katten ud af sækken', oppositeId: 'walls-have-ears' },
  'go-belly-up': { category: 'failing', kind: 'image', order: 96, dkSaying: 'Med maven opad', oppositeId: 'silver-lining' },
  'bite-dust': { category: 'failing', kind: 'image', order: 97, dkSaying: 'Bide i støvet', oppositeId: 'you-live-and-learn' },
  'weakest-link': { category: 'beginning', kind: 'image', order: 98, dkSaying: 'En kæde er kun så stærk som sit svageste led', oppositeId: 'many-hands-light-work' },
  'measure-twice-cut-once': { category: 'beginning', kind: 'dilemma', order: 99, dkSaying: 'Mål to gange, skær én gang', oppositeId: 'strike-iron-hot' },
  'burn-bridges': { category: 'relating', kind: 'image', order: 100, dkSaying: 'Brænd ikke dine broer', oppositeId: 'bury-hatchet' },
  'cross-bridge-when-come': { category: 'beginning', kind: 'image', order: 101, dkSaying: 'Tag den bro, når du kommer til den', oppositeId: 'look-before-leap' },
  'dont-count-chickens': { category: 'choosing', kind: 'image', order: 102, dkSaying: 'Sælg ikke skindet før bjørnen er skudt', oppositeId: 'where-theres-will' },
  'reap-what-sow': { category: 'failing', kind: 'image', order: 103, dkSaying: 'Man høster som man sår', oppositeId: 'blessing-in-disguise' },
  'what-goes-around': { category: 'failing', kind: 'image', order: 104, dkSaying: 'Hvad der går rundt, kommer rundt', oppositeId: 'grudge-poison' },
  'penny-saved': { category: 'choosing', kind: 'dilemma', order: 105, dkSaying: 'En sparet krone er en tjent krone', oppositeId: 'money-talks' },
  'penny-wise-pound-foolish': { category: 'choosing', kind: 'dilemma', order: 106, dkSaying: 'Ørevis og kroneblind', oppositeId: 'penny-saved' },
  'buy-cheap-buy-twice': { category: 'choosing', kind: 'dilemma', order: 107, dkSaying: 'Køb billigt, køb to gange', oppositeId: 'penny-saved' },
  'money-talks': { category: 'understanding', kind: 'dilemma', order: 108, dkSaying: 'Penge taler', oppositeId: 'honesty-best-policy' },
  'time-money': { category: 'beginning', kind: 'dilemma', order: 109, dkSaying: 'Tid er penge', oppositeId: 'patience-virtue' },
  'lost-time-never-found': { category: 'beginning', kind: 'dilemma', order: 110, dkSaying: 'Tabt tid findes aldrig igen', oppositeId: 'better-late-than-never' },
  'tomorrow-never-comes': { category: 'beginning', kind: 'dilemma', order: 111, dkSaying: 'I morgen kommer aldrig', oppositeId: 'better-late-than-never' },
  'new-broom-sweeps-clean': { category: 'beginning', kind: 'image', order: 112, dkSaying: 'En ny kost fejer rent', oppositeId: 'old-broom-corners' },
  'old-broom-corners': { category: 'failing', kind: 'image', order: 113, dkSaying: 'Den gamle kost kender hjørnerne', oppositeId: 'new-broom-sweeps-clean' },
  'teach-fish-swim': { category: 'failing', kind: 'image', order: 114, dkSaying: 'Lær ikke fisk at svømme', oppositeId: 'knowledge-power' },
  'still-waters-deep': { category: 'understanding', kind: 'image', order: 115, dkSaying: 'Stille vand har dyb grund', oppositeId: 'empty-vessels' },
  'deep-water': { category: 'choosing', kind: 'image', order: 116, dkSaying: 'Være på dybt vand', oppositeId: 'better-safe-than-sorry' },
  'smooth-seas-sailor': { category: 'failing', kind: 'image', order: 117, dkSaying: 'Roligt hav gør ingen dygtig sømand', oppositeId: 'better-safe-than-sorry' },
  'rising-tide': { category: 'relating', kind: 'image', order: 118, dkSaying: 'Et stigende tidevand løfter alle både', oppositeId: 'not-my-circus' },
  'miss-boat': { category: 'beginning', kind: 'image', order: 119, dkSaying: 'Misse båden', oppositeId: 'make-hay-sun-shines' },
  'plain-sailing': { category: 'failing', kind: 'image', order: 120, dkSaying: 'Ren sejlads', oppositeId: 'deep-water' },
  'tip-iceberg': { category: 'understanding', kind: 'image', order: 121, dkSaying: 'Toppen af isbjerget', oppositeId: 'elephant-room' },
  'when-it-rains-pours': { category: 'failing', kind: 'image', order: 122, dkSaying: 'Når det regner, styrter det ned', oppositeId: 'silver-lining' },
  'save-rainy-day': { category: 'choosing', kind: 'image', order: 123, dkSaying: 'Gem det til en regnvejrsdag', oppositeId: 'easy-come-easy-go' },
  'look-for-silver-lining': { category: 'failing', kind: 'image', order: 124, dkSaying: 'Led efter sølvkanten', oppositeId: 'when-it-rains-pours' },
  'calm-before-storm': { category: 'beginning', kind: 'image', order: 125, dkSaying: 'Stilheden før stormen', oppositeId: 'look-before-leap' },
  'chase-rainbows': { category: 'choosing', kind: 'image', order: 126, dkSaying: 'Jage regnbuer', oppositeId: 'nothing-ventured' },
  'cant-see-forest': { category: 'understanding', kind: 'image', order: 127, dkSaying: 'Ikke kunne se skoven for bare træer', oppositeId: 'big-picture' },
  'root-of-problem': { category: 'understanding', kind: 'image', order: 128, dkSaying: 'Gå til roden af problemet', oppositeId: 'beat-around-bush' },
  'nip-in-bud': { category: 'beginning', kind: 'image', order: 129, dkSaying: 'Tag det i opløbet', oppositeId: 'hell-keep-going' },
  'grass-greener': { category: 'relating', kind: 'image', order: 130, dkSaying: 'Græsset er altid grønnere på den anden side', oppositeId: 'judge-insides-outsides' },
  'out-of-woods': { category: 'failing', kind: 'image', order: 131, dkSaying: 'Ude af skoven', oppositeId: 'deep-water' },
  'barking-up-wrong-tree': { category: 'understanding', kind: 'image', order: 132, dkSaying: 'Gø op ad det forkerte træ', oppositeId: 'horses-mouth' },
  'wolf-sheep-clothing': { category: 'understanding', kind: 'image', order: 133, dkSaying: 'En ulv i fåreklæder', oppositeId: 'dont-judge-book' },
  'cry-wolf': { category: 'understanding', kind: 'image', order: 134, dkSaying: 'Råbe ulven kommer', oppositeId: 'honesty-best-policy' },
  'curiosity-cat': { category: 'choosing', kind: 'image', order: 135, dkSaying: 'Nysgerrighed slog katten ihjel', oppositeId: 'knowledge-power' },
  'let-sleeping-dogs-lie': { category: 'choosing', kind: 'image', order: 136, dkSaying: 'Lad sovende hunde ligge', oppositeId: 'truth-will-out' },
  'dog-days': { category: 'beginning', kind: 'image', order: 137, dkSaying: 'Hundedagene er ovre', oppositeId: 'hell-keep-going' },
  'darkest-before-dawn': { category: 'failing', kind: 'image', order: 138, dkSaying: 'Det er mørkest før daggry', oppositeId: 'silver-lining' },
  'light-end-tunnel': { category: 'failing', kind: 'image', order: 139, dkSaying: 'Lys for enden af tunnelen', oppositeId: 'only-way-out-through' },
  'silver-spoon': { category: 'relating', kind: 'image', order: 140, dkSaying: 'Født med en sølvske i munden', oppositeId: 'nothing-ventured' },
  'best-things-free': { category: 'relating', kind: 'dilemma', order: 141, dkSaying: 'De bedste ting i livet er gratis', oppositeId: 'money-talks' },
  'less-is-more': { category: 'beginning', kind: 'dilemma', order: 142, dkSaying: 'Mindre er mere', oppositeId: 'push-envelope' },
  'devil-details': { category: 'beginning', kind: 'image', order: 143, dkSaying: 'Djævelen ligger i detaljen', oppositeId: 'big-picture' },
  'big-picture': { category: 'understanding', kind: 'image', order: 144, dkSaying: 'Se det store billede', oppositeId: 'devil-details' },
  'read-between-lines': { category: 'understanding', kind: 'image', order: 145, dkSaying: 'Læs mellem linjerne', oppositeId: 'honesty-best-policy' },
  'writing-wall': { category: 'understanding', kind: 'image', order: 146, dkSaying: 'Skriften står på væggen', oppositeId: 'turn-blind-eye' },
  'turn-page': { category: 'failing', kind: 'image', order: 147, dkSaying: 'Vend blad', oppositeId: 'old-habits-die-hard' },
  'chapter-closed': { category: 'relating', kind: 'image', order: 148, dkSaying: 'Det kapitel er lukket', oppositeId: 'bury-hatchet' },
  'blank-slate': { category: 'failing', kind: 'image', order: 149, dkSaying: 'En blank tavle', oppositeId: 'old-habits-die-hard' },
  'draw-line': { category: 'relating', kind: 'image', order: 150, dkSaying: 'Trække en streg', oppositeId: 'compassion-self-friend' },
  'line-in-sand': { category: 'relating', kind: 'image', order: 151, dkSaying: 'En streg i sandet', oppositeId: 'draw-line' },
  'thin-ice': { category: 'choosing', kind: 'image', order: 152, dkSaying: 'På tynd is', oppositeId: 'better-safe-than-sorry' },
  'slippery-slope': { category: 'choosing', kind: 'image', order: 153, dkSaying: 'En glidebane', oppositeId: 'look-before-leap' },
  'uphill-battle': { category: 'beginning', kind: 'image', order: 154, dkSaying: 'En kamp op ad bakke', oppositeId: 'plain-sailing' },
  'downhill-from-here': { category: 'beginning', kind: 'image', order: 155, dkSaying: 'Det går ned ad bakke herfra', oppositeId: 'uphill-battle' },
  'keep-ball-rolling': { category: 'beginning', kind: 'image', order: 156, dkSaying: 'Hold bolden i gang', oppositeId: 'drop-ball' },
  'drop-ball': { category: 'beginning', kind: 'image', order: 157, dkSaying: 'Tabe bolden', oppositeId: 'keep-ball-rolling' },
  'ball-in-court': { category: 'beginning', kind: 'image', order: 158, dkSaying: 'Bolden er på din banehalvdel', oppositeId: 'not-my-circus' },
  'goalposts-moved': { category: 'understanding', kind: 'image', order: 159, dkSaying: 'Målstolperne er flyttet', oppositeId: 'honesty-best-policy' },
  'level-playing-field': { category: 'relating', kind: 'image', order: 160, dkSaying: 'En lige spilleplade', oppositeId: 'silver-spoon' },
  'home-stretch': { category: 'beginning', kind: 'image', order: 161, dkSaying: 'Opløbsstrækningen', oppositeId: 'rome-not-built-day' },
  'finish-line': { category: 'beginning', kind: 'image', order: 162, dkSaying: 'Krydse målstregen', oppositeId: 'motion-not-action' },
  'marathon-not-sprint': { category: 'beginning', kind: 'dilemma', order: 163, dkSaying: 'Det er et maraton, ikke en sprint', oppositeId: 'strike-iron-hot' },
  'learn-ropes': { category: 'failing', kind: 'image', order: 164, dkSaying: 'Lære rebene at kende', oppositeId: 'know-ropes' },
  'know-ropes': { category: 'failing', kind: 'image', order: 165, dkSaying: 'Kende rebene', oppositeId: 'learn-ropes' },
  'loose-cannon': { category: 'relating', kind: 'image', order: 166, dkSaying: 'En løs kanon', oppositeId: 'compassion-self-friend' },
  'anchor-yourself': { category: 'choosing', kind: 'image', order: 167, dkSaying: 'Kast anker før stormen', oppositeId: 'calm-before-storm' },
  'compass-map': { category: 'understanding', kind: 'image', order: 168, dkSaying: 'Et kompas er ikke et kort', oppositeId: 'map-not-territory' },
  'map-not-territory': { category: 'understanding', kind: 'dilemma', order: 169, dkSaying: 'Kortet er ikke terrænet', oppositeId: 'compass-map' },
  'north-star': { category: 'choosing', kind: 'image', order: 170, dkSaying: 'Følg din nordstjerne', oppositeId: 'ball-in-court' },
  'plant-seed': { category: 'beginning', kind: 'image', order: 171, dkSaying: 'Plant et frø', oppositeId: 'finish-line' },
  'mighty-oaks-acorns': { category: 'beginning', kind: 'image', order: 172, dkSaying: 'Store egetræer vokser af små agern', oppositeId: 'time-money' },
  'fruit-of-labor': { category: 'beginning', kind: 'image', order: 173, dkSaying: 'Frugten af dit arbejde', oppositeId: 'easy-come-easy-go' },
  'thorn-side': { category: 'relating', kind: 'image', order: 174, dkSaying: 'En torn i siden', oppositeId: 'bury-hatchet' },
  'olive-branch': { category: 'relating', kind: 'image', order: 175, dkSaying: 'Række en olivengren frem', oppositeId: 'grudge-poison' },
  'branch-out': { category: 'beginning', kind: 'image', order: 176, dkSaying: 'Forgrene sig', oppositeId: 'old-habits-die-hard' },
  'bend-not-break': { category: 'failing', kind: 'dilemma', order: 177, dkSaying: 'Bøj, men knæk ikke', oppositeId: 'bite-the-bullet' },
  'sharpen-axe': { category: 'beginning', kind: 'image', order: 178, dkSaying: 'Slib øksen før du fælder træet', oppositeId: 'strike-iron-hot' },
  'hammer-nail': { category: 'beginning', kind: 'image', order: 179, dkSaying: 'Hvis alt du har er en hammer, ligner alt et søm', oppositeId: 'tool-for-job' },
  'tool-for-job': { category: 'beginning', kind: 'dilemma', order: 180, dkSaying: 'Brug det rette værktøj til opgaven', oppositeId: 'hammer-nail' },
  'too-close-sun': { category: 'choosing', kind: 'image', order: 181, dkSaying: 'Flyv ikke for tæt på solen', oppositeId: 'push-envelope' },
  'pandoras-box': { category: 'choosing', kind: 'image', order: 182, dkSaying: 'Åbne Pandoras æske', oppositeId: 'better-safe-than-sorry' },
  'achilles-heel': { category: 'understanding', kind: 'image', order: 183, dkSaying: 'Akilleshæl', oppositeId: 'weakest-link' },
  'sour-grapes': { category: 'understanding', kind: 'image', order: 184, dkSaying: 'Sure druer', oppositeId: 'judge-insides-outsides' },
  'golden-goose': { category: 'understanding', kind: 'image', order: 185, dkSaying: 'Slagt ikke gåsen der lægger guldæg', oppositeId: 'penny-wise-pound-foolish' },
  'snake-grass': { category: 'understanding', kind: 'image', order: 186, dkSaying: 'En slange i græsset', oppositeId: 'honesty-best-policy' },
  'red-herring': { category: 'understanding', kind: 'image', order: 187, dkSaying: 'En rød sild', oppositeId: 'root-of-problem' },
  'white-elephant': { category: 'understanding', kind: 'image', order: 188, dkSaying: 'En hvid elefant', oppositeId: 'buy-cheap-buy-twice' },
  'paper-tiger': { category: 'understanding', kind: 'image', order: 189, dkSaying: 'En papirtiger', oppositeId: 'bite-the-bullet' },
  'needle-haystack': { category: 'understanding', kind: 'image', order: 190, dkSaying: 'En nål i en høstak', oppositeId: 'horses-mouth' },
  'thread-needle': { category: 'beginning', kind: 'image', order: 191, dkSaying: 'Tråde nålen', oppositeId: 'hammer-nail' },
  'fabric-life': { category: 'relating', kind: 'image', order: 192, dkSaying: 'Livets væv', oppositeId: 'not-my-circus' },
  'loose-thread': { category: 'choosing', kind: 'image', order: 193, dkSaying: 'Træk i én løs tråd, og hele trøjen går op', oppositeId: 'better-safe-than-sorry' },
  'stitch-time': { category: 'beginning', kind: 'image', order: 194, dkSaying: 'Et sting i tide sparer ni', oppositeId: 'tomorrow-never-comes' },
  'patch-not-whole': { category: 'beginning', kind: 'image', order: 195, dkSaying: 'En lap er ikke hele frakken', oppositeId: 'perfect-enemy-good' },
  'wear-many-hats': { category: 'beginning', kind: 'image', order: 196, dkSaying: 'Have mange hatte på', oppositeId: 'too-many-cooks' },
  'fit-like-glove': { category: 'relating', kind: 'image', order: 197, dkSaying: 'Passe som hånd i handske', oppositeId: 'opposites-attract' },
  'shoes-to-fill': { category: 'relating', kind: 'image', order: 198, dkSaying: 'Store sko at udfylde', oppositeId: 'silver-spoon' },
  'walk-mile-shoes': { category: 'relating', kind: 'image', order: 199, dkSaying: 'Gå en mil i en andens sko', oppositeId: 'judge-insides-outsides' },
  'heart-sleeve': { category: 'relating', kind: 'image', order: 200, dkSaying: 'Bære hjertet uden på tøjet', oppositeId: 'cards-on-table' },
  'keep-cards-close': { category: 'understanding', kind: 'image', order: 201, dkSaying: 'Hold kortene tæt til kroppen', oppositeId: 'cards-on-table' },
  'play-hand-dealt': { category: 'choosing', kind: 'image', order: 202, dkSaying: 'Spil de kort du har fået', oppositeId: 'chase-rainbows' },
  'ace-up-sleeve': { category: 'choosing', kind: 'image', order: 203, dkSaying: 'Have et es i ærmet', oppositeId: 'cards-on-table' },
  'house-of-cards': { category: 'choosing', kind: 'image', order: 204, dkSaying: 'Et korthus', oppositeId: 'weakest-link' },
  'cards-on-table': { category: 'understanding', kind: 'image', order: 205, dkSaying: 'Læg kortene på bordet', oppositeId: 'keep-cards-close' },
  'roll-dice': { category: 'choosing', kind: 'image', order: 206, dkSaying: 'Kaste terningerne', oppositeId: 'better-safe-than-sorry' },
  'loaded-dice': { category: 'understanding', kind: 'image', order: 207, dkSaying: 'Ladede terninger', oppositeId: 'level-playing-field' },
  'double-edged-sword': { category: 'choosing', kind: 'image', order: 208, dkSaying: 'Et tveægget sværd', oppositeId: 'better-safe-than-sorry' },
  'cut-gordian-knot': { category: 'beginning', kind: 'image', order: 209, dkSaying: 'Hugge den gordiske knude over', oppositeId: 'look-before-leap' },
  'tied-up-knots': { category: 'understanding', kind: 'image', order: 210, dkSaying: 'Bundet i knuder', oppositeId: 'cut-gordian-knot' },
  'black-swan': { category: 'choosing', kind: 'image', order: 211, dkSaying: 'En sort svane', oppositeId: 'better-safe-than-sorry' },
  'open-door': { category: 'beginning', kind: 'image', order: 212, dkSaying: 'Når én dør lukkes, åbnes en anden', oppositeId: 'out-of-sight' },
  'glass-half-full': { category: 'failing', kind: 'image', order: 213, dkSaying: 'Glasset er halvt fuldt', oppositeId: 'grudge-poison' },
  'common-thread': { category: 'relating', kind: 'image', order: 214, dkSaying: 'Find den røde tråd', oppositeId: 'not-my-circus' },
  'sword-damocles': { category: 'understanding', kind: 'image', order: 215, dkSaying: 'Damoklessværdet', oppositeId: 'better-safe-than-sorry' },
  'broken-clock': { category: 'understanding', kind: 'image', order: 216, dkSaying: 'Et gået-i-stå ur viser rigtigt to gange i døgnet', oppositeId: 'horses-mouth' }
};

const duplicateMeaningReplacements = {
  'better-safe-than-sorry': 'better-one-bird',
  'patience-virtue': 'slow-steady',
  'strike-iron-hot': 'make-hay-sun-shines',
  'only-way-out-through': 'hell-keep-going',
  'where-theres-will': 'nothing-ventured',
  'shows-you-believe': 'actions-speak-louder',
  'dont-judge-book': 'all-that-glitters',
  'hold-your-horses': 'look-before-leap',
  'no-brainer': 'look-before-leap',
  'free-rent-head': 'grudge-poison',
  'easy-come-easy-go': 'better-one-bird',
  'blessing-in-disguise': 'silver-lining',
  'writers-difficult': 'practice-perfect',
  'necessity-invention': 'opportunity-overalls',
  'like-father-son': 'birds-feather',
  'go-belly-up': 'bite-dust'
};

const removedDuplicateMeaningIds = new Set(Object.keys(duplicateMeaningReplacements));

const curatedOppositePairs = [
  ['better-late-than-never', 'haste-makes-waste'],
  ['early-bird', 'slow-steady'],
  ['practice-perfect', 'perfect-enemy-good'],
  ['better-one-bird', 'nothing-ventured'],
  ['truth-will-out', 'turn-blind-eye'],
  ['beat-around-bush', 'honesty-best-policy'],
  ['grudge-poison', 'bury-hatchet'],
  ['hurt-people-hurt-people', 'compassion-self-friend'],
  ['birds-feather', 'opposites-attract'],
  ['cold-feet', 'bite-the-bullet'],
  ['not-my-circus', 'good-samaritan'],
  ['too-many-cooks', 'many-hands-light-work'],
  ['old-habits-die-hard', 'you-live-and-learn'],
  ['let-cat-out-bag', 'walls-have-ears']
];

const curatedOppositeById = Object.fromEntries(
  curatedOppositePairs.flatMap(([firstId, secondId]) => [[firstId, secondId], [secondId, firstId]])
);

function normalizeCategory(category) {
  return removedCategoryFallbacks[category] || category || 'life';
}

const languageEquivalentsById = {
  "elephant-room": {
    "de": { "saying": "Der Elefant im Raum", "country": "Germany", "approxPeriod": "modern calque", "confidence": "medium" },
    "es": { "saying": "El elefante en la habitación", "country": "Spain / Latin America", "approxPeriod": "modern calque", "confidence": "medium" },
    "no": { "saying": "Elefanten i rommet", "country": "Norway", "approxPeriod": "modern calque", "confidence": "medium" },
    "la": { "saying": "Res manifesta, de qua nemo loquitur", "literal": "An obvious matter about which no one speaks", "country": "Modern Latin", "approxPeriod": "constructed equivalent", "confidence": "low" },
    "zh": { "saying": "房间里的大象", "literal": "The elephant in the room", "country": "China", "approxPeriod": "modern calque", "confidence": "medium" },
    "ja": { "saying": "部屋の中の象", "literal": "The elephant in the room", "country": "Japan", "approxPeriod": "modern calque", "confidence": "medium" },
    "it": { "saying": "L’elefante nella stanza", "country": "Italy", "approxPeriod": "modern calque", "confidence": "medium" },
    "hi": { "saying": "कमरे में हाथी", "literal": "The elephant in the room", "country": "India", "approxPeriod": "modern calque", "confidence": "medium" },
    "el": { "saying": "Ο ελέφαντας στο δωμάτιο", "country": "Greece", "approxPeriod": "modern calque", "confidence": "medium" },
    "fr": { "saying": "L’éléphant dans la pièce", "country": "France", "approxPeriod": "modern calque", "confidence": "medium" },
    "ar": { "saying": "الفيل في الغرفة", "country": "Arab world", "approxPeriod": "modern calque", "confidence": "medium" }
  },
  "all-eggs-one-basket": {
    "de": { "saying": "Nicht alles auf eine Karte setzen", "literal": "Do not put everything on one card", "country": "Germany", "approxPeriod": "traditional / modern", "confidence": "high" },
    "es": { "saying": "No poner todos los huevos en la misma cesta", "country": "Spain / Latin America", "approxPeriod": "traditional / modern", "confidence": "high" },
    "no": { "saying": "Ikke legge alle eggene i én kurv", "country": "Norway", "approxPeriod": "traditional / modern", "confidence": "high" },
    "la": { "saying": "Noli omnia ova in uno corbe ponere", "literal": "Do not put all eggs in one basket", "country": "Modern Latin", "approxPeriod": "constructed equivalent", "confidence": "low" },
    "zh": { "saying": "不要把所有鸡蛋放在一个篮子里", "country": "China", "approxPeriod": "modern common equivalent", "confidence": "high" },
    "ja": { "saying": "一つの籠にすべての卵を盛るな", "literal": "Do not put all eggs in one basket", "country": "Japan", "approxPeriod": "modern common equivalent", "confidence": "medium" },
    "it": { "saying": "Non mettere tutte le uova nello stesso paniere", "country": "Italy", "approxPeriod": "traditional / modern", "confidence": "high" },
    "hi": { "saying": "सारे अंडे एक ही टोकरी में मत रखो", "country": "India", "approxPeriod": "modern common equivalent", "confidence": "medium" },
    "el": { "saying": "Μη βάζεις όλα τα αυγά στο ίδιο καλάθι", "country": "Greece", "approxPeriod": "modern common equivalent", "confidence": "high" },
    "fr": { "saying": "Il ne faut pas mettre tous ses œufs dans le même panier", "country": "France", "approxPeriod": "traditional", "confidence": "high" },
    "ar": { "saying": "لا تضع كل البيض في سلة واحدة", "country": "Arab world", "approxPeriod": "modern common equivalent", "confidence": "high" }
  },
  "better-late-than-never": {
    "de": {
      "saying": "Besser spät als nie",
      "country": "Germany",
      "approxPeriod": "traditional",
      "confidence": "high"
    },
    "es": {
      "saying": "Más vale tarde que nunca",
      "country": "Spain",
      "approxPeriod": "traditional",
      "confidence": "high"
    },
    "no": {
      "saying": "Bedre sent enn aldri",
      "country": "Norway",
      "approxPeriod": "traditional",
      "confidence": "high"
    },
    "la": {
      "saying": "Potius sero quam numquam",
      "country": "Ancient Rome / Europe",
      "approxPeriod": "classical idea, later proverb",
      "confidence": "medium"
    },
    "zh": {
      "saying": "亡羊补牢，未为迟也",
      "literal": "It is not too late to mend the pen after sheep are lost",
      "country": "China",
      "approxPeriod": "traditional",
      "confidence": "high"
    },
    "ja": {
      "saying": "遅くても、しないよりはまし",
      "country": "Japan",
      "approxPeriod": "modern equivalent",
      "confidence": "medium"
    },
    "it": {
      "saying": "Meglio tardi che mai",
      "country": "Italy",
      "approxPeriod": "traditional",
      "confidence": "high"
    },
    "hi": {
      "saying": "देर आए दुरुस्त आए",
      "literal": "Came late, came right",
      "country": "India",
      "approxPeriod": "traditional",
      "confidence": "high"
    },
    "el": {
      "saying": "Κάλλιο αργά παρά ποτέ",
      "country": "Greece",
      "approxPeriod": "traditional",
      "confidence": "high"
    },
    "fr": {
      "saying": "Mieux vaut tard que jamais",
      "country": "France",
      "approxPeriod": "traditional",
      "confidence": "high"
    },
    "ar": {
      "saying": "أن تأتي متأخرًا خير من ألا تأتي أبدًا",
      "country": "Arab world",
      "approxPeriod": "modern common equivalent",
      "confidence": "medium"
    }
  },
  "actions-speak-louder": {
    "de": {
      "saying": "Taten sagen mehr als Worte",
      "country": "Germany",
      "approxPeriod": "traditional",
      "confidence": "high"
    },
    "es": {
      "saying": "Obras son amores, y no buenas razones",
      "literal": "Deeds are love, not fine words",
      "country": "Spain",
      "approxPeriod": "traditional",
      "confidence": "high"
    },
    "no": {
      "saying": "Handling sier mer enn ord",
      "country": "Norway",
      "approxPeriod": "traditional / modern",
      "confidence": "high"
    },
    "zh": {
      "saying": "事实胜于雄辩",
      "literal": "Facts beat eloquence",
      "country": "China",
      "approxPeriod": "traditional",
      "confidence": "high"
    },
    "ja": {
      "saying": "言うは易く行うは難し",
      "literal": "Saying is easy, doing is hard",
      "country": "Japan",
      "approxPeriod": "traditional",
      "confidence": "high"
    },
    "it": {
      "saying": "I fatti contano più delle parole",
      "country": "Italy",
      "approxPeriod": "traditional / modern",
      "confidence": "high"
    },
    "hi": {
      "saying": "कर्म शब्दों से अधिक बोलते हैं",
      "country": "India",
      "approxPeriod": "modern equivalent",
      "confidence": "medium"
    },
    "el": {
      "saying": "Οι πράξεις μιλούν δυνατότερα από τα λόγια",
      "country": "Greece",
      "approxPeriod": "modern equivalent",
      "confidence": "medium"
    },
    "fr": {
      "saying": "Les actes valent mieux que les paroles",
      "country": "France",
      "approxPeriod": "traditional",
      "confidence": "high"
    },
    "ar": {
      "saying": "الأفعال أبلغ من الأقوال",
      "country": "Arab world",
      "approxPeriod": "traditional / modern",
      "confidence": "high"
    }
  },
  "dont-judge-book": {
    "de": {
      "saying": "Man soll ein Buch nicht nach dem Einband beurteilen",
      "country": "Germany",
      "approxPeriod": "modern equivalent",
      "confidence": "medium"
    },
    "es": {
      "saying": "Las apariencias engañan",
      "literal": "Appearances deceive",
      "country": "Spain / Latin America",
      "approxPeriod": "traditional",
      "confidence": "high"
    },
    "no": {
      "saying": "Man skal ikke skue hunden på hårene",
      "country": "Norway / Denmark",
      "approxPeriod": "traditional",
      "confidence": "medium"
    },
    "zh": {
      "saying": "人不可貌相",
      "literal": "People cannot be judged by appearance",
      "country": "China",
      "approxPeriod": "traditional",
      "confidence": "high"
    },
    "ja": {
      "saying": "人は見かけによらない",
      "literal": "People are not as they appear",
      "country": "Japan",
      "approxPeriod": "traditional",
      "confidence": "high"
    },
    "it": {
      "saying": "L’apparenza inganna",
      "country": "Italy",
      "approxPeriod": "traditional",
      "confidence": "high"
    },
    "hi": {
      "saying": "ऊँची दुकान, फीका पकवान",
      "literal": "A grand shop, bland food",
      "country": "India",
      "approxPeriod": "traditional",
      "confidence": "medium"
    },
    "el": {
      "saying": "Τα φαινόμενα απατούν",
      "country": "Greece",
      "approxPeriod": "traditional",
      "confidence": "high"
    },
    "fr": {
      "saying": "L’habit ne fait pas le moine",
      "literal": "The robe does not make the monk",
      "country": "France",
      "approxPeriod": "medieval / traditional",
      "confidence": "high"
    },
    "ar": {
      "saying": "المظاهر خداعة",
      "country": "Arab world",
      "approxPeriod": "traditional / modern",
      "confidence": "high"
    }
  },
  "two-birds-one-stone": {
    "de": {
      "saying": "Zwei Fliegen mit einer Klappe schlagen",
      "country": "Germany",
      "approxPeriod": "traditional",
      "confidence": "high"
    },
    "es": {
      "saying": "Matar dos pájaros de un tiro",
      "country": "Spain / Latin America",
      "approxPeriod": "traditional",
      "confidence": "high"
    },
    "no": {
      "saying": "Slå to fluer i én smekk",
      "country": "Norway",
      "approxPeriod": "traditional",
      "confidence": "high"
    },
    "zh": {
      "saying": "一箭双雕",
      "literal": "Two eagles with one arrow",
      "country": "China",
      "approxPeriod": "traditional",
      "confidence": "high"
    },
    "ja": {
      "saying": "一石二鳥",
      "literal": "Two birds with one stone",
      "country": "Japan",
      "approxPeriod": "traditional",
      "confidence": "high"
    },
    "it": {
      "saying": "Prendere due piccioni con una fava",
      "literal": "Catch two pigeons with one bean",
      "country": "Italy",
      "approxPeriod": "traditional",
      "confidence": "high"
    },
    "hi": {
      "saying": "एक तीर से दो निशाने",
      "literal": "Two targets with one arrow",
      "country": "India",
      "approxPeriod": "traditional",
      "confidence": "high"
    },
    "el": {
      "saying": "Μ’ ένα σμπάρο δυο τρυγόνια",
      "country": "Greece",
      "approxPeriod": "traditional",
      "confidence": "high"
    },
    "fr": {
      "saying": "Faire d’une pierre deux coups",
      "country": "France",
      "approxPeriod": "traditional",
      "confidence": "high"
    },
    "ar": {
      "saying": "ضرب عصفورين بحجر واحد",
      "country": "Arab world",
      "approxPeriod": "traditional / modern",
      "confidence": "high"
    }
  },
  "early-bird": {
    "de": {
      "saying": "Morgenstund hat Gold im Mund",
      "country": "Germany",
      "approxPeriod": "traditional",
      "confidence": "high"
    },
    "es": {
      "saying": "A quien madruga, Dios le ayuda",
      "country": "Spain",
      "approxPeriod": "traditional",
      "confidence": "high"
    },
    "no": {
      "saying": "Morgenstund har gull i munn",
      "country": "Norway",
      "approxPeriod": "traditional",
      "confidence": "high"
    },
    "zh": {
      "saying": "早起的鸟儿有虫吃",
      "country": "China",
      "approxPeriod": "modern common equivalent",
      "confidence": "medium"
    },
    "ja": {
      "saying": "早起きは三文の徳",
      "literal": "Early rising is worth three mon",
      "country": "Japan",
      "approxPeriod": "Edo-period / traditional",
      "confidence": "high"
    },
    "it": {
      "saying": "Il mattino ha l’oro in bocca",
      "country": "Italy",
      "approxPeriod": "traditional",
      "confidence": "high"
    },
    "hi": {
      "saying": "जो जागत है सो पावत है",
      "literal": "The one who stays awake obtains",
      "country": "India",
      "approxPeriod": "traditional",
      "confidence": "medium"
    },
    "el": {
      "saying": "Το πρωινό πουλί πιάνει το σκουλήκι",
      "country": "Greece",
      "approxPeriod": "modern equivalent",
      "confidence": "medium"
    },
    "fr": {
      "saying": "L’avenir appartient à ceux qui se lèvent tôt",
      "country": "France",
      "approxPeriod": "traditional / modern",
      "confidence": "high"
    },
    "ar": {
      "saying": "البركة في البكور",
      "literal": "Blessing is in early rising",
      "country": "Arab world",
      "approxPeriod": "traditional",
      "confidence": "high"
    }
  },
  "strike-iron-hot": {
    "de": {
      "saying": "Man muss das Eisen schmieden, solange es heiß ist",
      "country": "Germany",
      "approxPeriod": "traditional",
      "confidence": "high"
    },
    "es": {
      "saying": "Hay que golpear el hierro mientras está caliente",
      "country": "Spain / Latin America",
      "approxPeriod": "traditional/modern common usage",
      "confidence": "high"
    },
    "no": {
      "saying": "Man må smi mens jernet er varmt",
      "country": "Norway",
      "approxPeriod": "traditional",
      "confidence": "high"
    },
    "zh": {
      "saying": "趁热打铁",
      "literal": "Strike the iron while it is hot",
      "country": "China",
      "approxPeriod": "traditional",
      "confidence": "high"
    },
    "ja": {
      "saying": "鉄は熱いうちに打て",
      "country": "Japan",
      "approxPeriod": "traditional",
      "confidence": "high"
    },
    "it": {
      "saying": "Batti il ferro finché è caldo",
      "country": "Italy",
      "approxPeriod": "traditional",
      "confidence": "high"
    },
    "hi": {
      "saying": "लोहे को गरम रहते ही पीटो",
      "country": "India",
      "approxPeriod": "modern common usage",
      "confidence": "high"
    },
    "el": {
      "saying": "Χτύπα το σίδερο όσο είναι ζεστό",
      "country": "Greece",
      "approxPeriod": "modern common usage",
      "confidence": "high"
    },
    "fr": {
      "saying": "Il faut battre le fer tant qu’il est chaud",
      "country": "France",
      "approxPeriod": "traditional",
      "confidence": "high"
    },
    "ar": {
      "saying": "اطرق الحديد وهو ساخن",
      "country": "Arab world",
      "approxPeriod": "modern common usage",
      "confidence": "high"
    },
    "la": {
      "saying": "Ferrum dum calet cudendum est",
      "country": "Latin tradition",
      "approxPeriod": "medieval/Neo-Latin",
      "confidence": "high"
    }
  },
  "love-blind": {
    "de": {
      "saying": "Liebe macht blind",
      "country": "Germany",
      "approxPeriod": "traditional",
      "confidence": "high"
    },
    "es": {
      "saying": "El amor es ciego",
      "country": "Spain / Latin America",
      "approxPeriod": "traditional",
      "confidence": "high"
    },
    "no": {
      "saying": "Kjærlighet gjør blind",
      "country": "Norway",
      "approxPeriod": "traditional",
      "confidence": "high"
    },
    "la": {
      "saying": "Amor caecus est",
      "literal": "Love is blind",
      "country": "Ancient Rome / Europe",
      "approxPeriod": "classical idea / later Latin form",
      "confidence": "medium"
    },
    "zh": {
      "saying": "情人眼里出西施",
      "literal": "In a lover’s eyes appears Xi Shi",
      "country": "China",
      "approxPeriod": "traditional",
      "confidence": "high"
    },
    "ja": {
      "saying": "恋は盲目",
      "literal": "Love is blindness",
      "country": "Japan",
      "approxPeriod": "traditional / modern common",
      "confidence": "high"
    },
    "it": {
      "saying": "L’amore è cieco",
      "country": "Italy",
      "approxPeriod": "traditional",
      "confidence": "high"
    },
    "hi": {
      "saying": "प्यार अंधा होता है",
      "literal": "Love is blind",
      "country": "India",
      "approxPeriod": "modern common equivalent",
      "confidence": "medium"
    },
    "el": {
      "saying": "Ο έρωτας είναι τυφλός",
      "literal": "Love is blind",
      "country": "Greece",
      "approxPeriod": "traditional / modern common",
      "confidence": "high"
    },
    "fr": {
      "saying": "L’amour est aveugle",
      "country": "France",
      "approxPeriod": "traditional",
      "confidence": "high"
    },
    "ar": {
      "saying": "الحب أعمى",
      "literal": "Love is blind",
      "country": "Arab world",
      "approxPeriod": "traditional / modern common",
      "confidence": "high"
    }
  },
  "practice-perfect": {
    "de": {
      "saying": "Übung macht den Meister",
      "country": "Germany",
      "approxPeriod": "early modern or older",
      "confidence": "high"
    },
    "es": {
      "saying": "La práctica hace al maestro",
      "country": "Spain / Latin America",
      "approxPeriod": "modern common usage",
      "confidence": "high"
    },
    "no": {
      "saying": "Øvelse gjør mester",
      "country": "Norway",
      "approxPeriod": "modern common usage",
      "confidence": "high"
    },
    "la": {
      "saying": "Usus magister est optimus",
      "literal": "Practice is the best teacher",
      "country": "Ancient Rome",
      "approxPeriod": "classical/medieval Latin tradition",
      "confidence": "medium"
    },
    "zh": {
      "saying": "熟能生巧",
      "literal": "Skill comes from familiarity",
      "country": "China",
      "approxPeriod": "traditional",
      "confidence": "high"
    },
    "ja": {
      "saying": "習うより慣れよ",
      "literal": "Rather than study it, get used to it",
      "country": "Japan",
      "approxPeriod": "traditional",
      "confidence": "high"
    },
    "it": {
      "saying": "La pratica rende perfetti",
      "country": "Italy",
      "approxPeriod": "modern common usage",
      "confidence": "high"
    },
    "hi": {
      "saying": "अभ्यास से ही निपुणता आती है",
      "country": "India",
      "approxPeriod": "modern common usage",
      "confidence": "medium"
    },
    "el": {
      "saying": "Η εξάσκηση κάνει τον μάστορα",
      "country": "Greece",
      "approxPeriod": "modern common usage",
      "confidence": "high"
    },
    "fr": {
      "saying": "C’est en forgeant qu’on devient forgeron",
      "literal": "It is by forging that one becomes a blacksmith",
      "country": "France",
      "approxPeriod": "traditional",
      "confidence": "high"
    },
    "ar": {
      "saying": "الممارسة تصنع الإتقان",
      "country": "Arab world",
      "approxPeriod": "modern common usage",
      "confidence": "medium"
    }
  },
  "rome-not-built-day": {
    "de": {
      "saying": "Rom wurde nicht an einem Tag erbaut",
      "country": "Germany",
      "approxPeriod": "medieval/early modern Europe",
      "confidence": "high"
    },
    "es": {
      "saying": "Roma no se hizo en un día",
      "country": "Spain / Latin America",
      "approxPeriod": "medieval/early modern Europe",
      "confidence": "high"
    },
    "no": {
      "saying": "Roma ble ikke bygget på én dag",
      "country": "Norway",
      "approxPeriod": "modern common usage",
      "confidence": "high"
    },
    "la": {
      "saying": "Roma uno die non est condita",
      "country": "Neo-Latin / Europe",
      "approxPeriod": "modern Latin rendering",
      "confidence": "medium"
    },
    "zh": {
      "saying": "罗马不是一天建成的",
      "country": "China",
      "approxPeriod": "modern common usage",
      "confidence": "high"
    },
    "ja": {
      "saying": "ローマは一日にして成らず",
      "country": "Japan",
      "approxPeriod": "modern common usage",
      "confidence": "high"
    },
    "it": {
      "saying": "Roma non fu fatta in un giorno",
      "country": "Italy",
      "approxPeriod": "traditional",
      "confidence": "high"
    },
    "hi": {
      "saying": "रोम एक दिन में नहीं बना था",
      "country": "India",
      "approxPeriod": "modern common usage",
      "confidence": "high"
    },
    "el": {
      "saying": "Η Ρώμη δεν χτίστηκε σε μια μέρα",
      "country": "Greece",
      "approxPeriod": "modern common usage",
      "confidence": "high"
    },
    "fr": {
      "saying": "Rome ne s’est pas faite en un jour",
      "country": "France",
      "approxPeriod": "traditional",
      "confidence": "high"
    },
    "ar": {
      "saying": "روما لم تُبنَ في يوم واحد",
      "country": "Arab world",
      "approxPeriod": "modern common usage",
      "confidence": "high"
    }
  },
  "no-smoke-without-fire": {
    "de": {
      "saying": "Wo Rauch ist, ist auch Feuer",
      "country": "Germany",
      "approxPeriod": "traditional",
      "confidence": "high"
    },
    "es": {
      "saying": "Cuando el río suena, agua lleva",
      "literal": "When the river makes noise, it carries water",
      "country": "Spain / Latin America",
      "approxPeriod": "traditional",
      "confidence": "high"
    },
    "no": {
      "saying": "Ingen røyk uten ild",
      "country": "Norway",
      "approxPeriod": "traditional",
      "confidence": "high"
    },
    "la": {
      "saying": "Non est fumus absque igne",
      "country": "Medieval/Neo-Latin Europe",
      "approxPeriod": "medieval or later",
      "confidence": "high"
    },
    "zh": {
      "saying": "无风不起浪",
      "literal": "Without wind, waves do not rise",
      "country": "China",
      "approxPeriod": "traditional",
      "confidence": "high"
    },
    "ja": {
      "saying": "火のない所に煙は立たぬ",
      "literal": "Smoke does not rise where there is no fire",
      "country": "Japan",
      "approxPeriod": "traditional",
      "confidence": "high"
    },
    "it": {
      "saying": "Non c’è fumo senza arrosto",
      "literal": "There is no smoke without roast meat",
      "country": "Italy",
      "approxPeriod": "traditional",
      "confidence": "high"
    },
    "hi": {
      "saying": "जहाँ धुआँ है, वहाँ आग भी है",
      "country": "India",
      "approxPeriod": "modern common usage",
      "confidence": "high"
    },
    "el": {
      "saying": "Όπου υπάρχει καπνός, υπάρχει και φωτιά",
      "country": "Greece",
      "approxPeriod": "modern common usage",
      "confidence": "high"
    },
    "fr": {
      "saying": "Il n’y a pas de fumée sans feu",
      "country": "France",
      "approxPeriod": "traditional",
      "confidence": "high"
    },
    "ar": {
      "saying": "لا دخان بلا نار",
      "country": "Arab world",
      "approxPeriod": "traditional/modern common usage",
      "confidence": "high"
    }
  },
  "old-habits-die-hard": {
    "de": { "saying": "Einem alten Hund bringt man keine neuen Tricks bei", "literal": "You cannot teach an old dog new tricks", "country": "Germany", "approxPeriod": "direct image-preserving calque", "confidence": "medium" },
    "es": { "saying": "No se le enseñan trucos nuevos a un perro viejo", "literal": "You do not teach new tricks to an old dog", "country": "Spain / Latin America", "approxPeriod": "direct image-preserving calque", "confidence": "medium" },
    "no": { "saying": "Man kan ikke lære en gammel hund nye triks", "literal": "You cannot teach an old dog new tricks", "country": "Norway", "approxPeriod": "direct image-preserving calque", "confidence": "medium" },
    "la": { "saying": "Canem senem novos dolos docere non potes", "literal": "You cannot teach an old dog new tricks", "country": "Modern Latin", "approxPeriod": "direct image-preserving calque", "confidence": "low" },
    "zh": { "saying": "老狗学不会新把戏", "literal": "An old dog cannot learn new tricks", "country": "China", "approxPeriod": "direct image-preserving calque", "confidence": "medium" },
    "ja": { "saying": "老犬に新しい芸は教えられない", "literal": "You cannot teach an old dog new tricks", "country": "Japan", "approxPeriod": "direct image-preserving calque", "confidence": "medium" },
    "it": { "saying": "Non si insegnano nuovi trucchi a un cane vecchio", "literal": "You do not teach new tricks to an old dog", "country": "Italy", "approxPeriod": "direct image-preserving calque", "confidence": "medium" },
    "hi": { "saying": "बूढ़े कुत्ते को नई तरकीबें नहीं सिखाई जा सकतीं", "literal": "An old dog cannot be taught new tricks", "country": "India", "approxPeriod": "direct image-preserving calque", "confidence": "medium" },
    "el": { "saying": "Δεν μαθαίνεις καινούργια κόλπα σε γέρικο σκυλί", "literal": "You do not teach new tricks to an old dog", "country": "Greece", "approxPeriod": "direct image-preserving calque", "confidence": "medium" },
    "fr": { "saying": "On n’apprend pas de nouveaux tours à un vieux chien", "literal": "You do not teach new tricks to an old dog", "country": "France", "approxPeriod": "direct image-preserving calque", "confidence": "medium" },
    "ar": { "saying": "لا تعلّم كلبًا عجوزًا حيلًا جديدة", "literal": "Do not teach an old dog new tricks", "country": "Arab world", "approxPeriod": "direct image-preserving calque", "confidence": "medium" }
  },
  "too-many-cooks": {
    "de": {
      "saying": "Viele Köche verderben den Brei",
      "country": "Germany",
      "approxPeriod": "traditional",
      "confidence": "high"
    },
    "es": {
      "saying": "Muchas manos en un plato hacen mucho garabato",
      "country": "Spain / Latin America",
      "approxPeriod": "traditional",
      "confidence": "medium"
    },
    "no": {
      "saying": "Dess flere kokker, dess mer søl",
      "country": "Norway",
      "approxPeriod": "modern common usage",
      "confidence": "high"
    },
    "la": {
      "saying": "Multitudo coquorum pulmentum corrumpit",
      "country": "Neo-Latin / Europe",
      "approxPeriod": "modern Latin rendering",
      "confidence": "medium"
    },
    "zh": {
      "saying": "厨子多了烧坏汤",
      "literal": "Too many cooks spoil the soup",
      "country": "China",
      "approxPeriod": "modern common usage",
      "confidence": "medium"
    },
    "ja": {
      "saying": "船頭多くして船山に上る",
      "literal": "With too many captains, the boat climbs a mountain",
      "country": "Japan",
      "approxPeriod": "traditional",
      "confidence": "high"
    },
    "it": {
      "saying": "Troppi cuochi guastano la cucina",
      "country": "Italy",
      "approxPeriod": "traditional/modern common usage",
      "confidence": "high"
    },
    "hi": {
      "saying": "ज्यादा रसोइये खाना बिगाड़ देते हैं",
      "country": "India",
      "approxPeriod": "modern common usage",
      "confidence": "medium"
    },
    "el": {
      "saying": "Όπου λαλούν πολλοί κοκόροι, αργεί να ξημερώσει",
      "literal": "Where many roosters crow, dawn is delayed",
      "country": "Greece",
      "approxPeriod": "traditional",
      "confidence": "high"
    },
    "fr": {
      "saying": "Trop de cuisiniers gâtent la sauce",
      "country": "France",
      "approxPeriod": "modern common usage",
      "confidence": "high"
    },
    "ar": {
      "saying": "كثرة الطباخين تفسد الطبخة",
      "country": "Arab world",
      "approxPeriod": "modern common usage",
      "confidence": "high"
    }
  },
  "look-before-leap": {
    "de": {
      "saying": "Erst denken, dann handeln",
      "country": "Germany",
      "approxPeriod": "traditional/modern common usage",
      "confidence": "high"
    },
    "es": {
      "saying": "Antes de actuar, hay que pensar",
      "country": "Spain / Latin America",
      "approxPeriod": "modern common usage",
      "confidence": "medium"
    },
    "no": {
      "saying": "Tenk før du handler",
      "country": "Norway",
      "approxPeriod": "modern common usage",
      "confidence": "high"
    },
    "la": {
      "saying": "Respice finem",
      "literal": "Consider the end",
      "country": "Latin tradition",
      "approxPeriod": "medieval proverb",
      "confidence": "medium"
    },
    "zh": {
      "saying": "三思而后行",
      "literal": "Think three times, then act",
      "country": "China",
      "approxPeriod": "traditional",
      "confidence": "high"
    },
    "ja": {
      "saying": "石橋を叩いて渡る",
      "literal": "Tap a stone bridge before crossing it",
      "country": "Japan",
      "approxPeriod": "traditional",
      "confidence": "high"
    },
    "it": {
      "saying": "Guarda prima di saltare",
      "country": "Italy",
      "approxPeriod": "modern common usage",
      "confidence": "high"
    },
    "hi": {
      "saying": "कूदने से पहले देखो",
      "country": "India",
      "approxPeriod": "modern common usage",
      "confidence": "medium"
    },
    "el": {
      "saying": "Πριν πηδήξεις, κοίτα",
      "country": "Greece",
      "approxPeriod": "modern common usage",
      "confidence": "medium"
    },
    "fr": {
      "saying": "Il faut tourner sept fois sa langue dans sa bouche avant de parler",
      "literal": "Turn your tongue seven times before speaking",
      "country": "France",
      "approxPeriod": "traditional",
      "confidence": "medium"
    },
    "ar": {
      "saying": "فكّر قبل أن تفعل",
      "country": "Arab world",
      "approxPeriod": "modern common usage",
      "confidence": "medium"
    }
  },
  "many-hands-light-work": {
    "de": {
      "saying": "Viele Hände machen der Arbeit schnell ein Ende",
      "country": "Germany",
      "approxPeriod": "traditional",
      "confidence": "high"
    },
    "es": {
      "saying": "Muchas manos hacen el trabajo ligero",
      "country": "Spain / Latin America",
      "approxPeriod": "modern common usage",
      "confidence": "medium"
    },
    "no": {
      "saying": "Mange hender gjør arbeidet lett",
      "country": "Norway",
      "approxPeriod": "modern common usage",
      "confidence": "high"
    },
    "la": {
      "saying": "Multae manus onus levant",
      "literal": "Many hands lighten the burden",
      "country": "Neo-Latin / Europe",
      "approxPeriod": "modern Latin rendering",
      "confidence": "medium"
    },
    "zh": {
      "saying": "人多好办事",
      "literal": "With many people, things are easier to do",
      "country": "China",
      "approxPeriod": "traditional/modern common usage",
      "confidence": "high"
    },
    "ja": {
      "saying": "人手が多ければ仕事は楽になる",
      "country": "Japan",
      "approxPeriod": "modern common usage",
      "confidence": "medium"
    },
    "it": {
      "saying": "Molte mani rendono il lavoro leggero",
      "country": "Italy",
      "approxPeriod": "modern common usage",
      "confidence": "medium"
    },
    "hi": {
      "saying": "अनेक हाथ काम को हल्का कर देते हैं",
      "country": "India",
      "approxPeriod": "modern common usage",
      "confidence": "medium"
    },
    "el": {
      "saying": "Πολλά χέρια κάνουν τη δουλειά ελαφριά",
      "country": "Greece",
      "approxPeriod": "modern common usage",
      "confidence": "medium"
    },
    "fr": {
      "saying": "Plus on est de fous, plus on rit",
      "literal": "The more mad people, the more laughter",
      "country": "France",
      "approxPeriod": "traditional",
      "confidence": "low",
      "note": "Natural but closer to “the more the merrier” than shared labor."
    },
    "ar": {
      "saying": "يد واحدة لا تصفق",
      "literal": "One hand does not clap",
      "country": "Arab world",
      "approxPeriod": "traditional",
      "confidence": "medium"
    }
  },
  "honesty-best-policy": {
    "de": {
      "saying": "Ehrlich währt am längsten",
      "country": "Germany",
      "approxPeriod": "traditional",
      "confidence": "high"
    },
    "es": {
      "saying": "La honestidad es la mejor política",
      "country": "Spain / Latin America",
      "approxPeriod": "modern common usage",
      "confidence": "high"
    },
    "no": {
      "saying": "Ærlighet varer lengst",
      "country": "Norway",
      "approxPeriod": "traditional",
      "confidence": "high"
    },
    "la": {
      "saying": "Honestas optima est ratio",
      "country": "Neo-Latin / Europe",
      "approxPeriod": "modern Latin rendering",
      "confidence": "medium"
    },
    "zh": {
      "saying": "诚实为上策",
      "literal": "Honesty is the best strategy",
      "country": "China",
      "approxPeriod": "modern common usage",
      "confidence": "high"
    },
    "ja": {
      "saying": "正直は最善の策",
      "country": "Japan",
      "approxPeriod": "modern common usage",
      "confidence": "high"
    },
    "it": {
      "saying": "L’onestà è la migliore politica",
      "country": "Italy",
      "approxPeriod": "modern common usage",
      "confidence": "high"
    },
    "hi": {
      "saying": "ईमानदारी सबसे अच्छी नीति है",
      "country": "India",
      "approxPeriod": "modern common usage",
      "confidence": "high"
    },
    "el": {
      "saying": "Η ειλικρίνεια είναι η καλύτερη πολιτική",
      "country": "Greece",
      "approxPeriod": "modern common usage",
      "confidence": "high"
    },
    "fr": {
      "saying": "L’honnêteté est la meilleure politique",
      "country": "France",
      "approxPeriod": "modern common usage",
      "confidence": "high"
    },
    "ar": {
      "saying": "الصدق أفضل سياسة",
      "country": "Arab world",
      "approxPeriod": "modern common usage",
      "confidence": "high"
    }
  },
  "time-flies": {
    "de": {
      "saying": "Die Zeit fliegt",
      "country": "Germany",
      "approxPeriod": "modern common usage",
      "confidence": "high"
    },
    "es": {
      "saying": "El tiempo vuela",
      "country": "Spain / Latin America",
      "approxPeriod": "modern common usage",
      "confidence": "high"
    },
    "no": {
      "saying": "Tiden flyr",
      "country": "Norway",
      "approxPeriod": "modern common usage",
      "confidence": "high"
    },
    "la": {
      "saying": "Tempus fugit",
      "country": "Ancient Rome / Latin tradition",
      "approxPeriod": "classical/medieval Latin",
      "confidence": "high"
    },
    "zh": {
      "saying": "光阴似箭",
      "literal": "Time is like an arrow",
      "country": "China",
      "approxPeriod": "traditional",
      "confidence": "high"
    },
    "ja": {
      "saying": "光陰矢の如し",
      "literal": "Time is like an arrow",
      "country": "Japan",
      "approxPeriod": "traditional",
      "confidence": "high"
    },
    "it": {
      "saying": "Il tempo vola",
      "country": "Italy",
      "approxPeriod": "modern common usage",
      "confidence": "high"
    },
    "hi": {
      "saying": "समय उड़ता है",
      "country": "India",
      "approxPeriod": "modern common usage",
      "confidence": "high"
    },
    "el": {
      "saying": "Ο χρόνος πετάει",
      "country": "Greece",
      "approxPeriod": "modern common usage",
      "confidence": "high"
    },
    "fr": {
      "saying": "Le temps file",
      "country": "France",
      "approxPeriod": "traditional/modern common usage",
      "confidence": "high"
    },
    "ar": {
      "saying": "الوقت يطير",
      "country": "Arab world",
      "approxPeriod": "modern common usage",
      "confidence": "high"
    }
  },
  "you-live-and-learn": {
    "de": {
      "saying": "Man lernt nie aus",
      "literal": "One never stops learning",
      "country": "Germany",
      "approxPeriod": "traditional/modern common usage",
      "confidence": "high"
    },
    "es": {
      "saying": "Viviendo se aprende",
      "country": "Spain / Latin America",
      "approxPeriod": "traditional/modern common usage",
      "confidence": "high"
    },
    "no": {
      "saying": "Man lærer så lenge man lever",
      "country": "Norway",
      "approxPeriod": "traditional",
      "confidence": "high"
    },
    "la": {
      "saying": "Vivendo discimus",
      "literal": "By living, we learn",
      "country": "Latin tradition",
      "approxPeriod": "Neo-Latin / maxim tradition",
      "confidence": "high"
    },
    "zh": {
      "saying": "活到老，学到老",
      "literal": "Live until old, learn until old",
      "country": "China",
      "approxPeriod": "traditional/modern common usage",
      "confidence": "high"
    },
    "ja": {
      "saying": "生きている限り学ぶ",
      "literal": "As long as one lives, one learns",
      "country": "Japan",
      "approxPeriod": "modern common usage",
      "confidence": "medium"
    },
    "it": {
      "saying": "Non si finisce mai di imparare",
      "literal": "One never finishes learning",
      "country": "Italy",
      "approxPeriod": "traditional/modern common usage",
      "confidence": "high"
    },
    "hi": {
      "saying": "इंसान जीते-जी सीखता रहता है",
      "country": "India",
      "approxPeriod": "modern common usage",
      "confidence": "medium"
    },
    "el": {
      "saying": "Όσο ζεις μαθαίνεις",
      "country": "Greece",
      "approxPeriod": "traditional/modern common usage",
      "confidence": "high"
    },
    "fr": {
      "saying": "On apprend tous les jours",
      "country": "France",
      "approxPeriod": "modern common usage",
      "confidence": "high"
    },
    "ar": {
      "saying": "الإنسان يتعلم ما دام حياً",
      "country": "Arab world",
      "approxPeriod": "modern common usage",
      "confidence": "medium"
    }
  },
  "easy-come-easy-go": {
    "de": {
      "saying": "Wie gewonnen, so zerronnen",
      "literal": "As won, so vanished",
      "country": "Germany",
      "approxPeriod": "traditional",
      "confidence": "high"
    },
    "es": {
      "saying": "Lo que fácil viene, fácil se va",
      "country": "Spain / Latin America",
      "approxPeriod": "modern common usage",
      "confidence": "high"
    },
    "no": {
      "saying": "Lett kommet, lett gått",
      "country": "Norway",
      "approxPeriod": "modern common usage",
      "confidence": "high"
    },
    "la": {
      "saying": "Male parta male dilabuntur",
      "literal": "Ill-gotten things are badly lost",
      "country": "Ancient Rome / Latin tradition",
      "approxPeriod": "classical/medieval",
      "confidence": "medium"
    },
    "zh": {
      "saying": "来得容易，去得快",
      "country": "China",
      "approxPeriod": "modern common usage",
      "confidence": "high"
    },
    "ja": {
      "saying": "悪銭身につかず",
      "literal": "Bad money does not stay with you",
      "country": "Japan",
      "approxPeriod": "traditional",
      "confidence": "medium"
    },
    "it": {
      "saying": "Quel che viene facile, facile se ne va",
      "country": "Italy",
      "approxPeriod": "modern common usage",
      "confidence": "high"
    },
    "hi": {
      "saying": "आसानी से आया, आसानी से गया",
      "country": "India",
      "approxPeriod": "modern common usage",
      "confidence": "high"
    },
    "el": {
      "saying": "Εύκολα έρχονται, εύκολα φεύγουν",
      "country": "Greece",
      "approxPeriod": "modern common usage",
      "confidence": "high"
    },
    "fr": {
      "saying": "Ce qui vient facilement s’en va facilement",
      "country": "France",
      "approxPeriod": "modern common usage",
      "confidence": "high"
    },
    "ar": {
      "saying": "ما يأتي بسهولة يذهب بسهولة",
      "country": "Arab world",
      "approxPeriod": "modern common usage",
      "confidence": "high"
    }
  },
  "no-pain-no-gain": {
    "de": {
      "saying": "Ohne Fleiß kein Preis",
      "literal": "No prize without diligence",
      "country": "Germany",
      "approxPeriod": "traditional",
      "confidence": "high"
    },
    "es": {
      "saying": "Sin esfuerzo no hay recompensa",
      "country": "Spain / Latin America",
      "approxPeriod": "modern common usage",
      "confidence": "high"
    },
    "no": {
      "saying": "Uten innsats, ingen gevinst",
      "country": "Norway",
      "approxPeriod": "modern common usage",
      "confidence": "high"
    },
    "la": {
      "saying": "Per aspera ad astra",
      "literal": "Through hardships to the stars",
      "country": "Latin tradition",
      "approxPeriod": "classical/modern motto tradition",
      "confidence": "medium"
    },
    "zh": {
      "saying": "一分耕耘，一分收获",
      "literal": "One part plowing, one part harvest",
      "country": "China",
      "approxPeriod": "traditional/modern common usage",
      "confidence": "high"
    },
    "ja": {
      "saying": "苦労なくして得るものなし",
      "country": "Japan",
      "approxPeriod": "modern common usage",
      "confidence": "high"
    },
    "it": {
      "saying": "Senza fatica non si ottiene nulla",
      "country": "Italy",
      "approxPeriod": "modern common usage",
      "confidence": "high"
    },
    "hi": {
      "saying": "मेहनत के बिना फल नहीं मिलता",
      "country": "India",
      "approxPeriod": "modern common usage",
      "confidence": "high"
    },
    "el": {
      "saying": "Χωρίς κόπο δεν υπάρχει κέρδος",
      "country": "Greece",
      "approxPeriod": "modern common usage",
      "confidence": "high"
    },
    "fr": {
      "saying": "On n’a rien sans rien",
      "literal": "You get nothing without giving something",
      "country": "France",
      "approxPeriod": "traditional/modern common usage",
      "confidence": "high"
    },
    "ar": {
      "saying": "من جد وجد",
      "literal": "Who strives, finds/succeeds",
      "country": "Arab world",
      "approxPeriod": "traditional",
      "confidence": "high"
    }
  },
  "silence-golden": {
    "de": {
      "saying": "Reden ist Silber, Schweigen ist Gold",
      "country": "Germany",
      "approxPeriod": "traditional",
      "confidence": "high"
    },
    "es": {
      "saying": "El silencio es oro",
      "country": "Spain / Latin America",
      "approxPeriod": "modern common usage",
      "confidence": "high"
    },
    "no": {
      "saying": "Tale er sølv, taushet er gull",
      "country": "Norway",
      "approxPeriod": "traditional",
      "confidence": "high"
    },
    "la": {
      "saying": "Silentium est aureum",
      "country": "Neo-Latin / Europe",
      "approxPeriod": "modern Latin rendering",
      "confidence": "high"
    },
    "zh": {
      "saying": "沉默是金",
      "country": "China",
      "approxPeriod": "modern common usage",
      "confidence": "high"
    },
    "ja": {
      "saying": "沈黙は金",
      "country": "Japan",
      "approxPeriod": "modern common usage",
      "confidence": "high"
    },
    "it": {
      "saying": "Il silenzio è d’oro",
      "country": "Italy",
      "approxPeriod": "modern common usage",
      "confidence": "high"
    },
    "hi": {
      "saying": "मौन सोना है",
      "country": "India",
      "approxPeriod": "modern common usage",
      "confidence": "high"
    },
    "el": {
      "saying": "Η σιωπή είναι χρυσός",
      "country": "Greece",
      "approxPeriod": "modern common usage",
      "confidence": "high"
    },
    "fr": {
      "saying": "La parole est d’argent, le silence est d’or",
      "country": "France",
      "approxPeriod": "traditional",
      "confidence": "high"
    },
    "ar": {
      "saying": "الصمت من ذهب",
      "country": "Arab world",
      "approxPeriod": "traditional/modern common usage",
      "confidence": "high"
    }
  },
  "knowledge-power": {
    "de": {
      "saying": "Wissen ist Macht",
      "country": "Germany",
      "approxPeriod": "early modern/modern",
      "confidence": "high"
    },
    "es": {
      "saying": "El conocimiento es poder",
      "country": "Spain / Latin America",
      "approxPeriod": "modern common usage",
      "confidence": "high"
    },
    "no": {
      "saying": "Kunnskap er makt",
      "country": "Norway",
      "approxPeriod": "modern common usage",
      "confidence": "high"
    },
    "la": {
      "saying": "Scientia potentia est",
      "country": "Europe / Latin tradition",
      "approxPeriod": "early modern, associated with Baconian tradition",
      "confidence": "high"
    },
    "zh": {
      "saying": "知识就是力量",
      "country": "China",
      "approxPeriod": "modern common usage",
      "confidence": "high"
    },
    "ja": {
      "saying": "知識は力なり",
      "country": "Japan",
      "approxPeriod": "modern common usage",
      "confidence": "high"
    },
    "it": {
      "saying": "Sapere è potere",
      "country": "Italy",
      "approxPeriod": "modern common usage",
      "confidence": "high"
    },
    "hi": {
      "saying": "ज्ञान ही शक्ति है",
      "country": "India",
      "approxPeriod": "modern common usage",
      "confidence": "high"
    },
    "el": {
      "saying": "Η γνώση είναι δύναμη",
      "country": "Greece",
      "approxPeriod": "modern common usage",
      "confidence": "high"
    },
    "fr": {
      "saying": "Le savoir, c’est le pouvoir",
      "country": "France",
      "approxPeriod": "modern common usage",
      "confidence": "high"
    },
    "ar": {
      "saying": "المعرفة قوة",
      "country": "Arab world",
      "approxPeriod": "modern common usage",
      "confidence": "high"
    }
  },
  "all-that-glitters": {
    "de": {
      "saying": "Es ist nicht alles Gold, was glänzt",
      "country": "Germany",
      "approxPeriod": "traditional",
      "confidence": "high"
    },
    "es": {
      "saying": "No es oro todo lo que reluce",
      "country": "Spain / Latin America",
      "approxPeriod": "traditional",
      "confidence": "high"
    },
    "no": {
      "saying": "Alt som glimrer er ikke gull",
      "country": "Norway",
      "approxPeriod": "traditional/modern common usage",
      "confidence": "high"
    },
    "la": {
      "saying": "Non omne quod nitet aurum est",
      "country": "Medieval/Neo-Latin Europe",
      "approxPeriod": "medieval or later",
      "confidence": "high"
    },
    "zh": {
      "saying": "闪光的不都是金子",
      "country": "China",
      "approxPeriod": "modern common usage",
      "confidence": "high"
    },
    "ja": {
      "saying": "光るもの必ずしも金ならず",
      "country": "Japan",
      "approxPeriod": "modern common usage",
      "confidence": "high"
    },
    "it": {
      "saying": "Non è tutto oro quel che luccica",
      "country": "Italy",
      "approxPeriod": "traditional",
      "confidence": "high"
    },
    "hi": {
      "saying": "हर चमकने वाली चीज़ सोना नहीं होती",
      "country": "India",
      "approxPeriod": "modern common usage",
      "confidence": "high"
    },
    "el": {
      "saying": "Δεν είναι χρυσός ό,τι λάμπει",
      "country": "Greece",
      "approxPeriod": "modern common usage",
      "confidence": "high"
    },
    "fr": {
      "saying": "Tout ce qui brille n’est pas or",
      "country": "France",
      "approxPeriod": "traditional",
      "confidence": "high"
    },
    "ar": {
      "saying": "ليس كل ما يلمع ذهباً",
      "country": "Arab world",
      "approxPeriod": "modern common usage",
      "confidence": "high"
    }
  },
  "blood-thicker-water": {
    "de": {
      "saying": "Blut ist dicker als Wasser",
      "country": "Germany",
      "approxPeriod": "traditional/modern common usage",
      "confidence": "high"
    },
    "es": {
      "saying": "La sangre tira",
      "literal": "Blood pulls",
      "country": "Spain / Latin America",
      "approxPeriod": "traditional/modern common usage",
      "confidence": "high"
    },
    "no": {
      "saying": "Blod er tykkere enn vann",
      "country": "Norway",
      "approxPeriod": "modern common usage",
      "confidence": "high"
    },
    "la": {
      "saying": "Sanguis aqua densior est",
      "country": "Neo-Latin / Europe",
      "approxPeriod": "modern Latin rendering",
      "confidence": "medium"
    },
    "zh": {
      "saying": "血浓于水",
      "literal": "Blood is thicker than water",
      "country": "China",
      "approxPeriod": "modern common usage",
      "confidence": "high"
    },
    "ja": {
      "saying": "血は水よりも濃い",
      "country": "Japan",
      "approxPeriod": "modern common usage",
      "confidence": "high"
    },
    "it": {
      "saying": "Il sangue non è acqua",
      "literal": "Blood is not water",
      "country": "Italy",
      "approxPeriod": "traditional/modern common usage",
      "confidence": "high"
    },
    "hi": {
      "saying": "खून पानी से गाढ़ा होता है",
      "country": "India",
      "approxPeriod": "modern common usage",
      "confidence": "high"
    },
    "el": {
      "saying": "Το αίμα νερό δεν γίνεται",
      "literal": "Blood does not become water",
      "country": "Greece",
      "approxPeriod": "traditional/modern common usage",
      "confidence": "high"
    },
    "fr": {
      "saying": "Les liens du sang sont les plus forts",
      "literal": "Blood ties are the strongest",
      "country": "France",
      "approxPeriod": "modern common usage",
      "confidence": "medium"
    },
    "ar": {
      "saying": "الدم لا يصير ماءً",
      "literal": "Blood does not become water",
      "country": "Arab world",
      "approxPeriod": "traditional/modern common usage",
      "confidence": "high"
    }
  },
  "walls-have-ears": {
    "de": {
      "saying": "Wände haben Ohren",
      "country": "Germany",
      "approxPeriod": "traditional",
      "confidence": "high"
    },
    "es": {
      "saying": "Las paredes oyen",
      "country": "Spain / Latin America",
      "approxPeriod": "traditional",
      "confidence": "high"
    },
    "no": {
      "saying": "Veggene har ører",
      "country": "Norway",
      "approxPeriod": "traditional/modern common usage",
      "confidence": "high"
    },
    "la": {
      "saying": "Parietes aures habent",
      "country": "Latin tradition / Europe",
      "approxPeriod": "medieval/Neo-Latin",
      "confidence": "high"
    },
    "zh": {
      "saying": "隔墙有耳",
      "literal": "There are ears beyond the wall",
      "country": "China",
      "approxPeriod": "traditional",
      "confidence": "high"
    },
    "ja": {
      "saying": "壁に耳あり障子に目あり",
      "literal": "Walls have ears, sliding doors have eyes",
      "country": "Japan",
      "approxPeriod": "traditional",
      "confidence": "high"
    },
    "it": {
      "saying": "Anche i muri hanno orecchie",
      "country": "Italy",
      "approxPeriod": "traditional",
      "confidence": "high"
    },
    "hi": {
      "saying": "दीवारों के भी कान होते हैं",
      "country": "India",
      "approxPeriod": "modern common usage",
      "confidence": "high"
    },
    "el": {
      "saying": "Και οι τοίχοι έχουν αυτιά",
      "country": "Greece",
      "approxPeriod": "traditional/modern common usage",
      "confidence": "high"
    },
    "fr": {
      "saying": "Les murs ont des oreilles",
      "country": "France",
      "approxPeriod": "traditional",
      "confidence": "high"
    },
    "ar": {
      "saying": "للجدران آذان",
      "country": "Arab world",
      "approxPeriod": "traditional/modern common usage",
      "confidence": "high"
    }
  },
  "necessity-invention": {
    "de": {
      "saying": "Not macht erfinderisch",
      "literal": "Need makes inventive",
      "country": "Germany",
      "approxPeriod": "traditional",
      "confidence": "high"
    },
    "es": {
      "saying": "La necesidad es la madre de la invención",
      "country": "Spain / Latin America",
      "approxPeriod": "traditional / modern common",
      "confidence": "high"
    },
    "no": {
      "saying": "Nød lærer naken kvinne å spinne",
      "literal": "Need teaches a naked woman to spin",
      "country": "Norway",
      "approxPeriod": "traditional",
      "confidence": "high"
    },
    "la": {
      "saying": "Necessitas mater inventionis est",
      "literal": "Necessity is the mother of invention",
      "country": "Europe / Neo-Latin",
      "approxPeriod": "medieval / later proverb form",
      "confidence": "medium"
    },
    "zh": {
      "saying": "需要是发明之母",
      "literal": "Need is the mother of invention",
      "country": "China",
      "approxPeriod": "modern common equivalent",
      "confidence": "medium"
    },
    "ja": {
      "saying": "必要は発明の母",
      "literal": "Necessity is the mother of invention",
      "country": "Japan",
      "approxPeriod": "modern common equivalent",
      "confidence": "medium"
    },
    "it": {
      "saying": "La necessità aguzza l’ingegno",
      "literal": "Necessity sharpens ingenuity",
      "country": "Italy",
      "approxPeriod": "traditional",
      "confidence": "high"
    },
    "hi": {
      "saying": "आवश्यकता आविष्कार की जननी है",
      "literal": "Necessity is the mother of invention",
      "country": "India",
      "approxPeriod": "modern common equivalent",
      "confidence": "high"
    },
    "el": {
      "saying": "Η ανάγκη είναι η μητέρα της εφεύρεσης",
      "literal": "Necessity is the mother of invention",
      "country": "Greece",
      "approxPeriod": "modern common equivalent",
      "confidence": "medium"
    },
    "fr": {
      "saying": "Nécessité est mère d’invention",
      "country": "France",
      "approxPeriod": "traditional",
      "confidence": "high"
    },
    "ar": {
      "saying": "الحاجة أم الاختراع",
      "literal": "Need is the mother of invention",
      "country": "Arab world",
      "approxPeriod": "modern common equivalent",
      "confidence": "high"
    }
  },
  "where-theres-will": {
    "de": {
      "saying": "Wo ein Wille ist, ist auch ein Weg",
      "country": "Germany",
      "approxPeriod": "traditional / modern common",
      "confidence": "high"
    },
    "es": {
      "saying": "Querer es poder",
      "literal": "To want is to be able",
      "country": "Spain / Latin America",
      "approxPeriod": "traditional",
      "confidence": "high"
    },
    "no": {
      "saying": "Vil man, så får man det til",
      "literal": "If one wants, one manages it",
      "country": "Norway",
      "approxPeriod": "modern common equivalent",
      "confidence": "medium"
    },
    "la": {
      "saying": "Ubi voluntas, ibi via",
      "literal": "Where there is will, there is a way",
      "country": "Europe / Neo-Latin",
      "approxPeriod": "later proverb form",
      "confidence": "medium"
    },
    "zh": {
      "saying": "有志者事竟成",
      "literal": "Where there is resolve, the task is finally accomplished",
      "country": "China",
      "approxPeriod": "traditional",
      "confidence": "high"
    },
    "ja": {
      "saying": "精神一到何事か成らざらん",
      "literal": "If spirit is focused, what cannot be achieved?",
      "country": "Japan / Sino-Japanese tradition",
      "approxPeriod": "traditional",
      "confidence": "medium"
    },
    "it": {
      "saying": "Volere è potere",
      "literal": "To want is to be able",
      "country": "Italy",
      "approxPeriod": "traditional",
      "confidence": "high"
    },
    "hi": {
      "saying": "जहाँ चाह वहाँ राह",
      "literal": "Where there is desire, there is a path",
      "country": "India",
      "approxPeriod": "traditional / modern common",
      "confidence": "high"
    },
    "el": {
      "saying": "Όπου υπάρχει θέληση, υπάρχει και τρόπος",
      "literal": "Where there is will, there is a way",
      "country": "Greece",
      "approxPeriod": "modern common equivalent",
      "confidence": "high"
    },
    "fr": {
      "saying": "Vouloir, c’est pouvoir",
      "literal": "To want is to be able",
      "country": "France",
      "approxPeriod": "traditional",
      "confidence": "high"
    },
    "ar": {
      "saying": "من جد وجد",
      "literal": "Who strives, finds",
      "country": "Arab world",
      "approxPeriod": "traditional",
      "confidence": "high"
    }
  },
  "nothing-ventured": {
    "de": {
      "saying": "Wer nicht wagt, der nicht gewinnt",
      "literal": "Who does not dare does not win",
      "country": "Germany",
      "approxPeriod": "traditional",
      "confidence": "high"
    },
    "es": {
      "saying": "Quien no arriesga, no gana",
      "literal": "Who does not risk does not win",
      "country": "Spain / Latin America",
      "approxPeriod": "traditional / modern common",
      "confidence": "high"
    },
    "no": {
      "saying": "Den som intet våger, intet vinner",
      "country": "Norway",
      "approxPeriod": "traditional",
      "confidence": "high"
    },
    "la": {
      "saying": "Qui non audet, non vincit",
      "literal": "Who does not dare does not win",
      "country": "Europe / Neo-Latin",
      "approxPeriod": "later proverb form",
      "confidence": "medium"
    },
    "zh": {
      "saying": "不入虎穴，焉得虎子",
      "literal": "If you do not enter the tiger’s den, how can you get its cub?",
      "country": "China",
      "approxPeriod": "traditional",
      "confidence": "high"
    },
    "ja": {
      "saying": "虎穴に入らずんば虎子を得ず",
      "literal": "Without entering the tiger’s den, one cannot get its cub",
      "country": "Japan / Sino-Japanese tradition",
      "approxPeriod": "traditional",
      "confidence": "high"
    },
    "it": {
      "saying": "Chi non risica non rosica",
      "literal": "Who does not risk does not nibble",
      "country": "Italy",
      "approxPeriod": "traditional",
      "confidence": "high"
    },
    "hi": {
      "saying": "जोखिम उठाए बिना लाभ नहीं",
      "literal": "Without taking risk, there is no gain",
      "country": "India",
      "approxPeriod": "modern common equivalent",
      "confidence": "medium"
    },
    "el": {
      "saying": "Όποιος δεν ρισκάρει, δεν κερδίζει",
      "literal": "Who does not risk does not win",
      "country": "Greece",
      "approxPeriod": "modern common equivalent",
      "confidence": "high"
    },
    "fr": {
      "saying": "Qui ne risque rien n’a rien",
      "literal": "Who risks nothing has nothing",
      "country": "France",
      "approxPeriod": "traditional",
      "confidence": "high"
    },
    "ar": {
      "saying": "من لا يخاطر لا يكسب",
      "literal": "Who does not risk does not gain",
      "country": "Arab world",
      "approxPeriod": "modern common equivalent",
      "confidence": "medium"
    }
  },
  "empty-vessels": {
    "de": {
      "saying": "Leere Fässer klingen hohl",
      "literal": "Empty barrels sound hollow",
      "country": "Germany",
      "approxPeriod": "traditional",
      "confidence": "high"
    },
    "es": {
      "saying": "Mucho ruido y pocas nueces",
      "literal": "Much noise and few nuts",
      "country": "Spain / Latin America",
      "approxPeriod": "traditional",
      "confidence": "high"
    },
    "no": {
      "saying": "Tomme tønner buldrer mest",
      "literal": "Empty barrels rumble most",
      "country": "Norway",
      "approxPeriod": "traditional",
      "confidence": "high"
    },
    "la": {
      "saying": "Vasa inania plurimum sonant",
      "literal": "Empty vessels sound the most",
      "country": "Medieval / European Latin",
      "approxPeriod": "traditional Latin proverb",
      "confidence": "high"
    },
    "zh": {
      "saying": "满瓶不响，半瓶晃荡",
      "literal": "A full bottle makes no sound; a half bottle sloshes",
      "country": "China",
      "approxPeriod": "traditional / modern common",
      "confidence": "high"
    },
    "ja": {
      "saying": "空き樽は音が高い",
      "literal": "Empty barrels make a loud sound",
      "country": "Japan",
      "approxPeriod": "traditional",
      "confidence": "high"
    },
    "it": {
      "saying": "La botte vuota fa più rumore",
      "literal": "The empty barrel makes more noise",
      "country": "Italy",
      "approxPeriod": "traditional",
      "confidence": "high"
    },
    "hi": {
      "saying": "अधजल गगरी छलकत जाए",
      "literal": "A half-filled pitcher keeps spilling",
      "country": "India",
      "approxPeriod": "traditional",
      "confidence": "high"
    },
    "el": {
      "saying": "Τα άδεια βαρέλια κάνουν τον περισσότερο θόρυβο",
      "literal": "Empty barrels make the most noise",
      "country": "Greece",
      "approxPeriod": "modern common equivalent",
      "confidence": "medium"
    },
    "fr": {
      "saying": "Les tonneaux vides sont ceux qui font le plus de bruit",
      "literal": "Empty barrels make the most noise",
      "country": "France",
      "approxPeriod": "traditional",
      "confidence": "high"
    },
    "ar": {
      "saying": "البرميل الفارغ أكثر ضجيجًا",
      "literal": "The empty barrel is the noisiest",
      "country": "Arab world",
      "approxPeriod": "modern common equivalent",
      "confidence": "medium"
    }
  },
  "slow-steady": {
    "de": {
      "saying": "Eile mit Weile",
      "literal": "Hurry with leisure",
      "country": "Germany",
      "approxPeriod": "traditional",
      "confidence": "high"
    },
    "es": {
      "saying": "Sin prisa pero sin pausa",
      "literal": "Without haste but without pause",
      "country": "Spain / Latin America",
      "approxPeriod": "traditional / modern common",
      "confidence": "high"
    },
    "no": {
      "saying": "Langsomt men sikkert",
      "literal": "Slowly but surely",
      "country": "Norway",
      "approxPeriod": "modern common equivalent",
      "confidence": "high"
    },
    "la": {
      "saying": "Festina lente",
      "literal": "Make haste slowly",
      "country": "Ancient Rome",
      "approxPeriod": "classical",
      "confidence": "high"
    },
    "zh": {
      "saying": "稳扎稳打",
      "literal": "Advance steadily and surely",
      "country": "China",
      "approxPeriod": "traditional / modern common",
      "confidence": "high"
    },
    "ja": {
      "saying": "急がば回れ",
      "literal": "If in a hurry, take the roundabout way",
      "country": "Japan",
      "approxPeriod": "traditional",
      "confidence": "high"
    },
    "it": {
      "saying": "Chi va piano va sano e va lontano",
      "literal": "Who goes slowly goes safely and far",
      "country": "Italy",
      "approxPeriod": "traditional",
      "confidence": "high"
    },
    "hi": {
      "saying": "धीरे-धीरे रे मना, धीरे सब कुछ होय",
      "literal": "Slowly, slowly, mind; everything happens slowly",
      "country": "India",
      "approxPeriod": "traditional / Kabir-associated",
      "confidence": "high"
    },
    "el": {
      "saying": "Σιγά σιγά γίνεται η αγουρίδα μέλι",
      "literal": "Little by little the sour grape becomes honey",
      "country": "Greece",
      "approxPeriod": "traditional",
      "confidence": "high"
    },
    "fr": {
      "saying": "Qui va doucement va sûrement",
      "literal": "Who goes slowly goes surely",
      "country": "France",
      "approxPeriod": "traditional",
      "confidence": "high"
    },
    "ar": {
      "saying": "في التأني السلامة وفي العجلة الندامة",
      "literal": "In deliberation is safety, in haste is regret",
      "country": "Arab world",
      "approxPeriod": "traditional",
      "confidence": "high"
    }
  },
  "every-beginning-hard": {
    "de": {
      "saying": "Aller Anfang ist schwer",
      "country": "Germany",
      "approxPeriod": "traditional",
      "confidence": "high"
    },
    "es": {
      "saying": "Todos los comienzos son difíciles",
      "literal": "All beginnings are difficult",
      "country": "Spain / Latin America",
      "approxPeriod": "modern common equivalent",
      "confidence": "medium"
    },
    "no": {
      "saying": "All begynnelse er vanskelig",
      "country": "Norway",
      "approxPeriod": "modern common equivalent",
      "confidence": "medium"
    },
    "la": {
      "saying": "Omne initium difficile est",
      "literal": "Every beginning is difficult",
      "country": "Europe / Latin proverb tradition",
      "approxPeriod": "traditional",
      "confidence": "medium"
    },
    "zh": {
      "saying": "万事开头难",
      "literal": "In all things, the beginning is hard",
      "country": "China",
      "approxPeriod": "traditional",
      "confidence": "high"
    },
    "ja": {
      "saying": "始めは難しい",
      "literal": "The beginning is difficult",
      "country": "Japan",
      "approxPeriod": "modern direct equivalent",
      "confidence": "medium"
    },
    "it": {
      "saying": "Tutti gli inizi sono difficili",
      "literal": "All beginnings are difficult",
      "country": "Italy",
      "approxPeriod": "modern common equivalent",
      "confidence": "medium"
    },
    "hi": {
      "saying": "हर शुरुआत कठिन होती है",
      "literal": "Every beginning is difficult",
      "country": "India",
      "approxPeriod": "modern direct equivalent",
      "confidence": "medium"
    },
    "el": {
      "saying": "Κάθε αρχή και δύσκολη",
      "literal": "Every beginning is difficult",
      "country": "Greece",
      "approxPeriod": "traditional / modern common",
      "confidence": "high"
    },
    "fr": {
      "saying": "Il n’y a que le premier pas qui coûte",
      "literal": "Only the first step costs",
      "country": "France",
      "approxPeriod": "traditional",
      "confidence": "high"
    },
    "ar": {
      "saying": "كل بداية صعبة",
      "literal": "Every beginning is difficult",
      "country": "Arab world",
      "approxPeriod": "modern common equivalent",
      "confidence": "medium"
    }
  },
  "like-father-son": {
    "de": {
      "saying": "Wie der Vater, so der Sohn",
      "country": "Germany",
      "approxPeriod": "traditional",
      "confidence": "high"
    },
    "es": {
      "saying": "De tal palo, tal astilla",
      "literal": "From such a stick, such a splinter",
      "country": "Spain / Latin America",
      "approxPeriod": "traditional",
      "confidence": "high"
    },
    "no": {
      "saying": "Som far, så sønn",
      "country": "Norway",
      "approxPeriod": "traditional / modern common",
      "confidence": "high"
    },
    "la": {
      "saying": "Qualis pater, talis filius",
      "literal": "As the father, so the son",
      "country": "Europe / Latin proverb tradition",
      "approxPeriod": "traditional",
      "confidence": "high"
    },
    "zh": {
      "saying": "有其父必有其子",
      "literal": "If there is such a father, there must be such a son",
      "country": "China",
      "approxPeriod": "traditional",
      "confidence": "high"
    },
    "ja": {
      "saying": "蛙の子は蛙",
      "literal": "A frog’s child is a frog",
      "country": "Japan",
      "approxPeriod": "traditional",
      "confidence": "high"
    },
    "it": {
      "saying": "Tale padre, tale figlio",
      "country": "Italy",
      "approxPeriod": "traditional",
      "confidence": "high"
    },
    "hi": {
      "saying": "जैसा बाप वैसा बेटा",
      "literal": "As the father, so the son",
      "country": "India",
      "approxPeriod": "traditional / modern common",
      "confidence": "high"
    },
    "el": {
      "saying": "Το μήλο κάτω από τη μηλιά θα πέσει",
      "literal": "The apple will fall under the apple tree",
      "country": "Greece",
      "approxPeriod": "traditional",
      "confidence": "high"
    },
    "fr": {
      "saying": "Tel père, tel fils",
      "country": "France",
      "approxPeriod": "traditional",
      "confidence": "high"
    },
    "ar": {
      "saying": "هذا الشبل من ذاك الأسد",
      "literal": "This cub is from that lion",
      "country": "Arab world",
      "approxPeriod": "traditional",
      "confidence": "high"
    }
  },
  "out-of-sight": {
    "de": {
      "saying": "Aus den Augen, aus dem Sinn",
      "country": "Germany",
      "approxPeriod": "traditional",
      "confidence": "high"
    },
    "es": {
      "saying": "Ojos que no ven, corazón que no siente",
      "literal": "Eyes that do not see, heart that does not feel",
      "country": "Spain / Latin America",
      "approxPeriod": "traditional",
      "confidence": "high"
    },
    "no": {
      "saying": "Ute av syne, ute av sinn",
      "country": "Norway",
      "approxPeriod": "traditional / modern common",
      "confidence": "high"
    },
    "la": {
      "saying": "Ab oculis, ab animo",
      "literal": "Away from the eyes, away from the mind",
      "country": "Europe / Latin proverb tradition",
      "approxPeriod": "traditional",
      "confidence": "medium"
    },
    "zh": {
      "saying": "眼不见，心不烦",
      "literal": "If the eyes do not see, the heart is not troubled",
      "country": "China",
      "approxPeriod": "traditional",
      "confidence": "high"
    },
    "ja": {
      "saying": "去る者は日々に疎し",
      "literal": "Those who leave grow distant day by day",
      "country": "Japan",
      "approxPeriod": "traditional",
      "confidence": "high"
    },
    "it": {
      "saying": "Lontano dagli occhi, lontano dal cuore",
      "literal": "Far from the eyes, far from the heart",
      "country": "Italy",
      "approxPeriod": "traditional",
      "confidence": "high"
    },
    "hi": {
      "saying": "नज़र से दूर, दिल से दूर",
      "literal": "Far from sight, far from heart",
      "country": "India",
      "approxPeriod": "modern common equivalent",
      "confidence": "medium"
    },
    "el": {
      "saying": "Μάτια που δεν βλέπονται γρήγορα λησμονιούνται",
      "literal": "Eyes that do not see each other are quickly forgotten",
      "country": "Greece",
      "approxPeriod": "traditional",
      "confidence": "high"
    },
    "fr": {
      "saying": "Loin des yeux, loin du cœur",
      "literal": "Far from the eyes, far from the heart",
      "country": "France",
      "approxPeriod": "traditional",
      "confidence": "high"
    },
    "ar": {
      "saying": "البعيد عن العين بعيد عن القلب",
      "literal": "Far from the eye, far from the heart",
      "country": "Arab world",
      "approxPeriod": "traditional / modern common",
      "confidence": "high"
    }
  },
  "one-swallow": {
    "de": {
      "saying": "Eine Schwalbe macht noch keinen Sommer",
      "country": "Germany",
      "approxPeriod": "traditional",
      "confidence": "high"
    },
    "es": {
      "saying": "Una golondrina no hace verano",
      "country": "Spain / Latin America",
      "approxPeriod": "traditional",
      "confidence": "high"
    },
    "no": {
      "saying": "Én svale gjør ingen sommer",
      "country": "Norway",
      "approxPeriod": "traditional",
      "confidence": "high"
    },
    "la": {
      "saying": "Una hirundo non facit ver",
      "literal": "One swallow does not make spring",
      "country": "Ancient Rome / Europe",
      "approxPeriod": "classical / traditional",
      "confidence": "high"
    },
    "zh": {
      "saying": "一燕不成夏",
      "literal": "One swallow does not make a summer",
      "country": "China",
      "approxPeriod": "translated proverb / modern equivalent",
      "confidence": "medium"
    },
    "ja": {
      "saying": "一羽の燕が来ても夏にはならない",
      "literal": "One swallow coming does not make summer",
      "country": "Japan",
      "approxPeriod": "translated proverb / modern equivalent",
      "confidence": "medium"
    },
    "it": {
      "saying": "Una rondine non fa primavera",
      "literal": "One swallow does not make spring",
      "country": "Italy",
      "approxPeriod": "traditional",
      "confidence": "high"
    },
    "hi": {
      "saying": "एक फूल से माला नहीं बनती",
      "literal": "A garland is not made from one flower",
      "country": "India",
      "approxPeriod": "traditional equivalent",
      "confidence": "medium"
    },
    "el": {
      "saying": "Ένα χελιδόνι δεν φέρνει την άνοιξη",
      "literal": "One swallow does not bring spring",
      "country": "Greece",
      "approxPeriod": "traditional",
      "confidence": "high"
    },
    "fr": {
      "saying": "Une hirondelle ne fait pas le printemps",
      "literal": "One swallow does not make spring",
      "country": "France",
      "approxPeriod": "traditional",
      "confidence": "high"
    },
    "ar": {
      "saying": "عصفور واحد لا يصنع الربيع",
      "literal": "One bird does not make spring",
      "country": "Arab world",
      "approxPeriod": "modern common equivalent",
      "confidence": "medium"
    }
  },
  "opposites-attract": {
    "de": {
      "saying": "Gegensätze ziehen sich an",
      "country": "Germany",
      "approxPeriod": "modern common equivalent",
      "confidence": "high"
    },
    "es": {
      "saying": "Los polos opuestos se atraen",
      "literal": "Opposite poles attract",
      "country": "Spain / Latin America",
      "approxPeriod": "modern common equivalent",
      "confidence": "high"
    },
    "no": {
      "saying": "Motsetninger tiltrekker hverandre",
      "country": "Norway",
      "approxPeriod": "modern common equivalent",
      "confidence": "high"
    },
    "la": {
      "saying": "Contraria contrariis alliciuntur",
      "literal": "Opposites are attracted to opposites",
      "country": "Neo-Latin / coined direct equivalent",
      "approxPeriod": "modern direct equivalent",
      "confidence": "low"
    },
    "zh": {
      "saying": "异性相吸",
      "literal": "Opposites attract",
      "country": "China",
      "approxPeriod": "modern common equivalent",
      "confidence": "high"
    },
    "ja": {
      "saying": "正反対の者同士は惹かれ合う",
      "literal": "Complete opposites are attracted to each other",
      "country": "Japan",
      "approxPeriod": "modern direct equivalent",
      "confidence": "medium"
    },
    "it": {
      "saying": "Gli opposti si attraggono",
      "country": "Italy",
      "approxPeriod": "modern common equivalent",
      "confidence": "high"
    },
    "hi": {
      "saying": "विपरीत चीज़ें आकर्षित करती हैं",
      "literal": "Opposite things attract",
      "country": "India",
      "approxPeriod": "modern direct equivalent",
      "confidence": "medium"
    },
    "el": {
      "saying": "Τα ετερώνυμα έλκονται",
      "literal": "Unlike things attract",
      "country": "Greece",
      "approxPeriod": "modern common equivalent",
      "confidence": "high"
    },
    "fr": {
      "saying": "Les opposés s’attirent",
      "country": "France",
      "approxPeriod": "modern common equivalent",
      "confidence": "high"
    },
    "ar": {
      "saying": "الأضداد تتجاذب",
      "literal": "Opposites attract",
      "country": "Arab world",
      "approxPeriod": "modern common equivalent",
      "confidence": "high"
    }
  },
  "patience-virtue": {
    "de": {
      "saying": "Geduld ist eine Tugend",
      "country": "Germany",
      "approxPeriod": "traditional / modern common",
      "confidence": "high"
    },
    "es": {
      "saying": "La paciencia es una virtud",
      "country": "Spain / Latin America",
      "approxPeriod": "traditional / modern common",
      "confidence": "high"
    },
    "no": {
      "saying": "Tålmodighet er en dyd",
      "country": "Norway",
      "approxPeriod": "traditional / modern common",
      "confidence": "high"
    },
    "la": {
      "saying": "Patientia virtus est",
      "literal": "Patience is a virtue",
      "country": "Europe / Latin proverb tradition",
      "approxPeriod": "traditional",
      "confidence": "high"
    },
    "zh": {
      "saying": "忍耐是一种美德",
      "literal": "Patience is a virtue",
      "country": "China",
      "approxPeriod": "modern common equivalent",
      "confidence": "medium"
    },
    "ja": {
      "saying": "忍耐は美徳である",
      "literal": "Patience is a virtue",
      "country": "Japan",
      "approxPeriod": "modern common equivalent",
      "confidence": "medium"
    },
    "it": {
      "saying": "La pazienza è una virtù",
      "country": "Italy",
      "approxPeriod": "traditional / modern common",
      "confidence": "high"
    },
    "hi": {
      "saying": "धैर्य एक गुण है",
      "literal": "Patience is a virtue",
      "country": "India",
      "approxPeriod": "modern common equivalent",
      "confidence": "medium"
    },
    "el": {
      "saying": "Η υπομονή είναι αρετή",
      "literal": "Patience is a virtue",
      "country": "Greece",
      "approxPeriod": "traditional / modern common",
      "confidence": "high"
    },
    "fr": {
      "saying": "La patience est une vertu",
      "country": "France",
      "approxPeriod": "traditional / modern common",
      "confidence": "high"
    },
    "ar": {
      "saying": "الصبر فضيلة",
      "literal": "Patience is a virtue",
      "country": "Arab world",
      "approxPeriod": "traditional / modern common",
      "confidence": "high"
    }
  },
  "truth-will-out": {
    "de": {
      "saying": "Die Wahrheit kommt ans Licht",
      "literal": "The truth comes to light",
      "country": "Germany",
      "approxPeriod": "traditional / modern common",
      "confidence": "high"
    },
    "es": {
      "saying": "La verdad siempre sale a la luz",
      "literal": "The truth always comes to light",
      "country": "Spain / Latin America",
      "approxPeriod": "traditional / modern common",
      "confidence": "high"
    },
    "no": {
      "saying": "Sannheten kommer for en dag",
      "literal": "The truth comes one day",
      "country": "Norway",
      "approxPeriod": "traditional",
      "confidence": "high"
    },
    "la": {
      "saying": "Veritas temporis filia",
      "literal": "Truth is the daughter of time",
      "country": "Ancient Rome / Europe",
      "approxPeriod": "classical / traditional",
      "confidence": "high"
    },
    "zh": {
      "saying": "真相终会大白",
      "literal": "The truth will eventually become clear",
      "country": "China",
      "approxPeriod": "modern common equivalent",
      "confidence": "high"
    },
    "ja": {
      "saying": "真実はいずれ明らかになる",
      "literal": "The truth will eventually become clear",
      "country": "Japan",
      "approxPeriod": "modern common equivalent",
      "confidence": "medium"
    },
    "it": {
      "saying": "La verità viene sempre a galla",
      "literal": "The truth always comes to the surface",
      "country": "Italy",
      "approxPeriod": "traditional / modern common",
      "confidence": "high"
    },
    "hi": {
      "saying": "सत्य कभी छिपता नहीं",
      "literal": "Truth never stays hidden",
      "country": "India",
      "approxPeriod": "traditional / modern common",
      "confidence": "high"
    },
    "el": {
      "saying": "Η αλήθεια βγαίνει πάντα στο φως",
      "literal": "The truth always comes to light",
      "country": "Greece",
      "approxPeriod": "modern common equivalent",
      "confidence": "high"
    },
    "fr": {
      "saying": "La vérité finit toujours par éclater",
      "literal": "The truth always ends up bursting out",
      "country": "France",
      "approxPeriod": "traditional / modern common",
      "confidence": "high"
    },
    "ar": {
      "saying": "الحقيقة تظهر في النهاية",
      "literal": "The truth appears in the end",
      "country": "Arab world",
      "approxPeriod": "modern common equivalent",
      "confidence": "medium"
    }
  },
  "haste-makes-waste": {
    "de": {
      "saying": "Eile mit Weile",
      "literal": "Hurry with leisure",
      "country": "Germany",
      "approxPeriod": "traditional",
      "confidence": "high"
    },
    "es": {
      "saying": "Vísteme despacio, que tengo prisa",
      "literal": "Dress me slowly, for I am in a hurry",
      "country": "Spain",
      "approxPeriod": "traditional",
      "confidence": "high"
    },
    "no": {
      "saying": "Hastverk er lastverk",
      "literal": "Hasty work is faulty work",
      "country": "Norway",
      "approxPeriod": "traditional",
      "confidence": "high"
    },
    "la": {
      "saying": "Festina lente",
      "literal": "Make haste slowly",
      "country": "Ancient Rome",
      "approxPeriod": "classical",
      "confidence": "high"
    },
    "zh": {
      "saying": "欲速则不达",
      "literal": "Wanting speed means not arriving",
      "country": "China",
      "approxPeriod": "classical / traditional",
      "confidence": "high"
    },
    "ja": {
      "saying": "急がば回れ",
      "literal": "If in a hurry, take the roundabout way",
      "country": "Japan",
      "approxPeriod": "traditional",
      "confidence": "high"
    },
    "it": {
      "saying": "La gatta frettolosa fece i gattini ciechi",
      "literal": "The hasty cat gave birth to blind kittens",
      "country": "Italy",
      "approxPeriod": "traditional",
      "confidence": "high"
    },
    "hi": {
      "saying": "जल्दी का काम शैतान का",
      "literal": "Hasty work is the devil’s work",
      "country": "India",
      "approxPeriod": "traditional / modern common",
      "confidence": "high"
    },
    "el": {
      "saying": "Όποιος βιάζεται σκοντάφτει",
      "literal": "Whoever hurries stumbles",
      "country": "Greece",
      "approxPeriod": "traditional",
      "confidence": "high"
    },
    "fr": {
      "saying": "Il ne faut pas confondre vitesse et précipitation",
      "literal": "One must not confuse speed with haste",
      "country": "France",
      "approxPeriod": "modern common equivalent",
      "confidence": "high"
    },
    "ar": {
      "saying": "في العجلة الندامة وفي التأني السلامة",
      "literal": "In haste is regret, in deliberation is safety",
      "country": "Arab world",
      "approxPeriod": "traditional",
      "confidence": "high"
    }
  },
  "better-safe-than-sorry": {
    "de": {
      "saying": "Vorsicht ist besser als Nachsicht",
      "literal": "Caution is better than hindsight",
      "country": "Germany",
      "approxPeriod": "traditional",
      "confidence": "high"
    },
    "es": {
      "saying": "Más vale prevenir que curar",
      "literal": "Better to prevent than to cure",
      "country": "Spain / Latin America",
      "approxPeriod": "traditional",
      "confidence": "high"
    },
    "no": {
      "saying": "Det er bedre å være føre var",
      "literal": "It is better to be prepared beforehand",
      "country": "Norway",
      "approxPeriod": "traditional / modern common",
      "confidence": "high"
    },
    "la": {
      "saying": "Melius est praevenire quam curare",
      "literal": "It is better to prevent than to cure",
      "country": "Europe / Latin proverb tradition",
      "approxPeriod": "medieval / later proverb form",
      "confidence": "medium"
    },
    "zh": {
      "saying": "小心驶得万年船",
      "literal": "Carefulness sails a ship for ten thousand years",
      "country": "China",
      "approxPeriod": "traditional",
      "confidence": "high"
    },
    "ja": {
      "saying": "転ばぬ先の杖",
      "literal": "A cane before falling",
      "country": "Japan",
      "approxPeriod": "traditional",
      "confidence": "high"
    },
    "it": {
      "saying": "Meglio prevenire che curare",
      "literal": "Better to prevent than to cure",
      "country": "Italy",
      "approxPeriod": "traditional",
      "confidence": "high"
    },
    "hi": {
      "saying": "सावधानी हटी, दुर्घटना घटी",
      "literal": "When caution is gone, an accident happens",
      "country": "India",
      "approxPeriod": "modern common warning proverb",
      "confidence": "medium"
    },
    "el": {
      "saying": "Κάλλιο γαϊδουρόδενε παρά γαϊδουρογύρευε",
      "literal": "Better tie the donkey than search for it",
      "country": "Greece",
      "approxPeriod": "traditional",
      "confidence": "high"
    },
    "fr": {
      "saying": "Mieux vaut prévenir que guérir",
      "literal": "Better to prevent than to cure",
      "country": "France",
      "approxPeriod": "traditional",
      "confidence": "high"
    },
    "ar": {
      "saying": "الوقاية خير من العلاج",
      "literal": "Prevention is better than cure",
      "country": "Arab world",
      "approxPeriod": "traditional / modern common",
      "confidence": "high"
    }
  },
  "birds-feather": {
    "de": {
      "saying": "Gleich und gleich gesellt sich gern",
      "literal": "Like and like gladly associate",
      "country": "Germany",
      "approxPeriod": "traditional",
      "confidence": "high"
    },
    "es": {
      "saying": "Dios los cría y ellos se juntan",
      "literal": "God raises them and they come together",
      "country": "Spain / Latin America",
      "approxPeriod": "traditional",
      "confidence": "high"
    },
    "no": {
      "saying": "Like barn leker best",
      "literal": "Similar children play best",
      "country": "Norway",
      "approxPeriod": "traditional",
      "confidence": "high"
    },
    "la": {
      "saying": "Pares cum paribus facillime congregantur",
      "literal": "Equals most easily gather with equals",
      "country": "Europe / Latin proverb tradition",
      "approxPeriod": "traditional",
      "confidence": "medium"
    },
    "zh": {
      "saying": "物以类聚，人以群分",
      "literal": "Things gather by kind; people divide into groups",
      "country": "China",
      "approxPeriod": "classical / traditional",
      "confidence": "high"
    },
    "ja": {
      "saying": "類は友を呼ぶ",
      "literal": "Kinds call friends",
      "country": "Japan",
      "approxPeriod": "traditional",
      "confidence": "high"
    },
    "it": {
      "saying": "Chi si somiglia si piglia",
      "literal": "Those who resemble each other take each other",
      "country": "Italy",
      "approxPeriod": "traditional",
      "confidence": "high"
    },
    "hi": {
      "saying": "चोर-चोर मौसेरे भाई",
      "literal": "Thieves are like maternal cousins",
      "country": "India",
      "approxPeriod": "traditional",
      "confidence": "medium"
    },
    "el": {
      "saying": "Όμοιος ομοίω αεί πελάζει",
      "literal": "Like always approaches like",
      "country": "Ancient Greece / Greece",
      "approxPeriod": "classical / traditional",
      "confidence": "high"
    },
    "fr": {
      "saying": "Qui se ressemble s’assemble",
      "literal": "Those who resemble each other assemble",
      "country": "France",
      "approxPeriod": "traditional",
      "confidence": "high"
    },
    "ar": {
      "saying": "الطيور على أشكالها تقع",
      "literal": "Birds land with those of their own form",
      "country": "Arab world",
      "approxPeriod": "traditional",
      "confidence": "high"
    }
  },
  "better-one-bird": {
    "de": {
      "saying": "Besser den Spatz in der Hand als die Taube auf dem Dach",
      "literal": "Better the sparrow in the hand than the dove on the roof",
      "country": "Germany",
      "approxPeriod": "traditional",
      "confidence": "high"
    },
    "es": {
      "saying": "Más vale pájaro en mano que ciento volando",
      "literal": "A bird in the hand is worth more than a hundred flying",
      "country": "Spain / Latin America",
      "approxPeriod": "traditional",
      "confidence": "high"
    },
    "no": {
      "saying": "Bedre med én fugl i hånden enn ti på taket",
      "country": "Norway",
      "approxPeriod": "traditional",
      "confidence": "high"
    },
    "la": {
      "saying": "Melior est avis in manu quam duae in silva",
      "literal": "Better a bird in the hand than two in the forest",
      "country": "Europe / Latin proverb tradition",
      "approxPeriod": "traditional",
      "confidence": "medium"
    },
    "zh": {
      "saying": "双鸟在林，不如一鸟在手",
      "literal": "Two birds in the forest are not as good as one bird in the hand",
      "country": "China",
      "approxPeriod": "translated / modern common equivalent",
      "confidence": "medium"
    },
    "ja": {
      "saying": "明日の百より今日の五十",
      "literal": "Fifty today is better than a hundred tomorrow",
      "country": "Japan",
      "approxPeriod": "traditional equivalent",
      "confidence": "high"
    },
    "it": {
      "saying": "Meglio un uovo oggi che una gallina domani",
      "literal": "Better an egg today than a hen tomorrow",
      "country": "Italy",
      "approxPeriod": "traditional",
      "confidence": "high"
    },
    "hi": {
      "saying": "नौ नकद न तेरह उधार",
      "literal": "Nine in cash, not thirteen on credit",
      "country": "India",
      "approxPeriod": "traditional equivalent",
      "confidence": "high"
    },
    "el": {
      "saying": "Κάλλιο πέντε και στο χέρι παρά δέκα και καρτέρει",
      "literal": "Better five in the hand than ten and waiting",
      "country": "Greece",
      "approxPeriod": "traditional",
      "confidence": "high"
    },
    "fr": {
      "saying": "Un tiens vaut mieux que deux tu l’auras",
      "literal": "One “you hold” is worth more than two “you will have”",
      "country": "France",
      "approxPeriod": "traditional",
      "confidence": "high"
    },
    "ar": {
      "saying": "عصفور في اليد خير من عشرة على الشجرة",
      "literal": "A bird in the hand is better than ten on the tree",
      "country": "Arab world",
      "approxPeriod": "traditional / modern common",
      "confidence": "high"
    }
  },
  "after-rain-sun": {
    "de": {
      "saying": "Auf Regen folgt Sonnenschein",
      "literal": "Sunshine follows rain",
      "country": "Germany",
      "approxPeriod": "traditional",
      "confidence": "high"
    },
    "es": {
      "saying": "Después de la tormenta viene la calma",
      "literal": "After the storm comes calm",
      "country": "Spain / Latin America",
      "approxPeriod": "traditional",
      "confidence": "high"
    },
    "no": {
      "saying": "Etter regn kommer solskinn",
      "country": "Norway",
      "approxPeriod": "traditional / modern common",
      "confidence": "high"
    },
    "la": {
      "saying": "Post nubila Phoebus",
      "literal": "After clouds, Phoebus/the sun",
      "country": "Europe / Latin motto tradition",
      "approxPeriod": "traditional",
      "confidence": "high"
    },
    "zh": {
      "saying": "雨过天晴",
      "literal": "After rain, the sky clears",
      "country": "China",
      "approxPeriod": "traditional",
      "confidence": "high"
    },
    "ja": {
      "saying": "雨降って地固まる",
      "literal": "After rain, the ground hardens",
      "country": "Japan",
      "approxPeriod": "traditional",
      "confidence": "medium",
      "note": "Natural Japanese proverb, but emphasizes conflict/adversity leading to a stronger result."
    },
    "it": {
      "saying": "Dopo la pioggia viene il sereno",
      "literal": "After rain comes clear weather",
      "country": "Italy",
      "approxPeriod": "traditional",
      "confidence": "high"
    },
    "hi": {
      "saying": "हर अँधेरी रात के बाद सवेरा होता है",
      "literal": "After every dark night comes morning",
      "country": "India",
      "approxPeriod": "modern common equivalent",
      "confidence": "medium"
    },
    "el": {
      "saying": "Μετά την μπόρα έρχεται η λιακάδα",
      "literal": "After the storm comes sunshine",
      "country": "Greece",
      "approxPeriod": "modern common equivalent",
      "confidence": "high"
    },
    "fr": {
      "saying": "Après la pluie, le beau temps",
      "literal": "After rain, good weather",
      "country": "France",
      "approxPeriod": "traditional",
      "confidence": "high"
    },
    "ar": {
      "saying": "بعد العسر يسر",
      "literal": "After hardship comes ease",
      "country": "Arab world",
      "approxPeriod": "Quranic / traditional",
      "confidence": "high"
    }
  },
  "pick-your-brain": {
    "de": {
      "saying": "Darf ich dich mal anzapfen?",
      "literal": "May I tap you?",
      "country": "Germany",
      "approxPeriod": "modern colloquial",
      "confidence": "high"
    },
    "es": {
      "saying": "¿Te puedo pedir consejo?",
      "country": "Spain/Latin America",
      "approxPeriod": "modern",
      "confidence": "high"
    },
    "no": {
      "saying": "Kan jeg få lufte noe med deg?",
      "literal": "Can I air something with you?",
      "country": "Norway",
      "approxPeriod": "modern",
      "confidence": "high"
    },
    "la": {
      "saying": "Consilium tuum petere possum?",
      "literal": "May I seek your advice?",
      "country": "Classical/Renaissance Latin",
      "approxPeriod": "classical-style modern rendering",
      "confidence": "medium"
    },
    "zh": {
      "saying": "能向你请教一下吗？",
      "literal": "May I consult you a bit?",
      "country": "China",
      "approxPeriod": "modern",
      "confidence": "high"
    },
    "ja": {
      "saying": "ちょっと相談に乗ってもらえる？",
      "literal": "Can you help me with a small consultation?",
      "country": "Japan",
      "approxPeriod": "modern",
      "confidence": "high"
    },
    "it": {
      "saying": "Posso chiederti un parere?",
      "country": "Italy",
      "approxPeriod": "modern",
      "confidence": "high"
    },
    "hi": {
      "saying": "क्या मैं आपसे थोड़ी सलाह ले सकता हूँ?",
      "literal": "May I take a little advice from you?",
      "country": "India",
      "approxPeriod": "modern",
      "confidence": "high"
    },
    "el": {
      "saying": "Μπορώ να σου ζητήσω μια γνώμη;",
      "country": "Greece",
      "approxPeriod": "modern",
      "confidence": "high"
    },
    "fr": {
      "saying": "Je peux te demander ton avis ?",
      "country": "France",
      "approxPeriod": "modern",
      "confidence": "high"
    },
    "ar": {
      "saying": "هل يمكنني أن آخذ رأيك؟",
      "literal": "May I take your opinion?",
      "country": "Arab world",
      "approxPeriod": "modern",
      "confidence": "high"
    }
  },
  "bone-to-pick": {
    "de": {
      "saying": "Ich habe ein Hühnchen mit dir zu rupfen",
      "literal": "I have a little chicken to pluck with you",
      "country": "Germany",
      "approxPeriod": "traditional/modern",
      "confidence": "high"
    },
    "es": {
      "saying": "Tengo una cuenta pendiente contigo",
      "literal": "I have an unsettled account with you",
      "country": "Spain/Latin America",
      "approxPeriod": "modern",
      "confidence": "high"
    },
    "no": {
      "saying": "Jeg har en høne å plukke med deg",
      "literal": "I have a hen to pluck with you",
      "country": "Norway",
      "approxPeriod": "modern",
      "confidence": "high"
    },
    "la": {
      "saying": "Controversia mihi tecum est",
      "literal": "There is a dispute between me and you",
      "country": "Classical/Renaissance Latin",
      "approxPeriod": "classical-style modern rendering",
      "confidence": "medium"
    },
    "zh": {
      "saying": "我有笔账要跟你算",
      "literal": "I have an account to settle with you",
      "country": "China",
      "approxPeriod": "modern",
      "confidence": "high"
    },
    "ja": {
      "saying": "君に一言言いたいことがある",
      "literal": "I have something to say to you",
      "country": "Japan",
      "approxPeriod": "modern",
      "confidence": "high"
    },
    "it": {
      "saying": "Ho un conto in sospeso con te",
      "literal": "I have an unsettled account with you",
      "country": "Italy",
      "approxPeriod": "modern",
      "confidence": "high"
    },
    "hi": {
      "saying": "मुझे तुमसे एक शिकायत है",
      "literal": "I have a complaint with you",
      "country": "India",
      "approxPeriod": "modern",
      "confidence": "high"
    },
    "el": {
      "saying": "Έχω προηγούμενα μαζί σου",
      "literal": "I have prior issues with you",
      "country": "Greece",
      "approxPeriod": "modern colloquial",
      "confidence": "high"
    },
    "fr": {
      "saying": "J’ai un compte à régler avec toi",
      "literal": "I have an account to settle with you",
      "country": "France",
      "approxPeriod": "modern",
      "confidence": "high"
    },
    "ar": {
      "saying": "لديّ عتاب معك",
      "literal": "I have a reproach with you",
      "country": "Arab world",
      "approxPeriod": "modern",
      "confidence": "high"
    }
  },
  "break-the-ice": {
    "de": {
      "saying": "Das Eis brechen",
      "country": "Germany",
      "approxPeriod": "traditional/modern",
      "confidence": "high"
    },
    "es": {
      "saying": "Romper el hielo",
      "country": "Spain/Latin America",
      "approxPeriod": "traditional/modern",
      "confidence": "high"
    },
    "no": {
      "saying": "Bryte isen",
      "country": "Norway",
      "approxPeriod": "traditional/modern",
      "confidence": "high"
    },
    "la": {
      "saying": "Glaciem frangere",
      "literal": "To break the ice",
      "country": "Neo-Latin",
      "approxPeriod": "modern rendering",
      "confidence": "medium"
    },
    "zh": {
      "saying": "打破僵局",
      "literal": "Break the deadlock",
      "country": "China",
      "approxPeriod": "modern",
      "confidence": "high"
    },
    "ja": {
      "saying": "場を和ませる",
      "literal": "Soften the atmosphere",
      "country": "Japan",
      "approxPeriod": "modern",
      "confidence": "high"
    },
    "it": {
      "saying": "Rompere il ghiaccio",
      "country": "Italy",
      "approxPeriod": "traditional/modern",
      "confidence": "high"
    },
    "hi": {
      "saying": "बर्फ तोड़ना",
      "literal": "Break the ice",
      "country": "India",
      "approxPeriod": "modern",
      "confidence": "medium"
    },
    "el": {
      "saying": "Σπάω τον πάγο",
      "country": "Greece",
      "approxPeriod": "modern",
      "confidence": "high"
    },
    "fr": {
      "saying": "Briser la glace",
      "country": "France",
      "approxPeriod": "traditional/modern",
      "confidence": "high"
    },
    "ar": {
      "saying": "يكسر الجليد",
      "country": "Arab world",
      "approxPeriod": "modern",
      "confidence": "high"
    }
  },
  "spill-the-beans": {
    "de": {
      "saying": "Etwas ausplaudern",
      "literal": "To blurt something out",
      "country": "Germany",
      "approxPeriod": "modern",
      "confidence": "high"
    },
    "es": {
      "saying": "Soltar la sopa",
      "literal": "To spill the soup",
      "country": "Latin America",
      "approxPeriod": "modern colloquial",
      "confidence": "high"
    },
    "no": {
      "saying": "Røpe hemmeligheten",
      "literal": "Reveal the secret",
      "country": "Norway",
      "approxPeriod": "modern",
      "confidence": "high"
    },
    "la": {
      "saying": "Arcanum prodere",
      "literal": "To betray a secret",
      "country": "Classical/Renaissance Latin",
      "approxPeriod": "classical-style",
      "confidence": "medium"
    },
    "zh": {
      "saying": "说漏嘴",
      "literal": "Let it slip from the mouth",
      "country": "China",
      "approxPeriod": "modern",
      "confidence": "high"
    },
    "ja": {
      "saying": "秘密を漏らす",
      "literal": "Leak a secret",
      "country": "Japan",
      "approxPeriod": "modern",
      "confidence": "high"
    },
    "it": {
      "saying": "Spifferare tutto",
      "literal": "Blab everything",
      "country": "Italy",
      "approxPeriod": "modern colloquial",
      "confidence": "high"
    },
    "hi": {
      "saying": "राज़ खोल देना",
      "literal": "Open/reveal the secret",
      "country": "India",
      "approxPeriod": "modern",
      "confidence": "high"
    },
    "el": {
      "saying": "Τα ξεφουρνίζω όλα",
      "literal": "Bake/blurt it all out",
      "country": "Greece",
      "approxPeriod": "modern colloquial",
      "confidence": "high"
    },
    "fr": {
      "saying": "Vendre la mèche",
      "literal": "Sell the fuse",
      "country": "France",
      "approxPeriod": "traditional/modern",
      "confidence": "high"
    },
    "ar": {
      "saying": "يفشي السر",
      "literal": "Reveal the secret",
      "country": "Arab world",
      "approxPeriod": "modern",
      "confidence": "high"
    }
  },
  "bite-the-bullet": {
    "de": {
      "saying": "In den sauren Apfel beißen",
      "literal": "Bite into the sour apple",
      "country": "Germany",
      "approxPeriod": "traditional/modern",
      "confidence": "high"
    },
    "es": {
      "saying": "Hacer de tripas corazón",
      "literal": "Make a heart out of guts",
      "country": "Spain/Latin America",
      "approxPeriod": "traditional/modern",
      "confidence": "high"
    },
    "no": {
      "saying": "Bite tennene sammen",
      "literal": "Clench/bite the teeth together",
      "country": "Norway",
      "approxPeriod": "modern",
      "confidence": "high"
    },
    "la": {
      "saying": "Dura ferre",
      "literal": "To bear hard things",
      "country": "Classical Latin",
      "approxPeriod": "classical",
      "confidence": "medium"
    },
    "zh": {
      "saying": "咬紧牙关",
      "literal": "Clench your teeth",
      "country": "China",
      "approxPeriod": "traditional/modern",
      "confidence": "high"
    },
    "ja": {
      "saying": "歯を食いしばる",
      "literal": "Clench one’s teeth",
      "country": "Japan",
      "approxPeriod": "traditional/modern",
      "confidence": "high"
    },
    "it": {
      "saying": "Stringere i denti",
      "literal": "Clench the teeth",
      "country": "Italy",
      "approxPeriod": "modern",
      "confidence": "high"
    },
    "hi": {
      "saying": "दाँत भींचकर सहना",
      "literal": "Endure with clenched teeth",
      "country": "India",
      "approxPeriod": "modern",
      "confidence": "high"
    },
    "el": {
      "saying": "Σφίγγω τα δόντια",
      "literal": "Clench the teeth",
      "country": "Greece",
      "approxPeriod": "modern",
      "confidence": "high"
    },
    "fr": {
      "saying": "Serrer les dents",
      "literal": "Clench the teeth",
      "country": "France",
      "approxPeriod": "modern",
      "confidence": "high"
    },
    "ar": {
      "saying": "يعضّ على أسنانه",
      "literal": "Bite on one’s teeth",
      "country": "Arab world",
      "approxPeriod": "modern",
      "confidence": "high"
    }
  },
  "under-the-weather": {
    "de": {
      "saying": "Nicht ganz auf der Höhe sein",
      "literal": "Not quite at one’s height",
      "country": "Germany",
      "approxPeriod": "modern",
      "confidence": "high"
    },
    "es": {
      "saying": "Estar pachucho",
      "literal": "To feel poorly",
      "country": "Spain",
      "approxPeriod": "modern colloquial",
      "confidence": "high"
    },
    "no": {
      "saying": "Være litt pjusk",
      "literal": "Be a bit poorly",
      "country": "Norway",
      "approxPeriod": "modern colloquial",
      "confidence": "high"
    },
    "la": {
      "saying": "Minus valere",
      "literal": "To be less well",
      "country": "Classical Latin",
      "approxPeriod": "classical",
      "confidence": "medium"
    },
    "zh": {
      "saying": "身体不舒服",
      "literal": "The body is not comfortable",
      "country": "China",
      "approxPeriod": "modern",
      "confidence": "high"
    },
    "ja": {
      "saying": "体調が悪い",
      "literal": "Physical condition is bad",
      "country": "Japan",
      "approxPeriod": "modern",
      "confidence": "high"
    },
    "it": {
      "saying": "Non sentirsi bene",
      "literal": "Not feel well",
      "country": "Italy",
      "approxPeriod": "modern",
      "confidence": "high"
    },
    "hi": {
      "saying": "तबीयत ठीक नहीं है",
      "literal": "Health/mood is not right",
      "country": "India",
      "approxPeriod": "modern",
      "confidence": "high"
    },
    "el": {
      "saying": "Είμαι αδιάθετος",
      "literal": "I am indisposed",
      "country": "Greece",
      "approxPeriod": "modern",
      "confidence": "high"
    },
    "fr": {
      "saying": "Être patraque",
      "literal": "To feel off/poorly",
      "country": "France",
      "approxPeriod": "modern colloquial",
      "confidence": "high"
    },
    "ar": {
      "saying": "لست على ما يرام",
      "literal": "I am not all right",
      "country": "Arab world",
      "approxPeriod": "modern",
      "confidence": "high"
    }
  },
  "blessing-in-disguise": {
    "de": {
      "saying": "Glück im Unglück",
      "literal": "Luck in misfortune",
      "country": "Germany",
      "approxPeriod": "traditional/modern",
      "confidence": "high"
    },
    "es": {
      "saying": "No hay mal que por bien no venga",
      "literal": "There is no bad from which good does not come",
      "country": "Spain/Latin America",
      "approxPeriod": "traditional",
      "confidence": "high"
    },
    "no": {
      "saying": "Et hell i uhell",
      "literal": "Luck in bad luck",
      "country": "Norway",
      "approxPeriod": "modern",
      "confidence": "high"
    },
    "la": {
      "saying": "Malum quod in bonum vertitur",
      "literal": "An evil that turns into good",
      "country": "Neo-Latin",
      "approxPeriod": "modern rendering",
      "confidence": "medium"
    },
    "zh": {
      "saying": "塞翁失马，焉知非福",
      "literal": "The old man lost his horse; who knows it is not a blessing?",
      "country": "China",
      "approxPeriod": "ancient/modern",
      "confidence": "high"
    },
    "ja": {
      "saying": "怪我の功名",
      "literal": "Good result from an injury/mistake",
      "country": "Japan",
      "approxPeriod": "traditional/modern",
      "confidence": "high"
    },
    "it": {
      "saying": "Non tutto il male viene per nuocere",
      "literal": "Not all bad comes to harm",
      "country": "Italy",
      "approxPeriod": "traditional/modern",
      "confidence": "high"
    },
    "hi": {
      "saying": "छिपा हुआ वरदान",
      "literal": "A hidden blessing",
      "country": "India",
      "approxPeriod": "modern",
      "confidence": "medium"
    },
    "el": {
      "saying": "Ουδέν κακόν αμιγές καλού",
      "literal": "No bad thing is unmixed with good",
      "country": "Greece",
      "approxPeriod": "ancient/modern",
      "confidence": "high"
    },
    "fr": {
      "saying": "Un mal pour un bien",
      "literal": "A bad for a good",
      "country": "France",
      "approxPeriod": "traditional/modern",
      "confidence": "high"
    },
    "ar": {
      "saying": "رب ضارة نافعة",
      "literal": "Perhaps a harmful thing is beneficial",
      "country": "Arab world",
      "approxPeriod": "traditional/modern",
      "confidence": "high"
    }
  },
  "good-samaritan": {
    "de": {
      "saying": "Ein barmherziger Samariter",
      "country": "Germany",
      "approxPeriod": "biblical/traditional",
      "confidence": "high"
    },
    "es": {
      "saying": "Un buen samaritano",
      "country": "Spain/Latin America",
      "approxPeriod": "biblical/traditional",
      "confidence": "high"
    },
    "no": {
      "saying": "En barmhjertig samaritan",
      "country": "Norway",
      "approxPeriod": "biblical/traditional",
      "confidence": "high"
    },
    "la": {
      "saying": "Samaritanus misericors",
      "literal": "Merciful Samaritan",
      "country": "Christian Latin",
      "approxPeriod": "biblical/traditional",
      "confidence": "high"
    },
    "zh": {
      "saying": "好撒马利亚人",
      "country": "China",
      "approxPeriod": "biblical/modern",
      "confidence": "high"
    },
    "ja": {
      "saying": "善きサマリア人",
      "country": "Japan",
      "approxPeriod": "biblical/modern",
      "confidence": "high"
    },
    "it": {
      "saying": "Un buon samaritano",
      "country": "Italy",
      "approxPeriod": "biblical/traditional",
      "confidence": "high"
    },
    "hi": {
      "saying": "नेक सामरी",
      "literal": "Good Samaritan",
      "country": "India",
      "approxPeriod": "biblical/modern",
      "confidence": "medium"
    },
    "el": {
      "saying": "Καλός Σαμαρείτης",
      "country": "Greece",
      "approxPeriod": "biblical/traditional",
      "confidence": "high"
    },
    "fr": {
      "saying": "Un bon Samaritain",
      "country": "France",
      "approxPeriod": "biblical/traditional",
      "confidence": "high"
    },
    "ar": {
      "saying": "السامري الصالح",
      "country": "Arab world",
      "approxPeriod": "biblical/modern",
      "confidence": "high"
    }
  },
  "forbidden-fruit": {
    "de": {
      "saying": "Verbotene Frucht",
      "country": "Germany",
      "approxPeriod": "biblical/traditional",
      "confidence": "high"
    },
    "es": {
      "saying": "Fruta prohibida",
      "country": "Spain/Latin America",
      "approxPeriod": "biblical/traditional",
      "confidence": "high"
    },
    "no": {
      "saying": "Forbuden frukt",
      "country": "Norway",
      "approxPeriod": "biblical/traditional",
      "confidence": "high"
    },
    "la": {
      "saying": "Fructus vetitus",
      "country": "Christian/Neo-Latin",
      "approxPeriod": "biblical/traditional",
      "confidence": "high"
    },
    "zh": {
      "saying": "禁果",
      "country": "China",
      "approxPeriod": "biblical/modern",
      "confidence": "high"
    },
    "ja": {
      "saying": "禁断の果実",
      "country": "Japan",
      "approxPeriod": "biblical/modern",
      "confidence": "high"
    },
    "it": {
      "saying": "Frutto proibito",
      "country": "Italy",
      "approxPeriod": "biblical/traditional",
      "confidence": "high"
    },
    "hi": {
      "saying": "वर्जित फल",
      "country": "India",
      "approxPeriod": "biblical/modern",
      "confidence": "high"
    },
    "el": {
      "saying": "Απαγορευμένος καρπός",
      "country": "Greece",
      "approxPeriod": "biblical/traditional",
      "confidence": "high"
    },
    "fr": {
      "saying": "Fruit défendu",
      "country": "France",
      "approxPeriod": "biblical/traditional",
      "confidence": "high"
    },
    "ar": {
      "saying": "الفاكهة المحرمة",
      "country": "Arab world",
      "approxPeriod": "biblical/modern",
      "confidence": "high"
    }
  },
  "scapegoat": {
    "de": {
      "saying": "Sündenbock",
      "literal": "Sin goat",
      "country": "Germany",
      "approxPeriod": "biblical/traditional",
      "confidence": "high"
    },
    "es": {
      "saying": "Chivo expiatorio",
      "country": "Spain/Latin America",
      "approxPeriod": "biblical/traditional",
      "confidence": "high"
    },
    "no": {
      "saying": "Syndebukk",
      "literal": "Sin buck/goat",
      "country": "Norway",
      "approxPeriod": "biblical/traditional",
      "confidence": "high"
    },
    "la": {
      "saying": "Caper emissarius",
      "literal": "Sent-away goat",
      "country": "Biblical Latin",
      "approxPeriod": "biblical/traditional",
      "confidence": "high"
    },
    "zh": {
      "saying": "替罪羊",
      "literal": "Substitute-sin sheep/goat",
      "country": "China",
      "approxPeriod": "modern",
      "confidence": "high"
    },
    "ja": {
      "saying": "スケープゴート",
      "country": "Japan",
      "approxPeriod": "modern loanword",
      "confidence": "high"
    },
    "it": {
      "saying": "Capro espiatorio",
      "country": "Italy",
      "approxPeriod": "biblical/traditional",
      "confidence": "high"
    },
    "hi": {
      "saying": "बलि का बकरा",
      "literal": "Sacrificial goat",
      "country": "India",
      "approxPeriod": "modern",
      "confidence": "high"
    },
    "el": {
      "saying": "Αποδιοπομπαίος τράγος",
      "country": "Greece",
      "approxPeriod": "ancient/biblical",
      "confidence": "high"
    },
    "fr": {
      "saying": "Bouc émissaire",
      "country": "France",
      "approxPeriod": "biblical/traditional",
      "confidence": "high"
    },
    "ar": {
      "saying": "كبش فداء",
      "literal": "Ram of sacrifice",
      "country": "Arab world",
      "approxPeriod": "traditional/modern",
      "confidence": "high"
    }
  },
  "skin-of-teeth": {
    "de": {
      "saying": "Mit Ach und Krach",
      "literal": "With ache and crash",
      "country": "Germany",
      "approxPeriod": "modern colloquial",
      "confidence": "high"
    },
    "es": {
      "saying": "Por los pelos",
      "literal": "By the hairs",
      "country": "Spain/Latin America",
      "approxPeriod": "modern colloquial",
      "confidence": "high"
    },
    "no": {
      "saying": "Med nød og neppe",
      "literal": "With distress and barely",
      "country": "Norway",
      "approxPeriod": "traditional/modern",
      "confidence": "high"
    },
    "la": {
      "saying": "Vix evasi",
      "literal": "I barely escaped",
      "country": "Classical Latin",
      "approxPeriod": "classical-style",
      "confidence": "medium"
    },
    "zh": {
      "saying": "侥幸逃脱",
      "literal": "Escape by luck",
      "country": "China",
      "approxPeriod": "modern",
      "confidence": "high"
    },
    "ja": {
      "saying": "間一髪で",
      "literal": "By a hair’s breadth",
      "country": "Japan",
      "approxPeriod": "traditional/modern",
      "confidence": "high"
    },
    "it": {
      "saying": "Per un pelo",
      "literal": "By a hair",
      "country": "Italy",
      "approxPeriod": "modern colloquial",
      "confidence": "high"
    },
    "hi": {
      "saying": "बाल-बाल बचना",
      "literal": "Escape hair-hair/barely",
      "country": "India",
      "approxPeriod": "modern",
      "confidence": "high"
    },
    "el": {
      "saying": "Στο τσακ",
      "literal": "At the last instant",
      "country": "Greece",
      "approxPeriod": "modern colloquial",
      "confidence": "high"
    },
    "fr": {
      "saying": "De justesse",
      "literal": "By narrowness",
      "country": "France",
      "approxPeriod": "modern",
      "confidence": "high"
    },
    "ar": {
      "saying": "بشق الأنفس",
      "literal": "With the splitting of souls",
      "country": "Arab world",
      "approxPeriod": "traditional/modern",
      "confidence": "high"
    }
  },
  "no-brainer": {
    "de": {
      "saying": "Das ist ein Selbstläufer",
      "literal": "That runs by itself",
      "country": "Germany",
      "approxPeriod": "modern",
      "confidence": "medium"
    },
    "es": {
      "saying": "No hay que pensárselo",
      "literal": "One doesn’t need to think about it",
      "country": "Spain/Latin America",
      "approxPeriod": "modern",
      "confidence": "high"
    },
    "no": {
      "saying": "Det er en selvfølge",
      "literal": "It is self-evident",
      "country": "Norway",
      "approxPeriod": "modern",
      "confidence": "high"
    },
    "la": {
      "saying": "Res manifesta est",
      "literal": "The matter is obvious",
      "country": "Classical Latin",
      "approxPeriod": "classical-style",
      "confidence": "medium"
    },
    "zh": {
      "saying": "不用动脑子",
      "literal": "No need to use your brain",
      "country": "China",
      "approxPeriod": "modern colloquial",
      "confidence": "high"
    },
    "ja": {
      "saying": "考えるまでもない",
      "literal": "It does not even need thinking",
      "country": "Japan",
      "approxPeriod": "modern",
      "confidence": "high"
    },
    "it": {
      "saying": "Non c’è da pensarci",
      "literal": "There’s nothing to think about",
      "country": "Italy",
      "approxPeriod": "modern",
      "confidence": "high"
    },
    "hi": {
      "saying": "सोचने की बात ही नहीं है",
      "literal": "It is not even a matter for thinking",
      "country": "India",
      "approxPeriod": "modern",
      "confidence": "high"
    },
    "el": {
      "saying": "Δεν θέλει σκέψη",
      "literal": "It doesn’t require thought",
      "country": "Greece",
      "approxPeriod": "modern",
      "confidence": "high"
    },
    "fr": {
      "saying": "Ça tombe sous le sens",
      "literal": "It falls under common sense",
      "country": "France",
      "approxPeriod": "modern",
      "confidence": "high"
    },
    "ar": {
      "saying": "لا تحتاج إلى تفكير",
      "literal": "It does not need thinking",
      "country": "Arab world",
      "approxPeriod": "modern",
      "confidence": "high"
    }
  },
  "hangry": {
    "de": {
      "saying": "Hungrig und schlecht gelaunt",
      "literal": "Hungry and in a bad mood",
      "country": "Germany",
      "approxPeriod": "modern",
      "confidence": "high"
    },
    "es": {
      "saying": "De malas por hambre",
      "literal": "In a bad mood from hunger",
      "country": "Latin America",
      "approxPeriod": "modern colloquial",
      "confidence": "medium"
    },
    "no": {
      "saying": "Sulten og sint",
      "literal": "Hungry and angry",
      "country": "Norway",
      "approxPeriod": "modern",
      "confidence": "high"
    },
    "la": {
      "saying": "Fame iratus",
      "literal": "Angered by hunger",
      "country": "Neo-Latin",
      "approxPeriod": "modern rendering",
      "confidence": "low"
    },
    "zh": {
      "saying": "饿到发火",
      "literal": "Hungry to the point of getting angry",
      "country": "China",
      "approxPeriod": "modern colloquial",
      "confidence": "high"
    },
    "ja": {
      "saying": "お腹が空いてイライラする",
      "literal": "Irritated because hungry",
      "country": "Japan",
      "approxPeriod": "modern",
      "confidence": "high"
    },
    "it": {
      "saying": "Arrabbiato per la fame",
      "literal": "Angry from hunger",
      "country": "Italy",
      "approxPeriod": "modern",
      "confidence": "high"
    },
    "hi": {
      "saying": "भूख से चिड़चिड़ा",
      "literal": "Irritable from hunger",
      "country": "India",
      "approxPeriod": "modern",
      "confidence": "high"
    },
    "el": {
      "saying": "Πεινάω και είμαι στα νεύρα",
      "literal": "I’m hungry and on edge",
      "country": "Greece",
      "approxPeriod": "modern",
      "confidence": "high"
    },
    "fr": {
      "saying": "Irritable parce qu’on a faim",
      "literal": "Irritable because hungry",
      "country": "France",
      "approxPeriod": "modern",
      "confidence": "high"
    },
    "ar": {
      "saying": "غاضب من الجوع",
      "literal": "Angry from hunger",
      "country": "Arab world",
      "approxPeriod": "modern",
      "confidence": "high"
    }
  },
  "ghost-someone": {
    "de": {
      "saying": "Jemanden ghosten",
      "country": "Germany",
      "approxPeriod": "modern digital slang",
      "confidence": "high"
    },
    "es": {
      "saying": "Hacer ghosting a alguien",
      "country": "Spain/Latin America",
      "approxPeriod": "modern digital slang",
      "confidence": "high"
    },
    "no": {
      "saying": "Å ghoste noen",
      "country": "Norway",
      "approxPeriod": "modern digital slang",
      "confidence": "high"
    },
    "la": {
      "saying": "Subito tacere atque evanescere",
      "literal": "Suddenly fall silent and disappear",
      "country": "Neo-Latin",
      "approxPeriod": "modern rendering",
      "confidence": "low"
    },
    "zh": {
      "saying": "玩消失",
      "literal": "Play disappearing",
      "country": "China",
      "approxPeriod": "modern digital slang",
      "confidence": "high"
    },
    "ja": {
      "saying": "音信不通になる",
      "literal": "Become unreachable/no-contact",
      "country": "Japan",
      "approxPeriod": "modern",
      "confidence": "high"
    },
    "it": {
      "saying": "Ghostare qualcuno",
      "country": "Italy",
      "approxPeriod": "modern digital slang",
      "confidence": "high"
    },
    "hi": {
      "saying": "किसी को घोस्ट करना",
      "country": "India",
      "approxPeriod": "modern Hinglish/digital slang",
      "confidence": "high"
    },
    "el": {
      "saying": "Κάνω ghosting σε κάποιον",
      "country": "Greece",
      "approxPeriod": "modern digital slang",
      "confidence": "high"
    },
    "fr": {
      "saying": "Ghoster quelqu’un",
      "country": "France",
      "approxPeriod": "modern digital slang",
      "confidence": "high"
    },
    "ar": {
      "saying": "يسحب على شخص",
      "literal": "To pull away/ditch someone",
      "country": "Gulf/Arab colloquial",
      "approxPeriod": "modern digital slang",
      "confidence": "medium"
    }
  },
  "throw-shade": {
    "de": {
      "saying": "Einen Seitenhieb verteilen",
      "literal": "Deliver a side blow",
      "country": "Germany",
      "approxPeriod": "modern",
      "confidence": "high"
    },
    "es": {
      "saying": "Lanzar indirectas",
      "literal": "Throw indirect remarks",
      "country": "Spain/Latin America",
      "approxPeriod": "modern",
      "confidence": "high"
    },
    "no": {
      "saying": "Komme med stikk",
      "literal": "Come with jabs",
      "country": "Norway",
      "approxPeriod": "modern",
      "confidence": "high"
    },
    "la": {
      "saying": "Oblique maledicere",
      "literal": "To speak ill indirectly",
      "country": "Neo-Latin",
      "approxPeriod": "modern rendering",
      "confidence": "low"
    },
    "zh": {
      "saying": "暗讽",
      "literal": "Mock/satirize covertly",
      "country": "China",
      "approxPeriod": "modern",
      "confidence": "high"
    },
    "ja": {
      "saying": "嫌味を言う",
      "literal": "Say something snide",
      "country": "Japan",
      "approxPeriod": "modern",
      "confidence": "high"
    },
    "it": {
      "saying": "Lanciare frecciatine",
      "literal": "Launch little arrows",
      "country": "Italy",
      "approxPeriod": "modern",
      "confidence": "high"
    },
    "hi": {
      "saying": "ताना मारना",
      "literal": "Taunt/jibe",
      "country": "India",
      "approxPeriod": "modern",
      "confidence": "high"
    },
    "el": {
      "saying": "Ρίχνω μπηχτές",
      "literal": "Throw digs",
      "country": "Greece",
      "approxPeriod": "modern colloquial",
      "confidence": "high"
    },
    "fr": {
      "saying": "Lancer des piques",
      "literal": "Throw barbs",
      "country": "France",
      "approxPeriod": "modern",
      "confidence": "high"
    },
    "ar": {
      "saying": "يلقي تلميحات ساخرة",
      "literal": "Throw sarcastic hints",
      "country": "Arab world",
      "approxPeriod": "modern",
      "confidence": "high"
    }
  },
  "hold-your-horses": {
    "de": {
      "saying": "Immer langsam mit den jungen Pferden",
      "literal": "Always slowly with the young horses",
      "country": "Germany",
      "approxPeriod": "traditional/modern",
      "confidence": "high"
    },
    "es": {
      "saying": "Para el carro",
      "literal": "Stop the cart",
      "country": "Spain",
      "approxPeriod": "modern colloquial",
      "confidence": "high"
    },
    "no": {
      "saying": "Ta det med ro",
      "literal": "Take it calmly",
      "country": "Norway",
      "approxPeriod": "modern",
      "confidence": "high"
    },
    "la": {
      "saying": "Tene equos",
      "literal": "Hold the horses",
      "country": "Neo-Latin",
      "approxPeriod": "modern rendering",
      "confidence": "medium"
    },
    "zh": {
      "saying": "别急",
      "literal": "Don’t rush",
      "country": "China",
      "approxPeriod": "modern",
      "confidence": "high"
    },
    "ja": {
      "saying": "ちょっと待って",
      "literal": "Wait a moment",
      "country": "Japan",
      "approxPeriod": "modern",
      "confidence": "high"
    },
    "it": {
      "saying": "Calma un attimo",
      "literal": "Calm down a moment",
      "country": "Italy",
      "approxPeriod": "modern",
      "confidence": "high"
    },
    "hi": {
      "saying": "ज़रा ठहरो",
      "literal": "Wait a little",
      "country": "India",
      "approxPeriod": "modern",
      "confidence": "high"
    },
    "el": {
      "saying": "Κράτα τα άλογα",
      "literal": "Hold the horses",
      "country": "Greece",
      "approxPeriod": "modern calque/colloquial",
      "confidence": "medium"
    },
    "fr": {
      "saying": "Doucement les chevaux",
      "literal": "Gently, the horses",
      "country": "France",
      "approxPeriod": "modern colloquial",
      "confidence": "high"
    },
    "ar": {
      "saying": "تمهّل",
      "literal": "Slow down",
      "country": "Arab world",
      "approxPeriod": "modern",
      "confidence": "high"
    }
  },
  "let-cat-out-bag": {
    "de": {
      "saying": "Die Katze aus dem Sack lassen",
      "literal": "Let the cat out of the sack",
      "country": "Germany",
      "approxPeriod": "traditional/modern",
      "confidence": "high"
    },
    "es": {
      "saying": "Descubrir el pastel",
      "literal": "Uncover the cake",
      "country": "Spain",
      "approxPeriod": "traditional/modern",
      "confidence": "high"
    },
    "no": {
      "saying": "Slippe katten ut av sekken",
      "literal": "Let the cat out of the sack",
      "country": "Norway",
      "approxPeriod": "modern",
      "confidence": "high"
    },
    "la": {
      "saying": "Arcanum patefacere",
      "literal": "To make a secret open",
      "country": "Classical/Renaissance Latin",
      "approxPeriod": "classical-style",
      "confidence": "medium"
    },
    "zh": {
      "saying": "露出马脚",
      "literal": "Show the horse’s foot",
      "country": "China",
      "approxPeriod": "traditional/modern",
      "confidence": "medium"
    },
    "ja": {
      "saying": "秘密をばらす",
      "literal": "Expose a secret",
      "country": "Japan",
      "approxPeriod": "modern colloquial",
      "confidence": "high"
    },
    "it": {
      "saying": "Vuotare il sacco",
      "literal": "Empty the sack",
      "country": "Italy",
      "approxPeriod": "traditional/modern",
      "confidence": "high"
    },
    "hi": {
      "saying": "राज़ खोल देना",
      "literal": "Reveal the secret",
      "country": "India",
      "approxPeriod": "modern",
      "confidence": "high"
    },
    "el": {
      "saying": "Βγάζω τη γάτα από το σακί",
      "literal": "Take the cat out of the sack",
      "country": "Greece",
      "approxPeriod": "modern calque",
      "confidence": "medium"
    },
    "fr": {
      "saying": "Vendre la mèche",
      "literal": "Sell the fuse",
      "country": "France",
      "approxPeriod": "traditional/modern",
      "confidence": "high"
    },
    "ar": {
      "saying": "يكشف السر",
      "literal": "Reveal the secret",
      "country": "Arab world",
      "approxPeriod": "modern",
      "confidence": "high"
    }
  },
  "bull-china-shop": {
    "de": {
      "saying": "Wie ein Elefant im Porzellanladen",
      "literal": "Like an elephant in a porcelain shop",
      "country": "Germany",
      "approxPeriod": "traditional/modern",
      "confidence": "high"
    },
    "es": {
      "saying": "Como un elefante en una cacharrería",
      "literal": "Like an elephant in a crockery shop",
      "country": "Spain",
      "approxPeriod": "traditional/modern",
      "confidence": "high"
    },
    "no": {
      "saying": "Som en elefant i en glassbutikk",
      "literal": "Like an elephant in a glass shop",
      "country": "Norway",
      "approxPeriod": "modern",
      "confidence": "high"
    },
    "la": {
      "saying": "Vel bos in officina fictilium",
      "literal": "Like an ox/bull in a pottery shop",
      "country": "Neo-Latin",
      "approxPeriod": "modern rendering",
      "confidence": "medium"
    },
    "zh": {
      "saying": "笨手笨脚",
      "literal": "Clumsy hands and feet",
      "country": "China",
      "approxPeriod": "modern",
      "confidence": "medium"
    },
    "ja": {
      "saying": "ガラス細工の店に牛",
      "literal": "A cow/bull in a glasswork shop",
      "country": "Japan",
      "approxPeriod": "modern calque",
      "confidence": "medium"
    },
    "it": {
      "saying": "Come un elefante in una cristalleria",
      "literal": "Like an elephant in a crystal shop",
      "country": "Italy",
      "approxPeriod": "traditional/modern",
      "confidence": "high"
    },
    "hi": {
      "saying": "हाथी की तरह काँच की दुकान में",
      "literal": "Like an elephant in a glass shop",
      "country": "India",
      "approxPeriod": "modern calque",
      "confidence": "medium"
    },
    "el": {
      "saying": "Σαν ελέφαντας σε υαλοπωλείο",
      "literal": "Like an elephant in a glass shop",
      "country": "Greece",
      "approxPeriod": "modern",
      "confidence": "high"
    },
    "fr": {
      "saying": "Comme un éléphant dans un magasin de porcelaine",
      "literal": "Like an elephant in a porcelain shop",
      "country": "France",
      "approxPeriod": "traditional/modern",
      "confidence": "high"
    },
    "ar": {
      "saying": "كالفيل في محل خزف",
      "literal": "Like an elephant in a ceramics shop",
      "country": "Arab world",
      "approxPeriod": "modern calque",
      "confidence": "medium"
    }
  },
  "turn-blind-eye": {
    "de": {
      "saying": "Ein Auge zudrücken",
      "literal": "Press one eye shut",
      "country": "Germany",
      "approxPeriod": "traditional/modern",
      "confidence": "high"
    },
    "es": {
      "saying": "Hacer la vista gorda",
      "literal": "Make the fat/thick sight",
      "country": "Spain/Latin America",
      "approxPeriod": "traditional/modern",
      "confidence": "high"
    },
    "no": {
      "saying": "Se gjennom fingrene med noe",
      "literal": "Look through the fingers at something",
      "country": "Norway",
      "approxPeriod": "traditional/modern",
      "confidence": "high"
    },
    "la": {
      "saying": "Oculos claudere",
      "literal": "To close the eyes",
      "country": "Classical Latin",
      "approxPeriod": "classical-style",
      "confidence": "medium"
    },
    "zh": {
      "saying": "睁一只眼闭一只眼",
      "literal": "Open one eye and close one eye",
      "country": "China",
      "approxPeriod": "modern",
      "confidence": "high"
    },
    "ja": {
      "saying": "見て見ぬふりをする",
      "literal": "See and pretend not to see",
      "country": "Japan",
      "approxPeriod": "modern",
      "confidence": "high"
    },
    "it": {
      "saying": "Chiudere un occhio",
      "literal": "Close one eye",
      "country": "Italy",
      "approxPeriod": "traditional/modern",
      "confidence": "high"
    },
    "hi": {
      "saying": "आँख मूँद लेना",
      "literal": "Close one’s eyes",
      "country": "India",
      "approxPeriod": "modern",
      "confidence": "high"
    },
    "el": {
      "saying": "Κάνω τα στραβά μάτια",
      "literal": "Make/do crooked eyes",
      "country": "Greece",
      "approxPeriod": "modern",
      "confidence": "high"
    },
    "fr": {
      "saying": "Fermer les yeux sur quelque chose",
      "literal": "Close one’s eyes to something",
      "country": "France",
      "approxPeriod": "traditional/modern",
      "confidence": "high"
    },
    "ar": {
      "saying": "يغضّ الطرف",
      "literal": "Lower/avert the gaze",
      "country": "Arab world",
      "approxPeriod": "traditional/modern",
      "confidence": "high"
    }
  },
  "beat-around-bush": {
    "de": {
      "saying": "Um den heißen Brei herumreden",
      "literal": "Talk around the hot porridge",
      "country": "Germany",
      "approxPeriod": "traditional / modern",
      "confidence": "high"
    },
    "es": {
      "saying": "Andarse por las ramas",
      "literal": "Go around in the branches",
      "country": "Spain / Latin America",
      "approxPeriod": "traditional",
      "confidence": "high"
    },
    "no": {
      "saying": "Gå rundt grøten",
      "literal": "Walk around the porridge",
      "country": "Norway",
      "approxPeriod": "traditional",
      "confidence": "high"
    },
    "la": {
      "saying": "Rem non attingere",
      "literal": "Not touch the matter",
      "country": "Ancient Rome / modern Latin",
      "approxPeriod": "constructed equivalent",
      "confidence": "low",
      "note": "Functional Latin phrasing rather than a well-known fixed proverb."
    },
    "zh": {
      "saying": "拐弯抹角",
      "literal": "Turn corners and wipe angles",
      "country": "China",
      "approxPeriod": "traditional / modern",
      "confidence": "high"
    },
    "ja": {
      "saying": "遠回しに言う",
      "literal": "Say it in a roundabout way",
      "country": "Japan",
      "approxPeriod": "modern common expression",
      "confidence": "high"
    },
    "it": {
      "saying": "Girarci intorno",
      "literal": "Go around it",
      "country": "Italy",
      "approxPeriod": "modern common expression",
      "confidence": "high"
    },
    "hi": {
      "saying": "घुमा-फिराकर बात करना",
      "literal": "Speak by turning it around",
      "country": "India",
      "approxPeriod": "modern common expression",
      "confidence": "high"
    },
    "el": {
      "saying": "Το φέρνω γύρω γύρω",
      "literal": "Bring it round and round",
      "country": "Greece",
      "approxPeriod": "modern common expression",
      "confidence": "medium"
    },
    "fr": {
      "saying": "Tourner autour du pot",
      "literal": "Turn around the pot",
      "country": "France",
      "approxPeriod": "traditional / modern",
      "confidence": "high"
    },
    "ar": {
      "saying": "يلف ويدور",
      "literal": "He twists and turns",
      "country": "Arab world",
      "approxPeriod": "modern common expression",
      "confidence": "high"
    }
  },
  "read-riot-act": {
    "de": {
      "saying": "Jemandem die Leviten lesen",
      "literal": "Read someone the Levites",
      "country": "Germany",
      "approxPeriod": "traditional",
      "confidence": "high"
    },
    "es": {
      "saying": "Cantarle las cuarenta a alguien",
      "literal": "Sing someone the forty",
      "country": "Spain",
      "approxPeriod": "traditional / modern",
      "confidence": "high"
    },
    "no": {
      "saying": "Lese noen teksten",
      "literal": "Read someone the text",
      "country": "Norway",
      "approxPeriod": "traditional / modern",
      "confidence": "high"
    },
    "la": {
      "saying": "Acriter obiurgare",
      "literal": "Scold sharply",
      "country": "Ancient Rome / modern Latin",
      "approxPeriod": "classical vocabulary",
      "confidence": "medium"
    },
    "zh": {
      "saying": "严厉训斥",
      "literal": "Sternly reprimand",
      "country": "China",
      "approxPeriod": "modern common expression",
      "confidence": "medium"
    },
    "ja": {
      "saying": "きつく叱る",
      "literal": "Scold harshly",
      "country": "Japan",
      "approxPeriod": "modern common expression",
      "confidence": "medium"
    },
    "it": {
      "saying": "Fare una ramanzina",
      "literal": "Give a lecture/scolding",
      "country": "Italy",
      "approxPeriod": "modern common expression",
      "confidence": "high"
    },
    "hi": {
      "saying": "कड़ी फटकार लगाना",
      "literal": "Give a stern rebuke",
      "country": "India",
      "approxPeriod": "modern common expression",
      "confidence": "medium"
    },
    "el": {
      "saying": "Τα ψάλλω σε κάποιον",
      "literal": "Chant/sing at someone",
      "country": "Greece",
      "approxPeriod": "modern idiom",
      "confidence": "high"
    },
    "fr": {
      "saying": "Passer un savon à quelqu’un",
      "literal": "Pass someone a soap",
      "country": "France",
      "approxPeriod": "modern idiom",
      "confidence": "high"
    },
    "ar": {
      "saying": "وبّخه بشدة",
      "literal": "He rebuked him severely",
      "country": "Arab world",
      "approxPeriod": "modern common expression",
      "confidence": "medium"
    }
  },
  "horses-mouth": {
    "de": {
      "saying": "Direkt aus dem Maul des Pferdes",
      "literal": "Straight from the horse’s mouth",
      "country": "Germany",
      "approxPeriod": "direct image-preserving calque",
      "confidence": "medium"
    },
    "es": {
      "saying": "Directamente de la boca del caballo",
      "literal": "Straight from the horse’s mouth",
      "country": "Spain / Latin America",
      "approxPeriod": "direct image-preserving calque",
      "confidence": "medium"
    },
    "no": {
      "saying": "Rett fra hestens munn",
      "literal": "Straight from the horse’s mouth",
      "country": "Norway",
      "approxPeriod": "direct image-preserving calque",
      "confidence": "medium"
    },
    "la": {
      "saying": "Ex ore equi ipso",
      "literal": "From the horse’s own mouth",
      "country": "Modern Latin",
      "approxPeriod": "direct image-preserving calque",
      "confidence": "low"
    },
    "zh": {
      "saying": "直接从马嘴里来",
      "literal": "Come directly from the horse’s mouth",
      "country": "China",
      "approxPeriod": "direct image-preserving calque",
      "confidence": "medium"
    },
    "ja": {
      "saying": "馬の口から直接",
      "literal": "Directly from the horse’s mouth",
      "country": "Japan",
      "approxPeriod": "direct image-preserving calque",
      "confidence": "medium"
    },
    "it": {
      "saying": "Direttamente dalla bocca del cavallo",
      "literal": "Straight from the horse’s mouth",
      "country": "Italy",
      "approxPeriod": "direct image-preserving calque",
      "confidence": "medium"
    },
    "hi": {
      "saying": "सीधे घोड़े के मुँह से",
      "literal": "Straight from the horse’s mouth",
      "country": "India",
      "approxPeriod": "direct image-preserving calque",
      "confidence": "medium"
    },
    "el": {
      "saying": "Κατευθείαν από το στόμα του αλόγου",
      "literal": "Straight from the horse’s mouth",
      "country": "Greece",
      "approxPeriod": "direct image-preserving calque",
      "confidence": "medium"
    },
    "fr": {
      "saying": "Directement de la bouche du cheval",
      "literal": "Straight from the horse’s mouth",
      "country": "France",
      "approxPeriod": "direct image-preserving calque",
      "confidence": "medium"
    },
    "ar": {
      "saying": "مباشرة من فم الحصان",
      "literal": "Straight from the horse’s mouth",
      "country": "Arab world",
      "approxPeriod": "direct image-preserving calque",
      "confidence": "medium"
    }
  },
  "put-on-spot": {
    "de": {
      "saying": "Jemanden in die Zwickmühle bringen",
      "literal": "Put someone in a pinch-mill",
      "country": "Germany",
      "approxPeriod": "modern idiom",
      "confidence": "high"
    },
    "es": {
      "saying": "Poner a alguien en un aprieto",
      "literal": "Put someone in a tight spot",
      "country": "Spain / Latin America",
      "approxPeriod": "modern common expression",
      "confidence": "high"
    },
    "no": {
      "saying": "Sette noen på plass",
      "literal": "Put someone in place",
      "country": "Norway",
      "approxPeriod": "modern expression",
      "confidence": "medium",
      "note": "Can also mean correct/reprimand; context may need “sette noen i en vanskelig situasjon”."
    },
    "la": {
      "saying": "In angustias aliquem adducere",
      "literal": "Lead someone into difficulties",
      "country": "Ancient Rome / modern Latin",
      "approxPeriod": "classical-style equivalent",
      "confidence": "medium"
    },
    "zh": {
      "saying": "让人下不来台",
      "literal": "Make someone unable to step down from the stage",
      "country": "China",
      "approxPeriod": "modern idiom",
      "confidence": "high"
    },
    "ja": {
      "saying": "窮地に立たせる",
      "literal": "Make someone stand in a tight spot",
      "country": "Japan",
      "approxPeriod": "modern common expression",
      "confidence": "high"
    },
    "it": {
      "saying": "Mettere qualcuno alle strette",
      "literal": "Put someone in tightness",
      "country": "Italy",
      "approxPeriod": "modern idiom",
      "confidence": "high"
    },
    "hi": {
      "saying": "किसी को मुश्किल में डालना",
      "literal": "Put someone in difficulty",
      "country": "India",
      "approxPeriod": "modern common expression",
      "confidence": "medium"
    },
    "el": {
      "saying": "Φέρνω κάποιον σε δύσκολη θέση",
      "literal": "Bring someone into a difficult position",
      "country": "Greece",
      "approxPeriod": "modern common expression",
      "confidence": "high"
    },
    "fr": {
      "saying": "Mettre quelqu’un sur la sellette",
      "literal": "Put someone on the little saddle/stand",
      "country": "France",
      "approxPeriod": "traditional / modern",
      "confidence": "high"
    },
    "ar": {
      "saying": "وضعه في موقف محرج",
      "literal": "Put him in an embarrassing position",
      "country": "Arab world",
      "approxPeriod": "modern common expression",
      "confidence": "high"
    }
  },
  "wet-blanket": {
    "de": {
      "saying": "Spaßbremse",
      "literal": "Fun brake",
      "country": "Germany",
      "approxPeriod": "modern slang",
      "confidence": "high"
    },
    "es": {
      "saying": "Aguafiestas",
      "literal": "Party-waterer",
      "country": "Spain / Latin America",
      "approxPeriod": "traditional / modern",
      "confidence": "high"
    },
    "no": {
      "saying": "Gledesdreper",
      "literal": "Joy killer",
      "country": "Norway",
      "approxPeriod": "modern common expression",
      "confidence": "high"
    },
    "la": {
      "saying": "Gaudii exstinctor",
      "literal": "Extinguisher of joy",
      "country": "Modern Latin",
      "approxPeriod": "constructed equivalent",
      "confidence": "low"
    },
    "zh": {
      "saying": "扫兴的人",
      "literal": "A person who sweeps away enthusiasm",
      "country": "China",
      "approxPeriod": "modern common expression",
      "confidence": "high"
    },
    "ja": {
      "saying": "場をしらけさせる人",
      "literal": "A person who makes the mood go cold",
      "country": "Japan",
      "approxPeriod": "modern common expression",
      "confidence": "medium"
    },
    "it": {
      "saying": "Guastafeste",
      "literal": "Party spoiler",
      "country": "Italy",
      "approxPeriod": "traditional / modern",
      "confidence": "high"
    },
    "hi": {
      "saying": "रंग में भंग डालने वाला",
      "literal": "One who spoils the colour/fun",
      "country": "India",
      "approxPeriod": "traditional / modern",
      "confidence": "high"
    },
    "el": {
      "saying": "Ξενέρωτος",
      "literal": "One who kills the vibe",
      "country": "Greece",
      "approxPeriod": "modern colloquial",
      "confidence": "medium"
    },
    "fr": {
      "saying": "Un rabat-joie",
      "literal": "Joy-beater-down",
      "country": "France",
      "approxPeriod": "traditional / modern",
      "confidence": "high"
    },
    "ar": {
      "saying": "مفسد للفرحة",
      "literal": "Spoiler of joy",
      "country": "Arab world",
      "approxPeriod": "modern common expression",
      "confidence": "high"
    }
  },
  "mad-as-hatter": {
    "de": {
      "saying": "Nicht ganz dicht sein",
      "literal": "Not quite sealed",
      "country": "Germany",
      "approxPeriod": "modern colloquial",
      "confidence": "medium"
    },
    "es": {
      "saying": "Estar como una cabra",
      "literal": "Be like a goat",
      "country": "Spain",
      "approxPeriod": "traditional / modern",
      "confidence": "high"
    },
    "no": {
      "saying": "Gal som en hattemaker",
      "literal": "Mad as a hatter",
      "country": "Norway",
      "approxPeriod": "English-influenced / modern",
      "confidence": "medium"
    },
    "la": {
      "saying": "Insanus velut pilearius",
      "literal": "Mad like a hatter",
      "country": "Modern Latin",
      "approxPeriod": "constructed equivalent",
      "confidence": "low"
    },
    "zh": {
      "saying": "疯疯癫癫",
      "literal": "Mad and deranged",
      "country": "China",
      "approxPeriod": "modern common expression",
      "confidence": "medium"
    },
    "ja": {
      "saying": "頭がおかしい",
      "literal": "The head is strange",
      "country": "Japan",
      "approxPeriod": "modern colloquial",
      "confidence": "medium"
    },
    "it": {
      "saying": "Matto come un cavallo",
      "literal": "Mad as a horse",
      "country": "Italy",
      "approxPeriod": "modern idiom",
      "confidence": "high"
    },
    "hi": {
      "saying": "एकदम पागल",
      "literal": "Completely mad",
      "country": "India",
      "approxPeriod": "modern common expression",
      "confidence": "medium"
    },
    "el": {
      "saying": "Τρελός για δέσιμο",
      "literal": "Crazy enough to be tied up",
      "country": "Greece",
      "approxPeriod": "modern idiom",
      "confidence": "high"
    },
    "fr": {
      "saying": "Fou à lier",
      "literal": "Mad enough to tie up",
      "country": "France",
      "approxPeriod": "traditional / modern",
      "confidence": "high"
    },
    "ar": {
      "saying": "مجنون تمامًا",
      "literal": "Completely mad",
      "country": "Arab world",
      "approxPeriod": "modern common expression",
      "confidence": "medium"
    }
  },
  "push-envelope": {
    "de": {
      "saying": "Grenzen ausloten",
      "literal": "Sound out limits",
      "country": "Germany",
      "approxPeriod": "modern common expression",
      "confidence": "high"
    },
    "es": {
      "saying": "Llevar algo al límite",
      "literal": "Take something to the limit",
      "country": "Spain / Latin America",
      "approxPeriod": "modern common expression",
      "confidence": "high"
    },
    "no": {
      "saying": "Tøye grensene",
      "literal": "Stretch the limits",
      "country": "Norway",
      "approxPeriod": "modern common expression",
      "confidence": "high"
    },
    "la": {
      "saying": "Fines experiri",
      "literal": "Test the boundaries",
      "country": "Modern Latin",
      "approxPeriod": "constructed equivalent",
      "confidence": "low"
    },
    "zh": {
      "saying": "挑战极限",
      "literal": "Challenge the limits",
      "country": "China",
      "approxPeriod": "modern common expression",
      "confidence": "high"
    },
    "ja": {
      "saying": "限界に挑む",
      "literal": "Challenge the limits",
      "country": "Japan",
      "approxPeriod": "modern common expression",
      "confidence": "high"
    },
    "it": {
      "saying": "Spingersi oltre i limiti",
      "literal": "Push oneself beyond the limits",
      "country": "Italy",
      "approxPeriod": "modern common expression",
      "confidence": "high"
    },
    "hi": {
      "saying": "हदों को आगे बढ़ाना",
      "literal": "Push the limits forward",
      "country": "India",
      "approxPeriod": "modern common expression",
      "confidence": "medium"
    },
    "el": {
      "saying": "Δοκιμάζω τα όρια",
      "literal": "Test the limits",
      "country": "Greece",
      "approxPeriod": "modern common expression",
      "confidence": "high"
    },
    "fr": {
      "saying": "Repousser les limites",
      "literal": "Push back the limits",
      "country": "France",
      "approxPeriod": "modern common expression",
      "confidence": "high"
    },
    "ar": {
      "saying": "يدفع الحدود إلى أبعد مدى",
      "literal": "Push the limits as far as possible",
      "country": "Arab world",
      "approxPeriod": "modern common expression",
      "confidence": "medium"
    }
  },
  "cat-got-tongue": {
    "de": {
      "saying": "Hat es dir die Sprache verschlagen?",
      "literal": "Has it struck away your speech?",
      "country": "Germany",
      "approxPeriod": "modern common expression",
      "confidence": "high"
    },
    "es": {
      "saying": "¿Te ha comido la lengua el gato?",
      "literal": "Has the cat eaten your tongue?",
      "country": "Spain / Latin America",
      "approxPeriod": "traditional / modern",
      "confidence": "high"
    },
    "no": {
      "saying": "Har du mistet munn og mæle?",
      "literal": "Have you lost mouth and speech?",
      "country": "Norway",
      "approxPeriod": "traditional / modern",
      "confidence": "high"
    },
    "la": {
      "saying": "Cur taces?",
      "literal": "Why are you silent?",
      "country": "Ancient Rome / modern Latin",
      "approxPeriod": "functional equivalent",
      "confidence": "low"
    },
    "zh": {
      "saying": "你怎么哑巴了？",
      "literal": "How did you become mute?",
      "country": "China",
      "approxPeriod": "modern colloquial",
      "confidence": "medium"
    },
    "ja": {
      "saying": "どうして黙っているの？",
      "literal": "Why are you silent?",
      "country": "Japan",
      "approxPeriod": "modern common expression",
      "confidence": "medium"
    },
    "it": {
      "saying": "Ti ha mangiato la lingua il gatto?",
      "literal": "Has the cat eaten your tongue?",
      "country": "Italy",
      "approxPeriod": "traditional / modern",
      "confidence": "high"
    },
    "hi": {
      "saying": "ज़ुबान क्यों बंद हो गई?",
      "literal": "Why has your tongue shut?",
      "country": "India",
      "approxPeriod": "modern colloquial",
      "confidence": "medium"
    },
    "el": {
      "saying": "Σου έφαγε η γάτα τη γλώσσα;",
      "literal": "Did the cat eat your tongue?",
      "country": "Greece",
      "approxPeriod": "modern idiom",
      "confidence": "high"
    },
    "fr": {
      "saying": "Tu as perdu ta langue ?",
      "literal": "Have you lost your tongue?",
      "country": "France",
      "approxPeriod": "modern common expression",
      "confidence": "medium"
    },
    "ar": {
      "saying": "هل أكل القط لسانك؟",
      "literal": "Did the cat eat your tongue?",
      "country": "Arab world",
      "approxPeriod": "modern calque / common understood",
      "confidence": "medium"
    }
  },
  "hair-of-dog": {
    "de": {
      "saying": "Konterbier",
      "literal": "Counter-beer",
      "country": "Germany",
      "approxPeriod": "modern colloquial",
      "confidence": "high"
    },
    "es": {
      "saying": "Curar la resaca con más alcohol",
      "literal": "Cure the hangover with more alcohol",
      "country": "Spain / Latin America",
      "approxPeriod": "modern common expression",
      "confidence": "medium"
    },
    "no": {
      "saying": "Reparasjonsøl",
      "literal": "Repair beer",
      "country": "Norway",
      "approxPeriod": "modern colloquial",
      "confidence": "high"
    },
    "la": {
      "saying": "Similia similibus curantur",
      "literal": "Like is cured by like",
      "country": "Europe / Latin medical tradition",
      "approxPeriod": "medieval / early modern",
      "confidence": "medium"
    },
    "zh": {
      "saying": "以酒解酒",
      "literal": "Use alcohol to relieve alcohol",
      "country": "China",
      "approxPeriod": "modern common expression",
      "confidence": "high"
    },
    "ja": {
      "saying": "迎え酒",
      "literal": "Welcoming alcohol",
      "country": "Japan",
      "approxPeriod": "traditional / modern",
      "confidence": "high"
    },
    "it": {
      "saying": "Chiodo scaccia chiodo",
      "literal": "One nail drives out another",
      "country": "Italy",
      "approxPeriod": "traditional",
      "confidence": "medium",
      "note": "General “same thing cures same thing”; context needed for hangover."
    },
    "hi": {
      "saying": "नशा उतारने के लिए फिर से पीना",
      "literal": "Drink again to bring down intoxication",
      "country": "India",
      "approxPeriod": "modern descriptive equivalent",
      "confidence": "medium"
    },
    "el": {
      "saying": "Το όμοιο θεραπεύει το όμοιο",
      "literal": "Like cures like",
      "country": "Greece",
      "approxPeriod": "traditional / medical phrase",
      "confidence": "medium"
    },
    "fr": {
      "saying": "Soigner le mal par le mal",
      "literal": "Treat the illness with the illness",
      "country": "France",
      "approxPeriod": "traditional / modern",
      "confidence": "medium"
    },
    "ar": {
      "saying": "داوِها بالتي كانت هي الداء",
      "literal": "Treat it with that which was the illness",
      "country": "Arab world",
      "approxPeriod": "traditional poetic expression",
      "confidence": "high"
    }
  },
  "bury-hatchet": {
    "de": {
      "saying": "Das Kriegsbeil begraben",
      "literal": "Bury the war axe",
      "country": "Germany",
      "approxPeriod": "traditional / modern",
      "confidence": "high"
    },
    "es": {
      "saying": "Enterrar el hacha de guerra",
      "literal": "Bury the war axe",
      "country": "Spain / Latin America",
      "approxPeriod": "modern common expression",
      "confidence": "high"
    },
    "no": {
      "saying": "Begrave stridsøksen",
      "literal": "Bury the battle axe",
      "country": "Norway",
      "approxPeriod": "modern common expression",
      "confidence": "high"
    },
    "la": {
      "saying": "Bellum deponere",
      "literal": "Lay down war",
      "country": "Ancient Rome / modern Latin",
      "approxPeriod": "classical-style equivalent",
      "confidence": "medium"
    },
    "zh": {
      "saying": "重归于好",
      "literal": "Return again to good relations",
      "country": "China",
      "approxPeriod": "traditional / modern",
      "confidence": "high"
    },
    "ja": {
      "saying": "和解する",
      "literal": "Reconcile",
      "country": "Japan",
      "approxPeriod": "modern common expression",
      "confidence": "medium"
    },
    "it": {
      "saying": "Seppellire l’ascia di guerra",
      "literal": "Bury the war axe",
      "country": "Italy",
      "approxPeriod": "modern common expression",
      "confidence": "high"
    },
    "hi": {
      "saying": "दुश्मनी भुलाकर सुलह करना",
      "literal": "Forget enmity and reconcile",
      "country": "India",
      "approxPeriod": "modern common expression",
      "confidence": "medium"
    },
    "el": {
      "saying": "Θάβω το τσεκούρι του πολέμου",
      "literal": "Bury the axe of war",
      "country": "Greece",
      "approxPeriod": "modern calque / common understood",
      "confidence": "medium"
    },
    "fr": {
      "saying": "Enterrer la hache de guerre",
      "literal": "Bury the war axe",
      "country": "France",
      "approxPeriod": "modern common expression",
      "confidence": "high"
    },
    "ar": {
      "saying": "يطوي صفحة الخلاف",
      "literal": "Fold the page of disagreement",
      "country": "Arab world",
      "approxPeriod": "modern idiom",
      "confidence": "high"
    }
  },
  "go-belly-up": {
    "de": {
      "saying": "Pleitegehen",
      "literal": "Go broke",
      "country": "Germany",
      "approxPeriod": "modern common expression",
      "confidence": "high"
    },
    "es": {
      "saying": "Irse a pique",
      "literal": "Go down/sink",
      "country": "Spain / Latin America",
      "approxPeriod": "modern idiom",
      "confidence": "high"
    },
    "no": {
      "saying": "Gå konkurs",
      "literal": "Go bankrupt",
      "country": "Norway",
      "approxPeriod": "modern common expression",
      "confidence": "high"
    },
    "la": {
      "saying": "Corruere",
      "literal": "Collapse",
      "country": "Ancient Rome / modern Latin",
      "approxPeriod": "classical vocabulary",
      "confidence": "medium"
    },
    "zh": {
      "saying": "倒闭",
      "literal": "Close down / go bankrupt",
      "country": "China",
      "approxPeriod": "modern common expression",
      "confidence": "high"
    },
    "ja": {
      "saying": "倒産する",
      "literal": "Go bankrupt",
      "country": "Japan",
      "approxPeriod": "modern common expression",
      "confidence": "high"
    },
    "it": {
      "saying": "Andare a gambe all’aria",
      "literal": "Go legs in the air",
      "country": "Italy",
      "approxPeriod": "modern idiom",
      "confidence": "high"
    },
    "hi": {
      "saying": "दिवालिया हो जाना",
      "literal": "Become bankrupt",
      "country": "India",
      "approxPeriod": "modern common expression",
      "confidence": "high"
    },
    "el": {
      "saying": "Βάζω λουκέτο",
      "literal": "Put on a padlock",
      "country": "Greece",
      "approxPeriod": "modern idiom",
      "confidence": "high"
    },
    "fr": {
      "saying": "Mettre la clé sous la porte",
      "literal": "Put the key under the door",
      "country": "France",
      "approxPeriod": "modern idiom",
      "confidence": "high"
    },
    "ar": {
      "saying": "أفلس",
      "literal": "Went bankrupt",
      "country": "Arab world",
      "approxPeriod": "modern common expression",
      "confidence": "high"
    }
  },
  "silver-lining": {
    "de": {
      "saying": "Alles Schlechte hat auch sein Gutes",
      "literal": "Everything bad also has its good side",
      "country": "Germany",
      "approxPeriod": "traditional / modern",
      "confidence": "high"
    },
    "es": {
      "saying": "No hay mal que por bien no venga",
      "literal": "There is no bad from which good does not come",
      "country": "Spain / Latin America",
      "approxPeriod": "traditional",
      "confidence": "high"
    },
    "no": {
      "saying": "Det er ikke så galt at det ikke er godt for noe",
      "literal": "It is not so bad that it is not good for something",
      "country": "Norway",
      "approxPeriod": "traditional",
      "confidence": "high"
    },
    "la": {
      "saying": "Malum aliquod semper boni affert",
      "literal": "Some evil always brings good",
      "country": "Modern Latin",
      "approxPeriod": "constructed equivalent",
      "confidence": "low"
    },
    "zh": {
      "saying": "塞翁失马，焉知非福",
      "literal": "The old man lost his horse; how know it is not fortune?",
      "country": "China",
      "approxPeriod": "traditional",
      "confidence": "high"
    },
    "ja": {
      "saying": "災い転じて福となす",
      "literal": "Turn disaster into fortune",
      "country": "Japan",
      "approxPeriod": "traditional",
      "confidence": "high"
    },
    "it": {
      "saying": "Non tutto il male viene per nuocere",
      "literal": "Not all bad comes to harm",
      "country": "Italy",
      "approxPeriod": "traditional",
      "confidence": "high"
    },
    "hi": {
      "saying": "हर बुराई में कुछ अच्छाई होती है",
      "literal": "There is some good in every bad thing",
      "country": "India",
      "approxPeriod": "modern common equivalent",
      "confidence": "medium"
    },
    "el": {
      "saying": "Ουδέν κακόν αμιγές καλού",
      "literal": "No bad thing is unmixed with good",
      "country": "Greece",
      "approxPeriod": "ancient / traditional",
      "confidence": "high"
    },
    "fr": {
      "saying": "À quelque chose malheur est bon",
      "literal": "Misfortune is good for something",
      "country": "France",
      "approxPeriod": "traditional",
      "confidence": "high"
    },
    "ar": {
      "saying": "رب ضارة نافعة",
      "literal": "Perhaps a harmful thing is beneficial",
      "country": "Arab world",
      "approxPeriod": "traditional",
      "confidence": "high"
    }
  },
  "bigwig": {
    "de": {
      "saying": "Ein hohes Tier",
      "literal": "A high animal",
      "country": "Germany",
      "approxPeriod": "modern idiom",
      "confidence": "high"
    },
    "es": {
      "saying": "Un pez gordo",
      "literal": "A fat fish",
      "country": "Spain / Latin America",
      "approxPeriod": "modern idiom",
      "confidence": "high"
    },
    "no": {
      "saying": "En stor kanon",
      "literal": "A big cannon",
      "country": "Norway",
      "approxPeriod": "modern idiom",
      "confidence": "high"
    },
    "la": {
      "saying": "Vir potens",
      "literal": "A powerful man",
      "country": "Ancient Rome / modern Latin",
      "approxPeriod": "classical vocabulary",
      "confidence": "medium"
    },
    "zh": {
      "saying": "大人物",
      "literal": "Big person",
      "country": "China",
      "approxPeriod": "modern common expression",
      "confidence": "high"
    },
    "ja": {
      "saying": "大物",
      "literal": "Big thing/person",
      "country": "Japan",
      "approxPeriod": "modern common expression",
      "confidence": "high"
    },
    "it": {
      "saying": "Un pezzo grosso",
      "literal": "A big piece",
      "country": "Italy",
      "approxPeriod": "modern idiom",
      "confidence": "high"
    },
    "hi": {
      "saying": "बड़ा आदमी",
      "literal": "Big person",
      "country": "India",
      "approxPeriod": "modern common expression",
      "confidence": "high"
    },
    "el": {
      "saying": "Μεγάλο κεφάλι",
      "literal": "Big head",
      "country": "Greece",
      "approxPeriod": "modern idiom",
      "confidence": "medium"
    },
    "fr": {
      "saying": "Une grosse légume",
      "literal": "A big vegetable",
      "country": "France",
      "approxPeriod": "modern idiom",
      "confidence": "high"
    },
    "ar": {
      "saying": "شخصية كبيرة",
      "literal": "Big figure/personality",
      "country": "Arab world",
      "approxPeriod": "modern common expression",
      "confidence": "high"
    }
  },
  "earworm": {
    "de": {
      "saying": "Ohrwurm",
      "literal": "Earworm",
      "country": "Germany",
      "approxPeriod": "modern common expression",
      "confidence": "high"
    },
    "es": {
      "saying": "Una canción pegadiza",
      "literal": "A sticky/catchy song",
      "country": "Spain / Latin America",
      "approxPeriod": "modern common expression",
      "confidence": "high"
    },
    "no": {
      "saying": "Øreorm",
      "literal": "Earworm",
      "country": "Norway",
      "approxPeriod": "modern common expression",
      "confidence": "high"
    },
    "la": {
      "saying": "Canticum in mente haerens",
      "literal": "A song sticking in the mind",
      "country": "Modern Latin",
      "approxPeriod": "constructed equivalent",
      "confidence": "low"
    },
    "zh": {
      "saying": "洗脑神曲",
      "literal": "Brainwashing divine tune",
      "country": "China",
      "approxPeriod": "modern slang",
      "confidence": "medium"
    },
    "ja": {
      "saying": "イヤーワーム",
      "literal": "Earworm",
      "country": "Japan",
      "approxPeriod": "modern loanword",
      "confidence": "medium"
    },
    "it": {
      "saying": "Un tormentone",
      "literal": "A big torment",
      "country": "Italy",
      "approxPeriod": "modern common expression",
      "confidence": "high"
    },
    "hi": {
      "saying": "दिमाग में अटक जाने वाला गाना",
      "literal": "A song that gets stuck in the mind",
      "country": "India",
      "approxPeriod": "modern descriptive equivalent",
      "confidence": "medium"
    },
    "el": {
      "saying": "Κόλλησε στο μυαλό μου",
      "literal": "It stuck in my mind",
      "country": "Greece",
      "approxPeriod": "modern common expression",
      "confidence": "medium"
    },
    "fr": {
      "saying": "Un ver d’oreille",
      "literal": "An earworm",
      "country": "France / Canada",
      "approxPeriod": "modern common expression",
      "confidence": "high"
    },
    "ar": {
      "saying": "أغنية عالقة في الرأس",
      "literal": "A song stuck in the head",
      "country": "Arab world",
      "approxPeriod": "modern descriptive equivalent",
      "confidence": "medium"
    }
  },
  "cold-feet": {
    "de": {
      "saying": "Kalte Füße bekommen",
      "literal": "Get cold feet",
      "country": "Germany",
      "approxPeriod": "modern common expression",
      "confidence": "high"
    },
    "es": {
      "saying": "Echarse atrás",
      "literal": "Throw oneself back",
      "country": "Spain / Latin America",
      "approxPeriod": "modern common expression",
      "confidence": "high"
    },
    "no": {
      "saying": "Få kalde føtter",
      "literal": "Get cold feet",
      "country": "Norway",
      "approxPeriod": "modern common expression",
      "confidence": "high"
    },
    "la": {
      "saying": "Animum demittere",
      "literal": "Let courage drop",
      "country": "Ancient Rome / modern Latin",
      "approxPeriod": "classical-style equivalent",
      "confidence": "medium"
    },
    "zh": {
      "saying": "临阵退缩",
      "literal": "Shrink back before battle",
      "country": "China",
      "approxPeriod": "traditional / modern",
      "confidence": "high"
    },
    "ja": {
      "saying": "怖気づく",
      "literal": "Become afraid / lose nerve",
      "country": "Japan",
      "approxPeriod": "traditional / modern",
      "confidence": "high"
    },
    "it": {
      "saying": "Tirarsi indietro",
      "literal": "Pull oneself back",
      "country": "Italy",
      "approxPeriod": "modern common expression",
      "confidence": "high"
    },
    "hi": {
      "saying": "हिम्मत हार जाना",
      "literal": "Lose courage",
      "country": "India",
      "approxPeriod": "modern common expression",
      "confidence": "high"
    },
    "el": {
      "saying": "Κάνω πίσω",
      "literal": "Step back",
      "country": "Greece",
      "approxPeriod": "modern common expression",
      "confidence": "high"
    },
    "fr": {
      "saying": "Se dégonfler",
      "literal": "Deflate oneself",
      "country": "France",
      "approxPeriod": "modern colloquial",
      "confidence": "high"
    },
    "ar": {
      "saying": "تراجع في اللحظة الأخيرة",
      "literal": "Backed out at the last moment",
      "country": "Arab world",
      "approxPeriod": "modern common expression",
      "confidence": "high"
    }
  },
  "go-bananas": {
    "de": { "saying": "Bananen gehen", "literal": "Go bananas", "country": "Germany", "approxPeriod": "direct image-preserving calque", "confidence": "low" },
    "es": { "saying": "Volverse bananas", "literal": "Become bananas", "country": "Spain / Latin America", "approxPeriod": "direct image-preserving calque", "confidence": "medium" },
    "no": { "saying": "Gå bananas", "literal": "Go bananas", "country": "Norway", "approxPeriod": "modern slang / loan idiom", "confidence": "high" },
    "la": { "saying": "In bananas ire", "literal": "Go into bananas", "country": "Modern Latin", "approxPeriod": "direct image-preserving calque", "confidence": "low" },
    "zh": { "saying": "变成香蕉", "literal": "Become bananas", "country": "China", "approxPeriod": "direct image-preserving calque", "confidence": "low" },
    "ja": { "saying": "バナナになる", "literal": "Become bananas", "country": "Japan", "approxPeriod": "direct image-preserving calque", "confidence": "low" },
    "it": { "saying": "Andare a banane", "literal": "Go bananas", "country": "Italy", "approxPeriod": "direct image-preserving calque", "confidence": "low" },
    "hi": { "saying": "केले जैसा पागल हो जाना", "literal": "Go mad like bananas", "country": "India", "approxPeriod": "direct image-preserving calque", "confidence": "low" },
    "el": { "saying": "Πηγαίνω μπανάνες", "literal": "Go bananas", "country": "Greece", "approxPeriod": "direct image-preserving calque", "confidence": "low" },
    "fr": { "saying": "Devenir bananes", "literal": "Become bananas", "country": "France", "approxPeriod": "direct image-preserving calque", "confidence": "low" },
    "ar": { "saying": "يذهب موزاً", "literal": "Go bananas", "country": "Arab world", "approxPeriod": "direct image-preserving calque", "confidence": "low" }
  },
  "armed-to-teeth": {
    "de": {
      "saying": "Bis an die Zähne bewaffnet",
      "literal": "Armed up to the teeth",
      "country": "Germany",
      "approxPeriod": "traditional / modern",
      "confidence": "high"
    },
    "es": {
      "saying": "Armado hasta los dientes",
      "literal": "Armed to the teeth",
      "country": "Spain / Latin America",
      "approxPeriod": "traditional / modern",
      "confidence": "high"
    },
    "no": {
      "saying": "Bevæpnet til tennene",
      "literal": "Armed to the teeth",
      "country": "Norway",
      "approxPeriod": "modern common expression",
      "confidence": "high"
    },
    "la": {
      "saying": "Usque ad dentes armatus",
      "literal": "Armed all the way to the teeth",
      "country": "Modern Latin",
      "approxPeriod": "constructed / calque",
      "confidence": "low"
    },
    "zh": {
      "saying": "武装到牙齿",
      "literal": "Armed to the teeth",
      "country": "China",
      "approxPeriod": "modern common expression",
      "confidence": "high"
    },
    "ja": {
      "saying": "歯の先まで武装している",
      "literal": "Armed to the tips of the teeth",
      "country": "Japan",
      "approxPeriod": "modern calque / understood",
      "confidence": "medium"
    },
    "it": {
      "saying": "Armato fino ai denti",
      "literal": "Armed to the teeth",
      "country": "Italy",
      "approxPeriod": "traditional / modern",
      "confidence": "high"
    },
    "hi": {
      "saying": "दाँतों तक हथियारबंद",
      "literal": "Armed up to the teeth",
      "country": "India",
      "approxPeriod": "modern calque / understood",
      "confidence": "medium"
    },
    "el": {
      "saying": "Οπλισμένος σαν αστακός",
      "literal": "Armed like a lobster",
      "country": "Greece",
      "approxPeriod": "modern idiom",
      "confidence": "high"
    },
    "fr": {
      "saying": "Armé jusqu’aux dents",
      "literal": "Armed to the teeth",
      "country": "France",
      "approxPeriod": "traditional / modern",
      "confidence": "high"
    },
    "ar": {
      "saying": "مدجج بالسلاح",
      "literal": "Heavily loaded with weapons",
      "country": "Arab world",
      "approxPeriod": "traditional / modern",
      "confidence": "high"
    }
  },
  "bite-dust": {
    "de": {
      "saying": "Ins Gras beißen",
      "literal": "Bite into the grass",
      "country": "Germany",
      "approxPeriod": "modern idiom",
      "confidence": "high"
    },
    "es": {
      "saying": "Morder el polvo",
      "literal": "Bite the dust",
      "country": "Spain / Latin America",
      "approxPeriod": "modern common expression",
      "confidence": "high"
    },
    "no": {
      "saying": "Bite i gresset",
      "literal": "Bite the grass",
      "country": "Norway",
      "approxPeriod": "modern idiom",
      "confidence": "high"
    },
    "la": {
      "saying": "Humum mordere",
      "literal": "Bite the ground",
      "country": "Ancient Rome / later Latin",
      "approxPeriod": "classical-style image",
      "confidence": "medium"
    },
    "zh": {
      "saying": "一败涂地",
      "literal": "Defeated and smeared on the ground",
      "country": "China",
      "approxPeriod": "traditional / modern",
      "confidence": "high"
    },
    "ja": {
      "saying": "敗北を喫する",
      "literal": "Suffer defeat",
      "country": "Japan",
      "approxPeriod": "modern formal expression",
      "confidence": "medium"
    },
    "it": {
      "saying": "Mordere la polvere",
      "literal": "Bite the dust",
      "country": "Italy",
      "approxPeriod": "modern common expression",
      "confidence": "high"
    },
    "hi": {
      "saying": "धूल चाटना",
      "literal": "Lick the dust",
      "country": "India",
      "approxPeriod": "traditional / modern",
      "confidence": "high"
    },
    "el": {
      "saying": "Τρώω τη σκόνη",
      "literal": "Eat the dust",
      "country": "Greece",
      "approxPeriod": "modern idiom",
      "confidence": "medium"
    },
    "fr": {
      "saying": "Mordre la poussière",
      "literal": "Bite the dust",
      "country": "France",
      "approxPeriod": "traditional / modern",
      "confidence": "high"
    },
    "ar": {
      "saying": "خرّ صريعًا",
      "literal": "Fell struck down",
      "country": "Arab world",
      "approxPeriod": "traditional / literary",
      "confidence": "medium"
    }
  }
};

function makeOriginText(variant = {}) {
  return variant.origin || '';
}

function makeFallbackOriginText(variant = {}, fallbackExplanation = '') {
  return fallbackExplanation ? `Origin unknown. ${fallbackExplanation}` : 'Origin unknown.';
}

function migrateVariant(variant, fallbackExplanation = '') {
  if (!variant) return null;
  return {
    ...variant,
    explanation: variant.explanation || fallbackExplanation,
    origin: makeOriginText(variant),
    originMeta: {
      country: variant.country || 'Unknown',
      approxPeriod: variant.approxPeriod || 'traditional / unknown',
      confidence: variant.confidence || 'low',
      note: variant.note || ''
    }
  };
}


const imagePreservingOverridesById = {
  "go-bananas": {
    "de": { "saying": "Bananen gehen", "literal": "Go bananas", "approxPeriod": "direct image-preserving calque", "confidence": "low" },
    "es": { "saying": "Irse bananas", "literal": "Go bananas", "approxPeriod": "direct image-preserving calque", "confidence": "low" },
    "no": { "saying": "Gå bananas", "literal": "Go bananas", "approxPeriod": "modern slang / loan idiom", "confidence": "high" },
    "la": { "saying": "Ad bananas ire", "literal": "Go bananas", "approxPeriod": "direct image-preserving calque", "confidence": "low" },
    "it": { "saying": "Andare bananas", "literal": "Go bananas", "approxPeriod": "direct image-preserving calque", "confidence": "low" },
    "fr": { "saying": "Partir en bananes", "literal": "Go into bananas", "approxPeriod": "direct image-preserving calque", "confidence": "low" }
  },
  "pick-your-brain": {
    "de": { "saying": "Darf ich dein Gehirn pflücken?", "literal": "May I pick your brain?", "approxPeriod": "direct image-preserving calque", "confidence": "low" },
    "es": { "saying": "¿Puedo hurgar un poco en tu cerebro?", "literal": "May I poke a little in your brain?", "approxPeriod": "direct image-preserving calque", "confidence": "medium" },
    "no": { "saying": "Kan jeg plukke litt i hjernen din?", "literal": "May I pick a little in your brain?", "approxPeriod": "direct image-preserving calque", "confidence": "medium" },
    "la": { "saying": "Cerebrum tuum paululum carpere possum?", "literal": "May I pick your brain a little?", "approxPeriod": "direct image-preserving calque", "confidence": "low" },
    "it": { "saying": "Posso pescare un po’ nel tuo cervello?", "literal": "May I fish a little in your brain?", "approxPeriod": "direct image-preserving calque", "confidence": "medium" },
    "fr": { "saying": "Je peux picorer un peu dans ton cerveau ?", "literal": "May I peck a little in your brain?", "approxPeriod": "direct image-preserving calque", "confidence": "medium" },
    "fo": { "saying": "Kann eg plukka eitt sindur í heilanum hjá tær?", "literal": "May I pick a little in your brain?", "approxPeriod": "direct image-preserving calque", "confidence": "medium" }
  },
  "bone-to-pick": {
    "de": { "saying": "Ich habe einen Knochen mit dir zu pflücken", "literal": "I have a bone to pick with you", "approxPeriod": "direct image-preserving calque", "confidence": "low" },
    "es": { "saying": "Tengo un hueso que roer contigo", "literal": "I have a bone to gnaw with you", "approxPeriod": "direct image-preserving calque", "confidence": "low" },
    "no": { "saying": "Jeg har et bein å plukke med deg", "literal": "I have a bone to pick with you", "approxPeriod": "direct image-preserving calque", "confidence": "medium" },
    "la": { "saying": "Os tecum carpere habeo", "literal": "I have a bone to pick with you", "approxPeriod": "direct image-preserving calque", "confidence": "low" },
    "it": { "saying": "Ho un osso da spolpare con te", "literal": "I have a bone to pick with you", "approxPeriod": "direct image-preserving calque", "confidence": "low" },
    "fr": { "saying": "J’ai un os à ronger avec toi", "literal": "I have a bone to gnaw with you", "approxPeriod": "direct image-preserving calque", "confidence": "low" }
  },
  "under-the-weather": {
    "de": { "saying": "Unter dem Wetter", "literal": "Under the weather", "approxPeriod": "direct image-preserving calque", "confidence": "low" },
    "es": { "saying": "Bajo el tiempo", "literal": "Under the weather", "approxPeriod": "direct image-preserving calque", "confidence": "low" },
    "no": { "saying": "Under været", "literal": "Under the weather", "approxPeriod": "direct image-preserving calque", "confidence": "medium" },
    "la": { "saying": "Sub tempestate", "literal": "Under the weather/storm", "approxPeriod": "direct image-preserving calque", "confidence": "low" },
    "it": { "saying": "Sotto il tempo", "literal": "Under the weather", "approxPeriod": "direct image-preserving calque", "confidence": "low" },
    "fr": { "saying": "Sous le temps", "literal": "Under the weather", "approxPeriod": "direct image-preserving calque", "confidence": "low" },
    "fo": { "saying": "Undir veðrinum", "literal": "Under the weather", "approxPeriod": "direct image-preserving calque", "confidence": "medium" }
  },
  "elephant-room": {
    "la": { "saying": "Elephantus in cubiculo", "literal": "The elephant in the room", "approxPeriod": "direct image-preserving calque", "confidence": "low" }
  },
  "look-before-leap": {
    "de": { "saying": "Schau, bevor du springst", "literal": "Look before you leap", "approxPeriod": "direct image-preserving calque", "confidence": "medium" },
    "es": { "saying": "Mira antes de saltar", "literal": "Look before you leap", "approxPeriod": "direct image-preserving calque", "confidence": "medium" },
    "no": { "saying": "Se før du hopper", "literal": "Look before you leap", "approxPeriod": "direct image-preserving calque", "confidence": "medium" },
    "la": { "saying": "Aspice antequam salias", "literal": "Look before you leap", "approxPeriod": "direct image-preserving calque", "confidence": "low" },
    "fr": { "saying": "Regarde avant de sauter", "literal": "Look before you leap", "approxPeriod": "direct image-preserving calque", "confidence": "medium" }
  },
  "many-hands-light-work": {
    "fr": { "saying": "Beaucoup de mains rendent le travail léger", "literal": "Many hands make the work light", "approxPeriod": "direct image-preserving calque", "confidence": "medium" }
  },
  "bite-the-bullet": {
    "de": { "saying": "In die Kugel beißen", "literal": "Bite into the bullet", "approxPeriod": "direct image-preserving calque", "confidence": "low" },
    "es": { "saying": "Morder la bala", "literal": "Bite the bullet", "approxPeriod": "direct image-preserving calque", "confidence": "medium" },
    "no": { "saying": "Bite i kula", "literal": "Bite the bullet", "approxPeriod": "direct image-preserving calque", "confidence": "medium" },
    "la": { "saying": "Glans mordere", "literal": "Bite the bullet", "approxPeriod": "direct image-preserving calque", "confidence": "low" },
    "it": { "saying": "Mordere il proiettile", "literal": "Bite the bullet", "approxPeriod": "direct image-preserving calque", "confidence": "medium" },
    "fr": { "saying": "Mordre la balle", "literal": "Bite the bullet", "approxPeriod": "direct image-preserving calque", "confidence": "medium" }
  },
  "no-brainer": {
    "de": { "saying": "Ohne Hirn", "literal": "Without brain", "approxPeriod": "direct image-preserving calque", "confidence": "low" },
    "es": { "saying": "Sin cerebro", "literal": "Without brain", "approxPeriod": "direct image-preserving calque", "confidence": "medium" },
    "no": { "saying": "Uten hjerne", "literal": "Without brain", "approxPeriod": "direct image-preserving calque", "confidence": "medium" },
    "la": { "saying": "Sine cerebro", "literal": "Without brain", "approxPeriod": "direct image-preserving calque", "confidence": "low" },
    "it": { "saying": "Senza cervello", "literal": "Without brain", "approxPeriod": "direct image-preserving calque", "confidence": "medium" },
    "fr": { "saying": "Sans cerveau", "literal": "Without brain", "approxPeriod": "direct image-preserving calque", "confidence": "medium" }
  },
  "push-envelope": {
    "de": { "saying": "Den Umschlag schieben", "literal": "Push the envelope", "approxPeriod": "direct image-preserving calque", "confidence": "low" },
    "es": { "saying": "Empujar el sobre", "literal": "Push the envelope", "approxPeriod": "direct image-preserving calque", "confidence": "medium" },
    "no": { "saying": "Skyve konvolutten", "literal": "Push the envelope", "approxPeriod": "direct image-preserving calque", "confidence": "medium" },
    "la": { "saying": "Involucrum pellere", "literal": "Push the envelope", "approxPeriod": "direct image-preserving calque", "confidence": "low" },
    "it": { "saying": "Spingere la busta", "literal": "Push the envelope", "approxPeriod": "direct image-preserving calque", "confidence": "medium" },
    "fr": { "saying": "Pousser l’enveloppe", "literal": "Push the envelope", "approxPeriod": "direct image-preserving calque", "confidence": "medium" }
  },
  "wet-blanket": {
    "de": { "saying": "Eine nasse Decke", "literal": "A wet blanket", "approxPeriod": "direct image-preserving calque", "confidence": "medium" },
    "es": { "saying": "Una manta mojada", "literal": "A wet blanket", "approxPeriod": "direct image-preserving calque", "confidence": "medium" },
    "no": { "saying": "Et vått teppe", "literal": "A wet blanket", "approxPeriod": "direct image-preserving calque", "confidence": "medium" },
    "la": { "saying": "Stragulum madidum", "literal": "A wet blanket", "approxPeriod": "direct image-preserving calque", "confidence": "low" },
    "it": { "saying": "Una coperta bagnata", "literal": "A wet blanket", "approxPeriod": "direct image-preserving calque", "confidence": "medium" },
    "fr": { "saying": "Une couverture mouillée", "literal": "A wet blanket", "approxPeriod": "direct image-preserving calque", "confidence": "medium" }
  },
  "silver-lining": {
    "de": { "saying": "Jede Wolke hat einen Silberrand", "literal": "Every cloud has a silver edge", "approxPeriod": "direct image-preserving calque", "confidence": "medium" },
    "es": { "saying": "Cada nube tiene un borde de plata", "literal": "Every cloud has a silver edge", "approxPeriod": "direct image-preserving calque", "confidence": "medium" },
    "no": { "saying": "Hver sky har en sølvkant", "literal": "Every cloud has a silver edge", "approxPeriod": "direct image-preserving calque", "confidence": "medium" },
    "la": { "saying": "Omnis nubes marginem argenteum habet", "literal": "Every cloud has a silver edge", "approxPeriod": "direct image-preserving calque", "confidence": "low" },
    "it": { "saying": "Ogni nuvola ha un bordo d’argento", "literal": "Every cloud has a silver edge", "approxPeriod": "direct image-preserving calque", "confidence": "medium" },
    "fr": { "saying": "Chaque nuage a une bordure d’argent", "literal": "Every cloud has a silver edge", "approxPeriod": "direct image-preserving calque", "confidence": "medium" }
  }
};

export const categories = [
  { key: 'all', label: 'All' },
  { key: 'beginning', label: 'At begynde' },
  { key: 'choosing', label: 'At vælge' },
  { key: 'failing', label: 'At fejle' },
  { key: 'relating', label: 'At relatere' },
  { key: 'understanding', label: 'At forstå' }
];

export const languages = [
  { key: 'en', label: 'EN', name: 'English' },
  { key: 'dk', label: 'DA', name: 'Dansk' },
  { key: 'de', label: 'DE', name: 'Deutsch' },
  { key: 'es', label: 'ES', name: 'Español' },
  { key: 'no', label: 'NO', name: 'Norsk' },
  { key: 'la', label: 'LA', name: 'Latin' },
  { key: 'it', label: 'IT', name: 'Italiano' },
  { key: 'fr', label: 'FR', name: 'Français' },
  { key: 'fo', label: 'FO', name: 'Føroyskt' }
];

const languageKeys = languages.map((item) => item.key);

export const proverbs = rawProverbs
  .filter((proverb) => bookMetaById[proverb.id] && !removedDuplicateMeaningIds.has(proverb.id))
  .sort((a, b) => bookMetaById[a.id].order - bookMetaById[b.id].order)
  .map((proverb) => {
    const bookMeta = bookMetaById[proverb.id] || {};
    const englishSource = { ...(proverb.en || {}), ...(englishCorrectionsById[proverb.id] || {}) };
    const category = bookMeta.category || normalizeCategory(categoryById[proverb.id]);
    const curatedOppositeId = curatedOppositeById[proverb.id] || null;
    const oppositeId = curatedOppositeId === proverb.id || removedDuplicateMeaningIds.has(curatedOppositeId)
      ? null
      : curatedOppositeId;
    const meaning = {
      en: englishSource.explanation || '',
      fo: proverb.fo?.explanation || englishSource.explanation || ''
    };
    const bookDanish = bookMeta.dkSaying
      ? { ...(proverb.dk || {}), saying: bookMeta.dkSaying }
      : proverb.dk;
    const cultural = { ...(languageEquivalentsById[proverb.id] || {}), ...(imagePreservingOverridesById[proverb.id] || {}) };
    const variants = Object.fromEntries(
      languageKeys
        .map((language) => {
          const source = language === 'en' ? englishSource : cultural[language] || (language === 'fo' ? proverb.fo : language === 'dk' ? bookDanish : undefined);
          const variant = migrateVariant(source, meaning.en);
          return variant ? [language, variant] : null;
        })
        .filter(Boolean)
    );
    const englishVariant = variants.en || migrateVariant(englishSource, meaning.en);
    const appOriginEn = englishVariant?.origin || makeFallbackOriginText(englishVariant || englishSource, meaning.en);
    const bookStoryEn = bookStoriesEn[proverb.id] || appOriginEn;
    if (variants.en) variants.en.origin = bookStoryEn;

    languageKeys.forEach((language) => {
      if (!variants[language] && englishVariant) variants[language] = { ...englishVariant, origin: bookStoryEn };
      if (variants[language] && !variants[language].origin) variants[language].origin = bookStoryEn;
    });

    return {
      ...proverb,
      en: englishSource,
      dk: bookDanish,
      category,
      kind: bookMeta.kind || 'dilemma',
      oppositeId,
      bookOrder: bookMeta.order,
      bookStoryEn,
      appOriginEn,
      meaning,
      variants
    };
  });

export function getProverbVariant(proverb, language = 'en') {
  return proverb?.variants?.[language] || proverb?.variants?.en || proverb?.en || { saying: '', explanation: '' };
}

export function getLanguageLabel(language = 'en') {
  return languages.find((item) => item.key === language)?.label || 'EN';
}

export function getLanguageName(language = 'en') {
  return languages.find((item) => item.key === language)?.name || 'English';
}
