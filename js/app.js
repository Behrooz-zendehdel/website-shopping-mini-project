const menu = document.querySelector('.menu')
const mainMenu = document.querySelector('.main-menu');
const goBack = document.querySelector('.go-back')
const trigger = document.querySelector('.mobile-nav-trigger')
let subMenu;
const closeMenu = document.querySelector('.mobile-menu-close')
mainMenu.addEventListener('click', (e) => {
    if (e.target.closest('.menu-item-has-children')) {
        const hasChildren = e.target.closest('.menu-item-has-children')
        showSubMenu(hasChildren)
    }
})
trigger.addEventListener('click', function () {
    toggleMenu();
})
closeMenu.addEventListener('click', function () {
    toggleMenu();
})


goBack.addEventListener('click', function () {
    hideSubMenu();
})


function showSubMenu(hasChildren) {
    subMenu = hasChildren.querySelector('.sub-menu')
    subMenu.classList.add('active')
    subMenu.style.animation = 'slideLeft .5s ease forwards'
    const menuTitle = hasChildren.querySelector('.list-title').textContent;
    menu.querySelector('.current-menu-title').innerHTML = menuTitle;
    menu.querySelector('.mobile-menu-head').classList.add('active')
}
function hideSubMenu() {
    setTimeout(() => {

        subMenu.classList.remove('active')
    }, 300)
    subMenu.style.animation = 'slideRight .5s ease forwards'
    menu.querySelector('.current-menu-title').innerHTML = "";
    menu.querySelector('.mobile-menu-head').classList.remove('active')
}
function toggleMenu() {
    menu.classList.toggle('active')
};

