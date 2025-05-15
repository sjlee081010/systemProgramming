const main = document.querySelector('main');
const section = document.querySelectorAll('section');
const btn = document.querySelectorAll('.btn');

const info = {};

Object.defineProperties(info, {
  page: {
    get() {
      return this._page || 0;
    },
    set(value) {
      if (value < 0) value = 0;
      if (value > section.length - 1) value = section.length - 1;

      this._page = value;
      console.log(value);

      main.scrollLeft = value * main.clientWidth;

      btn.forEach((obj, index) => {
        obj.style.opacity = index === value ? "100%" : "50%";
      });
    },
    enumerable: true,
    configurable: true,
  }
});

main.addEventListener('wheel', (e) => {
  e.preventDefault();
  if (e.deltaY > 0) {
    info.page = info.page + 1;
  } else {
    info.page = info.page - 1;
  }
});

btn.forEach((obj, index) => {
  obj.addEventListener('click', () => {
    info.page = index;
  });
});
