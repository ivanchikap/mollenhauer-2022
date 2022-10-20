document.addEventListener('DOMContentLoaded', (e) => {

    //add active class

    const nav = document.querySelector('.nav');
    const lang = document.querySelector('.lang');

    nav.addEventListener('click', (e) => {
        e.preventDefault();
       if (!e.target.classList.contains('nav__item')) return;
       addActive(e.target, e.currentTarget, 'nav__item');
    });


    lang.addEventListener('click', (e) => {
        e.preventDefault();
        if (!e.target.classList.contains('lang__item')) return;
        addActive(e.target, e.currentTarget, 'lang__item');
    });

    function addActive(element, parent, classOfItems) {
        const items = parent.querySelectorAll(`.${classOfItems}`);
        items.forEach((item) => {
            item.classList.remove('active');
        });
        element.classList.add('active');
    }
});