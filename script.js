(function(){
  "use strict";

  /* ============ DICTIONARY ============ */
  const I18N = {
    en: {
      search_ph: "Search by title or author…",
      login: "Login",
      signup: "Sign Up",
      logout: "Logout",
      my_library: "My Library",
      hero_eyebrow: "Est. reading, no due dates",
      hero_title: "Find your next obsession, one spine at a time.",
      hero_desc: "Two dozen titles curated across genres — browse free samples, unlock books, and read directly in your browser.",
      stat_curated: "Titles in stock",
      stat_genres: "Genres",
      stat_rating: "Avg. rating",
      genre: "Genre",
      max_price: "Max price",
      min_rating: "Minimum rating",
      sort_by: "Sort by",
      sort_feat: "Featured",
      sort_pl: "Price: Low to High",
      sort_ph: "Price: High to Low",
      sort_rat: "Highest Rated",
      sort_az: "Title: A–Z",
      clear_filters: "Clear all filters",
      books_found: "books found",
      cart_title: "Your Cart",
      wish_title: "Wishlist",
      auth_login_title: "Sign In",
      auth_login_sub: "Login to access your purchased books and reading history.",
      auth_reg_title: "Create Account",
      auth_reg_sub: "Register to unlock online reading features.",
      auth_user_label: "Username / Email",
      auth_pass_label: "Password",
      no_account: "Don't have an account?",
      have_account: "Already have an account?",
      read_sample: "📖 Read Sample",
      read_purchased: "✓ Read Purchased Book",
      buy_to_read: "🔒 Buy to Read",
      add_to_cart: "Add +",
      buy_again: "Buy Again",
      currency_unit: " Ks",
      footer_text: "Built for readers, by Fernbank Books — a demo storefront with Online E-Reader."
    },
    my: {
      search_ph: "စာအုပ်အမည် သို့မဟုတ် စာရေးဆရာဖြင့် ရှာရန်…",
      login: "အကောင့်ဝင်ရန်",
      signup: "အကောင့်ဖွင့်ရန်",
      logout: "ထွက်ရန်",
      my_library: "ဝယ်ထားသော စာအုပ်များ",
      hero_eyebrow: "ဒစ်ဂျစ်တယ် စာကြည့်တိုက်နှင့် အရောင်းဆိုင်",
      hero_title: "သင့်ရဲ့ နောက်ထပ်ဖတ်ရှုလိုမယ့် စာအုပ်ကို ရှာဖွေလိုက်ပါ။",
      hero_desc: "အမျိုးအစားစုံလင်သော စာအုပ် ၂၄ အုပ်ကို ရွေးချယ်ဖတ်ရှုနိုင်ပြီး နမူနာဖတ်ခြင်းနှင့် ဝယ်ယူဖတ်ရှုခြင်းများ ပြုလုပ်နိုင်ပါသည်။",
      stat_curated: "စုစုပေါင်း စာအုပ်များ",
      stat_genres: "အမျိုးအစားစုံ",
      stat_rating: "ပျမ်းမျှ အဆင့်သတ်မှတ်ချက်",
      genre: "အမျိုးအစား",
      max_price: "အများဆုံး ဈေးနှုန်း",
      min_rating: "အဆင့်သတ်မှတ်ချက်",
      sort_by: "စီစဉ်ရန်",
      sort_feat: "လူကြိုက်များမှု",
      sort_pl: "ဈေးနှုန်း - အနည်းမှ အများ",
      sort_ph: "ဈေးနှုန်း - အများမှ အနည်း",
      sort_rat: "အဆင့်သတ်မှတ်ချက် အမြင့်ဆုံး",
      sort_az: "စာအုပ်အမည် (က မှ အ)",
      clear_filters: "Filter များကို ပြန်ဖျက်ရန်",
      books_found: "အုပ် တွေ့ရှိပါသည်",
      cart_title: "ဈေးဝယ်ခြင်းတောင်း",
      wish_title: "သိမ်းဆည်းထားသော စာအုပ်များ",
      auth_login_title: "အကောင့်ဝင်ပါ",
      auth_login_sub: "ဝယ်ယူထားသော စာအုပ်များနှင့် စာဖတ်မှတ်တမ်းကို ကြည့်ရှုရန် အကောင့်ဝင်ပါ။",
      auth_reg_title: "အကောင့်အသစ်ဖွင့်ပါ",
      auth_reg_sub: "စာအုပ်များ ဖတ်ရှုဝယ်ယူနိုင်ရန် အကောင့်ဖွင့်ပါ။",
      auth_user_label: "အသုံးပြုသူအမည် / အီးမေးလ်",
      auth_pass_label: "စကားဝှက်",
      no_account: "အကောင့် မရှိသေးပါသလား?",
      have_account: "အကောင့် ရှိပြီးသားလား?",
      read_sample: "📖 နမူနာဖတ်မည်",
      read_purchased: "✓ စာအုပ်အပြည့်အစုံဖတ်မည်",
      buy_to_read: "🔒 ဝယ်ပြီးမှ ဖတ်ပါ",
      add_to_cart: "ဝယ်မည် +",
      buy_again: "ထပ်ဝယ်မည်",
      currency_unit: " ကျပ်",
      footer_text: "Fernbank Books မှ တင်ဆက်သော အွန်လိုင်းစာအုပ်အရောင်းဆိုင်နှင့် စာဖတ်စနစ်။"
    }
  };

  const GENRE_COLORS = {
    "Fantasy":"#9b7fc7","Sci-Fi":"#5ea3c9","Romance":"#d98aa3","Mystery":"#7fae8f",
    "Horror":"#b56a5a","Non-Fiction":"#d9b96a","Classics":"#c9a227","Poetry":"#e0a9d9"
  };

  /* ============ မူရင်း ၂၄ အုပ် (မြန်မာကျပ်ငွေဖြင့် ဈေးနှုန်းသတ်မှတ်ထားသည်) ============ */
  const BOOKS = [
    // --- (၁) နမူနာဖတ်လို့ရသော စာအုပ် ၂ အုပ် ---
    {
      id:1, title:"The Glass Orchard", author:"Nadia Vance", genre:"Fantasy", price:17000, oldPrice:22000, rating:4.7, pages:412,
      desc:"A banished gardener discovers her forbidden orchard grows doors instead of fruit — each one opening onto a different version of the kingdom that exiled her.",
      image:"https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=500&auto=format&fit=crop",
      isFreeSample: true,
      sampleContent:`<h4>Chapter 1: The Glass Orchard</h4><p>The dawn over Oakhaven never broke cleanly; it cracked like thin glass against the jagged spine of the mountains.</p><p>For seven seasons, Nadia had tended the silent trees. When she touched the crystal branch, a doorway appeared in thin air...</p>`
    },
    {
      id:2, title:"Ashfall Station", author:"Miki Torres", genre:"Sci-Fi", price:14500, rating:4.4, pages:356,
      desc:"On a dying orbital station, a systems engineer has forty-eight hours to find who sabotaged the reactor before the last evacuation shuttle departs without her.",
      image:"https://images.unsplash.com/photo-1512820790803-83ca734da794?w=500&auto=format&fit=crop",
      isFreeSample: true,
      sampleContent:`<h4>Log Entry: Ashfall Station</h4><p>Oxygen levels at Sector 7 plummeted by 12% in less than three minutes. Torres checked the telemetry readout twice.</p><p>"Someone severed the secondary bypass," she whispered into her radio...</p>`
    },

    // --- (၂) ဝယ်ယူပြီးမှ ဖတ်လို့ရသော စာအုပ် ၅ အုပ် ---
    {
      id:3, title:"Salt & Marrow", author:"Corinne Achebe", genre:"Fantasy", price:18000, rating:4.8, pages:488,
      desc:"A bonesetter with an outlawed gift is recruited by a dying empire to mend not just bodies, but the fractured treaty holding its provinces together.",
      image:"https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=500&auto=format&fit=crop",
      isFreeSample: false,
      fullContent:`<h4>Full Book: Salt & Marrow</h4><p>Thank you for purchasing! The marrow remembers what the flesh forgets. Corinne stepped into the ancient capital where the treaty stones lay fractured into dust...</p><p>[Unlocked Access - 488 Pages Complete].</p>`
    },
    {
      id:4, title:"The Cartographer's Wife", author:"Helen Duarte", genre:"Romance", price:13000, rating:4.3, pages:302,
      desc:"When her husband vanishes on a mapping expedition, a woman follows his half-finished charts across three countries — and into the arms of the man sent to find him.",
      image:"https://images.unsplash.com/photo-1532012164546-f432f2e37b29?w=500&auto=format&fit=crop",
      isFreeSample: false,
      fullContent:`<h4>Full Book: The Cartographer's Wife</h4><p>Thank you for purchasing! Every line drawn upon parchment is a promise whispered to the uncharted sea...</p><p>[Unlocked Access - 302 Pages Complete].</p>`
    },
    {
      id:5, title:"Quiet Hours", author:"Sam Okafor", genre:"Poetry", price:11000, rating:4.6, pages:96,
      desc:"A collection tracing the small rituals of grief and repair: a kettle left on, a coat still on its hook, the particular silence of a house after 6pm.",
      image:"https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=500&auto=format&fit=crop",
      isFreeSample: false,
      fullContent:`<h4>Full Book: Quiet Hours</h4><p>Thank you for purchasing! A kettle left on the stove, steam curling against the dark window pane...</p><p>[Unlocked Access - 96 Pages Complete].</p>`
    },
    {
      id:6, title:"The Ninth Autopsy", author:"Rowan Blackwood", genre:"Mystery", price:16000, rating:4.5, pages:334,
      desc:"A small-town coroner notices the same faint bruising pattern on her ninth unexplained death this year — and realizes someone has been counting too.",
      image:"https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=500&auto=format&fit=crop",
      isFreeSample: false,
      fullContent:`<h4>Full Book: The Ninth Autopsy</h4><p>Thank you for purchasing! Rowan lifted her scalpel under the cold examination light, noticing the 9th pattern...</p><p>[Unlocked Access - 334 Pages Complete].</p>`
    },
    {
      id:7, title:"Lighthouse Keepers", author:"Elin Marsh", genre:"Romance", price:13500, oldPrice:17000, rating:4.2, pages:288,
      desc:"Two rival lighthouse keepers are forced to share a single beacon for one stormy season, and neither can explain why they keep finding reasons to stay.",
      image:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&auto=format&fit=crop",
      isFreeSample: false,
      fullContent:`<h4>Full Book: Lighthouse Keepers</h4><p>Thank you for purchasing! The waves crashed violently against the stone tower base, locking the two keepers inside for the winter...</p><p>[Unlocked Access - 288 Pages Complete].</p>`
    },

    // --- (၃) ကျန်ရှိသော စာအုပ် ၁၇ အုပ် ---
    {id:8,title:"What the Tide Keeps",author:"Priya Nandan",genre:"Non-Fiction",price:20000,rating:4.6,pages:264,desc:"A marine biologist's memoir of twelve years studying tide pools.",image:""},
    {id:9,title:"The Hollow Choir",author:"Desmond Faulk",genre:"Horror",price:15000,rating:4.1,pages:298,desc:"A church organ that hasn't been played in decades starts up again every night at 3am.",image:""},
    {id:10,title:"Empire of Moss",author:"Nadia Vance",genre:"Fantasy",price:17500,rating:4.9,pages:456,desc:"In a kingdom where forests grow over abandoned cities within a year, a cartographer maps the old world.",image:""},
    {id:11,title:"Static and Bone",author:"Miki Torres",genre:"Sci-Fi",price:16000,rating:4.3,pages:378,desc:"A radio operator on a frontier world receives transmissions from a lost colony ship.",image:""},
    {id:12,title:"The Debt of Small Gods",author:"Corinne Achebe",genre:"Fantasy",price:19500,rating:4.7,pages:512,desc:"Minor deities of rivers and doorways are going missing across the realm.",image:""},
    {id:13,title:"Marginalia",author:"Tomas Reyes",genre:"Classics",price:10000,rating:4.4,pages:224,desc:"An epistolary novel told entirely through the handwritten notes in a secondhand book.",image:""},
    {id:14,title:"The Last Reservation",author:"Helen Duarte",genre:"Romance",price:14000,rating:4.0,pages:276,desc:"A restaurant critic and a chef are trapped together when a blizzard closes the mountain road.",image:""},
    {id:15,title:"Field Notes on Vanishing",author:"Sam Okafor",genre:"Poetry",price:10500,rating:4.5,pages:112,desc:"Short, unsentimental poems about extinction, migration, and the ache of disappearance.",image:""},
    {id:16,title:"The Locksmith's Daughter",author:"Rowan Blackwood",genre:"Mystery",price:15500,rating:4.6,pages:342,desc:"She can open any lock her father built — which is a problem when a client is murdered behind one.",image:""},
    {id:17,title:"Brine",author:"Elin Marsh",genre:"Horror",price:14000,rating:3.9,pages:266,desc:"A fishing town's catch has been getting stranger for months, coming back with worse than fish.",image:""},
    {id:18,title:"The Weight of Small Rooms",author:"Priya Nandan",genre:"Non-Fiction",price:18500,rating:4.3,pages:248,desc:"An architect's essays on the psychology of confined spaces and why humans build smaller.",image:""},
    {id:19,title:"Ninth Ward Requiem",author:"Desmond Faulk",genre:"Horror",price:15000,rating:4.2,pages:312,desc:"A folklorist records oral histories about a house that predicts who the flood takes next.",image:""},
    {id:20,title:"Orbit of Small Mercies",author:"Miki Torres",genre:"Sci-Fi",price:18000,rating:4.8,pages:402,desc:"The last human diplomat on an alien generation ship convinces a mortal species to survive.",image:""},
    {id:21,title:"The Persimmon Letters",author:"Tomas Reyes",genre:"Classics",price:9000,oldPrice:13000,rating:4.1,pages:198,desc:"A rediscovered 1920s novel-in-letters about two sisters separated by great war.",image:""},
    {id:22,title:"Undertow",author:"Corinne Achebe",genre:"Fantasy",price:16500,rating:4.4,pages:388,desc:"A river spirit bound to protect a bridge gets an offer to be free if she lets it fall.",image:""},
    {id:23,title:"Second Harvest",author:"Helen Duarte",genre:"Romance",price:12500,rating:4.5,pages:294,desc:"Two former childhood friends run competing farm stands at the town market.",image:""},
    {id:24,title:"The Quiet Catalog",author:"Sam Okafor",genre:"Non-Fiction",price:20000,rating:4.7,pages:286,desc:"A retired librarian's meditation on forty years of cataloging books, memory, and grief.",image:""}
  ];

  /* ============ STATE ============ */
  let currentUser = JSON.parse(localStorage.getItem("fb_user")) || null;
  let purchasedBookIds = new Set(JSON.parse(localStorage.getItem("fb_purchased") || "[]"));
  let currentTheme = localStorage.getItem("fb_theme") || "dark";
  let currentLang = localStorage.getItem("fb_lang") || "my";
  let readerFontSize = Number(localStorage.getItem("fb_reader_fontsize") || "16");

  let state = {
    search: "",
    genres: new Set(),
    maxPrice: 60000,
    minRating: 0,
    sort: "featured",
    cart: new Map(),
    wishlist: new Set()
  };

  const $ = sel => document.querySelector(sel);
  const $$ = sel => Array.from(document.querySelectorAll(sel));
  const byId = id => BOOKS.find(b => b.id === id);

  function t(key){
    return (I18N[currentLang] && I18N[currentLang][key]) || I18N["en"][key] || key;
  }

  function fmt(n){
    return Number(n).toLocaleString() + t("currency_unit");
  }

  function toast(msg){
    const host = $("#toastHost");
    if(!host) return;
    const el = document.createElement("div");
    el.className = "toast";
    el.textContent = msg;
    host.appendChild(el);
    setTimeout(()=>{ el.style.opacity="0"; setTimeout(()=>el.remove(),300); }, 2200);
  }

  function coverStyle(genre){
    const c = GENRE_COLORS[genre] || "#c9a227";
    return `background:linear-gradient(160deg, ${c}, ${shade(c,-18)});`;
  }
  function shade(hex, percent){
    const num = parseInt(hex.slice(1),16);
    let r=(num>>16)+Math.round(255*percent/100);
    let g=((num>>8)&0x00FF)+Math.round(255*percent/100);
    let b=(num&0x0000FF)+Math.round(255*percent/100);
    r=Math.max(0,Math.min(255,r)); g=Math.max(0,Math.min(255,g)); b=Math.max(0,Math.min(255,b));
    return "#"+(0x1000000+r*0x10000+g*0x100+b).toString(16).slice(1);
  }

  /* ============ LANGUAGE & THEME ============ */
  function applyLanguage(lang){
    currentLang = lang;
    localStorage.setItem("fb_lang", lang);
    $("#langLabel").textContent = lang === "en" ? "မြန်မာ" : "English";

    $$("[data-i18n]").forEach(el => {
      el.textContent = t(el.dataset.i18n);
    });
    $$("[data-i18n-ph]").forEach(el => {
      el.placeholder = t(el.dataset.i18nPh);
    });

    $("#priceRangeVal").textContent = fmt(state.maxPrice);
    updateAuthUI();
    renderGrid();
    renderCart();
    renderMyLibrary();
  }

  function applyTheme(theme){
    currentTheme = theme;
    localStorage.setItem("fb_theme", theme);
    const icon = $("#themeIcon");
    if(theme === "light"){
      document.body.classList.add("light-theme");
      if(icon) icon.textContent = "🌙";
    } else {
      document.body.classList.remove("light-theme");
      if(icon) icon.textContent = "☀️";
    }
  }

  function updateReaderFontSize(delta){
    readerFontSize = Math.max(12, Math.min(26, readerFontSize + delta));
    localStorage.setItem("fb_reader_fontsize", readerFontSize);
    const content = $("#readerContent"), ind = $("#fontIndicator");
    if(content) content.style.fontSize = readerFontSize + "px";
    if(ind) ind.textContent = readerFontSize + "px";
  }

  /* ============ AUTHENTICATION ============ */
  function updateAuthUI(){
    const container = $("#authContainer");
    if(!container) return;
    if(currentUser){
      container.innerHTML = `
        <div class="user-profile">
          <div class="user-avatar">${currentUser.name[0].toUpperCase()}</div>
          <span>${currentUser.name}</span>
          <button class="logout-btn" id="logoutBtn">${t("logout")}</button>
        </div>
      `;
      $("#logoutBtn").onclick = logoutUser;
    } else {
      container.innerHTML = `<button class="auth-btn" id="loginModalBtn">${t("login")}</button>`;
      $("#loginModalBtn").onclick = () => $("#authModalOverlay").classList.add("show");
    }
    updateBadges();
  }

  function logoutUser(){
    currentUser = null;
    localStorage.removeItem("fb_user");
    updateAuthUI();
    renderGrid();
    renderMyLibrary();
    toast(currentLang==="my"?"အကောင့်မှ ထွက်လိုက်ပါပြီ":"Logged out successfully");
  }

  /* ============ MY LIBRARY ============ */
  function renderMyLibrary(){
    const body = $("#libBody");
    if(!body) return;

    if(!currentUser){
      body.innerHTML = `<div class="drawer-empty">${currentLang==="my"?"ဝယ်ယူထားသော စာအုပ်များကို ကြည့်ရန် အရင် အကောင့်ဝင်ပါ။":"Please login to see your purchased books."}</div>`;
      return;
    }

    const myBooks = BOOKS.filter(b => purchasedBookIds.has(b.id));
    if(myBooks.length === 0){
      body.innerHTML = `<div class="drawer-empty">${currentLang==="my"?"ဝယ်ယူထားသော စာအုပ် မရှိသေးပါ။":"You have not purchased any books yet."}</div>`;
      return;
    }

    body.innerHTML = myBooks.map(b => `
      <div class="cart-item">
        <div class="mini-cover" style="${b.image ? `background-image:url(${b.image}); background-size:cover;` : coverStyle(b.genre)}">${b.image ? '' : b.title.slice(0,10)}</div>
        <div class="cart-item-info">
          <h4>${b.title}</h4>
          <div style="font-size:11.5px;color:var(--text-muted);">${b.author}</div>
          <button class="read-btn unlocked" style="margin-top:6px;width:auto;padding:4px 10px;" data-read="${b.id}">
            📖 ${t("read_purchased")}
          </button>
        </div>
      </div>
    `).join("");
  }

  /* ============ READER MODAL ============ */
  function openReader(id){
    const b = byId(id);
    const hasBought = purchasedBookIds.has(b.id);

    if(!b.isFreeSample && !hasBought){
      toast(currentLang==="my"?"ဤစာအုပ်ကို ဖတ်ရန် အရင်ဝယ်ယူပါ!":"Please purchase this book to read the full content!");
      return;
    }

    const titleSuffix = b.isFreeSample ? (currentLang==="my"?" (အခမဲ့ နမူနာ)":" (Free Sample)") : (currentLang==="my"?" (ဝယ်ယူထားသော စာအုပ်)":" (Full Unlocked Book)");
    $("#readerBookTitle").textContent = b.title + titleSuffix;
    
    const content = $("#readerContent");
    content.style.fontSize = readerFontSize + "px";
    $("#fontIndicator").textContent = readerFontSize + "px";
    content.innerHTML = b.isFreeSample ? b.sampleContent : (b.fullContent || `<h4>${b.title}</h4><p>Thank you for your purchase! Full book content is unlocked.</p>`);
    
    $("#readerOverlay").classList.add("show");
  }

  /* ============ GRID & FILTERS ============ */
  function getFiltered(){
    let list = BOOKS.filter(b=>{
      if(state.search){
        const q = state.search.toLowerCase();
        if(!b.title.toLowerCase().includes(q) && !b.author.toLowerCase().includes(q)) return false;
      }
      if(state.genres.size && !state.genres.has(b.genre)) return false;
      if(b.price > state.maxPrice) return false;
      if(b.rating < state.minRating) return false;
      return true;
    });
    switch(state.sort){
      case "price-asc": list.sort((a,b)=>a.price-b.price); break;
      case "price-desc": list.sort((a,b)=>b.price-a.price); break;
      case "rating-desc": list.sort((a,b)=>b.rating-a.rating); break;
      case "title-asc": list.sort((a,b)=>a.title.localeCompare(b.title)); break;
    }
    return list;
  }

  function renderGrid(){
    const list = getFiltered();
    const resultCountEl = $("#resultCount");
    if(resultCountEl) resultCountEl.textContent = list.length;
    
    const grid = $("#bookGrid");
    if(!grid) return;

    if(list.length === 0){
      grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:40px;color:var(--text-muted)">${currentLang==="my"?"စာအုပ် ရှာမတွေ့ပါ။":"No books match your criteria."}</div>`;
      return;
    }

    grid.innerHTML = list.map(b=>{
      const isPurchased = purchasedBookIds.has(b.id);
      const isSample = b.isFreeSample;

      let readBtnHTML = "";
      if(isSample){
        readBtnHTML = `<button class="read-btn sample" data-read="${b.id}">${t("read_sample")}</button>`;
      } else if(isPurchased){
        readBtnHTML = `<button class="read-btn unlocked" data-read="${b.id}">${t("read_purchased")}</button>`;
      } else if(b.fullContent){
        readBtnHTML = `<button class="read-btn locked" title="Purchase to unlock reading">${t("buy_to_read")}</button>`;
      }

      return `
      <div class="book-card">
        <div class="cover" style="${b.image ? '' : coverStyle(b.genre)}" data-open="${b.id}">
          ${b.image ? `<img src="${b.image}" alt="${b.title}" class="book-img">` : `
            <div>
              <div class="cover-title">${b.title}</div>
              <div class="cover-author">${b.author}</div>
            </div>
          `}
          ${isSample ? `<span class="badge-type free">${currentLang==='my'?'နမူနာ':'Sample'}</span>` : ''}
          <button class="wish-btn ${state.wishlist.has(b.id)?'active':''}" data-wish="${b.id}">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0 0-7.8Z"/></svg>
          </button>
          <span class="genre-tag">${b.genre}</span>
        </div>
        <div class="book-info">
          <h3 data-open="${b.id}">${b.title}</h3>
          <div class="author">${b.author}</div>
          <div class="stars">★ ${b.rating}</div>
          
          <div class="book-actions">
            ${readBtnHTML}
            <div class="price-row">
              <div class="price">${fmt(b.price)}${b.oldPrice ? `<span class="old">${fmt(b.oldPrice)}</span>`:''}</div>
              <button class="add-btn" data-add="${b.id}">${isPurchased ? t("buy_again") : t("add_to_cart")}</button>
            </div>
          </div>
        </div>
      </div>`;
    }).join("");
  }

  function renderShelf(){
    const shelf = $("#heroShelf");
    if(!shelf) return;
    const picks = BOOKS.slice(0, 14);
    shelf.innerHTML = picks.map(b=>{
      const h = 210 + (b.id % 5) * 14;
      const c = GENRE_COLORS[b.genre] || "#c9a227";
      return `<div class="spine" data-id="${b.id}" style="height:${h}px;background:linear-gradient(180deg, ${c}, ${shade(c,-15)})" title="${b.title}">
        <span>${b.title}</span>
      </div>`;
    }).join("");
    shelf.onclick = e => {
      const spine = e.target.closest(".spine");
      if(spine) openDetail(Number(spine.dataset.id));
    };
  }

  /* ============ CART & CHECKOUT ============ */
  function addToCart(id){
    state.cart.set(id, (state.cart.get(id)||0) + 1);
    updateBadges();
    renderCart();
    toast(`${byId(id).title} ${currentLang==="my"?"ကို ခြင်းတောင်းထဲ ထည့်ပြီးပါပြီ":"added to cart"}`);
  }

  function renderCart(){
    const body = $("#cartBody"), foot = $("#cartFoot");
    if(!body || !foot) return;
    if(state.cart.size === 0){
      body.innerHTML = `<div class="drawer-empty">${currentLang==="my"?"ခြင်းတောင်းထဲတွင် စာအုပ် မရှိသေးပါ။":"Your cart is empty."}</div>`;
      foot.innerHTML = "";
      return;
    }
    let rows = "", total = 0;
    state.cart.forEach((qty, id)=>{
      const b = byId(id);
      total += b.price * qty;
      rows += `
        <div class="cart-item">
          <div class="mini-cover" style="${b.image ? `background-image:url(${b.image}); background-size:cover;` : coverStyle(b.genre)}">${b.image ? '' : b.title.slice(0,10)}</div>
          <div class="cart-item-info">
            <h4>${b.title}</h4>
            <div style="font-size:12px;color:var(--gold-bright);">${fmt(b.price)} x ${qty}</div>
            <div class="qty-row">
              <button class="remove-link" data-remove="${id}">${currentLang==="my"?"ဖျက်မည်":"Remove"}</button>
            </div>
          </div>
        </div>
      `;
    });
    body.innerHTML = rows;
    foot.innerHTML = `
      <div style="display:flex;justify-content:space-between;font-weight:bold;margin-bottom:12px;">
        <span>${currentLang==="my"?"စုစုပေါင်း:":"Total:"}</span><span>${fmt(total)}</span>
      </div>
      <button class="primary-btn" id="openCheckoutBtn">${currentLang==="my"?"ငွေချေမည်":"Proceed to Checkout"}</button>
    `;
  }

  function openCheckout(){
    if(!currentUser){
      $("#authModalOverlay").classList.add("show");
      toast(currentLang==="my"?"ငွေမချေမီ အကောင့် အရင်ဝင်ပေးပါ!":"Please login before checking out!");
      return;
    }
    const modal = $("#checkoutModal");
    modal.innerHTML = `
      <button class="modal-close" id="closeCheckout">✕</button>
      <div style="padding:26px;">
        <h2 style="font-family:var(--font-display);margin-bottom:8px;">${currentLang==="my"?"ငွေပေးချေမှု အတည်ပြုရန်":"Confirm Purchase"}</h2>
        <p style="color:var(--text-muted);font-size:13px;margin-bottom:16px;">${currentLang==="my"?`ဝယ်ယူပြီးပါက အကောင့် (${currentUser.name}) ထဲသို့ စာအုပ်များ တိုက်ရိုက်ရောက်ရှိသွားပါမည်။`:`Purchased books will be unlocked for ${currentUser.name}.`}</p>
        <form id="checkoutForm">
          <div class="form-row"><label>${currentLang==="my"?"KBZPay / WavePay / ကတ်နံပါတ်":"Payment Method / Card"}</label><input type="text" placeholder="09xxxxxxxxx / Card Number" required></div>
          <button type="submit" class="primary-btn">${currentLang==="my"?"ငွေချေပြီး စာအုပ်ဖတ်မည်":"Pay & Unlock Books"}</button>
        </form>
      </div>
    `;
    $("#closeCheckout").onclick = () => $("#checkoutOverlay").classList.remove("show");
    $("#checkoutForm").onsubmit = e => {
      e.preventDefault();
      state.cart.forEach((qty, id) => purchasedBookIds.add(id));
      localStorage.setItem("fb_purchased", JSON.stringify([...purchasedBookIds]));
      state.cart.clear();
      updateBadges();
      renderCart();
      renderMyLibrary();
      $("#checkoutOverlay").classList.remove("show");
      $("#cartDrawer").classList.remove("open");
      $("#cartOverlay").classList.remove("show");
      renderGrid();
      toast(currentLang==="my"?"ငွေချေမှု အောင်မြင်ပါသည်! စာအုပ်များ ဖတ်နိုင်ပါပြီ။":"Payment successful! Books unlocked.");
    };
    $("#checkoutOverlay").classList.add("show");
  }

  function openDetail(id){
    const b = byId(id);
    const hasBought = purchasedBookIds.has(b.id);
    const modal = $("#detailModal");
    modal.innerHTML = `
      <button class="modal-close" id="closeDetail">✕</button>
      <div class="detail-grid">
        <div class="detail-cover" style="${b.image ? '' : coverStyle(b.genre)}">
          ${b.image ? `<img src="${b.image}" alt="${b.title}" class="detail-book-img">` : `
            <div>
              <div style="font-size:22px;font-weight:bold;">${b.title}</div>
              <div style="font-size:12px;margin-top:6px;">${b.author}</div>
            </div>
          `}
        </div>
        <div class="detail-body">
          <span style="font-size:11px;background:rgba(201,162,39,.2);color:var(--gold-bright);padding:3px 8px;border-radius:4px;">${b.genre}</span>
          <h2 style="margin-top:8px;">${b.title}</h2>
          <div style="color:var(--text-muted);font-size:13px;margin-bottom:12px;">by ${b.author}</div>
          <p class="detail-desc">${b.desc}</p>
          <div style="font-size:20px;font-weight:bold;margin-bottom:14px;">${fmt(b.price)}</div>
          <div style="display:flex;gap:10px;">
            <button class="primary-btn" style="margin-top:0;" id="detailAdd">${t("add_to_cart")}</button>
            ${b.isFreeSample || hasBought || b.fullContent ? `<button class="read-btn ${b.isFreeSample?'sample':'unlocked'}" id="detailRead">📖 ${currentLang==='my'?'ဖတ်မည်':'Read Now'}</button>`: ''}
          </div>
        </div>
      </div>
    `;
    $("#closeDetail").onclick = () => $("#detailOverlay").classList.remove("show");
    $("#detailAdd").onclick = () => { addToCart(b.id); $("#detailOverlay").classList.remove("show"); };
    const dRead = $("#detailRead");
    if(dRead) dRead.onclick = () => { $("#detailOverlay").classList.remove("show"); openReader(b.id); };
    $("#detailOverlay").classList.add("show");
  }

  function updateBadges(){
    let c = 0; state.cart.forEach(q=>c+=q);
    const cb = $("#cartBadge"), wb = $("#wishBadge"), lb = $("#libraryBadge");
    if(cb){ cb.textContent = c; cb.style.display = c>0?"flex":"none"; }
    if(wb){ wb.textContent = state.wishlist.size; wb.style.display = state.wishlist.size>0?"flex":"none"; }
    if(lb){ lb.textContent = purchasedBookIds.size; lb.style.display = purchasedBookIds.size>0?"flex":"none"; }
  }

  function init(){
    applyTheme(currentTheme);
    applyLanguage(currentLang);

    $("#themeToggleBtn").onclick = () => {
      applyTheme(currentTheme === "dark" ? "light" : "dark");
      toast(currentTheme.toUpperCase() + " mode enabled");
    };
    $("#langToggleBtn").onclick = () => {
      applyLanguage(currentLang === "en" ? "my" : "en");
      toast(currentLang === "my" ? "မြန်မာဘာသာသို့ ပြောင်းပြီးပါပြီ" : "Switched to English");
    };

    $("#fontIncBtn").onclick = () => updateReaderFontSize(2);
    $("#fontDecBtn").onclick = () => updateReaderFontSize(-2);

    $("#myLibraryBtn").onclick = () => {
      renderMyLibrary();
      $("#libDrawer").classList.add("open");
      $("#libOverlay").classList.add("show");
    };
    $("#closeLib").onclick = () => { $("#libDrawer").classList.remove("open"); $("#libOverlay").classList.remove("show"); };
    $("#libOverlay").onclick = () => { $("#libDrawer").classList.remove("open"); $("#libOverlay").classList.remove("show"); };
    $("#libBody").onclick = e => {
      const rBtn = e.target.closest("[data-read]");
      if(rBtn){
        $("#libDrawer").classList.remove("open");
        $("#libOverlay").classList.remove("show");
        openReader(Number(rBtn.dataset.read));
      }
    };

    const GENRES = [...new Set(BOOKS.map(b=>b.genre))];
    const gNav = $("#genreNav"), gFilter = $("#genreFilters"), rFilter = $("#ratingFilters");
    
    if(gNav) gNav.innerHTML = `<button class="chip active" data-genre="__all">All</button>` + GENRES.map(g=>`<button class="chip" data-genre="${g}">${g}</button>`).join("");
    if(gFilter) gFilter.innerHTML = GENRES.map(g=>`<label><input type="checkbox" value="${g}" class="genreCheck"> ${g}</label>`).join("");
    if(rFilter) rFilter.innerHTML = [4,3,0].map(r=>`<label><input type="radio" name="rF" value="${r}" ${r===0?'checked':''}> ${r===0?'Any':r+'★ & up'}</label>`).join("");

    if(gNav) gNav.onclick = e => {
      const chip = e.target.closest(".chip");
      if(!chip) return;
      $$(".subnav .chip").forEach(c=>c.classList.remove("active"));
      chip.classList.add("active");
      const g = chip.dataset.genre;
      if(g === "__all") state.genres.clear(); else state.genres = new Set([g]);
      renderGrid();
    };

    if(gFilter) gFilter.onchange = () => {
      state.genres = new Set($$(".genreCheck").filter(c=>c.checked).map(c=>c.value));
      renderGrid();
    };

    if(rFilter) rFilter.onchange = e => { state.minRating = Number(e.target.value); renderGrid(); };

    const sIn = $("#searchInput");
    if(sIn) sIn.oninput = e => { state.search = e.target.value; renderGrid(); };

    const pRange = $("#priceRange");
    if(pRange) pRange.oninput = e => { 
      state.maxPrice = Number(e.target.value); 
      $("#priceRangeVal").textContent = fmt(state.maxPrice); 
      renderGrid(); 
    };

    const sSelect = $("#sortSelect");
    if(sSelect) sSelect.onchange = e => { state.sort = e.target.value; renderGrid(); };

    const cFilters = $("#clearFilters");
    if(cFilters) cFilters.onclick = () => {
      state.search = ""; state.genres.clear(); state.maxPrice = 60000; state.minRating = 0;
      if(sIn) sIn.value = "";
      if(pRange) pRange.value = 60000;
      $("#priceRangeVal").textContent = fmt(60000);
      $$(".genreCheck").forEach(c=>c.checked=false);
      $$('input[name="rF"]')[2].checked = true;
      $$(".subnav .chip").forEach(c=>c.classList.remove("active"));
      $('.subnav .chip[data-genre="__all"]').classList.add("active");
      renderGrid();
    };

    $("#bookGrid").onclick = e => {
      const readBtn = e.target.closest("[data-read]");
      const addBtn = e.target.closest("[data-add]");
      const wishBtn = e.target.closest("[data-wish]");
      const openEl = e.target.closest("[data-open]");

      if(readBtn){ openReader(Number(readBtn.dataset.read)); return; }
      if(addBtn){ addToCart(Number(addBtn.dataset.add)); return; }
      if(wishBtn){
        const id = Number(wishBtn.dataset.wish);
        if(state.wishlist.has(id)) state.wishlist.delete(id); else state.wishlist.add(id);
        updateBadges(); renderGrid();
        return;
      }
      if(openEl){ openDetail(Number(openEl.dataset.open)); }
    };

    $("#cartBtn").onclick = () => { $("#cartDrawer").classList.add("open"); $("#cartOverlay").classList.add("show"); };
    $("#closeCart").onclick = () => { $("#cartDrawer").classList.remove("open"); $("#cartOverlay").classList.remove("show"); };
    $("#cartOverlay").onclick = () => { $("#cartDrawer").classList.remove("open"); $("#cartOverlay").classList.remove("show"); };
    $("#cartFoot").onclick = e => { if(e.target.id === "openCheckoutBtn") openCheckout(); };
    $("#cartBody").onclick = e => {
      const rem = e.target.closest("[data-remove]");
      if(rem){ state.cart.delete(Number(rem.dataset.remove)); updateBadges(); renderCart(); }
    };

    let isReg = false;
    $("#closeAuth").onclick = () => $("#authModalOverlay").classList.remove("show");
    $("#authForm").onsubmit = e => {
      e.preventDefault();
      const uname = $("#authUsername").value.trim();
      if(!uname) return;
      currentUser = { name: uname };
      localStorage.setItem("fb_user", JSON.stringify(currentUser));
      updateAuthUI();
      renderMyLibrary();
      $("#authModalOverlay").classList.remove("show");
      renderGrid();
      toast(currentLang==="my"?`ကြိုဆိုပါတယ် ${uname}!`:`Welcome, ${uname}!`);
    };

    $("#authToggleBtn").onclick = () => {
      isReg = !isReg;
      $("#authTitle").textContent = isReg ? t("auth_reg_title") : t("auth_login_title");
      $("#authSubtitle").textContent = isReg ? t("auth_reg_sub") : t("auth_login_sub");
      $("#authSubmitBtn").textContent = isReg ? t("signup") : t("login");
      $("#authToggleText").textContent = isReg ? t("have_account") : t("no_account");
      $("#authToggleBtn").textContent = isReg ? t("login") : t("signup");
    };

    $("#closeReader").onclick = () => $("#readerOverlay").classList.remove("show");

    renderShelf();
    renderGrid();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();