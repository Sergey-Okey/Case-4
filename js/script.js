document.addEventListener('DOMContentLoaded', function () {
  const navInit = () => {
    const navbarCollapsible = document.body.querySelector('#mainNav');
    if (navbarCollapsible) console.log('cool');
    if (window.scrollY === 0) {
      navbarCollapsible.classList.remove('navbar-shrink');
    } else {
      navbarCollapsible.classList.add('navbar-shrink');
    }
    const links = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
      if (window.scrollY >= (section.offsetTop - 100)) {
        console.log(window.scrollY + " >= " + section.offsetTop + " " + section.id);
        links.forEach(link => {
          link.classList.remove('active')
          if (link.href.split('#').pop() === section.id) {
            link.classList.add('active')
          }
        })
      }
    })
  }
  navInit();
  window.addEventListener('scroll', () => {
    navInit();

  })
  window.addEventListener('resize', () => {
    navInit();
  })
})
