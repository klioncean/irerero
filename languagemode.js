const translations = {
    en: {
      home: "Home",
      courses: "Courses",
      about: "About us",
      contact: "Contact",
      welcome: "A community space for you!!",
      happiness: "Happiness is the only way! Have you ever felt that?",
      getStarted: "Get Started",
      information: "Have a fun 😄, Think Big 🧠! solve Problem😊.",
      courseheader: "Popular Courses",
      subcourseMeaning: "A platform for you to learn and solve world societal problems.",
      subcourseMeaningTwo: "Master technical skills for professional success.",
      subcourseMeaningThree: "Learn to build modern web applications from scratch.",
      subcourseMeaningFour: "Unlock the power of data analysis and visualization.",
      subcourseMeaningFive: "Grow your business with expert digital marketing strategies.",
      startLearning: "Start Learning",
      overview: "Irerero is an online platform dedicated to providing high-quality digital skills and learning experiences to users worldwide. Since our inception in 2023, we have been committed to making digital skills and learning accessible, effective, and enjoyable for learners of all ages and backgrounds.",
      mission: "Our mission at Irerero is to empower individuals to achieve their digital skills learning goals and unlock new opportunities in their personal and professional lives. We believe that digital skills are valuable assets that open doors to freedom, global communication, and personal growth.",
      abouttrnslt: "Irerero is an online platform dedicated to providing high-quality digital skills and learning experiences to users worldwide. Since our inception in 2023, we have been committed to making digital skills and learning accessible, effective, and enjoyable for learners of all ages and backgrounds.",
    },
    fr: {
      home: "Accueil",
      courses: "Cours",
      about: "À propos de nous",
      contact: "Contact",
      welcome: "Un espace communautaire pour vous!!",
      happiness: "Le bonheur est la seule voie ! L'avez-vous déjà ressenti ?",
      getStarted: "Commencer",
      information: "Amusez-vous 😄, pensez grand 🧠! résoudre le problème😊.",
      courseheader:"Cours populaires",
      subcourseMeaning: "Une plateforme pour vous permettre d'apprendre et de résoudre les problèmes de société mondiaux.",
      subcourseMeaningTwo: "Maîtriser les compétences techniques pour réussir professionnellement.",
      subcourseMeaningThree: "Apprenez à créer des applications Web modernes à partir de zéro.",
      subcourseMeaningFour: "Libérez la puissance de l'analyse et de la visualisation des données.",
      subcourseMeaningFive: "Développez votre entreprise avec des stratégies de marketing numérique expertes.",
      startLearning: "Commencer à apprendre",
      overview: "Irerero est une plateforme en ligne dédiée à fournir des compétences numériques et des expériences d'apprentissage de haute qualité aux utilisateurs du monde entier. Depuis notre création en 2023, nous nous engageons à rendre les compétences et l'apprentissage numériques accessibles, efficaces et agréables pour les apprenants de tous âges et de tous horizons.",
      mission: "Notre mission chez Irerero est de permettre aux individus d'atteindre leurs objectifs d'apprentissage des compétences numériques et de débloquer de nouvelles opportunités dans leur vie personnelle et professionnelle. Nous pensons que les compétences numériques sont des atouts précieux qui ouvrent les portes de la liberté, de la communication mondiale et de la croissance personnelle.",
      abouttrnslt: "Irerero est une plateforme en ligne dédiée à fournir des compétences numériques et des expériences d'apprentissage de haute qualité aux utilisateurs du monde entier. Depuis notre création en 2023, nous nous engageons à rendre les compétences et l'apprentissage numériques accessibles, efficaces et agréables pour les apprenants de tous âges et de tous horizons.",
    },
    rw: {
      home: "Ahabanza",
      courses: "Amasomo",
      about: "Ibyerekeye Twebwe",
      contact: "Twandikire",
      welcome: "Ahantu h'ubumwe kuri wowe!!",
      happiness: "Isanzure niyo nzira yonyine! Wigeze wumva?",
      getStarted: "Tangira",
      information: "Ishimire 😄, Tekereza 🧠! kemura Ikibazo😊.",
      courseheader:"Amasomo azwi",
      subcourseMeaning: "Urubuga rwo kwiga no gukemura ibibazo biri mw'isi.",
      subcourseMeaningTwo: "Kumenya ubuhanga bwa tekinike kugirango utsinde umwuga.",
      subcourseMeaningThree: "Wige kubaka urubuga rwa kijyambere kuva kera.",
      subcourseMeaningFour: "Fungura imbaraga zo gusesengura amakuru no kubonerana.",
      subcourseMeaningFive: "Kuza ubucuruzi bwawe hamwe nubuhanga bwo kwamamaza bwa digitale.",
      startLearning: "Tangira Kwiga",
      overview: "Irerero ni urubuga rwa interineti rwagenewe gutanga ubumenyi buhanitse bwa digitale hamwe nuburambe bwo kwiga kubakoresha kwisi yose. Kuva twashingwa mu 2023, twiyemeje gukora ubumenyi bwa digitale no kwiga bigerwaho, bikora neza, kandi bishimishije kubiga imyaka yose kandi bakomoka.",
      mission: "Inshingano yacu muri Irerero ni uguha imbaraga abantu kugirango bagere ku ntego zabo zo kwiga ubumenyi bwa digitale no gufungura amahirwe mashya mubuzima bwabo bwite kandi bwumwuga. Twizera ko ubumenyi bwa digitale ari umutungo w'agaciro ufungura imiryango y'ubwisanzure, itumanaho ku isi, no kuzamuka kwa muntu.",
      abouttrnslt: "Irerero ni urubuga rwa interineti rwagenewe gutanga ubumenyi buhanitse bwa digitale hamwe nuburambe bwo kwiga kubakoresha kwisi yose. Kuva twashingwa mu 2023, twiyemeje gukora ubumenyi bwa digitale no kwiga bigerwaho, bikora neza, kandi bishimishije kubiga imyaka yose kandi bakomoka.",
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
    document.querySelector('.course-header').textContent = translations[language].courseheader;
    document.querySelector('.subcourseMeaningOne').textContent = translations[language].subcourseMeaning;
    document.querySelector('.subcourseMeaningTwo').textContent = translations[language].subcourseMeaningTwo;
    document.querySelector('.subcourseMeaningThree').textContent = translations[language].subcourseMeaningThree;
    document.querySelector('.subcourseMeaningFour').textContent = translations[language].subcourseMeaningFour;
    document.querySelector('.subcourseMeaningFive').textContent = translations[language].subcourseMeaningFive;
    document.querySelector('.btntlnslt').textContent = translations[language].startLearning;
    document.querySelector('.btntlnslt2').textContent = translations[language].startLearning;
    document.querySelector('.btntlnslt3').textContent = translations[language].startLearning;
    document.querySelector('.btntlnslt4').textContent = translations[language].startLearning;
    document.querySelector('.btntlnslt5').textContent = translations[language].startLearning;
    document.querySelector('.information').textContent = translations[language].information;
    document.querySelector('.overview').textContent = translations[language].overview;
    document.querySelector('.missiontrnslt').textContent = translations[language].mission;
    document.querySelector('.abouttrnslt').textContent = translations[language].abouttrnslt;
    localStorage.setItem('selectedLanguage', language);
  }

  document.addEventListener('DOMContentLoaded', function() {
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'en';
    document.getElementById('language-selector').value = savedLanguage;
    changeLanguage();
  });