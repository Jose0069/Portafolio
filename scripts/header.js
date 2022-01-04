const header = document.getElementById('header');
header.lastElementChild.addEventListener('click', () => {
    header.children[1].classList.toggle('header__menu--show');
})