// Languages
import javascript from "../../../assets/icons/skills/javascript.png";
import typescript from "../../../assets/icons/skills/typescript.png";
import dart from "../../../assets/icons/skills/dart.png";
import java from "../../../assets/icons/skills/java.png";
// Frameworks
import flutter from "../../../assets/icons/skills/flutter.png";
import react from "../../../assets/icons/skills/react.png";
import spring from "../../../assets/icons/skills/spring.png";
import drupal from "../../../assets/icons/skills/drupal.png";
import vue from "../../../assets/icons/skills/vue.png";
import angular from "../../../assets/icons/skills/angular.png";
import storybook from "../../../assets/icons/skills/storybook.png";
import hibernate from "../../../assets/icons/skills/hibernate.png";
// CI/CD
import gitlab from "../../../assets/icons/skills/gitlab.png";
import gitlabcicd from "../../../assets/icons/skills/gitlabcicd.png";
import jenkins from "../../../assets/icons/skills/jenkins.png";
// Conteneurisation
import docker from "../../../assets/icons/skills/docker.png";
import kubernetes from "../../../assets/icons/skills/kubernetes.png";
// Architecture
import atomicdesign from "../../../assets/icons/skills/atomicdesign.png";
import mvc from "../../../assets/icons/skills/mvc.png";
import bloc from "../../../assets/icons/skills/bloc.png";
import rest from "../../../assets/icons/skills/rest.png";
// Bases de données
import postgresql from "../../../assets/icons/skills/postgresql.png";
import mysql from "../../../assets/icons/skills/mysql.png";
import mongodb from "../../../assets/icons/skills/mongodb.png";
// IDE
import androidstudio from "../../../assets/icons/skills/androidstudio.png";
import vscode from "../../../assets/icons/skills/vscode.png";
import intellij from "../../../assets/icons/skills/intellij.png";

export const skills = {
  Frameworks: [
    { icon: flutter, level: 3, name: "Flutter" },
    { icon: react, level: 3, name: "React.js" },
    { icon: spring, level: 2, name: "Spring" },
    { icon: drupal, level: 2, name: "Drupal" },
    { icon: vue, level: 2, name: "Vue.js" },
    { icon: angular, level: 2, name: "Angular 2+" },
    { icon: storybook, level: 1, name: "Storybook" },
    { icon: hibernate, level: 1, name: "Hibernate" },
  ],
  Langages: [
    { iconPath: javascript, level: 3, name: "Javascript" },
    { iconPath: typescript, level: 3, name: "Typescript" },
    { iconPath: dart, level: 2, name: "Dart" },
    { iconPath: java, level: 2, name: "Java" },
  ],
  Architecture: [
    { iconPath: atomicdesign, level: 3, name: "Atomic Design" },
    { iconPath: mvc, level: 2, name: "MVC" },
    { iconPath: bloc, level: 1, name: "BloC" },
    { iconPath: rest, level: 1, name: "REST" },
  ],

  IDE: [
    { icon: androidstudio, level: 3, name: "Android Studio" },
    { icon: vscode, level: 3, name: "VS Code" },
    { icon: intellij, level: 2, name: "IntelliJ" },
  ],
  "CI/CD": [
    { icon: gitlab, level: 3, name: "Gitlab" },
    { icon: gitlabcicd, level: 2, name: "Gitlab CI/CD" },
    { icon: jenkins, level: 2, name: "Jenkins" },
  ],
  "Base de données": [
    { icon: postgresql, level: 2, name: "PostgreSQL" },
    { icon: mysql, level: 2, name: "MySQL" },
    { icon: mongodb, level: 1, name: "MongoDB" },
  ],
  Conteneurisation: [
    { icon: docker, level: 2, name: "Docker" },
    { icon: kubernetes, level: 1, name: "Kubernetes" },
  ],
};
