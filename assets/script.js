// Tugmani olish
const backToTopButton = document.getElementById("backToHome");

// Scrollni kuzatish
window.addEventListener("scroll", function () {
    if (window.scrollY > 700) { // Agar scroll 700px'dan oshsa
        backToTopButton.style.display = "block"; // Tugma ko'rinadi
    } else {
        backToTopButton.style.display = "none"; // Tugma yashirinadi
    }
});

// Tugmani bosganda bosh sahifaga scroll qilish
backToTopButton.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" }); // Silliq scroll yuqoriga
});
