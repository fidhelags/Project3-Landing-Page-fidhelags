const navToggle = document.querySelector(".nav-toggle input"); // tombol toggle
const navSection = document.querySelector(".nav-section"); // elemen yang ingin disembunyikan/tampilkan

navToggle.addEventListener('click', () => {
    if (navSection.style.display === 'none') {
        navSection.style.display = 'flex'; // Menampilkan elemen
    } else {
        navSection.style.display = 'none'; // Menyembunyikan elemen
    }
});
