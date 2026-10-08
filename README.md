# Cap Côtier — réussir le permis côtier en Polynésie française ⛵

> Application web gratuite pour **préparer et réussir le permis côtier (permis bateau) en Polynésie française** — Tahiti, Moorea, Raiatea, Bora Bora et toutes les îles : cours illustrés, près de 1 000 QCM corrigés et commentés, examens blancs au format de la DPAM (20 questions, 15 minutes, 3 erreurs maximum) et révision espacée.
>
> ⚠️ Conçue pour les **règles polynésiennes** (DPAM). Elle n'est pas adaptée au permis côtier de métropole, de Nouvelle-Calédonie ou d'autres territoires, dont la réglementation diffère.

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-en%20ligne-0b7f86?style=for-the-badge&logo=github)](https://cap-cotier-polynesie.github.io/)
[![Licence](https://img.shields.io/badge/Licence-MIT-10233b?style=for-the-badge)](LICENSE)

🔗 **[cap-cotier-polynesie.github.io](https://cap-cotier-polynesie.github.io/)**

---

## 🌺 Merci à Fluid Tahiti

Cap Côtier s'appuie notamment sur les supports de formation (cours, QCM, questionnaires types et mémento) de **[Fluid Tahiti](https://www.fluid-tahiti.com/)**, centre de plongée de la Marina Taina (Punaauia) qui forme aussi au permis bateau. Ces supports ont été adaptés et enrichis (questions supplémentaires, illustrations, explications, spécificités polynésiennes) : les éventuelles erreurs ou imprécisions relèvent de ce travail, et non de Fluid Tahiti. **Māuruuru roa !**

## 🐞 Signaler une erreur

Une réponse fausse, une question ambiguë, une coquille ? Utilisez le lien « Signaler une erreur » sous chaque correction ou en fin de chapitre (il pré-remplit le signalement), ou [ouvrez une issue](https://github.com/cap-cotier-polynesie/cap-cotier-polynesie.github.io/issues/new) directement. Indiquez si possible votre source (RIPAM, mémento, texte de la DPAM).

---

## 🏝️ Pourquoi une version polynésienne ?

En Polynésie française, le permis côtier est délivré par la **Direction polynésienne des affaires maritimes (DPAM)**. L'essentiel des règles est identique à la métropole (RIPAM, balisage AISM région A, feux et marques, signaux sonores), mais plusieurs points diffèrent. L'application suit les règles polynésiennes et les signale dans les cours par un encadré doré :

| | Polynésie française | Métropole |
|---|---|---|
| Épreuve théorique | **20 questions, 15 min, 3 erreurs max.** | 30 questions, 5 erreurs max. |
| Limite du permis côtier | **5 milles d'un abri** | 6 milles d'un abri |
| Coordination du sauvetage | **JRCC Tahiti** (VHF 16 ou tél. 16) | CROSS (VHF 16 ou 196) |
| Armement de sécurité | Liste de la DPAM : basique (6e catégorie, ≤ 2 milles), côtière (5e catégorie, ≤ 5 milles) | Division 240 (basique ≤ 2 milles, côtière ≤ 6 milles) |
| Examens à Papeete | DPAM (Fare Ute) le mercredi, pratique à Motu Uta | — |

> Cap Côtier est un outil d'entraînement indépendant : il ne remplace ni la formation d'un bateau-école déclaré, ni les textes en vigueur. En cas de doute, référez-vous à la [DPAM](https://www.service-public.pf/dpam/).

---

## 🧭 Fonctionnalités

- **13 chapitres de cours** (balisage, feux et marques, signaux et règles de barre, sécurité et météo) avec sommaire, « l'essentiel » à retenir, moyens mnémotechniques et encadrés Polynésie, plus **3 fiches pratiques** (déroulement de l'examen, manœuvres, nœuds).
- **Illustrations vectorielles** dessinées pour l'application : balises AISM, rythmes de feux, feux de navires vus de nuit, marques de jour, pavillons, signaux portuaires, règles de barre — et **signaux sonores écoutables**.
- **Environ 1 000 QCM corrigés et commentés**, organisés en ~200 **notions** (une notion = une règle, par exemple « cardinale Ouest : de quel côté passer » ou « 3 sons brefs ») : **chaque notion est déclinée en au moins 5 questions différentes** (autre cap, autre illustration, question posée dans l'autre sens…), pour que les séries aléatoires varient vraiment :
  - les QCM de fin de chapitre et les tests de fin de module, avec leurs illustrations d'origine ;
  - les 4 questionnaires types de 20 questions ;
  - une banque complémentaire rédigée pour couvrir chaque notion, relue question par question.
- **Séries fixes** (QCM de chaque cours, tests de fin de module, 4 questionnaires types) et **séries aléatoires** par chapitre, par thème (cardinales, feux des navires, signaux sonores, sécurité…), cumulées ou sur tout le programme. Les tirages varient les chapitres et les notions, évitent les quasi-doublons et **privilégient les questions jamais ou rarement posées**.
- **Maîtrise mesurée par notion** : une notion est acquise après deux bonnes réponses consécutives, données à au moins 12 heures d'intervalle, sur n'importe laquelle de ses questions.
- **Examen blanc** en conditions réelles : 20 questions réparties sur tout le programme, chronomètre de 15 minutes, navigation libre, 3 erreurs maximum, corrigé détaillé.
- **Révision intelligente** par répétition espacée (FSRS), suivie par notion : chaque révision propose la variante la moins pratiquée. Rubrique **« Mes erreurs »**.
- **Progression locale** multi-profils, export / import de sauvegarde, thème clair, nuit ou automatique, utilisable sur mobile.

---

## 🛠️ Architecture

Site 100 % statique (HTML, CSS, JavaScript sans framework ni étape de build), hébergé sur GitHub Pages.

```text
cap-cotier-polynesie.github.io/
├── .github/workflows/deploy.yml  # Déploiement GitHub Pages + cache busting
├── app/
│   ├── index.html                # Coquille de l'application
│   ├── css/style.css             # Design « carte marine » (thèmes clair et nuit)
│   ├── data/courseData.js        # Cours, questions vérifiées et séries
│   ├── assets/
│   │   ├── q/                    # Illustrations recadrées des questions (WebP)
│   │   ├── c/                    # Illustrations des cours (WebP)
│   │   ├── icon.svg              # Icône
│   │   └── contours*.svg         # Fonds bathymétriques
│   └── js/
│       ├── app.js                # Routage et vues
│       ├── quiz.js               # Moteur de QCM (entraînement / examen)
│       ├── figures.js            # Bibliothèque de figures SVG
│       ├── fsrs.js               # Répétition espacée
│       ├── storage.js            # Profils et progression (localStorage)
│       ├── audio.js              # Sons et signaux sonores (Web Audio)
│       └── theme.js              # Thème auto / clair / nuit
├── tools/stamp.mjs               # Empreinte de cache (?v=hash) sur les ressources
├── index.html                    # Redirection vers app/
└── package.json
```

---

## 💻 Lancer en local

```bash
# Python 3
python -m http.server 8080 --directory app

# ou Node.js
npx serve app -p 8080
```

Puis ouvrez `http://localhost:8080/`.

`npm run stamp` met à jour les empreintes de cache dans `app/index.html` (le déploiement le fait automatiquement) ; `npm run check` vérifie qu'elles sont à jour.

---

## 📄 Licence

Code distribué sous licence MIT. Le contenu pédagogique issu des supports de Fluid Tahiti reste la propriété de ses auteurs et est utilisé avec leur accord.
