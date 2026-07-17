// ============================================
// Saloni Ladies Garment — Site Script
// ============================================

// ---- CONFIG: edit these WhatsApp numbers as needed ----
const WHATSAPP_MAHAL = "918657010407";
const WHATSAPP_SAKKARDARA = "918830376414";
const CALL_MAHAL = "8657010407";
const CALL_SAKKARDARA = "8830376414";

const CATEGORY_LABELS = {
  ladies: "Ladies Wear",
  mens: "Men's Wear",
  essentials: "Daily Essentials",
};

let ALL_PRODUCTS = [];
let activeCategory = "all";
let searchTerm = "";

function waLink(number, productName) {
  const msg = encodeURIComponent(
    `Hi! I'm interested in ${productName} from Saloni Ladies Garment. Could you share more details?`
  );
  return `https://wa.me/${number}?text=${msg}`;
}

function renderProducts() {
  const container = document.getElementById("product-sections");
  container.innerHTML = "";

  const categories = ["ladies", "mens", "essentials"];
  let anyRendered = false;

  categories.forEach((cat) => {
    if (activeCategory !== "all" && activeCategory !== cat) return;

    const items = ALL_PRODUCTS.filter((p) => {
      const matchesCat = p.category === cat;
      const matchesSearch =
        searchTerm === "" ||
        p.name.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCat && matchesSearch;
    });

    if (items.length === 0) return;
    anyRendered = true;

    const block = document.createElement("div");
    block.className = "category-block";
    block.dataset.cat = cat;
    block.id = `cat-${cat}`;

    block.innerHTML = `
      <div class="category-head">
        <h3>${CATEGORY_LABELS[cat]}</h3>
        <span class="count">${items.length} items</span>
      </div>
      <div class="product-grid"></div>
      <p class="glimpse-note">This is a glimpse of our collection — visit us or WhatsApp for the full range.</p>
    `;

    const grid = block.querySelector(".product-grid");
    items.forEach((p) => {
      const card = document.createElement("div");
      card.className = "product-card";
      const tagHTML = p.tag
        ? `<span class="product-tag ${p.tag}">${p.tag}</span>`
        : "";
      card.innerHTML = `
        <div class="product-img-wrap">
          ${tagHTML}
          <img src="${p.image}" alt="${p.name}" loading="lazy" />
        </div>
        <div class="product-info">
          <span class="pname">${p.name}</span>
          <a class="enquire-btn" href="${waLink(WHATSAPP_MAHAL, p.name)}" target="_blank" rel="noopener">
            <span aria-hidden="true">💬</span> Get Price &amp; Details
          </a>
        </div>
      `;
      grid.appendChild(card);
    });

    container.appendChild(block);
  });

  if (!anyRendered) {
    container.innerHTML = `<p class="no-results">No products match your search. Try a different word, or WhatsApp us directly — we probably have it!</p>`;
  }
}

async function loadProducts() {
  try {
    const res = await fetch("js/products.json");
    ALL_PRODUCTS = await res.json();
  } catch (e) {
    console.error("Could not load products.json", e);
    ALL_PRODUCTS = [];
  }
  renderProducts();
}

function initSearchAndFilters() {
  const searchInput = document.getElementById("product-search");
  searchInput.addEventListener("input", (e) => {
    searchTerm = e.target.value.trim();
    renderProducts();
  });

  const chips = document.querySelectorAll(".chip");
  chips.forEach((chip) => {
    chip.addEventListener("click", () => {
      chips.forEach((c) => c.classList.remove("active"));
      chip.classList.add("active");
      activeCategory = chip.dataset.cat;
      renderProducts();
    });
  });
}

function initFAQ() {
  document.querySelectorAll(".faq-item").forEach((item) => {
    const q = item.querySelector(".faq-q");
    q.addEventListener("click", () => {
      const isOpen = item.classList.contains("open");
      document.querySelectorAll(".faq-item").forEach((i) => i.classList.remove("open"));
      if (!isOpen) item.classList.add("open");
    });
  });
}

function initFontToggle() {
  let scale = 1;
  const root = document.documentElement;
  document.getElementById("font-increase").addEventListener("click", () => {
    scale = Math.min(scale + 0.1, 1.3);
    root.style.fontSize = `${scale * 100}%`;
  });
  document.getElementById("font-decrease").addEventListener("click", () => {
    scale = Math.max(scale - 0.1, 0.9);
    root.style.fontSize = `${scale * 100}%`;
  });
}

function initLocationLinks() {
  const mahalWa = document.getElementById("mahal-whatsapp");
  if (mahalWa) mahalWa.href = `https://wa.me/${WHATSAPP_MAHAL}?text=${encodeURIComponent("Hi! I'd like some information about your Mahal store.")}`;

  const mahalCall = document.getElementById("mahal-call");
  if (mahalCall) mahalCall.href = `tel:+91${CALL_MAHAL}`;

  const sakWa = document.getElementById("sakkardara-whatsapp");
  if (sakWa) sakWa.href = `https://wa.me/${WHATSAPP_SAKKARDARA}?text=${encodeURIComponent("Hi! I'd like some information about your Sakkardara store.")}`;

  const sakCall = document.getElementById("sakkardara-call");
  if (sakCall) sakCall.href = `tel:+91${CALL_SAKKARDARA}`;

  const fabWa = document.getElementById("fab-whatsapp");
  if (fabWa) fabWa.href = `https://wa.me/${WHATSAPP_MAHAL}?text=${encodeURIComponent("Hi! I'm visiting your website and wanted to ask about your products.")}`;

  const fabCall = document.getElementById("fab-call");
  if (fabCall) fabCall.href = `tel:+91${CALL_MAHAL}`;

  const heroWa = document.getElementById("hero-whatsapp");
  if (heroWa) heroWa.href = `https://wa.me/${WHATSAPP_MAHAL}?text=${encodeURIComponent("Hi! I'm interested in your products.")}`;

  const bulkWa = document.getElementById("bulk-whatsapp");
  if (bulkWa) bulkWa.href = `https://wa.me/${WHATSAPP_MAHAL}?text=${encodeURIComponent("Hi! I'm interested in bulk/wholesale purchasing. Could you share details?")}`;
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (e) => {
      const targetId = link.getAttribute("href").slice(1);
      const target = document.getElementById(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  loadProducts();
  initSearchAndFilters();
  initFAQ();
  initFontToggle();
  initLocationLinks();
  initSmoothScroll();
});
