const TabItem = document.querySelectorAll('.tabs__btn-item');
const TabContent = document.querySelectorAll('.tabs__content-item');

TabItem.forEach(function(element){
  element.addEventListener('click', open);
})

function open(evt) {
  const TabTarget = evt.currentTarget;
  const button = TabTarget.dataset.button;

  TabItem.forEach(function(item) {
    item.classList.remove('tabs__btn-item--active');
    });

    TabTarget.classList.add('tabs__btn-item--active');

    TabContent.forEach(function(item){
      item.classList.remove('tabs__content-item--active');
    });

    document.querySelector(`#${button}`).classList.add
    ('tabs__content-item--active');
}

const menuBtn = document.querySelector('.menu__btn');
const menu = document.querySelector('.menu__list');

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('menu__list--active');
})

const swiper = new Swiper(".swiper", {
      effect: "fade",
      pagination: {
        el: ".swiper-pagination",
      },
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
    });