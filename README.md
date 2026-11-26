# Portfolio — Thomas Couanon

Mon portfolio personnel conçu pour présenter mon parcours en ingénierie informatique à l'ESIEA, mes projets techniques (cybersécurité, systèmes embarqués, auto-hébergement) et mes engagements associatifs dans le cadre de ma recherche d'alternance.

Site en ligne : [lesnips.github.io/Portfolio](https://lesnips.github.io/Portfolio/)

## Stack technique

* **Framework :** React (Vite)
* **Style :** Tailwind CSS / PostCSS
* **Déploiement :** GitHub Pages via GitHub Actions (`.github/workflows/static.yml`)

## Structure du projet

```text
├── .github/workflows/static.yml   # Pipeline de build et déploiement sur GitHub Pages
├── public/
│   ├── CV_Couanon_Thomas.pdf      # CV téléchargeable directement depuis le site
│   └── images/                    # Photos des projets (Button Quest, Horizon Japon, etc.)
└── src/
    ├── components/                # Composants UI (Navbar, Profile, ProjectsGrid, ProjectCard, ProjectModal)
    ├── data/projectsData.jsx      # Données centralisées des projets et expériences
    ├── App.jsx                    # Assemblage principal de l'application
    └── main.jsx                   # Point d'entrée React
