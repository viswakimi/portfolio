/*==================================================
            PORTFOLIO JAVASCRIPT
==================================================*/

/*============ AOS ============*/

AOS.init({
    duration: 1000,
    once: true
});

/*============ LOADER ============*/

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    loader.style.opacity = "0";

    setTimeout(() => {
        loader.style.display = "none";
    }, 600);

});

/*============ TYPING EFFECT ============*/

const roles = [
    "Data Analyst",
    
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

const typingElement = document.getElementById("typing");

function typeEffect() {

    if (!typingElement) return;

    const currentRole = roles[roleIndex];

    if (!deleting) {

        typingElement.textContent =
            currentRole.substring(0, charIndex++);

        if (charIndex > currentRole.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        typingElement.textContent =
            currentRole.substring(0, charIndex--);

        if (charIndex < 0) {

            deleting = false;

            roleIndex++;

            if (roleIndex >= roles.length) {

                roleIndex = 0;

            }

        }

    }

    setTimeout(typeEffect, deleting ? 50 : 100);

}

typeEffect();

/*============ COUNTER ============*/

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        const counter = entry.target;

        const target = +counter.dataset.target;

        let current = 0;

        const increment = target / 100;

        const update = () => {

            current += increment;

            if (current < target) {

                counter.textContent = Math.floor(current);

                requestAnimationFrame(update);

            } else {

                counter.textContent = target.toLocaleString() + "+";

            }

        };

        update();

        counterObserver.unobserve(counter);

    });

}, {

    threshold: 0.5

});

counters.forEach(counter => {

    counterObserver.observe(counter);

});

/*============ SCROLL PROGRESS ============*/

window.addEventListener("scroll", () => {

    const progressBar = document.getElementById("progress-bar");

    const scrollTop =
        document.documentElement.scrollTop;

    const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress =
        (scrollTop / height) * 100;

    progressBar.style.width = progress + "%";

});

/*============ BACK TO TOP ============*/

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

/*============ MOBILE MENU ============*/

const hamburger = document.querySelector(".hamburger");

const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});

/*============ CLOSE MENU AFTER CLICK ============*/

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});

/*============ ACTIVE NAVIGATION ============*/

const sections = document.querySelectorAll("section");

const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

/*============ STICKY NAV SHADOW ============*/

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.boxShadow =
            "0 10px 30px rgba(0,0,0,.3)";

    } else {

        header.style.boxShadow = "none";

    }

});

/*============ HERO IMAGE PARALLAX ============*/

const heroImage = document.querySelector(".hero-right img");

window.addEventListener("mousemove", (e) => {

    if (!heroImage) return;

    const x = (window.innerWidth / 2 - e.pageX) / 40;

    const y = (window.innerHeight / 2 - e.pageY) / 40;

    heroImage.style.transform =
        `translate(${x}px,${y}px)`;

});

/*============ YEAR ============*/

const footerYear = document.getElementById("year");

if (footerYear) {

    footerYear.textContent =
        new Date().getFullYear();

}

/*============ COPY EMAIL ============*/

const copyEmail = document.getElementById("copyEmail");

if (copyEmail) {

    copyEmail.addEventListener("click", function (e) {

        e.preventDefault();

        navigator.clipboard.writeText("viswalini22@gmail.com");

        const original = this.innerHTML;

        this.innerHTML =
            '<i class="fas fa-check"></i> <span>Email Copied!</span>';

        setTimeout(() => {

            this.innerHTML = original;

        }, 2000);

    });

}

