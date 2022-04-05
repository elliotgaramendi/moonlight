const documentReady = () => {
  const header = document.querySelector('.header');
  const headerNav = document.querySelector('.header-nav');

  const headerNavMenuIconContainer = document.getElementById('headerNavMenuIconContainer');
  const headerNavMenuCloseIconContainer = document.getElementById('headerNavMenuCloseIconContainer');
  const headerNavMenuLinkList = document.querySelector('.header-nav__menu-link-list');
  const headerNavLinks = [...document.querySelectorAll('.header-nav__menu-link')];

  const documentScroll = () => {
    header.classList.toggle('header--scroll', window.scrollY > 0);
    headerNav.classList.toggle('header-nav--scroll', window.scrollY > 0);
  };

  const openMenu = () => {
    headerNavMenuLinkList.classList.add('header-nav__menu-link-list--open');
  };

  const closeMenu = () => {
    headerNavMenuLinkList.classList.remove('header-nav__menu-link-list--open');
  };

  document.addEventListener('scroll', documentScroll);
  headerNavMenuIconContainer.addEventListener('click', openMenu);
  headerNavMenuCloseIconContainer.addEventListener('click', closeMenu);
  headerNavLinks.forEach((element) => {
    element.addEventListener('click', closeMenu);
  });
};
document.addEventListener('DOMContentLoaded', documentReady);