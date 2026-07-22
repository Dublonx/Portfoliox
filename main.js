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