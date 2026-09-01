// ==========================================
// Telegram Bot Configuration (Real-time Cross-Device Noti)
// ==========================================
const TELEGRAM_BOT_TOKEN = "8939232025:AAEwUq-Zkv3fuHHxJpLnhTzArVt22Q4Bjuo";
const TELEGRAM_CHAT_ID = "YOUR_TELEGRAM_CHAT_ID"; // <-- ဒီနေရာတွင် သင့် ID ဂဏန်းကို အစားထိုးပါ (ဥပမာ "123456789")

async function sendTelegramOrderNotification(order) {
    if (!TELEGRAM_CHAT_ID || TELEGRAM_CHAT_ID === "YOUR_TELEGRAM_CHAT_ID") return;

    const itemsText = order.items.map(i => `• ${i.title} (x${i.qty}) - ${(i.price * i.qty).toLocaleString()} MMK`).join('\n');
    
    const message = `
📦 <b>အော်ဒါအသစ် ရောက်ရှိပါသည်! (The Reading Homies)</b>

🆔 <b>Order ID:</b> <code>${order.id}</code>
👤 <b>ဝယ်ယူသူ:</b> ${order.customerName}
📞 <b>ဖုန်းနံပါတ်:</b> ${order.phone}
🏠 <b>လိပ်စာ:</b> ${order.address}
💳 <b>ငွေပေးချေမှု:</b> ${order.paymentMethod}
📅 <b>ရက်စွဲ:</b> ${order.date}

📚 <b>မှာယူထားသော စာအုပ်များ:</b>
${itemsText}

💰 <b>စုစုပေါင်း ကျသင့်ငွေ:</b> <b>${order.total.toLocaleString()} MMK</b>
    `;

    try {
        await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                chat_id: TELEGRAM_CHAT_ID,
                text: message,
                parse_mode: "HTML"
            })
        });
    } catch (error) {
        console.error("Telegram Notification Error:", error);
    }
}

// စာအုပ်ဒေတာများ
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
• PascalCase (Class), camelCase (Method) နှင့် snake_case (Database) အမည်ပေးစနစ်များကို တိကျစွာ လမ်းညွှန်ထားခြင်း။`,
        previewText_en: `Laravel makes PHP web development clean, expressive, and elegant through its MVC architecture.`
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
• Deep Blue မှစတင်ကာ AlphaGo Zero အထိ ဉာဏ်ရည်တု၏ ခုန်ပျံကျော်လွှား တိုးတက်လာမှု သမိုင်းမှတ်တိုင်များ။`,
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
• မရည်ရွယ်ဘဲ ဖြစ်ခဲ့သော အမှားများအတွက် ကိုယ့်ကိုယ်ကိုယ် အပြစ်တင်မနေဘဲ ခွင့်လွှတ်ကုစားနည်း (Self-Forgiveness)။`,
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
        previewText: `မပြီးဆုံးနိုင်သော သံသရာလည်နေသည့် အတွေးလွန်ခြင်း (Overthinking) ကို ရပ်တန့်ပြီး ပစ္စုပ္ပန်တွင် အေးချမ်းစွာ ရှင်သန်နည်း စိတ်ပညာ လမ်းညွှန် ဖြစ်ပါသည်။`,
        previewText_en: `Overcome mental exhaustion and intrusive anxiety by breaking the repetitive loops of overthinking.`
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
        previewText_en: `Evidence-based medical advice and longevity wisdom tailored for graceful, active aging past forty.`
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
        previewText: `ကိုယ့်ရဲ့ အတွင်းစိတ် တုန်ခါမှု (Vibration & Frequency) ကို မြှင့်တင်ပြီး ပိုမိုကောင်းမွန်သော ဘဝကို ပိုင်ဆိုင်နိုင်စေမည့် ကမ္ဘာကျော် စာအုပ်ကောင်း ဖြစ်ပါသည်။`,
        previewText_en: `Master self-love, conquer inner resistance, and elevate your personal frequency for true fulfillment.`
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
        previewText_en: `Chilling firsthand memoirs and supernatural occurrences inside the walls of Insein Prison.`
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
        previewText: `ကပ်ရောဂါနှင့် စီးပွားရေး အကျပ်အတည်းများကြားတွင် မိသားစုအတွက် ရုန်းကန်နေရသော အမျိုးသမီးနှစ်ဦး၏ သံယောဇဉ်နှင့် စွန့်လွှတ်စွန့်စားမှု ဒရာမာဝတ္ထု ဖြစ်ပါသည်။`,
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
        previewText_en: `A chilling supernatural mystery of a daughter haunted by her mother's drowning.`
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
        previewText_en: `Terrifying nightmares of being trapped in roaring flames foretell eerie supernatural occurrences.`
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
        previewText_en: `Historical occult intrigue spanning centuries from the ancient Kingdom of Inwa.`
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
        previewText: `အထက်အညာ ကျေးလက်ဒေသရှိ ရိုးရှင်းဖြူစင်သော ရွာသူရွာသားများ၏ ပျော်ရွှင်ဖွယ် အလွဲများနှင့် ရယ်ရွှင်ဖွယ် ဟာသဇာတ်လမ်းတိုများ ဖြစ်ပါသည်။`,
        previewText_en: `A lively collection of warm-hearted and witty humorous tales from rural upper Myanmar.`
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
        previewText_en: `Brilliant comedic behind-the-scenes memoirs from Myanmar film production sets by Niko Ye.`
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
        previewText_en: `A gentle poetic romance of unconditional affection, personal healing, and sunflower-like devotion.`
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
        previewText_en: `Reflective mindfulness poetry celebrating solitude, quiet simplicity, and authentic contentment.`
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
        previewText_en: `An intimate and touching collection of romantic poetry and tender love letters.`
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
        previewText_en: `A heartwarming novella highlighting quiet companionship, winter warmth, and peaceful days.`
    }
];

// Translations Dictionary
const translations = {
    my: {
        brand: "📚 The Reading Homies",
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
        readBtn: "💡 စာအုပ် မိတ်ဆက်",
        readerBadge: "💡 စာအုပ် မိတ်ဆက်",
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
        brand: "📚 The Reading Homies",
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
        readBtn: "💡 Book Overview",
        readerBadge: "💡 Book Overview",
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

// Page Initialization
document.addEventListener("DOMContentLoaded", () => {
    updateLanguageUI();
    renderAllShelves();
    updateCartBadge();
    updateAuthUI();
    renderChatMessages();
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-theme");
    }
});

// Storage Listeners
window.addEventListener("storage", (e) => {
    if (e.key === "admin_orders") {
        updateAuthUI();
    }
    if (e.key === "homies_chat_logs") {
        renderChatMessages();
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
    const adminBtn = document.getElementById("admin-nav-btn");
    
    if (currentUser) {
        authNav.innerHTML = `
            <div class="user-badge">
                <span>👤 <strong>${currentUser.username}</strong></span>
                <span class="logout-link" onclick="handleLogout()">Logout</span>
            </div>
        `;

        if (currentUser.username.toLowerCase() === "admin") {
            if (adminBtn) {
                adminBtn.style.display = "inline-block";
                const orders = JSON.parse(localStorage.getItem("admin_orders")) || [];
                const orderCount = orders.length;
                if (orderCount > 0) {
                    adminBtn.innerHTML = `⚙️ Admin <span style="background-color: #dc3545; color: white; border-radius: 50%; padding: 2px 7px; font-size: 0.75rem; margin-left: 4px; font-weight: bold;">${orderCount}</span>`;
                } else {
                    adminBtn.innerText = translations[currentLang].adminBtn;
                }
            }
        } else {
            if (adminBtn) adminBtn.style.display = "none";
        }
    } else {
        authNav.innerHTML = `<button class="nav-btn auth-btn" onclick="openAuthModal()" id="login-nav-btn">${translations[currentLang].loginBtn}</button>`;
        if (adminBtn) adminBtn.style.display = "none";
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
// E-Reader Logic (စာအုပ် မိတ်ဆက်)
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
// Shopping Cart & COD Checkout Logic
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
    const now = new Date();

    const order = {
        id: orderId,
        customerName: name,
        user: currentUser ? currentUser.username : "Guest",
        phone: cleanPhone,
        address: address,
        paymentMethod: "Cash on Delivery (အိမ်ရောက်ငွေချေ)",
        items: [...cart],
        total: totalAmount,
        date: now.toLocaleString(),
        timestamp: now.getTime(),
        month: now.getMonth() + 1,
        year: now.getFullYear()
    };

    const orders = JSON.parse(localStorage.getItem("admin_orders")) || [];
    orders.push(order);
    localStorage.setItem("admin_orders", JSON.stringify(orders));

    // Telegram Bot ထံသို့ Order Noti ချက်ချင်း ပေးပို့ခြင်း
    sendTelegramOrderNotification(order);

    const orderedItems = [...cart];
    cart = [];
    saveCart();
    closeModal('cart-modal');
    document.getElementById("checkout-form").reset();

    updateAuthUI();
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
// Admin Dashboard & Analytics
// ==========================================
function openAdmin() {
    const orders = JSON.parse(localStorage.getItem("admin_orders")) || [];
    const now = new Date();
    const currentMonth = now.getMonth() + 1;
    const currentYear = now.getFullYear();

    let totalRevenue = 0;
    let monthlyRevenue = 0;
    let yearlyRevenue = 0;
    let totalBooksSold = 0;
    let monthlyBooksSold = 0;
    let yearlyBooksSold = 0;

    const bookSalesMap = {};
    booksData.forEach(b => { bookSalesMap[b.id] = { title: b.title, qty: 0, revenue: 0 }; });

    orders.forEach(o => {
        totalRevenue += o.total;
        const oDate = new Date(o.timestamp || o.date);
        const oMonth = oDate.getMonth() + 1;
        const oYear = oDate.getFullYear();

        if (oYear === currentYear) {
            yearlyRevenue += o.total;
            o.items.forEach(i => yearlyBooksSold += i.qty);
            if (oMonth === currentMonth) {
                monthlyRevenue += o.total;
                o.items.forEach(i => monthlyBooksSold += i.qty);
            }
        }

        o.items.forEach(i => {
            totalBooksSold += i.qty;
            if (bookSalesMap[i.id]) {
                bookSalesMap[i.id].qty += i.qty;
                bookSalesMap[i.id].revenue += i.price * i.qty;
            }
        });
    });

    const salesArray = Object.values(bookSalesMap).sort((a, b) => b.qty - a.qty);
    const bestSellers = salesArray.filter(b => b.qty > 0).slice(0, 3);
    const lowSellers = salesArray.filter(b => b.qty === 0);

    const analyticsSection = document.getElementById("admin-analytics-section");
    analyticsSection.innerHTML = `
        <div class="analytics-card card-blue">
            <h4>📅 ယခုလ ရောင်းအား (${currentMonth} လပိုင်း)</h4>
            <div class="analytics-val">${monthlyRevenue.toLocaleString()} MMK</div>
            <p>စာအုပ် <strong>${monthlyBooksSold}</strong> အုပ် ရောင်းချပြီး</p>
        </div>
        <div class="analytics-card card-green">
            <h4>📈 ယခုနှစ် ရောင်းအား (${currentYear})</h4>
            <div class="analytics-val">${yearlyRevenue.toLocaleString()} MMK</div>
            <p>စာအုပ် <strong>${yearlyBooksSold}</strong> အုပ် ရောင်းချပြီး</p>
        </div>
        <div class="analytics-card card-purple">
            <h4>💰 စုစုပေါင်း ရောင်းအား (All Time)</h4>
            <div class="analytics-val">${totalRevenue.toLocaleString()} MMK</div>
            <p>စုစုပေါင်း အော်ဒါ <strong>${orders.length}</strong> ခု</p>
        </div>
    `;

    const insightsSection = document.getElementById("admin-sales-insights");
    insightsSection.innerHTML = `
        <div class="sales-insight-box">
            <h4 style="color:#198754;"><i class="fa-solid fa-trophy"></i> ရောင်းအား အကောင်းဆုံး စာအုပ်များ</h4>
            <ul>
                ${bestSellers.length > 0 ? bestSellers.map(b => `<li><strong>${b.title}</strong> — ရောင်းရ: <span class="badge-qty">${b.qty} အုပ်</span> (${b.revenue.toLocaleString()} MMK)</li>`).join('') : '<li style="color:#888;">အရောင်းမှတ်တမ်း မရှိသေးပါ</li>'}
            </ul>
        </div>
        <div class="sales-insight-box">
            <h4 style="color:#dc3545;"><i class="fa-solid fa-triangle-exclamation"></i> လုံးဝမရောင်းရသေးသော စာအုပ်များ</h4>
            <ul style="max-height: 120px; overflow-y: auto;">
                ${lowSellers.length > 0 ? lowSellers.map(b => `<li>${b.title} <span style="color:#888; font-size:0.8rem;">(0 အုပ်)</span></li>`).join('') : '<li style="color:#198754;">စာအုပ်အားလုံး ရောင်းချဖူးပါသည်!</li>'}
            </ul>
        </div>
    `;

    const list = document.getElementById("admin-orders-list");
    if (orders.length === 0) {
        list.innerHTML = `<p style="text-align:center; padding:20px; color:#888;">လက်ရှိတွင် အော်ဒါမှတ်တမ်း မရှိသေးပါ။</p>`;
    } else {
        list.innerHTML = `
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
                <strong>ရရှိထားသော အော်ဒါမှတ်တမ်းများ (${orders.length} ခု)</strong>
                <button onclick="clearAllOrders()" style="background-color:#dc3545; color:white; border:none; padding:4px 10px; border-radius:4px; cursor:pointer; font-size:0.8rem;">🗑️ အားလုံးဖျက်မည်</button>
            </div>
        ` + orders.slice().reverse().map(o => `
            <div class="order-admin-card">
                <div style="display:flex; justify-content:space-between; margin-bottom: 6px;">
                    <strong style="color: #0d6efd;">Order ID: ${o.id}</strong>
                    <span style="font-size:0.8rem; color:#888;">${o.date}</span>
                </div>
                <p><strong>ဝယ်ယူသူ:</strong> ${o.customerName} (ဖုန်း - ${o.phone})</p>
                <p><strong>လိပ်စာ:</strong> ${o.address || 'မရှိပါ'}</p>
                <p><strong>ငွေပေးချေမှု:</strong> <span style="color:#198754; font-weight:bold;">${o.paymentMethod || 'COD'}</span></p>
                <p><strong>စာအုပ်များ:</strong> ${o.items.map(i => `${i.title} (x${i.qty})`).join(', ')}</p>
                <p style="margin-top:6px;"><strong>စုစုပေါင်း ကျသင့်ငွေ:</strong> <strong style="color:#dc3545;">${o.total.toLocaleString()} MMK</strong></p>
            </div>
        `).join('');
    }
    document.getElementById("admin-modal").style.display = "block";
}

function clearAllOrders() {
    if (confirm("အော်ဒါမှတ်တမ်းအားလုံးကို ရှင်းလင်းဖျက်ထုတ်မှာ သေချာပါသလား?")) {
        localStorage.removeItem("admin_orders");
        openAdmin();
        updateAuthUI();
    }
}

// ==========================================
// User & Admin Live Chat Box System
// ==========================================
function toggleChatWindow() {
    const chatWin = document.getElementById("chat-window");
    chatWin.classList.toggle("open");
    const badge = document.getElementById("chat-badge");
    if (badge) badge.style.display = "none";
    if (chatWin.classList.contains("open")) {
        renderChatMessages();
    }
}

function handleSendChat(e) {
    e.preventDefault();
    const input = document.getElementById("chat-input");
    const text = input.value.trim();
    if (!text) return;

    const sender = (currentUser && currentUser.username.toLowerCase() === "admin") ? "Admin" : (currentUser ? currentUser.username : "Customer");
    const role = (currentUser && currentUser.username.toLowerCase() === "admin") ? "admin" : "user";

    const chatLogs = JSON.parse(localStorage.getItem("homies_chat_logs")) || [
        { sender: "Admin", text: "The Reading Homies မှ ကြိုဆိုပါတယ်ခင်ဗျာ။ စာအုပ်များနှင့်ပတ်သက်ပြီး မေးမြန်းနိုင်ပါပြီ။", time: "Auto", role: "admin" }
    ];

    chatLogs.push({
        sender: sender,
        text: text,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        role: role
    });

    localStorage.setItem("homies_chat_logs", JSON.stringify(chatLogs));
    input.value = "";
    renderChatMessages();
}

function renderChatMessages() {
    const chatContainer = document.getElementById("chat-messages");
    if (!chatContainer) return;

    const chatLogs = JSON.parse(localStorage.getItem("homies_chat_logs")) || [
        { sender: "Admin", text: "The Reading Homies မှ ကြိုဆိုပါတယ်ခင်ဗျာ။ စာအုပ်များနှင့်ပတ်သက်ပြီး မေးမြန်းနိုင်ပါပြီ။", time: "Auto", role: "admin" }
    ];

    chatContainer.innerHTML = chatLogs.map(m => {
        const isMe = (currentUser && currentUser.username.toLowerCase() === "admin" && m.role === "admin") || 
                     (currentUser && currentUser.username.toLowerCase() !== "admin" && m.role === "user") ||
                     (!currentUser && m.role === "user");

        return `
            <div class="chat-bubble-row ${isMe ? 'my-msg' : 'other-msg'}">
                <div class="chat-sender-label">${m.sender} • <span style="font-size:0.7rem; color:#888;">${m.time}</span></div>
                <div class="chat-bubble">${m.text}</div>
            </div>
        `;
    }).join('');

    chatContainer.scrollTop = chatContainer.scrollHeight;
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
    document.getElementById("title-search").innerText = t.titleSearch;
    document.getElementById("title-tech").innerText = t.titleTech;
    document.getElementById("title-health").innerText = t.titleHealth;
    document.getElementById("title-horror").innerText = t.titleHorror;
    document.getElementById("title-drama").innerText = t.titleDrama;
    document.getElementById("title-humor").innerText = t.titleHumor;
    document.getElementById("title-romance").innerText = t.titleRomance;

    const readerBadge = document.getElementById("reader-modal-badge");
    if (readerBadge) readerBadge.innerText = t.readerBadge;

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

    document.getElementById("tab-login-btn").innerText = t.tabLogin;
    document.getElementById("tab-register-btn").innerText = t.tabRegister;
    document.getElementById("login-submit-btn").innerText = t.loginSubmitBtn;
    document.getElementById("reg-submit-btn").innerText = t.regSubmitBtn;
    document.getElementById("success-modal-title").innerText = t.successModalTitle;
    document.getElementById("success-modal-sub").innerText = t.successModalSub;
}