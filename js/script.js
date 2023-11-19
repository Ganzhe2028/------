window.addEventListener('scroll', function() {
    var nav = document.querySelector('nav');
    var scrollPosition = window.scrollY || window.pageYOffset;
  
    if (scrollPosition > 0) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
});  