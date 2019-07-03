export default {
  meta: {
    title: 'CV - Stéphane Monnot : développeur web à Lyon',
    keywords: 'Osaka, React, PHP, Laravel',
    description:
      'Stéphane Monnot, Expert en développement web à Osaka, Japon. Spécialités : HTML5, React, Redux, PHP, Laravel, Ruby on Rails, Responsive Web Design.',
  },
  firstName: 'Stéphane',
  lastName: 'Monnot',
  emailAddress: 'monnot.stephane@gmail.com',
  headline: 'Ingénieur full-stack web à Lyon',
  summary: `
    Ingénieur full-stack web & intervenant / formateur dans le domaine du web.<br />
    Mon domaine de compétences comprend : le développement PHP (Symfony & Laravel frameworks), le développement Javascript (ES6, ReactJS, VueJS), le développement piloté par les tests, l'intégration continue, WordPress et le développement d'APIs.<br /><br />Grâce à une license dans le domaine du développement web obtenue à l'Université Claude Bernard Lyon 1, j'ai pu découvrir les bases de la programmation web et ainsi avoir des bases solides pour en faire véritablement mon métier. En plus d'être mon métier, c'est une réelle passion.<br /><br />
    Ma stack favorite : Laravel 5, Symfony Flex, PHPUnit, PHPQA, Micro-services, Docker, ReactJS et ReactNative. Le tout avec intégration/déploiement continu via Gitlab.
    `,
  pictureUrl: 'me.jpg',
  dateOfBirth: '1987-09-16',
  mainAddress: 'Osaka, Japon',
  websites: [
    {
      type: 'Linkedin',
      url: 'https://www.linkedin.com/in/monnotnakatsuji/',
    },
  ],
  phoneNumbers: [
    {
      type: 'Pro',
      number: '+33 (0)6 73 83 21 42',
    },
    {
      type: 'Perso',
      number: '+33 (0)6 73 83 21 42',
    },
  ],
  imAccounts: [
    {
      type: 'Line',
      name: 'shinbuntu',
    },
    {
      type: 'Skype',
      name: 'monnot.stephane',
    },
  ],
  snsAccounts: [
    {
      name: 'Linkedin',
      icon: 'linkedin',
      url: 'https://www.linkedin.com/in/monnotstephane/',
    },
    {
      name: 'Github',
      icon: 'github',
      url: 'https://github.com/stephane-monnot',
    },
  ],
  locations: [
    {
      name: 'Osaka',
      country: 'Japon',
      isCurrent: true,
    },
    {
      name: 'Lyon',
      country: 'France',
    },
  ],
  positions: [
    {
      title: 'Lead developer',
      keywords: [
        {
          name: 'Laravel 5',
        },
        {
          name: 'Vuejs',
        },
        {
          name: 'ReactJS',
        },
        {
          name: 'Docker',
        },
        {
          name: 'CI',
        },
        {
          name: 'TDD',
        },
      ],
      summary: `
        Développement d'une solution pour les concessions automobiles afin de faciliter le parcours client lors du dépôt et de la récupération des véhicules pour une réparation ou un entretien.<br />
      `,
      more: `
        <p>
          Cette solution se compose :<ul>
          <li>d'une API sous Laravel 5 avec oauth2</li>
          <li>d'une application ReactJS/Redux installée sur une borne dans la concession et à destination des clients de la concession</li>
          <li>d'une application VueJS permettant aux mécanos/vendeurs de visualiser en temps réel les dépôts ainsi que d'autres informations</li>
          <li>de Websockets pour les notifications en "temps réel"</li>
          <li>de Websockets pour communiquer avec des casiers connectés</li>
          </ul>
          <p>Afin de garantir une qualité optimale, les différentes applications sont testées unitairement et fonctionnellement avec PHPUnit, Jest/Enzyme et Cypress.</p>
          <p>Utilisation de Docker / rancher pour le développement/déploiement. Les tests unitaires/e2e sont automatiquement lancés et la qualité du code est automatiquement vérifiée grâce à Gitlab et l'intégration continue.</p>
          <p>Utilisation des méthodes agiles</p>
        </p>
      `,
      startDate: '2018',
      endDate: "Aujourd'hui",
      isCurrent: true,
      company: 'Iscab',
      picture: 'logo-iscab.png',
    },
    {
      title: 'Ingénieur full-stack web',
      keywords: [
        {
          name: 'Symfony 4',
        },
        {
          name: 'ReactJS',
        },
        {
          name: 'Docker',
        },
        {
          name: 'CI',
        },
      ],
      summary: `
        FINKEY est la première plateforme collaborative dédiée au financement des entrepreneurs, dirigeants, et repreneur d'entreprise.
      `,
      more: `
        <p>
          Grâce à une solution web performante, l'ambition de FinKey est d'accompagner les entreprises en recherche de financement en leur proposant le financeur idéal (banques, investisseurs…).<br />
          Cette solution se compose :<ul>
            <li>d'une API sous Symfony 4</li>
            <li>d'une application Web ReactJS/Redux à destination des différents acteurs.</li>
          </ul>
        </p>
      `,
      startDate: '2018',
      endDate: "Aujourd'hui",
      isCurrent: true,
      company: 'Finkey',
      picture: 'logo-finkey.png',
    },
    {
      title: 'Ingénieur full-stack web',
      keywords: [
        {
          name: 'Laravel 5',
        },
        {
          name: 'Symfony 3',
        },
        {
          name: 'Vuejs',
        },
        {
          name: 'ReactJS',
        },
        {
          name: 'Docker',
        },
        {
          name: 'CI',
        },
        {
          name: 'Apache Cordova',
        },
        {
          name: 'TDD',
        },
      ],
      summary: `
        Développement de différents projets Web et mobile. Du simple site vitrine, en passant par des applications mobiles, API, application Frontend.<br />
        Aussi consultant/sous-traitant sur plusieurs projets plus ou moins techniques comme par exemple : 
      `,
      more: `
        <ul>
          <li>l'aspiration et l'analyse syntaxique automatique quotidienne ou à la demande de sites (plus de 200 sites)</li>
          <li>l'intervention sur des applications existantes dans une équipe technique afin de donner un petit coup de pouce lors de période de rush</li>
          <li>la mise en place de tests automatisés sur des applications PHP/JS via des frameworks de tests comme PHPUnit, Jest ou encore Cypress</li>
          <li>la dockerisation d'application PHP/JS</li>
          <li>le développement d'applications Facebook (plus de 20 jeux/applications)</li>
          <li>le développement de sites Wordpress (~10 sites Wordpress).</li>
          <li>et pleins d'autres solutions.</li>
        </ul>
      `,
      startDate: '2010',
      endDate: "Aujourd'hui",
      isCurrent: true,
      company: 'NanokaWeb',
      picture: 'logo-nanoka.png',
    },
    {
      title: 'Intervenant / formateur',
      keywords: [
        {
          name: 'PHP (Les bases, POO, Framework Laravel)',
        },
        {
          name: 'MySQL',
        },
      ],
      summary: `
        Interventions dans le développement web et plus précisément sur les technologies PHP/MySQL afin d'appréhender le développement web.<br />
        La formation comprenait : 
      `,
      more: `
        <ul>
          <li>HTML 5, CSS 3</li>
          <li>les bases de la programmation PHP</li>
          <li>les notions de programmation orientée objet</li>
          <li>la découverte d'un framework (Laravel 5)</li>
          <li>la mise en pratique des choses apprises dans un projet Web</li>
          <li>l'accompagnement des étudiants dans la mise en pratique des choses apprises au cours de l'année dans un projet de fin d'étude pour l'école.</li>
        </ul>
      `,
      startDate: '2016',
      endDate: '2018',
      isCurrent: false,
      company: 'Sup’ La Mache',
      picture: 'logo-suplamache.png',
    },
    {
      title: 'Développeur web sénior & CTO / Lead developer',
      keywords: [
        {
          name: 'Solire Framework',
        },
        {
          name: 'Jquery',
        },
        {
          name: 'AngularJS',
        },
        {
          name: 'Tests unitaires avec Atoum',
        },
      ],
      summary: `
        Développement de solutions web pour divers clients avec les technologies PHP/MySQL/Javascript.<br />
        J'ai eu l'occasion de développer diverses solutions comme :
      `,
      more: `
        <ul>
          <li>un annuaire de nounous avec fonction de recherche sur la localisation</li>
          <li>un réseau social avec fonction de recherche avancée sur la localisation</li>
          <li>une solution de génération de sites de recrutement (~100aines de site générés dont le site de recrutement français du premier Fast Food mondial, KparK, Babolat, Darty, ...)</li>
          <li>une solution de gestion de contenu des sites des compagnies régionales des commissaires aux comptes (+ de 20 sites générés dont celui de la CRCC de Lyon, Toulouse, Bordeaux ...)</li>
          <li>plusieurs sites de vente en ligne</li>
          <li>un site de vente de voyage à destination de la chine, la russie et autres pays. Le site devait être hébérgé dans les différents pays de destination pour des raisons de SEO.</li>
          <li>et pleins d'autres solutions.</li>
        </ul>
      `,
      startDate: '2009',
      endDate: '2017',
      isCurrent: false,
      company: 'Solire',
      picture: 'logo-solire.png',
    },
  ],
  interests: '',
  languages: [
    {
      name: 'Français',
      level: 'Natif',
      levelNumber: 10,
    },
    {
      name: 'Anglais',
      level: 'Compétence professionnelle',
      levelNumber: 6,
    },
    {
      name: 'Japonais',
      level: 'Compétence professionnelle',
      levelNumber: 6,
    },
    {
      name: 'Coréen',
      level: 'Notions élémentaires',
      levelNumber: 2,
    },
  ],
  skills: [
    {
      name: 'Laravel 5',
      language: {
        name: 'PHP',
        style: 'php',
      },
      category: {
        name: 'Frameworks / SDK / CMS',
      },
    },
    {
      name: 'Symfony 2 & 3',
      language: {
        name: 'PHP',
        style: 'php',
      },
      category: {
        name: 'Frameworks / SDK / CMS',
      },
    },
    {
      name: 'Ruby on Rails',
      language: {
        name: 'Ruby',
        style: 'ruby',
      },
      category: {
        name: 'Frameworks / SDK / CMS',
      },
    },
    {
      name: "Développement d'API avec Rails",
      language: {
        name: 'Ruby',
        style: 'ruby',
      },
      category: {
        name: 'Frameworks / SDK / CMS',
      },
    },
    {
      name: 'RSpec',
      language: {
        name: 'Ruby',
        style: 'ruby',
      },
      category: {
        name: 'Frameworks / SDK / CMS',
      },
    },
    {
      name: 'React',
      language: {
        name: 'Javascript',
        style: 'javascript',
      },
      category: {
        name: 'Frameworks / SDK / CMS',
      },
    },
    {
      name: 'React Native',
      language: {
        name: 'Javascript',
        style: 'javascript',
      },
      category: {
        name: 'Frameworks / SDK / CMS',
      },
    },
    {
      name: 'Redux',
      language: {
        name: 'Javascript',
        style: 'javascript',
      },
      category: {
        name: 'Frameworks / SDK / CMS',
      },
    },
    {
      name: 'ES6',
      language: {
        name: 'Javascript',
        style: 'javascript',
      },
      category: {
        name: 'Langages',
      },
    },
    {
      name: 'Facebook SDK',
      language: {
        name: 'Javascript',
        style: 'javascript',
      },
      category: {
        name: 'Frameworks / SDK / CMS',
      },
    },
    {
      name: 'Facebook SDK',
      language: {
        name: 'PHP',
        style: 'php',
      },
      category: {
        name: 'Frameworks / SDK / CMS',
      },
    },
    {
      name: 'API',
      language: {
        name: 'PHP',
        style: 'php',
      },
      category: {
        name: 'Frameworks / SDK / CMS',
      },
    },
    {
      name: 'SQL (MYSQL, PostgreSQL, PostGIS)',
      language: {
        name: 'Autres',
        style: 'others',
      },
      category: {
        name: 'Langages',
      },
    },
    {
      name: 'Continuous integration',
      language: {
        name: 'Autres',
        style: 'others',
      },
      category: {
        name: 'Langages',
      },
    },
    {
      name: 'TDD',
      language: {
        name: 'Autres',
        style: 'others',
      },
      category: {
        name: 'Langages',
      },
    },
    {
      name: 'HTML5/CSS3',
      language: {
        name: 'Autres',
        style: 'others',
      },
      category: {
        name: 'Frameworks / SDK / CMS',
      },
    },
    {
      name: 'Bootstrap',
      language: {
        name: 'Autres',
        style: 'others',
      },
      category: {
        name: 'Frameworks / SDK / CMS',
      },
    },
    {
      name: 'JQUERY',
      language: {
        name: 'Javascript',
        style: 'javascript',
      },
      category: {
        name: 'Frameworks / SDK / CMS',
      },
    },
    {
      name: 'Wordpress',
      language: {
        name: 'PHP',
        style: 'php',
      },
      category: {
        name: 'Frameworks / SDK / CMS',
      },
    },
    {
      name: 'Linux',
      category: {
        name: 'Outils',
      },
    },
    {
      name: 'Docker',
      category: {
        name: 'Outils',
      },
    },
    {
      name: 'JIRA/Redmine',
      category: {
        name: 'Outils',
      },
    },
    {
      name: 'GIT',
      category: {
        name: 'Outils',
      },
    },
    {
      name: 'Jenkins/Gitlab-CI',
      category: {
        name: 'Outils',
      },
    },
    {
      name: 'Docker',
      category: {
        name: 'Outils',
      },
    },
    {
      name: 'GITLAB/GITHUB',
      category: {
        name: 'Outils',
      },
    },
  ],
  tools:
    "Système d'exploitation : Linux (plus de 10 ans)<br />IDE : PhpStorm / RubyMine<br />Gestionnaire de conteneurs : Docker / Rancher<br />Outils d’intégration continue : Jenkins / Gitlab-CI / Travis<br />Logiciels de gestion de projet : Jira / Gitlab<br />Outils de gestion de versioning : Gitlab / Github<br />",
  educations: [
    {
      schoolName: 'Université Claude Bernard Lyon 1',
      fieldOfStudy: 'Metinet',
      startDate: '2009',
      endDate: '2010',
      degree: 'Licence',
      activities: [
        {
          name: 'Base de données',
        },
        {
          name: 'PHP',
        },
        {
          name: 'Flash',
        },
        {
          name: 'Java',
        },
        {
          name: 'Anglais',
        },
        {
          name: 'Communication',
        },
        {
          name: 'Javascript',
        },
      ],
      summary: `
        Approfondissement des concepts de programmation et spécialisation dans le développement web.
      `,
    },
    {
      schoolName: 'Lycée Joseph Marie Carriat',
      fieldOfStudy: "Informatique de Gestion option développeur d'applications",
      startDate: '2007',
      endDate: '2009',
      degree: 'Brevet de technicien supérieur (BTS)',
      activities: [
        {
          name: 'Programmation',
        },
        {
          name: 'Anglais',
        },
        {
          name: 'Mathématiques',
        },
        {
          name: 'Management',
        },
      ],
      summary: `
        Premier pas dans le monde magique de la programmation informatique et découverte de la programmation web qui a changée ma vie.
      `,
    },
  ],
  projects: [
    {
      title: 'OVH provider pour External DNS Rancher',
      subtitle: 'Librairie GO',
      category: 'library',
      subcategory: 'go',
      contribution: true,
      links: [
        {
          url: 'https://github.com/rancher/external-dns/pull/105',
          text: 'Voir les sources',
        },
      ],
      technologies: [
        {
          name: 'GO',
        },
        {
          name: 'Rancher',
        },
      ],
      content:
        'Contributions à une librairie Rancher qui permet de mettre à jour des DNS externes avec les enregistrements générés par Rancher.',
      date: '2018-03-08',
    },
    {
      title: 'React Fake Code Typing',
      subtitle: 'Composant React',
      category: 'library',
      subcategory: 'react',
      links: [
        {
          url: 'https://stephanemonnot.com/404.html',
          text: 'Voir une démo',
        },
        {
          url: 'https://github.com/stephane-monnot/react-fake-code-typing',
          text: 'Voir les sources',
        },
      ],
      technologies: [
        {
          name: 'ReactJS',
        },
      ],
      content: 'Un composant React pour générer une fausse saisie de code.',
      date: '2018-01-24',
    },
    {
      title: 'Leo Pole Consulting SAS',
      subtitle: 'Projet WordPress',
      category: 'project',
      subcategory: 'wordpress',
      links: [
        {
          url: 'http://leo-pole.fr/',
          text: 'Visitez le site',
        },
      ],
      technologies: [
        {
          name: 'PHP',
        },
        {
          name: 'WordPress',
        },
        {
          name: 'Multilingue',
        },
      ],
      content:
        'Site vitrine de la société Leo Pole Consulting SAS créé avec WordPress en français et en anglais.',
      date: '2018-01-10',
    },
    {
      title: 'Resume generator',
      subtitle: 'Projet Laravel',
      category: 'project',
      subcategory: 'laravel',
      links: [],
      technologies: [
        {
          name: 'PHP',
        },
        {
          name: 'Laravel',
        },
        {
          name: 'Déploiement continu',
        },
      ],
      content:
        "Site Web permettant de générer un CV à partir un JSON. Un CV est la combination d'un CV en format PDF et un CV en format WEB développé grâce à ReactJS.",
      date: 'En cours',
    },
    {
      title: 'MACSF LIBEA',
      subtitle: 'Projet Apache Cordova',
      category: 'project',
      subcategory: 'cordova',
      links: [],
      technologies: [
        {
          name: 'Apache Cordova',
        },
        {
          name: 'IOS',
        },
        {
          name: 'Android',
        },
      ],
      content:
        "Application mobile IOS et Android d'une compagnie d'assurance MACSF LIBEA qui permet la gestion de services tels que la recherche de taxis, de garages, l'envoi de factures pour remboursement.",
      date: '2017-12-15',
    },
    {
      title: 'Saint-Fons JAZZ',
      subtitle: 'Projet Laravel',
      category: 'project',
      subcategory: 'laravel',
      links: [
        {
          url: 'https://stfonsjazz.nanoka.fr/',
          text: 'Visitez la démo',
        },
        {
          url: 'http://www.saint-fons-jazz.fr/',
          text: 'Visitez le site',
        },
      ],
      technologies: [
        {
          name: 'PHP',
        },
        {
          name: 'Laravel',
        },
        {
          name: 'Déploiement continu',
        },
      ],
      content:
        "Site Web de l'école Saint-Fons Jazz permettant de réserver des spectacles et listant les rendez-vous du festival Saint-Fons Jazz.",
      date: '2017-12-08',
    },
    {
      title: 'React pen pals Frontend',
      subtitle: 'Projet React',
      category: 'project',
      subcategory: 'react',
      links: [
        {
          url: 'https://penpals.pages.gitlab.nanoka.fr/frontend/',
          text: 'Visit website',
        },
        {
          url: 'https://github.com/stephane-monnot/penpals-frontend',
          text: 'View source code',
        },
      ],
      technologies: [
        {
          name: 'React',
        },
        {
          name: 'Redux',
        },
        {
          name: 'Déploiement continu',
        },
      ],
      content: "Frontend de l'application pen pals, développé avec React.",
      date: 'En cours',
    },
    {
      title: 'Pen pals API Backend',
      subtitle: 'API Rails application',
      category: 'project',
      subcategory: 'rails',
      links: [
        {
          url: 'https://github.com/stephane-monnot/penpals-backend',
          text: 'Voir les sources',
        },
      ],
      technologies: [
        {
          name: 'Ruby on Rails',
        },
        {
          name: 'RSpec',
        },
        {
          name: 'API',
        },
        {
          name: 'Docker',
        },
      ],
      content: 'API permattant de gérer des messages entre correspondants.',
      date: 'En cours',
    },
    {
      title: 'React Vertical Timeline',
      subtitle: 'Composant React',
      category: 'library',
      subcategory: 'react',
      links: [
        {
          url: 'https://stephane-monnot.github.io/react-vertical-timeline/',
          text: 'Visitez le site',
        },
        {
          url: 'https://github.com/stephane-monnot/react-vertical-timeline',
          text: 'Voir les sources',
        },
      ],
      technologies: [
        {
          name: 'ReactJS',
        },
      ],
      content: 'Un composant React pour générer des chronologies verticales.',
      date: '2017-10-27',
    },
    {
      title: 'React curriculum vitae',
      subtitle: 'Projet React',
      category: 'project',
      subcategory: 'react',
      links: [
        {
          url: 'https://stephanemonnot.com/',
          text: 'Visitez le site',
        },
        {
          url: 'https://github.com/stephane-monnot/resume',
          text: 'Voir les sources',
        },
      ],
      technologies: [
        {
          name: 'ReactJS',
        },
        {
          name: 'Redux',
        },
        {
          name: 'Déploiement continu',
        },
      ],
      content:
        'Mon CV en japonais, français et anglais, développé avec React.<br>100/100 en score PageSpeed Insights mobile et ordinateur.',
      date: '2017-10-02',
    },
    {
      title: 'Application Piq-Up',
      subtitle: 'Application Facebook',
      category: 'project',
      subcategory: 'facebook',
      links: [
        {
          url: 'https://apps.facebook.com/ct_quizzy',
          text: "Ouvrir l'application",
        },
      ],
      technologies: [
        {
          name: 'PHP',
        },
        {
          name: 'Facebook SDK',
        },
      ],
      content:
        "L'application pIQ-UP choisie des tests adaptés au profil cognitif de l'utilisateur pour l'aider à faire des progrès grâce à des exercices.",
      date: '2017-08-20',
    },
    {
      title: 'Laravel 5 Friendships',
      subtitle: 'Bibliothèque Laravel',
      category: 'library',
      subcategory: 'laravel',
      contribution: true,
      links: [
        {
          url:
            'https://github.com/hootlex/laravel-friendships/commits?author=stephane-monnot',
          text: 'Voir les commits',
        },
      ],
      technologies: [
        {
          name: 'PHP',
        },
        {
          name: 'Laravel',
        },
        {
          name: 'PHPUnit',
        },
      ],
      content:
        'Contributions à une bibliothèque Laravel qui donne la possibilité de gérer des amitiés avec des modèles Eloquent.<br />Ajout de nouvelles fonctionnalités, amélioration de la build, ajout de tests unitaires, documentation, ...',
      date: '2016-03-05',
    },
    {
      title: 'Gestion de comptes utilisateurs MySQL en PHP',
      subtitle: 'Bibliothèque PHP',
      category: 'library',
      subcategory: 'php',
      links: [
        {
          url: 'https://github.com/stephane-monnot/db-user',
          text: 'Voir les sources',
        },
      ],
      technologies: [
        {
          name: 'PHP',
        },
        {
          name: 'Atoum',
        },
      ],
      content:
        "Bibliothèque qui rend facile la gestion de comptes utilisateurs MySQL en PHP et évite l'utilisation de requêtes SQL brutes.",
      date: '2015-10-02',
    },
    {
      title: 'GOCR pour PHP',
      subtitle: 'Bibliothèque PHP',
      category: 'library',
      subcategory: 'php',
      links: [
        {
          url: 'https://github.com/stephane-monnot/gocr-php',
          text: 'Voir les sources',
        },
      ],
      technologies: [
        {
          name: 'PHP',
        },
        {
          name: 'Atoum',
        },
      ],
      content:
        "un wrapper pour utiliser Gocr dans des scripts PHP. Cette bibliothèque rend facile l'utilisation  du logiciel OCR nommé GOCR.",
      date: '2015-09-07',
    },
    {
      title: 'Application Whopper Moveout pour Burger King France',
      subtitle: 'Application Facebook',
      category: 'project',
      subcategory: 'facebook',
      links: [],
      technologies: [
        {
          name: 'PHP',
        },
        {
          name: 'Facebook SDK',
        },
      ],
      content: 'Application Facebook pour Burger King France.',
      date: '2015-03-17',
    },
    {
      title: 'Application BKAddicts pour Burger King France',
      subtitle: 'Application Facebook',
      category: 'project',
      subcategory: 'facebook',
      links: [
        {
          url:
            'https://www.facebook.com/burgerkingfranceofficiel/app/604808892968722/',
          text: "Ouvrir l'application",
        },
      ],
      technologies: [
        {
          name: 'PHP',
        },
        {
          name: 'Facebook SDK',
        },
      ],
      content: 'Application pour Burger King France',
      date: '2014-09-26',
    },
    {
      title: 'EM2C',
      subtitle: 'PHP Project',
      category: 'project',
      subcategory: 'php',
      links: [
        {
          url: 'http://www.em2c.com/',
          text: 'Visitez le site 1',
        },
        {
          url: 'http://www.em2c-voslocaux.com/',
          text: 'Visit le site 2',
        },
      ],
      technologies: [
        {
          name: 'PHP',
        },
        {
          name: 'Javascript',
        },
      ],
      content: 'Site vitrine de la compagnie EM2C et de ses produits.',
      date: '2018-01-10',
    },
  ],
  volunteer: [
    {
      name: '',
    },
  ],
  hobbies: [
    {
      name: 'La cuisine',
      icon: 'restaurant',
      description:
        'Particulièrement la cuisine japonaise, coréenne et française.',
    },
    {
      name: 'Les voyages',
      icon: 'flight',
      description: 'Seul ou à plusieurs.',
    },
    {
      name: "L'apprentissage de langue",
      icon: 'school',
      description: 'Le japonais et le coréen.',
    },
    {
      name: 'Le vélo',
      icon: 'directions_bike',
      description: 'Quand il fait beau.',
    },
    {
      name: 'Le trading',
      icon: 'attach_money',
      description: 'De crypto-monnaies.',
    },
  ],
};
