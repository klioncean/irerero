document.addEventListener("DOMContentLoaded", function() {
  // Get all the content sections
  var sections = document.querySelectorAll('.content-section');

  // Add click event listeners to navigation links
  var navLinks = document.querySelectorAll('nav a');
  navLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      var targetId = link.getAttribute('href').substring(1);
      // Scroll to the selected section
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
