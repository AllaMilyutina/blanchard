const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};

const hero_swiper = new Swiper('.hero__swiper', {
  slidesPerView: 1,
  speed: 3000,
  autoplay: {
    delay: 2000
  },
  effect: "fade",
  allowTouchMove: false,
})

const swiper = new Swiper('.project__slider', {
  loop: false,
  slidesPerView: 1,
  spaceBetween: 15,
  navigation: {
    nextEl: ".project__button-next",
    prevEl: ".project__button-prev",
  },
  a11y: {
    prevSlideMessage: 'перейти к слайду',
    nextSlideMessage: 'следующий слайд',
    paginationBulletMessage: 'следующий слайд {{index}}',
  },

  breakpoints: {
    768: {
        slidesPerView: 2,
        spaceBetween: 34
    },
    1650: {
        slidesPerView: 3,
        spaceBetween: 50,
    },
  }
});


    const headerMenuItems = document.querySelectorAll(".header__menu-item-text");

headerMenuItems.forEach(function (headerMenuItem) {
  headerMenuItem.addEventListener("click", function () {
    headerMenuItem.parentElement.classList.toggle("header__menu-item--active");
  });
});

document.addEventListener("mouseup", function (event) {
  const item = document.querySelector(".header__menu-item--active");

  if (!item || item.contains(event.target)) {
    return;
  }

  item.classList.remove("header__menu-item--active");
});

const element = document.querySelector('select');
  const choices = new Choices(element, {
    searchEnabled: false,
  });
choices.showDropdown();

  const swipe = new Swiper('.gallery__img', {
    slidesPerView: 1,
    slidesPerGroup:1,
    spaceBetween: 15,
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },
    navigation: {
      nextEl: ".gallery__button-next",
      prevEl: ".gallery__button-prev",
    },
    a11y: {
      prevSlideMessage: 'перейти к слайду',
      nextSlideMessage: 'следующий слайд',
      paginationBulletMessage: 'следующий слайд {{index}}',
    },

    breakpoints: {
      768: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 38
      },
      1200: {
          slidesPerView: 2,
          spaceBetween: 34
      },
      1650: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 34
      },
    }
  });

  new Accordion('.catalog__accordion-list', {
    elementClass: 'accordion',
    triggerClass: 'accordion__control',
    panelClass: 'accordion__content',
    activeClass: 'accordion--active',
  });


  const swip = new Swiper('.developments__slide', {
    loop: false,
    slidesPerView: 1,
    navigation: {
      nextEl: ".developments__button-next",
      prevEl: ".developments__button-prev",
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: 'true',
    },
    a11y: {
      prevSlideMessage: 'перейти к слайду',
      nextSlideMessage: 'следующий слайд',
      paginationBulletMessage: 'следующий слайд {{index}}',
    },
    breakpoints: {

      670: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 27
    },

      1024: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 27,
      },
      1440: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 27,
},

      1650: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 50
      },
    }
  });

  let tabsBtn = document.querySelectorAll('.accordion__link');
let tabsItem = document.querySelectorAll('.catalog__painter-descr');

tabsBtn.forEach(function(element){
  element.addEventListener('click', function(e){
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function(btn){
      btn.classList.remove('accordion__link--active')});
    e.currentTarget.classList.add('accordion__link--active');

    tabsItem.forEach(function(element){ element.classList.remove('catalog__painter-descr--active')});
    document.querySelector(`[data-target="${path}"]`).classList.add('catalog__painter-descr--active');
  });
});

ymaps.ready(init);
      function init() {
        var myMap = new ymaps.Map("map", {
          center: [55.758468, 37.601088],
          zoom: 14,
          controls: ['geolocationControl'],
        });

        var myPlacemark = new ymaps.Placemark(
          [55.758468, 37.601088],
          {},
          {
            iconLayout: "default#image",
            iconImageHref: "./img/Ellipse.svg",
            iconImageSize: [20, 20],
          }
        );
        var zoomControl = new ymaps.control.ZoomControl({
          options: {
              size: "small",
              position:{
              top: 250,
              right: 10,
          }
          }
      });


  myMap.controls.add(zoomControl);
        myMap.behaviors.disable('scrollZoom');
        myMap.geoObjects.add(myPlacemark);
      }

var selector = document.querySelector("input[type='tel']");
var im = new Inputmask("+7 (999)-999-99-99");

im.mask(selector);

new JustValidate('.showroom__form', {
  colorWrong: ' #D11616',
  rules: {
    name: {
      required: true,
      minLength: 2,
      maxLength: 10,
    },
    tel: {
      required: true,
      function: (name, value) => {
        const phone = selector.inputmask.unmaskedvalue()
        console.log(phone)
        return Number(phone) && phone.length === 10
      }
    },
  },
  messages: {
    name: 'Вы не ввели имя',
    tel: 'Вы не ввели телефон',
  },
});

let burger = document.querySelector(".burger");
let menu = document.querySelector(".header__nav-list");
let menuLinks = menu.querySelectorAll(".header__nav-link");

burger.addEventListener("click",

function() {

  burger.classList.toggle("burger--active");

  menu.classList.toggle("header__nav-list--active");

  document.body.classList.toggle("stop-scroll");
})

menuLinks.forEach(function(el) {
  el.addEventListener("click", function() {

    burger.classList.remove("burger--active");

    menu.classList.remove("header__nav-list--active");

    document.body.classList.remove("stop-scroll");
  })
})

let headerSearch = document.querySelector('.header__search-2');
let headerSvg = document.querySelector('.header__svg');
let buttonClosed = document.querySelector('.button-closed')

headerSvg.addEventListener('click',

function() {

  headerSearch.classList.add('header__search-2--active');
  headerSvg.classList.add('visibility-hidden');
})

buttonClosed.addEventListener('click', function(el) {
  headerSearch.classList.remove('header__search-2--active');
  headerSvg.classList.remove('visibility-hidden');
})
headerSearch.addEventListener('submit', function(e){
e.preventDefault()
})

tippy('[data-tippy-content]', {
  arrow: true,
});
