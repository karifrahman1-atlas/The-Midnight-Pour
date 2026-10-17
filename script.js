const coffeeMenus = {
  espresso: [
    { name: "Double Espresso", description: "Two shots. No milk, no detour, no hiding place for the coffee flavour.", price: "৳220", strength: "Bold" },
    { name: "Cappuccino", description: "Espresso under steamed milk and a soft foam cap. Familiar, balanced, and not trying to be the loudest drink on the table.", price: "৳280", strength: "Balanced" },
    { name: "Flat White", description: "Silky milk, a smaller cup, and espresso that still gets a word in. For the milk-drink person who means business.", price: "৳290", strength: "Smooth" },
    { name: "Café Mocha", description: "Espresso meets chocolate. A little indulgent, entirely unapologetic, and not pretending to be a black coffee.", price: "৳320", strength: "Chocolatey" }
  ],
  cold: [
    { name: "Iced Americano", description: "Espresso, cold water, ice. Clean, brisk and refreshingly uninterested in syrup.", price: "৳250", strength: "Bold" },
    { name: "Cold Brew", description: "Slow-steeped in cool water for a rounder cup. Less sharpness, more patience. Coffee took its time; you can too.", price: "৳290", strength: "Mellow" },
    { name: "Iced Latte", description: "Cold milk, espresso and ice. Smooth, familiar, and built for afternoons that have no business being this hot.", price: "৳300", strength: "Creamy" },
    { name: "Vanilla Cold Brew", description: "Cold brew with a hint of vanilla. Sweet enough to be interesting, not so sweet the coffee disappears. Ask about the current recipe.", price: "৳330", strength: "Lightly sweet" }
  ],
  signature: [
    { name: "Midnight Mocha", description: "Our imagined signature: espresso and dark chocolate with a late-night mood. Dessert energy, coffee credentials.", price: "৳350", strength: "Rich" },
    { name: "Velvet Cold Brew", description: "A smooth, chilled house concept for the slow-sippers. Ask about the recipe and sweetness before ordering.", price: "৳340", strength: "Smooth" },
    { name: "After Hours", description: "An espresso-first house concept. No plot twist: coffee stays in the lead role.", price: "৳360", strength: "Bold" },
    { name: "Chapter One", description: "A softer, milk-friendly house concept for anyone ready to leave the default latte setting for a day.", price: "৳330", strength: "Easy-going" }
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
  strong: { name: "Double Espresso", description: "Concentrated and intense, with no milk to soften the espresso.", price: "৳220", tip: "Choose this if you like a short, direct coffee with no milk." },
  cold: { name: "Iced Americano", description: "Espresso, water and ice. A clean reset for a warm Dhaka day.", price: "৳250", tip: "Try this if you prefer black iced coffee." },
  smooth: { name: "Flat White", description: "Silky milk, clear coffee flavour. A good compromise that doesn’t feel like one.", price: "৳290", tip: "A good starting point if you like milk in your coffee." },
  different: { name: "Midnight Mocha", description: "Dark chocolate and espresso. The “I came for coffee” loophole.", price: "৳350", tip: "Choose this if you want a sweeter, richer drink." }
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
