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


// another

document.addEventListener('DOMContentLoaded', function() {
  const menuItems = document.querySelectorAll('header nav ul li a');
  const sections = document.querySelectorAll('section');

  // Function to set active menu item
  function setActiveMenuItem(id) {
    menuItems.forEach(item => {
      item.classList.remove('active');
      if (item.getAttribute('id') === id) {
        item.classList.add('active');
        // Store the active menu item in local storage
        localStorage.setItem('activeMenuItem', id);
      }
    });
  }

  // Function to get the current section in view
  function getCurrentSection() {
    let currentSection = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      if (pageYOffset >= sectionTop - 60) { // Adjust offset as necessary
        currentSection = section.getAttribute('id');
      }
    });
    return currentSection;
  }

  // Retrieve the active menu item from local storage
  const savedActiveMenuItem = localStorage.getItem('activeMenuItem');
  if (savedActiveMenuItem) {
    setActiveMenuItem(savedActiveMenuItem);
  } else {
    // Set "Home" as the default active menu item
    setActiveMenuItem('home-menu');
  }

  // Update active menu item on scroll
  window.addEventListener('scroll', () => {
    const currentSection = getCurrentSection();
    if (currentSection) {
      const activeMenuItem = `${currentSection}-menu`;
      setActiveMenuItem(activeMenuItem);
    }
  });

  // Update active menu item on click
  menuItems.forEach(item => {
    item.addEventListener('click', () => {
      setActiveMenuItem(item.getAttribute('id'));
    });
  });
});