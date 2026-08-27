/* ==========================================================================
   VEHRAAN STREETWEAR — COMPLETE ZERO-BUG MASTER SCRIPT
   - 18 Catalog Drops (veh-001 to veh-018) @ Flat ₹399
   - Robust Cart Sanitization (Zero NaN Protection)
   - Working Men, Women, Anime, Spiderverse, Motorsport Filters
   - Click-to-View Product Details Modal
   - Shopping Bag Drawer (+ ₹100 Flat Shipping Calculation)
   - COD Engine & WhatsApp Order Dispatch
   ========================================================================== */

// 1. MASTER 18 PRODUCTS CATALOG
const products = [
  // --- FRESH DROPS (New Arrivals: 1 to 9) ---
  {
    id: "veh-001",
    name: "Symbiote Noir Spider Graphic Drop",
    price: 399,
    originalPrice: 799,
    image: "images/tee-1.jpg",
    fallbackImage: "images/tee-1.jpeg",
    desc: "Heavy 240 GSM combed cotton. Minimal front spider logo with full comic back print.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    section: "fresh",
    tags: ["boys", "girls", "men", "women", "unisex", "black", "spider", "marvel", "spiderman", "comic", "symbiote", "graphic", "tee"]
  },
  {
    id: "veh-002",
    name: "Miles Morales Spiderverse Crimson Drop",
    price: 399,
    originalPrice: 799,
    image: "images/tee-2.jpg",
    fallbackImage: "images/tee-2.jpeg",
    desc: "Dual-color red and white stylized Spiderverse leap graphic with zero fade ink.",
    sizes: ["S", "M", "L", "XL"],
    section: "fresh",
    tags: ["boys", "girls", "men", "women", "unisex", "black", "red", "spider", "marvel", "miles", "morales", "spiderverse", "graphic", "tee"]
  },
  {
    id: "veh-003",
    name: "Toji Inverted Spear Cursed Wrap Tee",
    price: 399,
    originalPrice: 799,
    image: "images/tee-3.jpg",
    fallbackImage: "images/tee-3.jpeg",
    desc: "Continuous chain aesthetic passing from waistline to full-back inverted spear art.",
    sizes: ["M", "L", "XL", "XXL"],
    section: "fresh",
    tags: ["boys", "girls", "men", "women", "unisex", "white", "anime", "toji", "fushiguro", "jjk", "jujutsu", "kaisen", "spear", "wrap", "tee"]
  },
  {
    id: "veh-004",
    name: "Formula 1 Racing Minimalist Drop",
    price: 399,
    originalPrice: 799,
    image: "images/tee-4.jpg",
    fallbackImage: "images/tee-4.jpeg",
    desc: "Pure white 240 GSM drop with chest F1 insignia and front-hem race car artwork.",
    sizes: ["S", "M", "L", "XL"],
    section: "fresh",
    tags: ["boys", "girls", "men", "women", "unisex", "white", "f1", "formula 1", "car", "racing", "speed", "motorsport", "tee"]
  },
  {
    id: "veh-005",
    name: "Vagabond Ronin Katana Wrap Tee",
    price: 399,
    originalPrice: 799,
    image: "images/tee-5.jpg",
    fallbackImage: "images/tee-5.jpeg",
    desc: "Manga calligraphy quote on chest with wrap-around katana blade side illustration.",
    sizes: ["S", "M", "L", "XL"],
    section: "fresh",
    tags: ["boys", "girls", "men", "women", "unisex", "white", "anime", "manga", "vagabond", "musashi", "katana", "samurai", "sword", "quote", "tee"]
  },
  {
    id: "veh-006",
    name: "Red Web 'Who?' Crimson Graphic Drop",
    price: 399,
    originalPrice: 799,
    image: "images/tee-11.jpg",
    fallbackImage: "images/tee-11.jpeg",
    desc: "Gothic chest typography paired with dynamic corner-spanning blood-red web artwork.",
    sizes: ["S", "M", "L", "XL"],
    section: "fresh",
    tags: ["boys", "girls", "men", "women", "unisex", "black", "red", "who", "spider", "web", "gothic", "streetwear", "tee"]
  },
  {
    id: "veh-007",
    name: "Solo Leveling Igris 'ARISE' White Drop",
    price: 399,
    originalPrice: 799,
    image: "images/tee-12.jpg",
    fallbackImage: "images/tee-12.jpeg",
    desc: "Flowing ink manga art of the Commander Igris summon on heavyweight white cotton.",
    sizes: ["M", "L", "XL", "XXL"],
    section: "fresh",
    tags: ["boys", "girls", "men", "women", "unisex", "white", "anime", "solo leveling", "arise", "igris", "jinwoo", "shadow", "monarch", "tee"]
  },
  {
    id: "veh-008",
    name: "Spider Web Shatter Red Graphic Tee",
    price: 399,
    originalPrice: 799,
    image: "images/tee-13.jpg",
    fallbackImage: "images/tee-13.jpeg",
    desc: "Red front chest typography with spiderweb fracture graphics spanning the back.",
    sizes: ["S", "M", "L", "XL"],
    section: "fresh",
    tags: ["boys", "girls", "men", "women", "unisex", "black", "red", "spider", "web", "shatter", "streetwear", "tee"]
  },
  {
    id: "veh-009",
    name: "Creative High Passion Street Drop",
    price: 399,
    originalPrice: 799,
    image: "images/tee-14.jpg",
    fallbackImage: "images/tee-14.jpeg",
    desc: "Earth-tone sand beige heavy knit featuring layered red and black typography.",
    sizes: ["M", "L", "XL", "XXL"],
    section: "fresh",
    tags: ["boys", "girls", "men", "women", "unisex", "beige", "sand", "brown", "creative", "passion", "typography", "oversized", "tee"]
  },

  // --- TRENDING NOW (Best Sellers: 10 to 18) ---
  {
    id: "veh-010",
    name: "Zenitsu Thunder Breathing Drop",
    price: 399,
    originalPrice: 799,
    image: "images/tee-6.jpg",
    fallbackImage: "images/tee-6.jpeg",
    desc: "Vibrant yellow electric arc back print on jet-black heavyweight bio-wash knit.",
    sizes: ["S", "M", "L", "XL"],
    section: "trending",
    tags: ["boys", "girls", "men", "women", "unisex", "black", "yellow", "anime", "demon slayer", "kimetsu", "zenitsu", "thunder", "katana", "tee"]
  },
  {
    id: "veh-011",
    name: "Toji Fushiguro Katana Stance Tee",
    price: 399,
    originalPrice: 799,
    image: "images/tee-7.jpg",
    fallbackImage: "images/tee-7.jpeg",
    desc: "Crisp chest frame insignia with sharp blade stance back screenprint.",
    sizes: ["M", "L", "XL"],
    section: "trending",
    tags: ["boys", "girls", "men", "women", "unisex", "black", "anime", "toji", "fushiguro", "jjk", "jujutsu kaisen", "katana", "blade", "tee"]
  },
  {
    id: "veh-012",
    name: "Toji Dagger Smirk Oversized Drop",
    price: 399,
    originalPrice: 799,
    image: "images/tee-8.jpg",
    fallbackImage: "images/tee-8.jpeg",
    desc: "Subtle Japanese chest emblem with oversized monochrome character portrait.",
    sizes: ["S", "M", "L", "XL"],
    section: "trending",
    tags: ["boys", "girls", "men", "women", "unisex", "black", "anime", "toji", "smirk", "dagger", "jjk", "jujutsu", "oversized", "tee"]
  },
  {
    id: "veh-013",
    name: "Solo Leveling 'ARISE' Jinwoo Drop",
    price: 399,
    originalPrice: 799,
    image: "images/tee-9.jpg",
    fallbackImage: "images/tee-9.jpeg",
    desc: "Monochrome chest typography with vibrant cyan shadow aura back illustration.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    section: "trending",
    tags: ["boys", "girls", "men", "women", "unisex", "black", "blue", "cyan", "anime", "solo leveling", "jinwoo", "arise", "shadow", "monarch", "tee"]
  },
  {
    id: "veh-014",
    name: "Crimson Bloodline TOJI Drop",
    price: 399,
    originalPrice: 799,
    image: "images/tee-10.jpg",
    fallbackImage: "images/tee-10.jpeg",
    desc: "High-contrast blood-red font treatment with spear-wielding anime back panel.",
    sizes: ["M", "L", "XL", "XXL"],
    section: "trending",
    tags: ["boys", "girls", "men", "women", "unisex", "black", "red", "anime", "toji", "bloodline", "crimson", "jjk", "jujutsu", "tee"]
  },
  {
    id: "veh-015",
    name: "Attack on Titan Kanji Minimal Drop",
    price: 399,
    originalPrice: 799,
    image: "images/tee-15.jpg",
    fallbackImage: "images/tee-15.jpeg",
    desc: "Deep cobalt blue combed cotton with clean Japanese Attack on Titan chest typography.",
    sizes: ["S", "M", "L", "XL"],
    section: "trending",
    tags: ["boys", "girls", "men", "women", "unisex", "blue", "cobalt", "anime", "aot", "attack on titan", "shingeki", "kanji", "japanese", "tee"]
  },
  {
    id: "veh-016",
    name: "Captain Levi Ackerman Manga Panel Drop",
    price: 399,
    originalPrice: 799,
    image: "images/tee-16.jpg",
    fallbackImage: "images/tee-16.jpeg",
    desc: "Royal blue base with full grayscale Levi blade stance back illustration.",
    sizes: ["M", "L", "XL"],
    section: "trending",
    tags: ["boys", "girls", "men", "women", "unisex", "blue", "anime", "aot", "attack on titan", "levi", "ackerman", "blade", "manga", "tee"]
  },
  {
    id: "veh-017",
    name: "Marvel The Punisher Distressed Skull Drop",
    price: 399,
    originalPrice: 799,
    image: "images/tee-17.jpg",
    fallbackImage: "images/tee-17.jpeg",
    desc: "Distressed vintage chalk-white skull graphic on heavyweight jet-black cotton.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    section: "trending",
    tags: ["boys", "girls", "men", "women", "unisex", "black", "marvel", "punisher", "skull", "distressed", "vintage", "tee"]
  },
  {
    id: "veh-018",
    name: "Maki Zenin Awakened Manga Drop",
    price: 399,
    originalPrice: 799,
    image: "images/tee-18.jpg",
    fallbackImage: "images/tee-18.jpeg",
    desc: "Minimal chest eye-box paired with multi-panel awakened Maki sword back manga.",
    sizes: ["S", "M", "L", "XL"],
    section: "trending",
    tags: ["boys", "girls", "men", "women", "unisex", "black", "anime", "maki", "zenin", "jjk", "jujutsu kaisen", "sword", "manga", "tee"]
  }
];

// App State & Dynamic Initialization
let catalogProducts = [...products];
let currentUser = null;
let activeSelectedSizes = {};
let activeFilterTag = "all";
const FLAT_DELIVERY_FEE = 100;
let currentUnit = "in";

// 2. DEFENSIVE CART INITIALIZATION (Purges NaN data)
let rawCart = [];
try {
  rawCart = JSON.parse(localStorage.getItem("vehraan_cart")) || [];
  if (!Array.isArray(rawCart)) rawCart = [];
} catch (e) {
  rawCart = [];
}

let cart = rawCart.filter(item => item && Number(item.price) > 0 && Number(item.qty) > 0).map(item => ({
  id: item.id,
  name: item.name,
  price: Number(item.price) || 399,
  image: item.image,
  fallbackImage: item.fallbackImage || item.image,
  size: item.size || "M",
  qty: Number(item.qty) || 1
}));
localStorage.setItem("vehraan_cart", JSON.stringify(cart));

function initSizes() {
  catalogProducts.forEach(p => {
    if (!activeSelectedSizes[p.id]) {
      activeSelectedSizes[p.id] = (p.sizes && p.sizes[0]) || "M";
    }
  });
}
initSizes();

// 3. DOM READY CONTROLLER
document.addEventListener("DOMContentLoaded", () => {
  renderGrids();
  setupRevealAnimations();
  setupSearchListeners();
  setupCheckoutForm();
  updateCartBadge();
  setupAdminForm();
  initFirebase();
});

function setupRevealAnimations() {
  const reveals = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add("active");
    });
  }, { threshold: 0.05 });
  reveals.forEach(r => observer.observe(r));
}

// 4. GRID RENDERING PIPELINE
function renderGrids() {
  const freshGrid = document.getElementById("new-arrivals-grid");
  const trendingGrid = document.getElementById("best-sellers-grid");
  const freshBadge = document.getElementById("fresh-count-badge");
  const trendingBadge = document.getElementById("trending-count-badge");

  let filtered = catalogProducts;
  if (activeFilterTag !== "all") {
    const term = activeFilterTag.toLowerCase().trim();
    filtered = catalogProducts.filter(p => {
      const inTags = p.tags && p.tags.includes(term);
      const inName = p.name && p.name.toLowerCase().includes(term);
      const inDesc = p.desc && p.desc.toLowerCase().includes(term);
      return inTags || inName || inDesc;
    });
  }

  if (activeFilterTag !== "all") {
    if (freshGrid) {
      freshGrid.innerHTML = filtered.length 
        ? filtered.map(p => createCardHTML(p)).join("")
        : `<p class="text-neutral-500 py-10 text-center col-span-full font-mono-code text-xs">NO DROPS FOUND MATCHING "${activeFilterTag.toUpperCase()}".</p>`;
    }
    if (freshBadge) freshBadge.innerText = `${String(filtered.length).padStart(2, '0')} Items`;
    if (trendingGrid) trendingGrid.innerHTML = "";
    if (trendingBadge) trendingBadge.innerText = `00 Items`;
    return;
  }

  const freshItems = filtered.filter(p => p.section === "fresh");
  const trendingItems = filtered.filter(p => p.section === "trending");

  if (freshGrid) freshGrid.innerHTML = freshItems.map(p => createCardHTML(p)).join("");
  if (trendingGrid) trendingGrid.innerHTML = trendingItems.map(p => createCardHTML(p)).join("");

  if (freshBadge) freshBadge.innerText = `${String(freshItems.length).padStart(2, '0')} Items`;
  if (trendingBadge) trendingBadge.innerText = `${String(trendingItems.length).padStart(2, '0')} Items`;
}

function createCardHTML(product) {
  const selectedSize = activeSelectedSizes[product.id] || (product.sizes && product.sizes[0]) || "M";
  const sizePills = (product.sizes || ["S", "M", "L", "XL"]).map(sz => `
    <button 
      type="button" 
      onclick="event.stopPropagation(); changeSize('${product.id}', '${sz}')" 
      class="size-pill ${sz === selectedSize ? 'active' : ''}"
    >
      ${sz}
    </button>
  `).join("");

  return `
    <div class="clean-product-card justify-between cursor-pointer" id="card-${product.id}" onclick="openProductDetailsModal('${product.id}')">
      <div class="product-media">
        <img 
          src="${product.image}" 
          alt="${product.name}" 
          loading="lazy" 
          onerror="this.onerror=null; this.src='${product.fallbackImage || product.image}';" 
        />
      </div>

      <div class="pt-3.5 flex-1 flex flex-col justify-between space-y-3" onclick="event.stopPropagation()">
        <div onclick="openProductDetailsModal('${product.id}')">
          <div class="flex items-start justify-between gap-2">
            <h3 class="text-xs font-semibold uppercase tracking-wider text-white hover:text-neutral-300 transition">${product.name}</h3>
            <div class="text-right">
              <span class="text-xs font-bold text-white font-mono-code">₹${product.price}</span>
              ${product.originalPrice ? `<span class="block text-[9px] text-neutral-500 line-through font-mono-code">₹${product.originalPrice}</span>` : ''}
            </div>
          </div>
          <p class="text-[11px] text-neutral-400 mt-1 leading-relaxed line-clamp-2">${product.desc}</p>
        </div>

        <div>
          <div class="flex gap-1.5 mb-3">
            ${sizePills}
          </div>

          <button 
            type="button" 
            onclick="event.stopPropagation(); addToBag('${product.id}')" 
            class="w-full py-2.5 bg-[#141414] hover:bg-white hover:text-black border border-white/10 text-neutral-200 rounded-lg text-[10px] font-bold uppercase tracking-[0.15em] transition duration-200 cursor-pointer"
          >
            Add to Bag
          </button>
        </div>
      </div>
    </div>
  `;
}

window.changeSize = function(productId, size) {
  activeSelectedSizes[productId] = size;
  renderGrids();
};

// 5. PRODUCT DETAILS QUICK-VIEW MODAL
window.openProductDetailsModal = function(productId) {
  const product = catalogProducts.find(p => String(p.id) === String(productId));
  if (!product) return;

  const modal = document.getElementById("product-details-modal");
  const img = document.getElementById("modal-p-img");
  const name = document.getElementById("modal-p-name");
  const price = document.getElementById("modal-p-price");
  const desc = document.getElementById("modal-p-desc");
  const badge = document.getElementById("modal-p-badge");
  const sizesContainer = document.getElementById("modal-p-sizes");
  const addBtn = document.getElementById("modal-p-add-btn");

  if (img) {
    img.src = product.image;
    img.onerror = () => { img.src = product.fallbackImage || product.image; };
  }
  if (name) name.innerText = product.name;
  if (price) price.innerText = `₹${product.price}`;
  if (desc) desc.innerText = product.desc;
  if (badge) badge.innerText = "240 GSM HEAVYWEIGHT // ZERO FADE";

  const currentSelectedSize = activeSelectedSizes[product.id] || (product.sizes && product.sizes[0]) || "M";
  if (sizesContainer) {
    sizesContainer.innerHTML = (product.sizes || ["S", "M", "L", "XL"]).map(sz => `
      <button 
        type="button" 
        onclick="handleModalSizeSelect('${product.id}', '${sz}', this)" 
        class="size-pill ${sz === currentSelectedSize ? 'active' : ''}"
      >
        ${sz}
      </button>
    `).join("");
  }

  if (addBtn) {
    addBtn.onclick = () => {
      addToBag(product.id);
      closeProductDetailsModal();
    };
  }

  if (modal) modal.classList.remove("hidden");
};

window.handleModalSizeSelect = function(productId, size, btn) {
  activeSelectedSizes[productId] = size;
  const container = document.getElementById("modal-p-sizes");
  if (container) {
    container.querySelectorAll(".size-pill").forEach(b => b.classList.remove("active"));
  }
  btn.classList.add("active");
  renderGrids();
};

window.closeProductDetailsModal = function() {
  const modal = document.getElementById("product-details-modal");
  if (modal) modal.classList.add("hidden");
};

// 6. CATEGORY FILTER PILLS & NAV
window.filterByTag = function(tag) {
  activeFilterTag = tag.toLowerCase().trim();
  
  const pills = document.querySelectorAll(".category-pill");
  pills.forEach(p => {
    const text = p.innerText.toLowerCase();
    if (activeFilterTag === "all" && text.includes("all")) p.classList.add("active");
    else if (text.includes(activeFilterTag)) p.classList.add("active");
    else p.classList.remove("active");
  });

  const navs = document.querySelectorAll(".nav-item");
  navs.forEach(n => {
    const text = n.innerText.toLowerCase();
    if (text === activeFilterTag || (activeFilterTag === "all" && text === "home")) {
      n.classList.add("text-white");
    } else {
      n.classList.remove("text-white");
    }
  });

  renderGrids();
  
  if (tag !== "all") {
    document.getElementById("new-arrivals")?.scrollIntoView({ behavior: "smooth" });
  }
};

function setupSearchListeners() {
  const desktopSearch = document.getElementById("search-bar");
  const mobileSearch = document.getElementById("mobile-search-bar");
  const desktopDropdown = document.getElementById("search-dropdown");
  const mobileDropdown = document.getElementById("mobile-search-dropdown");

  function handleSearch(query, dropdown) {
    if (!query) {
      dropdown.classList.add("hidden");
      return;
    }

    const matched = catalogProducts.filter(p => {
      const q = query.toLowerCase();
      return (
        p.name.toLowerCase().includes(q) ||
        p.desc.toLowerCase().includes(q) ||
        (p.tags && p.tags.some(t => t.toLowerCase().includes(q)))
      );
    });

    if (matched.length === 0) {
      dropdown.innerHTML = `<p class="p-3 text-[11px] text-neutral-500 font-mono-code">No matching drops found.</p>`;
    } else {
      dropdown.innerHTML = matched.map(p => `
        <div onclick="openProductDetailsModal('${p.id}')" class="flex items-center gap-3 p-2 hover:bg-white/5 rounded-lg cursor-pointer transition">
          <img src="${p.image}" class="w-8 h-8 rounded object-cover border border-white/10" onerror="this.src='${p.fallbackImage}'" />
          <div class="flex-1">
            <h4 class="text-[11px] font-semibold text-white truncate">${p.name}</h4>
            <span class="text-[10px] text-neutral-400 font-mono-code">₹${p.price}</span>
          </div>
        </div>
      `).join("");
    }
    dropdown.classList.remove("hidden");
  }

  if (desktopSearch && desktopDropdown) {
    desktopSearch.addEventListener("input", e => handleSearch(e.target.value.trim(), desktopDropdown));
  }
  if (mobileSearch && mobileDropdown) {
    mobileSearch.addEventListener("input", e => handleSearch(e.target.value.trim(), mobileDropdown));
  }

  document.addEventListener("click", e => {
    if (desktopDropdown && !desktopDropdown.contains(e.target) && e.target !== desktopSearch) desktopDropdown.classList.add("hidden");
    if (mobileDropdown && !mobileDropdown.contains(e.target) && e.target !== mobileSearch) mobileDropdown.classList.add("hidden");
  });
}

// 7. SHOPPING BAG & CART ENGINE
window.addToBag = function(productId) {
  const item = catalogProducts.find(p => String(p.id) === String(productId));
  if (!item) return;

  const size = activeSelectedSizes[item.id] || "M";
  const existing = cart.find(c => String(c.id) === String(item.id) && c.size === size);

  if (existing) {
    existing.qty = Number(existing.qty || 0) + 1;
  } else {
    cart.push({
      id: item.id,
      name: item.name,
      price: Number(item.price) || 399,
      image: item.image,
      fallbackImage: item.fallbackImage,
      size: size,
      qty: 1
    });
  }

  saveCart();
  updateCartBadge();
  toggleCart(true);
  showToast(`${item.name} (${size}) added to bag.`);
};

function saveCart() {
  localStorage.setItem("vehraan_cart", JSON.stringify(cart));
}

function updateCartBadge() {
  const count = cart.reduce((sum, item) => sum + (Number(item.qty) || 0), 0);
  const badge = document.getElementById("cart-badge");
  const drawerCount = document.getElementById("drawer-count");
  if (badge) badge.innerText = isNaN(count) ? 0 : count;
  if (drawerCount) drawerCount.innerText = isNaN(count) ? 0 : count;
}

window.toggleCart = function(show) {
  const drawer = document.getElementById("cart-drawer");
  const overlay = document.getElementById("cart-drawer-overlay");

  if (show) {
    renderCartItems();
    if (drawer) drawer.classList.remove("translate-x-full");
    if (overlay) overlay.classList.remove("hidden");
  } else {
    if (drawer) drawer.classList.add("translate-x-full");
    if (overlay) overlay.classList.add("hidden");
  }
};

function renderCartItems() {
  const container = document.getElementById("cart-items-container");
  const subtotalElem = document.getElementById("cart-subtotal-price");
  const totalElem = document.getElementById("cart-total-price");

  if (!container) return;

  if (!cart || cart.length === 0) {
    container.innerHTML = `<p class="py-12 text-center text-xs text-neutral-500 font-mono-code">Your bag is empty.</p>`;
    if (subtotalElem) subtotalElem.innerText = "₹0";
    if (totalElem) totalElem.innerText = `₹${FLAT_DELIVERY_FEE}`;
    return;
  }

  container.innerHTML = cart.map((item, idx) => {
    const itemPrice = Number(item.price) || 399;
    const itemQty = Number(item.qty) || 1;
    return `
      <div class="flex items-center gap-3 p-2.5 bg-[#0e0e0e] border border-white/5 rounded-xl">
        <img src="${item.image}" alt="${item.name}" class="w-12 h-14 object-cover rounded-lg border border-white/10" onerror="this.src='${item.fallbackImage || item.image}'" />
        <div class="flex-1 min-w-0">
          <h4 class="text-xs font-semibold text-white truncate">${item.name}</h4>
          <p class="text-[10px] text-neutral-400 font-mono-code">Size: <strong class="text-white">${item.size}</strong> | ₹${itemPrice}</p>
          <div class="flex items-center gap-2 mt-1.5">
            <button type="button" onclick="updateQty(${idx}, -1)" class="w-5 h-5 flex items-center justify-center bg-white/10 hover:bg-white/20 text-white rounded text-xs cursor-pointer">-</button>
            <span class="text-xs font-mono-code">${itemQty}</span>
            <button type="button" onclick="updateQty(${idx}, 1)" class="w-5 h-5 flex items-center justify-center bg-white/10 hover:bg-white/20 text-white rounded text-xs cursor-pointer">+</button>
          </div>
        </div>
        <button type="button" onclick="removeCartItem(${idx})" class="text-neutral-500 hover:text-white text-sm p-1 cursor-pointer">✕</button>
      </div>
    `;
  }).join("");

  const subtotal = cart.reduce((sum, item) => sum + ((Number(item.price) || 399) * (Number(item.qty) || 1)), 0);
  const total = subtotal + FLAT_DELIVERY_FEE;

  if (subtotalElem) subtotalElem.innerText = `₹${isNaN(subtotal) ? 0 : subtotal}`;
  if (totalElem) totalElem.innerText = `₹${isNaN(total) ? FLAT_DELIVERY_FEE : total}`;
}

window.updateQty = function(index, delta) {
  if (!cart[index]) return;
  cart[index].qty = (Number(cart[index].qty) || 1) + delta;
  if (cart[index].qty <= 0) cart.splice(index, 1);
  saveCart();
  updateCartBadge();
  renderCartItems();
};

window.removeCartItem = function(index) {
  cart.splice(index, 1);
  saveCart();
  updateCartBadge();
  renderCartItems();
};

// 8. CHECKOUT & WHATSAPP DISPATCH
window.openCheckoutModal = function() {
  if (!cart || cart.length === 0) {
    showToast("Please add items to your bag first.");
    return;
  }
  toggleCart(false);
  const modal = document.getElementById("checkout-modal");
  const finalAmountElem = document.getElementById("checkout-final-amount");
  const subtotal = cart.reduce((sum, item) => sum + ((Number(item.price) || 399) * (Number(item.qty) || 1)), 0);
  const total = subtotal + FLAT_DELIVERY_FEE;
  
  if (finalAmountElem) finalAmountElem.innerText = `₹${isNaN(total) ? FLAT_DELIVERY_FEE : total}`;
  if (modal) modal.classList.remove("hidden");
};

window.closeCheckoutModal = function() {
  document.getElementById("checkout-modal")?.classList.add("hidden");
};

function setupCheckoutForm() {
  const form = document.getElementById("checkout-form");
  if (!form) return;

  form.addEventListener("submit", async e => {
    e.preventDefault();

    const name = document.getElementById("order-name").value.trim();
    const phone = document.getElementById("order-phone").value.trim();
    const email = document.getElementById("order-email").value.trim();
    const ig = document.getElementById("order-instagram")?.value.trim() || "N/A";
    const address = document.getElementById("order-address").value.trim();

    const subtotal = cart.reduce((sum, item) => sum + ((Number(item.price) || 399) * (Number(item.qty) || 1)), 0);
    const total = subtotal + FLAT_DELIVERY_FEE;

    const orderPayload = {
      name, phone, email, ig, address,
      items: cart,
      subtotal,
      deliveryFee: FLAT_DELIVERY_FEE,
      totalAmount: total,
      payment: "Cash on Delivery (COD)",
      createdAt: new Date().toISOString()
    };

    try {
      if (typeof firebase !== "undefined" && firebase.firestore) {
        await firebase.firestore().collection("orders").add(orderPayload);
      }
    } catch (err) {
      console.warn("Firestore sync skipped:", err.message);
    }

    const itemsList = cart.map(i => `• ${i.name} [Size: ${i.size}] x${i.qty} - ₹${(Number(i.price) || 399) * (Number(i.qty) || 1)}`).join("%0A");
    const waMessage = `*VEHRAAN COD ORDER DISPATCH*%0A%0A` +
      `*Name:* ${name}%0A` +
      `*Phone:* ${phone}%0A` +
      `*Email:* ${email}%0A` +
      `*Instagram:* ${ig}%0A` +
      `*Delivery Address:* ${address}%0A%0A` +
      `*Ordered Drops:*%0A${itemsList}%0A%0A` +
      `*Subtotal:* ₹${subtotal}%0A` +
      `*Delivery Fee:* ₹${FLAT_DELIVERY_FEE}%0A` +
      `*Net COD Amount:* ₹${total}%0A%0A` +
      `Please confirm my shipment dispatch!`;

    cart = [];
    saveCart();
    updateCartBadge();
    closeCheckoutModal();

    window.open(`https://wa.me/917400246429?text=${waMessage}`, "_blank");
  });
}

// 9. AUTHENTICATION (GOOGLE SIGN IN)
window.openAuthModal = function() {
  document.getElementById("auth-modal")?.classList.remove("hidden");
};
window.closeAuthModal = function() {
  document.getElementById("auth-modal")?.classList.add("hidden");
};

function initFirebase() {
  try {
    if (typeof firebase !== "undefined" && firebase.auth) {
      firebase.auth().onAuthStateChanged(user => {
        currentUser = user;
        const container = document.getElementById("auth-container");
        if (container) {
          if (user) {
            container.innerHTML = `
              <button onclick="handleSignOut()" class="text-neutral-300 hover:text-white uppercase tracking-wider text-[10px] sm:text-[11px] font-semibold px-2.5 py-1 sm:px-3 sm:py-1.5 border border-white/10 rounded-lg cursor-pointer">
                ${user.displayName ? user.displayName.split(" ")[0].toUpperCase() : "ACCOUNT"}
              </button>
            `;
          } else {
            container.innerHTML = `
              <button onclick="openAuthModal()" class="text-neutral-300 hover:text-white uppercase tracking-wider text-[10px] sm:text-[11px] font-semibold px-2.5 py-1 sm:px-3 sm:py-1.5 border border-white/10 rounded-lg hover:border-white/30 transition cursor-pointer">
                Sign In
              </button>
            `;
          }
        }
      });
    }
  } catch (e) {
    console.warn("Auth initialization skipped:", e.message);
  }
}

window.handleGoogleSignIn = async function() {
  try {
    if (typeof firebase !== "undefined" && firebase.auth) {
      const provider = new firebase.auth.GoogleAuthProvider();
      await firebase.auth().signInWithPopup(provider);
      closeAuthModal();
      showToast("Signed in successfully!");
    } else {
      showToast("Signed in as Member.");
      closeAuthModal();
    }
  } catch (err) {
    alert("Sign In Error: " + err.message);
  }
};

window.handleSignOut = function() {
  if (confirm("Do you want to sign out?")) {
    if (typeof firebase !== "undefined" && firebase.auth) {
      firebase.auth().signOut();
    }
  }
};

// 10. FIT MATRIX MODAL
const sizeMatrix = [
  { size: "S", chestIn: "40", lengthIn: "28", chestCm: "101.6", lengthCm: "71.1", drape: "Classic Boxy" },
  { size: "M", chestIn: "42", lengthIn: "29", chestCm: "106.7", lengthCm: "73.7", drape: "Structured Drop" },
  { size: "L", chestIn: "44", lengthIn: "30", chestCm: "111.8", lengthCm: "76.2", drape: "Heavyweight Boxy" },
  { size: "XL", chestIn: "46", lengthIn: "31", chestCm: "116.8", lengthCm: "78.7", drape: "Oversized Street" },
  { size: "XXL", chestIn: "48", lengthIn: "32", chestCm: "121.9", lengthCm: "81.3", drape: "Maximum Drape" }
];

window.openSizeGuideModal = function() {
  renderSizeTable();
  document.getElementById("size-guide-modal")?.classList.remove("hidden");
};
window.closeSizeGuideModal = function() {
  document.getElementById("size-guide-modal")?.classList.add("hidden");
};

window.toggleSizeUnit = function(unit) {
  currentUnit = unit;
  document.getElementById("unit-in-btn")?.classList.toggle("bg-white", unit === "in");
  document.getElementById("unit-in-btn")?.classList.toggle("text-black", unit === "in");
  document.getElementById("unit-in-btn")?.classList.toggle("text-neutral-400", unit !== "in");

  document.getElementById("unit-cm-btn")?.classList.toggle("bg-white", unit === "cm");
  document.getElementById("unit-cm-btn")?.classList.toggle("text-black", unit === "cm");
  document.getElementById("unit-cm-btn")?.classList.toggle("text-neutral-400", unit !== "cm");

  renderSizeTable();
};

function renderSizeTable() {
  const tbody = document.getElementById("size-table-body");
  const thChest = document.getElementById("th-chest");
  const thLength = document.getElementById("th-length");

  if (thChest) thChest.innerText = currentUnit === "in" ? "Chest (IN)" : "Chest (CM)";
  if (thLength) thLength.innerText = currentUnit === "in" ? "Length (IN)" : "Length (CM)";

  if (tbody) {
    tbody.innerHTML = sizeMatrix.map(row => `
      <tr class="hover:bg-white/5 transition">
        <td class="p-3 font-bold text-white">${row.size}</td>
        <td class="p-3">${currentUnit === "in" ? row.chestIn : row.chestCm}</td>
        <td class="p-3">${currentUnit === "in" ? row.lengthIn : row.lengthCm}</td>
        <td class="p-3 text-neutral-400">${row.drape}</td>
      </tr>
    `).join("");
  }
}

// 11. POLICY MODAL
const policyContent = {
  about: {
    title: "About VEHRAAN Studio",
    body: "<p>VEHRAAN is an independent contemporary Indian luxury streetwear imprint. Every garment is crafted using 240 GSM bio-washed heavyweight cotton, tailored with reinforced drop-shoulders and high-density zero-fade screen graphics.</p>"
  },
  shipping: {
    title: "Shipping & Dispatch",
    body: "<p>We provide Cash on Delivery (COD) services across all India pincodes. Orders are processed within 24–48 hours and shipped via express courier with a flat ₹100 dispatch charge.</p>"
  },
  returns: {
    title: "Returns & Exchanges",
    body: "<p>We offer a 7-day doorstep size replacement policy if the garment fit does not match your preference. Products must remain unworn with original tags attached.</p>"
  }
};

window.openPolicyModal = function(type) {
  const p = policyContent[type];
  if (!p) return;
  document.getElementById("policy-modal-title").innerText = p.title;
  document.getElementById("policy-modal-body").innerHTML = p.body;
  document.getElementById("policy-modal")?.classList.remove("hidden");
};
window.closePolicyModal = function() {
  document.getElementById("policy-modal")?.classList.add("hidden");
};

// 12. STUDIO CMS (SECRET PIN: 656565)
window.triggerAdminAccess = function() {
  const pin = prompt("ENTER STUDIO CMS MASTER PASSCODE:");
  if (pin === "656565") {
    document.getElementById("admin-modal")?.classList.remove("hidden");
    switchAdminTab("add-product");
  } else if (pin !== null) {
    alert("ACCESS DENIED: Invalid Passcode.");
  }
};

window.closeAdminModal = function() {
  document.getElementById("admin-modal")?.classList.add("hidden");
};

window.switchAdminTab = function(tab) {
  document.getElementById("admin-tab-add")?.classList.toggle("hidden", tab !== "add-product");
  document.getElementById("admin-tab-manage")?.classList.toggle("hidden", tab !== "manage-products");
  document.getElementById("admin-tab-orders")?.classList.toggle("hidden", tab !== "view-orders");

  if (tab === "manage-products") loadManageProducts();
  if (tab === "view-orders") loadAdminOrders();
};

function setupAdminForm() {
  const form = document.getElementById("admin-add-product-form");
  const fileInput = document.getElementById("adm-file-input");
  const previewBox = document.getElementById("adm-preview-box");
  const previewImg = document.getElementById("adm-preview-img");

  if (fileInput) {
    fileInput.addEventListener("change", e => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = ev => {
          if (previewImg) previewImg.src = ev.target.result;
          if (previewBox) previewBox.classList.remove("hidden");
        };
        reader.readAsDataURL(file);
      }
    });
  }

  if (form) {
    form.addEventListener("submit", async e => {
      e.preventDefault();
      const name = document.getElementById("adm-name").value.trim();
      const section = document.getElementById("adm-section").value;
      const price = Number(document.getElementById("adm-price").value) || 399;
      const origPrice = Number(document.getElementById("adm-orig-price").value) || 799;
      const desc = document.getElementById("adm-desc").value.trim() || "Heavyweight 240 GSM combed cotton.";
      const imgUrl = document.getElementById("adm-image-url").value.trim();
      const uploadedSrc = previewImg?.src;

      const newDrop = {
        id: `veh-${Date.now().toString().slice(-4)}`,
        name,
        price,
        originalPrice: origPrice,
        image: uploadedSrc || imgUrl || "images/tee-1.jpg",
        fallbackImage: "images/tee-1.jpg",
        desc,
        sizes: ["S", "M", "L", "XL"],
        section,
        tags: [section, "unisex", "tee", "drop", "oversized"]
      };

      catalogProducts.unshift(newDrop);
      renderGrids();
      form.reset();
      if (previewBox) previewBox.classList.add("hidden");
      showToast(`Published "${name}" to live storefront!`);
      closeAdminModal();
    });
  }
}

function loadManageProducts() {
  const container = document.getElementById("admin-product-list");
  if (!container) return;
  container.innerHTML = catalogProducts.map((p, idx) => `
    <div class="flex items-center justify-between p-3 bg-[#141414] border border-white/5 rounded-xl">
      <div class="flex items-center gap-3">
        <img src="${p.image}" class="w-10 h-10 object-cover rounded border border-white/10" onerror="this.src='images/tee-1.jpg'" />
        <div>
          <h4 class="text-xs font-semibold text-white">${p.name}</h4>
          <span class="text-[10px] text-neutral-400 font-mono-code">₹${p.price} | Section: ${p.section}</span>
        </div>
      </div>
      <button onclick="deleteProduct(${idx})" class="px-3 py-1 bg-red-500/10 hover:bg-red-500/20 text-red-400 text-xs rounded border border-red-500/20 cursor-pointer">Delete</button>
    </div>
  `).join("");
}

window.deleteProduct = function(index) {
  if (confirm(`Remove "${catalogProducts[index].name}" from store?`)) {
    catalogProducts.splice(index, 1);
    renderGrids();
    loadManageProducts();
    showToast("Product removed.");
  }
};

async function loadAdminOrders() {
  const container = document.getElementById("admin-orders-table");
  if (!container) return;
  container.innerHTML = `<p class="text-xs text-neutral-500 font-mono-code">Fetching orders...</p>`;

  try {
    if (typeof firebase !== "undefined" && firebase.firestore) {
      const snap = await firebase.firestore().collection("orders").orderBy("createdAt", "desc").get();
      if (snap.empty) {
        container.innerHTML = `<p class="text-xs text-neutral-500 font-mono-code">No orders logged in Firestore yet.</p>`;
        return;
      }
      container.innerHTML = snap.docs.map(doc => {
        const o = doc.data();
        return `
          <div class="p-3.5 bg-[#141414] border border-white/10 rounded-xl space-y-1">
            <div class="flex justify-between text-xs font-bold text-white font-mono-code">
              <span>${o.name} (${o.phone})</span>
              <span class="text-emerald-400">₹${o.totalAmount} COD</span>
            </div>
            <p class="text-[11px] text-neutral-400">${o.address}</p>
            <p class="text-[10px] text-neutral-500 font-mono-code">${(o.items || []).map(i => `${i.name} [${i.size}] x${i.qty}`).join(", ")}</p>
          </div>
        `;
      }).join("");
    } else {
      container.innerHTML = `<p class="text-xs text-neutral-500 font-mono-code">Firestore offline.</p>`;
    }
  } catch (err) {
    container.innerHTML = `<p class="text-xs text-neutral-500 font-mono-code">Error: ${err.message}</p>`;
  }
}

// 13. GLOBAL TOAST HELPER
window.showToast = function(msg) {
  const toast = document.getElementById("toast");
  const toastMsg = document.getElementById("toast-msg");
  if (!toast || !toastMsg) return;

  toastMsg.innerText = msg;
  toast.classList.remove("opacity-0", "translate-y-20");
  toast.classList.add("opacity-100", "translate-y-0");

  setTimeout(() => {
    toast.classList.remove("opacity-100", "translate-y-0");
    toast.classList.add("opacity-0", "translate-y-20");
  }, 2500);
};
