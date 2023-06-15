// Languages
import soprasteria from "../../../assets/images/experience/logosoprasteria.png";
import majorconsultants from "../../../assets/images/experience/logomajor.png";
import inetum from "../../../assets/images/experience/logoinetum.png";

export const experience = [
  {
    title: "Développeur Web",
    start: new Date(2022, 10, 7),
    end: new Date(2023, 6, 2),
    company: "Inetum",
    city: "Montpellier/Toulouse, Occitanie, France",
    description:
      "J'ai contribué au développement d'une refonte de site web pour le compte de la région Occitanie. " +
      "J'ai également été responsable du maintien en condition opérationnelle d'un site web. Mes missions ont été les suivantes :" +
      "<ul><li><b>Reverse-engineering</b> sur le code PHP</li>" +
      "<li>Développement d'une API Spring Boot</li>" +
      "<li>Développement d'écrans Angular</li>" +
      "<li>Reprise de données et amélioration de la structure BDD</li>" +
      "<li>Mise en place de l'intégration continue Jenkins</li>" +
      "<li>\"MCO\" du site Drupal</li></ul>",
    tags: [
      "Angular 15",
      "Spring Boot",
      "MySQL",
      "Mailcatcher",
      "Tomcat 9",
      "Keycloak",
      "Jenkins",
      "Drupal 9",
      "Docker",
    ],
    icon: inetum,
  },
  {
    title: "Développeur React.js/Drupal 9",
    start: new Date(2021, 5, 1),
    end: new Date(2022, 6, 17),
    company: "Sopra Steria Group",
    city: "Aix-en-Provence, Languedoc-Roussillon, France",
    description:
      "J'ai contribué au développement \"from scratch\" d'un site web pour le compte de la FDJ. " +
      "J'ai également contribué au développement de <b>2 refontes</b> de sites web. Mes missions ont été les suivantes :" +
      "<ul><li>Développement des fonctionnalités clés au niveau de Drupal</li>" +
      "<li>Amélioration du processus de CI/CD</li>" +
      "<li>Présentations au client</li>" +
      "<li><b>Automatisation des tests</b> (front-end) (30 -> 80% couverture de code)</li>" +
      "<li>Développement d'écrans conformes à une maquette</li></ul>",
    tags: [
      "React.js",
      "Drupal",
      "Storybook",
      "Jest",
      "Gitlab CI/CD",
      "Docker",
      "Kubernetes",
      "Agile",
      "SAFe",
    ],
    icon: soprasteria,
  },
  {
    title: "Développeur Drupal 8/React.js",
    start: new Date(2020, 9, 1),
    end: new Date(2021, 1, 31),
    company: "Sopra Steria Group",
    city: "Montpellier, Languedoc-Roussillon, France",
    description:
      "Dans un contexte d'alternance, j'ai contribué au développement \"from scratch\" d'un site web " +
      "pour le compte de la région Occitanie. Mes missions ont été les suivantes :" +
      "<ul><li>Développement des fonctionnalités clés au niveau de Drupal</li>" +
      "<li>Développement d'écrans conformes à une maquette</li></ul>",
    tags: ["Drupal 8", "React.js", "Storybook", "Twig"],
    icon: soprasteria,
  },
  {
    title: "Développeur Angular/Spring",
    start: new Date(2020, 3, 1),
    end: new Date(2021, 4, 30),
    company: "Sopra Steria Group",
    city: "Montpellier, Languedoc-Roussillon, France",
    description:
      "Dans un contexte d'alternance, j'ai contribué au développement d'évolutions sur un site web " +
      "pour le compte de la région Occitanie. J'ai également travaillé sur la maintenance du site " +
      "en condition opérationnelle. Les phases d'évolutions ont été réalisées dans le cadre d'une " +
      "gestion de projet avec les <b>méthodes Agile</b>. " +
      "Mes missions ont été les suivantes :" +
      "<ul><li>Développement de nouvelles fonctionnalités</li>" +
      "<li><b>Optimisation et évolution</b> d'anciennes fonctionnalités</li>" +
      "<li>Optimisation du système de recherche de données (<b>refactoring complet</b>)</li>" +
      "<li>Support client</li></ul>",
    tags: [
      "Angular",
      "Spring",
      "Java",
      "Hibernate",
      "Querydsl",
      "PostgreSQL",
      "Agile",
    ],
    icon: soprasteria,
  },
  {
    title: "Développeur ESB",
    start: new Date(2018, 10, 1),
    end: new Date(2020, 2, 29),
    company: "Sopra Steria Group",
    city: "Montpellier, Languedoc-Roussillon, France",
    description:
      "Dans un contexte d'alternance, j'ai contribué à la maintenance du domaine " +
      '"Orcherstration de flux et dématérialisation" du SI de la région Occitanie. ' +
      "Mes missions ont été les suivantes :" +
      "<ul><li>Migration d'un ESB, de la phase de développement jusqu'à la mise en production</li>" +
      "<li>Analyse et résolution d'anomalies sur la GED (Gestion électronique de documents)</li>" +
      "<li><b>Support client</b> (contact client quotidien)</li></ul>",
    tags: ["Talend ESB", "SharePoint"],
    icon: soprasteria,
  },
  {
    title: "Développeur Windev Mobile",
    start: new Date(2018, 3, 1),
    end: new Date(2018, 5, 30),
    company: "Major Consultants",
    city: "Castelnau-le-Lez, Languedoc-Roussillon, France",
    description:
      "Durant un stage de 3 mois j'ai créé la première version l'application mobile " +
      "de Hordyplan. Cette application mobile avait pour principales fonctionnalités le " +
      "pointage des employés géolocalisé et la visualisation du planning.",
    tags: ["Windev Mobile"],
    icon: majorconsultants,
  },
];
