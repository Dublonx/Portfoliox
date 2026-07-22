// certifications preview
const overlay = document.querySelector('#overlay');
const imageOverlay = document.querySelector('#imageOverlay img');
const prevImg = document.querySelectorAll('.prev');

prevImg.forEach(img => {
    img.addEventListener("click", () => {
        console.log("clicked!");
    });
});