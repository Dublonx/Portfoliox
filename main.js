// certifications preview
const overlay = document.querySelector('#overlay');
const previewImg = document.querySelector('#preview-img');
const imgCert = document.querySelectorAll('.img-cert');

imgCert.forEach(img => {
    img.onclick = () => {
        overlay.classList.add("active");
        previewImg.src = img.src;
    };
});

// close certifications preview
overlay.onclick = () => {
    overlay.classList.remove("active");
}