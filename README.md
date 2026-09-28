<p align="center">
  <img src="assets/logo.jpg" alt="Vectr Logo" width="200"/>
</p>

<h1 align="center">Vectr</h1>

<p align="center">
  <strong>Simulateur de voiture autonome en 2D</strong><br/>
  Architecture Client-Serveur · Canvas HTML5 · Python · WebSockets
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Front--end-JavaScript%20Vanilla-F7DF1E?logo=javascript&logoColor=black" alt="JavaScript"/>
  <img src="https://img.shields.io/badge/Back--end-Python-3776AB?logo=python&logoColor=white" alt="Python"/>
  <img src="https://img.shields.io/badge/Communication-WebSockets-010101?logo=socketdotio&logoColor=white" alt="WebSocket"/>
  <img src="https://img.shields.io/badge/Rendu-Canvas%20HTML5-E34F26?logo=html5&logoColor=white" alt="Canvas"/>
</p>

---

## 📖 Présentation

**Vectr** est un simulateur de voiture autonome en vue de dessus (top-down 2D), conçu pour explorer les fondamentaux de l'intelligence artificielle appliquée à la conduite autonome.

Le projet repose sur une **architecture Client-Serveur**, pensée pour refléter les standards industriels :

- **Le client** (navigateur) gère le rendu visuel en temps réel via le Canvas HTML5 : la route, la voiture, les capteurs et les animations.
- **Le serveur** (Python) traite les données capteurs et prend les décisions de pilotage grâce à des algorithmes d'IA.
- **La communication** entre les deux se fait par WebSockets, permettant un échange bidirectionnel en temps réel.

## 🏗️ Architecture

```
┌─────────────────┐       WebSocket        ┌─────────────────┐
│     CLIENT      │ ◄──────────────────►   │     SERVEUR     │
│  (Navigateur)   │   données capteurs     │    (Python)     │
│                 │   commandes pilotage   │                 │
│  HTML5 Canvas   │                        │  Logique IA     │
│  JavaScript     │                        │  Traitement     │
└─────────────────┘                        └─────────────────┘
```

## ⚙️ Stack technique

| Couche | Technologie | Rôle |
|--------|-------------|------|
| Rendu | HTML5 Canvas | Affichage 2D (route, voiture, capteurs) |
| Logique client | JavaScript Vanilla | Gestion du canvas, game loop, contrôles |
| Serveur | Python | Intelligence artificielle, prise de décision |
| Communication | WebSockets | Échange temps réel client ↔ serveur |

## 🚀 Lancement rapide

```bash
# Cloner le projet
git clone https://github.com/ton-username/Vectr.git
cd Vectr

# Ouvrir le client dans le navigateur
open client/index.html
```

> Le serveur Python et la communication WebSocket seront ajoutés dans les phases suivantes du développement.

## 📁 Structure du projet

```
Vectr/
├── client/
│   ├── index.html       # Page principale avec le canvas
│   ├── style.css        # Styles et mise en page
│   └── js/
│       ├── main.js      # Point d'entrée, initialisation, game loop
│       └── Voiture.js   # Classe Voiture (POO)
├── server/              # Back-end Python (à venir)
├── assets/              # Ressources graphiques (logo, images)
├── .gitignore
└── README.md
```

## 🎯 Objectifs pédagogiques

Ce projet est développé dans le cadre d'un **BTS SIO option SLAM** avec pour objectifs :

- **POO** — Programmation Orientée Objet en JavaScript et Python
- **Architecture Client-Serveur** — Séparation des responsabilités, communication réseau
- **Canvas API** — Rendu graphique 2D, transformations, animations
- **WebSockets** — Communication bidirectionnelle temps réel
- **IA** — Réseaux de neurones, prise de décision automatisée
- **Bonnes pratiques** — Code propre, versionning Git, documentation

## 📄 Licence

Ce projet est développé à des fins éducatives.
