// certifications preview
const overlay = document.querySelector('#overlay');
const previewImg = document.querySelector('#preview-img');
const imgCert = document.querySelectorAll('.img-cert');
const body = document.body;

imgCert.forEach(img => {
    img.onclick = () => {
        overlay.classList.add("active");
        previewImg.src = img.src;
        body.classList.add("no-scroll");
    };
});

// close certifications preview
overlay.onclick = () => {
    overlay.classList.remove("active");
    body.classList.remove("no-scroll");
}

// click - audio
const clickSound = new Audio("Assets/Audio/click.mp3");

document.addEventListener("click", () => {
    clickSound.currentTime = 0
    clickSound.play()
});

// mouse glow
const glow = document.querySelector(".mouse-glow");

let mouseX = 0;
let mouseY = 0;
let glowX = 0;
let glowY = 0;

document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animateGlow() {
    glowX += (mouseX - glowX) * 0.12;
    glowY += (mouseY - glowY) * 0.12;

    glow.style.left = `${glowX}px`;
    glow.style.top = `${glowY}px`;

    requestAnimationFrame(animateGlow);
}

animateGlow();