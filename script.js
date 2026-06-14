// ==========================
// MOBILE MENU
// ==========================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Close menu when link is clicked
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});

// ==========================
// STATS COUNTER
// ==========================

const counters = document.querySelectorAll(".counter");

const startCounter = () => {
    counters.forEach(counter => {
        const target = +counter.dataset.target;
        const increment = target / 100;

        let count = 0;

        const updateCounter = () => {
            if (count < target) {
                count += increment;
                counter.innerText = Math.ceil(count);

                setTimeout(updateCounter, 20);
            } else {
                counter.innerText = target;
            }
        };

        updateCounter();
    });
};

let counterStarted = false;

window.addEventListener("scroll", () => {
    const statsSection = document.querySelector("#stats");

    const sectionTop = statsSection.offsetTop - 300;

    if (
        window.scrollY > sectionTop &&
        !counterStarted
    ) {
        startCounter();
        counterStarted = true;
    }
});

// ==========================
// ACTIVE NAVIGATION
// ==========================

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.clientHeight;

        if (
            pageYOffset >= sectionTop
        ) {
            current = section.getAttribute("id");
        }
    });

    navItems.forEach(link => {

        link.classList.remove("active-link");

        if (
            link.getAttribute("href") ===
            `#${current}`
        ) {
            link.classList.add("active-link");
        }
    });
});

// ==========================
// SCROLL REVEAL
// ==========================

const revealElements = document.querySelectorAll(
    ".card, .skill-card, .timeline-item, .stat-card"
);

const revealOnScroll = () => {

    const triggerBottom =
        window.innerHeight * 0.85;

    revealElements.forEach(element => {

        const top =
            element.getBoundingClientRect().top;

        if (top < triggerBottom) {
            element.classList.add("show");
        }
    });
};

window.addEventListener(
    "scroll",
    revealOnScroll
);

revealOnScroll();

// ==========================
// CURRENT YEAR FOOTER
// ==========================

const footer = document.querySelector("footer");

const year = new Date().getFullYear();

footer.innerHTML += `
<p>© ${year} DevOps Journey</p>
`;

// ==========================
// ROADMAP PROGRESS UPDATE
// ==========================

const progressBars =
    document.querySelectorAll(".progress");

progressBars.forEach(bar => {

    const width =
        bar.style.width;

    bar.style.width = "0";

    setTimeout(() => {
        bar.style.width = width;
    }, 500);
});

// ==========================
// SMOOTH SCROLL
// ==========================

document
.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

    anchor.addEventListener(
        "click",
        function (e) {

            e.preventDefault();

            const target =
                document.querySelector(
                    this.getAttribute("href")
                );

            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    );
});