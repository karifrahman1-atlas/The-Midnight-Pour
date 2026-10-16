const coffeeMenus = {
  espresso: [
    { name: "Double Espresso", description: "Bold, direct, full of character.", price: "৳220", image: "photo-1510707577719-ae7c14805e3a" },
    { name: "Cappuccino", description: "Velvety milk, balanced espresso.", price: "৳280", image: "photo-1534778101976-62847782c213" },
    { name: "Flat White", description: "Smooth texture, rich coffee.", price: "৳290", image: "photo-1541167760496-1628856ab772" },
    { name: "Café Mocha", description: "Espresso with dark chocolate.", price: "৳320", image: "photo-1570968915860-54d5c301fa9f" }
  ],
  cold: [
    { name: "Iced Americano", description: "Crisp, clean, and refreshing.", price: "৳250", image: "photo-1517701604599-bb29b565090c" },
    { name: "Cold Brew", description: "Slow-steeped, smooth finish.", price: "৳290", image: "photo-1461023058943-07fcbe16d735" },
    { name: "Iced Latte", description: "Chilled espresso and milk.", price: "৳300", image: "photo-1461023058943-07fcbe16d735" },
    { name: "Vanilla Cold Brew", description: "A mellow hint of vanilla.", price: "৳330", image: "photo-1517701604599-bb29b565090c" }
  ],
  signature: [
    { name: "Midnight Mocha", description: "Dark chocolate, espresso, silky finish.", price: "৳350", image: "photo-1570968915860-54d5c301fa9f" },
    { name: "Velvet Cold Brew", description: "Smooth, chilled, quietly bold.", price: "৳340", image: "photo-1461023058943-07fcbe16d735" },
    { name: "After Hours", description: "A deeper, espresso-forward pour.", price: "৳360", image: "photo-1510707577719-ae7c14805e3a" },
    { name: "Chapter One", description: "A gentle signature to begin with.", price: "৳330", image: "photo-1541167760496-1628856ab772" }
  ]
};

const coffeeGrid = document.querySelector("#coffee-grid");
function renderMenu(category) {
  coffeeGrid.innerHTML = coffeeMenus[category].map(coffee => `
    <article class="coffee-card">
      <div class="coffee-image" style="background-image:url('https://images.unsplash.com/${coffee.image}?auto=format&fit=crop&w=700&q=80')"></div>
      <div class="coffee-card-body">
        <h3>${coffee.name}</h3>
        <p>${coffee.description}</p>
        <span class="coffee-price">${coffee.price}</span>
      </div>
    </article>
  `).join("");
}
renderMenu("espresso");

document.querySelectorAll(".menu-tab").forEach(tab => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".menu-tab").forEach(item => {
      item.classList.remove("active");
      item.setAttribute("aria-selected", "false");
    });
    tab.classList.add("active");
    tab.setAttribute("aria-selected", "true");
    renderMenu(tab.dataset.category);
  });
});

const moods = {
  strong: { name: "Double Espresso", description: "Bold, direct, and full of character.", price: "৳220", image: "photo-1510707577719-ae7c14805e3a" },
  cold: { name: "Iced Americano", description: "Crisp, refreshing, and easy to settle into.", price: "৳250", image: "photo-1517701604599-bb29b565090c" },
  smooth: { name: "Flat White", description: "A silky texture with a rich coffee finish.", price: "৳290", image: "photo-1541167760496-1628856ab772" },
  different: { name: "Midnight Mocha", description: "Dark chocolate meets a deep espresso pour.", price: "৳350", image: "photo-1570968915860-54d5c301fa9f" }
};
document.querySelectorAll(".mood-option").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".mood-option").forEach(item => item.classList.remove("active"));
    button.classList.add("active");
    const mood = moods[button.dataset.mood];
    document.querySelector("#mood-name").textContent = mood.name;
    document.querySelector("#mood-description").textContent = mood.description;
    document.querySelector("#mood-price").textContent = mood.price;
    document.querySelector("#mood-image").style.backgroundImage = `url('https://images.unsplash.com/${mood.image}?auto=format&fit=crop&w=400&q=80')`;
  });
});

document.querySelectorAll(".faq-list details").forEach(detail => {
  detail.addEventListener("toggle", () => {
    const symbol = detail.querySelector("summary span");
    if (symbol) symbol.textContent = detail.open ? "×" : "+";
  });
});

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  menuToggle.textContent = isOpen ? "×" : "☰";
});
navLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

document.querySelector("#year").textContent = new Date().getFullYear();
