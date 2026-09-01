// ==========================================
// Telegram Bot Configuration
// ==========================================
const TELEGRAM_BOT_TOKEN = "8939232025:AAEwUq-Zkv3fuHHxJpLnhTzArVt22Q4Bjuo";
const TELEGRAM_CHAT_ID = "8297181241";

// Admin Credentials
const ADMIN_USERNAME = "admin";
const ADMIN_PASSWORD = "admin123";

// Books Database (Total 44 Books)
const defaultBooksData = [
    {
        id: 1,
        title: "PHP လိုတိုရှင်း (အခန်း ၁ - World Wide Web)",
        title_en: "PHP in Short (Chapter 1 - World Wide Web)",
        author: "အိမောင် (Dagon University)",
        author_en: "Ei Maung",
        category: "tech",
        price: 3500,
        cover: "images/1.jpg",
        previewText: `PHP သည် Facebook, Wikipedia အစရှိသော ကမ္ဘာကျော် ဝဘ်ဆိုက်ကြီးများကို မောင်းနှင်ပေးထားသည့် လူသုံးအများဆုံး Server-Side Programming Language တစ်ခု ဖြစ်ပါသည်။

🌟 အကောင်းဆုံး ကောက်နုတ်ချက်နှင့် အနှစ်ချုပ် (Highlights):
• Web နှင့် Internet ၏ ခြားနားချက်ကို ရှင်းလင်းစွာ ခွဲခြားဖော်ပြထားခြင်း။
• Web Architecture ၏ အဓိက အစိတ်အပိုင်း (၃) ခုဖြစ်သော Client, Server နှင့် Protocol (HTTP) တို့ အလုပ်လုပ်ပုံ အဆင့်ဆင့်။
• GET (ဒေတာ ရယူခြင်း) နှင့် POST (ဒေတာ ပေးပို့ပြင်ဆင်ခြင်း) နည်းလမ်းများ၏ လက်တွေ့ အသုံးချပုံများ။

💡 ဖတ်ရှုသင့်သူများ: Web Development ကို အခြေခံမှစတင်၍ စနစ်တကျ လေ့လာလိုသူများအတွက် မရှိမဖြစ် လက်စွဲစာအုပ် ဖြစ်ပါသည်။`,
        previewText_en: `PHP powers major platforms like Facebook and Wikipedia, serving as the foundational server-side language of the modern web.`
    },
    {
        id: 2,
        title: "Laravel လိုတိုရှင်း",
        title_en: "Laravel On-Point",
        author: "အိမောင်",
        author_en: "Ei Maung",
        category: "tech",
        price: 4000,
        cover: "images/2.jpg",
        previewText: `Laravel သည် ခေတ်မီပြီး သပ်ရပ်ကျစ်လစ်သော ဖွဲ့စည်းပုံကြောင့် ကုဒ်ရေးသားရသည်ကို ပျော်ရွှင်စေသည့် ထိပ်တန်း PHP Framework တစ်ခု ဖြစ်ပါသည်။

🌟 အကောင်းဆုံး ကောက်နုတ်ချက်နှင့် အနှစ်ချုပ် (Highlights):
• Object-Oriented Programming (OOP) အခြေခံ သဘောတရားများကို ပြန်လည်နွှေးပေးခြင်း။
• Laravel ၏ အဓိက အသက်သွေးကြောဖြစ်သော "Convention Over Configuration" စည်းမျဉ်း။
• PascalCase (Class), camelCase (Method) နှင့် snake_case (Database) အမည်ပေးစနစ်များကို တိကျစွာ လမ်းညွှန်ထားခြင်း။

💡 ဖတ်ရှုသင့်သူများ: PHP အခြေခံရပြီးနောက် Production-Ready Web Application များကို လျင်မြန်စွာ ရေးဆွဲလိုသော Developer များအတွက် အထူးသင့်လျော်ပါသည်။`,
        previewText_en: `Laravel makes PHP web development clean, expressive, and elegant through its MVC architecture.`
    },
    {
        id: 3,
        title: "ဦးပေါ်ဦး နှင့် လူတောသား",
        title_en: "U Pauk U and the Villager",
        author: "ဦးလှအောင်",
        author_en: "U Hla Aung",
        category: "humor",
        price: 3500,
        cover: "images/3.jpg",
        previewText: `စကားအရာကြွယ်ဝစုံလင်စွာ ပြောနိုင်ဆိုနိုင်ပြောရန်ဆိုရန် သူတအပုံစုံ ရလိုသူတိုင်းအတွက် ဦးပေါ်ဦးဆိုတဲ့ လူသည် တစ်ခုခုကို လူအများအပေါ် ကြားကြားပြောပြီး အမှန်တကယ် အကျိုးမပေးတတ်ပါ။ ဦးပေါ်ဦးကိုယ်တိုင်လည်း သူပြောတဲ့စကားတွေကိုယ်တိုင် မလိုက်နာတတ်ပါဘူး။ သူ့စကားတွေဟာ အပြောအဆိုလောက်သာ လှပနေပြီး လက်တွေ့မှာတော့ ဘာမှအကျိုးမရှိတတ်တဲ့အပေါ် လူတောသားတစ်ယောက်က သူ့ကိုယ်သူ ပြန်မေးခွန်းထုတ်ကာ အမှန်တရားကို ရှာဖွေတွေ့ရှိသွားတဲ့ ဇာတ်လမ်းကောင်းတစ်ပုဒ်ဖြစ်ပါတယ်။

🌟 အကောင်းဆုံး ကောက်နုတ်ချက်နှင့် အနှစ်ချုပ် (Highlights):
• ဘုရင့်အကြံပေး ဦးပေါ်ဦးထံ လယ်ထဲရေမရသဖြင့် အကြံဉာဏ်လာတောင်းသော လူတောသား၏ ဖြစ်ရပ်။
• "လယ်ကို မြစ်နားပြောင်းပါ၊ သို့မဟုတ် မြစ်ကို လယ်နားပြောင်းပါ" ဟူသော လက်တွေ့မကျသည့် စကားလုံးလှည့်ကွက် အကြံပေးမှုများ။
• စကားပြောကောင်းရုံမျှဖြင့် အကြံဉာဏ်ကောင်းမဟုတ်ဘဲ လက်တွေ့ကျကျ အကျိုးရှိမှသာ စစ်မှန်သော အကြံဉာဏ်ဖြစ်ကြောင်း လူတောသား သဘောပေါက်သွားပုံ။

💡 ဖတ်ရှုသင့်သူများ: မြန်မာ့ရိုးရာ ဟာသနှင့် ဉာဏ်စမ်းပုံပြင်များကို နှစ်သက်သူများအတွက် ဖြစ်ပါသည်။`,
        previewText_en: `A witty folklore story questioning empty rhetoric versus practical wisdom through the encounter of U Pauk U and a simple villager.`
    },
    {
        id: 4,
        title: "AI in Marketing, Sales and Service",
        title_en: "AI in Marketing, Sales and Service",
        author: "Peter Gentsch",
        author_en: "Peter Gentsch",
        category: "tech",
        price: 5000,
        cover: "images/4.jpg",
        previewText: `Data Science ဘွဲ့ မရှိသော လုပ်ငန်းရှင်များနှင့် Marketer များအတွက် AI နှင့် Big Data ကို လက်တွေ့ အသုံးချနည်း လမ်းညွှန် ဖြစ်ပါသည်။

🌟 အကောင်းဆုံး ကောက်နုတ်ချက်နှင့် အနှစ်ချုပ် (Highlights):
• "Big Data သည် လောင်စာဆီအသစ် (New Oil) ဖြစ်ပါက Analytics သည် စက်ယန္တရား (Engine) ဖြစ်သည်" ဟူသော သဘောတရား။
• Deep Blue မှစတင်ကာ AlphaGo Zero အထိ ဉာဏ်ရည်တု၏ ခုန်ပျံကျော်လွှား တိုးတက်လာမှု သမိုင်းမှတ်တိုင်များ။

💡 ဖတ်ရှုသင့်သူများ: လုပ်ငန်းခွင်အတွင်း AI နည်းပညာဖြင့် စျေးကွက်အသာစီး ရယူလိုသော စီးပွားရေးလုပ်ငန်းရှင်များအတွက် လက်စွဲစာအုပ် ဖြစ်ပါသည်။`,
        previewText_en: `A practical business guide bridging complex AI informatics into commercial strategies.`
    },
    {
        id: 5,
        title: "ကြည်လင်ခြင်းရဲ့နေ့စွဲများ",
        title_en: "Good Vibes Only",
        author: "သားထွေး",
        author_en: "Thar Htwe",
        category: "health",
        price: 3500,
        cover: "images/5.jpg",
        previewText: `မငြိမ်သက်သော လူ့လောကထဲတွင် စိတ်၏ ကြည်လင်အေးချမ်းမှုကို ရှာဖွေပြီး အကောင်းမြင်စိတ်ကို မွေးမြူနိုင်စေရန် ရေးသားထားသော စာအုပ်ကောင်း ဖြစ်ပါသည်။

🌟 အကောင်းဆုံး ကောက်နုတ်ချက်နှင့် အနှစ်ချုပ် (Highlights):
• မရည်ရွယ်ဘဲ ဖြစ်ခဲ့သော အမှားများအတွက် ကိုယ့်ကိုယ်ကိုယ် အပြစ်တင်မနေဘဲ ခွင့်လွှတ်ကုစားနည်း (Self-Forgiveness)။
• စိတ်ထဲ စွဲကျန်နေသော အတိတ်မှ ဝန်ထုပ်ဝန်ပိုးများကို စနစ်တကျ လွှတ်ချနည်း။`,
        previewText_en: `A heartfelt guide on finding peace, letting go of guilt, and nurturing emotional clarity.`
    },
    {
        id: 6,
        title: "အတွေးမလွန်နဲ့",
        title_en: "Don't Overthink It",
        author: "ဒေါက်တာအောင် (ဆေး-၂)",
        author_en: "Dr. Aung",
        category: "health",
        price: 3500,
        cover: "images/6.jpg",
        previewText: `မပြီးဆုံးနိုင်သော သံသရာလည်နေသည့် အတွေးလွန်ခြင်း (Overthinking) ကို ရပ်တန့်ပြီး ပစ္စုပ္ပန်တွင် အေးချမ်းစွာ ရှင်သန်နည်း စိတ်ပညာ လမ်းညွှန် ဖြစ်ပါသည်။

🌟 အကောင်းဆုံး ကောက်နုတ်ချက်နှင့် အနှစ်ချုပ် (Highlights):
• အတွေးလွန်ခြင်းသည် ပုံမှန် စဉ်းစားတွေးခေါ်မှုမဟုတ်ဘဲ အသိတရားကို ဖုံးကွယ်သွားစေသည့် စိတ်သံသရာ (Loop) ဖြစ်ပုံ။`,
        previewText_en: `Overcome mental exhaustion and intrusive anxiety by breaking repetitive loops.`
    },
    {
        id: 7,
        title: "အသက်လေးဆယ်ကျော်လျှင်",
        title_en: "If You Are Over Forty Years Old",
        author: "ဒေါက်တာတင်ရွှေ",
        author_en: "Dr. Tin Shwe",
        category: "health",
        price: 3500,
        cover: "images/7.jpg",
        previewText: `အသက် ၄၀ ကျော်အရွယ်တွင် ကျန်းမာပျော်ရွှင်စွာဖြင့် သက်ရှည်ကျန်းမာစေရန် လိုက်နာရမည့် ဆေးပညာပေး လမ်းညွှန်ချက်များနှင့် သုတေသနများ ဖြစ်ပါသည်။`,
        previewText_en: `Evidence-based medical advice and longevity wisdom tailored for aging past forty.`
    },
    {
        id: 8,
        title: "ပိုကောင်းတဲ့ဘဝတစ်ခုရဖို့",
        title_en: "Good Vibes, Good Life",
        author: "Vex King",
        author_en: "Vex King",
        category: "health",
        price: 4000,
        cover: "images/8.jpg",
        previewText: `ကိုယ့်ရဲ့ အတွင်းစိတ် တုန်ခါမှု (Vibration & Frequency) ကို မြှင့်တင်ပြီး ပိုမိုကောင်းမွန်သော ဘဝကို ပိုင်ဆိုင်နိုင်စေမည့် စာအုပ် ဖြစ်ပါသည်။`,
        previewText_en: `Master self-love and elevate your personal frequency for true fulfillment.`
    },
    {
        id: 9,
        title: "သူတို့ပြောသော ထောင်အတွင်းမှ ပရလောကသားများ",
        title_en: "The Spirits Inside the Prison",
        author: "ဇော်သက်ထွေး",
        author_en: "Zaw Thet Htwe",
        category: "horror",
        price: 3500,
        cover: "images/9.jpg",
        previewText: `အင်းစိန်ထောင်အတွင်း နိုင်ငံရေးအကျဉ်းသားတစ်ဦးအဖြစ် ဖြတ်သန်းခဲ့ရစဉ် ကြုံတွေ့ခဲ့ရသော ထိတ်လန့်ချောက်ချားဖွယ် ပရလောက ကိုယ်တွေ့ဖြစ်ရပ်မှန်များ ဖြစ်ပါသည်။`,
        previewText_en: `Chilling firsthand memoirs and supernatural occurrences inside Insein Prison.`
    },
    {
        id: 10,
        title: "ဂေဟာ",
        title_en: "Shelter",
        author: "အမည်မဖော်ပြထား",
        author_en: "Unknown",
        category: "drama",
        price: 3500,
        cover: "images/10.jpg",
        previewText: `ကပ်ရောဂါနှင့် စီးပွားရေး အကျပ်အတည်းများကြားတွင် မိသားစုအတွက် ရုန်းကန်နေရသော အမျိုးသမီးနှစ်ဦး၏ သံယောဇဉ် ဒရာမာဝတ္ထု ဖြစ်ပါသည်။`,
        previewText_en: `A gripping suburban drama exploring sacrifice, survival, and maternal bonds.`
    },
    {
        id: 11,
        title: "ထွက်သက်",
        title_en: "Last Breath",
        author: "ဒေဝတာ",
        author_en: "De Wa Tar",
        category: "horror",
        price: 3500,
        cover: "images/11.jpg",
        previewText: `မိုးသက်မုန်တိုင်းကြား မိခင်ဖြစ်သူ ရေနစ်သေဆုံးသွားခဲ့သည့် အတိတ်ဆိုးနှင့် နှစ်ပေါင်းများစွာကြာမှ ပေါ်ထွက်လာသော တရားခံအစစ်၏ သည်းထိတ်ရင်ဖို ဝတ္ထု ဖြစ်ပါသည်။`,
        previewText_en: `A chilling supernatural mystery surrounding a dark family truth.`
    },
    {
        id: 12,
        title: "ဟိုဘက်အိမ်ကခြောက်တဲ့ တစ္ဆေ",
        title_en: "The Ghost of the House Next Door",
        author: "သတိုးတေဇ",
        author_en: "Tha Doe Te Zar",
        category: "horror",
        price: 3500,
        cover: "images/12.jpg",
        previewText: `မီးတောက်မီးလျှံများ ဝန်းရံနေသည့် အိပ်မက်ဆိုးတစ်ခုမှ စတင်ကာ ဘေးအိမ်မှ ထူးဆန်းထိတ်လန့်ဖွယ် ဖြစ်ရပ်ဆိုးများနှင့် ရင်ဆိုင်ရသော ဇာတ်လမ်း ဖြစ်ပါသည်။`,
        previewText_en: `Terrifying nightmares foretell eerie supernatural occurrences next door.`
    },
    {
        id: 13,
        title: "ကြိစ္ဆာ",
        title_en: "Krissar",
        author: "ဝင်္ကပါစိန်နှင့် လျှို့ဝှက်မာယာ",
        author_en: "Wun Kha Pa Sein & Laukhat Mar Yar",
        category: "horror",
        price: 3500,
        cover: "images/13.jpg",
        previewText: `အင်းဝနေပြည်တော်ခေတ် သမိုင်းဝင် အကျဉ်းသားတစ်ဦးနှင့် နှစ်ပေါင်းရာနှင့်ချီ ဆက်စပ်နေသော ပဟေဠိဆန်သည့် နန်းတွင်း ကျိန်စာဝတ္ထု ဖြစ်ပါသည်။`,
        previewText_en: `Historical occult intrigue spanning centuries from ancient Inwa.`
    },
    {
        id: 14,
        title: "ကျေးလက်ပျော်ဟာသများ",
        title_en: "Village Fun Jokes",
        author: "ကျော်ကြီးသား တင်ဝင်းဦး",
        author_en: "Kyaw Gyi Thar Tin Win Oo",
        category: "humor",
        price: 3000,
        cover: "images/14.jpg",
        previewText: `အထက်အညာ ကျေးလက်ဒေသရှိ ရိုးရှင်းဖြူစင်သော ရွာသူရွာသားများ၏ ပျော်ရွှင်ဖွယ် အလွဲများနှင့် ဟာသဇာတ်လမ်းတိုများ ဖြစ်ပါသည်။`,
        previewText_en: `A lively collection of warm-hearted humorous tales from rural Myanmar.`
    },
    {
        id: 15,
        title: "နီကိုရဲ — ကျွန်တော်နှင့် ရိုက်ကွင်းပေါ်မှ (ဒုတိယ)အလွဲများ",
        title_en: "Niko Ye - Me and the Funny Things on Set (Vol.2)",
        author: "နီကိုရဲ",
        author_en: "Niko Ye",
        category: "humor",
        price: 3500,
        cover: "images/15.jpg",
        previewText: `ရုပ်ရှင်ရိုက်ကွင်း နောက်ကွယ်က တကယ့်အလွဲများနှင့် ကင်မရာရှေ့ ဒရာမာ ဝမ်းနည်းခန်းများကြားမှ ရယ်မောစရာ ဖြစ်ရပ်မှန် အမှတ်တရများ ဖြစ်ပါသည်။`,
        previewText_en: `Brilliant comedic behind-the-scenes filmmaking memoirs by Niko Ye.`
    },
    {
        id: 16,
        title: "အဝါရောင်ရိပ်ဝန်းငယ်",
        title_en: "Yellow Sunflower Heart",
        author: "Lavender Pan",
        author_en: "Lavender Pan",
        category: "romance",
        price: 3500,
        cover: "images/16.jpg",
        previewText: `မင်းထက် ပြည့်စုံသူတွေ ရှိနိုင်ပေမယ့် မင်းကိုသာ ရွေးချယ်ခဲ့သည့် စစ်မှန်သော ချစ်ခြင်းနှင့် နေကြာပန်းဝါလေးများ၏ အဓိပ္ပာယ်ကို ဖော်ကျူးထားသော အချစ်ဝတ္ထု ဖြစ်ပါသည်။`,
        previewText_en: `A gentle poetic romance of unconditional affection and sunflower warmth.`
    },
    {
        id: 17,
        title: "စိတ်ရဲ့ ငြိမ်သက်ခြင်း",
        title_en: "Stillness",
        author: "ထက်ထက်ထွန်း (Waterfall)",
        author_en: "Htet Htet Htun (Waterfall)",
        category: "romance",
        price: 3500,
        cover: "images/17.jpg",
        previewText: `ဂုဏ်ဒြပ်နှင့် ပကာသနများကို တံခါးဝတွင် ထားခဲ့ကာ စိတ်၏ စင်ကြယ်အေးချမ်းမှုနှင့် တိတ်ဆိတ်ခြင်းကို ခံစားစေမည့် ကဗျာရသ စာအုပ် ဖြစ်ပါသည်။`,
        previewText_en: `Reflective mindfulness poetry celebrating solitude and quiet simplicity.`
    },
    {
        id: 18,
        title: "အချစ်ရဆုံးထဲသို့ နေဝင်",
        title_en: "Sunset Into the Deepest Love",
        author: "နေဝင်",
        author_en: "Nay Win",
        category: "romance",
        price: 3500,
        cover: "images/18.jpg",
        previewText: `ချစ်ခြင်းမေတ္တာနှင့် ကာရံညီသော ကတိစကားများ၊ စစ်မှန်သော ၅၂၈ မေတ္တာနှင့် အချစ်ကဗျာ စကားပြေ ရသစာအုပ် ဖြစ်ပါသည်။`,
        previewText_en: `An intimate and touching collection of romantic poetry and love letters.`
    },
    {
        id: 19,
        title: "နွေးထွေးသော နေ့ရက်များ",
        title_en: "Warm Days",
        author: "နွေးနွေး",
        author_en: "Nway Nway",
        category: "romance",
        price: 3500,
        cover: "images/19.jpg",
        previewText: `ဆောင်းရာသီ၏ အေးစက်သော နေ့ရက်များကြားတွင် စိတ်နှလုံးကို နွေးထွေးစေမည့် အမှတ်တရများနှင့် အဖော်မွန် ရသဝတ္ထု ဖြစ်ပါသည်။`,
        previewText_en: `A heartwarming novella highlighting companionship and peaceful winter days.`
    },
    {
        id: 20,
        title: "အကြည်တော်",
        title_en: "The Glance",
        author: "စာရေးသူအမည် မဖော်ပြထား",
        author_en: "Author Unspecified",
        category: "drama",
        price: 3500,
        cover: "images/20.jpg",
        previewText: `ဦးဘမှေး၏ အဖေတစ်ခု သမီးတစ်ခု ဘဝရုန်းကန်မှုနှင့် မြို့သစ်သို့ ပြောင်းရွှေ့လာပြီးနောက် ကြုံတွေ့ရသော ဘဝအခက်အခဲများကို နက်နက်နဲနဲ ပုံဖော်ထားသည့် ရသဝတ္ထုကောင်း ဖြစ်ပါသည်။

🌟 အကောင်းဆုံး ကောက်နုတ်ချက်နှင့် အနှစ်ချုပ် (Highlights):
• ရွာမှ မြို့သို့ ပြောင်းရွှေ့လာပြီးနောက် ဘဝရပ်တည်ရေးအတွက် ရုန်းကန်နေရသော သားအဖနှစ်ဦး၏ မေတ္တာနှင့် သံယောဇဉ်။
• လူတို့၏ လူမှုဆက်ဆံရေး၊ ချစ်ခြင်းမေတ္တာနှင့် ကံကြမ္မာ၏ အလှည့်အပြောင်းများကို ရင်နင့်ဖွယ် ဖွဲ့ဆိုထားပုံ။
• ဘဝ၏ အခက်အခဲများနှင့် လက်တွေ့ဘဝ သင်ခန်းစာများကို အတွေးပွားစေမည့် ဒရာမာ ရသဇာတ်လမ်း။

💡 ဖတ်ရှုသင့်သူများ: ဘဝရသနှင့် မိသားစု မေတ္တာဖွဲ့ ဒရာမာဝတ္ထုများကို နှစ်သက်သူများအတွက် ဖြစ်ပါသည်။`,
        previewText_en: `A poignant drama reflecting the trials of a father and daughter adapting to a new town amidst life's shifting fortunes.`
    },
    {
        id: 21,
        title: "သော်တာဆွေ – ပတ္တမြားဝင်းထိန်",
        title_en: "Thaw Tarr Sway – Patta Myaing Win Htein",
        author: "ပတ္တမြားဝင်းထိန်",
        author_en: "Patta Myaing Win Htein",
        category: "humor",
        price: 3500,
        cover: "images/21.jpg",
        previewText: `ဤစာအုပ်တွင် အမျိုးသမီးအများအပြားနှင့် အပြုအမူ၊ နေထိုင်ပုံ၊ အပြောအဆိုအမှားများ၊ လူ့အဖြစ်အပျက်များကို ဟာသအနေနှင့် သရော်လှောင်ပြောင် ရေးသားထားပါသည်။

🌟 အကောင်းဆုံး ကောက်နုတ်ချက်နှင့် အနှစ်ချုပ် (Highlights):
• သော်တာဆွေ၏ ရိုးရှင်းသော ဘဝနေထိုင်မှုနှင့် အမျိုးသမီးများအကြား ကြုံတွေ့ရသော ရယ်ဖွယ်အရှုပ်အထွေးများ။
• လူ့သဘောသဘာဝနှင့် အလွဲများကို ဟာသရသဖြင့် ပညာသားပါပါ သရော်ထားပုံ။
• မြန်မာ့ဟာသစာပေလောကတွင် အထင်ကရဖြစ်သော သော်တာဆွေ၏ အမှတ်တရ ဇာတ်ကောင်စရိုက်များ။

💡 ဖတ်ရှုသင့်သူများ: မြန်မာ့ဟာသနှင့် သရော်စာပေ (Satire) ဝတ္ထုတိုများကို နှစ်သက်သူများအတွက် ဖြစ်ပါသည်။`,
        previewText_en: `A satirical and comedic short story collection capturing human nature, societal quirks, and romantic misadventures centered around Thaw Tarr Sway.`
    },
    {
        id: 22,
        title: "နှလုံးသွေးနှင့်သွေးချင်း",
        title_en: "Heart and Kinship",
        author: "အရှင်းဟာသ",
        author_en: "Arr Shin Htar",
        category: "humor",
        price: 3500,
        cover: "images/22.jpg",
        previewText: `အချစ်နဲ့ပတ်သက်တဲ့ ရယ်စရာ၊ နက်နဲတဲ့ဇာတ်လမ်းတွေစုံစွာပါဝင်တဲ့ စာအုပ်တစ်အုပ်ဖြစ်ပါတယ်။ အချစ်၊ မေတ္တာ၊ ဆက်ဆံရေးစတဲ့အကြောင်းအရာတွေကို ဟာသအနေနဲ့ရေးသားထားပြီး ဖတ်သူတွေအတွက် အပြုံးနဲ့အတွေးအခေါ်ကိုပါ ပေးစွမ်းနိုင်မှာပါ။

🌟 အကောင်းဆုံး ကောက်နုတ်ချက်နှင့် အနှစ်ချုပ် (Highlights):
• အချစ်ရေးနှင့် လူမှုဆက်ဆံရေးများကြားမှ ရယ်ရွှင်ဖွယ် အလွဲများနှင့် နက်နဲသော သံယောဇဉ်များ။
• ရယ်မောဖွယ် ဟာသဇာတ်လမ်းများကြားမှ ဘဝအတွက် အတွေးအမြင်ကောင်းများ ရရှိစေပုံ။
• ပေါ့ပါးကြည်နူးဖွယ် အချစ်ဟာသ ရသဝတ္ထုတိုများ စုစည်းမှု။

💡 ဖတ်ရှုသင့်သူများ: အချစ်နှင့် ဟာသ (Romantic Comedy) ဝတ္ထုတိုများကို နှစ်သက်သူများအတွက် ဖြစ်ပါသည်။`,
        previewText_en: `A delightful collection of romantic comedy short stories exploring love, relationships, and human connections with humor and wit.`
    },
    {
        id: 23,
        title: "တောသားတောင် ဝါမဆုံးပါဘု",
        title_en: "Even the Villager Hasn't Reached the End Yet",
        author: "သိကုန်ပြီ",
        author_en: "Thi Kone Pyi",
        category: "humor",
        price: 3500,
        cover: "images/23.jpg",
        previewText: `တစ်ရွာလုံးက သိကုန်ပြီဆိုပေမယ့် တကယ်တော့ အားလုံးမသိသေးတဲ့အကြောင်းအရာတွေ၊ အချစ်နဲ့ပတ်သက်ပြီး ရယ်စရာ၊ နက်နဲတဲ့ဇာတ်လမ်းတွေကို စုံစွာဖော်ပြထားတဲ့ စာအုပ်တစ်အုပ်ဖြစ်ပါတယ်။ လူ့ဆက်ဆံရေး၊ အချစ်၊ အိမ်ထောင်ရေးစတဲ့အကြောင်းအရာတွေကို ဟာသအနေနဲ့ရေးသားထားပြီး ဖတ်သူတွေအတွက် အပြုံးနဲ့အတွေးအခေါ်ကိုပါ ပေးစွမ်းနိုင်မှာပါ။

🌟 အကောင်းဆုံး ကောက်နုတ်ချက်နှင့် အနှစ်ချုပ် (Highlights):
• ကျေးလက်လူမှုဘဝနှင့် တစ်ရွာလုံးကြား အထင်လွဲမှားမှုများမှ ဖြစ်ပေါ်လာသော ရယ်ရွှင်ဖွယ် အလွဲများ။
• အချစ်၊ အိမ်ထောင်ရေးနှင့် လူမှုဆက်ဆံရေးပြဿနာများကို ဟာသရသဖြင့် ပေါ့ပါးစွာ တင်ပြထားပုံ။
• ဖတ်ရှုသူတိုင်းကို ရယ်မောစေရုံသာမက လက်တွေ့ဘဝအတွက် သင်ခန်းစာရစေမည့် ဇာတ်လမ်းတိုများ။

💡 ဖတ်ရှုသင့်သူများ: ကျေးလက်နောက်ခံ ဟာသနှင့် အချစ်ဝတ္ထုတိုများကို နှစ်သက်သူများအတွက် ဖြစ်ပါသည်။`,
        previewText_en: `A lively romantic comedy collection capturing village gossip, hidden truths, and humorous relationship dynamics.`
    },
    {
        id: 24,
        title: "ညီနောင်",
        title_en: "Brothers",
        author: "ပုံနှိပ်သူအမည် မဖော်ပြထား",
        author_en: "Author Unspecified",
        category: "humor",
        price: 3500,
        cover: "images/24.jpg",
        previewText: `အချစ်၊ ဆက်ဆံရေး၊ လူ့ဘဝအကြောင်းတွေကို ဟာသနှင့်စိတ်လှုပ်ရှားဖွယ်ဖော်ပြထားတဲ့ ဇာတ်လမ်းများစုပေါင်းစာအုပ်ဖြစ်ပါတယ်။ ညီအကိုအချင်းချင်း၊ ချစ်သူနှစ်ဦးကြား၊ လူအများနှင့်ဆက်ဆံပုံစတဲ့အကြောင်းအရာတွေကို ရယ်စရာအဖြစ်အပျက်များနှင့်အတူ ဖတ်သူရင်ထဲကို နက်နက်ရှိင်းရှိင်းရောက်အောင် ရေးသားထားပါတယ်။

🌟 အကောင်းဆုံး ကောက်နုတ်ချက်နှင့် အနှစ်ချုပ် (Highlights):
• ညီအစ်ကိုမောင်နှမ သံယောဇဉ်နှင့် လူမှုဆက်ဆံရေးကြားမှ ရယ်ရွှင်ဖွယ် အလွဲများ။
• ချစ်သူနှစ်ဦးကြားမှ နားလည်မှုနှင့် ကြည်နူးဖွယ် ဟာသဖြစ်ရပ်များ။
• ရယ်မောပျော်ရွှင်ရုံသာမက စိတ်နှလုံးကို နွေးထွေးစေမည့် ဘဝရသ ဇာတ်လမ်းတိုများ။

💡 ဖတ်ရှုသင့်သူများ: မိသားစုသံယောဇဉ်၊ အချစ်နှင့် ဟာသ ရသဝတ္ထုတိုများကို နှစ်သက်သူများအတွက် ဖြစ်ပါသည်။`,
        previewText_en: `A heartwarming and comedic collection of short stories depicting sibling bonds, romance, and everyday human relationships.`
    },
    {
        id: 25,
        title: "တောကျောင်း",
        title_en: "Taung Kyaung",
        author: "ဖော်ပြမထား",
        author_en: "Author Unspecified",
        category: "humor",
        price: 3500,
        cover: "images/25.jpg",
        previewText: `တောကျောင်းဆိုတဲ့ အမည်နဲ့ ဇာတ်လမ်းများစုစည်းထားတဲ့ ဟာသစာအုပ်ဖြစ်ပါတယ်။ ရွာသူရွာသားတွေရဲ့ နေထိုင်ပုံ၊ အပြောအဆို၊ အပြုအမူတွေကို ရယ်စရာအဖြစ်အပျက်တွေအဖြစ် ဖော်ပြထားပြီး လူတွေရဲ့ ဆက်ဆံရေး၊ ဘဝအမြင်တွေကိုလည်း အကျဉ်းချုပ်ဖော်ပြထားတာ တွေ့ရမှာပါ။

🌟 အကောင်းဆုံး ကောက်နုတ်ချက်နှင့် အနှစ်ချုပ် (Highlights):
• ကျေးလက်တောရွာ၏ ရိုးရှင်းသော ဓလေ့ထုံးတမ်းများနှင့် ရွာသူရွာသားများ၏ ချစ်စဖွယ် အလွဲများ။
• တောကျောင်းပတ်ဝန်းကျင်နှင့် လူမှုဆက်ဆံရေး အတွေ့အကြုံများကို ဟာသရသဖြင့် သရော်လှောင်ပြောင် ရေးသားထားပုံ။
• ပေါ့ပါးရယ်မောဖွယ် ဇာတ်လမ်းတိုများမှတစ်ဆင့် လူ့သဘောသဘာဝနှင့် ဘဝအမြင်များကို ဖော်ကျူးထားခြင်း။

💡 ဖတ်ရှုသင့်သူများ: ကျေးလက်ရသ ဟာသနှင့် သရော်စာ (Satire) ဝတ္ထုတိုများကို နှစ်သက်သူများအတွက် ဖြစ်ပါသည်။`,
        previewText_en: `A satirical and comedic collection capturing rural village life, monastery school anecdotes, and endearing local quirks.`
    },
    {
        id: 26,
        title: "ဦးပြောင်ရှင်း",
        title_en: "U Pyaung Shin",
        author: "ကျော်စံကိုး",
        author_en: "Kyaw San Ko",
        category: "humor",
        price: 3500,
        cover: "images/26.jpg",
        previewText: `ကျော်စံကိုးရဲ့ အကျော်ကြားဆုံးဟာသဇာတ်ကောင် ဦးပြောင်ရှင်းရဲ့ ရယ်စရာအဖြစ်အပျက်များကို ရုပ်ပုံဇာတ်လမ်းအဖြစ် ဖော်ပြထားတဲ့ စာအုပ်ဖြစ်ပါတယ်။ ဦးပြောင်ရှင်းဟာ အမြဲတမ်း အပြောအဆို၊ အပြုအမူတွေကြောင့် ရယ်စရာအမှားတွေကို ကျူးလွန်တတ်ပြီး လူတွေရဲ့အကြိုက်တွေ့တဲ့ ဇာတ်ကောင်တစ်ဦးဖြစ်ပါတယ်။ လူ့ဘဝ၊ နေထိုင်မှု၊ ဆက်ဆံရေးစတာတွေကို ဟာသအနေနဲ့ ဖော်ပြထားပြီး ဖတ်သူတိုင်းကို အပြုံးပေးစေမှာ ဖြစ်ပါတယ်။

🌟 အကောင်းဆုံး ကောက်နုတ်ချက်နှင့် အနှစ်ချုပ် (Highlights):
• ဟာသဇာတ်ကောင် ဦးပြောင်ရှင်း၏ အပြောအဆို၊ အပြုအမူ အလွဲများနှင့် ရယ်ရွှင်ဖွယ် ဇာတ်လမ်းတိုများ။
• နေ့စဉ်လူမှုဘဝ၊ ပေါင်းသင်းဆက်ဆံရေးနှင့် လူ့သဘာဝအလွဲများကို ဟာသရုပ်ပြအဖြစ် ကွက်ကွက်ကွင်းကွင်း ပုံဖော်ထားပုံ။
• ဖတ်ရှုသူတိုင်း စိတ်လက်ပေါ့ပါးပြီး ရယ်မောပျော်ရွှင်စေမည့် မြန်မာ့ရုပ်ပြဟာသ စာအုပ်ကောင်း။

💡 ဖတ်ရှုသင့်သူများ: ဟာသရုပ်ပြကာတွန်းနှင့် ပေါ့ပါးရယ်မောဖွယ် ဟာသဇာတ်လမ်းကြိုက်သူများအတွက် ဖြစ်ပါသည်။`,
        previewText_en: `A popular comedic comic series created by Kyaw San Ko, featuring the amusing misadventures, blunders, and wit of the iconic character U Pyaung Shin.`
    },
    {
        id: 27,
        title: "ကိုရွှေတောသား – ကလိမ်ကကျစ်",
        title_en: "Ko Shwe Taw Thar – Kya Leim Kya Sit",
        author: "ကလိမ်ကကျစ်",
        author_en: "Kya Leim Kya Sit",
        category: "humor",
        price: 3500,
        cover: "images/27.jpg",
        previewText: `ကိုရွှေတောသားရဲ့ ရယ်စရာ၊ အချစ်နှင့်ပတ်သက်တဲ့ ဇာတ်လမ်းများစွာကို စုစည်းရေးသားထားတဲ့ စာအုပ်ဖြစ်ပါတယ်။ အမျိုးသမီးများနှင့်ဆက်ဆံရာတွင် ကြုံတွေ့ရတဲ့ ရယ်စရာအမှားများ၊ နားလည်မှုလွဲမှားမှုများ၊ ချစ်ခြင်းမေတ္တာ၏ နက်နဲပြီး ရှုပ်ထွေးသောအဖြစ်အပျက်များကို ဟာသအနေနှင့် ဖော်ပြထားပြီး ဖတ်သူတိုင်းအတွက် အပြုံးနှင့်အတွေးအခေါ်ကိုပါ ပေးစွမ်းနိုင်မှာ ဖြစ်ပါတယ်။

🌟 အကောင်းဆုံး ကောက်နုတ်ချက်နှင့် အနှစ်ချုပ် (Highlights):
• ကိုရွှေတောသား၏ အချစ်ရေးအလွဲများနှင့် အမျိုးသမီးများအကြား ကြုံရသော ရယ်ဖွယ်အရှုပ်အထွေးများ။
• နားလည်မှု လွဲမှားခြင်းများကြားမှ ပေါက်ဖွားလာသော ဟာသရသနှင့် ချစ်ခြင်းမေတ္တာ၏ သဘောသဘာဝများ။
• ဖတ်ရှုသူတိုင်းကို အပြုံးပန်းဝေဆာစေပြီး စိတ်လက်ပေါ့ပါးစေမည့် အချစ်ဟာသ ဝတ္ထုတိုများ။

💡 ဖတ်ရှုသင့်သူများ: ကျေးလက်အချစ်ဟာသနှင့် ရယ်ရွှင်ဖွယ် ဝတ္ထုတိုများကို နှစ်သက်သူများအတွက် ဖြစ်ပါသည်။`,
        previewText_en: `A comedic and romantic short story collection capturing the humorous romantic trials, blunders, and misunderstandings of Ko Shwe Taw Thar.`
    },
    {
        id: 28,
        title: "လူတောသား ဟာသစုစု",
        title_en: "The Villager – Joke Collection",
        author: "ဦးလှအောင်",
        author_en: "U Hla Aung",
        category: "humor",
        price: 3500,
        cover: "images/28.jpg",
        previewText: `လူတောသားရဲ့ ရိုးရှင်းတဲ့နေထိုင်မှု၊ အပြောအဆို၊ အပြုအမူတွေကို အခြေခံပြီး ရယ်စရာဇာတ်လမ်းများစွာကို စုစည်းရေးသားထားတဲ့ စာအုပ်ဖြစ်ပါတယ်။ ရွာသူရွာသားတွေရဲ့ ဘဝအမြင်၊ ဆက်ဆံရေး၊ အချစ်အကြောင်းတွေကို ဟာသအနေနဲ့ ဖော်ပြထားပြီး ဖတ်သူတိုင်းကို အပြုံးပေးစေမှာ ဖြစ်ပါတယ်။

🌟 အကောင်းဆုံး ကောက်နုတ်ချက်နှင့် အနှစ်ချုပ် (Highlights):
• ကျေးလက်လူတောသားများ၏ ရိုးသားဖြူစင်သော စရိုက်နှင့် ချစ်စဖွယ် အလွဲအချော်များ။
• ရွာသူရွာသားများအကြား နေ့စဉ်လူမှုဘဝဆက်ဆံရေးနှင့် ရယ်မောဖွယ် အဖြစ်အပျက်များ။
• ဖတ်ရှုသူတိုင်း စိတ်အမောပြေစေပြီး တစ်ဟားဟား ရယ်မောစေမည့် ဟာသဇာတ်လမ်းတိုများ။

💡 ဖတ်ရှုသင့်သူများ: ကျေးလက်ရသ ဟာသဇာတ်လမ်းတိုများနှင့် ရိုးရှင်းသော ရယ်ရွှင်ဖွယ်ပုံပြင်များကို နှစ်သက်သူများအတွက် ဖြစ်ပါသည်။`,
        previewText_en: `A delightful collection of humorous short stories illustrating rural folkways, authentic village character, and lighthearted everyday blunders.`
    },
    {
        id: 29,
        title: "အီကီဂိုင်း (IKIGAI)",
        title_en: "Ikigai: The Japanese Secret to a Long and Happy Life",
        author: "Hector Garcia",
        author_en: "Hector Garcia",
        category: "health",
        price: 3500,
        cover: "images/29.jpg",
        previewText: `Ikigai ဆိုတာဟာ ဂျပန်ဘာသာနဲ့ဆိုရင် "ဘဝရဲ့ တန်ဖိုး (သို့မဟုတ်) ရှင်သန်ခြင်းရဲ့ အဓိပ္ပာယ်" လို့ အဓိပ္ပာယ်ရပါတယ်။

စာဖတ်သူတွေရဲ့ မနက်မနက် အိပ်ရာထရခြင်းရဲ့ အကြောင်းပြချက်ကို စဉ်းစားကြည့်ဖူးပါသလား? နေ့စဉ် အသက်ရှင်နေခြင်းရဲ့ ရည်ရွယ်ချက်ကရော ဘာများဖြစ်မလဲ? လူအများစုရဲ့ ဘဝနေထိုင်မှုပုံစံတွေဟာ ရှင်သန်ခြင်းရဲ့ အဓိပ္ပာယ်ကို ရှာမတွေ့နိုင်အောင် ဟန့်တားနှောင့်ယှက်နေတတ်ပါတယ်။

🌟 အကောင်းဆုံး ကောက်နုတ်ချက်နှင့် အနှစ်ချုပ် (Highlights):
• မနက်ခင်းတိုင်း အိပ်ရာထရခြင်း၏ အကြောင်းပြချက်နှင့် မိမိဘဝ၏ စစ်မှန်သော ရည်ရွယ်ချက်ကို ရှာဖွေဖော်ထုတ်ခြင်း။
• ဂျပန်လူမျိုးတို့၏ သက်ရှည်ကျန်းမာပြီး ပျော်ရွှင်စွာ နေထိုင်ရခြင်း၏ လျှို့ဝှက်ချက် (Ikigai သဘောတရား)။
• စိတ်ဖိစီးမှုများကို လျှော့ချပြီး နေ့စဉ်ဘဝတွင် အဓိပ္ပာယ်ရှိစွာ ရှင်သန်နေထိုင်နည်း လမ်းညွှန်များ။

💡 ဖတ်ရှုသင့်သူများ: ဘဝ၏ ရှင်သန်ရာ အဓိပ္ပာယ်ကို ရှာဖွေလိုသူများနှင့် စိတ်ချမ်းသာ ကိုယ်ကျန်းမာစွာ နေထိုင်လိုသူများအတွက် ဖြစ်ပါသည်။`,
        previewText_en: `Ikigai translates to "a reason for being"—the Japanese concept that brings purpose, satisfaction, and longevity to life.`
    },
    {
        id: 30,
        title: "ဆေးလိပ်ကို စွန့်လွှတ်နိုင်မည့် နည်းလမ်းများ",
        title_en: "The Easy Way to Stop Smoking",
        author: "Allen Carr",
        author_en: "Allen Carr",
        category: "health",
        price: 3500,
        cover: "images/30.jpg",
        previewText: `ကမ္ဘာတစ်ဝန်းမှာ ဆေးလိပ်သောက်သုံးခြင်းကြောင့် နှစ်စဉ်နှစ်တိုင်း လူသန်းပေါင်းများစွာ သေဆုံးနေကြရသလို တစ်ဆင့်ခံဆေးလိပ်ငွေ့ (Secondhand Smoke) ကြောင့်လည်း ကျန်းမာရေးဆိုးကျိုးများစွာ ဖြစ်ပေါ်စေပါသည်။

🌟 အကောင်းဆုံး ကောက်နုတ်ချက်နှင့် အနှစ်ချုပ် (Highlights):
• ဆေးလိပ်ငွေ့တွင်ပါဝင်သော ကာစီနိုဂျင် (Carcinogens) နှင့် အဆိပ်အတောက် ဓာတုပစ္စည်းများ၏ ဆိုးကျိုးများ။
• ဆေးလိပ်ဖြတ်ရန် ကြိုးစားရာတွင် လူအများစု မအောင်မြင်ရသည့် စိတ်ပိုင်းဆိုင်ရာ အတားအဆီးများ။
• ဆေးလိပ်သောက်ခြင်းအပေါ် မှီခိုနေရသည့် စိတ်သဘောထားကို ပြောင်းလဲပြီး စိတ်ဖိစီးမှုမရှိဘဲ အလွယ်ဆုံး အပြီးတိုင် စွန့်လွှတ်နည်း။

💡 ဖတ်ရှုသင့်သူများ: ဆေးလိပ်ကို လွယ်ကူစွာ အပြီးတိုင် စွန့်လွှတ်လိုသူများနှင့် မိသားစု ကျန်းမာရေးကို အလေးထားသူများအတွက် လက်စွဲစာအုပ် ဖြစ်ပါသည်။`,
        previewText_en: `Allen Carr's globally acclaimed method to help smokers quit permanently without willpower battles, stress, or weight gain.`
    },
    {
        id: 31,
        title: "စိတ်ရဲ့အစာအိမ် (The Mind-Gut Connection)",
        title_en: "The Mind-Gut Connection",
        author: "အမ်မရမ် မေယာ (Emeran A. Mayer)",
        author_en: "Emeran A. Mayer",
        category: "health",
        price: 3500,
        cover: "images/31.jpg",
        previewText: `အကြောင်းအရင်း အတိအကျမသိရဘဲ မကြာခဏ ဖြစ်လေ့ရှိတဲ့ အစာအိမ်နဲ့ အူလမ်းကြောင်း ပြဿနာတွေဟာ စိတ်ခံစားချက်တွေ၊ ကလေးဘဝရဲ့ စိတ်ဒဏ်ရာတွေနဲ့ တိုက်ရိုက် ဆက်စပ်နေတတ်ပါတယ်။

"ဝမ်းတစ်လုံးကောင်းလျှင် ခေါင်းမခဲ" ဆိုသည့်အတိုင်း လူ့ဝမ်းခေါင်းအစာအိမ်နှင့် အူလမ်းကြောင်း (Gut) စနစ်သည် အစာချေဖျက်ရုံသာမက လူ့ခန္ဓာကိုယ်၏ ဒုတိယဦးနှောက် (Second Brain) သဖွယ် လုပ်ဆောင်ပေးနေပါသည်။

🌟 အကောင်းဆုံး ကောက်နုတ်ချက်နှင့် အနှစ်ချုပ် (Highlights):
• ဝမ်းဗိုက်ပိုင်းဆိုင်ရာ ပြဿနာများနှင့် ဦးနှောက်စိတ်ပိုင်းဆိုင်ရာ ချိတ်ဆက်မှု (Mind-Gut Connection)။
• စိတ်ဖိစီးမှုကြောင့် ဖြစ်ပေါ်လာသော အစာအိမ်ဝေဒနာများကို သဘာဝနည်းကျ ကုစားနည်းများ။
• အူလမ်းကြောင်းအတွင်းရှိ ကောင်းသောဘက်တီးရီးယား (Microbiome) များကို ကျန်းမာစေမည့် အစားအသောက် ရွေးချယ်မှုများ။

💡 ဖတ်ရှုသင့်သူများ: မကြာခဏ အစာအိမ်/လေထိုး/လေအောင့် ဝေဒနာခံစားရသူများနှင့် စိတ်ကျန်းမာရေးနှင့် ခန္ဓာကိုယ်ကျန်းမာရေးကို ဟန်ချက်ညီ ထိန်းသိမ်းလိုသူများအတွက် ဖြစ်ပါသည်။`,
        previewText_en: `Explore how the conversation between the brain and the gut microbiome impacts everyday mood, mental choices, and overall physical health.`
    },
    {
        id: 32,
        title: "စိတ်ခံစားမှုကျန်းမာရေး (Emotional Health)",
        title_en: "Emotional Health",
        author: "အောက်စ်ဖိုဒ့် ဆရာတော် ပါမောက္ခ ဒေါက်တာဓမ္မသာမိ (DPhil Oxford)",
        author_en: "Prof. Dr. Dhammasami (DPhil Oxford)",
        category: "health",
        price: 3500,
        cover: "images/32.jpg",
        previewText: `လူသားတို့၏ စိတ်ကျန်းမာရေးကို ဆေးဝါးသဖွယ် ကုစားပေးနိုင်မည့် Chamomile ပန်း၏ အေးချမ်းမှုနှင့် Oxford တက္ကသိုလ်၏ အသိပညာဗဟုသုတများကို ပေါင်းစပ်ထားသော စိတ်ခံစားမှု ကျန်းမာရေး လမ်းညွှန်စာအုပ် ဖြစ်ပါသည်။

🌟 အကောင်းဆုံး ကောက်နုတ်ချက်နှင့် အနှစ်ချုပ် (Highlights):
• စိတ်ဖိစီးမှုနှင့် စိတ်ခံစားချက် အတက်အကျများကို အသိတရားဖြင့် နားလည်ပြီး စိတ်၏ ကြည်လင်ငြိမ်းချမ်းမှုကို တည်ဆောက်ခြင်း။
• စိတ်ခံစားမှုကျန်းမာရေးကို ဆေးဝါးသဖွယ် ကုစားဖော်ကျူးထားသော Chamomile ပန်း၏ အဓိပ္ပာယ်နှင့် အေးချမ်းမှု သင်္ကေတများ။
• Oxford University ၏ အပြာရောင်နှင့် ရိုးရှင်းသော အသွင်အပြင်ဖြင့် စာဖတ်သူတို့၏ စိတ်နှလုံးကို ကြည်လင်အေးချမ်းစေပုံ။

💡 ဖတ်ရှုသင့်သူများ: စိတ်ဖိစီးမှုများကို ထိန်းညှိပြီး စိတ်၏ ငြိမ်းချမ်းကြည်လင်မှုနှင့် စိတ်ကျန်းမာရေးကို စနစ်တကျ ပြုစုပျိုးထောင်လိုသူများအတွက် ဖြစ်ပါသည်။`,
        previewText_en: `A profound mental and emotional wellness guide written by Oxford scholar Prof. Dr. Dhammasami to cultivate emotional clarity and inner peace.`
    },
    {
        id: 33,
        title: "မိန်းမသားများအတွက် အချစ်ရေးနှင့်အိမ်ထောင်ရေး အမေးအဖြေ",
        title_en: "Questions and Answers of Love and Marriage for Women",
        author: "မေသရဝဏ်ဦး",
        author_en: "May Thara Won Oo",
        category: "health",
        price: 3500,
        cover: "images/33.jpg",
        previewText: `မိန်းမသားတို့၏ အချစ်ရေး၊ အိမ်ထောင်ရေးနှင့် ဘဝခရီးလမ်းတွင် ကြုံတွေ့ရတတ်သည့် အခက်အခဲများကို လက်တွေ့ကျကျ ဖြေရှင်းပေးထားသော အမေးအဖြေ လမ်းညွှန်စာအုပ် ဖြစ်ပါသည်။

🌟 အကောင်းဆုံး ကောက်နုတ်ချက်နှင့် အနှစ်ချုပ် (Highlights):
• မေးခွန်းများ၏ အရည်အသွေးနှင့် အမြင်သဘောထားများမှတစ်ဆင့် အသိပညာပြည့်ဝသော အဖြေကောင်းများ ရရှိပုံ။
• အမျိုးသမီးတို့၏ စိတ်ပိုင်းဆိုင်ရာ ခံယူချက်နှင့် အိမ်ထောင်ရေး ဆက်ဆံရေး တည်ဆောက်ပုံ အတွေ့အကြုံများ။
• ဘဝအတွေ့အကြုံနှင့် အယ်ဒီတာ့အမြင်ဖြင့် ရိုးသားပွင့်လင်းစွာ ဖြေကြားထားသော အိမ်ထောင်ရေး သုတရသများ။

💡 ဖတ်ရှုသင့်သူများ: အချစ်ရေး၊ အိမ်ထောင်ရေးဆိုင်ရာ အတွေးအမြင်နှင့် လူမှုဆက်ဆံရေး အတွေ့အကြုံများကို လေ့လာလိုသော အမျိုးသမီးများအတွက် ဖြစ်ပါသည်။`,
        previewText_en: `A practical and insightful guide featuring thoughtful Q&As on love, marriage, and emotional wisdom tailored for women.`
    },
    {
        id: 34,
        title: "အိပ်စက်ခြင်း (SLEEP)",
        title_en: "Sleep: The Myth of 8 Hours, the Power of Naps, and the New Plan to Recharge Your Body and Mind",
        author: "နစ်ခ် လစ်တဲလ်ဟေးလ်စ် (Nick Littlehales)",
        author_en: "Nick Littlehales",
        category: "health",
        price: 3500,
        cover: "images/34.jpg",
        previewText: `အိပ်စက်ခြင်းဟာ လူ့ဘဝရဲ့ သုံးပုံတစ်ပုံခန့်ကို အသုံးပြုရပြီး နောက်တစ်နေ့တွင် အမြင့်ဆုံး စွမ်းဆောင်ရည် (Peak Performance) ရရှိစေရန် မရှိမဖြစ် အရေးပါသော အစိတ်အပိုင်း ဖြစ်ပါသည်။

🌟 အကောင်းဆုံး ကောက်နုတ်ချက်နှင့် အနှစ်ချုပ် (Highlights):
• တစ်ည ၈ နာရီ မဖြစ်မနေ အိပ်ရမည်ဟူသော အယူအဆဟောင်းကို ချေဖျက်ပေးခြင်း။
• မိနစ် ၉၀ စီပါဝင်သော အိပ်စက်မှု သံသရာ (R90 Sleep Recovery Program) ဖြင့် အရည်အသွေးမြင့် အိပ်စက်နည်း။
• အားကစားသမားများနှင့် လုပ်ငန်းခွင်အတွင်း စွမ်းဆောင်ရည် အမြင့်ဆုံး ရရှိစေမည့် နေ့လယ်ဘက် အိပ်စက်ခြင်း (Power Naps) နှင့် စနစ်တကျ အနားယူနည်းများ။

💡 ဖတ်ရှုသင့်သူများ: အိပ်မပျော်သော ဝေဒနာ ခံစားနေရသူများ၊ ပင်ပန်းနွမ်းနယ်မှုကို လျှော့ချပြီး ခန္ဓာကိုယ်နှင့် စိတ်၏ စွမ်းဆောင်ရည်ကို မြှင့်တင်လိုသူများအတွက် ဖြစ်ပါသည်။`,
        previewText_en: `Transform your sleep and energy with the revolutionary R90 technique developed by elite sports sleep coach Nick Littlehales.`
    },
    {
        id: 35,
        title: "ခင်ဗျားကို ကျွန်တော်ချစ်တယ်",
        title_en: "I Love You",
        author: "စစ်စွန်းဇံ",
        author_en: "Sit Sone Zan",
        category: "romance",
        price: 3500,
        cover: "images/35.jpg",
        previewText: `ခင်ဗျားအနာဂတ်ထဲကို ကျွန်တော်ချစ်ခြင်းမေတ္တာတွေ စီးဝင်ချင်တာပါ... ခင်ဗျားကို ကျွန်တော်ချစ်တယ်ပေါ့။

အချစ်ဆိုတာ ရိုးရှင်းပေမယ့် နက်နဲတဲ့ခံစားချက်တစ်ခုပါ။ တစ်ယောက်ကိုတစ်ယောက် နားလည်ပေးခြင်း၊ အတူတူရပ်တည်ပေးခြင်း၊ အခက်အခဲတွေကို အတူတူကျော်လွှားခြင်းစတဲ့အရာတွေ ပါဝင်ပါတယ်။ 

🌟 အကောင်းဆုံး ကောက်နုတ်ချက်နှင့် အနှစ်ချုပ် (Highlights):
• ချစ်သူနှစ်ဦးကြားမှ ခံစားချက်အမျိုးမျိုး၊ နားလည်မှုလွဲမှားခြင်းများနှင့် ပြန်လည်ဆုံဆည်းမှု ရသများ။
• အချိန်တွေမည်မျှပင် ကုန်လွန်ပါစေ ဘယ်တော့မှ မပြောင်းလဲသွားသည့် စစ်မှန်သော သံယောဇဉ်နှင့် ကတိစကားများ။
• ဘယ်လို အခက်အခဲတွေပဲ ကြုံရပါစေ လက်တွဲမဖြုတ်ဘဲ အတူတူ ရပ်တည်ကျော်ဖြတ်သွားမည့် ကြည်နူးဖွယ် အချစ်ဇာတ်လမ်း။

💡 ဖတ်ရှုသင့်သူများ: ခေတ်ပေါ် အချစ်ဝတ္ထုများနှင့် စိတ်နှလုံးကို နွေးထွေးကြည်နူးစေမည့် ရသခံစားမှုများကို နှစ်သက်သူများအတွက် ဖြစ်ပါသည်။`,
        previewText_en: `A heartfelt contemporary romance exploring unspoken feelings, emotional resilience, and the enduring power of true affection.`
    },
    {
        id: 36,
        title: "အိပ်ရာဝင်စကားပုံ ပုံပြင်များ",
        title_en: "Bedtime Stories and Poems",
        author: "သင်ထောက်ကူ ကလေးကဗျာနှင့် ပုံပြင်များ",
        author_en: "Educational Children's Literature",
        category: "romance",
        price: 3500,
        cover: "images/36.jpg",
        previewText: `သားသားမီးမီးတို့အတွက် ရည်စူးထားတဲ့ ဒီကဗျာနှင့် ပုံပြင်များဟာ ကလေးငယ်တွေရဲ့ စိတ်ကူးဉာဏ်ကို ကျယ်ပြန့်စေပြီး သဘာဝ၊ တိရစ္ဆာန်၊ မိသားစုနှင့် ချစ်ခြင်းမေတ္တာတွေအကြောင်း လွယ်ကူသော စကားလုံးများနဲ့ ရေးသားထားပါတယ်။

ကဗျာတွေထဲမှာ လပြည့်ဝန်း၊ ကြယ်များ၊ ပန်းပွင့်များနှင့် ကလေးများ၏ ကစားပွဲများစတဲ့ နူးညံ့သိမ်မွေ့တဲ့ မြင်ကွင်းတွေကို သရုပ်ဖော်ထားပြီး ကလေးတွေအပေါ် ကောင်းမွန်တဲ့ စိတ်ဓာတ်တွေ မွေးမြူပေးနိုင်ပါတယ်။

🌟 အကောင်းဆုံး ကောက်နုတ်ချက်နှင့် အနှစ်ချုပ် (Highlights):
• ကလေးငယ်များ၏ စိတ်ကူးစိတ်သန်းနှင့် တီထွင်ဖန်တီးနိုင်စွမ်းကို မြှင့်တင်ပေးမည့် အိပ်ရာဝင် ပုံပြင်တိုများ။
• သဘာဝတရား၊ မေတ္တာတရားနှင့် ကောင်းမွန်သော ကိုယ်ကျင့်စာရိတ္တများကို သင်ကြားပေးသည့် သင်ခန်းစာများ။
• အိပ်ရာဝင်ချိန် မိဘနှင့် သားသမီးကြား သံယောဇဉ်ကို ပိုမိုနွေးထွေးစေမည့် ရိုးရှင်းသော ကဗျာရသများ။

💡 ဖတ်ရှုသင့်သူများ: သားသားမီးမီးတို့အတွက် အိပ်ရာဝင် ပုံပြင်ကောင်းများနှင့် ကလေးကဗျာ ဖတ်ပြလိုသော မိဘများအတွက် ဖြစ်ပါသည်။`,
        previewText_en: `A delightful compilation of bedtime stories and gentle poems crafted to spark imagination and instill moral values in children.`
    },
    {
        id: 37,
        title: "ဂျပန်ခေတ်ပေါ်ကဗျာ",
        title_en: "Modern Japanese Poetry",
        author: "သစ္စာနီ",
        author_en: "Thitsar Ni",
        category: "romance",
        price: 3500,
        cover: "images/37.jpg",
        previewText: `ဂျပန်နိုင်ငံ၏ စာပေယဉ်ကျေးမှု၊ ခေတ်အဆက်ဆက် ပြောင်းလဲတိုးတက်လာသော ကဗျာရေစီးကြောင်းနှင့် ကမ္ဘာကျော် ဟိုက္ကူ (Haiku)၊ တန်ကာ (Tanka) ကဗျာလက်ရာများကို မြန်မာဘာသာဖြင့် သေသပ်စွာ ခံစားတင်ဆက်ထားသော ကဗျာစာအုပ် ဖြစ်ပါသည်။

🌟 အကောင်းဆုံး ကောက်နုတ်ချက်နှင့် အနှစ်ချုပ် (Highlights):
• တိုတိုနှင့် အဓိပ္ပာယ်နက်နဲစွာ ဖော်ကျူးတတ်သော ဂျပန်ရိုးရာနှင့် ခေတ်ပေါ်ကဗျာများ၏ အလှတရား။
• သဘာဝတရား၏ အလှ၊ လူ့နှလုံးသား၏ နက်နဲသော ခံစားချက်များနှင့် ဘဝအမြင်များကို ကဗျာရသဖြင့် ဖွဲ့ဆိုထားပုံ။
• နိုင်ငံတကာ စာပေယဉ်ကျေးမှုနှင့် ကမ္ဘာ့ကဗျာရေစီးကြောင်းကို ကျယ်ပြန့်စွာ လေ့လာခံစားနိုင်ခြင်း။

💡 ဖတ်ရှုသင့်သူများ: ကဗျာချစ်သူများ၊ နိုင်ငံတကာ ဘာသာပြန်စာပေနှင့် ဂျပန်ယဉ်ကျေးမှုကို စိတ်ဝင်စားသူများအတွက် ဖြစ်ပါသည်။`,
        previewText_en: `A masterful collection translating modern and classic Japanese verse—including Haiku and Tanka forms—into Burmese by Thitsar Ni.`
    },
    {
        id: 38,
        title: "အောင်ဝေး – လက်ရွေးစင်ကဗျာများ (၁၉၈၂–၈၈)",
        title_en: "Aung Way – Selected Poems (1982–88)",
        author: "အောင်ဝေး",
        author_en: "Aung Way",
        category: "romance",
        price: 3500,
        cover: "images/38.jpg",
        previewText: `၁၉၈၂ ခုနှစ်မှ ၁၉၈၈ ခုနှစ်အတွင်း ရေးဖွဲ့ခဲ့သော ကဗျာဆရာ အောင်ဝေး၏ ခေတ်ကာလ စိတ်ဓာတ်နှင့် လူ့ဘဝ၊ သဘာဝ၊ ခံစားချက်များကို ရိုးရှင်းနက်နဲစွာ ထင်ဟပ်ဖော်ကျူးထားသည့် လက်ရွေးစင် ကဗျာများ စုစည်းမှု ဖြစ်ပါသည်။

🌟 အကောင်းဆုံး ကောက်နုတ်ချက်နှင့် အနှစ်ချုပ် (Highlights):
• "မိုးရေထဲကဝတ္ထု"၊ "လရောင်နဲ့လမ်း"၊ "စိမ်းပြည်မှောင်တမ်းချင်း" အပါအဝင် ထင်ရှားသော ခေတ်ပေါ်ကဗျာလက်ရာများ။
• အရိုးရှင်းဆုံး စကားလုံးများဖြင့် ဖတ်ရှုသူ၏ နှလုံးသားကို ထိခိုက်စေမည့် အနက်ရှိုင်းဆုံး ခံစားမှု ရသများ။
• ၁၉၈၀ ပြည့်လွန်နှစ်များ၏ ခေတ်ပြိုင် စာပေရေစီးကြောင်းနှင့် သမိုင်းဝင် ကဗျာရနံ့များ။

💡 ဖတ်ရှုသင့်သူများ: မြန်မာကဗျာချစ်သူများ၊ ခေတ်ပေါ်ကဗျာလက်ရာများနှင့် ခေတ်ကာလ စာပေရသကို တန်ဖိုးထားသူများအတွက် ဖြစ်ပါသည်။`,
        previewText_en: `A timeless anthology of selected contemporary verses written between 1982 and 1988 by renowned Burmese poet Aung Way.`
    },
    {
        id: 39,
        title: "အဝါရောင်ပန်းပွင့်များ",
        title_en: "Yellow Flowers",
        author: "နွေအိမ်မောင်ဝင်း",
        author_en: "Nwe Ei Maung Win",
        category: "romance",
        price: 3500,
        cover: "images/39.jpg",
        previewText: `တစ်ခါတလေ အရောင်မှိုင်းမှိုင်းတိမ်တွေ ဖြစ်ချင်၊ တစ်ခါတလေကျ ဝေးဝေးကွင်းပြင်ကျယ်ကျယ်က Daffodil ပန်းပွင့်တွေ ဖြစ်ချင်၊ တစ်ခါတလေ ကြွေခါနီးသစ်ရွက်လေး၊ တစ်ခါတလေ မိုးရွာပြီးတော့ မြေသင်းနံ့... ဒီလိုပါ အချစ်ရေ။ ဆိုလိုချင်တာ လူ့အဖြစ်ကလွဲ အရာရာ ဖြစ်ချင်စရာပါပဲ။

🌟 အကောင်းဆုံး ကောက်နုတ်ချက်နှင့် အနှစ်ချုပ် (Highlights):
• နေ့စဉ်ဘဝ၏ သေးငယ်သော အခိုက်အတန့်များနှင့် စိတ်ခံစားမှု အလွှာများကို နူးညံ့စွာ သီကုံးထားသော ကဗျာရသများ။
• ချစ်ခြင်း၊ ခွဲခွာခြင်း၊ မျှော်လင့်ခြင်းနှင့် ဘဝဒဏ်ရာများကို သဘာဝတရား၏ အလှဖြင့် နှစ်သိမ့်ကုစားပုံ။
• နေရောင်အောက်တွင် တောက်ပစွာ ပွင့်လန်းသော အဝါရောင်ပန်းပွင့်များကဲ့သို့ ဘဝကို အကောင်းမြင်စိတ်ဖြင့် ရှင်သန်နိုင်စေမည့် အားအင်များ။

💡 ဖတ်ရှုသင့်သူများ: ခံစားမှုရသ နက်နဲသော ကဗျာများကို နှစ်သက်သူများနှင့် စိတ်နှလုံးကို အေးချမ်းနွေးထွေးစေလိုသူများအတွက် ဖြစ်ပါသည်။`,
        previewText_en: `A tender and evocative collection of modern poems reflecting emotional nuances, love, heartbreak, and quiet resilience.`
    },
    {
        id: 40,
        title: "ဝေရဲ့ကြွေရဲ့ စေတနာပန်းပွင့်များ",
        title_en: "Petals of Kindness That Fall and Drift",
        author: "ခင်လှိုင်းကျော်",
        author_en: "Khin Hlaing Kyaw",
        category: "romance",
        price: 3500,
        cover: "images/40.jpg",
        previewText: `ဝေရဲ့ကြွေရဲ့ စေတနာပန်းပွင့်များဟာ အချိန်တိုင်း ပြောင်းလဲနေတဲ့ သဘာဝရဲ့ အလှတရားတွေလိုပါပဲ။ မိုးရွာသွန်းချိန်ဖြစ်စေ၊ နေပူပြင်းချိန်ဖြစ်စေ ဒီပန်းပွင့်လေးတွေဟာ သူတို့ရဲ့ စစ်မှန်တဲ့ အလှကို ဘယ်တော့မှ မဖုံးကွယ်သွားပါဘူး။

🌟 အကောင်းဆုံး ကောက်နုတ်ချက်နှင့် အနှစ်ချုပ် (Highlights):
• ရာသီဥတုနှင့် ဘဝအခြေအနေများ မည်သို့ပင် ပြောင်းလဲပါစေ ဘယ်တော့မှ မပြောင်းလဲတတ်သော စေတနာနှင့် မေတ္တာတရား။
• သစ်ပင်အောက်မှ ဖြတ်သန်းသွားရင်း ကြွေကျလာသော ပန်းပွင့်လေးများမှတစ်ဆင့် ဘဝ၏ အနက်နှင့် အမှတ်တရများကို ဖွဲ့ဆိုထားပုံ။
• ပျော်ရွှင်မှု၊ ဝမ်းနည်းမှု၊ ခွဲခွာခြင်းနှင့် မျှော်လင့်ချက်များကို စာသားအလှများဖြင့် နှလုံးသားထဲ ရောက်အောင် ရေးဖွဲ့ထားသော ကဗျာရသများ။

💡 ဖတ်ရှုသင့်သူများ: မြန်မာစာပေနှင့် ကဗျာရသများကို နှစ်သက်သူများ၊ စိတ်နှလုံးကို အေးချမ်းကြည်နူးစေမည့် သုတရသ ကဗျာကောင်းများကို ဖတ်ရှုလိုသူများအတွက် ဖြစ်ပါသည်။`,
        previewText_en: `A thoughtful collection of Burmese literary poetry exploring changing seasons, enduring benevolence, and the gentle beauty of drifting flower petals.`
    },
    {
        id: 41,
        title: "အစ်ကို... သို့",
        title_en: "To My Brother",
        author: "ဖရော်ဆန်",
        author_en: "Phyaw San",
        category: "drama",
        price: 3500,
        cover: "images/41.jpg",
        previewText: `မိုးရွာတာနဲ့ ကျနော်က သူ့ကို သတိရမိနေတတ်တာလား...? လွမ်းဆွတ်သတိရခြင်းတွေက ဘယ်တုန်းကမှ ရာသီဥတုနဲ့ တိုက်ရိုက်ပတ်သက်မနေခဲ့ပါဘူး။

"ချုပ်နှောင်ခံထားရတဲ့ဘဝကို သိပ်မနှစ်သက်ပါဘူး" လို့ ပြောခဲ့ဖူးတဲ့သူက "ဘယ်အချိန်ပဲဖြစ်ဖြစ် ဖုန်းခေါ်နော်" ဆိုပြီး တိတ်ဆိတ်ဖြတ်တောက်သွားခဲ့တဲ့ ဆက်ဆံရေးတွေကို သတိရမိတိုင်း နာကျင်ခဲ့ရပါတယ်။

🌟 အကောင်းဆုံး ကောက်နုတ်ချက်နှင့် အနှစ်ချုပ် (Highlights):
• တစ်ဖက်သတ် သံယောဇဉ်၊ လွမ်းဆွတ်မှုနှင့် မပြောပြနိုင်သော စိတ်ခံစားချက် အလွှာများကို ရင်နင့်ဖွယ် ရေးဖွဲ့ထားပုံ။
• ကိုယ့်အပေါ်တွင် ရက်စက်ပြီး အခြားသူတစ်ယောက်အပေါ်တွင် အကောင်းဆုံး နှလုံးသားပေးထားသည့် လူတစ်ယောက်ကို ငေးကြည့်ရခြင်း၏ နာကျင်မှု။
• ရွေးချယ်မှုတိုင်းတွင် ကိုယ်ပါဝင်မနေခဲ့ရသော်လည်း အဝေးမှ တိတ်တဆိတ် ဆုတောင်းပေးနေမည့် မေတ္တာနှင့် ဘဝရသများ။

💡 ဖတ်ရှုသင့်သူများ: စိတ်ခံစားမှုရသ နက်နဲသော စာပေများ၊ မိသားစုနှင့် လူမှုဆက်ဆံရေး ဒရာမာဝတ္ထုများကို နှစ်သက်သူများအတွက် ဖြစ်ပါသည်။`,
        previewText_en: `A poignant, emotionally charged literary novella detailing unrequited affection, silent grief, and the bittersweet acceptance of being left behind.`
    },
    {
        id: 42,
        title: "နင့်နေအောင် ချစ်ခဲ့မိ၍ ရူးနေအောင် နာကျင်နေရပါသည်",
        title_en: "Loving You Till I Was Crazy, Hurting Till I Was Mad",
        author: "ဂုဏ်ရှိန်ဝါ",
        author_en: "Gon Shin Wa",
        category: "romance",
        price: 3500,
        cover: "images/42.jpg",
        previewText: `နင့်နေအောင် ချစ်ခဲ့မိ၍ ရူးနေအောင် နာကျင်နေရပါသည်။ ဒီအပိုင်းကိုဖတ်တဲ့အခါမှာ ကော်ဖီလေးတစ်ခွက်နဲ့ တိတ်ဆိတ်တဲ့နေရာမှာ တစ်ကိုယ်တည်း ထိုင်ဖတ်ကြည့်ပါ။

ခင်ဗျားကို ပိုင်ဆိုင်ခွင့်မရှိတော့မှန်း သိပေမယ့် နောက်ဆုံးအနေနဲ့ ဆုတောင်းပေးခြင်းဖြင့်သာ နှလုံးသားကို ဖြေသိမ့်ခဲ့ရပါတယ်။ တစ်ဖက်သတ် ချစ်ခြင်းရဲ့ နာကျင်မှုကိုတော့ ခံစားဖူးသူတိုင်း နားလည်နိုင်ပါလိမ့်မယ်။

🌟 အကောင်းဆုံး ကောက်နုတ်ချက်နှင့် အနှစ်ချုပ် (Highlights):
• အလွန်အမင်း ချစ်မြတ်နိုးခဲ့ရသလောက် အတိုင်းအဆမဲ့ နာကျင်ရသော တစ်ဖက်သတ် အချစ်၏ အနက်ရှိုင်းဆုံး ခံစားချက်များ။
• ကိုယ့်ကို တန်ဖိုးမထားနိုင်သူကို အပြီးပိုင် မေ့ပစ်ချင်သော်လည်း နှလုံးသားထဲမှ ဖျောက်ဖျက်မရနိုင်သည့် ရုန်းကန်မှုများ။
• အချိန်တွေ မည်မျှပင် ကြာညောင်းပါစေ အဝေးမှသာ တိတ်တဆိတ် ဆုတောင်းပေးရင်း ကျန်ရစ်ခဲ့ရသည့် အချစ်ဒရာမာ ရသဝတ္ထု။

💡 ဖတ်ရှုသင့်သူများ: စိတ်ခံစားမှုပြင်းထန်သော အချစ်ဒရာမာနှင့် ရင်နင့်ဖွယ် ခေတ်ပေါ် အချစ်ဝတ္ထုများကို နှစ်သက်သူများအတွက် ဖြစ်ပါသည်။`,
        previewText_en: `A deeply emotional contemporary romantic drama depicting the profound ache of unrequited love, lingering memories, and silent heartbreak.`
    },
    {
        id: 43,
        title: "တမိုးထဲအောက်မှာ",
        title_en: "Beneath the Same Sky",
        author: "တက္ကသိုလ်အမှတ်တရ – ကဗျာများ",
        author_en: "University Memories – Poems",
        category: "romance",
        price: 3500,
        cover: "images/43.jpg",
        previewText: `၁၉၉၅ ခုနှစ်ဆန်း တက္ကသိုလ်ဝင်ခွင့်ရချိန်မှ စတင်ကာ အတူတူ ဖြတ်သန်းခဲ့ကြသည့် ကျောင်းသားဘဝ အမှတ်တရများ၊ ချစ်ကြည်ရင်းနှီးမှုနှင့် လူငယ်ဘဝ အိပ်မက်များကို ပြန်လည်အသက်သွင်းထားသော တက္ကသိုလ်အမှတ်တရ ကဗျာရသများ ဖြစ်ပါသည်။

🌟 အကောင်းဆုံး ကောက်နုတ်ချက်နှင့် အနှစ်ချုပ် (Highlights):
• လူငယ်ဘဝ မျှော်လင့်ချက်များ၊ စာမေးပွဲ ရင်ခုန်သံများနှင့် တက္ကသိုလ်ကျောင်းတော်ကြီး၏ လွမ်းမောဖွယ် အမှတ်တရများ။
• တမိုးထဲအောက်တွင် အတူတကွ ရုန်းကန်ကြိုးစားခဲ့ကြသော တစ်သက်တာ မိတ်ဆွေကောင်းများ၏ သံယောဇဉ်။
• နှစ်များစွာ ကြာညောင်းသွားသော်လည်း ရင်ထဲတွင် အမြဲရှင်သန်နေမည့် ကံ့ကော်မြေနှင့် ကျောင်းသားဘဝ ကဗျာရနံ့များ။

💡 ဖတ်ရှုသင့်သူများ: တက္ကသိုလ်ကျောင်းသားဘဝ အမှတ်တရများကို လွမ်းဆွတ်တန်ဖိုးထားသူများနှင့် ခေတ်ပြိုင် ရသကဗျာ ချစ်သူများအတွက် ဖြစ်ပါသည်။`,
        previewText_en: `A nostalgic poetry collection capturing timeless university memories, youthful aspirations, exams, and lifelong friendships formed under the same sky.`
    },
    {
        id: 44,
        title: "အညိုရောင် မေပယ်ရွက်လေးသို့",
        title_en: "To the Brown Maple Leaf",
        author: "Lavender Pan",
        author_en: "Lavender Pan",
        category: "romance",
        price: 3500,
        cover: "images/44.jpg",
        previewText: `ပန်းခြောက်လေးတွေကိုလည်း မြတ်နိုးဖို့ သင်ယူခဲ့တယ်။ အေးစက်သွားတဲ့ ကော်ဖီတစ်ခွက်ကိုလည်း ကုန်အောင် သောက်ခဲ့တယ်။ အတူမရှိကြရင်တောင် ကျွန်တော့် အမှတ်တရတွေက မြတ်နိုးစရာတွေအဖြစ် ကျန်ရစ်ခဲ့တယ်။

ပိုင်ဆိုင်ခွင့် မရှိရင်တောင် ဒီချစ်ခြင်းလေးဟာ အညိုရောင်တွေလို လှပနေဆဲပါ။

🌟 အကောင်းဆုံး ကောက်နုတ်ချက်နှင့် အနှစ်ချုပ် (Highlights):
• ပိုင်ဆိုင်ခွင့်ထက် ပေးဆပ်မြတ်နိုးခြင်း၏ လှပသော အဓိပ္ပာယ်ကို ဖော်ကျူးထားသည့် ရသအတွေးအမြင်များ။
• ရာသီပြောင်းလဲတိုင်း အရောင်ပြောင်းသွားသည့် မေပယ်ရွက်လေးများကဲ့သို့ ဘဝအပြောင်းအလဲကြားမှ မပျောက်ကွယ်သော ချစ်ခြင်းမေတ္တာ။
• ခွဲခွာခြင်းနှင့် အတိတ်ဒဏ်ရာများကို နွေးထွေးစွာ ရင်ဆိုင်ကုစားစေမည့် ခေတ်ပေါ် ရသဝတ္ထု။

💡 ဖတ်ရှုသင့်သူများ: နူးညံ့သိမ်မွေ့သော အချစ်ရသနှင့် စိတ်နှလုံးကို အေးချမ်းစေမည့် ခေတ်ပေါ် စာပေများကို ချစ်မြတ်နိုးသူများအတွက် ဖြစ်ပါသည်။`,
        previewText_en: `A tender, poignant contemporary romance reflecting on unconditional love, quiet acceptance, and treasured autumn memories.`
    }
];

// Always sync and load the complete latest catalog
let booksData = defaultBooksData;
const customStored = localStorage.getItem("custom_books_data");
if (customStored) {
    const parsed = JSON.parse(customStored);
    // Merge user added books if any exist beyond default
    if (Array.isArray(parsed) && parsed.length > defaultBooksData.length) {
        booksData = parsed;
    }
}

// Translations
const translations = {
    my: {
        brand: "📚 The Reading Homes",
        searchPlaceholder: "စာအုပ်ရှာဖွေရန်...",
        themeBtn: "🌓 Theme",
        cartBtn: "🛒 Cart",
        loginBtn: "👤 Login",
        adminBtn: "⚙️ Admin",
        navOrders: "Orders",
        heroTitle: "The Reading Homes<br>အသိပညာ၏ အလင်းရောင်",
        heroDesc: "သင်ဖတ်ရှုလိုသော နည်းပညာ၊ အတွေးအမြင်နှင့် သုတရသ စာအုပ်ပေါင်းများစွာကို တစ်နေရာတည်းတွင် လွယ်ကူစွာ နမူနာဖတ်ရှုပြီး အိမ်တိုင်ရာရောက် မှာယူလိုက်ပါ",
        titleSearch: "🔍 ရှာဖွေတွေ့ရှိသော စာအုပ်များ",
        titleTech: "💻 နည်းပညာ (Technical)",
        titleHealth: "🌿 ကျန်းမာရေးနှင့် အတွေးအမြင် (Health & Mindset)",
        titleHorror: "👻 ထိတ်လန့်စရာနှင့် ပရလောက (Horror & Mystery)",
        titleDrama: "🎭 ဒရာမာနှင့် ရသဝတ္ထု (Drama & Fiction)",
        titleHumor: "😂 ဟာသနှင့် အပန်းဖြေ (Humor & Fun)",
        titleRomance: "💖 အချစ်နှင့် ကဗျာ (Romance & Poetry)",
        readBtn: "📖 နမူနာဖတ်မည်",
        addCartBtn: "🛒 ဝယ်မည်",
        myOrdersTitle: "ကျွန်ုပ်၏ အော်ဒါမှတ်တမ်းများ",
        myOrdersSub: "Royal Express ဖြင့် ပို့ဆောင်ပေးနေသော စာအုပ်များစာရင်း",
        cartModalTitle: "Shopping Cart & Checkout",
        cartModalSubtitle: "Royal Express အိမ်ရောက်ငွေချေစနစ်ဖြင့် လွယ်ကူလျင်မြန်စွာ မှာယူလိုက်ပါ",
        orderSummaryTitle: "📦 မှာယူမည့် စာအုပ်များ",
        labelTotalPrice: "စုစုပေါင်း ကျသင့်ငွေ:",
        deliveryInfoTitle: "🚚 ပို့ဆောင်ရမည့် အချက်အလက်များ",
        labelName: "လက်ခံမည့်သူ အမည်",
        labelPhone: "ဆက်သွယ်ရမည့် ဖုန်းနံပါတ်",
        labelAddress: "ပို့ဆောင်ပေးရမည့် လိပ်စာ အပြည့်အစုံ",
        deliveryPartnerText: "ပို့ဆောင်ရေး: Royal Express ဖြင့် အိမ်အရောက် ပို့ဆောင်ပေးပါသည်",
        paymentBadgeText: "ငွေပေးချေမှု: အိမ်ရောက်ငွေချေ (Cash On Delivery)",
        confirmOrderBtn: "✓ အော်ဒါ အတည်ပြု တင်မည်",
        tabLogin: "အကောင့်ဝင်ရန်",
        tabRegister: "အကောင့်ဖွင့်ရန်",
        loginSubmitBtn: "Login ဝင်မည်",
        regSubmitBtn: "အကောင့်သစ် ဖွင့်မည်",
        successModalTitle: "အော်ဒါတင်ခြင်း အောင်မြင်ပါသည်!",
        successModalSub: "သင့်စာအုပ်များကို Royal Express ဖြင့် အမြန်ဆုံး အိမ်တိုင်ရာရောက် ပို့ဆောင်ပေးပါမည်။"
    },
    en: {
        brand: "📚 The Reading Homes",
        searchPlaceholder: "Search books...",
        themeBtn: "🌓 Theme",
        cartBtn: "🛒 Cart",
        loginBtn: "👤 Login",
        adminBtn: "⚙️ Admin",
        navOrders: "Orders",
        heroTitle: "The Reading Homes<br>The Light of Knowledge",
        heroDesc: "Browse previews of technical, mindset, and fiction books in one place and order easily with doorstep delivery.",
        titleSearch: "🔍 Search Results",
        titleTech: "💻 Technical & Programming",
        titleHealth: "🌿 Health & Mindset",
        titleHorror: "👻 Horror & Mystery",
        titleDrama: "🎭 Drama & Fiction",
        titleHumor: "😂 Humor & Comedy",
        titleRomance: "💖 Romance & Poetry",
        readBtn: "📖 Preview",
        addCartBtn: "🛒 Add Cart",
        myOrdersTitle: "My Order History",
        myOrdersSub: "Track your parcels delivered via Royal Express",
        cartModalTitle: "Shopping Cart & Checkout",
        cartModalSubtitle: "Convenient Cash On Delivery via Royal Express",
        orderSummaryTitle: "📦 Selected Books",
        labelTotalPrice: "Total Amount:",
        deliveryInfoTitle: "🚚 Delivery Information",
        labelName: "Full Name",
        labelPhone: "Contact Phone",
        labelAddress: "Full Delivery Address",
        deliveryPartnerText: "Delivery Partner: Doorstep Delivery via Royal Express",
        paymentBadgeText: "Payment: Cash On Delivery (COD)",
        confirmOrderBtn: "✓ Confirm Order",
        tabLogin: "Login",
        tabRegister: "Register",
        loginSubmitBtn: "Login",
        regSubmitBtn: "Create Account",
        successModalTitle: "Order Placed Successfully!",
        successModalSub: "Your books will be delivered to your doorstep via Royal Express."
    }
};

let cart = JSON.parse(localStorage.getItem("cart_items")) || [];
let currentLang = localStorage.getItem("lang") || "my";
let currentUser = JSON.parse(localStorage.getItem("current_user")) || null;
let isAdminAuthenticated = sessionStorage.getItem("is_admin_auth") === "true";
let currentFontSize = 1;

// Page Load
document.addEventListener("DOMContentLoaded", () => {
    updateLanguageUI();
    renderAllShelves();
    updateCartBadge();
    updateAuthUI();
    updateAdminVisibility();
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-theme");
    }
});

// Admin Visibility Controller
function updateAdminVisibility() {
    const adminBtn = document.getElementById("admin-nav-btn");
    if (adminBtn) {
        adminBtn.style.display = isAdminAuthenticated ? "inline-block" : "none";
    }
}

// ==========================================
// Admin Login & Management
// ==========================================
function handleAdminLogin(e) {
    e.preventDefault();
    const user = document.getElementById("admin-user-input").value.trim();
    const pass = document.getElementById("admin-pass-input").value;

    if (user === ADMIN_USERNAME && pass === ADMIN_PASSWORD) {
        isAdminAuthenticated = true;
        sessionStorage.setItem("is_admin_auth", "true");
        closeModal("auth-modal");
        updateAdminVisibility();
        openAdminDashboard();
        alert(currentLang === 'my' ? "Admin Login အောင်မြင်ပါသည်။" : "Admin logged in successfully.");
    } else {
        alert(currentLang === 'my' ? "Admin Username သို့မဟုတ် Password မှားယွင်းနေပါသည်။" : "Incorrect Admin credentials.");
    }
}

function adminLogout() {
    isAdminAuthenticated = false;
    sessionStorage.removeItem("is_admin_auth");
    updateAdminVisibility();
    closeModal("admin-modal");
    alert(currentLang === 'my' ? "Admin Dashboard မှ ထွက်ပြီးပါပြီ။" : "Admin logged out.");
}

function openAdminDashboard() {
    if (!isAdminAuthenticated) {
        return alert(currentLang === 'my' ? "Admin သီးသန့်ဖြစ်သောကြောင့် ဝင်ရောက်ခွင့်မရှိပါ။" : "Access denied. Admin only.");
    }
    renderAdminOrders();
    document.getElementById("admin-modal").style.display = "block";
}

// ==========================================
// Authentication (Customer)
// ==========================================
function openAuthModal() {
    document.getElementById("auth-modal").style.display = "block";
}

function switchAuthTab(tab) {
    const loginForm = document.getElementById("login-form");
    const regForm = document.getElementById("register-form");
    const adminForm = document.getElementById("admin-auth-form");

    const loginTabBtn = document.getElementById("tab-login-btn");
    const regTabBtn = document.getElementById("tab-register-btn");
    const adminTabBtn = document.getElementById("tab-admin-btn");

    loginForm.style.display = "none";
    regForm.style.display = "none";
    adminForm.style.display = "none";

    loginTabBtn.classList.remove("active");
    regTabBtn.classList.remove("active");
    adminTabBtn.classList.remove("active");

    if (tab === 'login') {
        loginForm.style.display = "block";
        loginTabBtn.classList.add("active");
    } else if (tab === 'register') {
        regForm.style.display = "block";
        regTabBtn.classList.add("active");
    } else if (tab === 'admin') {
        adminForm.style.display = "block";
        adminTabBtn.classList.add("active");
    }
}

function handleRegister(e) {
    e.preventDefault();
    const username = document.getElementById("reg-username").value.trim();
    const password = document.getElementById("reg-password").value;

    const users = JSON.parse(localStorage.getItem("bookstore_users")) || [];
    const exists = users.find(u => u.username.toLowerCase() === username.toLowerCase());

    if (exists) {
        return alert(currentLang === 'my' ? "ဤ Username ဖြင့် အကောင့်ဖွင့်ပြီးသား ဖြစ်နေပါသည်။ အခြားအမည် ရွေးချယ်ပေးပါ။" : "Username already exists. Please choose another.");
    }

    users.push({ username, password });
    localStorage.setItem("bookstore_users", JSON.stringify(users));

    alert(currentLang === 'my' ? "အကောင့်ဖွင့်ခြင်း အောင်မြင်ပါသည်။ Login ဝင်ရောက်နိုင်ပါပြီ။" : "Registration successful! Please login.");
    document.getElementById("register-form").reset();
    switchAuthTab('login');
}

function handleLogin(e) {
    e.preventDefault();
    const username = document.getElementById("login-username").value.trim();
    const password = document.getElementById("login-password").value;

    const users = JSON.parse(localStorage.getItem("bookstore_users")) || [];
    const user = users.find(u => u.username.toLowerCase() === username.toLowerCase() && u.password === password);

    if (user) {
        currentUser = { username: user.username };
        localStorage.setItem("current_user", JSON.stringify(currentUser));
        updateAuthUI();
        closeModal("auth-modal");
        alert(currentLang === 'my' ? `မင်္ဂလာပါ ${currentUser.username}၊ Login အောင်မြင်ပါသည်။` : `Welcome ${currentUser.username}, login successful!`);
    } else {
        alert(currentLang === 'my' ? "Username သို့မဟုတ် Password မှားယွင်းနေပါသည်။" : "Invalid username or password.");
    }
}

function handleLogout() {
    currentUser = null;
    localStorage.removeItem("current_user");
    updateAuthUI();
    alert(currentLang === 'my' ? "Logout လုပ်ဆောင်ပြီးပါပြီ။" : "Logged out successfully.");
}

function updateAuthUI() {
    const authNav = document.getElementById("auth-nav-container");
    if (currentUser) {
        authNav.innerHTML = `
            <div class="user-badge">
                <span>👤 <strong>${currentUser.username}</strong></span>
                <span class="logout-link" onclick="handleLogout()">Logout</span>
            </div>
        `;
    } else {
        authNav.innerHTML = `<button class="nav-btn auth-btn" onclick="openAuthModal()" id="login-nav-btn">${translations[currentLang].loginBtn}</button>`;
    }
}

// ==========================================
// Shelves & Book Cards
// ==========================================
function renderAllShelves() {
    renderShelf("shelf-tech", booksData.filter(b => b.category === "tech"));
    renderShelf("shelf-health", booksData.filter(b => b.category === "health"));
    renderShelf("shelf-horror", booksData.filter(b => b.category === "horror"));
    renderShelf("shelf-drama", booksData.filter(b => b.category === "drama"));
    renderShelf("shelf-humor", booksData.filter(b => b.category === "humor"));
    renderShelf("shelf-romance", booksData.filter(b => b.category === "romance"));
}

function renderShelf(containerId, books) {
    const el = document.getElementById(containerId);
    if (!el) return;
    el.innerHTML = books.map(book => createBookCardHTML(book)).join('');
}

function createBookCardHTML(book) {
    const title = currentLang === 'my' ? book.title : book.title_en;
    const author = currentLang === 'my' ? book.author : book.author_en;
    const readText = translations[currentLang].readBtn;
    const addCartText = translations[currentLang].addCartBtn;

    const baseImgName = book.cover.replace(/\.[^/.]+$/, ""); 

    return `
        <div class="book-card">
            <img src="${book.cover}" alt="${title}" class="book-cover" 
                 onerror="if(!this.dataset.triedPng){ this.dataset.triedPng=1; this.src='${baseImgName}.png'; } 
                          else if(!this.dataset.triedJpeg){ this.dataset.triedJpeg=1; this.src='${baseImgName}.jpeg'; }
                          else if(!this.dataset.triedWebp){ this.dataset.triedWebp=1; this.src='${baseImgName}.webp'; }
                          else { this.onerror=null; this.src='https://via.placeholder.com/120x175?text=Cover'; }">
            <h3 class="book-title">${title}</h3>
            <p class="book-author">${author}</p>
            <p class="book-price">${book.price.toLocaleString()} MMK</p>
            <div class="card-actions">
                <button class="read-btn" onclick="openReader(${book.id})">${readText}</button>
                <button class="add-cart-btn" onclick="addToCart(${book.id})">${addCartText}</button>
            </div>
        </div>
    `;
}

// Search Logic
function handleSearch() {
    const q = document.getElementById("search-input").value.toLowerCase().trim();
    const searchSection = document.getElementById("search-results-section");
    const defaultShelves = document.getElementById("default-shelves");
    const searchResultsList = document.getElementById("search-results-list");

    if (q === "") {
        searchSection.style.display = "none";
        defaultShelves.style.display = "block";
        return;
    }

    const filtered = booksData.filter(b => 
        b.title.toLowerCase().includes(q) || 
        b.title_en.toLowerCase().includes(q) || 
        b.author.toLowerCase().includes(q) ||
        b.author_en.toLowerCase().includes(q)
    );

    defaultShelves.style.display = "none";
    searchSection.style.display = "block";
    searchResultsList.innerHTML = filtered.length > 0 ? 
        filtered.map(b => createBookCardHTML(b)).join('') : 
        `<p style="padding:10px;">${currentLang === 'my' ? 'စာအုပ် ရှာမတွေ့ပါ။' : 'No books found.'}</p>`;
}

// ==========================================
// E-Reader Logic
// ==========================================
function openReader(bookId) {
    const book = booksData.find(b => b.id === bookId);
    if (!book) return;

    const container = document.getElementById("reader-container");
    const title = currentLang === 'my' ? book.title : book.title_en;
    const author = currentLang === 'my' ? book.author : book.author_en;
    const preview = currentLang === 'my' ? book.previewText : book.previewText_en;

    container.innerHTML = `
        <div class="reader-book-meta">
            <h2>${title}</h2>
            <p class="reader-book-author"><i class="fa-solid fa-pen-nib"></i> ${currentLang === 'my' ? 'ရေးသားသူ' : 'Author'} - <strong>${author}</strong></p>
        </div>
        <div class="reader-text-wrapper" id="reader-text-content">
            ${preview}
        </div>
        <div class="reader-bottom-action">
            <button class="submit-btn reader-order-btn" onclick="closeModal('reader-modal'); addToCart(${book.id}); openCart();">
                🛒 ${currentLang === 'my' ? 'စာအုပ်မှာယူမည်' : 'Order This Book'} (${book.price.toLocaleString()} MMK)
            </button>
        </div>
    `;
    document.getElementById("reader-modal").style.display = "block";
}

function adjustReaderFont(delta) {
    currentFontSize = Math.max(0.85, Math.min(1.4, currentFontSize + (delta * 0.1)));
    const content = document.getElementById("reader-text-content");
    if (content) {
        content.style.fontSize = currentFontSize + "rem";
    }
}

// ==========================================
// User My Orders History Logic
// ==========================================
function openMyOrders() {
    const allOrders = JSON.parse(localStorage.getItem("admin_orders")) || [];
    const myOrdersList = document.getElementById("my-orders-list");

    let userOrders = [];
    if (currentUser) {
        userOrders = allOrders.filter(o => o.user === currentUser.username);
    } else {
        userOrders = allOrders;
    }

    if (userOrders.length === 0) {
        myOrdersList.innerHTML = `
            <div style="text-align:center; padding:35px 20px; color:#888;">
                <i class="fa-solid fa-box-open" style="font-size:2.5rem; margin-bottom:10px; color:#ccc;"></i>
                <p>${currentLang === 'my' ? 'မှာယူထားသော အော်ဒါမှတ်တမ်း မရှိသေးပါ။' : 'No order records found.'}</p>
            </div>
        `;
    } else {
        myOrdersList.innerHTML = userOrders.slice().reverse().map(o => {
            const isDelivered = o.status === "Delivered";
            return `
                <div class="my-order-item-card">
                    <div class="my-order-item-header">
                        <div>
                            <strong style="color:#0d6efd;">#${o.id}</strong>
                            <span class="order-status-badge ${isDelivered ? 'status-delivered' : 'status-pending'}">
                                ${o.status || 'Pending'}
                            </span>
                        </div>
                        <span style="font-size:0.8rem; color:#888;">${o.date}</span>
                    </div>
                    <p style="margin:4px 0;"><strong>${currentLang === 'my' ? 'ပို့ဆောင်ရေး' : 'Delivery'}:</strong> <span style="color:#d97706; font-weight:bold;">🚚 ${o.courier || 'Royal Express'}</span></p>
                    <p style="margin:4px 0;"><strong>${currentLang === 'my' ? 'ပို့ဆောင်ရမည့် လိပ်စာ' : 'Address'}:</strong> ${o.address}</p>
                    <div style="margin-top:6px; border-top:1px dashed var(--border-color); padding-top:6px;">
                        <strong>${currentLang === 'my' ? 'စာအုပ်များ' : 'Books'}:</strong>
                        <ul style="padding-left:18px; margin:4px 0; font-size:0.85rem;">
                            ${o.items.map(i => `<li>${i.title} (x${i.qty}) - ${(i.price * i.qty).toLocaleString()} MMK</li>`).join('')}
                        </ul>
                    </div>
                    <div style="display:flex; justify-content:space-between; margin-top:8px; border-top:1px solid var(--border-color); padding-top:6px;">
                        <span><strong>${currentLang === 'my' ? 'စုစုပေါင်းငွေ' : 'Total'}:</strong></span>
                        <strong style="color:#dc3545;">${o.total.toLocaleString()} MMK</strong>
                    </div>
                </div>
            `;
        }).join('');
    }

    document.getElementById("my-orders-modal").style.display = "block";
}

// Telegram Integration
function sendOrderToTelegram(order, items) {
    if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) return;

    const itemsText = items.map(i => `• ${i.title} (${i.qty} အုပ်) - ${(i.price * i.qty).toLocaleString()} MMK`).join('\n');
    
    const message = `
📦 *အော်ဒါအသစ် ရောက်ရှိပါသည်!*
━━━━━━━━━━━━━━━
🆔 *Order ID:* \`${order.id}\`
👤 *ဝယ်ယူသူ:* ${order.customerName}
📞 *ဖုန်းနံပါတ်:* ${order.phone}
📍 *လိပ်စာ:* ${order.address}
🚚 *ပို့ဆောင်ရေး:* ${order.courier}
💳 *ငွေပေးချေမှု:* ${order.paymentMethod}
📅 *အချိန်:* ${order.date}

📚 *မှာယူထားသော စာအုပ်များ:*
${itemsText}

💰 *စုစုပေါင်း ကျသင့်ငွေ:* *${order.total.toLocaleString()} MMK*
━━━━━━━━━━━━━━━`;

    fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            chat_id: TELEGRAM_CHAT_ID,
            text: message,
            parse_mode: "Markdown"
        })
    }).catch(err => console.error("Telegram error:", err));
}

// ==========================================
// Cart & Checkout
// ==========================================
function addToCart(bookId) {
    const book = booksData.find(b => b.id === bookId);
    if (!book) return;
    const existing = cart.find(item => item.id === bookId);
    if (existing) {
        existing.qty += 1;
    } else {
        cart.push({ ...book, qty: 1 });
    }
    saveCart();
    alert(`"${currentLang === 'my' ? book.title : book.title_en}" ${currentLang === 'my' ? 'Cart ထဲ ထည့်ပြီးပါပြီ။' : 'added to cart.'}`);
}

function saveCart() {
    localStorage.setItem("cart_items", JSON.stringify(cart));
    updateCartBadge();
}

function updateCartBadge() {
    const totalCount = cart.reduce((sum, item) => sum + item.qty, 0);
    document.getElementById("cart-count").innerText = totalCount;
}

function openCart() {
    const list = document.getElementById("cart-items");
    let total = 0;
    list.innerHTML = cart.length === 0 ? `<p style="padding:15px; color:#888; text-align:center;">${currentLang === 'my' ? 'Cart ထဲတွင် စာအုပ်မရှိသေးပါ။' : 'Your cart is empty.'}</p>` : cart.map((item, index) => {
        total += item.price * item.qty;
        return `
            <div class="cart-item-row">
                <div style="flex:1;">
                    <strong>${currentLang === 'my' ? item.title : item.title_en}</strong>
                    <div style="font-size:0.85rem; color:#0d6efd; margin-top:2px;">${item.price.toLocaleString()} MMK</div>
                </div>
                <div class="cart-item-qty">
                    <button type="button" onclick="changeQty(${index}, -1)">-</button>
                    <span> ${item.qty} </span>
                    <button type="button" onclick="changeQty(${index}, 1)">+</button>
                </div>
            </div>
        `;
    }).join('');
    document.getElementById("cart-total-price").innerText = total.toLocaleString() + " MMK";
    document.getElementById("cart-modal").style.display = "block";
}

function changeQty(index, change) {
    cart[index].qty += change;
    if (cart[index].qty <= 0) cart.splice(index, 1);
    saveCart();
    openCart();
}

function handleCheckout(e) {
    e.preventDefault();
    if (cart.length === 0) return alert(currentLang === 'my' ? "Cart ထဲတွင် စာအုပ်မရှိပါ။" : "Your cart is empty.");

    const name = document.getElementById("cust-name").value.trim();
    const phone = document.getElementById("cust-phone").value.trim();
    const address = document.getElementById("cust-address").value.trim();

    let cleanPhone = phone.replace(/[\s\-]/g, "");
    if (cleanPhone.startsWith("+959")) cleanPhone = "09" + cleanPhone.substring(4);
    if (cleanPhone.startsWith("959")) cleanPhone = "09" + cleanPhone.substring(3);

    const mmPhoneRegex = /^09[0-9]{7,9}$/;
    if (!mmPhoneRegex.test(cleanPhone)) {
        return alert(currentLang === 'my' ? "တရားဝင် မြန်မာဖုန်းနံပါတ် (09xxxxxxxxx) ကိုသာ ရိုက်ထည့်ပေးပါ။" : "Please provide a valid Myanmar phone number (09xxxxxxxxx).");
    }

    const orderId = "ORD-" + Math.floor(100000 + Math.random() * 900000);
    const totalAmount = cart.reduce((sum, i) => sum + (i.price * i.qty), 0);
    const orderDate = new Date().toLocaleString();

    const order = {
        id: orderId,
        customerName: name,
        user: currentUser ? currentUser.username : "Guest",
        phone: cleanPhone,
        address: address,
        courier: "Royal Express",
        paymentMethod: "Cash on Delivery (အိမ်ရောက်ငွေချေ)",
        status: "Pending",
        items: [...cart],
        total: totalAmount,
        date: orderDate
    };

    const orders = JSON.parse(localStorage.getItem("admin_orders")) || [];
    orders.push(order);
    localStorage.setItem("admin_orders", JSON.stringify(orders));

    const orderedItems = [...cart];
    sendOrderToTelegram(order, orderedItems);

    cart = [];
    saveCart();
    closeModal('cart-modal');
    document.getElementById("checkout-form").reset();

    showOrderSuccess(order, orderedItems);
}

function showOrderSuccess(order, items) {
    const detailsContainer = document.getElementById("order-success-details");
    const itemsListHtml = items.map(i => `<li>${currentLang === 'my' ? i.title : i.title_en} (${i.qty} အုပ်) - <strong>${(i.price * i.qty).toLocaleString()} MMK</strong></li>`).join('');

    detailsContainer.innerHTML = `
        <div style="display:flex; justify-content:space-between; margin-bottom:8px; border-bottom:1px dashed var(--border-color); padding-bottom:6px;">
            <span>${currentLang === 'my' ? 'အော်ဒါနံပါတ်' : 'Order ID'}:</span>
            <strong style="color:#0d6efd;">${order.id}</strong>
        </div>
        <p><strong>${currentLang === 'my' ? 'မှာယူသူ' : 'Customer'}:</strong> ${order.customerName}</p>
        <p><strong>${currentLang === 'my' ? 'ဖုန်းနံပါတ်' : 'Phone'}:</strong> ${order.phone}</p>
        <p><strong>${currentLang === 'my' ? 'လိပ်စာ' : 'Address'}:</strong> ${order.address}</p>
        <p><strong>${currentLang === 'my' ? 'ပို့ဆောင်ရေး' : 'Courier'}:</strong> <span style="color:#d97706; font-weight:bold;">🚚 ${order.courier}</span></p>
        <p><strong>${currentLang === 'my' ? 'ငွေပေးချေမှု' : 'Payment'}:</strong> <span style="color:#198754; font-weight:bold;">${order.paymentMethod}</span></p>
        <div style="margin-top: 10px;">
            <strong>${currentLang === 'my' ? 'မှာယူထားသော စာအုပ်များ' : 'Purchased Items'}:</strong>
            <ul style="padding-left: 20px; margin: 6px 0;">${itemsListHtml}</ul>
        </div>
        <div style="display:flex; justify-content:space-between; margin-top:12px; border-top:1px solid var(--border-color); padding-top:8px;">
            <span><strong>${currentLang === 'my' ? 'စုစုပေါင်း ကျသင့်ငွေ' : 'Total Amount'}:</strong></span>
            <strong style="color:#dc3545; font-size:1.1rem;">${order.total.toLocaleString()} MMK</strong>
        </div>
    `;

    document.getElementById("order-success-modal").style.display = "block";
}

// ==========================================
// Admin Dashboard
// ==========================================
function switchAdminTab(tab) {
    const ordersTab = document.getElementById("admin-orders-tab");
    const addbookTab = document.getElementById("admin-addbook-tab");
    const ordersTabBtn = document.getElementById("admin-tab-orders-btn");
    const addbookTabBtn = document.getElementById("admin-tab-addbook-btn");

    if (tab === 'orders') {
        ordersTab.style.display = "block";
        addbookTab.style.display = "none";
        ordersTabBtn.classList.add("active");
        addbookTabBtn.classList.remove("active");
        renderAdminOrders();
    } else {
        ordersTab.style.display = "none";
        addbookTab.style.display = "block";
        ordersTabBtn.classList.remove("active");
        addbookTabBtn.classList.add("active");
    }
}

function renderAdminOrders() {
    const orders = JSON.parse(localStorage.getItem("admin_orders")) || [];
    document.getElementById("admin-orders-count").innerText = orders.length;
    const list = document.getElementById("admin-orders-list");

    list.innerHTML = orders.length === 0 ? 
        `<div style="text-align:center; padding:30px; color:#888;">လက်ရှိတွင် အော်ဒါမှတ်တမ်း မရှိသေးပါ။</div>` : 
        orders.slice().reverse().map((o, revIndex) => {
            const actualIndex = orders.length - 1 - revIndex;
            const isDelivered = o.status === "Delivered";
            return `
                <div class="admin-order-card">
                    <div class="admin-order-header">
                        <div>
                            <strong style="color: #0d6efd; font-size:1rem;">#${o.id}</strong>
                            <span class="order-status-badge ${isDelivered ? 'status-delivered' : 'status-pending'}">
                                ${o.status || 'Pending'}
                            </span>
                        </div>
                        <span style="font-size:0.8rem; color:#888;">${o.date}</span>
                    </div>

                    <div class="admin-order-body">
                        <p><strong>ဝယ်ယူသူ:</strong> ${o.customerName} (📞 <strong>${o.phone}</strong>)</p>
                        <p><strong>User Account:</strong> ${o.user || 'Guest'}</p>
                        <p><strong>ပို့ဆောင်ရေး:</strong> <span style="color:#d97706; font-weight:bold;">🚚 ${o.courier || 'Royal Express'}</span></p>
                        <p><strong>လိပ်စာ:</strong> ${o.address || 'မရှိပါ'}</p>
                        <p><strong>ငွေပေးချေမှု:</strong> ${o.paymentMethod || 'COD'}</p>
                        <p><strong>မှာယူထားသော စာအုပ်များ:</strong> ${o.items.map(i => `${i.title} (x${i.qty})`).join(', ')}</p>
                        <p style="margin-top:6px; font-size:0.95rem;"><strong>စုစုပေါင်း ကျသင့်ငွေ:</strong> <strong style="color:#dc3545;">${o.total.toLocaleString()} MMK</strong></p>
                    </div>

                    <div class="admin-order-actions">
                        <button class="status-toggle-btn" onclick="toggleOrderStatus(${actualIndex})">
                            ${isDelivered ? '↩ Mark as Pending' : '✓ Mark as Delivered'}
                        </button>
                        <button class="delete-order-btn" onclick="deleteOrder(${actualIndex})">
                            🗑 Delete
                        </button>
                    </div>
                </div>
            `;
        }).join('');
}

function toggleOrderStatus(index) {
    const orders = JSON.parse(localStorage.getItem("admin_orders")) || [];
    if (orders[index]) {
        orders[index].status = orders[index].status === "Delivered" ? "Pending" : "Delivered";
        localStorage.setItem("admin_orders", JSON.stringify(orders));
        renderAdminOrders();
    }
}

function deleteOrder(index) {
    if (confirm("ဤအော်ဒါကို အပြီးဖျက်လိုပါသလား?")) {
        const orders = JSON.parse(localStorage.getItem("admin_orders")) || [];
        orders.splice(index, 1);
        localStorage.setItem("admin_orders", JSON.stringify(orders));
        renderAdminOrders();
    }
}

function clearAllOrders() {
    if (confirm("အော်ဒါအားလုံးကို ရှင်းလင်းဖျက်ပစ်လိုပါသလား?")) {
        localStorage.removeItem("admin_orders");
        renderAdminOrders();
    }
}

function handleAddNewBook(e) {
    e.preventDefault();
    const title = document.getElementById("new-book-title").value.trim();
    const title_en = document.getElementById("new-book-title-en").value.trim();
    const author = document.getElementById("new-book-author").value.trim();
    const author_en = document.getElementById("new-book-author-en").value.trim();
    const category = document.getElementById("new-book-category").value;
    const price = parseInt(document.getElementById("new-book-price").value);
    const cover = document.getElementById("new-book-cover").value.trim();
    const preview = document.getElementById("new-book-preview").value.trim();

    const newBook = {
        id: Date.now(),
        title,
        title_en,
        author,
        author_en,
        category,
        price,
        cover,
        previewText: preview,
        previewText_en: preview
    };

    booksData.unshift(newBook);
    localStorage.setItem("custom_books_data", JSON.stringify(booksData));

    alert("စာအုပ်အသစ် ထည့်သွင်းခြင်း အောင်မြင်ပါသည်။");
    document.getElementById("admin-addbook-form").reset();
    renderAllShelves();
    switchAdminTab('orders');
}

// ==========================================
// Controls & Language
// ==========================================
function closeModal(id) {
    const modal = document.getElementById(id);
    if (modal) modal.style.display = "none";
}

function toggleTheme() {
    document.body.classList.toggle("dark-theme");
    localStorage.setItem("theme", document.body.classList.contains("dark-theme") ? "dark" : "light");
}

function toggleLanguage() {
    currentLang = currentLang === "my" ? "en" : "my";
    localStorage.setItem("lang", currentLang);
    document.getElementById("lang-btn").innerText = currentLang === "my" ? "EN" : "MY";
    updateLanguageUI();
    renderAllShelves();
    updateAuthUI();
}

function updateLanguageUI() {
    const t = translations[currentLang];
    document.getElementById("nav-brand").innerText = t.brand;
    document.getElementById("search-input").placeholder = t.searchPlaceholder;
    document.getElementById("theme-btn").innerText = t.themeBtn;
    document.getElementById("admin-nav-btn").innerText = t.adminBtn;
    document.getElementById("label-nav-orders").innerText = t.navOrders;
    document.getElementById("hero-title").innerHTML = t.heroTitle;
    document.getElementById("hero-desc").innerText = t.heroDesc;
    document.getElementById("title-search").innerText = t.titleSearch;
    document.getElementById("title-tech").innerText = t.titleTech;
    document.getElementById("title-health").innerText = t.titleHealth;
    document.getElementById("title-horror").innerText = t.titleHorror;
    document.getElementById("title-drama").innerText = t.titleDrama;
    document.getElementById("title-humor").innerText = t.titleHumor;
    document.getElementById("title-romance").innerText = t.titleRomance;

    document.getElementById("my-orders-modal-title").innerText = t.myOrdersTitle;
    document.getElementById("my-orders-modal-sub").innerText = t.myOrdersSub;

    document.getElementById("cart-modal-title").innerText = t.cartModalTitle;
    document.getElementById("cart-modal-subtitle").innerText = t.cartModalSubtitle;
    document.getElementById("order-summary-title").innerText = t.orderSummaryTitle;
    document.getElementById("label-total-price").innerText = t.labelTotalPrice;
    document.getElementById("delivery-info-title").innerText = t.deliveryInfoTitle;
    document.getElementById("label-name").innerText = t.labelName;
    document.getElementById("label-phone").innerText = t.labelPhone;
    document.getElementById("label-address").innerText = t.labelAddress;
    document.getElementById("delivery-partner-text").innerText = t.deliveryPartnerText;
    document.getElementById("payment-badge-text").innerText = t.paymentBadgeText;
    document.getElementById("confirm-order-btn").innerText = t.confirmOrderBtn;

    document.getElementById("tab-login-btn").innerText = t.tabLogin;
    document.getElementById("tab-register-btn").innerText = t.tabRegister;
    document.getElementById("login-submit-btn").innerText = t.loginSubmitBtn;
    document.getElementById("reg-submit-btn").innerText = t.regSubmitBtn;
    document.getElementById("success-modal-title").innerText = t.successModalTitle;
    document.getElementById("success-modal-sub").innerText = t.successModalSub;
}