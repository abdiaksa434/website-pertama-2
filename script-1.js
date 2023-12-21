const navHamburger = document.querySelector('#hamburger-menu');
const navList = document.querySelector('.nav-list');

navHamburger.addEventListener('click', function (){
    navList.classList.toggle ('active');
});


document.addEventListener('click', function(e){

    if(!navHamburger.contains(e.target) && !navList.contains(e.target)){
        navHamburger.classList.remove('active');
    }
    // di ganti

});


// kalau yg di target hamburger buat aksi default pada (hamburger menu) agar tidak naik ketas navbar
navHamburger.addEventListener('click', function (e){
    e.preventDefault();
})


