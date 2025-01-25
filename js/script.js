const navToggle = document.querySelector(".nav-toggle input");
const navSection = document.querySelector(".nav-section"); // Elemen menu

navToggle.addEventListener('change', () => {
    if (navToggle.checked) {
        navSection.style.display = 'flex'; // Menampilkan menu
    } else {
        navSection.style.display = 'none'; // Menyembunyikan menu
    }
});
