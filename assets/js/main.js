/*===== MENU SHOW =====*/ 
const toggle = document.querySelector('#nav-toggle'),
        navMenu = document.querySelector('#nav-menu'),
        navLinks = document.querySelectorAll('.nav__link')
  if(toggle){
    toggle.addEventListener('click', () => {
        navMenu.classList.toggle('show')
    })
  }


/*===== REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');
const linkAction = () => {
    const navMenu = document.querySelector('#nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(link => link.addEventListener('click', linkAction))
/*===== SCROLL SECTIONS ACTIVE LINK =====*/
const sections = document.querySelectorAll('section[id]')
function scrollActive() {
    const scrollY = window.pageYOffset;
    sections.forEach(current => {
        const sectHeight = current.offsetHeight;
        const sectTop = current.offsetTop - 50;
        const sectId = current.getAttribute('id');
        if (scrollY > sectTop && scrollY <= sectTop + sectHeight) {
            document.querySelector(`.nav__menu a[href*=${sectId}]`).classList.add('active');
        } else {
            document.querySelector(`.nav__menu a[href*=${sectId}]`).classList.remove('active');
        }
    });
}

window.addEventListener('scroll', scrollActive);

/*===== CHANGE COLOR HEADER =====*/ 
const bgHeader = () =>{
    const header = document.querySelector('#header');
    this.scrollY >= 50 ? header.classList.add('bg-header')
    : header.classList.remove('bg-header')
}
window.addEventListener('scroll', bgHeader)