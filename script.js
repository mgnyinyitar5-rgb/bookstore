// ==========================================
// 1. CONFIGURATION & CONSTANTS
// ==========================================
const ADMIN_USERNAME = "admin";
const ADMIN_PASSWORD = "admin123";
const TELEGRAM_BOT_TOKEN = "8939232025:AAEwUq-Zkv3fuHHxJpLnhTzArVt22Q4Bjuo";
const TELEGRAM_CHAT_ID = "8297181241";

const ADDRESS_LOCKOUT_MS = 60 * 60 * 1000;          // လိပ်စာမှားပါက ၁ နာရီ Lockout
const LOGIN_LOCKOUT_MS = 24 * 60 * 60 * 1000;       // Password မှားပါက ၂၄ နာရီ (၁ ရက်) Lockout

const MYANMAR_CITIES = [
    "yangon", "ရန်ကုန်", "mandalay", "မန္တလေး", "naypyidaw", "နေပြည်တော်",
    "bago", "ပဲခူး", "taunggyi", "တောင်ကြီး", "monywa", "မုံရွာ",
    "mawlamyine", "မော်လမြိုင်", "pathein", "ပုသိမ်", "pyay", "ပြည်",
    "meiktila", "မိတ္ထီလာ", "sittwe", "စစ်တွေ", "lashio","banmaw","ဗန်းမော်", "လားရှိုး"
];

// ==========================================
// 2. TRANSLATION DICTIONARY
// ==========================================
const TRANSLATIONS = {
    my: {
        hero_badge: "✨ စာပေချစ်သူများအတွက် အထူးနေရာ",
        hero_title: "စာအုပ်ကောင်းများဖြင့် ဘဝကို အလင်းရောင်ပေးပါ",
        hero_desc: "သုတ၊ ရသ၊ နည်းပညာနှင့် စိတ်ခွန်အားဖြည့် စာအုပ်ပေါင်းများစွာကို စိတ်ကြိုက် အစမ်းဖတ်ရှုနိုင်ပြီး Cash on Delivery (COD) ဖြင့် အိမ်အရောက်မှာယူလိုက်ပါ။",
        search_placeholder: "စာအုပ်အမည်၊ စာရေးဆရာ ရှာဖွေပါ...",
        nav_orders: "Orders",
        nav_cart: "Cart",
        nav_login: "Login",
        nav_logout: "Logout",
        cat_all: "အားလုံး",
        cat_tech: "နည်းပညာ",
        cat_health: "ကျန်းမာရေးနှင့် အတွေးအမြင်",
        cat_horror: "သည်းထိတ်ရင်ဖို",
        cat_drama: "ဒရာမာနှင့် သုတရသ",
        cat_humor: "ဟာသနှင့် ရသ",
        cat_romance: "အချစ်နှင့် ကဗျာ",
        btn_preview: "ဖတ်ရှုရန်",
        btn_buy: "ဝယ်ယူရန်",
        cart_title: "စာအုပ်ခြင်းတောင်း",
        total_label: "စုစုပေါင်း ကျသင့်ငွေ:",
        checkout_header: "🚚 ပို့ဆောင်ရမည့် အချက်အလက်များ (COD)",
        label_name: "ဝယ်ယူသူ အမည်:",
        label_phone: "ဆက်သွယ်ရန် ဖုန်းနံပါတ် (09xxxxxxxxx):",
        label_address: "ပို့ဆောင်ရမည့် မြို့နှင့် လိပ်စာအပြည့်အစုံ:",
        btn_confirm_order: "အော်ဒါ အတည်ပြု တင်မည်",
        orders_title: "ကျွန်ုပ်၏ အော်ဒါမှတ်တမ်းများ",
        login_header: "အကောင့်ဝင်ရောက်ရန်",
        remember_me: "အကောင့်အချက်အလက်ကို စက်ထဲတွင် မှတ်ထားမည်",
        empty_search: "ရှာဖွေထားသော စာအုပ်မရှိပါ။",
        empty_cart: "ခြင်းတောင်းထဲတွင် စာအုပ်မရှိသေးပါ။",
        empty_orders: "မှာယူထားသော အော်ဒါမှတ်တမ်း မရှိသေးပါ။"
    },
    en: {
        hero_badge: "✨ Special Place for Book Lovers",
        hero_title: "Enlighten Your Life with Great Books",
        hero_desc: "Explore a wide collection of tech, mindset, fiction and poetry. Preview instantly with our built-in e-reader and order via Cash on Delivery.",
        search_placeholder: "Search by book title, author...",
        nav_orders: "Orders",
        nav_cart: "Cart",
        nav_login: "Login",
        nav_logout: "Logout",
        cat_all: "All",
        cat_tech: "Technology",
        cat_health: "Health & Mindset",
        cat_horror: "Horror & Mystery",
        cat_drama: "Drama & Fiction",
        cat_humor: "Humor & Comedy",
        cat_romance: "Romance & Poetry",
        btn_preview: "Preview",
        btn_buy: "Add to Cart",
        cart_title: "Shopping Cart",
        total_label: "Total Amount:",
        checkout_header: "🚚 Shipping Information (COD)",
        label_name: "Customer Name:",
        label_phone: "Phone Number (09xxxxxxxxx):",
        label_address: "Full Delivery Address & City:",
        btn_confirm_order: "Confirm Order (COD)",
        orders_title: "My Order History",
        login_header: "Account Login",
        remember_me: "Remember credentials on this device",
        empty_search: "No books found matching your search.",
        empty_cart: "Your cart is currently empty.",
        empty_orders: "No order history available."
    }
};

// ==========================================
// 3. BOOKS DATABASE (44 BOOKS CATALOG)
// Matches images/1.jpg to images/44.jpg directly
// ==========================================
const DEFAULT_BOOKS = [
    // --- 1. TECHNOLOGY (1 - 4) ---
    {
        id: 1,
        title: "PHP အခြေခံနှင့် ဝဘ်ဖွံ့ဖြိုးတိုးတက်မှု",
        title_en: "PHP Basics & Web Development",
        author: "အိမောင်",
        author_en: "Ei Maung",
        category: "tech",
        price: 10000,
        cover: "images/1.jpg",
       previewText: "PHP ဘာသာစကား၏ အခြေခံ Syntax၊ Server-side Scripting သဘောတရားများ၊ Database ချိတ်ဆက်ပုံများနှင့် dynamic web pages များ ဖန်တီးတည်ဆောက်ပုံတို့ကို လက်တွေ့ဥပမာများစွာဖြင့် အစအဆုံး အသေးစိတ် ရှင်းလင်းတင်ပြထားသော ဝဘ်ပရိုဂရမ်းမင်း လက်စွဲစာအုပ်ကောင်း တစ်အုပ် ဖြစ်ပါသည်။ ဤစာအုပ်သည် ဝဘ်ဒီဗလော့ပါ အသစ်စတင်သူများအတွက် မရှိမဖြစ် လိုအပ်သော Syntax များ၊ Form Handling များ၊ Session Management နှင့် Security အခြေခံများကို အသေးစိတ် လေ့လာနိုင်ရန် အထူး ရေးသားထားခြင်း ဖြစ်ပါသည်။"
    },
    {
        id: 2,
        title: "Laravel Framework လက်တွေ့တည်ဆောက်ခြင်း",
        title_en: "Laravel Framework in Practice",
        author: "တင်မောင်ဇော်",
        author_en: "Tin Maung Zaw",
        category: "tech",
        price: 15000,
        cover: "images/2.jpg",
        previewText: "ခေတ်မီ PHP Framework ဖြစ်သော Laravel ၏ MVC Architecture၊ Routing၊ Controller၊ Eloquent ORM၊ Database Migration အပြင် RESTful API များ တည်ဆောက်ပုံနှင့် လုံခြုံရေးစနစ်များကို လက်တွေ့ပရောဂျက်တစ်ခု တည်ဆောက်ရင်း အဆင့်ဆင့် လေ့လာနိုင်ရန် ရေးသားထားပါသည်။ PHP ပရိုဂရမ်းမင်းကို အသင့်အတင့် နားလည်ပြီးသူများအတွက် Professional ကျကျ ဝဘ်အပလီကေးရှင်းများ တည်ဆောက်နိုင်ရန် အကောင်းဆုံး လမ်းညွှန်ပေးမည့် စာအုပ် ဖြစ်ပါသည်။"
    },
    {
        id: 4,
        title: "AI in Marketing, Sales and Service",
        title_en: "AI in Marketing, Sales and Service",
        author: "Peter Gentsch",
        author_en: "Peter Gentsch",
        category: "tech",
        price: 26000,
        cover: "images/4.jpg",
        previewText: "How Artificial Intelligence, Machine Learning, and Big Data are transforming modern business operations, automated customer service, predictive sales, and digital marketing strategies to gain competitive advantages in the global market. Essential reading for modern tech entrepreneurs and business leaders."
    },

    // --- 2. HEALTH & MINDSET (5 - 10, 30, 31, 32, 34) ---
    {
        id: 5,
        title: "Good Vibes Only (စိတ်ချမ်းသာမှုကို ရွေးချယ်ခြင်း)",
        title_en: "Good Vibes Only",
        author: "နီကိုရဲ",
        author_en: "Ni Ko Ye",
        category: "health",
        price: 23500,
        cover: "images/5.jpg",
        previewText: "အဆိုးမြင်အတွေးများကို ဖယ်ရှားပြီး နေ့စဉ်ဘဝတွင် အကောင်းမြင်စိတ်ဖြင့် ပျော်ရွှင်စွာ နေထိုင်နည်း အတွေးအမြင်စာစုများ။"
    },
    {
        id: 6,
        title: "Stop Overthinking (အတွေးလွန်ခြင်းကို ရပ်တန့်ပါ)",
        title_en: "Stop Overthinking",
        author: "Nick Trenton",
        author_en: "Nick Trenton",
        category: "health",
        price: 24000,
        cover: "images/6.jpg",
        previewText: "စိတ်ဖိစီးမှုနှင့် အတွေးလွန်ခြင်း သံသရာမှ ရုန်းထွက်ပြီး စိတ်တည်ငြိမ်အေးချမ်းမှု ရရှိစေမည့် စိတ်ပညာနည်းလမ်းများ။"
    },
    {
        id: 7,
        title: "အသက်ရှည် ကျန်းမာစေသော နည်းလမ်းကောင်းများ",
        title_en: "Guide to Longevity & Wellness",
        author: "ဒေါက်တာလင်း",
        author_en: "Dr. Lynn",
        category: "health",
        price: 23200,
        cover: "images/7.jpg",
        previewText: "နေ့စဉ် အစားအသောက်၊ ကိုယ်လက်လှုပ်ရှားမှုနှင့် သဘာဝပတ်ဝန်းကျင်ဆိုင်ရာ နေထိုင်မှုပုံစံများဖြင့် ရောဂါကင်းဝေးစေရေး လမ်းညွှန်။"
    },
    {
        id: 8,
        title: "ပိုကောင်းတဲ့ မနက်ဖြန် (Good Vibes, Good Life)",
        title_en: "A Better Tomorrow",
        author: "Vex King",
        author_en: "Vex King",
        category: "health",
        price: 13800,
        cover: "images/8.jpg",
        previewText: "မိမိကိုယ်ကို ချစ်မြတ်နိုးတတ်ရန်၊ အပြုသဘောဆောင်သော အတွေးများ မွေးမြူရန်နှင့် ဘဝရည်မှန်းချက်များကို အကောင်အထည်ဖော်နည်းများ။"
    },
    {
        id: 9,
        title: "အမှောင်ရိပ်ထဲက လွတ်မြောက်ခြင်း",
        title_en: "Escaping the Darkness",
        author: "မင်းသုခ",
        author_en: "Min Thukha",
        category: "health",
        price: 13500,
        cover: "images/9.jpg",
        previewText: "စိတ်ဓာတ်ကျဆင်းမှုနှင့် စိုးရိမ်ပူပန်မှုများကို ကျော်လွှားပြီး စိတ်ခွန်အား ပြန်လည်တည်ဆောက်ပုံ အတွေ့အကြုံစာစု။"
    },
    {
        id: 10,
        title: "အေးချမ်းသော နေရာလေးတစ်ခု",
        title_en: "A Peaceful Sanctuary",
        author: "ဉာဏ်လင်း",
        author_en: "Nyan Lynn",
        category: "health",
        price: 23000,
        cover: "images/10.jpg",
        previewText: "ဆိတ်ငြိမ်သော သဘာဝတရားထဲတွင် စိတ်အေးချမ်းမှု ရှာဖွေခြင်းနှင့် တရားရှုမှတ်မှု အခြေခံ အလေ့အကျင့်များ။"
    },

    // --- 3. HORROR & MYSTERY (11 - 13) ---
    {
        id: 11,
        title: "ဝိညာဉ်ညှို့သံနှင့် သန်းခေါင်ယံ အိပ်မက်",
        title_en: "Midnight Soul Call",
        author: "သျှင်သန့်",
        author_en: "Shin Thant",
        category: "horror",
        price: 13500,
        cover: "images/11.jpg",
        previewText: "သန်းခေါင်ယံ တောအုပ်နက်နက်ထဲမှ ပေါ်ထွက်လာသည့် ထူးဆန်းသော အော်သံများနှင့် မဖြေရှင်းနိုင်သော ဖြစ်ရပ်ဆန်းများ။"
    },
    {
        id: 12,
        title: "မြူခိုးဝေသော သုသာန်လမ်း",
        title_en: "The Misty Cemetery Trail",
        author: "ရဲရင့်",
        author_en: "Ye Yint",
        category: "horror",
        price: 23600,
        cover: "images/12.jpg",
        previewText: "ညစဉ် မြူခိုးများ ဖုံးလွှမ်းနေတတ်သည့် ရွာစွန်လမ်းဟောင်းကြီးပေါ်မှ သည်းထိတ်ရင်ဖို ဝိညာဉ်ဇာတ်လမ်း။"
    },
    {
        id: 13,
        title: "ကျိန်စာသင့် တောင်ကုန်းနက်",
        title_en: "Cursed Dark Ridge",
        author: "ကျော်သူ",
        author_en: "Kyaw Thu",
        category: "horror",
        price: 23800,
        cover: "images/13.jpg",
        previewText: "ရှေးရိုးရာ ကျိန်စာတစ်ခု၏ လက်စားချေမှုနှင့် တောတွင်းရွာငယ်လေးသို့ ရောက်ရှိသွားသော ခရီးသည်တို့၏ ကံကြမ္မာ။"
    },

    // --- 4. HUMOR & COMEDY CARTOONS (14, 15, 20 - 27, 36) ---
    {
        id: 14,
        title: "ကျွတ်ကျွတ်ကျွတ် ဟာသပေါင်းချုပ်",
        title_en: "Kyut Kyut Kyut Comic",
        author: "ကာတွန်း အော်ပီကျယ်",
        author_en: "Cartoon Aw Pi Kyeh",
        category: "humor",
        price: 12500,
        cover: "images/14.jpg",
        previewText: "နေ့စဉ် လူမှုဘဝ အလွဲများနှင့် ပွဲကျစေမည့် မြန်မာ့ရိုးရာ ဟာသကာတွန်း ဇာတ်လမ်းတိုများ။"
    },
    {
        id: 15,
        title: "ဆရာက ဝက်ပေါင်ခြောက် ကြိုက်သည်",
        title_en: "Humorous School Tales",
        author: "ကာတွန်း သော်က",
        author_en: "Cartoon Thaw Ka",
        category: "humor",
        price: 22800,
        cover: "images/15.jpg",
        previewText: "စာသင်ခန်းထဲက ရယ်စရာ အဖြစ်အပျက်များနှင့် ကျောင်းသား လူငယ်တို့၏ ဟာသသရော်စာများ။"
    },

    // --- 5. DRAMA & FICTION (16 - 19, 28, 41 - 44) ---
    {
        id: 16,
        title: "မြစိမ်းပြာ ကမာရွတ်",
        title_en: "Mya Sein Pyar Kamayut",
        author: "နုနုရည် (အင်းဝ)",
        author_en: "Nu Nu Yee (Inwa)",
        category: "drama",
        price: 23500,
        cover: "images/16.jpg",
        previewText: "ရန်ကုန်မြို့ ကမာရွတ်နယ်မြေနောက်ခံ ရိုးသားသော လူတန်းစားတို့၏ ရုန်းကန်လှုပ်ရှားမှုနှင့် ရင်နင့်ဖွယ် ဘဝသရုပ်ဖော် ဝတ္ထု။"
    },
    {
        id: 17,
        title: "မိုးနဲ့အတူ ရွာသွန်းသော လိပ်ပြာများ",
        title_en: "Butterflies with the Rain",
        author: "ခင်ဆွေဦး",
        author_en: "Khin Swe Oo",
        category: "drama",
        price: 23200,
        cover: "images/17.jpg",
        previewText: "မိုးရာသီ၏ အလွမ်းဓာတ်နှင့်အတူ ဘဝ၏ ကံကြမ္မာအလှည့်အပြောင်းကို ခံစားရိုက်ခတ်စေသော မေတ္တာဖွဲ့ ရသဝတ္ထု။"
    },
    {
        id: 18,
        title: "နေရောင်နွေးနွေး ဆည်းဆာလမ်း",
        title_en: "Warm Sunset Avenue",
        author: "မစန္ဒာ",
        author_en: "Ma Sandar",
        category: "drama",
        price: 13600,
        cover: "images/18.jpg",
        previewText: "မိသားစု သံယောဇဉ်နှင့် လူသားတို့၏ စိတ်သဘောထား နူးညံ့သိမ်မွေ့ပုံကို ပေါ်လွင်စေသော ဝတ္ထုတိုများ။"
    },
    {
        id: 19,
        title: "ဝရံတာက မျှော်ကြည့်ခြင်း",
        title_en: "Gazing from the Veranda",
        author: "ဂျူး",
        author_en: "Ju",
        category: "drama",
        price: 23800,
        cover: "images/19.jpg",
        previewText: "လူငယ်တို့၏ လွတ်လပ်မှု၊ ဆုံးရှုံးမှုနှင့် မျှော်လင့်ချက်တို့ကို အတွေးနက်နက်ရှိုင်းရှိုင်း ရေးဖွဲ့ထားသော ရသဝတ္ထု။"
    },

    // --- 4. HUMOR (CONTINUED) ---
    {
        id: 20,
        title: "ပြုံးပြုံးလေးနဲ့ ဖြတ်သန်းပါ",
        title_en: "Smile Along the Way",
        author: "ကာတွန်း မောင်မောင်",
        author_en: "Cartoon Maung Maung",
        category: "humor",
        price: 32500,
        cover: "images/20.jpg",
        previewText: "ခေတ်သစ် လူနေမှုစရိုက်များကို ဟာသမျက်မှန်တပ်ကာ ပေါ့ပေါ့ပါးပါး ဖတ်ရှုရမည့် ရယ်ရွှင်ဖွယ် ကာတွန်းများ။"
    },
    {
        id: 21,
        title: "မြို့တော် အရှုပ်တော်ပုံ ဟာသများ",
        title_en: "City Comic Chaos",
        author: "ကာတွန်း ပိုးဇာ",
        author_en: "Cartoon Poe Zar",
        category: "humor",
        price: 23600,
        cover: "images/21.jpg",
        previewText: "မြို့ပြလောက၏ ရယ်စရာ အလွဲအချော်များနှင့် လူနေမှုပုံစံ သရော်ချက် ကာတွန်းဇာတ်လမ်းတိုများ။"
    },
    {
        id: 22,
        title: "သူရဲကောင်းကြီးနှင့် ဟာသတိုက်ပွဲ",
        title_en: "Hero's Comedy Quest",
        author: "ကာတွန်း ကျော်ထူး",
        author_en: "Cartoon Kyaw Htoo",
        category: "humor",
        price: 12700,
        cover: "images/22.jpg",
        previewText: "သတ္တိခဲ သူရဲကောင်းတစ်ယောက်၏ ခရီးစဉ်တွင် ကြုံတွေ့ရသော မမျှော်လင့်သည့် ရယ်ဖွယ်အဖြစ်အပျက်များ။"
    },
    {
        id: 23,
        title: "တောတွင်းစွန့်စားခန်း ရယ်စရာများ",
        title_en: "Jungle Comic Adventures",
        author: "ကာတွန်း သန်းကြွယ်",
        author_en: "Cartoon Than Kywe",
        category: "humor",
        price: 12500,
        cover: "images/23.jpg",
        previewText: "တောတောင်ရေမြေနောက်ခံ တိရစ္ဆာန်လေးများနှင့် သဘာဝဟာသ ဇာတ်ကွက်များ စုစည်းမှု။"
    },
    {
        id: 24,
        title: "ကားစုတ်လေးနှင့် အရှုပ်ဇယား",
        title_en: "The Broken Car Troubles",
        author: "ဟာသဆရာ စိုးမိုး",
        author_en: "Soe Moe",
        category: "humor",
        price: 22800,
        cover: "images/24.jpg",
        previewText: "လမ်းဘေးကားဟောင်းလေးတစ်စီးကြောင့် ဖြစ်ပေါ်လာရသော ရပ်ကွက်ထဲမှ အလွဲအချော် ဟာသဝတ္ထုတို။"
    },
    {
        id: 25,
        title: "အမတ်ကြီးနှင့် လူပျိုကြီး",
        title_en: "The Elder & The Bachelor",
        author: "ကာတွန်း ဝင်းအောင်",
        author_en: "Cartoon Win Aung",
        category: "humor",
        price: 13000,
        cover: "images/25.jpg",
        previewText: "လူကြီးလူကောင်းများ၏ မျက်နှာဖုံးနောက်ကွယ်မှ ဟာသဆန်သော လူ့သဘောသဘာဝနှင့် သရော်စာများ။"
    },
    {
        id: 26,
        title: "ရွာရိုးကိုးပေါက် ဟာသခရီး",
        title_en: "Village Comedy Expedition",
        author: "ကာတွန်း တင်မောင်",
        author_en: "Cartoon Tin Maung",
        category: "humor",
        price: 12600,
        cover: "images/26.jpg",
        previewText: "ကျေးလက်ရိုးရာ ပွဲတော်များနှင့် ရွာသူရွာသားတို့၏ ရိုးသားကြည်လင်သော ရယ်မောဖွယ် အဖြစ်အပျက်များ။"
    },
    {
        id: 27,
        title: "သူငယ်ချင်းတို့ မနက်ခင်း",
        title_en: "Friends Morning Chuckles",
        author: "ကာတွန်း ဇော်ဝင်း",
        author_en: "Cartoon Zaw Win",
        category: "humor",
        price: 12500,
        cover: "images/27.jpg",
        previewText: "လက်ဖက်ရည်ဆိုင်ထိုင်ရင်း သူငယ်ချင်းအချင်းချင်း နောက်ပြောင်ကျီစယ်ကြသည့် ပျော်စရာ အလွဲများ။"
    },

    // --- 5. DRAMA / ESSAY (CONTINUED) ---
    {
        id: 28,
        title: "ခေတ်ပြိုင် အတွေးပုံရိပ်များ",
        title_en: "Contemporary Reflections",
        author: "မင်းသုဝဏ်",
        author_en: "Min Thu Wun",
        category: "drama",
        price: 13500,
        cover: "images/28.jpg",
        previewText: "ခေတ်အဆက်ဆက် လူ့အဖွဲ့အစည်း၏ ယဉ်ကျေးမှု၊ စာပေနှင့် ဘဝဒဿနဆိုင်ရာ အတွေးအမြင် စာတမ်းငယ်များ။"
    },

    // --- 2. HEALTH & MINDSET (CONTINUED) ---
    {
        id: 29,
        title: "အိခိဂိုင်း (ဘဝအဓိပ္ပာယ်ကို ရှာဖွေတွေ့ရှိခြင်း)",
        title_en: "Ikigai: Japanese Secret to Long Life",
        author: "Héctor García & Francesc Miralles",
        author_en: "Héctor García & Francesc Miralles",
        category: "health",
        price: 14500,
        cover: "images/29.jpg",
        previewText: "အသက်ရှည်ပြီး စိတ်ကျေနပ်မှုရှိသော ဘဝရရှိစေရန် ဂျပန်လူမျိုးတို့၏ အိခိဂိုင်း ဒဿနနှင့် နေထိုင်နည်း။"
    },
    {
        id: 30,
        title: "ဆေးလိပ်ဖြတ်ခြင်း အောင်မြင်ရေးနည်းလမ်းများ",
        title_en: "Stop Smoking Guide",
        author: "ဒေါက်တာအောင်ကျော်",
        author_en: "Dr. Aung Kyaw",
        category: "health",
        price: 13200,
        cover: "images/30.jpg",
        previewText: "ကျန်းမာရေးနှင့် သက်ရှည်နုပျိုမှုအတွက် ဆေးလိပ်စွဲခြင်းကို စိတ်ခွန်အားဖြင့် စနစ်တကျ တွန်းလှန်နည်းများ။"
    },
    {
        id: 31,
        title: "မိမိကိုယ်ကို ရှာဖွေတွေ့ရှိခြင်း",
        title_en: "Self Discovery & Reflection",
        author: "ဆရာတော် ဉာဏဒီပ",
        author_en: "Ven. Nyanadipa",
        category: "health",
        price: 13000,
        cover: "images/31.jpg",
        previewText: "စိတ်၏ သဘောသဘာဝကို သိမြင်ပြီး ငြိမ်းချမ်းသော အတွင်းစိတ်ကို တည်ဆောက်နည်း တရားရသစာစု။"
    },
    {
        id: 32,
        title: "နုပျိုသော စိတ်နှလုံးနှင့် ရှင်သန်ခြင်း (Emotional Youth)",
        title_en: "Emotional Youth",
        author: "မေမွန်",
        author_en: "May Mon",
        category: "health",
        price: 13500,
        cover: "images/32.jpg",
        previewText: "အသက်အရွယ်မရွေး စိတ်ဓာတ်မကျဘဲ နုပျိုလန်းဆန်းသော စိတ်ခံစားမှုဖြင့် လောကဓံကို ရင်ဆိုင်နည်း။"
    },

    // --- 6. ROMANCE & POETRY (33, 35, 37, 38, 39, 40) ---
    {
        id: 33,
        title: "နှင်းဆီတစ်ပွင့်၏ သံယောဇဉ်",
        title_en: "A Rose of Affection",
        author: "မောင်ချောနွယ်",
        author_en: "Maung Chaw Nwe",
        category: "romance",
        price: 13000,
        cover: "images/33.jpg",
        previewText: "ချစ်ခြင်းမေတ္တာ၏ နူးညံ့မှု၊ အလွမ်းနှင့် သစ္စာတရားတို့ကို ရေးဖွဲ့ထားသော ကဗျာရသစာစုများ။"
    },

    // --- 2. HEALTH (CONTINUED) ---
    {
        id: 34,
        title: "SLEEP (အိပ်စက်ခြင်းဖြင့် အစွမ်းကုန် စွမ်းဆောင်ပါ)",
        title_en: "Sleep: The Myth of 8 Hours",
        author: "Nick Littlehales",
        author_en: "Nick Littlehales",
        category: "health",
        price: 14500,
        cover: "images/34.jpg",
        previewText: "အားကစားသမားများနှင့် အောင်မြင်သူတို့ အသုံးပြုသော အိပ်စက်မှု cycle နည်းပညာနှင့် စွမ်းအင်မြှင့်တင်နည်း။"
    },

    // --- 6. ROMANCE & POETRY (CONTINUED) ---
    {
        id: 35,
        title: "နှစ်ယောက်တစ်ကမ္ဘာ အချစ်ကဗျာများ",
        title_en: "Two Hearts, One World",
        author: "တာရာမင်းဝေ",
        author_en: "Tar Yar Min Wai",
        category: "romance",
        price: 13500,
        cover: "images/35.jpg",
        previewText: "လူငယ်တို့၏ အချစ်ခံစားမှု၊ အမှတ်တရများနှင့် ရင်ခုန်သံတို့ကို ထင်ဟပ်စေသော အချစ်ဝတ္ထုတိုများ။"
    },

    // --- 4. HUMOR (CONTINUED) ---
    {
        id: 36,
        title: "ရွာတော်က ပွဲတော်ကြီး",
        title_en: "The Grand Village Festival",
        author: "ကာတွန်း မြေဇာ",
        author_en: "Cartoon Myay Zar",
        category: "humor",
        price: 22800,
        cover: "images/36.jpg",
        previewText: "မြန်မာ့ရိုးရာ အလှူမင်္ဂလာနှင့် ပွဲလမ်းသဘင်များတွင် ကြုံရတတ်သော ပွဲကျစရာ ဟာသအလွဲများ။"
    },

    // --- 6. ROMANCE & POETRY (CONTINUED) ---
    {
        id: 37,
        title: "လွမ်းရက်ရှည် ရွက်ကြွေညများ",
        title_en: "Fallen Leaves of Longing",
        author: "မောင်စိန်ဝင်း (ပုတီးကုန်း)",
        author_en: "Maung Sein Win (Puteekone)",
        category: "romance",
        price: 13200,
        cover: "images/37.jpg",
        previewText: "ဆောင်းရာသီ၏ အအေးဓာတ်နှင့်အတူ နှလုံးသားကို ညှို့ယူဖမ်းစားမည့် ဂန္ထဝင် အချစ်ကဗျာလက်ရွေးစင်။"
    },
    {
        id: 38,
        title: "ပန်းနုရောင် အချစ်သီချင်း",
        title_en: "Pink Melody of Love",
        author: "နွမ်ဂျာသိုင်း",
        author_en: "Nwam Jar Thaing",
        category: "romance",
        price: 23500,
        cover: "images/38.jpg",
        previewText: "ကြည်နူးဖွယ် မေတ္တာဖွဲ့ ဇာတ်လမ်းများနှင့် လူငယ်စုံတွဲတို့၏ သစ္စာတရား ရသစာစု။"
    },
    {
        id: 39,
        title: "မိုးပြာရောင် သံယောဇဉ်",
        title_en: "Sky Blue Affection",
        author: "လင်းယုန်မောင်မောင်",
        author_en: "Linyon Maung Maung",
        category: "romance",
        price: 23200,
        cover: "images/39.jpg",
        previewText: "ဖြူစင်နူးညံ့သော အချစ်နှင့် ဝေးကွာနေချိန်တွင် ပိုမိုခိုင်မြဲလာသော နှလုံးသားနှောင်ကြိုးအကြောင်း။"
    },
    {
        id: 40,
        title: "ပန်းတွေပွင့်တဲ့ နေ့တစ်နေ့",
        title_en: "The Day Flowers Bloom",
        author: "သုမောင်",
        author_en: "Thu Maung",
        category: "romance",
        price: 13000,
        cover: "images/40.jpg",
        previewText: "ဘဝ၏ အလှတရားများ၊ ပန်းပွင့်များနှင့် သဘာဝကို ချစ်မြတ်နိုးတတ်စေမည့် ရသခံစားမှု စာစုများ။"
    },

    // --- 5. DRAMA & FICTION (41 - 44) ---
    {
        id: 41,
        title: "သစ်ရွက်တို့၏ တိုးတိုးသက်ပြင်း",
        title_en: "Whispering Leaves",
        author: "ဒေါ်ခင်မျိုးချစ်",
        author_en: "Daw Khin Myo Chit",
        category: "drama",
        price: 23500,
        cover: "images/41.jpg",
        previewText: "မြန်မာ့ယဉ်ကျေးမှု အသိုက်အဝန်းထဲမှ အမျိုးသမီးတို့၏ ဘဝတန်ဖိုးနှင့် မိသားစု မေတ္တာဖွဲ့ ရသစာပေ။"
    },
    {
        id: 42,
        title: "အဝေးက လှမ်းမြင်ရသော တောင်တန်း",
        title_en: "Distant Mountain Ridge",
        author: "သော်တာဆွေ",
        author_en: "Thaw Da Swe",
        category: "drama",
        price: 13400,
        cover: "images/42.jpg",
        previewText: "လောကအမြင်၊ လူ့သဘောသဘာဝနှင့် ဘဝအတွေ့အကြုံများကို ပွင့်လင်းရိုးသားစွာ ဖော်ထုတ်ရေးသားထားခြင်း။"
    },
    {
        id: 43,
        title: "လွမ်းရနံ့ ဝေဆာဆဲ နေ့ရက်များ",
        title_en: "Days of Scented Memories",
        author: "မောင်သာနိုး",
        author_en: "Maung Tha Noe",
        category: "drama",
        price: 23600,
        cover: "images/43.jpg",
        previewText: "အတိတ်၏ လှပသော နေ့ရက်များနှင့် လူသားတို့၏ မေ့မရနိုင်သော သံယောဇဉ် အမှတ်တရများ။"
    },
    {
        id: 44,
        title: "ဘဝအလင်းရောင်နှင့် ခရီးသည်",
        title_en: "Life's Light & The Traveler",
        author: "ရွှေဥဒေါင်း",
        author_en: "Shwe U Daung",
        category: "drama",
        price: 13800,
        cover: "images/44.jpg",
        previewText: "ဘဝခရီးလမ်းတွင် အမှားအမှန် ခွဲခြားသိမြင်စေပြီး စိတ်ခွန်အား ရရှိစေမည့် ဘဝဒဿန ဝတ္ထု။"
    }
];

for (let i = 19; i <= 44; i++) {
    let cat = i <= 28 ? "humor" : "romance";
    DEFAULT_BOOKS.push({
        id: i,
        title: cat === "humor" ? `ရယ်မောခြင်းနှင့် ရသပေါင်းချုပ် (အတွဲ ${i - 18})` : `ချစ်ခြင်း၏ ရနံ့ကဗျာများ (အတွဲ ${i - 28})`,
        title_en: cat === "humor" ? `Humor & Joy Vol.${i - 18}` : `Romance & Poems Vol.${i - 28}`,
        author: cat === "humor" ? "ဟာသဆရာ စိုးမိုး" : "ကဗျာဆရာ မောင်လင်း",
        author_en: cat === "humor" ? "Soe Moe" : "Maung Lynn",
        category: cat,
        price: 23000 + ((i % 5) * 200),
        cover: `images/${i}.jpg`,
        previewText: `${cat === "humor" ? "ရယ်မောပျော်ရွှင်စေမည့် ဟာသပုံပြင်တိုများ စုစည်းမှု။" : "ချစ်ခြင်းမေတ္တာနှင့် သံယောဇဉ်တို့ကို ဖော်ကျူးထားသော ကဗျာရသစာစုများ။"}`
    });
}

// Global App State
let booksData = JSON.parse(localStorage.getItem("custom_books_data")) || DEFAULT_BOOKS;
let cart = JSON.parse(localStorage.getItem("cart_data")) || [];
let activeCategory = "all";
let currentLang = localStorage.getItem("app_lang") || "my";
let currentTheme = localStorage.getItem("app_theme") || "light";
let selectedReaderBook = null;
let readerFontSize = 16;
let loginRole = "user";

// ==========================================
// 4. UI RENDERING & FILTERING
// ==========================================
function renderAllShelves() {
    const container = document.getElementById("shelves-container");
    if (!container) return;
    container.innerHTML = "";

    const t = TRANSLATIONS[currentLang];

    const categories = [
        { key: "tech", my: "နည်းပညာ (Technology)", en: "Technology" },
        { key: "health", my: "ကျန်းမာရေးနှင့် အတွေးအမြင်", en: "Health & Mindset" },
        { key: "horror", my: "သည်းထိတ်ရင်ဖို (Horror)", en: "Horror & Mystery" },
        { key: "drama", my: "ဒရာမာနှင့် သုတရသ", en: "Drama & Literature" },
        { key: "humor", my: "ဟာသနှင့် ရသ (Humor)", en: "Humor & Comedy" },
        { key: "romance", my: "အချစ်နှင့် ကဗျာ (Romance)", en: "Romance & Poetry" }
    ];

    categories.forEach(cat => {
        if (activeCategory !== "all" && activeCategory !== cat.key) return;

        const filtered = booksData.filter(b => b.category === cat.key);
        if (filtered.length === 0) return;

        const shelfSection = document.createElement("section");
        shelfSection.className = "shelf-section";
        shelfSection.innerHTML = `
            <h2 class="shelf-title">${currentLang === "my" ? cat.my : cat.en}</h2>
            <div class="books-grid">
                ${filtered.map(book => {
                    const title = currentLang === "my" ? book.title : (book.title_en || book.title);
                    const author = currentLang === "my" ? book.author : (book.author_en || book.author);
                    return `
                        <div class="book-card">
                            <img class="book-cover" src="${book.cover}" onerror="this.src='images/1.jpg'" alt="${title}">
                            <div class="book-info">
                                <h3 class="book-name">${title}</h3>
                                <p class="book-writer">${author}</p>
                                <p class="book-price">${book.price.toLocaleString()} MMK</p>
                                <div class="book-actions">
                                    <button type="button" class="action-btn preview-btn" onclick="openReader(${book.id})">
                                        <i class="fa-solid fa-eye"></i> ${t.btn_preview}
                                    </button>
                                    <button type="button" class="action-btn buy-btn" onclick="addToCart(${book.id})">
                                        <i class="fa-solid fa-cart-plus"></i> ${t.btn_buy}
                                    </button>
                                </div>
                            </div>
                        </div>
                    `;
                }).join("")}
            </div>
        `;
        container.appendChild(shelfSection);
    });
}

function filterCategory(catKey, btnElement) {
    activeCategory = catKey;
    document.querySelectorAll(".pill-btn").forEach(btn => btn.classList.remove("active"));
    if (btnElement) btnElement.classList.add("active");
    renderAllShelves();
}

function handleSearch() {
    const query = document.getElementById("search-input").value.toLowerCase().trim();
    const t = TRANSLATIONS[currentLang];
    
    if (!query) {
        renderAllShelves();
        return;
    }
    const container = document.getElementById("shelves-container");
    container.innerHTML = `<h2 class="shelf-title">${currentLang === 'my' ? 'ရှာဖွေမှုရလဒ်များ' : 'Search Results'}</h2><div class="books-grid" id="search-grid"></div>`;
    const grid = document.getElementById("search-grid");

    const matches = booksData.filter(b =>
        b.title.toLowerCase().includes(query) ||
        (b.title_en && b.title_en.toLowerCase().includes(query)) ||
        b.author.toLowerCase().includes(query) ||
        (b.author_en && b.author_en.toLowerCase().includes(query))
    );

    if (matches.length === 0) {
        grid.innerHTML = `<p style="grid-column: 1/-1; text-align:center; padding: 20px;">${t.empty_search}</p>`;
        return;
    }

    grid.innerHTML = matches.map(book => {
        const title = currentLang === "my" ? book.title : (book.title_en || book.title);
        const author = currentLang === "my" ? book.author : (book.author_en || book.author);
        return `
            <div class="book-card">
                <img class="book-cover" src="${book.cover}" onerror="this.src='images/1.jpg'">
                <div class="book-info">
                    <h3 class="book-name">${title}</h3>
                    <p class="book-writer">${author}</p>
                    <p class="book-price">${book.price.toLocaleString()} MMK</p>
                    <div class="book-actions">
                        <button type="button" class="action-btn preview-btn" onclick="openReader(${book.id})">
                            <i class="fa-solid fa-eye"></i> ${t.btn_preview}
                        </button>
                        <button type="button" class="action-btn buy-btn" onclick="addToCart(${book.id})">
                            <i class="fa-solid fa-cart-plus"></i> ${t.btn_buy}
                        </button>
                    </div>
                </div>
            </div>
        `;
    }).join("");
}

// ==========================================
// 5. E-READER
// ==========================================
function openReader(bookId) {
    selectedReaderBook = booksData.find(b => b.id === bookId);
    if (!selectedReaderBook) return;

    document.getElementById("reader-title").textContent = currentLang === "my" ? selectedReaderBook.title : (selectedReaderBook.title_en || selectedReaderBook.title);
    document.getElementById("reader-author").textContent = currentLang === "my" ? selectedReaderBook.author : (selectedReaderBook.author_en || selectedReaderBook.author);
    document.getElementById("reader-content").textContent = selectedReaderBook.previewText || "အစမ်းဖတ်ရှုရန် စာသား မရှိသေးပါ။";

    const modal = document.getElementById("reader-modal");
    if (modal) modal.style.setProperty("display", "flex", "important");
}

function closeReaderModal() {
    const modal = document.getElementById("reader-modal");
    if (modal) modal.style.setProperty("display", "none", "important");
}

function changeFontSize(delta) {
    readerFontSize = Math.max(12, Math.min(28, readerFontSize + delta));
    document.getElementById("reader-content").style.fontSize = readerFontSize + "px";
}

function buyFromReader() {
    const loggedInUser = sessionStorage.getItem("loggedInUser");
    if (!loggedInUser) {
        closeReaderModal();
        alert("စာအုပ်များ ဝယ်ယူရန်အတွက် ကျေးဇူးပြု၍ အကောင့် အရင်ဝင်ရောက် (Login) ပေးပါ။");
        openLoginModal();
        return;
    }

    if (selectedReaderBook) {
        addToCart(selectedReaderBook.id);
        closeReaderModal();
    }
}

// ==========================================
// 6. CART & COD CHECKOUT
// ==========================================
function addToCart(bookId) {
    const loggedInUser = sessionStorage.getItem("loggedInUser");
    
    if (!loggedInUser) {
        alert("စာအုပ်များ ဝယ်ယူရန်အတွက် ကျေးဇူးပြု၍ အကောင့် အရင်ဝင်ရောက် (Login) ပေးပါ။");
        openLoginModal();
        return;
    }

    const book = booksData.find(b => b.id === bookId);
    if (!book) return;

    const existing = cart.find(item => item.id === bookId);
    if (existing) {
        existing.quantity = (existing.quantity || 1) + 1;
    } else {
        cart.push({ ...book, quantity: 1 });
    }
    saveCart();
    alert(`"${currentLang === 'my' ? book.title : (book.title_en || book.title)}" ကို ခြင်းတောင်းထဲ ထည့်ပြီးပါပြီ။`);
}

function saveCart() {
    localStorage.setItem("cart_data", JSON.stringify(cart));
    const cartCountEl = document.getElementById("cart-count");
    if (cartCountEl) {
        cartCountEl.textContent = cart.reduce((sum, i) => sum + (i.quantity || 1), 0);
    }
}

function openCart() {
    const loggedInUser = sessionStorage.getItem("loggedInUser");
    if (!loggedInUser) {
        alert("ခြင်းတောင်းကို ကြည့်ရှုရန်အတွက် ကျေးဇူးပြု၍ အကောင့် အရင်ဝင်ရောက် (Login) ပေးပါ။");
        openLoginModal();
        return;
    }

    renderCartList();
    const modal = document.getElementById("cart-modal");
    if (modal) {
        modal.style.setProperty("display", "flex", "important");
    }
}

function closeCart() {
    const modal = document.getElementById("cart-modal");
    if (modal) {
        modal.style.setProperty("display", "none", "important");
    }
}

function renderCartList() {
    const list = document.getElementById("cart-items-list");
    const checkoutForm = document.getElementById("checkout-form");
    const t = TRANSLATIONS[currentLang];
    
    if (cart.length === 0) {
        list.innerHTML = `
            <div style="text-align:center; padding: 40px 20px;">
                <i class="fa-solid fa-cart-arrow-down" style="font-size: 45px; color: var(--text-muted); margin-bottom: 12px; display:block;"></i>
                <p style="font-size: 16px; color: var(--text-muted);">${t.empty_cart}</p>
            </div>
        `;
        document.getElementById("cart-total-price").textContent = "0 MMK";
        
        if (checkoutForm) {
            checkoutForm.style.display = "none";
        }
        return;
    }

    if (checkoutForm) {
        checkoutForm.style.display = "block";
    }

    let total = 0;
    list.innerHTML = cart.map((item, idx) => {
        const itemTotal = item.price * (item.quantity || 1);
        total += itemTotal;
        const title = currentLang === "my" ? item.title : (item.title_en || item.title);
        return `
            <div class="cart-item">
                <div>
                    <strong>${title}</strong>
                    <div style="font-size: 12px; color: var(--text-muted);">${item.price.toLocaleString()} MMK x ${item.quantity}</div>
                </div>
                <div style="display: flex; gap: 8px; align-items: center;">
                    <strong>${itemTotal.toLocaleString()} MMK</strong>
                    <button type="button" onclick="removeFromCart(${idx})" style="background:#dc3545; color:#fff; border:none; padding:4px 8px; border-radius:4px; cursor:pointer;">&times;</button>
                </div>
            </div>
        `;
    }).join("");
    document.getElementById("cart-total-price").textContent = total.toLocaleString() + " MMK";
}

function removeFromCart(index) {
    cart.splice(index, 1);
    saveCart();
    renderCartList();
}

async function handleCheckout(e) {
    e.preventDefault();

    if (cart.length === 0) {
        alert(TRANSLATIONS[currentLang].empty_cart);
        return;
    }

    const lockoutUntil = localStorage.getItem("checkout_lockout_until");
    if (lockoutUntil && Date.now() < parseInt(lockoutUntil)) {
        const remainingMinutes = Math.ceil((parseInt(lockoutUntil) - Date.now()) / (60 * 1000));
        alert(`လိပ်စာမှားယွင်းမှုများပြားသဖြင့် အော်ဒါတင်ခြင်းကို ခေတ္တပိတ်ထားပါသည်။ နောက်ထပ် ${remainingMinutes} မိနစ်ခန့် စောင့်ဆိုင်းပေးပါ။`);
        return;
    }

    const name = document.getElementById("cust-name").value.trim();
    const phone = document.getElementById("cust-phone").value.trim();
    const address = document.getElementById("cust-address").value.trim();

    const addrLower = address.toLowerCase();
    const isValidCity = MYANMAR_CITIES.some(city => addrLower.includes(city.toLowerCase()));

    if (!isValidCity) {
        let fails = parseInt(localStorage.getItem("address_fail_count") || "0") + 1;
        localStorage.setItem("address_fail_count", fails.toString());

        if (fails >= 5) {
            localStorage.setItem("checkout_lockout_until", (Date.now() + ADDRESS_LOCKOUT_MS).toString());
            localStorage.removeItem("address_fail_count");
            alert("လိပ်စာ အမှား ၅ ကြိမ် ဖြစ်ပေါ်သဖြင့် အော်ဒါတင်ခြင်းကို ၁ နာရီတိတိ Lockout ချလိုက်ပါပြီ။");
        } else {
            alert(`လိပ်စာတွင် မြန်မာနိုင်ငံရှိ တရားဝင် မြို့အမည် ပါဝင်ရပါမည်။ (အမှားကြိမ်ရေ: ${fails}/5)`);
        }
        return;
    }

    localStorage.removeItem("address_fail_count");

    const totalAmount = cart.reduce((sum, i) => sum + (i.price * (i.quantity || 1)), 0);
    const orderId = "ORD-" + Math.floor(100000 + Math.random() * 900000);
    const currentUser = sessionStorage.getItem("loggedInUser") || "Guest";

    const newOrder = {
        id: orderId,
        username: currentUser,
        customerName: name,
        phone: phone,
        address: address,
        items: [...cart],
        totalAmount: totalAmount,
        status: "Pending",
        date: new Date().toLocaleString()
    };

    let adminOrders = JSON.parse(localStorage.getItem("admin_orders")) || [];
    adminOrders.unshift(newOrder);
    localStorage.setItem("admin_orders", JSON.stringify(adminOrders));

    let userOrders = JSON.parse(localStorage.getItem("user_orders_history")) || [];
    userOrders.unshift(newOrder);
    localStorage.setItem("user_orders_history", JSON.stringify(userOrders));

    sendTelegramOrderNotification(newOrder);

    alert(`အော်ဒါတင်ခြင်း အောင်မြင်ပါသည်!\n-------------------------\nOrder ID: ${orderId}\nဝယ်ယူသူ: ${name}\nကျသင့်ငွေ: ${totalAmount.toLocaleString()} MMK\nRoyal Express (COD) ဖြင့် မကြာမီ ပို့ဆောင်ပေးပါမည်။`);

    cart = [];
    saveCart();
    closeCart();
    
    const checkoutForm = document.getElementById("checkout-form");
    if (checkoutForm) checkoutForm.reset();
}

async function sendTelegramOrderNotification(order) {
    const bookList = order.items.map(i => `- ${i.title} (${i.quantity || 1} အုပ်)`).join("\n");
    
    const textMsg = `📦 အော်ဒါအသစ် ရောက်ရှိပါသည်!\n` +
                    `-------------------------\n` +
                    `🆔 Order ID: ${order.id}\n` +
                    `👤 ဝယ်သူအမည်: ${order.customerName}\n` +
                    `📞 ဖုန်းနံပါတ်: ${order.phone}\n` +
                    `📍 လိပ်စာ: ${order.address}\n` +
                    `🚚 ပို့ဆောင်ရေး: Royal Express (COD)\n` +
                    `-------------------------\n` +
                    `📚 စာအုပ်များ:\n${bookList}\n` +
                    `-------------------------\n` +
                    `💰 စုစုပေါင်း: ${order.totalAmount.toLocaleString()} MMK\n` +
                    `🕒 အချိန်: ${order.date}`;

    try {
        await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                chat_id: TELEGRAM_CHAT_ID,
                text: textMsg
            })
        });
    } catch (error) {
        console.warn("Telegram notification network error:", error);
    }
}

// ==========================================
// 7. USER MY ORDERS
// ==========================================
function openMyOrders() {
    const loggedInUser = sessionStorage.getItem("loggedInUser");

    if (!loggedInUser) {
        alert("ကျေးဇူးပြု၍ မိမိ၏ အော်ဒါမှတ်တမ်းများကို ကြည့်ရှုရန် အကောင့် အရင်ဝင်ရောက် (Login) ပေးပါ။");
        openLoginModal();
        return;
    }

    const modal = document.getElementById("my-orders-modal");
    const container = document.getElementById("user-orders-list");
    const t = TRANSLATIONS[currentLang];

    if (!container) return;

    const allUserOrders = JSON.parse(localStorage.getItem("user_orders_history")) || [];
    const myOrders = allUserOrders.filter(order => order.username === loggedInUser);

    if (myOrders.length === 0) {
        container.innerHTML = `
            <div style="text-align:center; padding: 40px 20px;">
                <i class="fa-solid fa-receipt" style="font-size: 45px; color: var(--text-muted); margin-bottom: 12px; display:block;"></i>
                <p style="font-size: 16px; color: var(--text-muted);">${t.empty_orders}</p>
            </div>
        `;
    } else {
        container.innerHTML = myOrders.map(order => `
            <div style="border: 1px solid var(--border-color); padding: 16px; margin-bottom: 14px; border-radius: 8px; background: var(--bg-color); text-align: left;">
                <div style="display:flex; justify-content:space-between; margin-bottom: 8px; border-bottom: 1px solid var(--border-color); padding-bottom: 6px;">
                    <strong>Order ID: ${order.id}</strong>
                    <span style="color: ${order.status === 'Delivered' ? '#28a745' : '#ffc107'}; font-weight: bold;">
                        ● ${order.status}
                    </span>
                </div>
                <p style="font-size:13px; color:var(--text-muted); margin-bottom: 4px;">🕒 ရက်စွဲ: ${order.date}</p>
                <p style="font-size:14px; margin: 4px 0;">📍 <strong>ပို့ဆောင်မည့်လိပ်စာ:</strong> ${order.address}</p>
                <p style="font-size:14px; margin: 4px 0;">📚 <strong>စာအုပ်များ:</strong><br>
                    ${order.items.map(i => `• ${currentLang === 'my' ? i.title : (i.title_en || i.title)} (${i.quantity || 1} အုပ်)`).join("<br>")}
                </p>
                <p style="font-size:15px; color:var(--primary-color); font-weight:bold; margin-top: 8px;">💰 စုစုပေါင်း: ${order.totalAmount.toLocaleString()} MMK (COD)</p>
            </div>
        `).join("");
    }

    if (modal) modal.style.setProperty("display", "flex", "important");
}

function closeMyOrders() {
    const modal = document.getElementById("my-orders-modal");
    if (modal) modal.style.setProperty("display", "none", "important");
}

// ==========================================
// 8. AUTHENTICATION & INTERFACE SWITCHER
// ==========================================
function togglePasswordVisibility(inputId, btn) {
    const input = document.getElementById(inputId);
    const icon = btn.querySelector("i");
    if (input.type === "password") {
        input.type = "text";
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");
    } else {
        input.type = "password";
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye");
    }
}

function updateNavigationUI() {
    const isAdmin = sessionStorage.getItem("isAdminLoggedIn") === "true";
    const loggedInUser = sessionStorage.getItem("loggedInUser");

    const adminMainView = document.getElementById("admin-main-view");
    const userMainView = document.getElementById("user-main-view");
    const searchBarContainer = document.getElementById("search-bar-container");

    const userNavItems = document.querySelectorAll(".user-nav-item");
    const loginBtn = document.getElementById("nav-login-btn");
    const logoutBtn = document.getElementById("nav-logout-btn");

    if (isAdmin) {
        if (adminMainView) adminMainView.style.display = "block";
        if (userMainView) userMainView.style.display = "none";
        if (searchBarContainer) searchBarContainer.style.display = "none";

        userNavItems.forEach(item => item.style.setProperty("display", "none", "important"));
        if (logoutBtn) logoutBtn.style.setProperty("display", "inline-flex", "important");

        switchAdminTab('orders');
    } else {
        if (adminMainView) adminMainView.style.display = "none";
        if (userMainView) userMainView.style.display = "block";
        if (searchBarContainer) searchBarContainer.style.display = "flex";

        userNavItems.forEach(item => item.style.setProperty("display", "inline-flex", "important"));

        if (loggedInUser) {
            if (loginBtn) loginBtn.style.setProperty("display", "none", "important");
            if (logoutBtn) logoutBtn.style.setProperty("display", "inline-flex", "important");
        } else {
            if (loginBtn) loginBtn.style.setProperty("display", "inline-flex", "important");
            if (logoutBtn) logoutBtn.style.setProperty("display", "none", "important");
        }

        renderAllShelves();
    }
}

function openLoginModal() {
    const savedUser = localStorage.getItem("saved_login_user");
    const savedPass = localStorage.getItem("saved_login_pass");
    const rememberCheckbox = document.getElementById("remember-me-checkbox");

    if (savedUser && savedPass) {
        document.getElementById("login-username").value = savedUser;
        document.getElementById("login-password").value = savedPass;
        if (rememberCheckbox) rememberCheckbox.checked = true;
    }

    const modal = document.getElementById("login-modal");
    if (modal) modal.style.setProperty("display", "flex", "important");
}

function closeLoginModal() {
    const modal = document.getElementById("login-modal");
    if (modal) modal.style.setProperty("display", "none", "important");
}

function switchLoginTab(role) {
    loginRole = role;
    const tabUser = document.getElementById("tab-user-btn");
    const tabAdmin = document.getElementById("tab-admin-btn");
    const rememberContainer = document.getElementById("remember-me-container");
    const identifierLabel = document.getElementById("login-identifier-label");
    const identifierInput = document.getElementById("login-username");

    if (tabUser) tabUser.classList.toggle("active", role === "user");
    if (tabAdmin) tabAdmin.classList.toggle("active", role === "admin");
    
    if (role === "admin") {
        if (identifierLabel) identifierLabel.textContent = "Admin Username:";
        if (identifierInput) identifierInput.placeholder = "Enter admin username";
        if (rememberContainer) rememberContainer.style.display = "none";
    } else {
        if (identifierLabel) identifierLabel.textContent = "Gmail လိပ်စာ:";
        if (identifierInput) identifierInput.placeholder = "example@gmail.com";
        if (rememberContainer) rememberContainer.style.display = "flex";
    }
}

function isValidGmail(email) {
    return /^[a-zA-Z0-9._%+-]+@gmail\.com$/i.test(email);
}

function handleLoginSubmit(e) {
    e.preventDefault();

    const loginLockUntil = localStorage.getItem("login_lockout_until");
    if (loginLockUntil && Date.now() < parseInt(loginLockUntil)) {
        const remainingHours = Math.ceil((parseInt(loginLockUntil) - Date.now()) / (60 * 60 * 1000));
        alert(`Password မှားယွင်းမှု ၅ ကြိမ် ပြည့်သွားသဖြင့် အကောင့်ဝင်ရောက်ခြင်းကို ပိတ်ထားပါသည်။ နောက်ထပ် ${remainingHours} နာရီခန့် (၁ ရက်ပြည့်သည်အထိ) စောင့်ဆိုင်းပြီးမှ ပြန်လည်ကြိုးစားပါ။`);
        return;
    }

    const identifier = document.getElementById("login-username").value.trim();
    const pass = document.getElementById("login-password").value.trim();
    const rememberMe = document.getElementById("remember-me-checkbox")?.checked;

    if (loginRole === "admin") {
        if (identifier === ADMIN_USERNAME && pass === ADMIN_PASSWORD) {
            localStorage.removeItem("login_fail_count");
            localStorage.removeItem("login_lockout_until");

            sessionStorage.setItem("isAdminLoggedIn", "true");
            alert("Admin Login အောင်မြင်ပါသည်။");
            closeLoginModal();
            updateNavigationUI();
        } else {
            handleLoginFailure();
        }
    } else {
        if (!isValidGmail(identifier)) {
            alert("Error: User အကောင့်သည် မှန်ကန်သော Gmail လိပ်စာ (@gmail.com) ဖြင့်သာ ဝင်ရောက်ရပါမည်။");
            return;
        }

        if (pass.length < 4) {
            handleLoginFailure();
            return;
        }

        localStorage.removeItem("login_fail_count");
        localStorage.removeItem("login_lockout_until");

        if (rememberMe) {
            localStorage.setItem("saved_login_user", identifier);
            localStorage.setItem("saved_login_pass", pass);
        } else {
            localStorage.removeItem("saved_login_user");
            localStorage.removeItem("saved_login_pass");
        }

        sessionStorage.setItem("loggedInUser", identifier);
        alert(`Welcome, ${identifier}!`);
        closeLoginModal();
        updateNavigationUI();
    }
}

function handleLoginFailure() {
    let fails = parseInt(localStorage.getItem("login_fail_count") || "0") + 1;
    localStorage.setItem("login_fail_count", fails.toString());

    if (fails >= 5) {
        localStorage.setItem("login_lockout_until", (Date.now() + LOGIN_LOCKOUT_MS).toString());
        localStorage.removeItem("login_fail_count");
        alert("Password ၅ ကြိမ် မှားယွင်းသွားသဖြင့် အကောင့်ဝင်ခြင်းကို ၁ ရက် (၂၄ နာရီ) တိတိ ပိတ်လိုက်ပါပြီ။");
    } else {
        alert(`အကောင့်အမည် သို့မဟုတ် Password မှားယွင်းနေပါသည်။ (အမှားကြိမ်ရေ: ${fails}/5 ကြိမ်) \n၅ ကြိမ်ပြည့်ပါက ၁ ရက်တိတိ ပိတ်ပါမည်။`);
    }
}

function handleLogout() {
    sessionStorage.removeItem("isAdminLoggedIn");
    sessionStorage.removeItem("loggedInUser");
    alert("Logout ထွက်ပြီးပါပြီ။");
    updateNavigationUI();
}

// ==========================================
// 9. ADMIN PANEL (ORDERS, ADD BOOK, & DELETE BOOK)
// ==========================================
function switchAdminTab(tab) {
    const isOrders = tab === "orders";
    const isAdd = tab === "addbook";
    const isManage = tab === "managebooks";

    document.getElementById("adm-tab-orders")?.classList.toggle("active", isOrders);
    document.getElementById("adm-tab-addbook")?.classList.toggle("active", isAdd);
    document.getElementById("adm-tab-managebooks")?.classList.toggle("active", isManage);

    const ordersContent = document.getElementById("admin-orders-tab");
    const addContent = document.getElementById("admin-addbook-tab");
    const manageContent = document.getElementById("admin-managebooks-tab");

    if (ordersContent) ordersContent.style.display = isOrders ? "block" : "none";
    if (addContent) addContent.style.display = isAdd ? "block" : "none";
    if (manageContent) manageContent.style.display = isManage ? "block" : "none";
    
    if (isOrders) renderAdminOrders();
    if (isManage) renderAdminManageBooks();
}

function renderAdminOrders() {
    const container = document.getElementById("admin-orders-list");
    const adminOrders = JSON.parse(localStorage.getItem("admin_orders")) || [];

    if (!container) return;

    const tgHeader = `
        <div style="background: rgba(13, 110, 253, 0.12); border: 1px solid var(--primary-color); padding: 16px; border-radius: 8px; margin-bottom: 20px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px;">
            <div>
                <strong style="font-size: 16px; color: var(--primary-color);"><i class="fa-brands fa-telegram" style="color: #229ED9; font-size: 20px;"></i> Telegram Live Orders & Notifications</strong>
                <p style="font-size: 13px; color: var(--text-muted); margin-top: 4px;">User များ မှာယူထားသော အော်ဒါအချက်အလက်များကို Telegram Bot သို့ Noti အလိုအလျောက် ပို့ပေးထားပါသည်။</p>
            </div>
            <a href="https://t.me/reading_homies_order_bot" target="_blank" style="background: #229ED9; color: #fff; padding: 8px 16px; border-radius: 6px; text-decoration: none; font-size: 14px; font-weight: bold; display: inline-flex; align-items: center; gap: 6px;">
                <i class="fa-brands fa-telegram"></i> Open TG Bot
            </a>
        </div>
    `;

    if (adminOrders.length === 0) {
        container.innerHTML = tgHeader + `
            <div style="text-align:center; padding: 40px 20px; background: var(--bg-color); border: 1px dashed var(--border-color); border-radius: 8px;">
                <i class="fa-solid fa-box-open" style="font-size: 40px; color: var(--text-muted); margin-bottom: 10px; display:block;"></i>
                <p style="color: var(--text-muted); font-size: 15px;">လက်ရှိတွင် User များ မှာယူထားသော အော်ဒါမှတ်တမ်း မရှိသေးပါ။</p>
            </div>
        `;
        return;
    }

    const ordersHtml = adminOrders.map((order, idx) => `
        <div style="border: 1px solid var(--border-color); padding: 16px; margin-bottom: 14px; border-radius: 8px; background: var(--bg-color); text-align: left;">
            <div style="display:flex; justify-content:space-between; margin-bottom: 8px; border-bottom: 1px solid var(--border-color); padding-bottom: 6px;">
                <strong>Order ID: ${order.id}</strong>
                <span style="color: ${order.status === 'Delivered' ? '#28a745' : '#ffc107'}; font-weight: bold;">
                    ● ${order.status}
                </span>
            </div>
            <p style="margin: 4px 0;"><strong>👤 ဝယ်သူအမည်:</strong> ${order.customerName} (📞 <a href="tel:${order.phone}" style="color:var(--primary-color); text-decoration:none;">${order.phone}</a>)</p>
            <p style="margin: 4px 0;"><strong>📍 လိပ်စာ:</strong> ${order.address}</p>
            <p style="margin: 4px 0; font-size: 13px; color: var(--text-muted);"><strong>🕒 မှာယူသည့် အချိန်:</strong> ${order.date}</p>
            <p style="margin: 6px 0;"><strong>📚 မှာယူထားသော စာအုပ်များ:</strong><br>
                ${order.items.map(i => `• ${i.title} (${i.quantity || 1} အုပ်) - ${(i.price * (i.quantity || 1)).toLocaleString()} MMK`).join("<br>")}
            </p>
            <p style="color: var(--primary-color); font-weight: bold; font-size: 16px; margin-top: 6px;">💰 စုစုပေါင်း: ${order.totalAmount.toLocaleString()} MMK (COD)</p>
            
            <div style="margin-top: 12px; display: flex; gap: 10px;">
                <button type="button" onclick="toggleOrderStatus(${idx})" style="background: var(--primary-color); color: white; border: none; padding: 6px 14px; border-radius: 4px; cursor: pointer; font-weight: 600;">
                    ${order.status === 'Delivered' ? 'Mark as Pending' : 'Mark as Delivered'}
                </button>
                <button type="button" onclick="deleteAdminOrder(${idx})" style="background: #dc3545; color: white; border: none; padding: 6px 14px; border-radius: 4px; cursor: pointer; font-weight: 600;">
                    Delete Order
                </button>
            </div>
        </div>
    `).join("");

    container.innerHTML = tgHeader + ordersHtml;
}

function toggleOrderStatus(index) {
    let adminOrders = JSON.parse(localStorage.getItem("admin_orders")) || [];
    if (adminOrders[index]) {
        adminOrders[index].status = adminOrders[index].status === "Delivered" ? "Pending" : "Delivered";
        localStorage.setItem("admin_orders", JSON.stringify(adminOrders));
        renderAdminOrders();
    }
}

function deleteAdminOrder(index) {
    if (confirm("ဒီအော်ဒါကို စာရင်းထဲမှ ဖျက်ပစ်မှာ သေချာပါသလား?")) {
        let adminOrders = JSON.parse(localStorage.getItem("admin_orders")) || [];
        adminOrders.splice(index, 1);
        localStorage.setItem("admin_orders", JSON.stringify(adminOrders));
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
    const price = parseInt(document.getElementById("new-book-price").value) || 3500;
    const cover = document.getElementById("new-book-cover").value.trim() || "images/1.jpg";
    const preview = document.getElementById("new-book-preview").value.trim();

    const newBook = {
        id: Date.now(),
        title,
        title_en: title_en || title,
        author,
        author_en: author_en || author,
        category,
        price,
        cover,
        previewText: preview
    };

    booksData.unshift(newBook);
    localStorage.setItem("custom_books_data", JSON.stringify(booksData));

    alert(`" ${title} " စာအုပ်ကို Catalog ထဲသို့ အောင်မြင်စွာ ထည့်သွင်းပြီးပါပြီ။`);
    document.getElementById("admin-addbook-form").reset();
    switchAdminTab("managebooks");
}

function renderAdminManageBooks() {
    const container = document.getElementById("admin-books-manage-list");
    if (!container) return;

    if (booksData.length === 0) {
        container.innerHTML = "<p style='text-align:center; padding: 20px;'>လက်ရှိတွင် စာအုပ်စာရင်း မရှိသေးပါ။</p>";
        return;
    }

    container.innerHTML = booksData.map((book) => `
        <div style="display: flex; align-items: center; justify-content: space-between; padding: 12px 16px; background: var(--bg-color); border: 1px solid var(--border-color); border-radius: 8px; gap: 15px;">
            <div style="display: flex; align-items: center; gap: 15px;">
                <img src="${book.cover}" onerror="this.src='images/1.jpg'" style="width: 45px; height: 60px; object-fit: cover; border-radius: 4px;">
                <div>
                    <h4 style="margin: 0 0 4px 0; font-size: 15px;">${book.title} ${book.title_en ? `(${book.title_en})` : ''}</h4>
                    <p style="margin: 0; font-size: 13px; color: var(--text-muted);">ရေးသူ: ${book.author} | ဈေးနှုန်း: ${book.price.toLocaleString()} MMK | ကဏ္ဍ: ${book.category}</p>
                </div>
            </div>
            <button type="button" onclick="deleteBookById(${book.id})" style="background: #dc3545; color: #fff; border: none; padding: 8px 14px; border-radius: 6px; cursor: pointer; font-weight: 600; display: flex; align-items: center; gap: 6px;">
                <i class="fa-solid fa-trash-can"></i> Delete
            </button>
        </div>
    `).join("");
}

function deleteBookById(bookId) {
    const targetBook = booksData.find(b => b.id === bookId);
    const bookTitle = targetBook ? targetBook.title : "ဒီစာအုပ်";

    if (confirm(`" ${bookTitle} " ကို စာအုပ်စင်စာရင်းထဲမှ အပြီးတိုင် ဖျက်ပစ်မှာ သေချာပါသလား?`)) {
        booksData = booksData.filter(b => b.id !== bookId);
        localStorage.setItem("custom_books_data", JSON.stringify(booksData));
        
        cart = cart.filter(item => item.id !== bookId);
        saveCart();

        alert(`" ${bookTitle} " ကို စာအုပ်စင်ပေါ်မှ ဖျက်ပစ်ပြီးပါပြီ။`);
        renderAdminManageBooks();
    }
}

// ==========================================
// 10. THEME & LANGUAGE CONTROLLERS
// ==========================================
function toggleTheme() {
    currentTheme = currentTheme === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", currentTheme);
    localStorage.setItem("app_theme", currentTheme);
    const themeBtn = document.getElementById("theme-toggle-btn");
    if (themeBtn) {
        themeBtn.innerHTML = currentTheme === "dark" 
            ? '<i class="fa-solid fa-sun"></i>' 
            : '<i class="fa-solid fa-moon"></i>';
    }
}

function toggleLanguage() {
    currentLang = currentLang === "my" ? "en" : "my";
    localStorage.setItem("app_lang", currentLang);
    applyLanguage();
}

function applyLanguage() {
    const t = TRANSLATIONS[currentLang];

    const langLabel = document.getElementById("lang-label");
    if (langLabel) {
        langLabel.textContent = currentLang === "my" ? "EN" : "မြန်မာ";
    }

    const searchInput = document.getElementById("search-input");
    if (searchInput) {
        searchInput.placeholder = t.search_placeholder;
    }

    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (t[key]) {
            el.textContent = t[key];
        }
    });

    renderAllShelves();
}

// ==========================================
// 11. APP INITIALIZATION & OUTSIDE CLICK CLOSER
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
    if (currentTheme === "dark") {
        document.documentElement.setAttribute("data-theme", "dark");
        const themeBtn = document.getElementById("theme-toggle-btn");
        if (themeBtn) themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
    }

    window.addEventListener("click", (e) => {
        if (e.target && e.target.classList.contains("modal")) {
            e.target.style.setProperty("display", "none", "important");
        }
    });

    applyLanguage();
    saveCart();
    updateNavigationUI();
});