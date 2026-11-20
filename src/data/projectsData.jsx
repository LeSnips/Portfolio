import React from 'react';
import { Code, Server, Cpu, Calculator, HeartHandshake } from 'lucide-react';

export const infoProjects = [
  {
    id: 1,
    title: "PST 2A - Button Quest",
    subtitle: "Borne d'arcade interactive hardware & software",
    shortDescription: "Conception d'une table de jeu interactive présentée à leHack, mêlant électronique embarquée et backend web.",
    fullDescription: [
      "Développement complet d'une borne d'arcade interactive sur Raspberry Pi 5 utilisant des expanseurs de ports I2C (MCP23017) et une connectique modulaire RJ45.",
      "Mise en place d'une architecture logicielle conteneurisée avec un backend Flask et une base de données MongoDB pour gérer les scores et les scénarios de jeu en temps réel."
    ],
    skills: ["Raspberry Pi 5", "Python", "C", "Docker", "MongoDB"],
    images: [
      // Exemple : place tes photos dans le dossier public/images/
      // { src: "/images/button-quest-1.jpg", alt: "Prototype de la table Button Quest" },
      // { src: "/images/button-quest-2.jpg", alt: "Câblage interne I2C" }
    ],
    links: [
      { label: "Voir sur GitHub", url: "https://github.com/ton-pseudo/button-quest" }
    ]
  },
  {
    id: 2,
    title: "Homelab",
    subtitle: "Serveur auto-hébergé & administration système",
    shortDescription: "Déploiement et sécurisation de services personnels conteneurisés sur Raspberry Pi 5 sous Debian.",
    fullDescription: [
      "Administration quotidienne d'un serveur domestique sous Debian faisant tourner plusieurs services isolés via Docker.",
      "Configuration d'AdGuard Home pour le filtrage DNS sur le réseau local, de Vaultwarden pour la gestion chiffrée des mots de passe, et de Tailscale pour un accès SSH distant sécurisé."
    ],
    skills: ["Linux", "Docker", "AdGuard", "Tailscale", "Réseau"],
    images: [],
    links: []
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
      "Responsable de la santé financière de l'association étudiante : établissement des budgets prévisionnels, gestion des factures et suivi des subventions.",
      "Coordination avec les autres pôles pour assurer la viabilité financière des sorties et événements sur le campus."
    ],
    skills: ["Gestion de budget", "Trésorerie", "Travail d'équipe"],
    images: [],
    links: []
  },
  {
    id: 6,
    title: "Projet RSE - TAP Robotique",
    subtitle: "Médiation scientifique en école primaire",
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
    images: [ { src: "./images/Course_repas_hj2.jpg", alt: "Événement Horizon Japon" }, 
              { src: "./images/Moshi_ouvert.jpg", alt: "Moshi ouvert" },
              { src: "./images/cuisson_poulet.jpg", alt: "Cuisson du poulet" }
    ],
    links: []
  },
  { id: 8, empty: true }
];