var backdrop = document.querySelector('#showAccount');
var mobileNav = document.querySelector('#nav');
var overlay = document.querySelector('.overlay');
var closeBtn = document.querySelector('#closeBtn');

backdrop.addEventListener('click', function() {
    console.log('account info shown');
    overlay.style.display = 'block';
    mobileNav.classList.add("open-nav");
})

overlay.addEventListener('click', function() {
    overlay.style.display = 'none';
    mobileNav.classList.remove("open-nav");
})

closeBtn.addEventListener('click', function() {
    overlay.style.display = 'none';
    mobileNav.classList.remove("open-nav");
})
