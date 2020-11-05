let menuIcon = document.querySelector('.menu__icon');
let menuList = document.querySelector('.menu__list');
menuIcon.addEventListener('click', () => {
  menuIcon.classList.toggle("active");
  menuList.classList.toggle("active");
})

new fullpage('#fullpage', {
  autoScrolling:true,
  scrollHorizontally: false,
  verticalCentered: false,
  navigation: true,
})
