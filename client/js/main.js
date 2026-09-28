/**
 * main.js — Point d'entrée du simulateur Vectr (Front-end)
 * 
 * ARCHITECTURE :
 * Ce fichier est le "chef d'orchestre" côté client.
 * Pour l'instant, il fait 3 choses :
 *   1. Récupérer le canvas depuis le DOM
 *   2. Obtenir le contexte de dessin 2D
 *   3. Dessiner un fond de route basique
 * 
 * CONCEPT CLÉ — Le Canvas et son Contexte :
 * ─────────────────────────────────────────
 * Pense au canvas comme une TOILE de peintre (canvas = toile en anglais).
 * Le "contexte 2D" (ctx) est ton PINCEAU. Sans lui, tu ne peux rien dessiner.
 * 
 *   const canvas = document.getElementById('simulateur');  // La toile
 *   const ctx = canvas.getContext('2d');                    // Le pinceau
 * 
 * Toutes les opérations de dessin passent par `ctx` :
 *   ctx.fillStyle = 'green';       // Choisir la couleur
 *   ctx.fillRect(x, y, w, h);     // Dessiner un rectangle plein
 */

// ============================================================
// 1. INITIALISATION DU CANVAS
// ============================================================

// On récupère l'élément <canvas> du DOM via son attribut id.
// document.getElementById() retourne une référence vers l'objet HTMLCanvasElement.
const canvas = document.getElementById('simulateur');

// Vérification défensive : si le canvas n'existe pas, on arrête tout
// et on affiche une erreur claire dans la console.
// C'est une BONNE PRATIQUE en développement : toujours vérifier 
// que les éléments critiques existent avant de les utiliser.
if (!canvas) {
    throw new Error('[Vectr] Élément canvas #simulateur introuvable dans le DOM.');
}

// On récupère le contexte de rendu 2D.
// C'est cet objet qui expose TOUTES les méthodes de dessin :
// fillRect, strokeRect, arc, beginPath, lineTo, etc.
const ctx = canvas.getContext('2d');

// On stocke les dimensions pour les réutiliser facilement.
// Ça évite de faire canvas.width partout et rend le code plus lisible.
const CANVAS_WIDTH = canvas.width;   // 1280
const CANVAS_HEIGHT = canvas.height; // 720

console.log(`[Vectr] Canvas initialisé : ${CANVAS_WIDTH}x${CANVAS_HEIGHT}`);

// ============================================================
// 2. FONCTION DE DESSIN DE LA ROUTE
// ============================================================

/**
 * dessinerRoute()
 * 
 * Dessine une route à deux voies vue de dessus.
 * 
 * STRUCTURE VISUELLE :
 * ┌──────────────────────────────────────┐
 * │            HERBE (vert)              │
 * │──────────────────────────────────────│
 * │          ROUTE (gris foncé)          │
 * │- - - - - - LIGNE CENTRALE - - - - - │
 * │          ROUTE (gris foncé)          │
 * │──────────────────────────────────────│
 * │            HERBE (vert)              │
 * └──────────────────────────────────────┘
 * 
 * La route est centrée verticalement sur le canvas.
 * Les proportions sont calculées dynamiquement à partir
 * des constantes du canvas (pas de valeurs "en dur" = maintenabilité).
 */
function dessinerRoute() {
    // --- Fond d'herbe ---
    // On remplit TOUT le canvas en vert (l'herbe est le fond par défaut)
    ctx.fillStyle = '#4a7c59';  // Vert naturel
    ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    // --- Surface de la route ---
    // La route occupe 60% de la hauteur du canvas, centrée verticalement.
    const largeurRoute = CANVAS_HEIGHT * 0.6;           // 60% de 720 = 432px
    const yRoute = (CANVAS_HEIGHT - largeurRoute) / 2;  // Position Y pour centrer

    ctx.fillStyle = '#3d3d3d';  // Gris asphalte
    ctx.fillRect(0, yRoute, CANVAS_WIDTH, largeurRoute);

    // --- Lignes de bordure de route (blanches, continues) ---
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 3;

    // Ligne du haut
    ctx.beginPath();                     // Commence un nouveau tracé
    ctx.moveTo(0, yRoute);              // Point de départ
    ctx.lineTo(CANVAS_WIDTH, yRoute);   // Point d'arrivée
    ctx.stroke();                        // Dessine le trait

    // Ligne du bas
    ctx.beginPath();
    ctx.moveTo(0, yRoute + largeurRoute);
    ctx.lineTo(CANVAS_WIDTH, yRoute + largeurRoute);
    ctx.stroke();

    // --- Ligne centrale (pointillés jaunes) ---
    // setLineDash([longueur_tiret, longueur_espace]) crée un motif de pointillés.
    // C'est ce qui donne l'effet de "ligne médiane" sur une vraie route.
    ctx.strokeStyle = '#f0c040';  // Jaune routier
    ctx.lineWidth = 2;
    ctx.setLineDash([30, 20]);    // Tirets de 30px, espaces de 20px

    ctx.beginPath();
    const yCentre = CANVAS_HEIGHT / 2;  // Milieu exact du canvas
    ctx.moveTo(0, yCentre);
    ctx.lineTo(CANVAS_WIDTH, yCentre);
    ctx.stroke();

    // IMPORTANT : on remet le style de ligne en continu pour la suite.
    // Si on oublie, TOUS les prochains tracés seront en pointillés !
    ctx.setLineDash([]);
}

// ============================================================
// 3. PREMIER RENDU
// ============================================================

// On appelle la fonction pour dessiner la route immédiatement.
// Plus tard, ce sera remplacé par une boucle de rendu (game loop).
dessinerRoute();

console.log('[Vectr] Route dessinée. Étape 1 terminée ✓');

