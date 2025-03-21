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




let body = document.querySelector("body");
let night_mode_btn = document.querySelector(".night_mode_link");
let sun_icon = '<i class="fa-solid fa-sun"></i>';
let moon_icon = '<i class="fa-solid fa-moon"></i>'

function changeMode() {
    if(night_mode_btn.innerHTML === moon_icon){
        night_mode_btn.innerHTML = sun_icon;
        body.style.backgroundColor = "#000000";
    } else if (night_mode_btn.innerHTML === sun_icon) {
        night_mode_btn.innerHTML = moon_icon;
        body.style.backgroundColor = "#ffffff"
    }
    
}



let modal = document.getElementById("myModal");
let closeBtn = document.getElementById("closeModal");
function openModal() {
    console.log(modal);
    modal.style.display = "flex";
}

function closeModal() {
    modal.style.display = "none";
}

window.addEventListener("click", function (e) {
    if(e.target === modal) {
        modal.style.display = "none";
    }
})
