var typed = new Typed(".text", {
    strings: ["Diseñador gráfico", "Maquetador editorial", "Full Stack Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true

})


const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {
    let currentSection = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop - 100) {
            currentSection = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href").includes(currentSection)) {
            link.classList.add("active");
        }
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.getElementById('menu-btn');
    const navbar = document.getElementById('navbar');

    menuBtn.addEventListener('click', () => {
        navbar.classList.toggle('active');
    });

    const navLinksMobile = document.querySelectorAll('.navbar a');
    console.log(navLinksMobile.length);

    navLinksMobile.forEach(link => {
        link.addEventListener('click', () => {
            navbar.classList.remove('active');
        });
    });
});













function mostrarMas() {
    let cartelesSection = document.querySelectorAll('.title')[0].nextElementSibling;

    while (cartelesSection && !cartelesSection.classList.contains("title")) {
        if (cartelesSection.classList.contains("hidden")) {
            cartelesSection.classList.remove("hidden");
        }
        cartelesSection = cartelesSection.nextElementSibling;
    }

    document.getElementById("verMasBtn").classList.add("hidden");
    document.getElementById("verMenosBtn").classList.remove("hidden");
}

function ocultarImagenes() {
    let cartelesSection = document.querySelectorAll('.title')[0].nextElementSibling; 

    let count = 0;
    while (cartelesSection && !cartelesSection.classList.contains("title")) {
        if (count >= 4) { 
            cartelesSection.classList.add("hidden");
        }
        cartelesSection = cartelesSection.nextElementSibling;
        count++;
    }

    document.getElementById("verMasBtn").classList.remove("hidden");
    document.getElementById("verMenosBtn").classList.add("hidden");
}


function mostrarMasRevistas() {
    let revistasSection = document.querySelectorAll('.title')[1].nextElementSibling; 

    while (revistasSection && !revistasSection.classList.contains("title")) {
        if (revistasSection.classList.contains("hidden")) {
            revistasSection.classList.remove("hidden");
        }
        revistasSection = revistasSection.nextElementSibling;
    }

    document.getElementById("verMasRevistasBtn").classList.add("hidden");
    document.getElementById("verMenosRevistasBtn").classList.remove("hidden");
}

function ocultarRevistas() {
    let revistasSection = document.querySelectorAll('.title')[1].nextElementSibling; 
    let count = 0;

    while (revistasSection && !revistasSection.classList.contains("title")) {
        if (count >= 4) { 
            revistasSection.classList.add("hidden");
        }
        revistasSection = revistasSection.nextElementSibling;
        count++;
    }

    document.getElementById("verMasRevistasBtn").classList.remove("hidden");
    document.getElementById("verMenosRevistasBtn").classList.add("hidden");
}


function mostrarMasGuias() {
    let guiasSection = document.querySelectorAll('.title')[3].nextElementSibling; 

    while (guiasSection && !guiasSection.classList.contains("title")) {
        if (guiasSection.classList.contains("hidden")) {
            guiasSection.classList.remove("hidden");
        }
        guiasSection = guiasSection.nextElementSibling;
    }

    document.getElementById("verMasGuiasBtn").classList.add("hidden");
    document.getElementById("verMenosGuiasBtn").classList.remove("hidden");
}

function ocultarGuias() {
    let guiasSection = document.querySelectorAll('.title')[3].nextElementSibling; 
    let count = 0;

    while (guiasSection && !guiasSection.classList.contains("title")) {
        if (count >= 4) { 
            guiasSection.classList.add("hidden");
        }
        guiasSection = guiasSection.nextElementSibling;
        count++;
    }

    document.getElementById("verMasGuiasBtn").classList.remove("hidden");
    document.getElementById("verMenosGuiasBtn").classList.add("hidden");
}


const navLinksMobile = document.querySelectorAll('.navbar a');

navLinksMobile.forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active');
    });
});


function openModal(imgElement) {
    var modal = document.getElementById("imageModal");
    var modalImg = document.getElementById("modalImage");
    modal.style.display = "flex";
    modalImg.src = imgElement.src;
}

function closeModal() {
    document.getElementById("imageModal").style.display = "none";
}


