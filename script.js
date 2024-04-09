document.addEventListener("DOMContentLoaded", function() {
 
  var sections = document.querySelectorAll('.content-section');

  var navLinks = document.querySelectorAll('nav a');
  navLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      var targetId = link.getAttribute('href').substring(1);
          document.getElementById(targetId).scrollIntoView({behavior: "smooth"});
    });
  });
  
});

document.addEventListener("DOMContentLoaded", function() {
  const lineIcon = document.querySelector('.line-icon');
  const navLinks = document.querySelector('header nav ul');

  lineIcon.addEventListener('click', function() {
    navLinks.classList.toggle('nav-active');
  });
});
