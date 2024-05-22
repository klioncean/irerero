const translations = {
    en: {
      home: "Home",
      courses: "Courses",
      about: "About us",
      contact: "Contact",
      welcome: "A community space for you!!",
      happiness: "Happiness is the only way! Have you ever felt that?",
      getStarted: "Get Started",
    },
    fr: {
      home: "Accueil",
      courses: "Cours",
      about: "À propos de nous",
      contact: "Contact",
      welcome: "Un espace communautaire pour vous!!",
      happiness: "Le bonheur est la seule voie ! L'avez-vous déjà ressenti ?",
      getStarted: "Commencer",
    },
    rw: {
      home: "Ahabanza",
      courses: "Amasomo",
      about: "Ibyerekeye Twebwe",
      contact: "Twandikire",
      welcome: "Ahantu h'ubumwe kuri wowe!!",
      happiness: "Isanzure niyo nzira yonyine! Wigeze wumva?",
      getStarted: "Tangira",
    }
  };

  function changeLanguage() {
    const language = document.getElementById('language-selector').value;
    document.querySelector('a[href="#home"]').textContent = translations[language].home;
    document.querySelector('a[href="#courses"]').textContent = translations[language].courses;
    document.querySelector('a[href="#about"]').textContent = translations[language].about;
    document.querySelector('a[href="#contact"]').textContent = translations[language].contact;
    document.querySelector('.welcome-word').textContent = translations[language].welcome;
    document.querySelector('.hero p').textContent = translations[language].happiness;
    document.querySelector('.btn').textContent = translations[language].getStarted;
    localStorage.setItem('selectedLanguage', language);
  }

  document.addEventListener('DOMContentLoaded', function() {
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'en';
    document.getElementById('language-selector').value = savedLanguage;
    changeLanguage();
  });