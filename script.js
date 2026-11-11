
// KEN SANTOS PORTFOLIO

document.addEventListener("DOMContentLoaded", () => {

    const menuBtn = document.getElementById("menuBtn");
    const navLinks = document.getElementById("navLinks");
    const navItems = document.querySelectorAll(".nav-links a");

    // MOBILE NAVIGATION
    if (menuBtn && navLinks) {

        menuBtn.addEventListener("click", () => {

            const isOpen = navLinks.classList.toggle("open");

            menuBtn.setAttribute("aria-expanded", String(isOpen));

            menuBtn.setAttribute(
                "aria-label",
                isOpen ? "Close navigation" : "Open navigation"
            );

            menuBtn.textContent = isOpen ? "✕" : "☰";

        });

        // Close menu after clicking a navigation link
        navItems.forEach((link) => {

            link.addEventListener("click", () => {

                navLinks.classList.remove("open");

                menuBtn.setAttribute("aria-expanded", "false");
                menuBtn.setAttribute("aria-label", "Open navigation");

                menuBtn.textContent = "☰";

            });

        });

        // Close menu when clicking outside
        document.addEventListener("click", (event) => {

            if (
                !navLinks.contains(event.target) &&
                !menuBtn.contains(event.target)
            ) {

                navLinks.classList.remove("open");

                menuBtn.setAttribute("aria-expanded", "false");
                menuBtn.setAttribute("aria-label", "Open navigation");

                menuBtn.textContent = "☰";

            }

        });

    }

    // SCROLL REVEAL ANIMATION
    if ("IntersectionObserver" in window) {

        document.body.classList.add("js-ready");

        const observer = new IntersectionObserver(
            (entries, currentObserver) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("visible");

                        currentObserver.unobserve(entry.target);

                    }

                });

            },
            {
                threshold: 0.12
            }
        );

        document.querySelectorAll(".reveal").forEach((element) => {

            observer.observe(element);

        });

    }

    // ACTIVE NAVIGATION WHILE SCROLLING
    const sections = document.querySelectorAll(
        "header[id], section[id]"
    );

    if (
        "IntersectionObserver" in window &&
        sections.length
    ) {

        const sectionObserver = new IntersectionObserver(
            (entries) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {

                        const activeId = entry.target.id;

                        navItems.forEach((link) => {

                            link.classList.toggle(
                                "active",
                                link.getAttribute("href") === `#${activeId}`
                            );

                        });

                    }

                });

            },
            {
                rootMargin: "-35% 0px -55% 0px"
            }
        );

        sections.forEach((section) => {

            sectionObserver.observe(section);

        });

    }

});
