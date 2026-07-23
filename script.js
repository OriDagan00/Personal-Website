document.addEventListener('DOMContentLoaded', function () {
  const siteHeader = document.querySelector('.site-header');
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  const navItems = document.querySelectorAll('.nav-links a');
  const responsiveDisclosures = document.querySelectorAll('[data-mobile-open]');
  const mobileContentQuery = window.matchMedia('(max-width: 560px)');

  if (menuToggle && navLinks) {
    const setMenuState = function (isOpen) {
      navLinks.classList.toggle('is-open', isOpen);
      document.body.classList.toggle('nav-open', isOpen);
      menuToggle.setAttribute('aria-expanded', String(isOpen));
      menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
    };

    menuToggle.addEventListener('click', function () {
      setMenuState(!navLinks.classList.contains('is-open'));
    });

    navItems.forEach(function (link) {
      link.addEventListener('click', function () {
        setMenuState(false);
      });
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && navLinks.classList.contains('is-open')) {
        setMenuState(false);
        menuToggle.focus();
      }
    });
  }

  if (siteHeader) {
    const updateHeader = function () {
      siteHeader.classList.toggle('is-scrolled', window.scrollY > 24);
    };

    updateHeader();
    window.addEventListener('scroll', updateHeader, { passive: true });
  }

  if (responsiveDisclosures.length) {
    const syncDisclosures = function () {
      responsiveDisclosures.forEach(function (disclosure) {
        disclosure.open = mobileContentQuery.matches
          ? disclosure.dataset.mobileOpen === 'true'
          : true;
      });
    };

    syncDisclosures();

    if (typeof mobileContentQuery.addEventListener === 'function') {
      mobileContentQuery.addEventListener('change', syncDisclosures);
    } else {
      mobileContentQuery.addListener(syncDisclosures);
    }
  }

  if ('IntersectionObserver' in window) {
    const sections = document.querySelectorAll('main section[id]');
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) {
          return;
        }

        navItems.forEach(function (link) {
          const isCurrent = link.getAttribute('href') === '#' + entry.target.id;
          if (isCurrent) {
            link.setAttribute('aria-current', 'true');
          } else {
            link.removeAttribute('aria-current');
          }
        });
      });
    }, {
      rootMargin: '-35% 0px -55% 0px',
      threshold: 0.01
    });

    sections.forEach(function (section) {
      observer.observe(section);
    });
  }
});
