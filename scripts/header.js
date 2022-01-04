const header = document.getElementById('header');
header.firstElementChild.lastElementChild.addEventListener('click', () => {
    header.firstElementChild.children[1].classList.toggle('header__menu--show');
});
const main = document.getElementById('main');
const sections = Array.from(main.children);
const headerLinks = Array.from(header.firstElementChild.children[1].children);
const indicatorOfSection = (entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            const actualSection = Array.from(headerLinks).find(link => link.dataset.url == entry.target.id);
            actualSection.classList.add('header__button--active');
            for(const link of headerLinks){
                if(link != actualSection){
                    link.classList.remove('header__button--active');
                }
            }
        }
    });
}
const observer = new IntersectionObserver(indicatorOfSection, {
    root: null,
    rootMargin: '0px',
    threshold: 0.8
});
sections.forEach(section => observer.observe(section));