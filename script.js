
// ===============================
// MOBILE MENU
// ===============================
const menuToggle = document.querySelector("#menu-toggle");
const navLinks = document.querySelector("#nav-links");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        menuToggle.classList.toggle("active");
    });
}

// Close menu after clicking a navigation link
document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
        navLinks?.classList.remove("active");
        menuToggle?.classList.remove("active");
    });
});

// ===============================
// SCROLL REVEAL ANIMATION
// ===============================
const revealElements = document.querySelectorAll(
    ".reveal, .section, .dimension-card, .work-card, .gallery-item"
);

const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15
});

revealElements.forEach(element => {
    element.classList.add("reveal");
    revealObserver.observe(element);
});

// ===============================
// ACTIVE NAVIGATION ON SCROLL
// ===============================
const sections = document.querySelectorAll("section[id]");
const navigationLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
    let currentSection = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }
    });

    navigationLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === `#${currentSection}`) {
            link.classList.add("active");
        }
    });
});

// ===============================
// SMOOTH SCROLL
// ===============================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (event) {
        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});

// ===============================
// CURRENT YEAR
// ===============================
const yearElement = document.querySelector("#year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}
