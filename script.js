const coffeeMenus = {
  espresso: [
    { name: "Double Espresso", description: "Concentrated and bold · dark chocolate, toasted nuts", price: "৳220", strength: "Strong" },
    { name: "Cappuccino", description: "Espresso, steamed milk, airy foam · balanced and comforting", price: "৳280", strength: "Medium" },
    { name: "Flat White", description: "Silky microfoam with a clear, rich coffee finish", price: "৳290", strength: "Medium" },
    { name: "Café Mocha", description: "Espresso and dark chocolate with a smooth milk finish", price: "৳320", strength: "Sweet & rich" }
  ],
  cold: [
    { name: "Iced Americano", description: "Espresso over ice · crisp, clean, and refreshing", price: "৳250", strength: "Strong" },
    { name: "Cold Brew", description: "Slow-steeped for a rounder taste and smooth finish", price: "৳290", strength: "Smooth" },
    { name: "Iced Latte", description: "Chilled espresso and milk · mellow and easy-drinking", price: "৳300", strength: "Milky" },
    { name: "Vanilla Cold Brew", description: "Slow-steeped coffee with a gentle vanilla note", price: "৳330", strength: "Sweet & smooth" }
  ],
  signature: [
    { name: "Midnight Mocha", description: "Dark chocolate, espresso, and a silky finish", price: "৳350", strength: "Rich" },
    { name: "Velvet Cold Brew", description: "A chilled, smooth coffee with a quietly bold profile", price: "৳340", strength: "Smooth" },
    { name: "After Hours", description: "An espresso-forward house-style drink for bold-coffee fans", price: "৳360", strength: "Strong" },
    { name: "Chapter One", description: "A gentler signature drink for those exploring coffee", price: "৳330", strength: "Easy-going" }
  ]
};

const coffeeGrid = document.querySelector("#coffee-grid");
function renderMenu(category) {
  coffeeGrid.innerHTML = coffeeMenus[category].map((coffee, index) => `
    <article class="coffee-card">
      <div class="coffee-card-top"><span class="coffee-number">0${index + 1}</span><span class="coffee-strength">${coffee.strength}</span></div>
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
  strong: { name: "Double Espresso", description: "Concentrated, bold, with dark chocolate and toasted-nut notes.", price: "৳220", tip: "Best if you enjoy a short, intense coffee." },
  cold: { name: "Iced Americano", description: "Crisp espresso over ice with a clean, refreshing finish.", price: "৳250", tip: "A good starting point for black iced coffee." },
  smooth: { name: "Flat White", description: "Espresso softened by silky milk, without losing its coffee character.", price: "৳290", tip: "Try this if you like milk in your coffee but want the espresso to shine." },
  different: { name: "Midnight Mocha", description: "Dark chocolate meets espresso for a rich, dessert-like cup.", price: "৳350", tip: "For a sweeter drink with a deeper coffee base." }
};
document.querySelectorAll(".mood-option").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".mood-option").forEach(item => item.classList.remove("active"));
    button.classList.add("active");
    const mood = moods[button.dataset.mood];
    document.querySelector("#mood-name").textContent = mood.name;
    document.querySelector("#mood-description").textContent = `${mood.description} ${mood.tip}`;
    document.querySelector("#mood-price").textContent = mood.price;
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
