// const nav = document.querySelector('.navbar');

// window.onscroll = function() {
//     // if(document.documentElement.scroll > 50) {
//     //     nav.classList.add('header-scrolled');
//     // }
//     // else {
//     //     nav.classList.remove('header-scrolled');
//     // }
//     nav.classList.add('header-scrolled');
// }


const navBar = document.querySelectorAll('.nav-link');
const navCollapse = document.querySelector('.navbar-collapse.collapse');
navBar.forEach(function(e) {
    e.addEventListener("click", () => {
        navCollapse.classList.remove('show');
    })
})



const modal = document.querySelector('.modal-section');
const galleryImages = document.querySelectorAll(".gallery-images");
const modalImg = document.querySelector('.modal-img')


galleryImages.forEach(galleryimg => {
    galleryimg.addEventListener('click', () => {
        modal.style = "opacity: 1; pointer-events: all;"
        modalImg.src = galleryimg.src;
    })
})

let closeBtn = document.querySelector('.close');

closeBtn.onclick = function() {
  modal.style = "opacity: 0; pointer-events: none;"

}