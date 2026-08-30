// စာအုပ်ဒေတာများ (images/ ဖိုင်တွဲထဲရှိ ပုံနံပါတ်များ 1.jpg မှ 19.jpg အထိ ချိတ်ဆက်ထားပါသည်)
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
        previewText: `PHP ဟာ လက်ရှိ Web Development ကဏ္ဍမှာ လူသုံးအများဆုံး Server-Side Programming Language ဖြစ်ပါတယ်။ Facebook, Wikipedia, Vimeo, Slack စသည်ဖြင့် အသုံးပြုသူ သန်းပေါင်းများစွာရှိတဲ့ ဝဘ်ဆိုက်တွေဟာ အဓိက PHP ကို အသုံးပြုဖန်တီးထားခြင်း ဖြစ်ပါတယ်။

Chrome, Firefox, Edge စတဲ့ Web Browser တွေမှာ လိပ်စာ URL ရိုက်ထည့်ပြီး အသုံးပြုရတဲ့ ဝဘ်ဆိုက်တွေကို နှစ်ပိုင်းခွဲလို့ ရပါတယ်။ အများအားဖြင့် သတင်းအချက်အလက် ဖော်ပြရုံ၊ ဖောင်ဖြည့်ရုံ သက်သက်လောက်ဆိုရင် Website လို့ခေါ်ပြီး အသုံးချလုပ်ဆောင်ချက်တွေ ပါဝင်တယ်ဆိုရင်တော့ Web Application လို့ ခေါ်ကြပါတယ်။

PHP ဟာ General Purpose Programming Language တစ်ခုဖြစ်ပြီး စတင်တီထွင်ကတည်းက Web Development လုပ်ငန်းအတွက် ရည်ရွယ်တီထွင်ခဲ့တာ ဖြစ်ပါတယ်။ Client-side Language ဖြစ်တဲ့ JavaScript နဲ့ သဘောသဘာဝ မတူပေမယ့် ရေးထုံးတွေ ဆင်တူတာကြောင့် လေ့လာရ လွယ်ကူပါတယ်။`,
        previewText_en: `PHP is the most widely used server-side programming language in modern web development, powering major platforms like Facebook, Wikipedia, Vimeo, and Slack.

Websites can generally be categorized into informational Websites and functional Web Applications with interactive features.

Specifically designed for the web, PHP provides an accessible learning curve for developers familiar with client-side JavaScript.`,
        fullText: `အခန်း (၁) – World Wide Web

PHP အကြောင်း မပြောခင် World Wide Web နည်းပညာအကြောင်း အရင်ပြောဖို့ လိုအပ်ပါတယ်။ အရင်က World Wide Web နည်းပညာကို အတိုကောက် WWW လို့ ခေါ်ကြပေမယ့် အခုတော့ မခေါ်ကြတော့ပါဘူး။ WWW လို့ အတိုကောက် အသံထွက်ရတာက World Wide Web လို့ အပြည့်အစုံ အသံထွက်ရတာထက်တောင် ပိုရှည်နေပါတယ်။ အခုတော့ အတိုကောက် Web လို့ပဲ ခေါ်ကြပါတော့တယ်။

Web ဆိုတာ အင်တာနက်ကို အသုံးပြုပြီး သတင်းအချက်အလက်တွေ ဖြန့်ဝေ/ရယူနိုင်တဲ့ နည်းပညာတစ်ခု ဖြစ်ပါတယ်။ ဒီနေရာမှာ Web နဲ့ Internet ဆိုတဲ့ နည်းပညာနှစ်ခုကို မရောဖို့ လိုပါတယ်။ အင်တာနက်ဆိုတာ ကမ္ဘာအနှံ့မှာ ရှိတဲ့ ကွန်ပျူတာ Network များ အချင်းချင်း ချိတ်ဆက်ထားတဲ့ Network တွေရဲ့ Network ကွန်ရက်ကြီး ဖြစ်ပါတယ်။ ဒီအင်တာနက်ကွန်ရက်ကို အသုံးပြုပြီး သတင်းအချက်အလက် ဖြန့်ဝေ/ရယူနိုင်တဲ့ နည်းပညာပေါင်း များစွာရှိပါတယ်။ ဥပမာ - အီးမေးလ်ဟာ အင်တာနက်ကို အသုံးပြုပြီး စာပို့/စာယူ လုပ်နိုင်တဲ့ နည်းပညာတစ်ခုပါ။ FTP ခေါ် အင်တာနက်ကို အသုံးပြုပြီး ဖိုင်တွေ ပေးပို့/ရယူနိုင်တဲ့ နည်းပညာလည်း ရှိပါတယ်။ Web ဆိုတာ အဲ့ဒီလို နည်းပညာပေါင်းများစွာထဲက တစ်ခုအပါအဝင် ဖြစ်ပါတယ်။

ယနေ့အချိန်မှာ Web Browser ကိုဖွင့်ပြီး ဝဘ်ဆိုက်တွေ ကြည့်လို့ရလာပြီ၊ အီးမေးလ်လည်း ပို့လို့ရနေတယ်၊ ဖိုင်တွေလည်း ပို့လို့ရနေတယ်၊ စာတွေနဲ့ ရုပ်သံတွေလည်း ဆက်သွယ်လို့ရနေပါတယ်။ ဒါကြောင့် Web = Internet လို့ ထင်ချင်စရာ ဖြစ်နေပါတယ်။ မဟုတ်ပါဘူး။ Web ဆိုတာ Internet ကို အသုံးပြုပြီး သတင်းအချက်အလက်တွေ ဖြန့်ဝေ/ရယူနိုင်တဲ့ နည်းပညာပေါင်းများစွာထဲက တစ်ခုဖြစ်ပါတယ်ဆိုတာကို ရှင်းရှင်းလင်းလင်း သိမြင်ထားဖို့ လိုအပ်ပါတယ်။

---

Web နည်းပညာမှာ အပိုင်း (၃) ပိုင်း ပါဝင်ပါတယ်။ Client, Server နဲ့ Protocol တို့ ဖြစ်ပါတယ်။
၁။ Client ဆိုတာ လိုချင်တဲ့ အချက်အလက်ကို ဆက်သွယ်တောင်းယူမယ့်သူ ဖြစ်ပါတယ်။
၂။ Server ဆိုတာ ဆက်သွယ်တောင်းယူလာတဲ့အခါ တုံ့ပြန်ပေးမယ့်သူ ဖြစ်ပါတယ်။
၃။ Protocol ကတော့ Client နဲ့ Server တို့ အပြန်အလှန်ဆက်သွယ်ဖို့ အသုံးပြုကြမယ့် ကြားဆက်သွယ်ရေးနည်းပညာ ဖြစ်ပါတယ်။

Client ဘက်ပိုင်းမှာ (၃) မျိုး ထပ်ခွဲနိုင်ပါတယ် - User, Device နဲ့ User Agent တို့ ဖြစ်ပါတယ်။
- User ကတော့ အချက်အလက်တွေကို ရယူလိုသူ သင်ကိုယ်တိုင် ဖြစ်ပါတယ်။
- Device ကတော့ သင်အသုံးပြုမယ့် ကွန်ပျူတာ၊ ဖုန်း၊ Tablet စတဲ့ စက်ပစ္စည်း ဖြစ်ပါတယ်။
- User Agent ကတော့ သင့်ကိုယ်စား အချက်အလက်တွေကို အမှန်တကယ် သွားယူပေးမယ့် ဆော့ဖ်ဝဲ ဖြစ်ပြီး အများအားဖြင့် Web Browser ကို ပြောတာ ဖြစ်ပါတယ်။

Server ဘက်ခြမ်းမှာလည်း (၂) မျိုး ရှိနိုင်ပါတယ် - Server ကွန်ပျူတာ နဲ့ Server ဆော့ဖ်ဝဲ တို့ ဖြစ်ပါတယ်။ Server ကွန်ပျူတာတစ်ခုထဲမှာ Server ဆော့ဖ်ဝဲ အမျိုးမျိုး ရှိနေနိုင်ပါတယ်။ ဥပမာ ဝဘ်ဆိုက်ကို တောင်းယူရင် Web Server ဆော့ဖ်ဝဲက ဖြေရှင်းပေးပြီး၊ ဖိုင်ကို တောင်းယူရင် FTP Server ဆော့ဖ်ဝဲက ဖြေရှင်းပေးတာမျိုး ဖြစ်ပါတယ်။

ဆက်သွယ်ရေးနည်းပညာအတွက် HTTP လို့ အတိုကောက်ခေါ်တဲ့ Hypertext Transfer Protocol ကို အသုံးပြုကြပါတယ်။

---

HTTP အလုပ်လုပ်ပုံ အဆင့်ဆင့် (1, 2, 3) -
၁။ ပထမဦးဆုံး User က Browser ထဲမှာ လိုချင်တဲ့ URL လိပ်စာကို ရိုက်ထည့်ပါတယ်။
၂။ Browser က URL ပေါ်မူတည်ပြီး HTTP Request ကို တည်ဆောက်ပြီး Server ထံသို့ ပေးပို့ပါတယ်။ (HTTP Request မှာ Header နဲ့ Body ဆိုပြီး နှစ်ပိုင်းပါဝင်ပါတယ်)။
၃။ Server က Request လက်ခံရရှိတဲ့အခါ လုပ်စရာရှိတာ လုပ်ပါတယ်။ ဥပမာ- home.php ထဲက <?= 1 + 2 ?> ဆိုတဲ့ PHP ကုဒ်ကို Server က အရင် Run လိုက်ပြီး ရလဒ် 3 ကို ထုတ်ပေးပါတယ်။ PHP ကုဒ်တွေဟာ Server မှာ အလုပ်လုပ်ပြီးသားဖြစ်လို့ ရလဒ်ထဲမှာ မကျန်တော့ပါဘူး။ ဒါကြောင့် PHP ကို Server-side နည်းပညာလို့ ခေါ်တာ ဖြစ်ပါတယ်။
၄။ Server က HTTP Response (Header + Body) ကို ပြန်လည်တည်ဆောက်ပြီး Browser ဆီ ပြန်ပို့ပေးပါတယ်။
၅။ Browser (User Agent) က Response ကို လက်ခံရရှိတဲ့အခါ User ကြည့်လို့ရအောင် ဖော်ပြပေးပြီး ဆက်သွယ်မှု ပြီးဆုံးသွားပါတယ်။

---

Request / Response Headers
Client က Server ဆီ တောင်းဆိုတဲ့အခါ GET နဲ့ POST ဆိုတဲ့ Request Method တွေကို အဓိက သုံးပါတယ်။
- GET Method: အချက်အလက်တွေကို ဆာဗာဆီကနေ ရယူ (Read/Fetch) လိုတဲ့အခါ သုံးပါတယ်။
- POST Method: အချက်အလက်အသစ်တွေ ပို့ပေးဖို့၊ ပြင်ဆင်ဖို့ ဒါမှမဟုတ် ပြောင်းလဲစေလိုတဲ့အခါ သုံးပါတယ်။`,
        fullText_en: `Before diving into PHP, understanding the World Wide Web (Web) is essential. The Web is an information dissemination and retrieval system operating on top of the Internet infrastructure.
The Internet is the global network of interconnected computer networks. Many technologies run on the Internet, including Email (SMTP/IMAP), File Transfer Protocol (FTP), and the Web (HTTP).

Three Core Components of the Web:
1. Client: Requests information (User, Device, and User Agent/Browser).
2. Server: Responds with requested resources (Server Hardware and Server Software like Apache/Nginx).
3. Protocol: Communication rules bridging Client and Server (HTTP - Hypertext Transfer Protocol).

How HTTP Request/Response Works:
1. The user inputs a URL into the browser.
2. The browser generates an HTTP Request containing a Header and Body, then sends it to the server.
3. The server processes server-side code (e.g., executing PHP: <?= 1 + 2 ?> resulting in 3) so that only raw output is delivered.
4. The server packages an HTTP Response (Header + Body) and returns it.
5. The browser renders the response visually for the user.

Common HTTP Methods:
- GET: Retrieve data from the server.
- POST: Send or mutate data on the server.`
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
        previewText: `Laravel ဟာ လူကြိုက်များ ထင်ရှားနေတဲ့ PHP Framework တစ်ခုပါ။ Laravel ရဲ့ ကျစ်လစ်ရှင်းလင်းတဲ့ ဖွဲ့စည်းပုံကြောင့် ဒီ Framework ကို သုံးပြီး ကုဒ်တွေရေးရတာ နှစ်လိုဖွယ် ပျော်ရွှင်စရာ ကောင်းပါတယ်။ အရင်က PHP ကုဒ်လို့ ပြောလိုက်ရင် ရှုပ်ယှက်ခတ်ပြီး ဖတ်ရခက်တဲ့ ကုဒ်တွေကို ပြေးမြင်ကြပေမယ့်၊ အခုနောက်ပိုင်းမှာတော့ PHP Language ကိုယ်တိုင်ရဲ့ တိုးတက်မှုတွေနဲ့အတူ Laravel ကို အသုံးများလာမှုကြောင့် PHP ကုဒ်ဆိုတာ သပ်သပ်ရပ်ရပ်နဲ့ ဖတ်ရှုနားလည်ရ လွယ်ကူတဲ့ ကုဒ်တွေ ဖြစ်နေပါပြီ။

Laravel ရဲ့ အဓိက အားသာချက်ကတော့ လေ့လာရ လွယ်ကူခြင်း ဖြစ်ပါတယ်။ ပြည့်စုံရှင်းလင်းတဲ့ Documentation ရှိတယ်၊ အခြေခံကနေ အဆင့်မြင့်ထိ ဗီဒီယို သင်ခန်းစာတွေ စုံလင်ပါတယ်။ ဒါတင်မက မြန်မာဘာသာနဲ့ စာအုပ်တွေ၊ သင်တန်းတွေလည်း အများအပြား ရှိနေပါတယ်။

ဒီစာအုပ်ကို ဖတ်တဲ့သူဟာ PHP အခြေခံ ရှိထားပြီး ဖြစ်ဖို့လိုပါတယ်။ ဒီစာအုပ်ထဲက ကုဒ်တွေကို လိုက်လုပ်နိုင်ဖို့အတွက် စာဖတ်သူရဲ့ စက်ထဲမှာ PHP Development Environment (XAMPP / Composer) တစ်ခု အသင့်ရှိနေဖို့ လိုအပ်ပါတယ်။`,
        previewText_en: `Laravel is one of the most popular and elegant PHP frameworks available today. Its clean, expressive architecture makes writing code an absolute joy.

With modern PHP advancements and Laravel's widespread adoption, PHP has evolved into a clean, highly readable, and maintainable language.

Laravel's primary strength lies in its gentle learning curve, comprehensive official documentation, and rich ecosystem. To follow this book effectively, foundational knowledge of PHP and a ready development environment (XAMPP/Composer) are required.`,
        fullText: `အခန်း (၁) – PHP OOP

Laravel ကို ကျင်ကျင်လည်လည် အသုံးပြုနိုင်ဖို့အတွက် PHP OOP (Object-Oriented Programming) ရေးထုံးတွေကို ကျေညက်ထားဖို့ လိုအပ်ပါတယ်။ ဒါကြောင့် ပထမဦးဆုံးအနေနဲ့ PHP OOP ရေးထုံးကို အရေးကြီးတဲ့ အချက်လေးတွေ ပြန်နွှေးကြပါမယ်။

ပေးထားတဲ့ ကုဒ်နမူနာကို လေ့လာကြည့်ပါ -

class Animal
{
    public $name;
}

$dog = new Animal;
$dog->name = "Bobby";
echo $dog->name;        // Bobby

$dog->legs = 4;
echo $dog->legs;        // 4

---

၁။ Naming Conventions (အမည်ပေးပုံ စနစ်များ)
Programming မှာ အမည်တွေ သတ်မှတ်တဲ့အခါ အဓိက နည်းလမ်း (၃) မျိုး ရှိပါတယ် -

- Capital Case (PascalCase): Class Name တွေ ပေးတဲ့အခါ သုံးပါတယ်။ (ဥပမာ - MathHelper, PostController, ViewModel စသည်)။
- camelCase: Property တွေနဲ့ Method (Function) တွေ ပေးတဲ့အခါ သုံးပါတယ်။ (ဥပမာ - firstName, sayHello, saveUser စသည်)။
- snake_case: Variable Name တွေ၊ Database Name တွေ၊ Table Name တွေနဲ့ Column Name တွေအတွက် သုံးပါတယ်။ (ဥပမာ - category_id, created_at, updated_at စသည်)။

Laravel ဟာ "Convention Over Configuration" ဆိုတဲ့ စည်းမျဉ်းကို အခြေခံပါတယ်။ သတ်မှတ်ထားတဲ့ Naming Convention အတိုင်း နာမည်မှန်အောင် ပေးထားရင် အပို Configuration တွေ လိုက်ရေးစရာမလိုဘဲ Framework က အလိုအလျောက် သိရှိ အလုပ်လုပ်ပေးနိုင်ပါတယ်။

---

၂။ PHP OOP ၏ အခြေခံ သဘောတရားများ
- Animal Class ထဲမှာ $name ဆိုတဲ့ Property ကို public Access Modifier ဖြင့် ကြေညာထားပါတယ်။
- $dog = new Animal; ဖြင့် Animal Class မှ $dog Object တစ်ခုကို တည်ဆောက်လိုက်ပါတယ်။
- PHP တွင် Object ၏ Property သို့မဟုတ် Method များကို လှမ်းယူ (Access လုပ်) ရာတွင် Dot (.) ကို မသုံးဘဲ Arrow Operator (->) ကို အသုံးပြုရပါတယ်။ (ဥပမာ - $dog->name)။
- ထို့အပြင် မူလ Class ထဲတွင် မပါဝင်သေးသော Property အသစ်ကိုလည်း တိုက်ရိုက် သတ်မှတ် အသုံးပြုနိုင်ကြောင်း $dog->legs = 4; ဖြင့် ပြသထားပါသည်။`,
        fullText_en: `Chapter 1 – PHP OOP (Object-Oriented Programming)

To master Laravel, having a solid grasp of PHP OOP is essential.

Code Example:
class Animal
{
    public $name;
}

$dog = new Animal;
$dog->name = "Bobby";
echo $dog->name;        // Bobby

$dog->legs = 4;
echo $dog->legs;        // 4

---

1. Naming Conventions in PHP & Laravel:
- CapitalCase (PascalCase): Used for Class names (e.g., PostController, UserModel).
- camelCase: Used for Properties and Methods (e.g., firstName, getPosts()).
- snake_case: Used for Variables, Databases, Tables, and Columns (e.g., user_id, created_at).

Laravel embraces the "Convention Over Configuration" paradigm, automating various underlying behaviors when naming conventions are adhered to.

---

2. Core OOP Mechanics:
- Instantiation: Creating a new instance using the 'new' keyword ($dog = new Animal;).
- Arrow Operator (->): Used in PHP to access properties and invoke methods instead of the standard dot (.) operator.
- Dynamic Properties: Demonstrates setting unassigned properties directly on an object ($dog->legs = 4).`
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
        previewText: `AI in Marketing, Sales and Service သည် စာရေးဆရာ Peter Gentsch ရေးသားထားသော စာမျက်နှာ ၂၈၀ ပါ ပြည့်စုံသည့် စာအုပ်ကောင်းတစ်အုပ် ဖြစ်ပါသည်။ ဒေတာသိပ္ပံဘွဲ့ (Data Science Degree) မရှိသော စျေးကွက်ရှာဖွေသူများ (Marketers) နှင့် လုပ်ငန်းရှင်များအနေဖြင့် AI၊ Big Data နှင့် Bots များကို မိမိတို့၏ လုပ်ငန်းခွင်အတွင်း လက်တွေ့မည်သို့ အသုံးချရမည်ကို လမ်းညွှန်ပြသထားပါသည်။

Big Data သည် လောင်စာဆီအသစ် (New Oil) ဖြစ်ပါက Analytics သည် စက်ယန္တရား (Combustion Engine) ဖြစ်သည်။ ဒေတာများကို AI နှင့် ပေါင်းစပ်အသုံးချမှသာ လုပ်ငန်းစဉ်များကို အလိုအလျောက်လည်ပတ်စေနိုင်ပြီး စျေးကွက်ပြိုင်ဆိုင်မှုတွင် အသာစီးရရှိစေမည် ဖြစ်ပါသည်။ ဤစာအုပ်သည် နည်းပညာအခေါ်အဝေါ်များကို နေ့စဉ်စီးပွားရေးသုံး ဘာသာစကားအဖြစ် ပေါင်းကူးပေးထားသော လက်တွေ့လက်စွဲစာအုပ် ဖြစ်ပါသည်။`,
        previewText_en: `AI in Marketing, Sales and Service is a comprehensive practical guide by Peter Gentsch showing professionals without formal data science backgrounds how to leverage artificial intelligence, big data, and bots in everyday business.

Drawing on the concept that data is the new oil and analytics is the combustion engine, the book bridges complex informatics into practical commercial strategies to achieve competitive advantages.`,
        fullText: `၁။ AI Eats the World (ကမ္ဘာကို လွှမ်းမိုးလာသော ဉာဏ်ရည်တု)
စီးပွားရေးလုပ်ငန်းခွင်များတွင် AI ၏ ဖွံ့ဖြိုးတိုးတက်မှုသည် ကြီးမားသော ခုန်ပျံကျော်လွှားမှုတစ်ခု ဖြစ်လာခဲ့သည်။ စျေးကွက်ရှာဖွေရေး၊ အရောင်းနှင့် စီမံခန့်ခွဲမှုဆိုင်ရာ စီမံချက်များတွင် AI ကို ပိုမိုထည့်သွင်းအသုံးပြုလာကြပြီး Algorithmic Enterprise ခေါ် အယ်လ်ဂိုရီသမ်အခြေပြု စီးပွားရေးလုပ်ငန်းများ ဖြစ်ပေါ်လာစေသည်။ ဤစာအုပ်သည် နည်းပညာနှင့် စီးပွားရေးလက်တွေ့ အသုံးချမှုကြား ကွာဟချက်ကို ပေါင်းကူးပေးထားပါသည်။

၁.၁ AI နှင့် စတုတ္ထစက်မှုတော်လှန်ရေး (AI and the Fourth Industrial Revolution)
"Big Data သည် လောင်စာဆီအသစ်ဖြစ်ပါက Analytics သည် စက်ယန္တရားဖြစ်သည်" (Gartner 2015)။ ဒေတာများကို သင့်လျော်စွာ အသုံးချနိုင်မှသာ စီးပွားရေးအတွက် အကျိုးဖြစ်ထွန်းစေမည် ဖြစ်သည်။ AI နှင့် Analytics တို့သည် အချက်အလက်များကို စမတ်ကျကျ အသုံးချစေပြီး လုပ်ငန်းစဉ်များကို အလိုအလျောက်ဖြစ်စေကာ လုပ်ငန်းစွမ်းဆောင်ရည်ကို မြှင့်တင်ပေးသည်။ AI သည် သာမန်စက်မှုတော်လှန်ရေးတစ်ခု မဟုတ်ဘဲ လူသားတို့၏ ဉာဏ်ရည်ဉာဏ်သွေးဆိုင်ရာ အကန့်အသတ်များကို ကျော်လွှားစေသည့် သမိုင်းမှတ်တိုင်အသစ် ဖြစ်သည်။

၁.၂ ဒစ်ဂျစ်တယ် တိုးတက်ပြောင်းလဲမှု အရှိန်အဟုန် (Digital Hyper Innovation)
AI ၏ ဖွံ့ဖြိုးတိုးတက်မှု အရှိန်အဟုန်ကို Board Game များဖြင့် သက်သေပြနိုင်သည်။ ၁၉၉၆ ခုနှစ်တွင် IBM ၏ Deep Blue စနစ်က ကမ္ဘာ့စစ်တုရင်ချန်ပီယံ Kasparov ကို အနိုင်ရရှိခဲ့သည်။ သို့သော် ပိုမိုရှုပ်ထွေးပြီး တီထွင်ဖန်တီးနိုင်စွမ်း လိုအပ်သော "Go" ကစားနည်းတွင် AI အနိုင်ရရန် နှစ်ပေါင်း ၁၀၀ ခန့် ကြာမြင့်မည်ဟု ပညာရှင်များ ခန့်မှန်းခဲ့ကြသည်။ သို့သော် ၂၀၁၆ ခုနှစ်တွင် DeepMind ၏ AlphaGo စနစ်က ကမ္ဘာ့ Go ချန်ပီယံကို အနိုင်ယူပြခဲ့သည်။ ၂၀၁၇ တွင် ထွက်ပေါ်လာသော AlphaGo Zero သည် ယခင်ကစားနည်းမှတ်တမ်းများ မလိုဘဲ စနစ်ကိုယ်တိုင် သင်ယူမှုပြုလုပ်ပြီး (Learn how to learn) လူသားများ တစ်ခါမှမသုံးဖူးသော လှုပ်ရှားမှုအသစ်များဖြင့် ယခင်စနစ်အားလုံးကို အနိုင်ယူခဲ့သည်။ ဤကဲ့သို့ ကိုယ်ပိုင်ဆုံးဖြတ်သင်ယူနိုင်မှုသည် စီးပွားရေးလုပ်ငန်းများအတွက် အလွန်တန်ဖိုးရှိသော အချက်ဖြစ်လာသည်။

၁.၃ AI - စည်းမျဉ်းများကို ပြောင်းလဲစေသူ (AI as a Game Changer)
ယခင် စက်မှုတော်လှန်ရေးများသည် လူသားတို့၏ ကာယစွမ်းအား (Muscle power) ကို အစားထိုးခဲ့သော်လည်း AI ခေတ်တွင် လူသားတို့၏ ဉာဏ်စွမ်း (Intellectual powers) ကို ပုံတူကူးယူ၊ ဆတိုးပွားစေပြီး အချို့နေရာများတွင် အစားထိုးလာနိုင်သည်။ စမတ်ကျသော ကွန်ပျူတာစနစ်များသည် အချိန်နှင့်တစ်ပြေးညီ ဆုံးဖြတ်ချက်များကို ကူညီပေးနိုင်သလို၊ အချို့နေရာများတွင် လူသားတို့၏ ဆုံးဖြတ်ချက်ထက်ပင် ပိုမိုတိကျသော အရည်အသွေးကို ပေးစွမ်းနိုင်လာသည်။

အင်တာနက်ပေါ်တွင် ရှိနေသော ဒေတာပွိုင့် ပေါင်း ၇၀ ထရီလီယံကို လူသားတစ်ဦးတည်း စီမံခန့်ခွဲရန် မဖြစ်နိုင်ပါ။ AI အကူအညီဖြင့် ဖောက်သည်အသစ် ရှာဖွေခြင်းနှင့် ပြိုင်ဘက်စောင့်ကြည့်ခြင်း လုပ်ငန်းစဉ်များကို အလိုအလျောက် ဆောင်ရွက်စေနိုင်ပြီး ဝန်ထမ်းများအနေဖြင့် မဟာဗျူဟာမြောက် စီမံချက်များ ချမှတ်ခြင်းတွင် ပိုမိုအာရုံစိုက် လုပ်ကိုင်နိုင်မည် ဖြစ်ပါသည်။`,
        fullText_en: `1. AI Eats the World
Artificial intelligence (AI) has driven an immense leap in business practices, transforming administrative, planning, and sales operations toward the holistic algorithmic enterprise. This text translates complex informatics into actionable commercial strategies.

1.1 AI and the Fourth Industrial Revolution
If big data is the new oil, analytics is the combustion engine. Data generates value only when utilized and capitalized. Analytics and AI unlock smart automation, driving efficiency and sustainable competitive advantage.

1.2 Exponential AI Development
The rapid evolution of AI is vividly demonstrated through board game milestones. While IBM's Deep Blue defeated chess champion Kasparov in 1996 via mechanical brute-force search, Google DeepMind's AlphaGo achieved victory in the intuitive and complex game of Go in 2016. In 2017, AlphaGo Zero mastered the game entirely from scratch through self-play reinforcement learning, uncovering novel strategies never deployed by humans in millennia.

1.3 AI as a Game Changer
Earlier industrial revolutions augmented physical muscle power; the AI revolution augments, scales, and partially automates human intellectual capacity. Algorithms process vast unstructured web datasets, automate customer prospecting, and elevate decision quality beyond traditional human limitations.`
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
        previewText: `မငြိမ်သက်တဲ့ လူ့လောကထဲမှာ အခက်အခဲနဲ့ ပြဿနာတွေကို ရှုပ်ထွေးပူလောင်ခြင်းတွေကြားကနေ ဖြေရှင်းနေကြရင်း ဘဝရဲ့ ရှင်သန်ခြင်း အဓိပ္ပာယ်ကို ရှာဖွေဖို့ မေ့လျော့တတ်ကြပါတယ်။ အေးချမ်းဖို့ ကြည်လင်ဖို့ မေ့လျော့ကြပါတယ်။

ဒီစာအုပ်လေးမှာတော့ ဘဝရဲ့ ရှင်သန်လိုစိတ်ကို ဘယ်လို ရှာဖွေကြမလဲ၊ အေးချမ်းတဲ့ ဘဝရဲ့ စိတ်ထားကို ဘယ်လို ထားရှိရမလဲ၊ ပြဿနာတွေနဲ့ ကြုံတွေ့ရတဲ့အခါ အကောင်းဘက်ကို ရောက်ရှိနိုင်ဖို့ Good Vibes ကို ဘယ်လို ချဉ်းကပ်ရမလဲ၊ ဒဏ်ရာတွေ ရလာတဲ့အခါ မှန်ကန်တဲ့ နည်းလမ်းနဲ့ ဘယ်လို Healing လုပ်မလဲ စတာတွေကို စာရေးသူရဲ့ ဘဝအတွေ့အကြုံများနှင့် နှိုင်းယှဉ်ဆွေးနွေးပေးထားပါသည်။

စာအုပ်လေးရဲ့ ရည်ရွယ်ချက်ကတော့ ရှုပ်ထွေးပူလောင်နေတဲ့ နေ့ရက်တွေမှာ ကြည်လင်အေးချမ်းဖို့၊ အကောင်းမြင်စိတ်ကို မွေးမြူပြီး ပျော်ရွှင်တဲ့ ဘဝကို ပိုင်ဆိုင်နိုင်ဖို့အတွက် ဖြစ်ပါတယ်။`,
        previewText_en: `In this turbulent world, we often forget the true meaning of living and inner peace amidst life's complexities and challenges.

"Good Vibes Only" explores how to rediscover the zest for life, cultivate a peaceful mindset, approach positive energy (Good Vibes), and heal emotional wounds through proper self-care. 

The core mission of this book is to guide readers toward calm, mental clarity, and cultivating positive perspectives in daily life.`,
        fullText: `အပြစ်လို ခံစားရတဲ့စိတ် (Guilt & Self-Forgiveness)

၁။ မရည်ရွယ်ဘဲ ဖြစ်ခဲ့သော အမှားများ
တစ်ခါက သူငယ်ချင်းတစ်ယောက်က သူ့ကိုယ်သူ အပြစ်ရှိသလို ခံစားနေရတာကြောင့် စိတ်မချမ်းမြေ့ဖြစ်နေကြောင်း ပြောပြဖူးပါတယ်။ လမ်းဘေးက ခွေးလေးတစ်ကောင်ကို ကားနဲ့ မတော်တဆ တိုက်မိခဲ့ပြီး ခွေးလေး ပွဲချင်းပြီး သေဆုံးသွားခဲ့တာကြောင့် စိတ်ထိခိုက်နေတာပါ။

ဒါကြောင့် သူ့ကို မတတ်နိုင်တော့တဲ့ အတိတ်ကအရာအတွက် ကိုယ့်စိတ်ကို နှိပ်စက်မနေဘဲ၊ ခွေးလေးအတွက် ကောင်းမှုကုသိုလ်တွေ လုပ်ပေးဖို့၊ လေလွင့်တိရစ္ဆာန်တွေကို အလှူဒါနပြုပေးဖို့နဲ့ မရည်ရွယ်ဘဲ ဖြစ်ခဲ့တဲ့ အမှားအတွက် စိတ်ထဲကနေ ခွင့်လွှတ်တောင်းပန်ပြီး သင်ခန်းစာယူကာ ပိုကောင်းတဲ့သူ ဖြစ်လာအောင် နေထိုင်ဖို့ အကြံပေးခဲ့ပါတယ်။

---

၂။ စိတ်ထဲက စွဲကျန်နေသော အကြွေး
ကျွန်တော် ကျောင်းသားဘဝတုန်းက အမြဲ မုန့်စားနေကျဆိုင်က အန်တီကြီးကို ပေးစရာ အကြွေး ၄,၇၀၀ ကျပ် ကျန်ခဲ့ဖူးပါတယ်။ နောက်ပိုင်း အန်တီကြီး ဆိုင်မဖွင့်တော့ဘဲ ဘယ်ရောက်သွားမှန်း ရှာမတွေ့တော့တဲ့အခါ "ငါ အကြွေးဆပ်ရဦးမယ်" ဆိုတဲ့ မလုံခြုံတဲ့ စိတ်ဟာ နှစ်ပေါင်းများစွာ စွဲကျန်နေခဲ့ပါတယ်။

တစ်နေ့တော့ ဆရာတော်တစ်ပါးထံ အကျိုးအကြောင်း လျှောက်ထားတဲ့အခါ ဆရာတော်က "ကိုယ်က ရည်ရွယ်ချက်ရှိရှိ လိမ်လည်ခဲ့တာ မဟုတ်တဲ့အတွက် အပြစ်မကြီးပါဘူး၊ အဲ့ဒီအကြွေးပမာဏကို အန်တီကြီးရဲ့ အမည်နဲ့ အကျိုးရှိမယ့် နေရာတစ်ခုမှာ ရည်စူးလှူဒါန်းပေးလိုက်ပါ" ဟု မိန့်ကြားခဲ့ပါတယ်။ အလှူဒါန ပြုလုပ်ပေးလိုက်တဲ့ အချိန်ကစပြီး ကျွန်တော့်စိတ်ထဲက လေးလံနေတဲ့ ဝန်ထုပ်ဝန်ပိုးဟာ အေးချမ်းသွားခဲ့ရပါတယ်။

---

၃။ Relationship နှင့် အပြစ်ရှိသလို ခံစားရခြင်း
ကိုယ်က အထီးကျန်နေချိန်မှာ လူတစ်ယောက်နဲ့ မဆင်မခြင် တွဲမိပြီး တကယ်တမ်း မချစ်တဲ့အခါ တစ်ဖက်လူအပေါ် အားနာပြီး အပြစ်ရှိသလို ခံစားရတတ်ပါတယ်။ လမ်းခွဲစကား ပြောဖို့ အားနာတာကြောင့် မပြတ်မသား လုပ်မိတဲ့အခါ တစ်ဖက်လူမှာ ပိုပြီး နာကျင်ရပါတယ်။

အကယ်၍ Relationship တစ်ခုမှာ အဆင်မပြေတော့ပါက ရုတ်တရက် အဆက်အသွယ်ဖြတ်ခြင်း (Ghosting) မလုပ်ပါနဲ့။ သေချာစွာ ရှင်းပြတောင်းပန်ပြီး ပြတ်သားစွာ ရင်ဆိုင်ပါ။ ကိုယ့်စိတ်ထဲမှာ မကြည်လင်ပါက ဘယ် Relationship ကိုမှ ကောင်းမွန်စွာ မတည်ဆောက်နိုင်ပါ။

---

၄။ အမှားကို ရိုးသားစွာ ဝန်ခံခြင်း
လူဆိုတာ အမှားနဲ့ မကင်းနိုင်တဲ့အတွက် မှားမိတဲ့အခါ နည်းမှန်လမ်းမှန်ဖြင့် ရင်ဆိုင်ဖြေရှင်းရပါမယ်။ "ငါ မှားသွားတယ်" ဆိုတဲ့ နောင်တစိတ်တစ်ခုတည်းနဲ့ ပိတ်မိမနေဘဲ ရိုးသားစွာ ဝန်ခံတောင်းပန်ခြင်း၊ အမှားကို တတ်နိုင်သမျှ ပြန်လည်ပြင်ဆင်ခြင်းတို့ဖြင့် စိတ်၏ ကြည်လင်အေးချမ်းမှုကို ပြန်လည် တည်ဆောက်နိုင်ပါလိမ့်မည်။`,
        fullText_en: `Guilt and Self-Forgiveness

1. Unintended Mistakes:
Overcoming the weight of guilt from unintentional accidents through mindful actions, charity, and constructive learning rather than endless self-blame.

2. Resolving Lingering Emotional Debts:
Letting go of past unresolved situations through dedication and positive contributions when direct restitution is no longer possible.

3. Integrity in Relationships:
Addressing relationship mismatches honestly rather than avoiding difficult conversations or ghosting, ensuring respect for both parties.

4. The Power of Honest Confession:
Humans are prone to mistakes. Acknowledging errors openly and making amends is the healthiest path to inner peace and emotional healing.`
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
        previewText: `စိတ်ရောဂါကု ဆရာဝန်တွေ၊ ကုထုံးဆရာတွေဆီ လက်လှမ်းမမီသေးချိန်မှာ ဝေဒနာတွေကို မပျောက်ကင်းစေနိုင်သေးဘူးဆိုရင်တောင် ကိုယ့်မှာ ဘာတွေခံစားနေရလဲ၊ ဘယ်လိုတွေလုပ်ရင် သက်သာရာရစေနိုင်မလဲဆိုတဲ့ မျှော်လင့်ချက်နှင့် အသိပညာလေး ရရှိစေရန် စေတနာဖြင့် ရေးသားထားပါသည်။

လက်ရှိစာအုပ်လောကတွင် ထုတ်ဝေလေ့မရှိသေးသော စိတ်ပညာနှင့် အတွေးလွန်ခြင်းဆိုင်ရာ ဘာသာရပ်များကို ဦးစားပေး ဘာသာပြန် တင်ဆက်ထားခြင်း ဖြစ်ပါသည်။

စာဖတ်သူများအနေဖြင့် လက်ရှိအခြေအနေတွင် ငြိမ်းချမ်းစွာ နေထိုင်နိုင်စေရန်နှင့် ဖြစ်လာသမျှအရာများကို အတွေးလွန် ပူပန်နေခြင်းမရှိဘဲ အကောင်းဆုံး ကျော်ဖြတ်နိုင်စေရန် ရည်ရွယ်ပါသည်။`,
        previewText_en: `Written to provide mental clarity, hope, and practical coping mechanisms for managing anxiety and intrusive thoughts even before reaching professional therapy.

This guide explores the psychological mechanics of overthinking, helping readers navigate everyday stresses peacefully without succumbing to paralyzing mental loops.`,
        fullText: `အခန်း (၁) - တွေးလွန်တယ်ဆိုတာ အလွန်တွေးတာ မဟုတ်ပါ

လူငယ်တစ်ယောက်ကို မြင်ယောင်စိတ်ကူးကြည့်ပါ။ သူ့နာမည် ‘ဂျိမ်းစ်’ ဆိုပါစို့။ သူက ကြင်နာတတ်တယ်၊ ထက်မြက်တယ်၊ ကိုယ့်ကိုယ်ကိုယ် အမြဲတမ်း သတိရှိတယ်။ အင်း . . . သတိအရှိလွန်နေတယ်လို့တောင် ဆိုရပါမယ်။ ဂျိမ်းစ်က အမြဲတမ်းလိုလို တစ်ခုမဟုတ်တစ်ခု စိတ်ပူနေတတ်ပြီး ဒီနေ့မှာတော့ သူ့အာရုံကို ဖမ်းစားထားတဲ့ ခန္ဓာကိုယ်ကျန်းမာရေးဆိုင်ရာ အသေးအဖွဲ လက္ခဏာလေးတစ်ခုကို စိတ်ပူနေပြန်ပါတယ်။

သူက အွန်လိုင်းပေါ်မှာ ရောဂါလက္ခဏာတွေကို ရှာဖွေကြည့်တယ်၊ ပြီးတော့ ဖြစ်နိုင်ခြေအဆိုးဆုံးတွေကို တွက်ချက်ရင်း တဖြည်းဖြည်း ပိုမိုတုန်လှုပ်လာပါတယ်။ နောက်တော့ သူက ရပ်လိုက်ပြီး သူ့ဘာသာ ဆန်းစစ်တယ် - "ငါ အတွေးလွန်နေတာ ဖြစ်မှာပါ" လို့ပဲ တွေးလိုက်တော့ပါတယ်။

ဒီလိုနဲ့ သူက သူ့ကျန်းမာရေးအကြောင်း စိတ်ညစ်နေတာကို ရပ်ပစ်လိုက်ပေမယ့်၊ နောက်တော့ ကျန်းမာရေးအကြောင်း စိတ်ပူမိတဲ့ သူ့ရဲ့ အတွေးအကြောင်းကို တွေးရင်း ထပ်မံစိတ်ရှုပ်နေပြန်ပါတယ်။ "ငါ့အတွက် ကုထုံးတချို့ အမှန်တကယ် လိုနေတာလား၊ ဒါဟာ စိုးရိမ်စိတ်လွန်ကဲတဲ့ ရောဂါလက္ခဏာလား၊ ဒါမှမဟုတ် စိတ်ကစဉ့်ကလျား ဖြစ်နေတာလား" ဆိုပြီး မဆုံးနိုင်တဲ့ မှတ်ဉာဏ်တွေ၊ မှန်းဆချက်တွေ၊ အကြောက်တရားတွေနဲ့ လုံးထွေးနေပါတော့တယ်။

---

အတွေးလွန်ခြင်း၏ သံသရာ (The Overthinking Loop)

နောက်တော့ သူက သူ့ရဲ့ အားနည်းချက်တွေပေါ် မှန်ဘီလူးတပ် ချဲ့ကြည့်ပြီး တစ်ခုချင်းစီကို စိတ်ထဲမှာ အကျယ်ချဲ့ တွေးပြန်ပါတယ်။ "ဘာကြောင့်များ ငါက ဒီလိုပုံစံ ဖြစ်နေရတာလဲ၊ ဒီတိုင်းလေး လွှတ်ချလိုက်ရမယ့် အချက်တွေကိုတောင် မစွန့်လွှတ်နိုင်ဘဲ ကိုယ့်ကိုယ်ကိုယ် နှိပ်စက်နေမိတာလဲ" ပေါ့။

တစ်နာရီကျော်ကြာအောင် အဲ့ဒီအတွေးတွေနဲ့ လုံးပန်းပြီးတဲ့နောက် စိတ်ပျက်လက်ပျက်နဲ့ သတိပြုမိလိုက်တာက သူ့ကျန်းမာရေးပြဿနာအတွက် ဘာအဖြေမှ မထွက်ဘဲ အလိုလိုနေရင်း စိတ်ဓာတ်ကျလာတာကို တွေ့ရှိသွားရပါတယ်။

ကျွန်ုပ်တို့အားလုံးဟာ လှုံ့ဆော်မှုများပြားတဲ့ ကမ္ဘာလောကကြီးမှာ နေထိုင်နေကြရပါတယ်။ အတွေးလွန်ခြင်း (Overthinking) ဟာ ကျွန်ုပ်တို့ရဲ့ သဘာဝအတိုင်း ကျိုးကြောင်းဆီလျော်စွာ ဆုံးဖြတ်နိုင်တဲ့ မွေးရာပါအသိကို လွှမ်းမိုးဖုံးကွယ်သွားတတ်ပါတယ်။

အတွေးလုပ်ဆောင်မှုတွေကို ထိန်းချုပ်နိုင်စွမ်း မရှိတော့တဲ့အခါ စိတ်ဖိစီးမှုတွေ၊ သောကတွေ ဖြစ်ပေါ်လာရပါတယ်။ အတွေးလွန်ခြင်းဟာ တစ်ခါတစ်ရံမှာ မဖိတ်ခေါ်ဘဲ ကျူးကျော်ဝင်ရောက်လာတတ်ပြီး မပြီးဆုံးနိုင်သော သံသရာလည်နေတတ်သောကြောင့် ၎င်းကို သတိပြုမိပြီး စနစ်တကျ ရပ်တန့်နိုင်ဖို့ အလွန်အရေးကြီးပါသည်။`,
        fullText_en: `Chapter 1 – Overthinking Is Not Just Thinking Too Much

Imagine a young person named James. He is kind, intelligent, and highly self-aware—perhaps excessively self-aware. James constantly worries about something, and today, an insignificant bodily symptom has seized his attention.

He searches his symptoms online, calculates worst-case scenarios, and spirals into acute anxiety. Realizing this, he pauses: "I must be overthinking."

However, stopping the health worry only shifts his focus onto the meta-worry: "Why am I overthinking like this? Do I have a severe anxiety disorder?" A simple thought expands into millions of self-critical judgments.

The Nature of Overthinking:
Overthinking hijacks our innate capacity for sound, logical reasoning. When cognitive processing loses conscious boundary control, thoughts loop infinitely into exhausting mental paralysis. Recognizing these intrusive thought loops is the vital first step toward reclaiming inner peace.`
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
        previewText: `အနာဂတ်ကာလတွင် သိပ္ပံနှင့် ဆေးပညာများ အဆမတန် တိုးတက်လာသည်နှင့်အမျှ လူ့သက်တမ်းကို အကန့်အသတ်မရှိ ရှည်ကြာစေမည့် နည်းပညာများ၊ ဆဲလ်များကို ပြန်လည်နိုးထစေသော ကုထုံးများ ထွက်ပေါ်လာမည် ဖြစ်ပါသည်။

မြန်မာနိုင်ငံ၏ သက်တမ်းမျှော်မှန်းချက် သမိုင်းကြောင်းကို ဆန်းစစ်ကြည့်လျှင် ၁၉၂၀-၁၉၃၁ ခုနှစ်များက မွေးဖွားသူတစ်ဦး၏ မျှော်မှန်းသက်တမ်းမှာ ၃၅ နှစ်သာ ရှိခဲ့သော်လည်း ဆေးပညာတိုးတက်မှုကြောင့် ၆၀ ကျော်အထိ တိုးတက်လာခဲ့ပါသည်။ သို့သော် နိုင်ငံတကာ သက်တမ်းစံနှုန်း ၇၅ နှစ်နှင့် နှိုင်းယှဉ်ပါက ကျွန်ုပ်တို့အနေဖြင့် ကျန်းမာစွာ နေထိုင်နည်းများကို ဆက်လက်အတုယူ လေ့လာရန် လိုအပ်နေဆဲ ဖြစ်ပါသည်။

ဤစာအုပ်သည် နိုင်ငံတကာ သုတေသနတွေ့ရှိချက်များနှင့် အသက် ၄၀ ကျော်အရွယ်တွင် ကျန်းမာပျော်ရွှင်စွာဖြင့် သက်ရှည်ကျန်းမာစေရန် လိုက်နာရမည့် ဆေးပညာပေး လမ်းညွှန်ချက်များကို ဖော်ထုတ်တင်ပြထားသော စာအုပ်ကောင်းတစ်အုပ် ဖြစ်ပါသည်။`,
        previewText_en: `With exponential advancements in medical science and biotechnology, human longevity continues to expand dramatically.

Tracing life expectancy trends, Myanmar's average lifespan has risen from 35 years in the 1920s to over 60 years today, yet there is still much to adopt from international longevity benchmarks averaging 75+ years.

"If You Are Over Forty Years Old" shares evidence-based medical research, practical lifestyle adjustments, and preventative health wisdom tailored for aging gracefully and healthily after forty.`,
        fullText: `အသက်အရွယ်သည် ပဓာနမဟုတ် (Age is Just a Number)

ငယ်စဉ်အခါက လူကြီးမြန်မြန်ဖြစ်ချင်ကြပြီး၊ လူကြီးဖြစ်လာသောအခါ ကလေးဘဝကဲ့သို့ ပျော်ပျော်ပါးပါး နေချင်ကြပြန်သည်။ အချုပ်အားဖြင့် မည်သူမျှ မိမိ၏ အသက်အရွယ်ကို မလွန်ဆန်နိုင်ကြပါ။ သို့သော် "ပွဲပြီးသည်အထိ ကပြနိုင်ခြင်းသာ အဓိက" ဆိုသည့်အတိုင်း အသက်အရွယ် ကြီးရင့်သော်လည်း ကြီးကျယ်သော စွမ်းဆောင်ချက်များကို ပြုလုပ်ခဲ့ကြသည့် သမိုင်းဝင် ပုဂ္ဂိုလ်ကြီးများစွာ ရှိခဲ့ပါသည် -

၁။ ရိုလာဒွန်းစတုန်း - အသက် (၇၀) အရွယ်၌ ၁၉၇၂ မြူးနစ် အိုလံပစ်ပြိုင်ပွဲတွင် ပါဝင်ယှဉ်ပြိုင်ခဲ့သည်။
၂။ ဘီလာဒို - အသက် (၇၅) နှစ်အရွယ်၌ ကီလိုမီတာ ၁,၀၀၀ ခရီးကို စက်ဘီးဖြင့် ၃၃ ရက်အတွင်း စီးနင်းခဲ့သည်။
၃။ ဖျောဘန်း - အသက် (၈၀) အရွယ် (၁၉၇၆) ၌ အကယ်ဒမီ ရွှေစင်ရုပ်တု ရရှိခဲ့သည်။
၄။ ဘားထရန်းရပ်ဆဲလ် - အသက် (၈၄) နှစ်အရွယ်တွင် ကမ္ဘာ့ငြိမ်းချမ်းရေး လှုပ်ရှားမှုများကို ဦးဆောင်ခဲ့သည်။
၅။ ဒီဗာလီရာ - အသက် (၉၀) တွင် အိုင်ယာလန်နိုင်ငံ သမ္မတတာဝန် ထမ်းဆောင်ခဲ့သည်။
၆။ ပီကာဆို - အသက် (၉၀) ကျော်အထိ ကမ္ဘာကျော် ပန်းချီလက်ရာများကို ဖန်တီးခဲ့သည်။
၇။ မိုက်ကယ်အိန်ဂျလို - အသက် (၈၀) ကျော်အရွယ်တွင် စိန့်ပီတာ ဘုရားကျောင်းကြီး၏ ဗိသုကာပုံစံများကို ရေးဆွဲပေးခဲ့သည်။
၈။ လီယိုတော်စတွိုင်း - အသက် (၈၂) နှစ်အရွယ်၌ ကမ္ဘာကျော် ဂန္ထဝင်ဝတ္ထုကြီးများကို ရေးသားခဲ့သည်။
၉။ မြန်မာနိုင်ငံမှ ဆရာကြီးဦးဟုတ်စိန် - အသက် (၉၀) ကျော်တွင် ပါဠိ-မြန်မာ အဘိဓာန်ကျမ်းကြီးကို ပြုစုခဲ့သည်။
၁၀။ ဆရာတော် ဦးသေဋ္ဌိလ - သက်တော် (၉၄) နှစ်ကျော်အထိ တည်ကြည်ကြည်လင်စွာဖြင့် တရားဓမ္မများ ဟောကြားခဲ့သည်။

---

သက်ရှည်ကျန်းမာရေးဆိုင်ရာ ဆေးပညာ လေ့လာတွေ့ရှိချက်များ

၁။ အစားအသောက် လျှော့စားခြင်း (Caloric Restriction):
သုတေသနများအရ အစားအစာကို အလွန်အကျွံ မစားဘဲ သင့်တင့်မျှတစွာ လျှော့စားခြင်းသည် ဆဲလ်များ၏ သက်တမ်းကို ရှည်စေပြီး ခန္ဓာကိုယ်၏ ဇီဝကမ္မဖြစ်စဉ်များကို ပိုမိုကောင်းမွန်စေပါသည်။

၂။ နှလုံးနှင့် သွေးကြောစနစ် ထိန်းသိမ်းခြင်း:
အသက်ကြီးလာသည်နှင့်အမျှ သွေးကြောများ ကျဉ်းမြောင်းလာခြင်းနှင့် သွေးတိုးရောဂါ ဖြစ်ပွားမှုကို ကာကွယ်ရန် ပုံမှန် လမ်းလျှောက်ခြင်း၊ ကိုယ်လက်လှုပ်ရှား အားကစားပြုလုပ်ခြင်းတို့သည် မရှိမဖြစ် လိုအပ်ပါသည်။

၃။ ဦးနှောက်နှင့် စိတ်ပိုင်းဆိုင်ရာ လှုပ်ရှားမှု:
အသက် ၆၀ ပြည့်ပြီးသူများပင် စာဖတ်ခြင်း၊ စဉ်းစားတွေးခေါ်ခြင်းနှင့် တရားဘာဝနာ ပွားများခြင်းတို့ ပြုလုပ်ပါက ဦးနှောက်ဆဲလ်များ ယိုယွင်းမှုကို သိသာစွာ တားဆီးပေးနိုင်ပါသည်။ အသက်ကြီးသော်လည်း ကျန်းမာကြံ့ခိုင်နေပါက လူ့ဘဝသည် အမြဲတမ်း တန်ဖိုးရှိနေမည် ဖြစ်ပါသည်။`,
        fullText_en: `Age Is Just a Number

In youth, we yearn to grow up; in maturity, we reminisce about carefree childhood days. While aging is inevitable, historical achievements prove that vitality and purpose need not decline with years:

Notable Historical Milestones:
- Bertrand Russell championed global peace initiatives at age 84.
- Éamon de Valera served as President of Ireland at age 90.
- Pablo Picasso produced groundbreaking masterpieces into his 90s.
- Michelangelo designed the dome architecture of St. Peter's Basilica past age 80.
- Leo Tolstoy authored acclaimed literary works well into his 80s.
- Myanmar Scholar U Hoke Sein compiled monumental Pali-Myanmar dictionaries past age 90.

Medical Longevity Insights:
1. Caloric Moderation: Controlled dietary intake reduces oxidative cellular stress and promotes metabolic longevity.
2. Cardiovascular Maintenance: Regular moderate exercise (e.g., daily walking) preserves vascular elasticity and prevents hypertension.
3. Cognitive Engagement: Continuous reading, active learning, and mindfulness practice significantly mitigate age-related cognitive decline.`
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
        previewText: `ပျော်ရွှင်မှုနဲ့ ပတ်သက်လာရင် လူတွေက ကိုယ့်အပြင်ဘက်က ပျော်ရွှင်စရာတွေကို လိုက်ရှာတတ်ကြပါတယ်။ စဉ်းစားကြည့်ပါ၊ ကျွန်တော်တို့ဘဝမှာ ပျော်ရွှင်မှုကို လိုက်ရှာနေရတယ်ဆိုကတည်းက ကိုယ့်ဆီမှာ ပျော်ရွှင်မှု မရှိသေးဘူးလို့ ခံစားနေရတာကြောင့် ဖြစ်ပါတယ်။

ဒါကြောင့်မို့ တချို့လူတွေဟာ ပျော်စရာတွေကို လိုက်ရှာရင်းနဲ့ မပျော်စရာ တောအုပ်ထဲမှာ ပိတ်မိနေကြတာပါ။

ဒီစာအုပ်လေးကတော့ ပျော်ရွှင်မှုတွေနဲ့ ပတ်သက်လာရင် ကိုယ့်ရဲ့ အတွင်းစိတ်ကသာ စစ်မှန်တဲ့ ပျော်ရွှင်မှုဖြစ်ကြောင်းနှင့် ကိုယ့်ရဲ့ အတွင်းတုန်ခါမှု (Vibration & Frequency) ကို မြှင့်တင်ပြီး ပိုမိုကောင်းမွန်တဲ့ ဘဝကို ဘယ်လို ပိုင်ဆိုင်ရမလဲဆိုတာကို လမ်းညွှန်တင်ပြထားတဲ့ စာအုပ်ကောင်းတစ်အုပ် ဖြစ်ပါသည်။`,
        previewText_en: `When it comes to happiness, people often search for external sources. Yet seeking happiness externally often traps us in deeper dissatisfaction.

"Good Vibes, Good Life" reveals that genuine fulfillment stems from within. By mastering self-love, elevating personal emotional frequency, and cultivating positive lifestyle habits, you unlock a truly joyful life.`,
        fullText: `အခန်း (၁) - ဘဝနေထိုင်မှု အလေ့အကျင့်ကောင်းများ (Positive Lifestyle Habits)

Good Life လို့ခေါ်တဲ့ ကောင်းမွန်တဲ့ ဘဝတစ်ခုကို ရရှိဖို့အတွက် အရေးကြီးဆုံးအချက်က ကိုယ့်ဆီက ထွက်ပေါ်လာတဲ့ အတွေးနဲ့ ခံစားချက်တွေရဲ့ တုန်ခါမှုကြိမ်နှုန်း (Frequency) မြင့်မားနေဖို့ ဖြစ်ပါတယ်။

မကျေနပ်တာ၊ စိတ်ပျက်တာ၊ အဆိုးမြင်တာနဲ့ အားငယ်တာတွေဟာ ကြိမ်နှုန်းနိမ့် (Lower-vibration) ခံစားချက်တွေဖြစ်ပြီး ပျော်ရွှင်မှု၊ မေတ္တာ၊ ကရုဏာ၊ ကျေးဇူးသိတတ်မှုနဲ့ အကောင်းမြင်စိတ်တွေကတော့ ကြိမ်နှုန်းမြင့် (Higher-vibration / Good vibes) ခံစားချက်တွေ ဖြစ်ကြပါတယ်။

ကောင်းမွန်တဲ့ ဘဝကို ပိုင်ဆိုင်နိုင်စေမည့် အလေ့အကျင့် (၃) မျိုး -

---

၁။ အပြုသဘောဆောင်သော ပတ်ဝန်းကျင်ကို တည်ဆောက်ပါ (Surround Yourself with Positive People)
ကိုယ့်ထက် ကြိမ်နှုန်းမြင့်မားပြီး အကောင်းမြင်စိတ်ရှိသူတွေနဲ့ နီးစပ်အောင် နေထိုင်ပါ။ အဆိုးမြင်တတ်သော Toxic ပတ်ဝန်းကျင်တွင် ရှင်သန်နေရပါက စိတ်စွမ်းအင်များ ညှိုးနွမ်းသွားတတ်ပါသည်။ အတင်းအဖျင်းပြောဆိုခြင်းနှင့် အဆိုးမြင်စကားများကို ရှောင်ကြဉ်ပြီး အပြုသဘောဆောင်သူများနှင့် ခိုင်မာသော ဆက်ဆံရေး တည်ဆောက်ပါ။

၂။ ကိုယ်ဟန်အမူအရာကို ပြုပြင်ပါ (Change Your Body Language)
ကိုယ်ဟန်အနေအထားကို ပြောင်းလဲလိုက်ခြင်းက စိတ်ခံစားချက်ကို တိုက်ရိုက် ပြောင်းလဲစေနိုင်ပါတယ်။ စိတ်ပညာရှင် Amy Cuddy ၏ လေ့လာချက်အရ မိမိကိုယ်ကို ယုံကြည်မှုရှိသော ကိုယ်ဟန်အမူအရာ (Power Pose) ဖြင့် တစ်နေ့ ၂ မိနစ်ခန့် နေထိုင်ပေးရုံဖြင့် စိတ်ဖိစီးမှု ဟော်မုန်းများ ကျဆင်းသွားပြီး ကောင်းမွန်သော Endorphin ဟော်မုန်းများ တိုးတက်ထွက်ရှိလာစေပါသည်။

၃။ တစ်ကိုယ်တည်း အနားယူချိန် ဖန်တီးပါ (Find Time for Solitude & Recharge)
လောကကြီးနှင့် ခေတ္တ အဆက်အသွယ်ဖြတ်ပြီး တစ်ယောက်တည်း သီးသန့် အနားယူခြင်းသည် စိတ်စွမ်းအင်ကို အပြည့်အဝ ပြန်လည်ဖြည့်တင်း (Recharge) ပေးနိုင်ပါသည်။ သဘာဝတရားနှင့် ထိတွေ့ခြင်း၊ လမ်းလျှောက်ခြင်းနှင့် တိတ်ဆိတ်စွာ အနားယူခြင်းတို့ဖြင့် အတွင်းစိတ် တည်ငြိမ်မှုကို ပြန်လည်ရယူပါ။`,
        fullText_en: `Chapter 1 – Positive Lifestyle Habits

To manifest a "Good Life", raising your emotional frequency and vibration is fundamental. Lower-vibration emotions (resentment, despair, chronic pessimism) drain vitality, while higher-vibration emotions (joy, gratitude, love, compassion) unlock your true potential.

Key Habits for Cultivating Good Vibes:

1. Surround Yourself with Positive People:
Energy is contagious. Cultivating deep bonds with constructive, uplifting people elevates your own emotional frequency while shielding you from toxic dynamics.

2. Mindful Body Language:
Adopting empowered, open postures triggers positive neurological shifts, releasing mood-enhancing endorphins and diminishing stress hormones.

3. Solitude and Intentional Recharge:
Disconnecting temporarily from social noise and spending quiet time in nature allows mental decompression and profound energetic recovery.`
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
        previewText: `အင်းစိန်ထောင်မှ လွတ်မြောက်လာသူများ မိန်းဂျေးလ်လမ်းမကြီးပေါ်တွင် နောက်ပြန်မလှည့်ကြည့်ကြသည့် ရိုးရာအယူအဆနှင့်အတူ၊ ထောင်တွင်း ပျံ့နှံ့နေသည့် သရဲတစ္ဆေနှင့် ပရလောကဖြစ်စဉ်များအကြောင်း ရေးသားရန် ဆုံးဖြတ်ခဲ့သူ၏ ကိုယ်တွေ့ အစပိုင်း အတွေ့အကြုံများနှင့် အမြင်များကို ဖော်ပြထားပါသည်။

ထောင်တွင်းသို့ စတင်ဝင်ရောက်လာချိန် ကြုံတွေ့ရသည့် တင်းကျပ်လှသော ပတ်ဝန်းကျင်၊ နိုင်ငံရေးအကျဉ်းသားတစ်ဦးအဖြစ် ရောက်ရှိလာပြီး သာမန်အဆောင်များတွင် နေရာမရှိတော့သဖြင့် ကြိုးတိုက်သို့ အပို့ခံရစဉ် ခံစားခဲ့ရသော တုန်လှုပ်ချောက်ချားဖွယ် စိတ်ခံစားမှုများကို မှတ်တမ်းတင် ရေးသားထားသော စာအုပ်ကောင်းတစ်အုပ် ဖြစ်ပါသည်။`,
        previewText_en: `Rooted in the prison lore that those released from Insein Prison never look back along the Main Jail road, this book chronicles firsthand encounters and chilling supernatural tales from behind bars.

The author recounts the harrowing atmosphere of entering prison under political charges, confronting the dread of being assigned to the Death Row cell blocks amid overcrowding and unsettling spiritual presences.`,
        fullText: `ထောင်ဗူးတံခါးကနေ တောက်လျှောက် ဖောက်ထားတဲ့ လမ်းမကြီးရဲ့ အဆုံးမှာ မြင့်မားတဲ့ ကင်းမျှော်စင်ကြီးတစ်ခုကို လှမ်းမြင်နေရပါတယ်။ လမ်းမပေါ်ကနေ လျှောက်သွားဖို့ ဟန်ပြင်လိုက်စဉ်မှာ ဘေးမှာကပ်လာတဲ့ ဝန်ထမ်းက လက်မောင်းကို ဆောင့်ဆွဲလိုက်ပါတယ်။

"ဒီ မိန်းဂျေးလ်လမ်းက မင်းတို့လို အကျဉ်းသားတွေ လျှောက်ဖို့ မဟုတ်ဘူး။ ထောင်က လူကြီးတွေ လျှောက်ဖို့ လုပ်ထားတာ။ နောက်ကို မြဲမြဲမှတ်ထား။"

သူ့စကား ဆုံးဆုံးချင်း လမ်းဘေးသို့ ဆင်းလျှောက်ရပါတယ်။ အခြား အကျဉ်းသားတွေဟာလည်း မိန်းဂျေးလ်လမ်းမကြီးရဲ့ ဟိုဘက်ဒီဘက် ကျဉ်းမြောင်းတဲ့ လူသွားလမ်းလေးပေါ်မှာ လျှောက်နေကြတာကို သတိထားမိလိုက်ပါတယ်။ မိန်းဂျေးလ်မျှော်စင်နဲ့ တဖြည်းဖြည်း နီးလာတော့ မျှော်စင်ပထမထပ်မှာ တည်ထားတဲ့ ဘုရားကျောင်းဆောင်လေး တစ်ဆူကိုလည်း တွေ့လိုက်ရပါတယ်။

လမ်းရဲ့ ညာဘက်မှာ နှစ်ထပ်ဆောက်လုပ်ထားတဲ့ ဆေးရုံကို တွေ့ရပါတယ်။ မိန်းဂျေးလ်မျှော်စင် အနားကို ရောက်လာတော့ မျက်နှာချင်းဆိုင်မှာရှိတဲ့ ရုံးခန်းတစ်ခုထဲကို ဝင်လိုက်ရပါတယ်။ ဒီရုံးခန်းမှာတော့ ပခုံးမှာ အပွင့်သုံးပွင့် တင်ထားတဲ့ ထောင်ပိုင်လေးဆိုတဲ့ အရာရှိတစ်ယောက် ရုံးထိုင်နေပါတယ်။ လိုက်ပို့တဲ့ ဒုတပ်ကြပ်က ထောင်ပိုင်လေးကို သတင်းပို့ပြီးတဲ့နောက် အကျဉ်းသားစာရင်းကို ထပ်ပြီး ဖြည့်စွက်ရပါတယ်။ နိုင်ငံတော် ဆူပူလှုံ့ဆော်အောင် ကြံရွယ်သည်ဟု ပုဒ်မ ၅(ည) နဲ့ စွပ်စွဲထားတာကို ဖတ်ပြီး ထောင်ပိုင်လေးက ဘေးက ထောင်မှူးကို လှမ်းမေးပါတယ်။

"ဒီကောင့်ကို တိုက်ထဲ ပို့လိုက်ကွာ။"
"(၅) တိုက်ကော၊ (၆) တိုက်ကော ကျောင်းသားတွေနဲ့ ပြည့်နေပြီ ဆရာ။"

ထောင်ပိုင်လေးလည်း ခေတ္တစဉ်းစားပြီး ကျွန်တော့်ကို စူးစိုက်ကြည့်ကာ ထပ်ပြောလိုက်ပါတယ်။

"ဒီကောင်တွေက ၅(ည) ဆိုတော့ အဆောင်ပို့လို့ မဖြစ်ဘူး။ ထားစရာ မရှိလည်း ကြိုးတိုက်ထဲ ထည့်လိုက်။"

ထောင်ပိုင်လေး စကားဆုံးဆုံးချင်း နားရင်းပါးရင်းတွေ ထူပူပြီး ဆံပင်တွေ ထောင်သွားလောက်အောင် စိုးရိမ်တုန်လှုပ်သွားပါတယ်။ နိုင်ငံရေးပုဒ်မနဲ့ အင်းစိန်ထောင်ကို ရောက်လာပေမယ့် ကြိုးတိုက်ကို သွားရမယ်ဆိုတော့ ဘယ်လူသားမဆို ထိတ်လန့်မှာပါပဲ။ ကြိုးတိုက်မှာ ရှိတဲ့ အကျဉ်းသားတွေဟာ အလွန်ရက်စက်ဆိုးဝါးတဲ့ ပြစ်မှုမျိုးတွေကို ကျူးလွန်ခဲ့ပြီး သေဒဏ်ပေးခံထားရတဲ့ အကျဉ်းသားတွေ ဖြစ်ပါတယ်။ သူတို့တွေနဲ့အတူ သွားနေရမှာဆိုတော့ သွေးတွေ ရပ်တန့်သွားသလို ခြေလက်တွေ ထိန်းမရအောင် တုန်လှုပ်နေပါတော့တယ်။

ဗူးဝကနေ ခေါ်လာတဲ့ ဒုတပ်ကြပ်က ကျွန်တော့်ကို မိန်းဂျေးလ်မျှော်စင်ရဲ့ ဘယ်ဘက်မှာရှိတဲ့ တံခါးပေါက်တစ်ခုဆီ ခေါ်သွားပါတယ်။ တံခါးကို နီညိုရောင် ဆေးသုတ်ထားပြီး နံရံကိုတော့ ဖြူဖွေးနေတဲ့ ထုံးတွေကို ခပ်ထူထူ သုတ်ထားပါတယ်။ အနီးရောက်တော့ တံခါးကို ခေါက်လိုက်တဲ့အခါမှာ တိုက်အတွင်းကနေ အကျဉ်းသားတစ်ယောက်က ချောင်းကြည့်ပြီး ဖွင့်ပေးပါတယ်။ တံခါးပွင့်သွားချိန် မြင်တွေ့လိုက်ရတဲ့ မြင်ကွင်းကိုတော့ ယနေ့တိုင် မမေ့နိုင်တော့ပါဘူး။

"ဆရာတို့ကတော့ လုပ်ချင်လိုက်ပြန်ပြီ။ လူတွေ ကျပ်နေပါတယ်ဆိုမှ နေ့တိုင်း ဧည့်သည်တွေ ခေါ်ခေါ်လာတယ်။ အဆောင်တော့ မပို့ဘူး။"
"အိပ်ရာ မရှိရင် ကြိုးတိုက်ထဲ ထားလိုက်ကွာ။"

သူ့စကားဆုံးတော့ အဲ့ဒီအကျဉ်းသားက ရယ်မောနေပေမယ့် ကျွန်တော်ကတော့ မရယ်နိုင်ဘဲ လက်တွေမှာ ချွေးစေးတွေ ပြန်နေပါတယ်။ ကျွန်တော့်ကို ဗာဒံပင်ကြီးအောက်မှာရှိတဲ့ တိုက်ခန်းတစ်ခုဆီ ထပ်မံခေါ်ဆောင်သွားပြီး ထုံးစံအတိုင်း မိဘအမည်၊ အကျဉ်းသားအမည်၊ အလုပ်အကိုင်နဲ့ စွပ်စွဲခံရတဲ့ ပုဒ်မများကို ရေးသွင်း မှတ်တမ်းတင်ကာ ကြိုးတိုက်ဆီသို့ စတင်ပို့ဆောင်ခြင်း ခံရပါတော့သည်။`,
        fullText_en: `At the end of the long road extending straight from the main prison entrance, a towering watchtower stood imposing in the distance. As I moved to step onto the wide road, the escorting staff grabbed my arm abruptly:

"This Main Jail road isn't for prisoners like you to walk on. It's meant for prison authorities only. Keep that in mind."

Stepping immediately onto the narrow dirt path alongside the road, I noticed other inmates quietly treading the same restricted paths. Approaching the central watchtower, a small Buddhist shrine became visible on its first landing, with the two-story prison hospital situated to the right.

Inside the administration office opposite the tower, an officer with three pips on his shoulder reviewed my intake documentation. Reading the political charge—Section 5(J)—he addressed his subordinate:

"Send him straight to the solitary blocks."
"Sir, Blocks 5 and 6 are already packed full with students."

After a tense pause, the officer gave a chilling directive:
"Since he's under Section 5(J), regular wards are out of the question. If there's nowhere else, put him in the Death Row cells (Kyoe Taik)."

Hearing "Death Row", a cold shock rushed through me. While prepared for political imprisonment, being placed in Death Row alongside convicts sentenced to capital punishment was an overwhelming terror. Led through heavy iron doors into the grim confines shaded by badam trees, my biographical details were formally recorded as the gate of Death Row closed behind me.`
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
        previewText: `ရန်ကုန်မြို့ဆင်ခြေဖုံး ရပ်ကွက်လေးတစ်ခုမှာ ကပ်ရောဂါနှင့် စီးပွားရေးအကျပ်အတည်းများကြောင့် တိတ်ဆိတ်နေသည့်ကြားမှ အိမ်တစ်အိမ်အတွင်း အမျိုးသမီးနှစ်ဦး၏ ဘဝရှင်သန်ရေး ရုန်းကန်မှုများကို တွေ့မြင်ရသည်။

မိသားစုကို ဦးဆောင်နေရသည့် ကိုယ်ဝန်ဆောင် အိဆွေနှင့် ခရီးဆောင်အိတ်ကို အသေအချာ ပြင်ဆင်ထုပ်ပိုးကာ တစ်စုံတစ်ခုကို ဆုံးဖြတ်ချက်ချ စောင့်မျှော်နေသော ရဲဆိုသည့် မိန်းကလေးတို့ကြားမှ သံယောဇဉ်၊ လျှို့ဝှက်ချက်နှင့် လူမှုဘဝ အခက်အခဲများကို လှပဆွေးမြည့်စွာ ဖော်ကျူးထားသည့် ဇာတ်လမ်းကောင်းတစ်ပုဒ် ဖြစ်ပါသည်။`,
        previewText_en: `Set against the backdrop of a quiet Yangon suburban neighborhood grappling with pandemic strains and economic hardship, two women navigate difficult life choices and survival.

Ei Swe, a pregnant woman carrying family burdens, and her friend Ye confront harsh social realities, sacrifices, and unspoken secrets as they prepare for a life-altering departure.`,
        fullText: `"ဒေါင်ဒင်၊ ဒေါင်ဒင်၊ ဒေါင်ဒင်"

လမ်းထိပ် ကင်းတဲမှ သံချောင်းခေါက်သံကြောင့် အိဆွေတစ်ယောက် ဆာလာအိတ်ဖြင့် ချုပ်ထားသည့် တစ်ခါသုံး ခရီးဆောင်အိတ်အား ကွဲထွက်မသွားစေရန် ကြိုးဖြင့် တင်းကျပ်စွာ စည်းနှောင်နေသော သူငယ်ချင်းဖြစ်သူကို ကြည့်ရင်း လှုပ်လှုပ်ရှားရှား ဖြစ်သွားရသည်။

"သုံးနာရီ ထိုးပြီ၊ ကား ဘယ်အချိန် ခေါ်ထားတာလဲ။"
ရဲဆိုသည့် မိန်းကလေးက ကြိုးကို အားစိုက်ဆွဲရင်း မော့ကြည့်ကာ -
"လေးနာရီ" ဟု ခပ်ပြတ်ပြတ် ဖြေလိုက်သည်။

ကြိုးစကို သပ်ရပ်စွာ ချည်နှောင်ပြီး စိတ်တိုင်းကျသွားတော့မှ ရဲသည် ကြမ်းပြင်ပေါ်သို့ ခြေပစ်လက်ပစ် ထိုင်ချလိုက်သည်။ ညိုဝင်းစိုပြည်သော သူမ၏ အသားအရေသည် အခန်းတွင်း အပူရှိန်နှင့် ချွေးများကြောင့် နီရဲနေသည်။

"ရဲရယ်... အဲဒီလိုလုပ်မှ ဖြစ်မှာလား၊ စဉ်းစားပါဦး။ အခုခေတ် စီးပွားရေးကလည်း မကောင်း၊ ဒီအိမ်မှာလည်း အဖေမရှိတော့သလို အမေကလည်း နာတာရှည် ရောဂါသည်... ဒီကလေးတွေကို ငါ ဘယ်လိုကျွေးမွေးရမလဲ။"
အိဆွေက မျက်ရည်ဝဲလျက် ရင်ထဲမှ သောကများကို ဖွင့်ဟပြောပြသည်။

"ဟာ... ဘာကို ထပ်စဉ်းစားနေရမှာလဲ။ ဒီမှာ ဗိုက်ကလည်း ငါးလကျော်လာပြီ၊ ကပ်ရောဂါကလည်း ဖြစ်နေတာ။ စိတ်ချပါ... ငါ တာဝန်ယူမယ်။ နင့်ကိုရော နင့်သမီးလေးကိုပါ ငါ ကူညီကယ်တင်ပါ့မယ်။"
ရဲက အိဆွေ၏ ပခုံးကို ဖက်ကာ နှစ်သိမ့်ပေးလိုက်သည်။

"တစ်ခုတော့ တောင်းဆိုပါရစေ ရဲရယ်... ကလေးမွေးပြီးရင် သူ့ကို ပြန်ပေးပါ။ သူ့ကို ဘယ်တော့မှ ငါနဲ့ မခွဲပါနဲ့။"
"စိတ်ချပါ အိဆွေ... ငါ သူ့ကို သမီးအရင်းတစ်ယောက်လို စောင့်ရှောက်ပေးမယ်။ နင်လည်း အချိန်မရွေး လာတွေ့လို့ရပါတယ်။"

အိဆွေက မျက်ရည်များကို သုတ်ကာ ပြုံးပြလိုက်သည်။
"ကျေးဇူးတင်ပါတယ် ရဲရယ်။"

ထို့နောက် ရဲသည် ခရီးဆောင်အိတ်ကို ဆွဲကာ ထွက်ခွာရန် ပြင်ဆင်လိုက်သည်။ သူမ၏ အိတ်ကပ်ထဲတွင် မှတ်ပုံတင်၊ ယာဉ်မောင်းလိုင်စင်၊ KBZ ဘဏ်ကတ်တစ်ကတ်၊ ကြွပ်ကြွပ်အိတ် အမည်းဖြင့် ပတ်ထားသော ငွေငါးသိန်း၊ အကြွေစေ့တချို့၊ ပါဝါဘဏ်နှင့် ကာလရှည်ကြာ စုဆောင်းထားသော ရွှေစလေးတစ်ပိုင်း ပါဝင်သည်။

အိဆွေ အိမ်နောက်ဘက်သို့ ဝင်သွားချိန်တွင် ရဲသည် လမ်းမကြီးဘက်သို့ ငေးကြည့်ရင်း တစ်ကိုယ်တည်း တီးတိုးရေရွတ်လိုက်သည် -
"နင့်ကို ငါ ကူညီမယ်လို့ ပြောခဲ့ပေမယ့် တကယ်တော့ ငါ့ကိုယ်ငါလည်း ကယ်တင်ဖို့ လိုနေတာပါ။ ဒီလောကကြီးက အရာရှိတွေ၊ ဆရာဝန်တွေ၊ အင်ဂျင်နီယာတွေရဲ့ ကမ္ဘာပါ... ငါတို့လို သာမန် ဆင်းရဲသားတွေအတွက် နေရာမရှိပါဘူး။"

သူမ အဝေးကို ငေးကြည့်နေစဉ် ခေါ်ထားသော ကားတစ်စီးသည် အိမ်ရှေ့သို့ တဖြည်းဖြည်း ဆိုက်ရောက်လာပါတော့သည်။`,
        fullText_en: `The distant tolling of the neighborhood watch gong echoed through the quiet streets, startling Ei Swe as she watched her friend Ye carefully reinforce a makeshift travel bag with nylon rope.

"It's already three o'clock. What time did you call the taxi for?"
"Four o'clock," Ye replied curtly without looking up.

Tightening the final knot, Ye collapsed onto the wooden floor, her face flushed with heat and exertion. 

"Ye, are you absolutely sure about this?" Ei Swe asked, tears welling in her eyes. "With the economic collapse, our father gone, and mother chronically ill, how will we survive?"

"Stop overthinking, Ei Swe. You're already five months pregnant in the middle of a pandemic. Trust me, I'll take full responsibility. I will help both you and your child."

"Just promise me one thing, Ye... once the baby is born, please let me have her back. Never separate us permanently."
"I promise. I'll care for her like my own, and you can visit anytime."

Ye packed her essentials—NRC identity card, driving license, bank card, wrapped cash reserves, a power bank, and a small piece of saved gold. 

As Ei Swe walked to the backroom, Ye gazed out toward the empty street, murmuring quietly to herself:
"I told you I'd save you, but in truth, I need to save myself too. This world belongs to the privileged; there is rarely room for people like us."

Just then, the headlights of an approaching car illuminated the dim driveway.`
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
        previewText: `ရေနစ်သူကဲ့သို့ အမျိုးသမီးတစ်ဦး ရေထဲတွင် အသက်မရှိတော့သလို လဲလျောင်းနေပြီး၊ အမှောင်ထုထဲမှ ကယ်တင်ရန် အော်ဟစ်အကူအညီတောင်းနေသည့် မြင်ကွင်းဖြင့် အစပြုကာ လျှို့ဝှက်ဆန်းကြယ်ပြီး ထိတ်လန့်ဖွယ် ဇာတ်လမ်းတစ်ပုဒ်ကို ဖွင့်လှစ်ထားပါသည်။

မိုးသက်မုန်တိုင်းကြားတွင် မိခင်ဖြစ်သူကို ဆုံးရှုံးလိုက်ရသည့် ကြေကွဲဖွယ်ရာ အတိတ်ဆိုးနှင့် နှစ်ပေါင်းများစွာကြာမှ ပေါ်ထွက်လာသည့် မထင်မှတ်ထားသော တရားခံအစစ်အမှန်၏ လျှို့ဝှက်ချက်များကို ရင်သပ်ရှုမောဖွယ် ဖတ်ရှုရမည့် သည်းထိတ်ရင်ဖို ဝတ္ထုတိုတစ်ပုဒ် ဖြစ်ပါသည်။`,
        previewText_en: `Beginning with the chilling visual of a lifeless woman submerged in water and desperate cries echoing through the dark, "Last Breath" unfolds a gripping tale of tragedy, mystery, and supernatural dread.

Haunted by the traumatic night her mother drowned amidst a violent thunderstorm, the protagonist later uncovers the shocking and heartbreaking truth behind the tragedy.`,
        fullText: `"ရန်လို… ရန်လို…"
အာရုံတို့ ပြောင်းလဲပြီး ရန်လိုဆီ စိတ်ကူးရောက်သွားသည်။
"ရန်လိုရေ… လာ… လာ… တူတူပုန်းတမ်း ကစားကြမယ်။"

သို့သော် ကျွန်မ၏နေ့ မဟုတ်ခဲ့ပါ။ ရန်လိုသည် အရင်လို အရာရှိများဆီသို့ ပြေးဝင်သွားခဲ့သည်။
"ဒါ အကြောင်းတစ်ခုခု ရှိလို့ပဲ။"
"ရန်လို… ဘာလဲ ဖြေစမ်းပါ… အဖြေတွေ့အောင်လို့ပါ။"
"အမေလေး… ကယ်ကြပါ… ကျွန်မကို ကယ်ကြပါဦး…"

မြတ်စွာဘုရား…။
ဒါ… ဘယ်ကလာတဲ့ အသံလဲ။
အမြင်အာရုံတို့ မှိုင်းမှုန်နေပြီး ရေငွေ့တွေကြောင့် မှုန်ဝါးနေသည့် ရေကန်ထဲမှာ…။
ရင်ထဲမှာ တုန်လှုပ်နေပြီး အသက်ရှူဖို့ပင် ခက်ခဲနေသည်။ မျက်လုံးဖွင့်ကြည့်လိုက်တော့ အဝါရောင် မှိန်ပျပျ မီးအိမ်တစ်ခု…။

မိန်းကလေးတစ်ယောက် ရေနစ်သလို အသက်မဲ့နေသော ပုံစံဖြင့် ရေထဲတွင် လဲလျောင်းနေသည်။ သူမ၏ မျက်လုံးများ ပိတ်ထားပြီး နှုတ်ခမ်းများမှာလည်း အပြာရောင် သန်းနေသည်။
အဝတ်အစားများ စိုစွတ်နေပြီး ရေစက်များ တသွင်သွင် ကျဆင်းနေဆဲ။

ကျွန်မသည် ထိုအမျိုးသမီးကို ရင်ခွင်ထဲထည့်ကာ အစွမ်းကုန် ကြိုးစားကယ်တင်ခဲ့သည်။ သို့သော် သူမ၏ ခန္ဓာကိုယ်သည် အေးစက်ခဲနေပြီး အသက်လက္ခဏာ လုံးဝမရှိတော့ပါ။
"အမေ… အမေ ကျွန်မကို ထားမသွားပါနဲ့…"
ကျွန်မသည် မျက်ရည်များစွာ စီးကျရင်း သူမ၏ ခန္ဓာကိုယ်ကို တင်းကျပ်စွာ ဖက်ထားမိသည်။ မိုးကြိုးပစ်သံများနှင့်အတူ မိုးသည်းထန်စွာ ရွာသွန်းနေခဲ့သည်။ သို့သော် အချိန်ကား နောက်ပြန်မလှည့်နိုင်တော့ပါ။

ထိုအချိန်တွင် ရဲအရာရှိများ ရောက်ရှိလာကြသည်။
"အစ်မ… ဘာဖြစ်တာလဲ… ဘယ်သူက ဒီလိုလုပ်ခဲ့တာလဲ။"
ရဲအရာရှိ၏ မေးခွန်းကို ကျွန်မ ဖြေဆိုနိုင်စွမ်းမရှိခဲ့ပါ။ ထိတ်လန့်လွန်း၍ အသိစိတ်များ ပျောက်ဆုံးသွားခဲ့ရသည်။

---

နှစ်နှစ်ကြာပြီးနောက်…
ကျွန်မသည် အခြားနိုင်ငံတစ်ခုသို့ ရောက်ရှိပြီး ဘဝသစ်ကို စတင်နေထိုင်ခဲ့သည်။ သို့သော် ညတိုင်း အိပ်မက်ဆိုးထဲတွင် ထိုညက အဖြစ်အပျက်ကို ထိတ်လန့်ဖွယ် မြင်တွေ့နေရဆဲ ဖြစ်သည်။

ထိုစဉ် တံခါးခေါက်သံ ကြားလိုက်ရသည်။
"အစ်မ… အစ်မ ရှိလား။"
ယခင်က အမှုလိုက်ပေးခဲ့သည့် ရဲအရာရှိ၏ အသံပင် ဖြစ်သည်။
"အစ်မ… သတင်းကောင်း ရှိတယ်… တရားခံကို ရှာတွေ့ပြီ။"
"ဘယ်သူ့ကိုလဲ…"
"အစ်မရဲ့ အမေကို သတ်သွားတဲ့ တရားခံ အစစ်အမှန်ကို ရှာတွေ့ပါပြီ။"

ကျွန်မ၏ နှလုံးသားသည် ရပ်တန့်သွားသလို ခံစားလိုက်ရသည်။
"တကယ်လား… ဘယ်သူလဲ။"
"အစ်မ ထင်ထားတဲ့သူ မဟုတ်ဘူး… အလွန် အံ့အားသင့်စရာ ကောင်းပါတယ်။"
"ပြောပါ… ဘယ်သူလဲ။"
"အစ်မရဲ့ အဖေပါ… အဖေ ကိုယ်တိုင်ပါပဲ။"

ကျွန်မသည် ကြမ်းပြင်ပေါ်သို့ ပြုတ်ကျသွားခဲ့သည်။
"မဖြစ်နိုင်တာ… အဖေက အမေ့ကို အရမ်းချစ်တာ… ဘာကြောင့် ဒီလိုလုပ်ရတာလဲ။"
"အဖေက အမေ့အပေါ် သံသယတွေ ဝင်နေခဲ့တာပါ… အခြားသူတစ်ယောက်နဲ့ ဖောက်ပြန်နေတယ်လို့ ထင်မှားပြီး ဒီလို ရက်ရက်စက်စက် လုပ်ခဲ့တာပါ။"

ကျွန်မသည် မျက်ရည်များ စီးကျရင်း အဖြစ်မှန်အားလုံးကို နားလည်သွားခဲ့ရသည်။
ဘဝသည် လျှို့ဝှက်ဆန်းကြယ်လွန်းပြီး ကြောက်မက်ဖွယ် ကောင်းလှသည်။ အဖေသည် အကျဉ်းထောင်ထဲတွင် ကျန်ရစ်ခဲ့ပြီး ကျွန်မသည် တစ်ယောက်တည်း အထီးကျန်စွာ ကျန်ခဲ့ရသော်လည်း အမေ၏ ဆန္ဒအတိုင်း အားတင်းကာ ရှေ့ဆက် အသက်ရှင်နေထိုင်ရမည် ဖြစ်ပါတော့သည်။`,
        fullText_en: `Disorienting echoes bounced through the humid air as muffled pleas for help shattered the silence:
"Help me... somebody please save me..."

Through the mist and dim amber lamplight, the silhouette of a lifeless woman lay submerged in the dark water, lips tinted pale blue, soaked in freezing rain. 

Clutching her icy body in desperation, tears streamed down as the storm raged with violent thunderclaps. The realization hit like a physical blow—she had taken her last breath.

Two years later in a distant city, the lingering trauma continued to haunt every waking night. The silence was broken by an unexpected knock on the door from the investigating detective:
"We found the perpetrator who killed your mother."

Heart racing, the truth unfolded in utter disbelief:
"It was your father. Consumed by unfounded jealousy and toxic suspicion, he took her life."

Collapsing in shock, the dark reality settled heavily. Left alone in the world with the haunting truth, survival became the only promise left to honor her mother's memory.`
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
        previewText: `အိပ်ရာမှ လန့်နိုးလာသော မိန်းကလေးတစ်ဦးသည် အခန်းတစ်ခုလုံး မီးဟုန်းဟုန်းတောက်လောင်နေပြီး မီးတောက်များက ဝန်းရံလျက်ရှိသည်ကို မြင်တွေ့ရသည်။

မီးဘယ်ကနေ စတင်လောင်ကျွမ်းသည်ကို မသိရသလို ထွက်ပေါက်လည်း မရှိတော့ဘဲ သေဘေးနှင့် ရင်ဆိုင်နေရချိန်တွင် ရုတ်တရက် အိပ်မက်မှ နိုးထလာခဲ့သည်။ သို့သော် အလွန်တရာ လက်တွေ့ဆန်လွန်းသော ထိုအိပ်မက်ဆိုးနှင့်အတူ သူမ၏ ဘေးအိမ်မှ လျှို့ဝှက်ဆန်းကြယ် ထိတ်လန့်ဖွယ်ရာ ဖြစ်ရပ်ဆိုးများ စတင်လာပါတော့သည်။`,
        previewText_en: `Awakening abruptly in panic, a young woman finds her room engulfed in roaring flames with every exit blocked. 

Just as the blistering heat consumes her, she awakens to realize it was an extraordinarily vivid nightmare. However, the eerie sensation lingers as terrifying supernatural events begin unfolding from the mysterious house next door.`,
        fullText: `သူမ အိပ်ရာမှ ရုတ်တရက် လန့်နိုးလာခဲ့သည်။ ဘာကြောင့် လန့်နိုးလာတာလဲ... တဖျစ်ဖျစ် မြည်နေတဲ့ လောင်ကျွမ်းသံတွေကြောင့်လား၊ ဒါမှမဟုတ် လိမ္မော်ရောင်၊ အနီရောင် စူးရှတဲ့ မီးတောက်တွေရဲ့ အလင်းရောင်ကြောင့်လား။

ဆောင်းပြည့်စုံသည် အိပ်ရာပေါ်တွင် ဆတ်ခနဲ ထိုင်လိုက်ရင်း ကြောက်ရွံ့တုန်လှုပ်သည့် မျက်လုံးအစုံဖြင့် သူမ၏ ပတ်ပတ်လည်ကို ဝန်းရံထားပြီးဖြစ်သော မီးတောက်မီးလျှံများကို ကြည့်နေမိသည်။

မီးညွန့်မီးစွယ်များသည် သူမ၏ အခန်းတွင်းသို့ တိုးဝင်လာနေပြီ။ နံရံကပ်စက္ကူများသည် မီးကျွမ်းကာ တွန့်လိမ်နေကြ၏။ အဝတ်ဗီရိုတံခါးနှင့် ကိုယ်လုံးပေါ်မှန်ချပ်ကြီးတို့ပင် မီးတောက်မီးလျှံတို့၏ ဝါးမြိုခြင်းကို ခံနေရပေသည်။ မီးခိုးငွေ့များက အသက်ရှူရန် ခက်ခဲစေသောကြောင့် တဟွတ်ဟွတ် ချောင်းဆိုးမိရင်း အော်ဟစ် အကူအညီတောင်းရန် ကြိုးစားလိုက်သည်။

သို့ရာတွင်... ဆောင်းပြည့်စုံ သေခါနီးဆဲဆဲ အချိန်ကလေးမှာပင် အပူရှိန်ကြောင့် လန့်နိုးသွားကာ အော်ဟစ်လိုက်မိလေတော့သည်။

"တော်ပါသေးရဲ့... ဒါဟာ အိပ်မက်ဖြစ်နေလို့။"

ဆောင်းပြည့်စုံက စိတ်သက်သာရာရစွာ တွေးလိုက်ရင်း အိပ်ရာမှ ထလိုက်သည်။ ရင်ထဲမှာတော့ တဒိတ်ဒိတ် ခုန်နေဆဲ ဖြစ်သည်။ အရာအားလုံးဟာ အိပ်မက်ဆိုးတစ်ခုသာ ဖြစ်ကြောင်း သဘောပေါက်သွားတော့မှ စိတ်အေးသွားရသည်။ မီးတောက်မီးလျှံများလည်း မရှိတော့သလို အသက်ရှူရလည်း ပြန်လည် ချောမွေ့သွားသည်။

မီးဖိုချောင်ထဲတွင် မိခင်ဖြစ်သူ ဒေါ်ခင်ခင်ဝင်းက မနက်စာ ချက်ပြုတ်နေသောကြောင့် တစ်အိမ်လုံး အစားအသောက် မွှေးရနံ့များ ပျံ့နှံ့နေသည်။

"ဟဲ့... သမီး... ဒီနေ့ ကျောင်းသွားရမှာ မဟုတ်လား၊ အချိန်မီ ထတော့လေ။"

အမေ့၏ စကားသံကြောင့် စားပွဲတင်နာရီကို ကြည့်လိုက်ရာ နံနက် ၈ နာရီ ၁၅ မိနစ်သာ ရှိသေးသည်။ အိပ်မက်ဆိုးတစ်ခုကြောင့် ရင်တုန်ပန်းတုန် ဖြစ်ခဲ့ရသော်လည်း မနက်ခင်း အလင်းရောင်အောက်တွင် စိတ်ကို ပြန်လည် တည်ငြိမ်အောင် ထိန်းလိုက်သည်။ သို့သော်လည်း သူမ၏ နှလုံးသားထဲတွင်တော့ မရှင်းလင်းသော ကြောက်ရွံ့မှုတစ်ခုက တိတ်တဆိတ် စွဲကျန်နေဆဲ ဖြစ်ပါတော့သည်။`,
        fullText_en: `She jolted awake in terror—was it the crackling sound of timber burning, or the blinding glare of crimson and orange flames?

Sitting upright, Saung Pyae Sone stared in horror as ferocious flames rapidly engulfed her bedroom walls, blistering the wallpaper and consuming her wardrobe. Thick smoke choked her lungs, rendering her unable to cry out for help. 

Just as the searing heat closed in, she gasped and snapped awake.

"Thank goodness... it was only a nightmare."

Catching her breath, the terrifying vision slowly faded into the calm morning air. The comforting aroma of breakfast drifted from the kitchen where her mother, Daw Khin Khin Win, was preparing meals. 

"Time to get ready for school, dear!" her mother called out.

Glancing at the bedside clock showing 8:15 AM, she tried to shake off the lingering dread. Yet deep down, a subtle, cold unease whispered that the nightmare might have been an ominous omen.`
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
        previewText: `အင်းဝနေပြည်တော်ခေတ် နှစ်ပေါင်းရာနှင့်ချီကတည်းက လျှို့ဝှက်ဆန်းကြယ်စွာ ဖြစ်ပွားခဲ့သည့် သမိုင်းဝင် အဖြစ်အပျက်ဆိုးများနှင့် အကျဉ်းသားတစ်ဦးနှင့် ဆက်စပ်နေသော ထူးဆန်းထိတ်လန့်ဖွယ်ရာ ဖြစ်စဉ်များကို အခြေခံထားပါသည်။

ဖခင်အရင်းကို တစ်ခါမျှ မမြင်ဖူးဘဲ မိခင်ဖြစ်သူနှင့်အတူ အေးချမ်းစွာ နေထိုင်လာခဲ့သည့် မောင်သုတဆိုသော လူငယ်တစ်ဦးထံသို့ အင်းဝနန်းတွင်းနှင့် ဆက်နွှယ်နေသည့် ထူးဆန်းသော အမျိုးသမီးတစ်ဦး ရောက်ရှိလာပြီး ဖခင်နှင့် တွေ့ဆုံရန် ဖိတ်ခေါ်ခံရရာမှ စတင်ကာ နှစ်ပေါင်းများစွာ ဖုံးကွယ်ထားခဲ့သော နန်းတွင်း လျှို့ဝှက်ဆန်းကြယ်မှုများနှင့် ပဟေဠိဆန်သော ကံကြမ္မာဆိုးကြီးဆီသို့ တွန်းပို့ခြင်းခံရပါတော့သည်။`,
        previewText_en: `Set against the historical intrigue of ancient Inwa, "Krissar" unravels an eerie chain of events connected to a mysterious western prisoner and age-old occult occurrences.

Maung Thuta, a simple village youth raised solely by his mother, is unexpectedly approached by an enigmatic woman claiming to represent his long-lost father. Journeying to the bustling royal capital, he unwittingly steps into a dark web of royal secrets, ancient curses, and buried family truths.`,
        fullText: `လျှို့ဝှက်သော ညဉ့်နက်သန်းခေါင်ယံတွင် မီးတောက်မီးလျှံများက အပြင်ဘက်သို့တိုင် လျှံထွက်နေလေသည်။ ထင်းတုံးများ မီးစွဲလောင်နေသော တဖျစ်ဖျစ်မြည်သံများနှင့်အတူ မီးထဲမှ အပူရှိန်သည် သံတုံးများပင် အရည်ပျော်ကျသွားနိုင်လောက်အောင် ပြင်းထန်လွန်းလှသည်။

နေရာမှာ ဧရာဝတီမြစ်၏ အရှေ့ဘက်ကမ်း တစ်နေရာဖြစ်ပြီး၊ အချိန်ကာလမှာ လွန်ခဲ့သော နှစ်ပေါင်းလေးရာခန့်၊ သက္ကရာဇ် (၈၈၀) ပြည့်နှစ်ဝန်းကျင် အင်းဝနေပြည်တော်ခေတ် ဖြစ်သည်။

ထိုအချိန်ကာလက အင်းဝနေပြည်တော်ကို စိုးမိုးအုပ်ချုပ်သော မင်းကြီးသည် အနောက်တိုင်းမှ ရောက်ရှိလာသော ပုဂ္ဂိုလ်တစ်ဦးအား အကျဉ်းထောင်အတွင်း နှစ်နှစ်တိုင်တိုင် ချုပ်နှောင်ထားခဲ့ရာ၊ ထိုအချိန်မှစ၍ အင်းဝနေပြည်တော်နှင့် အနီးတစ်ဝိုက်တွင် မည်သူမျှ ဖြေရှင်းမရသော ထူးဆန်းထိတ်လန့်ဖွယ် အဖြစ်အပျက်ဆိုးများ ဆက်တိုက် ဖြစ်ပေါ်လာခဲ့လေသည်။

---

နှစ်ပေါင်းများစွာ ကြာပြီးနောက်...

မောင်သုတသည် မိခင်ကြီးကို ရိုသေစွာ လုပ်ကျွေးပြုစုနေသော ရိုးသားသည့် လူငယ်တစ်ဦး ဖြစ်သည်။ သူသည် မွေးကင်းစကတည်းက ထားသွားခဲ့သော ဖခင်ဖြစ်သူ၏ မျက်နှာကို တစ်ခါမျှ မမြင်ဖူးခဲ့သလို မိခင်ဖြစ်သူကလည်း ဖခင်အကြောင်းကို အသေးစိတ် မပြောပြခဲ့ပေ။

တစ်နေ့တွင် မောင်သုတထံသို့ ကောင်းမွန်သပ်ရပ်သော အဝတ်အစားများ ဝတ်ဆင်ထားသည့် အဝေးကလာသော အမျိုးသမီးတစ်ဦး ရောက်ရှိလာခဲ့သည်။

"မင်းက မောင်သုတလား... ငါဟာ မင်းဖခင်ရဲ့ ဆွေမျိုးတစ်ဦး ဖြစ်တယ်။ မင်းဖခင်က မင်းကို အင်းဝနေပြည်တော်မှာ တွေ့ချင်နေတယ်"

မောင်သုတသည် အလွန်တရာ အံ့အားသင့်သွားခဲ့ရသည်။ မိခင်ဖြစ်သူထံမှ ခွင့်တောင်းပြီးနောက် စိုးရိမ်ပူပန်မှုများ၊ သတိပေးစကားများနှင့်အတူ အင်းဝနေပြည်တော်သို့ ထွက်ခွာလာခဲ့ပါတော့သည်။

နေပြည်တော်သို့ ရောက်ရှိချိန်တွင် မည်သည့်နေရာသို့ သွားရမည်၊ မည်သူ့ကို ရှာရမည် မသိဘဲ လမ်းပျောက်နေစဉ် နန်းတော်အနီးမှ အမျိုးသားတစ်ဦးက ကူညီမည်ဟုဆိုကာ အိမ်တစ်အိမ်သို့ ခေါ်ဆောင်သွားခဲ့သည်။ 

ထိုအိမ်အတွင်း၌ နှစ်ပေါင်းများစွာ ဖုံးကွယ်ထားခဲ့သော မိသားစု လျှို့ဝှက်ချက်များ၊ ထောင်သွင်းအကျဉ်းကျခံခဲ့ရသော ပုဂ္ဂိုလ်၏ ပဟေဠိများနှင့် မောင်သုတ၏ ကံကြမ္မာကို လုံးဝ ပြောင်းလဲစေမည့် ထိတ်လန့်ဖွယ် အမှန်တရားများ စောင့်ကြိုနေကြောင်း မည်သူမျှ မသိရှိခဲ့ကြပေ။`,
        fullText_en: `Flames roared violently into the midnight air along the eastern banks of the river, intense enough to melt iron blocks into molten slag. 

Four centuries ago in the year 880 (Myanmar Era), during the reign of ancient Inwa, a foreign figure was imprisoned within the palace dungeons for two full years. Since that fateful captivity, bizarre and inexplicable supernatural occurrences plagued the royal capital—mysteries that remained unanswered for generations.

Centuries later, Maung Thuta, a humble youth dedicated to caring for his mother, lived completely oblivious to his heritage. He had never met his father, knowing only whispers and evasive answers from his mother.

One fateful day, an elegantly dressed emissary arrived with a startling message:
"Are you Maung Thuta? I am a relative of your father. He desires to meet you in the royal capital of Inwa."

Seeking his anxious mother's blessing, Maung Thuta departed for the capital. Lost in the maze of bustling streets, a local guide offered to lead him to a residence near the palace grounds. 

Stepping into that shadowed home, Maung Thuta stood on the precipice of uncovering the terrifying truth, the ancient curse of the foreign prisoner, and the dark lineage that would alter his destiny forever.`
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
        previewText: `အထက်အညာ ကျေးလက်ဒေသရှိ ရွာသူရွာသားများ၏ ရိုးရှင်းဖြူစင်သော ဘဝနေထိုင်မှု၊ ပွဲတော်ရက်များအတွင်း ပျော်ရွှင်ဖွယ် အလွဲများနှင့် ရယ်မောစရာ ဇာတ်လမ်းတိုများကို ဟာသရသမြောက်စွာ စုစည်းတင်ဆက်ထားပါသည်။

တန်ဆောင်မုန်းလ ဘုရားပွဲတော်နှင့် ရွာလုံးကျွတ် ဘောလုံးပွဲကျင်းပရာတွင် ဖြစ်ပေါ်လာသော အငြင်းပွားမှုများကို ရွာ့ဟာသဉာဏ်ကြီးရှင် မောင်အေးက မည်သို့ လိမ္မာပါးနပ်စွာ ဖြေရှင်းပေးခဲ့သည်ကို ဖတ်ရှုရမည့် ရယ်ရွှင်ဖွယ် ဟာသစာအုပ်ကောင်း ဖြစ်ပါသည်။`,
        previewText_en: `A delightful collection of humorous tales reflecting the cheerful, warm-hearted, and simple village life in rural upper Myanmar.

Focusing on the lighthearted misunderstandings and local festivities during the Tazaungmone festival, this book delivers heartwarming laughs and countryside charm through witty village characters.`,
        fullText: `တစ်ခါက အထက်အညာမှာ ရွာတစ်ရွာ ရှိလေသည်။ အဲဒီရွာမှာ နှစ်စဉ်နှစ်တိုင်း တန်ဆောင်မုန်းလ ရောက်လျှင် ရွာဦးဘုရားပွဲတော်ကို စည်ကားသိုက်မြိုက်စွာ ကျင်းပလေ့ရှိကြသည်။ မိုးလေဝသ ကောင်းမွန်ပြီး စီးပွားရေး အဆင်ပြေသည့်နှစ်များတွင် မြို့မှ ဇာတ်အဖွဲ့ကြီးများ ငှားရမ်းကာ ကြီးကျယ်ခမ်းနားစွာ ပွဲခံကြပြီး၊ စီးပွားရေး ကျပ်တည်းသည့်နှစ်များတွင်တော့ အရပ်ဇာတ်လေးများဖြင့်သာ ပြီးစီးအောင် ကျင်းပကြလေ့ရှိသည်။

ယခုနှစ်တွင် မိုးလေဝသ မှန်ကန်သဖြင့် ရပ်ရွာလူကြီးများနှင့် လူငယ်များ စုစည်းကာ တန်ဆောင်မုန်း ဘုရားပွဲတော်အတွက် အစည်းအဝေး ပြုလုပ်ကြသည်။ 

လူငယ်များက ပွဲတော်ရက်တွင် ညဘက်၌ အသံချဲ့စက်များ တပ်ဆင်ကာ ရွာလုံးကျွတ် ဘောလုံးပွဲ ထည့်သွင်းကျင်းပရန် အကြံပြုကြသည်။ သို့သော် ရွာလူကြီးများကမူ - 
"ဒါဟာ ရှေးရိုးစဉ်လာ ရိုးရာဓလေ့ကို ပျက်စီးစေတယ်၊ ဘုရားပွဲမှာ ဘောလုံးပွဲ မထည့်သင့်ဘူး" ဟု ကန့်ကွက်ကြသဖြင့် အစည်းအဝေးတွင် အပြန်အလှန် အငြင်းပွားမှုများ ဖြစ်ပေါ်လာတော့သည်။

ထိုသို့ အငြင်းပွားနေစဉ် ရွာထဲတွင် ဉာဏ်ကောင်းပြီး ဟာသဥာဏ်ရွှင်သူအဖြစ် နာမည်ကြီးသည့် လူငယ် မောင်အေး ရောက်ရှိလာသည်။

"လူကြီးမင်းတို့ ခင်ဗျာ... ကျွန်တော် အကြံတစ်ခုလောက် ပေးပါရစေ"

အားလုံး တိတ်ဆိတ်သွားပြီး မောင်အေးကို ကြည့်ကြသည်။

"ကျွန်တော်တို့ ဘာကြောင့် တစ်ခုတည်းကိုပဲ ရွေးချယ်နေကြမှာလဲ။ ဘုရားပွဲလည်း ကျင်းပမယ်၊ ဘောလုံးပွဲလည်း ထည့်သွင်း ကစားကြမယ်။ နှစ်ခုစလုံးကို ပျော်ပျော်ရွှင်ရွှင် ပေါင်းလုပ်လိုက်ရင် အားလုံး အဆင်ပြေသွားမှာပေါ့"

လူကြီးတစ်ဦးက မျက်မှောင်ကြုတ်ကာ မေးလိုက်သည် -
"ဟဲ့ကောင် မောင်အေး... အဲဒါ ဘယ်လို စီစဉ်မှာလဲ"

မောင်အေးက ပြုံးရွှင်စွာဖြင့် -
"ရိုးရိုးလေးပါ အဘတို့ရာ... မနက်ပိုင်းမှာ ဘုရားဖူးကြမယ်၊ သံဃာတော်တွေကို ဆွမ်းကျွေးပြီး အလှူဒါန ပြုကြမယ်။ နေ့လယ်ပိုင်းမှာတော့ လူငယ်တွေရော ရွာသူရွာသားတွေပါ ဘောလုံးပွဲ အားပေးကြမယ်။ ညနေနဲ့ ညဘက်ကျတော့ ဇာတ်ရုံထဲမှာ အားလုံးစုပြီး အရပ်ဇာတ် ကြည့်ကြမယ်။ ဒါဆိုရင် ကုသိုလ်လည်းရ၊ ပျော်လည်းပျော်ရပြီး အားလုံး စိတ်ချမ်းသာကြတာပေါ့"

လူကြီးများက တစ်ဦးမျက်နှာ တစ်ဦးကြည့်ကာ -
"ဟုတ်ပေသားပဲ... ဒါ အမှန်တကယ် လက်တွေ့ကျတဲ့ အကြံဉာဏ်ပဲ" ဟု သဘောတူညီသွားကြသဖြင့် ဘုရားပွဲနှင့် ဘောလုံးပွဲကို တွဲဖက်ကျင်းပရန် ဆုံးဖြတ်လိုက်ကြသည်။

ပွဲတော်ရက် ရောက်လာသောအခါ ရွာတစ်ရွာလုံး ပျော်ရွှင်သံများဖြင့် ပြည့်နှက်သွားခဲ့သည်။ မနက်ပိုင်းတွင် ဘုရားဖူးဧည့်သည်များနှင့် စည်ကားနေပြီး၊ နေ့လယ်ပိုင်း ဘောလုံးကွင်းထဲတွင်လည်း အကြိတ်အနယ် ကစားကြရင်း တစ်ဂိုးစီဖြင့် သရေကျသွားကြသော်လည်း ကြည့်ရှုသူများမှာ အားရပါးရ အော်ဟစ်အားပေးရင်း အလွန်ပျော်ရွှင်ခဲ့ကြသည်။

ညဘက် အရပ်ဇာတ်ခင်းကျင်း ကပြချိန်တွင်လည်း လူရွှင်တော်များ၏ ဟာသပြကွက်များကြောင့် ပွဲကြည့်ပရိသတ်အားလုံး ပါးစပ်မစိနိုင်အောင် ရယ်မောကြရင်း တစ်ရွာလုံး အေးချမ်းပျော်ရွှင်စွာ ပွဲတော်ကို ပြီးဆုံးစေခဲ့ပါတော့သည်။`,
        fullText_en: `Once upon a time in a tranquil Upper Myanmar village, the annual Tazaungmone festival was approaching. Following a fruitful harvest, the village elders and youths gathered to organize the celebration.

A heated debate erupted when the youths proposed hosting a high-stakes local football tournament alongside the religious festival, which traditional elders opposed as breaking cultural customs.

Hearing the impasse, Maung Aye—the village's beloved jokester and quick-witted youth—stepped forward with a bright solution:

"Why choose only one when we can enjoy both? In the morning, we perform meritorious deeds and offer alms at the pagoda. In the afternoon, the village rallies to cheer at the football grounds. And in the evening, everyone gathers to watch the traditional comedy theater. This way, we gain merit, sport, and laughter together!"

Amused by his practical wisdom, the elders nodded in hearty agreement. When festival day arrived, the morning almsgiving brought serene joy, the tied football match thrilled the spectators, and the evening comedy performances had the entire village laughing until their stomachs ached.`
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
        previewText: `ရုပ်ရှင်ရိုက်ကွင်း နောက်ကွယ်က တကယ့်ဖြစ်ရပ်မှန် အလွဲများနှင့် ဇာတ်ဝင်ခန်းထဲတွင် လေးနက်ဝမ်းနည်းဖွယ် ကောင်းနေသော်လည်း ကင်မရာနောက်ကွယ်တွင်မူ ရယ်စရာ၊ ထူးဆန်းစရာများဖြင့် ပြည့်နှက်နေသည့် ရိုက်ကွင်းဘဝ အတွေ့အကြုံများကို ဟာသရသမြောက်စွာ ရေးဖွဲ့ထားသော စာအုပ်ဖြစ်ပါသည်။

စာရေးဆရာ နီကိုရဲ၏ ပြောင်မြောက်သော ဟာသအရေးအသားများဖြင့် ဒါရိုက်တာ၊ သရုပ်ဆောင်များနှင့် ရိုက်ကူးရေးအဖွဲ့သားတို့၏ မမျှော်လင့်ဘဲ ကြုံတွေ့ရတတ်သည့် ရယ်ရွှင်ဖွယ် အမှတ်တရများကို ဖတ်ရှုခံစားရမည် ဖြစ်ပါသည်။`,
        previewText_en: `A brilliantly witty collection of behind-the-scenes filmmaking misadventures by beloved Myanmar author Niko Ye.

Exploring the sharp, humorous contrast between dramatic on-screen sorrow and the hilarious, chaotic bloopers unfolding behind the camera, this volume captures the unpredictable charm and genuine laughter of film production life.`,
        fullText: `တိတ်ဆိတ်နေတဲ့ ဧည့်ခန်းထဲမှာ မျက်ဝန်းနှစ်စုံ ပြင်းထန်စွာ ဆုံတွေ့ကြတယ်။ မျက်ဝန်းတစ်စုံက ဒေါသနဲ့ နာကျည်းခြင်း၊ နောက်တစ်စုံက အံ့သြခြင်းနဲ့ ထိတ်လန့်ခြင်း။ မျက်ဝန်းနှစ်စုံ တစ်ခုနဲ့တစ်ခု စိုက်ကြည့်နေကြပြီး တိတ်ဆိတ်မှုက အခန်းတွင်း လေထုကို ပိုပြီး လေးလံစေတယ်။

"မင်းကို ငါ သိပ်ချစ်ခဲ့တယ်၊ သိပ်ယုံခဲ့တယ်။ မင်းကို ငါဘာဖြစ်လို့ ချစ်ခဲ့သလဲဆိုတာ ငါ အစွဲအလမ်း ကြီးလွန်းလို့ပါ။ မင်းဟာ ငါ့အတွက် ဖြစ်တည်နေတဲ့သူ မဟုတ်တော့ဘူး..."

ထိုင်နေတဲ့ သရုပ်ဆောင်ရဲ့ မျက်ဝန်းထဲကနေ မျက်ရည်တွေ တသွင်သွင် စီးကျလာတယ်။ နှုတ်ခမ်းတွေ တုန်လှုပ်နေပြီး စကားတစ်ခွန်းမှ မပြောနိုင်တော့ဘူး။ ဒါပေမဲ့ ဒီအဖြစ်အပျက်က တကယ့်ဘဝမှာ မဟုတ်ပါဘူး... ရိုက်ကွင်းပေါ်က အလွန်လေးနက်တဲ့ ဒရာမာ ဇာတ်ဝင်ခန်းတစ်ခုပါပဲ။

"ကတ်... ဖြတ်...!"

ဒါရိုက်တာရဲ့ အသံ ထွက်ပေါ်လာတာနဲ့ မျက်နှာပေါ်က ဝမ်းနည်းမှုတွေ အကုန်လုံး ချက်ချင်း ပျောက်ကွယ်သွားပြီး နှစ်ယောက်သား အားရပါးရ ရယ်မောကြတော့တယ်။

---

ရိုက်ကွင်း၏ နောက်ကွယ်

ရိုက်ကွင်းဆိုတာ အမြဲတမ်း ဒီလိုပါပဲ။ ပရိသတ်ရှေ့ ကင်မရာထဲမှာတော့ အလွန်လေးနက်တဲ့၊ စိတ်လှုပ်ရှားဖွယ် ဇာတ်လမ်းတွေ ဖြစ်ပေမယ့် နောက်ကွယ်မှာတော့ ရယ်စရာ၊ ထူးဆန်းစရာ အကြောင်းအရာတွေ အမြဲ ရှိနေတတ်တယ်။ 

တစ်ခါက ဇာတ်ဝင်ခန်းတစ်ခုမှာ အလွန်အမင်း ဝမ်းနည်းဖွယ်ဇာတ်ကို ရိုက်ကူးနေချိန် မျက်လုံးထဲ ဖုန်ဝင်သွားပြီး မျက်ရည်အစား မျက်လုံးပူလောင်နေတဲ့ ဒဏ်နဲ့ပဲ ဆက်လက် သရုပ်ဆောင်ခဲ့ရတာမျိုးလည်း ရှိခဲ့ဖူးပါတယ်။ ဒါဟာ ရိုက်ကွင်းဘဝရဲ့ မခွဲမခွာနိုင်တဲ့ သဘာဝ အစိတ်အပိုင်းတစ်ခုပါပဲ။

စကားပြောဆိုပုံနှင့် အမူအရာ အလွဲများ

ဇာတ်ထဲမှာ ပြောရတဲ့ စကားတွေဟာ တစ်ခါတစ်ရံ တကယ့် ခံစားချက်တွေနဲ့ ရောထွေးသွားတတ်တယ်။ ဒါပေမဲ့ ဒါရိုက်တာရဲ့ "ဖြတ်" ဆိုတဲ့ အသံကြားတာနဲ့ အားလုံး ပုံမှန် ပြန်ဖြစ်သွားကြတယ်။ 

တစ်ခါက စကားတစ်ခွန်းကို အကြိမ်ကြိမ် အထပ်ထပ် ပြောနေရလွန်းတာကြောင့် နောက်ဆုံးမှာ စကားလုံးတွေ မှားယွင်း ရောထွေးကုန်ပြီး ရိုက်ကွင်းတစ်ခုလုံး အူတက်အောင် ရယ်မောခဲ့ကြရတဲ့ အဖြစ်အပျက်မျိုးတွေလည်း မကြာခဏ ကြုံရတတ်ပါတယ်။

---

အတွေ့အကြုံများနှင့် သင်ခန်းစာများ

ရိုက်ကွင်းမှာ အရာရာတိုင်းဟာ ကြိုတင် စီစဉ်ထားတဲ့အတိုင်း အမြဲ အဆင်မပြေတတ်ပါဘူး။ မိုးရွာချင် ရွာမယ်၊ စကားလုံး မှားချင် မှားမယ်၊ အိုက်တင် မှားချင် မှားမယ်။ ဒါပေမဲ့ ဒီအမှားတွေနဲ့ အလွဲတွေကပဲ နောင်တစ်ချိန်မှာ ပြန်တွေးပြီး ရယ်မောပျော်ရွှင်စရာ အမှတ်တရကောင်းတွေ ဖြစ်လာခဲ့တာပါ။ 

ရုပ်ရှင်ထဲက ဒရာမာဇာတ်ကွက်တွေနဲ့ ရိုက်ကွင်းနောက်ကွယ်က ရယ်မောစရာ အလွဲတွေကြားက ခြားနားချက်ဟာ ရုပ်ရှင်လောကသားတွေရဲ့ နေ့စဉ်ဖြတ်သန်းနေရတဲ့ စစ်မှန်တဲ့ ဘဝပုံရိပ်တစ်ခုပင် ဖြစ်ပါတော့သည်။`,
        fullText_en: `Heavy silence filled the living room as two pairs of eyes locked in an intense emotional stare-down—one filled with burning betrayal, the other with stunned disbelief.

"I loved you and trusted you completely. But you are no longer the person I once held dear..."

Tears streamed down the actor's cheeks, lip trembling in profound sorrow. But this heartbreaking tension wasn't real life—it was merely a pivotal drama take.

"Cut... Excellent!" yelled the director.

Instantly, the tragic masks dissolved into uncontrollable bursts of laughter.

Behind the Scenes:
That is the quintessential reality of movie sets. While audiences witness gripping drama on screen, the production behind the lens is often an unpredictable comedy of errors. 

From dust blowing into an actor's eye mid-scene mimicking tragic tears, to tongue-tied dialogue flubs during repetitive takes, the unpredictable bloopers and resilient humor form the vibrant heartbeat of filmmaking life.`
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
        previewText: `မင်းထက် ကြည့်ကောင်းတဲ့သူ ရှိနိုင်ပေမယ့် ငါက မင်းကိုပဲ ရွေးချယ်ခဲ့ပါတယ်။ မင်းထက် ပြည့်စုံတဲ့သူ ရှိနိုင်ပေမယ့် ငါ့အတွက်တော့ မင်းက ပြီးပြည့်စုံဆုံးပါပဲ။ 

ဟိုးအဝေးကနေ မင်းကို စောင့်မျှော်နေရတဲ့ အချိန်တွေဟာ ပျော်ရွှင်စရာတွေချည်းပါပဲ။ မှိုင်းညို့နေတဲ့ နေ့ရက်တွေမှာတောင် မင်းဟာ ငါ့အတွက် နေ့သစ်တစ်ခု ဖြစ်ခဲ့တယ်။ 

နူးညံ့သိမ်မွေ့သော အချစ်၊ အဝါရောင် နေကြာပန်းလေးများ၏ အဓိပ္ပာယ်နှင့် အေးချမ်းလှပသော ဘဝရှင်သန်မှု ခံစားချက်တို့ကို ရသမြောက်စွာ ဖွဲ့နွဲ့ထားသော အချစ်ဝတ္ထုတို စာအုပ်ကောင်းလေး ဖြစ်ပါသည်။`,
        previewText_en: `A tender and poetic romance exploring unconditional affection, quiet devotion, and the comforting warmth of finding someone who illuminates your darkest days like a sunflower turning toward the sun.

Through lyrical prose and heartfelt chapters, "Yellow Sunflower Heart" captures the bittersweet beauty of loving, letting go, and finding inner peace.`,
        fullText: `မင်းထက် ကြည့်ကောင်းတဲ့သူ ရှိနိုင်ပေမယ့် ငါက မင်းကိုပဲ ရွေးချယ်ခဲ့ပါတယ်။ မင်းထက် ပြည့်စုံတဲ့သူ ရှိနိုင်ပေမယ့် ငါ့အတွက်တော့ မင်းက ပြီးပြည့်စုံဆုံးပါပဲ။ ငါ့အတွက် မင်းဟာ ပြီးပြည့်စုံတဲ့ အရာတစ်ခုလို ဖြစ်နေပြီး အရာရာတိုင်းထက် မင်းကိုပဲ မြတ်နိုးနေရတာ နောင်တမရှိခဲ့ပါဘူး။

ဟိုးအဝေးကနေ မင်းကို စောင့်မျှော်နေရတဲ့ ငယ်ရွယ်ချိန်တွေဟာ ပျော်ရွှင်စရာတွေချည်းပါပဲ။ မှိုင်းညို့နေတဲ့ နေ့ရက်တွေမှာတောင် မင်းက နေ့သစ်တစ်ခု ဖြစ်ခဲ့တယ်။ မင်းဟာ နေ့ရောညပါ အမြဲတည်ရှိနေတဲ့ ငါ့ရဲ့ ပျော်ရွှင်ခြင်းလေးပါ။

---

အခန်း (၁) — စိတ်ထဲရှိ အနာဂတ်

စိတ်ထဲမှာ ပူပန်မှုတွေ များလာတဲ့အခါ ဒီအချက်လေးတွေကို သုံးပြီး စိတ်ကို အေးချမ်းအောင် လုပ်ကြည့်ပါ -
၁။ ကိုယ့်ရဲ့ အရည်အချင်းကို အကောင်းမြင်ပါ၊ ကိုယ့်ကိုယ်ကိုယ် ချီးကျူးပါ။ "ငါ ဒီနေ့လေးမှာ တော်တာပဲ၊ ငါ အဆင်ပြေအောင် ကြိုးစားနိုင်ခဲ့တယ်" စသဖြင့် ကိုယ့်ရဲ့ အားသာချက်တွေကို ရှာဖွေပါ။
၂။ ပန်းလေးတွေ ငေးမောပါ၊ သီချင်းကောင်းလေးတွေ နားထောင်ပါ၊ စိတ်ခွန်အားပေးတဲ့ ဟောပြောချက်တွေကို ကြည့်ရှုပါ။
၃။ မပြီးဆုံးနိုင်သော သောကများနှင့် အတွေးလွန်မနေပါနဲ့။ ညဘက်တွင် အိပ်ရေးဝဝ အိပ်စက်အနားယူပြီးမှ ခေါင်းအေးအေးဖြင့် ပြဿနာများကို စဉ်းစားဖြေရှင်းပါ။

---

အခန်း (၂) — ပန်းတစ်ပွင့်စီ၏ မေတ္တာ

ပန်းတစ်ပွင့်စီ ပွင့်လန်းလာတာကို ကြည့်ရင်း နှစ်သိမ့်မှုတွေ ရရှိခဲ့ပြီး ငါဟာလည်း ဒီလူသားလေးအတွက် အားပေးဖေးမသူ သူငယ်ချင်းတစ်ယောက်အဖြစ် အမြဲ ရှိနေပေးခဲ့ပါတယ်။ မျက်ဝန်းညိုလေးက စိုက်ကြည့်လာတဲ့အခါ ရင်ထဲမှာ အင်အားတွေ အဆမတန် တိုးပွားလာခဲ့ရပါတယ်။

---

အခန်း (၃) — နေ့သစ်တစ်ခုနှင့် နေဝန်းငယ်

Coreopsis ပန်းဝါလေးတစ်ပွင့်ကို ယူပြီး ဒီလူသားလေးအတွက် ရည်ရွယ်ကာ လက်ထဲမှာ ပိုင်ဆိုင်လိုစိတ် ကင်းစင်စွာဖြင့် ချည်နှောင်ထားလိုက်သည်။ 
ပန်းဝါလေးက ဆိုတယ် - "မင်းကို အမြဲ အားပေးနေပါမယ်... အမြဲ ပျော်ရွှင်ပါစေ။"

နေကြာပန်းလေးတွေဟာ နေရာတိုင်းမှာ အဝါရောင် နွေးထွေးမှုတွေကို ဖြန့်ကျက်ပေးနေသလိုပဲ၊ မင်း ပြုံးလိုက်တဲ့ အခါတိုင်းမှာလည်း ဒီကမ္ဘာကြီးဟာ သေချာပေါက် ပိုမိုလှပပြီး ပျော်ရွှင်စရာ ကောင်းနေပါတော့သည်။`,
        fullText_en: `Even if there were others far more handsome or complete, I chose you. In my eyes, you were perfection itself, and loving you unconditionally has never brought a moment of regret.

Even on gloomy, overcast days, your presence shone like a brand new morning—a constant source of serene joy.

Chapter 1 – Calming the Mind
When anxiety about the future builds up:
1. Acknowledge your worth: Celebrate small daily victories and recognize your strengths.
2. Savor simple joys: Listen to uplifting melodies, admire blooms, and seek positive inspirations.
3. Rest deeply: Prioritize restorative sleep over late-night overthinking before tackling tomorrow's challenges.

Chapter 2 & 3 – The Yellow Bloom
Holding a bright Coreopsis bloom dedicated to you, unbound by possessiveness:
"I will always cheer for you... may you always be genuinely happy."

Like sunflowers radiating vivid warmth across the landscape, whenever you look back and smile, the world becomes an undeniably brighter and warmer place.`
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
        previewText: `ဝင်လာခဲ့ပါ သူငယ်ချင်း၊ မင်းရဲ့ဂုဏ်တွေနဲ့ ပကာသနတွေကို တံခါးဝမှာ ထားခဲ့လိုက်ပါ။ ငါနေတဲ့နေရာမှာ ဂုဏ်ဒြပ်တွေ မလိုပါဘူး။

စိတ်နှလုံး အေးချမ်းခြင်းဆိုတာ စိတ်ရဲ့ သန့်ရှင်းစင်ကြယ်ခြင်းက စတင်ပါတယ်။ ဥစ္စာပစ္စည်း၊ ရာထူးအဆင့်အတန်းနဲ့ လူတွေရဲ့ အထင်အမြင်တွေကို ခဏမေ့ထားပြီး တိတ်ဆိတ်ခြင်း၊ ပန်းချီကားတစ်ချပ်လို သာယာတဲ့ မနက်ခင်းနဲ့ သစ်ရွက်တွေကြားက နေခြည်နွေးနွေးလေးတွေနဲ့အတူ စိတ်နှလုံးကို အေးချမ်းစေမည့် ကဗျာရသ စာအုပ်ကောင်းလေး ဖြစ်ပါသည်။`,
        previewText_en: `Step inside, leave prestige and superficial pretenses at the door. Inner peace begins with the purity and simplicity of the mind.

"Stillness" is a reflective poetic collection celebrating quiet mornings, the rustic beauty of nature, gentle solitude, and finding contentment beyond status or competition.`,
        fullText: `Stillness ၁
ဝင်လာခဲ့ပါ သူငယ်ချင်း၊
မင်းရဲ့ ဂုဏ်တွေကို တံခါးမှာ ထားခဲ့လိုက်ပါ။
ငါနေတဲ့နေရာမှာ ဂုဏ်တွေ မလိုပါဘူး။

ဝင်လာခဲ့ပါ သူငယ်ချင်း၊
မင်းရဲ့ ပကာသနတွေ အပြင်ဘက်မှာ ထားခဲ့လိုက်ပါ။
ငါနေတဲ့နေရာမှာ ပကာသနတွေ မလိုပါဘူး။

စိတ်နှလုံး အေးချမ်းခြင်းဆိုတာ စိတ်ရဲ့ သန့်ရှင်းခြင်းက အစပြုပါတယ်။
ဒီနေရာမှာ ဥစ္စာပစ္စည်းတွေအကြောင်း မပြောဘူး၊
ရာထူး အဆင့်အတန်းတွေအကြောင်း မပြောဘူး၊
လူတွေရဲ့ အထင်အမြင်တွေအကြောင်း မပြောပါဘူး။

တိတ်ဆိတ်ခြင်းကို အဖော်လုပ်တဲ့ ငါ့အဖို့
ပန်းချီကားတစ်ချပ်နဲ့တူတဲ့ မနက်ခင်းလေးရယ်၊
သစ်ရွက်တွေကြားက ထိုးကျလာတဲ့ နေခြည်နွေးနွေးလေးရယ်...
ဒီလို အရာတွေကသာ စိတ်ကို အမှန်တကယ် ငြိမ်းချမ်းစေပါတယ်။

---

Stillness ၂
ရိုးရှင်းတဲ့ စိတ်ထားသာ ရှိမယ်ဆိုရင်
လမ်းတစ်လျှောက် ကြွေကျနေတဲ့ သစ်ရွက်ခြောက်လေးတွေကအစ လှပနေတတ်ပါတယ်။

ငြိမ်သက်ခြင်းထဲမှာ လောကကို အဆန်းတကြယ် ပြသစရာ ဘာမှမရှိပေမယ့်
အဲဒီ တိတ်ဆိတ်ငြိမ်သက်ခြင်းထဲမှာ စစ်မှန်တဲ့ ပြည့်စုံခြင်း ရှိပါတယ်။
လူတွေမြင်အောင် ထုတ်ပြလို့မရတဲ့ အရာတွေထဲမှာပဲ
တကယ့် ပြည့်စုံမှုအစစ်အမှန် တည်ရှိနေတာပါ။

---

Stillness ၃ & ၄
မနက်စောစောထပြီး မိုးရေစိုစွတ်နေတဲ့ ခြံထဲမှာ လန်းဆန်းနေတဲ့ သစ်ပင်လေးတွေကို ကြည့်ရင်း ပျော်ရွှင်ရတယ်။
လေအေးလေးတွေ တိုက်ခတ်လာတဲ့ ဆောင်းမနက်ခင်းမှာ
စာအုပ်လေးတစ်အုပ် ဖတ်ရင်း သဘာဝရဲ့ တေးသံတွေကို နားထောင်ရတာ စိတ်ကို အနားရစေပါတယ်။

---

Stillness ၅
ကိုယ့်ဘဝမှာ အမှန်တကယ် လိုချင်တာက လွတ်လပ်မှုနဲ့ စိတ်ငြိမ်းချမ်းမှုသာ ဖြစ်မယ်ဆိုရင်
ဒီကမ္ဘာပေါ်မှာ ဘယ်သူနဲ့မှ ပြိုင်ဆိုင်နေစရာ မလိုပါဘူး။
သူတစ်ပါး ငြိမ်းချမ်းနေတာကို တွေ့ရတဲ့အခါ လေးစားချစ်ခင်တဲ့ စိတ်နဲ့ ဝမ်းသာပေးနိုင်မယ်ဆိုရင်
ကိုယ့်ရဲ့ အတွင်းစိတ်ပါ လိုက်ပါ အေးချမ်းသွားပါလိမ့်မည်။

---

Stillness ၆ & ၇
ညဘက် လမ်းလျှောက်တဲ့အခါ ပြည့်တော့မယ့် လမင်းကြီးက အဖော်လုပ်ပေးတယ်။
ဒီလောက် ထပ်ပြန်တလဲလဲ ကျော့နေတဲ့ မွေးဖွားခြင်း၊ သေဆုံးခြင်းတွေကြားထဲမှာ၊
ရေပွက်ပမာ ခဏတာမျှသာ ရှင်သန်ရတဲ့ တစ်ဘဝအတွင်းမှာ
တိတ်ဆိတ်ခြင်း၊ ရိုးရှင်းခြင်းတို့ဖြင့် ငြိမ်းချမ်းစွာ အတူရှိနေနိုင်ကြခြင်းသည်ပင် အံ့သြဖွယ် ကောင်းလှပေသည်။`,
        fullText_en: `Stillness 1
Welcome, friend. Leave your titles and pretenses at the door; they have no place here.
Inner peace begins with the simplicity and purity of the heart.
Here, we speak neither of wealth, nor social status, nor the fleeting opinions of others.
The quiet morning resembling a canvas and the gentle sunlight filtering through the leaves are all that is needed to heal the soul.

---

Stillness 2
With a simple mind, even the fallen dry leaves along the path hold effortless beauty.
Within stillness, there is nothing flashy to prove to the outside world, yet it holds true completeness.
Genuine fulfillment resides in what cannot be outwardly exhibited.

---

Stillness 5
If what we seek is true freedom and tranquility, there is no need to compete with anyone.
When we observe others finding peace and celebrate it with genuine warmth and respect, our own hearts grow infinitely more serene.

---

Stillness 6 & 7
Under the soothing glow of the moon, amidst the transient cycles of birth and passing, finding quiet presence and living mindfully in this brief life is the greatest wonder of all.`
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
        previewText: `ချစ်ခြင်းမေတ္တာလို့ ခေါင်းစဉ်တပ်ရတဲ့ ကဗျာတိုင်း မင်းအကြောင်းနဲ့ပဲ ဖြစ်ပါစေ။ ချစ်တယ်ဆိုတဲ့ စကားကို တစ်ဘဝလုံးစာ မင်းတစ်ယောက်တည်းကိုပဲ ပြောခွင့်ရပါစေ။

အချစ်သီချင်းတွေ ညည်းတိုင်း မင်းကိုတွေးရင်း နှလုံးသားတစ်စုံ မြူးထူးစွာ ကခုန်ပါစေ။ တွဲလက်တွေ မြဲပါစေ... အလွမ်းတွေ ဝေးပါစေ...။ 

နူးညံ့သိမ်မွေ့သော စကားလုံးများ၊ စစ်မှန်သော ချစ်ခြင်းမေတ္တာနှင့် ကတိစကားများဖြင့် ဖွဲ့နွဲ့ထားသော အချစ်ကဗျာနှင့် စကားပြေ ရသစာအုပ်ကောင်းလေး ဖြစ်ပါသည်။`,
        previewText_en: `May every poem titled "Love" be about you, and may "I love you" be a lifelong promise spoken only to you. 

"Sunset Into the Deepest Love" is an intimate, poetic collection exploring unconditional affection, quiet devotion, healing past heartbreaks, and embracing profound romance.`,
        fullText: `ချစ်ခြင်းကဗျာ....
ချစ်ခြင်းမေတ္တာလို့ ခေါင်းစဉ်တပ်ရတဲ့ ကဗျာတိုင်း
မင်းအကြောင်းနဲ့ပဲ ဖြစ်ပါစေ။
ချစ်တယ်ဆိုတဲ့ စကားကို တစ်ဘဝလုံးစာ
မင်းတစ်ယောက်တည်းကိုပဲ ပြောခွင့်ရပါစေ။
အချစ်သီချင်းတွေ ညည်းတိုင်း
မင်းကိုတွေးရင်း နှလုံးသားတစ်စုံ မြူးထူးစွာ ကခုန်ပါစေ။
တွဲလက်တွေ မြဲပါစေ...
အလွမ်းသီချင်းတွေနဲ့ ဝေးပါစေ...
မင်းအတွက် ရေးတဲ့ကဗျာမို့ ချစ်ရခြင်းနဲ့ ကာရံညီပါတယ်။

---

ချစ်တယ်......
ယုံကြည်မှုတွေကို ကတိတွေနဲ့ မတည်ဆောက်ဘဲ
နွေးထွေးမှုတွေနဲ့ တည်ဆောက်ကြမယ်။
သစ္စာဆိုပြီး ချည်နှောင်မနေဘဲ ချစ်တဲ့စိတ်သက်သက်နဲ့ပဲ ချစ်မယ်။
ငါတို့သည် တစ်ယောက်အတွက် တစ်ယောက် ဖြစ်တည်ခြင်း ဖြစ်ပါစေ။
နေမင်းဖြစ်ရင်တောင် မျက်နှာလိုက်စွာနဲ့
မင်းတစ်ယောက်တည်းကိုပဲ အလင်းကွက်ပေးမယ်...
လမင်းဖြစ်ရင်လည်း မင်းရဲ့ကောင်းကင်မှာပဲ ရွှန်းရွှန်းသာပါ့မယ်။
ဘယ်အချိန်ထိ ချစ်မလဲ မေးရင် မနက်ဖြန်တွေ ရှိနေသရွေ့ပေါ့။

---

Apple...
မနက်ဖြန်တိုင်းဟာ မသေချာပေမဲ့ ဒီနေ့တိုင်းမှာတော့
အတတ်နိုင်ဆုံးထက် ပိုသာသော ချစ်ခြင်းနဲ့ ချစ်ပြီး
၅၂၈ မေတ္တာထက် ပိုမိုနက်ရှိုင်းတဲ့ မေတ္တာတွေနဲ့ နွေးထွေးပါ့မယ်။
နှလုံးသားနဲ့ ရေးတဲ့စာမို့ နှလုံးသားနဲ့ ဖတ်မှ ပိုလေးနက်ပါလိမ့်မယ်။
အချစ်ဆိုတာ တစ်ဖက်က လက်မခံချင်ရင်တောင်
နှလုံးသားထဲက ရှိရင်းစွဲမေတ္တာက လျော့မသွားတတ်တဲ့ ကမ္ဘာပေါ်က အဖြူစင်ဆုံး အရာမို့
ကိုယ်ကတော့ ချစ်နေရရင် ပြီးရောဆိုတဲ့သူပါ။

---

Be my Valentine...
ဖေဖော်ဝါရီ ၁၄ ရက်မှ ချစ်သူများနေ့ မဟုတ်ပါဘူး၊
ချစ်ရသူအတွက်တော့ နေ့ရက်တိုင်းဟာ ချစ်သူများနေ့ပါပဲ။
အရင်က ဒဏ်ရာတွေ ရှိခဲ့ရင်လည်း ကိုယ် ဖေးမထွေးပွေ့ပါ့မယ်။
မနက်စာ စားဖို့ သတိပေးမယ်၊ ညဘက်တွေ စောစောအိပ်ဖို့ သတိပေးမယ်၊
ပိတ်ရက်တိုင်း အတူတူရှိပေးပြီး သာယာတဲ့ ဘဝခရီးကို အတူတူ ဖြတ်သန်းကြမယ်။

အချစ်မှာ အကြောင်းပြချက်တွေ မရှိပါဘူး။
မင်းအတွက်၊ မင်းနဲ့အတူဆိုတာတွေပဲ ရှိပါတယ်။
အချစ်တွေဟာ ရိုးရှင်းပါတယ်... စစ်မှန်နေရင်ပေါ့။`,
        fullText_en: `Poem of Love:
May every verse titled "Love" sing your name,
May the confession of devotion belong solely to you for a lifetime.
May our joined hands remain unshaken, and distant longings fade away.

To Love:
Let us build trust not on fragile promises, but on authentic warmth.
If I were the sun, I would shine exclusively on your path;
If I were the moon, I would illuminate only your night sky.
How long will I love you? For as long as there is a tomorrow.

Unconditional Heart:
Love written from the soul can only be understood through the soul.
Even without certainty of tomorrow, today will overflow with profound care.
Love demands no calculations; it simply exists in being there with you, for you.`
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
        previewText: `ဆောင်းရာသီ၏ အေးစက်သော နေ့ရက်များကြားတွင် ဖြတ်သန်းရသည့် နွေးထွေးသော အမှတ်တရများနှင့် လူတစ်ယောက်၏ တိတ်တဆိတ် စောင့်ရှောက်ပေးမှုတို့ကို ရေးဖွဲ့ထားသော ဝတ္ထုတို ဖြစ်ပါသည်။`,
        previewText_en: `A heartwarming story about gentle devotion and cherished memories that keep us warm through the coldest winters.`,
        fullText: `နွေးထွေးသော နေ့ရက်များ

ဆောင်းလေအေးတွေ တိုက်ခတ်နေတဲ့ မနက်ခင်းတစ်ခုမှာ ပြတင်းပေါက်ကနေ အပြင်ဘက်ကို ငေးကြည့်နေမိတယ်။ လမ်းမပေါ်မှာ နှင်းတွေဝေနေပေမယ့် အခန်းတွင်းမှာတော့ ကော်ဖီနွေးနွေးတစ်ခွက်နဲ့အတူ စိတ်နှလုံးဟာ အေးချမ်းနေခဲ့ပါတယ်။

ဘဝဆိုတာ အမြဲတမ်း ပူလောင်နေဖို့ မလိုပါဘူး။ ကိုယ့်ကို နားလည်ပေးမယ့် လူတစ်ယောက်၊ ကိုယ်ချစ်ရတဲ့ အလုပ်တစ်ခုနဲ့ စိတ်အေးချမ်းမှုသာ ရှိမယ်ဆိုရင် နေ့ရက်တိုင်းဟာ အဓိပ္ပာယ်ရှိတဲ့ နွေးထွေးသော နေ့ရက်များ ဖြစ်နေပါတော့မည်။`,
        fullText_en: `Warm Days

Looking out the window on a chilly winter morning, the cold mist blankets the street. Yet with a hot cup of coffee and inner stillness, everything feels profoundly peaceful.

Life doesn't always need to be rushed. With someone who understands you and simple moments of tranquility, every single day becomes genuinely warm and beautiful.`
    }
];

// KBZPay ချိတ်ဆက်ထားသော နမူနာ အကောင့်များ
const validKPayAccounts = [
    "09123456789",
    "09987654321",
    "09790000001",
    "09450000001",
    "09250000001",
    "09777888999"
];

let cart = JSON.parse(localStorage.getItem("cart_items")) || [];
let currentLang = localStorage.getItem("lang") || "my";
let currentReaderBookId = null;
let readerLang = "my";
let currentUser = JSON.parse(localStorage.getItem("current_user")) || null;

// စတင်ချိန် Setup
document.addEventListener("DOMContentLoaded", () => {
    renderAllShelves();
    updateCartBadge();
    updateAuthUI();
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-theme");
    }
});

// ==========================================
// Authentication (Login / Register / Logout)
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
        return alert("ဤ Username ဖြင့် အကောင့်ဖွင့်ပြီးသား ဖြစ်နေပါသည်။ အခြားအမည် ရွေးချယ်ပေးပါ။");
    }

    const newUser = { username, password };
    users.push(newUser);
    localStorage.setItem("bookstore_users", JSON.stringify(users));

    alert("အကောင့်ဖွင့်ခြင်း အောင်မြင်ပါသည်။ Login ဝင်ရောက်နိုင်ပါပြီ။");
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
        alert(`မင်္ဂလာပါ ${currentUser.username}၊ Login အောင်မြင်ပါသည်။`);
        renderAllShelves();
    } else {
        alert("Username သို့မဟုတ် Password မှားယွင်းနေပါသည်။");
    }
}

function handleLogout() {
    currentUser = null;
    localStorage.removeItem("current_user");
    updateAuthUI();
    renderAllShelves();
    alert("Logout လုပ်ဆောင်ပြီးပါပြီ။");
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
        authNav.innerHTML = `<button class="nav-btn auth-btn" onclick="openAuthModal()">👤 Login</button>`;
    }
}

// User-Specific Book Unlock Key Helper
function getUserUnlockKey(bookId) {
    const userPrefix = currentUser ? currentUser.username : "guest";
    return `book_unlocked_${userPrefix}_${bookId}`;
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
    return `
        <div class="book-card">
            <img src="${book.cover}" alt="${book.title}" class="book-cover" onerror="this.src='https://via.placeholder.com/120x175?text=No+Cover'">
            <h3 class="book-title">${currentLang === 'my' ? book.title : book.title_en}</h3>
            <p class="book-author">${currentLang === 'my' ? book.author : book.author_en}</p>
            <p class="book-price">${book.price.toLocaleString()} ကျပ်</p>
            <div class="card-actions">
                <button class="read-btn" onclick="openReader(${book.id})">📖 ${currentLang === 'my' ? 'အစမ်းဖတ်' : 'Read'}</button>
                <button class="add-cart-btn" onclick="addToCart(${book.id})">🛒 ${currentLang === 'my' ? 'ဝယ်မည်' : 'Add Cart'}</button>
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
        `<p style="padding:10px;">စာအုပ် ရှာမတွေ့ပါ။</p>`;
}

// ==========================================
// KPay Phone Verification Helper
// ==========================================
function verifyKPayAccount(rawPhone) {
    let phone = rawPhone.trim().replace(/[\s\-]/g, "");

    if (phone.startsWith("+959")) {
        phone = "09" + phone.substring(4);
    } else if (phone.startsWith("959")) {
        phone = "09" + phone.substring(3);
    }

    const mmPhoneRegex = /^09[2-9][0-9]{6,8}$/;

    if (!mmPhoneRegex.test(phone)) {
        return {
            isValid: false,
            message: "ဖုန်းနံပါတ် ပုံစံမမှန်ကန်ပါ။ တရားဝင် မြန်မာဖုန်းနံပါတ် (09xxxxxxxxx) ကိုသာ ရိုက်ထည့်ပေးပါ။"
        };
    }

    if (!validKPayAccounts.includes(phone)) {
        return {
            isValid: false,
            message: `ဝယ်ယူမှု မအောင်မြင်ပါ။ ဖုန်းနံပါတ် (${phone}) သည် KBZPay နှင့် ချိတ်ဆက်ထားခြင်း မရှိပါ။\n\n(စမ်းသပ်ရန် Demo KPay နံပါတ်: 09123456789, 09987654321, 09790000001)`
        };
    }

    return {
        isValid: true,
        formattedPhone: phone
    };
}

// ==========================================
// E-Reader Logic (Preview + Bilingual + Unlock)
// ==========================================
function openReader(bookId) {
    currentReaderBookId = bookId;
    readerLang = currentLang;
    renderReaderContent();
    document.getElementById("reader-modal").style.display = "block";
}

function renderReaderContent() {
    const book = booksData.find(b => b.id === currentReaderBookId);
    const container = document.getElementById("reader-container");
    const isUnlocked = localStorage.getItem(getUserUnlockKey(book.id)) === "true";

    const title = readerLang === 'my' ? book.title : book.title_en;
    const author = readerLang === 'my' ? book.author : book.author_en;
    const preview = readerLang === 'my' ? book.previewText : book.previewText_en;
    const full = readerLang === 'my' ? book.fullText : book.fullText_en;

    const langToggleBtn = `
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 12px;">
            <button onclick="toggleReaderLang()" class="nav-btn" style="padding: 4px 10px; font-size: 0.8rem;">
                🌐 ${readerLang === 'my' ? 'မြန်မာ ➔ English သို့ပြောင်းရန်' : 'English ➔ မြန်မာ သို့ပြောင်းရန်'}
            </button>
            ${isUnlocked ? '<span class="badge-unlocked">✓ Full Access Unlocked</span>' : ''}
        </div>
    `;

    if (isUnlocked) {
        container.innerHTML = `
            ${langToggleBtn}
            <h2>${title}</h2>
            <p class="book-author">${readerLang === 'my' ? 'ရေးသားသူ' : 'Author'} - ${author}</p>
            <hr class="divider">
            <div style="line-height:1.8; white-space:pre-line;">${full}</div>
        `;
    } else {
        container.innerHTML = `
            ${langToggleBtn}
            <h2>${title} <small style="color:#888; font-size:0.85rem;">(${readerLang === 'my' ? 'အစမ်းဖတ်ရှုခြင်း' : 'Preview'})</small></h2>
            <p class="book-author">${readerLang === 'my' ? 'ရေးသားသူ' : 'Author'} - ${author}</p>
            <hr class="divider">
            <div style="line-height:1.8; white-space:pre-line;">${preview}</div>
            <div class="lock-box">
                <p>🔒 ${readerLang === 'my' ? `ဆက်လက်ဖတ်ရှုရန် KBZPay ဖြင့် <strong>${book.price.toLocaleString()} ကျပ်</strong> ပေးချေပါ` : `Pay <strong>${book.price.toLocaleString()} MMK</strong> via KBZPay to unlock full book`}</p>
                <input type="text" id="kpay-phone" placeholder="KBZPay ဖုန်းနံပါတ် (09xxxxxxxxx)" class="form-input" style="max-width:280px;">
                <br>
                <button class="submit-btn" style="max-width:280px; background-color: var(--kpay-color);" onclick="processKPayUnlock(${book.id})">
                    ${readerLang === 'my' ? 'KPay ဖြင့် အတည်ပြုဝယ်ယူမည်' : 'Unlock via KBZPay'}
                </button>
            </div>
        `;
    }
}

function toggleReaderLang() {
    readerLang = readerLang === "my" ? "en" : "my";
    renderReaderContent();
}

function processKPayUnlock(bookId) {
    const rawPhone = document.getElementById("kpay-phone").value;
    const verification = verifyKPayAccount(rawPhone);

    if (verification.isValid) {
        localStorage.setItem(getUserUnlockKey(bookId), "true");
        alert(readerLang === 'my' ? `KBZPay (${verification.formattedPhone}) ဖြင့် ငွေပေးချေမှု အောင်မြင်ပါသည်။ စာအုပ်အပြည့်အစုံကို ဆက်လက်ဖတ်ရှုနိုင်ပါပြီ။` : `Payment successful with KBZPay (${verification.formattedPhone})! Full book unlocked.`);
        renderReaderContent();
    } else {
        alert(verification.message);
    }
}

// ==========================================
// Shopping Cart & Checkout
// ==========================================
function addToCart(bookId) {
    const book = booksData.find(b => b.id === bookId);
    const existing = cart.find(item => item.id === bookId);
    if (existing) {
        existing.qty += 1;
    } else {
        cart.push({ ...book, qty: 1 });
    }
    saveCart();
    alert(`"${currentLang === 'my' ? book.title : book.title_en}" Cart ထဲ ထည့်ပြီးပါပြီ။`);
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
    list.innerHTML = cart.length === 0 ? "<p>Cart ထဲတွင် ပစ္စည်းမရှိသေးပါ။</p>" : cart.map((item, index) => {
        total += item.price * item.qty;
        return `
            <div class="cart-item-row">
                <div>
                    <strong>${currentLang === 'my' ? item.title : item.title_en}</strong>
                    <div style="font-size:0.8rem; color:#888;">${item.price.toLocaleString()} ကျပ်</div>
                </div>
                <div class="cart-item-qty">
                    <button onclick="changeQty(${index}, -1)">-</button>
                    <span> ${item.qty} </span>
                    <button onclick="changeQty(${index}, 1)">+</button>
                </div>
            </div>
        `;
    }).join('');
    document.getElementById("cart-total-price").innerText = total.toLocaleString();
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
    if (cart.length === 0) return alert("Cart ထဲတွင် ပစ္စည်းမရှိပါ။");

    const rawPhone = document.getElementById("cust-phone").value;
    const verification = verifyKPayAccount(rawPhone);

    if (!verification.isValid) {
        return alert(verification.message);
    }

    const order = {
        id: Date.now(),
        user: currentUser ? currentUser.username : "Guest",
        phone: verification.formattedPhone,
        items: [...cart],
        total: cart.reduce((sum, i) => sum + (i.price * i.qty), 0),
        date: new Date().toLocaleString()
    };

    const orders = JSON.parse(localStorage.getItem("admin_orders")) || [];
    orders.push(order);
    localStorage.setItem("admin_orders", JSON.stringify(orders));

    // Cart ဝယ်ယူမှုအောင်မြင်ပါက အကောင့်အလိုက် စာအုပ်များ Unlock ပြုလုပ်ခြင်း
    cart.forEach(item => {
        localStorage.setItem(getUserUnlockKey(item.id), "true");
    });

    cart = [];
    saveCart();
    closeModal('cart-modal');
    alert(`KBZPay (${verification.formattedPhone}) ဖြင့် ငွေပေးချေမှု အောင်မြင်ပါသည်။ စာအုပ်များအားလုံး ဖတ်ရှုနိုင်ပါပြီ။`);
}

// ==========================================
// Admin Orders Dashboard
// ==========================================
function openAdmin() {
    const orders = JSON.parse(localStorage.getItem("admin_orders")) || [];
    const list = document.getElementById("admin-orders-list");
    list.innerHTML = orders.length === 0 ? "<p>လက်ရှိတွင် အော်ဒါမှတ်တမ်း မရှိသေးပါ။</p>" : orders.map(o => `
        <div style="border:1px solid var(--border-color); padding:10px; margin-bottom:10px; border-radius:6px;">
            <p><strong>Order ID:</strong> ${o.id}</p>
            <p><strong>Customer:</strong> ${o.user} (${o.phone})</p>
            <p><strong>Total Amount:</strong> ${o.total.toLocaleString()} ကျပ်</p>
            <p><strong>Date:</strong> ${o.date}</p>
            <p><strong>Items:</strong> ${o.items.map(i => `${i.title} (x${i.qty})`).join(', ')}</p>
        </div>
    `).join('');
    document.getElementById("admin-modal").style.display = "block";
}

// Controls
function closeModal(id) {
    document.getElementById(id).style.display = "none";
}

function toggleTheme() {
    document.body.classList.toggle("dark-theme");
    localStorage.setItem("theme", document.body.classList.contains("dark-theme") ? "dark" : "light");
}

function toggleLanguage() {
    currentLang = currentLang === "my" ? "en" : "my";
    localStorage.setItem("lang", currentLang);
    document.getElementById("lang-btn").innerText = currentLang === "my" ? "EN" : "MY";
    renderAllShelves();
}