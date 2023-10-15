const axios = require("axios");
const newsService = require("../../services/newsService");
const chai = require("chai");
const expect = chai.expect;
const sinon = require("sinon");

describe("News Service API ", () => {
  afterEach(() => {
    sinon.restore();
  });

  //? since there is no behaviour verification we just want the api should give result we will use stub
  it("Should successfully give the fetch the data", async () => {
    const axiosStub = sinon.stub(axios, "get"); // Create a stub for the get method
    const fakeResult = {
      status: "success",
      data: {
        status: "success",
        totalResults: 139322,
        results: [
          {
            article_id: "615bb973cad34004a37e37cbe942f92f",
            title:
              "Slovenka prebýva v luxusných domoch po celom svete zadarmo: House sitting však nie je pre každého",
            link: "https://www.startitup.sk/slovenka-prebyva-v-luxusnych-domoch-po-celom-svete-zadarmo/",
            keywords: [
              "Rozhovory",
              "cestovanie",
              "house sitting",
              "Ivana Grešliková",
              "rozhovor o cestovaní",
              "rozhovor o house sittingu",
              "ubytovanie zdarma",
            ],
            creator: ["Jana Bačová"],
            video_url: null,
            description:
              "Ivana už 8 rokov býva zadarmo v luxusných vilách či skromných bytoch po celom svete Ak chceš vyskúšať house sitting aj ty, prečítaj si, čo to obnáša The post Slovenka prebýva v luxusných domoch po celom svete zadarmo: House sitting však nie je pre každého appeared first on Startitup.sk.",
            content:
              "Ivana Grešlíková cestuje po svete už desať rokov. V svetových metropolách býva v luxusných vilách, súkromných bytoch či domoch. Ako to je vlastne možné? Pred rokmi si Ivana zamilovala tzv. house sitting, prostredníctvom ktorého spoznáva skutočný život daného miesta, namiesto toho, aby zostávala v umelo vybudovaných rezortoch. Pri tomto spôsobe ubytovania sa dostáva priamo do domovov miestnych ľudí, pričom im za to neplatí peniazmi, ale tým, že sa stará napríklad o ich domácich miláčikov. Tento spôsob cestovania síce umožňuje ušetriť množstvo peňazí a spoznávať svet z úplne iného pohľadu, no má aj svoje úskalia. Svoje rady a tipy Ivana zdieľa aj prostredníctvom svojho blogu , no pre Startitup toho prezradila oveľa viac. Úplne prvýkrát som o niečom takom počula asi pred deviatimi rokmi od známych, ktorí pomocou house sittingu precestovali časť Európy. Lenže z toho, čo som vtedy o house sittingu vedela, mi pripadalo divné byť v cudzom byte bez majiteľov. Celé sa to však zmenilo po tom, čo som po ich opakovaných pozitívnych zážitkoch na juhu Európy vyskúšala prvý sit v Anglicku a hneď na to v Portugalsku, kde sa všetko zmenilo. Pochopila som, že house sit je jednoznačne viac než len bývanie zadarmo. Po odomknutí tiež získaš",
            pubDate: "2023-10-06 13:39:12",
            image_url: null,
            source_id: "startitup",
            source_priority: 3344446,
            country: ["slovakia"],
            category: ["top"],
            language: "slovak",
          },
          {
            article_id: "60c6558c3ccc7cca864e05e8d834fee1",
            title: "एयर इंडिया ने बनाया पहला इंजीनियरिंग मेगा वेयरहाउस",
            link: "https://jantaserishta.com/business/air-india-built-its-first-engineering-mega-warehouse-2885455",
            keywords: ["व्यापार"],
            creator: ["Neha Yadav"],
            video_url: null,
            description: null,
            content:
              "एयर इंडिया:�टाटा की अगुवाई वाली एयर इंडिया ने विमान देखभाल के उद्देश्य से करीब 10 लाख कलपुर्जे रखने के लिए दिल्ली में एक विशाल भंडारण इकाई शुरू की है। इंदिरा गांधी हवाई अड्डे (आईजीआई) के करीब अपनी तरह का पहला इंजीनियरिंग मेगा वेयरहाउस स्थापित किया गया है। टर्मिनल-3 के पास करीब 54 हजार वर्गफुट क्षेत्र में फैली केंद्रीकृत भंडारण इकाई से राजधानी दिल्ली में उड़ानों के संचालन समय में सुधार आएगा। एयर इंडिया ने शुक्रवार को जारी एक बयान में बताया कि केंद्रीकृत भंडारण इकाई की शुरुआत से हार्डवेयर से लेकर परिष्कृत और जटिल एवियोनिक्स, हाइड्रोलिक्स, संरचनात्मक और यांत्रिक घटकों तक विमान के कलपुर्जों, उपकरणों और अन्य उपकरणों का भंडारण एक ही स्थान पर हो सकेगा। इसके अलावा यह हमारे बढ़ते बेड़े का समर्थन करने और सभी इंजीनियरिंग जरूरतों के लिए वन-स्टॉप समाधान के तौर पर हमारी परिचालन विश्वसनीयता को बढ़ाने के लिए महत्वपूर्ण है। एयर इंडिया के मुख्य कार्यपालक अधिकारी (सीईओ) और प्रबंध निदेशक कैम्पबेल विल्सन ने कहा कि यह इकाई न सिर्फ एयर इंडिया के बेड़े और परिचालन दक्षता को बढ़ावा देगी, बल्कि भारत के विमानन पारिस्थितिकी तंत्र को मजबूत करेगी। उन्होंने कहा कि यह गोदाम हमें अपने विमान के पुर्जों तक अधिक नजदीकी पहुंच और बेहतर नियंत्रण प्रदान करेगा, जिससे हम किसी भी इंजीनियरिंग जरूरत को तुरंत पूरा करने में सक्षम होंगे। इससे उड़ानों के समय में सुधार होगा।",
            pubDate: "2023-10-06 13:39:11",
            image_url:
              "https://jantaserishta.com/h-upload/2023/10/06/3507422-1.webp",
            source_id: "jantaserishta",
            source_priority: 6826860,
            country: ["india"],
            category: ["business"],
            language: "hindi",
          },
          {
            article_id: "05969f2dbade3afdc843a5edb17a3a42",
            title:
              "उपप्राध्यापक चलाउनेमाथि आक्रमण गर्ने श्रेष्ठलाई थुनामा पठाउन आदेश",
            link: "https://www.onlinekhabar.com/2023/10/1377277",
            keywords: ["प्रमुख समाचार (Home)", "प्रेम चलाउने"],
            creator: ["Shuphal Kafle"],
            video_url: null,
            description:
              "१९ असोज, काठमाडौं । जिल्ला अदालत काठमाडौंले त्रिभुवन विश्वविद्यालयका उपप्राध्यापक प्रेम चलाउनेमाथि आक्रमण गर्नेमध्येका एक सयुज श्रेष्ठलाई मुद्दाको टुंगो नलागुञ्जेल थुनामा पठाउन आदेश दिएको छ । न्यायाधीश शिशिरराज ढकालको इजलासले श्रेष्ठको धरौटी अस्वीकार गरी उनलाई थुनामै पठाउन आदेश गरेको हो । श्रेष्ठ यसअघि नै साधारण तारेखमा छुटेका थिए । उच्च अदालतले उनलाई ५ लाख धरौटी […]",
            content:
              "१९ असोज, काठमाडौं । जिल्ला अदालत काठमाडौंले त्रिभुवन विश्वविद्यालयका उपप्राध्यापक प्रेम चलाउनेमाथि आक्रमण गर्नेमध्येका एक सयुज श्रेष्ठलाई मुद्दाको टुंगो नलागुञ्जेल थुनामा पठाउन आदेश दिएको छ । न्यायाधीश शिशिरराज ढकालको इजलासले श्रेष्ठको धरौटी अस्वीकार गरी उनलाई थुनामै पठाउन आदेश गरेको हो । श्रेष्ठ यसअघि नै साधारण तारेखमा छुटेका थिए । उच्च अदालतले उनलाई ५ लाख धरौटी बुझाउन र अन्तरिम क्षतिपूर्ति दिन आदेश दिएको थियो । धरौटी नबुझाई फरार रहेका उनलाई अदालतले थुनामा पठाउन आदेश दिएको हो । थुनामा जानुपर्ने भएपछि उनी धरौटी बुझाउन तयार भएका थिए, तर अदालतले अस्वीकार गरेको हो । २० असोज २०७७ मा कीर्तिपुरस्थित त्रिभुवन विश्वविद्यालयमा परिसरमा समाजशास्त्रका उपप्राध्यापक चलाउनेमाथि आक्रमण भएको थियो । नेपाल विद्यार्थी संघको त्रिभुवन विश्वविद्यालय क्याम्पस इकाइका तत्कालीन सभापति हरिप्रसाद आचार्य र सचिव योगेन्द्र रावलको नेतृत्वको समूहले आफूलाई आक्रमण गरेको उपप्राध्यापक चलाउनेले बताउँदै आएका छन् । घटनामा उनीहरूसहित दीपकराज ओझा, रुपेश साह, रविन लामा, सयुज श्रेष्ठ, निरज रानामगर लगायत संलग्न भएको आरोप थियो । उनीहरूमाथिको मुद्दा जिल्ला अदालतमा विचाराधीन नै छ ।",
            pubDate: "2023-10-06 13:39:11",
            image_url: null,
            source_id: "onlinekhabar",
            source_priority: 50136,
            country: ["nepal"],
            category: ["top"],
            language: "nepali",
          },
          {
            article_id: "eaf7a5dd19bbc25daa17665e85de880a",
            title:
              "Цените на основните прехранбени производи нема да се зголемат, граѓаните да бидат спокојни, порачува Бектеши",
            link: "https://press24.mk/cenite-na-osnovnite-prehranbeni-proizvodi-nema-da-se-zgolemat-gragjanite-da-bidat-spokojni-porachuva",
            keywords: null,
            creator: ["Daniel"],
            video_url: null,
            description:
              "„Министерството за економија целосно стои зад Одлуката за намалување на цените на основните прехранбени производи која ја донесовме пред две недели. Најмалку до 30 ноември, до кога е на важност оваа одлука, отстапување од нејзе нема да има. Сите производи кои се опфатени во Одлуката за намалување на цените на Министерството за економија ќе останат со даночна стапка од 5%“, напиша на својот Фејсбук профил, министерот за економија Крешник Бектеши.",
            content: null,
            pubDate: "2023-10-06 13:39:10",
            image_url: null,
            source_id: "press24_mk",
            source_priority: 4887760,
            country: ["macedonia"],
            category: ["business"],
            language: "macedonian",
          },
          {
            article_id: "411c561826da7d03c60fa38cb3c7030b",
            title:
              "Zelenskiy Aide Says Ukraine Needs More Air Defense Before Winter",
            link: "https://financialpost.com/pmn/business-pmn/zelenskiy-aide-says-ukraine-needs-more-air-defense-before-winter",
            keywords: ["PMN Business", "BLOOM", "energy"],
            creator: ["Bloomberg News"],
            video_url: null,
            description:
              "Ukraine is seeking more air defense systems ahead of winter to protect its energy infrastructure from the type of Russian attacks that caused massive blackouts across the country last year, President Volodymyr Zelenskiy’s deputy chief of staff said.",
            content:
              "(Bloomberg) — Ukraine is seeking more air defense systems ahead of winter to protect its energy infrastructure from the type of Russian attacks that caused massive blackouts across the country last year, President Volodymyr Zelenskiy’s deputy chief of staff said. Read More",
            pubDate: "2023-10-06 13:39:09",
            image_url: null,
            source_id: "financialpost",
            source_priority: 59472,
            country: ["canada"],
            category: ["top"],
            language: "english",
          },
          {
            article_id: "9839e43a618c5dea5ccc12a28b54e0fe",
            title: "Luol Deng: South Sudan’s great rebound",
            link: "https://mg.co.za/africa/2023-10-06-luol-deng-south-sudans-great-rebound/",
            keywords: [
              "Africa",
              "All-Star NBA",
              "Basketball",
              "Fiba World Cup",
              "Luol Deng",
              "olympics",
              "Order of the British Empire",
              "South Sudan",
            ],
            creator: ["Eyaaz"],
            video_url: null,
            description:
              "Amid the trials the country faces in rebuilding after the long struggle for its independence, its success in basketball is hopeful The post Luol Deng: South Sudan’s great rebound appeared first on The Mail & Guardian.",
            content: null,
            pubDate: "2023-10-06 13:39:09",
            image_url: null,
            source_id: "mg",
            source_priority: 180330,
            country: ["south africa"],
            category: ["top"],
            language: "english",
          },
          {
            article_id: "513ab3c768e3787ffec1485a88f18e04",
            title:
              "Tubantia | Luciano (15) komt elke dag te laat door tekort chauffeurs",
            link: "https://www.nu.nl/uit-andere-media/6284128/luciano-15-komt-elke-dag-te-laat-door-tekort-chauffeurs.html",
            keywords: ["Uit andere media", "login-vereist"],
            creator: ["Tubantia/Julia Bokdam"],
            video_url: null,
            description:
              "Al in de eerste week van het nieuwe schooljaar werd Monique Harmsen gebeld door haar verstandelijk beperkte zoon. Luciano (15) was niet opgehaald door de taxi. Nu brengt ze Luciano en haar andere zoon zelf elke dag naar school. En dat eist zijn tol.",
            content: null,
            pubDate: "2023-10-06 13:39:08",
            image_url:
              "https://media.nu.nl/m/zxdx59jal5f1_sqr256.jpg/luciano-15-komt-elke-dag-te-laat-door-tekort-chauffeurs.jpg",
            source_id: "nu",
            source_priority: 171863,
            country: ["netherland"],
            category: ["top"],
            language: "dutch",
          },
          {
            article_id: "91d86b66d9ddbb4d7928af3e5fb48c55",
            title:
              "Corona-Zahlen im Landkreis Böblingen aktuell: Neuinfektionen für Landkreis Böblingen, Baden-Württemberg und Deutschland",
            link: "https://www.news.de/gesundheit/855915823/corona-zahlen-landkreis-boeblingen-heute-aktuell-06-10-2023-coronavirus-news-zu-rki-fallzahlen-tote-in-baden-wuerttemberg-intensivbetten-auslastung-und-covid-19-impfungen/1/",
            keywords: null,
            creator: ["roj/news.de"],
            video_url: null,
            description:
              "Täglich aktuelle Corona-Zahlen für den Landkreis Böblingen: Hier erfahren Sie die neuesten RKI-Daten zum Coronavirus von 7-Tage-Inzidenz bis COVID-19-Neuinfektionen in Ihrer Region für heute, den 06.10.2023.",
            content: null,
            pubDate: "2023-10-06 13:39:07",
            image_url: null,
            source_id: "news_de",
            source_priority: 2119933,
            country: ["germany"],
            category: ["health"],
            language: "german",
          },
          {
            article_id: "ee1dda4419feecac3ec7a722f0e7775d",
            title:
              "BESKUĆNIK PREŽIVEO PAKAO, PA ZAVRŠIO FAKULTET! Obroci su mu bili šišmiši, crvi i bube, a onda je DOKTORIRAO sa 60!",
            link: "https://mondo.rs/Info/Svet/a1838090/Beskucnik-sa-60-godina-zavrsio-fakultet.html",
            keywords: null,
            creator: null,
            video_url: null,
            description:
              "Gregori je lutao kao beskućnik od mesta do mesta. A onda se slučajno zatekao u nacionalnom parku, u kišnoj šumi i tu je odlučio da živi.",
            content: null,
            pubDate: "2023-10-06 13:39:07",
            image_url:
              "https://static.mondo.rs/Thumbnail/1309625/jpeg/Beskuc-nik-.jpg?ts=2023-10-06T15:34:32",
            source_id: "smartlife",
            source_priority: 199432,
            country: ["serbia"],
            category: ["top"],
            language: "bosnian",
          },
          {
            article_id: "2a8b478efc4fe718a00fc8394d2472bf",
            title:
              "Ayalaan Teaser Review: హాలీవుడ్ రేంజ్ సినిమాతో వస్తున్న శివకార్తికేయన్ - ‘అయలాన్’ టీజర్ చూశారా?",
            link: "https://telugu.abplive.com/entertainment/sivakarthikeyan-ayalaan-movie-teaser-review-music-by-ar-rahman-directed-by-ravikumar-120863",
            keywords: ["ఎంటర్‌టైన్‌మెంట్‌"],
            creator: [""],
            video_url: null,
            description:
              "హాలీవుడ్ రేంజ్ సినిమాతో వస్తున్న శివకార్తికేయన్ - ‘అయలాన్’ టీజర్ చూశారా?",
            content:
              "ప్రముఖ తమిళ హీరో శివ కార్తికేయన్ చేస్తున్న భారీ బడ్జెట్ సైన్స్ ఫిక్షన్ సినిమా ‘అయలాన్’. కోలీవుడ్‌లో ఈ సినిమాపై భారీ అంచనాలు నెలకొన్నాయి. 2024 సంక్రాంతికి ‘అయలాన్’ ప్రేక్షకుల ముందుకు రానుంది. ఈ సినిమా టీజర్‌ను ఇప్పుడు తెలుగు, తమిళ భాషల్లో విడుదల చేశారు. ఇండియన్ సినిమా హిస్టరీలోనే అత్యధిక సంఖ్యలో సీజీ షాట్స్ 'అయలాన్' కోసం ఉపయోగించినట్లు వార్తలు వస్తున్నాయి. హాలీవుడ్ రేంజ్‌లో ఈ సినిమా అవుట్ ఫుట్ ఉండనున్నట్లు టీజర్ చూస్తే తెలుస్తోంది. బాలీవుడ్ అగ్ర హీరో హృతిక్ రోషన్ నటించిన 'కోయి మిల్ గయా' తరహాలోనే ఈ చిత్రం ఉండనుందని తెలుస్తోంది. సైన్స్ ఫిక్షన్ జోనర్ లో ఇంట్రెస్టింగ్ ఎలిమెంట్స్‌తో సాగే ‘అయలాన్’ సినిమాలో శివ కార్తికేయన్ డిఫరెంట్ అవతారంలో కనిపించబోతున్నారు. శరద్ ఖేల్కర్, ఇషా కొప్పికర్, భానుప్రియ, యోగి బాబు, కరుణాకరన్, బాల శరవణన్ ఇతర కీలక పాత్రలు పోషిస్తున్నారు. ‘అయలాన్’ చిత్రానికి ఆస్కార్ విజేత ఏఆర్ రెహమాన్ సంగీతం అందిస్తున్నారు. googletag.cmd.push(function() { googletag.display(\"div-gpt-ad-6601185-5\"); }); కేజేఆర్ స్టూడియోస్ బ్యానర్‌పై కోటపాడి జయ రాజేష్ ఈ చిత్రాన్ని నిర్మిస్తున్నారు. 2024 సంక్రాంతి కానుకగా పాన్ ఇండియా స్థాయిలో ఈ సినిమా విడుదల కానుంది. ఈ సినిమాతో పాటు రాజ్ కుమార్ పెరియసామి దర్శకత్వంలో ఓ సినిమాకి గ్రీన్ సిగ్నల్ ఇచ్చాడు శివ కార్తికేయన్. 'SK21' అనే వర్కింగ్ టైటిల్ తో పిలుస్తున్న ఈ సినిమాలో నేచురల్ బ్యూటీ సాయి పల్లవి హీరోయిన్‌గా నటిస్తున్నారు. ఈ సినిమా షూటింగ్ శరవేగంగా సాగుతోంది. కోలీవుడ్ సీనియర్ హీరో కమలహాసన్ రాజ్ కమల్ ఎంటర్టైన్మెంట్స్ బ్యానర్ పై భారీ బడ్జెట్‌తో ఈ సినిమాను నిర్మిస్తున్నారు. వచ్చే ఏడాది వేసవి కానుకగా ఈ సినిమాని విడుదల చేసేందుకు మేకర్ సన్నాహాలు చేస్తున్నట్లు తెలుస్తోంది. 'అయలాన్' ఫస్ట్ లుక్ అందరినీ అట్రాక్ట్ చేసింది. ఈ పోస్టర్‌ను పరిశీలిస్తే ఏలియన్‌తో పాటు శివకార్తికేయన్ నీటిలో ఈదడం చూడవచ్చు. సౌత్ ఇండియాలోనే ఈ తరహా స్కేల్‌లో సైన్స్ ఫిక్షన్ సినిమా రావడం ఇదే తొలిసారి. దీంతో ఈ మూవీపై సినీ ప్రేక్షకులు విపరీతంగా ఆసక్తి కనబరుస్తున్నారు. ఇంతకు ముందు కూడా సౌత్ ఇండియాలో కూడా కొన్ని సైన్స్ ఫిక్షన్ మూవీస్ వచ్చినప్పటికీ ఏలియన్ ప్రధాన పాత్రలో రావడం మాత్రం దక్షిణాది భాషల్లో రాలేదు. ఏలియ‌న్స్ బ్యాక్‌డ్రాప్‌లో ద‌క్షిణాది చిత్రసీమ‌లో తెర‌కెక్కుతోన్న తొలి సినిమాగా ఈ మూవీ నిలవనుంది. Walk into a realm where the ordinary ends and welcome our intergalactic visitor👽 with the #AyalaanTeaser 🛸✨ #AyalaanTamilTeaser ▶️ https://t.co/yet1QwUDRV #AyalaanTeluguTeaser ▶️ https://t.co/cCbSFBocjD #AyalaanTeaserLaunch #AyalaanFromPongal #AyalaanFromSankranti #Ayalaan … pic.twitter.com/wTMV1jPpsc — KJR Studios (@kjr_studios) October 6, 2023 Here is the #AyalaanTeaser Tamil: https://t.co/5MRUcGan3L Telugu: https://t.co/I5rAnw5Bli Hope U wil lik it 👍😊 #Ayalaan 👽 #AyalaanFromPongal #AyalaanFromSankranti @arrahman @Ravikumar_Dir @Rakulpreet @TheAyalaan @ishakonnects @SharadK7 @nirav_dop @AntonyLRuben … — Sivakarthikeyan (@Siva_Kartikeyan) October 6, 2023 ముఖ్యమైన, మరిన్ని ఆసక్తికర కథనాల కోసం ‘టెలిగ్రామ్’లో ‘ఏబీపీ దేశం’లో జాయిన్ అవ్వండి. Join Us on Telegram: https://t.me/abpdesamofficial",
            pubDate: "2023-10-06 13:39:03",
            image_url:
              "https://feeds.abplive.com/onecms/images/uploaded-images/2023/04/24/357b0e6d8c7519b3c6cb887e0e47801b1682322115371697_original.jpg",
            source_id: "abplive",
            source_priority: 10959,
            country: ["india"],
            category: ["top"],
            language: "telugu",
          },
        ],
        nextPage: "1696599543885271283",
      },
    };
    axiosStub.resolves({ data: fakeResult });
    const actualResult = await newsService();
    expect(actualResult).to.equal(fakeResult);
  });

  it("Should throw the error if something goes wrong", async () => {
    const axiosStub = sinon.stub(axios, "get");
    axiosStub.rejects({
      response: { data: { message: "Something went wrong" } },
    });
    try {
      // Calling this will call the stubbed axios
      await newsService();
    } catch (error) {
      expect(error.message).to.equal(
        "Error fetching data from the API: Something went wrong"
      );
      expect(error.statusCode).to.equal(400);
    }
  });
});
