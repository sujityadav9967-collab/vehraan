// 1. FIREBASE CONFIGURATION & CLOUD INITIALIZATION
const firebaseConfig = {
  apiKey: "AIzaSyDC2gg3JyPE3KMgtf06A4aDV3U2jSfQWUU",
  authDomain: "vehraan-studio.firebaseapp.com",
  projectId: "vehraan-studio",
  storageBucket: "vehraan-studio.firebasestorage.app",
  messagingSenderId: "1072734814223",
  appId: "1:1072734814223:web:313d2701978c5c89b5e37a",
  measurementId: "G-SZBB157ZHJ"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const auth = firebase.auth();
const db = firebase.firestore();
const googleProvider = new firebase.auth.GoogleAuthProvider();

// System Constants
const ADMIN_SECRET_PIN = "656565";
const FLAT_DELIVERY_CHARGE = 100; // Flat ₹100 COD Delivery Fee

let currentSizeUnit = "in";
let uploadedImageBase64 = "";

// 2. MASTER CATALOG INVENTORY (All 18 Drops)
const initialProducts = [
  // --- FRESH DROPS (1 to 9) ---
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
    tags: ["men", "women", "black", "spider", "marvel", "spiderman", "comic", "symbiote", "sale"]
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
    tags: ["men", "women", "black", "red", "spider", "marvel", "miles", "morales", "spiderverse", "sale"]
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
    tags: ["men", "women", "white", "anime", "toji", "fushiguro", "jjk", "jujutsu", "kaisen", "spear", "sale"]
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
    tags: ["men", "women", "white", "f1", "formula 1", "car", "racing", "speed", "motorsport", "sale"]
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
    tags: ["men", "women", "white", "anime", "manga", "vagabond", "musashi", "katana", "samurai", "sword", "sale"]
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
    tags: ["men", "women", "black", "red", "who", "spider", "web", "gothic", "streetwear", "sale"]
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
    tags: ["men", "women", "white", "anime", "solo leveling", "arise", "igris", "jinwoo", "shadow", "sale"]
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
    tags: ["men", "women", "black", "red", "spider", "web", "shatter", "streetwear", "sale"]
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
    tags: ["men", "women", "beige", "sand", "brown", "creative", "passion", "typography", "sale"]
  },

  // --- TRENDING NOW (10 to 18) ---
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
    tags: ["men", "women", "black", "yellow", "anime", "demon slayer", "kimetsu", "zenitsu", "thunder", "sale"]
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
    tags: ["men", "women", "black", "anime", "toji", "fushiguro", "jjk", "jujutsu kaisen", "katana", "sale"]
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
    tags: ["men", "women", "black", "anime", "toji", "smirk", "dagger", "jjk", "jujutsu", "sale"]
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
    tags: ["men", "women", "black", "blue", "cyan", "anime", "solo leveling", "jinwoo", "arise", "sale"]
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
    tags: ["men", "women", "black", "red", "anime", "toji", "bloodline", "crimson", "jjk", "sale"]
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
    tags: ["men", "women", "blue", "cobalt", "anime", "aot", "attack on titan", "shingeki", "kanji", "sale"]
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
    tags: ["men", "women", "blue", "anime", "aot", "attack on titan", "levi", "ackerman", "blade", "sale"]
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
    tags: ["men", "women", "black", "marvel", "punisher", "skull", "distressed", "vintage", "sale"]
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
    tags: ["men", "women", "black", "anime", "maki", "zenin", "jjk", "jujutsu kaisen", "sword", "sale"]
  }
];

let products = [...initialProducts];
let cart = JSON.parse(localStorage.getItem("vehraan_cart")) || [];
const activeSelectedSizes = {};

// Toast Notification Handler
function showToast(message) {
  const toast = document.getElementById("toast");
  const msg = document.getElementById("toast-msg");
  if (!toast || !msg) return;

  msg.innerText = message;
  toast.classList.remove("translate-y-20", "opacity-0");
  toast.classList.add("translate-y-0", "opacity-100");

  setTimeout(() => {
    toast.classList.remove("translate-y-0", "opacity-100");
    toast.classList.add("translate-y-20", "opacity-0");
  }, 2800);
}

// 3. FIRESTORE DYNAMIC INVENTORY SYNC
async function syncCatalogFromFirestore() {
  try {
    const snapshot = await db.collection("products").get();
    if (!snapshot.empty) {
      const customProducts = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      const nonOverridden = initialProducts.filter(ip => !customProducts.some(cp => cp.id === ip.id));
      products = [...customProducts, ...nonOverridden];
    }
  } catch (error) {
    console.warn("Using offline catalog:", error.message);
  }

  products.forEach(p => {
    if (!activeSelectedSizes[p.id]) {
      activeSelectedSizes[p.id] = (p.sizes && p.sizes[0]) || "M";
    }
  });

  renderGrids();
}

// 4. USER AUTHENTICATION & SESSION MANAGEMENT
function getStoredUser() {
  const user = localStorage.getItem("vehraan_user");
  return user ? JSON.parse(user) : null;
}

function updateAuthUI() {
  const user = getStoredUser();
  const authContainer = document.getElementById("auth-container");
  if (!authContainer) return;

  if (user) {
    authContainer.innerHTML = `
      <div class="flex items-center gap-2">
        <span class="text-[10px] sm:text-[11px] font-semibold text-white">Hi, ${user.name.split(" ")[0]}</span>
        <button onclick="logoutUser()" class="text-[9px] uppercase tracking-wider text-neutral-500 hover:text-red-400">Logout</button>
      </div>
    `;
    const nameInput = document.getElementById("order-name");
    const emailInput = document.getElementById("order-email");
    if (nameInput && !nameInput.value) nameInput.value = user.name;
    if (emailInput && !emailInput.value) emailInput.value = user.email || "";
  } else {
    authContainer.innerHTML = `
      <button onclick="openAuthModal()" class="text-neutral-300 hover:text-white uppercase tracking-wider text-[10px] sm:text-[11px] font-semibold px-2.5 py-1 sm:px-3 sm:py-1.5 border border-white/10 rounded-lg hover:border-white/30 transition">
        Sign In
      </button>
    `;
  }
}

function openAuthModal() {
  document.getElementById("auth-modal").classList.remove("hidden");
}

function closeAuthModal() {
  document.getElementById("auth-modal").classList.add("hidden");
}

function logoutUser() {
  auth.signOut().catch(() => {});
  localStorage.removeItem("vehraan_user");
  updateAuthUI();
  showToast("Logged out successfully.");
}

async function handleGoogleSignIn() {
  const btn = document.getElementById("btn-google-auth");
  if (btn) {
    btn.disabled = true;
    btn.innerHTML = `<span>Connecting...</span>`;
  }

  try {
    const result = await auth.signInWithPopup(googleProvider);
    const user = result.user;
    const uid = user.uid;
    const displayName = user.displayName || "Member";
    const email = user.email || "";

    const userDocRef = db.collection("users").doc(uid);
    const docSnap = await userDocRef.get();

    if (!docSnap.exists) {
      await userDocRef.set({
        name: displayName,
        email: email,
        uid: uid,
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
      });
      showToast(`Welcome to VEHRAAN, ${displayName.split(" ")[0]}!`);
    } else {
      const stored = docSnap.data();
      showToast(`Welcome back, ${(stored.name || displayName).split(" ")[0]}!`);
    }

    localStorage.setItem("vehraan_user", JSON.stringify({
      name: displayName,
      email: email,
      uid: uid
    }));

    closeAuthModal();
    updateAuthUI();

  } catch (error) {
    console.error("Google Auth Error:", error);
    showToast(error.message || "Failed to sign in with Google.");
  } finally {
    if (btn) {
      btn.disabled = false;
      btn.innerHTML = `<span>Continue with Google</span>`;
    }
  }
}

// 5. CATALOG RENDERING & SHOPPING BAG ENGINE
function renderGrids(filteredList = null) {
  const newArrivalsGrid = document.getElementById("new-arrivals-grid");
  const bestSellersGrid = document.getElementById("best-sellers-grid");

  const currentList = filteredList || products;
  const freshProducts = currentList.filter(p => p.section === "fresh");
  const trendingProducts = currentList.filter(p => p.section === "trending");

  const freshBadge = document.getElementById("fresh-count-badge");
  const trendingBadge = document.getElementById("trending-count-badge");

  if (freshBadge) freshBadge.innerText = `${freshProducts.length.toString().padStart(2, '0')} Items`;
  if (trendingBadge) trendingBadge.innerText = `${trendingProducts.length.toString().padStart(2, '0')} Items`;

  const buildCards = (items) => {
    if (items.length === 0) {
      return `<div class="col-span-3 text-center py-10 text-neutral-500 text-xs font-mono-code">No matching items found.</div>`;
    }
    return items.map(p => `
      <div class="clean-product-card justify-between" id="product-${p.id}">
        <div class="product-media">
          <img src="${p.image}" alt="${p.name}" onerror="this.src='${p.fallbackImage || 'images/tee-1.jpg'}'" />
        </div>

        <div class="pt-3.5 flex-1 flex flex-col justify-between space-y-3">
          <div>
            <div class="flex items-start justify-between gap-2">
              <h3 class="text-xs font-semibold uppercase tracking-wider text-white">${p.name}</h3>
              <span class="text-xs font-bold text-neutral-200 font-mono-code">₹${p.price}</span>
            </div>
            <p class="text-[11px] text-neutral-400 mt-1 line-clamp-2 leading-relaxed">${p.desc}</p>
          </div>

          <div>
            <div class="flex gap-1.5 mb-3" id="sizes-${p.id}">
              ${(p.sizes || ["S", "M", "L", "XL"]).map((s) => `
                <button 
                  type="button" 
                  onclick="handleSizeSelect('${p.id}', '${s}', this)"
                  class="size-pill ${s === (activeSelectedSizes[p.id] || 'M') ? 'active' : ''}"
                >
                  ${s}
                </button>
              `).join("")}
            </div>

            <button 
              onclick="triggerAddToCart('${p.id}')" 
              class="w-full py-2.5 bg-[#141414] hover:bg-white hover:text-black border border-white/10 text-neutral-200 rounded-lg text-[10px] font-bold uppercase tracking-[0.15em] transition duration-200"
            >
              Add to Bag
            </button>
          </div>
        </div>
      </div>
    `).join("");
  };

  if (newArrivalsGrid) newArrivalsGrid.innerHTML = buildCards(freshProducts);
  if (bestSellersGrid) bestSellersGrid.innerHTML = buildCards(trendingProducts);
}

function handleSizeSelect(productId, size, btn) {
  activeSelectedSizes[productId] = size;
  const parent = document.getElementById(`sizes-${productId}`);
  if (parent) {
    parent.querySelectorAll(".size-pill").forEach(b => b.classList.remove("active"));
  }
  btn.classList.add("active");
}

function triggerAddToCart(productId) {
  const user = getStoredUser();
  if (!user) {
    showToast("Please sign in to add items to bag.");
    openAuthModal();
    return;
  }

  const chosen = activeSelectedSizes[productId] || "M";
  addToCart(productId, chosen);
}

function saveCart() {
  localStorage.setItem("vehraan_cart", JSON.stringify(cart));
  updateCartUI();
}

function updateCartUI() {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const itemsSubtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const finalTotalWithShipping = totalItems > 0 ? (itemsSubtotal + FLAT_DELIVERY_CHARGE) : 0;

  const cartBadge = document.getElementById("cart-badge");
  const drawerCount = document.getElementById("drawer-count");
  const cartSubtotalPrice = document.getElementById("cart-subtotal-price");
  const cartTotalPrice = document.getElementById("cart-total-price");
  const checkoutFinalAmount = document.getElementById("checkout-final-amount");

  if (cartBadge) cartBadge.innerText = totalItems;
  if (drawerCount) drawerCount.innerText = totalItems;
  if (cartSubtotalPrice) cartSubtotalPrice.innerText = `₹${itemsSubtotal.toLocaleString("en-IN")}`;
  if (cartTotalPrice) cartTotalPrice.innerText = `₹${finalTotalWithShipping.toLocaleString("en-IN")}`;
  if (checkoutFinalAmount) checkoutFinalAmount.innerText = `₹${finalTotalWithShipping.toLocaleString("en-IN")}`;

  const container = document.getElementById("cart-items-container");
  const checkoutBtn = document.getElementById("btn-proceed");

  if (container) {
    if (cart.length === 0) {
      container.innerHTML = `<div class="text-center py-20 text-neutral-500 text-[11px] uppercase tracking-widest font-mono-code">Your bag is empty.</div>`;
      if (checkoutBtn) {
        checkoutBtn.disabled = true;
        checkoutBtn.classList.add("opacity-50", "cursor-not-allowed");
      }
      return;
    }

    if (checkoutBtn) {
      checkoutBtn.disabled = false;
      checkoutBtn.classList.remove("opacity-50", "cursor-not-allowed");
    }

    container.innerHTML = cart.map(item => `
      <div class="flex gap-4 p-3 bg-[#111111] border border-white/5 rounded-xl items-center">
        <div class="w-12 h-14 bg-[#060606] rounded-lg overflow-hidden flex items-center justify-center p-1">
          <img src="${item.image}" alt="${item.name}" class="w-full h-full object-contain" />
        </div>
        <div class="flex-1 min-w-0">
          <h4 class="text-xs font-semibold text-white truncate">${item.name}</h4>
          <p class="text-[10px] text-neutral-400 mt-0.5 font-mono-code">Size: ${item.size} • ₹${item.price}</p>
          <div class="flex items-center gap-3 mt-1.5">
            <div class="flex items-center border border-white/10 rounded">
              <button onclick="changeQty('${item.id}', '${item.size}', -1)" class="px-2 text-xs text-neutral-400 hover:text-white">-</button>
              <span class="px-1.5 text-xs text-white font-mono">${item.quantity}</span>
              <button onclick="changeQty('${item.id}', '${item.size}', 1)" class="px-2 text-xs text-neutral-400 hover:text-white">+</button>
            </div>
            <button onclick="removeFromCart('${item.id}', '${item.size}')" class="text-[10px] uppercase tracking-wider text-neutral-500 hover:text-red-400">Remove</button>
          </div>
        </div>
        <div class="text-xs font-bold text-white font-mono-code">₹${(item.price * item.quantity).toLocaleString("en-IN")}</div>
      </div>
    `).join("");
  }
}

function addToCart(productId, selectedSize) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  const existing = cart.find(i => i.id === productId && i.size === selectedSize);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      size: selectedSize,
      image: product.image,
      quantity: 1
    });
  }

  saveCart();
  toggleCart(true);
  showToast(`Added ${product.name} to Bag.`);
}

function changeQty(id, size, delta) {
  const item = cart.find(i => i.id === id && i.size === size);
  if (!item) return;
  item.quantity += delta;
  if (item.quantity <= 0) {
    cart = cart.filter(i => !(i.id === id && i.size === size));
  }
  saveCart();
}

function removeFromCart(id, size) {
  cart = cart.filter(i => !(i.id === id && i.size === size));
  saveCart();
}

function toggleCart(open) {
  const drawer = document.getElementById("cart-drawer");
  const overlay = document.getElementById("cart-drawer-overlay");
  if (open) {
    overlay.classList.remove("hidden");
    drawer.classList.remove("translate-x-full");
  } else {
    overlay.classList.add("hidden");
    drawer.classList.add("translate-x-full");
  }
}

function openCheckoutModal() {
  if (cart.length === 0) return;
  toggleCart(false);
  updateCartUI();
  document.getElementById("checkout-modal").classList.remove("hidden");
}

function closeCheckoutModal() {
  document.getElementById("checkout-modal").classList.add("hidden");
}

// 6. 100% PURE CASH ON DELIVERY (COD) CHECKOUT DISPATCH
document.getElementById("checkout-form").addEventListener("submit", async function(e) {
  e.preventDefault();

  const name = document.getElementById("order-name").value.trim();
  const phone = document.getElementById("order-phone").value.trim();
  const email = document.getElementById("order-email").value.trim();
  const insta = document.getElementById("order-instagram").value.trim() || "Not Provided";
  const address = document.getElementById("order-address").value.trim();
  
  const itemsSubtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const finalPayable = itemsSubtotal + FLAT_DELIVERY_CHARGE;
  const user = getStoredUser();

  const orderId = `VEH-${Date.now().toString().slice(-6)}`;
  const orderData = {
    orderId: orderId,
    customerName: name,
    phone: phone,
    email: email,
    instagram: insta,
    address: address,
    paymentMethod: "Cash on Delivery (COD)",
    itemsSubtotal: itemsSubtotal,
    deliveryFee: FLAT_DELIVERY_CHARGE,
    totalPrice: finalPayable,
    items: cart.map(item => ({
      id: item.id,
      name: item.name,
      size: item.size,
      price: item.price,
      quantity: item.quantity
    })),
    status: "COD Order Placed",
    userId: user ? user.uid : "guest",
    createdAt: firebase.firestore.FieldValue.serverTimestamp()
  };

  const btnSubmit = document.getElementById("btn-submit-order");
  btnSubmit.disabled = true;
  btnSubmit.innerText = "Securing Order...";

  try {
    // Commit order into Firestore database
    await db.collection("orders").doc(orderId).set(orderData);

    // Format WhatsApp message
    const itemsSummary = cart.map(item => 
      `• ${item.name}\n  Size: ${item.size} | Qty: ${item.quantity} | ₹${(item.price * item.quantity).toLocaleString("en-IN")}`
    ).join("\n\n");

    const message = 
`*NEW COD ORDER: ${orderId} - VEHRAAN*
--------------------------------
${itemsSummary}
--------------------------------
*Items Subtotal:* ₹${itemsSubtotal.toLocaleString("en-IN")}
*Delivery Charge:* ₹${FLAT_DELIVERY_CHARGE}
*Total Payable on Handover:* ₹${finalPayable.toLocaleString("en-IN")}
*Payment Method:* Cash on Delivery (COD)
--------------------------------
*Customer Details:*
• Name: ${name}
• Mobile: ${phone}
• Email: ${email}
• Instagram: ${insta}
• Delivery Address: ${address}
--------------------------------
Official Desk: +91 7400246429
Please confirm stock & dispatch package.`;

    window.open(`https://api.whatsapp.com/send?phone=917400246429&text=${encodeURIComponent(message)}`, "_blank");

    cart = [];
    saveCart();
    closeCheckoutModal();
    showToast(`Order ${orderId} placed successfully!`);

  } catch (error) {
    console.error("Order Placement Error:", error);
    showToast("Error recording order. Check network connection.");
  } finally {
    btnSubmit.disabled = false;
    btnSubmit.innerText = "Place Order (Cash on Delivery)";
  }
});

// 7. SIZING MATRIX HANDLER
const sizeMatrixData = [
  { size: "S", chestIn: '40"', lengthIn: '28"', chestCm: "102 cm", lengthCm: "71 cm", fit: "Drop Shoulder" },
  { size: "M", chestIn: '42"', lengthIn: '29"', chestCm: "107 cm", lengthCm: "74 cm", fit: "Drop Shoulder" },
  { size: "L", chestIn: '44"', lengthIn: '30"', chestCm: "112 cm", lengthCm: "76 cm", fit: "Drop Shoulder" },
  { size: "XL", chestIn: '46"', lengthIn: '31"', chestCm: "117 cm", lengthCm: "79 cm", fit: "Drop Shoulder" },
  { size: "XXL", chestIn: '48"', lengthIn: '32"', chestCm: "122 cm", lengthCm: "81 cm", fit: "Drop Shoulder" }
];

function renderSizeTable() {
  const tbody = document.getElementById("size-table-body");
  const thChest = document.getElementById("th-chest");
  const thLength = document.getElementById("th-length");

  if (currentSizeUnit === "in") {
    thChest.innerText = "Chest (Inches)";
    thLength.innerText = "Length (Inches)";
    tbody.innerHTML = sizeMatrixData.map(d => `
      <tr>
        <td class="p-3 font-bold text-white">${d.size}</td>
        <td class="p-3">${d.chestIn}</td>
        <td class="p-3">${d.lengthIn}</td>
        <td class="p-3 text-neutral-400">${d.fit}</td>
      </tr>
    `).join("");
  } else {
    thChest.innerText = "Chest (CM)";
    thLength.innerText = "Length (CM)";
    tbody.innerHTML = sizeMatrixData.map(d => `
      <tr>
        <td class="p-3 font-bold text-white">${d.size}</td>
        <td class="p-3">${d.chestCm}</td>
        <td class="p-3">${d.lengthCm}</td>
        <td class="p-3 text-neutral-400">${d.fit}</td>
      </tr>
    `).join("");
  }
}

function toggleSizeUnit(unit) {
  currentSizeUnit = unit;
  const inBtn = document.getElementById("unit-in-btn");
  const cmBtn = document.getElementById("unit-cm-btn");
  if (unit === "in") {
    inBtn.className = "px-2.5 py-1 bg-white text-black font-bold rounded";
    cmBtn.className = "px-2.5 py-1 text-neutral-400 font-bold rounded";
  } else {
    cmBtn.className = "px-2.5 py-1 bg-white text-black font-bold rounded";
    inBtn.className = "px-2.5 py-1 text-neutral-400 font-bold rounded";
  }
  renderSizeTable();
}

function openSizeGuideModal() {
  renderSizeTable();
  document.getElementById("size-guide-modal").classList.remove("hidden");
}

function closeSizeGuideModal() {
  document.getElementById("size-guide-modal").classList.add("hidden");
}

// 8. DOUBLE-LAYER STUDIO CMS ADMIN ENGINE (Auth Email + PIN 656565)
const fileInput = document.getElementById("adm-file-input");
if (fileInput) {
  fileInput.addEventListener("change", function(e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(event) {
      uploadedImageBase64 = event.target.result;
      const previewBox = document.getElementById("adm-preview-box");
      const previewImg = document.getElementById("adm-preview-img");
      if (previewBox && previewImg) {
        previewImg.src = uploadedImageBase64;
        previewBox.classList.remove("hidden");
      }
    };
    reader.readAsDataURL(file);
  });
}

function triggerAdminAccess() {
  const user = getStoredUser();

  // First Layer: Verify User Session
  if (!user || user.email !== "vehraan@gmail.com") {
    showToast("Access Denied: Please sign in with the official Studio Admin account.");
    openAuthModal();
    return;
  }

  // Second Layer: Verify Secret PIN
  const pin = prompt("Enter Studio Admin Access PIN:");
  if (pin === ADMIN_SECRET_PIN) {
    document.getElementById("admin-modal").classList.remove("hidden");
    switchAdminTab('add-product');
  } else if (pin !== null) {
    showToast("Unauthorized Admin Attempt.");
  }
}

function closeAdminModal() {
  document.getElementById("admin-modal").classList.add("hidden");
}

function switchAdminTab(tab) {
  const tabAdd = document.getElementById("admin-tab-add");
  const tabManage = document.getElementById("admin-tab-manage");
  const tabOrders = document.getElementById("admin-tab-orders");

  const btnAdd = document.getElementById("tab-btn-add");
  const btnManage = document.getElementById("tab-btn-manage");
  const btnOrders = document.getElementById("tab-btn-orders");

  [tabAdd, tabManage, tabOrders].forEach(t => t.classList.add("hidden"));
  [btnAdd, btnManage, btnOrders].forEach(b => {
    b.className = "px-3 py-1.5 bg-white/10 hover:bg-white/20 text-white text-xs font-bold uppercase font-mono-code rounded-lg";
  });

  if (tab === "add-product") {
    tabAdd.classList.remove("hidden");
    btnAdd.className = "px-3 py-1.5 bg-white text-black text-xs font-bold uppercase font-mono-code rounded-lg";
  } else if (tab === "manage-products") {
    tabManage.classList.remove("hidden");
    btnManage.className = "px-3 py-1.5 bg-white text-black text-xs font-bold uppercase font-mono-code rounded-lg";
    loadAdminProductsList();
  } else if (tab === "view-orders") {
    tabOrders.classList.remove("hidden");
    btnOrders.className = "px-3 py-1.5 bg-white text-black text-xs font-bold uppercase font-mono-code rounded-lg";
    loadAdminOrders();
  }
}

document.getElementById("admin-add-product-form").addEventListener("submit", async function(e) {
  e.preventDefault();

  const name = document.getElementById("adm-name").value.trim();
  const section = document.getElementById("adm-section").value;
  const price = parseInt(document.getElementById("adm-price").value, 10);
  const originalPrice = parseInt(document.getElementById("adm-orig-price").value, 10) || (price * 2);
  const urlFallback = document.getElementById("adm-image-url").value.trim();
  const desc = document.getElementById("adm-desc").value.trim();

  const finalImage = uploadedImageBase64 || urlFallback;
  if (!finalImage) {
    showToast("Please select a photo from gallery or enter an image URL.");
    return;
  }

  const newId = `veh-custom-${Date.now().toString().slice(-6)}`;
  const productPayload = {
    id: newId,
    name,
    section,
    price,
    originalPrice,
    image: finalImage,
    fallbackImage: finalImage,
    desc: desc || "Heavyweight 240 GSM combed cotton.",
    sizes: ["S", "M", "L", "XL"],
    tags: ["men", "women", "drop", "sale", "custom"],
    createdAt: firebase.firestore.FieldValue.serverTimestamp()
  };

  const btnSave = document.getElementById("btn-adm-save-product");
  btnSave.disabled = true;
  btnSave.innerText = "Publishing...";

  try {
    await db.collection("products").doc(newId).set(productPayload);
    showToast(`Drop "${name}" published live!`);
    document.getElementById("admin-add-product-form").reset();
    uploadedImageBase64 = "";
    document.getElementById("adm-preview-box").classList.add("hidden");
    await syncCatalogFromFirestore();
  } catch (error) {
    console.error("Product Addition Error:", error);
    showToast("Failed to save drop. Check Firestore rules.");
  } finally {
    btnSave.disabled = false;
    btnSave.innerText = "Publish Drop Directly to Live Storefront";
  }
});

function loadAdminProductsList() {
  const container = document.getElementById("admin-product-list");
  if (products.length === 0) {
    container.innerHTML = `<div class="text-center py-6 text-neutral-500 text-xs font-mono-code">No products found.</div>`;
    return;
  }

  container.innerHTML = products.map(p => `
    <div class="flex items-center justify-between p-3 bg-[#141414] border border-white/5 rounded-xl">
      <div class="flex items-center gap-3">
        <img src="${p.image}" class="w-10 h-12 object-contain bg-[#060606] rounded p-1" onerror="this.src='images/tee-1.jpg'" />
        <div>
          <h5 class="text-xs font-bold text-white">${p.name}</h5>
          <span class="text-[10px] text-neutral-400 font-mono-code">₹${p.price} • Section: ${p.section.toUpperCase()}</span>
        </div>
      </div>
      <button onclick="deleteProduct('${p.id}')" class="px-3 py-1 bg-red-500/10 hover:bg-red-500/20 text-red-400 text-[10px] font-bold uppercase rounded-lg border border-red-500/20">
        Remove
      </button>
    </div>
  `).join("");
}

async function deleteProduct(productId) {
  if (!confirm("Are you sure you want to remove this drop?")) return;

  try {
    await db.collection("products").doc(productId).delete();
    products = products.filter(p => p.id !== productId);
    renderGrids();
    loadAdminProductsList();
    showToast("Product removed successfully.");
  } catch (error) {
    console.error("Delete Error:", error);
    showToast("Failed to delete.");
  }
}

async function loadAdminOrders() {
  const tableContainer = document.getElementById("admin-orders-table");
  tableContainer.innerHTML = `<div class="text-center py-6 text-neutral-400 text-xs font-mono-code animate-pulse">Syncing orders with Cloud Firestore...</div>`;

  try {
    const snapshot = await db.collection("orders").orderBy("createdAt", "desc").limit(20).get();
    
    if (snapshot.empty) {
      tableContainer.innerHTML = `<div class="text-center py-6 text-neutral-500 text-xs font-mono-code">No orders received yet.</div>`;
      return;
    }

    tableContainer.innerHTML = snapshot.docs.map(doc => {
      const data = doc.data();
      return `
        <div class="p-4 bg-[#141414] border border-white/5 rounded-xl space-y-2 text-left">
          <div class="flex items-center justify-between">
            <span class="text-xs font-bold text-white font-mono-code">${data.orderId || doc.id}</span>
            <span class="text-[10px] px-2 py-0.5 rounded-full font-mono-code bg-emerald-500/10 text-emerald-400">
              COD • Total: ₹${data.totalPrice} (Items: ₹${data.itemsSubtotal || data.totalPrice - 100} + Shipping: ₹${data.deliveryFee || 100})
            </span>
          </div>
          <div class="text-[11px] text-neutral-300">
            <strong>${data.customerName}</strong> (${data.phone}) • <span class="text-neutral-500">${data.email}</span>
          </div>
          <p class="text-[10px] text-neutral-400 leading-relaxed font-mono-code bg-[#0a0a0a] p-2 rounded-lg">
            ${data.address}
          </p>
          <div class="text-[10px] text-neutral-500 font-mono-code">
            Items: ${data.items ? data.items.map(i => `${i.name} [${i.size}] (x${i.quantity})`).join(", ") : "N/A"}
          </div>
        </div>
      `;
    }).join("");

  } catch (error) {
    console.error("Admin Load Error:", error);
    tableContainer.innerHTML = `<div class="text-center py-4 text-red-400 text-xs font-mono-code">Failed to load orders. Check Firestore rules.</div>`;
  }
}

// 9. STUDIO POLICIES
const policyData = {
  about: {
    title: "About VEHRAAN",
    content: `<p><strong>VEHRAAN</strong> is an independent Indian contemporary luxury streetwear imprint specializing in heavy-gauge 240 GSM bio-washed apparel.</p><p>Direct Support: <span class="text-white">+91 7400246429</span></p>`
  },
  shipping: {
    title: "Shipping & Dispatch Policy",
    content: `<p>Orders are dispatched within 24–48 hours from Mumbai. Flat delivery charge of ₹100 applies on all Cash on Delivery orders across India.</p>`
  },
  returns: {
    title: "Returns & Exchanges Policy",
    content: `<p>7-day sizing replacement support via official WhatsApp concierge desk.</p>`
  }
};

function openPolicyModal(policyKey) {
  const policy = policyData[policyKey];
  if (!policy) return;

  document.getElementById("policy-modal-title").innerText = policy.title;
  document.getElementById("policy-modal-body").innerHTML = policy.content;
  document.getElementById("policy-modal").classList.remove("hidden");
}

function closePolicyModal() {
  document.getElementById("policy-modal").classList.add("hidden");
}

// 10. SEARCH & REAL-TIME FILTERING
function filterByTag(tagKeyword) {
  if (tagKeyword === "all") {
    renderGrids();
    return;
  }
  const matched = products.filter(p => {
    const q = tagKeyword.toLowerCase();
    return p.name.toLowerCase().includes(q) || (p.tags && p.tags.some(t => t.includes(q)));
  });
  renderGrids(matched);
  const target = document.getElementById("new-arrivals");
  if (target) target.scrollIntoView({ behavior: "smooth" });
}

const desktopSearch = document.getElementById("search-bar");
const mobileSearch = document.getElementById("mobile-search-bar");
const desktopDropdown = document.getElementById("search-dropdown");
const mobileDropdown = document.getElementById("mobile-search-dropdown");

function searchProducts(query) {
  const q = query.toLowerCase().trim();
  if (!q) return [];
  return products.filter(p => p.name.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q) || (p.tags && p.tags.some(t => t.includes(q))));
}

function renderDropdownResults(matched, dropdownElement) {
  if (!dropdownElement) return;
  if (matched.length === 0) {
    dropdownElement.innerHTML = `<div class="p-3 text-center text-neutral-500 text-xs font-mono-code">No matches found.</div>`;
    dropdownElement.classList.remove("hidden");
    return;
  }
  dropdownElement.innerHTML = matched.slice(0, 5).map(p => `
    <div onclick="selectSearchResult('${p.id}')" class="search-result-item flex items-center gap-3 p-2 rounded-lg cursor-pointer">
      <img src="${p.image}" class="w-8 h-10 object-contain bg-[#050505] rounded p-0.5" onerror="this.src='${p.fallbackImage}'" />
      <div class="flex-1 min-w-0 text-left">
        <h4 class="text-xs font-semibold text-white truncate">${p.name}</h4>
        <span class="text-[10px] text-neutral-400 font-mono-code">₹${p.price}</span>
      </div>
    </div>
  `).join("");
  dropdownElement.classList.remove("hidden");
}

function selectSearchResult(productId) {
  if (desktopDropdown) desktopDropdown.classList.add("hidden");
  if (mobileDropdown) mobileDropdown.classList.add("hidden");
  const targetCard = document.getElementById(`product-${productId}`);
  if (targetCard) {
    targetCard.scrollIntoView({ behavior: "smooth", block: "center" });
    targetCard.classList.add("border-white", "scale-[1.02]");
    setTimeout(() => targetCard.classList.remove("border-white", "scale-[1.02]"), 1800);
  }
}

if (desktopSearch) {
  desktopSearch.addEventListener("input", (e) => {
    const val = e.target.value;
    if (val.trim().length > 0) {
      const matched = searchProducts(val);
      renderDropdownResults(matched, desktopDropdown);
      renderGrids(matched);
    } else {
      if (desktopDropdown) desktopDropdown.classList.add("hidden");
      renderGrids();
    }
  });
}

if (mobileSearch) {
  mobileSearch.addEventListener("input", (e) => {
    const val = e.target.value;
    if (val.trim().length > 0) {
      const matched = searchProducts(val);
      renderDropdownResults(matched, mobileDropdown);
      renderGrids(matched);
    } else {
      if (mobileDropdown) mobileDropdown.classList.add("hidden");
      renderGrids();
    }
  });
}

document.addEventListener("click", (e) => {
  if (!e.target.closest("#desktop-search-wrapper") && desktopDropdown) desktopDropdown.classList.add("hidden");
  if (!e.target.closest("#mobile-search-wrapper") && mobileDropdown) mobileDropdown.classList.add("hidden");
});

function initScrollReveal() {
  const reveals = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("active");
    });
  }, { threshold: 0.1 });
  reveals.forEach(el => observer.observe(el));
}

// 11. APPLICATION BOOTSTRAP
syncCatalogFromFirestore();
updateCartUI();
updateAuthUI();
initScrollReveal();