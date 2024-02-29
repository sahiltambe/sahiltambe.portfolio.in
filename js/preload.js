window.addEventListener('scroll', function() {
  var scrollToTopButton = document.getElementById('scrollToTop');
  if (window.scrollY > 500) {
      scrollToTopButton.style.display = 'block';
  } else {
      scrollToTopButton.style.display = 'none';
  }
});

document.getElementById('scrollToTop').addEventListener('click', function(e) {
  e.preventDefault();
  window.scrollTo({
      top: 0,
      behavior: 'smooth'
  });
});
