document.getElementById('whatsapp-btn').addEventListener('click', () => {
    window.open('https://wa.me/9010013413?text=Hello%20I%20am%20interested%20in%20your%20services', '_blank');
});

window.addEventListener('scroll',()=>{
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 0) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
})
