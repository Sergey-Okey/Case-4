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
          link.classList.remove('active');
          if (link.getAttribute('href').split('#').pop() === section.id) {
            link.classList.add('active');
          }
        });
      }
    });
  };

  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.scrollX || document.documentElement.scrollLeft,
      scrollTop = window.scrollY || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
  }

  // Animation content

  const animItems = document.querySelectorAll('.animate');
  if (animItems.length > 0) {
    function onEntry() {
      animItems.forEach(item => {
        const itemHeight = item.offsetHeight;
        const itemOffset = offset(item).top;
        const startPos = 5;
        let animPoint = document.documentElement.clientHeight - itemHeight / startPos;

        if (itemHeight > document.documentElement.clientHeight) {
          animPoint = document.documentElement.clientHeight - document.documentElement.clientHeight / startPos;
        }

        if ((window.scrollY > itemOffset - animPoint) && window.scrollY < itemOffset + itemHeight) {
          item.classList.add('show');
        } else {
          item.classList.remove('show');
        }

      });
    }

    window.addEventListener('scroll', onEntry);
    window.addEventListener('resize', onEntry);
    document.addEventListener('DOMContentLoaded', onEntry);
  }

  navInit();
  window.addEventListener('scroll', navInit);
  window.addEventListener('resize', navInit);
});
