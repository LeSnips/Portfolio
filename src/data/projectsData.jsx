import React from 'react';
import { Code, Server, Cpu, Calculator, HeartHandshake } from 'lucide-react';

export const infoProjects = [
  {
    id: 1,
    title: "PST 2A - Button Quest",
    subtitle: "Borne d'arcade interactive hardware & software",
    shortDescription: "Conception d'une table de jeu interactive présentée à leHack, mêlant électronique embarquée et backend web.",
    fullDescription: [
  "Conception et réalisation complète d'une valise d'arcade interactive à deux joueurs sur Raspberry Pi 5, pensée pour animer les stands de l'école lors des salons et événements étudiants. Pour la structure physique, nous avions d'abord imaginé un système de rails pour faire glisser les boîtes de jeux, mais face au coût élevé en plastique que cela représentait, nous avons échangé avec le technicien de l'école qui nous a conseillé d'utiliser des grenouillères : une solution bien plus économique, rapide à monter et solide pour maintenir l'ensemble. Le jeu prend ainsi la forme d'un duel en temps réel où deux participants s'affrontent côte à côte sur un parcours rythmé par de gros boutons lumineux, mêlant adresse physique et réflexion à travers quatre épreuves : un circuit de Docteur Maboul sur fil de cuivre, un Mastermind sur écran, un quiz technique et le crochetage d'un vrai cadenas pour arrêter le chronomètre.",
  "Côté matériel, nous avons conçu un câblage modulaire et intégré deux expanseurs de ports I2C (MCP23017) pour démultiplier les entrées/sorties du Raspberry Pi afin de piloter simultanément les boutons poussoirs à LEDs, les plots métalliques et deux afficheurs chronomètres 7 segments (TM1637). Pour garantir que la borne résiste aux manipulations parfois brusques en salon, j'ai développé une surcouche logicielle utilisant des verrous (RLock) pour sécuriser les échanges sur le bus I2C et éviter tout plantage en cas de micro-coupure ou de faux contact.",
  "Côté logiciel, l'ensemble du système tourne sur un serveur Python 3 avec Flask, structuré en Blueprints pour séparer proprement la logique des mini-jeux, le parcours joueur et l'interface d'administration, le tout appuyé par des threads en arrière-plan pour surveiller l'état des capteurs en continu. L'interface web a été développée sur mesure en HTML, CSS et JavaScript dans un style borne d'arcade rétro 8-bit, tandis que la base de données MongoDB est isolée dans un conteneur Docker pour faciliter le déploiement et gérer le classement général des meilleurs temps en direct.",
  "Enfin, nous avons pensé le projet comme un véritable produit prêt pour le terrain en ajoutant des outils d'exploitation complets : un script de démarrage automatisé (pst.sh), une interface web d'administration pour ajuster les paramètres de jeu en direct, des scripts Python de dépannage rapide en ligne de commande (réinitialisation des LEDs, gestion des joueurs) ainsi qu'un script de sauvegarde automatique qui exporte la base de données sur une clé USB à chaque fin de partie."
],
    skills: ["Raspberry Pi 5", "Python", "C", "Docker", "MongoDB"],
    images: [
      { src: "./images/table_allumer.jpg", alt: "Table pour 1 joueur" },
      { src: "./images/Boite_Rasp.png", alt: "Boite principale contenant la raspberry pi 5" }
    ],
    links: [
      { label: "Voir sur GitHub", url: "https://github.com/gougoumag06/PST-2A-Button_Quest" }
    ]
  },
  {
    id: 2,
    title: "Homelab",
    subtitle: "Serveur auto-hébergé & administration système",
    shortDescription: "Déploiement et sécurisation de services personnels conteneurisés sur Raspberry Pi 5 sous Debian.",
    fullDescription: [
      "Administration quotidienne d'un serveur domestique sous Debian faisant tourner plusieurs services isolés via Docker.",
      "Configuration d'AdGuard Home pour le filtrage DNS sur le réseau local, de Tailscale pour un accès SSH distant sécurisé, HomePage pour avoir une vu d'ensemble sur mes accès, Gestion de la domotique comme l'aspirateur, caméra de surveillance, etc... et héberge un traqueur de média",
      "Projet toujours en cours et donc non aboutie pour l'instant"
    ],
    skills: ["Linux", "Docker", "AdGuard", "Tailscale", "Réseau"],
    images: [],
    links: [
      { label: "Voir sur GitHub", url: "https://github.com/LeSnips/HomeLab" }
    ]
  },
  { id: 3, empty: true },
  { id: 4, empty: true }
];

export const horsInfoProjects = [
  {
    id: 5,
    title: "Trésorier BDA",
    subtitle: "Bureau des Arts - ESIEA",
    shortDescription: "Gestion du budget annuel, suivi de la trésorerie et financement des événements culturels de l'école.",
    fullDescription: [
      "Responsable du budget et de la gestion courante des comptes du BDA : relation directe avec la banque, classement des factures, contrôle des dépenses et montage des demandes de subventions.",
      "Implication active dans la vie associative et l'organisation des événements, en participant aussi bien à la validation des budgets des sorties quà la logistique des courses et à la préparation des repas.",
      "Nous proposons des soirées jeux accompagner d'un repas fait par nos soins Ou bien des évenements plus importans comme des murder partys créer par notre team Jeux ou des concerts fait par notre team Musique."
    ],
    skills: ["Gestion de budget", "Trésorerie", "Travail d'équipe"],
    images: [],
    links: [
      { label: "Voir page BDA", url: "https://www.esiea.fr/associations/lecole-association-bureau-des-arts-laval/" }
    ]
  },
  {
    id: 6,
    title: "Projet RSE - TAP Robotique",
    subtitle: "Médiation robotique en école primaire",
    shortDescription: "Animation d'ateliers pratiques de robotique et d'initiation à la logique pour des élèves de primaire.",
    fullDescription: [
      "Conception et animation de séances ludiques de découverte de la robotique et de l'algorithmique auprès de jeunes élèves.",
      "Adaptation du discours technique pour vulgariser des concepts informatiques de manière accessible."
    ],
    skills: ["Vulgarisation", "Pédagogie", "Robotique"],
    images: [],
    links: []
  },
  {
    id: 7,
    title: "Projet RSE - Horizon Japon",
    subtitle: "Événement culinaire solidaire",
    shortDescription: "Lutter contre la précarité alimentaire en faisant des repas japonais",
    fullDescription: [
      "L'objectif principal de ce projet est de lutter contre la précarité alimentaire chez les étudiants.",
      "Pour cela notre collaborateur l'association Horizon Japon nous aide pour réaliser des repas japonais à prix coutant.",
      "Nous avons organisé plusieurs repas comme des karaage pendant la nuit de l'info avec une centaine de repas vendus sans gaspiage ou bien une vente de moshi.",
      "Mais le projet ne consiste pas seulement à faire des repas, nous avons aussi fait un forms pour récolter des informations sur les étudiants en précarité alimentaire dans notre campus.",
      "En terme de difficulté le point le plus dur est l'annulation du repas du Laval Virtuel qui à lieux tous les ans à cause du manque de japonais qui viennent à l'évenement. On à chercher à comment les rencontrer quand même en proposant un restaurant ou un bar mais avec leur emplois du temps chargé c'était compliqué.",
      "Ce projet m'a permis de rencontrer des personnes avec qui je n'aurais jamais forcément discuter ainsi que des compétences importantes comme l'organisation, la logistique et la gestion de projet."
    ],
    skills: ["Organisation", "Logistique", "Gestion de projet"],
    images: [
              { src: "./images/Course_repas_hj2.jpg", alt: "Événement Horizon Japon" }, 
              { src: "./images/Moshi_ouvert.jpg", alt: "Moshi ouvert" },
              { src: "./images/cuisson_poulet.jpg", alt: "Cuisson du poulet" }
    ],
    links: []
  },
  { id: 8, empty: true }
];