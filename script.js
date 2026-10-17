const coffeeMenus = {
  espresso: [
    { name: "Double Espresso", description: "A short, concentrated shot · dark chocolate and toasted-nut notes", price: "৳220", strength: "Bold" },
    { name: "Cappuccino", description: "Espresso, steamed milk and airy foam · balanced and comforting", price: "৳280", strength: "Balanced" },
    { name: "Flat White", description: "Silky milk with a clear, rich espresso finish", price: "৳290", strength: "Smooth" },
    { name: "Café Mocha", description: "Espresso and dark chocolate · rich with a milky finish", price: "৳320", strength: "Chocolatey" }
  ],
  cold: [
    { name: "Iced Americano", description: "Espresso over ice · crisp, clean and refreshing", price: "৳250", strength: "Bold" },
    { name: "Cold Brew", description: "Coffee steeped in cool water · round, mellow and smooth", price: "৳290", strength: "Mellow" },
    { name: "Iced Latte", description: "Chilled espresso and milk · mellow and easy-drinking", price: "৳300", strength: "Creamy" },
    { name: "Vanilla Cold Brew", description: "Slow-steeped coffee with a gentle vanilla note", price: "৳330", strength: "Lightly sweet" }
  ],
  signature: [
    { name: "Midnight Mocha", description: "Dark chocolate and espresso for a rich, dessert-like cup", price: "৳350", strength: "Rich" },
    { name: "Velvet Cold Brew", description: "A chilled coffee with a smooth texture and rounded finish", price: "৳340", strength: "Smooth" },
    { name: "After Hours", description: "An espresso-forward option for people who like a bolder cup", price: "৳360", strength: "Bold" },
    { name: "Chapter One", description: "A gentler, milk-friendly introduction to coffee flavours", price: "৳330", strength: "Easy-going" }
  ]
};

const coffeeGrid = document.querySelector("#coffee-grid");
function renderMenu(category) {
  if (!coffeeGrid || !coffeeMenus[category]) return;
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
      item.setAttribute("tabindex", "-1");
    });
    tab.classList.add("active");
    tab.setAttribute("aria-selected", "true");
    tab.setAttribute("tabindex", "0");
    renderMenu(tab.dataset.category);
  });
});

const moods = {
  strong: { name: "Double Espresso", description: "Concentrated, bold, with dark chocolate and toasted-nut notes.", price: "৳220", tip: "A good match if you enjoy a short, intense coffee." },
  cold: { name: "Iced Americano", description: "Crisp espresso over ice with a clean, refreshing finish.", price: "৳250", tip: "Try this if you prefer black iced coffee." },
  smooth: { name: "Flat White", description: "Silky milk softens the espresso without hiding its coffee character.", price: "৳290", tip: "A good starting point if you like milk in your coffee." },
  different: { name: "Midnight Mocha", description: "Dark chocolate meets espresso for a rich, dessert-like cup.", price: "৳350", tip: "Choose this if you want a sweeter, richer drink." }
};
document.querySelectorAll(".mood-option").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".mood-option").forEach(item => {
      item.classList.remove("active");
      item.setAttribute("aria-pressed", "false");
    });
    button.classList.add("active");
    button.setAttribute("aria-pressed", "true");
    const mood = moods[button.dataset.mood];
    if (!mood) return;
    document.querySelector("#mood-name").textContent = mood.name;
    document.querySelector("#mood-description").textContent = `${mood.description} ${mood.tip}`;
    document.querySelector("#mood-price").textContent = mood.price;
  });
});
document.querySelectorAll(".mood-option").forEach(item => item.setAttribute("aria-pressed", String(item.classList.contains("active"))));

document.querySelectorAll(".faq-list details").forEach(detail => {
  detail.addEventListener("toggle", () => {
    const symbol = detail.querySelector("summary span");
    if (symbol) symbol.textContent = detail.open ? "×" : "+";
  });
});

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
if (menuToggle && navLinks) {
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
      menuToggle.setAttribute("aria-label", "Open navigation");
      menuToggle.textContent = "☰";
    });
  });
}

const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();
