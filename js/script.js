// Theme toggle
const themeBtn = document.getElementById("themeBtn");

function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
  themeBtn.textContent = theme === "dark" ? "☀️" : "🌙";
}

const savedTheme = localStorage.getItem("theme") || "light";
setTheme(savedTheme);

themeBtn.addEventListener("click", () => {
  const current = document.documentElement.getAttribute("data-theme");
  setTheme(current === "dark" ? "light" : "dark");
});

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");
    menuBtn.textContent = navLinks.classList.contains("show") ? "✕" : "☰";
  });

  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("show");
      menuBtn.textContent = "☰";
    });
  });
}
// Form interaction
const form = document.getElementById("contactForm");

if (form) {
  form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nameInput = form.querySelector('input[type="text"]');
  const emailInput = form.querySelector('input[type="email"]');
  const messageInput = form.querySelector("textarea");
  const formMessage = document.getElementById("formMessage");

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const message = messageInput.value.trim();

  if (!name || !email || !message) {
    formMessage.textContent = "Please fill in all fields.";
    formMessage.style.color = "red";
    return;
  }

  if (!email.includes("@") || !email.includes(".")) {
    formMessage.textContent = "Please enter a valid email address.";
    formMessage.style.color = "red";
    return;
  }

  if (message.length < 10) {
    formMessage.textContent = "Message must be at least 10 characters long.";
    formMessage.style.color = "red";
    return;
  }

  formMessage.textContent = "Message sent successfully!";
  formMessage.style.color = "green";
  form.reset();
});
}

// Fade-up animation
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  },
  {
    threshold: 0.2,
  }
);

document.querySelectorAll(".fade-up").forEach((el) => {
  observer.observe(el);
});

// Project filter + search
const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");
const noProjectsMessage = document.getElementById("noProjectsMessage");
const projectSearch = document.getElementById("projectSearch");
const sortProjects = document.getElementById("sortProjects");
const cardsContainer = document.querySelector(".cards");


function applyProjectFilters() {
  const activeBtn = document.querySelector(".filter-btn.active");
  const filter = activeBtn ? activeBtn.dataset.filter : "all";
  const query = (projectSearch?.value || "").trim().toLowerCase();
  const sortValue = sortProjects ? sortProjects.value : "default";

  let visibleCount = 0;

  const cardsArray = Array.from(projectCards);

  cardsArray.forEach((card) => {
    const tags = (card.dataset.tags || "").split(" ");
    const text = card.textContent.toLowerCase();

    const matchesType = filter === "all" || tags.includes(filter);
    const matchesSearch = query === "" || text.includes(query);

    const show = matchesType && matchesSearch;
    card.style.display = show ? "" : "none";

    if (show) visibleCount++;
  });

  const visibleCards = cardsArray.filter((card) => card.style.display !== "none");

  if (sortValue === "az") {
    visibleCards.sort((a, b) =>
      a.dataset.name.localeCompare(b.dataset.name)
    );
  } else if (sortValue === "za") {
    visibleCards.sort((a, b) =>
      b.dataset.name.localeCompare(a.dataset.name)
    );
  }

  visibleCards.forEach((card) => {
    cardsContainer.appendChild(card);
  });

  if (noProjectsMessage) {
    noProjectsMessage.style.display = visibleCount === 0 ? "block" : "none";
  }
}

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    applyProjectFilters();
  });
});

if (projectSearch) {
  projectSearch.addEventListener("input", applyProjectFilters);
}

if (sortProjects) {
  sortProjects.addEventListener("change", applyProjectFilters);

  sortProjects.addEventListener("change", () => {
    sortProjects.classList.add("changed");

    setTimeout(() => {
      sortProjects.classList.remove("changed");
    }, 300);
  });
}

const detailButtons = document.querySelectorAll(".details-btn");

detailButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const card = btn.closest(".project-card");
    card.classList.toggle("expanded");

    btn.textContent = card.classList.contains("expanded")
      ? "Hide Details"
      : "View Details";
  });
});

// Highlight the active navigation link based on the current scroll position
const sections = document.querySelectorAll("section[id]");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let currentSection = "";

  if (window.scrollY < 100) {
    currentSection = "home";
  } else {
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();

      if (rect.top <= 150 && rect.bottom >= 150) {
        currentSection = section.id;
      }
    });
  }

  navItems.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href") === `#${currentSection}`) {
      link.classList.add("active");
    }
  });
});

// Fetch a developer quote from a public API and display it in the contact section
async function loadQuote() {
  const quoteBox = document.getElementById("devQuote");

  try {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();

    quoteBox.textContent = data.slip.advice;

  } catch (error) {
    quoteBox.textContent = "Sorry, the advice could not be loaded.";
  }
}

loadQuote();

// Image enlarge
const images = document.querySelectorAll(".project-img");
const modal = document.getElementById("imgModal");
const modalImg = document.getElementById("modalImg");

images.forEach((img) => {
  img.addEventListener("click", () => {
    modal.style.display = "flex";
    modalImg.src = img.src;
  });
});

modal.addEventListener("click", () => {
  modal.style.display = "none";
});

// Track how long the user stays on the site
const visitTime = document.getElementById("visitTime");

let seconds = 0;

setInterval(() => {
  seconds++;

  let minutes = Math.floor(seconds / 60);
  let secs = seconds % 60;

  visitTime.textContent = `You’ve been here for ${minutes}m ${secs}s`;
}, 1000);
