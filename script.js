// စာအုပ်ဒေတာများ (Preview & Best Highlights Review)
const booksData = [
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
        previewText_en: `PHP powers major platforms like Facebook and Wikipedia, serving as the foundational server-side language of the modern web.

🌟 Key Highlights:
• Clear distinctions between the Web and Internet infrastructure.
• The 3 pillars of Web Architecture: Client, Server, and HTTP Protocol.
• Practical understanding of GET and POST request methods.`
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
        previewText_en: `Laravel makes PHP web development clean, expressive, and elegant through its MVC architecture and rich ecosystem.

🌟 Key Highlights:
• Core PHP OOP concepts and modern object instantiation.
• "Convention Over Configuration" standard naming conventions.
• Clean structure for classes, methods, and database relationships.`
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
• လူသားတို့၏ ဉာဏ်စွမ်းကို အယ်လ်ဂိုရီသမ်များဖြင့် ဆတိုးပွားစေပြီး Customer ရှာဖွေမှုနှင့် ဆုံးဖြတ်ချက်များကို အလိုအလျောက် ဆောင်ရွက်နိုင်ပုံ။

💡 ဖတ်ရှုသင့်သူများ: လုပ်ငန်းခွင်အတွင်း AI နည်းပညာဖြင့် စျေးကွက်အသာစီး ရယူလိုသော စီးပွားရေးလုပ်ငန်းရှင်များအတွက် လက်စွဲစာအုပ် ဖြစ်ပါသည်။`,
        previewText_en: `A practical business guide bridging complex AI informatics into commercial strategies.

🌟 Key Highlights:
• Big Data as the fuel and Analytics as the combustion engine.
• Milestones of AI development from Deep Blue to AlphaGo Zero.
• Automating customer prospecting and scaling business intelligence.`
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
• စိတ်ထဲ စွဲကျန်နေသော အတိတ်မှ ဝန်ထုပ်ဝန်ပိုးများနှင့် အကြွေးများကို အလှူဒါနဖြင့် စိတ်သက်သာရာ ရစေပုံ။
• ဆက်ဆံရေးများတွင် မပြတ်မသား ရှောင်ပြေးခြင်း (Ghosting) မလုပ်ဘဲ ရိုးသားစွာ ရင်ဆိုင်ဖြေရှင်းနည်း။

💡 ဖတ်ရှုသင့်သူများ: စိတ်ဖိစီးမှုများကြားမှ မိမိကိုယ်ကို ပြန်လည်ကုစား (Heal) လိုသူများအတွက် စိတ်ခွန်အားပေး စာအုပ်ဖြစ်ပါသည်။`,
        previewText_en: `A heartfelt guide on finding peace, letting go of guilt, and nurturing emotional clarity amidst modern life pressures.

🌟 Key Highlights:
• Cultivating self-forgiveness over accidental past mistakes.
• Releasing lingering emotional burdens and mental debts.
• Integrity, honesty, and healthy communication in relationships.`
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
• အတွေးလွန်ခြင်းသည် ပုံမှန် စဉ်းစားတွေးခေါ်မှုမဟုတ်ဘဲ အသိတရားကို ဖုံးကွယ်သွားစေသည့် စိတ်သံသရာ (Loop) ဖြစ်ပုံ။
• ကျန်းမာရေး သောကများမှတစ်ဆင့် မလိုအပ်ဘဲ အတွေးပွားပြီး စိတ်ဓာတ်ကျဆင်းလာရသည့် အကြောင်းရင်းများ။
• မဖိတ်ခေါ်ဘဲ ဝင်လာသော အတွေးဆိုးများကို သတိပြုမိပြီး စနစ်တကျ လွှတ်ချနိုင်မည့် နည်းစနစ်များ။

💡 ဖတ်ရှုသင့်သူများ: စိုးရိမ်သောကများပြီး အမြဲ အတွေးလွန်တတ်သူများအတွက် စိတ်အေးချမ်းမှု ရရှိစေမည့် စာအုပ် ဖြစ်ပါသည်။`,
        previewText_en: `Overcome mental exhaustion and intrusive anxiety by breaking the repetitive loops of overthinking.

🌟 Key Highlights:
• Understanding the destructive loop of cognitive overthinking.
• Avoiding meta-worry and catastrophic scenario planning.
• Practical grounding techniques to regain present-moment focus.`
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
        previewText: `အသက် ၄၀ ကျော်အရွယ်တွင် ကျန်းမာပျော်ရွှင်စွာဖြင့် သက်ရှည်ကျန်းမာစေရန် လိုက်နာရမည့် ဆေးပညာပေး လမ်းညွှန်ချက်များနှင့် သုတေသနများ ဖြစ်ပါသည်။

🌟 အကောင်းဆုံး ကောက်နုတ်ချက်နှင့် အနှစ်ချုပ် (Highlights):
• အသက် ၇၀ မှ ၉၀ ကျော်အထိ ကမ္ဘာကျော် စွမ်းဆောင်ချက်များ ပြုလုပ်ခဲ့ကြသည့် သမိုင်းဝင် ပုဂ္ဂိုလ်ကြီးများ၏ အထ္ထုပ္ပတ္တိများ။
• အစားအသောက် လျှော့စားခြင်း (Caloric Restriction) ဖြင့် ဆဲလ်များ သက်တမ်းရှည်စေပုံ။
• နှလုံး၊ သွေးကြောစနစ် ထိန်းသိမ်းခြင်းနှင့် ဦးနှောက်မှတ်ဉာဏ် မယိုယွင်းစေရန် နေထိုင်နည်း လမ်းညွှန်များ။

💡 ဖတ်ရှုသင့်သူများ: အသက် ၄၀ ကျော် အရွယ်များနှင့် မိဘဘိုးဘွားများ သက်ရှည်ကျန်းမာစေရန် လက်ဆောင်ပေးဖတ်သင့်သော စာအုပ် ဖြစ်ပါသည်။`,
        previewText_en: `Evidence-based medical advice and longevity wisdom tailored for graceful, active aging past forty.

🌟 Key Highlights:
• Inspiring achievements of global figures thriving in their 70s, 80s, and 90s.
• Caloric moderation for metabolic health and cellular longevity.
• Essential cardiovascular care and cognitive fitness practices.`
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
        previewText: `ကိုယ့်ရဲ့ အတွင်းစိတ် တုန်ခါမှု (Vibration & Frequency) ကို မြှင့်တင်ပြီး ပိုမိုကောင်းမွန်သော ဘဝကို ပိုင်ဆိုင်နိုင်စေမည့် ကမ္ဘာကျော် စာအုပ်ကောင်း ဖြစ်ပါသည်။

🌟 အကောင်းဆုံး ကောက်နုတ်ချက်နှင့် အနှစ်ချုပ် (Highlights):
• ပျော်ရွှင်မှုကို အပြင်ဘက်တွင် လိုက်ရှာမနေဘဲ မိမိအတွင်းစိတ်မှ စတင်တည်ဆောက်နည်း။
• အဆိုးမြင် Toxic ပတ်ဝန်းကျင်ကို ရှောင်ရှားပြီး အပြုသဘောဆောင်သူများနှင့် ပေါင်းသင်းခြင်း။
• Power Pose ကဲ့သို့သော ကိုယ်ဟန်အမူအရာ ပြောင်းလဲခြင်းဖြင့် စိတ်ဖိစီးမှု ဟော်မုန်းများ လျှော့ချနည်း။

💡 ဖတ်ရှုသင့်သူများ: ဘဝကို အကောင်းမြင်စိတ်ဖြင့် အသစ်တဖန် ပြောင်းလဲလိုသူတိုင်း ဖတ်ရှုသင့်ပါသည်။`,
        previewText_en: `Master self-love, conquer inner resistance, and elevate your personal frequency for true fulfillment.

🌟 Key Highlights:
• Raising emotional frequency from lower vibes to gratitude and joy.
• Curating positive, encouraging relationships and environments.
• The power of intentional solitude and confident body language.`
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
        previewText: `အင်းစိန်ထောင်အတွင်း နိုင်ငံရေးအကျဉ်းသားတစ်ဦးအဖြစ် ဖြတ်သန်းခဲ့ရစဉ် ကြုံတွေ့ခဲ့ရသော ထိတ်လန့်ချောက်ချားဖွယ် ပရလောက ကိုယ်တွေ့ဖြစ်ရပ်မှန်များ ဖြစ်ပါသည်။

🌟 အကောင်းဆုံး ကောက်နုတ်ချက်နှင့် အနှစ်ချုပ် (Highlights):
• အင်းစိန်ထောင် မိန်းဂျေးလ်လမ်းမကြီး၏ မူဆန်းသော စည်းမျဉ်းများနှင့် ကင်းမျှော်စင် အငွေ့အသက်များ။
• နေရာအခက်အခဲကြောင့် သေဒဏ်ကျ ကြိုးတိုက် (Death Row) သို့ စတင် ပို့ဆောင်ခံရစဉ် ခံစားခဲ့ရသော ထိတ်လန့်ဖွယ် စိတ်ခံစားမှု။
• အကျဉ်းသားများ အချင်းချင်းကြား ပြောစမှတ်ပြုခဲ့သည့် ထောင်တွင်း ပရလောက ဖြစ်ရပ်ဆိုးများ။

💡 ဖတ်ရှုသင့်သူများ: ထောင်တွင်းသမိုင်းနောက်ခံနှင့် သည်းထိတ်ရင်ဖို ပရလောက ဖြစ်ရပ်မှန်များကို စိတ်ဝင်စားသူများအတွက် ဖြစ်ပါသည်။`,
        previewText_en: `Chilling firsthand memoirs and supernatural occurrences inside the walls of Insein Prison.

🌟 Key Highlights:
• Strict prison lore surrounding the Main Jail avenue and watchtowers.
• The haunting tension of being transferred into Death Row cell blocks.
• Real-life supernatural encounters documented from behind bars.`
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
        previewText: `ကပ်ရောဂါနှင့် စီးပွားရေး အကျပ်အတည်းများကြားတွင် မိသားစုအတွက် ရုန်းကန်နေရသော အမျိုးသမီးနှစ်ဦး၏ သံယောဇဉ်နှင့် စွန့်လွှတ်စွန့်စားမှု ဒရာမာဝတ္ထု ဖြစ်ပါသည်။

🌟 အကောင်းဆုံး ကောက်နုတ်ချက်နှင့် အနှစ်ချုပ် (Highlights):
• ကိုယ်ဝန်ဆောင် အိဆွေနှင့် သူမ၏ သူငယ်ချင်း ရဲတို့ကြားမှ ခိုင်မာသော သံယောဇဉ်နှင့် ကတိစကားများ။
• ကပ်ရောဂါကာလအတွင်း ဆင်းရဲနွမ်းပါးသူများ၏ ခက်ခဲကြမ်းတမ်းလှသော လူမှုဘဝ ရုန်းကန်ရမှုများ။
• "ဒီကမ္ဘာကြီးက အရာရှိတွေရဲ့ ကမ္ဘာပါ... ငါတို့လို သာမန်လူတွေအတွက် နေရာမရှိဘူး" ဟူသော ဆွေးမြည့်ဖွယ် ဘဝအမြင်။

💡 ဖတ်ရှုသင့်သူများ: ခေတ်ကာလ၏ အမှန်တရားနှင့် လူမှုဘဝ ရသဝတ္ထုများကို နှစ်သက်သူများအတွက် အထူးကောင်းမွန်ပါသည်။`,
        previewText_en: `A gripping suburban drama exploring sacrifice, survival, and maternal bonds in difficult economic times.

🌟 Key Highlights:
• The poignant relationship and solemn promises between two struggling women.
• Emotional struggles of poverty and resilience during crisis times.
• A bittersweet critique of social inequality and survival.`
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
        previewText: `မိုးသက်မုန်တိုင်းကြား မိခင်ဖြစ်သူ ရေနစ်သေဆုံးသွားခဲ့သည့် အတိတ်ဆိုးနှင့် နှစ်ပေါင်းများစွာကြာမှ ပေါ်ထွက်လာသော တရားခံအစစ်၏ သည်းထိတ်ရင်ဖို ဝတ္ထု ဖြစ်ပါသည်။

🌟 အကောင်းဆုံး ကောက်နုတ်ချက်နှင့် အနှစ်ချုပ် (Highlights):
• မိုးသက်မုန်တိုင်းနှင့် ရေကန်ထဲတွင် အသက်မဲ့စွာ လဲလျောင်းနေသော မိခင်ကို ကယ်တင်ရန် ကြိုးစားခဲ့သည့် ထိတ်လန့်ဖွယ် ညဉ့်နက်ပိုင်း။
• နှစ်ပေါင်းများစွာကြာပြီးနောက် စုံထောက်တစ်ဦးမှ ဖော်ထုတ်ပေးလိုက်သော မထင်မှတ်ထားသည့် အမှုမှန်။
• အချစ်လွန်ကဲရာမှ သံသရာလည်လာသော သံသယစိတ်နှင့် လူသတ်မှု၏ ကြောက်မက်ဖွယ် အဆုံးသတ်။

💡 ဖတ်ရှုသင့်သူများ: လျှို့ဝှက်သည်းထိတ်ရင်ဖို (Mystery Thriller) ဇာတ်လမ်းကြိုက်သူများ လက်မလွှတ်သင့်သော စာအုပ် ဖြစ်ပါသည်။`,
        previewText_en: `A chilling supernatural mystery of a daughter haunted by her mother's drowning and the dark truth discovered years later.

🌟 Key Highlights:
• A haunting opening sequence amidst a raging midnight storm.
• The sudden revelation by investigators identifying the shocking culprit.
• The destructive path of toxic jealousy and family betrayal.`
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
        previewText: `မီးတောက်မီးလျှံများ ဝန်းရံနေသည့် အိပ်မက်ဆိုးတစ်ခုမှ စတင်ကာ ဘေးအိမ်မှ ထူးဆန်းထိတ်လန့်ဖွယ် ဖြစ်ရပ်ဆိုးများနှင့် ရင်ဆိုင်ရသော ဇာတ်လမ်း ဖြစ်ပါသည်။

🌟 အကောင်းဆုံး ကောက်နုတ်ချက်နှင့် အနှစ်ချုပ် (Highlights):
• မီးခိုးငွေ့များနှင့် လောင်ကျွမ်းသံများကြားမှ သေလုမျောပါး လန့်နိုးလာရသည့် အလွန်လက်တွေ့ဆန်သော အိပ်မက်ဆိုး။
• အေးချမ်းလှသော မနက်ခင်း နံနက်စာ စားပွဲကြားတွင်ပင် ဖျောက်ဖျက်မရသည့် စိုးရိမ်တုန်လှုပ်ဖွယ် စိတ်ခံစားမှု။
• ဘေးအိမ်မှ တိတ်တဆိတ် စတင်လာသော ပရလောက၏ ထူးဆန်းသော သတိပေးချက်များ။

💡 ဖတ်ရှုသင့်သူများ: အိမ်နီးချင်း ပရလောက ထိတ်လန့်ဖွယ် ဇာတ်လမ်းများကို ဖတ်ရှုလိုသူများအတွက် ဖြစ်ပါသည်။`,
        previewText_en: `Terrifying nightmares of being trapped in roaring flames foretell eerie supernatural occurrences next door.

🌟 Key Highlights:
• Intense sensory description of waking from a claustrophobic fire nightmare.
• The contrast between peaceful morning normalcy and looming dread.
• Mysterious paranormal omens unfolding from the house next door.`
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
        previewText: `အင်းဝနေပြည်တော်ခေတ် သမိုင်းဝင် အကျဉ်းသားတစ်ဦးနှင့် နှစ်ပေါင်းရာနှင့်ချီ ဆက်စပ်နေသော ပဟေဠိဆန်သည့် နန်းတွင်း ကျိန်စာဝတ္ထု ဖြစ်ပါသည်။

🌟 အကောင်းဆုံး ကောက်နုတ်ချက်နှင့် အနှစ်ချုပ် (Highlights):
• သက္ကရာဇ် ၈၈၀ ပြည့်နှစ် အင်းဝခေတ် ဧရာဝတီမြစ်ကမ်းဘေး မီးတောက်များကြားမှ စတင်ခဲ့သော သမိုင်းဝင် ပဟေဠိ။
• ဖခင်ကို တစ်ခါမျှ မမြင်ဖူးဘဲ ကြီးပြင်းလာသည့် ရိုးသားသော ရွာသား မောင်သုတထံ ရောက်လာသည့် နန်းတွင်းဖိတ်ခေါ်မှု။
• နေပြည်တော်သို့ ရောက်ရှိချိန်တွင် တဖြည်းဖြည်း ပေါ်ပေါက်လာသော ရှေးဟောင်း လျှို့ဝှက်ဆန်းကြယ် ကံကြမ္မာများ။

💡 ဖတ်ရှုသင့်သူများ: သမိုင်းနောက်ခံ ရှေးဟောင်း လျှို့ဝှက်ဆန်းကြယ် ဇာတ်လမ်းများကို မြတ်နိုးသူများအတွက် ဖြစ်ပါသည်။`,
        previewText_en: `Historical occult intrigue spanning centuries from the ancient Kingdom of Inwa.

🌟 Key Highlights:
• An ancient curse tied to a foreign prisoner in the royal dungeons in 880 ME.
• A humble village youth summoned unexpectedly to the capital city.
• Unearthing royal conspiracies and dark historical legacies.`
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
        previewText: `အထက်အညာ ကျေးလက်ဒေသရှိ ရိုးရှင်းဖြူစင်သော ရွာသူရွာသားများ၏ ပျော်ရွှင်ဖွယ် အလွဲများနှင့် ရယ်ရွှင်ဖွယ် ဟာသဇာတ်လမ်းတိုများ ဖြစ်ပါသည်။

🌟 အကောင်းဆုံး ကောက်နုတ်ချက်နှင့် အနှစ်ချုပ် (Highlights):
• တန်ဆောင်မုန်း ဘုရားပွဲတော်နှင့် ဘောလုံးပွဲ အငြင်းပွားမှုကို ရွာ့ဟာသဉာဏ်ကြီးရှင် မောင်အေးက ဉာဏ်ပညာရှိစွာ ညှိနှိုင်းပေးပုံ။
• မနက်ပိုင်း ကုသိုလ်ယူ၊ နေ့လယ် ဘောလုံးပွဲ အားပေးပြီး ညဘက် ဇာတ်ပွဲကြည့်ကာ တစ်ရွာလုံး စည်းလုံးပျော်ရွှင်သွားကြပုံ။
• ကျေးလက်ဒေသ၏ ပကတိ ရိုးသားကြည်လင်သော ရယ်မောစရာ အငွေ့အသက်များ။

💡 ဖတ်ရှုသင့်သူများ: စိတ်လက်ပေါ့ပါးပြီး အမောပြေ ရယ်မောလိုသူတိုင်း ဖတ်ရှုသင့်သော ဟာသစာအုပ် ဖြစ်ပါသည်။`,
        previewText_en: `A lively collection of warm-hearted and witty humorous tales from rural upper Myanmar.

🌟 Key Highlights:
• Quick-witted Maung Aye uniting the village during the Tazaungmone festival.
• Balancing traditional pagoda merits with village football matches and comedy theater.
• Refreshing countryside laughter and community charm.`
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
        previewText: `ရုပ်ရှင်ရိုက်ကွင်း နောက်ကွယ်က တကယ့်အလွဲများနှင့် ကင်မရာရှေ့ ဒရာမာ ဝမ်းနည်းခန်းများကြားမှ ရယ်မောစရာ ဖြစ်ရပ်မှန် အမှတ်တရများ ဖြစ်ပါသည်။

🌟 အကောင်းဆုံး ကောက်နုတ်ချက်နှင့် အနှစ်ချုပ် (Highlights):
• "ဖြတ် (Cut)" ဟု အော်လိုက်သည်နှင့် မျက်ရည်များ ပျောက်ကွယ်သွားကာ အားရပါးရ ရယ်မောကြသည့် ရိုက်ကွင်းမြင်ကွင်းများ။
• မျက်လုံးထဲ ဖုန်ဝင်သွား၍ မျက်ရည်ထွက်ကာ ဇာတ်ဝင်ခန်း ဆက်ရိုက်ခဲ့ရသည့် အလွဲများ။
• စကားလုံးများ မှားယွင်းရောထွေးရင်း ရိုက်ကူးရေး တစ်ဖွဲ့လုံး အူတက်အောင် ရယ်ခဲ့ရသည့် အမှတ်တရများ။

💡 ဖတ်ရှုသင့်သူများ: စာရေးဆရာ နီကိုရဲ၏ ပြောင်မြောက်သော ဟာသအရေးအသားများကို နှစ်သက်သူများအတွက် ဖြစ်ပါသည်။`,
        previewText_en: `Brilliant comedic behind-the-scenes memoirs from Myanmar film production sets by Niko Ye.

🌟 Key Highlights:
• The hilarious instant shift from heavy dramatic crying to set-wide laughter upon calling "Cut".
• Unpredictable bloopers, dust-induced tears, and tongue-tied takes.
• The vibrant, humorous essence of the filmmaking industry.`
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
        previewText: `မင်းထက် ပြည့်စုံသူတွေ ရှိနိုင်ပေမယ့် မင်းကိုသာ ရွေးချယ်ခဲ့သည့် စစ်မှန်သော ချစ်ခြင်းနှင့် နေကြာပန်းဝါလေးများ၏ အဓိပ္ပာယ်ကို ဖော်ကျူးထားသော အချစ်ဝတ္ထု ဖြစ်ပါသည်။

🌟 အကောင်းဆုံး ကောက်နုတ်ချက်နှင့် အနှစ်ချုပ် (Highlights):
• "မင်းက နေ့ရောညပါ အမြဲတည်ရှိနေတဲ့ ငါ့ရဲ့ ပျော်ရွှင်ခြင်းလေးပါ" ဟူသော ချစ်ခြင်း၏ ဝန်ခံချက်။
• စိတ်ထဲ ပူပန်မှုများ လျော့ကျစေရန် အကောင်းမြင်စိတ် မွေးမြူနည်းနှင့် နူးညံ့သိမ်မွေ့သော သဘာဝတရား အလှတရားများ။
• ပိုင်ဆိုင်လိုစိတ် ကင်းစင်စွာဖြင့် ချစ်ရသူ အမြဲ ပျော်ရွှင်စေရန် ဆုတောင်းပေးသည့် အဝါရောင် ပန်းပွင့်လေးများ၏ မေတ္တာ။

💡 ဖတ်ရှုသင့်သူများ: နူးညံ့ပြီး စိတ်ကို အေးချမ်းစေမည့် အချစ်ဝတ္ထုတိုများကို နှစ်သက်သူများအတွက် ဖြစ်ပါသည်။`,
        previewText_en: `A gentle poetic romance of unconditional affection, personal healing, and sunflower-like devotion.

🌟 Key Highlights:
• Heartfelt confessions of choosing one special person above all else.
• Gentle mindful reminders to cultivate inner peace and calm anxieties.
• Loving without possessiveness—wishing pure happiness for the beloved.`
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
        previewText: `ဂုဏ်ဒြပ်နှင့် ပကာသနများကို တံခါးဝတွင် ထားခဲ့ကာ စိတ်၏ စင်ကြယ်အေးချမ်းမှုနှင့် တိတ်ဆိတ်ခြင်းကို ခံစားစေမည့် ကဗျာရသ စာအုပ် ဖြစ်ပါသည်။

🌟 အကောင်းဆုံး ကောက်နုတ်ချက်နှင့် အနှစ်ချုပ် (Highlights):
• "စိတ်နှလုံး အေးချမ်းခြင်းဆိုတာ စိတ်ရဲ့ သန့်ရှင်းခြင်းက စတင်ပါသည်" ဟူသော အတွေးအမြင်များ။
• မနက်ခင်း နေခြည်နွေးနွေးနှင့် သစ်ရွက်ခြောက်လေးများ၏ ရိုးရှင်းသော သဘာဝ အလှတရား။
• လောကကြီးတွင် ဘယ်သူနှင့်မျှ ပြိုင်ဆိုင်နေစရာ မလိုဘဲ စိတ်ငြိမ်းချမ်းမှုကို ရယူနည်းများ။

💡 ဖတ်ရှုသင့်သူများ: လောက၏ ရှုပ်ထွေးမှုများမှ ခေတ္တခွာပြီး စိတ်နှလုံး အနားယူလိုသူများအတွက် ဖြစ်ပါသည်။`,
        previewText_en: `Reflective mindfulness poetry celebrating solitude, quiet simplicity, and authentic contentment.

🌟 Key Highlights:
• Leaving pride and superficial status at the door to find inner clarity.
• Finding profound beauty in fallen leaves and quiet morning sunlight.
• Liberation from social competition and resting in mindful stillness.`
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
        previewText: `ချစ်ခြင်းမေတ္တာနှင့် ကာရံညီသော ကတိစကားများ၊ စစ်မှန်သော ၅၂၈ မေတ္တာနှင့် အချစ်ကဗျာ စကားပြေ ရသစာအုပ် ဖြစ်ပါသည်။

🌟 အကောင်းဆုံး ကောက်နုတ်ချက်နှင့် အနှစ်ချုပ် (Highlights):
• "ယုံကြည်မှုတွေကို ကတိတွေနဲ့ မတည်ဆောက်ဘဲ နွေးထွေးမှုတွေနဲ့ တည်ဆောက်ကြမယ်" ဟူသော ချိုမြိန်သည့် ခံယူချက်။
• မနက်ဖြန်တွေ ရှိနေသရွေ့ မပြောင်းလဲဘဲ ချစ်နေမည့် တစ်ဘဝစာ ချစ်ခြင်းမေတ္တာ။
• အတိတ်က ဒဏ်ရာများကို ဖေးမထွေးပွေ့ပြီး နေ့ရက်တိုင်းကို ချစ်သူများနေ့အဖြစ် ဖြတ်သန်းပုံ။

💡 ဖတ်ရှုသင့်သူများ: ရိုမန်းတစ်ဆန်သော အချစ်ကဗျာများနှင့် စကားပြေများကို မြတ်နိုးသူများအတွက် ဖြစ်ပါသည်။`,
        previewText_en: `An intimate and touching collection of romantic poetry and tender love letters.

🌟 Key Highlights:
• Building relationships on quiet warmth rather than fragile promises.
• Unconditional love that persists through every tomorrow.
• Healing past wounds through genuine care and everyday companionship.`
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
        previewText: `ဆောင်းရာသီ၏ အေးစက်သော နေ့ရက်များကြားတွင် စိတ်နှလုံးကို နွေးထွေးစေမည့် အမှတ်တရများနှင့် အဖော်မွန် ရသဝတ္ထု ဖြစ်ပါသည်။

🌟 အကောင်းဆုံး ကောက်နုတ်ချက်နှင့် အနှစ်ချုပ် (Highlights):
• ဆောင်းလေအေးများကြားတွင် ကော်ဖီနွေးနွေးတစ်ခွက်နှင့်အတူ ခံစားရသော အေးချမ်းသည့် မနက်ခင်းများ။
• ကိုယ့်ကို အမှန်တကယ် နားလည်ပေးမည့် လူတစ်ယောက်နှင့်အတူ ဘဝကို ရိုးရှင်းစွာ ဖြတ်သန်းပုံ။
• လောကကြီးတွင် အမြဲ အလောတကြီး မဖြစ်ဘဲ သာယာသော နေ့ရက်များကို ဖန်တီးနည်း။

💡 ဖတ်ရှုသင့်သူများ: စိတ်ကို နွေးထွေးအေးချမ်းစေမည့် ဝတ္ထုတိုလေးများကို ဖတ်ရှုလိုသူများအတွက် ဖြစ်ပါသည်။`,
        previewText_en: `A heartwarming novella highlighting quiet companionship, winter warmth, and peaceful days.

🌟 Key Highlights:
• The soothing comfort of warm coffee and stillness on a frosty morning.
• Finding beauty and warmth in being understood by someone special.
• Slowing down to appreciate everyday moments of genuine peace.`
    }
];

// Dictionary for Full UI Translation
const translations = {
    my: {
        brand: "📚 Myanmar Bookstore",
        searchPlaceholder: "စာအုပ်ရှာဖွေရန်...",
        themeBtn: "🌓 Theme",
        cartBtn: "🛒 Cart",
        loginBtn: "👤 Login",
        adminBtn: "⚙️ Admin",
        titleSearch: "🔍 ရှာဖွေတွေ့ရှိသော စာအုပ်များ",
        titleTech: "💻 နည်းပညာ (Technical)",
        titleHealth: "🌿 ကျန်းမာရေးနှင့် အတွေးအမြင် (Health & Mindset)",
        titleHorror: "👻 ထိတ်လန့်စရာနှင့် ပရလောက (Horror & Mystery)",
        titleDrama: "🎭 ဒရာမာနှင့် ရသဝတ္ထု (Drama & Fiction)",
        titleHumor: "😂 ဟာသနှင့် အပန်းဖြေ (Humor & Fun)",
        titleRomance: "💖 အချစ်နှင့် ကဗျာ (Romance & Poetry)",
        readBtn: "📖 အမြည်းဖတ်",
        addCartBtn: "🛒 ဝယ်မည်",
        cartModalTitle: "Shopping Cart & Checkout",
        cartModalSubtitle: "အိမ်ရောက်ငွေချေစနစ်ဖြင့် လွယ်ကူလျင်မြန်စွာ မှာယူလိုက်ပါ",
        orderSummaryTitle: "📦 မှာယူမည့် စာအုပ်များ",
        labelTotalPrice: "စုစုပေါင်း ကျသင့်ငွေ:",
        deliveryInfoTitle: "🚚 ပို့ဆောင်ရမည့် အချက်အလက်များ",
        labelName: "လက်ခံမည့်သူ အမည်",
        labelPhone: "ဆက်သွယ်ရမည့် ဖုန်းနံပါတ်",
        labelAddress: "ပို့ဆောင်ပေးရမည့် လိပ်စာ အပြည့်အစုံ",
        paymentBadgeText: "ငွေပေးချေမှု: အိမ်ရောက်ငွေချေ (Cash On Delivery)",
        confirmOrderBtn: "✓ အော်ဒါ အတည်ပြု တင်မည်",
        tabLogin: "အကောင့်ဝင်ရန်",
        tabRegister: "အကောင့်ဖွင့်ရန်",
        loginSubmitBtn: "Login ဝင်မည်",
        regSubmitBtn: "အကောင့်သစ် ဖွင့်မည်",
        successModalTitle: "အော်ဒါတင်ခြင်း အောင်မြင်ပါသည်!",
        successModalSub: "သင့်စာအုပ်များကို အမြန်ဆုံး အိမ်တိုင်ရာရောက် ပို့ဆောင်ပေးပါမည်။"
    },
    en: {
        brand: "📚 Myanmar Bookstore",
        searchPlaceholder: "Search books...",
        themeBtn: "🌓 Theme",
        cartBtn: "🛒 Cart",
        loginBtn: "👤 Login",
        adminBtn: "⚙️ Admin",
        titleSearch: "🔍 Search Results",
        titleTech: "💻 Technical & Programming",
        titleHealth: "🌿 Health & Mindset",
        titleHorror: "👻 Horror & Mystery",
        titleDrama: "🎭 Drama & Fiction",
        titleHumor: "😂 Humor & Comedy",
        titleRomance: "💖 Romance & Poetry",
        readBtn: "📖 Preview",
        addCartBtn: "🛒 Add Cart",
        cartModalTitle: "Shopping Cart & Checkout",
        cartModalSubtitle: "Convenient Cash On Delivery Service",
        orderSummaryTitle: "📦 Selected Books",
        labelTotalPrice: "Total Amount:",
        deliveryInfoTitle: "🚚 Delivery Information",
        labelName: "Full Name",
        labelPhone: "Contact Phone",
        labelAddress: "Full Delivery Address",
        paymentBadgeText: "Payment: Cash On Delivery (COD)",
        confirmOrderBtn: "✓ Confirm Order",
        tabLogin: "Login",
        tabRegister: "Register",
        loginSubmitBtn: "Login",
        regSubmitBtn: "Create Account",
        successModalTitle: "Order Placed Successfully!",
        successModalSub: "Your books will be delivered directly to your doorstep."
    }
};

let cart = JSON.parse(localStorage.getItem("cart_items")) || [];
let currentLang = localStorage.getItem("lang") || "my";
let currentUser = JSON.parse(localStorage.getItem("current_user")) || null;
let currentFontSize = 1;

// Page Load Setup
document.addEventListener("DOMContentLoaded", () => {
    updateLanguageUI();
    renderAllShelves();
    updateCartBadge();
    updateAuthUI();
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-theme");
    }
});

// ==========================================
// Authentication
// ==========================================
function openAuthModal() {
    document.getElementById("auth-modal").style.display = "block";
}

function switchAuthTab(tab) {
    const loginForm = document.getElementById("login-form");
    const regForm = document.getElementById("register-form");
    const loginTabBtn = document.getElementById("tab-login-btn");
    const regTabBtn = document.getElementById("tab-register-btn");

    if (tab === 'login') {
        loginForm.style.display = "block";
        regForm.style.display = "none";
        loginTabBtn.classList.add("active");
        regTabBtn.classList.remove("active");
    } else {
        loginForm.style.display = "none";
        regForm.style.display = "block";
        loginTabBtn.classList.remove("active");
        regTabBtn.classList.add("active");
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

    return `
        <div class="book-card">
            <img src="${book.cover}" alt="${book.title}" class="book-cover" 
                 onerror="this.onerror=null; if(this.src.includes('images/')){ this.src=this.src.replace('images/','image/'); } else { this.src='https://via.placeholder.com/120x175?text=No+Cover'; }">
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
// E-Reader Logic (Phone & PC Optimized)
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
// Shopping Cart & Cash on Delivery Checkout
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
        paymentMethod: "Cash on Delivery (အိမ်ရောက်ငွေချေ)",
        items: [...cart],
        total: totalAmount,
        date: orderDate
    };

    const orders = JSON.parse(localStorage.getItem("admin_orders")) || [];
    orders.push(order);
    localStorage.setItem("admin_orders", JSON.stringify(orders));

    const orderedItems = [...cart];
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
// Admin Orders Dashboard
// ==========================================
function openAdmin() {
    const orders = JSON.parse(localStorage.getItem("admin_orders")) || [];
    const list = document.getElementById("admin-orders-list");
    list.innerHTML = orders.length === 0 ? "<p>လက်ရှိတွင် အော်ဒါမှတ်တမ်း မရှိသေးပါ။</p>" : orders.slice().reverse().map(o => `
        <div style="border:1px solid var(--border-color); padding:14px; margin-bottom:12px; border-radius:8px; background-color: var(--card-bg);">
            <div style="display:flex; justify-content:space-between; margin-bottom: 6px;">
                <strong style="color: #0d6efd;">Order ID: ${o.id}</strong>
                <span style="font-size:0.8rem; color:#888;">${o.date}</span>
            </div>
            <p><strong>ဝယ်ယူသူ:</strong> ${o.customerName} (ဖုန်း - ${o.phone})</p>
            <p><strong>လိပ်စာ:</strong> ${o.address || 'မရှိပါ'}</p>
            <p><strong>ငွေပေးချေမှု:</strong> <span style="color:#198754; font-weight:bold;">${o.paymentMethod || 'COD'}</span></p>
            <p><strong>စာအုပ်များ:</strong> ${o.items.map(i => `${i.title} (x${i.qty})`).join(', ')}</p>
            <p style="margin-top:6px;"><strong>စုစုပေါင်း ကျသင့်ငွေ:</strong> <strong style="color:#dc3545;">${o.total.toLocaleString()} ကျပ်</strong></p>
        </div>
    `).join('');
    document.getElementById("admin-modal").style.display = "block";
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
    document.getElementById("title-search").innerText = t.titleSearch;
    document.getElementById("title-tech").innerText = t.titleTech;
    document.getElementById("title-health").innerText = t.titleHealth;
    document.getElementById("title-horror").innerText = t.titleHorror;
    document.getElementById("title-drama").innerText = t.titleDrama;
    document.getElementById("title-humor").innerText = t.titleHumor;
    document.getElementById("title-romance").innerText = t.titleRomance;

    // Checkout Modal Texts
    document.getElementById("cart-modal-title").innerText = t.cartModalTitle;
    document.getElementById("cart-modal-subtitle").innerText = t.cartModalSubtitle;
    document.getElementById("order-summary-title").innerText = t.orderSummaryTitle;
    document.getElementById("label-total-price").innerText = t.labelTotalPrice;
    document.getElementById("delivery-info-title").innerText = t.deliveryInfoTitle;
    document.getElementById("label-name").innerText = t.labelName;
    document.getElementById("label-phone").innerText = t.labelPhone;
    document.getElementById("label-address").innerText = t.labelAddress;
    document.getElementById("payment-badge-text").innerText = t.paymentBadgeText;
    document.getElementById("confirm-order-btn").innerText = t.confirmOrderBtn;

    // Auth & Success Modal
    document.getElementById("tab-login-btn").innerText = t.tabLogin;
    document.getElementById("tab-register-btn").innerText = t.tabRegister;
    document.getElementById("login-submit-btn").innerText = t.loginSubmitBtn;
    document.getElementById("reg-submit-btn").innerText = t.regSubmitBtn;
    document.getElementById("success-modal-title").innerText = t.successModalTitle;
    document.getElementById("success-modal-sub").innerText = t.successModalSub;
}