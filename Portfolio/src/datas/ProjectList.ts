import smartMeal from "../assets/projects/smartMeal.webp";
import omniscience from "../assets/projects/omniscience.webp";
import myEvents from "../assets/projects/myEvents.webp";
import intranet from "../assets/projects/intranet.webp";
import irc from "../assets/projects/irc.webp";

const ProjectList = [
  {
    key: 0,
    name: "HealthFlow",
    description: `
        HealthFlow est une application mobile de gestion de la santé qui aide les utilisateurs à maintenir un mode de vie sain de manière fluide et harmonieuse. Elle permet de : 
          - Calculer le nombre de calories en fonction du poids des ingrédients. 
          - Ajouter ces calories dans différents blocs : petit-déjeuner, déjeuner, dîner et collation. 
          - Effectuer un calcul total des calories consommées dans la journée. 
          - Comparer ce total avec le métabolisme de base pour déterminer si on excède le nombre de calories conseillés.
      `,
    language: ["React Native", "Supabase"],
    screen: "",
    lienGithub: "https://github.com/Liilice/HealthFlow",
  },
  {
    key: 1,
    name: "Smart Meal",
    description:
      "SmartMeal est une application mobile qui vous propose des idées de repas, génère automatiquement la liste des ingrédients nécessaires, vous permet de l’envoyer à vos contacts par SMS, et vous aide à trouver un supermarché à proximité pour faire vos courses.",
    language: ["React Native"],
    screen: smartMeal,
    lienGithub: "https://github.com/Liilice/Tweet-Academie",
  },
  {
    key: 2,
    name: "Micro-services",
    description: `
      Ce projet a pour objectif :
      - Découvrir les microservices
      - Comprendre les différences entre SQL et NoSQL
      - Faire communiquer différentes API
      Trois microservices sont mis en place :
      - Service Auth & Chat (PHP / SQL) : gestion de l’inscription, connexion, sessions (token) et messages du chat stockés en base SQL.
      - Service Discussions (Node.js / NoSQL) : gestion des discussions stockées en base NoSQL (MongoDB).
      - API Gateway (PHP) : point d’entrée unique qui agrège les deux premiers services et gère les relations (liaison discussionId dans les messages SQL et userId dans les discussions NoSQL).
      `,
    language: [
      "PHP",
      "SLIM",
      "MYSQL",
      "JWT (JSON Web Token)",
      "EXPRESSJS",
      "MongoDB",
      "React",
    ],
    screen: "",
    lienGithub: "https://github.com/Liilice/Tweet-Academie",
  },
  {
    key: 3,
    name: "Omniscience",
    description: `
      Omniscience vise à offrir à tout utilisateur — du débutant à l’expert — un accès simple et personnalisé à la connaissance. Disponible sur mobile et tablette, l’application propose :
      - Un générateur de cours et exercices ludiques, alimenté par une IA Python.
      - Une centralisation des métadonnées pour une recherche rapide et intelligente.
      Le projet ambitionne de devenir la référence pour toute personne désireuse d’apprendre, en offrant une plateforme unique plutôt qu’une simple recherche sur Internet.
      `,
    language: ["Python", "Neo4j", "React Native", "NestJS", "AI", "GraphQL"],
    screen: omniscience,
    lienGithub: "https://github.com/Liilice/Tweet-Academie",
  },
  {
    key: 4,
    name: "My events",
    description:
      "Ce projet consiste à créer un site web interactif qui permet aux utilisateurs de tester et d'améliorer leur culture générale à travers des quiz variés. L'objectif principal est de développer une plateforme engageante et personnalisée, tout en respectant des contraintes techniques spécifiques. Le site sera développé en utilisant principalement le framework Symfony (version 3 ou supérieure) et interagira avec une base de données MySQL.",
    language: ["Angular", "NestJS"],
    screen: myEvents,
    lienGithub: "https://github.com/Liilice/Tweet-Academie",
  },
  {
    key: 5,
    name: "My IRC",
    description: `
      L’objectif de ce projet est de créer un serveur IRC (Internet Relay Chat) à l’aide de Node.js, permettant à plusieurs utilisateurs de se connecter simultanément, de communiquer via des « channels » et d’utiliser un système de commandes pour gérer leur expérience.
      Le serveur doit être capable de gérer plusieurs connexions, proposer la notion de salons de discussion (« channels ») et offrir une interface réactive en React pour une utilisation sans terminal.
    `,
    language: ["React", "SOKET.IO", "EXPRESSJS"],
    screen: irc,
    lienGithub: "https://github.com/Liilice/Tweet-Academie",
  },
  {
    key: 6,
    name: "Intranet - auto école",
    description: `
    Ce projet consiste à développer un intranet de gestion d’auto-école à l’aide du framework Django. L’application permettra aux secrétaires, instructeurs, étudiants et administrateurs de gérer les plannings, les comptes et le suivi de formation.
    `,
    language: ["Django"],
    screen: intranet,
    lienGithub: "https://github.com/Liilice/Tweet-Academie",
  },
];

export default ProjectList;
