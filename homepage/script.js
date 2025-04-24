const main = document.querySelector('main');
const section = document.querySelectorAll('section');
let page = 0;

main.addEventListener('wheel', (e) => {
    e.preventDefault();
    if (e.deltaY > 0) {
        page++;
    } else if (e.deltaY < 0) {
        page--;
    }
    if (page < 0) {
        page = 0;
    } else if (page > section.length-1) {
        page = section.length-1;
    }
    main.scrollLeft = page * main.clientWidth;
});