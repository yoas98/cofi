const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');
const btnDown = document.querySelector('.arrow-down');

menuToggle.addEventListener('click', function () {
    nav.classList.toggle('slide');
    btnDown.classList.toggle('hidden-arrow');
});



window.addEventListener("scroll", function() {
    let menuArea = document.getElementById('menu-area');

    if(window.pageYOffset > 0){
        menuArea.classList.add("cus-nav");
    } else{
        menuArea.classList.remove("cus-nav");
    }
});