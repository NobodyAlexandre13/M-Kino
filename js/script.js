document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

const openMenu = document.querySelector(".openMenu")
const Menu = document.querySelector(".menu")

openMenu.addEventListener('click', ()=>{
    Menu.classList.add('abrirH')
})
Menu.addEventListener('click', ()=>{
    Menu.classList.remove('abrirH')
})