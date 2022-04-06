const documentReady = () => {
  const header = document.querySelector('.header');
  const headerNav = document.querySelector('.header-nav');

  const headerNavMenuIconContainer = document.getElementById('headerNavMenuIconContainer');
  const headerNavMenuCloseIconContainer = document.getElementById('headerNavMenuCloseIconContainer');
  const headerNavMenuLinkList = document.querySelector('.header-nav__menu-link-list');
  const headerNavLinks = [...document.querySelectorAll('.header-nav__menu-link')];

  const heroTitle = document.querySelector('.hero__title');
  const heroLearnButton = document.querySelector('.hero__learn-button');
  const heroStarsImageContainer = document.querySelector('.hero__stars-image-container');
  const heroMoonImageContainer = document.querySelector('.hero__moon-image-container');
  const heroMountainsBehindImageContainer = document.querySelector('.hero__mountains-behind-image-container');
  const heroMountainsFrontImagecontainer = document.querySelector('.hero__mountains-front-image-container');

  const documentScroll = () => {
    header.classList.toggle('header--scroll', window.scrollY > 0);
    headerNav.classList.toggle('header-nav--scroll', window.scrollY > 0);

    let { scrollY } = window;
    heroTitle.style.marginLeft = `${45 - (scrollY * 0.75)}%`;
    heroTitle.style.marginBottom = `-${scrollY}px`;
    heroLearnButton.style.marginTop = `${scrollY}px`;
    heroStarsImageContainer.style.top = `${scrollY * 0.25}px`;
    heroMoonImageContainer.style.top = `${scrollY * 0.375}px`;
    heroMountainsBehindImageContainer.style.top = `${scrollY * 0.5}px`;
    heroMountainsFrontImagecontainer.style.top = `${scrollY * 0.625}px`;
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