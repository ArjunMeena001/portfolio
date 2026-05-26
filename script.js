// ===============================
// SCROLL REVEAL (SECTIONS)
// ===============================
function initScrollAnimations() {

    const elements = document.querySelectorAll(
        ".slide-in-left, .slide-in-right, .slide-in-up"
    );

    const observer = new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translate(0)";

                    observer.unobserve(entry.target);
                }
            });

        },

        { threshold: 0.2 }
    );

    elements.forEach(el => observer.observe(el));
}

// RUN ANIMATIONS
initScrollAnimations();


// ===============================
// ACTIVE NAVBAR
// ===============================
const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".ul-list li");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 200;
        const sectionHeight = section.clientHeight;

        if (scrollY >= sectionTop &&
            scrollY < sectionTop + sectionHeight) {

            current = section.getAttribute("id");
        }
    });

    navItems.forEach(item => {

        item.classList.remove("active");

        const link = item.querySelector("a");

        if (link &&
            link.getAttribute("href") === `#${current}`) {

            item.classList.add("active");
        }
    });
});


// ===============================
// SMOOTH SCROLL
// ===============================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target =
            document.querySelector(this.getAttribute("href"));

        if (target) {

            window.scrollTo({
                top: target.offsetTop - 120,
                behavior: "smooth"
            });
        }
    });
});