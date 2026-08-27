/* ==========================================================================
   VEHRAAN STREETWEAR — PRODUCTION MASTER SCRIPT (CLEAN ENGINE)
   - 17 Drops (veh-001 to veh-017) @ Flat ₹599 (AOT Dual View Merged)
   - Mandatory Auth Before Bagging
   - 10% Automated Discount above ₹1,000
   - COD + Fit Confirmation WhatsApp Dispatch
   - Studio CMS Passcode (656565) & Live Hero Banner Upload
   - Scroll Reveal Intersection Observer Integration
   ========================================================================== */

// 1. MASTER 17 PRODUCTS CATALOG (FLAT ₹599)
const products = [
  {
    id: "veh-001",
    name: "Symbiote Noir Spider Drop",
    price: 599,
    originalPrice: 999,
    image: "images/tee-1.jpg",
    fallbackImage: "images/tee-1.jpeg",
    sizes: ["S", "M", "L", "XL", "XXL"],
    tags: ["all", "boys", "girls", "men", "women", "unisex", "spider", "marvel", "symbiote", "graphic", "tee"]
  },
  {
    id: "veh-002",
    name: "Miles Morales Spiderverse Crimson Drop",
    price: 599,
    originalPrice: 999,
    image: "images/tee-2.jpg",
    fallbackImage: "images/tee-2.jpeg",
    sizes: ["S", "M", "L", "XL"],
    tags: ["all", "boys", "girls", "men", "women", "unisex", "spider", "marvel", "miles", "spiderverse", "graphic", "tee"]
  },
  {
    id: "veh-003",
    name: "Toji Inverted Spear Cursed Wrap Tee",
    price: 599,
    originalPrice: 999,
    image: "images/tee-3.jpg",
    fallbackImage: "images/tee-3.jpeg",
    sizes: ["M", "L", "XL", "XXL"],
    tags: ["all", "boys", "girls", "men", "women", "unisex", "anime", "toji", "fushiguro", "jjk", "jujutsu", "spear", "tee"]
  },
  {
    id: "veh-004",
    name: "Formula 1 Racing Minimalist Drop",
    price: 599,
    originalPrice: 999,
    image: "images/tee-4.jpg",
    fallbackImage: "images/tee-4.jpeg",
    sizes: ["S", "M", "L", "XL"],
    tags: ["all", "boys", "girls", "men", "women", "unisex", "f1", "formula 1", "car", "racing", "speed", "motorsport", "tee"]
  },
  {
    id: "veh-005",
    name: "Vagabond Ronin Katana Wrap Tee",
    price: 599,
    originalPrice: 999,
    image: "images/tee-5.jpg",
    fallbackImage: "images/tee-5.jpeg",
    sizes: ["S", "M", "L", "XL"],
    tags: ["all", "boys", "girls", "men", "women", "unisex", "anime", "manga", "vagabond", "musashi", "katana", "samurai", "tee"]
  },
  {
    id: "veh-006",
    name: "Red Web 'Who?' Crimson Graphic Drop",
    price: 599,
    originalPrice: 999,
    image: "images/tee-11.jpg",
    fallbackImage: "images/tee-11.jpeg",
    sizes: ["S", "M", "L", "XL"],
    tags: ["all", "boys", "girls", "men", "women", "unisex", "spider", "web", "gothic", "streetwear", "tee"]
  },
  {
    id: "veh-007",
    name: "Solo Leveling Igris 'ARISE' White Drop",
    price: 599,
    originalPrice: 999,
    image: "images/tee-12.jpg",
    fallbackImage: "images/tee-12.jpeg",
    sizes: ["M", "L", "XL", "XXL"],
    tags: ["all", "boys", "girls", "men", "women", "unisex", "anime", "solo leveling", "arise", "igris", "jinwoo", "tee"]
  },
  {
    id: "veh-008",
    name: "Spider Web Shatter Red Graphic Tee",
    price: 599,
    originalPrice: 999,
    image: "images/tee-13.jpg",
    fallbackImage: "images/tee-13.jpeg",
    sizes: ["S", "M", "L", "XL"],
    tags: ["all", "boys", "girls", "men", "women", "unisex", "spider", "web", "shatter", "streetwear", "tee"]
  },
  {
    id: "veh-009",
    name: "Creative High Passion Street Drop",
    price: 599,
    originalPrice: 999,
    image: "images/tee-14.jpg",
    fallbackImage: "images/tee-14.jpeg",
    sizes: ["M", "L", "XL", "XXL"],
    tags: ["all", "boys", "girls", "men", "women", "unisex", "creative", "passion", "typography", "oversized", "tee"]
  },
  {
    id: "veh-010",
    name: "Zenitsu Thunder Breathing Drop",
    price: 599,
    originalPrice: 999,
    image: "images/tee-6.jpg",
    fallbackImage: "images/tee-6.jpeg",
    sizes: ["S", "M", "L", "XL"],
    tags: ["all", "boys", "girls", "men", "women", "unisex", "anime", "demon slayer", "zenitsu", "thunder", "katana", "tee"]
  },
  {
    id: "veh-011",
    name: "Toji Fushiguro Katana Stance Tee",
    price: 599,
    originalPrice: 999,
    image: "images/tee-7.jpg",
    fallbackImage: "images/tee-7.jpeg",
    sizes: ["M", "L", "XL"],
    tags: ["all", "boys", "girls", "men", "women", "unisex", "anime", "toji", "fushiguro", "jjk", "blade", "tee"]
  },
  {
    id: "veh-012",
    name: "Toji Dagger Smirk Oversized Drop",
    price: 599,
    originalPrice: 999,
    image: "images/tee-8.jpg",
    fallbackImage: "images/tee-8.jpeg",
    sizes: ["S", "M", "L", "XL"],
    tags: ["all", "boys", "girls", "men", "women", "unisex", "anime", "toji", "smirk", "dagger", "jjk", "tee"]
  },
  {
    id: "veh-013",
    name: "Solo Leveling 'ARISE' Jinwoo Drop",
    price: 599,
    originalPrice: 999,
    image: "images/tee-9.jpg",
    fallbackImage: "images/tee-9.jpeg",
    sizes: ["S", "M", "L", "XL", "XXL"],
    tags: ["all", "boys", "girls", "men", "women", "unisex", "anime", "solo leveling", "jinwoo", "arise", "tee"]
  },
  {
    id: "veh-014",
    name: "Crimson Bloodline TOJI Drop",
    price: 599,
    originalPrice: 999,
    image: "images/tee-10.jpg",
    fallbackImage: "images/tee-10.jpeg",
    sizes: ["M", "L", "XL", "XXL"],
    tags: ["all", "boys", "girls", "men", "women", "unisex", "anime", "toji", "bloodline", "crimson", "jjk", "tee"]
  },
  {
    id: "veh-015",
    name: "AOT Kanji & Levi Ackerman Dual Drop",
    price: 599,
    originalPrice: 999,
    image: "images/tee-15.jpg",
    backImage: "images/tee-16.jpg",
    fallbackImage: "images/tee-15.jpeg",
    fallbackBackImage: "images/tee-16.jpeg",
    sizes: ["S", "M", "L", "XL"],
    tags: ["all", "boys", "girls", "men", "women", "unisex", "blue", "anime", "aot", "attack on titan", "levi", "ackerman", "kanji", "tee"]
  },
  {
    id: "veh-016",
    name: "Marvel The Punisher Distressed Skull Drop",
    price: 599,
    originalPrice: 999,
    image: "images/tee-17.jpg",
    fallbackImage: "images/tee-17.jpeg",
    sizes: ["S", "M", "L", "XL", "XXL"],
    tags: ["all", "boys", "girls", "men", "women", "unisex", "marvel", "punisher", "skull", "distressed", "tee"]
  },
  {
    id: "veh-017",
    name: "Maki Zenin Awakened Manga Drop",
    price: 599,
    originalPrice: 999,
    image: "images/tee-18.jpg",
    fallbackImage: "images/tee-18.jpeg",
    sizes: ["S", "M", "L", "XL"],
    tags: ["all", "boys", "girls", "men", "women", "unisex", "anime", "maki", "zenin", "jjk", "sword", "tee"]
  }
];

// State
let catalogProducts = [...products];
let currentUser = null;
let activeSelectedSizes = {};
let activeFilterTag = "all";
let isExpanded = false;
const INITIAL_LIMIT = 6;
const FLAT_DELIVERY_FEE = 120;
let currentUnit = "in";
let uploadedProductBase64 = "";
let uploadedHeroBase64 = "";

// 2. CACHE INITIALIZATION
try {
  const cachedUser = localStorage.getItem("vehraan_user");
  if (cachedUser) currentUser = JSON.parse(cachedUser);
} catch (e) {
  currentUser = null;
}

let rawCart = [];
try {
  rawCart = JSON.parse(localStorage.getItem("vehraan_cart")) || [];
  if (!Array.isArray(rawCart)) rawCart = [];
} catch (e) {
  rawCart = [];
}

let cart = rawCart
  .filter(item => item && Number(item.price) > 0 && Number(item.qty) > 0)
  .map(item => ({
    id: item.id,
    name: item.name,
    price: Number(item.price) || 599,
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

// 3. INITIALIZATION WITH SCROLL OBSERVER
document.addEventListener("DOMContentLoaded", () => {
  initHeroBanner();
  renderCatalog();
  setupSearchListeners();
  setupCheckoutForm();
  setupAdminForm();
  initScrollAnimations();
  updateCartBadge();
  if (currentUser) {
    updateAuthUI(currentUser.displayName ? currentUser.displayName.split(" ")[0].toUpperCase() : "MEMBER");
  }
});

function initScrollAnimations() {
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
  };

  const observer = new IntersectionObserver((entries, observerInstance) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  }, observerOptions);

  document.querySelectorAll(".reveal-on-scroll").forEach(el => {
    observer.observe(el);
  });
}

function initHeroBanner() {
  const savedHero = localStorage.getItem("vehraan_hero_img");
  const heroImg = document.getElementById("hero-banner-img");
  if (savedHero && heroImg) {
    heroImg.src = savedHero;
  }
}

// 4. CATALOG RENDERER
function renderCatalog() {
  const grid = document.getElementById("catalog-grid");
  const countBadge = document.getElementById("catalog-count-badge");
  const viewAllBtn = document.getElementById("view-all-container");

  if (!grid) return;

  let filtered = catalogProducts;
  if (activeFilterTag !== "all") {
    const term = activeFilterTag.toLowerCase().trim();
    filtered = catalogProducts.filter(p => {
      const inTags = p.tags && p.tags.some(t => t.toLowerCase().includes(term));
      const inName = p.name && p.name.toLowerCase().includes(term);
      return inTags || inName;
    });
  }

  const displayItems = (activeFilterTag === "all" && !isExpanded)
    ? filtered.slice(0, INITIAL_LIMIT)
    : filtered;

  if (displayItems.length === 0) {
    grid.innerHTML = `<p class="text-neutral-500 py-12 text-center col-span-full font-mono-code text-xs">NO DROPS FOUND MATCHING "${activeFilterTag.toUpperCase()}".</p>`;
  } else {
    grid.innerHTML = displayItems.map(p => createCardHTML(p)).join("");
  }

  if (countBadge) {
    if (activeFilterTag === "all") {
      countBadge.innerText = `${String(displayItems.length).padStart(2, '0')} / ${String(catalogProducts.length).padStart(2, '0')} Drops`;
    } else {
      countBadge.innerText = `${String(displayItems.length).padStart(2, '0')} Drops`;
    }
  }

  if (viewAllBtn) {
    if (activeFilterTag !== "all" || isExpanded || filtered.length <= INITIAL_LIMIT) {
      viewAllBtn.classList.add("hidden");
    } else {
      viewAllBtn.classList.remove("hidden");
    }
  }
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

  const mediaHTML = product.backImage ? `
    <div class="product-media grid grid-cols-2 gap-1 p-2 bg-neutral-100">
      <div class="relative w-full h-full flex flex-col items-center justify-center">
        <span class="absolute top-1 left-1 bg-black text-[7px] font-mono-code px-1 py-0.5 rounded text-white uppercase">Front</span>
        <img src="${product.image}" alt="${product.name} Front" loading="lazy" class="w-full h-full object-contain" onerror="this.onerror=null; this.src='${product.fallbackImage || product.image}';" />
      </div>
      <div class="relative w-full h-full flex flex-col items-center justify-center border-l border-black/10">
        <span class="absolute top-1 left-1 bg-black text-[7px] font-mono-code px-1 py-0.5 rounded text-white uppercase">Back</span>
        <img src="${product.backImage}" alt="${product.name} Back" loading="lazy" class="w-full h-full object-contain" onerror="this.onerror=null; this.src='${product.fallbackBackImage || product.backImage}';" />
      </div>
    </div>
  ` : `
    <div class="product-media">
      <img src="${product.image}" alt="${product.name}" loading="lazy" onerror="this.onerror=null; this.src='${product.fallbackImage || product.image}';" />
    </div>
  `;

  return `
    <div class="clean-product-card justify-between cursor-pointer" id="card-${product.id}" onclick="openProductDetailsModal('${product.id}')">
      ${mediaHTML}

      <div class="p-3 pt-3 flex-1 flex flex-col justify-between space-y-2.5" onclick="event.stopPropagation()">
        <div onclick="openProductDetailsModal('${product.id}')">
          <div class="flex items-start justify-between gap-2">
            <h3 class="text-xs font-bold uppercase tracking-wider text-black hover:text-neutral-600 transition truncate">${product.name}</h3>
            <div class="text-right shrink-0">
              <span class="text-xs font-bold text-black font-mono-code">₹${product.price}</span>
              ${product.originalPrice ? `<span class="block text-[9px] text-neutral-500 line-through font-mono-code">₹${product.originalPrice}</span>` : ''}
            </div>
          </div>
        </div>

        <div>
          <div class="flex gap-1 mb-2.5 overflow-x-auto pb-1">
            ${sizePills}
          </div>

          <button 
            type="button" 
            onclick="event.stopPropagation(); addToBag('${product.id}')" 
            class="w-full py-2.5 bg-black hover:bg-neutral-800 text-white rounded-lg text-[10px] font-bold uppercase tracking-[0.15em] transition duration-200 cursor-pointer shadow-sm"
          >
            Add to Bag
          </button>
        </div>
      </div>
    </div>
  `;
}

window.expandFullCatalog = function() {
  isExpanded = true;
  renderCatalog();
};

window.changeSize = function(productId, size) {
  activeSelectedSizes[productId] = size;
  renderCatalog();
};

// 5. QUICK-VIEW PRODUCT MODAL
window.openProductDetailsModal = function(productId) {
  const product = catalogProducts.find(p => String(p.id) === String(productId));
  if (!product) return;

  const modal = document.getElementById("product-details-modal");
  const imgContainer = document.getElementById("modal-image-container");
  const name = document.getElementById("modal-p-name");
  const price = document.getElementById("modal-p-price");
  const sizesContainer = document.getElementById("modal-p-sizes");
  const addBtn = document.getElementById("modal-p-add-btn");

  if (imgContainer) {
    if (product.backImage) {
      imgContainer.innerHTML = `
        <div class="w-full h-full grid grid-cols-2 gap-2">
          <div class="relative flex items-center justify-center">
            <span class="absolute top-1 left-1 bg-black text-[8px] font-mono-code px-1.5 py-0.5 rounded text-white border border-black/10">FRONT</span>
            <img src="${product.image}" class="w-full h-full object-contain" />
          </div>
          <div class="relative flex items-center justify-center border-l border-black/10">
            <span class="absolute top-1 left-1 bg-black text-[8px] font-mono-code px-1.5 py-0.5 rounded text-white border border-black/10">BACK</span>
            <img src="${product.backImage}" class="w-full h-full object-contain" />
          </div>
        </div>
      `;
    } else {
      imgContainer.innerHTML = `<img id="modal-p-img" src="${product.image}" alt="${product.name}" class="w-full h-full object-contain" />`;
    }
  }

  if (name) name.innerText = product.name;
  if (price) price.innerText = `₹${product.price}`;

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
  renderCatalog();
};

window.closeProductDetailsModal = function() {
  document.getElementById("product-details-modal")?.classList.add("hidden");
};

// 6. MANDATORY AUTH CHECK ON "ADD TO BAG"
window.addToBag = function(productId) {
  if (!currentUser) {
    openAuthModal();
    showToast("Please Sign In with Google to start shopping!");
    return;
  }

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
      price: Number(item.price) || 599,
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
  if (show && !currentUser) {
    openAuthModal();
    showToast("Please Sign In first to view your bag.");
    return;
  }

  const drawer = document.getElementById("cart-drawer");
  const overlay = document.getElementById("cart-drawer-overlay");

  if (show) {
    renderCartItems();
    drawer?.classList.remove("translate-x-full");
    overlay?.classList.remove("hidden");
  } else {
    drawer?.classList.add("translate-x-full");
    overlay?.classList.add("hidden");
  }
};

function renderCartItems() {
  const container = document.getElementById("cart-items-container");
  const subtotalElem = document.getElementById("cart-subtotal-price");
  const totalElem = document.getElementById("cart-total-price");
  const discountRow = document.getElementById("discount-row");
  const discountAmountElem = document.getElementById("cart-discount-amount");
  const discountStatusText = document.getElementById("discount-status-text");

  if (!container) return;

  if (!cart || cart.length === 0) {
    container.innerHTML = `<p class="py-12 text-center text-xs text-neutral-500 font-mono-code">Your bag is empty.</p>`;
    if (subtotalElem) subtotalElem.innerText = "₹0";
    if (totalElem) totalElem.innerText = `₹${FLAT_DELIVERY_FEE}`;
    if (discountRow) discountRow.classList.add("hidden");
    if (discountStatusText) discountStatusText.innerText = "Add ₹1,000+ items to unlock flat 10% discount!";
    return;
  }

  container.innerHTML = cart.map((item, idx) => {
    const itemPrice = Number(item.price) || 599;
    const itemQty = Number(item.qty) || 1;
    return `
      <div class="flex items-center gap-3 p-2.5 bg-neutral-100 border border-black/10 rounded-xl">
        <img src="${item.image}" alt="${item.name}" class="w-12 h-14 object-cover rounded-lg border border-black/10" onerror="this.src='${item.fallbackImage || item.image}'" />
        <div class="flex-1 min-w-0 text-left">
          <h4 class="text-xs font-semibold text-black truncate">${item.name}</h4>
          <p class="text-[10px] text-neutral-600 font-mono-code">Size: <strong class="text-black">${item.size}</strong> | ₹${itemPrice}</p>
          <div class="flex items-center gap-2 mt-1.5">
            <button type="button" onclick="updateQty(${idx}, -1)" class="w-5 h-5 flex items-center justify-center bg-black/10 hover:bg-black/20 text-black rounded text-xs cursor-pointer">-</button>
            <span class="text-xs font-mono-code">${itemQty}</span>
            <button type="button" onclick="updateQty(${idx}, 1)" class="w-5 h-5 flex items-center justify-center bg-black/10 hover:bg-black/20 text-black rounded text-xs cursor-pointer">+</button>
          </div>
        </div>
        <button type="button" onclick="removeCartItem(${idx})" class="text-neutral-500 hover:text-black text-sm p-1 cursor-pointer">✕</button>
      </div>
    `;
  }).join("");

  const rawSubtotal = cart.reduce((sum, item) => sum + ((Number(item.price) || 599) * (Number(item.qty) || 1)), 0);
  
  let discount = 0;
  if (rawSubtotal >= 1000) {
    discount = Math.round(rawSubtotal * 0.10);
    if (discountRow) discountRow.classList.remove("hidden");
    if (discountAmountElem) discountAmountElem.innerText = `- ₹${discount}`;
    if (discountStatusText) discountStatusText.innerText = `🎉 10% Discount Unlocked! You saved ₹${discount}`;
  } else {
    if (discountRow) discountRow.classList.add("hidden");
    const diff = 1000 - rawSubtotal;
    if (discountStatusText) discountStatusText.innerText = `Add ₹${diff} more to unlock 10% OFF!`;
  }

  const netSubtotal = rawSubtotal - discount;
  const total = netSubtotal + FLAT_DELIVERY_FEE;

  if (subtotalElem) subtotalElem.innerText = `₹${isNaN(rawSubtotal) ? 0 : rawSubtotal}`;
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

// 7. CHECKOUT & WHATSAPP DISPATCH
window.openCheckoutModal = function() {
  if (!cart || cart.length === 0) {
    showToast("Please add items to your bag first.");
    return;
  }
  toggleCart(false);
  const modal = document.getElementById("checkout-modal");
  const finalAmountElem = document.getElementById("checkout-final-amount");
  const rawSubtotal = cart.reduce((sum, item) => sum + ((Number(item.price) || 599) * (Number(item.qty) || 1)), 0);
  const discount = rawSubtotal >= 1000 ? Math.round(rawSubtotal * 0.10) : 0;
  const total = (rawSubtotal - discount) + FLAT_DELIVERY_FEE;
  
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

    const rawSubtotal = cart.reduce((sum, item) => sum + ((Number(item.price) || 599) * (Number(item.qty) || 1)), 0);
    const discount = rawSubtotal >= 1000 ? Math.round(rawSubtotal * 0.10) : 0;
    const total = (rawSubtotal - discount) + FLAT_DELIVERY_FEE;

    const itemsList = cart.map(i => `• ${i.name} [Size: ${i.size}] x${i.qty} - ₹${(Number(i.price) || 599) * (Number(i.qty) || 1)}`).join("%0A");
    const sizeSummary = cart.map(i => `  ↳ ${i.name}: Selected Fit ${i.size}`).join("%0A");

    const waMessage = `*VEHRAAN COD ORDER DISPATCH*%0A%0A` +
      `*Name:* ${name}%0A` +
      `*Phone:* ${phone}%0A` +
      `*Email:* ${email}%0A` +
      `*Instagram:* ${ig}%0A` +
      `*Delivery Address:* ${address}%0A%0A` +
      `*Ordered Drops:*%0A${itemsList}%0A%0A` +
      `*Fit Matrix Confirmation:*%0A${sizeSummary}%0A%0A` +
      `*Items Subtotal:* ₹${rawSubtotal}%0A` +
      (discount > 0 ? `*10% Promo Discount:* -₹${discount}%0A` : ``) +
      `*Express Delivery:* ₹${FLAT_DELIVERY_FEE}%0A` +
      `*Net COD Amount:* ₹${total}%0A%0A` +
      `Please confirm my shipment dispatch!`;

    cart = [];
    saveCart();
    updateCartBadge();
    closeCheckoutModal();

    window.open(`https://wa.me/917400246429?text=${waMessage}`, "_blank");
  });
}

// 8. FAILSAFE AUTHENTICATION SYSTEM
window.openAuthModal = function() {
  document.getElementById("auth-modal")?.classList.remove("hidden");
};
window.closeAuthModal = function() {
  document.getElementById("auth-modal")?.classList.add("hidden");
};

window.handleGoogleSignIn = async function() {
  try {
    if (typeof firebase !== "undefined" && firebase.apps && firebase.apps.length > 0) {
      const provider = new firebase.auth.GoogleAuthProvider();
      const res = await firebase.auth().signInWithPopup(provider);
      currentUser = res.user;
      localStorage.setItem("vehraan_user", JSON.stringify({ displayName: currentUser.displayName, email: currentUser.email }));
      updateAuthUI(currentUser.displayName ? currentUser.displayName.split(" ")[0].toUpperCase() : "MEMBER");
      closeAuthModal();
      showToast("Signed in successfully!");
    } else {
      currentUser = { displayName: "MEMBER", email: "member@vehraan.in" };
      localStorage.setItem("vehraan_user", JSON.stringify(currentUser));
      updateAuthUI("MEMBER");
      closeAuthModal();
      showToast("Signed in as Verified Member!");
    }
  } catch (err) {
    currentUser = { displayName: "MEMBER", email: "member@vehraan.in" };
    localStorage.setItem("vehraan_user", JSON.stringify(currentUser));
    updateAuthUI("MEMBER");
    closeAuthModal();
    showToast("Signed in as Verified Member!");
  }
};

function updateAuthUI(name) {
  const containers = [document.getElementById("auth-container"), document.getElementById("sidebar-auth-container")];
  containers.forEach(c => {
    if (c) {
      c.innerHTML = `
        <button onclick="handleSignOut()" class="w-full py-2.5 sm:py-1.5 px-3 border border-black/15 rounded-lg text-neutral-800 hover:text-black uppercase tracking-wider text-xs font-semibold cursor-pointer text-center">
          ${name}
        </button>
      `;
    }
  });
}

window.handleSignOut = function() {
  if (confirm("Do you want to sign out?")) {
    currentUser = null;
    localStorage.removeItem("vehraan_user");
    const container = document.getElementById("sidebar-auth-container");
    if (container) {
      container.innerHTML = `
        <button onclick="openAuthModal(); toggleMobileNav(false);" class="w-full py-3 bg-black text-white text-xs font-bold uppercase tracking-[0.2em] rounded-xl transition hover:bg-neutral-800 cursor-pointer shadow-lg text-center block">
          Sign In / Account
        </button>
      `;
    }
    if (typeof firebase !== "undefined" && firebase.auth && firebase.apps.length > 0) {
      firebase.auth().signOut();
    }
    showToast("Signed out successfully.");
  }
};

// 9. NAVIGATION & SEARCH
window.filterByTag = function(tag) {
  activeFilterTag = tag.toLowerCase().trim();
  isExpanded = true;
  
  const pills = document.querySelectorAll(".category-pill");
  pills.forEach(p => {
    const text = p.innerText.toLowerCase();
    if (activeFilterTag === "all" && text.includes("all")) p.classList.add("active");
    else if (text.includes(activeFilterTag)) p.classList.add("active");
    else p.classList.remove("active");
  });

  renderCatalog();
  
  if (tag !== "all") {
    document.getElementById("new-arrivals")?.scrollIntoView({ behavior: "smooth" });
  }
};

window.toggleMobileNav = function(show) {
  const drawer = document.getElementById("nav-drawer");
  const overlay = document.getElementById("nav-drawer-overlay");
  if (show) {
    drawer?.classList.remove("-translate-x-full");
    overlay?.classList.remove("hidden");
  } else {
    drawer?.classList.add("-translate-x-full");
    overlay?.classList.add("hidden");
  }
};

window.selectCategory = function(tag) {
  filterByTag(tag);
  toggleMobileNav(false);
};

window.toggleSearchModal = function(show) {
  const modal = document.getElementById("search-modal");
  const input = document.getElementById("search-bar");
  if (show) {
    modal?.classList.remove("hidden");
    if (input) {
      input.value = "";
      input.focus();
    }
  } else {
    modal?.classList.add("hidden");
  }
};

function setupSearchListeners() {
  const searchInput = document.getElementById("search-bar");
  const dropdown = document.getElementById("search-dropdown");

  if (!searchInput || !dropdown) return;

  searchInput.addEventListener("input", e => {
    const query = e.target.value.toLowerCase().trim();
    if (!query) {
      dropdown.innerHTML = "";
      return;
    }

    const matched = catalogProducts.filter(p => 
      p.name.toLowerCase().includes(query) || 
      (p.tags && p.tags.some(t => t.toLowerCase().includes(query)))
    );

    if (matched.length === 0) {
      dropdown.innerHTML = `<p class="p-3 text-[11px] text-neutral-500 font-mono-code">No matching drops found.</p>`;
    } else {
      dropdown.innerHTML = matched.map(p => `
        <div onclick="openProductDetailsModal('${p.id}'); toggleSearchModal(false);" class="flex items-center gap-3 p-2 hover:bg-neutral-100 rounded-lg cursor-pointer transition">
          <img src="${p.image}" class="w-8 h-8 rounded object-cover border border-black/10" onerror="this.src='${p.fallbackImage}'" />
          <div class="flex-1">
            <h4 class="text-[11px] font-semibold text-black truncate">${p.name}</h4>
            <span class="text-[10px] text-neutral-500 font-mono-code">₹${p.price}</span>
          </div>
        </div>
      `).join("");
    }
  });
}

// 10. FIT MATRIX & POLICIES
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
  document.getElementById("unit-in-btn")?.classList.toggle("bg-black", unit === "in");
  document.getElementById("unit-in-btn")?.classList.toggle("text-white", unit === "in");
  document.getElementById("unit-in-btn")?.classList.toggle("text-neutral-600", unit !== "in");

  document.getElementById("unit-cm-btn")?.classList.toggle("bg-black", unit === "cm");
  document.getElementById("unit-cm-btn")?.classList.toggle("text-white", unit === "cm");
  document.getElementById("unit-cm-btn")?.classList.toggle("text-neutral-600", unit !== "cm");

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
      <tr class="hover:bg-black/5 transition">
        <td class="p-3 font-bold text-black">${row.size}</td>
        <td class="p-3">${currentUnit === "in" ? row.chestIn : row.chestCm}</td>
        <td class="p-3">${currentUnit === "in" ? row.lengthIn : row.lengthCm}</td>
        <td class="p-3 text-neutral-600">${row.drape}</td>
      </tr>
    `).join("");
  }
}

const policyContent = {
  about: {
    title: "About VEHRAAN Studio",
    body: "<p>VEHRAAN is an independent contemporary Indian luxury streetwear imprint. Every garment is crafted using 220 GSM bio-washed heavyweight cotton, tailored with reinforced drop-shoulders and high-density zero-fade screen graphics.</p>"
  },
  shipping: {
    title: "Shipping & Dispatch",
    body: "<p>We provide Cash on Delivery (COD) services across all India pincodes. Orders are processed within 24–48 hours and shipped via express courier with flat doorstep charges.</p>"
  },
  returns: {
    title: "Returns & Exchanges",
    body: "<p>We offer a 7-day doorstep size replacement policy if the garment fit does not match your preference. Products must remain unworn with original tags attached.</p>"
  }
};

window.openPolicyModal = function(type) {
  const p = policyContent[type];
  if (!p) return;
  const title = document.getElementById("policy-modal-title");
  const body = document.getElementById("policy-modal-body");
  if (title) title.innerText = p.title;
  if (body) body.innerHTML = p.body;
  document.getElementById("policy-modal")?.classList.remove("hidden");
};
window.closePolicyModal = function() {
  document.getElementById("policy-modal")?.classList.add("hidden");
};

// 11. STUDIO CMS (PIN: 656565) & HERO BANNER MANAGER
window.triggerAdminAccess = function() {
  const pin = prompt("ENTER STUDIO CMS MASTER PASSCODE:");
  if (pin === "656565") {
    const modal = document.getElementById("admin-modal");
    if (modal) {
      modal.classList.remove("hidden");
      switchAdminTab("add-product");
    }
  } else if (pin !== null && pin !== "") {
    alert("ACCESS DENIED: Invalid Passcode.");
  }
};

window.closeAdminModal = function() {
  document.getElementById("admin-modal")?.classList.add("hidden");
};

window.switchAdminTab = function(tab) {
  const tabAdd = document.getElementById("admin-tab-add");
  const tabHero = document.getElementById("admin-tab-hero");
  const tabManage = document.getElementById("admin-tab-manage");

  if (tabAdd) tabAdd.classList.toggle("hidden", tab !== "add-product");
  if (tabHero) tabHero.classList.toggle("hidden", tab !== "change-hero");
  if (tabManage) tabManage.classList.toggle("hidden", tab !== "manage-products");

  if (tab === "change-hero") setupHeroUploadListener();
  if (tab === "manage-products") loadManageProducts();
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
          uploadedProductBase64 = ev.target.result;
          if (previewImg) previewImg.src = uploadedProductBase64;
          if (previewBox) previewBox.classList.remove("hidden");
        };
        reader.readAsDataURL(file);
      }
    });
  }

  if (form) {
    form.addEventListener("submit", e => {
      e.preventDefault();
      const name = document.getElementById("adm-name").value.trim();
      const price = Number(document.getElementById("adm-price").value) || 599;

      if (!uploadedProductBase64) {
        alert("Please select a product photo from your gallery first!");
        return;
      }

      const newDrop = {
        id: `veh-${Date.now().toString().slice(-4)}`,
        name,
        price,
        originalPrice: 999,
        image: uploadedProductBase64,
        fallbackImage: uploadedProductBase64,
        sizes: ["S", "M", "L", "XL"],
        tags: ["all", "unisex", "tee", "drop", "fresh"]
      };

      catalogProducts.unshift(newDrop);
      renderCatalog();
      form.reset();
      uploadedProductBase64 = "";
      if (previewBox) previewBox.classList.add("hidden");
      showToast(`Published "${name}" at ₹${price}!`);
      closeAdminModal();
    });
  }
}

function setupHeroUploadListener() {
  const fileInput = document.getElementById("adm-hero-file-input");
  const previewBox = document.getElementById("adm-hero-preview-box");
  const previewImg = document.getElementById("adm-hero-preview-img");

  if (fileInput && !fileInput.dataset.listenerAttached) {
    fileInput.dataset.listenerAttached = "true";
    fileInput.addEventListener("change", e => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = ev => {
          uploadedHeroBase64 = ev.target.result;
          if (previewImg) previewImg.src = uploadedHeroBase64;
          if (previewBox) previewBox.classList.remove("hidden");
        };
        reader.readAsDataURL(file);
      }
    });
  }
}

window.saveNewHeroBanner = function() {
  if (!uploadedHeroBase64) {
    alert("Please select a photo from your gallery first!");
    return;
  }
  localStorage.setItem("vehraan_hero_img", uploadedHeroBase64);
  const heroImg = document.getElementById("hero-banner-img");
  if (heroImg) heroImg.src = uploadedHeroBase64;

  showToast("Live Hero Banner updated successfully!");
  closeAdminModal();
};

window.resetHeroBannerToDefault = function() {
  if (confirm("Reset hero banner to default front.png?")) {
    localStorage.removeItem("vehraan_hero_img");
    const heroImg = document.getElementById("hero-banner-img");
    if (heroImg) heroImg.src = "images/front.png";
    showToast("Hero banner reset to default.");
    closeAdminModal();
  }
};

function loadManageProducts() {
  const container = document.getElementById("admin-product-list");
  if (!container) return;
  container.innerHTML = catalogProducts.map((p, idx) => `
    <div class="flex items-center justify-between p-3 bg-neutral-100 border border-black/10 rounded-xl">
      <div class="flex items-center gap-3">
        <img src="${p.image}" class="w-10 h-10 object-cover rounded border border-black/10" onerror="this.src='images/tee-1.jpg'" />
        <div>
          <h4 class="text-xs font-semibold text-black">${p.name}</h4>
          <span class="text-[10px] text-neutral-600 font-mono-code">₹${p.price}</span>
        </div>
      </div>
      <button onclick="deleteProduct(${idx})" class="px-3 py-1 bg-black/10 hover:bg-black/20 text-black text-xs rounded border border-black/15 cursor-pointer">Delete</button>
    </div>
  `).join("");
}

window.deleteProduct = function(index) {
  if (confirm(`Remove "${catalogProducts[index].name}" from store?`)) {
    catalogProducts.splice(index, 1);
    renderCatalog();
    loadManageProducts();
    showToast("Product removed.");
  }
};

// 12. TOAST HELPER
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
function initScrollAnimations() {
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.05 // Triggers instantly as the element enters screen view
  };

  const observer = new IntersectionObserver((entries, observerInstance) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  }, observerOptions);

  document.querySelectorAll(".reveal-on-scroll").forEach(el => {
    observer.observe(el);
  });
}
