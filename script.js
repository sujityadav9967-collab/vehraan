/* ==========================================================================
   VEHRAAN STREETWEAR — PRODUCTION STOREFRONT SCRIPT
   - 18 Master Drops (9 Fresh Releases + 9 Trending Heavyweight Editions)
   - Bulletproof Firestore Database Sync & Fallback
   - Google Auth, Cart Drawer, COD Checkout & WhatsApp Engine
   - Secret Studio CMS Admin Panel (PIN: 656565)
   ========================================================================== */

// 1. MASTER 18 PRODUCTS CATALOG
const initialProducts = [
  // --- FRESH DROPS (1 to 9) ---
  {
    id: 1,
    code: "OVERSIZE_01",
    name: "SHADOW RONIN OVERSIZED TEE",
    price: 999,
    category: "Anime",
    gender: "Men",
    image: "images/tee-1.jpg",
    sizes: ["S", "M", "L", "XL"],
    isTrending: false,
    gsm: "240 GSM HEAVYWEIGHT"
  },
  {
    id: 2,
    code: "OVERSIZE_02",
    name: "CYBERPUNK NEO TOKYO TEE",
    price: 1099,
    category: "Anime",
    gender: "Men",
    image: "images/tee-2.jpg",
    sizes: ["M", "L", "XL"],
    isTrending: false,
    gsm: "240 GSM HEAVYWEIGHT"
  },
  {
    id: 3,
    code: "OVERSIZE_03",
    name: "ARACHNID DIMENSION 2099 TEE",
    price: 1199,
    category: "Spiderverse",
    gender: "Men",
    image: "images/tee-3.jpg",
    sizes: ["S", "M", "L", "XL"],
    isTrending: false,
    gsm: "240 GSM HEAVYWEIGHT"
  },
  {
    id: 4,
    code: "OVERSIZE_04",
    name: "MONACO APEX MOTORSPORT TEE",
    price: 1299,
    category: "Motorsport",
    gender: "Men",
    image: "images/tee-4.jpg",
    sizes: ["M", "L", "XL"],
    isTrending: false,
    gsm: "240 GSM HEAVYWEIGHT"
  },
  {
    id: 5,
    code: "OVERSIZE_05",
    name: "CURSED HOLLOW VOID TEE",
    price: 1049,
    category: "Anime",
    gender: "Women",
    image: "images/tee-5.jpg",
    sizes: ["S", "M", "L"],
    isTrending: false,
    gsm: "240 GSM HEAVYWEIGHT"
  },
  {
    id: 6,
    code: "OVERSIZE_06",
    name: "VENOM SYMBIOTE ACID TEE",
    price: 1149,
    category: "Spiderverse",
    gender: "Men",
    image: "images/tee-6.jpg",
    sizes: ["S", "M", "L", "XL"],
    isTrending: false,
    gsm: "240 GSM HEAVYWEIGHT"
  },
  {
    id: 7,
    code: "OVERSIZE_07",
    name: "GRID RUNNER TURBO TEE",
    price: 1199,
    category: "Motorsport",
    gender: "Men",
    image: "images/tee-7.jpg",
    sizes: ["M", "L", "XL"],
    isTrending: false,
    gsm: "240 GSM HEAVYWEIGHT"
  },
  {
    id: 8,
    code: "OVERSIZE_08",
    name: "ZENITH MINIMAL MONOCHROME TEE",
    price: 899,
    category: "Men",
    gender: "Men",
    image: "images/tee-8.jpg",
    sizes: ["S", "M", "L", "XL"],
    isTrending: false,
    gsm: "240 GSM HEAVYWEIGHT"
  },
  {
    id: 9,
    code: "OVERSIZE_09",
    name: "ECLIPSE CROPPED STREET TEE",
    price: 949,
    category: "Women",
    gender: "Women",
    image: "images/tee-9.jpg",
    sizes: ["XS", "S", "M", "L"],
    isTrending: false,
    gsm: "240 GSM HEAVYWEIGHT"
  },

  // --- TRENDING HEAVYWEIGHT DROPS (10 to 18) ---
  {
    id: 10,
    code: "OVERSIZE_10",
    name: "TOJI CURSED INVENTORY TEE",
    price: 1299,
    category: "Anime",
    gender: "Men",
    image: "images/tee-10.jpg",
    sizes: ["S", "M", "L", "XL"],
    isTrending: true,
    gsm: "240 GSM HEAVYWEIGHT"
  },
  {
    id: 11,
    code: "OVERSIZE_11",
    name: "MILES MORALES MULTIVERSE TEE",
    price: 1249,
    category: "Spiderverse",
    gender: "Men",
    image: "images/tee-11.jpg",
    sizes: ["S", "M", "L", "XL"],
    isTrending: true,
    gsm: "240 GSM HEAVYWEIGHT"
  },
  {
    id: 12,
    code: "OVERSIZE_12",
    name: "RED BULL PIT CREW EDITION",
    price: 1399,
    category: "Motorsport",
    gender: "Men",
    image: "images/tee-12.jpg",
    sizes: ["M", "L", "XL"],
    isTrending: true,
    gsm: "240 GSM HEAVYWEIGHT"
  },
  {
    id: 13,
    code: "OVERSIZE_13",
    name: "BERSERK SACRIFICE BRAND TEE",
    price: 1199,
    category: "Anime",
    gender: "Men",
    image: "images/tee-13.jpg",
    sizes: ["S", "M", "L", "XL"],
    isTrending: true,
    gsm: "240 GSM HEAVYWEIGHT"
  },
  {
    id: 14,
    code: "OVERSIZE_14",
    name: "GHOST SPIDER GWEN PASTEL TEE",
    price: 1149,
    category: "Spiderverse",
    gender: "Women",
    image: "images/tee-14.jpg",
    sizes: ["S", "M", "L"],
    isTrending: true,
    gsm: "240 GSM HEAVYWEIGHT"
  },
  {
    id: 15,
    code: "OVERSIZE_15",
    name: "FERRARI SCUDERIA VINTAGE TEE",
    price: 1349,
    category: "Motorsport",
    gender: "Men",
    image: "images/tee-15.jpg",
    sizes: ["M", "L", "XL"],
    isTrending: true,
    gsm: "240 GSM HEAVYWEIGHT"
  },
  {
    id: 16,
    code: "OVERSIZE_16",
    name: "AKIRA NEO CAPSULE TEE",
    price: 1299,
    category: "Anime",
    gender: "Men",
    image: "images/tee-16.jpg",
    sizes: ["S", "M", "L", "XL"],
    isTrending: true,
    gsm: "240 GSM HEAVYWEIGHT"
  },
  {
    id: 17,
    code: "OVERSIZE_17",
    name: "NOIR DETECTIVE SHADOW TEE",
    price: 1099,
    category: "Spiderverse",
    gender: "Men",
    image: "images/tee-17.jpg",
    sizes: ["S", "M", "L", "XL"],
    isTrending: true,
    gsm: "240 GSM HEAVYWEIGHT"
  },
  {
    id: 18,
    code: "OVERSIZE_18",
    name: "NURBURGRING TRACK RECORD TEE",
    price: 1299,
    category: "Motorsport",
    gender: "Men",
    image: "images/tee-18.jpg",
    sizes: ["M", "L", "XL"],
    isTrending: true,
    gsm: "240 GSM HEAVYWEIGHT"
  }
];

// App State
let products = [...initialProducts];
let cart = JSON.parse(localStorage.getItem("vehraan_cart")) || [];
let currentUser = null;
let activeSelectedSizes = {};
let activeCategoryFilter = "All Styles";
const FLAT_DELIVERY_FEE = 100;

// Initialize Default Selected Sizes
function initSizes() {
  products.forEach(p => {
    if (!activeSelectedSizes[p.id]) {
      activeSelectedSizes[p.id] = (p.sizes && p.sizes[0]) || "M";
    }
  });
}
initSizes();

// 2. DOM INITIALIZATION
document.addEventListener("DOMContentLoaded", () => {
  setupAuthListener();
  syncCatalogFromFirestore();
  setupFilterPills();
  setupSearchInput();
  setupCartDrawer();
  setupModals();
  setupAdminPortal();
  updateCartBadge();
});

// 3. FIRESTORE DATABASE SYNC (BULLETPROOF MERGING)
async function syncCatalogFromFirestore() {
  try {
    if (typeof db !== "undefined") {
      const snapshot = await db.collection("products").get();
      if (!snapshot.empty) {
        const firestoreProducts = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        const firestoreIds = new Set(firestoreProducts.map(p => String(p.id)));
        const fallbackRemaining = initialProducts.filter(p => !firestoreIds.has(String(p.id)));
        products = [...firestoreProducts, ...fallbackRemaining];
      } else {
        products = [...initialProducts];
      }
    } else {
      products = [...initialProducts];
    }
  } catch (err) {
    console.warn("Firestore sync bypassed. Running offline master drops:", err.message);
    products = [...initialProducts];
  }

  initSizes();
  renderGrids();
}

// 4. GRID RENDERING ENGINE
function renderGrids() {
  const freshGrid = document.getElementById("freshDropsGrid");
  const trendingGrid = document.getElementById("trendingDropsGrid");

  let filtered = products;
  if (activeCategoryFilter !== "All Styles") {
    filtered = products.filter(p => 
      p.category === activeCategoryFilter || p.gender === activeCategoryFilter
    );
  }

  const freshItems = filtered.filter(p => !p.isTrending);
  const trendingItems = filtered.filter(p => p.isTrending);

  if (freshGrid) {
    freshGrid.innerHTML = freshItems.length 
      ? freshItems.map(p => createProductCard(p)).join("")
      : `<p class="empty-state">No matching drops found in this category.</p>`;
  }

  if (trendingGrid) {
    trendingGrid.innerHTML = trendingItems.length 
      ? trendingItems.map(p => createProductCard(p)).join("")
      : `<p class="empty-state">No trending drops available.</p>`;
  }

  attachCardEventListeners();
}

function createProductCard(product) {
  const selectedSize = activeSelectedSizes[product.id] || (product.sizes && product.sizes[0]) || "M";
  const sizeButtons = (product.sizes || ["S", "M", "L", "XL"]).map(sz => `
    <button class="size-pill ${sz === selectedSize ? 'active' : ''}" data-id="${product.id}" data-size="${sz}">
      ${sz}
    </button>
  `).join("");

  return `
    <div class="product-card" data-id="${product.id}">
      <div class="product-image-wrap">
        <img src="${product.image}" alt="${product.name}" loading="lazy" onerror="this.src='images/tee-1.jpg'" />
        <span class="gsm-badge">${product.gsm || '240 GSM BIO-WASH'}</span>
      </div>
      <div class="product-info">
        <div class="code-category-row">
          <span class="product-code">${product.code || 'DROP'}</span>
          <span class="product-cat">${product.category}</span>
        </div>
        <h3 class="product-title">${product.name}</h3>
        <p class="product-price">₹${product.price}</p>
        
        <div class="size-selector-row">
          ${sizeButtons}
        </div>

        <button class="add-to-bag-btn" data-id="${product.id}">
          ADD TO BAG
        </button>
      </div>
    </div>
  `;
}

function attachCardEventListeners() {
  document.querySelectorAll(".size-pill").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const id = btn.getAttribute("data-id");
      const size = btn.getAttribute("data-size");
      activeSelectedSizes[id] = size;
      renderGrids();
    });
  });

  document.querySelectorAll(".add-to-bag-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const id = btn.getAttribute("data-id");
      handleAddToBag(id);
    });
  });
}

// 5. FILTER PILLS & SEARCH
function setupFilterPills() {
  const pills = document.querySelectorAll(".filter-pill, .nav-pill");
  pills.forEach(pill => {
    pill.addEventListener("click", () => {
      pills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      activeCategoryFilter = pill.getAttribute("data-category") || pill.innerText.trim();
      renderGrids();
    });
  });
}

function setupSearchInput() {
  const searchInput = document.getElementById("catalogSearchInput");
  if (!searchInput) return;

  searchInput.addEventListener("input", (e) => {
    const query = e.target.value.toLowerCase().trim();
    if (!query) {
      activeCategoryFilter = "All Styles";
      renderGrids();
      return;
    }

    const matched = products.filter(p => 
      p.name.toLowerCase().includes(query) ||
      p.category.toLowerCase().includes(query) ||
      (p.code && p.code.toLowerCase().includes(query))
    );

    const freshGrid = document.getElementById("freshDropsGrid");
    const trendingGrid = document.getElementById("trendingDropsGrid");
    
    if (freshGrid) freshGrid.innerHTML = matched.map(p => createProductCard(p)).join("");
    if (trendingGrid) trendingGrid.innerHTML = "";
    attachCardEventListeners();
  });
}

// 6. FIREBASE GOOGLE AUTH
function setupAuthListener() {
  if (typeof auth === "undefined") return;

  auth.onAuthStateChanged(user => {
    currentUser = user;
    const authBtn = document.getElementById("authActionBtn");
    if (authBtn) {
      if (user) {
        authBtn.innerText = user.displayName ? user.displayName.split(" ")[0].toUpperCase() : "ACCOUNT";
      } else {
        authBtn.innerText = "SIGN IN";
      }
    }
  });

  const authBtn = document.getElementById("authActionBtn");
  if (authBtn) {
    authBtn.addEventListener("click", () => {
      if (currentUser) {
        if (confirm(`Signed in as ${currentUser.email}. Do you want to sign out?`)) {
          auth.signOut();
        }
      } else {
        openAuthModal();
      }
    });
  }

  const googleSignInBtn = document.getElementById("googleSignInBtn");
  if (googleSignInBtn) {
    googleSignInBtn.addEventListener("click", async () => {
      try {
        const provider = new firebase.auth.GoogleAuthProvider();
        await auth.signInWithPopup(provider);
        closeAuthModal();
      } catch (error) {
        alert("Authentication Error: " + error.message);
      }
    });
  }
}

function openAuthModal() {
  const modal = document.getElementById("authModal");
  if (modal) modal.classList.add("open");
}
function closeAuthModal() {
  const modal = document.getElementById("authModal");
  if (modal) modal.classList.remove("open");
}

// 7. CART DRAWER & CASH ON DELIVERY CHECKOUT
function handleAddToBag(productId) {
  if (!currentUser) {
    openAuthModal();
    return;
  }

  const item = products.find(p => String(p.id) === String(productId));
  if (!item) return;

  const size = activeSelectedSizes[item.id] || "M";
  const existing = cart.find(c => String(c.id) === String(item.id) && c.size === size);

  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
      size: size,
      code: item.code,
      qty: 1
    });
  }

  saveCart();
  updateCartBadge();
  openCartDrawer();
}

function saveCart() {
  localStorage.setItem("vehraan_cart", JSON.stringify(cart));
}

function updateCartBadge() {
  const badges = document.querySelectorAll(".cart-count-badge");
  const count = cart.reduce((acc, cur) => acc + cur.qty, 0);
  badges.forEach(b => b.innerText = count);
}

function setupCartDrawer() {
  const cartTrigger = document.getElementById("cartTriggerBtn");
  const cartClose = document.getElementById("cartCloseBtn");
  const drawer = document.getElementById("cartDrawer");

  if (cartTrigger && drawer) cartTrigger.addEventListener("click", openCartDrawer);
  if (cartClose && drawer) cartClose.addEventListener("click", closeCartDrawer);

  const placeOrderBtn = document.getElementById("placeCodOrderBtn");
  if (placeOrderBtn) {
    placeOrderBtn.addEventListener("click", handleCodCheckout);
  }
}

function openCartDrawer() {
  renderCartItems();
  const drawer = document.getElementById("cartDrawer");
  if (drawer) drawer.classList.add("open");
}

function closeCartDrawer() {
  const drawer = document.getElementById("cartDrawer");
  if (drawer) drawer.classList.remove("open");
}

function renderCartItems() {
  const container = document.getElementById("cartItemsContainer");
  const subtotalElem = document.getElementById("cartSubtotalAmount");
  const totalElem = document.getElementById("cartGrandTotalAmount");

  if (!container) return;

  if (cart.length === 0) {
    container.innerHTML = `<p class="empty-cart-msg">Your bag is empty.</p>`;
    if (subtotalElem) subtotalElem.innerText = "₹0";
    if (totalElem) totalElem.innerText = `₹${FLAT_DELIVERY_FEE}`;
    return;
  }

  container.innerHTML = cart.map((item, idx) => `
    <div class="cart-item-row">
      <img src="${item.image}" alt="${item.name}" />
      <div class="cart-item-details">
        <h4>${item.name}</h4>
        <p>Size: <strong>${item.size}</strong> | ₹${item.price}</p>
        <div class="cart-qty-controls">
          <button onclick="modifyCartQty(${idx}, -1)">-</button>
          <span>${item.qty}</span>
          <button onclick="modifyCartQty(${idx}, 1)">+</button>
        </div>
      </div>
      <button class="cart-remove-btn" onclick="removeCartItem(${idx})">×</button>
    </div>
  `).join("");

  const subtotal = cart.reduce((acc, cur) => acc + (cur.price * cur.qty), 0);
  const grandTotal = subtotal + FLAT_DELIVERY_FEE;

  if (subtotalElem) subtotalElem.innerText = `₹${subtotal}`;
  if (totalElem) totalElem.innerText = `₹${grandTotal}`;
}

window.modifyCartQty = function(idx, delta) {
  if (!cart[idx]) return;
  cart[idx].qty += delta;
  if (cart[idx].qty <= 0) {
    cart.splice(idx, 1);
  }
  saveCart();
  updateCartBadge();
  renderCartItems();
};

window.removeCartItem = function(idx) {
  cart.splice(idx, 1);
  saveCart();
  updateCartBadge();
  renderCartItems();
};

// 8. CASH ON DELIVERY CHECKOUT DISPATCH
async function handleCodCheckout() {
  if (cart.length === 0) {
    alert("Please add items to your bag before checking out.");
    return;
  }

  const nameInput = document.getElementById("shippingName");
  const phoneInput = document.getElementById("shippingPhone");
  const addressInput = document.getElementById("shippingAddress");
  const cityInput = document.getElementById("shippingCity");
  const pincodeInput = document.getElementById("shippingPincode");

  const name = nameInput ? nameInput.value.trim() : "";
  const phone = phoneInput ? phoneInput.value.trim() : "";
  const address = addressInput ? addressInput.value.trim() : "";
  const city = cityInput ? cityInput.value.trim() : "";
  const pincode = pincodeInput ? pincodeInput.value.trim() : "";

  if (!name || !phone || !address || !pincode) {
    alert("Please fill in all shipping details.");
    return;
  }

  const subtotal = cart.reduce((acc, cur) => acc + (cur.price * cur.qty), 0);
  const grandTotal = subtotal + FLAT_DELIVERY_FEE;

  const orderPayload = {
    customerName: name,
    customerEmail: currentUser ? currentUser.email : "guest",
    phone: phone,
    shippingAddress: `${address}, ${city} - ${pincode}`,
    items: cart,
    subtotal: subtotal,
    deliveryFee: FLAT_DELIVERY_FEE,
    grandTotal: grandTotal,
    paymentMethod: "Cash on Delivery (COD)",
    status: "Pending Dispatch",
    createdAt: new Date().toISOString()
  };

  try {
    // Save to Firestore Database
    if (typeof db !== "undefined") {
      await db.collection("orders").add(orderPayload);
    }

    // Format WhatsApp Message
    const orderItemsSummary = cart.map(i => `• ${i.name} (Size: ${i.size}) x${i.qty} - ₹${i.price * i.qty}`).join("%0A");
    const waText = `*VEHRAAN STORE ORDER CONFIRMATION*%0A%0A` +
      `*Customer:* ${name}%0A` +
      `*Phone:* ${phone}%0A` +
      `*Address:* ${address}, ${city} - ${pincode}%0A%0A` +
      `*Items Ordered:*%0A${orderItemsSummary}%0A%0A` +
      `*Subtotal:* ₹${subtotal}%0A` +
      `*Flat Shipping:* ₹${FLAT_DELIVERY_FEE}%0A` +
      `*Grand Total (COD):* ₹${grandTotal}%0A` +
      `*Payment:* Cash on Delivery%0A%0A` +
      `Please confirm my shipment dispatch!`;

    // Reset Cart
    cart = [];
    saveCart();
    updateCartBadge();
    closeCartDrawer();

    // Redirect to Official WhatsApp
    window.open(`https://wa.me/919967272803?text=${waText}`, "_blank");

  } catch (err) {
    alert("Error placing order: " + err.message);
  }
}

// 9. MODALS & SECRET STUDIO CMS
function setupModals() {
  const fitModal = document.getElementById("fitGuideModal");
  const fitTriggers = document.querySelectorAll(".fit-guide-trigger");
  const fitClose = document.getElementById("fitGuideCloseBtn");

  fitTriggers.forEach(t => t.addEventListener("click", () => fitModal && fitModal.classList.add("open")));
  if (fitClose && fitModal) fitClose.addEventListener("click", () => fitModal.classList.remove("open"));

  const authModal = document.getElementById("authModal");
  const authClose = document.getElementById("authModalCloseBtn");
  if (authClose && authModal) authClose.addEventListener("click", closeAuthModal);
}

function setupAdminPortal() {
  const footerCopyright = document.getElementById("footerCopyrightTrigger");
  if (!footerCopyright) return;

  footerCopyright.addEventListener("click", () => {
    if (!currentUser) {
      alert("Please sign in with your administrative Google account first.");
      openAuthModal();
      return;
    }

    const pin = prompt("ENTER STUDIO CMS MASTER PASSCODE:");
    if (pin === "656565") {
      const cmsModal = document.getElementById("studioCmsModal");
      if (cmsModal) {
        cmsModal.classList.add("open");
        loadAdminOrdersFeed();
      }
    } else if (pin !== null) {
      alert("UNAUTHORIZED ACCESS: Invalid PIN Code.");
    }
  });

  const cmsClose = document.getElementById("studioCmsCloseBtn");
  if (cmsClose) {
    cmsClose.addEventListener("click", () => {
      const cmsModal = document.getElementById("studioCmsModal");
      if (cmsModal) cmsModal.classList.remove("open");
    });
  }
}

async function loadAdminOrdersFeed() {
  const feedContainer = document.getElementById("adminOrdersList");
  if (!feedContainer || typeof db === "undefined") return;

  feedContainer.innerHTML = "<p>Loading live Firestore orders...</p>";
  try {
    const snapshot = await db.collection("orders").orderBy("createdAt", "desc").get();
    if (snapshot.empty) {
      feedContainer.innerHTML = "<p>No customer orders in database yet.</p>";
      return;
    }

    feedContainer.innerHTML = snapshot.docs.map(doc => {
      const ord = doc.data();
      return `
        <div class="admin-order-card">
          <div class="admin-order-header">
            <strong>${ord.customerName}</strong> (${ord.phone})
            <span>₹${ord.grandTotal} (COD)</span>
          </div>
          <p class="admin-order-address">${ord.shippingAddress}</p>
          <div class="admin-order-items">
            ${(ord.items || []).map(i => `${i.name} [${i.size}] x${i.qty}`).join(", ")}
          </div>
        </div>
      `;
    }).join("");
  } catch (err) {
    feedContainer.innerHTML = `<p>Error loading orders: ${err.message}</p>`;
  }
}
