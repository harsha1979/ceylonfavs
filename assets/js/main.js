(function () {
  const D = window.CF_DATA;
  const S = D.store;

  // ---------- Helpers ----------
  const $ = (sel, root = document) => root.querySelector(sel);
  const money = (n) => "$" + n.toFixed(2);
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const tint = (hue, l = 92) => `hsl(${hue} 70% ${l}%)`;
  const store = {
    get(k, d) { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* storage unavailable */ } }
  };

  // Flatten catalog into product objects with stable ids
  const products = [];
  D.categories.forEach((c) => {
    c.products.forEach((p, i) => {
      const flag = p[2];
      products.push({
        id: c.slug + "-" + i,
        name: p[0],
        price: flag && flag.sale ? flag.sale : p[1],
        was: flag && flag.sale ? p[1] : null,
        oos: flag === "oos" || (flag && flag.oos) || false,
        isNew: flag === "new",
        cat: c
      });
    });
  });
  const byId = Object.fromEntries(products.map((p) => [p.id, p]));

  const icons = {
    search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>',
    bag: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 7h12l-1 13H7L6 7Z"/><path d="M9 7a3 3 0 0 1 6 0"/></svg>',
    user: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></svg>',
    menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',
    close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 6l12 12M18 6 6 18"/></svg>',
    plus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>',
    chev: '<svg class="chev" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="m3 4.5 3 3 3-3"/></svg>',
    fb: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M14 9V7c0-1 .5-1.5 1.5-1.5H17V2h-2.6C11.6 2 10.5 3.8 10.5 6.5V9H8v3.5h2.5V22H14v-9.5h2.6L17 9h-3Z"/></svg>',
    wa: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.3 14.1c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.3-.7-2.8-1.1-4.6-4-4.7-4.2-.1-.2-1.1-1.5-1.1-2.9s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 2c.1.2.1.4 0 .5l-.3.5-.4.5c-.1.1-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.3 2.4 1.5.3.1.5.1.6-.1l.9-1c.2-.3.4-.2.6-.1l1.9.9c.3.1.5.2.5.3.1.2.1.8-.1 1.4Z"/></svg>',
    mail: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
    phone: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"/></svg>'
  };

  // ---------- Header ----------
  const page = document.body.dataset.page || "";
  const catLink = (c) => `category.html?c=${c.slug}`;

  const megaLinks = D.categories.map((c) =>
    `<a href="${catLink(c)}"><span class="emo" style="background:${tint(c.hue)}">${c.icon}</span>${esc(c.name)}</a>`
  ).join("");

  const header = `
  <div class="announce">🚚 Weekend local delivery within 50 miles — just <strong>$10</strong> · Shipping to all 50 states</div>
  <header class="site-header">
    <div class="wrap header-row">
      <button class="icon-btn menu-toggle" aria-label="Open menu" data-open-mnav>${icons.menu}</button>
      <a href="index.html" class="logo" aria-label="${S.name} home">
        <span class="logo-mark">C</span>
        <span class="logo-text">Ceylon Favorites<small>Sri Lankan Store · USA</small></span>
      </a>
      <nav class="nav" aria-label="Main">
        <div class="nav-item"><a class="nav-link ${page === "home" ? "active" : ""}" href="index.html">Home</a></div>
        <div class="nav-item">
          <button class="nav-link ${page === "category" ? "active" : ""}" aria-haspopup="true">Category ${icons.chev}</button>
          <div class="dropdown mega">${megaLinks}<div class="mega-foot"><a href="category.html">Browse all ${products.length} products →</a></div></div>
        </div>
        <div class="nav-item"><a class="nav-link ${page === "orders" ? "active" : ""}" href="my-orders.html">My Orders</a></div>
        <div class="nav-item"><a class="nav-link ${page === "about" ? "active" : ""}" href="about.html">About Us</a></div>
        <div class="nav-item">
          <button class="nav-link ${page === "shipping" ? "active" : ""}" aria-haspopup="true">Shipping ${icons.chev}</button>
          <div class="dropdown">
            <a href="shipping-returns.html">Shipping &amp; Returns</a>
            <a href="shipping-policy.html">Shipping Policy</a>
            <a href="return-policy.html">Return Policy</a>
          </div>
        </div>
        <div class="nav-item">
          <button class="nav-link ${page === "soon" ? "active" : ""}" aria-haspopup="true">Coming Soon ${icons.chev}</button>
          <div class="dropdown"><a href="movie-food-order.html">Milton Movie Food Order <span class="tag">SOON</span></a></div>
        </div>
        <div class="nav-item"><a class="nav-link ${page === "gift" ? "active" : ""}" href="gift-card.html">Gift Card</a></div>
        <div class="nav-item"><a class="nav-link ${page === "loyalty" ? "active" : ""}" href="loyalty.html">Loyalty</a></div>
        <div class="nav-item"><a class="nav-link ${page === "rewards" ? "active" : ""}" href="my-rewards.html">My Rewards</a></div>
      </nav>
      <div class="header-actions">
        <button class="icon-btn" aria-label="Search" data-toggle-search>${icons.search}</button>
        <a class="icon-btn" href="customer-support.html" aria-label="Customer support">${icons.user}</a>
        <button class="icon-btn" aria-label="Open cart" data-open-cart>${icons.bag}<span class="badge" data-cart-count data-count="0">0</span></button>
      </div>
    </div>
    <div class="search-bar" id="searchBar">
      <div class="wrap">
        <form action="category.html" role="search">
          <input class="input" type="search" name="q" placeholder="Search kottu mee, Maliban, Dilmah, sprats…" aria-label="Search products">
          <button class="btn btn-primary" type="submit">Search</button>
        </form>
      </div>
    </div>
  </header>`;

  const mnav = `
  <div class="scrim" data-scrim></div>
  <aside class="mnav" id="mnav" aria-label="Mobile menu">
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px">
      <span class="logo-text">Menu</span>
      <button class="icon-btn" aria-label="Close menu" data-close>${icons.close}</button>
    </div>
    <a href="index.html">Home</a>
    <details><summary>Category</summary>${D.categories.map((c) => `<a href="${catLink(c)}">${c.icon} ${esc(c.name)}</a>`).join("")}<a href="category.html"><b>All products</b></a></details>
    <a href="my-orders.html">My Orders</a>
    <a href="about.html">About Us</a>
    <details><summary>Shipping</summary><a href="shipping-returns.html">Shipping &amp; Returns</a><a href="shipping-policy.html">Shipping Policy</a><a href="return-policy.html">Return Policy</a></details>
    <details><summary>Coming Soon</summary><a href="movie-food-order.html">Milton Movie Food Order</a></details>
    <a href="gift-card.html">Gift Card</a>
    <a href="loyalty.html">Loyalty</a>
    <a href="my-rewards.html">My Rewards</a>
    <a href="customer-support.html">Customer Support</a>
  </aside>
  <aside class="drawer" id="cart" aria-label="Shopping cart">
    <div class="drawer-head"><h3>Your basket</h3><button class="icon-btn" aria-label="Close cart" data-close>${icons.close}</button></div>
    <div class="drawer-body" id="cartBody"></div>
    <div class="drawer-foot" id="cartFoot"></div>
  </aside>
  <div class="toast" id="toast" role="status" aria-live="polite"></div>
  <a class="wa-fab" href="${S.phoneHref}" aria-label="Call or message us">${icons.wa}</a>`;

  const footer = `
  <footer class="site-footer">
    <div class="wrap">
      <div class="foot-grid">
        <div>
          <a href="index.html" class="logo"><span class="logo-mark">C</span><span class="logo-text">Ceylon Favorites</span></a>
          <p class="foot-about">${esc(S.tagline)} Authentic Sri Lankan groceries, spices, teas and frozen favourites — shipped across the USA.</p>
          <div class="socials"><a href="${S.facebook}" target="_blank" rel="noopener" aria-label="Facebook">${icons.fb}</a><a href="${S.phoneHref}" aria-label="WhatsApp">${icons.wa}</a></div>
        </div>
        <div>
          <h4>Shop</h4>
          ${D.categories.slice(0, 7).map((c) => `<a href="${catLink(c)}">${esc(c.name)}</a>`).join("")}
          <a href="category.html"><b>All categories</b></a>
        </div>
        <div>
          <h4>Help</h4>
          <a href="customer-support.html">Customer Support</a>
          <a href="shipping-returns.html">Shipping &amp; Returns</a>
          <a href="shipping-policy.html">Shipping Policy</a>
          <a href="return-policy.html">Return Policy</a>
          <a href="my-orders.html">My Orders</a>
          <a href="gift-card.html">Gift Cards</a>
          <a href="loyalty.html">Loyalty Club</a>
        </div>
        <div>
          <h4>Need help?</h4>
          <a href="${S.phoneHref}">📞 ${S.phone}</a>
          <a href="mailto:${S.email}">✉️ ${S.email}</a>
          <h4 style="margin-top:22px">Get offers by email</h4>
          <form class="newsletter" data-newsletter><input class="input" type="email" required placeholder="you@example.com" aria-label="Email"><button class="btn btn-gold btn-sm" type="submit">Join</button></form>
          <div class="pay-row">${S.payments.map((p) => `<span>${p}</span>`).join("")}</div>
        </div>
      </div>
      <div class="foot-bottom"><span>© ${new Date().getFullYear()} ${S.name}. All rights reserved.</span><span><a href="credits.html" style="display:inline">Photo credits</a> · Made with ❤️ and a lot of curry powder.</span></div>
    </div>
  </footer>`;

  document.body.insertAdjacentHTML("afterbegin", header);
  document.body.insertAdjacentHTML("beforeend", footer + mnav);

  // ---------- Toast ----------
  let toastTimer;
  function toast(msg) {
    const t = $("#toast");
    t.innerHTML = msg;
    t.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.classList.remove("show"), 2400);
  }

  // ---------- Cart ----------
  let cart = store.get("cf_cart", {});
  const giftKey = (amt) => "gift-" + amt;

  function lineInfo(id) {
    if (id.startsWith("gift-")) {
      const amt = Number(id.slice(5));
      return { id, name: `eGift Card — ${money(amt)}`, price: amt, cat: { icon: "🎁", hue: 140 } };
    }
    return byId[id];
  }
  function cartLines() { return Object.entries(cart).map(([id, q]) => ({ ...lineInfo(id), qty: q })).filter((l) => l.name); }
  function cartTotal() { return cartLines().reduce((s, l) => s + l.price * l.qty, 0); }

  function saveCart() { store.set("cf_cart", cart); renderCart(); }
  function addToCart(id, qty = 1) {
    cart[id] = (cart[id] || 0) + qty;
    saveCart();
    toast(`🛒 Added <b>${esc(lineInfo(id).name)}</b>`);
  }

  function renderCart() {
    const lines = cartLines();
    const count = lines.reduce((s, l) => s + l.qty, 0);
    document.querySelectorAll("[data-cart-count]").forEach((b) => { b.textContent = count; b.dataset.count = count; });
    const body = $("#cartBody"), foot = $("#cartFoot");
    if (!lines.length) {
      body.innerHTML = `<div class="empty" style="margin-top:20px"><div class="big">🧺</div><p>Your basket is empty.<br>Let's fill it with something from home.</p><a class="btn btn-primary btn-sm" href="category.html">Start shopping</a></div>`;
      foot.innerHTML = "";
      return;
    }
    body.innerHTML = lines.map((l) => `
      <div class="line-item">
        <div class="thumb" style="background:${tint(l.cat.hue)}">${l.cat.icon}</div>
        <div>
          <h5>${esc(l.name)}</h5>
          <div class="qty"><button data-dec="${l.id}" aria-label="Decrease">−</button><input value="${l.qty}" readonly aria-label="Quantity"><button data-inc="${l.id}" aria-label="Increase">+</button></div>
          <button class="remove" data-remove="${l.id}">Remove</button>
        </div>
        <b>${money(l.price * l.qty)}</b>
      </div>`).join("");
    const total = cartTotal();
    foot.innerHTML = `
      <div class="totals"><span>Subtotal</span><span>${money(total)}</span></div>
      <div class="points-note">⭐ You'll earn <b>${Math.floor(total)}</b> loyalty points on this order</div>
      <button class="btn btn-primary" data-checkout>Checkout</button>
      <p class="meta" style="margin:10px 0 0;text-align:center">Shipping is calculated at checkout. Frozen items ship separately via UPS.</p>`;
  }

  function checkout() {
    const lines = cartLines();
    if (!lines.length) return;
    const total = cartTotal();
    const orders = store.get("cf_orders", []);
    const no = "CF" + String(Date.now()).slice(-6);
    orders.unshift({ no, date: new Date().toISOString(), total, items: lines.map((l) => ({ name: l.name, qty: l.qty, price: l.price })) });
    store.set("cf_orders", orders);
    store.set("cf_points", store.get("cf_points", 0) + Math.floor(total));
    cart = {};
    saveCart();
    closeAll();
    toast(`✅ Order <b>${no}</b> placed — view it in My Orders`);
    document.dispatchEvent(new CustomEvent("cf:orders"));
  }

  // ---------- Overlays ----------
  function openPanel(id) { $("#" + id).classList.add("open"); $("[data-scrim]").classList.add("open"); document.body.style.overflow = "hidden"; }
  function closeAll() { ["cart", "mnav"].forEach((id) => $("#" + id).classList.remove("open")); $("[data-scrim]").classList.remove("open"); document.body.style.overflow = ""; }

  document.addEventListener("click", (e) => {
    const t = e.target.closest("button, a, [data-scrim]");
    if (!t) return;
    if (t.matches("[data-open-cart]")) openPanel("cart");
    else if (t.matches("[data-open-mnav]")) openPanel("mnav");
    else if (t.matches("[data-close], [data-scrim]")) closeAll();
    else if (t.matches("[data-toggle-search]")) { const sb = $("#searchBar"); sb.classList.toggle("open"); if (sb.classList.contains("open")) $("input", sb).focus(); }
    else if (t.dataset.add) addToCart(t.dataset.add);
    else if (t.dataset.inc) { cart[t.dataset.inc]++; saveCart(); }
    else if (t.dataset.dec) { if (--cart[t.dataset.dec] <= 0) delete cart[t.dataset.dec]; saveCart(); }
    else if (t.dataset.remove) { delete cart[t.dataset.remove]; saveCart(); }
    else if (t.matches("[data-checkout]")) checkout();
  });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeAll(); });
  document.addEventListener("submit", (e) => {
    if (e.target.matches("[data-newsletter]")) { e.preventDefault(); e.target.reset(); toast("💌 Thanks! You're on the list."); }
  });

  // ---------- Product card ----------
  function productCard(p, showCat = false) {
    const pill = p.oos ? '<span class="pill oos">Sold out</span>' : p.was ? '<span class="pill sale">Sale</span>' : p.isNew ? '<span class="pill new">New</span>' : "";
    return `
    <article class="prod ${p.oos ? "is-oos" : ""} reveal">
      <div class="prod-media" style="background:linear-gradient(160deg, ${tint(p.cat.hue, 94)}, ${tint(p.cat.hue, 84)})">
        ${pill}<span>${p.cat.icon}</span><span class="label">${esc(p.name.split(" ")[0])}</span>
      </div>
      <div class="prod-body">
        ${showCat ? `<a class="prod-cat" href="${catLink(p.cat)}">${esc(p.cat.name)}</a>` : ""}
        <h4>${esc(p.name)}</h4>
        <div class="prod-foot">
          <span class="price">${money(p.price)}${p.was ? `<s>${money(p.was)}</s>` : ""}</span>
          <button class="add-btn" data-add="${p.id}" ${p.oos ? "disabled" : ""} aria-label="Add ${esc(p.name)} to basket">${icons.plus}</button>
        </div>
      </div>
    </article>`;
  }

  // ---------- Reveal ----------
  const io = "IntersectionObserver" in window ? new IntersectionObserver((entries) => {
    entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
  }, { rootMargin: "0px 0px -40px 0px" }) : null;
  function observeReveals(root = document) {
    root.querySelectorAll(".reveal:not(.in)").forEach((el) => io ? io.observe(el) : el.classList.add("in"));
  }

  renderCart();
  window.CF = { D, products, byId, productCard, money, esc, tint, store, toast, addToCart, giftKey, observeReveals, catLink, icons };
  document.addEventListener("DOMContentLoaded", () => observeReveals());
})();
