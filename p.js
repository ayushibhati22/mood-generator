let a = document.querySelector('.button');

let c = document.querySelector('.bodys');
let d = document.querySelector('.emojiline');
let k=document.querySelectorAll('.expression');

let iconElement=null;
function styles() {
    
    d.style.fontSize = "2.5rem";
    d.style.backgroundImage = "url('https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcm00MjgtMDAxOWIuanBn.jpg')"
    d.style.height = "28.75rem";
    d.style.backgroundPosition = "bottom";


    d.style.backgroundSize = "cover";
    d.style.textAlign = "center";
    d.style.borderRadius = "4%";
    d.style.boxShadow = " rgba(0, 0, 0, 0.4) 0px 30px 90px";
    d.style.display = "flex";
    d.style.justifyContent = "space-evenly";
    d.style.alignItems = "center";
    d.style.fontFamily= "Cabin Sketch, sans-serif";
    d.style.fontWeight= "400";
    d.style.fontStyle= "normal";
   
    
}




function create() {
    iconElement = document.createElement('i');
    iconElement.classList.add('fa-solid', 'fa-xmark');

    d.appendChild(iconElement)
    d.style.position = "relative";
    iconElement.style.position = "absolute";
    iconElement.style.top = "12px";
    iconElement.style.right = "12px";
    iconElement.addEventListener("click", () => {

        iconElement.style.display='none'
        d.style.display='none';
        d.style.backgroundImage = 'none';
        d.innerHTML=''
        d.style.display='flex';
        k.forEach(emoji => {
            d.appendChild(emoji);})

        
         
         

        
    })
    
}












a.addEventListener("click", () => {


    c.style.translate = '0 -100%';

})

d.addEventListener("click", (e) => {

    if (e.target.innerHTML === "😃") {
        let array = ["Sunlight spills where your laughter flows;A garden blooms wherever it goes.",

            "Smiles like yours are rare and true,They turn the grayest skies to blue.",

            "Your joy is music, soft and sweet, That makes the heavy heart skip a beat.",

            "Happiness isn't far or deep—It's in the dreams you dare to keep.",

            "Be the reason someone smiles today, Like morning light in skies of gray.",
            " मुस्कान तेरी जैसे सवेरा हो कोई,हर दुख भुला दे, बसेरा हो कोई।",

            "खुशियाँ बांटो तो बढ़ती जाएं, जैसे धूप छांव को मिटा जाए।",

            "आज की हँसी, कल की याद बनेगी,खुश रहो, यही ज़िन्दगी कहेगी।",

            "तेरी हँसी है जादू सा असर,हर ग़म लगे एक बीते सफर।",

            "जहाँ मुस्कान हो तेरी,वहीं महके हर गली।"];
        randomIndex = Math.floor(Math.random() * array.length);
        quote = array[randomIndex];
        d.innerText = quote;
        
        styles();
        create(); 
       
    }

    else if (e.target.innerHTML === "😢") {
        let array = ["Tears don’t always fall in sight,Sometimes they cry the soul at night.",

            "A silent ache behind your eyes,Says more than words in soft goodbyes.",

            "Grief is love that has no home,A heart that breaks but walks alone.",

            "Some days the world feels cold and bare,But healing hides in silent prayer.",

            " It’s okay if you can’t be strong—Even shadows don’t last long.",


            "आँखों में जो नमी है, वो सब कह जाती है,खामोशियाँ भी कभी-कभी आवाज़ बन जाती हैं।",

            "दर्द की भी अपनी अदा होती है,हर मुस्कान के पीछे वफ़ा होती है।",

            "टूटना बुरा नहीं होता,कभी-कभी वहीं से रौशनी निकलती है।",

            "ग़म जब बिखरता है शब्दों में,तो कविता बन जाती है।",

            "सन्नाटों में भी कभी-कभी सुकून होता है,जब दिल बस खुद से रोशन होता है।"

        ];
        randomIndex = Math.floor(Math.random() * array.length);
        quote = array[randomIndex];
        d.innerText = quote;
        styles();
        create();

       



    }
    else if (e.target.innerHTML === "😤") {
        let array = ["Fire burns fast when fed by pain,But only ash and smoke remain.",

            "Breathe in calm, let fury go,Storms within can cease to blow.",

            "Speak not in rage, for words may scar,Silence, sometimes, speaks far more.",

            "Let not your anger shape your day—Peace walks the kinder way.",

            "Anger’s flame may light the dark,But peace will always leave a spark.",


            "ग़ुस्से में हर बात तल्ख़ लगती है,चुप रहो, यही सबसे बड़ी शक्ति है।",

            "जो आग अंदर जलती है,वो सबसे पहले खुद को ही जलाती है।",

            "शब्द सोचकर बोलो,क्योंकि घाव भरते हैं, पर निशान रहते हैं।",

            "सहन करना कमजोरी नहीं,वो तो आत्मा की महानता है कहीं।",

            "ग़ुस्सा आए तो कुछ पल ठहरो,शायद वो लम्हा खुद ही गुज़र जाए।"



        ];
        randomIndex = Math.floor(Math.random() * array.length);
        quote = array[randomIndex];
        d.innerText = quote;
        styles();
        create(); 

    }
    else if (e.target.innerHTML === "😎") {
        let array = ["Walk like you own the sky,With fire in your soul and head held high.",

            "You are a storm wrapped in calm, Strength is your silent charm.",

            "No mountain too tall, no dream too far,  You’re made of grit and scattered stars.",

            "Let them doubt, let them stare,You rise because you dare.",

            "Confidence is not loud or wide,It whispers, “I know who I am inside.”",


            "तेरा हौसला ही तेरी पहचान है,हर मुश्किल के आगे तू तूफ़ान है।",

            "नज़रों में चमक, बातों में असर,तू खुद में ही एक मुकम्मल सफर।",

            "जो खुद पर यकीन रखे, वो हर जंग आसानी से लड़े।",

            "रास्ते खुद बनते जाते हैं,जब इरादे बुलंद हो जाते हैं।",

            "दुनिया झुकती है उसके आगे,जिसे खुद पर चलने का फन आ जाए।"



        ];
        randomIndex = Math.floor(Math.random() * array.length);
        quote = array[randomIndex];
        d.innerText = quote;
        styles();
        create();

    }
    else if (e.target.innerHTML === "🥺") {
        let array = ["Eyes that plead without a sound,Carry storms so tightly bound.",

            "I don’t want much—just to be seen,In this quiet ache that lies between.",

            "I’m not strong, not tonight,I need your calm, your softer light.",

            "Some days I just need space to fall,To feel small and loved through it all.",

            "I carry hope in trembling hands,Please hold them so my heart still stands.",


            "नज़रों में बस एक इल्तिजा है,तुझसे कुछ कहने की हिम्मत नहीं बची।",

            "कमज़ोरी नहीं है ये आँसू,बस दिल का हाल बयाँ कर रहे हैं।",

            "कभी-कभी बस ये चाहता हूँ,कोई बिना कहे समझ जाए मुझे।",

            "आज खुद से भी डर लगता है,तेरे पास होने का ही सहारा है।",

            "तेरे बिना अधूरा सा लगता हूँ,कोई तो हो जो इस खालीपन को समझे।"



        ];
        randomIndex = Math.floor(Math.random() * array.length);
        quote = array[randomIndex];
        d.innerText = quote;
        styles();
        create();    

    }
    else if (e.target.innerHTML === "🤩") {
        let array = ["Let your soul wear colors loud,Dance beneath your inner cloud.",

            "You are the spark, the glowing flame,A moment of joy no fear can tame.",

            "Laughter spills like summer rain,Washing away every ounce of pain.",

            "Celebrate now, don’t wait for more—Life’s knocking right at your door.",

            "There’s magic in the present glow,Shine like the stars you already know.",

            "खुशियों की आज बारिश है,हर पल एक नयी ख्वाहिश है।",

            "तेरे चेहरे की वो रौनक,जैसे त्यौहार हर रोज़ मनाएं।",

            "हर जीत का जश्न ज़रूरी है,क्योंकि हर जंग एक कहानी कहती है।",

            "उमंगों की उड़ान में रंग भर,आज जी ले, कल की कौन खबर।",

            "जहाँ दिल झूमे बिना वजह,समझो वहीं सच्चा जश्न है।"



        ];
        randomIndex = Math.floor(Math.random() * array.length);
        quote = array[randomIndex];
        d.innerText = quote;
        styles();
        create();

        

    }
    else if (e.target.innerHTML === "😴") {
        let array = ["Lay down your weight, close your eyes,Even warriors need lullabies.",

            "Rest isn’t weakness, it’s repair—A breath, a pause, a whispered prayer.",

            "Sleep and let the chaos fade,Tomorrow waits in lighter shade.",

            "Tired hearts still hold great grace,They need just time, a gentler pace.",

            "Let go of “should,” embrace the slow—There’s beauty in the quiet flow.",


            "थक कर सो जाना भी ज़रूरी है,ताकि फिर से उठ सको।",

            "हर दिन की लड़ाई के बाद,आराम ही असली जीत है।",

            "नींद में भी सुकून बसता है,जहां सपने धीरे-धीरे चलते हैं।",

            "जब बदन और दिल दोनों थक जाएँ,तो थोड़ा खुद को भी गले लगाओ।",

            "धीमा चलना कोई हार नहीं,ये तो थके क़दमों की पुकार है।"



        ];
        randomIndex = Math.floor(Math.random() * array.length);
        quote = array[randomIndex];
        d.innerText = quote;
        styles();
        create();

        

    }
    else if (e.target.innerHTML === "🤯") {
        let array = ["So many voices, none your own,Yet your heart whispers when you’re alone.",

            "The world is loud, the weight is real,But peace begins when you start to feel.",

            "You weren’t made to carry it all—Even giants need time to fall.",

            "Breathe, unclench, release the strain,You’re not the storm, just caught in rain.",

            "Don’t rush to heal or race to win,Rest is strength that grows within.",


            "जब बोझ ज़्यादा लगे,तो थोड़ी देर ठहर जाना ठीक है।",

            "थकावट भी कुछ कहती है,सुनो तो सुकून देती है।",

            "हर दिन भागना ज़रूरी नहीं,कभी-कभी बस जीना काफ़ी है।",

            "जो टूटा है, वही सवरता है,यही तो जीवन का राज़ है।",

            "मत सोचो सब कुछ तुम्हें करना है,रुककर भी मंज़िल मिलती है।"



        ];
        randomIndex = Math.floor(Math.random() * array.length);
        quote = array[randomIndex];
        d.innerText = quote;
        styles();

        create();

    }
    else if (e.target.innerHTML === "😍") {
        let array = ["You are my poem, my pause, my rhyme—My sweetest song in stolen time.",

            "In your eyes I see a home,A place where even silence roams.",

            "Love is not loud—it hums, it stays,It colors even the darkest days.",

            "Gratitude speaks in the softest tone,When hearts feel full though we're alone.",

            "The world feels better when you're near,Like every moment sings sincere.",

            "तेरे साथ हर पल एक गीत बन जाता है,सन्नाटा भी जैसे संगीत बन जाता है।",

            "तू जो पास है, तो सब कुछ है,वरना ज़िन्दगी अधूरी सी लगती है।",

            " प्यार में लफ्ज़ कम पड़ जाते हैं,पर आँखें सब कुछ कह जाती हैं।",

            "तेरे बिना सब कुछ अधूरा सा लगे,जैसे कविता बिना सुरों के बहे।",

            "तेरी मुस्कान है मेरे दिन की शुरुआत,तेरे ख्याल में ही ढलती है हर बात।"



        ];
        randomIndex = Math.floor(Math.random() * array.length);
        quote = array[randomIndex];
        d.innerText = quote;
        styles();
        create();
        


    }
    else if (e.target.innerHTML === "😇") {
        let array = ["The quiet mind is strong and free,Like stillness on a silver sea.",

            "Not every war is worth the fight,Some are won by choosing light.",

            "Peace isn't silence, cold or wide,It's the warmth you feel deep inside.",

            "Let your breath be soft and slow,Like drifting leaves or falling snow.",

            "In calm, you’ll find what rush can’t see—Your soul’s own whispered melody.",

            "जब मन शांत हो जाए,तो दुनिया भी सुंदर लगने लगे।",

            "हर हलचल में शांति ढूंढो,सुकून वहीं है जहां तुम खुद हो।",

            "शांति कोई मंज़िल नहीं,ये तो भीतर का सफर है कहीं।",

            "धीरे चलो, पर सही चलो,यही जीवन का सच्चा पल हो।",

            "मौन की भी अपनी जुबां होती है,हर जवाब उसमें छुपा होता है।"



        ];
        randomIndex = Math.floor(Math.random() * array.length);
        quote = array[randomIndex];
        d.innerText = quote;
        styles();

        create(); 

    }
    else if (e.target.innerHTML === "😬") {
        let array = ["It's okay to stumble and not know,Even doubt has its place to grow.",

            "You don’t need the perfect line,Just show up—your light will shine.",

            "In clumsy silence or unsure tone,Truth is found when hearts are shown.",

            "Awkward is honest without disguise,The courage behind unsure eyes.",

            "Even if it’s weird or unclear,You showed up—and that’s sincere.",

            "झिझक होना गलत नहीं,ये बस दिल की सच्चाई है कहीं।",

            "हर शुरुआत थोड़ी अजीब होती है,फिर वही सबसे खूबसूरत बन जाती है।",

            "जब शब्द न मिलें,तब मुस्कान ही बहुत कुछ कह जाती है।",

            "अनिश्चितता भी ज़रूरी है,तभी तो रास्ते बनते हैं।",

            "थोड़ी हिचक से कोई फर्क नहीं पड़ता,जब इरादे साफ हों।"

        ];
        randomIndex = Math.floor(Math.random() * array.length);
        quote = array[randomIndex];
        d.innerText = quote;
        styles();
        create();
        

    }
    else if (e.target.innerHTML === "❤️‍🔥") {
        let array = ["Stars don't ask to be seen—They just burn with what they mean.",

            "Inspiration strikes like sudden rain,Awakening roots in hidden plain.",

            "You are the spark, the first bright flame,That lights a soul and calls its name.",

            "There’s magic in your open eyes,Seeing wonder where silence lies.",

            "Let dreams run wild and heart stay wide—This is the beauty that lives inside.",

            "हैरानी में ही तो जादू छुपा है,जो दिल को छू जाए वही सच्चा सपना है।",
            "जब कुछ अनकहा अच्छा लगे,समझो रूह ने कुछ महसूस किया है।",

            "प्रेरणा की हवा चलती नहीं,बस महसूस होती है।",

            "वो पल जब दिल कुछ नया चाहे,वही तो असली जादू लाए।",

            "आंखें जो चमक उठें बिना वजह,वो प्रेरणा का इशारा होता है।"



        ];
        randomIndex = Math.floor(Math.random() * array.length);
        quote = array[randomIndex];
        d.innerText = quote;
        styles();
        create();
        

    }
    else if (e.target.innerHTML === "😈") {
        let array = ["A glance, a smirk, a playful tease,You stir up storms with charming ease.",

            "Mischief dances in your eyes,Like moonlight playing in disguise.",

            "You’re a riddle, sweet and sly,With a laugh that makes time fly.",

            "You color boredom with your spark,Lighting joy from even dark.",

            "The world’s too dull without your grin—Trouble starts where you begin.",

            "तेरी बातों में वो चालाकी है,जो सीधा दिल पे वार करती है।",

            "नज़रों में शरारत, होंठों पे मुस्कान,तू है जैसे कोई झलकती जान।",

            "तू हँस दे तो साज़िश सी लगे,जैसे कोई ग़ज़ल शरारतों में ढले।",

            "भोली सूरत, चालाकी की बात,तेरी अदा में छुपा है जज़्बात।",

            "तू जब झूठ भी बोले,लगे सच से ज़्यादा मीठा हो बोले।"



        ];
        randomIndex = Math.floor(Math.random() * array.length);
        quote = array[randomIndex];
        d.innerText = quote;
        styles();
        create();

    }
    else if (e.target.innerHTML === "🤗") {
        let array = ["A kind word, a steady hand,Can help a soul to gently stand.",

            "You are not alone, not tonight,I’ll be your calm, I’ll be your light.",

            "Hugs don’t fix all, it’s true—But they say, “I see you.”",

            "Sometimes strength is simply this:Being the shoulder, giving a kiss.",

            "I carry your pain like a silent prayer,You’ll always find me there.",

            "मैं हूँ न, जब भी तन्हा लगे,बस एक आवाज़ देना।",

            "साथ देने के लिए कुछ नहीं चाहिए ,बस एक दिल जो समझे।",

            "किसी के आँसू पोंछना भी इबादत है,मोहब्बत की सबसे सच्ची आदत है।",

            "जब सब दूर हो जाएँ,मैं पास रहूँगा, बस इतना जान।",

            "कभी-कभी चुपचाप साथ देना,सबसे बड़ा सहारा बन जाता है।"



        ];
        randomIndex = Math.floor(Math.random() * array.length);
        quote = array[randomIndex];

        d.innerText = quote;
        styles();
        create();

    }
    else if (e.target.innerHTML === "🫶") {
        let array = ["Wrap me in silence, soft and true,A hug that says, “I’m here with you.”",

            "Sometimes a touch can calm the soul,When words can’t make the broken whole.",

            "In your arms, the chaos fades,My heart finds home in your embrace.",

            "No wisdom, just warmth will do,When all I need is close to you.",

            "Hold me like the world’s asleep,In that stillness, let me weep.",

            "एक तेरी बाहों का सहारा चाहिए,बस चुपचाप रहकर तेरा किनारा चाहिए।",

            "तू पास हो, तो डर भी मुस्कराए,तेरा आलिंगन सब दर्द छुपाए।",

            "ज़िन्दगी से कभी-कभी डर लगता है,तब बस तेरा गले लगना सुकून देता है।",

            "शब्दों की ज़रूरत नहीं,एक झप्पी बहुत कुछ कह जाती है।",

            "तू गले लगा ले बस एक बार,फिर चाहे आ जाए हज़ार गुबार।"

        ];
        randomIndex = Math.floor(Math.random() * array.length);
        quote = array[randomIndex];

        d.innerText = quote;
        styles();
        create();
        
    }
    else if (e.target.innerHTML === "😭") {
        let array = ["A shattered heart still beats beneath,Wrapped in silence, drowning grief.",

            "Tears write what words cannot,A love once lived, never forgot.",

            "Grief is love with nowhere to go,A rose beneath eternal snow.",

            "The pieces fall, the soul turns blue,Yet every break lets light pass through.",

            "Even broken things can shine,A scarred heart is still divine.",


            "टूटे दिल की आह भी दुआ बन जाती है,जब चाहत सच्ची हो जाती है।",

            "जो खो गया वो वापस नहीं आता,पर उसकी यादें सब सिखा जाती हैं।",

            "दिल का टूटना एक कहानी है,जिसे बस वक्त ही पढ़ पाता है।",

            "आँसू नहीं सिर्फ़ पानी होते,वो दिल के जज़्बातों की जुबां होते।",

            "ज़ख़्म भरते हैं वक्त के साथ,लेकिन यादें रह जाती हैं रात के साथ।"



        ];
        randomIndex = Math.floor(Math.random() * array.length);
        quote = array[randomIndex];
        d.innerText = quote;
        styles();
        create();
    }
    
    
    

    




})





















