/**
 * Cap Côtier — données (cours, questions, séries).
 * S’appuie notamment sur les supports de formation de Fluid Tahiti (https://www.fluid-tahiti.com/).
 * Fichier généré : les questions sont vérifiées une à une contre les supports sources.
 */
window.PERMIS_DATA = {
 "appName": "Cap Côtier",
 "version": "2.0.0",
 "region": "Polynésie française",
 "exam": {
  "questions": 20,
  "minutes": 15,
  "maxErrors": 3,
  "distribution": {
   "mod1": 6,
   "mod2": 5,
   "mod3": 5,
   "mod4": 4
  }
 },
 "modules": [
  {
   "id": "mod1",
   "number": 1,
   "title": "Le balisage",
   "shortTitle": "Balisage",
   "description": "Marques latérales, chenaux préférés, marques spéciales, danger isolé, eaux saines, balisage des plages et cardinales.",
   "sections": [
    "mod1_sec1",
    "mod1_sec2",
    "mod1_sec3"
   ]
  },
  {
   "id": "mod2",
   "number": 2,
   "title": "Feux et marques des navires",
   "shortTitle": "Feux & marques",
   "description": "Reconnaître de jour comme de nuit les navires à moteur, voiliers, pêcheurs, remorqueurs et navires aux capacités réduites.",
   "sections": [
    "mod2_sec1",
    "mod2_sec2",
    "mod2_sec3"
   ]
  },
  {
   "id": "mod3",
   "number": 3,
   "title": "Signaux et règles de barre",
   "shortTitle": "Signaux & barre",
   "description": "Signaux sonores, signaux portuaires et météo, règles de priorité et de route pour éviter l’abordage.",
   "sections": [
    "mod3_sec1",
    "mod3_sec2",
    "mod3_sec3"
   ]
  },
  {
   "id": "mod4",
   "number": 4,
   "title": "Sécurité et loisirs",
   "shortTitle": "Sécurité",
   "description": "Détresse et sauvetage, armement et papiers, carburant, loisirs nautiques et météo marine.",
   "sections": [
    "mod4_sec1",
    "mod4_sec2",
    "mod4_sec3",
    "mod4_sec4"
   ]
  },
  {
   "id": "bonus",
   "number": 5,
   "bonus": true,
   "title": "L’examen et la pratique",
   "shortTitle": "Examen & pratique",
   "description": "Déroulement de l’examen en Polynésie, manœuvres de l’épreuve pratique et nœuds marins.",
   "sections": [
    "bonus_sec1",
    "bonus_sec2",
    "bonus_sec3"
   ]
  }
 ],
 "categories": [
  {
   "id": "balisage-lateral",
   "label": "Balisage latéral"
  },
  {
   "id": "marques-speciales",
   "label": "Marques spéciales et dangers"
  },
  {
   "id": "plages",
   "label": "Balisage des plages"
  },
  {
   "id": "cardinales",
   "label": "Cardinales"
  },
  {
   "id": "feux-balisage",
   "label": "Feux des balises"
  },
  {
   "id": "feux-navires",
   "label": "Feux des navires"
  },
  {
   "id": "marques-jour",
   "label": "Marques de jour"
  },
  {
   "id": "peche",
   "label": "Navires de pêche"
  },
  {
   "id": "remorquage",
   "label": "Remorquage"
  },
  {
   "id": "navires-speciaux",
   "label": "Navires aux capacités réduites"
  },
  {
   "id": "signaux-sonores",
   "label": "Signaux sonores"
  },
  {
   "id": "signaux-portuaires",
   "label": "Signaux portuaires"
  },
  {
   "id": "pavillons",
   "label": "Pavillons"
  },
  {
   "id": "regles-barre",
   "label": "Règles de barre et priorités"
  },
  {
   "id": "vitesse-zones",
   "label": "Vitesse et zones"
  },
  {
   "id": "detresse",
   "label": "Détresse et sauvetage"
  },
  {
   "id": "armement",
   "label": "Armement de sécurité"
  },
  {
   "id": "papiers",
   "label": "Documents de bord"
  },
  {
   "id": "carburant",
   "label": "Carburant et autonomie"
  },
  {
   "id": "loisirs",
   "label": "Loisirs nautiques"
  },
  {
   "id": "meteo",
   "label": "Météo"
  },
  {
   "id": "environnement",
   "label": "Environnement"
  },
  {
   "id": "pratique",
   "label": "Examen et pratique"
  }
 ],
 "concepts": {
  "lat-babord-entrant": {
   "label": "Marque bâbord (rouge) en entrant : la laisser à gauche",
   "tag": "balisage-lateral"
  },
  "lat-tribord-entrant": {
   "label": "Marque tribord (verte, feu vert) en entrant : la laisser à droite",
   "tag": "balisage-lateral"
  },
  "lat-babord-sortant": {
   "label": "Marque bâbord (rouge, feu rouge) en sortant : la laisser à droite",
   "tag": "balisage-lateral"
  },
  "lat-tribord-sortant": {
   "label": "Marque tribord (verte) en sortant : la laisser à gauche",
   "tag": "balisage-lateral"
  },
  "lat-sens-conventionnel": {
   "label": "Sens conventionnel du large vers le port (en déduire son sens de route)",
   "tag": "balisage-lateral"
  },
  "lat-identifier": {
   "label": "Reconnaître une marque latérale (cylindre rouge bâbord, cône vert tribord)",
   "tag": "balisage-lateral"
  },
  "lat-numerotation": {
   "label": "Numérotation : pairs à bâbord, impairs à tribord",
   "tag": "balisage-lateral"
  },
  "pref-identifier": {
   "label": "Reconnaître une marque de chenal préféré (bâbord/tribord modifiée)",
   "tag": "balisage-lateral"
  },
  "pref-passage": {
   "label": "Chenal préféré : laisser la marque comme sa couleur de base",
   "tag": "balisage-lateral"
  },
  "pref-feu": {
   "label": "Feu de chenal préféré : Fl(2+1)",
   "tag": "balisage-lateral"
  },
  "feu-occultations": {
   "label": "Feu à occultations : lumière plus longue que l’obscurité",
   "tag": "feux-balisage"
  },
  "balisage-generalites": {
   "label": "But du balisage et identification de jour (couleur, voyant)",
   "tag": "balisage-lateral"
  },
  "danger-nouveau-doublement": {
   "label": "Danger nouveau : marque doublée (deux marques identiques)",
   "tag": "marques-speciales"
  },
  "danger-nouveau-bouee-bleue-jaune": {
   "label": "Bouée d’épave d’urgence (bandes bleues et jaunes) : épave récente",
   "tag": "marques-speciales"
  },
  "eaux-saines-identifier": {
   "label": "Reconnaître une marque d’eaux saines (bandes verticales rouges/blanches, boule rouge)",
   "tag": "marques-speciales"
  },
  "eaux-saines-feu": {
   "label": "Feu d’eaux saines (blanc isophase, occultations, éclat long, Mo(A))",
   "tag": "marques-speciales"
  },
  "danger-isole-identifier": {
   "label": "Reconnaître un danger isolé (noir à bandes rouges, 2 boules)",
   "tag": "marques-speciales"
  },
  "danger-isole-passage": {
   "label": "Danger isolé : passer de tous côtés en s’écartant",
   "tag": "marques-speciales"
  },
  "danger-isole-feu": {
   "label": "Feu de danger isolé : blanc Fl(2)",
   "tag": "marques-speciales"
  },
  "speciale-identifier": {
   "label": "Marque spéciale jaune (croix) : zone ou objet particulier",
   "tag": "marques-speciales"
  },
  "speciale-feu": {
   "label": "Feu jaune des marques spéciales",
   "tag": "marques-speciales"
  },
  "plage-baignade": {
   "label": "Zone de baignade : collier de petites sphères jaunes",
   "tag": "plages"
  },
  "plage-limite-300m": {
   "label": "Limite des 300 m : grosses sphères jaunes espacées de 200 m",
   "tag": "plages"
  },
  "plage-zone-interdite-moteur": {
   "label": "Zone interdite aux navires à moteur : grosses sphères jaunes rapprochées",
   "tag": "plages"
  },
  "plage-chenal-traversier": {
   "label": "Chenal traversier : jaunes coniques à tribord, cylindriques à bâbord",
   "tag": "plages"
  },
  "plage-balisage-local": {
   "label": "Balisage des plages : local, hors système AISM",
   "tag": "plages"
  },
  "card-nord-passage": {
   "label": "Cardinale Nord : passer au nord, quel que soit le cap",
   "tag": "cardinales"
  },
  "card-sud-passage": {
   "label": "Cardinale Sud : passer au sud, quel que soit le cap",
   "tag": "cardinales"
  },
  "card-est-passage": {
   "label": "Cardinale Est : passer à l’est, quel que soit le cap",
   "tag": "cardinales"
  },
  "card-ouest-passage": {
   "label": "Cardinale Ouest : passer à l’ouest, quel que soit le cap",
   "tag": "cardinales"
  },
  "card-voyants": {
   "label": "Reconnaître une cardinale à son voyant (disposition des cônes)",
   "tag": "cardinales"
  },
  "card-danger-position": {
   "label": "Position du danger par rapport à une cardinale (à l’opposé de son nom)",
   "tag": "cardinales"
  },
  "card-nord-feu": {
   "label": "Feu de cardinale Nord : scintillant continu",
   "tag": "cardinales"
  },
  "card-sud-feu": {
   "label": "Feu de cardinale Sud : Q(6)+LFl",
   "tag": "cardinales"
  },
  "card-est-feu": {
   "label": "Feu de cardinale Est : Q(3)",
   "tag": "cardinales"
  },
  "card-ouest-feu": {
   "label": "Feu de cardinale Ouest : Q(9)",
   "tag": "cardinales"
  },
  "remorq-feux-identifier": {
   "label": "Remorqueur : feux de mât superposés (2 si ≤ 200 m, 3 au-delà)",
   "tag": "remorquage"
  },
  "remorq-bicone": {
   "label": "Remorque de plus de 200 m : marque biconique",
   "tag": "remorquage"
  },
  "remorq-feu-jaune": {
   "label": "Feu jaune de remorquage au-dessus du feu de poupe",
   "tag": "remorquage"
  },
  "remorq-longueur": {
   "label": "Longueur de la remorque : de la poupe du remorqueur à la poupe du remorqué",
   "tag": "remorquage"
  },
  "remorq-ram": {
   "label": "Remorqueur gêné dans sa manœuvre : signaux de capacité restreinte",
   "tag": "remorquage"
  },
  "ram-cote-passage": {
   "label": "Navire en travaux : passer du côté des 2 feux verts (2 losanges)",
   "tag": "navires-speciaux"
  },
  "ram-marque-jour": {
   "label": "Capacité de manœuvre restreinte de jour : boule-bicône-boule",
   "tag": "navires-speciaux"
  },
  "ram-feux-identifier": {
   "label": "Capacité de manœuvre restreinte de nuit : rouge-blanc-rouge",
   "tag": "navires-speciaux"
  },
  "ram-feux-taille-aspect": {
   "label": "Capacité restreinte : taille (feux de mât) et aspect (feux de côté)",
   "tag": "navires-speciaux"
  },
  "deminage": {
   "label": "Déminage : 3 feux verts / 3 boules en triangle",
   "tag": "navires-speciaux"
  },
  "pilote-feux": {
   "label": "Bateau-pilote : blanc sur rouge",
   "tag": "navires-speciaux"
  },
  "feux-mouillage-moins-50m": {
   "label": "Mouillage de moins de 50 m : un feu blanc visible sur tout l’horizon",
   "tag": "feux-navires"
  },
  "feux-mouillage-50m-plus": {
   "label": "Mouillage de 50 m ou plus : deux feux blancs (avant plus haut)",
   "tag": "feux-navires"
  },
  "mouillage-boule": {
   "label": "Navire au mouillage : une boule noire à l’avant",
   "tag": "marques-jour"
  },
  "matieres-dangereuses": {
   "label": "Matières dangereuses : pavillon B rouge / feu rouge",
   "tag": "pavillons"
  },
  "tirant-eau-feux": {
   "label": "Handicapé par son tirant d’eau : 3 feux rouges superposés",
   "tag": "navires-speciaux"
  },
  "tirant-eau-cylindre": {
   "label": "Handicapé par son tirant d’eau : cylindre noir",
   "tag": "navires-speciaux"
  },
  "nuc-feux": {
   "label": "Non maître de sa manœuvre : 2 feux rouges (+ feux de route avec erre)",
   "tag": "navires-speciaux"
  },
  "nuc-boules": {
   "label": "Non maître de sa manœuvre : 2 boules noires",
   "tag": "navires-speciaux"
  },
  "echoue-boules": {
   "label": "Navire échoué : 3 boules noires",
   "tag": "navires-speciaux"
  },
  "echoue-feux": {
   "label": "Navire échoué : 2 feux rouges + feux de mouillage",
   "tag": "navires-speciaux"
  },
  "feux-moteur-moins-7m": {
   "label": "Moteur < 7 m et < 7 nœuds : un feu blanc suffit",
   "tag": "feux-navires"
  },
  "feux-voilier-face": {
   "label": "Voilier vu de face : feux de côté sans feu de mât",
   "tag": "feux-navires"
  },
  "feux-mat-longueur": {
   "label": "Nombre de feux de mât : 1 (< 50 m), 2 (≥ 50 m)",
   "tag": "feux-navires"
  },
  "feux-moteur-aspect": {
   "label": "Navire à moteur : lire l’aspect (feu de mât + feux de côté)",
   "tag": "feux-navires"
  },
  "secteur-feu-mat": {
   "label": "Secteur du feu de tête de mât : 225°",
   "tag": "feux-navires"
  },
  "secteur-feu-poupe": {
   "label": "Feu de poupe : secteur de 135° (navire rattrapé)",
   "tag": "feux-navires"
  },
  "secteur-feux-cote": {
   "label": "Secteur des feux de côté : 112,5°",
   "tag": "feux-navires"
  },
  "portee-feux-moins-12m": {
   "label": "Portée des feux de côté sous 12 m : 1 mille",
   "tag": "feux-navires"
  },
  "voilier-moteur-cone": {
   "label": "Voilier au moteur : cône pointe en bas",
   "tag": "marques-jour"
  },
  "feux-aviron-kayak": {
   "label": "Aviron/kayak : lampe blanche à montrer si nécessaire",
   "tag": "feux-navires"
  },
  "peche-rouge-sur-blanc": {
   "label": "Pêche autre que chalut : rouge sur blanc",
   "tag": "peche"
  },
  "peche-marque-jour": {
   "label": "Navire en pêche : deux cônes réunis par la pointe",
   "tag": "peche"
  },
  "peche-couple-pavillon": {
   "label": "Pêche au bœuf : pavillon T (rouge-blanc-bleu)",
   "tag": "peche"
  },
  "peche-couple-projecteur": {
   "label": "Pêche en couple : projecteur vers l’avant et vers l’autre navire",
   "tag": "peche"
  },
  "chalut-filage": {
   "label": "Chalutier filant son chalut : 2 feux blancs supplémentaires",
   "tag": "peche"
  },
  "chalut-croche": {
   "label": "Chalut croché : 2 feux rouges supplémentaires",
   "tag": "peche"
  },
  "chalut-virage": {
   "label": "Chalutier hissant son chalut : blanc sur rouge supplémentaires",
   "tag": "peche"
  },
  "chalutier-vert-sur-blanc": {
   "label": "Chalutier en pêche : vert sur blanc",
   "tag": "peche"
  },
  "peche-hors-action": {
   "label": "Pêcheur en route hors pêche : simples feux de route",
   "tag": "peche"
  },
  "peche-feux-erre": {
   "label": "Navire de pêche : feux de côté et de poupe seulement avec erre",
   "tag": "peche"
  },
  "peche-engins-150m": {
   "label": "Engins à plus de 150 m : feu blanc / cône pointe en haut côté engins",
   "tag": "peche"
  },
  "peche-definition": {
   "label": "Navire « en action de pêche » : pas la pêche à la traîne",
   "tag": "peche"
  },
  "regle-moteur-vs-peche": {
   "label": "Navire à moteur : s’écarter d’un navire en pêche",
   "tag": "regles-barre"
  },
  "regle-hierarchie-peche-voilier": {
   "label": "Hiérarchie : le pêcheur est privilégié sur le voilier",
   "tag": "regles-barre"
  },
  "regle-priorite-nuc": {
   "label": "NUC : le plus privilégié, tous s’en écartent",
   "tag": "regles-barre"
  },
  "regle-routes-croisees": {
   "label": "Routes croisées : celui qui voit l’autre sur tribord s’écarte",
   "tag": "regles-barre"
  },
  "regle-rattrapant": {
   "label": "Le rattrapant s’écarte (même à voile) ; le rattrapé garde cap et vitesse",
   "tag": "regles-barre"
  },
  "regle-rattrapant-definition": {
   "label": "Être rattrapant : plus de 22,5° sur l’arrière du travers ; dans le doute, se considérer rattrapant",
   "tag": "regles-barre"
  },
  "regle-relevement-constant": {
   "label": "Relèvement constant et distance qui diminue : risque d’abordage",
   "tag": "regles-barre"
  },
  "regle-risque-feux-cote": {
   "label": "Voir les deux feux de côté : il vient vers vous, risque d’abordage",
   "tag": "regles-barre"
  },
  "regle-moteur-vs-voile": {
   "label": "Navire à moteur (dont VNM) : s’écarter d’un voilier ou d’une planche",
   "tag": "regles-barre"
  },
  "regle-vnm-statut": {
   "label": "Un VNM est un navire à moteur au regard des règles de barre",
   "tag": "regles-barre"
  },
  "regle-chenal-ne-pas-gener": {
   "label": "Chenal étroit : ne pas gêner un navire qui ne peut naviguer que dans le chenal",
   "tag": "regles-barre"
  },
  "regle-chenal-serrer-tribord": {
   "label": "Chenal étroit : serrer le bord tribord",
   "tag": "regles-barre"
  },
  "regle-routes-opposees": {
   "label": "Routes opposées : chacun vient sur tribord",
   "tag": "regles-barre"
  },
  "regle-veille": {
   "label": "Veille visuelle et auditive permanente",
   "tag": "regles-barre"
  },
  "cap-sens-virage": {
   "label": "Changer de cap : sens de rotation le plus court",
   "tag": "regles-barre"
  },
  "vitesse-300m": {
   "label": "5 nœuds dans la bande des 300 m",
   "tag": "vitesse-zones"
  },
  "vitesse-chenaux-port": {
   "label": "5 nœuds dans les chenaux d’accès aux ports",
   "tag": "vitesse-zones"
  },
  "unite-mille-noeud": {
   "label": "Mille = 1 852 m ; nœud = 1 mille par heure",
   "tag": "pratique"
  },
  "son-3-brefs": {
   "label": "3 sons brefs : je bats en arrière",
   "tag": "signaux-sonores"
  },
  "son-2-brefs": {
   "label": "2 sons brefs : je viens sur bâbord",
   "tag": "signaux-sonores"
  },
  "son-1-bref": {
   "label": "1 son bref : je viens sur tribord",
   "tag": "signaux-sonores"
  },
  "son-5-brefs": {
   "label": "5 sons brefs au moins : doute sur vos intentions",
   "tag": "signaux-sonores"
  },
  "brume-1-prolonge": {
   "label": "Brume, 1 son prolongé / 2 min : moteur avec erre",
   "tag": "signaux-sonores"
  },
  "brume-2-prolonges": {
   "label": "Brume, 2 sons prolongés / 2 min : moteur stoppé sans erre",
   "tag": "signaux-sonores"
  },
  "brume-1-long-2-brefs": {
   "label": "Brume, 1 long + 2 brefs : voilier, pêche, NUC, RAM, remorqueur…",
   "tag": "signaux-sonores"
  },
  "brume-remorque": {
   "label": "Brume, navire remorqué : 1 long + 3 brefs",
   "tag": "signaux-sonores"
  },
  "brume-conduite": {
   "label": "Par visibilité réduite : vitesse réduite, veille renforcée, signaux réguliers",
   "tag": "signaux-sonores"
  },
  "son-depassement-chenal": {
   "label": "Chenal : 2 longs + 1 bref (tribord) / + 2 brefs (bâbord) pour dépasser",
   "tag": "signaux-sonores"
  },
  "son-accord-depassement": {
   "label": "Accord de dépassement : long-bref-long-bref",
   "tag": "signaux-sonores"
  },
  "son-durees": {
   "label": "Durée : bref ≈ 1 s, prolongé 4 à 6 s",
   "tag": "signaux-sonores"
  },
  "son-coude": {
   "label": "Coude masquant la vue : un son prolongé",
   "tag": "signaux-sonores"
  },
  "port-3-rouges": {
   "label": "Port : 3 feux rouges fixes, passage interdit",
   "tag": "signaux-portuaires"
  },
  "port-danger-grave": {
   "label": "Port : 3 feux rouges à éclats, danger grave (seul signal à éclats)",
   "tag": "signaux-portuaires"
  },
  "port-3-verts": {
   "label": "Port : 3 feux verts, passage autorisé en sens unique",
   "tag": "signaux-portuaires"
  },
  "port-vert-vert-blanc": {
   "label": "Port : vert-vert-blanc, double sens",
   "tag": "signaux-portuaires"
  },
  "port-vert-blanc-vert": {
   "label": "Port : vert-blanc-vert, sur instruction seulement",
   "tag": "signaux-portuaires"
  },
  "port-feu-jaune": {
   "label": "Port : feu jaune, dérogation pour qui navigue hors du chenal",
   "tag": "signaux-portuaires"
  },
  "meteo-signal-boule": {
   "label": "Signal météo : boule noire, grand frais",
   "tag": "meteo"
  },
  "meteo-signal-cone-haut": {
   "label": "Signal météo : cône pointe en haut, coup de vent NW",
   "tag": "meteo"
  },
  "meteo-signal-2-cones-bas": {
   "label": "Signal météo : 2 cônes pointes en bas, coup de vent SE",
   "tag": "meteo"
  },
  "meteo-signal-croix": {
   "label": "Signal météo : croix noire, ouragan",
   "tag": "meteo"
  },
  "armement-cotier-compas": {
   "label": "Côtier : compas obligatoire quelle que soit la taille",
   "tag": "armement"
  },
  "carburant-calcul-quantite": {
   "label": "Calcul du carburant à embarquer (+30 %)",
   "tag": "carburant"
  },
  "carburant-calcul-autonomie": {
   "label": "Autonomie / distance possible en gardant 30 %",
   "tag": "carburant"
  },
  "carburant-marge": {
   "label": "Marge de sécurité carburant : 30 %",
   "tag": "carburant"
  },
  "armement-extincteur": {
   "label": "Extincteur approuvé : exigé dans toutes les catégories",
   "tag": "armement"
  },
  "helice-pas": {
   "label": "Le pas de l’hélice influe sur la vitesse",
   "tag": "pratique"
  },
  "armement-cotier-5-milles": {
   "label": "Côtier jusqu’à 5 milles d’un abri, hauturier au-delà",
   "tag": "armement"
  },
  "armement-basique-2-milles": {
   "label": "Basique jusqu’à 2 milles d’un abri",
   "tag": "armement"
  },
  "permis-cotier-limite": {
   "label": "Permis côtier : jusqu’à 5 milles d’un abri en Polynésie",
   "tag": "papiers"
  },
  "papiers-titre-navigation": {
   "label": "Titre de navigation : francisation / carte de circulation",
   "tag": "papiers"
  },
  "papiers-crr": {
   "label": "CRR exigé pour une VHF fixe",
   "tag": "papiers"
  },
  "permis-obligation": {
   "label": "Permis côtier obligatoire au-delà de 6 CV (4,5 kW)",
   "tag": "papiers"
  },
  "armement-engin-flottant": {
   "label": "Reconnaître l’engin flottant",
   "tag": "armement"
  },
  "armement-feux-main-cotier": {
   "label": "3 feux automatiques à main, en basique comme en côtière",
   "tag": "armement"
  },
  "armement-coupe-circuit": {
   "label": "Coupe-circuit relié au pilote",
   "tag": "armement"
  },
  "armement-abri": {
   "label": "Définition d’un abri",
   "tag": "armement"
  },
  "prevenir-proche": {
   "label": "Avant de partir : prévenir un proche (destination, retour, personnes)",
   "tag": "armement"
  },
  "armement-basique-contenu": {
   "label": "Contenu de la dotation basique (écope, pagaies…)",
   "tag": "armement"
  },
  "armement-cotier-pavillons": {
   "label": "Côtière : pavillons N et C (pas de pavillon national exigé)",
   "tag": "armement"
  },
  "vnm-distance": {
   "label": "VNM : 1 mille debout, 2 milles assis",
   "tag": "loisirs"
  },
  "vnm-nuit": {
   "label": "VNM : interdit de nuit",
   "tag": "loisirs"
  },
  "vnm-permis": {
   "label": "VNM : permis côtier requis",
   "tag": "loisirs"
  },
  "plongee-distance": {
   "label": "Plongeurs : passer à plus de 100 m",
   "tag": "loisirs"
  },
  "pavillon-plongee": {
   "label": "Pavillon A / pavillon rouge à diagonale blanche : plongeurs",
   "tag": "pavillons"
  },
  "plongee-traverser": {
   "label": "Traverser une zone de plongée : très lentement, prêt à débrayer",
   "tag": "loisirs"
  },
  "plongee-feux-ram": {
   "label": "Bateau de plongée de nuit : feux rouge-blanc-rouge",
   "tag": "navires-speciaux"
  },
  "ski-chute-remorque": {
   "label": "Chute du skieur : remonter la remorque",
   "tag": "loisirs"
  },
  "ski-deux-personnes": {
   "label": "Ski nautique : 2 personnes à bord sauf moniteur breveté d’État",
   "tag": "loisirs"
  },
  "ski-flamme": {
   "label": "Bateau tracteur : flamme orange de 2 m",
   "tag": "loisirs"
  },
  "planche-distance": {
   "label": "Planche à voile / kite : 2 milles d’un abri",
   "tag": "loisirs"
  },
  "picto-ski-interdit": {
   "label": "Pictogramme : ski nautique interdit",
   "tag": "loisirs"
  },
  "picto-vnm-interdit": {
   "label": "Pictogramme : interdit aux VNM",
   "tag": "loisirs"
  },
  "mammiferes-vitesse": {
   "label": "Cétacés : 3 nœuds dans un rayon de 300 m",
   "tag": "environnement"
  },
  "mammiferes-mere-petit": {
   "label": "Cétacés : ne jamais se placer entre la mère et son petit",
   "tag": "environnement"
  },
  "detresse-feu-main": {
   "label": "Feu automatique à main : lueur rouge tenue à la main",
   "tag": "detresse"
  },
  "jrcc-coordination": {
   "label": "Le JRCC Tahiti coordonne le sauvetage",
   "tag": "detresse"
  },
  "jrcc-telephone": {
   "label": "Alerter le JRCC Tahiti : téléphone 16",
   "tag": "detresse"
  },
  "assistance-obligation": {
   "label": "Obligation d’assistance sans mettre son navire en péril",
   "tag": "detresse"
  },
  "detresse-fusee-parachute": {
   "label": "Lueur rouge descendant lentement : fusée parachute de détresse",
   "tag": "detresse"
  },
  "vhf-canal-16": {
   "label": "Canal 16 : veille et détresse",
   "tag": "detresse"
  },
  "mayday-appel": {
   "label": "Appel MAYDAY ×3 sur le canal 16",
   "tag": "detresse"
  },
  "mayday-contenu": {
   "label": "Message de détresse : position et nature de la détresse",
   "tag": "detresse"
  },
  "detresse-nc": {
   "label": "Pavillons N sur C : détresse",
   "tag": "detresse"
  },
  "detresse-fumigene": {
   "label": "Fumigène de détresse : fumée orange",
   "tag": "detresse"
  },
  "detresse-son-continu": {
   "label": "Son continu : signal de détresse",
   "tag": "detresse"
  },
  "detresse-bras": {
   "label": "Bras levés et abaissés lentement : détresse",
   "tag": "detresse"
  },
  "detresse-sos": {
   "label": "SOS en morse à la lampe : détresse",
   "tag": "detresse"
  },
  "detresse-intrus": {
   "label": "Distinguer un signal de détresse (le pavillon A n’en est pas un)",
   "tag": "detresse"
  },
  "detresse-boule-pavillon": {
   "label": "Boule au-dessus ou au-dessous d’un pavillon : détresse",
   "tag": "detresse"
  },
  "beaufort-f7": {
   "label": "Force 7 : grand frais",
   "tag": "meteo"
  },
  "beaufort-f6": {
   "label": "Force 6 : vent frais",
   "tag": "meteo"
  },
  "beaufort-f12": {
   "label": "Force 12 : ouragan",
   "tag": "meteo"
  },
  "beaufort-conversion": {
   "label": "Conversion force Beaufort ↔ vitesse en nœuds",
   "tag": "meteo"
  },
  "beaufort-moutons": {
   "label": "Moutons dès force 3",
   "tag": "meteo"
  },
  "categorie-definition": {
   "label": "Catégorie de conception : vent et vagues admissibles",
   "tag": "meteo"
  },
  "categorie-c": {
   "label": "Catégorie C : force 6, vagues 2 m",
   "tag": "meteo"
  },
  "categorie-a": {
   "label": "Catégorie A : plus de force 8 et de 4 m",
   "tag": "meteo"
  },
  "categorie-d": {
   "label": "Catégorie D : force 4, vagues 0,5 m",
   "tag": "meteo"
  },
  "examen-format": {
   "label": "Épreuve théorique : 20 questions, 15 min, 3 erreurs",
   "tag": "pratique"
  },
  "examen-benefice-theorie": {
   "label": "Échec pratique : théorie conservée 6 mois",
   "tag": "pratique"
  },
  "permis-provisoire": {
   "label": "Permis provisoire valable 2 mois",
   "tag": "pratique"
  },
  "examen-essais": {
   "label": "Épreuve pratique : 2 essais par manœuvre",
   "tag": "pratique"
  },
  "permis-age": {
   "label": "Âge minimum du permis côtier : 16 ans",
   "tag": "pratique"
  },
  "hom-premier-reflexe": {
   "label": "Homme à la mer : virer du côté de la chute",
   "tag": "pratique"
  },
  "hom-point-mort": {
   "label": "Homme à la mer : point mort une fois l’étrave passée",
   "tag": "pratique"
  },
  "prise-coffre": {
   "label": "Prise de coffre : face au vent, au pas",
   "tag": "pratique"
  },
  "accostage-angle": {
   "label": "Accostage : angle d’environ 30°",
   "tag": "pratique"
  },
  "casser-erre": {
   "label": "Casser l’erre : marche arrière jusqu’à l’arrêt",
   "tag": "pratique"
  },
  "moteur-demarrage": {
   "label": "Moteur qui ne démarre pas : carburant, batterie, coupe-circuit, point mort",
   "tag": "pratique"
  },
  "appareillage-quai": {
   "label": "Appareillage : décoller l’arrière (volant vers le quai, avant 2 s)",
   "tag": "pratique"
  },
  "noeud-taquet": {
   "label": "Nœud de taquet",
   "tag": "pratique"
  },
  "noeud-cabestan": {
   "label": "Nœud de cabestan",
   "tag": "pratique"
  },
  "remorq-couple": {
   "label": "Remorquage à couple : 2 feux de mât, deux paires de feux de côté (+ feu de mât arrière si ≥ 50 m)",
   "tag": "remorquage"
  },
  "card-couleurs-manoeuvre": {
   "label": "Cardinale sans voyant : l’identifier à ses couleurs et passer du bon côté",
   "tag": "cardinales"
  },
  "card-couleurs-disposition": {
   "label": "Disposition des couleurs des cardinales (noir du côté des pointes)",
   "tag": "cardinales"
  },
  "feux-vert-tribord": {
   "label": "Feu vert vu sur l’avant tribord : pas de croisement, garder cap et vitesse",
   "tag": "regles-barre"
  }
 },
 "sections": [
  {
   "id": "mod1_sec1",
   "moduleId": "mod1",
   "number": "1.1",
   "title": "Le balisage latéral",
   "subtitle": "Généralités, sens conventionnel, marques bâbord et tribord, chenal préféré",
   "minutes": 15,
   "summary": "Le balisage latéral matérialise les deux bords d’un chenal dans le sens conventionnel (du large vers le port) : rouge et cylindre à bâbord, vert et cône à tribord. Les marques de chenal préféré signalent une bifurcation et le chenal principal.",
   "keyRules": [
    "But du balisage : signaler les dangers invisibles et les limites d’un chenal.",
    "Sens conventionnel : du large vers le port (ou en remontant une rivière, un bras de mer).",
    "Bâbord : rouge, cylindre, numéros pairs, feu rouge de rythme quelconque — laisser à gauche en entrant.",
    "Tribord : vert, cône pointe en haut, numéros impairs, feu vert de rythme quelconque — laisser à droite en entrant.",
    "En sortant du port, tout s’inverse : rouges à droite, verts à gauche.",
    "Chenal préféré : marque à bande horizontale de l’autre couleur, feu à éclats groupés 2+1. On lit la couleur dominante : rouge dominant = chenal préféré à tribord, vert dominant = chenal préféré à bâbord.",
    "Le jour on identifie une marque par son voyant et sa couleur ; la nuit par la couleur et le rythme de son feu.",
    "Polynésie française : région AISM A (rouge à bâbord en venant du large)."
   ],
   "html": "<p class=\"lead\">Le balisage sert à <strong>signaler au navigateur les dangers invisibles et les limites d’un chenal</strong>. Le balisage latéral, le plus courant, indique les deux bords d’une route à suivre : on le rencontre dans toutes les passes, les chenaux d’accès aux ports et les chenaux du lagon.</p>\n\n<h3>Les supports de balisage</h3>\n<p>Une même marque peut prendre plusieurs formes. Ce qui compte, c’est sa <strong>couleur</strong>, son <strong>voyant</strong> (le signe placé au sommet) et son <strong>feu</strong>, pas le support.</p>\n<table class=\"data-table\">\n<thead><tr><th>Support</th><th>Description</th></tr></thead>\n<tbody>\n<tr><td>Bouée charpente</td><td>Grande bouée flottante surmontée d’une structure métallique ajourée, portant voyant et souvent un feu.</td></tr>\n<tr><td>Bouée fuseau (espar flottant)</td><td>Bouée allongée et étroite, mouillée sur une chaîne.</td></tr>\n<tr><td>Bouées de canal</td><td>Petites bouées dont la forme même indique le côté : cylindrique (bâbord) ou conique (tribord).</td></tr>\n<tr><td>Tourelle</td><td>Construction maçonnée <strong>fixe</strong>, bâtie sur une roche ou un haut-fond. Elle suit les mêmes règles de couleur et de voyant.</td></tr>\n<tr><td>Espar (balise)</td><td>Simple perche fixée sur le fond, peinte et surmontée d’un voyant. Très fréquent dans les lagons de Polynésie.</td></tr>\n<tr><td>Marques de musoir, de pile de pont</td><td>Panneaux peints sur l’extrémité d’une jetée (musoir) ou sur une pile de pont : carré rouge = côté bâbord, triangle vert = côté tribord.</td></tr>\n</tbody>\n</table>\n\n<h3>Identifier une marque</h3>\n<div class=\"card-grid\">\n<div class=\"card\"><h4>De jour</h4><p>Par son <strong>voyant</strong> (cylindre, cône, boules, croix…) et par sa <strong>couleur</strong>. Le voyant reste lisible à contre-jour, quand les couleurs ne le sont plus.</p></div>\n<div class=\"card\"><h4>De nuit</h4><p>Par la <strong>couleur de son feu</strong> (quand la marque en porte un) et par le <strong>rythme</strong> de ce feu.</p></div>\n</div>\n\n<h4>Les rythmes de feux</h4>\n<p>Un rythme se répète selon une <strong>période</strong> (en secondes) indiquée sur la carte.</p>\n<div class=\"card-grid\">\n<div class=\"card\"><figure class=\"fig\" data-fig=\"rhythm\" data-code=\"Fl\" data-color=\"W\"></figure><h4>À éclats (Fl)</h4><p>Durée de lumière <strong>plus courte</strong> que l’obscurité. Éclat long (LFl) : éclat d’au moins 2 secondes.</p></div>\n<div class=\"card\"><figure class=\"fig\" data-fig=\"rhythm\" data-code=\"Oc\" data-color=\"W\"></figure><h4>À occultations (Oc)</h4><p>Durée de lumière <strong>plus longue</strong> que l’obscurité : le feu « s’éteint brièvement ».</p></div>\n<div class=\"card\"><figure class=\"fig\" data-fig=\"rhythm\" data-code=\"Iso\" data-color=\"W\"></figure><h4>Isophase (Iso)</h4><p>Durées de lumière et d’obscurité <strong>égales</strong>.</p></div>\n<div class=\"card\"><figure class=\"fig\" data-fig=\"rhythm\" data-code=\"Q\" data-color=\"W\"></figure><h4>Scintillant (Q / VQ)</h4><p>Petits éclats très rapprochés : environ 60 par minute (scintillant, Q), environ 120 par minute (scintillant rapide, VQ).</p></div>\n</div>\n<p>Les éclats peuvent être <strong>groupés</strong> : Fl(2) = 2 éclats groupés, Fl(3) = 3 éclats groupés, Fl(2+1) = 2 éclats suivis d’un éclat isolé. Un feu <strong>fixe</strong> (F) reste allumé en permanence.</p>\n\n<h3>Le sens conventionnel</h3>\n<p>Le balisage latéral se lit toujours dans le <strong>sens conventionnel : du large vers le port</strong> (en remontant un estuaire, un bras de mer ou une rivière). Tout le reste en découle : « bâbord » et « tribord » désignent le côté où l’on laisse la marque <strong>en entrant</strong>.</p>\n\n<div class=\"card-grid\">\n<div class=\"card\">\n<figure class=\"fig\" data-fig=\"mark\" data-type=\"lat-port\" data-light=\"1\"><figcaption>Marque bâbord</figcaption></figure>\n<h4>Marque bâbord</h4>\n<dl>\n<dt>Couleur</dt><dd>Rouge</dd>\n<dt>Forme / voyant</dt><dd>Cylindre (bouée cylindrique, charpente ou espar), voyant : un cylindre rouge</dd>\n<dt>Numéros</dt><dd>Pairs (2, 4, 6…), croissants vers le port</dd>\n<dt>Feu</dt><dd>Rouge, rythme quelconque (sauf 2+1)</dd>\n<dt>Conduite</dt><dd>En venant du large : la laisser à <strong>gauche</strong> (sur bâbord)</dd>\n</dl>\n</div>\n<div class=\"card\">\n<figure class=\"fig\" data-fig=\"mark\" data-type=\"lat-stbd\" data-light=\"1\"><figcaption>Marque tribord</figcaption></figure>\n<h4>Marque tribord</h4>\n<dl>\n<dt>Couleur</dt><dd>Verte</dd>\n<dt>Forme / voyant</dt><dd>Cône (bouée conique, charpente ou espar), voyant : un cône vert pointe en haut</dd>\n<dt>Numéros</dt><dd>Impairs (1, 3, 5…), croissants vers le port</dd>\n<dt>Feu</dt><dd>Vert, rythme quelconque (sauf 2+1)</dd>\n<dt>Conduite</dt><dd>En venant du large : la laisser à <strong>droite</strong> (sur tribord)</dd>\n</dl>\n</div>\n</div>\n\n<div class=\"mnemo\"><span class=\"mnemo-key\">BA-TRI</span><p>« <strong>BA</strong>t<strong>T</strong>e<strong>RI</strong>e » : dans le mot, <strong>BA</strong>bord vient avant <strong>TRI</strong>bord, comme la gauche avant la droite. Bâbord = gauche, tribord = droite.</p></div>\n<div class=\"mnemo\"><span class=\"mnemo-key\">Rouge-Pair</span><p><strong>Bâbord = rouge = cylindre = numéros pairs.</strong> <strong>Tribord = vert = cône = numéros impairs.</strong> Et <strong>TRI</strong>bord = <strong>TRI</strong>angle : le cône (triangle vu de profil) est à tribord.</p></div>\n<div class=\"callout warn\"><strong>En sortant du port, tout s’inverse</strong><p>Le balisage ne change pas, c’est votre sens de marche qui change : en sortant, on laisse les marques <strong>rouges à droite</strong> et les marques <strong>vertes à gauche</strong>. Un feu rouge droit devant en sortant : je viens à <strong>gauche</strong> pour le laisser sur tribord.</p></div>\n\n<h4>Musoirs, piles de pont, tourelles</h4>\n<ul>\n<li><strong>Musoir</strong> (extrémité d’une jetée) peint ou marqué en rouge (carré rouge) : il est sur votre bâbord en entrant, on le laisse à <strong>gauche</strong>. Musoir vert (triangle vert) : on le laisse à <strong>droite</strong>.</li>\n<li><strong>Pile de pont</strong> portant un <strong>triangle</strong> (marque tribord) : en remontant depuis le large, on la laisse sur tribord, donc on <strong>passe à gauche</strong> de la pile. Un <strong>carré</strong> (marque bâbord) : on passe à droite.</li>\n<li><strong>Tourelle</strong> verte à voyant conique en venant du large : on la laisse sur <strong>tribord</strong>. Tourelle rouge : sur bâbord.</li>\n<li>Deux balises vues droit devant, <strong>rouge à gauche et verte à droite</strong> : je suis dans le bon sens, je fais route vers le port.</li>\n</ul>\n\n<h3>Les marques de chenal préféré (bifurcation)</h3>\n<p>Quand un chenal se divise en deux, une marque latérale « modifiée » est placée à la bifurcation. Elle porte une <strong>large bande horizontale de l’autre couleur</strong> et indique le <strong>chenal principal</strong>, celui à prendre de préférence.</p>\n<div class=\"card-grid\">\n<div class=\"card\">\n<figure class=\"fig\" data-fig=\"mark\" data-type=\"pref-stbd\" data-light=\"1\"><figcaption>Chenal préféré à tribord</figcaption></figure>\n<h4>Chenal préféré à tribord</h4>\n<dl>\n<dt>Aspect</dt><dd>Rouge avec une bande horizontale verte, voyant cylindre rouge (marque bâbord modifiée)</dd>\n<dt>Feu</dt><dd>Rouge à éclats groupés 2+1, Fl(2+1) R</dd>\n<dt>Conduite</dt><dd>Pour suivre le chenal principal, je la laisse sur <strong>bâbord</strong> : je passe à <strong>droite</strong> (le chenal principal est à tribord).</dd>\n</dl>\n<figure class=\"fig\" data-fig=\"rhythm\" data-code=\"Fl(2+1)\" data-color=\"R\"></figure>\n</div>\n<div class=\"card\">\n<figure class=\"fig\" data-fig=\"mark\" data-type=\"pref-port\" data-light=\"1\"><figcaption>Chenal préféré à bâbord</figcaption></figure>\n<h4>Chenal préféré à bâbord</h4>\n<dl>\n<dt>Aspect</dt><dd>Verte avec une bande horizontale rouge, voyant cône vert (marque tribord modifiée)</dd>\n<dt>Feu</dt><dd>Vert à éclats groupés 2+1, Fl(2+1) G</dd>\n<dt>Conduite</dt><dd>Pour suivre le chenal principal, je la laisse sur <strong>tribord</strong> : je passe à <strong>gauche</strong> (le chenal principal est à bâbord).</dd>\n</dl>\n<figure class=\"fig\" data-fig=\"rhythm\" data-code=\"Fl(2+1)\" data-color=\"G\"></figure>\n</div>\n</div>\n<div class=\"mnemo\"><span class=\"mnemo-key\">Dominante</span><p>Seule compte la <strong>couleur dominante</strong> (couleur du haut et du voyant) : on traite la marque exactement comme une marque latérale de cette couleur. Rouge dominant = je la laisse à gauche en entrant ; vert dominant = je la laisse à droite. Le <strong>2+1</strong> est réservé au chenal préféré : aucune marque latérale simple ne l’utilise.</p></div>\n<div class=\"callout tip\"><strong>À l’examen</strong><p>Feu rouge 2+1 droit devant en rentrant au port : je passe à <strong>droite</strong>. Bouée verte à bande rouge et voyant conique : chenal préféré à bâbord, le chenal principal la laisse sur tribord. Il reste possible d’emprunter le chenal secondaire (en laissant la marque de l’autre côté), mais c’est le chenal principal qu’on suit par défaut.</p></div>\n\n<h3>Régions AISM A et B</h3>\n<p>Le monde est partagé en deux régions de balisage. En <strong>région A</strong> (Europe, Afrique, Asie sauf exceptions, Océanie dont la Polynésie française), le <strong>rouge est à bâbord</strong> en venant du large. En <strong>région B</strong> (Amériques, Japon, Corée, Philippines, Hawaï), les couleurs sont inversées : vert à bâbord, rouge à tribord. Les formes (cylindre à bâbord, cône à tribord) et les autres marques (cardinales, danger isolé, eaux saines, spéciales) sont identiques.</p>\n\n<div class=\"callout pf\"><strong>Polynésie française : région A</strong><p>La Polynésie applique le balisage de la région A, comme la métropole. Les <strong>passes</strong> se lisent dans le sens conventionnel, en entrant du large (océan) vers le lagon : marques rouges à gauche, vertes à droite.</p></div>\n<div class=\"callout pf\"><strong>Particularité du chenal dans le lagon</strong><p>À l’intérieur du lagon, le chenal longe la côte et n’a ni « entrée » ni « sortie » évidente. Il est balisé par des espars (perches rouges à voyant carré, vertes à voyant triangulaire) : dans les lagons, les marques <strong>rouges sont du côté de la terre</strong> et les marques <strong>vertes du côté du récif</strong>. <strong>Vérifiez toujours sur la carte</strong> et observez les deux rangées de balises avant de vous engager : entre les deux, l’eau est profonde ; à l’extérieur, patates de corail et hauts-fonds.</p></div>"
  },
  {
   "id": "mod1_sec2",
   "moduleId": "mod1",
   "number": "1.2",
   "title": "Marques spéciales, danger isolé, eaux saines, danger nouveau et plages",
   "subtitle": "Les autres marques AISM et le balisage de la bande côtière",
   "minutes": 14,
   "summary": "Eaux saines (rayures rouges et blanches, boule rouge), danger isolé (noir à bandes rouges, deux boules noires, Fl(2) blanc), marques spéciales jaunes à croix et danger nouveau. Le balisage des plages délimite la bande des 300 m, les zones de baignade et les chenaux traversiers.",
   "keyRules": [
    "Eaux saines : rayures verticales rouges et blanches, voyant une boule rouge, feu blanc isophase, à occultations, éclat long ou Morse A. Aucun danger autour.",
    "Danger isolé : noir à bande(s) rouge(s) horizontale(s), voyant deux boules noires, feu blanc à 2 éclats groupés Fl(2). Danger peu étendu sous la marque : s’en écarter largement.",
    "Marque spéciale : jaune, voyant croix jaune, feu jaune, de rythme différent de ceux des marques à feu blanc. Signale une zone particulière : se renseigner.",
    "Danger nouveau : obstruction récente non portée sur les cartes ; balisée par des marques habituelles dont l’une peut être doublée (deux balises identiques), feu scintillant.",
    "Bande des 300 m : grosses sphères jaunes espacées d’environ 200 m ; vitesse limitée à 5 nœuds.",
    "Zone de baignade : collier de petites sphères jaunes. Zone interdite aux navires à moteur : grosses sphères jaunes rapprochées.",
    "Chenal traversier : bouées jaunes cylindriques à bâbord, coniques à tribord (en venant du large)."
   ],
   "html": "<p class=\"lead\">En plus du balisage latéral et des cardinales, quatre familles de marques complètent le système : les eaux saines, le danger isolé, les marques spéciales (jaunes) et le balisage des dangers nouveaux. Près du rivage, les plages ont leur propre balisage jaune.</p>\n\n<div class=\"card-grid\">\n<div class=\"card\">\n<figure class=\"fig\" data-fig=\"mark\" data-type=\"safewater\" data-light=\"1\"><figcaption>Eaux saines</figcaption></figure>\n<h4>Marque d’eaux saines</h4>\n<dl>\n<dt>Signification</dt><dd><strong>Aucun obstacle autour</strong> de la marque : eau navigable tout autour. Indique le milieu d’un chenal ou un point d’atterrissage.</dd>\n<dt>Couleur</dt><dd>Rayures <strong>verticales</strong> rouges et blanches</dd>\n<dt>Forme / voyant</dt><dd>Sphérique, charpente ou espar ; voyant <strong>une boule rouge</strong></dd>\n<dt>Feu</dt><dd><strong>Blanc</strong> : isophase, à occultations, un éclat long toutes les 10 s, ou Morse A (· —)</dd>\n<dt>Conduite</dt><dd>Passer d’un côté ou de l’autre</dd>\n</dl>\n</div>\n<div class=\"card\">\n<figure class=\"fig\" data-fig=\"mark\" data-type=\"isolated\" data-light=\"1\"><figcaption>Danger isolé</figcaption></figure>\n<h4>Marque de danger isolé</h4>\n<dl>\n<dt>Signification</dt><dd>Un <strong>obstacle peu étendu</strong> (roche, patate de corail, épave) <strong>sous ou tout près de la marque</strong>, entouré d’eaux navigables</dd>\n<dt>Couleur</dt><dd><strong>Noire</strong> avec une ou plusieurs larges bandes <strong>rouges</strong> horizontales</dd>\n<dt>Voyant</dt><dd><strong>Deux boules noires</strong> superposées</dd>\n<dt>Feu</dt><dd><strong>Blanc à 2 éclats groupés</strong>, Fl(2)</dd>\n<dt>Conduite</dt><dd>Passer indifféremment d’un côté ou de l’autre, mais <strong>s’écarter largement</strong></dd>\n</dl>\n</div>\n</div>\n<div class=\"card-grid\">\n<div class=\"card\"><figure class=\"fig\" data-fig=\"rhythm\" data-code=\"Iso\" data-color=\"W\"></figure><h4>Eaux saines</h4><p>Isophase (ou Oc, LFl, Mo(A)) blanc.</p></div>\n<div class=\"card\"><figure class=\"fig\" data-fig=\"rhythm\" data-code=\"Mo(A)\" data-color=\"W\"></figure><h4>Eaux saines</h4><p>Morse A : un éclat court, un éclat long.</p></div>\n<div class=\"card\"><figure class=\"fig\" data-fig=\"rhythm\" data-code=\"Fl(2)\" data-color=\"W\"></figure><h4>Danger isolé</h4><p>Blanc, 2 éclats groupés.</p></div>\n</div>\n<div class=\"mnemo\"><span class=\"mnemo-key\">2 boules</span><p>Danger isolé : <strong>2 boules, 2 éclats</strong>. Eaux saines : <strong>1 boule</strong> rouge, les rayures « verticales » comme un ballon de plage : on peut tourner autour.</p></div>\n<div class=\"callout warn\"><strong>Ne pas confondre</strong><p>Un feu blanc à 2 éclats groupés = danger isolé. Un feu à 2+1 éclats (rouge ou vert) = chenal préféré. Un feu blanc scintillant = marque cardinale.</p></div>\n\n<h3>Les marques spéciales</h3>\n<p>Elles ne servent pas à guider la navigation : elles <strong>signalent une zone ou une installation particulière</strong>, indiquée sur les cartes et documents nautiques. Il faut <strong>se renseigner</strong> sur leur signification et, le plus souvent, éviter la zone.</p>\n<div class=\"card-grid\">\n<div class=\"card\">\n<figure class=\"fig\" data-fig=\"mark\" data-type=\"special\" data-light=\"1\"><figcaption>Marque spéciale</figcaption></figure>\n<h4>Marques spéciales durables</h4>\n<dl>\n<dt>Couleur</dt><dd><strong>Jaune</strong></dd>\n<dt>Voyant</dt><dd>Une <strong>croix jaune</strong> en forme de X</dd>\n<dt>Feu</dt><dd><strong>Jaune</strong>, rythme quelconque différent de ceux des feux blancs (cardinales, danger isolé, eaux saines), par exemple 3 éclats groupés</dd>\n<dt>Exemples</dt><dd>Zones d’exercices militaires, zones de tir, câbles ou canalisations sous-marins, zone aéroportuaire (hydravions), zone de mouillage de quarantaine, zones de dépôts, d’aquaculture…</dd>\n</dl>\n</div>\n<div class=\"card\">\n<h4>Marques spéciales occasionnelles</h4>\n<p>Bouées jaunes temporaires : parcours de régate, zones d’activités, et surtout <strong>balisage des plages</strong> (voir ci-dessous). Leur forme (sphère, cylindre, cône) donne l’information.</p>\n</div>\n</div>\n<div class=\"callout tip\"><strong>À l’examen</strong><p>De nuit dans une rade, un feu <strong>jaune à 3 éclats groupés</strong> : c’est une marque spéciale, qui peut indiquer par exemple un <strong>mouillage de quarantaine</strong>. Une grosse marque jaune à croix peut indiquer une <strong>zone d’exercices</strong>.</p></div>\n\n<h3>Les dangers nouveaux</h3>\n<p>Un danger nouveau est une <strong>obstruction récente, non encore portée sur les documents nautiques</strong> : naufrage, épave, banc de sable ou de corail récemment découvert.</p>\n<ul>\n<li>Il est balisé avec les <strong>marques habituelles</strong> (latérales, cardinales, danger isolé ou spéciales), selon sa position.</li>\n<li>Si le danger est jugé grave, l’une des marques est <strong>doublée</strong> : on voit <strong>deux balises identiques</strong> côte à côte (par exemple deux bouées vertes, deux cardinales Sud).</li>\n<li>De nuit, les feux de ces marques sont <strong>scintillants</strong> (Q) ou <strong>scintillants rapides</strong> (VQ), de la couleur habituelle de la marque (blanc pour une cardinale).</li>\n</ul>\n<div class=\"card-grid\">\n<div class=\"card\">\n<figure class=\"fig\" data-fig=\"mark\" data-type=\"newdanger\" data-light=\"1\"><figcaption>Bouée d’épave d’urgence</figcaption></figure>\n<h4>Bouée d’épave d’urgence</h4>\n<p>Une bouée spécifique peut aussi être mouillée en urgence sur une épave : <strong>bandes verticales bleues et jaunes</strong>, voyant <strong>croix jaune droite (+)</strong>, feu alternant <strong>bleu et jaune</strong>. Elle reste en place jusqu’à ce que le danger soit publié et balisé de façon durable.</p>\n</div>\n</div>\n<div class=\"callout tip\"><strong>À l’examen</strong><p>« Deux bouées vertes identiques côte à côte dans un chenal » = <strong>danger nouveau grave</strong>. « Comment doit-on baliser un danger nouveau jugé grave ? » : avec <strong>deux balises identiques</strong> (une marque doublée). Un danger nouveau non jugé grave reçoit simplement les marques habituelles.</p></div>\n\n<h3>Le balisage des plages et de la bande des 300 m</h3>\n<p>Pour la sécurité des baigneurs et des usagers, les abords des plages sont équipés de bouées jaunes et de pictogrammes. Ces bouées sont jaunes, comme les marques spéciales, mais leur signification et leur disposition ne sont pas fixées par les règles AISM : elles relèvent d’arrêtés locaux.</p>\n<table class=\"data-table\">\n<thead><tr><th>Bouées</th><th>Signification</th></tr></thead>\n<tbody>\n<tr><td>Grosses <strong>sphères jaunes</strong> (environ 1 m de diamètre) espacées d’environ <strong>200 m</strong></td><td>Limite de la <strong>bande littorale des 300 m</strong> : vitesse limitée à <strong>5 nœuds</strong> à l’intérieur</td></tr>\n<tr><td><strong>Collier</strong> de petites sphères jaunes (cordon)</td><td><strong>Zone réservée à la baignade</strong> : interdite à tout engin</td></tr>\n<tr><td>Grosses sphères jaunes <strong>rapprochées</strong></td><td>Zone <strong>interdite aux navires à moteur</strong></td></tr>\n<tr><td>Bouées jaunes <strong>cylindriques</strong> d’un côté et <strong>coniques</strong> de l’autre</td><td><strong>Chenal traversier</strong> : couloir permettant de rejoindre ou de quitter le rivage à travers la bande des 300 m. En venant du large : cylindres à <strong>bâbord</strong>, cônes à <strong>tribord</strong>.</td></tr>\n</tbody>\n</table>\n<div class=\"callout warn\"><strong>Le chenal traversier</strong><p>Il se lit comme un balisage latéral, mais en jaune : la <strong>forme</strong> donne le côté. Une bouée jaune conique près d’une plage = bouée tribord de chenal traversier ; une bouée jaune cylindrique = bouée bâbord de chenal traversier. On y circule à vitesse réduite, sans s’arrêter.</p></div>\n<h4>Pictogrammes</h4>\n<p>Sur la plage ou sur les bouées, des panneaux carrés indiquent les activités <strong>autorisées</strong> (pictogramme d’autorisation) ou <strong>interdites</strong> (pictogramme barré de rouge) : baignade, planches à voile, embarcations de sport ou de plaisance, ski nautique, engins non motorisés, navires à voile, véhicules nautiques à moteur, bâtiments motorisés, et la limitation de vitesse à 5 nœuds.</p>\n<div class=\"callout pf\"><strong>Polynésie française</strong><p>La vitesse est limitée à <strong>5 nœuds dans la bande des 300 m</strong> à partir du rivage. Dans les lagons, de nombreuses zones de baignade, de mouillage et d’activités sont balisées par des bouées jaunes : se renseigner auprès de la capitainerie ou de la commune.</p></div>"
  },
  {
   "id": "mod1_sec3",
   "moduleId": "mod1",
   "number": "1.3",
   "title": "Les marques cardinales",
   "subtitle": "Couleurs, voyants, feux et méthode pour passer du bon côté",
   "minutes": 15,
   "summary": "Une marque cardinale indique de quel côté se trouvent les eaux saines par rapport à un danger : on passe du côté qui porte son nom. On la reconnaît à ses deux cônes noirs, à la position du noir et, la nuit, à son feu blanc scintillant compté comme une horloge (12-3-6-9).",
   "keyRules": [
    "On passe du côté qui porte le nom de la marque : au nord d’une cardinale Nord, à l’est d’une Est… Le danger est du côté opposé.",
    "Les pointes des cônes indiquent où est le noir : Nord pointes en haut (noir en haut), Sud pointes en bas (noir en bas).",
    "Est : cônes opposés par la base, noir aux extrémités. Ouest : cônes opposés par la pointe, noir au milieu.",
    "Feux blancs scintillants comme une horloge : Nord continu (12 h), Est 3 scintillements, Sud 6 + un éclat long, Ouest 9.",
    "Périodes : Est 10 s (Q) ou 5 s (VQ) ; Sud et Ouest 15 s (Q) ou 10 s (VQ).",
    "Voyant disparu : se fier aux couleurs. Contre-jour : se fier au voyant.",
    "Convertir ensuite en droite/gauche selon votre cap."
   ],
   "html": "<p class=\"lead\">Les marques cardinales signalent un danger (roche, banc, récif, épave) et indiquent <strong>de quel côté se trouvent les eaux saines</strong>. Elles sont placées dans l’un des quatre quadrants autour du danger, au Nord, à l’Est, au Sud ou à l’Ouest. Leur règle est indépendante du sens conventionnel : seul compte le compas.</p>\n\n<h3>Le principe</h3>\n<p>Les quatre quadrants sont limités par les directions NE, SE, SW et NW. Une cardinale <strong>Nord</strong> est placée au nord du danger : les eaux saines sont <strong>au nord</strong> de la marque. On passe <strong>du côté qui porte le nom de la marque</strong>.</p>\n<figure class=\"fig\" data-fig=\"cardinal-rose\"><figcaption>Les quatre cardinales autour d’un danger : le côté libre est celui qui porte le nom de la marque</figcaption></figure>\n<div class=\"mnemo\"><span class=\"mnemo-key\">Nom = côté libre</span><p>Cardinale Nord : je passe au <strong>Nord</strong>. Cardinale Ouest : je passe à l’<strong>Ouest</strong>. Le danger, lui, est toujours du côté <strong>opposé</strong> au nom (une cardinale Est couvre un danger situé à l’Ouest).</p></div>\n\n<h3>Reconnaître une cardinale</h3>\n<p>Toutes les cardinales sont <strong>noires et jaunes</strong> et portent un voyant de <strong>deux cônes noirs superposés</strong>.</p>\n<div class=\"card-grid\">\n<div class=\"card\">\n<figure class=\"fig\" data-fig=\"mark\" data-type=\"card-n\" data-light=\"1\"><figcaption>Cardinale Nord</figcaption></figure>\n<h4>Cardinale Nord</h4>\n<dl><dt>Voyant</dt><dd>2 cônes <strong>pointes en haut</strong></dd><dt>Couleurs</dt><dd><strong>Noir en haut</strong>, jaune en bas</dd><dt>Feu</dt><dd>Blanc scintillant <strong>continu</strong> : Q ou VQ</dd><dt>Conduite</dt><dd>Passer au Nord (danger au Sud)</dd></dl>\n</div>\n<div class=\"card\">\n<figure class=\"fig\" data-fig=\"mark\" data-type=\"card-e\" data-light=\"1\"><figcaption>Cardinale Est</figcaption></figure>\n<h4>Cardinale Est</h4>\n<dl><dt>Voyant</dt><dd>2 cônes <strong>opposés par la base</strong> (pointes vers l’extérieur, forme de losange)</dd><dt>Couleurs</dt><dd><strong>Noir aux extrémités</strong>, bande jaune au milieu</dd><dt>Feu</dt><dd>Blanc, <strong>3</strong> scintillements : Q(3) 10 s ou VQ(3) 5 s</dd><dt>Conduite</dt><dd>Passer à l’Est (danger à l’Ouest)</dd></dl>\n</div>\n<div class=\"card\">\n<figure class=\"fig\" data-fig=\"mark\" data-type=\"card-s\" data-light=\"1\"><figcaption>Cardinale Sud</figcaption></figure>\n<h4>Cardinale Sud</h4>\n<dl><dt>Voyant</dt><dd>2 cônes <strong>pointes en bas</strong></dd><dt>Couleurs</dt><dd>Jaune en haut, <strong>noir en bas</strong></dd><dt>Feu</dt><dd>Blanc, <strong>6</strong> scintillements + <strong>1 éclat long</strong> : Q(6)+LFl 15 s ou VQ(6)+LFl 10 s</dd><dt>Conduite</dt><dd>Passer au Sud (danger au Nord)</dd></dl>\n</div>\n<div class=\"card\">\n<figure class=\"fig\" data-fig=\"mark\" data-type=\"card-w\" data-light=\"1\"><figcaption>Cardinale Ouest</figcaption></figure>\n<h4>Cardinale Ouest</h4>\n<dl><dt>Voyant</dt><dd>2 cônes <strong>opposés par la pointe</strong> (forme de sablier ou de verre à pied, « W » couché)</dd><dt>Couleurs</dt><dd>Jaune aux extrémités, <strong>noir au milieu</strong></dd><dt>Feu</dt><dd>Blanc, <strong>9</strong> scintillements : Q(9) 15 s ou VQ(9) 10 s</dd><dt>Conduite</dt><dd>Passer à l’Ouest (danger à l’Est)</dd></dl>\n</div>\n</div>\n<div class=\"mnemo\"><span class=\"mnemo-key\">Pointes = noir</span><p>Les <strong>pointes des cônes indiquent où se trouve le noir</strong>. Nord : pointes en haut, noir en haut. Sud : pointes en bas, noir en bas. Est : pointes vers les extrémités, noir aux deux extrémités. Ouest : pointes vers le milieu, noir au milieu.</p></div>\n<div class=\"mnemo\"><span class=\"mnemo-key\">Nord en haut</span><p>« <strong>Pointes en haut = Nord</strong> » comme une flèche vers le nord de la carte ; « pointes en bas = Sud ». Les deux cônes de l’Est dessinent un <strong>losange</strong> ; ceux de l’Ouest un <strong>sablier</strong>, qui rappelle la lettre <strong>W</strong> (West) couchée.</p></div>\n<div class=\"card-grid\">\n<div class=\"card\"><figure class=\"fig\" data-fig=\"shapes\" data-shapes=\"cone-up,cone-up\"></figure><h4>Nord</h4></div>\n<div class=\"card\"><figure class=\"fig\" data-fig=\"shapes\" data-shapes=\"cone-up,cone-down\"></figure><h4>Est</h4></div>\n<div class=\"card\"><figure class=\"fig\" data-fig=\"shapes\" data-shapes=\"cone-down,cone-down\"></figure><h4>Sud</h4></div>\n<div class=\"card\"><figure class=\"fig\" data-fig=\"shapes\" data-shapes=\"cone-down,cone-up\"></figure><h4>Ouest</h4></div>\n</div>\n\n<h3>De nuit : le cadran d’une horloge</h3>\n<p>Toutes les cardinales ont un feu <strong>blanc scintillant</strong> : scintillant (Q, environ 60 par minute) ou scintillant rapide (VQ, environ 120 par minute). Le <strong>nombre de scintillements</strong> correspond à la position sur le cadran d’une montre.</p>\n<div class=\"mnemo\"><span class=\"mnemo-key\">12-3-6-9</span><p>Nord = <strong>12 h</strong> : scintillement continu. Est = <strong>3 h</strong> : 3 scintillements. Sud = <strong>6 h</strong> : 6 scintillements + 1 éclat long. Ouest = <strong>9 h</strong> : 9 scintillements.</p></div>\n<div class=\"card-grid\">\n<div class=\"card\"><figure class=\"fig\" data-fig=\"rhythm\" data-code=\"Q\" data-color=\"W\"></figure><h4>Nord : Q (ou VQ)</h4><p>Continu.</p></div>\n<div class=\"card\"><figure class=\"fig\" data-fig=\"rhythm\" data-code=\"Q(3)\" data-color=\"W\"></figure><h4>Est : Q(3) 10 s</h4><p>VQ(3) 5 s.</p></div>\n<div class=\"card\"><figure class=\"fig\" data-fig=\"rhythm\" data-code=\"Q(6)+LFl\" data-color=\"W\"></figure><h4>Sud : Q(6)+LFl 15 s</h4><p>VQ(6)+LFl 10 s.</p></div>\n<div class=\"card\"><figure class=\"fig\" data-fig=\"rhythm\" data-code=\"Q(9)\" data-color=\"W\"></figure><h4>Ouest : Q(9) 15 s</h4><p>VQ(9) 10 s.</p></div>\n</div>\n<div class=\"callout tip\"><strong>Pourquoi un éclat long au Sud ?</strong><p>Compter 6, 3 ou 9 scintillements rapides est source d’erreur. L’<strong>éclat long</strong> qui suit les 6 scintillements de la cardinale Sud permet de la distinguer sans ambiguïté.</p></div>\n\n<h3>Méthode pour les questions « droit devant »</h3>\n<ol class=\"steps\">\n<li><strong>Identifier la marque</strong> : par le voyant ; si le voyant a disparu, par la position du noir ; à contre-jour (couleurs illisibles), par le voyant.</li>\n<li><strong>Côté libre</strong> = le nom de la marque (cardinale Ouest : je dois passer à l’Ouest de la marque).</li>\n<li><strong>Convertir en droite/gauche selon mon cap</strong> : cap au Nord, l’Est est à droite et l’Ouest à gauche ; cap au Sud, l’Ouest est à droite et l’Est à gauche ; cap à l’Est, le Sud est à droite ; cap à l’Ouest, le Nord est à droite.</li>\n<li><strong>Manœuvrer franchement et garder du large</strong> : le danger peut être étendu. Si la marque est du « mauvais » côté de ma route (cardinale Sud droit devant alors que je fais route au Nord), je ne la franchis pas : je contourne largement le danger.</li>\n</ol>\n<table class=\"data-table\">\n<thead><tr><th>Marque droit devant</th><th>Cap au Nord</th><th>Cap au Sud</th><th>Cap à l’Est</th><th>Cap à l’Ouest</th></tr></thead>\n<tbody>\n<tr><td>Cardinale Nord (passer au N)</td><td><em>Danger entre la marque et moi : contourner largement</em></td><td><em>Ne pas la franchir : changer de route</em></td><td>Je viens à <strong>gauche</strong></td><td>Je viens à <strong>droite</strong></td></tr>\n<tr><td>Cardinale Est (passer à l’E)</td><td>Je viens à <strong>droite</strong></td><td>Je viens à <strong>gauche</strong> (je la laisse à droite)</td><td><em>Danger entre la marque et moi : contourner largement</em></td><td><em>Ne pas la franchir : changer de route</em></td></tr>\n<tr><td>Cardinale Sud (passer au S)</td><td><em>Ne pas la franchir : changer de route</em></td><td><em>Danger entre la marque et moi : contourner largement</em></td><td>Je viens à <strong>droite</strong></td><td>Je viens à <strong>gauche</strong></td></tr>\n<tr><td>Cardinale Ouest (passer à l’W)</td><td>Je viens à <strong>gauche</strong></td><td>Je viens à <strong>droite</strong></td><td><em>Ne pas la franchir : changer de route</em></td><td><em>Danger entre la marque et moi : contourner largement</em></td></tr>\n</tbody>\n</table>\n<div class=\"callout tip\"><strong>Exemples du cours</strong><p>Je fais route au 080 et une cardinale Ouest est sur ma route : je passe à l’<strong>Ouest</strong> de la marque, puis je remonte au Nord pour contourner le danger qui est « quelque part » à l’Est. Cap au Nord-Est, cardinale Ouest droit devant (voyant disparu, noir au milieu) : je viens sur bâbord, je laisse la bouée sur tribord, je fais route au Nord un instant avant de reprendre mon cap. Venant du Nord (cap au Sud), une cardinale Est se laisse sur <strong>tribord</strong>.</p></div>\n<div class=\"callout warn\"><strong>Pièges fréquents</strong><p>Ne confondez pas l’<strong>Est</strong> (cônes opposés par la base, noir aux extrémités) et l’<strong>Ouest</strong> (cônes opposés par la pointe, noir au milieu). Ne confondez pas non plus le voyant Ouest des cardinales avec les deux cônes « pointes réunies » d’un navire de pêche : la bouée est noire et jaune et ne bouge pas.</p></div>\n\n<h3>Synthèse sur la carte</h3>\n<p>Sur une carte marine, chaque marque est représentée par un symbole avec ses couleurs et son voyant ; la tache magenta indique un feu. Dans un chenal de lagon, on retrouve à la suite marques latérales, cardinales signalant les patates de corail, et parfois danger isolé : lisez la carte avant de partir et suivez le chenal balisé.</p>\n<div class=\"callout pf\"><strong>Polynésie française</strong><p>Dans les lagons, les cardinales sont souvent de simples <strong>espars</strong> (perches noires et jaunes à voyant) plantés sur le bord d’une patate ou d’un platier. Les dangers coralliens sont souvent étendus : passez franchement du côté indiqué et gardez une bonne distance.</p></div>"
  },
  {
   "id": "mod2_sec1",
   "moduleId": "mod2",
   "number": "2.1",
   "title": "Feux et marques des navires",
   "subtitle": "Feux de route, portées, navires à moteur, voiliers, mouillage et remorquage",
   "minutes": 18,
   "summary": "Les feux de route (tête de mât, côtés, poupe) indiquent le type, la taille et le sens de marche d’un navire de nuit ; les marques de jour (boule, cône, losange…) signalent sa situation. Ce chapitre couvre les navires à moteur, les voiliers, les embarcations à rames, le mouillage et le remorquage.",
   "keyRules": [
    "Tête de mât blanc 225°, feux de côté 112,5° (rouge à bâbord, vert à tribord), poupe blanc 135°.",
    "Vu de face, le vert est à gauche et le rouge à droite de l’observateur.",
    "Navire à moteur : feu(x) de tête de mât + feux de côté + poupe. 50 m et plus : deux feux de tête de mât, celui de l’arrière plus haut.",
    "Moins de 12 m : un feu blanc visible sur tout l’horizon + feux de côté. Moins de 7 m et vitesse maximale de 7 nœuds au plus : un feu blanc visible sur tout l’horizon suffit.",
    "Voilier : feux de côté et de poupe, jamais de feu de tête de mât (moins de 20 m : fanal tricolore possible). Voile + moteur = navire à moteur ; de jour, un cône pointe en bas.",
    "Mouillage : de jour une boule noire ; de nuit un feu blanc (moins de 50 m) ou deux (50 m et plus, celui de l’avant plus haut).",
    "Remorquage : feu jaune de remorquage au-dessus du feu de poupe, et 2 feux de tête de mât superposés (remorque de 200 m ou moins) ou 3 (plus de 200 m) ; de jour, un losange si la remorque dépasse 200 m.",
    "Canot, kayak, pirogue à rames : au minimum une lampe torche ou un fanal blanc à montrer à temps."
   ],
   "html": "<p class=\"lead\">De nuit, ce sont les <strong>feux</strong> qui permettent de savoir quel navire on croise, quelle est sa taille, dans quel sens il fait route et ce qu’il est en train de faire. De jour, les <strong>marques</strong> (formes noires hissées) remplacent les feux spéciaux. Les règles viennent du RIPAM (Règlement international pour prévenir les abordages en mer).</p>\n\n<h3>Deux catégories de feux, plus les marques de jour</h3>\n<ul>\n<li><strong>Les feux de route</strong> que portent tous les navires faisant route : feu(x) de tête de mât, feux de côté, feu de poupe.</li>\n<li><strong>Les feux de travail, de type de navire ou de situation particulière</strong> : pêche, remorquage, navire non maître de sa manœuvre, mouillage, échouage… Ce sont souvent des feux « visibles sur tout l’horizon » (360°) superposés.</li>\n<li><strong>Les marques de jour</strong> : boules, cônes, losanges et cylindres noirs, hissés là où on les voit le mieux.</li>\n</ul>\n<p>Les feux sont allumés <strong>du coucher au lever du soleil</strong> et <strong>par visibilité réduite</strong>, même de jour. Pendant ce temps, aucun autre feu ne doit pouvoir être confondu avec eux.</p>\n\n<h3>Les feux de route : secteurs et couleurs</h3>\n<figure class=\"fig\" data-fig=\"sectors\"><figcaption>Les secteurs des feux de route</figcaption></figure>\n<table class=\"data-table\">\n<thead><tr><th>Feu</th><th>Couleur</th><th>Secteur</th><th>Visible</th></tr></thead>\n<tbody>\n<tr><td>Tête de mât</td><td>Blanc</td><td><strong>225°</strong></td><td>De l’avant jusqu’à 22,5° sur l’arrière du travers, de chaque bord</td></tr>\n<tr><td>Feu de côté bâbord</td><td>Rouge</td><td><strong>112,5°</strong></td><td>De l’avant jusqu’à 22,5° sur l’arrière du travers bâbord</td></tr>\n<tr><td>Feu de côté tribord</td><td>Vert</td><td><strong>112,5°</strong></td><td>De l’avant jusqu’à 22,5° sur l’arrière du travers tribord</td></tr>\n<tr><td>Poupe</td><td>Blanc</td><td><strong>135°</strong></td><td>Vers l’arrière, 67,5° de chaque côté</td></tr>\n<tr><td>Feu visible sur tout l’horizon</td><td>Selon le cas</td><td>360°</td><td>Tout autour</td></tr>\n<tr><td>Feu de remorquage</td><td>Jaune</td><td>135°</td><td>Comme le feu de poupe, placé au-dessus de lui</td></tr>\n</tbody>\n</table>\n<p>Le feu de tête de mât (225°) et le feu de poupe (135°) se complètent pour faire le tour de l’horizon : 225 + 135 = 360°. De même, les deux feux de côté couvrent ensemble 225°.</p>\n<div class=\"mnemo\"><span class=\"mnemo-key\">Rouge = bâbord</span><p>Mêmes couleurs que le balisage : <strong>rouge à bâbord, vert à tribord</strong>. En rentrant au port, les feux de côté de votre bateau sont du même côté que les marques latérales de même couleur.</p></div>\n<div class=\"callout warn\"><strong>Toujours raisonner depuis l’observateur</strong><p>Un navire qui vient <strong>droit sur vous</strong> vous montre ses deux feux de côté : son <strong>vert est à votre gauche</strong> et son <strong>rouge à votre droite</strong>. Si vous ne voyez que son <strong>vert</strong>, il vous montre son flanc tribord ; si vous ne voyez que son <strong>rouge</strong>, son flanc bâbord. Si un navire en route ne vous montre qu’un <strong>feu blanc</strong>, vous êtes sur son arrière (feu de poupe) : si vous vous en rapprochez, c’est vous qui le rattrapez. Attention : un feu blanc seul peut aussi être un feu de mouillage, ou le feu unique d’une petite embarcation à moteur.</p></div>\n\n<h4>Portée minimale des feux</h4>\n<table class=\"data-table\">\n<thead><tr><th>Longueur du navire</th><th>Tête de mât</th><th>Côtés</th><th>Poupe, remorquage, tout l’horizon</th></tr></thead>\n<tbody>\n<tr><td>Moins de 12 m</td><td>2 milles</td><td>1 mille</td><td>2 milles</td></tr>\n<tr><td>De 12 à moins de 20 m</td><td>3 milles</td><td>2 milles</td><td>2 milles</td></tr>\n<tr><td>De 20 à moins de 50 m</td><td>5 milles</td><td>2 milles</td><td>2 milles</td></tr>\n<tr><td>50 m et plus</td><td>6 milles</td><td>3 milles</td><td>3 milles</td></tr>\n</tbody>\n</table>\n\n<h3>Navire à propulsion manuelle</h3>\n<p>Un <strong>canot, kayak, aviron ou une pirogue</strong> à rames peut porter les feux d’un voilier ; sinon il doit au minimum avoir à portée de main une <strong>lampe torche ou un fanal à feu blanc</strong>, à montrer suffisamment tôt pour éviter un abordage.</p>\n<div class=\"callout pf\"><strong>Va’a et kayaks dans le lagon</strong><p>Les pirogues (va’a) et kayaks sont très nombreux en Polynésie, tôt le matin et au crépuscule, souvent sans autre feu qu’une lampe. Réduisez votre vitesse et redoublez de veille près des côtes et dans les chenaux du lagon.</p></div>\n\n<h3>Navire à propulsion mécanique faisant route</h3>\n<div class=\"card-grid\">\n<div class=\"card\">\n<figure class=\"fig\" data-fig=\"lights\" data-rows=\"W\" data-view=\"vu de tous côtés\"></figure>\n<h4>Moins de 7 m, vitesse maximale de 7 nœuds au plus</h4>\n<p>Peut se contenter d’<strong>un feu blanc visible sur tout l’horizon</strong> (et, si possible, des feux de côté). C’est le <strong>minimum</strong> pour une petite embarcation à moteur.</p>\n</div>\n<div class=\"card\">\n<figure class=\"fig\" data-fig=\"lights\" data-rows=\"W|G . R\" data-view=\"vu de l’avant\"></figure>\n<h4>Moins de 12 m</h4>\n<p>Feux de côté (souvent un <strong>fanal bicolore</strong> à l’étrave) + <strong>un feu blanc visible sur tout l’horizon</strong>, qui remplace le feu de tête de mât et le feu de poupe. C’est l’équipement de la plupart des bateaux de plaisance.</p>\n</div>\n<div class=\"card\">\n<figure class=\"fig\" data-fig=\"lights\" data-rows=\"W|G . R\" data-view=\"vu de l’avant\"></figure>\n<h4>Moins de 50 m</h4>\n<p><strong>Un feu de tête de mât</strong> + feux de côté + feu de poupe. (Un second feu de tête de mât est facultatif.)</p>\n</div>\n<div class=\"card\">\n<figure class=\"fig\" data-fig=\"lights\" data-rows=\"W|.|W|G . R\" data-view=\"vu de l’avant\"></figure>\n<h4>50 m et plus</h4>\n<p><strong>Deux feux de tête de mât</strong>, celui de l’<strong>arrière plus haut</strong> que celui de l’avant, + feux de côté + feu de poupe. Vus de face, les deux feux blancs sont alignés verticalement.</p>\n</div>\n</div>\n<h4>Un navire à moteur de plus de 50 m vu sous différents angles</h4>\n<div class=\"card-grid\">\n<div class=\"card\"><figure class=\"fig\" data-fig=\"lights\" data-rows=\"W . .|. . W|. G .\" data-view=\"vu par tribord\"></figure><p>Vu par <strong>tribord</strong> : il va vers votre droite. Le feu bas (avant) est à droite, le feu haut (arrière) à gauche, feu vert.</p></div>\n<div class=\"card\"><figure class=\"fig\" data-fig=\"lights\" data-rows=\". . W|W . .|. R .\" data-view=\"vu par bâbord\"></figure><p>Vu par <strong>bâbord</strong> : il va vers votre gauche. Feu bas (avant) à gauche, feu haut (arrière) à droite, feu rouge.</p></div>\n<div class=\"card\"><figure class=\"fig\" data-fig=\"lights\" data-rows=\"W\" data-view=\"vu de l’arrière\"></figure><p>Vu de l’<strong>arrière</strong> : seul le feu de poupe est visible.</p></div>\n</div>\n<div class=\"callout tip\"><strong>Lire la direction d’un grand navire</strong><p>Les deux feux de tête de mât forment une « flèche » : le feu <strong>bas</strong> est à l’<strong>avant</strong>. Le navire se dirige du côté du feu bas. S’ils se rapprochent l’un de l’autre jusqu’à s’aligner, il vient vers vous.</p></div>\n<div class=\"callout tip\"><strong>À l’examen</strong><p>Un feu blanc et un feu vert seuls, un seul feu blanc de tête de mât : navire à moteur de <strong>moins de 50 m</strong> vu par tribord. Sur l’avant tribord, un navire qui vous montre son <strong>vert</strong> (vert contre vert) : vous continuez votre route. Un grand navire qui vous montre son <strong>rouge</strong> et se dirige vers votre route sur votre tribord : il est prioritaire, vous passez sur son arrière (vous venez sur la droite).</p></div>\n\n<h3>Navire à voile faisant route</h3>\n<div class=\"card-grid\">\n<div class=\"card\">\n<figure class=\"fig\" data-fig=\"lights\" data-rows=\"G . R\" data-view=\"vu de l’avant\"></figure>\n<h4>Voilier sous voiles</h4>\n<p><strong>Feux de côté + feu de poupe</strong>, <strong>jamais de feu de tête de mât</strong>. Il peut ajouter en tête de mât deux feux visibles sur tout l’horizon, <strong>rouge au-dessus de vert</strong>, mais jamais avec un fanal tricolore.</p>\n</div>\n<div class=\"card\">\n<figure class=\"fig\" data-fig=\"lights\" data-rows=\"GR\" data-view=\"fanal tricolore vu de l’avant\"></figure>\n<h4>Voilier de moins de 20 m</h4>\n<p>Peut réunir feux de côté et feu de poupe dans un seul <strong>fanal tricolore</strong> en tête de mât. Un feu rouge/vert seul, sans feu blanc au-dessus, vu de face : <strong>voilier de moins de 20 m</strong>.</p>\n</div>\n<div class=\"card\">\n<figure class=\"fig\" data-fig=\"lights\" data-rows=\"W|G . R\" data-view=\"vu de l’avant\"></figure>\n<figure class=\"fig\" data-fig=\"shapes\" data-shapes=\"cone-down\"></figure>\n<h4>Voile et moteur</h4>\n<p>Un voilier qui utilise son moteur (même avec ses voiles) est un <strong>navire à propulsion mécanique</strong> : il allume son feu de tête de mât. De jour, il hisse <strong>un cône pointe en bas</strong> à l’avant.</p>\n</div>\n</div>\n<div class=\"callout warn\"><strong>Pas de fanal tricolore au moteur</strong><p>Le fanal tricolore n’est autorisé qu’à la voile. Au moteur, on allume les feux de côté et de poupe (ou un bicolore) avec le feu de tête de mât. À la voile, un voilier de moins de 7 m doit au minimum pouvoir montrer une lampe ou un fanal blanc.</p></div>\n\n<h3>Navires au mouillage</h3>\n<div class=\"card-grid\">\n<div class=\"card\">\n<figure class=\"fig\" data-fig=\"shapes\" data-shapes=\"ball\"></figure>\n<h4>De jour</h4>\n<p><strong>Une boule noire</strong> à l’avant.</p>\n</div>\n<div class=\"card\">\n<figure class=\"fig\" data-fig=\"lights\" data-rows=\"W\" data-view=\"de tous côtés\"></figure>\n<h4>Moins de 50 m</h4>\n<p><strong>Un feu blanc visible sur tout l’horizon</strong>, à l’endroit où on le voit le mieux.</p>\n</div>\n<div class=\"card\">\n<figure class=\"fig\" data-fig=\"lights\" data-rows=\"W .|. W\" data-view=\"vu par le travers\"></figure>\n<h4>50 m et plus</h4>\n<p><strong>Deux feux blancs</strong> : à l’avant (le plus haut) et à l’arrière (plus bas). Les grands navires éclairent aussi leurs ponts (obligatoire à partir de 100 m). Attention : c’est l’inverse des feux de tête de mât d’un navire en route.</p>\n</div>\n</div>\n<p>Un navire de moins de 7 m mouillé hors d’un chenal, d’un mouillage fréquenté ou d’une route n’est pas tenu de montrer ces feux ou cette marque.</p>\n\n<h3>Le remorquage</h3>\n<p>La <strong>longueur de la remorque</strong> se mesure <strong>de la poupe du remorqueur à la poupe du remorqué</strong>. Le seuil est de <strong>200 m</strong>.</p>\n<table class=\"data-table\">\n<thead><tr><th>Situation</th><th>Remorqueur, de nuit</th><th>Remorqué, de nuit</th><th>De jour</th></tr></thead>\n<tbody>\n<tr><td>Remorque de <strong>200 m ou moins</strong></td><td><strong>2 feux de tête de mât</strong> superposés + feux de côté + poupe + <strong>feu de remorquage jaune</strong> au-dessus du feu de poupe</td><td>Feux de côté + feu de poupe</td><td>Aucune marque</td></tr>\n<tr><td>Remorque de <strong>plus de 200 m</strong></td><td><strong>3 feux de tête de mât</strong> superposés + feux de côté + poupe + feu jaune de remorquage</td><td>Feux de côté + feu de poupe</td><td><strong>Un losange</strong> sur le remorqueur <strong>et</strong> sur le remorqué</td></tr>\n<tr><td>Remorquage <strong>à couple</strong> ou en poussant</td><td>2 feux de tête de mât superposés + feux de côté + feu de poupe</td><td>Feux de côté à l’avant (et feu de poupe à couple)</td><td>Aucune marque</td></tr>\n</tbody>\n</table>\n<p>Un remorqueur de 50 m ou plus ajoute en plus son <strong>feu de tête de mât arrière</strong>, plus haut.</p>\n<div class=\"card-grid\">\n<div class=\"card\"><figure class=\"fig\" data-fig=\"lights\" data-rows=\"W|W|G . R\" data-view=\"vu de l’avant\"></figure><h4>Remorque de 200 m ou moins</h4><p>Deux blancs superposés, rapprochés sur le même mât. Ne pas confondre avec un navire de 50 m ou plus, dont les deux feux sont bien plus écartés.</p></div>\n<div class=\"card\"><figure class=\"fig\" data-fig=\"lights\" data-rows=\"W|W|W|G . R\" data-view=\"vu de l’avant\"></figure><h4>Remorque de plus de 200 m</h4><p>Trois blancs superposés.</p></div>\n<div class=\"card\"><figure class=\"fig\" data-fig=\"lights\" data-rows=\"Y|W\" data-view=\"remorqueur vu de l’arrière\"></figure><h4>Vu de l’arrière</h4><p>Feu jaune de remorquage au-dessus du feu de poupe.</p></div>\n<div class=\"card\"><figure class=\"fig\" data-fig=\"shapes\" data-shapes=\"diamond\"></figure><h4>De jour, remorque de plus de 200 m</h4><p>Un losange (deux cônes opposés par la base) sur chacun des deux navires.</p></div>\n</div>\n<div class=\"card-grid\">\n<div class=\"card\"><figure class=\"fig\" data-fig=\"lights\" data-rows=\"W . . .|W . . .|R . . R\" data-view=\"vu par bâbord\"></figure><h4>Remorqueur de moins de 50 m et son remorqué vus par bâbord</h4><p>Deux blancs superposés et un rouge sur le remorqueur, un rouge isolé plus loin sur le remorqué.</p></div>\n<div class=\"card\"><figure class=\"fig\" data-fig=\"lights\" data-rows=\". . . W|. . . W|. . . W|G . . G\" data-view=\"vu par tribord\"></figure><h4>Remorqueur vu par tribord</h4><p>Trois feux blancs de tête de mât superposés (remorque de plus de 200 m) et un feu vert ; plus loin, le feu vert du remorqué.</p></div>\n<div class=\"card\"><figure class=\"fig\" data-fig=\"lights\" data-rows=\". . . . . W .|. . . . . . .|. . . . . W .|. . . . . W .|G . R . G . R\" data-view=\"à couple, vus de l’avant\"></figure><h4>Remorquage à couple vu de l’avant</h4><p>Remorqueur de 50 m ou plus (à droite) : 2 feux de tête de mât superposés + le feu de tête de mât arrière, plus haut (bien séparé) ; deux paires de feux de côté côte à côte : celle du navire remorqué à couple et celle du remorqueur.</p></div>\n</div>\n<div class=\"callout warn\"><strong>Ne jamais passer entre un remorqueur et son remorqué</strong><p>La remorque peut être très longue et immergée. Quand vous voyez des feux de remorquage, cherchez le remorqué et passez largement sur l’arrière de l’ensemble. Un remorquage qui empêche le remorqueur de changer de cap est un navire à capacité de manœuvre restreinte (voir le chapitre Navires particuliers).</p></div>\n<div class=\"mnemo\"><span class=\"mnemo-key\">2 ou 3</span><p>Les feux blancs superposés du remorqueur se comptent : <strong>2 = remorque courte</strong> (200 m ou moins), <strong>3 = remorque longue</strong> (plus de 200 m), et c’est aussi la remorque longue qui impose le <strong>losange</strong> de jour.</p></div>"
  },
  {
   "id": "mod2_sec2",
   "moduleId": "mod2",
   "number": "2.2",
   "title": "Les navires de pêche",
   "subtitle": "Chalutiers et autres navires de pêche, de jour et de nuit",
   "minutes": 12,
   "summary": "Un navire en action de pêche montre de jour deux cônes réunis par la pointe ; de nuit, vert sur blanc pour un chalutier, rouge sur blanc pour les autres navires de pêche, avec feux de côté et de poupe s’il fait route. Des signaux supplémentaires précisent ce que fait le chalutier.",
   "keyRules": [
    "De jour, tout navire en action de pêche : deux cônes réunis par la pointe (forme de sablier).",
    "Chalutier en pêche : vert au-dessus de blanc, visibles sur tout l’horizon.",
    "Autre navire de pêche (filets, palangres, senne…) : rouge au-dessus de blanc.",
    "Avec erre (en mouvement) : ajouter feux de côté et feu de poupe. Sans erre : ni feux de côté ni feu de poupe.",
    "Navire de pêche autre que chalutier dont l’engin s’étend à plus de 150 m : feu blanc (nuit) ou cône pointe en haut (jour) dans la direction de l’engin.",
    "Chalutiers proches les uns des autres : 2 blancs = filant (jetant) le chalut, blanc sur rouge = virant (hissant) le chalut, 2 rouges = chalut croché sur un obstacle.",
    "Un chalutier qui rentre au port sans pêcher est un simple navire à moteur : feu de tête de mât + feux de route.",
    "La traîne et la pêche à la canne (lignes qui ne gênent pas la manœuvre) ne font pas d’un bateau un « navire en action de pêche »."
   ],
   "html": "<p class=\"lead\">Un <strong>navire en action de pêche</strong> est un navire qui pêche avec des filets, lignes, chaluts ou autres engins qui <strong>réduisent sa capacité de manœuvre</strong>. Il est prioritaire sur les navires à moteur et sur les voiliers : il faut le reconnaître de loin, de jour comme de nuit.</p>\n\n<h3>De jour : deux cônes réunis par la pointe</h3>\n<div class=\"card-grid\">\n<div class=\"card\">\n<figure class=\"fig\" data-fig=\"shapes\" data-shapes=\"cone-down,cone-up\"></figure>\n<h4>Tout navire en action de pêche</h4>\n<p><strong>Deux cônes noirs superposés, réunis par la pointe</strong> (forme de sablier). Les navires de moins de 20 m peuvent les remplacer par un panier.</p>\n</div>\n<div class=\"card\">\n<figure class=\"fig\" data-fig=\"shapes\" data-shapes=\"cone-up\"></figure>\n<h4>Engin déployé à plus de 150 m</h4>\n<p>Navire de pêche autre que chalutier dont l’engin s’étend horizontalement à <strong>plus de 150 m</strong> : il ajoute <strong>un cône pointe en haut</strong> du côté de l’engin.</p>\n</div>\n</div>\n<div class=\"callout warn\"><strong>Ne pas confondre</strong><p>Deux cônes <strong>pointe contre pointe</strong> = pêche. Deux cônes <strong>base contre base</strong> = un losange (remorque de plus de 200 m, ou le losange central du navire à capacité de manœuvre restreinte). Un seul cône pointe en bas = voilier au moteur.</p></div>\n\n<h3>De nuit : chalutier ou autre navire de pêche</h3>\n<div class=\"mnemo\"><span class=\"mnemo-key\">Vert sur blanc</span><p>« <strong>Vert sur blanc, chalut traînant</strong> ; <strong>rouge sur blanc, pêche autrement</strong> ». Le chalutier montre vert au-dessus de blanc ; tous les autres pêcheurs rouge au-dessus de blanc.</p></div>\n<div class=\"card-grid\">\n<div class=\"card\">\n<figure class=\"fig\" data-fig=\"lights\" data-rows=\"G|W|G . R\" data-view=\"chalutier avec erre, vu de l’avant\"></figure>\n<h4>Chalutier en pêche</h4>\n<dl>\n<dt>Feux de pêche</dt><dd><strong>Vert au-dessus de blanc</strong>, visibles sur tout l’horizon</dd>\n<dt>50 m et plus</dt><dd>+ un feu de tête de mât, en arrière et plus haut que le feu vert (facultatif en dessous de 50 m)</dd>\n<dt>Avec erre</dt><dd>+ feux de côté + feu de poupe</dd>\n</dl>\n</div>\n<div class=\"card\">\n<figure class=\"fig\" data-fig=\"lights\" data-rows=\"R|W|G . R\" data-view=\"autre pêcheur avec erre, vu de l’avant\"></figure>\n<h4>Autre navire de pêche</h4>\n<dl>\n<dt>Feux de pêche</dt><dd><strong>Rouge au-dessus de blanc</strong>, visibles sur tout l’horizon</dd>\n<dt>Pas de feu de tête de mât</dt><dd>quelle que soit sa longueur</dd>\n<dt>Avec erre</dt><dd>+ feux de côté + feu de poupe</dd>\n<dt>Engin à plus de 150 m</dt><dd>+ un feu blanc visible sur tout l’horizon, plus bas, dans la direction de l’engin</dd>\n</dl>\n</div>\n</div>\n<div class=\"card-grid\">\n<div class=\"card\"><figure class=\"fig\" data-fig=\"lights\" data-rows=\"G|W\" data-view=\"sans erre, de tous côtés\"></figure><p>Chalutier en pêche <strong>sans erre</strong> : vert sur blanc, sans feux de côté ni feu de poupe.</p></div>\n<div class=\"card\"><figure class=\"fig\" data-fig=\"lights\" data-rows=\"R|W\" data-view=\"sans erre, de tous côtés\"></figure><p>Autre navire de pêche <strong>sans erre</strong> : rouge sur blanc seulement.</p></div>\n<div class=\"card\"><figure class=\"fig\" data-fig=\"lights\" data-rows=\"R .|W .|. W\" data-view=\"engin vers la droite de l’observateur\"></figure><p>Engin de pêche déployé à <strong>plus de 150 m</strong> : feu blanc supplémentaire du côté de l’engin. Ne passez pas de ce côté.</p></div>\n</div>\n<div class=\"callout warn\"><strong>Rouge sur blanc ou blanc sur rouge ?</strong><p><strong>Rouge au-dessus de blanc</strong> = navire de pêche (autre que chalutier). <strong>Blanc au-dessus de rouge</strong> = bateau pilote en service. Retenez « <strong>blanc sur rouge, pilote à bord</strong> ».</p></div>\n\n<h3>Les signaux supplémentaires des chalutiers</h3>\n<p>Quand des chalutiers pêchent <strong>près les uns des autres</strong>, ils indiquent en plus ce qu’ils font, avec des feux placés plus bas que les feux vert sur blanc (obligatoires à partir de 20 m, facultatifs en dessous).</p>\n<div class=\"card-grid\">\n<div class=\"card\"><figure class=\"fig\" data-fig=\"lights\" data-rows=\"G .|W .|. W|. W\" data-view=\"vu par le travers\"></figure><h4>En train de jeter (filer) son chalut</h4><p><strong>Deux feux blancs</strong> superposés.</p></div>\n<div class=\"card\"><figure class=\"fig\" data-fig=\"lights\" data-rows=\"G .|W .|. W|. R\" data-view=\"vu par le travers\"></figure><h4>En train de hisser (virer) son chalut</h4><p><strong>Blanc au-dessus de rouge</strong>.</p></div>\n<div class=\"card\"><figure class=\"fig\" data-fig=\"lights\" data-rows=\"G .|W .|. R|. R\" data-view=\"vu par le travers\"></figure><h4>Chalut retenu par un obstacle</h4><p><strong>Deux feux rouges</strong> superposés : chalutier arrêté, filets engagés (croché).</p></div>\n</div>\n<div class=\"mnemo\"><span class=\"mnemo-key\">Blanc = libre</span><p><strong>Blanc-blanc</strong> : le chalut part librement à l’eau. <strong>Blanc-rouge</strong> : il remonte, ça se complique. <strong>Rouge-rouge</strong> : bloqué, il ne peut plus bouger.</p></div>\n<h4>Pêche à couple (pêche « au bœuf »)</h4>\n<p>Deux chalutiers tirent ensemble un même chalut. De nuit, chacun montre ses feux de chalutier et dirige un <strong>projecteur vers l’avant, en direction de l’autre</strong> navire du couple. Ne passez jamais entre eux.</p>\n<figure class=\"fig\" data-fig=\"flag\" data-flag=\"T\"><figcaption>Pavillon T</figcaption></figure>\n<div class=\"callout tip\"><strong>De jour : le pavillon T</strong><p>Un chalutier pêchant en couple peut hisser le <strong>pavillon T</strong> du Code international des signaux : « Ne me gênez pas, je fais du chalutage jumelé ». Il est <strong>rouge-blanc-bleu</strong>, le rouge côté mât : ne le confondez pas avec le pavillon national, dont le bleu est côté mât.</p></div>\n\n<h3>Ce qui n’est pas un navire de pêche</h3>\n<ul>\n<li>Un chalutier qui <strong>rentre au port</strong> ou se rend sur zone sans pêcher : simple navire à moteur, il montre son <strong>feu blanc de tête de mât et ses feux de route</strong>, pas le vert sur blanc.</li>\n<li>Un bateau qui pêche à la <strong>traîne</strong> ou à la <strong>canne</strong> : ses lignes ne réduisent pas sa capacité de manœuvre, il reste un navire à moteur (ou à voile) ordinaire et n’a aucune priorité.</li>\n</ul>\n<div class=\"callout pf\"><strong>Polynésie française : bonitiers et poti marara</strong><p>Les <strong>poti marara</strong> et les bonitiers qui pêchent à la traîne ou à la canne restent des navires à moteur ordinaires au regard des règles de barre. En revanche, un navire qui travaille des filets, des palangres ou une senne est un navire en action de pêche, prioritaire : respectez ses feux et ses marques, et méfiez-vous des engins dérivant à la surface.</p></div>\n<div class=\"callout tip\"><strong>À l’examen</strong><p>« Un feu rouge sur un feu blanc en mer » : navire de pêche. « Vert sur blanc + feux vert et rouge vus de face » : chalutier avec erre vu de l’avant. « Deux feux rouges sous les feux de chalutier » : chalut retenu par un obstacle. « Deux cônes pointe contre pointe sur votre bâbord » : navire en action de pêche.</p></div>"
  },
  {
   "id": "mod2_sec3",
   "moduleId": "mod2",
   "number": "2.3",
   "title": "Les navires particuliers",
   "subtitle": "Non maître de sa manœuvre, capacité de manœuvre restreinte, tirant d’eau, pilote, échoué",
   "minutes": 16,
   "summary": "Les navires gênés dans leurs manœuvres montrent des feux rouges et blancs superposés et des boules noires : deux rouges/deux boules pour le non-maître de sa manœuvre, rouge-blanc-rouge/boule-losange-boule pour la capacité de manœuvre restreinte, trois rouges/un cylindre pour le tirant d’eau, deux rouges et feux de mouillage/trois boules pour l’échoué.",
   "keyRules": [
    "Non maître de sa manœuvre : 2 feux rouges superposés, de jour 2 boules noires.",
    "Capacité de manœuvre restreinte : rouge-blanc-rouge, de jour boule-losange-boule.",
    "Obstruction (drague…) : 2 rouges / 2 boules du côté obstrué ; 2 verts / 2 losanges du côté où l’on passe.",
    "Déminage : 3 feux verts (ou 3 boules) en triangle ; ne pas approcher à moins de 1 000 m.",
    "Handicapé par son tirant d’eau : 3 feux rouges superposés + feux de route ; de jour un cylindre.",
    "Échoué : 2 feux rouges + feu(x) de mouillage ; de jour 3 boules.",
    "Bateau pilote : blanc au-dessus de rouge, de jour pavillon H (blanc et rouge).",
    "Navire transbordant des matières dangereuses (au port) : pavillon rouge de jour, feu rouge la nuit."
   ],
   "html": "<p class=\"lead\">Certains navires ne peuvent pas manœuvrer normalement, à cause d’une avarie, de leur travail ou de leur tirant d’eau. Ils le signalent par des <strong>feux rouges et blancs superposés</strong> et des <strong>formes noires</strong>. Ce sont eux qui sont en tête de l’ordre de priorité.</p>\n\n<div class=\"callout tip\"><strong>La logique des couleurs</strong><p>Le <strong>rouge</strong> signale un navire qui ne peut pas manœuvrer ou une gêne (« attention, danger ») ; le <strong>blanc</strong> entre deux rouges indique qu’il travaille ; le <strong>vert</strong> montre le côté où l’on peut passer.</p></div>\n\n<h3>Navire non maître de sa manœuvre (NUC)</h3>\n<p>Navire qui, en raison de <strong>circonstances exceptionnelles</strong> (avarie de moteur ou de barre…), ne peut pas manœuvrer et donc s’écarter de la route des autres.</p>\n<div class=\"card-grid\">\n<div class=\"card\"><figure class=\"fig\" data-fig=\"shapes\" data-shapes=\"ball,ball\"></figure><h4>De jour</h4><p><strong>Deux boules noires</strong> superposées.</p></div>\n<div class=\"card\"><figure class=\"fig\" data-fig=\"lights\" data-rows=\"R|R\" data-view=\"sans erre\"></figure><h4>De nuit, sans erre</h4><p><strong>Deux feux rouges</strong> superposés visibles sur tout l’horizon, sans feu de tête de mât.</p></div>\n<div class=\"card\"><figure class=\"fig\" data-fig=\"lights\" data-rows=\"R|R|G . R\" data-view=\"avec erre, vu de l’avant\"></figure><h4>Avec erre</h4><p>+ feux de côté et feu de poupe (jamais de feu de tête de mât).</p></div>\n<div class=\"card\"><figure class=\"fig\" data-fig=\"lights\" data-rows=\"R .|R .|. W\" data-view=\"avec erre, vu de l’arrière\"></figure><h4>Avec erre, vu de l’arrière</h4><p>Deux rouges et le feu de poupe.</p></div>\n</div>\n<div class=\"mnemo\"><span class=\"mnemo-key\">Rouge sur rouge</span><p>« <strong>Rouge sur rouge, rien ne bouge</strong> » : le navire ne peut plus manœuvrer. Deux rouges = deux boules.</p></div>\n\n<h3>Navire à capacité de manœuvre restreinte (RAM)</h3>\n<p>Navire dont le <strong>travail</strong> limite la capacité de manœuvre : pose de câbles ou de bouées, dragage, travaux sous-marins, plongée, ravitaillement en route, remorquage empêchant de changer de cap…</p>\n<div class=\"card-grid\">\n<div class=\"card\"><figure class=\"fig\" data-fig=\"shapes\" data-shapes=\"ball,diamond,ball\"></figure><h4>De jour</h4><p><strong>Boule – losange (bicône) – boule</strong> superposés.</p></div>\n<div class=\"card\"><figure class=\"fig\" data-fig=\"lights\" data-rows=\"R|W|R\" data-view=\"sans erre\"></figure><h4>De nuit</h4><p><strong>Rouge – blanc – rouge</strong> superposés, visibles sur tout l’horizon.</p></div>\n<div class=\"card\"><figure class=\"fig\" data-fig=\"lights\" data-rows=\"W|R|W|R|G . R\" data-view=\"avec erre, vu de l’avant\"></figure><h4>Avec erre</h4><p>+ feu(x) de tête de mât + feux de côté + poupe. Au mouillage : + feux de mouillage (sauf dragage, travaux sous-marins et plongée : leurs feux remplacent alors le feu de mouillage).</p></div>\n</div>\n<div class=\"card-grid\">\n<div class=\"card\"><figure class=\"fig\" data-fig=\"lights\" data-rows=\"W . . .|. . R .|. . W .|. . R .|. . . W|. G . .\" data-view=\"plus de 50 m, avec erre, vu par tribord\"></figure><p>Plus de 50 m, avec erre, vu par <strong>tribord</strong> : deux feux de tête de mât (l’arrière plus haut, à gauche), rouge-blanc-rouge, feu vert.</p></div>\n<div class=\"card\"><figure class=\"fig\" data-fig=\"lights\" data-rows=\". . . W|. R . .|. W . .|. R . .|W . . .|. . R .\" data-view=\"plus de 50 m, avec erre, vu par bâbord\"></figure><p>Plus de 50 m, avec erre, vu par <strong>bâbord</strong> : feux de tête de mât, rouge-blanc-rouge, feu rouge.</p></div>\n</div>\n<div class=\"mnemo\"><span class=\"mnemo-key\">RWR = BLB</span><p><strong>R</strong>ouge-<strong>B</strong>lanc-<strong>R</strong>ouge la nuit = <strong>B</strong>oule-<strong>L</strong>osange-<strong>B</strong>oule le jour. Le rouge devient boule, le blanc devient losange.</p></div>\n\n<h4>Avec obstruction (drague, travaux)</h4>\n<p>Si une obstruction existe d’un côté, le navire l’indique en plus de rouge-blanc-rouge (ou boule-losange-boule) :</p>\n<table class=\"data-table\">\n<thead><tr><th></th><th>Côté de l’obstruction</th><th>Côté où l’on peut passer</th></tr></thead>\n<tbody>\n<tr><td>De nuit</td><td><strong>2 feux rouges</strong> superposés</td><td><strong>2 feux verts</strong> superposés</td></tr>\n<tr><td>De jour</td><td><strong>2 boules</strong> superposées</td><td><strong>2 losanges</strong> superposés</td></tr>\n</tbody>\n</table>\n<div class=\"card-grid\">\n<div class=\"card\"><figure class=\"fig\" data-fig=\"lights\" data-rows=\". R .|. W .|. R .|R . G|R . G\" data-view=\"sans erre, vu de l’avant\"></figure><h4>Obstruction à gauche de l’observateur</h4><p>Passez <strong>du côté des deux feux verts</strong>.</p></div>\n<div class=\"card\"><figure class=\"fig\" data-fig=\"shapes\" data-shapes=\"ball,ball\"></figure><h4>Côté obstrué</h4><p>Deux boules.</p></div>\n<div class=\"card\"><figure class=\"fig\" data-fig=\"shapes\" data-shapes=\"diamond,diamond\"></figure><h4>Côté libre</h4><p>Deux losanges.</p></div>\n</div>\n<div class=\"mnemo\"><span class=\"mnemo-key\">Vert = voie libre</span><p>Comme un feu tricolore : on passe au <strong>vert</strong> (ou du côté des <strong>losanges</strong>), jamais du côté des rouges (ou des boules). Exception : les 3 feux verts en triangle du déminage signalent un danger, on ne s’en approche pas.</p></div>\n\n<h4>Remorquage rendant difficile le changement de cap</h4>\n<p>Le remorqueur montre ses feux de remorquage <strong>plus</strong> rouge-blanc-rouge ; de jour, <strong>boule-losange-boule</strong> (et le losange de remorque si elle dépasse 200 m). Ces marques indiquent une <strong>difficulté de changement de cap</strong>.</p>\n\n<h4>Navire en opération de déminage</h4>\n<div class=\"card-grid\">\n<div class=\"card\"><h4>De jour</h4><p><strong>Trois boules</strong> noires disposées en triangle : une en tête de mât, une à chaque extrémité de la vergue.</p></div>\n<div class=\"card\"><figure class=\"fig\" data-fig=\"lights\" data-rows=\". G .|G W G|G . R\" data-view=\"avec erre, vu de l’avant\"></figure><h4>De nuit</h4><p><strong>Trois feux verts</strong> disposés de la même façon, en plus des feux de route. Danger à moins de <strong>1 000 m</strong> : ne pas s’approcher.</p></div>\n</div>\n\n<h4>Navire de plongée</h4>\n<p>Un navire qui soutient des plongeurs est un navire à capacité de manœuvre restreinte : de nuit rouge-blanc-rouge, même au mouillage (à la place du feu de mouillage) ; de jour, une réplique rigide du <strong>pavillon A</strong> (blanc et bleu) d’au moins 1 m de haut. Passez à plus de 100 m (voir le chapitre Loisirs nautiques).</p>\n<figure class=\"fig\" data-fig=\"flag\" data-flag=\"A\"><figcaption>Pavillon A : plongeurs en immersion</figcaption></figure>\n\n<h3>Navire handicapé par son tirant d’eau</h3>\n<p>Grand navire à moteur qui, en raison de son <strong>tirant d’eau</strong> et de la profondeur disponible, ne peut pas s’écarter de sa route (dans un chenal, par exemple).</p>\n<div class=\"card-grid\">\n<div class=\"card\"><figure class=\"fig\" data-fig=\"shapes\" data-shapes=\"cylinder\"></figure><h4>De jour</h4><p><strong>Un cylindre</strong> noir.</p></div>\n<div class=\"card\"><figure class=\"fig\" data-fig=\"lights\" data-rows=\". R . W|. R . .|. R . .|. . G .\" data-view=\"vu par tribord\"></figure><h4>De nuit</h4><p><strong>Trois feux rouges</strong> superposés <strong>en plus de ses feux de route</strong> (tête de mât, côtés, poupe).</p></div>\n<div class=\"card\"><figure class=\"fig\" data-fig=\"lights\" data-rows=\"R|R|R|W\" data-view=\"avec erre, vu de l’arrière\"></figure><h4>Vu de l’arrière</h4><p>Trois rouges et le feu de poupe : dans un chenal, ce sont ces quatre feux que vous voyez en le suivant.</p></div>\n</div>\n<div class=\"mnemo\"><span class=\"mnemo-key\">3 rouges = cylindre</span><p>Le cylindre évoque la <strong>coque profonde</strong> du navire. Trois rouges + feux de route = tirant d’eau ; deux rouges sans feu de tête de mât = non maître de sa manœuvre.</p></div>\n\n<h3>Navire échoué</h3>\n<div class=\"card-grid\">\n<div class=\"card\"><figure class=\"fig\" data-fig=\"shapes\" data-shapes=\"ball,ball,ball\"></figure><h4>De jour</h4><p><strong>Trois boules</strong> noires superposées.</p></div>\n<div class=\"card\"><figure class=\"fig\" data-fig=\"lights\" data-rows=\"W .|. R|. R\" data-view=\"moins de 50 m\"></figure><h4>De nuit, moins de 50 m</h4><p><strong>Feu de mouillage</strong> + <strong>deux feux rouges</strong> superposés.</p></div>\n<div class=\"card\"><figure class=\"fig\" data-fig=\"lights\" data-rows=\"W . .|. R .|. R .|. . W\" data-view=\"plus de 50 m, vu par le travers\"></figure><h4>De nuit, 50 m et plus</h4><p>Deux feux de mouillage (l’avant plus haut) + deux rouges.</p></div>\n</div>\n<div class=\"mnemo\"><span class=\"mnemo-key\">Mouillé + NUC</span><p>Échoué = <strong>feux de mouillage + deux rouges</strong> du navire qui ne peut plus bouger. De jour, une boule de plus que le NUC : <strong>1 boule</strong> = mouillé, <strong>2 boules</strong> = non maître de sa manœuvre, <strong>3 boules alignées</strong> = échoué (3 boules en triangle = déminage).</p></div>\n\n<h3>Bateau pilote</h3>\n<div class=\"card-grid\">\n<div class=\"card\"><h4>De jour</h4><p><strong>Pavillon H</strong>, blanc et rouge partagé verticalement : « j’ai un pilote à bord ».</p></div>\n<div class=\"card\"><figure class=\"fig\" data-fig=\"lights\" data-rows=\"W|R|G . R\" data-view=\"en service, avec erre, vu de l’avant\"></figure><h4>De nuit, en service</h4><p><strong>Blanc au-dessus de rouge</strong> en tête de mât ; avec erre + feux de côté et de poupe ; au mouillage + feu(x) de mouillage.</p></div>\n<div class=\"card\"><figure class=\"fig\" data-fig=\"lights\" data-rows=\". W|. R|R .\" data-view=\"avec erre, vu par bâbord\"></figure><h4>Vu par bâbord</h4><p>Blanc sur rouge et le feu de côté rouge.</p></div>\n</div>\n<div class=\"mnemo\"><span class=\"mnemo-key\">Blanc sur rouge</span><p>« <strong>Blanc sur rouge, pilote à bord</strong> » ; « <strong>rouge sur blanc</strong>, pêcheur ». Le pavillon H a les mêmes couleurs : blanc et rouge.</p></div>\n\n<h3>Navire transbordant des matières dangereuses</h3>\n<p>Au port ou en rade, un navire qui charge, décharge ou transborde des <strong>matières dangereuses</strong> (carburant, explosifs…) hisse de jour un <strong>pavillon rouge</strong> (pavillon B) et montre de nuit un <strong>feu rouge</strong> visible sur tout l’horizon. On s’en tient éloigné et on ne fume pas à proximité.</p>\n\n<h3>Tableau récapitulatif</h3>\n<table class=\"data-table\">\n<thead><tr><th>Navire</th><th>De jour</th><th>De nuit (feux spéciaux)</th></tr></thead>\n<tbody>\n<tr><td>Au mouillage</td><td>1 boule</td><td>1 blanc (2 si 50 m et plus)</td></tr>\n<tr><td>Voilier au moteur</td><td>1 cône pointe en bas</td><td>Feux d’un navire à moteur</td></tr>\n<tr><td>En action de pêche</td><td>2 cônes pointe contre pointe</td><td>Vert/blanc (chalut) ou rouge/blanc (autre)</td></tr>\n<tr><td>Remorque de plus de 200 m</td><td>1 losange</td><td>3 blancs superposés + jaune de remorquage</td></tr>\n<tr><td>Non maître de sa manœuvre</td><td>2 boules</td><td>2 rouges</td></tr>\n<tr><td>Capacité de manœuvre restreinte</td><td>Boule-losange-boule</td><td>Rouge-blanc-rouge</td></tr>\n<tr><td>Obstruction</td><td>2 boules (obstrué) / 2 losanges (libre)</td><td>2 rouges (obstrué) / 2 verts (libre)</td></tr>\n<tr><td>Déminage</td><td>3 boules en triangle</td><td>3 verts en triangle</td></tr>\n<tr><td>Handicapé par son tirant d’eau</td><td>1 cylindre</td><td>3 rouges + feux de route</td></tr>\n<tr><td>Échoué</td><td>3 boules alignées</td><td>2 rouges + feu(x) de mouillage</td></tr>\n<tr><td>Pilote en service</td><td>Pavillon H</td><td>Blanc sur rouge</td></tr>\n<tr><td>Matières dangereuses (port)</td><td>Pavillon rouge</td><td>Feu rouge</td></tr>\n</tbody>\n</table>\n<div class=\"callout warn\"><strong>Petits navires</strong><p>Les navires de moins de 12 m ne sont pas tenus de montrer les feux et marques de navire non maître de sa manœuvre, à capacité de manœuvre restreinte (sauf en opération de plongée) ou échoué. Mais si vous les voyez sur un petit bateau, même près des rochers, ils gardent leur sens : deux boules = non maître de sa manœuvre.</p></div>\n<div class=\"callout pf\"><strong>Polynésie française</strong><p>Aux abords de Papeete et des passes, vous croiserez des navires à fort tirant d’eau, des remorqueurs, des dragues et le bateau pilote. Dans les passes et chenaux étroits, ils ne peuvent pas s’écarter : laissez-leur la route, tôt et franchement.</p></div>"
  },
  {
   "id": "mod3_sec1",
   "moduleId": "mod3",
   "number": "3.1",
   "title": "Les signaux sonores",
   "subtitle": "Signaux de manœuvre, d’avertissement et par visibilité réduite",
   "minutes": 12,
   "summary": "Un navire annonce ses manœuvres, ses intentions de dépassement et ses doutes au sifflet ; par visibilité réduite, chaque type de navire émet un signal propre toutes les 2 minutes au plus.",
   "keyRules": [
    "Son bref ≈ 1 seconde, son prolongé = 4 à 6 secondes.",
    "1 bref = je viens sur tribord, 2 brefs = je viens sur bâbord, 3 brefs = je bats en arrière.",
    "5 brefs au moins = j’ai des doutes sur vos intentions (ou dépassement impossible).",
    "Dépassement en chenal : 2 longs + 1 bref = par tribord, 2 longs + 2 brefs = par bâbord ; réponse d’accord : long-bref-long-bref.",
    "Brume : 1 long toutes les 2 min = navire à moteur avec erre ; 2 longs = stoppé sans erre ; 1 long + 2 brefs = voilier, pêche, remorqueur, non maître de sa manœuvre, capacité restreinte, tirant d’eau.",
    "Dans la brume : réduire sa vitesse, veille renforcée, feux allumés et signaux sonores réguliers.",
    "Le navire rattrapé conserve son cap et sa vitesse ; en chenal, s’il a répondu « d’accord », il manœuvre pour faciliter le dépassement ; et un petit bateau ne doit jamais gêner un navire qui ne peut naviguer que dans le chenal."
   ],
   "html": "<p class=\"lead\">Quand deux navires se voient, les navires à moteur annoncent leurs manœuvres au sifflet. Quand ils ne se voient plus (brume, grain, pluie forte), chacun signale sa présence et sa nature par un signal répété. Il y a trois familles à connaître : les signaux de manœuvre, les signaux d’avertissement et les signaux par visibilité réduite.</p>\n\n<h3>Le code : brefs et prolongés</h3>\n<div class=\"card-grid\">\n  <div class=\"card\">\n    <figure class=\"fig\" data-fig=\"sound\" data-pattern=\".\"><figcaption>Son bref</figcaption></figure>\n    <h4>Son bref</h4>\n    <p>Durée d’environ <strong>1 seconde</strong>. Noté « • ».</p>\n  </div>\n  <div class=\"card\">\n    <figure class=\"fig\" data-fig=\"sound\" data-pattern=\"-\"><figcaption>Son prolongé</figcaption></figure>\n    <h4>Son prolongé</h4>\n    <p>Durée de <strong>4 à 6 secondes</strong>. Noté « — ».</p>\n  </div>\n</div>\n<p>Les signaux sont émis au sifflet, à la corne ou à tout appareil sonore du bord. Un navire de moins de 12 m n’est pas tenu d’avoir un sifflet et une cloche, mais doit disposer d’un autre moyen d’émettre un signal sonore efficace (corne de brume, par exemple).</p>\n\n<h3>1. Les signaux de manœuvre (navires en vue)</h3>\n<p>Ils annoncent une manœuvre <strong>en cours d’exécution</strong> à un navire qui vous voit.</p>\n<div class=\"card-grid\">\n  <div class=\"card\">\n    <figure class=\"fig\" data-fig=\"sound\" data-pattern=\".\"><figcaption>1 son bref</figcaption></figure>\n    <h4>Je viens sur tribord</h4>\n    <p>Je viens à droite.</p>\n  </div>\n  <div class=\"card\">\n    <figure class=\"fig\" data-fig=\"sound\" data-pattern=\"..\"><figcaption>2 sons brefs</figcaption></figure>\n    <h4>Je viens sur bâbord</h4>\n    <p>Je viens à gauche.</p>\n  </div>\n  <div class=\"card\">\n    <figure class=\"fig\" data-fig=\"sound\" data-pattern=\"...\"><figcaption>3 sons brefs</figcaption></figure>\n    <h4>Je bats en arrière</h4>\n    <p>Ma machine est en marche arrière (ce n’est pas « je stoppe »).</p>\n  </div>\n</div>\n<div class=\"mnemo\"><span class=\"mnemo-key\">1-2-3</span><p>Dans l’ordre : <strong>1 = droite</strong> (tribord), <strong>2 = gauche</strong> (bâbord), <strong>3 = arrière</strong>. Plus il y a de coups, plus on « recule » dans la liste.</p></div>\n\n<h3>2. Les signaux d’avertissement</h3>\n<h4>Dépassement dans un chenal étroit ou une voie d’accès</h4>\n<p>Dans un chenal, le navire qui veut en dépasser un autre doit <strong>demander</strong> : le dépassement n’est possible que si le navire rattrapé manœuvre pour le permettre.</p>\n<table class=\"data-table\">\n  <thead><tr><th>Qui</th><th>Signal</th><th>Signification</th></tr></thead>\n  <tbody>\n    <tr><td>Rattrapant</td><td>— — • (2 longs, 1 bref)</td><td>Je compte vous rattraper <strong>sur tribord</strong></td></tr>\n    <tr><td>Rattrapant</td><td>— — • • (2 longs, 2 brefs)</td><td>Je compte vous rattraper <strong>sur bâbord</strong></td></tr>\n    <tr><td>Rattrapé</td><td>— • — • (long, bref, long, bref)</td><td><strong>D’accord</strong> : je manœuvre pour faciliter le dépassement</td></tr>\n    <tr><td>Rattrapé</td><td>• • • • • (5 brefs au moins)</td><td><strong>Dépassement impossible</strong> / j’ai des doutes</td></tr>\n  </tbody>\n</table>\n<div class=\"card-grid\">\n  <div class=\"card\">\n    <figure class=\"fig\" data-fig=\"sound\" data-pattern=\"--.\"><figcaption>Rattrapant : par tribord</figcaption></figure>\n    <h4>Je vous dépasse par tribord</h4>\n    <p>Le dernier bref = 1 = tribord, comme pour les signaux de manœuvre.</p>\n  </div>\n  <div class=\"card\">\n    <figure class=\"fig\" data-fig=\"sound\" data-pattern=\"--..\"><figcaption>Rattrapant : par bâbord</figcaption></figure>\n    <h4>Je vous dépasse par bâbord</h4>\n    <p>Les 2 brefs finaux = 2 = bâbord.</p>\n  </div>\n  <div class=\"card\">\n    <figure class=\"fig\" data-fig=\"sound\" data-pattern=\"-.-.\"><figcaption>Rattrapé : d’accord</figcaption></figure>\n    <h4>D’accord</h4>\n    <p>En Morse, « — • — • » est la lettre C (« Correct »).</p>\n  </div>\n</div>\n<div class=\"mnemo\"><span class=\"mnemo-key\">— — puis 1 ou 2</span><p>Les deux sons longs disent « attention, je dépasse » ; le nombre de brefs qui suit reprend le code de manœuvre : <strong>1 bref = tribord, 2 brefs = bâbord</strong>.</p></div>\n\n<h4>Doute ou désaccord</h4>\n<div class=\"card-grid\">\n  <div class=\"card\">\n    <figure class=\"fig\" data-fig=\"sound\" data-pattern=\".....\"><figcaption>5 sons brefs au moins</figcaption></figure>\n    <h4>J’ai des doutes sur vos intentions</h4>\n    <p>Émis par un navire qui ne comprend pas la manœuvre de l’autre ou qui juge qu’il ne manœuvre pas assez. Sert aussi de réponse « dépassement impossible ». Peut être complété par 5 éclats lumineux brefs.</p>\n  </div>\n  <div class=\"card\">\n    <figure class=\"fig\" data-fig=\"sound\" data-pattern=\"-\"><figcaption>1 son prolongé</figcaption></figure>\n    <h4>Coude ou obstacle masquant</h4>\n    <p>À l’approche d’un coude d’un chenal où l’on ne voit pas ce qui arrive, on émet un son prolongé ; un navire caché y répond par un son prolongé.</p>\n  </div>\n</div>\n<div class=\"callout tip\"><strong>Le privilégié reste privilégié</strong><p>Si une moto de mer vous coupe la route par bâbord (vous êtes privilégié) et ne semble pas manœuvrer, la bonne réaction est d’émettre <strong>au moins 5 sons brefs</strong>, sans abandonner votre cap tant que ce n’est pas nécessaire pour éviter la collision.</p></div>\n\n<h3>3. Les signaux par visibilité réduite</h3>\n<p>De jour comme de nuit, dans ou près d’une zone de visibilité réduite (brume, brouillard, grain, forte pluie), chaque navire émet son signal <strong>à intervalles de 2 minutes au plus</strong>.</p>\n<table class=\"data-table\">\n  <thead><tr><th>Signal (toutes les 2 min max)</th><th>Navire</th></tr></thead>\n  <tbody>\n    <tr><td>— (1 long)</td><td>Navire à propulsion mécanique <strong>faisant route avec de l’erre</strong></td></tr>\n    <tr><td>— — (2 longs)</td><td>Navire à propulsion mécanique faisant route mais <strong>stoppé, sans erre</strong></td></tr>\n    <tr><td>— • • (1 long, 2 brefs)</td><td>Non maître de sa manœuvre, capacité de manœuvre restreinte, handicapé par son tirant d’eau, <strong>voilier</strong>, navire <strong>en train de pêcher</strong>, navire <strong>remorqueur</strong> (ou qui pousse)</td></tr>\n    <tr><td>— • • • (1 long, 3 brefs)</td><td>Navire <strong>remorqué</strong> (s’il a un équipage), juste après le signal du remorqueur</td></tr>\n    <tr><td>Cloche pendant environ 5 s, chaque minute</td><td>Navire <strong>au mouillage</strong> (en plus, gong à l’arrière s’il fait 100 m ou plus)</td></tr>\n    <tr><td>3 coups de cloche + cloche rapide + 3 coups de cloche</td><td>Navire <strong>échoué</strong></td></tr>\n  </tbody>\n</table>\n<div class=\"card-grid\">\n  <div class=\"card\">\n    <figure class=\"fig\" data-fig=\"sound\" data-pattern=\"-\"><figcaption>Toutes les 2 minutes</figcaption></figure>\n    <h4>Moteur, avec erre</h4>\n    <p>« J’avance. »</p>\n  </div>\n  <div class=\"card\">\n    <figure class=\"fig\" data-fig=\"sound\" data-pattern=\"--\"><figcaption>Toutes les 2 minutes</figcaption></figure>\n    <h4>Moteur, stoppé sans erre</h4>\n    <p>« Je suis arrêté sur l’eau. »</p>\n  </div>\n  <div class=\"card\">\n    <figure class=\"fig\" data-fig=\"sound\" data-pattern=\"-..\"><figcaption>Toutes les 2 minutes</figcaption></figure>\n    <h4>Voilier, pêche, remorqueur…</h4>\n    <p>NUC, capacité restreinte, tirant d’eau, voilier, pêche, remorqueur.</p>\n  </div>\n  <div class=\"card\">\n    <figure class=\"fig\" data-fig=\"sound\" data-pattern=\"-...\"><figcaption>Juste après le remorqueur</figcaption></figure>\n    <h4>Navire remorqué</h4>\n    <p>Un bref de plus que le remorqueur.</p>\n  </div>\n</div>\n<div class=\"mnemo\"><span class=\"mnemo-key\">1 long = je bouge</span><p><strong>1 long</strong> : j’avance. <strong>2 longs</strong> : je suis arrêté (deux pieds plantés). <strong>Long + 2 brefs</strong> : « je suis gêné, écartez-vous » (tous ceux qui manœuvrent mal).</p></div>\n\n<h4>Que faire quand on entre dans la brume ?</h4>\n<ul class=\"checklist\">\n  <li><strong>Réduire sa vitesse</strong> (vitesse de sécurité adaptée à la visibilité) — ne jamais accélérer.</li>\n  <li>Allumer ses feux de navigation.</li>\n  <li>Renforcer la veille (vue et ouïe), couper ce qui fait du bruit à bord.</li>\n  <li>Émettre son signal à intervalles réguliers (2 minutes au plus).</li>\n  <li>Si l’on entend un signal qui semble venir de l’avant du travers, réduire sa vitesse au minimum pour gouverner, voire stopper, jusqu’à ce que le risque soit écarté.</li>\n</ul>\n<div class=\"callout warn\"><strong>Pièges classiques</strong><p>Entendre <strong>2 sons longs toutes les 2 minutes</strong> = navire à moteur <strong>stoppé sans erre</strong> (pas un navire qui vient sur bâbord). <strong>1 son long toutes les 2 minutes</strong> = navire à moteur <strong>avec erre</strong> (pas un navire au mouillage, qui sonne la cloche). Face à ces signaux : continuer sa route à faible vitesse en se signalant régulièrement ; si le signal paraît venir de l’avant du travers, réduire au minimum pour gouverner, voire stopper (règle 19).</p></div>\n\n<h3>Rappel : le navire rattrapé</h3>\n<p>Au large, le navire <strong>rattrapé conserve son cap et sa vitesse</strong> : c’est au rattrapant de manœuvrer. En chenal, le rattrapé qui a répondu « d’accord » (long-bref-long-bref) manœuvre pour faciliter le dépassement.</p>"
  },
  {
   "id": "mod3_sec2",
   "moduleId": "mod3",
   "number": "3.2",
   "title": "Les signaux régissants",
   "subtitle": "Signaux de trafic portuaire et signaux météo",
   "minutes": 10,
   "summary": "À l’entrée des ports, un mât de 3 feux superposés indique si l’on peut passer ; un feu jaune ajouté à gauche autorise les navires capables de naviguer hors du chenal. Les sémaphores affichent aussi des signaux météo (marques de jour, feux de nuit).",
   "keyRules": [
    "3 feux rouges à éclats = danger grave : port fermé, on s’arrête et on n’entre pas.",
    "3 feux rouges fixes ou à occultations lentes = passage interdit : attendre.",
    "3 feux verts = passage autorisé, circulation à sens unique (dans l’autre sens, les navires voient en principe 3 rouges).",
    "Vert, vert, blanc = circulation dans les deux sens : passer avec prudence.",
    "Vert, blanc, vert = entrée réglementée : passer seulement après instructions.",
    "Feu jaune à gauche du feu du haut = exception pour les navires pouvant circuler en dehors du chenal.",
    "Feux fixes ou à occultations lentes = message normal ; feux à éclats = urgence."
   ],
   "html": "<p class=\"lead\">Les signaux régissant le trafic portuaire sont des feux (visibles de jour comme de nuit) placés à l’entrée des ports et des passes. Ils se lisent de haut en bas sur une colonne de <strong>3 feux</strong>. On distingue les <strong>signaux principaux</strong> et les <strong>signaux secondaires</strong> (feu jaune ajouté).</p>\n\n<h3>Comment les lire</h3>\n<ul>\n  <li><strong>Rouge</strong> = interdiction ; <strong>vert</strong> = autorisation ; <strong>blanc</strong> = nuance (double sens ou réglementation) ; <strong>jaune</strong> = exception hors chenal.</li>\n  <li>Feux <strong>fixes ou à occultations lentes</strong> : message normal.</li>\n  <li>Feux <strong>à éclats</strong> : message d’<strong>urgence</strong> (danger grave).</li>\n</ul>\n\n<h3>Les signaux principaux</h3>\n<div class=\"card-grid\">\n  <div class=\"card\">\n    <figure class=\"fig\" data-fig=\"port\" data-lights=\"RRR\" data-flash=\"1\"><figcaption>3 rouges à éclats</figcaption></figure>\n    <h4>Danger grave : port fermé</h4>\n    <p>Tous les mouvements sont interdits (incendie, pollution, accident…). <strong>Je m’arrête et je ne rentre pas</strong>, même hors du chenal.</p>\n  </div>\n  <div class=\"card\">\n    <figure class=\"fig\" data-fig=\"port\" data-lights=\"RRR\"><figcaption>3 rouges fixes ou à occultations lentes</figcaption></figure>\n    <h4>Passage interdit</h4>\n    <p>Les navires doivent <strong>attendre</strong>, par exemple parce que la circulation est ouverte dans l’autre sens (c’est ce que voit alors un navire qui veut passer en sens inverse).</p>\n  </div>\n  <div class=\"card\">\n    <figure class=\"fig\" data-fig=\"port\" data-lights=\"GGG\"><figcaption>3 verts</figcaption></figure>\n    <h4>Passage autorisé, sens unique</h4>\n    <p>Vous pouvez passer ; la passe est à vous seul. Au même instant, un navire qui veut passer dans l’autre sens voit <strong>3 feux rouges</strong>.</p>\n  </div>\n  <div class=\"card\">\n    <figure class=\"fig\" data-fig=\"port\" data-lights=\"GGW\"><figcaption>Vert, vert, blanc</figcaption></figure>\n    <h4>Circulation dans les deux sens</h4>\n    <p>Passage autorisé <strong>avec prudence</strong> : on peut croiser des navires dans la passe.</p>\n  </div>\n  <div class=\"card\">\n    <figure class=\"fig\" data-fig=\"port\" data-lights=\"GWG\"><figcaption>Vert, blanc, vert</figcaption></figure>\n    <h4>Entrée réglementée</h4>\n    <p>On ne passe qu’<strong>après avoir reçu des instructions</strong> spéciales (capitainerie, VHF).</p>\n  </div>\n</div>\n<div class=\"mnemo\"><span class=\"mnemo-key\">Le blanc</span><p>Le feu blanc « tempère » le vert. <strong>En bas</strong> (vert-vert-blanc) : on passe, mais on n’est pas seul, prudence. <strong>Au milieu</strong> (vert-blanc-vert) : le blanc « coupe » le passage, il faut une autorisation.</p></div>\n<div class=\"callout tip\"><strong>Sens unique : deux points de vue</strong><p>Les feux sont montrés dans les deux sens de circulation. Si le navire qui entre voit 3 feux verts, celui qui sort voit en même temps 3 feux rouges. À l’inverse, avec vert-vert-blanc, celui qui entre peut <strong>rencontrer des navires sortants</strong> dans la passe.</p></div>\n<div class=\"photo-pair\">\n  <figure class=\"photo\"><img src=\"assets/c/sens-unique-navire-a.webp\" width=\"720\" height=\"451\" loading=\"lazy\" alt=\"Le navire A arrive du large et voit trois feux verts sur la jetée ; le navire B est dans le port.\"><figcaption>Le navire A, qui entre, voit 3 feux verts : il passe.</figcaption></figure>\n  <figure class=\"photo\"><img src=\"assets/c/sens-unique-navire-b.webp\" width=\"720\" height=\"451\" loading=\"lazy\" alt=\"Le navire B, dans le port, voit trois feux rouges ; le navire A arrive du large.\"><figcaption>Au même instant, le navire B, qui sort, voit 3 feux rouges : il attend.</figcaption></figure>\n</div>\n\n<h3>Les signaux secondaires : le feu jaune</h3>\n<p>Un <strong>feu jaune</strong> placé <strong>à gauche du feu supérieur</strong> du signal principal crée une exception : le passage est autorisé aux <strong>navires pouvant circuler en dehors du chenal principal</strong> (petites unités de plaisance, pêche côtière, pneumatiques…). Les gros navires obligés de suivre le chenal restent soumis au signal principal.</p>\n<table class=\"data-table\">\n  <thead><tr><th>Signal</th><th>Gros navire (car-ferry, cargo)</th><th>Petit navire pouvant sortir du chenal</th></tr></thead>\n  <tbody>\n    <tr><td>Jaune + 3 rouges</td><td><strong>Ne passe pas</strong> (passage interdit)</td><td>Peut passer, <strong>en dehors du chenal</strong></td></tr>\n    <tr><td>Jaune + vert, blanc, vert</td><td>Passe seulement après instructions</td><td>Peut passer, <strong>en dehors du chenal</strong></td></tr>\n  </tbody>\n</table>\n<div class=\"callout warn\"><strong>À ne pas confondre</strong><p>Le feu jaune ne vaut que pour la navigation <strong>hors du chenal</strong> : on ne suit pas le chenal et on n’y mouille jamais. Et il n’annule pas les <strong>3 feux rouges à éclats</strong> (port fermé). Avec le feu jaune, un petit bateau pouvant naviguer hors du chenal passe sans autorisation particulière ; en cas de doute, la capitainerie répond à la VHF.</p></div>\n\n<h3>Les signaux météo</h3>\n<p>Les sémaphores et capitaineries peuvent afficher l’annonce d’un vent fort : de jour par des <strong>marques noires</strong> (boule, cônes, croix), de nuit par <strong>2 ou 3 feux</strong> superposés.</p>\n<table class=\"data-table\">\n  <thead><tr><th>Vent (Beaufort)</th><th>Marque de jour</th><th>Feux de nuit (haut → bas)</th><th>Signification</th></tr></thead>\n  <tbody>\n    <tr><td>Force 7</td><td>1 boule</td><td>Blanc sur vert</td><td>Grand frais, toutes directions</td></tr>\n    <tr><td>Force 8 à 11</td><td>2 cônes pointes en bas</td><td>Blanc sur rouge</td><td>Coup de vent débutant dans le quadrant <strong>sud-est</strong></td></tr>\n    <tr><td>Force 8 à 11</td><td>2 cônes pointes en haut</td><td>Rouge sur blanc</td><td>Coup de vent débutant dans le quadrant <strong>nord-est</strong></td></tr>\n    <tr><td>Force 8 à 11</td><td>1 cône pointe en haut</td><td>Rouge sur rouge</td><td>Coup de vent débutant dans le quadrant <strong>nord-ouest</strong></td></tr>\n    <tr><td>Force 8 à 11</td><td>1 cône pointe en bas</td><td>Blanc sur blanc</td><td>Coup de vent débutant dans le quadrant <strong>sud-ouest</strong></td></tr>\n    <tr><td>Force 12</td><td>1 croix</td><td>Rouge, vert, rouge</td><td>Ouragan, toutes directions</td></tr>\n  </tbody>\n</table>\n<div class=\"callout pf\"><strong>En Polynésie française</strong><p>Ces signaux de sémaphore sont devenus rares : la météo marine se consulte auprès de Météo-France (Polynésie française) et à la VHF. Retenez-les pour l’examen.</p></div>\n<div class=\"card-grid\">\n  <div class=\"card\"><figure class=\"fig\" data-fig=\"shapes\" data-shapes=\"ball\"><figcaption>Force 7</figcaption></figure><h4>Grand frais</h4><p>Toutes directions.</p></div>\n  <div class=\"card\"><figure class=\"fig\" data-fig=\"shapes\" data-shapes=\"cone-up\"><figcaption>Nord-ouest</figcaption></figure><h4>1 cône pointe en haut</h4><p>Coup de vent du NW.</p></div>\n  <div class=\"card\"><figure class=\"fig\" data-fig=\"shapes\" data-shapes=\"cone-up,cone-up\"><figcaption>Nord-est</figcaption></figure><h4>2 cônes pointes en haut</h4><p>Coup de vent du NE.</p></div>\n  <div class=\"card\"><figure class=\"fig\" data-fig=\"shapes\" data-shapes=\"cone-down\"><figcaption>Sud-ouest</figcaption></figure><h4>1 cône pointe en bas</h4><p>Coup de vent du SW.</p></div>\n  <div class=\"card\"><figure class=\"fig\" data-fig=\"shapes\" data-shapes=\"cone-down,cone-down\"><figcaption>Sud-est</figcaption></figure><h4>2 cônes pointes en bas</h4><p>Coup de vent du SE.</p></div>\n</div>\n<div class=\"mnemo\"><span class=\"mnemo-key\">Haut = Nord, 2 = Est</span><p>Pointe(s) <strong>en haut = Nord</strong>, pointe(s) <strong>en bas = Sud</strong>. <strong>2 cônes = Est</strong>, <strong>1 cône = Ouest</strong>. Imaginez une croix : les cônes du haut sont au nord, ceux de droite (doublés) à l’est.</p></div>"
  },
  {
   "id": "mod3_sec3",
   "moduleId": "mod3",
   "number": "3.3",
   "title": "Les règles de barre et de route",
   "subtitle": "Risque d’abordage, rencontres, dépassement, hiérarchie, chenal et vitesse",
   "minutes": 15,
   "summary": "Le risque d’abordage existe dès que le relèvement ou le gisement d’un navire qui se rapproche ne change pas. Les règles disent qui s’écarte : routes opposées, routes croisées, dépassement, hiérarchie des privilèges et chenaux étroits.",
   "keyRules": [
    "Risque d’abordage : relèvement (ou gisement) constant et distance qui diminue. Dans le doute, considérer qu’il y a risque.",
    "Routes opposées : chacun vient sur tribord et l’on se croise bâbord sur bâbord.",
    "Routes croisées : priorité à tribord ; celui qui voit l’autre sur sa droite s’écarte et passe derrière lui. De nuit : je vois du rouge, je manœuvre.",
    "Le rattrapant s’écarte toujours ; au large, le rattrapé conserve cap et vitesse (même un voilier qui rattrape un bateau à moteur doit s’écarter). En chenal étroit, un petit bateau rattrapé par un navire qui ne peut naviguer que dans le chenal dégage sur sa droite.",
    "Hiérarchie : non maître de sa manœuvre = capacité restreinte > (tirant d’eau à ne pas gêner) > pêche > voilier > moteur.",
    "Moto de mer et voilier au moteur = navires à moteur ; planche à voile et kite = voiliers.",
    "Chenal étroit : serrer sur sa droite et ne pas gêner les navires qui ne peuvent naviguer que dans le chenal.",
    "Vitesse : 5 nœuds dans la bande des 300 m et dans les chenaux d’accès ; 3 ou 5 nœuds dans les ports."
   ],
   "html": "<p class=\"lead\">Les règles de barre et de route (RIPAM) déterminent, quand deux navires risquent de se rencontrer, lequel doit s’écarter (le <strong>non privilégié</strong>) et lequel garde sa route (le <strong>privilégié</strong>). Elles s’appliquent à tous, du cargo au jet-ski.</p>\n\n<h3>1. Détecter le risque d’abordage</h3>\n<p>Il y a <strong>risque d’abordage</strong> si un navire se rapproche et que :</p>\n<ul>\n  <li>son <strong>relèvement compas ne change pas</strong> (angle entre le nord et la direction dans laquelle on voit l’autre navire) ;</li>\n  <li>ou son <strong>gisement ne change pas</strong> (angle entre l’axe de votre bateau et la direction de l’autre navire), si vous gardez votre cap.</li>\n</ul>\n<div class=\"callout tip\"><strong>Exemples d’examen</strong><p>Relèvements successifs de 140°, 150°, 140° à 5 minutes d’intervalle : le relèvement ne change pas de façon nette et sûre, <strong>il y a danger</strong>. De même pour 320°, 310°, 320°. En cas de doute, la règle impose de <strong>considérer que le risque existe</strong>. Un gisement constant d’un navire qui se rapproche signifie risque d’abordage (pas des routes divergentes).</p></div>\n<div class=\"callout warn\"><strong>De nuit</strong><p>Si vous voyez à la fois le feu rouge et le feu vert d’un navire, il vient droit sur vous : il y a risque d’abordage. Un feu isolé à relèvement constant impose aussi de réagir.</p></div>\n\n<h4>Comment manœuvrer</h4>\n<ul class=\"checklist\">\n  <li><strong>Tôt</strong> : en temps utile, sans attendre la dernière seconde.</li>\n  <li><strong>Franchement</strong> : un changement de cap ou de vitesse assez grand pour être <strong>vu</strong> par l’autre (pas une succession de petites corrections).</li>\n  <li><strong>Sans couper la route devant</strong> le navire privilégié : on passe sur son arrière.</li>\n  <li>Si nécessaire, <strong>ralentir, stopper ou battre en arrière</strong>.</li>\n  <li>Le privilégié <strong>garde cap et vitesse</strong> ; il peut signaler ses doutes (5 sons brefs au moins), et doit manœuvrer lui-même si l’abordage ne peut plus être évité par la seule manœuvre de l’autre.</li>\n</ul>\n\n<h3>2. Rencontre de deux navires à moteur</h3>\n<div class=\"card-grid\">\n  <div class=\"card\">\n    <figure class=\"fig\" data-fig=\"encounter\" data-case=\"head-on\"><figcaption>Routes opposées</figcaption></figure>\n    <h4>Routes directement opposées</h4>\n    <p><strong>Chacun vient sur tribord</strong> (à droite) et les navires se croisent <strong>bâbord sur bâbord</strong>. « On roule à droite. » De nuit, on voit les deux feux de côté (et les feux de tête de mât alignés).</p>\n  </div>\n  <div class=\"card\">\n    <figure class=\"fig\" data-fig=\"encounter\" data-case=\"crossing\"><figcaption>Routes croisées</figcaption></figure>\n    <h4>Routes croisées : priorité à tribord</h4>\n    <p>Le navire qui voit l’autre <strong>sur son tribord</strong> (à sa droite) <strong>s’écarte</strong> et passe sur l’arrière de l’autre. Celui qui voit l’autre sur bâbord est privilégié : il conserve cap et vitesse.</p>\n  </div>\n</div>\n<div class=\"mnemo\"><span class=\"mnemo-key\">Rouge = je cède</span><p>Entre deux navires à moteur, de nuit, le navire non privilégié voit le <strong>feu rouge (bâbord)</strong> du privilégié. <strong>Rouge = je ne suis pas privilégié</strong> (comme un feu rouge : je m’arrête). <strong>Vert = je suis privilégié</strong> (la voie est libre, mais je reste vigilant). Attention : un feu vert seul, sans feu de tête de mât, est celui d’un voilier, et c’est au bateau à moteur de s’écarter.</p></div>\n\n<h3>3. Navire rattrapant un autre</h3>\n<div class=\"card-grid\">\n  <div class=\"card\">\n    <figure class=\"fig\" data-fig=\"encounter\" data-case=\"overtaking\"><figcaption>Dépassement</figcaption></figure>\n    <h4>Le rattrapant manœuvre</h4>\n    <p>Est rattrapant celui qui arrive par l’arrière, à plus de 22,5° sur l’arrière du travers de l’autre (de nuit, il ne voit que son feu de poupe blanc). <strong>Le rattrapé conserve son cap et sa vitesse.</strong></p>\n  </div>\n</div>\n<ul>\n  <li>La règle s’applique <strong>quel que soit le type de navire</strong> : un voilier qui rattrape votre bateau à moteur doit s’écarter ; vous conservez votre route et votre vitesse.</li>\n  <li>Un navire qui ne sait pas avec certitude s’il est rattrapant doit <strong>se considérer comme rattrapant</strong> et s’écarter.</li>\n  <li>Le rattrapant reste non privilégié jusqu’à ce qu’il soit complètement paré et clair de l’autre.</li>\n</ul>\n\n<h3>4. La hiérarchie des privilèges</h3>\n<p>Quand les navires ne sont pas tous à moteur, la règle des « priorités » s’applique, du plus privilégié au moins privilégié. Chacun doit s’écarter de ceux qui sont <strong>au-dessus</strong> de lui. Le RIPAM ne fixe pas d’ordre entre le navire non maître de sa manœuvre et le navire à capacité de manœuvre restreinte : tous deux sont au sommet.</p>\n<table class=\"data-table\">\n  <thead><tr><th>Rang</th><th>Navire</th><th>De jour</th><th>De nuit (en plus des feux de route le cas échéant)</th></tr></thead>\n  <tbody>\n    <tr><td>1</td><td><strong>Non maître de sa manœuvre</strong> (avarie de barre, de moteur)</td><td>2 boules</td><td>2 feux rouges superposés (+ feux de côté et de poupe s’il a de l’erre, jamais de feu de tête de mât)</td></tr>\n    <tr><td>1</td><td><strong>Capacité de manœuvre restreinte</strong> (dragage, travaux, câbles, plongée…)</td><td>Boule, losange, boule</td><td>Rouge, blanc, rouge</td></tr>\n    <tr><td>1 bis</td><td><strong>Handicapé par son tirant d’eau</strong> : les navires de pêche, voiliers et navires à moteur doivent <strong>éviter de le gêner</strong></td><td>1 cylindre</td><td>3 feux rouges superposés</td></tr>\n    <tr><td>2</td><td><strong>En action de pêche</strong> (engins qui réduisent sa manœuvrabilité)</td><td>2 cônes pointes réunies</td><td>Vert sur blanc (chalutier) ou rouge sur blanc (autre pêche)</td></tr>\n    <tr><td>3</td><td><strong>Voilier</strong> naviguant à la voile seule (planche à voile, kitesurf compris)</td><td>Rien (s’il marche aussi au moteur, il hisse un cône pointe en bas et devient un navire à moteur, rang 4)</td><td>Feux de côté et de poupe (sous 20 m, ils peuvent être remplacés par un fanal tricolore en tête de mât). Avec les feux de côté et de poupe, il peut ajouter rouge sur vert en tête de mât, jamais avec le fanal tricolore</td></tr>\n    <tr><td>4</td><td><strong>Navire à moteur</strong> non compris ci-dessus : tous les bateaux de plaisance à moteur, motos de mer</td><td>Rien</td><td>Feux de route (au minimum un feu blanc pour une petite embarcation)</td></tr>\n  </tbody>\n</table>\n<div class=\"card-grid\">\n  <div class=\"card\"><figure class=\"fig\" data-fig=\"shapes\" data-shapes=\"ball,ball\"><figcaption>1</figcaption></figure><h4>Non maître</h4><p>Au sommet, avec la capacité restreinte.</p></div>\n  <div class=\"card\"><figure class=\"fig\" data-fig=\"shapes\" data-shapes=\"ball,diamond,ball\"><figcaption>1</figcaption></figure><h4>Capacité restreinte</h4><p>Ne peut pas s’écarter.</p></div>\n  <div class=\"card\"><figure class=\"fig\" data-fig=\"shapes\" data-shapes=\"cylinder\"><figcaption>1 bis</figcaption></figure><h4>Tirant d’eau</h4><p>Ne pas le gêner.</p></div>\n  <div class=\"card\"><figure class=\"fig\" data-fig=\"shapes\" data-shapes=\"cone-down,cone-up\"><figcaption>2</figcaption></figure><h4>Pêche</h4><p>Privilégié sur le voilier et le moteur, pas sur les navires de rang 1.</p></div>\n</div>\n<div class=\"mnemo\"><span class=\"mnemo-key\">Plus il est gêné, plus il est privilégié</span><p>Classez les navires selon leur capacité à manœuvrer : <strong>le navire le plus libre de ses mouvements cède la route</strong>. Le bateau à moteur de plaisance, très manœuvrant, est en bas de l’échelle.</p></div>\n<div class=\"callout warn\"><strong>Bien classer les engins</strong><p>Une <strong>moto de mer (VNM)</strong> et un <strong>voilier qui avance au moteur</strong> sont des <strong>navires à moteur</strong>. Une <strong>planche à voile</strong> ou un <strong>kite</strong> sont des <strong>voiliers</strong>. Donc : moto de mer contre voilier = la moto de mer manœuvre. Bateau à moteur avec une planche à voile en route de collision (même sur bâbord) = <strong>je manœuvre</strong>. Navire à moteur et voilier en routes opposées = le bateau à moteur manœuvre.</p></div>\n<div class=\"callout tip\"><strong>Exception : le dépassement</strong><p>La règle du rattrapant passe avant la hiérarchie : un voilier qui rattrape un bateau à moteur doit s’écarter, le bateau à moteur garde sa route.</p></div>\n\n<h3>5. Chenaux étroits et dépassement</h3>\n<figure class=\"fig\" data-fig=\"encounter\" data-case=\"channel\"><figcaption>Dans un chenal étroit, chacun serre sur sa droite</figcaption></figure>\n<ul>\n  <li>Naviguer <strong>le plus près possible du bord du chenal situé sur tribord</strong> (serrer à droite).</li>\n  <li>Les navires qui <strong>ne peuvent circuler qu’à l’intérieur du chenal</strong> (gros navires) sont prioritaires : un petit navire, un voilier ou un pêcheur ne doit pas les gêner.</li>\n  <li>Ne pas traverser le chenal si l’on gêne un navire qui ne peut naviguer qu’à l’intérieur ; ne jamais mouiller dans un chenal.</li>\n  <li>Si un gros navire vous rattrape dans le chenal d’accès d’un port de commerce : <strong>dégagez vers la droite du chenal</strong> (ne comptez pas sur la règle du rattrapant).</li>\n  <li>Si un navire est engagé dans le chenal et que vous arrivez de côté : laissez-le passer (manœuvrez pour passer sur son arrière plutôt que de lui couper la route).</li>\n  <li>Le dépassement s’annonce au sifflet (voir les signaux sonores : 2 longs + 1 ou 2 brefs ; accord : long-bref-long-bref ; refus ou doute : 5 brefs au moins). Un son prolongé s’émet à l’approche d’un coude masqué.</li>\n</ul>\n\n<h3>6. Limitation de vitesse</h3>\n<table class=\"data-table\">\n  <thead><tr><th>Zone</th><th>Vitesse maximale</th></tr></thead>\n  <tbody>\n    <tr><td>Au large</td><td>Pas de limitation (sauf réglementation locale)</td></tr>\n    <tr><td>Bande des 300 m à partir du rivage</td><td><strong>5 nœuds</strong></td></tr>\n    <tr><td>Chenaux d’accès aux ports</td><td><strong>5 nœuds</strong></td></tr>\n    <tr><td>Dans les ports</td><td><strong>3 ou 5 nœuds</strong> (clairement indiqué)</td></tr>\n  </tbody>\n</table>\n<div class=\"formula\">1 nœud (kt) <span class=\"op\">=</span> 1 mille par heure <span class=\"op\">=</span> 1,852 km/h &nbsp;·&nbsp; 1 mille marin <span class=\"op\">=</span> 1 852 m</div>\n<div class=\"callout pf\"><strong>En Polynésie française</strong><p>La vitesse est limitée à <strong>5 nœuds dans la bande des 300 m</strong> à partir du rivage. Dans les lagons, de nombreux chenaux balisés et zones de baignade imposent aussi une allure réduite : respectez les panneaux locaux.</p></div>\n<p>Dans tous les cas, adoptez une <strong>vitesse de sécurité</strong> : celle qui permet d’agir efficacement pour éviter un abordage et de s’arrêter sur une distance adaptée (visibilité, densité du trafic, état de la mer, manœuvrabilité du bateau). La <strong>veille</strong> (visuelle et auditive) est obligatoire <strong>en permanence</strong>.</p>"
  },
  {
   "id": "mod4_sec1",
   "moduleId": "mod4",
   "number": "4.1",
   "title": "Signaux de détresse et sauvetage",
   "subtitle": "Signaux sonores et visuels, MAYDAY sur le canal 16, JRCC Tahiti",
   "minutes": 10,
   "summary": "Un navire en détresse le fait savoir par un son continu, un MAYDAY sur le canal 16 et des signaux visuels (feux à main rouges, fumigène orange, fusée à parachute, pavillons N sur C, SOS lumineux, mouvements des bras). En Polynésie, l’alerte est reçue par le JRCC Tahiti.",
   "keyRules": [
    "Son continu (sirène, corne, sifflet) = détresse, de jour comme de nuit.",
    "MAYDAY répété 3 fois sur le canal 16 de la VHF, puis identité, position, nature de la détresse.",
    "Feu automatique à main = lueur rouge tenue à la main ; fumigène = fumée orange ; fusée à parachute = lueur rouge qui descend lentement.",
    "Pavillon N au-dessus du pavillon C ; SOS lumineux (• • • — — — • • •) ; bras tendus levés et abaissés lentement.",
    "En Polynésie : alerter le JRCC Tahiti (VHF 16 ou téléphone 16). En métropole : le CROSS.",
    "Le JRCC ou le CROSS coordonne les opérations de sauvetage et en prend la direction.",
    "Porter secours est obligatoire si cela ne met pas en péril votre bateau et ses occupants."
   ],
   "html": "<p class=\"lead\">Un navire est <strong>en détresse</strong> quand lui-même ou une personne à bord est sous la menace d’un danger grave et imminent (voie d’eau, incendie, blessé grave, chavirage…). Il doit alors alerter et se faire repérer. Ces signaux ne s’utilisent <strong>que</strong> dans ce cas.</p>\n\n<h3>Les signaux sonores et radio</h3>\n<div class=\"card-grid\">\n  <div class=\"card\">\n    <h4>Son continu</h4>\n    <p>Un son prolongé ininterrompu, émis par n’importe quel appareil (sirène, corne de brume, sifflet, cloche), <strong>de jour comme de nuit</strong>.</p>\n  </div>\n  <div class=\"card\">\n    <h4>MAYDAY sur le canal 16</h4>\n    <p>« <strong>MAYDAY</strong> » prononcé 3 fois (« MAYDAY, MAYDAY, MAYDAY ») sur le <strong>canal 16</strong> de la VHF (canal de veille et de détresse), suivi de la position du navire et de ses avaries.</p>\n  </div>\n</div>\n<h4>Le message de détresse à la VHF</h4>\n<ol class=\"steps\">\n  <li>Si la VHF est équipée de l’<strong>ASN</strong> (bouton DISTRESS), déclencher l’alerte ASN, puis passer le message à la voix.</li>\n  <li>Sélectionner le <strong>canal 16</strong>, puissance maximale.</li>\n  <li>« MAYDAY, MAYDAY, MAYDAY, ici [nom du bateau] ×3. »</li>\n  <li>« MAYDAY [nom du bateau] » puis la <strong>position</strong> (coordonnées, ou relèvement et distance d’un point connu).</li>\n  <li>La <strong>nature de la détresse</strong> et l’aide demandée.</li>\n  <li>Le <strong>nombre de personnes</strong> à bord et toute information utile (description du bateau, blessés).</li>\n  <li>« À vous », puis rester à l’écoute du canal 16.</li>\n</ol>\n\n<h3>Les signaux visuels</h3>\n<div class=\"card-grid\">\n  <div class=\"card\">\n    <h4>Feu automatique à main</h4>\n    <p>Engin pyrotechnique <strong>tenu à la main</strong> qui produit une <strong>lueur rouge</strong> vive. Efficace de jour comme de nuit, surtout pour se faire repérer à courte distance.</p>\n  </div>\n  <div class=\"card\">\n    <h4>Fumigène orange</h4>\n    <p>Fumée <strong>orange</strong>, en surface ou sur le pont. Signal <strong>de jour</strong>, très visible des avions et hélicoptères.</p>\n  </div>\n  <div class=\"card\">\n    <h4>Fusée à parachute</h4>\n    <p>Projetée en altitude, elle montre une <strong>lueur rouge qui descend lentement</strong> sous son parachute ; visible de loin, surtout de nuit. Les fusées à étoiles rouges ont le même sens.</p>\n  </div>\n  <div class=\"card\">\n    <figure class=\"fig\" data-fig=\"flag\" data-flag=\"NC\"><figcaption>N au-dessus de C</figcaption></figure>\n    <h4>Signal NC</h4>\n    <p>Pavillon <strong>N</strong> (damier bleu et blanc) <strong>au-dessus</strong> du pavillon <strong>C</strong> (bandes bleu, blanc, rouge, blanc, bleu) du code international.</p>\n  </div>\n  <div class=\"card\">\n    <h4>Signal lumineux SOS</h4>\n    <p>• • • — — — • • • en Morse avec une lampe, un projecteur (de jour comme de nuit) ou un <strong>miroir</strong> de signalisation (de jour, au soleil).</p>\n  </div>\n  <div class=\"card\">\n    <h4>Signal avec les bras</h4>\n    <p><strong>Bras tendus</strong> de chaque côté du corps, levés et abaissés <strong>lentement et de façon répétée</strong>. Ne pas confondre avec un salut amical d’un seul bras.</p>\n  </div>\n</div>\n<div class=\"card-grid\">\n  <div class=\"card\"><figure class=\"fig\" data-fig=\"flag\" data-flag=\"N\"><figcaption>Pavillon N</figcaption></figure><h4>N</h4><p>Damier bleu et blanc (« Non »).</p></div>\n  <div class=\"card\"><figure class=\"fig\" data-fig=\"flag\" data-flag=\"C\"><figcaption>Pavillon C</figcaption></figure><h4>C</h4><p>Bandes horizontales bleu, blanc, rouge, blanc, bleu (« Correct », « Oui »).</p></div>\n</div>\n<h4>Autres signaux de détresse reconnus</h4>\n<ul>\n  <li>Une <strong>boule noire</strong> au-dessus ou au-dessous d’un pavillon carré (de couleur quelconque).</li>\n  <li>Des <strong>flammes</strong> à bord (baril de goudron ou d’huile en feu).</li>\n  <li>Pour le repérage aérien : une <strong>toile orange</strong> portant un signe noir, ou un <strong>colorant</strong> répandu sur l’eau.</li>\n</ul>\n<div class=\"mnemo\"><span class=\"mnemo-key\">Rouge, orange, rouge</span><p><strong>Feu à main = rouge</strong> (dans la main), <strong>fumigène = orange</strong> (la fumée, de jour), <strong>fusée à parachute = rouge</strong> (dans le ciel, qui descend doucement).</p></div>\n<div class=\"callout tip\"><strong>Bien utiliser la pyrotechnie</strong><p>Ne la déclencher que lorsqu’un secours est susceptible de la voir (navire ou aéronef en vue, côte proche). Se placer du côté sous le vent du bateau, dos au vent, et tenir le feu à bout de bras vers l’extérieur ; respecter la date de péremption.</p></div>\n\n<h3>L’organisation du sauvetage</h3>\n<div class=\"callout pf\"><strong>JRCC Tahiti</strong><p>En Polynésie française, un navire en détresse alerte le <strong>JRCC Tahiti</strong> (Joint Rescue Coordination Centre), sur le <strong>canal 16 de la VHF</strong> ou par <strong>téléphone au 16</strong>. Le JRCC est l’équivalent polynésien du CROSS.</p></div>\n<ul>\n  <li>En France métropolitaine, il faut contacter le <strong>CROSS</strong> (Centre régional opérationnel de surveillance et de sauvetage).</li>\n  <li>Le <strong>CROSS ou le JRCC coordonne</strong> les opérations de sauvetage et en <strong>prend la direction</strong> : il engage les moyens (navires, hélicoptères, avions, navires proches).</li>\n  <li>Tout navire qui reçoit un appel de détresse doit <strong>porter secours</strong>, si cela ne met pas en péril son propre bateau et ses occupants, et se signaler au centre de coordination.</li>\n</ul>\n<div class=\"callout warn\"><strong>Avant de partir</strong><p>Prévenez toujours un proche (destination, heure de retour, nombre de personnes à bord) : c’est lui qui donnera l’alerte si vous ne rentrez pas.</p></div>"
  },
  {
   "id": "mod4_sec2",
   "moduleId": "mod4",
   "number": "4.2",
   "title": "Avant d’appareiller",
   "subtitle": "Préparation, matériel de sécurité, papiers, sauvetage, carburant et autonomie",
   "minutes": 15,
   "summary": "Avant de partir : météo, carburant, eau et vivres, téléphone, papiers et proche prévenu. Le matériel obligatoire dépend de la distance d’éloignement d’un abri (basique jusqu’à 2 milles, côtier jusqu’à 5 milles en Polynésie). Le carburant se calcule avec 30 % de marge.",
   "keyRules": [
    "Abri = endroit de la côte où le navire et son équipage peuvent se mettre en sécurité et repartir sans assistance, selon la météo et le navire.",
    "Basique (6e catégorie) : jusqu’à 2 milles d’un abri ; côtière (5e catégorie) : jusqu’à 5 milles ; hauturière : au-delà.",
    "Basique : gilet par personne, extincteur, seau ou écope, coupe-circuit, 3 feux à main, feux de navigation, mouillage, aviron ou pagaies, gaffe, filin de remorquage.",
    "Côtière en plus : bouée, engin flottant, pinoches, compas de route, lampe, corne, miroir, pavillons N et C, boîte de secours, annuaire des marées.",
    "Papiers : permis, titre de navigation (carte de circulation ou acte de francisation), CRR si VHF fixe, contrat de location.",
    "Carburant = distance ÷ vitesse × consommation, puis + 30 %.",
    "Autonomie (h) = (quantité − 30 %) ÷ consommation."
   ],
   "html": "<p class=\"lead\">Une sortie réussie se prépare à terre. Ce chapitre regroupe tout ce qu’il faut vérifier avant de larguer les amarres : la préparation, le matériel de sécurité, les papiers, l’organisation des secours et le calcul du carburant.</p>\n\n<h3>À la maison</h3>\n<ul class=\"checklist\">\n  <li>Étudier la <strong>météo</strong> (prévisions, vent, état de la mer) pour toute la durée de la sortie.</li>\n  <li><strong>Calculer le carburant</strong> nécessaire (avec la marge de 30 %).</li>\n  <li>Prendre de l’<strong>eau et des vivres</strong>.</li>\n  <li>Prendre un <strong>téléphone</strong>, batterie chargée.</li>\n  <li>Prendre les <strong>papiers du bateau</strong>.</li>\n  <li><strong>Prévenir un proche</strong> : destination, heure de retour et nombre de personnes à bord.</li>\n</ul>\n\n<h3>La notion d’abri</h3>\n<p>Un <strong>abri</strong> est un endroit de la côte où tout navire et son équipage peuvent se mettre en sécurité, en mouillant ou en accostant, <strong>et en repartir sans assistance</strong>. Cette notion tient compte de la <strong>météo du moment</strong> et des <strong>caractéristiques du navire</strong> : une baie abritée par alizé peut ne plus l’être par vent de sud. Le choix de l’abri relève de la responsabilité du chef de bord.</p>\n\n<h3>Le matériel de sécurité</h3>\n<p>En Polynésie française, le matériel à embarquer est fixé par la réglementation polynésienne, que la DPAM résume dans son dépliant « Équipements de sécurité des navires de plaisance ». Il dépend de la <strong>catégorie de navigation</strong>, c’est-à-dire de l’éloignement maximum d’un abri.</p>\n<table class=\"data-table\">\n  <thead><tr><th>Catégorie</th><th>Navigation autorisée</th><th>Dotation</th></tr></thead>\n  <tbody>\n    <tr><td><strong>6e catégorie</strong></td><td>Jusqu’à <strong>2 milles</strong> d’un abri</td><td>Basique</td></tr>\n    <tr><td><strong>5e catégorie</strong></td><td>Jusqu’à <strong>5 milles</strong> d’un abri</td><td>Côtière</td></tr>\n    <tr><td><strong>4e à 1re catégorie</strong></td><td><strong>Au-delà de 5 milles</strong> (20, 60, 200 milles, puis sans limite)</td><td>Hauturière (par exemple pour 12 milles)</td></tr>\n  </tbody>\n</table>\n<div class=\"callout pf\"><strong>Polynésie : 5 milles et la liste de la DPAM</strong><p>En Polynésie française, la navigation côtière (et le permis côtier) est limitée à <strong>5 milles d’un abri</strong>, contre 6 en métropole. Les listes de matériel diffèrent aussi : les livres métropolitains (« Division 240 ») mettent par exemple le pavillon national, une lampe ou le RIPAM dans la dotation basique. Pour l’examen en Polynésie, retenez <strong>5 milles</strong> et la liste de la DPAM ci-dessous.</p></div>\n\n<h4>Dotation basique : 6e catégorie (jusqu’à 2 milles d’un abri)</h4>\n<ul class=\"checklist\">\n  <li>Un <strong>gilet ou une brassière</strong> approuvé <strong>par personne</strong> à bord (type 100 ou plus), de taille adaptée.</li>\n  <li>Un <strong>extincteur</strong> approuvé : un ou plusieurs selon la longueur, l’habitabilité et le moteur in-bord (plus une installation fixe pour un moteur à essence de plus de 110 kW, soit 150 ch).</li>\n  <li>Un <strong>seau</strong> rigide de 7 litres muni d’un bout, ou une <strong>écope</strong>.</li>\n  <li>Un <strong>coupe-circuit</strong> relié au pilote, pour un moteur de plus de 4,5 kW (6 ch) à poste de conduite ouvert.</li>\n  <li><strong>3 feux rouges automatiques à main</strong>.</li>\n  <li>Les <strong>feux de navigation</strong> (homologués pour un navire de plus de 7 m).</li>\n  <li>Une <strong>ligne de mouillage</strong> (deux pour un navire de plus de 7 m).</li>\n  <li>Un <strong>aviron</strong> et son dispositif de nage, ou une <strong>paire de pagaies</strong> (navire de moins de 8 m).</li>\n  <li>Une <strong>gaffe</strong>.</li>\n  <li>Un <strong>filin de remorquage</strong>, adapté à la longueur et au poids du navire.</li>\n  <li>L’<strong>outillage et les rechanges</strong> du moteur.</li>\n</ul>\n<h4>Dotation côtière : 5e catégorie (jusqu’à 5 milles d’un abri) : la basique, plus</h4>\n<ul class=\"checklist\">\n  <li>Une <strong>bouée de sauvetage</strong> (pas forcément lumineuse).</li>\n  <li>Un <strong>engin flottant</strong> : caisson rigide muni d’une filière, auquel les naufragés s’accrochent dans l’eau (ce n’est pas un radeau de sauvetage). Dispense si le navire est classé flottable.</li>\n  <li>Des <strong>pinoches</strong> (chevilles en bois pour boucher une voie d’eau).</li>\n  <li>Un <strong>compas de route</strong>, exigé quelle que soit la taille du bateau, même de moins de 5 m ; un GPS ne le remplace pas.</li>\n  <li>Une <strong>lampe étanche</strong>.</li>\n  <li>Une <strong>corne de brume</strong>.</li>\n  <li>Un <strong>miroir de signalisation</strong>.</li>\n  <li>Les <strong>pavillons N et C</strong> (60 × 50 cm au minimum).</li>\n  <li>Une <strong>boîte de secours</strong>.</li>\n  <li>L’<strong>annuaire des marées</strong>.</li>\n</ul>\n<p>Le nombre de <strong>feux automatiques à main</strong> ne change pas : 3, comme en basique.</p>\n<div class=\"callout warn\"><strong>Pas exigés jusqu’à 5 milles</strong><p>Le <strong>pavillon national</strong> n’est exigé que de la 1re à la 4e catégorie, hors des eaux territoriales. La <strong>VHF fixe</strong>, la <strong>carte marine</strong> et le <strong>radeau de sauvetage</strong> ne s’imposent qu’au-delà de 5 milles d’un abri. Embarquer une carte de la zone reste une bonne idée.</p></div>\n<div class=\"mnemo\"><span class=\"mnemo-key\">Basique : flotter, éteindre, vider, couper, alerter, rentrer</span><p>La basique permet de <strong>flotter</strong> (gilets), <strong>éteindre</strong> (extincteur), <strong>vider</strong> (seau ou écope), <strong>couper</strong> le moteur (coupe-circuit), <strong>alerter</strong> (3 feux à main), <strong>être vu</strong> (feux de navigation) et <strong>rentrer sans moteur</strong> (mouillage, pagaies, gaffe, remorquage, outillage). En côtière, on ajoute de quoi <strong>se signaler</strong> (lampe, corne, miroir, N et C), <strong>sauver</strong> (bouée, engin flottant), <strong>colmater</strong> (pinoches), <strong>soigner</strong> (boîte de secours) et <strong>naviguer</strong> (compas, annuaire des marées).</p></div>\n<div class=\"callout tip\"><strong>Également utile à bord</strong><p>Au-delà du minimum réglementaire : VHF portable, téléphone dans une pochette étanche, carte de la zone, dispositif de remontée à bord, gonfleur pour un pneumatique. Quelle que soit la catégorie, le RIPAM impose de pouvoir émettre un signal sonore (corne, sifflet). Une liste de sécurité écrite évite les oublis (équipements, météo, numéros utiles, proche prévenu, essence).</p></div>\n\n<h3>Les pièces administratives</h3>\n<ul class=\"checklist\">\n  <li>Le <strong>permis côtier</strong> (permis de conduire les bateaux de plaisance à moteur).</li>\n  <li>Le <strong>titre de navigation</strong> : <strong>carte de circulation</strong> ou <strong>acte de francisation</strong> (la « carte grise » du bateau).</li>\n  <li>Le <strong>certificat restreint de radiotéléphoniste (CRR)</strong>, si le bateau a une VHF fixe.</li>\n  <li>Le <strong>contrat de location</strong>, pour un bateau loué.</li>\n</ul>\n<p>L’<strong>acte de vente</strong> du bateau n’a pas à être à bord.</p>\n\n<h3>L’organisation du sauvetage</h3>\n<div class=\"callout pf\"><strong>Qui appeler</strong><p>Un navire en détresse doit alerter le <strong>JRCC Tahiti</strong> sur le <strong>canal 16 de la VHF</strong> ou par <strong>téléphone au 16</strong>. En métropole, il faut contacter le <strong>CROSS</strong>. Le CROSS ou le JRCC <strong>coordonne</strong> les opérations de sauvetage et en <strong>prend la direction</strong>.</p></div>\n\n<h3>Carburant et autonomie</h3>\n<p>La consommation d’un bateau, mesurée en <strong>litres par heure</strong>, est très variable. Elle dépend :</p>\n<ul>\n  <li>des <strong>vents et des courants</strong> ;</li>\n  <li>de la <strong>vitesse</strong> du bateau ;</li>\n  <li>de la <strong>vétusté du moteur</strong>.</li>\n</ul>\n<p>On prend donc toujours une <strong>marge de sécurité de 30 %</strong>.</p>\n\n<h4>Quantité de carburant pour un parcours</h4>\n<div class=\"formula\">Carburant <span class=\"op\">=</span> (Distance <span class=\"op\">÷</span> Vitesse) <span class=\"op\">×</span> Consommation <span class=\"op\">+</span> 30 %</div>\n<p>Distance ÷ vitesse donne le <strong>temps de trajet</strong> en heures (milles ÷ nœuds = heures).</p>\n<div class=\"callout tip\"><strong>Exemple du cours</strong><p>On souhaite parcourir <strong>24 milles</strong> sur un bateau consommant <strong>10 l/h</strong> à <strong>8 nœuds</strong>.</p></div>\n<ol class=\"steps\">\n  <li>Temps : 24 ÷ 8 = <strong>3 heures</strong>.</li>\n  <li>Consommation : 3 × 10 = <strong>30 litres</strong>.</li>\n  <li>Marge : 30 % de 30 litres = <strong>9 litres</strong>.</li>\n  <li>Total : 30 + 9 = <strong>39 litres</strong>.</li>\n</ol>\n<table class=\"data-table\">\n  <thead><tr><th>Exemples d’examen</th><th>Calcul</th><th>Résultat</th></tr></thead>\n  <tbody>\n    <tr><td>18 milles, 9 nœuds, 10 l/h</td><td>18 ÷ 9 × 10 = 20 l ; + 6 l (30 %)</td><td><strong>26 litres</strong></td></tr>\n    <tr><td>60 milles, 12 nœuds, 10 l/h</td><td>60 ÷ 12 × 10 = 50 l ; + 15 l (30 %)</td><td><strong>65 litres</strong></td></tr>\n  </tbody>\n</table>\n<div class=\"mnemo\"><span class=\"mnemo-key\">× 1,3</span><p>Ajouter 30 %, c’est multiplier par <strong>1,3</strong> : 30 l × 1,3 = 39 l. Retirer 30 %, c’est multiplier par <strong>0,7</strong> : 50 l × 0,7 = 35 l.</p></div>\n\n<h4>Autonomie pour une quantité donnée</h4>\n<div class=\"formula\">Autonomie (heures) <span class=\"op\">=</span> (Quantité <span class=\"op\">−</span> 30 % de la quantité) <span class=\"op\">÷</span> Consommation</div>\n<div class=\"callout tip\"><strong>Exemple du cours</strong><p>Un bateau dispose de <strong>50 litres</strong> et consomme <strong>5 l/h</strong>.</p></div>\n<ol class=\"steps\">\n  <li>Carburant utilisable : 50 − 30 % de 50 = 50 − 15 = <strong>35 litres</strong>.</li>\n  <li>Autonomie : 35 ÷ 5 = <strong>7 heures</strong>.</li>\n</ol>\n<h4>Distance franchissable</h4>\n<div class=\"formula\">Distance <span class=\"op\">=</span> Autonomie (heures) <span class=\"op\">×</span> Vitesse (nœuds)</div>\n<p>Exemple : réservoir de <strong>130 litres</strong>, consommation <strong>10 l/h</strong>, vitesse <strong>12 nœuds</strong>.</p>\n<ul>\n  <li>Distance maximale théorique (tout le réservoir) : 130 ÷ 10 = 13 h ; 13 × 12 = <strong>156 milles</strong>. C’est la réponse attendue quand la question demande la « distance maximale » sans parler de marge.</li>\n  <li>Distance avec la marge de 30 % : (130 − 39) ÷ 10 = 9,1 h ; 9,1 × 12 ≈ <strong>109 milles</strong>. C’est la distance à retenir pour préparer une vraie sortie.</li>\n</ul>\n<div class=\"callout warn\"><strong>Lire la question</strong><p>Si l’énoncé mentionne une marge de 30 %, appliquez-la. S’il demande seulement une distance « maximale » avec un réservoir plein, calculez sans marge. En navigation réelle, gardez toujours la réserve.</p></div>"
  },
  {
   "id": "mod4_sec3",
   "moduleId": "mod4",
   "number": "4.3",
   "title": "Les loisirs nautiques",
   "subtitle": "Véhicules nautiques à moteur, ski nautique, plongée, planches à voile, mammifères marins",
   "minutes": 12,
   "summary": "Les VNM exigent le permis côtier, ne naviguent que de jour et restent à 2 milles du rivage au plus (1 mille pilote debout) ; le ski nautique impose un pilote et un surveillant et une flamme orange ; on passe à plus de 100 m d’un bateau de plongée ; planches et kites sont prioritaires mais limités à 2 milles d’un abri ; les baleines s’observent à distance, à 3 nœuds au plus.",
   "keyRules": [
    "VNM : permis côtier, de jour uniquement ; au plus 2 milles du rivage si le pilote est assis, 1 mille s’il est debout (arrêté n° 1097 CM).",
    "Ski nautique : 2 personnes à bord (pilote + surveillant), sauf titulaire du brevet d’État de moniteur de ski nautique.",
    "Bateau tracteur : flamme orange fluorescente de 2 m ; remonter la remorque dès que le skieur tombe.",
    "Plongée : pavillon A (ou pavillon rouge à diagonale blanche) ; naviguer à plus de 100 m ; de nuit, feux de capacité de manœuvre restreinte (rouge, blanc, rouge).",
    "Planches à voile et kites : prioritaires sur le bateau à moteur (sauf s’ils vous rattrapent), limités à 2 milles d’un abri.",
    "Bande des 300 m : 5 nœuds maximum.",
    "Baleines : 3 nœuds dans un rayon de 300 m, jamais devant ni derrière l’animal, ne pas les poursuivre ni les encercler."
   ],
   "html": "<p class=\"lead\">Les lagons et la côte polynésienne sont partagés entre baigneurs, plongeurs, skieurs, jet-skis, kitesurfeurs et baleines. Chaque activité a ses règles : connaître celles des autres permet de naviguer prudemment à côté d’eux.</p>\n\n<h3>Les véhicules nautiques à moteur (VNM)</h3>\n<p>Motos de mer, scooters des mers, jet-skis : ce sont des <strong>navires à moteur</strong> au regard des règles de barre et de route.</p>\n<ul class=\"checklist\">\n  <li>Requiert le <strong>permis côtier</strong> (au-delà de 6 CV / 4,5 kW).</li>\n  <li>Évolue <strong>uniquement de jour</strong> : jamais de nuit, en aucun cas (même avec des feux).</li>\n  <li>Ne s’éloigne pas à plus de <strong>2 milles du rivage</strong> si le pilote est <strong>assis</strong>, et <strong>1 mille du rivage</strong> si le pilote est <strong>debout</strong> (arrêté n° 1097 CM du 17 juillet 2009).</li>\n  <li>Pilote et passagers portent un <strong>équipement individuel de flottabilité</strong>.</li>\n  <li>À bord : <strong>2 feux automatiques à main</strong>, un <strong>dispositif de remorquage</strong> (anneau et bout d’environ 3 fois la longueur du VNM), un <strong>coupe-circuit</strong> relié au pilote.</li>\n  <li>Le VNM est <strong>immatriculé</strong> ; l’immatriculation doit être lisible à 30 m et le bruit est limité à 80 dB à 7,50 m.</li>\n</ul>\n<div class=\"callout pf\"><strong>VNM en Polynésie : 2 milles et 1 mille du rivage</strong><p>Certains supports de cours indiquent 6 milles d’un abri (pilote assis) et 2 milles (pilote debout) : ce sont des chiffres de la réglementation métropolitaine. En Polynésie française, l’arrêté n° 1097 CM du 17 juillet 2009 fixe la limite à <strong>2 milles du rivage</strong> pour un pilote assis et <strong>1 mille du rivage</strong> pour un pilote debout, de jour uniquement, avec un titre de conduite (permis côtier).</p></div>\n<div class=\"callout tip\"><strong>La bande des 300 m</strong><p>Vitesse limitée à <strong>5 nœuds</strong>. Pour rejoindre le large depuis la plage, emprunter le <strong>chenal traversier</strong> balisé ; s’il n’y en a pas, sortir <strong>perpendiculairement au rivage</strong>, à vitesse réduite. Des règles locales peuvent restreindre ou interdire les VNM.</p></div>\n\n<h3>Le ski nautique et les engins tractés</h3>\n<ul class=\"checklist\">\n  <li><strong>2 personnes à bord</strong> du bateau tracteur : <strong>un pilote</strong> et <strong>un surveillant</strong> qui regarde le skieur en permanence.</li>\n  <li>Exception : le pilote titulaire du <strong>brevet d’État de moniteur de ski nautique</strong> (ou d’engins tractés) peut être seul à bord. Le permis côtier ou hauturier ne suffit pas.</li>\n  <li>Le bateau tracteur arbore une <strong>flamme orange fluorescente de 2 m</strong>.</li>\n  <li>Chaque fois que la personne tractée tombe, il faut <strong>remonter la remorque tout de suite</strong> (pour qu’elle ne se prenne pas dans l’hélice), puis revenir doucement vers elle.</li>\n  <li>La personne tractée porte un <strong>gilet</strong> ; le bateau doit pouvoir embarquer toutes les personnes tractées.</li>\n  <li>Les autres bateaux ne se mettent pas dans le sillage d’un bateau qui tire un skieur et restent vigilants près de lui.</li>\n</ul>\n<figure class=\"fig\" data-fig=\"flag\" data-flag=\"ski\"><figcaption>Flamme orange du bateau tracteur</figcaption></figure>\n\n<h3>La plongée sous-marine</h3>\n<div class=\"card-grid\">\n  <div class=\"card\">\n    <figure class=\"fig\" data-fig=\"flag\" data-flag=\"A\"><figcaption>Pavillon A</figcaption></figure>\n    <h4>Pavillon A</h4>\n    <p>Blanc (côté mât) et bleu, en queue d’aronde : « J’ai des plongeurs en immersion ; tenez-vous à distance et passez lentement. »</p>\n  </div>\n  <div class=\"card\">\n    <figure class=\"fig\" data-fig=\"flag\" data-flag=\"diver-red\"><figcaption>Pavillon rouge à diagonale blanche</figcaption></figure>\n    <h4>Pavillon plongée rouge à diagonale blanche</h4>\n    <p>Fond <strong>rouge barré d’une diagonale blanche</strong>. Même signification : plongée sous-marine en cours.</p>\n  </div>\n  <div class=\"card\">\n    <figure class=\"fig\" data-fig=\"lights\" data-rows=\"R|W|R\" data-view=\"feux visibles sur tout l’horizon\"><figcaption>De nuit</figcaption></figure>\n    <h4>De nuit</h4>\n    <p>Le bateau de plongée montre les feux d’un <strong>navire à capacité de manœuvre restreinte</strong> : <strong>rouge, blanc, rouge</strong> superposés.</p>\n  </div>\n</div>\n<ul>\n  <li>Vous devez naviguer à <strong>plus de 100 m</strong> d’un bateau qui montre ce pavillon (zone de protection des plongeurs).</li>\n  <li>N’entrer dans la zone qu’avec une raison valable : <strong>ralentir fortement</strong>, surveiller les <strong>bulles</strong> (ne pas passer dessus), être prêt à passer au point mort ; mêmes précautions en sortant de la zone.</li>\n</ul>\n\n<h3>Planches à voile et kitesurf</h3>\n<ul>\n  <li>Ce sont des <strong>voiliers</strong> : ils sont <strong>prioritaires</strong> par rapport à votre bateau à moteur. Une planche en route de collision, même sur votre bâbord : <strong>c’est vous qui manœuvrez</strong>, sauf si c’est elle qui vous rattrape : le navire rattrapant s’écarte toujours.</li>\n  <li>Leur navigation est limitée à <strong>2 milles d’un abri</strong>.</li>\n</ul>\n\n<h3>Les mammifères marins</h3>\n<div class=\"callout pf\"><strong>Baleines à bosse en Polynésie</strong><p>Les baleines à bosse séjournent dans les eaux polynésiennes environ de <strong>juillet à novembre</strong> pour se reproduire et mettre bas. Une baleine pèse jusqu’à <strong>40 tonnes</strong> : elle peut représenter un danger pour votre sécurité. Les règles d’observation sont fixées par la réglementation polynésienne de l’environnement.</p></div>\n<ul class=\"checklist\">\n  <li><strong>Réduire la vitesse à 3 nœuds</strong> dans un rayon de <strong>300 m</strong> autour du cétacé (zone de prudence) ; y éviter les brusques changements de direction et de régime moteur.</li>\n  <li><strong>Zone interdite</strong> : pas de bateau <strong>devant ni derrière</strong> l’animal ; ne pas attendre sur sa route et <strong>ne pas poursuivre</strong> les baleines.</li>\n  <li>Rester sur le côté de l’animal, à la distance indiquée par la réglementation (bateaux à <strong>50 m</strong> sur le côté, <strong>100 m</strong> dans certaines situations). Les nageurs restent à 30 m et les avions au-dessus de 300 m.</li>\n  <li>Ne pas naviguer au milieu d’un groupe : se mettre sur le côté.</li>\n  <li><strong>Ne pas encercler</strong> les baleines.</li>\n  <li>Ne jamais se placer <strong>entre une mère et son petit</strong>.</li>\n  <li>Ne pas <strong>bloquer</strong> les baleines contre le récif.</li>\n  <li>Les sonars utilisés à d’autres fréquences que celles de la navigation sont interdits.</li>\n</ul>\n<div class=\"photo-pair\">\n  <figure class=\"photo\"><img src=\"assets/c/baleines-groupe.webp\" width=\"720\" height=\"340\" loading=\"lazy\" alt=\"À gauche, un bateau barré d’une croix rouge au milieu de trois baleines ; à droite, trois bateaux alignés sur le côté d’une baleine, à 50 m.\"><figcaption>Pas au milieu d’un groupe : sur le côté, à 50 m.</figcaption></figure>\n  <figure class=\"photo\"><img src=\"assets/c/baleines-mere-petit.webp\" width=\"720\" height=\"340\" loading=\"lazy\" alt=\"À gauche, un bateau barré d’une croix rouge entre une baleine et son petit ; à droite, deux bateaux restent à l’écart de la mère et du petit.\"><figcaption>Jamais entre une mère et son petit.</figcaption></figure>\n</div>"
  },
  {
   "id": "mod4_sec4",
   "moduleId": "mod4",
   "number": "4.4",
   "title": "La météo",
   "subtitle": "Prévisions, échelle de Beaufort, état de la mer, catégories de conception",
   "minutes": 12,
   "summary": "Avant toute sortie, on consulte les prévisions. La force du vent se mesure sur l’échelle de Beaufort (0 à 12), que l’on convertit en nœuds avec deux formules simples. La catégorie de conception du bateau (A, B, C, D) fixe le vent et la mer qu’il peut affronter.",
   "keyRules": [
    "Beaufort de 0 (calme) à 12 (ouragan) ; force 7 = grand frais, force 8 = coup de vent.",
    "Force vers nœuds (valeur approchée) : V = 5 × (B − 1) en dessous de force 8, V = 5 × B à partir de force 8.",
    "Nœuds vers force (valeur approchée) : B = V ÷ 5 + 1 sous 40 nœuds, B = V ÷ 5 à partir de 40 nœuds.",
    "Les moutons apparaissent à force 3 ; à force 6, lames et crêtes d’écume.",
    "Catégorie A : plus de force 8, vagues de plus de 4 m ; B : jusqu’à force 8 et 4 m.",
    "Catégorie C : jusqu’à force 6 et 2 m (à proximité de la côte) ; D : jusqu’à force 4 et 0,5 m (eaux protégées).",
    "Signaux météo : boule = force 7 ; cônes = coup de vent (8 à 11) ; croix = ouragan."
   ],
   "html": "<p class=\"lead\">La météo décide de la sortie. Vent et état de la mer se lisent sur l’<strong>échelle de Beaufort</strong>, qu’il faut savoir convertir en nœuds, et se comparent à la <strong>catégorie de conception</strong> de votre bateau.</p>\n\n<h3>Les prévisions météo</h3>\n<ul class=\"checklist\">\n  <li>Consulter les <strong>bulletins météo marine</strong> avant de partir (internet, radio, affichage en capitainerie ou au club, VHF).</li>\n  <li>Regarder la <strong>force et la direction du vent</strong>, l’<strong>état de la mer</strong> (houle, vagues) et l’évolution prévue sur toute la durée de la sortie.</li>\n  <li>Vérifier l’absence d’avis de vent fort ou de signaux météo affichés au port.</li>\n  <li>Choisir des abris adaptés à la direction du vent annoncé.</li>\n</ul>\n<div class=\"callout pf\"><strong>En Polynésie française</strong><p>Les bulletins marine sont établis par Météo-France (direction interrégionale de Polynésie française). Les alizés dominent, mais la houle venue du large peut rendre les passes dangereuses : vérifiez aussi la houle annoncée avant de franchir une passe.</p></div>\n\n<h3>Vitesse du vent : l’échelle de Beaufort</h3>\n<table class=\"data-table\">\n  <thead><tr><th>Force</th><th>Terme</th><th>Nœuds</th><th>km/h</th><th>Aspect de la mer</th></tr></thead>\n  <tbody>\n    <tr><td>0</td><td>Calme</td><td>&lt; 1</td><td>&lt; 1</td><td>Comme un miroir</td></tr>\n    <tr><td>1</td><td>Très légère brise</td><td>1 – 3</td><td>1 – 5</td><td>Quelques rides</td></tr>\n    <tr><td>2</td><td>Légère brise</td><td>4 – 6</td><td>6 – 11</td><td>Vaguelettes ne déferlant pas</td></tr>\n    <tr><td>3</td><td>Petite brise</td><td>7 – 10</td><td>12 – 19</td><td>Les moutons apparaissent</td></tr>\n    <tr><td>4</td><td>Jolie brise</td><td>11 – 16</td><td>20 – 28</td><td>Petites vagues, nombreux moutons</td></tr>\n    <tr><td>5</td><td>Bonne brise</td><td>17 – 21</td><td>29 – 38</td><td>Vagues, moutons, embruns</td></tr>\n    <tr><td>6</td><td>Vent frais</td><td>22 – 27</td><td>39 – 49</td><td>Lames, crêtes d’écume, embruns</td></tr>\n    <tr><td>7</td><td>Grand frais</td><td>28 – 33</td><td>50 – 61</td><td>Lames déferlantes, traînées d’écume</td></tr>\n    <tr><td>8</td><td>Coup de vent</td><td>34 – 40</td><td>62 – 74</td><td>Tourbillons d’écume à la crête des lames, traînées d’écume</td></tr>\n    <tr><td>9</td><td>Fort coup de vent</td><td>41 – 47</td><td>75 – 88</td><td>Grosses lames déferlantes</td></tr>\n    <tr><td>10</td><td>Tempête</td><td>48 – 55</td><td>89 – 102</td><td>Grosses lames déferlantes</td></tr>\n    <tr><td>11</td><td>Violente tempête</td><td>56 – 63</td><td>103 – 117</td><td>Grosses lames déferlantes</td></tr>\n    <tr><td>12</td><td>Ouragan</td><td>&gt; 63</td><td>&gt; 118</td><td>Grosses lames déferlantes</td></tr>\n  </tbody>\n</table>\n\n<h4>Les formules mémo</h4>\n<div class=\"card-grid\">\n  <div class=\"card\">\n    <h4>En dessous de force 8</h4>\n    <div class=\"formula\">V (nœuds) <span class=\"op\">=</span> 5 <span class=\"op\">×</span> (B <span class=\"op\">−</span> 1)</div>\n    <div class=\"formula\">B <span class=\"op\">=</span> V <span class=\"op\">÷</span> 5 <span class=\"op\">+</span> 1</div>\n    <p>Force 5 → 5 × 4 = <strong>20 nœuds</strong>. Vent de 30 nœuds → 30 ÷ 5 + 1 = <strong>force 7</strong>.</p>\n  </div>\n  <div class=\"card\">\n    <h4>À partir de force 8</h4>\n    <div class=\"formula\">V (nœuds) <span class=\"op\">=</span> 5 <span class=\"op\">×</span> B</div>\n    <div class=\"formula\">B <span class=\"op\">=</span> V <span class=\"op\">÷</span> 5</div>\n    <p>Force 9 → 5 × 9 = <strong>45 nœuds</strong>. Vent de 50 nœuds → 50 ÷ 5 = <strong>force 10</strong>.</p>\n  </div>\n</div>\n<p>Des nœuds vers la force, on choisit la formule d’après la vitesse : <strong>moins de 40 nœuds</strong>, B = V ÷ 5 + 1 ; <strong>40 nœuds et plus</strong>, B = V ÷ 5. Ces formules donnent une valeur approchée : le tableau fait foi.</p>\n<div class=\"mnemo\"><span class=\"mnemo-key\">5 nœuds par force</span><p>Chaque force ajoute environ 5 nœuds. Sous la force 8, on « enlève une force » avant de multiplier par 5 ; à partir de 8, on multiplie directement. Repères : <strong>force 3 = moutons</strong>, <strong>force 7 = grand frais</strong>, <strong>force 8 = coup de vent</strong>, <strong>force 12 = ouragan</strong>.</p></div>\n\n<h3>Les catégories de conception</h3>\n<p>Les bateaux sont construits selon une <strong>catégorie de conception</strong>, basée sur leur capacité à résister à une <strong>force de vent</strong> et à un <strong>état de mer</strong> (hauteur des vagues). Elle figure sur la plaque du constructeur.</p>\n<table class=\"data-table\">\n  <thead><tr><th>Catégorie</th><th>Force du vent (Beaufort)</th><th>Hauteur des vagues</th></tr></thead>\n  <tbody>\n    <tr><td><strong>A</strong> — en haute mer</td><td>Plus de 8</td><td>Plus de 4 m</td></tr>\n    <tr><td><strong>B</strong> — au large</td><td>Jusqu’à 8 compris</td><td>Jusqu’à 4 m compris</td></tr>\n    <tr><td><strong>C</strong> — à proximité de la côte</td><td>Jusqu’à 6 compris</td><td>Jusqu’à 2 m compris</td></tr>\n    <tr><td><strong>D</strong> — en eaux protégées</td><td>Jusqu’à 4 compris</td><td>Jusqu’à 0,5 m compris (vagues occasionnelles)</td></tr>\n  </tbody>\n</table>\n<div class=\"mnemo\"><span class=\"mnemo-key\">8 – 8 – 6 – 4</span><p>Vent : A <strong>plus de 8</strong>, B <strong>8</strong>, C <strong>6</strong>, D <strong>4</strong>. Vagues : <strong>4 m – 4 m – 2 m – 0,5 m</strong> (A plus de 4 m). La plupart des petits bateaux à moteur de plaisance sont en <strong>catégorie C</strong> : pas de sortie au-delà de force 6 ou de 2 m de vagues.</p></div>\n<div class=\"callout warn\"><strong>Catégorie de conception et dotation : deux choses différentes</strong><p>La catégorie de conception (A, B, C, D) dépend de la construction du bateau et fixe le vent et la mer qu’il supporte. La dotation de sécurité (basique, côtière, hauturière) dépend de la distance à laquelle vous allez d’un abri. Il faut respecter les deux.</p></div>\n\n<h3>Les signaux météo</h3>\n<p>Dans les ports, l’annonce d’un vent fort peut être affichée de jour par des marques noires, de nuit par des feux superposés.</p>\n<table class=\"data-table\">\n  <thead><tr><th>Vent</th><th>Marque de jour</th><th>Feux de nuit</th><th>Signification</th></tr></thead>\n  <tbody>\n    <tr><td>Force 7</td><td>Boule</td><td>Blanc sur vert</td><td>Grand frais, toutes directions</td></tr>\n    <tr><td>Force 8 à 11</td><td>2 cônes pointes en bas</td><td>Blanc sur rouge</td><td>Coup de vent débutant dans le quadrant <strong>sud-est</strong></td></tr>\n    <tr><td>Force 8 à 11</td><td>2 cônes pointes en haut</td><td>Rouge sur blanc</td><td>Coup de vent débutant dans le quadrant <strong>nord-est</strong></td></tr>\n    <tr><td>Force 8 à 11</td><td>1 cône pointe en haut</td><td>Rouge sur rouge</td><td>Coup de vent débutant dans le quadrant <strong>nord-ouest</strong></td></tr>\n    <tr><td>Force 8 à 11</td><td>1 cône pointe en bas</td><td>Blanc sur blanc</td><td>Coup de vent débutant dans le quadrant <strong>sud-ouest</strong></td></tr>\n    <tr><td>Force 12</td><td>Croix</td><td>Rouge, vert, rouge</td><td>Ouragan, toutes directions</td></tr>\n  </tbody>\n</table>\n<div class=\"callout pf\"><strong>En Polynésie française</strong><p>Ces signaux de sémaphore sont devenus rares : la météo marine se consulte auprès de Météo-France (Polynésie française) et à la VHF. Retenez-les pour l’examen.</p></div>\n<div class=\"card-grid\">\n  <div class=\"card\"><figure class=\"fig\" data-fig=\"shapes\" data-shapes=\"ball\"><figcaption>Force 7</figcaption></figure><h4>Grand frais</h4><p>Boule noire.</p></div>\n  <div class=\"card\"><figure class=\"fig\" data-fig=\"shapes\" data-shapes=\"cone-up,cone-up\"><figcaption>NE</figcaption></figure><h4>Nord-est</h4><p>2 cônes pointes en haut.</p></div>\n  <div class=\"card\"><figure class=\"fig\" data-fig=\"shapes\" data-shapes=\"cone-down,cone-down\"><figcaption>SE</figcaption></figure><h4>Sud-est</h4><p>2 cônes pointes en bas.</p></div>\n</div>\n<div class=\"mnemo\"><span class=\"mnemo-key\">Pointe en haut = Nord</span><p>Pointes vers le haut : vent du <strong>nord</strong> ; vers le bas : du <strong>sud</strong>. <strong>Deux cônes = est</strong>, <strong>un cône = ouest</strong>.</p></div>"
  },
  {
   "id": "bonus_sec1",
   "moduleId": "bonus",
   "number": "B.1",
   "title": "Déroulement de l’examen",
   "subtitle": "Épreuve théorique, épreuve pratique, permis provisoire",
   "minutes": 6,
   "summary": "Le jour de l’examen, l’épreuve théorique (QCM de 20 questions en 15 minutes, 3 erreurs au maximum) précède l’épreuve pratique d’environ 15 minutes sur le bateau d’entraînement. Le permis provisoire est remis aussitôt et vaut 2 mois.",
   "keyRules": [
    "Âge minimum : 16 ans ; permis obligatoire au-delà de 6 CV (4,5 kW).",
    "Théorie : QCM de 20 questions en 15 minutes, 3 erreurs au maximum.",
    "Apporter un stylo et une pièce d’identité.",
    "Pratique : seulement après la réussite de la théorie ; environ 15 minutes, en binôme ou trinôme, 2 essais par manœuvre.",
    "Permis provisoire remis par l’examinateur, valable 2 mois.",
    "Échec en pratique : la théorie reste acquise 6 mois.",
    "À Papeete : examens à la DPAM (Fare Ute), pratique sur le plan d’eau de Motu Uta."
   ],
   "html": "<p class=\"lead\">Le permis côtier s’obtient en une matinée : l’épreuve théorique d’abord, puis l’épreuve pratique pour ceux qui l’ont réussie. Voici comment se passe la journée, pour arriver serein.</p>\n\n<div class=\"callout pf\"><strong>Le permis côtier en Polynésie française</strong><p>Le permis est délivré par la <strong>DPAM</strong> (Direction polynésienne des affaires maritimes). Il est obligatoire pour piloter un bateau de plaisance ou un VNM de plus de <strong>6 CV (4,5 kW)</strong>, à partir de <strong>16 ans</strong>. Il autorise la navigation de jour comme de nuit jusqu’à <strong>5 milles d’un abri</strong> (6 milles en métropole). À Papeete, les examens ont lieu à la DPAM (<strong>Fare Ute</strong>) ; l’épreuve pratique se déroule sur le plan d’eau de <strong>Motu Uta</strong>.</p></div>\n\n<h3>Avant l’examen</h3>\n<ul>\n  <li>Le centre d’examen ou le centre de formation vous informe de la <strong>date et du lieu</strong> de l’examen.</li>\n  <li>Les <strong>examinateurs</strong> sont des agents qualifiés des affaires maritimes ou des personnes ayant des compétences théoriques et pratiques en navigation.</li>\n  <li>Votre formateur vous <strong>entraîne sur place</strong>, à l’endroit de l’épreuve pratique, avant le début de l’examen. La convocation se situe entre <strong>7 h 30 et 8 h 30</strong> : le rendez-vous d’entraînement peut donc être tôt.</li>\n</ul>\n<ul class=\"checklist\">\n  <li>Un <strong>stylo</strong>.</li>\n  <li>Votre <strong>pièce d’identité</strong>.</li>\n  <li>Tenue adaptée au bateau (chaussures qui ne glissent pas, protection solaire, eau).</li>\n</ul>\n\n<h3>L’épreuve théorique</h3>\n<table class=\"data-table\">\n  <thead><tr><th>Format</th><th>Durée</th><th>Réussite</th></tr></thead>\n  <tbody>\n    <tr><td>QCM de <strong>20 questions</strong></td><td><strong>15 minutes</strong></td><td><strong>3 erreurs au maximum</strong> (17/20)</td></tr>\n  </tbody>\n</table>\n<p>L’examen commence par la théorie. La correction est faite à la fin de l’épreuve, et vous connaissez aussitôt votre résultat.</p>\n<div class=\"callout tip\"><strong>Gérer ses 15 minutes</strong><p>Cela fait 45 secondes par question. Répondez d’abord à celles qui sont évidentes, revenez ensuite sur les calculs (carburant, Beaufort) et les situations à dessiner. Lisez chaque mot de l’énoncé : « entrant » ou « sortant », « bâbord » ou « tribord », « de jour » ou « de nuit » changent la réponse.</p></div>\n\n<h3>L’épreuve pratique</h3>\n<ul>\n  <li>Seuls les candidats ayant <strong>réussi la théorie</strong> peuvent s’y présenter.</li>\n  <li>Elle se déroule sur le <strong>bateau sur lequel vous vous êtes entraîné</strong>.</li>\n  <li>Vous passez en <strong>binôme</strong>, voire en <strong>trinôme</strong>, selon le nombre de candidats.</li>\n  <li>Durée : de l’ordre de <strong>15 minutes</strong>.</li>\n  <li>Vous avez droit à <strong>2 essais par manœuvre</strong>.</li>\n  <li>À la fin de l’épreuve, vous savez si vous êtes <strong>reçu ou ajourné</strong>. L’examen pratique se termine entre 10 h et 12 h.</li>\n</ul>\n<p>Les manœuvres demandées (appareillage, cap et arrêt, prise de coffre, homme à la mer, accostage) sont détaillées dans le chapitre suivant.</p>\n\n<h3>Après l’examen</h3>\n<div class=\"card-grid\">\n  <div class=\"card\">\n    <h4>Reçu</h4>\n    <p>L’examinateur vous remet un <strong>permis provisoire</strong> à l’issue de l’épreuve pratique. Il est valable <strong>2 mois</strong>, le temps de recevoir le permis définitif.</p>\n  </div>\n  <div class=\"card\">\n    <h4>Ajourné en pratique</h4>\n    <p>Vous conservez le bénéfice de la théorie réussie pendant <strong>6 mois</strong> : pendant cette période, vous ne repassez que l’épreuve pratique.</p>\n  </div>\n</div>\n<div class=\"mnemo\"><span class=\"mnemo-key\">20 – 15 – 3</span><p><strong>20</strong> questions, <strong>15</strong> minutes, <strong>3</strong> fautes au plus. Puis <strong>2</strong> essais par manœuvre, <strong>2</strong> mois de permis provisoire, <strong>6</strong> mois pour repasser la pratique.</p></div>"
  },
  {
   "id": "bonus_sec2",
   "moduleId": "bonus",
   "number": "B.2",
   "title": "Les manœuvres de l’épreuve pratique",
   "subtitle": "Appareillage, cap et arrêt, prise de coffre, homme à la mer, accostage",
   "minutes": 10,
   "summary": "L’épreuve pratique enchaîne cinq manœuvres : appareiller, prendre un cap et casser l’erre, prendre un coffre, récupérer un homme à la mer et accoster. Chacune suit une procédure précise, à exécuter lentement et en vérifiant le point mort.",
   "keyRules": [
    "Avant de démarrer : vérifications d’usage ; si le moteur ne démarre pas, vérifier essence, batterie, coupe-circuit et point mort.",
    "Moteur démarré : vérifier que la pissette (circuit de refroidissement) crache de l’eau.",
    "Casser l’erre : marche arrière jusqu’à l’arrêt complet, puis point mort, contrôlé sur un repère fixe.",
    "Prise de coffre : face au coffre et face au vent, au pas ; point mort puis marche arrière à 3 m, arrêt à 1 m.",
    "Homme à la mer : virer du côté de la chute, crier, s’éloigner, revenir vent de travers en passant juste au vent de lui, point mort quand il a passé l’étrave.",
    "Accostage : angle de 30° avec le quai ; à 3 ou 4 m, point mort puis barre vers le quai et marche arrière.",
    "Toujours remettre le moteur dans l’axe et repasser au point mort à la fin d’une manœuvre."
   ],
   "html": "<p class=\"lead\">Le jour de l’examen, vous effectuez ces manœuvres sur le bateau d’entraînement, avec 2 essais par manœuvre. Les gestes clés : <strong>aller lentement</strong>, <strong>passer par le point mort</strong> avant chaque changement de marche, et <strong>regarder autour de soi</strong>.</p>\n\n<h3>1. L’appareillage (départ du quai)</h3>\n<ol class=\"steps\">\n  <li>Faire les <strong>vérifications d’usage</strong> du bateau (carburant, matériel de sécurité, coupe-circuit attaché, aucun baigneur près de l’hélice).</li>\n  <li><strong>Démarrer le moteur</strong> (clé tournée puis « start ») et vérifier le bon fonctionnement de la <strong>pissette</strong> (jet d’eau de refroidissement). S’il ne démarre pas, vérifier : <strong>essence, batterie, coupe-circuit, point mort</strong>.</li>\n  <li><strong>Larguer les amarres</strong>.</li>\n  <li><strong>Braquer le volant vers le quai</strong> et avancer au ralenti pendant <strong>2 secondes</strong> pour décoller l’arrière du bateau du quai.</li>\n  <li>Passer au <strong>point mort</strong>, orienter le moteur dans la direction voulue, puis passer la <strong>marche arrière</strong> pour s’écarter.</li>\n</ol>\n<div class=\"mnemo\"><span class=\"mnemo-key\">EBCP</span><p>Le moteur ne démarre pas ? <strong>E</strong>ssence, <strong>B</strong>atterie, <strong>C</strong>oupe-circuit, <strong>P</strong>oint mort.</p></div>\n\n<h3>2. Prendre un cap et casser l’erre</h3>\n<ol class=\"steps\">\n  <li>Regarder <strong>à l’intérieur du compas</strong> (la boussole).</li>\n  <li>Tourner jusqu’à aligner le <strong>repère (curseur) du compas avec le cap demandé</strong>.</li>\n  <li><strong>Aligner l’avant du bateau</strong> sur un <strong>repère précis et lointain</strong> (sommet, bâtiment, balise) : on suit ensuite ce repère plutôt que le compas.</li>\n  <li><strong>Accélérer progressivement</strong>.</li>\n  <li>Pour <strong>casser l’erre</strong> : mettre la <strong>marche arrière</strong> jusqu’à l’<strong>arrêt complet</strong> du bateau, puis <strong>point mort</strong>. Le vérifier grâce à un <strong>point fixe sur le côté</strong> (il ne doit plus défiler).</li>\n</ol>\n<div class=\"callout tip\"><strong>Tourner du bon côté</strong><p>Pour passer d’un cap à un autre, tournez du côté le plus court : du 70° au 195°, le cap augmente, on tourne <strong>à droite</strong>. Si le cap diminue, on tourne à gauche. Dans tous les cas, on tourne du côté où l’écart est inférieur à 180° (du 350° au 010°, on tourne à droite).</p></div>\n\n<h3>3. La prise de coffre</h3>\n<p>Le coffre est une bouée d’amarrage. On s’en approche comme d’un obstacle à ne pas toucher.</p>\n<ol class=\"steps\">\n  <li>Suivre une trajectoire <strong>face au coffre et face au vent</strong> (le vent freine le bateau et le garde dans l’axe).</li>\n  <li>Réduire l’allure : <strong>aller au pas</strong>.</li>\n  <li>À <strong>3 m</strong> du coffre, passer le <strong>point mort</strong> puis la <strong>marche arrière</strong> doucement.</li>\n  <li><strong>S’arrêter à environ 1 m</strong> du coffre.</li>\n  <li>Repasser au <strong>point mort</strong>.</li>\n</ol>\n\n<h3>4. L’homme à la mer</h3>\n<ol class=\"steps\">\n  <li><strong>Virer du côté de l’homme à la mer</strong> : l’arrière (et l’hélice) s’écarte de lui.</li>\n  <li>Prévenir les personnes à bord en criant « <strong>Homme à la mer !</strong> » ; une personne le désigne du bras sans le quitter des yeux, on lui lance la bouée.</li>\n  <li><strong>S’éloigner et prendre son temps</strong>.</li>\n  <li>Repérer la <strong>direction du vent</strong>.</li>\n  <li>Revenir vers l’homme à la mer en route <strong>perpendiculaire au vent</strong>, en passant juste <strong>au vent de lui</strong> (entre lui et le vent) : une fois arrêté, le bateau dérive vers lui et l’abrite du vent et des vagues.</li>\n  <li><strong>Avancer doucement</strong>.</li>\n  <li>Passer le <strong>point mort</strong> dès que la personne a passé l’<strong>étrave</strong> (l’avant du bateau), puis la <strong>marche arrière</strong>.</li>\n  <li><strong>Arrêter le bateau</strong> pour que la personne (la bouée) soit <strong>au milieu du bateau</strong>.</li>\n  <li>Repasser au <strong>point mort</strong> et aller la chercher.</li>\n</ol>\n<div class=\"callout warn\"><strong>Le point mort sauve des vies</strong><p>Une hélice en rotation près d’une personne dans l’eau est un danger mortel. Point mort dès qu’elle passe l’étrave, et moteur au point mort pendant toute la récupération.</p></div>\n\n<h3>5. L’accostage</h3>\n<ol class=\"steps\">\n  <li>Se présenter en faisant un <strong>angle de 30°</strong> entre l’axe du bateau et le quai.</li>\n  <li>Avancer en <strong>petite marche avant</strong>.</li>\n  <li>À <strong>3 ou 4 m</strong> du quai, passer le <strong>point mort</strong>, puis dans la foulée <strong>braquer le volant vers le quai</strong> en passant la <strong>marche arrière</strong> : l’arrière vient se plaquer le long du quai et le bateau s’arrête.</li>\n  <li>Passer le <strong>point mort</strong> lorsque le bateau est arrêté et <strong>remettre le moteur dans l’axe</strong>.</li>\n</ol>\n<div class=\"mnemo\"><span class=\"mnemo-key\">30° – 3 m – PM</span><p>Accostage : <strong>30°</strong> d’angle, <strong>3 à 4 m</strong> du quai pour commencer à freiner, et toujours <strong>PM</strong> (point mort) entre deux marches.</p></div>\n\n<h3>L’hélice</h3>\n<p>Le <strong>pas</strong> de l’hélice est la distance théorique parcourue en un tour : à régime égal, un pas plus grand donne plus de vitesse (mais moins de reprise).</p>"
  },
  {
   "id": "bonus_sec3",
   "moduleId": "bonus",
   "number": "B.3",
   "title": "Les nœuds marins",
   "subtitle": "Nœud de cabestan (mât, bitte, barre) et nœud de taquet",
   "minutes": 6,
   "summary": "Deux nœuds essentiels pour le permis côtier : le nœud de cabestan, rapide à faire et à régler, sur un mât, une bitte d’amarrage ou une barre ; et le nœud de taquet pour amarrer le bateau.",
   "keyRules": [
    "Cabestan = deux boucles identiques croisées : sert à fixer un pare-battage ou une amarre provisoire.",
    "Sur une bitte d’amarrage : former deux boucles, les superposer et les enfiler par le dessus.",
    "Sur un mât ou une barre : un tour, on croise par-dessus, un second tour, et le brin passe sous ce croisement.",
    "Taquet : un tour mort à la base, des huit croisés, puis une demi-clé retournée pour bloquer.",
    "Un nœud de taquet bien fait se défait en un geste, même sous tension : pas de nœuds superflus."
   ],
   "html": "<p class=\"lead\">Deux nœuds sont à savoir faire les yeux fermés : le <strong>nœud de cabestan</strong>, sous trois formes, et le <strong>nœud de taquet</strong>. Ils servent à chaque sortie, pour amarrer et pour placer les pare-battages.</p>\n\n<h3>Le nœud de cabestan</h3>\n<p>Nœud rapide qui serre sur son support sans glisser quand on tire sur l’un ou l’autre brin, et qui se règle facilement en hauteur. Usage type : <strong>fixer un pare-battage</strong> (défense) sur une filière, une main courante ou un chandelier, ou faire une amarre provisoire sur une bitte.</p>\n\n<h4>Sur une bitte d’amarrage (méthode des deux boucles)</h4>\n<ol class=\"steps\">\n  <li>Former <strong>deux boucles identiques</strong> dans le cordage, tournées dans le même sens.</li>\n  <li>Glisser la seconde boucle <strong>derrière</strong> la première (sans les retourner). Contrôle : les deux brins doivent sortir au milieu, en sens opposés, coincés sous le croisement ; sinon, inverser la superposition.</li>\n  <li><strong>Enfiler les deux boucles</strong> ensemble sur la bitte par le dessus, puis souquer (serrer) les deux brins.</li>\n</ol>\n\n<h4>Sur un mât</h4>\n<ol class=\"steps\">\n  <li>Faire un <strong>tour</strong> autour du mât.</li>\n  <li>Revenir en <strong>croisant par-dessus</strong> le premier tour pour faire un second tour.</li>\n  <li>Passer l’extrémité <strong>sous le croisement</strong> du second tour, puis serrer : les deux brins sortent en sens opposés au centre du nœud.</li>\n</ol>\n\n<h4>Sur une barre (filière, main courante)</h4>\n<ol class=\"steps\">\n  <li>Passer le cordage autour de la barre (1er tour).</li>\n  <li>Faire un 2e tour à côté du premier, en <strong>croisant</strong> par-dessus.</li>\n  <li>Glisser l’extrémité <strong>sous ce dernier tour</strong> et serrer.</li>\n</ol>\n<div class=\"callout tip\"><strong>Vérifier son cabestan</strong><p>Vu de face, un cabestan forme un « X » sur le support avec les deux brins qui sortent au milieu, en sens opposés (vers le haut et le bas sur une barre horizontale, vers les côtés sur une bitte ou un mât). Pour un pare-battage, ajouter éventuellement une demi-clé de sécurité.</p></div>\n\n<h3>Le nœud de taquet</h3>\n<p>Le <strong>taquet</strong> est la pièce métallique à deux cornes sur le pont ou le quai. Le nœud de taquet sert à <strong>amarrer le bateau</strong> et doit pouvoir être largué rapidement, même quand l’amarre est sous tension.</p>\n<ol class=\"steps\">\n  <li>Faire un <strong>tour mort</strong> : le cordage arrive par la corne la plus éloignée et fait le tour complet de la base du taquet.</li>\n  <li>Faire <strong>un ou deux huit</strong> en croisant le cordage d’une corne à l’autre par-dessus le taquet.</li>\n  <li>Terminer par une <strong>demi-clé retournée</strong> (une boucle retournée passée sur la corne) qui bloque l’ensemble ; le brin libre sort parallèle aux autres.</li>\n</ol>\n<div class=\"callout warn\"><strong>Pas de nœuds en trop</strong><p>Un empilement de huit et de demi-clés devient impossible à défaire sous tension. Tour mort, huit, demi-clé : c’est suffisant.</p></div>\n<div class=\"mnemo\"><span class=\"mnemo-key\">Tour, huit, clé</span><p>Nœud de taquet en 3 mots : <strong>tour</strong> mort, <strong>huit</strong>, demi-<strong>clé</strong>.</p></div>\n\n<h3>Autres nœuds utiles</h3>\n<p>Souvent montrés en formation, sans être au cœur du mémento :</p>\n<ul>\n  <li><strong>Tour mort et deux demi-clés</strong> : amarrage sûr sur un anneau ou un pieu, facile à défaire.</li>\n  <li><strong>Nœud de chaise</strong> : boucle fixe qui ne glisse pas et ne serre pas (amarrage sur une bitte, boucle de sauvetage).</li>\n  <li><strong>Nœud de huit</strong> : nœud d’arrêt au bout d’un cordage pour l’empêcher de filer dans une poulie ou un passe-cordage.</li>\n</ul>"
  }
 ],
 "questions": [
  {
   "id": "c1_balisage_01",
   "sectionId": "mod1_sec1",
   "question": "Venant du large, vous remontez un bras de mer franchi par un pont. Face à cette pile du pont, que faites-vous ?",
   "options": {
    "A": "Je passe à gauche",
    "B": "Je passe à droite"
   },
   "correct": "A",
   "explanation": "La pile porte un triangle pointe en haut : c’est une marque latérale tribord. En venant du large, on la laisse sur tribord (à droite), donc on passe à gauche de la pile.",
   "image": "assets/q/c1_balisage_01.webp",
   "tags": [
    "balisage-lateral"
   ],
   "concept": "lat-tribord-entrant"
  },
  {
   "id": "c1_balisage_02",
   "sectionId": "mod1_sec1",
   "question": "Quel est le feu de nuit de cette bouée ?",
   "options": {
    "A": "Feu scintillant vert",
    "B": "Feu vert à 3 éclats",
    "C": "Feu vert à 2+1 éclats",
    "D": "Feu vert à occultations"
   },
   "correct": "C",
   "explanation": "Une marque verte portant une large bande rouge et un voyant conique est une marque de chenal préféré à bâbord (marque tribord modifiée). Son feu est vert à 2 + 1 éclats : 2 éclats groupés suivis d’un éclat isolé, Fl(2+1) G.",
   "image": "assets/q/c1_balisage_02.webp",
   "tags": [
    "balisage-lateral",
    "feux-balisage"
   ],
   "concept": "pref-feu"
  },
  {
   "id": "c1_balisage_03",
   "sectionId": "mod1_sec1",
   "question": "Venant du large, vous rencontrez droit devant cette bouée cylindrique rouge. Que faites-vous ?",
   "options": {
    "A": "Je viens à droite",
    "B": "Je viens à gauche"
   },
   "correct": "A",
   "explanation": "Une bouée rouge cylindrique est une marque latérale bâbord. En venant du large (région A), on la laisse sur bâbord, donc on vient sur la droite pour la garder à gauche.",
   "image": "assets/q/c1_balisage_03.webp",
   "tags": [
    "balisage-lateral"
   ],
   "concept": "lat-babord-entrant"
  },
  {
   "id": "c1_balisage_04",
   "sectionId": "mod1_sec1",
   "question": "Vous entrez au port. Vous avez estimé que le chenal à prendre de préférence laissait cette bouée sur tribord :",
   "options": {
    "A": "Vous avez raison",
    "B": "Vous avez tort"
   },
   "correct": "A",
   "explanation": "Verte avec une bande rouge et un voyant conique : c’est une marque de chenal préféré à bâbord (marque tribord modifiée). Comme une marque tribord, on la laisse sur tribord en entrant, le chenal principal étant sur bâbord.",
   "image": "assets/q/c1_balisage_04.webp",
   "tags": [
    "balisage-lateral"
   ],
   "concept": "pref-passage"
  },
  {
   "id": "c1_balisage_05",
   "sectionId": "mod1_sec1",
   "question": "Vous entrez au port. Voici une marque de musoir :",
   "options": {
    "A": "Je la laisse à gauche",
    "B": "Je la laisse à droite",
    "C": "Je passe indifféremment à gauche ou à droite"
   },
   "correct": "A",
   "explanation": "Le carré rouge sur le musoir est une marque latérale bâbord. En entrant au port, on laisse le rouge à gauche (bâbord).",
   "image": "assets/q/c1_balisage_05.webp",
   "tags": [
    "balisage-lateral"
   ],
   "concept": "lat-babord-entrant"
  },
  {
   "id": "c1_balisage_06",
   "sectionId": "mod1_sec1",
   "question": "Vous venez du large. Sur quel bord laissez-vous cette tourelle ?",
   "options": {
    "A": "Sur bâbord",
    "B": "Sur tribord"
   },
   "correct": "B",
   "explanation": "Une tourelle verte avec un voyant conique est une marque latérale tribord. En région AISM A (dont la Polynésie française), on la laisse sur tribord en venant du large : vert à droite en rentrant.",
   "image": "assets/q/c1_balisage_06.webp",
   "tags": [
    "balisage-lateral"
   ],
   "concept": "lat-tribord-entrant"
  },
  {
   "id": "c1_balisage_07",
   "sectionId": "mod1_sec1",
   "question": "Cette vue représente :",
   "options": {
    "A": "Une marque de chenal préféré à bâbord",
    "B": "Une marque de danger isolé",
    "C": "Une marque latérale bâbord"
   },
   "correct": "C",
   "explanation": "Bouée entièrement rouge, voyant cylindrique et numéro pair (18) : c’est une marque latérale bâbord. Les marques bâbord portent les numéros pairs.",
   "image": "assets/q/c1_balisage_07.webp",
   "tags": [
    "balisage-lateral"
   ],
   "concept": "lat-identifier"
  },
  {
   "id": "c1_balisage_08",
   "sectionId": "mod1_sec1",
   "question": "En entrant dans un port, de quel bord doit-on laisser une marque latérale portant un numéro pair ?",
   "options": {
    "A": "Bâbord",
    "B": "Tribord"
   },
   "correct": "A",
   "explanation": "Les marques latérales bâbord (rouges) portent des numéros pairs, les tribord (vertes) des numéros impairs, comptés depuis le large. En entrant, on laisse donc les numéros pairs à bâbord.",
   "image": "assets/q/c1_balisage_08.webp",
   "tags": [
    "balisage-lateral"
   ],
   "concept": "lat-numerotation"
  },
  {
   "id": "c1_balisage_09",
   "sectionId": "mod1_sec1",
   "question": "Vous sortez du port. Vous laissez la bouée :",
   "options": {
    "A": "Sur bâbord",
    "B": "Sur tribord"
   },
   "correct": "B",
   "explanation": "Bouée rouge à voyant cylindrique : marque bâbord pour qui rentre. En sortant, le sens est inversé : on la laisse sur tribord.",
   "image": "assets/q/c1_balisage_09.webp",
   "tags": [
    "balisage-lateral"
   ],
   "concept": "lat-babord-sortant"
  },
  {
   "id": "c1_balisage_10",
   "sectionId": "mod1_sec1",
   "question": "Droit devant vous, vous voyez ces deux balises. Qu’en déduisez-vous ?",
   "options": {
    "A": "Je fais route vers le large",
    "B": "Le chenal à prendre de préférence est à gauche",
    "C": "Je fais route vers le port"
   },
   "correct": "C",
   "explanation": "Le carré rouge (bâbord) est à gauche et le triangle vert (tribord) à droite : c’est la disposition vue en rentrant au port en région A. Vous faites donc route vers le port.",
   "image": "assets/q/c1_balisage_10.webp",
   "tags": [
    "balisage-lateral"
   ],
   "concept": "lat-sens-conventionnel"
  },
  {
   "id": "c1_balisage_11",
   "sectionId": "mod1_sec1",
   "question": "Vous rentrez au port et apercevez cette bouée droit devant. Que faites-vous ?",
   "options": {
    "A": "Je la laisse à droite",
    "B": "Je la laisse à gauche",
    "C": "Je la laisse indifféremment à droite ou à gauche"
   },
   "correct": "B",
   "explanation": "Rouge avec une bande verte et un voyant cylindrique : marque de chenal préféré à tribord (marque bâbord modifiée). On la traite comme une marque bâbord : en rentrant, on la laisse à gauche, le chenal principal est à tribord.",
   "image": "assets/q/c1_balisage_11.webp",
   "tags": [
    "balisage-lateral"
   ],
   "concept": "pref-passage"
  },
  {
   "id": "c1_balisage_12",
   "sectionId": "mod1_sec1",
   "question": "Sortant d’un port, vous apercevez cette bouée droit devant. Que faites-vous ?",
   "options": {
    "A": "Je vais indifféremment à droite ou à gauche",
    "B": "Je viens à droite",
    "C": "Je viens à gauche"
   },
   "correct": "B",
   "explanation": "Bouée verte (numéro impair 5) : marque tribord pour qui rentre. En sortant, on la laisse à bâbord (à gauche), donc on vient sur la droite.",
   "image": "assets/q/c1_balisage_12.webp",
   "tags": [
    "balisage-lateral"
   ],
   "concept": "lat-tribord-sortant"
  },
  {
   "id": "c1_balisage_13",
   "sectionId": "mod1_sec1",
   "question": "Vous sortez du port. Vous voyez un feu rouge à éclats droit devant vous. Que faites-vous ?",
   "options": {
    "A": "Je viens indifféremment à droite ou à gauche",
    "B": "Je viens à droite",
    "C": "Je viens à gauche"
   },
   "correct": "C",
   "explanation": "Un feu rouge signale une marque bâbord (pour qui rentre). En sortant, on la laisse sur tribord (à droite), donc on vient sur la gauche.",
   "tags": [
    "balisage-lateral"
   ],
   "concept": "lat-babord-sortant"
  },
  {
   "id": "c1_balisage_14",
   "sectionId": "mod1_sec1",
   "question": "Venant du large, vous voyez cette bouée droit devant vous. Que faites-vous ?",
   "options": {
    "A": "Je passe indifféremment à droite ou à gauche",
    "B": "Je la laisse à droite",
    "C": "Je la laisse à gauche"
   },
   "correct": "C",
   "explanation": "Bouée rouge : marque latérale bâbord. En venant du large, on laisse le rouge à bâbord, c’est-à-dire à gauche.",
   "image": "assets/q/c1_balisage_14.webp",
   "tags": [
    "balisage-lateral"
   ],
   "concept": "lat-babord-entrant"
  },
  {
   "id": "c1_balisage_15",
   "sectionId": "mod1_sec1",
   "question": "En rentrant au port, vous voyez devant vous ce feu rouge :",
   "options": {
    "A": "Je passe à gauche",
    "B": "Je passe à droite"
   },
   "correct": "B",
   "explanation": "Un feu rouge, quel que soit son rythme (y compris 2+1, chenal préféré à tribord), marque le côté bâbord du chenal pour qui rentre : on le laisse à gauche, donc on passe à droite.",
   "figure": {
    "fig": "rhythm",
    "code": "Fl(2+1)",
    "color": "R"
   },
   "tags": [
    "balisage-lateral"
   ],
   "concept": "pref-passage"
  },
  {
   "id": "c2_speciales_01",
   "sectionId": "mod1_sec2",
   "question": "Dans un chenal, vous apercevez ces deux bouées vertes. Qu’indiquent-elles ?",
   "options": {
    "A": "Chenal préféré à tribord",
    "B": "Danger nouveau grave",
    "C": "Marque de zone de pêche"
   },
   "correct": "B",
   "explanation": "Un danger nouveau (épave récente, haut-fond non encore porté sur les cartes) peut être signalé en doublant la marque qui le couvre : deux marques identiques côte à côte. Une épave récente peut aussi être signalée par la bouée d’épave d’urgence, à bandes verticales bleues et jaunes.",
   "image": "assets/q/c2_speciales_01.webp",
   "tags": [
    "marques-speciales"
   ],
   "concept": "danger-nouveau-doublement",
   "near": [
    "exam_q3_17"
   ]
  },
  {
   "id": "c2_speciales_02",
   "sectionId": "mod1_sec2",
   "question": "En sortant d’un port dans le chenal, vous apercevez cette bouée. Que signifie-t-elle ?",
   "options": {
    "A": "Eaux saines",
    "B": "Danger isolé",
    "C": "Zone de tir"
   },
   "correct": "A",
   "explanation": "Les bandes verticales rouges et blanches et le voyant sphérique rouge indiquent une marque d’eaux saines : l’eau est navigable tout autour, elle marque souvent l’atterrissage ou l’axe d’un chenal. Feu blanc isophase, à occultations, 1 éclat long toutes les 10 s ou Mo(A).",
   "image": "assets/q/c2_speciales_02.webp",
   "tags": [
    "marques-speciales"
   ],
   "concept": "eaux-saines-identifier"
  },
  {
   "id": "c2_speciales_03",
   "sectionId": "mod1_sec2",
   "question": "Que signifient ces bouées jaunes ?",
   "options": {
    "A": "Limite de baignade",
    "B": "Bouée bâbord de chenal traversier",
    "C": "Bouée tribord de chenal traversier"
   },
   "correct": "A",
   "explanation": "Des petites bouées sphériques jaunes alignées près d’une plage délimitent la zone de baignade, réservée aux baigneurs.",
   "image": "assets/q/c2_speciales_03.webp",
   "tags": [
    "plages"
   ],
   "concept": "plage-baignade"
  },
  {
   "id": "c2_speciales_04",
   "sectionId": "mod1_sec2",
   "question": "Que signifie cette bouée jaune au voisinage d’une plage ?",
   "options": {
    "A": "Une bouée de zone interdite aux bateaux à moteur",
    "B": "Une bouée de zone de baignade",
    "C": "Une bouée tribord de chenal traversier"
   },
   "correct": "C",
   "explanation": "Une bouée jaune conique près d’une plage balise le côté tribord d’un chenal traversier (couloir d’accès au rivage pour les engins). Comme pour le balisage latéral : cône = tribord, cylindre = bâbord, en venant du large.",
   "image": "assets/q/c2_speciales_04.webp",
   "tags": [
    "plages"
   ],
   "concept": "plage-chenal-traversier",
   "near": [
    "exam_q3_16"
   ]
  },
  {
   "id": "c2_speciales_05",
   "sectionId": "mod1_sec2",
   "question": "Signification de cette bouée :",
   "options": {
    "A": "Danger nouveau",
    "B": "Danger isolé",
    "C": "Eaux saines"
   },
   "correct": "B",
   "explanation": "Noire avec une ou plusieurs bandes rouges et deux sphères noires superposées : marque de danger isolé. Elle est posée sur un danger de faible étendue entouré d’eaux navigables ; on peut passer de tous côtés mais à bonne distance.",
   "image": "assets/q/c2_speciales_05.webp",
   "tags": [
    "marques-speciales"
   ],
   "concept": "danger-isole-identifier"
  },
  {
   "id": "c2_speciales_06",
   "sectionId": "mod1_sec2",
   "question": "Que signifie cette bouée ?",
   "options": {
    "A": "Eaux saines",
    "B": "Danger isolé",
    "C": "Danger nouveau",
    "D": "Zone de tir"
   },
   "correct": "A",
   "explanation": "Les bandes verticales rouges et blanches et le voyant sphérique rouge indiquent une marque d’eaux saines : l’eau est navigable tout autour, elle marque souvent l’atterrissage ou l’axe d’un chenal. Feu blanc isophase, à occultations, 1 éclat long toutes les 10 s ou Mo(A).",
   "image": "assets/q/c2_speciales_06.webp",
   "tags": [
    "marques-speciales"
   ],
   "concept": "eaux-saines-identifier"
  },
  {
   "id": "c2_speciales_07",
   "sectionId": "mod1_sec2",
   "question": "Qu’indiquent ces bouées sphériques jaunes, espacées de 200 m environ ?",
   "options": {
    "A": "Zone de plaisance",
    "B": "Limite de zone de baignade",
    "C": "Zone d’amarrage de navires",
    "D": "Limite de la zone des 300 mètres"
   },
   "correct": "D",
   "explanation": "Des bouées sphériques jaunes espacées d’environ 200 m marquent la limite de la bande littorale des 300 m, où la vitesse est limitée à 5 nœuds (règle aussi appliquée en Polynésie française). Une zone de baignade est délimitée par un collier de petites sphères jaunes ; de grosses sphères rapprochées signalent une zone interdite aux navires à moteur.",
   "image": "assets/q/c2_speciales_07.webp",
   "tags": [
    "plages",
    "vitesse-zones"
   ],
   "concept": "plage-limite-300m"
  },
  {
   "id": "c2_speciales_08",
   "sectionId": "mod1_sec2",
   "question": "Comment peut être balisée une zone de baignade ?",
   "options": {
    "A": "Par des bouées coniques jaunes",
    "B": "Par des bouées cylindriques jaunes",
    "C": "Par un collier de bouées sphériques jaunes"
   },
   "correct": "C",
   "explanation": "Une zone de baignade est délimitée par une ligne de petites bouées sphériques jaunes. Les bouées coniques et cylindriques jaunes servent à baliser les chenaux traversiers (tribord et bâbord).",
   "image": "assets/q/c2_speciales_08.webp",
   "tags": [
    "plages"
   ],
   "concept": "plage-baignade",
   "near": [
    "q_mardi_4"
   ]
  },
  {
   "id": "c2_speciales_09",
   "sectionId": "mod1_sec2",
   "question": "Le cap que vous suivez vous ferait passer tout près de cette marque. Que faites-vous ?",
   "options": {
    "A": "Je ne change rien à ma route",
    "B": "Je m’écarte largement"
   },
   "correct": "B",
   "explanation": "Noire à bande rouge avec deux sphères : marque de danger isolé. Le danger est juste sous la marque : on peut passer de tous côtés, mais en s’en écartant largement.",
   "image": "assets/q/c2_speciales_09.webp",
   "tags": [
    "marques-speciales"
   ],
   "concept": "danger-isole-passage"
  },
  {
   "id": "c2_speciales_10",
   "sectionId": "mod1_sec2",
   "question": "Cette marque peut indiquer :",
   "options": {
    "A": "Zone d’exercices",
    "B": "Zone de baignade",
    "C": "Entrée de chenal traversier"
   },
   "correct": "A",
   "explanation": "Une marque jaune avec un voyant en X jaune est une marque spéciale : elle signale une zone ou une particularité (zone d’exercices militaires, câble, émissaire, zone d’aquaculture…), pas un côté de chenal. Une zone de baignade se balise avec un collier de petites sphères jaunes.",
   "image": "assets/q/c2_speciales_10.webp",
   "tags": [
    "marques-speciales"
   ],
   "concept": "speciale-identifier"
  },
  {
   "id": "c2_speciales_11",
   "sectionId": "mod1_sec2",
   "question": "Cette marque est normalement disposée pour indiquer :",
   "options": {
    "A": "La limite bâbord d’un chenal",
    "B": "Un danger nouveau",
    "C": "Un chenal préféré sur tribord"
   },
   "correct": "B",
   "explanation": "Deux marques identiques côte à côte (ici deux bouées bâbord rouges) signalent un danger nouveau jugé grave : on double alors l’une des marques qui le balisent. Un danger nouveau moins grave est balisé par les marques habituelles, sans doublement.",
   "image": "assets/q/c2_speciales_11.webp",
   "tags": [
    "marques-speciales"
   ],
   "concept": "danger-nouveau-doublement"
  },
  {
   "id": "c2_speciales_12",
   "sectionId": "mod1_sec2",
   "question": "Quelle est cette bouée, à proximité du rivage et de la plage ?",
   "options": {
    "A": "Bouée de limite de la zone des 300 mètres",
    "B": "Bouée de régate",
    "C": "Bouée bâbord de chenal traversier",
    "D": "Bouée tribord de chenal traversier"
   },
   "correct": "C",
   "explanation": "Une bouée jaune cylindrique près d’une plage balise le côté bâbord d’un chenal traversier. Cylindre = bâbord, cône = tribord, comme pour le balisage latéral.",
   "image": "assets/q/c2_speciales_12.webp",
   "tags": [
    "plages"
   ],
   "concept": "plage-chenal-traversier"
  },
  {
   "id": "c2_speciales_13",
   "sectionId": "mod1_sec2",
   "question": "De nuit dans une rade, vous apercevez un feu jaune à 3 éclats groupés. Ce feu peut indiquer :",
   "options": {
    "A": "Eaux saines",
    "B": "Mouillage de quarantaine",
    "C": "Chenal préféré à bâbord"
   },
   "correct": "B",
   "explanation": "Un feu jaune seul (non alterné avec du bleu, réservé à la bouée d’épave d’urgence) est celui d’une marque spéciale, qui balise une zone particulière (mouillage, zone réglementée, etc.). Les eaux saines ont un feu blanc, le chenal préféré un feu vert ou rouge : seul le mouillage de quarantaine convient.",
   "image": "assets/q/c2_speciales_13.webp",
   "tags": [
    "marques-speciales",
    "feux-balisage"
   ],
   "concept": "speciale-feu"
  },
  {
   "id": "c2_speciales_14",
   "sectionId": "mod1_sec2",
   "question": "De nuit, vous apercevez un feu blanc à deux éclats. Qu’indique-t-il ?",
   "options": {
    "A": "Marque de danger isolé",
    "B": "Marque cardinale est",
    "C": "Marque de chenal préféré à tribord"
   },
   "correct": "A",
   "explanation": "Un feu blanc à 2 éclats groupés, Fl(2) W, est le feu de la marque de danger isolé (noire à bande rouge, deux sphères noires). Mnémo : 2 sphères, 2 éclats. La cardinale est montre 3 scintillements, et le chenal préféré un feu rouge ou vert.",
   "image": "assets/q/c2_speciales_14.webp",
   "tags": [
    "marques-speciales",
    "feux-balisage"
   ],
   "concept": "danger-isole-feu"
  },
  {
   "id": "c2_speciales_15",
   "sectionId": "mod1_sec2",
   "question": "Comment doit-on baliser un danger nouveau jugé grave ?",
   "options": {
    "A": "Avec une marque de chenal préféré tribord",
    "B": "Avec une marque de chenal préféré bâbord",
    "C": "Avec deux balises identiques"
   },
   "correct": "C",
   "explanation": "Un danger nouveau jugé grave (épave récente, haut-fond non encore porté sur les cartes) est signalé en doublant l’une des marques qui le balisent : deux marques identiques côte à côte. Une épave récente peut aussi être signalée par la bouée d’épave d’urgence, à bandes verticales bleues et jaunes.",
   "tags": [
    "marques-speciales"
   ],
   "concept": "danger-nouveau-doublement"
  },
  {
   "id": "c3_cardinales_01",
   "sectionId": "mod1_sec3",
   "question": "Vous faites route au sud. Vous apercevez cette bouée droit devant. Que faites-vous ?",
   "options": {
    "A": "Je la laisse indifféremment à droite ou à gauche",
    "B": "Je la laisse à droite",
    "C": "Je la laisse à gauche"
   },
   "correct": "B",
   "explanation": "Cônes opposés par la base (losange) et noir-jaune-noir : cardinale est, on passe à l’est. En faisant route au sud, l’est est à gauche : on passe à gauche de la bouée, donc on la laisse à droite.",
   "image": "assets/q/c3_cardinales_01.webp",
   "tags": [
    "cardinales"
   ],
   "concept": "card-est-passage"
  },
  {
   "id": "c3_cardinales_02",
   "sectionId": "mod1_sec3",
   "question": "Faisant route à l’ouest, vous apercevez cette bouée droit devant vous. Que faites-vous ?",
   "options": {
    "A": "Je viens à droite",
    "B": "Je viens à gauche",
    "C": "Je viens indifféremment à droite ou à gauche"
   },
   "correct": "A",
   "explanation": "Deux cônes pointe en haut, noir sur jaune : cardinale nord, on passe au nord. En faisant route à l’ouest, le nord est à droite : je viens à droite.",
   "image": "assets/q/c3_cardinales_02.webp",
   "tags": [
    "cardinales"
   ],
   "concept": "card-nord-passage",
   "near": [
    "exam_q2_3"
   ]
  },
  {
   "id": "c3_cardinales_03",
   "sectionId": "mod1_sec3",
   "question": "Vous faites route au sud. Vous apercevez cette bouée devant vous. Que faites-vous ?",
   "options": {
    "A": "Je la laisse à droite",
    "B": "Je la laisse à gauche",
    "C": "Je la laisse indifféremment à droite ou à gauche"
   },
   "correct": "B",
   "explanation": "Cônes pointe contre pointe (sablier) et jaune-noir-jaune : cardinale ouest, on passe à l’ouest. Cap au sud, l’ouest est à droite : on passe à droite de la bouée, donc on la laisse à gauche.",
   "figure": {
    "fig": "mark",
    "type": "card-w"
   },
   "tags": [
    "cardinales"
   ],
   "concept": "card-ouest-passage",
   "near": [
    "c3_cardinales_13",
    "q_1_3_1"
   ]
  },
  {
   "id": "c3_cardinales_04",
   "sectionId": "mod1_sec3",
   "question": "Vous faites route à l’est. Vous apercevez cette bouée droit devant vous. Que faites-vous ?",
   "options": {
    "A": "Je viens à droite",
    "B": "Je viens à gauche",
    "C": "Je viens indifféremment à droite ou à gauche"
   },
   "correct": "B",
   "explanation": "Deux cônes pointe en haut : cardinale nord, on passe au nord. Cap à l’est, le nord est à gauche : je viens à gauche.",
   "image": "assets/q/c3_cardinales_04.webp",
   "tags": [
    "cardinales"
   ],
   "concept": "card-nord-passage",
   "near": [
    "exam_q4_18"
   ]
  },
  {
   "id": "c3_cardinales_05",
   "sectionId": "mod1_sec3",
   "question": "Vous faites route à l’ouest. Vous voyez cette bouée droit devant. Que faites-vous ?",
   "options": {
    "A": "Je la laisse à droite",
    "B": "Je la laisse à gauche",
    "C": "Je la laisse indifféremment à droite ou à gauche"
   },
   "correct": "A",
   "explanation": "Deux cônes pointe en bas, jaune sur noir : cardinale sud, on passe au sud. Cap à l’ouest, le sud est à gauche : on passe à gauche de la bouée, donc on la laisse à droite.",
   "image": "assets/q/c3_cardinales_05.webp",
   "tags": [
    "cardinales"
   ],
   "concept": "card-sud-passage",
   "near": [
    "q_mardi_3"
   ]
  },
  {
   "id": "c3_cardinales_06",
   "sectionId": "mod1_sec3",
   "question": "Le nord étant indiqué par la flèche, sur quel bord laissez-vous la bouée ?",
   "options": {
    "A": "Sur bâbord",
    "B": "Sur tribord"
   },
   "correct": "B",
   "explanation": "Deux cônes pointe en bas, jaune sur noir : cardinale sud, il faut passer au sud. Le bateau, au sud de la marque, fait route vers l’ouest : en passant au sud, il laisse la bouée sur tribord.",
   "image": "assets/q/c3_cardinales_06.webp",
   "tags": [
    "cardinales"
   ],
   "concept": "card-sud-passage"
  },
  {
   "id": "c3_cardinales_07",
   "sectionId": "mod1_sec3",
   "question": "Vous faites route au nord et apercevez cette bouée. Que faites-vous ?",
   "options": {
    "A": "Je reste cap au nord",
    "B": "Je viens sur bâbord"
   },
   "correct": "A",
   "explanation": "Losange (cônes opposés par la base) et noir-jaune-noir : cardinale est, les eaux saines sont à l’est. Le bateau est déjà à l’est de la marque : il peut garder son cap au nord. Virer sur bâbord l’enverrait vers le danger.",
   "image": "assets/q/c3_cardinales_07.webp",
   "tags": [
    "cardinales"
   ],
   "concept": "card-est-passage"
  },
  {
   "id": "c3_cardinales_08",
   "sectionId": "mod1_sec3",
   "question": "Vous faites route au nord. Vous apercevez cette bouée droit devant. Que faites-vous ?",
   "options": {
    "A": "Je passe indifféremment à droite ou à gauche",
    "B": "Je la laisse à gauche",
    "C": "Je la laisse à droite"
   },
   "correct": "B",
   "explanation": "Losange et noir-jaune-noir : cardinale est, on passe à l’est. Cap au nord, l’est est à droite : on passe à droite de la bouée, donc on la laisse à gauche.",
   "image": "assets/q/c3_cardinales_08.webp",
   "tags": [
    "cardinales"
   ],
   "concept": "card-est-passage",
   "near": [
    "exam_q4_4",
    "q_mardi_11"
   ]
  },
  {
   "id": "c3_cardinales_09",
   "sectionId": "mod1_sec3",
   "question": "Faisant route à l’est, vous apercevez cette bouée droit devant vous. Que faites-vous ?",
   "options": {
    "A": "Je viens à droite",
    "B": "Je viens à gauche",
    "C": "Je viens indifféremment à droite ou à gauche"
   },
   "correct": "A",
   "explanation": "Deux cônes pointe en bas, jaune sur noir : cardinale sud, on passe au sud. Cap à l’est, le sud est à droite : je viens à droite.",
   "image": "assets/q/c3_cardinales_09.webp",
   "tags": [
    "cardinales"
   ],
   "concept": "card-sud-passage"
  },
  {
   "id": "c3_cardinales_10",
   "sectionId": "mod1_sec3",
   "question": "Faisant route au nord, vous apercevez cette bouée droit devant. Que faites-vous ?",
   "options": {
    "A": "Je viens indifféremment à droite ou à gauche",
    "B": "Je viens à droite",
    "C": "Je viens à gauche"
   },
   "correct": "C",
   "explanation": "Sablier (cônes pointe contre pointe) et jaune-noir-jaune : cardinale ouest, on passe à l’ouest. Cap au nord, l’ouest est à gauche : je viens à gauche.",
   "image": "assets/q/c3_cardinales_10.webp",
   "tags": [
    "cardinales"
   ],
   "concept": "card-ouest-passage",
   "near": [
    "exam_q1_2"
   ]
  },
  {
   "id": "c3_cardinales_11",
   "sectionId": "mod1_sec3",
   "question": "Vous faites route au nord-est et apercevez droit devant vous cette bouée dont le voyant a disparu. Que faites-vous ?",
   "options": {
    "A": "Je la laisse à bâbord et conserve mon cap nord-est",
    "B": "Je viens sur bâbord et la laisse sur tribord"
   },
   "correct": "B",
   "explanation": "Sans voyant, on identifie la cardinale par ses couleurs : jaune-noir-jaune = cardinale ouest, le danger est à l’est. Il faut passer à l’ouest : on vient sur bâbord (vers le nord), on laisse la bouée sur tribord, puis on reprend son cap une fois le danger paré.",
   "image": "assets/q/c3_cardinales_11.webp",
   "tags": [
    "cardinales"
   ],
   "concept": "card-couleurs-manoeuvre",
   "near": [
    "var_card-couleurs-manoeuvre_1"
   ]
  },
  {
   "id": "c3_cardinales_12",
   "sectionId": "mod1_sec3",
   "question": "Dans quelle direction par rapport à cette bouée se trouve le danger qu’elle couvre ?",
   "options": {
    "A": "Au nord",
    "B": "À l’est",
    "C": "Au sud",
    "D": "À l’ouest"
   },
   "correct": "D",
   "explanation": "Losange (cônes opposés par la base) et noir-jaune-noir : cardinale est. Elle indique qu’il faut passer à l’est ; le danger se trouve donc à l’ouest de la marque.",
   "image": "assets/q/c3_cardinales_12.webp",
   "tags": [
    "cardinales"
   ],
   "concept": "card-danger-position",
   "near": [
    "var_card-danger-position_1"
   ]
  },
  {
   "id": "c3_cardinales_13",
   "sectionId": "mod1_sec3",
   "question": "Faisant route au sud, vous apercevez cette bouée droit devant vous. Des deux routes A et B, laquelle choisissez-vous ?",
   "options": {
    "A": "La route A",
    "B": "La route B"
   },
   "correct": "B",
   "explanation": "Sablier et jaune-noir-jaune : cardinale ouest, on passe à l’ouest. Cap au sud, l’ouest est à droite : la route B, qui contourne la bouée par la droite, est la bonne.",
   "image": "assets/q/c3_cardinales_13.webp",
   "tags": [
    "cardinales"
   ],
   "concept": "card-ouest-passage",
   "near": [
    "c3_cardinales_03",
    "q_1_3_1"
   ]
  },
  {
   "id": "c3_cardinales_14",
   "sectionId": "mod1_sec3",
   "question": "Venant du nord, vous laissez cette marque :",
   "options": {
    "A": "Sur bâbord",
    "B": "Sur tribord"
   },
   "correct": "B",
   "explanation": "Voyant en losange (cônes opposés par la base) et tourelle noire à bande jaune : cardinale est, on passe à l’est. En venant du nord (cap au sud), l’est est à gauche : on passe à gauche de la marque, qui reste sur tribord.",
   "image": "assets/q/c3_cardinales_14.webp",
   "tags": [
    "cardinales"
   ],
   "concept": "card-est-passage"
  },
  {
   "id": "c3_cardinales_15",
   "sectionId": "mod1_sec3",
   "question": "Quelle est cette marque dont les couleurs sont peu discernables à contre-jour ?",
   "options": {
    "A": "Cardinale nord",
    "B": "Cardinale ouest"
   },
   "correct": "A",
   "explanation": "À contre-jour, seul le voyant se lit : deux cônes pointe en haut, c’est une cardinale nord. Mnémo : pointes en haut = Nord (et le noir est en haut).",
   "image": "assets/q/c3_cardinales_15.webp",
   "tags": [
    "cardinales"
   ],
   "concept": "card-voyants"
  },
  {
   "id": "t_mardi_01",
   "sectionId": "mod1_sec1",
   "question": "Quel est le feu de nuit de cette bouée ?",
   "options": {
    "A": "Feu scintillant vert",
    "B": "Feu vert à 3 éclats",
    "C": "Feu vert à 2+1 éclats",
    "D": "Feu vert à occultations"
   },
   "correct": "C",
   "explanation": "Une marque verte portant une large bande rouge et un voyant conique est une marque de chenal préféré à bâbord (marque tribord modifiée). Son feu est vert à 2 + 1 éclats : 2 éclats groupés suivis d’un éclat isolé, Fl(2+1) G.",
   "image": "assets/q/t_mardi_01.webp",
   "duplicateOf": "c1_balisage_02",
   "tags": [
    "balisage-lateral",
    "feux-balisage"
   ],
   "concept": "pref-feu"
  },
  {
   "id": "t_mardi_02",
   "sectionId": "mod1_sec1",
   "question": "Vous venez du large. Sur quel bord laissez-vous cette tourelle ?",
   "options": {
    "A": "Sur bâbord",
    "B": "Sur tribord"
   },
   "correct": "B",
   "explanation": "Une tourelle verte avec un voyant conique est une marque latérale tribord. En région AISM A (dont la Polynésie française), on la laisse sur tribord en venant du large : vert à droite en rentrant.",
   "image": "assets/q/t_mardi_02.webp",
   "duplicateOf": "c1_balisage_06",
   "tags": [
    "balisage-lateral"
   ],
   "concept": "lat-tribord-entrant"
  },
  {
   "id": "t_mardi_03",
   "sectionId": "mod1_sec1",
   "question": "Vous rentrez au port et apercevez cette bouée droit devant. Que faites-vous ?",
   "options": {
    "A": "Je la laisse à droite",
    "B": "Je la laisse à gauche",
    "C": "Je la laisse indifféremment à droite ou à gauche"
   },
   "correct": "B",
   "explanation": "Rouge avec une bande verte et un voyant cylindrique : marque de chenal préféré à tribord (marque bâbord modifiée). On la traite comme une marque bâbord : en rentrant, on la laisse à gauche, le chenal principal est à tribord.",
   "image": "assets/q/t_mardi_03.webp",
   "duplicateOf": "c1_balisage_11",
   "tags": [
    "balisage-lateral"
   ],
   "concept": "pref-passage"
  },
  {
   "id": "t_mardi_04",
   "sectionId": "mod1_sec2",
   "question": "Comment peut être balisée une zone de baignade ?",
   "options": {
    "A": "Par des bouées coniques jaunes",
    "B": "Par des bouées cylindriques jaunes",
    "C": "Par un collier de bouées sphériques jaunes"
   },
   "correct": "C",
   "explanation": "Une zone de baignade est délimitée par une ligne de petites bouées sphériques jaunes. Les bouées coniques et cylindriques jaunes servent à baliser les chenaux traversiers (tribord et bâbord).",
   "image": "assets/q/t_mardi_04.webp",
   "duplicateOf": "c2_speciales_08",
   "tags": [
    "plages"
   ],
   "concept": "plage-baignade"
  },
  {
   "id": "t_mardi_05",
   "sectionId": "mod1_sec2",
   "question": "Que signifie cette bouée ?",
   "options": {
    "A": "Eaux saines",
    "B": "Danger isolé",
    "C": "Danger nouveau",
    "D": "Zone de tir"
   },
   "correct": "A",
   "explanation": "Les bandes verticales rouges et blanches et le voyant sphérique rouge indiquent une marque d’eaux saines : l’eau est navigable tout autour, elle marque souvent l’atterrissage ou l’axe d’un chenal. Feu blanc isophase, à occultations, 1 éclat long toutes les 10 s ou Mo(A).",
   "image": "assets/q/t_mardi_05.webp",
   "duplicateOf": "c2_speciales_06",
   "tags": [
    "marques-speciales"
   ],
   "concept": "eaux-saines-identifier"
  },
  {
   "id": "t_mardi_06",
   "sectionId": "mod1_sec2",
   "question": "Dans un chenal, vous apercevez ces deux bouées vertes. Qu’indiquent-elles ?",
   "options": {
    "A": "Chenal préféré à tribord",
    "B": "Danger nouveau grave",
    "C": "Marque de zone de pêche"
   },
   "correct": "B",
   "explanation": "Un danger nouveau (épave récente, haut-fond non encore porté sur les cartes) peut être signalé en doublant la marque qui le couvre : deux marques identiques côte à côte. Une épave récente peut aussi être signalée par la bouée d’épave d’urgence, à bandes verticales bleues et jaunes.",
   "image": "assets/q/t_mardi_06.webp",
   "duplicateOf": "c2_speciales_01",
   "tags": [
    "marques-speciales"
   ],
   "concept": "danger-nouveau-doublement"
  },
  {
   "id": "t_mardi_07",
   "sectionId": "mod1_sec2",
   "question": "De nuit, vous apercevez un feu blanc à deux éclats. Qu’indique-t-il ?",
   "options": {
    "A": "Marque de danger isolé",
    "B": "Marque cardinale est",
    "C": "Marque de chenal préféré à tribord"
   },
   "correct": "A",
   "explanation": "Un feu blanc à 2 éclats groupés, Fl(2) W, est le feu de la marque de danger isolé (noire à bande rouge, deux sphères noires). Mnémo : 2 sphères, 2 éclats. La cardinale est montre 3 scintillements, et le chenal préféré un feu rouge ou vert.",
   "image": "assets/q/t_mardi_07.webp",
   "duplicateOf": "c2_speciales_14",
   "tags": [
    "marques-speciales",
    "feux-balisage"
   ],
   "concept": "danger-isole-feu"
  },
  {
   "id": "t_mardi_08",
   "sectionId": "mod1_sec2",
   "question": "Signification de cette bouée :",
   "options": {
    "A": "Danger nouveau",
    "B": "Danger isolé",
    "C": "Eaux saines"
   },
   "correct": "B",
   "explanation": "Noire avec une ou plusieurs bandes rouges et deux sphères noires superposées : marque de danger isolé. Elle est posée sur un danger de faible étendue entouré d’eaux navigables ; on peut passer de tous côtés mais à bonne distance.",
   "image": "assets/q/t_mardi_08.webp",
   "duplicateOf": "c2_speciales_05",
   "tags": [
    "marques-speciales"
   ],
   "concept": "danger-isole-identifier"
  },
  {
   "id": "t_mardi_09",
   "sectionId": "mod1_sec2",
   "question": "Cette marque peut indiquer :",
   "options": {
    "A": "Zone d’exercices",
    "B": "Zone de baignade",
    "C": "Entrée de chenal traversier"
   },
   "correct": "A",
   "explanation": "Une marque jaune avec un voyant en X jaune est une marque spéciale : elle signale une zone ou une particularité (zone d’exercices militaires, câble, émissaire, zone d’aquaculture…), pas un côté de chenal. Une zone de baignade se balise avec un collier de petites sphères jaunes.",
   "image": "assets/q/t_mardi_09.webp",
   "duplicateOf": "c2_speciales_10",
   "tags": [
    "marques-speciales"
   ],
   "concept": "speciale-identifier"
  },
  {
   "id": "t_mardi_10",
   "sectionId": "mod1_sec3",
   "question": "Le nord étant indiqué par la flèche, sur quel bord laissez-vous la bouée ?",
   "options": {
    "A": "Sur bâbord",
    "B": "Sur tribord"
   },
   "correct": "B",
   "explanation": "Deux cônes pointe en bas, jaune sur noir : cardinale sud, il faut passer au sud. Le bateau, au sud de la marque, fait route vers l’ouest : en passant au sud, il laisse la bouée sur tribord.",
   "image": "assets/q/t_mardi_10.webp",
   "duplicateOf": "c3_cardinales_06",
   "tags": [
    "cardinales"
   ],
   "concept": "card-sud-passage"
  },
  {
   "id": "t_mardi_11",
   "sectionId": "mod1_sec3",
   "question": "Faisant route au nord, vous apercevez cette bouée droit devant. Que faites-vous ?",
   "options": {
    "A": "Je viens indifféremment à droite ou à gauche",
    "B": "Je viens à droite",
    "C": "Je viens à gauche"
   },
   "correct": "C",
   "explanation": "Sablier (cônes pointe contre pointe) et jaune-noir-jaune : cardinale ouest, on passe à l’ouest. Cap au nord, l’ouest est à gauche : je viens à gauche.",
   "image": "assets/q/t_mardi_11.webp",
   "duplicateOf": "c3_cardinales_10",
   "tags": [
    "cardinales"
   ],
   "concept": "card-ouest-passage"
  },
  {
   "id": "t_mardi_12",
   "sectionId": "mod1_sec3",
   "question": "Vous faites route à l’est. Vous apercevez cette bouée droit devant vous. Que faites-vous ?",
   "options": {
    "A": "Je viens à droite",
    "B": "Je viens à gauche",
    "C": "Je viens indifféremment à droite ou à gauche"
   },
   "correct": "B",
   "explanation": "Deux cônes pointe en haut : cardinale nord, on passe au nord. Cap à l’est, le nord est à gauche : je viens à gauche.",
   "image": "assets/q/t_mardi_12.webp",
   "duplicateOf": "c3_cardinales_04",
   "tags": [
    "cardinales"
   ],
   "concept": "card-nord-passage"
  },
  {
   "id": "t_mardi_13",
   "sectionId": "mod1_sec3",
   "question": "Vous faites route au nord-est et apercevez droit devant vous cette bouée dont le voyant a disparu. Que faites-vous ?",
   "options": {
    "A": "Je la laisse à bâbord et conserve mon cap nord-est",
    "B": "Je viens sur bâbord et la laisse sur tribord"
   },
   "correct": "B",
   "explanation": "Sans voyant, on identifie la cardinale par ses couleurs : jaune-noir-jaune = cardinale ouest, le danger est à l’est. Il faut passer à l’ouest : on vient sur bâbord (vers le nord), on laisse la bouée sur tribord, puis on reprend son cap une fois le danger paré.",
   "image": "assets/q/t_mardi_13.webp",
   "duplicateOf": "c3_cardinales_11",
   "tags": [
    "cardinales"
   ],
   "concept": "card-couleurs-manoeuvre"
  },
  {
   "id": "t_mardi_14",
   "sectionId": "mod1_sec3",
   "question": "Faisant route au sud, vous apercevez cette bouée droit devant vous. Des deux routes A et B, laquelle choisissez-vous ?",
   "options": {
    "A": "La route A",
    "B": "La route B"
   },
   "correct": "B",
   "explanation": "Sablier et jaune-noir-jaune : cardinale ouest, on passe à l’ouest. Cap au sud, l’ouest est à droite : la route B, qui contourne la bouée par la droite, est la bonne.",
   "image": "assets/q/t_mardi_14.webp",
   "duplicateOf": "c3_cardinales_13",
   "tags": [
    "cardinales"
   ],
   "concept": "card-ouest-passage"
  },
  {
   "id": "t_mardi_15",
   "sectionId": "mod1_sec3",
   "question": "Vous faites route au nord et apercevez cette bouée. Que faites-vous ?",
   "options": {
    "A": "Je reste cap au nord",
    "B": "Je viens sur bâbord"
   },
   "correct": "A",
   "explanation": "Losange (cônes opposés par la base) et noir-jaune-noir : cardinale est, les eaux saines sont à l’est. Le bateau est déjà à l’est de la marque : il peut garder son cap au nord. Virer sur bâbord l’enverrait vers le danger.",
   "image": "assets/q/t_mardi_15.webp",
   "duplicateOf": "c3_cardinales_07",
   "tags": [
    "cardinales"
   ],
   "concept": "card-est-passage"
  },
  {
   "id": "c4_feux_01",
   "sectionId": "mod2_sec1",
   "question": "Vous voyez ces feux. Qu’indiquent-ils ?",
   "options": {
    "A": "Chalutier jetant son chalut",
    "B": "Remorqueur vu de tribord",
    "C": "Obstruction, passe libre sur bâbord"
   },
   "correct": "B",
   "explanation": "Plusieurs feux blancs de tête de mât superposés signalent un navire qui remorque (2 si la remorque fait 200 m ou moins, 3 au-delà). Le feu vert seul indique qu’on le voit par son tribord.",
   "image": "assets/q/c4_feux_01.webp",
   "tags": [
    "remorquage",
    "feux-navires"
   ],
   "concept": "remorq-feux-identifier"
  },
  {
   "id": "c4_feux_02",
   "sectionId": "mod2_sec1",
   "question": "Au minimum, quel feu doit montrer, de nuit, une petite embarcation à moteur (moins de 7 m, 7 nœuds au plus) ?",
   "options": {
    "A": "Un feu jaune clignotant",
    "B": "Un feu blanc",
    "C": "Un feu rouge"
   },
   "correct": "B",
   "explanation": "Un navire à moteur de moins de 7 m dont la vitesse maximale ne dépasse pas 7 nœuds peut se contenter d’un feu blanc visible sur tout l’horizon. Au-delà, il lui faut en plus ses feux de côté (sous 12 m, le feu blanc visible sur tout l’horizon peut remplacer les feux de tête de mât et de poupe).",
   "tags": [
    "feux-navires"
   ],
   "concept": "feux-moteur-moins-7m",
   "near": [
    "c4_feux_06",
    "exam_q3_19"
   ]
  },
  {
   "id": "c4_feux_03",
   "sectionId": "mod3_sec3",
   "question": "Sur l’avant tribord, vous voyez ces feux de navire. Quelle route suivez-vous ?",
   "options": {
    "A": "La route A",
    "B": "La route B"
   },
   "correct": "A",
   "explanation": "Vous voyez son feu vert : il vous présente son flanc tribord et s’éloigne vers votre droite. Vos routes ne se croisent pas (on se croise vert contre vert). Vous maintenez cap et vitesse (route A) en surveillant son relèvement ; venir sur tribord (route B) vous ferait au contraire couper sa route.",
   "image": "assets/q/c4_feux_03.webp",
   "tags": [
    "regles-barre"
   ],
   "concept": "feux-vert-tribord"
  },
  {
   "id": "c4_feux_04",
   "sectionId": "mod3_sec3",
   "question": "Quelle route suivez-vous face à ces feux de navire ?",
   "options": {
    "A": "La route A",
    "B": "La route B"
   },
   "correct": "B",
   "explanation": "Deux feux de mât (obligatoires à partir de 50 m, facultatifs en dessous) et son feu rouge : vous voyez son bâbord, il vous a sur sa gauche, c’est à vous de manœuvrer. On vient franchement sur tribord pour passer derrière lui (route B). « Rouge en vue, je m’écarte à droite. »",
   "image": "assets/q/c4_feux_04.webp",
   "tags": [
    "regles-barre"
   ],
   "concept": "regle-routes-croisees"
  },
  {
   "id": "c4_feux_05",
   "sectionId": "mod2_sec1",
   "question": "Signification de ce groupe de feux :",
   "options": {
    "A": "Pousseur de plus de 50 mètres et son poussé vus par le travers bâbord",
    "B": "Remorqueur, avec remorque de plus de 200 mètres, remorquant à couple un grand navire, vus par l’avant",
    "C": "Remorqueur de plus de 50 mètres, remorquant à couple un grand navire, vus par l’avant"
   },
   "correct": "C",
   "explanation": "Deux feux blancs superposés = feux de tête de mât d’un remorqueur (remorquage à couple, ou remorque de 200 m ou moins), et le feu blanc plus haut = feu de mât arrière d’un navire de 50 m ou plus. Les deux paires vert/rouge côte à côte (vert à gauche, rouge à droite) montrent deux navires à couple vus de l’avant. Une remorque de plus de 200 m est impossible dans un remorquage à couple : la réponse B est incohérente.",
   "image": "assets/q/c4_feux_05.webp",
   "tags": [
    "remorquage",
    "feux-navires"
   ],
   "concept": "remorq-couple"
  },
  {
   "id": "c4_feux_06",
   "sectionId": "mod2_sec1",
   "question": "Un navire à moteur de moins de 7 mètres, dont la vitesse ne dépasse pas 7 nœuds, peut ne montrer, la nuit, que :",
   "options": {
    "A": "Des feux de côté, rouge et vert",
    "B": "Un feu blanc visible sur tout l’horizon",
    "C": "Un feu de poupe"
   },
   "correct": "B",
   "explanation": "Règle 23 : un navire à moteur de moins de 7 m dont la vitesse maximale ne dépasse pas 7 nœuds peut remplacer ses feux par un seul feu blanc visible sur tout l’horizon (il montre si possible aussi ses feux de côté).",
   "image": "assets/q/c4_feux_06.webp",
   "tags": [
    "feux-navires"
   ],
   "concept": "feux-moteur-moins-7m",
   "near": [
    "c4_feux_02",
    "exam_q3_19"
   ]
  },
  {
   "id": "c4_feux_07",
   "sectionId": "mod2_sec1",
   "question": "Le feu que vous voyez indique le navire suivant :",
   "options": {
    "A": "Navire à moteur de moins de 20 mètres, vu de l’avant",
    "B": "Voilier de moins de 20 mètres, vu de l’avant"
   },
   "correct": "B",
   "explanation": "Un feu bicolore vert/rouge seul, sans feu blanc de tête de mât, est le feu d’un voilier de moins de 20 m vu de face. Un navire à moteur montrerait en plus un feu blanc au-dessus (feu de tête de mât, ou feu visible sur tout l’horizon s’il mesure moins de 12 m).",
   "figure": {
    "fig": "lights",
    "rows": "GR",
    "view": "vu de l’avant"
   },
   "tags": [
    "feux-navires"
   ],
   "concept": "feux-voilier-face"
  },
  {
   "id": "c4_feux_08",
   "sectionId": "mod2_sec1",
   "question": "Cette marque est montrée par :",
   "options": {
    "A": "Un chalutier dont le chalut est retenu par un obstacle",
    "B": "Un navire non maître de sa manœuvre",
    "C": "Un navire remorqué, avec remorque de plus de 200 mètres"
   },
   "correct": "C",
   "explanation": "Deux cônes réunis par la base (bicône, « losange ») : remorquage dont la longueur dépasse 200 m. Le remorqueur comme le navire remorqué montrent cette marque.",
   "image": "assets/q/c4_feux_08.webp",
   "tags": [
    "remorquage",
    "marques-jour"
   ],
   "concept": "remorq-bicone",
   "near": [
    "ext_ves_20"
   ]
  },
  {
   "id": "c4_feux_09",
   "sectionId": "mod2_sec1",
   "question": "Ce navire dont vous apercevez les feux :",
   "options": {
    "A": "Fait une route directement opposée à la vôtre",
    "B": "Est en action de pêche",
    "C": "Fait plus de 50 mètres",
    "D": "Fait moins de 50 mètres"
   },
   "correct": "D",
   "explanation": "Un seul feu blanc de tête de mât : navire à moteur de moins de 50 m (au-delà, il en faut deux). Le feu vert seul montre qu’on le voit par tribord, il ne vient donc pas droit sur vous.",
   "image": "assets/q/c4_feux_09.webp",
   "tags": [
    "feux-navires"
   ],
   "concept": "feux-mat-longueur"
  },
  {
   "id": "c4_feux_10",
   "sectionId": "mod2_sec1",
   "question": "De nuit, vous voyez défiler ces feux. Il s’agit :",
   "options": {
    "A": "D’un pêcheur jetant ses filets",
    "B": "D’un navire à capacité de manœuvre restreinte, avec erre, vu par bâbord",
    "C": "D’un remorqueur de moins de 50 mètres, en action de remorquage, et de son remorqué, vus par bâbord"
   },
   "correct": "C",
   "explanation": "Deux feux blancs superposés = remorqueur (remorque de 200 m ou moins), pas de feu de tête de mât arrière plus haut, donc moins de 50 m. Les deux feux rouges sont les feux de côté bâbord du remorqueur et du remorqué.",
   "image": "assets/q/c4_feux_10.webp",
   "tags": [
    "remorquage",
    "feux-navires"
   ],
   "concept": "remorq-feux-identifier"
  },
  {
   "id": "c5_peche_01",
   "sectionId": "mod2_sec2",
   "question": "En mer, vous voyez un feu rouge sur un feu blanc. De quoi s’agit-il ?",
   "options": {
    "A": "D’un bateau-pilote",
    "B": "D’un navire de pêche",
    "C": "D’un navire échoué"
   },
   "correct": "B",
   "explanation": "Rouge sur blanc = navire en pêche autre que chalutier (« Rouge sur blanc, pêche autrement »). À ne pas confondre avec blanc sur rouge, le bateau-pilote.",
   "image": "assets/q/c5_peche_01.webp",
   "tags": [
    "peche",
    "feux-navires"
   ],
   "concept": "peche-rouge-sur-blanc",
   "near": [
    "exam_q1_11",
    "ext_ves_16"
   ]
  },
  {
   "id": "c5_peche_02",
   "sectionId": "mod2_sec2",
   "question": "Vous voyez sur votre bâbord :",
   "options": {
    "A": "Un navire en action de pêche",
    "B": "Un navire non maître de sa manœuvre",
    "C": "Un navire remorquant un autre, invisible sur la photo",
    "D": "Un navire à capacité de manœuvre restreinte"
   },
   "correct": "A",
   "explanation": "De jour, deux cônes réunis par la pointe (« sablier ») signalent un navire en action de pêche. Non maître de sa manœuvre = deux boules ; manœuvre restreinte = boule-bicône-boule.",
   "image": "assets/q/c5_peche_02.webp",
   "tags": [
    "peche",
    "marques-jour"
   ],
   "concept": "peche-marque-jour"
  },
  {
   "id": "c5_peche_03",
   "sectionId": "mod2_sec2",
   "question": "Ce pavillon peut être hissé à bord de :",
   "options": {
    "A": "Tous les navires battant pavillon français",
    "B": "Chalutiers pêchant en couple (pêche au bœuf)",
    "C": "Navires transportant des matières dangereuses",
    "D": "Navires demandant un pilote"
   },
   "correct": "B",
   "explanation": "Pavillon T du Code international des signaux (rouge-blanc-bleu, rouge côté mât : l’inverse du pavillon national) : « Ne me gênez pas, je fais du chalutage jumelé », c’est-à-dire une pêche en couple (au bœuf). Attention, le rouge est côté mât : ce n’est pas le pavillon national. Matières dangereuses = pavillon B rouge ; demande de pilote = pavillon G.",
   "figure": {
    "fig": "flag",
    "flag": "T"
   },
   "tags": [
    "peche",
    "pavillons"
   ],
   "concept": "peche-couple-pavillon"
  },
  {
   "id": "c5_peche_04",
   "sectionId": "mod2_sec2",
   "question": "Ce navire de pêche indique :",
   "options": {
    "A": "Que son engin de pêche est déployé sur plus de 150 m",
    "B": "Qu’il hisse son chalut",
    "C": "Qu’il est en train de jeter son chalut"
   },
   "correct": "C",
   "explanation": "Vert sur blanc = chalutier en pêche. Les deux feux blancs superposés supplémentaires indiquent qu’il file (jette) son chalut ; blanc sur rouge = il le relève, rouge sur rouge = chalut croché.",
   "image": "assets/q/c5_peche_04.webp",
   "tags": [
    "peche",
    "feux-navires"
   ],
   "concept": "chalut-filage"
  },
  {
   "id": "c5_peche_05",
   "sectionId": "mod2_sec2",
   "question": "Ce navire montre de jour :",
   "options": {
    "A": "Une boule noire",
    "B": "Deux cônes opposés par la base",
    "C": "Deux cônes opposés par la pointe"
   },
   "correct": "C",
   "explanation": "Les feux vert sur blanc identifient un chalutier en pêche. Tout navire en action de pêche montre de jour deux cônes réunis par la pointe.",
   "image": "assets/q/c5_peche_05.webp",
   "tags": [
    "peche",
    "marques-jour"
   ],
   "concept": "peche-marque-jour"
  },
  {
   "id": "c5_peche_06",
   "sectionId": "mod2_sec2",
   "question": "Les feux rouges de ce chalutier indiquent :",
   "options": {
    "A": "Qu’il hisse son chalut",
    "B": "Qu’il est non maître de sa manœuvre",
    "C": "Que son chalut est retenu par un obstacle"
   },
   "correct": "C",
   "explanation": "En plus de vert sur blanc, deux feux rouges superposés signalent un chalutier dont le chalut est croché sur une obstruction (feux supplémentaires des chalutiers pêchant en flottille).",
   "image": "assets/q/c5_peche_06.webp",
   "tags": [
    "peche",
    "feux-navires"
   ],
   "concept": "chalut-croche",
   "near": [
    "var_chalut-croche_1"
   ]
  },
  {
   "id": "c5_peche_07",
   "sectionId": "mod2_sec2",
   "question": "Ce chalutier :",
   "options": {
    "A": "Est en train de jeter son chalut",
    "B": "Est gêné par son chalut",
    "C": "Hisse son chalut"
   },
   "correct": "C",
   "explanation": "Vert sur blanc = chalutier en pêche ; le feu blanc au-dessus d’un feu rouge en plus indique qu’il relève (hisse) son chalut. Deux blancs = il le file, deux rouges = chalut croché.",
   "image": "assets/q/c5_peche_07.webp",
   "tags": [
    "peche",
    "feux-navires"
   ],
   "concept": "chalut-virage"
  },
  {
   "id": "c5_peche_08",
   "sectionId": "mod2_sec2",
   "question": "Il s’agit :",
   "options": {
    "A": "D’un chalutier",
    "B": "D’un pêcheur (autre que chalutier)",
    "C": "D’un voilier"
   },
   "correct": "A",
   "explanation": "Vert sur blanc = chalutier en pêche (« Vert sur blanc, chalut traînant »), ici vu de l’avant avec ses feux de côté. Un pêcheur autre que chalutier montrerait rouge sur blanc.",
   "image": "assets/q/c5_peche_08.webp",
   "tags": [
    "peche",
    "feux-navires"
   ],
   "concept": "chalutier-vert-sur-blanc"
  },
  {
   "id": "c5_peche_09",
   "sectionId": "mod2_sec2",
   "question": "Quels feux doit montrer un chalutier qui rentre au port après la pêche ?",
   "options": {
    "A": "Vert sur blanc + feux de route",
    "B": "Feu blanc de tête de mât + feux de route"
   },
   "correct": "B",
   "explanation": "Les feux de pêche ne se montrent qu’en action de pêche. En route vers le port, le chalutier est un simple navire à moteur : feu de tête de mât, feux de côté et feu de poupe.",
   "image": "assets/q/c5_peche_09.webp",
   "tags": [
    "peche",
    "feux-navires"
   ],
   "concept": "peche-hors-action"
  },
  {
   "id": "c6_particuliers_01",
   "sectionId": "mod2_sec3",
   "question": "Vous croisez ce navire. De quel côté allez-vous passer ?",
   "options": {
    "A": "D’un côté ou de l’autre, indifféremment",
    "B": "Du côté des 2 feux verts verticaux",
    "C": "Du côté des 2 feux rouges verticaux"
   },
   "correct": "B",
   "explanation": "Rouge-blanc-rouge = navire à capacité de manœuvre restreinte (ici une drague). Les deux feux rouges superposés marquent le côté obstrué, les deux feux verts le côté où l’on peut passer.",
   "image": "assets/q/c6_particuliers_01.webp",
   "tags": [
    "navires-speciaux"
   ],
   "concept": "ram-cote-passage",
   "near": [
    "exam_q3_15",
    "gen_mod2_sec3_3"
   ]
  },
  {
   "id": "c6_particuliers_02",
   "sectionId": "mod2_sec3",
   "question": "Le navire dont vous voyez les feux montrerait, de jour :",
   "options": {
    "A": "2 cônes opposés par la pointe",
    "B": "2 boules sur un même plan vertical",
    "C": "2 cônes opposés par la base",
    "D": "Une boule, un bicône, une boule, sur un même plan vertical"
   },
   "correct": "D",
   "explanation": "Rouge-blanc-rouge superposés = navire à capacité de manœuvre restreinte. Sa marque de jour correspondante est boule-bicône-boule.",
   "image": "assets/q/c6_particuliers_02.webp",
   "tags": [
    "navires-speciaux",
    "marques-jour"
   ],
   "concept": "ram-marque-jour"
  },
  {
   "id": "c6_particuliers_03",
   "sectionId": "mod2_sec3",
   "question": "Les marques qu’on voit signalent :",
   "options": {
    "A": "Un navire non maître de sa manœuvre",
    "B": "Une obstruction du chenal sur bâbord",
    "C": "Une obstruction du chenal sur tribord",
    "D": "Un navire à capacité de manœuvre restreinte"
   },
   "correct": "D",
   "explanation": "Boule-bicône-boule = navire à capacité de manœuvre restreinte (la nuit : rouge-blanc-rouge). Une obstruction se signalerait en plus par deux boules superposées du côté gêné et deux losanges du côté où l’on peut passer.",
   "image": "assets/q/c6_particuliers_03.webp",
   "tags": [
    "navires-speciaux",
    "marques-jour"
   ],
   "concept": "ram-marque-jour"
  },
  {
   "id": "c6_particuliers_04",
   "sectionId": "mod2_sec3",
   "question": "Ce groupe de feux signale :",
   "options": {
    "A": "Un navire autre que chalutier, de plus de 50 mètres, en pêche, avec erre, vu par tribord",
    "B": "Un navire à capacité de manœuvre restreinte de plus de 50 mètres, avec erre, vu par tribord"
   },
   "correct": "B",
   "explanation": "Rouge-blanc-rouge = capacité de manœuvre restreinte ; deux feux de tête de mât : on retient 50 m ou plus (le second feu est obligatoire à partir de 50 m) ; feu vert = vu par tribord, et les feux de route montrent qu’il fait route. Un pêcheur montrerait rouge sur blanc.",
   "image": "assets/q/c6_particuliers_04.webp",
   "tags": [
    "navires-speciaux",
    "feux-navires"
   ],
   "concept": "ram-feux-taille-aspect"
  },
  {
   "id": "c6_particuliers_05",
   "sectionId": "mod2_sec3",
   "question": "Ce navire dont vous apercevez les feux est :",
   "options": {
    "A": "Un chalutier de moins de 50 mètres, en pêche, filant son chalut, vu de l’avant",
    "B": "Un navire effectuant du déminage, de moins de 50 mètres, avec erre, vu de l’avant"
   },
   "correct": "B",
   "explanation": "Trois feux verts en triangle (un en tête de mât, un à chaque bout de vergue) signalent un navire en opération de déminage : danger à moins de 1 000 m. Un seul feu de mât = moins de 50 m, vert à gauche et rouge à droite = vu de l’avant.",
   "image": "assets/q/c6_particuliers_05.webp",
   "tags": [
    "navires-speciaux"
   ],
   "concept": "deminage"
  },
  {
   "id": "c6_particuliers_06",
   "sectionId": "mod2_sec3",
   "question": "Ces différentes marques indiquent :",
   "options": {
    "A": "Une obstruction sur bâbord",
    "B": "Une difficulté de changement de cap",
    "C": "Une obstruction sur tribord"
   },
   "correct": "B",
   "explanation": "Le remorqueur montre boule-bicône-boule (capacité de manœuvre restreinte) : son remorquage l’empêche de s’écarter de sa route. Les bicônes sur le remorqueur et la barge signalent en plus une remorque de plus de 200 m.",
   "image": "assets/q/c6_particuliers_06.webp",
   "tags": [
    "remorquage",
    "navires-speciaux"
   ],
   "concept": "remorq-ram"
  },
  {
   "id": "c6_particuliers_07",
   "sectionId": "mod2_sec3",
   "question": "Par quels feux ces marques sont-elles remplacées la nuit ?",
   "options": {
    "A": "3 feux rouges superposés",
    "B": "Un feu rouge sur un feu blanc",
    "C": "Un feu vert sur un feu blanc",
    "D": "Des feux rouge-blanc-rouge superposés"
   },
   "correct": "D",
   "explanation": "Boule-bicône-boule (manœuvre restreinte) correspond la nuit à rouge-blanc-rouge : la boule devient rouge, le bicône devient blanc.",
   "image": "assets/q/c6_particuliers_07.webp",
   "tags": [
    "navires-speciaux",
    "feux-navires"
   ],
   "concept": "ram-feux-identifier"
  },
  {
   "id": "c6_particuliers_08",
   "sectionId": "mod2_sec3",
   "question": "Les feux de ce navire indiquent la présence d’un :",
   "options": {
    "A": "Navire échoué, de moins de 50 m",
    "B": "Navire au mouillage de plus de 50 m",
    "C": "Navire à capacité de manœuvre restreinte de moins de 50 m",
    "D": "Navire à capacité de manœuvre restreinte de plus de 50 m, vu par bâbord"
   },
   "correct": "D",
   "explanation": "Rouge-blanc-rouge = capacité de manœuvre restreinte ; deux feux de tête de mât : on retient 50 m ou plus (le second feu est obligatoire à partir de 50 m) ; le feu rouge de côté indique qu’on le voit par bâbord. Un navire échoué montrerait deux feux rouges.",
   "image": "assets/q/c6_particuliers_08.webp",
   "tags": [
    "navires-speciaux",
    "feux-navires"
   ],
   "concept": "ram-feux-taille-aspect"
  },
  {
   "id": "c6_particuliers_09",
   "sectionId": "mod2_sec3",
   "question": "Le navire dont vous apercevez les feux montrerait, de jour :",
   "options": {
    "A": "2 cônes opposés par la pointe",
    "B": "2 boules sur un même plan vertical",
    "C": "3 boules disposées en triangle"
   },
   "correct": "C",
   "explanation": "Les trois feux verts en triangle d’un navire en opération de déminage sont remplacés de jour par trois boules noires disposées de la même façon.",
   "image": "assets/q/c6_particuliers_09.webp",
   "tags": [
    "navires-speciaux"
   ],
   "concept": "deminage"
  },
  {
   "id": "c6_particuliers_10",
   "sectionId": "mod2_sec3",
   "question": "Quel est ce navire ?",
   "options": {
    "A": "Bateau-pilote avec erre",
    "B": "Chalutier avec erre",
    "C": "Navire de pêche autre que chalutier, avec erre"
   },
   "correct": "A",
   "explanation": "Blanc sur rouge = bateau-pilote en service (« Blanc sur rouge, pilote à bord »). Le feu rouge de côté montre qu’il fait route et qu’on le voit par bâbord.",
   "image": "assets/q/c6_particuliers_10.webp",
   "tags": [
    "navires-speciaux",
    "feux-navires"
   ],
   "concept": "pilote-feux",
   "near": [
    "ext_feux_115",
    "q_mercredi_1"
   ]
  },
  {
   "id": "c6_particuliers_11",
   "sectionId": "mod2_sec1",
   "question": "Ces deux feux blancs signalent :",
   "options": {
    "A": "Un navire au mouillage, vu par le travers",
    "B": "Un navire échoué, vu par le travers"
   },
   "correct": "A",
   "explanation": "Un navire de 50 m ou plus au mouillage montre deux feux blancs visibles sur tout l’horizon, celui de l’avant plus haut que celui de l’arrière. Échoué, il montrerait en plus deux feux rouges superposés.",
   "image": "assets/q/c6_particuliers_11.webp",
   "tags": [
    "feux-navires"
   ],
   "concept": "feux-mouillage-50m-plus"
  },
  {
   "id": "c6_particuliers_12",
   "sectionId": "mod2_sec3",
   "question": "Dans un port, ce navire montre un pavillon rouge. Quelle est sa signification ?",
   "options": {
    "A": "J’ai un scaphandrier en plongée",
    "B": "Navire transbordant des matières dangereuses",
    "C": "J’ai besoin de secours immédiat"
   },
   "correct": "B",
   "explanation": "Le pavillon B, rouge, signifie « je charge, décharge ou transporte des marchandises dangereuses ». Le scaphandrier est signalé par le pavillon A (blanc et bleu).",
   "image": "assets/q/c6_particuliers_12.webp",
   "tags": [
    "pavillons",
    "navires-speciaux"
   ],
   "concept": "matieres-dangereuses"
  },
  {
   "id": "c6_particuliers_13",
   "sectionId": "mod2_sec3",
   "question": "Dans un chenal, la nuit, ces quatre feux peuvent indiquer :",
   "options": {
    "A": "Un navire pêchant à la grande senne",
    "B": "Un navire non maître de sa manœuvre, au mouillage",
    "C": "Un navire handicapé par son tirant d’eau, avec erre, vu de l’arrière",
    "D": "Une drague au mouillage, avec obstruction sur bâbord, vue par bâbord"
   },
   "correct": "C",
   "explanation": "Trois feux rouges superposés = navire handicapé par son tirant d’eau (de jour : un cylindre). Vu de l’arrière, on ne voit en plus que son feu de poupe blanc.",
   "image": "assets/q/c6_particuliers_13.webp",
   "tags": [
    "navires-speciaux",
    "feux-navires"
   ],
   "concept": "tirant-eau-feux"
  },
  {
   "id": "c6_particuliers_14",
   "sectionId": "mod2_sec3",
   "question": "De quoi s’agit-il ?",
   "options": {
    "A": "Un navire transportant des matières dangereuses",
    "B": "Un navire non maître de sa manœuvre, avec erre",
    "C": "Un chalutier avec son chalut accroché"
   },
   "correct": "B",
   "explanation": "Deux feux rouges superposés = navire non maître de sa manœuvre (de jour : deux boules). Avec erre, il montre aussi ses feux de côté et de poupe ; ici le feu de poupe blanc. Un chalutier croché garderait vert sur blanc au-dessus.",
   "image": "assets/q/c6_particuliers_14.webp",
   "tags": [
    "navires-speciaux",
    "feux-navires"
   ],
   "concept": "nuc-feux",
   "near": [
    "var_nuc-boules_3"
   ]
  },
  {
   "id": "c6_particuliers_15",
   "sectionId": "mod2_sec1",
   "question": "Quel feu doit porter, de nuit, un navire de moins de 50 mètres au mouillage ?",
   "options": {
    "A": "Un feu blanc",
    "B": "Un feu rouge",
    "C": "Aucun feu"
   },
   "correct": "A",
   "explanation": "Au mouillage, un navire de moins de 50 m montre un feu blanc visible sur tout l’horizon, là où il est le plus visible. Seuls les navires de moins de 7 m mouillés hors d’un chenal, d’un mouillage fréquenté ou des routes habituellement suivies par d’autres navires en sont dispensés.",
   "tags": [
    "feux-navires"
   ],
   "concept": "feux-mouillage-moins-50m"
  },
  {
   "id": "c6_particuliers_16",
   "sectionId": "mod2_sec3",
   "question": "De nuit, vous voyez un navire montrant 3 feux rouges verticaux plus ses feux de route. De quoi s’agit-il ?",
   "options": {
    "A": "Un navire échoué",
    "B": "Un navire handicapé par son tirant d’eau",
    "C": "Un navire de pêche ayant son chalut accroché"
   },
   "correct": "B",
   "explanation": "Trois feux rouges superposés en plus des feux de route = navire handicapé par son tirant d’eau (de jour : un cylindre noir). Un navire échoué montre deux rouges plus ses feux de mouillage.",
   "tags": [
    "navires-speciaux",
    "feux-navires"
   ],
   "concept": "tirant-eau-feux",
   "near": [
    "exam_q4_8",
    "q_mercredi_3"
   ]
  },
  {
   "id": "c6_particuliers_17",
   "sectionId": "mod2_sec3",
   "question": "Ce navire est :",
   "options": {
    "A": "Un remorqueur avec remorque de plus de 200 mètres",
    "B": "Un navire handicapé par son tirant d’eau",
    "C": "Un navire au mouillage"
   },
   "correct": "B",
   "explanation": "Le cylindre noir hissé au mât est la marque de jour du navire handicapé par son tirant d’eau (la nuit : trois feux rouges superposés). Le grand pétrolier est typique de ce cas.",
   "image": "assets/q/c6_particuliers_17.webp",
   "tags": [
    "navires-speciaux",
    "marques-jour"
   ],
   "concept": "tirant-eau-cylindre",
   "near": [
    "exam_q2_20",
    "q_mercredi_3"
   ]
  },
  {
   "id": "c6_particuliers_18",
   "sectionId": "mod2_sec3",
   "question": "Tout près des rochers, ce petit navire signale qu’il est :",
   "options": {
    "A": "Échoué",
    "B": "Au mouillage",
    "C": "Non maître de sa manœuvre",
    "D": "À capacité de manœuvre restreinte"
   },
   "correct": "C",
   "explanation": "Deux boules noires superposées = navire non maître de sa manœuvre (la nuit : deux feux rouges). Échoué, il en montrerait trois ; au mouillage, une seule.",
   "image": "assets/q/c6_particuliers_18.webp",
   "tags": [
    "navires-speciaux",
    "marques-jour"
   ],
   "concept": "nuc-boules",
   "near": [
    "q_mercredi_2"
   ]
  },
  {
   "id": "c6_particuliers_19",
   "sectionId": "mod2_sec3",
   "question": "Quel est ce navire ?",
   "options": {
    "A": "Navire échoué",
    "B": "Remorqueur en attente de convoi",
    "C": "Navire mouillé"
   },
   "correct": "A",
   "explanation": "Trois boules noires superposées = navire échoué (la nuit : deux feux rouges superposés plus les feux de mouillage). Moyen mnémotechnique : 1 boule mouillé, 2 boules non maître, 3 boules échoué.",
   "image": "assets/q/c6_particuliers_19.webp",
   "tags": [
    "navires-speciaux",
    "marques-jour"
   ],
   "concept": "echoue-boules"
  },
  {
   "id": "c6_particuliers_20",
   "sectionId": "mod2_sec3",
   "question": "Quel est ce navire ?",
   "options": {
    "A": "Un pêcheur vu par l’avant",
    "B": "Un navire à capacité de manœuvre restreinte vu par l’avant",
    "C": "Un navire non maître de sa manœuvre vu par l’avant"
   },
   "correct": "B",
   "explanation": "Rouge-blanc-rouge superposés = capacité de manœuvre restreinte ; au-dessus, son feu blanc de tête de mât, et vert à gauche/rouge à droite = vu de l’avant, en route.",
   "image": "assets/q/c6_particuliers_20.webp",
   "tags": [
    "navires-speciaux",
    "feux-navires"
   ],
   "concept": "ram-feux-identifier"
  },
  {
   "id": "t_mercredi_01",
   "sectionId": "mod2_sec1",
   "question": "Signification de ce groupe de feux :",
   "options": {
    "A": "Pousseur de plus de 50 mètres et son poussé vus par le travers bâbord",
    "B": "Remorqueur, avec remorque de plus de 200 mètres, remorquant à couple un grand navire, vus par l’avant",
    "C": "Remorqueur de plus de 50 mètres, remorquant à couple un grand navire, vus par l’avant"
   },
   "correct": "C",
   "explanation": "Deux feux blancs superposés = remorquage à couple (ou en poussant), qui impose toujours deux feux de tête de mât superposés, et le feu blanc plus haut = feu de mât arrière d’un navire de 50 m ou plus. Les deux paires vert/rouge (vert à gauche, rouge à droite) montrent les deux navires vus de l’avant. Une remorque de plus de 200 m est impossible dans un remorquage à couple : la réponse B est incohérente.",
   "image": "assets/q/t_mercredi_01.webp",
   "duplicateOf": "c4_feux_05",
   "tags": [
    "remorquage",
    "feux-navires"
   ],
   "concept": "remorq-couple"
  },
  {
   "id": "t_mercredi_02",
   "sectionId": "mod2_sec1",
   "question": "Vous voyez ces feux. Qu’indiquent-ils ?",
   "options": {
    "A": "Chalutier jetant son chalut",
    "B": "Remorqueur vu de tribord",
    "C": "Obstruction, passe libre sur bâbord"
   },
   "correct": "B",
   "explanation": "Plusieurs feux blancs de tête de mât superposés signalent un navire qui remorque (2 si la remorque fait 200 m ou moins, 3 au-delà). Le feu vert seul indique qu’on le voit par son tribord.",
   "image": "assets/q/t_mercredi_02.webp",
   "duplicateOf": "c4_feux_01",
   "tags": [
    "remorquage",
    "feux-navires"
   ],
   "concept": "remorq-feux-identifier"
  },
  {
   "id": "t_mercredi_03",
   "sectionId": "mod2_sec2",
   "question": "Ce navire de pêche indique :",
   "options": {
    "A": "Que son engin de pêche est déployé sur plus de 150 m",
    "B": "Qu’il hisse son chalut",
    "C": "Qu’il est en train de jeter son chalut"
   },
   "correct": "C",
   "explanation": "Vert sur blanc = chalutier en pêche. Les deux feux blancs superposés supplémentaires indiquent qu’il file (jette) son chalut ; blanc sur rouge = il le relève, rouge sur rouge = chalut croché.",
   "image": "assets/q/t_mercredi_03.webp",
   "duplicateOf": "c5_peche_04",
   "tags": [
    "peche",
    "feux-navires"
   ],
   "concept": "chalut-filage"
  },
  {
   "id": "t_mercredi_04",
   "sectionId": "mod2_sec2",
   "question": "Ce chalutier :",
   "options": {
    "A": "Est en train de jeter son chalut",
    "B": "Est gêné par son chalut",
    "C": "Hisse son chalut"
   },
   "correct": "C",
   "explanation": "Vert sur blanc = chalutier en pêche ; le feu blanc au-dessus d’un feu rouge en plus indique qu’il relève (hisse) son chalut. Deux blancs = il le file, deux rouges = chalut croché.",
   "image": "assets/q/t_mercredi_04.webp",
   "duplicateOf": "c5_peche_07",
   "tags": [
    "peche",
    "feux-navires"
   ],
   "concept": "chalut-virage"
  },
  {
   "id": "t_mercredi_05",
   "sectionId": "mod2_sec2",
   "question": "En mer, vous voyez un feu rouge sur un feu blanc. De quoi s’agit-il ?",
   "options": {
    "A": "D’un bateau-pilote",
    "B": "D’un navire de pêche",
    "C": "D’un navire échoué"
   },
   "correct": "B",
   "explanation": "Rouge sur blanc = navire en pêche autre que chalutier (« Rouge sur blanc, pêche autrement »). À ne pas confondre avec blanc sur rouge, le bateau-pilote.",
   "image": "assets/q/t_mercredi_05.webp",
   "duplicateOf": "c5_peche_01",
   "tags": [
    "peche",
    "feux-navires"
   ],
   "concept": "peche-rouge-sur-blanc"
  },
  {
   "id": "t_mercredi_06",
   "sectionId": "mod2_sec3",
   "question": "Vous croisez ce navire. De quel côté allez-vous passer ?",
   "options": {
    "A": "D’un côté ou de l’autre, indifféremment",
    "B": "Du côté des 2 feux verts verticaux",
    "C": "Du côté des 2 feux rouges verticaux"
   },
   "correct": "B",
   "explanation": "Rouge-blanc-rouge = navire à capacité de manœuvre restreinte (ici une drague). Les deux feux rouges superposés marquent le côté obstrué, les deux feux verts le côté où l’on peut passer.",
   "image": "assets/q/t_mercredi_06.webp",
   "duplicateOf": "c6_particuliers_01",
   "tags": [
    "navires-speciaux"
   ],
   "concept": "ram-cote-passage"
  },
  {
   "id": "t_mercredi_07",
   "sectionId": "mod2_sec3",
   "question": "Ce navire dont vous apercevez les feux est :",
   "options": {
    "A": "Un chalutier de moins de 50 mètres, en pêche, filant son chalut, vu de l’avant",
    "B": "Un navire effectuant du déminage, de moins de 50 mètres, avec erre, vu de l’avant"
   },
   "correct": "B",
   "explanation": "Trois feux verts en triangle (un en tête de mât, un à chaque bout de vergue) signalent un navire en opération de déminage : danger à moins de 1 000 m. Un seul feu de mât = moins de 50 m, vert à gauche et rouge à droite = vu de l’avant.",
   "image": "assets/q/t_mercredi_07.webp",
   "duplicateOf": "c6_particuliers_05",
   "tags": [
    "navires-speciaux"
   ],
   "concept": "deminage"
  },
  {
   "id": "t_mercredi_08",
   "sectionId": "mod2_sec3",
   "question": "Les feux de ce navire indiquent la présence d’un :",
   "options": {
    "A": "Navire échoué, de moins de 50 m",
    "B": "Navire au mouillage de plus de 50 m",
    "C": "Navire à capacité de manœuvre restreinte de moins de 50 m",
    "D": "Navire à capacité de manœuvre restreinte de plus de 50 m, vu par bâbord"
   },
   "correct": "D",
   "explanation": "Rouge-blanc-rouge = capacité de manœuvre restreinte ; deux feux de tête de mât : on retient 50 m ou plus (le second feu est obligatoire à partir de 50 m) ; le feu rouge de côté indique qu’on le voit par bâbord. Un navire échoué montrerait deux feux rouges.",
   "image": "assets/q/t_mercredi_08.webp",
   "duplicateOf": "c6_particuliers_08",
   "tags": [
    "navires-speciaux",
    "feux-navires"
   ],
   "concept": "ram-feux-taille-aspect"
  },
  {
   "id": "t_mercredi_09",
   "sectionId": "mod1_sec3",
   "question": "Vous faites route à l’ouest. Vous voyez cette bouée droit devant. Que faites-vous ?",
   "options": {
    "A": "Je la laisse à droite",
    "B": "Je la laisse à gauche",
    "C": "Je la laisse indifféremment à droite ou à gauche"
   },
   "correct": "A",
   "explanation": "Deux cônes pointe en bas, jaune sur noir : cardinale sud, on passe au sud de la bouée. En route à l’ouest, le sud est sur votre gauche : vous passez au sud en laissant la bouée à droite.",
   "image": "assets/q/t_mercredi_09.webp",
   "duplicateOf": "c3_cardinales_05",
   "tags": [
    "cardinales"
   ],
   "concept": "card-sud-passage"
  },
  {
   "id": "t_mercredi_10",
   "sectionId": "mod2_sec3",
   "question": "Ce navire est :",
   "options": {
    "A": "Un remorqueur avec remorque de plus de 200 mètres",
    "B": "Un navire handicapé par son tirant d’eau",
    "C": "Un navire au mouillage"
   },
   "correct": "B",
   "explanation": "Le cylindre noir hissé au mât est la marque de jour du navire handicapé par son tirant d’eau (la nuit : trois feux rouges superposés). Le grand pétrolier est typique de ce cas.",
   "image": "assets/q/t_mercredi_10.webp",
   "duplicateOf": "c6_particuliers_17",
   "tags": [
    "navires-speciaux",
    "marques-jour"
   ],
   "concept": "tirant-eau-cylindre"
  },
  {
   "id": "t_mercredi_11",
   "sectionId": "mod2_sec3",
   "question": "Ce groupe de feux signale :",
   "options": {
    "A": "Un navire autre que chalutier, de plus de 50 mètres, en pêche, avec erre, vu par tribord",
    "B": "Un navire à capacité de manœuvre restreinte de plus de 50 mètres, avec erre, vu par tribord"
   },
   "correct": "B",
   "explanation": "Rouge-blanc-rouge = capacité de manœuvre restreinte ; deux feux de tête de mât : on retient 50 m ou plus (le second feu est obligatoire à partir de 50 m) ; feu vert = vu par tribord, et les feux de route montrent qu’il fait route. Un pêcheur montrerait rouge sur blanc.",
   "image": "assets/q/t_mercredi_11.webp",
   "duplicateOf": "c6_particuliers_04",
   "tags": [
    "navires-speciaux",
    "feux-navires"
   ],
   "concept": "ram-feux-taille-aspect"
  },
  {
   "id": "t_mercredi_12",
   "sectionId": "mod1_sec3",
   "question": "Faisant route à l’ouest, vous apercevez cette bouée droit devant vous. Que faites-vous ?",
   "options": {
    "A": "Je viens à droite",
    "B": "Je viens à gauche",
    "C": "Je viens indifféremment à droite ou à gauche"
   },
   "correct": "A",
   "explanation": "Deux cônes pointe en haut, noir sur jaune : cardinale nord, les eaux saines sont au nord. En route à l’ouest, le nord est à droite : je viens sur la droite pour passer au nord de la bouée.",
   "image": "assets/q/t_mercredi_12.webp",
   "duplicateOf": "c3_cardinales_02",
   "tags": [
    "cardinales"
   ],
   "concept": "card-nord-passage"
  },
  {
   "id": "t_mercredi_13",
   "sectionId": "mod1_sec3",
   "question": "Vous faites route au sud. Vous apercevez cette bouée devant vous. Que faites-vous ?",
   "options": {
    "A": "Je la laisse à droite",
    "B": "Je la laisse à gauche",
    "C": "Je la laisse indifféremment à droite ou à gauche"
   },
   "correct": "B",
   "explanation": "Deux cônes opposés par la pointe (« taille de guêpe »), jaune-noir-jaune : cardinale ouest, on passe à l’ouest. En route au sud, l’ouest est sur votre droite : vous laissez la bouée à gauche.",
   "figure": {
    "fig": "mark",
    "type": "card-w"
   },
   "duplicateOf": "c3_cardinales_03",
   "tags": [
    "cardinales"
   ],
   "concept": "card-ouest-passage"
  },
  {
   "id": "t_mercredi_14",
   "sectionId": "mod3_sec3",
   "question": "Sur l’avant tribord, vous voyez ces feux de navire. Quelle route suivez-vous ?",
   "options": {
    "A": "La route A",
    "B": "La route B"
   },
   "correct": "A",
   "explanation": "Vous voyez son feu vert : il vous présente son flanc tribord et s’éloigne vers votre droite. Vos routes ne se croisent pas (on se croise vert contre vert). Vous maintenez cap et vitesse (route A) en surveillant son relèvement ; venir sur tribord (route B) vous ferait au contraire couper sa route.",
   "image": "assets/q/t_mercredi_14.webp",
   "duplicateOf": "c4_feux_03",
   "tags": [
    "regles-barre"
   ],
   "concept": "feux-vert-tribord"
  },
  {
   "id": "t_mercredi_15",
   "sectionId": "mod2_sec1",
   "question": "Cette marque est montrée par :",
   "options": {
    "A": "Un chalutier dont le chalut est retenu par un obstacle",
    "B": "Un navire non maître de sa manœuvre",
    "C": "Un navire remorqué, avec remorque de plus de 200 mètres"
   },
   "correct": "C",
   "explanation": "Deux cônes réunis par la base (bicône, « losange ») : remorquage dont la longueur dépasse 200 m. Le remorqueur comme le navire remorqué montrent cette marque.",
   "image": "assets/q/t_mercredi_15.webp",
   "duplicateOf": "c4_feux_08",
   "tags": [
    "remorquage",
    "marques-jour"
   ],
   "concept": "remorq-bicone"
  },
  {
   "id": "c7_sonores_01",
   "sectionId": "mod3_sec3",
   "question": "Au large, un navire rattrapé par un autre :",
   "options": {
    "A": "S’écarte sur bâbord si le rattrapant émet le signal sonore",
    "B": "S’écarte sur tribord si le rattrapant émet le signal sonore",
    "C": "Conserve son cap et sa vitesse"
   },
   "correct": "C",
   "explanation": "Au large, le navire rattrapé est privilégié : il conserve son cap et sa vitesse, c’est au rattrapant de s’écarter. Les signaux représentés (2 sons prolongés + 1 bref = « je vais vous dépasser sur tribord », 2 prolongés + 2 brefs = « sur bâbord ») ne s’utilisent que dans un chenal étroit, où le rattrapé peut avoir à faciliter le dépassement.",
   "image": "assets/q/c7_sonores_01.webp",
   "tags": [
    "regles-barre"
   ],
   "concept": "regle-rattrapant"
  },
  {
   "id": "c7_sonores_02",
   "sectionId": "mod3_sec1",
   "question": "En mer, dans la brume, vous entendez 2 sons longs toutes les 2 minutes. De quoi s’agit-il ?",
   "options": {
    "A": "D’un navire venant sur bâbord",
    "B": "D’un voilier en route",
    "C": "D’un navire à propulsion mécanique, sans erre"
   },
   "correct": "C",
   "explanation": "Par visibilité réduite, 2 sons prolongés toutes les 2 minutes = navire à moteur faisant route mais stoppé (sans erre). Avec erre, il n’émet qu’un seul son prolongé ; un voilier émet 1 prolongé + 2 brefs.",
   "tags": [
    "signaux-sonores"
   ],
   "concept": "brume-2-prolonges",
   "near": [
    "c7_sonores_08",
    "exam_q2_18"
   ]
  },
  {
   "id": "c7_sonores_03",
   "sectionId": "mod3_sec1",
   "question": "En bateau à moteur, en vue d’un autre navire, vous battez en arrière. Quel signal sonore émettez-vous ?",
   "options": {
    "A": "1 son bref",
    "B": "3 sons brefs",
    "C": "5 sons brefs au moins"
   },
   "correct": "B",
   "explanation": "1 bref = je viens sur tribord, 2 brefs = je viens sur bâbord, 3 brefs = je bats en arrière (machine en arrière). 5 brefs au moins = doute sur les intentions de l’autre.",
   "tags": [
    "signaux-sonores"
   ],
   "concept": "son-3-brefs",
   "near": [
    "c7_sonores_05",
    "exam_q4_1"
   ]
  },
  {
   "id": "c7_sonores_04",
   "sectionId": "mod3_sec1",
   "question": "Vous entrez dans un banc de brume. Que faites-vous ?",
   "options": {
    "A": "J’émets une série d’au moins 5 sons brefs",
    "B": "J’accélère",
    "C": "Je réduis ma vitesse"
   },
   "correct": "C",
   "explanation": "Par visibilité réduite, on adopte une vitesse de sécurité (on ralentit), on émet les signaux de brume réglementaires et on renforce la veille. Les 5 sons brefs servent seulement à signaler un doute sur les intentions d’un autre navire en vue.",
   "tags": [
    "signaux-sonores",
    "regles-barre"
   ],
   "concept": "brume-conduite"
  },
  {
   "id": "c7_sonores_05",
   "sectionId": "mod3_sec1",
   "question": "En bateau à moteur, en vue d’un autre navire, vous venez sur la gauche. Quel signal sonore émettez-vous ?",
   "options": {
    "A": "1 son bref",
    "B": "2 sons brefs",
    "C": "3 sons brefs"
   },
   "correct": "B",
   "explanation": "2 sons brefs = « je viens sur bâbord », c’est-à-dire à gauche. À retenir dans l’ordre : 1 bref = à droite (tribord), 2 brefs = à gauche (bâbord), 3 brefs = machine arrière.",
   "tags": [
    "signaux-sonores"
   ],
   "concept": "son-2-brefs",
   "near": [
    "c7_sonores_03",
    "exam_q4_1",
    "var_son-1-bref_1"
   ]
  },
  {
   "id": "c7_sonores_06",
   "sectionId": "mod3_sec1",
   "question": "Deux navires font une route d’abordage. L’un émet au sifflet une série de 5 sons brefs. Que veut-il dire ?",
   "options": {
    "A": "J’ai des doutes sur vos intentions",
    "B": "Je vais abattre sur votre arrière",
    "C": "Je ne suis pas maître de ma manœuvre"
   },
   "correct": "A",
   "explanation": "Au moins 5 sons brefs et rapides = « je ne comprends pas vos intentions ou je doute que vous manœuvriez suffisamment pour éviter l’abordage ». C’est un signal d’avertissement, souvent émis par le navire privilégié.",
   "tags": [
    "signaux-sonores"
   ],
   "concept": "son-5-brefs"
  },
  {
   "id": "c7_sonores_07",
   "sectionId": "mod3_sec1",
   "question": "Un navire manœuvre et siffle 3 coups brefs. Qu’indique-t-il ?",
   "options": {
    "A": "J’ai des doutes sur vos intentions",
    "B": "Je viens à droite",
    "C": "Je viens à gauche",
    "D": "Je bats en arrière"
   },
   "correct": "D",
   "explanation": "3 sons brefs = « je fais machine en arrière ». Rappel : 1 bref = je viens à droite (tribord), 2 brefs = je viens à gauche (bâbord), 5 brefs au moins = doute.",
   "tags": [
    "signaux-sonores"
   ],
   "concept": "son-3-brefs",
   "near": [
    "exam_q3_1",
    "q_3_1_1"
   ]
  },
  {
   "id": "c7_sonores_08",
   "sectionId": "mod3_sec1",
   "question": "Dans la brume, vous entendez un son prolongé toutes les deux minutes. De quoi s’agit-il ?",
   "options": {
    "A": "D’un navire au mouillage",
    "B": "D’un navire en détresse",
    "C": "D’un navire à propulsion mécanique avec erre"
   },
   "correct": "C",
   "explanation": "Un son prolongé au moins toutes les 2 minutes = navire à moteur faisant route avec erre. Un navire au mouillage sonne la cloche (tintement rapide de 5 s chaque minute) et un son continu signale la détresse.",
   "tags": [
    "signaux-sonores"
   ],
   "concept": "brume-1-prolonge",
   "near": [
    "c7_sonores_02",
    "exam_q2_18"
   ]
  },
  {
   "id": "c7_sonores_09",
   "sectionId": "mod3_sec1",
   "question": "Le navire A manœuvre. Il émet 2 sons brefs. Qu’indique-t-il ainsi ?",
   "options": {
    "A": "Je viens à droite",
    "B": "Je viens à gauche",
    "C": "Je bats en arrière"
   },
   "correct": "B",
   "explanation": "2 sons brefs = « je viens sur bâbord », c’est-à-dire à gauche. 1 bref = à droite, 3 brefs = machine arrière.",
   "image": "assets/q/c7_sonores_09.webp",
   "tags": [
    "signaux-sonores"
   ],
   "concept": "son-2-brefs",
   "near": [
    "exam_q2_11",
    "q_jeudi_1"
   ]
  },
  {
   "id": "c7_sonores_10",
   "sectionId": "mod3_sec1",
   "question": "Quelle manœuvre indique le navire A en sifflant un coup bref ?",
   "options": {
    "A": "Je stoppe",
    "B": "Je viens à droite",
    "C": "Je bats en arrière"
   },
   "correct": "B",
   "explanation": "1 son bref = « je viens sur tribord », donc à droite. Il n’existe pas de signal sonore « je stoppe » ; 3 brefs = machine arrière.",
   "image": "assets/q/c7_sonores_10.webp",
   "tags": [
    "signaux-sonores"
   ],
   "concept": "son-1-bref"
  },
  {
   "id": "c8_regissants_01",
   "sectionId": "mod3_sec2",
   "question": "À l’entrée d’un port, à bord d’un petit bateau pouvant naviguer hors du chenal, vous voyez ce signal. Que faites-vous ?",
   "options": {
    "A": "Je mouille dans le chenal",
    "B": "Je passe en suivant le chenal",
    "C": "Je peux passer en dehors du chenal"
   },
   "correct": "C",
   "explanation": "Vert-blanc-vert = passage autorisé seulement sur instruction particulière. Le feu jaune placé à gauche du feu supérieur est une dérogation : les navires qui naviguent en dehors du chenal principal (petits bateaux) ne sont pas concernés et peuvent passer hors du chenal.",
   "image": "assets/q/c8_regissants_01.webp",
   "tags": [
    "signaux-portuaires"
   ],
   "concept": "port-feu-jaune"
  },
  {
   "id": "c8_regissants_02",
   "sectionId": "mod3_sec2",
   "question": "À l’entrée du port, vous voyez ces 3 feux. Quel signal voit au même instant un navire qui veut sortir ?",
   "options": {
    "A": "Le même signal",
    "B": "Deux feux verts et un feu blanc",
    "C": "Trois feux rouges"
   },
   "correct": "C",
   "explanation": "Trois feux verts = entrée autorisée en sens unique. Le passage étant réservé aux entrants, le navire qui veut sortir voit trois feux rouges (interdiction).",
   "image": "assets/q/c8_regissants_02.webp",
   "tags": [
    "signaux-portuaires"
   ],
   "concept": "port-3-verts"
  },
  {
   "id": "c8_regissants_03",
   "sectionId": "mod3_sec2",
   "question": "À l’entrée d’un port, vous voyez ce signal. Qu’indique-t-il ?",
   "options": {
    "A": "Passage à double sens",
    "B": "Passage à sens unique",
    "C": "Passage uniquement pour navires en dehors du chenal"
   },
   "correct": "A",
   "explanation": "Vert-vert-blanc = mouvement autorisé, trafic à double sens : on peut croiser des navires sortants. Trois verts seraient un sens unique.",
   "image": "assets/q/c8_regissants_03.webp",
   "tags": [
    "signaux-portuaires"
   ],
   "concept": "port-vert-vert-blanc"
  },
  {
   "id": "c8_regissants_04",
   "sectionId": "mod3_sec2",
   "question": "À l’entrée d’un port, vous voyez ce signal. Que faites-vous ?",
   "options": {
    "A": "J’attends",
    "B": "Je peux entrer si je navigue en dehors du chenal"
   },
   "correct": "B",
   "explanation": "Trois feux rouges = mouvement interdit dans le chenal ; mais le feu jaune à gauche du feu supérieur exempte les navires qui naviguent en dehors du chenal principal : ils peuvent entrer.",
   "image": "assets/q/c8_regissants_04.webp",
   "tags": [
    "signaux-portuaires"
   ],
   "concept": "port-feu-jaune",
   "near": [
    "exam_q4_5"
   ]
  },
  {
   "id": "c8_regissants_05",
   "sectionId": "mod3_sec2",
   "question": "Vous entrez au port et voyez ce signal. Pouvez-vous rencontrer, dans la passe, des navires sortants ?",
   "options": {
    "A": "Oui",
    "B": "Non"
   },
   "correct": "A",
   "explanation": "Le signal vert-vert-blanc autorise le trafic à double sens : des navires peuvent sortir pendant que vous entrez, il faut donc rester vigilant et serrer sur tribord.",
   "image": "assets/q/c8_regissants_05.webp",
   "tags": [
    "signaux-portuaires"
   ],
   "concept": "port-vert-vert-blanc"
  },
  {
   "id": "c8_regissants_06",
   "sectionId": "mod3_sec2",
   "question": "Rentrant au port, vous voyez ce signal (3 feux rouges verticaux à éclats à l’entrée du port). Que faites-vous ?",
   "options": {
    "A": "Naviguant hors du chenal, je peux passer",
    "B": "J’entre avec prudence (attention aux navires sortants)",
    "C": "Je m’arrête et ne rentre pas"
   },
   "correct": "C",
   "explanation": "Trois feux rouges à éclats = urgence grave : tout mouvement est interdit, pour tous les navires, et on suit les instructions du port. Ce signal ne connaît aucune dérogation : même un feu jaune n’y change rien, on ne passe pas, même hors du chenal.",
   "image": "assets/q/c8_regissants_06.webp",
   "tags": [
    "signaux-portuaires"
   ],
   "concept": "port-danger-grave"
  },
  {
   "id": "c8_regissants_07",
   "sectionId": "mod3_sec2",
   "question": "Sortant du port, vous voyez ces 3 feux à occultations lentes. Que faites-vous ?",
   "options": {
    "A": "Je sors avec prudence, pouvant croiser d’autres navires",
    "B": "J’attends des instructions par VHF",
    "C": "Je ne dois pas sortir"
   },
   "correct": "A",
   "explanation": "Vert-vert-blanc (fixe ou à occultations lentes) = mouvement autorisé à double sens : on peut sortir, en restant prudent car des navires peuvent entrer.",
   "image": "assets/q/c8_regissants_07.webp",
   "tags": [
    "signaux-portuaires"
   ],
   "concept": "port-vert-vert-blanc"
  },
  {
   "id": "c8_regissants_08",
   "sectionId": "mod3_sec2",
   "question": "À la barre de votre pneumatique, vous voyez ce signal à la sortie du port. Pouvez-vous sortir ?",
   "options": {
    "A": "Oui",
    "B": "Non",
    "C": "Oui, avec l’autorisation de la capitainerie"
   },
   "correct": "A",
   "explanation": "Trois feux rouges interdisent le mouvement aux navires qui suivent le chenal, mais le feu jaune à gauche du feu supérieur exempte les navires qui peuvent naviguer en dehors du chenal principal. Un pneumatique peut le faire : il peut sortir (hors du chenal) sans autorisation.",
   "image": "assets/q/c8_regissants_08.webp",
   "tags": [
    "signaux-portuaires"
   ],
   "concept": "port-feu-jaune"
  },
  {
   "id": "c8_regissants_09",
   "sectionId": "mod3_sec2",
   "question": "À l’entrée du port, vous apercevez ces feux. Pouvez-vous entrer ?",
   "options": {
    "A": "Oui, sans formalité particulière",
    "B": "Oui, après avoir reçu des instructions spéciales m’y autorisant"
   },
   "correct": "B",
   "explanation": "Vert-blanc-vert = un navire ne peut passer qu’après avoir reçu un ordre ou une instruction particulière (par exemple de la capitainerie par VHF).",
   "image": "assets/q/c8_regissants_09.webp",
   "tags": [
    "signaux-portuaires"
   ],
   "concept": "port-vert-blanc-vert"
  },
  {
   "id": "c8_regissants_10",
   "sectionId": "mod3_sec2",
   "question": "À une entrée de port, un car-ferry rencontre ces feux. Peut-il passer ?",
   "options": {
    "A": "Oui",
    "B": "Non"
   },
   "correct": "B",
   "explanation": "Trois feux rouges = mouvement interdit. Le feu jaune n’exempte que les navires capables de naviguer hors du chenal principal ; un car-ferry, trop grand, doit suivre le chenal et doit donc attendre.",
   "image": "assets/q/c8_regissants_10.webp",
   "tags": [
    "signaux-portuaires"
   ],
   "concept": "port-feu-jaune"
  },
  {
   "id": "c9_barre_01",
   "sectionId": "mod3_sec3",
   "question": "Le relèvement d’un autre navire qui s’approche de vous est successivement : 140, 150, 140, à 5 minutes d’intervalle. Y a-t-il danger ?",
   "options": {
    "A": "Oui",
    "B": "Non"
   },
   "correct": "A",
   "explanation": "Si le relèvement d’un navire qui se rapproche reste constant ou ne varie pas franchement dans un sens, il y a risque d’abordage. Ici il revient à 140 : il ne défile pas, le danger existe (et en cas de doute, on considère qu’il y a risque).",
   "tags": [
    "regles-barre"
   ],
   "concept": "regle-relevement-constant"
  },
  {
   "id": "c9_barre_02",
   "sectionId": "mod3_sec3",
   "question": "Vous êtes sur un navire à moteur. Vous voyez par bâbord un voilier faisant une route de collision. Que devez-vous faire ?",
   "options": {
    "A": "J’attire son attention par un signal sonore",
    "B": "J’attends que le voilier manœuvre",
    "C": "Je manœuvre"
   },
   "correct": "C",
   "explanation": "Un navire à moteur doit s’écarter de la route d’un voilier, quel que soit le côté d’où il vient (sauf si le voilier le rattrape, ou dans un chenal étroit où le voilier ne doit pas gêner un navire qui ne peut naviguer qu’à l’intérieur). La règle « priorité à droite » ne s’applique qu’entre deux navires à moteur (entre voiliers, ce sont les amures et le vent qui décident).",
   "tags": [
    "regles-barre"
   ],
   "concept": "regle-moteur-vs-voile"
  },
  {
   "id": "c9_barre_03",
   "sectionId": "mod3_sec3",
   "question": "Le navire B est dans le chenal. Vous êtes sur le navire A. Que faites-vous ?",
   "options": {
    "A": "Je conserve mon cap et ma vitesse",
    "B": "Je viens à gauche",
    "C": "J’émets une série de 7 sons brefs"
   },
   "correct": "B",
   "explanation": "Dans un chenal étroit, un petit navire ne doit pas gêner un navire qui ne peut naviguer qu’à l’intérieur du chenal (règle 9). A, qui allait couper la route de B, vient à gauche pour passer franchement sur son arrière et le laisser passer.",
   "image": "assets/q/c9_barre_03.webp",
   "tags": [
    "regles-barre"
   ],
   "concept": "regle-chenal-ne-pas-gener"
  },
  {
   "id": "c9_barre_04",
   "sectionId": "mod3_sec3",
   "question": "Vous êtes sur le navire B. Vous voyez le navire A sur bâbord. Que faites-vous ?",
   "options": {
    "A": "Je maintiens mon cap et ma vitesse",
    "B": "J’émets 5 sons brefs au moins",
    "C": "Je manœuvre"
   },
   "correct": "C",
   "explanation": "Regardez le mât de A : il porte deux cônes réunis par la pointe, la marque d’un navire en pêche. Un navire à moteur doit s’écarter d’un navire en action de pêche, même s’il le voit sur bâbord.",
   "image": "assets/q/c9_barre_04.webp",
   "tags": [
    "regles-barre",
    "peche"
   ],
   "concept": "regle-moteur-vs-peche"
  },
  {
   "id": "c9_barre_05",
   "sectionId": "mod3_sec3",
   "question": "Vous êtes en bateau à moteur. Droit devant vous, un autre bateau à moteur fait une route directement opposée à la vôtre. Que faites-vous ?",
   "options": {
    "A": "Je viens à droite",
    "B": "Je viens à gauche"
   },
   "correct": "A",
   "explanation": "Deux navires à moteur qui se rencontrent de face (routes opposées) viennent chacun sur tribord, c’est-à-dire à droite, pour se croiser bâbord sur bâbord.",
   "image": "assets/q/c9_barre_05.webp",
   "tags": [
    "regles-barre"
   ],
   "concept": "regle-routes-opposees"
  },
  {
   "id": "c9_barre_06",
   "sectionId": "mod3_sec3",
   "question": "En bateau à moteur, vous apercevez sur bâbord une planche à voile. Il y a risque d’abordage. Que faites-vous ?",
   "options": {
    "A": "J’émets une série d’au moins 5 sons brefs",
    "B": "Je manœuvre",
    "C": "Je ne change rien à mon cap et à ma vitesse"
   },
   "correct": "B",
   "explanation": "Une planche à voile est un engin à voile : le bateau à moteur doit s’en écarter, de quelque côté qu’elle vienne.",
   "tags": [
    "regles-barre"
   ],
   "concept": "regle-moteur-vs-voile"
  },
  {
   "id": "c9_barre_07",
   "sectionId": "mod3_sec3",
   "question": "Un pêcheur en action de pêche est privilégié par rapport :",
   "options": {
    "A": "À un voilier",
    "B": "À un navire non maître de sa manœuvre",
    "C": "À un navire à capacité de manœuvre restreinte"
   },
   "correct": "A",
   "explanation": "Ordre de priorité : NUC (non maître de sa manœuvre) et navire à capacité de manœuvre restreinte, puis navire en pêche, puis voilier, puis navire à moteur. Le pêcheur passe donc avant le voilier, mais après les NUC et les RAM.",
   "image": "assets/q/c9_barre_07.webp",
   "tags": [
    "regles-barre",
    "peche"
   ],
   "concept": "regle-hierarchie-peche-voilier"
  },
  {
   "id": "c9_barre_08",
   "sectionId": "mod3_sec3",
   "question": "Vous êtes sur le bateau à moteur A. Le voilier B vous rattrape. Que faites-vous ?",
   "options": {
    "A": "Je conserve ma route et ma vitesse",
    "B": "Je viens sur la droite pour faciliter la manœuvre",
    "C": "Je ralentis et viens sur la gauche"
   },
   "correct": "A",
   "explanation": "Tout navire qui en rattrape un autre doit s’en écarter, même s’il est à voile. Le rattrapé (ici A, à moteur) est privilégié : il conserve son cap et sa vitesse.",
   "image": "assets/q/c9_barre_08.webp",
   "tags": [
    "regles-barre"
   ],
   "concept": "regle-rattrapant"
  },
  {
   "id": "c9_barre_09",
   "sectionId": "mod3_sec3",
   "question": "Vous êtes à bord d’un bateau à moteur. Vous apercevez sur bâbord une moto de mer dont la route va couper la vôtre, et elle ne semble pas manœuvrer. Que faites-vous ?",
   "options": {
    "A": "J’émets une série d’au moins 5 sons brefs",
    "B": "Je manœuvre pour passer derrière elle",
    "C": "Je stoppe pour la laisser passer"
   },
   "correct": "A",
   "explanation": "La moto de mer vous voit sur sa droite (tribord) : c’est à elle de s’écarter. Vous êtes privilégié : vous maintenez cap et vitesse et, si elle ne semble pas manœuvrer, vous signalez votre doute par au moins 5 sons brefs (règle 34 d). Vous manœuvrez vous-même dès que l’abordage ne peut plus être évité par sa seule manœuvre (règle 17). Passer derrière elle obligerait à venir sur bâbord, ce que le privilégié doit éviter (règle 17 c) ; stopper d’emblée n’est pas la réaction attendue : on signale d’abord son doute.",
   "tags": [
    "regles-barre"
   ],
   "concept": "regle-routes-croisees"
  },
  {
   "id": "c9_barre_10",
   "sectionId": "mod3_sec3",
   "question": "Vous vous rapprochez d’un navire dont le gisement reste constant. Qu’est-ce que cela signifie ?",
   "options": {
    "A": "Les deux navires font des routes divergentes",
    "B": "Il n’y a aucun risque d’abordage",
    "C": "Il y a risque d’abordage"
   },
   "correct": "C",
   "explanation": "Gisement (ou relèvement) constant et distance qui diminue = route de collision. Si le gisement défile, l’autre navire passera devant ou derrière.",
   "tags": [
    "regles-barre"
   ],
   "concept": "regle-relevement-constant"
  },
  {
   "id": "c9_barre_11",
   "sectionId": "mod3_sec3",
   "question": "La moto de mer et le voilier (ici une planche à voile) risquent de s’aborder. Qui doit manœuvrer ?",
   "options": {
    "A": "La moto de mer",
    "B": "Le voilier",
    "C": "Les deux"
   },
   "correct": "A",
   "explanation": "Une moto de mer est un navire à moteur : elle doit s’écarter de tout engin à voile, planche à voile comprise.",
   "image": "assets/q/c9_barre_11.webp",
   "tags": [
    "regles-barre"
   ],
   "concept": "regle-moteur-vs-voile"
  },
  {
   "id": "c9_barre_12",
   "sectionId": "mod3_sec3",
   "question": "Vous êtes sur le navire A. Il y a risque d’abordage avec le navire B. Que faites-vous ?",
   "options": {
    "A": "J’émets une série de 5 sons brefs au moins",
    "B": "Je manœuvre",
    "C": "J’attends que B manœuvre"
   },
   "correct": "B",
   "explanation": "B porte deux boules noires superposées : c’est un navire non maître de sa manœuvre (NUC), prioritaire sur tous les autres (à égalité avec le navire à capacité de manœuvre restreinte). Le bateau à moteur A doit donc manœuvrer pour s’en écarter.",
   "image": "assets/q/c9_barre_12.webp",
   "tags": [
    "regles-barre",
    "navires-speciaux"
   ],
   "concept": "regle-priorite-nuc"
  },
  {
   "id": "c9_barre_13",
   "sectionId": "mod3_sec3",
   "question": "Dans le chenal d’accès à un port de commerce, un gros navire vous rattrape. Que faites-vous ?",
   "options": {
    "A": "Je maintiens ma route et ma vitesse",
    "B": "Je considère que c’est à lui de manœuvrer",
    "C": "Je dégage vers la droite du chenal"
   },
   "correct": "C",
   "explanation": "Même rattrapé, un petit bateau ne doit pas gêner un gros navire qui ne peut naviguer qu’à l’intérieur du chenal : il serre la droite du chenal (ou en sort) pour le laisser passer.",
   "image": "assets/q/c9_barre_13.webp",
   "tags": [
    "regles-barre"
   ],
   "concept": "regle-chenal-ne-pas-gener"
  },
  {
   "id": "c9_barre_14",
   "sectionId": "mod3_sec3",
   "question": "Vous êtes en vue d’un autre navire sans pouvoir déterminer avec certitude si vous êtes rattrapant. Que faites-vous ?",
   "options": {
    "A": "J’émets 5 sons brefs",
    "B": "Je continue ma route. C’est lui qui doit manœuvrer",
    "C": "Je m’écarte de sa route"
   },
   "correct": "C",
   "explanation": "En cas de doute sur le fait d’être rattrapant, on se considère comme rattrapant et on s’écarte de la route de l’autre navire.",
   "tags": [
    "regles-barre"
   ],
   "concept": "regle-rattrapant-definition"
  },
  {
   "id": "c9_barre_15",
   "sectionId": "mod2_sec3",
   "question": "Ce navire est :",
   "options": {
    "A": "Un remorqueur avec remorque de plus de 200 mètres",
    "B": "Un navire handicapé par son tirant d’eau",
    "C": "Un navire au mouillage"
   },
   "correct": "B",
   "explanation": "Le cylindre noir hissé au mât est la marque de jour d’un navire handicapé par son tirant d’eau (de nuit : 3 feux rouges superposés). Remorque > 200 m = bicône (losange) ; mouillage = une boule.",
   "image": "assets/q/c9_barre_15.webp",
   "duplicateOf": "c6_particuliers_17",
   "tags": [
    "navires-speciaux",
    "marques-jour"
   ],
   "concept": "tirant-eau-cylindre"
  },
  {
   "id": "t_jeudi_01",
   "sectionId": "mod3_sec2",
   "question": "À l’entrée d’un port, à bord d’un petit bateau pouvant naviguer hors du chenal, vous voyez ce signal. Que faites-vous ?",
   "options": {
    "A": "Je mouille dans le chenal",
    "B": "Je passe en suivant le chenal",
    "C": "Je peux passer en dehors du chenal"
   },
   "correct": "C",
   "explanation": "Vert-blanc-vert = passage seulement sur instruction particulière ; le feu jaune à gauche du feu supérieur exempte les navires naviguant hors du chenal principal, qui peuvent donc passer en dehors du chenal.",
   "image": "assets/q/t_jeudi_01.webp",
   "duplicateOf": "c8_regissants_01",
   "tags": [
    "signaux-portuaires"
   ],
   "concept": "port-feu-jaune"
  },
  {
   "id": "t_jeudi_02",
   "sectionId": "mod1_sec3",
   "question": "Vous faites route à l’Ouest. Vous voyez cette bouée droit devant. Que faites-vous ?",
   "options": {
    "A": "Je la laisse à droite",
    "B": "Je la laisse à gauche",
    "C": "Je la laisse indifféremment à droite ou à gauche"
   },
   "correct": "A",
   "explanation": "Deux cônes pointes en bas, jaune sur noir : c’est une cardinale Sud, on passe au sud d’elle. En route à l’Ouest, le sud est sur votre gauche : vous passez donc au sud en laissant la bouée sur votre droite.",
   "image": "assets/q/t_jeudi_02.webp",
   "duplicateOf": "c3_cardinales_05",
   "tags": [
    "cardinales"
   ],
   "concept": "card-sud-passage"
  },
  {
   "id": "t_jeudi_03",
   "sectionId": "mod1_sec3",
   "question": "Vous faites route à l’Est. Vous apercevez cette bouée droit devant vous. Que faites-vous ?",
   "options": {
    "A": "Je viens à droite",
    "B": "Je viens à gauche",
    "C": "Je viens indifféremment à droite ou à gauche"
   },
   "correct": "B",
   "explanation": "Deux cônes pointes en haut, noir sur jaune : cardinale Nord, on passe au nord. En route à l’Est, le nord est sur votre gauche : vous venez à gauche.",
   "image": "assets/q/t_jeudi_03.webp",
   "duplicateOf": "c3_cardinales_04",
   "tags": [
    "cardinales"
   ],
   "concept": "card-nord-passage"
  },
  {
   "id": "t_jeudi_04",
   "sectionId": "mod1_sec3",
   "question": "Faisant route à l’Ouest, vous apercevez cette bouée droit devant vous. Que faites-vous ?",
   "options": {
    "A": "Je viens à droite",
    "B": "Je viens à gauche",
    "C": "Je viens indifféremment à droite ou à gauche"
   },
   "correct": "A",
   "explanation": "Voyant deux cônes pointes en haut, noir en haut et jaune en bas : cardinale Nord, on passe au nord. En route à l’Ouest, le nord est sur votre droite : vous venez à droite.",
   "image": "assets/q/t_jeudi_04.webp",
   "duplicateOf": "c3_cardinales_02",
   "tags": [
    "cardinales"
   ],
   "concept": "card-nord-passage"
  },
  {
   "id": "t_jeudi_05",
   "sectionId": "mod3_sec3",
   "question": "Un pêcheur en action de pêche est privilégié par rapport :",
   "options": {
    "A": "À un voilier",
    "B": "À un navire non maître de sa manœuvre",
    "C": "À un navire à capacité de manœuvre restreinte"
   },
   "correct": "A",
   "explanation": "Ordre de priorité : NUC et navire à capacité de manœuvre restreinte, puis navire en pêche, puis voilier, puis navire à moteur. Le pêcheur est donc privilégié par rapport au voilier seulement.",
   "image": "assets/q/t_jeudi_05.webp",
   "duplicateOf": "c9_barre_07",
   "tags": [
    "regles-barre",
    "peche"
   ],
   "concept": "regle-hierarchie-peche-voilier"
  },
  {
   "id": "t_jeudi_06",
   "sectionId": "mod3_sec3",
   "question": "Vous êtes sur le navire B. Vous voyez le navire A sur bâbord. Que faites-vous ?",
   "options": {
    "A": "Je maintiens mon cap et ma vitesse",
    "B": "J’émets 5 sons brefs au moins",
    "C": "Je manœuvre"
   },
   "correct": "C",
   "explanation": "Le navire A porte au mât deux cônes réunis par la pointe : il est en pêche. Le bateau à moteur B doit s’en écarter, même s’il le voit sur bâbord.",
   "image": "assets/q/t_jeudi_06.webp",
   "duplicateOf": "c9_barre_04",
   "tags": [
    "regles-barre",
    "peche"
   ],
   "concept": "regle-moteur-vs-peche"
  },
  {
   "id": "t_jeudi_07",
   "sectionId": "mod3_sec3",
   "question": "Vous êtes sur le navire A. Il y a risque d’abordage avec le navire B. Que faites-vous ?",
   "options": {
    "A": "J’émets une série de 5 sons brefs au moins",
    "B": "Je manœuvre",
    "C": "J’attends que B manœuvre"
   },
   "correct": "B",
   "explanation": "B montre deux boules noires superposées : navire non maître de sa manœuvre. Il est prioritaire, c’est donc A qui manœuvre.",
   "image": "assets/q/t_jeudi_07.webp",
   "duplicateOf": "c9_barre_12",
   "tags": [
    "regles-barre",
    "navires-speciaux"
   ],
   "concept": "regle-priorite-nuc"
  },
  {
   "id": "t_jeudi_08",
   "sectionId": "mod3_sec1",
   "question": "En bateau à moteur, en vue d’un autre navire, vous battez en arrière. Quel signal sonore émettez-vous ?",
   "options": {
    "A": "1 son bref",
    "B": "3 sons brefs",
    "C": "5 sons brefs au moins"
   },
   "correct": "B",
   "explanation": "3 sons brefs = « je bats en arrière ». 1 bref = je viens à droite, 2 brefs = je viens à gauche, 5 brefs au moins = doute sur les intentions.",
   "duplicateOf": "c7_sonores_03",
   "tags": [
    "signaux-sonores"
   ],
   "concept": "son-3-brefs"
  },
  {
   "id": "t_jeudi_09",
   "sectionId": "mod3_sec1",
   "question": "Dans la brume, vous entendez un son prolongé toutes les deux minutes. De quoi s’agit-il ?",
   "options": {
    "A": "D’un navire au mouillage",
    "B": "D’un navire en détresse",
    "C": "D’un navire à propulsion mécanique avec erre"
   },
   "correct": "C",
   "explanation": "Un son prolongé au moins toutes les 2 minutes = navire à moteur faisant route avec erre ; deux sons prolongés = stoppé sans erre. Le navire au mouillage, lui, sonne la cloche.",
   "duplicateOf": "c7_sonores_08",
   "tags": [
    "signaux-sonores"
   ],
   "concept": "brume-1-prolonge"
  },
  {
   "id": "t_jeudi_10",
   "sectionId": "mod3_sec1",
   "question": "Deux navires font une route d’abordage. L’un émet au sifflet une série de 5 sons brefs. Que veut-il dire ?",
   "options": {
    "A": "J’ai des doutes sur vos intentions",
    "B": "Je vais abattre sur votre arrière",
    "C": "Je ne suis pas maître de ma manœuvre"
   },
   "correct": "A",
   "explanation": "Au moins 5 sons brefs et rapides = signal de doute : « je ne comprends pas vos intentions » ou « je doute que vous manœuvriez suffisamment ».",
   "duplicateOf": "c7_sonores_06",
   "tags": [
    "signaux-sonores"
   ],
   "concept": "son-5-brefs"
  },
  {
   "id": "t_jeudi_11",
   "sectionId": "mod3_sec3",
   "question": "Vous êtes sur le bateau à moteur A. Le voilier B vous rattrape. Que faites-vous ?",
   "options": {
    "A": "Je conserve ma route et ma vitesse",
    "B": "Je viens sur la droite pour faciliter la manœuvre",
    "C": "Je ralentis et viens sur la gauche"
   },
   "correct": "A",
   "explanation": "Le rattrapant, même à voile, doit s’écarter du navire rattrapé. A, rattrapé, conserve sa route et sa vitesse.",
   "image": "assets/q/t_jeudi_11.webp",
   "duplicateOf": "c9_barre_08",
   "tags": [
    "regles-barre"
   ],
   "concept": "regle-rattrapant"
  },
  {
   "id": "t_jeudi_12",
   "sectionId": "mod3_sec2",
   "question": "À l’entrée d’un port, à bord d’un petit bateau pouvant naviguer hors du chenal, vous voyez ce signal. Que faites-vous ?",
   "options": {
    "A": "Je mouille dans le chenal",
    "B": "Je passe en suivant le chenal",
    "C": "Je peux passer en dehors du chenal"
   },
   "correct": "C",
   "explanation": "Vert-blanc-vert = passage seulement sur instruction ; le feu jaune de dérogation autorise les navires naviguant hors du chenal principal à passer.",
   "image": "assets/q/t_jeudi_12.webp",
   "duplicateOf": "c8_regissants_01",
   "tags": [
    "signaux-portuaires"
   ],
   "concept": "port-feu-jaune"
  },
  {
   "id": "t_jeudi_13",
   "sectionId": "mod3_sec3",
   "question": "La moto de mer et le voilier (ici une planche à voile) risquent de s’aborder. Qui doit manœuvrer ?",
   "options": {
    "A": "La moto de mer",
    "B": "Le voilier",
    "C": "Les deux"
   },
   "correct": "A",
   "explanation": "La moto de mer est un navire à moteur : elle doit s’écarter de tout engin à voile, y compris une planche à voile.",
   "image": "assets/q/t_jeudi_13.webp",
   "duplicateOf": "c9_barre_11",
   "tags": [
    "regles-barre"
   ],
   "concept": "regle-moteur-vs-voile"
  },
  {
   "id": "t_jeudi_14",
   "sectionId": "mod3_sec3",
   "question": "Le relèvement d’un autre navire qui s’approche de vous est successivement : 140, 150, 140, à 5 minutes d’intervalle. Y a-t-il danger ?",
   "options": {
    "A": "Oui",
    "B": "Non"
   },
   "correct": "A",
   "explanation": "Un relèvement qui ne défile pas nettement dans un sens (il revient ici à 140) alors que le navire se rapproche indique un risque d’abordage ; dans le doute, on considère que le risque existe.",
   "duplicateOf": "c9_barre_01",
   "tags": [
    "regles-barre"
   ],
   "concept": "regle-relevement-constant"
  },
  {
   "id": "t_jeudi_15",
   "sectionId": "mod1_sec1",
   "question": "Quel est le feu de nuit de cette bouée ?",
   "options": {
    "A": "Feu scintillant vert",
    "B": "Feu vert à 3 éclats",
    "C": "Feu vert à 2+1 éclats",
    "D": "Feu vert à occultations"
   },
   "correct": "C",
   "explanation": "Bouée verte conique avec une large bande rouge : marque tribord modifiée, qui indique un chenal préféré à bâbord. Son feu est vert à éclats groupés (2+1) : 2 éclats puis 1 éclat isolé.",
   "image": "assets/q/t_jeudi_15.webp",
   "duplicateOf": "c1_balisage_02",
   "tags": [
    "balisage-lateral",
    "feux-balisage"
   ],
   "concept": "pref-feu"
  },
  {
   "id": "c13_loisirs_01",
   "sectionId": "mod4_sec2",
   "question": "Un navire de moins de 5 mètres, armé en 5e catégorie (côtier, jusqu’à 5 milles d’un abri), doit posséder un compas de route.",
   "options": {
    "A": "Vrai",
    "B": "Faux"
   },
   "correct": "A",
   "explanation": "En 5e catégorie (jusqu’à 5 milles d’un abri), le compas de route est exigé quelle que soit la taille du bateau. Un GPS ne le remplace pas.",
   "image": "assets/q/c13_loisirs_01.webp",
   "tags": [
    "armement"
   ],
   "concept": "armement-cotier-compas",
   "near": [
    "var_armement-cotier-compas_4"
   ]
  },
  {
   "id": "c13_loisirs_02",
   "sectionId": "mod4_sec3",
   "question": "À quelle distance maximum du rivage peut évoluer ce véhicule nautique à moteur (piloté debout) ?",
   "options": {
    "A": "1 mille",
    "B": "2 milles",
    "C": "5 milles"
   },
   "correct": "A",
   "explanation": "En Polynésie française (arrêté n° 1097 CM du 17 juillet 2009), un VNM piloté debout ne doit pas s’éloigner à plus d’1 mille du rivage ; piloté assis, 2 milles. Dans tous les cas, de jour uniquement et avec le permis. (Certains supports indiquent 6 et 2 milles d’un abri : ce sont des chiffres de la réglementation métropolitaine.)",
   "image": "assets/q/c13_loisirs_02.webp",
   "tags": [
    "loisirs"
   ],
   "concept": "vnm-distance",
   "near": [
    "q_4_3_1"
   ]
  },
  {
   "id": "c13_loisirs_03",
   "sectionId": "mod4_sec3",
   "question": "Un véhicule nautique à moteur peut-il évoluer de nuit ?",
   "options": {
    "A": "Oui, s’il porte les feux réglementaires",
    "B": "Oui, s’il reste dans la bande des 300 mètres",
    "C": "Oui, si le pilote est titulaire du brevet d’État de moniteur de ski nautique",
    "D": "Non, en aucun cas"
   },
   "correct": "D",
   "explanation": "La navigation en véhicule nautique à moteur (jet-ski) est autorisée de jour uniquement, en Polynésie comme en métropole ; aucune exception n’existe pour la nuit.",
   "tags": [
    "loisirs"
   ],
   "concept": "vnm-nuit",
   "near": [
    "ext_sec_10",
    "var_vnm-nuit_2"
   ]
  },
  {
   "id": "c13_loisirs_04",
   "sectionId": "mod4_sec3",
   "question": "Ce navire :",
   "options": {
    "A": "Est en détresse",
    "B": "Vous impose de le laisser à 100 mètres au moins",
    "C": "Est en action de pêche"
   },
   "correct": "B",
   "explanation": "Le pavillon rouge barré d’une diagonale blanche (comme le pavillon A blanc et bleu) signale des plongeurs : il faut passer à plus de 100 mètres du bateau et réduire sa vitesse.",
   "image": "assets/q/c13_loisirs_04.webp",
   "tags": [
    "loisirs",
    "pavillons"
   ],
   "concept": "plongee-distance"
  },
  {
   "id": "c13_loisirs_05",
   "sectionId": "mod4_sec3",
   "question": "Quelle est la vitesse maximale autorisée dans la bande des 300 mètres ?",
   "options": {
    "A": "5 nœuds",
    "B": "9 nœuds",
    "C": "Aucune limite de vitesse"
   },
   "correct": "A",
   "explanation": "Dans la bande des 300 mètres à partir du rivage, la vitesse est limitée à 5 nœuds.",
   "tags": [
    "vitesse-zones"
   ],
   "concept": "vitesse-300m",
   "near": [
    "exam_q1_1",
    "exam_q3_5",
    "exam_q4_11",
    "ext_bal_101"
   ]
  },
  {
   "id": "c13_loisirs_06",
   "sectionId": "mod4_sec3",
   "question": "Le skieur dont vous aviez la surveillance vient de tomber :",
   "options": {
    "A": "Vous rentrez immédiatement la remorque",
    "B": "Le pilote fait demi-tour et le skieur attrapera la remorque au passage",
    "C": "Le pilote doit manœuvrer pour reprendre le skieur à bord"
   },
   "correct": "A",
   "explanation": "Dès la chute, la personne chargée de la surveillance remonte la remorque pour éviter qu’elle ne se prenne dans l’hélice ou ne blesse le skieur ; le pilote revient ensuite vers lui prudemment, moteur au ralenti.",
   "image": "assets/q/c13_loisirs_06.webp",
   "tags": [
    "loisirs"
   ],
   "concept": "ski-chute-remorque",
   "near": [
    "gen_mod4_sec3_1"
   ]
  },
  {
   "id": "c13_loisirs_07",
   "sectionId": "mod4_sec3",
   "question": "Pour faire du ski nautique, le pilote du navire peut être seul à bord, à condition qu’il soit titulaire :",
   "options": {
    "A": "Du permis côtier",
    "B": "Du permis hauturier",
    "C": "D’un brevet d’État de moniteur de ski nautique"
   },
   "correct": "C",
   "explanation": "Le bateau tracteur doit avoir 2 personnes à bord (pilote + surveillant), sauf si le pilote est titulaire du brevet d’État de moniteur de ski nautique.",
   "tags": [
    "loisirs"
   ],
   "concept": "ski-deux-personnes",
   "near": [
    "exam_q2_6",
    "exam_q4_7",
    "q_4_3_3"
   ]
  },
  {
   "id": "c13_loisirs_08",
   "sectionId": "mod4_sec3",
   "question": "Les planches à voile ne peuvent naviguer au-delà :",
   "options": {
    "A": "De 2 milles d’un abri",
    "B": "De 5 milles d’un abri",
    "C": "D’un mille d’un abri"
   },
   "correct": "A",
   "explanation": "Les planches à voile (et kitesurfs) sont limitées à 2 milles d’un abri.",
   "tags": [
    "loisirs"
   ],
   "concept": "planche-distance",
   "near": [
    "gen_mod4_sec3_7"
   ]
  },
  {
   "id": "c13_loisirs_09",
   "sectionId": "mod4_sec3",
   "question": "De nuit, ce navire doit montrer :",
   "options": {
    "A": "2 feux rouges",
    "B": "Un feu blanc, un feu rouge, un feu blanc",
    "C": "Un feu rouge, un feu blanc, un feu rouge"
   },
   "correct": "C",
   "explanation": "Un bateau qui soutient des plongeurs est un navire à capacité de manœuvre restreinte : de nuit, il montre rouge-blanc-rouge superposés (de jour : pavillon A, ou boule-losange-boule sur un grand navire). Même au mouillage, il montre ces feux à la place du feu de mouillage. 2 feux rouges = non maître de sa manœuvre.",
   "image": "assets/q/c13_loisirs_09.webp",
   "tags": [
    "navires-speciaux",
    "loisirs"
   ],
   "concept": "plongee-feux-ram"
  },
  {
   "id": "c13_loisirs_10",
   "sectionId": "mod4_sec2",
   "question": "Vous voulez aller à un port situé à 18 milles. Votre vitesse sera de 9 nœuds et votre consommation de 10 litres/heure. Combien emporterez-vous de carburant en prenant une marge de sécurité de 30 % ?",
   "options": {
    "A": "24 litres",
    "B": "26 litres",
    "C": "30 litres"
   },
   "correct": "B",
   "explanation": "Durée = 18 / 9 = 2 h ; consommation = 2 × 10 = 20 l ; avec 30 % de marge : 20 × 1,3 = 26 litres.",
   "tags": [
    "carburant"
   ],
   "concept": "carburant-calcul-quantite"
  },
  {
   "id": "exam_q1_1",
   "sectionId": "mod4_sec3",
   "question": "Quelle est la vitesse maximale autorisée dans la bande côtière des 300 m ?",
   "options": {
    "A": "3 nœuds",
    "B": "5 km/h",
    "C": "5 nœuds"
   },
   "correct": "C",
   "explanation": "Dans la bande des 300 m à partir du rivage, la vitesse est limitée à 5 nœuds.",
   "tags": [
    "vitesse-zones"
   ],
   "concept": "vitesse-300m",
   "near": [
    "c13_loisirs_05",
    "exam_q3_5",
    "exam_q4_11",
    "ext_bal_101"
   ]
  },
  {
   "id": "exam_q1_2",
   "sectionId": "mod1_sec3",
   "question": "Faisant route au nord, vous vous trouvez face à cette bouée. Que faites-vous ?",
   "options": {
    "A": "Je viens à droite",
    "B": "Je viens à gauche",
    "C": "Je viens indifféremment à droite ou à gauche"
   },
   "correct": "B",
   "explanation": "Deux cônes noirs opposés par la pointe et une coque jaune à bande noire : c’est une marque cardinale Ouest, il faut passer à l’ouest du danger. En route au nord, l’ouest est sur votre gauche : vous venez à gauche.",
   "figure": {
    "fig": "mark",
    "type": "card-w"
   },
   "tags": [
    "cardinales"
   ],
   "concept": "card-ouest-passage",
   "near": [
    "c3_cardinales_10"
   ]
  },
  {
   "id": "exam_q1_3",
   "sectionId": "mod3_sec3",
   "question": "Vous vous rapprochez d’un navire dont les relèvements successifs à intervalles de 5 min ont été de 320, 310, 320. Y a-t-il danger ?",
   "options": {
    "A": "Oui",
    "B": "Non"
   },
   "correct": "A",
   "explanation": "Les relèvements 320°, 310°, 320° ne varient pas de façon franche (320° au début et à la fin) alors que la distance diminue : le relèvement doit être considéré comme constant, il y a risque d’abordage. Dans le doute, on considère toujours que le risque existe (règle 7).",
   "tags": [
    "regles-barre"
   ],
   "concept": "regle-relevement-constant"
  },
  {
   "id": "exam_q1_4",
   "sectionId": "mod4_sec3",
   "question": "Que signifie ce pavillon sur une embarcation ?",
   "options": {
    "A": "J’ai besoin de secours",
    "B": "Je transporte des matières dangereuses",
    "C": "J’ai des plongeurs en action"
   },
   "correct": "C",
   "explanation": "Ce pavillon rouge barré d’une diagonale blanche signale des plongeurs en action (pavillon plongée, utilisé avec ou à la place du pavillon A). Il faut s’en tenir à plus de 100 m et réduire sa vitesse.",
   "figure": {
    "fig": "flag",
    "flag": "diver-red"
   },
   "tags": [
    "pavillons",
    "loisirs"
   ],
   "concept": "pavillon-plongee",
   "near": [
    "exam_q3_10"
   ]
  },
  {
   "id": "exam_q1_5",
   "sectionId": "mod1_sec2",
   "question": "Quelle peut être la signification de cette bouée jaune ?",
   "options": {
    "A": "Danger nouveau",
    "B": "Présence de câbles sous-marins",
    "C": "Cardinale sud"
   },
   "correct": "B",
   "explanation": "Une bouée entièrement jaune avec un voyant en X est une marque spéciale : elle signale une zone ou un objet particulier, par exemple des câbles sous-marins, une conduite ou une zone d’exercices.",
   "figure": {
    "fig": "mark",
    "type": "special"
   },
   "tags": [
    "marques-speciales"
   ],
   "concept": "speciale-identifier"
  },
  {
   "id": "exam_q1_6",
   "sectionId": "mod2_sec1",
   "question": "De quelle couleur sont les feux de mouillage d’un navire de 50 m ?",
   "options": {
    "A": "Rouges",
    "B": "Blancs",
    "C": "Jaunes, à éclats"
   },
   "correct": "B",
   "explanation": "Un navire au mouillage montre un feu blanc visible sur tout l’horizon à l’avant ; à partir de 50 m, il en montre un second, plus bas, à l’arrière. Il s’agit donc de feux blancs.",
   "tags": [
    "feux-navires"
   ],
   "concept": "feux-mouillage-50m-plus"
  },
  {
   "id": "exam_q1_7",
   "sectionId": "mod2_sec1",
   "question": "Quel est le secteur du feu blanc de mât d’un navire à moteur ?",
   "options": {
    "A": "112,5°",
    "B": "135°",
    "C": "225°"
   },
   "correct": "C",
   "explanation": "Le feu de tête de mât blanc éclaire un secteur de 225° vers l’avant (de droit devant jusqu’à 22,5° sur l’arrière du travers de chaque bord). Les feux de côté couvrent 112,5° chacun et le feu de poupe 135°.",
   "tags": [
    "feux-navires"
   ],
   "concept": "secteur-feu-mat"
  },
  {
   "id": "exam_q1_8",
   "sectionId": "mod4_sec2",
   "question": "Un extincteur est obligatoire…",
   "options": {
    "A": "pour les navires de plus de 12 m",
    "B": "pour les navires à moteur hors-bord",
    "C": "pour les navires habitables"
   },
   "correct": "C",
   "explanation": "La liste de la DPAM prévoit un extincteur approuvé dans toutes les catégories de navigation, en nombre et en type fixés selon la longueur, l’habitabilité et le moteur in-bord. Réponse attendue : les navires habitables. La longueur de 12 m n’est pas le critère.",
   "tags": [
    "armement"
   ],
   "concept": "armement-extincteur"
  },
  {
   "id": "exam_q1_9",
   "sectionId": "mod1_sec1",
   "question": "Ce navire rentre-t-il au port ?",
   "options": {
    "A": "Oui",
    "B": "Non",
    "C": "On ne peut pas le savoir"
   },
   "correct": "A",
   "explanation": "Le navire avance vers la droite : son tribord est tourné vers vous et il laisse les marques vertes (coniques) sur tribord et les rouges sur bâbord. En région AISM A, c’est le sens de l’entrée au port.",
   "image": "assets/q/exam_q1_9.webp",
   "tags": [
    "balisage-lateral"
   ],
   "concept": "lat-sens-conventionnel"
  },
  {
   "id": "exam_q1_10",
   "sectionId": "mod1_sec3",
   "question": "Vous faites route au 245°. Vous voyez droit devant vous un feu blanc à 6 scintillements plus un éclat long. Que faites-vous ?",
   "options": {
    "A": "Je passe à droite",
    "B": "Je passe à gauche",
    "C": "Je passe indifféremment à droite ou à gauche"
   },
   "correct": "B",
   "explanation": "Six scintillements suivis d’un éclat long : marque cardinale Sud, il faut passer au sud. En route au 245°, le sud (180°) est 65° sur votre gauche : vous passez à gauche.",
   "tags": [
    "cardinales",
    "feux-balisage"
   ],
   "concept": "card-sud-feu"
  },
  {
   "id": "exam_q1_11",
   "sectionId": "mod2_sec2",
   "question": "En mer, de nuit, vous voyez un navire qui en plus de ses feux de route présente un feu rouge surmontant un feu blanc. De quoi s’agit-il ?",
   "options": {
    "A": "D’un navire à capacité de manœuvre restreinte",
    "B": "D’un navire en pêche",
    "C": "D’un bateau pilote"
   },
   "correct": "B",
   "explanation": "Un feu rouge au-dessus d’un feu blanc (visibles sur tout l’horizon) désigne un navire en pêche autre qu’un chalutier. À ne pas confondre avec le bateau pilote : blanc au-dessus de rouge.",
   "tags": [
    "peche",
    "feux-navires"
   ],
   "concept": "peche-rouge-sur-blanc",
   "near": [
    "c5_peche_01",
    "ext_ves_16"
   ]
  },
  {
   "id": "exam_q1_12",
   "sectionId": "mod3_sec1",
   "question": "Ce navire vous fait entendre cinq sons brefs. Que veut-il vous dire ?",
   "options": {
    "A": "Je ne suis pas maître de ma manœuvre",
    "B": "J’ai des doutes sur votre manœuvre",
    "C": "Je suis en danger"
   },
   "correct": "B",
   "explanation": "Au moins cinq sons brefs et rapides signifient : « Je ne comprends pas vos intentions » ou « Je doute que vous manœuvriez suffisamment » (règle 34 d).",
   "figure": {
    "fig": "sound",
    "pattern": "....."
   },
   "image": "assets/q/exam_q1_12.webp",
   "tags": [
    "signaux-sonores"
   ],
   "concept": "son-5-brefs"
  },
  {
   "id": "exam_q1_13",
   "sectionId": "mod3_sec3",
   "question": "Vous êtes à bord d’un bateau à moteur. De nuit, faisant route à 12 nœuds, vous apercevez à 45° sur bâbord un navire dont les seuls feux visibles sont un feu rouge et un feu vert. Y a-t-il risque d’abordage ?",
   "options": {
    "A": "Oui",
    "B": "Non"
   },
   "correct": "A",
   "explanation": "Ne voir que ses deux feux de côté (rouge et vert), sans feu de mât, signifie que ce navire (sans doute un voilier) a l’avant pointé vers vous. Faute d’information sur l’évolution du relèvement, il faut considérer qu’il y a risque d’abordage (règle 7), et c’est à votre navire à moteur de s’écarter du voilier.",
   "tags": [
    "regles-barre",
    "feux-navires"
   ],
   "concept": "regle-risque-feux-cote"
  },
  {
   "id": "exam_q1_14",
   "sectionId": "mod2_sec3",
   "question": "Ce navire présente 3 boules noires dans sa mâture. Cela signifie :",
   "options": {
    "A": "Je suis à capacité de manœuvre restreinte",
    "B": "Je suis handicapé par mon tirant d’eau",
    "C": "Je suis échoué"
   },
   "correct": "C",
   "explanation": "Trois boules noires superposées désignent de jour un navire échoué (de nuit : deux feux rouges superposés en plus des feux de mouillage).",
   "figure": {
    "fig": "shapes",
    "shapes": "ball,ball,ball"
   },
   "image": "assets/q/exam_q1_14.webp",
   "tags": [
    "navires-speciaux",
    "marques-jour"
   ],
   "concept": "echoue-boules",
   "near": [
    "q_2_3_2"
   ]
  },
  {
   "id": "exam_q1_15",
   "sectionId": "mod1_sec2",
   "question": "En route dans un chenal, vous apercevez cette bouée rouge et blanche. Que signifie-t-elle pour vous ?",
   "options": {
    "A": "Zone de tir",
    "B": "Bouée latérale bâbord",
    "C": "Bouée d’eaux saines",
    "D": "Danger isolé"
   },
   "correct": "C",
   "explanation": "Bandes verticales rouges et blanches avec un voyant sphérique rouge : marque d’eaux saines (milieu de chenal, atterrissage). On peut passer de part et d’autre.",
   "figure": {
    "fig": "mark",
    "type": "safewater"
   },
   "tags": [
    "marques-speciales"
   ],
   "concept": "eaux-saines-identifier"
  },
  {
   "id": "exam_q1_16",
   "sectionId": "mod1_sec2",
   "question": "En mer, de nuit, vous apercevez devant vous un feu blanc isophase. Que devez-vous faire ?",
   "options": {
    "A": "Je passe impérativement à droite",
    "B": "Je passe impérativement à gauche",
    "C": "Je passe indifféremment à droite ou à gauche"
   },
   "correct": "C",
   "explanation": "Un feu blanc isophase (ou à occultations, à un éclat long, ou Mo(A)) signale une marque d’eaux saines : les eaux sont navigables tout autour, on passe d’un côté ou de l’autre.",
   "tags": [
    "marques-speciales",
    "feux-balisage"
   ],
   "concept": "eaux-saines-feu",
   "near": [
    "exam_q4_16"
   ]
  },
  {
   "id": "exam_q1_17",
   "sectionId": "mod3_sec3",
   "question": "À bord d’un navire, la veille est obligatoire…",
   "options": {
    "A": "en permanence",
    "B": "du lever au coucher du soleil",
    "C": "à moins de 20 milles de la côte"
   },
   "correct": "A",
   "explanation": "Tout navire doit assurer en permanence une veille visuelle et auditive appropriée (règle 5 du RIPAM).",
   "tags": [
    "regles-barre"
   ],
   "concept": "regle-veille",
   "near": [
    "var_regle-veille_2"
   ]
  },
  {
   "id": "exam_q1_18",
   "sectionId": "mod3_sec3",
   "question": "Sortant du port aux commandes de votre navire à moteur, vous constatez que vous êtes rattrapé par un voilier. Que faites-vous ?",
   "options": {
    "A": "Le voilier étant prioritaire, vous serrez à droite",
    "B": "Vous ralentissez pour faciliter le dépassement",
    "C": "Vous conservez votre cap et votre vitesse"
   },
   "correct": "C",
   "explanation": "Tout navire qui en rattrape un autre doit s’en écarter, même un voilier (règle 13). Le navire rattrapé, ici le vôtre, conserve son cap et sa vitesse (règle 17).",
   "tags": [
    "regles-barre"
   ],
   "concept": "regle-rattrapant"
  },
  {
   "id": "exam_q1_19",
   "sectionId": "mod1_sec1",
   "question": "En rentrant du large, vous rencontrez cette marque. Que faites-vous ?",
   "options": {
    "A": "Je la laisse à droite",
    "B": "Je la laisse à gauche",
    "C": "Je la laisse indifféremment d’un côté ou de l’autre"
   },
   "correct": "A",
   "explanation": "Marque conique verte : marque latérale tribord. En venant du large (région AISM A), on la laisse sur tribord, c’est-à-dire à droite.",
   "figure": {
    "fig": "mark",
    "type": "lat-stbd",
    "num": "5"
   },
   "tags": [
    "balisage-lateral"
   ],
   "concept": "lat-tribord-entrant"
  },
  {
   "id": "exam_q1_20",
   "sectionId": "mod1_sec1",
   "question": "De nuit, sortant du port, vous rencontrez devant vous un feu rouge isophase. Que faites-vous ?",
   "options": {
    "A": "Je passe à droite",
    "B": "Je passe à gauche",
    "C": "Je passe indifféremment à droite ou à gauche"
   },
   "correct": "B",
   "explanation": "Un feu rouge signale une marque latérale bâbord. En sortant du port, on la laisse à droite (tribord) : vous passez donc à sa gauche.",
   "tags": [
    "balisage-lateral"
   ],
   "concept": "lat-babord-sortant"
  },
  {
   "id": "exam_q2_1",
   "sectionId": "bonus_sec2",
   "question": "Le pas de l’hélice influe sur…",
   "options": {
    "A": "la vitesse du bateau",
    "B": "le tirant d’eau du bateau",
    "C": "le diamètre de l’hélice"
   },
   "correct": "A",
   "explanation": "Le pas est la distance théorique parcourue par l’hélice en un tour. À régime égal, un pas plus grand donne plus de vitesse : le pas influe sur la vitesse du bateau.",
   "tags": [
    "pratique"
   ],
   "concept": "helice-pas"
  },
  {
   "id": "exam_q2_2",
   "sectionId": "mod3_sec3",
   "question": "Vous êtes sur le navire B. Il y a risque d’abordage. Que faites-vous ?",
   "options": {
    "A": "Je maintiens mon cap et ma vitesse",
    "B": "Je viens à droite",
    "C": "Je viens à gauche"
   },
   "correct": "A",
   "explanation": "Le navire A voit B sur son tribord : c’est à A de s’écarter (règle 15). B voit A sur bâbord, il est privilégié et doit conserver son cap et sa vitesse (règle 17).",
   "image": "assets/q/exam_q2_2.webp",
   "tags": [
    "regles-barre"
   ],
   "concept": "regle-routes-croisees"
  },
  {
   "id": "exam_q2_3",
   "sectionId": "mod1_sec3",
   "question": "Faisant route à l’ouest, vous apercevez cette bouée droit devant vous. Que faites-vous ?",
   "options": {
    "A": "Je la laisse à tribord",
    "B": "Je la laisse à bâbord",
    "C": "Je la laisse indifféremment à tribord ou à bâbord"
   },
   "correct": "B",
   "explanation": "Deux cônes pointe en haut, noir au-dessus du jaune : marque cardinale Nord, il faut passer au nord. En route à l’ouest, le nord est sur votre droite : vous venez à droite et laissez la marque sur bâbord.",
   "figure": {
    "fig": "mark",
    "type": "card-n"
   },
   "tags": [
    "cardinales"
   ],
   "concept": "card-nord-passage",
   "near": [
    "c3_cardinales_02",
    "exam_q4_18"
   ]
  },
  {
   "id": "exam_q2_4",
   "sectionId": "mod3_sec3",
   "question": "Vous vous préparez à entrer dans le chenal et vous apercevez ce navire sur bâbord. Que faites-vous ?",
   "options": {
    "A": "Je conserve mon cap et ma vitesse",
    "B": "Je viens à gauche pour passer derrière ce navire",
    "C": "J’émets cinq sons brefs pour signaler ma présence"
   },
   "correct": "B",
   "explanation": "Ce grand navire suit le chenal, où il est seul à pouvoir naviguer en sécurité. Un petit navire (moins de 20 m) ne doit pas le gêner (règle 9) : vous le laissez passer en venant à gauche pour passer derrière lui, même s’il arrive par votre bâbord.",
   "image": "assets/q/exam_q2_4.webp",
   "tags": [
    "regles-barre"
   ],
   "concept": "regle-chenal-ne-pas-gener"
  },
  {
   "id": "exam_q2_5",
   "sectionId": "mod3_sec2",
   "question": "À l’entrée du port, vous voyez ce signal (3 feux rouges fixes). Que signifie ce signal ?",
   "options": {
    "A": "Les navires doivent attendre",
    "B": "Les navires peuvent passer (trafic à double sens)",
    "C": "Les navires peuvent passer (trafic à sens unique)"
   },
   "correct": "A",
   "explanation": "Trois feux rouges fixes (ou à occultations lentes) superposés : les navires ne doivent pas entrer ni sortir, ils attendent. Trois feux rouges à éclats signifient un danger grave : port fermé.",
   "figure": {
    "fig": "port",
    "lights": "RRR"
   },
   "tags": [
    "signaux-portuaires"
   ],
   "concept": "port-3-rouges"
  },
  {
   "id": "exam_q2_6",
   "sectionId": "mod4_sec3",
   "question": "Si vous n’êtes pas titulaire d’un brevet d’État de moniteur de ski nautique, pouvez-vous être seul à bord d’une embarcation tractant un skieur nautique ?",
   "options": {
    "A": "Non",
    "B": "Oui si j’en ai fait la déclaration préalable aux Affaires maritimes",
    "C": "Oui si mon bateau est muni d’un rétroviseur"
   },
   "correct": "A",
   "explanation": "Pour tracter un skieur, il faut deux personnes à bord : le pilote et une personne chargée de surveiller le skieur. Seul le titulaire du brevet d’État de moniteur de ski nautique peut être seul à bord.",
   "tags": [
    "loisirs"
   ],
   "concept": "ski-deux-personnes",
   "near": [
    "c13_loisirs_07",
    "exam_q4_7",
    "q_4_3_3"
   ]
  },
  {
   "id": "exam_q2_7",
   "sectionId": "mod3_sec1",
   "question": "Dans la brume en mer, vous entendez un son long suivi de deux sons brefs. De quoi s’agit-il ?",
   "options": {
    "A": "D’un navire à propulsion mécanique sans erre",
    "B": "D’un navire remorqué",
    "C": "D’un navire non maître de sa manœuvre"
   },
   "correct": "C",
   "explanation": "Par visibilité réduite, un son prolongé suivi de deux sons brefs (toutes les 2 minutes au plus) est émis notamment par un navire non maître de sa manœuvre, à capacité de manœuvre restreinte, un voilier ou un navire en pêche. Le navire remorqué émet un long et trois brefs ; le navire à moteur stoppé, deux longs.",
   "figure": {
    "fig": "sound",
    "pattern": "-.."
   },
   "tags": [
    "signaux-sonores"
   ],
   "concept": "brume-1-long-2-brefs"
  },
  {
   "id": "exam_q2_8",
   "sectionId": "mod4_sec1",
   "question": "Les véhicules nautiques à moteur doivent être équipés de feux automatiques à main. Qu’est-ce qu’un feu automatique à main ?",
   "options": {
    "A": "Un engin tenu à la main et montrant une lueur rouge",
    "B": "Une fusée projetant en l’air des matières donnant une lueur rouge",
    "C": "Un engin flottant dégageant une fumée orange"
   },
   "correct": "A",
   "explanation": "Le feu automatique à main est un engin pyrotechnique que l’on tient à la main et qui produit une lumière rouge vive : c’est un signal de détresse. La fusée à parachute monte dans le ciel ; le fumigène produit une fumée orange.",
   "image": "assets/q/exam_q2_8.webp",
   "tags": [
    "detresse"
   ],
   "concept": "detresse-feu-main",
   "near": [
    "gen_mod4_sec1_5",
    "var_detresse-feu-main_1"
   ]
  },
  {
   "id": "exam_q2_9",
   "sectionId": "mod4_sec1",
   "question": "Qui coordonne un sauvetage en mer ?",
   "options": {
    "A": "La SNSM",
    "B": "Le JRCC Tahiti",
    "C": "Les pompiers"
   },
   "correct": "B",
   "explanation": "En Polynésie française, c’est le JRCC Tahiti qui coordonne et dirige les opérations de recherche et de sauvetage en mer (le CROSS en métropole). On l’alerte sur le canal 16 de la VHF ou au 16 par téléphone.",
   "tags": [
    "detresse"
   ],
   "concept": "jrcc-coordination",
   "near": [
    "gen_mod4_sec1_1"
   ]
  },
  {
   "id": "exam_q2_10",
   "sectionId": "mod1_sec1",
   "question": "Entrant au port, vous voyez devant vous un feu vert à éclats. Que faites-vous ?",
   "options": {
    "A": "Je le laisse sur tribord",
    "B": "Je le laisse sur bâbord",
    "C": "Je le laisse indifféremment sur tribord ou sur bâbord"
   },
   "correct": "A",
   "explanation": "Un feu vert signale une marque latérale tribord. En entrant au port (région AISM A), on la laisse sur tribord.",
   "tags": [
    "balisage-lateral"
   ],
   "concept": "lat-tribord-entrant"
  },
  {
   "id": "exam_q2_11",
   "sectionId": "mod3_sec1",
   "question": "Ce navire manœuvre et émet deux sons brefs. Cela signifie :",
   "options": {
    "A": "Je viens à droite",
    "B": "Je viens à gauche",
    "C": "Je bats en arrière"
   },
   "correct": "B",
   "explanation": "En vue d’un autre navire, deux sons brefs signifient « Je viens sur bâbord », donc à gauche. Un son bref : « Je viens sur tribord » ; trois sons brefs : « Je bats en arrière ».",
   "figure": {
    "fig": "sound",
    "pattern": ".."
   },
   "image": "assets/q/exam_q2_11.webp",
   "tags": [
    "signaux-sonores"
   ],
   "concept": "son-2-brefs",
   "near": [
    "c7_sonores_09",
    "q_jeudi_1"
   ]
  },
  {
   "id": "exam_q2_12",
   "sectionId": "mod1_sec1",
   "question": "Sortant d’un port, vous rencontrez droit devant cette bouée verte. Quelle est votre réaction ?",
   "options": {
    "A": "Vous venez sur votre droite",
    "B": "Vous venez sur votre gauche",
    "C": "Vous la laissez à tribord"
   },
   "correct": "A",
   "explanation": "Bouée conique verte : marque latérale tribord. En sortant du port, on la laisse sur bâbord (à gauche) : vous venez donc sur votre droite.",
   "figure": {
    "fig": "mark",
    "type": "lat-stbd",
    "num": "5"
   },
   "tags": [
    "balisage-lateral"
   ],
   "concept": "lat-tribord-sortant"
  },
  {
   "id": "exam_q2_13",
   "sectionId": "mod4_sec2",
   "question": "Vous voulez vous rendre dans un port distant de 60 milles. Votre vitesse est de 12 nœuds et votre consommation de 10 litres par heure. Combien de carburant vous faut-il si vous vous ménagez une marge de sécurité de 30 % ?",
   "options": {
    "A": "50 litres",
    "B": "65 litres",
    "C": "80 litres"
   },
   "correct": "B",
   "explanation": "60 milles à 12 nœuds = 5 h de route ; 5 h × 10 l/h = 50 l. Avec 30 % de marge : 50 × 1,3 = 65 l.",
   "tags": [
    "carburant"
   ],
   "concept": "carburant-calcul-quantite"
  },
  {
   "id": "exam_q2_14",
   "sectionId": "mod4_sec3",
   "question": "À quelle distance minimale devez-vous passer de ce pavillon ?",
   "options": {
    "A": "100 mètres",
    "B": "300 mètres",
    "C": "1000 mètres"
   },
   "correct": "A",
   "explanation": "Le pavillon A (blanc et bleu) signale des plongeurs en immersion : il faut passer à plus de 100 m et réduire sa vitesse.",
   "figure": {
    "fig": "flag",
    "flag": "A"
   },
   "tags": [
    "loisirs",
    "pavillons"
   ],
   "concept": "plongee-distance",
   "near": [
    "exam_q4_14"
   ]
  },
  {
   "id": "exam_q2_15",
   "sectionId": "mod4_sec1",
   "question": "Êtes-vous obligé de porter secours à un navire en détresse ?",
   "options": {
    "A": "Oui, toujours",
    "B": "Oui si cela ne met pas en péril votre bateau et ses occupants",
    "C": "Non"
   },
   "correct": "B",
   "explanation": "Tout capitaine doit porter assistance à une personne en danger en mer, dans la mesure où il peut le faire sans danger sérieux pour son navire et les personnes à bord. Il doit aussi alerter les secours (JRCC Tahiti, canal 16).",
   "tags": [
    "detresse"
   ],
   "concept": "assistance-obligation"
  },
  {
   "id": "exam_q2_16",
   "sectionId": "mod3_sec3",
   "question": "Vous êtes à bord d’un bateau à moteur. En mer, de nuit, vous voyez par bâbord avant un feu vert isolé à relèvement constant. Que faites-vous ?",
   "options": {
    "A": "Je conserve mon cap et ma vitesse",
    "B": "Je manœuvre",
    "C": "J’attire son attention par des signaux lumineux"
   },
   "correct": "B",
   "explanation": "Un feu vert seul, sans feu de mât blanc, est le feu de côté tribord d’un voilier. Il coupe votre route de bâbord à tribord avec un relèvement constant : il y a risque d’abordage et, face à un voilier, le navire à moteur doit manœuvrer.",
   "tags": [
    "regles-barre"
   ],
   "concept": "regle-moteur-vs-voile"
  },
  {
   "id": "exam_q2_17",
   "sectionId": "mod1_sec3",
   "question": "Faisant route de nuit au 172°, vous apercevez devant vous un feu blanc montrant 3 scintillements. Que faites-vous ?",
   "options": {
    "A": "Je passe à droite",
    "B": "Je passe à gauche",
    "C": "Je passe indifféremment à droite ou à gauche"
   },
   "correct": "B",
   "explanation": "Trois scintillements blancs : marque cardinale Est, il faut passer à l’est. En route au 172°, l’est (090°) est 82° sur votre gauche : vous passez à gauche.",
   "tags": [
    "cardinales",
    "feux-balisage"
   ],
   "concept": "card-est-feu"
  },
  {
   "id": "exam_q2_18",
   "sectionId": "mod3_sec1",
   "question": "Dans la brume en mer, vous entendez un son prolongé répété toutes les deux minutes. Il s’agit …",
   "options": {
    "A": "d’un navire à propulsion mécanique sans erre",
    "B": "d’un navire en détresse",
    "C": "d’un navire à propulsion mécanique avec erre"
   },
   "correct": "C",
   "explanation": "Par visibilité réduite, un navire à propulsion mécanique faisant route avec de l’erre émet un son prolongé au moins toutes les 2 minutes ; stoppé sans erre, il émet deux sons prolongés (règle 35).",
   "figure": {
    "fig": "sound",
    "pattern": "-"
   },
   "image": "assets/q/exam_q2_18.webp",
   "tags": [
    "signaux-sonores"
   ],
   "concept": "brume-1-prolonge",
   "near": [
    "c7_sonores_02",
    "c7_sonores_08"
   ]
  },
  {
   "id": "exam_q2_19",
   "sectionId": "mod1_sec2",
   "question": "Que peut indiquer cette bouée jaune ?",
   "options": {
    "A": "Bouée cardinale est",
    "B": "Danger isolé",
    "C": "Limite de zone de baignade"
   },
   "correct": "C",
   "explanation": "Les bouées sphériques jaunes font partie du balisage des plages : un collier de petites sphères délimite la zone de baignade (de grosses sphères marquent la limite des 300 m ou une zone interdite aux navires à moteur). Une cardinale est jaune et noire ; un danger isolé est noir et rouge.",
   "image": "assets/q/exam_q2_19.webp",
   "tags": [
    "plages"
   ],
   "concept": "plage-baignade"
  },
  {
   "id": "exam_q2_20",
   "sectionId": "mod2_sec3",
   "question": "Que montre de jour un navire handicapé par son tirant d’eau ?",
   "options": {
    "A": "Deux cônes opposés par la base",
    "B": "Trois boules noires",
    "C": "Un cylindre noir"
   },
   "correct": "C",
   "explanation": "De jour, un navire handicapé par son tirant d’eau montre un cylindre noir ; de nuit, trois feux rouges superposés (règle 28).",
   "tags": [
    "navires-speciaux",
    "marques-jour"
   ],
   "concept": "tirant-eau-cylindre",
   "near": [
    "c6_particuliers_17"
   ]
  },
  {
   "id": "exam_q3_1",
   "sectionId": "mod3_sec1",
   "question": "Ce navire siffle 3 coups brefs. Cela signifie :",
   "options": {
    "A": "Je viens à droite",
    "B": "Je viens à gauche",
    "C": "Je bats en arrière",
    "D": "J’attire votre attention"
   },
   "correct": "C",
   "explanation": "En vue d’un autre navire, trois sons brefs signifient « Je bats en arrière » (règle 34).",
   "figure": {
    "fig": "sound",
    "pattern": "..."
   },
   "image": "assets/q/exam_q3_1.webp",
   "tags": [
    "signaux-sonores"
   ],
   "concept": "son-3-brefs",
   "near": [
    "c7_sonores_07",
    "q_3_1_1"
   ]
  },
  {
   "id": "exam_q3_2",
   "sectionId": "mod3_sec3",
   "question": "Un mille marin vaut :",
   "options": {
    "A": "1 604 m",
    "B": "1 731 m",
    "C": "1 852 m"
   },
   "correct": "C",
   "explanation": "Un mille marin vaut 1 852 m, soit une minute d’arc de latitude.",
   "tags": [
    "pratique"
   ],
   "concept": "unite-mille-noeud"
  },
  {
   "id": "exam_q3_3",
   "sectionId": "mod1_sec1",
   "question": "Sortant du port vous apercevez un feu rouge à éclats devant vous. Que faites-vous ?",
   "options": {
    "A": "Je le laisse à droite",
    "B": "Je le laisse à gauche",
    "C": "Je le laisse indifféremment à droite ou à gauche"
   },
   "correct": "A",
   "explanation": "Un feu rouge signale une marque latérale bâbord. En sortant du port, on la laisse à droite (tribord).",
   "tags": [
    "balisage-lateral"
   ],
   "concept": "lat-babord-sortant"
  },
  {
   "id": "exam_q3_4",
   "sectionId": "mod4_sec3",
   "question": "Ce pictogramme signifie :",
   "options": {
    "A": "Ski nautique autorisé",
    "B": "Ski nautique interdit",
    "C": "Zone réservée au ski nautique"
   },
   "correct": "B",
   "explanation": "Pictogramme barré de rouge : ski nautique interdit dans la zone.",
   "image": "assets/q/exam_q3_4.webp",
   "tags": [
    "loisirs",
    "plages"
   ],
   "concept": "picto-ski-interdit"
  },
  {
   "id": "exam_q3_5",
   "sectionId": "mod4_sec3",
   "question": "La vitesse est limitée à 5 nœuds jusqu’à :",
   "options": {
    "A": "100 mètres de la côte",
    "B": "300 mètres de la côte",
    "C": "500 mètres de la côte",
    "D": "1 mille de la côte"
   },
   "correct": "B",
   "explanation": "La vitesse est limitée à 5 nœuds dans la bande des 300 m à partir du rivage.",
   "tags": [
    "vitesse-zones"
   ],
   "concept": "vitesse-300m",
   "near": [
    "c13_loisirs_05",
    "exam_q1_1",
    "exam_q4_11",
    "ext_bal_101"
   ]
  },
  {
   "id": "exam_q3_6",
   "sectionId": "mod3_sec3",
   "question": "En bateau à moteur, vous voyez devant vous un autre bateau à moteur faisant une route directement opposée à la vôtre. Comment manœuvrez-vous ?",
   "options": {
    "A": "Je conserve mon cap et ma vitesse",
    "B": "Je m’écarte sur la gauche",
    "C": "Je m’écarte sur la droite"
   },
   "correct": "C",
   "explanation": "Deux navires à moteur à routes directement opposées : chacun vient sur sa droite (tribord) pour se croiser bâbord sur bâbord (règle 14).",
   "image": "assets/q/exam_q3_6.webp",
   "tags": [
    "regles-barre"
   ],
   "concept": "regle-routes-opposees"
  },
  {
   "id": "exam_q3_7",
   "sectionId": "mod3_sec2",
   "question": "À l’entrée d’un port, vous voyez ce signal (3 feux verts à occultations lentes). Que signifie-t-il ?",
   "options": {
    "A": "Étale de pleine mer",
    "B": "Les navires doivent attendre pour passer",
    "C": "Les navires peuvent passer"
   },
   "correct": "C",
   "explanation": "Trois feux verts fixes ou à occultations lentes superposés : les navires peuvent passer, circulation à sens unique. (Vert-vert-blanc = circulation à double sens ; trois rouges = passage interdit.)",
   "figure": {
    "fig": "port",
    "lights": "GGG",
    "flash": "occ"
   },
   "tags": [
    "signaux-portuaires"
   ],
   "concept": "port-3-verts"
  },
  {
   "id": "exam_q3_8",
   "sectionId": "mod1_sec3",
   "question": "Vous faites route à l’est. Vous voyez droit devant un feu blanc scintillant continu. Que faites-vous ?",
   "options": {
    "A": "Je viens à droite",
    "B": "Je viens à gauche",
    "C": "Je viens indifféremment à droite ou à gauche"
   },
   "correct": "B",
   "explanation": "Un feu blanc scintillant continu signale une marque cardinale Nord : il faut passer au nord. En route à l’est, le nord est sur votre gauche : vous venez à gauche.",
   "tags": [
    "cardinales",
    "feux-balisage"
   ],
   "concept": "card-nord-feu",
   "near": [
    "var_card-nord-feu_1"
   ]
  },
  {
   "id": "exam_q3_9",
   "sectionId": "mod3_sec3",
   "question": "Un navire à moteur et un voilier font des routes directement opposées et risquent de s’aborder. Qui doit manœuvrer ?",
   "options": {
    "A": "Le voilier",
    "B": "Le bateau à moteur",
    "C": "Les deux"
   },
   "correct": "B",
   "explanation": "Un navire à propulsion mécanique doit s’écarter de la route d’un voilier (règle 18), même lorsque les routes sont opposées.",
   "tags": [
    "regles-barre"
   ],
   "concept": "regle-moteur-vs-voile"
  },
  {
   "id": "exam_q3_10",
   "sectionId": "mod4_sec3",
   "question": "Que signifie ce pavillon sur une embarcation ?",
   "options": {
    "A": "Je transporte des explosifs",
    "B": "Je demande du secours",
    "C": "J’ai des plongeurs en action"
   },
   "correct": "C",
   "explanation": "Ce pavillon rouge barré d’une diagonale blanche signale des plongeurs en action (pavillon plongée d’origine nord-américaine, utilisé avec ou à la place du pavillon A) : passez à plus de 100 m et à vitesse réduite.",
   "figure": {
    "fig": "flag",
    "flag": "diver-red"
   },
   "tags": [
    "pavillons",
    "loisirs"
   ],
   "concept": "pavillon-plongee",
   "near": [
    "exam_q1_4"
   ]
  },
  {
   "id": "exam_q3_11",
   "sectionId": "mod2_sec1",
   "question": "En arrivant sur une rade, vous apercevez devant vous un navire portant une boule noire. Que faites-vous ?",
   "options": {
    "A": "J’attends qu’il manœuvre",
    "B": "Je manœuvre",
    "C": "Je conserve mon cap et ma vitesse"
   },
   "correct": "B",
   "explanation": "Une boule noire désigne un navire au mouillage. Il ne fait pas route : c’est à vous, qui faites route, de manœuvrer pour l’éviter.",
   "tags": [
    "marques-jour"
   ],
   "concept": "mouillage-boule"
  },
  {
   "id": "exam_q3_12",
   "sectionId": "bonus_sec2",
   "question": "Vous faites route au 070°. Vous voulez vous diriger au 195°. Quelle manœuvre effectuez-vous ?",
   "options": {
    "A": "Vous tournez à droite",
    "B": "Vous tournez à gauche",
    "C": "Vous battez en arrière"
   },
   "correct": "A",
   "explanation": "Pour passer du 070° au 195°, il faut augmenter le cap de 125° : on tourne à droite (le chemin à gauche ferait 235°).",
   "tags": [
    "pratique"
   ],
   "concept": "cap-sens-virage"
  },
  {
   "id": "exam_q3_13",
   "sectionId": "mod1_sec1",
   "question": "Quelle est cette bouée rouge avec une bande horizontale verte ?",
   "options": {
    "A": "Une bouée d’épave",
    "B": "Une bouée de chenal préféré tribord",
    "C": "Une bouée de chenal préféré bâbord"
   },
   "correct": "B",
   "explanation": "Bouée rouge (cylindrique) avec une bande horizontale verte : marque bâbord modifiée, qui indique que le chenal préféré est à tribord. Feu rouge Fl(2+1).",
   "figure": {
    "fig": "mark",
    "type": "pref-stbd"
   },
   "tags": [
    "balisage-lateral"
   ],
   "concept": "pref-identifier",
   "near": [
    "ext_lat_10"
   ]
  },
  {
   "id": "exam_q3_14",
   "sectionId": "mod4_sec2",
   "question": "Un navire armé pour la navigation côtière peut s’éloigner au maximum de…",
   "options": {
    "A": "5 milles d’un abri",
    "B": "6 milles d’un abri",
    "C": "10 milles d’un abri"
   },
   "correct": "A",
   "explanation": "En Polynésie française, l’armement côtier permet de s’éloigner jusqu’à 5 milles d’un abri (6 milles en métropole) ; au-delà, l’armement hauturier est exigé. Le permis côtier polynésien est lui aussi limité à 5 milles d’un abri.",
   "tags": [
    "armement"
   ],
   "concept": "armement-cotier-5-milles",
   "near": [
    "ext_sec_129"
   ]
  },
  {
   "id": "exam_q3_15",
   "sectionId": "mod2_sec3",
   "question": "Vous croisez ce navire. De quel côté devez-vous passer ?",
   "options": {
    "A": "Du côté des deux feux verts verticaux",
    "B": "Du côté des deux feux rouges verticaux",
    "C": "D’un côté ou de l’autre indifféremment"
   },
   "correct": "A",
   "explanation": "Le rouge-blanc-rouge superposé indique un navire à capacité de manœuvre restreinte en travaux. Les deux feux verts superposés montrent le côté où l’on peut passer, les deux feux rouges le côté obstrué.",
   "image": "assets/q/exam_q3_15.webp",
   "tags": [
    "navires-speciaux"
   ],
   "concept": "ram-cote-passage",
   "near": [
    "c6_particuliers_01",
    "gen_mod2_sec3_3"
   ]
  },
  {
   "id": "exam_q3_16",
   "sectionId": "mod1_sec2",
   "question": "Que signifie cette bouée jaune au voisinage d’une plage ?",
   "options": {
    "A": "Zone interdite aux embarcations à moteur",
    "B": "Bouée bâbord de chenal traversier",
    "C": "Bouée tribord de chenal traversier"
   },
   "correct": "C",
   "explanation": "Près des plages, les chenaux traversiers sont balisés par des bouées jaunes : coniques à tribord, cylindriques à bâbord. Une bouée conique jaune marque donc le côté tribord.",
   "image": "assets/q/exam_q3_16.webp",
   "tags": [
    "plages"
   ],
   "concept": "plage-chenal-traversier",
   "near": [
    "c2_speciales_04"
   ]
  },
  {
   "id": "exam_q3_17",
   "sectionId": "mod1_sec2",
   "question": "Dans un chenal, que signifient pour vous ces deux balises vertes ?",
   "options": {
    "A": "Zone de pêche",
    "B": "Chenal préféré tribord",
    "C": "Nouveau danger"
   },
   "correct": "C",
   "explanation": "Un danger nouveau, pas encore porté sur les cartes, peut être signalé en doublant la marque. Deux balises vertes côte à côte signalent donc un nouveau danger ; une épave récente peut aussi être signalée par la bouée d’épave d’urgence, à bandes verticales bleues et jaunes.",
   "image": "assets/q/c2_speciales_01.webp",
   "tags": [
    "marques-speciales"
   ],
   "concept": "danger-nouveau-doublement",
   "near": [
    "c2_speciales_01"
   ]
  },
  {
   "id": "exam_q3_18",
   "sectionId": "mod1_sec3",
   "question": "Faisant route au 070°, vous rencontrez cette marque. Que faites-vous ?",
   "options": {
    "A": "Je passe au nord",
    "B": "Je la laisse à tribord",
    "C": "Je la laisse à bâbord"
   },
   "correct": "C",
   "explanation": "Deux cônes pointe en bas, jaune au-dessus du noir : marque cardinale Sud, il faut passer au sud. En route au 070°, le sud (180°) est sur votre droite : vous venez à droite et laissez la marque à bâbord.",
   "figure": {
    "fig": "mark",
    "type": "card-s"
   },
   "tags": [
    "cardinales"
   ],
   "concept": "card-sud-passage"
  },
  {
   "id": "exam_q3_19",
   "sectionId": "mod2_sec1",
   "question": "Au minimum, quel feu doit montrer la nuit une petite embarcation à moteur (moins de 7 m, 7 nœuds au plus) ?",
   "options": {
    "A": "Un feu vert",
    "B": "Un feu blanc",
    "C": "Un feu rouge"
   },
   "correct": "B",
   "explanation": "Un navire à moteur de moins de 7 m dont la vitesse maximale ne dépasse pas 7 nœuds peut se contenter d’un feu blanc visible sur tout l’horizon (règle 23).",
   "tags": [
    "feux-navires"
   ],
   "concept": "feux-moteur-moins-7m",
   "near": [
    "c4_feux_02",
    "c4_feux_06"
   ]
  },
  {
   "id": "exam_q3_20",
   "sectionId": "mod3_sec1",
   "question": "Dans la brume, vous entendez 2 sons prolongés se répétant toutes les 2 minutes. Que faites-vous ?",
   "options": {
    "A": "Je stoppe immédiatement mon navire",
    "B": "Je me déroute pour porter assistance",
    "C": "Je continue ma route à vitesse réduite"
   },
   "correct": "C",
   "explanation": "Deux sons prolongés toutes les 2 minutes : navire à moteur stoppé, sans erre. Ce n’est pas un signal de détresse : vous poursuivez votre route prudemment, à vitesse réduite, en émettant vos propres signaux de brume. Si le signal paraît venir de l’avant du travers, réduisez au minimum pour gouverner, voire stoppez (règle 19).",
   "figure": {
    "fig": "sound",
    "pattern": "--"
   },
   "tags": [
    "signaux-sonores"
   ],
   "concept": "brume-conduite"
  },
  {
   "id": "exam_q4_1",
   "sectionId": "mod3_sec1",
   "question": "En bateau à moteur, en vue d’un autre navire, vous battez en arrière. Quel signal sonore émettez-vous ?",
   "options": {
    "A": "1 son bref",
    "B": "2 sons brefs",
    "C": "3 sons brefs"
   },
   "correct": "C",
   "explanation": "Trois sons brefs signifient « Je bats en arrière » ; un son bref « Je viens sur tribord », deux sons brefs « Je viens sur bâbord ».",
   "tags": [
    "signaux-sonores"
   ],
   "concept": "son-3-brefs",
   "near": [
    "c7_sonores_03",
    "c7_sonores_05"
   ]
  },
  {
   "id": "exam_q4_2",
   "sectionId": "mod4_sec3",
   "question": "Que signifie ce pictogramme ?",
   "options": {
    "A": "Fin de limitation de vitesse",
    "B": "Interdit aux véhicules nautiques à moteur",
    "C": "Attention, course de jetskis"
   },
   "correct": "B",
   "explanation": "Pictogramme barré de rouge montrant un jet-ski : la zone est interdite aux véhicules nautiques à moteur (VNM).",
   "image": "assets/q/exam_q4_2.webp",
   "tags": [
    "loisirs",
    "plages"
   ],
   "concept": "picto-vnm-interdit"
  },
  {
   "id": "exam_q4_3",
   "sectionId": "mod3_sec3",
   "question": "Vous êtes à bord d’un bateau à moteur. Il y a risque d’abordage avec ce navire. Que faites-vous ?",
   "options": {
    "A": "Étant prioritaire, je conserve mon cap et ma vitesse",
    "B": "Je manœuvre",
    "C": "Je siffle 5 sons brefs"
   },
   "correct": "B",
   "explanation": "Ce navire montre deux cônes opposés par la pointe : il est en pêche. Un navire à moteur faisant route doit s’écarter d’un navire en train de pêcher (règle 18) : vous manœuvrez.",
   "figure": {
    "fig": "shapes",
    "shapes": "cone-down,cone-up"
   },
   "image": "assets/q/exam_q4_3.webp",
   "tags": [
    "regles-barre",
    "peche"
   ],
   "concept": "regle-moteur-vs-peche"
  },
  {
   "id": "exam_q4_4",
   "sectionId": "mod1_sec3",
   "question": "Faisant route au nord, vous vous trouvez face à cette bouée. Que faites-vous ?",
   "options": {
    "A": "Je la laisse sur tribord",
    "B": "Je la laisse sur bâbord",
    "C": "Je la laisse indifféremment sur tribord ou sur bâbord"
   },
   "correct": "B",
   "explanation": "Deux cônes opposés par la base, noir-jaune-noir : marque cardinale Est, il faut passer à l’est. En route au nord, l’est est sur votre droite : vous venez à droite et laissez la marque sur bâbord.",
   "figure": {
    "fig": "mark",
    "type": "card-e"
   },
   "tags": [
    "cardinales"
   ],
   "concept": "card-est-passage",
   "near": [
    "c3_cardinales_08",
    "q_mardi_11"
   ]
  },
  {
   "id": "exam_q4_5",
   "sectionId": "mod3_sec2",
   "question": "Entrant au port à bord d’un petit bateau pouvant naviguer hors du chenal, vous voyez ce signal (trois feux rouges plus un feu jaune). Que faites-vous ?",
   "options": {
    "A": "Je m’arrête",
    "B": "J’entre dans le port",
    "C": "J’entre mais en dehors du chenal"
   },
   "correct": "C",
   "explanation": "Trois feux rouges : entrée interdite. Le feu jaune ajouté indique une dérogation : les navires qui naviguent en dehors du chenal principal peuvent passer.",
   "image": "assets/q/c8_regissants_04.webp",
   "tags": [
    "signaux-portuaires"
   ],
   "concept": "port-feu-jaune",
   "near": [
    "c8_regissants_04"
   ]
  },
  {
   "id": "exam_q4_6",
   "sectionId": "mod2_sec1",
   "question": "Les feux de route tribord et bâbord (vert et rouge) d’un navire à moteur d’une longueur de 8 m armé pour la navigation côtière doivent être visibles jusqu’à :",
   "options": {
    "A": "1 mille",
    "B": "2 milles",
    "C": "5 milles"
   },
   "correct": "A",
   "explanation": "Sur un navire de moins de 12 m, les feux de côté doivent porter à 1 mille (le feu de mât à 2 milles) ; de 12 m à moins de 50 m, les feux de côté portent à 2 milles ; 3 milles à partir de 50 m (règle 22).",
   "tags": [
    "feux-navires"
   ],
   "concept": "portee-feux-moins-12m"
  },
  {
   "id": "exam_q4_7",
   "sectionId": "mod4_sec3",
   "question": "Le pilote d’un bateau remorquant un skieur nautique ne peut être seul à bord que si :",
   "options": {
    "A": "Il reste dans la bande littorale des 300 m",
    "B": "Il dispose d’un coupe-circuit de sécurité",
    "C": "Il est titulaire du brevet d’État de moniteur de ski nautique"
   },
   "correct": "C",
   "explanation": "Le pilote d’un bateau qui tracte un skieur doit être accompagné d’une personne chargée de la surveillance, sauf s’il est titulaire du brevet d’État de moniteur de ski nautique.",
   "tags": [
    "loisirs"
   ],
   "concept": "ski-deux-personnes",
   "near": [
    "c13_loisirs_07",
    "exam_q2_6",
    "q_4_3_3"
   ]
  },
  {
   "id": "exam_q4_8",
   "sectionId": "mod2_sec3",
   "question": "De nuit, vous apercevez ce navire qui, en plus de ses feux de route, porte trois feux rouges alignés sur une même verticale. Quel est ce navire ?",
   "options": {
    "A": "Un navire non maître de sa manœuvre",
    "B": "Un navire handicapé par son tirant d’eau",
    "C": "Un navire échoué"
   },
   "correct": "B",
   "explanation": "Trois feux rouges superposés visibles sur tout l’horizon : navire handicapé par son tirant d’eau (règle 28). Le navire non maître de sa manœuvre en montre deux ; le navire échoué deux feux rouges plus les feux de mouillage.",
   "image": "assets/q/exam_q4_8.webp",
   "tags": [
    "navires-speciaux",
    "feux-navires"
   ],
   "concept": "tirant-eau-feux",
   "near": [
    "c6_particuliers_16",
    "q_mercredi_3"
   ]
  },
  {
   "id": "exam_q4_9",
   "sectionId": "mod4_sec2",
   "question": "Vous voulez vous éloigner jusqu’à 12 milles d’un abri. Votre navire doit être armé pour la navigation…",
   "options": {
    "A": "côtière",
    "B": "hauturière"
   },
   "correct": "B",
   "explanation": "En Polynésie française, au-delà de 5 milles d’un abri (6 milles en métropole), le navire doit avoir l’armement hauturier. Le permis côtier étant limité à 5 milles, il faut aussi l’extension hauturière.",
   "tags": [
    "armement"
   ],
   "concept": "armement-cotier-5-milles"
  },
  {
   "id": "exam_q4_10",
   "sectionId": "mod1_sec1",
   "question": "Entrant au port, vous voyez devant vous un feu rouge à éclats groupés 2 + 1. De quel côté devez-vous passer ?",
   "options": {
    "A": "Indifféremment à droite ou à gauche",
    "B": "De préférence à droite",
    "C": "De préférence à gauche"
   },
   "correct": "B",
   "explanation": "Feu rouge Fl(2+1) : marque bâbord modifiée, chenal préféré à tribord. En entrant, on la traite comme une marque bâbord en la laissant à gauche : on passe de préférence à droite.",
   "tags": [
    "balisage-lateral"
   ],
   "concept": "pref-passage"
  },
  {
   "id": "exam_q4_11",
   "sectionId": "mod4_sec3",
   "question": "Vitesse maximale autorisée dans la bande littorale des 300 mètres ?",
   "options": {
    "A": "3 nœuds",
    "B": "5 nœuds",
    "C": "8 nœuds"
   },
   "correct": "B",
   "explanation": "La vitesse est limitée à 5 nœuds dans la bande des 300 m à partir du rivage.",
   "tags": [
    "vitesse-zones"
   ],
   "concept": "vitesse-300m",
   "near": [
    "c13_loisirs_05",
    "exam_q1_1",
    "exam_q3_5",
    "ext_bal_101"
   ]
  },
  {
   "id": "exam_q4_12",
   "sectionId": "mod4_sec1",
   "question": "De nuit, vous apercevez dans le ciel une lueur rouge qui descend lentement. De quoi s’agit-il ?",
   "options": {
    "A": "D’un dragueur de mines qui signale qu’il est en opération",
    "B": "D’un navire en détresse",
    "C": "D’un pêcheur",
    "D": "D’un ovni"
   },
   "correct": "B",
   "explanation": "Une lueur rouge qui descend lentement dans le ciel est une fusée à parachute rouge : c’est un signal de détresse.",
   "tags": [
    "detresse"
   ],
   "concept": "detresse-fusee-parachute",
   "near": [
    "q_4_1_2"
   ]
  },
  {
   "id": "exam_q4_13",
   "sectionId": "mod4_sec2",
   "question": "Parmi ces quatre documents, lequel n’est pas obligatoire à bord d’un navire ?",
   "options": {
    "A": "L’acte de francisation",
    "B": "L’acte de vente du navire",
    "C": "Le titre de conduite du pilote",
    "D": "La carte marine de la région fréquentée"
   },
   "correct": "B",
   "explanation": "L’acte de vente n’a jamais à être à bord. Le titre de navigation (acte de francisation ou carte de circulation) et le titre de conduite le sont ; la carte marine de la région fréquentée est exigée au-delà de 5 milles d’un abri.",
   "tags": [
    "papiers"
   ],
   "concept": "papiers-titre-navigation"
  },
  {
   "id": "exam_q4_14",
   "sectionId": "mod4_sec3",
   "question": "À quelle distance minimale devez-vous passer de ce pavillon ?",
   "options": {
    "A": "300 m",
    "B": "200 m",
    "C": "100 m"
   },
   "correct": "C",
   "explanation": "Ce pavillon signale des plongeurs en action : il faut passer à plus de 100 m et réduire sa vitesse.",
   "figure": {
    "fig": "flag",
    "flag": "diver-red"
   },
   "tags": [
    "loisirs",
    "pavillons"
   ],
   "concept": "plongee-distance",
   "near": [
    "exam_q2_14"
   ]
  },
  {
   "id": "exam_q4_15",
   "sectionId": "mod3_sec3",
   "question": "Vous êtes sur le navire A et vous rattrapez le navire B. Que faites-vous ?",
   "options": {
    "A": "Je m’écarte",
    "B": "Je siffle cinq coups brefs",
    "C": "Je conserve mon cap et ma vitesse"
   },
   "correct": "A",
   "explanation": "Le navire A rattrape B : tout navire qui en rattrape un autre doit s’en écarter (règle 13). B conserve son cap et sa vitesse.",
   "image": "assets/q/exam_q4_15.webp",
   "tags": [
    "regles-barre"
   ],
   "concept": "regle-rattrapant"
  },
  {
   "id": "exam_q4_16",
   "sectionId": "mod1_sec2",
   "question": "Entrant au port de nuit, vous apercevez droit devant un feu à deux éclats blancs groupés. Que faites-vous ?",
   "options": {
    "A": "Je passe de préférence à droite",
    "B": "Je passe de préférence à gauche",
    "C": "Je passe indifféremment à droite ou à gauche"
   },
   "correct": "C",
   "explanation": "Feu blanc à deux éclats groupés : marque de danger isolé, posée sur un danger de faible étendue entouré d’eaux navigables. On peut la contourner d’un côté ou de l’autre, en s’en tenant à bonne distance.",
   "tags": [
    "marques-speciales",
    "feux-balisage"
   ],
   "concept": "danger-isole-feu",
   "near": [
    "exam_q1_16"
   ]
  },
  {
   "id": "exam_q4_17",
   "sectionId": "mod4_sec2",
   "question": "Comment s’appelle cet engin ?",
   "options": {
    "A": "Un radeau de sauvetage",
    "B": "Un engin flottant",
    "C": "Une brassière de sauvetage"
   },
   "correct": "B",
   "explanation": "Ce caisson rigide flottant, muni d’une filière, est un engin flottant : on s’y accroche dans l’eau. Il fait partie de la dotation côtière (5e catégorie), sauf si le navire est classé flottable.",
   "image": "assets/q/exam_q4_17.webp",
   "tags": [
    "armement"
   ],
   "concept": "armement-engin-flottant"
  },
  {
   "id": "exam_q4_18",
   "sectionId": "mod1_sec3",
   "question": "Faisant route à l’est, vous apercevez cette bouée droit devant. Que faites-vous ?",
   "options": {
    "A": "Je viens à droite",
    "B": "Je viens à gauche",
    "C": "Je viens indifféremment à droite ou à gauche"
   },
   "correct": "B",
   "explanation": "Deux cônes pointe en haut, noir au-dessus du jaune : marque cardinale Nord, il faut passer au nord. En route à l’est, le nord est sur votre gauche : vous venez à gauche.",
   "figure": {
    "fig": "mark",
    "type": "card-n"
   },
   "tags": [
    "cardinales"
   ],
   "concept": "card-nord-passage",
   "near": [
    "c3_cardinales_04",
    "exam_q2_3"
   ]
  },
  {
   "id": "exam_q4_19",
   "sectionId": "mod4_sec2",
   "question": "Votre réservoir contient 130 litres de carburant. Quelle est la distance maximale que vous pouvez parcourir, en conservant une marge de sécurité de 30 %, si vous consommez 10 litres par heure à une vitesse de 12 nœuds ?",
   "options": {
    "A": "109 milles",
    "B": "120 milles",
    "C": "156 milles"
   },
   "correct": "A",
   "explanation": "On garde 30 % de réserve : 130 l × 0,7 = 91 l utilisables, soit 9,1 h à 10 l/h. À 12 nœuds : 9,1 × 12 ≈ 109 milles.",
   "tags": [
    "carburant"
   ],
   "concept": "carburant-calcul-autonomie",
   "near": [
    "var_carburant-calcul-autonomie_2"
   ]
  },
  {
   "id": "exam_q4_20",
   "sectionId": "mod1_sec1",
   "question": "En sortant du port, vous apercevez cette bouée droit devant. Vous passez :",
   "options": {
    "A": "À droite",
    "B": "À gauche"
   },
   "correct": "B",
   "explanation": "Bouée rouge cylindrique : marque latérale bâbord. En sortant du port, on la laisse sur tribord (à droite) : vous passez à sa gauche.",
   "figure": {
    "fig": "mark",
    "type": "lat-port",
    "num": "4"
   },
   "tags": [
    "balisage-lateral"
   ],
   "concept": "lat-babord-sortant"
  },
  {
   "id": "q_1_1_1",
   "sectionId": "mod1_sec1",
   "question": "En venant du large pour entrer dans un port, de quel côté laissez-vous une bouée cylindrique rouge portant le numéro 4 ?",
   "options": {
    "A": "Sur tribord",
    "B": "Sur bâbord",
    "C": "Indifféremment d’un côté ou de l’autre"
   },
   "correct": "B",
   "explanation": "Dans le sens conventionnel (du large vers le port), une marque rouge cylindrique à numéro pair est une marque latérale bâbord : on la laisse à gauche.",
   "tags": [
    "balisage-lateral"
   ],
   "concept": "lat-babord-entrant",
   "near": [
    "ext_lat_2"
   ]
  },
  {
   "id": "ext_lat_2",
   "sectionId": "mod1_sec1",
   "question": "Vous sortez d’un port. De quel côté laissez-vous une bouée cylindrique rouge portant le numéro 4 ?",
   "options": {
    "A": "Sur bâbord",
    "B": "Indifféremment d’un côté ou de l’autre",
    "C": "Sur tribord"
   },
   "correct": "C",
   "explanation": "En sortant du port, on navigue à contresens du sens conventionnel : les marques bâbord (rouges) se laissent alors sur tribord (à droite).",
   "tags": [
    "balisage-lateral"
   ],
   "concept": "lat-babord-sortant",
   "near": [
    "q_1_1_1"
   ]
  },
  {
   "id": "q_1_1_3",
   "sectionId": "mod1_sec1",
   "question": "Vous sortez d’un port et rencontrez une bouée conique verte. De quel côté la laissez-vous ?",
   "options": {
    "A": "Sur bâbord",
    "B": "Sur tribord",
    "C": "Indifféremment d’un côté ou de l’autre"
   },
   "correct": "A",
   "explanation": "Une marque verte conique est une marque tribord dans le sens du large vers le port. En sortant, le sens est inversé : on la laisse sur bâbord (à gauche).",
   "tags": [
    "balisage-lateral"
   ],
   "concept": "lat-tribord-sortant"
  },
  {
   "id": "ext_lat_3",
   "sectionId": "mod1_sec1",
   "question": "En venant du large vers le port, de quel côté laissez-vous cette marque ?",
   "options": {
    "A": "D’un côté ou de l’autre",
    "B": "Sur bâbord",
    "C": "Sur tribord",
    "D": "Par le nord"
   },
   "correct": "C",
   "explanation": "Marque verte conique = marque latérale tribord : en venant du large, on la laisse sur tribord (à droite).",
   "figure": {
    "fig": "mark",
    "type": "lat-stbd"
   },
   "tags": [
    "balisage-lateral"
   ],
   "concept": "lat-tribord-entrant"
  },
  {
   "id": "q_1_1_4",
   "sectionId": "mod1_sec1",
   "question": "En région AISM A (Polynésie française), quel est le voyant d’une marque latérale tribord ?",
   "options": {
    "A": "Un cylindre rouge",
    "B": "Un cône vert, pointe en haut",
    "C": "Deux boules noires superposées",
    "D": "Une croix jaune en X"
   },
   "correct": "B",
   "explanation": "La marque tribord est verte et porte un voyant conique vert pointe en haut (moyen mnémotechnique : Tribord = Triangle vert).",
   "tags": [
    "balisage-lateral"
   ],
   "concept": "lat-identifier",
   "near": [
    "ext_lat_5"
   ]
  },
  {
   "id": "ext_lat_5",
   "sectionId": "mod1_sec1",
   "question": "En région AISM A, quel est le voyant d’une marque latérale bâbord ?",
   "options": {
    "A": "Un cylindre rouge",
    "B": "Un cône vert pointe en haut",
    "C": "Une boule rouge",
    "D": "Deux cônes noirs"
   },
   "correct": "A",
   "explanation": "La marque bâbord est rouge et porte un voyant cylindrique rouge (vu de loin, un carré rouge).",
   "tags": [
    "balisage-lateral"
   ],
   "concept": "lat-identifier",
   "near": [
    "q_1_1_4"
   ]
  },
  {
   "id": "ext_bal_110",
   "sectionId": "mod1_sec1",
   "question": "Dans le sens conventionnel du balisage, quels numéros portent les marques latérales bâbord ?",
   "options": {
    "A": "Aucun numéro",
    "B": "Des numéros impairs (1, 3, 5…)",
    "C": "Des lettres",
    "D": "Des numéros pairs"
   },
   "correct": "D",
   "explanation": "Les marques bâbord (rouges) portent des numéros pairs (2, 4, 6…), les marques tribord (vertes) des numéros impairs (1, 3, 5…), croissants en allant vers le port.",
   "tags": [
    "balisage-lateral"
   ],
   "concept": "lat-numerotation",
   "near": [
    "var_lat-numerotation_3"
   ]
  },
  {
   "id": "q_1_1_2",
   "sectionId": "mod1_sec1",
   "question": "Quel est le rythme du feu d’une marque de chenal préféré ?",
   "options": {
    "A": "Scintillant continu",
    "B": "Isophase",
    "C": "Deux éclats groupés puis un éclat",
    "D": "Deux éclats groupés"
   },
   "correct": "C",
   "explanation": "Les marques de chenal préféré portent un feu Fl(2+1) : rouge si la marque est rouge à bande verte, vert si elle est verte à bande rouge.",
   "tags": [
    "balisage-lateral",
    "feux-balisage"
   ],
   "concept": "pref-feu"
  },
  {
   "id": "q_1_1_5",
   "sectionId": "mod1_sec1",
   "question": "Que signifie une bouée verte à large bande horizontale rouge, surmontée d’un cône vert ?",
   "options": {
    "A": "Danger isolé",
    "B": "Chenal préféré à bâbord",
    "C": "Chenal préféré à tribord",
    "D": "Eaux saines"
   },
   "correct": "B",
   "explanation": "C’est une marque tribord modifiée : le chenal principal (préféré) est à bâbord. En venant du large, on la laisse sur tribord pour suivre le chenal principal.",
   "figure": {
    "fig": "mark",
    "type": "pref-port"
   },
   "tags": [
    "balisage-lateral"
   ],
   "concept": "pref-identifier",
   "near": [
    "var_pref-feu_3",
    "var_pref-identifier_1"
   ]
  },
  {
   "id": "ext_lat_10",
   "sectionId": "mod1_sec1",
   "question": "Que signifie cette marque ?",
   "options": {
    "A": "Chenal préféré à tribord",
    "B": "Chenal préféré à bâbord",
    "C": "Marque d’eaux saines",
    "D": "Danger isolé"
   },
   "correct": "A",
   "explanation": "Rouge à bande verte avec un voyant cylindrique rouge : c’est une marque bâbord modifiée, le chenal principal est à tribord. On la laisse sur bâbord en venant du large.",
   "figure": {
    "fig": "mark",
    "type": "pref-stbd"
   },
   "tags": [
    "balisage-lateral"
   ],
   "concept": "pref-identifier",
   "near": [
    "exam_q3_13"
   ]
  },
  {
   "id": "q_mardi_1",
   "sectionId": "mod1_sec1",
   "question": "De nuit, en entrant au port, vous apercevez devant vous une marque dont le feu vert montre deux éclats groupés suivis d’un éclat isolé. Que faites-vous ?",
   "options": {
    "A": "Je la laisse sur bâbord",
    "B": "Je passe indifféremment d’un côté ou de l’autre",
    "C": "Je stoppe",
    "D": "Je la laisse sur tribord"
   },
   "correct": "D",
   "explanation": "Un feu vert Fl(2+1) est celui d’une marque de chenal préféré à bâbord (marque tribord modifiée) : le chenal principal est à bâbord, on la laisse donc sur tribord pour l’emprunter.",
   "figure": {
    "fig": "rhythm",
    "code": "Fl(2+1)",
    "color": "G"
   },
   "tags": [
    "balisage-lateral"
   ],
   "concept": "pref-passage",
   "near": [
    "ext_lat_12"
   ]
  },
  {
   "id": "ext_lat_12",
   "sectionId": "mod1_sec1",
   "question": "De nuit, en entrant au port, vous apercevez un feu rouge à deux éclats groupés suivis d’un éclat isolé. Pour suivre le chenal principal :",
   "options": {
    "A": "Je laisse cette marque sur tribord",
    "B": "Je m’arrête et j’attends le jour",
    "C": "Je laisse cette marque sur bâbord",
    "D": "Je passe d’un côté ou de l’autre indifféremment"
   },
   "correct": "C",
   "explanation": "Un feu rouge Fl(2+1) signale un chenal préféré à tribord (marque bâbord modifiée). Comme une marque bâbord, on la laisse sur bâbord.",
   "tags": [
    "balisage-lateral"
   ],
   "concept": "pref-passage",
   "near": [
    "q_mardi_1"
   ]
  },
  {
   "id": "q_mardi_15",
   "sectionId": "mod1_sec1",
   "question": "Comment se caractérise un feu à occultations ?",
   "options": {
    "A": "Les périodes de lumière sont plus courtes que les périodes d’obscurité",
    "B": "Les périodes de lumière sont plus longues que les périodes d’obscurité",
    "C": "Les durées de lumière et d’obscurité sont égales",
    "D": "Il émet 60 à 80 petits éclats par minute"
   },
   "correct": "B",
   "explanation": "Feu à occultations : la lumière dure plus longtemps que l’obscurité. À éclats : c’est l’inverse. Isophase : durées égales. Scintillant : éclats très rapprochés.",
   "tags": [
    "feux-balisage"
   ],
   "concept": "feu-occultations"
  },
  {
   "id": "gen_mod1_sec1_1",
   "sectionId": "mod1_sec1",
   "question": "Qu’appelle-t-on le « sens conventionnel » du balisage latéral ?",
   "options": {
    "A": "Le sens du large vers le port",
    "B": "Le sens du port vers le large",
    "C": "Le sens d’est en ouest",
    "D": "Le sens du courant dominant"
   },
   "correct": "A",
   "explanation": "Le sens conventionnel va du large vers le port : c’est dans ce sens que les marques bâbord se laissent à gauche et les marques tribord à droite.",
   "tags": [
    "balisage-lateral"
   ],
   "concept": "lat-sens-conventionnel"
  },
  {
   "id": "gen_mod1_sec1_2",
   "sectionId": "mod1_sec1",
   "question": "De nuit, en entrant au port, vous apercevez un feu vert à éclats. Quelle marque le porte ?",
   "options": {
    "A": "Une marque bâbord",
    "B": "Une marque cardinale",
    "C": "Une marque d’eaux saines",
    "D": "Une marque tribord"
   },
   "correct": "D",
   "explanation": "Un feu vert, de rythme quelconque, équipe une marque latérale tribord (le rythme 2+1 désigne une marque tribord modifiée, chenal préféré à bâbord). Les cardinales ont un feu blanc scintillant, les eaux saines un feu blanc isophase, à occultations, à éclat long ou Morse A. En venant du large, on laisse la marque sur tribord.",
   "tags": [
    "balisage-lateral"
   ],
   "concept": "lat-tribord-entrant"
  },
  {
   "id": "gen_mod1_sec1_3",
   "sectionId": "mod1_sec1",
   "question": "Quel est le but du balisage ?",
   "options": {
    "A": "Indiquer les zones de pêche autorisées",
    "B": "Indiquer la profondeur exacte en tout point de la zone balisée",
    "C": "Signaler les dangers invisibles et les limites des chenaux",
    "D": "Matérialiser les frontières maritimes et les eaux territoriales"
   },
   "correct": "C",
   "explanation": "Le balisage signale les dangers invisibles (hauts-fonds, roches, épaves) et matérialise les limites des chenaux.",
   "tags": [
    "balisage-lateral"
   ],
   "concept": "balisage-generalites"
  },
  {
   "id": "gen_mod1_sec1_4",
   "sectionId": "mod1_sec1",
   "question": "De jour, comment identifie-t-on une marque de balisage ?",
   "options": {
    "A": "Uniquement à son numéro",
    "B": "À son voyant et à sa couleur",
    "C": "Au rythme de son feu",
    "D": "À sa hauteur au-dessus de l’eau"
   },
   "correct": "B",
   "explanation": "De jour, une marque s’identifie à sa couleur et à son voyant (forme du sommet). De nuit, à la couleur et au rythme de son feu.",
   "tags": [
    "balisage-lateral"
   ],
   "concept": "balisage-generalites",
   "near": [
    "var_balisage-generalites_1"
   ]
  },
  {
   "id": "q_1_2_1",
   "sectionId": "mod1_sec2",
   "question": "De nuit, vous apercevez ce feu blanc. De quelle marque s’agit-il ?",
   "options": {
    "A": "Danger isolé",
    "B": "Cardinale Est",
    "C": "Eaux saines",
    "D": "Marque latérale bâbord"
   },
   "correct": "A",
   "explanation": "Un feu blanc à deux éclats groupés, Fl(2), caractérise la marque de danger isolé (comme ses deux boules noires de jour).",
   "figure": {
    "fig": "rhythm",
    "code": "Fl(2)",
    "color": "W"
   },
   "tags": [
    "marques-speciales",
    "feux-balisage"
   ],
   "concept": "danger-isole-feu"
  },
  {
   "id": "q_1_2_2",
   "sectionId": "mod1_sec2",
   "question": "Que signifie cette marque ?",
   "options": {
    "A": "Épave récente",
    "B": "Zone de câbles sous-marins",
    "C": "Zone de baignade",
    "D": "Eaux saines"
   },
   "correct": "D",
   "explanation": "Rayures verticales rouges et blanches et voyant sphérique rouge : marque d’eaux saines. Aucun obstacle autour (milieu de chenal, atterrissage).",
   "figure": {
    "fig": "mark",
    "type": "safewater"
   },
   "tags": [
    "marques-speciales"
   ],
   "concept": "eaux-saines-identifier"
  },
  {
   "id": "ext_spec_7",
   "sectionId": "mod1_sec2",
   "question": "Parmi ces feux, lequel peut équiper une marque d’eaux saines ?",
   "options": {
    "A": "Un feu blanc à 2 éclats groupés",
    "B": "Un feu blanc scintillant continu",
    "C": "Un feu blanc isophase",
    "D": "Un feu jaune à éclats"
   },
   "correct": "C",
   "explanation": "La marque d’eaux saines a un feu blanc isophase, à occultations, à un éclat long toutes les 10 s ou Mo(A). Fl(2) = danger isolé, scintillant continu = cardinale Nord, jaune = marque spéciale.",
   "tags": [
    "marques-speciales",
    "feux-balisage"
   ],
   "concept": "eaux-saines-feu",
   "near": [
    "var_eaux-saines-feu_2"
   ]
  },
  {
   "id": "q_1_2_3",
   "sectionId": "mod1_sec2",
   "question": "Que signale cette marque ?",
   "options": {
    "A": "Un danger isolé",
    "B": "Une zone ou une installation particulière",
    "C": "L’entrée d’un chenal",
    "D": "Un bateau de pêche au mouillage"
   },
   "correct": "B",
   "explanation": "Marque jaune à voyant en croix jaune : marque spéciale. Elle signale une zone ou une installation particulière (câbles, canalisations, zone militaire…) : se renseigner sur la carte ou les documents nautiques.",
   "figure": {
    "fig": "mark",
    "type": "special"
   },
   "tags": [
    "marques-speciales"
   ],
   "concept": "speciale-identifier"
  },
  {
   "id": "q_mardi_12",
   "sectionId": "mod1_sec2",
   "question": "De quelle couleur est le feu d’une marque spéciale ?",
   "options": {
    "A": "Jaune",
    "B": "Rouge",
    "C": "Blanc",
    "D": "Vert"
   },
   "correct": "A",
   "explanation": "Les marques spéciales portent un feu jaune, de rythme quelconque mais différent de ceux des marques à feu blanc (cardinales, danger isolé, eaux saines).",
   "tags": [
    "marques-speciales",
    "feux-balisage"
   ],
   "concept": "speciale-feu"
  },
  {
   "id": "q_1_2_4",
   "sectionId": "mod1_sec2",
   "question": "Comment devez-vous passer près de cette marque ?",
   "options": {
    "A": "Impérativement en la laissant sur tribord",
    "B": "Impérativement en la laissant sur bâbord",
    "C": "Au plus près pour éviter le danger voisin",
    "D": "D’un côté ou de l’autre, en s’en écartant"
   },
   "correct": "D",
   "explanation": "C’est une marque de danger isolé : elle est posée sur un obstacle peu étendu entouré d’eaux navigables. On peut passer d’un côté ou de l’autre en s’en écartant.",
   "figure": {
    "fig": "mark",
    "type": "isolated"
   },
   "tags": [
    "marques-speciales"
   ],
   "concept": "danger-isole-passage"
  },
  {
   "id": "ext_bal_107",
   "sectionId": "mod1_sec2",
   "question": "Quel voyant surmonte une marque de danger isolé ?",
   "options": {
    "A": "Deux cônes noirs pointes en bas",
    "B": "Une croix jaune en X",
    "C": "Deux boules noires superposées",
    "D": "Une boule rouge"
   },
   "correct": "C",
   "explanation": "La marque de danger isolé porte deux boules noires superposées (et la nuit un feu blanc Fl(2)).",
   "tags": [
    "marques-speciales"
   ],
   "concept": "danger-isole-identifier"
  },
  {
   "id": "ext_spec_2",
   "sectionId": "mod1_sec2",
   "question": "Quelles sont les couleurs d’une marque de danger isolé ?",
   "options": {
    "A": "Rayures verticales rouges et blanches sur toute la hauteur",
    "B": "Noire à bandes horizontales rouges",
    "C": "Jaune, avec un voyant en croix (X) jaune",
    "D": "Noire et jaune, avec deux cônes noirs superposés"
   },
   "correct": "B",
   "explanation": "Le danger isolé est noir avec une ou plusieurs bandes horizontales rouges.",
   "tags": [
    "marques-speciales"
   ],
   "concept": "danger-isole-identifier"
  },
  {
   "id": "ext_spec_12",
   "sectionId": "mod1_sec2",
   "question": "Une bouée à bandes verticales bleues et jaunes, surmontée d’une croix jaune droite (+), signale :",
   "options": {
    "A": "Une épave récente",
    "B": "Une zone de baignade",
    "C": "Une zone de plongée",
    "D": "Un chenal préféré"
   },
   "correct": "A",
   "explanation": "Bandes verticales bleues et jaunes, croix jaune droite : bouée d’épave d’urgence. Elle signale uniquement une épave récemment découverte, en attendant qu’elle soit portée sur les documents nautiques et balisée durablement. Un autre danger nouveau (haut-fond, roche) se balise avec les marques habituelles (latérales, cardinales, danger isolé…), dont l’une est doublée si le danger est jugé grave. Feu alternant bleu et jaune.",
   "figure": {
    "fig": "mark",
    "type": "newdanger"
   },
   "tags": [
    "marques-speciales"
   ],
   "concept": "danger-nouveau-bouee-bleue-jaune"
  },
  {
   "id": "q_mardi_6",
   "sectionId": "mod1_sec2",
   "question": "Vous apercevez deux marques latérales tribord identiques mouillées côte à côte. Qu’indiquent-elles ?",
   "options": {
    "A": "Une zone de pêche aux filets dérivants",
    "B": "Un chenal préféré à tribord, signalé par un doublement de marque",
    "C": "La fin du chenal balisé et le retour en eaux libres",
    "D": "Un danger nouveau grave"
   },
   "correct": "D",
   "explanation": "Pour un danger nouveau jugé grave, non encore porté sur les documents nautiques, l’une des marques utilisées (latérale, cardinale, de danger isolé…) est doublée : deux marques identiques côte à côte.",
   "tags": [
    "marques-speciales"
   ],
   "concept": "danger-nouveau-doublement"
  },
  {
   "id": "q_mardi_4",
   "sectionId": "mod1_sec2",
   "question": "Comment est délimitée une zone réservée à la baignade ?",
   "options": {
    "A": "Par des bouées coniques vertes",
    "B": "Par des bouées cylindriques rouges",
    "C": "Par de petites bouées sphériques jaunes",
    "D": "Par des bouées à rayures rouges et blanches"
   },
   "correct": "C",
   "explanation": "La zone réservée aux baigneurs est délimitée par un cordon (collier) de petites sphères jaunes. Elle est interdite aux bateaux.",
   "tags": [
    "plages"
   ],
   "concept": "plage-baignade",
   "near": [
    "c2_speciales_08",
    "var_plage-baignade_1"
   ]
  },
  {
   "id": "ext_bal_102",
   "sectionId": "mod1_sec2",
   "question": "Les grosses bouées sphériques jaunes qui matérialisent la limite de la bande des 300 m sont espacées d’environ :",
   "options": {
    "A": "50 m",
    "B": "100 m",
    "C": "200 m",
    "D": "500 m"
   },
   "correct": "C",
   "explanation": "La zone des 300 m est délimitée par de grosses sphères jaunes d’environ 1 m de diamètre, espacées de 200 m.",
   "tags": [
    "plages",
    "vitesse-zones"
   ],
   "concept": "plage-limite-300m",
   "near": [
    "var_plage-limite-300m_3"
   ]
  },
  {
   "id": "ext_bal_103",
   "sectionId": "mod1_sec2",
   "question": "Dans un chenal traversier de plage, en allant vers la terre, quelles bouées laissez-vous sur tribord ?",
   "options": {
    "A": "Des bouées cylindriques jaunes",
    "B": "Des bouées coniques jaunes",
    "C": "Des bouées sphériques jaunes",
    "D": "Des bouées vertes en fuseau"
   },
   "correct": "B",
   "explanation": "Le chenal traversier est délimité par des bouées jaunes : cylindriques à bâbord, coniques à tribord, comme pour le balisage latéral.",
   "tags": [
    "plages"
   ],
   "concept": "plage-chenal-traversier"
  },
  {
   "id": "gen_mod1_sec2_1",
   "sectionId": "mod1_sec2",
   "question": "Comment est délimitée une zone interdite aux navires à moteur, le long d’une plage ?",
   "options": {
    "A": "Par de grosses bouées sphériques jaunes rapprochées",
    "B": "Par des bouées cylindriques rouges, espacées de 50 m",
    "C": "Par une marque cardinale",
    "D": "Par des bouées à bandes verticales bleues et jaunes"
   },
   "correct": "A",
   "explanation": "Une zone interdite aux navires à moteur est matérialisée par de grosses sphères jaunes rapprochées.",
   "tags": [
    "plages"
   ],
   "concept": "plage-zone-interdite-moteur",
   "near": [
    "var_plage-zone-interdite-moteur_1",
    "var_plage-zone-interdite-moteur_2",
    "var_plage-zone-interdite-moteur_4"
   ]
  },
  {
   "id": "gen_mod1_sec2_2",
   "sectionId": "mod1_sec2",
   "question": "Le balisage des plages (bouées jaunes, pictogrammes) relève-t-il du système de balisage AISM ?",
   "options": {
    "A": "Oui, c’est le balisage AISM région A, comme celui des chenaux",
    "B": "Non, il ne concerne que les voiliers et les planches à voile",
    "C": "Oui, mais seulement la nuit",
    "D": "Non, c’est un balisage local"
   },
   "correct": "D",
   "explanation": "Le balisage des plages ne relève pas de l’AISM : il matérialise localement les zones de baignade, chenaux traversiers et la bande des 300 m.",
   "tags": [
    "plages"
   ],
   "concept": "plage-balisage-local"
  },
  {
   "id": "q_1_3_1",
   "sectionId": "mod1_sec3",
   "question": "Faisant route au Sud, vous apercevez droit devant cette marque. Que faites-vous ?",
   "options": {
    "A": "Je garde mon cap et la laisse d’un côté ou de l’autre",
    "B": "Je viens sur bâbord pour passer à l’Est de la marque",
    "C": "Je viens sur tribord pour passer à l’Ouest de la marque",
    "D": "Je passe au plus près de la marque"
   },
   "correct": "C",
   "explanation": "C’est une cardinale Ouest (cônes pointes affrontées) : les eaux saines sont à l’Ouest. En route au Sud, l’Ouest est sur votre droite : vous venez sur tribord.",
   "figure": {
    "fig": "mark",
    "type": "card-w"
   },
   "tags": [
    "cardinales"
   ],
   "concept": "card-ouest-passage",
   "near": [
    "c3_cardinales_03",
    "c3_cardinales_13"
   ]
  },
  {
   "id": "q_mardi_3",
   "sectionId": "mod1_sec3",
   "question": "Vous faites route à l’Ouest et apercevez droit devant cette marque. Que faites-vous ?",
   "options": {
    "A": "Je viens sur tribord pour passer au Nord de la marque",
    "B": "Je viens sur bâbord pour passer au Sud de la marque",
    "C": "Je garde mon cap droit sur la marque",
    "D": "Je fais demi-tour"
   },
   "correct": "B",
   "explanation": "C’est une cardinale Sud (pointes en bas) : les eaux saines sont au Sud. En route à l’Ouest, le Sud est sur votre gauche : vous venez sur bâbord.",
   "figure": {
    "fig": "mark",
    "type": "card-s"
   },
   "tags": [
    "cardinales"
   ],
   "concept": "card-sud-passage",
   "near": [
    "c3_cardinales_05"
   ]
  },
  {
   "id": "q_mardi_10",
   "sectionId": "mod1_sec3",
   "question": "Vous faites route au Nord-Est et apercevez une bouée dont le voyant a disparu : elle est noire en haut et jaune en bas. Que faites-vous ?",
   "options": {
    "A": "Je passe au Nord de la bouée",
    "B": "Je passe au Sud de la bouée",
    "C": "Je passe indifféremment de chaque côté",
    "D": "Je la laisse sur bâbord"
   },
   "correct": "A",
   "explanation": "Noir en haut, jaune en bas : c’est une cardinale Nord, même sans voyant. Les eaux saines sont au Nord : on passe au Nord.",
   "tags": [
    "cardinales"
   ],
   "concept": "card-couleurs-manoeuvre",
   "near": [
    "var_card-couleurs-manoeuvre_1"
   ]
  },
  {
   "id": "q_mardi_11",
   "sectionId": "mod1_sec3",
   "question": "Faisant route au Nord, vous apercevez droit devant cette marque. Que faites-vous ?",
   "options": {
    "A": "Je viens sur bâbord pour passer à l’Ouest",
    "B": "Je passe au Sud",
    "C": "Je garde mon cap",
    "D": "Je viens sur tribord pour passer à l’Est"
   },
   "correct": "D",
   "explanation": "C’est une cardinale Est : les eaux saines sont à l’Est. En route au Nord, l’Est est sur votre droite : vous venez sur tribord.",
   "figure": {
    "fig": "mark",
    "type": "card-e"
   },
   "tags": [
    "cardinales"
   ],
   "concept": "card-est-passage",
   "near": [
    "c3_cardinales_08",
    "exam_q4_4"
   ]
  },
  {
   "id": "q_1_3_4",
   "sectionId": "mod1_sec3",
   "question": "Où se trouve le danger signalé par cette marque ?",
   "options": {
    "A": "Au Nord de la marque",
    "B": "Juste sous la marque",
    "C": "Au Sud de la marque",
    "D": "À l’Est de la marque"
   },
   "correct": "C",
   "explanation": "C’est une cardinale Nord : elle est placée au Nord du danger. Les eaux saines sont au Nord, le danger au Sud.",
   "figure": {
    "fig": "mark",
    "type": "card-n"
   },
   "tags": [
    "cardinales"
   ],
   "concept": "card-danger-position"
  },
  {
   "id": "q_1_3_3",
   "sectionId": "mod1_sec3",
   "question": "Quelle est la disposition des couleurs d’une marque cardinale Est ?",
   "options": {
    "A": "Noir en haut, jaune en bas",
    "B": "Noir aux extrémités, bande jaune au milieu",
    "C": "Jaune en haut, noir en bas",
    "D": "Jaune aux extrémités, bande noire au milieu"
   },
   "correct": "B",
   "explanation": "Les cônes de la cardinale Est sont opposés par la base (forme de losange) : le noir est aux extrémités, le jaune au milieu.",
   "tags": [
    "cardinales"
   ],
   "concept": "card-couleurs-disposition",
   "near": [
    "ext_card_4",
    "var_card-couleurs-disposition_1",
    "var_card-couleurs-disposition_2"
   ]
  },
  {
   "id": "ext_card_4",
   "sectionId": "mod1_sec3",
   "question": "Quelle est la disposition des couleurs d’une marque cardinale Ouest ?",
   "options": {
    "A": "Jaune aux extrémités, bande noire au milieu",
    "B": "Noir en haut, jaune en bas",
    "C": "Noir aux extrémités, bande jaune au milieu",
    "D": "Jaune en haut, noir en bas"
   },
   "correct": "A",
   "explanation": "Les cônes de la cardinale Ouest ont les pointes affrontées (forme de sablier, « W » couché) : le noir est au milieu.",
   "tags": [
    "cardinales"
   ],
   "concept": "card-couleurs-disposition",
   "near": [
    "q_1_3_3"
   ]
  },
  {
   "id": "ext_card_7",
   "sectionId": "mod1_sec3",
   "question": "Comment sont disposés les deux cônes noirs du voyant d’une cardinale Est ?",
   "options": {
    "A": "Pointes en haut, l’un au-dessus de l’autre",
    "B": "Pointes en bas",
    "C": "Pointes affrontées, qui se touchent au milieu du voyant",
    "D": "Opposés par la base"
   },
   "correct": "D",
   "explanation": "Cardinale Est : cônes opposés par la base, pointes vers l’extérieur, l’une en haut et l’autre en bas (forme de losange).",
   "tags": [
    "cardinales"
   ],
   "concept": "card-voyants",
   "near": [
    "ext_card_8"
   ]
  },
  {
   "id": "ext_card_8",
   "sectionId": "mod1_sec3",
   "question": "Comment sont disposés les deux cônes noirs du voyant d’une cardinale Ouest ?",
   "options": {
    "A": "Pointes en haut, l’un au-dessus de l’autre",
    "B": "Opposés par la base (en losange)",
    "C": "Pointes affrontées",
    "D": "Pointes en bas, l’un sous l’autre"
   },
   "correct": "C",
   "explanation": "Cardinale Ouest : pointes affrontées, qui se touchent (forme de sablier). Nord : pointes en haut ; Sud : pointes en bas.",
   "tags": [
    "cardinales"
   ],
   "concept": "card-voyants",
   "near": [
    "ext_card_7"
   ]
  },
  {
   "id": "q_1_3_2",
   "sectionId": "mod1_sec3",
   "question": "De nuit, vous comptez 6 scintillements blancs suivis d’un éclat long. De quelle marque s’agit-il ?",
   "options": {
    "A": "Cardinale Ouest",
    "B": "Cardinale Sud",
    "C": "Cardinale Est",
    "D": "Eaux saines"
   },
   "correct": "B",
   "explanation": "6 scintillements comme 6 h sur le cadran : cardinale Sud. L’éclat long évite de la confondre avec l’Est (3) ou l’Ouest (9).",
   "tags": [
    "cardinales",
    "feux-balisage"
   ],
   "concept": "card-sud-feu",
   "near": [
    "var_card-sud-feu_3"
   ]
  },
  {
   "id": "q_mardi_8",
   "sectionId": "mod1_sec3",
   "question": "De nuit, vous apercevez un feu blanc scintillant sans interruption. De quelle marque s’agit-il ?",
   "options": {
    "A": "Cardinale Nord",
    "B": "Cardinale Sud",
    "C": "Cardinale Ouest",
    "D": "Danger isolé"
   },
   "correct": "A",
   "explanation": "Scintillement continu = 12 h sur le cadran = cardinale Nord.",
   "figure": {
    "fig": "rhythm",
    "code": "Q",
    "color": "W"
   },
   "tags": [
    "cardinales",
    "feux-balisage"
   ],
   "concept": "card-nord-feu"
  },
  {
   "id": "q_mardi_14",
   "sectionId": "mod1_sec3",
   "question": "Quel est le rythme du feu d’une cardinale Ouest ?",
   "options": {
    "A": "3 scintillements",
    "B": "6 scintillements suivis d’un éclat long",
    "C": "Scintillement continu",
    "D": "9 scintillements"
   },
   "correct": "D",
   "explanation": "Ouest = 9 h sur le cadran : groupes de 9 scintillements blancs.",
   "tags": [
    "cardinales",
    "feux-balisage"
   ],
   "concept": "card-ouest-feu",
   "near": [
    "ext_card_10",
    "var_card-nord-feu_3",
    "var_card-sud-feu_3"
   ]
  },
  {
   "id": "ext_card_10",
   "sectionId": "mod1_sec3",
   "question": "Quel est le rythme du feu d’une cardinale Est ?",
   "options": {
    "A": "Scintillement continu",
    "B": "9 scintillements",
    "C": "3 scintillements",
    "D": "6 scintillements suivis d’un éclat long"
   },
   "correct": "C",
   "explanation": "Est = 3 h sur le cadran : groupes de 3 scintillements blancs.",
   "tags": [
    "cardinales",
    "feux-balisage"
   ],
   "concept": "card-est-feu",
   "near": [
    "q_mardi_14",
    "var_card-nord-feu_3",
    "var_card-sud-feu_3"
   ]
  },
  {
   "id": "ext_card_13",
   "sectionId": "mod1_sec3",
   "question": "Faisant route au Nord, vous voyez droit devant une cardinale Sud. Que faites-vous ?",
   "options": {
    "A": "Je continue tout droit et la laisse sur un bord",
    "B": "Je reste au Sud de la marque",
    "C": "Je passe au Nord de la marque",
    "D": "Je passe indifféremment d’un côté ou de l’autre"
   },
   "correct": "B",
   "explanation": "La cardinale Sud est au Sud du danger : le danger est au-delà de la marque, au Nord. Il faut rester au Sud de celle-ci.",
   "tags": [
    "cardinales"
   ],
   "concept": "card-sud-passage",
   "near": [
    "ext_card_16"
   ]
  },
  {
   "id": "ext_card_16",
   "sectionId": "mod1_sec3",
   "question": "Faisant route à l’Ouest, vous voyez droit devant une cardinale Est. Que faites-vous ?",
   "options": {
    "A": "Je reste à l’Est de la marque",
    "B": "Je passe à l’Ouest de la marque",
    "C": "Je garde mon cap",
    "D": "Je la laisse sur bâbord et poursuis à l’Ouest"
   },
   "correct": "A",
   "explanation": "La cardinale Est est à l’Est du danger : le danger est à l’Ouest de la marque. Il faut rester à l’Est et contourner la zone.",
   "tags": [
    "cardinales"
   ],
   "concept": "card-est-passage",
   "near": [
    "ext_card_13"
   ]
  },
  {
   "id": "q_2_1_1",
   "sectionId": "mod2_sec1",
   "question": "Quel feu d’un navire à moteur éclaire un secteur de 225° ?",
   "options": {
    "A": "Le feu de poupe",
    "B": "Le feu de côté tribord",
    "C": "Le feu de tête de mât",
    "D": "Le feu de mouillage"
   },
   "correct": "C",
   "explanation": "225° : feu de tête de mât, de l’avant jusqu’à 22,5° sur l’arrière du travers de chaque bord. Feux de côté : 112,5° chacun ; feu de poupe : 135° ; feu de mouillage : tout l’horizon (360°).",
   "tags": [
    "feux-navires"
   ],
   "concept": "secteur-feu-mat"
  },
  {
   "id": "ext_feux_118",
   "sectionId": "mod2_sec1",
   "question": "Quel secteur couvre le feu de poupe blanc ?",
   "options": {
    "A": "112,5°",
    "B": "135°",
    "C": "225°",
    "D": "360°"
   },
   "correct": "B",
   "explanation": "Le feu de poupe couvre 135° vers l’arrière. Avec les feux de côté (112,5° chacun), il complète le tour d’horizon.",
   "tags": [
    "feux-navires"
   ],
   "concept": "secteur-feu-poupe"
  },
  {
   "id": "ext_ves_2",
   "sectionId": "mod2_sec1",
   "question": "Quel secteur couvre chacun des feux de côté (rouge à bâbord, vert à tribord) ?",
   "options": {
    "A": "157,5°",
    "B": "112,5°",
    "C": "135°",
    "D": "225°"
   },
   "correct": "B",
   "explanation": "Chaque feu de côté éclaire sur 112,5°, de l’avant jusqu’à 22,5° sur l’arrière du travers.",
   "tags": [
    "feux-navires"
   ],
   "concept": "secteur-feux-cote"
  },
  {
   "id": "ext_feux_117",
   "sectionId": "mod2_sec1",
   "question": "Pour un navire de moins de 12 m, quelle est la portée minimale des feux de côté ?",
   "options": {
    "A": "1 mille",
    "B": "2 milles",
    "C": "3 milles",
    "D": "5 milles"
   },
   "correct": "A",
   "explanation": "Pour un navire de moins de 12 m : feux de côté 1 mille, feu de tête de mât et feu de poupe 2 milles.",
   "tags": [
    "feux-navires"
   ],
   "concept": "portee-feux-moins-12m",
   "near": [
    "var_portee-feux-moins-12m_1",
    "var_portee-feux-moins-12m_2",
    "var_portee-feux-moins-12m_3"
   ]
  },
  {
   "id": "q_2_1_2",
   "sectionId": "mod2_sec1",
   "question": "De nuit, vous apercevez droit devant ces deux feux à la même hauteur, sans aucun feu blanc. De quoi s’agit-il ?",
   "options": {
    "A": "D’un navire à moteur de moins de 50 m qui vient vers vous",
    "B": "D’un navire au mouillage",
    "C": "D’un chalutier en pêche",
    "D": "D’un voilier faisant route à la voile, qui vient vers vous"
   },
   "correct": "D",
   "explanation": "On voit les deux feux de côté : le navire vient vers vous. Sans feu de tête de mât blanc, c’est un voilier marchant à la voile.",
   "figure": {
    "fig": "lights",
    "rows": "G . R",
    "view": "droit devant"
   },
   "tags": [
    "feux-navires"
   ],
   "concept": "feux-voilier-face"
  },
  {
   "id": "q_2_1_3",
   "sectionId": "mod2_sec1",
   "question": "Quelle marque de jour doit montrer un voilier qui fait route à la voile et au moteur ?",
   "options": {
    "A": "Une boule noire",
    "B": "Deux cônes opposés par la pointe",
    "C": "Un cône noir pointe en bas",
    "D": "Un cylindre noir"
   },
   "correct": "C",
   "explanation": "Dès qu’il utilise son moteur, un voilier est un navire à propulsion mécanique : il montre de jour un cône noir pointe en bas.",
   "tags": [
    "marques-jour"
   ],
   "concept": "voilier-moteur-cone",
   "near": [
    "var_voilier-moteur-cone_4"
   ]
  },
  {
   "id": "ext_ves_4",
   "sectionId": "mod2_sec1",
   "question": "Combien de feux de tête de mât montre un navire à moteur de plus de 50 m faisant route ?",
   "options": {
    "A": "Un seul",
    "B": "Deux",
    "C": "Trois",
    "D": "Aucun"
   },
   "correct": "B",
   "explanation": "Au-delà de 50 m, un navire à moteur porte deux feux de tête de mât, le feu arrière plus haut que le feu avant.",
   "tags": [
    "feux-navires"
   ],
   "concept": "feux-mat-longueur"
  },
  {
   "id": "ext_ves_5",
   "sectionId": "mod2_sec1",
   "question": "De nuit, vous voyez un seul feu blanc visible sur tout l’horizon, sans feux de côté. Il peut s’agir :",
   "options": {
    "A": "D’un navire au mouillage",
    "B": "D’un grand navire vu de l’avant",
    "C": "D’un chalutier en pêche",
    "D": "D’un bateau pilote en service"
   },
   "correct": "A",
   "explanation": "Un feu blanc seul, visible sur 360°, peut être le feu de mouillage d’un navire de moins de 50 m, ou le seul feu d’un navire à moteur de moins de 7 m dont la vitesse maximale ne dépasse pas 7 nœuds. (Vu par l’arrière, un navire à moteur de moins de 12 m ne montre lui aussi que son feu blanc.)",
   "tags": [
    "feux-navires"
   ],
   "concept": "feux-mouillage-moins-50m"
  },
  {
   "id": "q_mercredi_4",
   "sectionId": "mod2_sec1",
   "question": "Quelle marque de jour montre un navire au mouillage ?",
   "options": {
    "A": "Deux boules noires superposées",
    "B": "Un cylindre noir à l’avant",
    "C": "Un bicône noir",
    "D": "Une boule noire à l’avant"
   },
   "correct": "D",
   "explanation": "Au mouillage, un navire montre de jour une boule noire à l’avant, là où elle est le mieux vue.",
   "tags": [
    "marques-jour"
   ],
   "concept": "mouillage-boule"
  },
  {
   "id": "ext_ves_18",
   "sectionId": "mod2_sec1",
   "question": "Quel feu particulier montre un navire qui remorque, au-dessus de son feu de poupe ?",
   "options": {
    "A": "Un feu rouge visible sur 360°",
    "B": "Un feu vert",
    "C": "Un feu jaune de remorquage",
    "D": "Un feu bleu à éclats"
   },
   "correct": "C",
   "explanation": "Le remorqueur montre un feu jaune de remorquage (135°) au-dessus de son feu de poupe blanc.",
   "tags": [
    "remorquage",
    "feux-navires"
   ],
   "concept": "remorq-feu-jaune",
   "near": [
    "var_remorq-feu-jaune_3"
   ]
  },
  {
   "id": "ext_feux_120",
   "sectionId": "mod2_sec1",
   "question": "Combien de feux de tête de mât superposés montre un remorqueur lorsque la longueur de la remorque dépasse 200 m ?",
   "options": {
    "A": "Un",
    "B": "Deux",
    "C": "Trois",
    "D": "Quatre"
   },
   "correct": "C",
   "explanation": "Remorque de 200 m ou moins : deux feux de tête de mât superposés ; plus de 200 m : trois.",
   "tags": [
    "remorquage",
    "feux-navires"
   ],
   "concept": "remorq-feux-identifier",
   "near": [
    "var_remorq-couple_1"
   ]
  },
  {
   "id": "ext_ves_20",
   "sectionId": "mod2_sec1",
   "question": "Quelle marque de jour montrent un remorqueur et le navire remorqué lorsque la remorque dépasse 200 m ?",
   "options": {
    "A": "Un cylindre noir à l’avant du remorqueur",
    "B": "Une marque biconique noire",
    "C": "Une boule noire",
    "D": "Deux cônes noirs pointes en bas"
   },
   "correct": "B",
   "explanation": "Quand la remorque dépasse 200 m, remorqueur et remorqué montrent chacun une marque biconique (losange) noire.",
   "tags": [
    "remorquage",
    "marques-jour"
   ],
   "concept": "remorq-bicone",
   "near": [
    "c4_feux_08",
    "var_remorq-bicone_2"
   ]
  },
  {
   "id": "gen_mod2_sec1_1",
   "sectionId": "mod2_sec1",
   "question": "Comment mesure-t-on la longueur d’une remorque ?",
   "options": {
    "A": "De la poupe du remorqueur à la poupe du remorqué",
    "B": "De l’étrave du remorqueur à l’étrave du remorqué",
    "C": "Uniquement la longueur du câble",
    "D": "De la poupe du remorqueur à l’étrave du remorqué"
   },
   "correct": "A",
   "explanation": "La longueur de la remorque se mesure de la poupe du remorqueur à la poupe du remorqué.",
   "tags": [
    "remorquage"
   ],
   "concept": "remorq-longueur"
  },
  {
   "id": "gen_mod2_sec1_2",
   "sectionId": "mod2_sec1",
   "question": "De nuit, que doit pouvoir montrer un kayak ou une embarcation à l’aviron ?",
   "options": {
    "A": "Des feux de côté et un feu de poupe, obligatoires en permanence",
    "B": "Aucun feu : un kayak est toujours privilégié la nuit",
    "C": "Deux feux rouges superposés",
    "D": "Une lampe ou un fanal blanc"
   },
   "correct": "D",
   "explanation": "Un navire à propulsion manuelle doit pouvoir montrer, si nécessaire, une lampe ou un fanal à feu blanc.",
   "tags": [
    "feux-navires"
   ],
   "concept": "feux-aviron-kayak"
  },
  {
   "id": "gen_mod2_sec1_3",
   "sectionId": "mod2_sec1",
   "question": "De nuit, vous apercevez ces feux. Que voyez-vous ?",
   "options": {
    "A": "Un voilier sous voiles qui vous montre son côté tribord",
    "B": "Un navire à moteur qui vous montre son côté bâbord",
    "C": "Un navire à moteur qui vous montre son côté tribord",
    "D": "Un navire au mouillage"
   },
   "correct": "C",
   "explanation": "Un feu blanc de tête de mât au-dessus d’un feu vert : navire à moteur vu par son côté tribord (le vert est à tribord).",
   "figure": {
    "fig": "lights",
    "rows": "W|G"
   },
   "tags": [
    "feux-navires"
   ],
   "concept": "feux-moteur-aspect",
   "near": [
    "var_feux-moteur-aspect_1"
   ]
  },
  {
   "id": "gen_mod2_sec1_4",
   "sectionId": "mod2_sec1",
   "question": "De nuit, vous apercevez ces feux droit devant. Que voyez-vous ?",
   "options": {
    "A": "Un navire à moteur de plus de 50 m que vous rattrapez",
    "B": "Un navire à moteur de moins de 50 m qui vient vers vous",
    "C": "Un voilier sous voiles vu de l’arrière, feu de poupe allumé",
    "D": "Un chalutier en pêche"
   },
   "correct": "B",
   "explanation": "Feu de tête de mât blanc et les deux feux de côté visibles : un navire à moteur de moins de 50 m, vu de face, qui vient vers vous.",
   "figure": {
    "fig": "lights",
    "rows": "W|G . R"
   },
   "tags": [
    "feux-navires"
   ],
   "concept": "feux-moteur-aspect"
  },
  {
   "id": "gen_mod2_sec1_5",
   "sectionId": "mod2_sec1",
   "question": "De nuit, vous apercevez devant vous un seul feu blanc, qui disparaît lorsque vous arrivez à 22,5° sur l’arrière de son travers. Que voyez-vous ?",
   "options": {
    "A": "Le feu de poupe d’un navire que vous rattrapez",
    "B": "Le feu de mouillage d’un navire de moins de 50 m",
    "C": "Un navire à moteur qui vient droit vers vous",
    "D": "Un bateau pilote"
   },
   "correct": "A",
   "explanation": "Un feu blanc visible seulement par l’arrière (secteur de 135°) est un feu de poupe : vous rattrapez ce navire.",
   "tags": [
    "feux-navires"
   ],
   "concept": "secteur-feu-poupe"
  },
  {
   "id": "q_2_2_1",
   "sectionId": "mod2_sec2",
   "question": "De nuit, vous apercevez ces deux feux superposés, visibles sur tout l’horizon. De quel navire s’agit-il ?",
   "options": {
    "A": "D’un bateau pilote en service",
    "B": "D’un remorqueur",
    "C": "D’un navire en pêche autre qu’un chalutier",
    "D": "D’un chalutier en train de chaluter"
   },
   "correct": "D",
   "explanation": "Vert au-dessus de blanc : chalutier en pêche (« vert sur blanc, chalut traînant »).",
   "figure": {
    "fig": "lights",
    "rows": "G|W"
   },
   "tags": [
    "peche",
    "feux-navires"
   ],
   "concept": "chalutier-vert-sur-blanc"
  },
  {
   "id": "ext_ves_16",
   "sectionId": "mod2_sec2",
   "question": "De nuit, vous apercevez ces deux feux superposés, visibles sur tout l’horizon. De quel navire s’agit-il ?",
   "options": {
    "A": "D’un chalutier en pêche, chalut à la traîne",
    "B": "D’un navire non maître de sa manœuvre, stoppé et n’ayant plus d’erre",
    "C": "D’un navire en pêche autre qu’un chalutier",
    "D": "D’un bateau pilote en service, au mouillage"
   },
   "correct": "C",
   "explanation": "Rouge au-dessus de blanc : navire en pêche autre que le chalutage (filets, palangre…). Ne pas confondre avec le pilote (blanc sur rouge).",
   "figure": {
    "fig": "lights",
    "rows": "R|W"
   },
   "tags": [
    "peche",
    "feux-navires"
   ],
   "concept": "peche-rouge-sur-blanc",
   "near": [
    "c5_peche_01",
    "exam_q1_11",
    "q_mercredi_3"
   ]
  },
  {
   "id": "q_2_2_2",
   "sectionId": "mod2_sec2",
   "question": "Que signifie cette marque de jour ?",
   "options": {
    "A": "Navire non maître de sa manœuvre",
    "B": "Navire en action de pêche",
    "C": "Navire au mouillage",
    "D": "Navire handicapé par son tirant d’eau"
   },
   "correct": "B",
   "explanation": "Deux cônes noirs réunis par la pointe (forme de sablier) : navire en action de pêche, chalutier ou non.",
   "figure": {
    "fig": "shapes",
    "shapes": "cone-down,cone-up"
   },
   "tags": [
    "peche",
    "marques-jour"
   ],
   "concept": "peche-marque-jour"
  },
  {
   "id": "gen_mod2_sec2_1",
   "sectionId": "mod2_sec2",
   "question": "De nuit, vous apercevez ces feux droit devant. Que voyez-vous ?",
   "options": {
    "A": "Un chalutier en pêche qui vient vers vous",
    "B": "Un chalutier en pêche, stoppé",
    "C": "Un navire à moteur remorquant",
    "D": "Un navire pêchant autrement qu’au chalut, au mouillage"
   },
   "correct": "A",
   "explanation": "Vert sur blanc = chalutier en pêche. On voit en plus ses deux feux de côté : il a de l’erre et vient vers vous.",
   "figure": {
    "fig": "lights",
    "rows": "G|W|G . R"
   },
   "tags": [
    "peche",
    "feux-navires"
   ],
   "concept": "chalutier-vert-sur-blanc"
  },
  {
   "id": "gen_mod2_sec2_2",
   "sectionId": "mod2_sec2",
   "question": "Un navire en action de pêche montre, en plus de ses feux de pêche, ses feux de côté et son feu de poupe seulement lorsque :",
   "options": {
    "A": "Il est au mouillage sur ses filets",
    "B": "Il est stoppé",
    "C": "Il relève ses filets ou son chalut",
    "D": "Il a de l’erre"
   },
   "correct": "D",
   "explanation": "Les feux de pêche (vert sur blanc ou rouge sur blanc) sont montrés pendant toute l’action de pêche ; les feux de côté et de poupe s’y ajoutent seulement quand le navire a de l’erre (il se déplace sur l’eau).",
   "tags": [
    "peche",
    "feux-navires"
   ],
   "concept": "peche-feux-erre"
  },
  {
   "id": "gen_mod2_sec2_3",
   "sectionId": "mod2_sec2",
   "question": "En plus de ses feux de chalutier, quels feux supplémentaires peut montrer un chalutier qui jette (file) son chalut ?",
   "options": {
    "A": "Deux feux rouges superposés",
    "B": "Un feu blanc au-dessus d’un feu rouge",
    "C": "Deux feux blancs superposés",
    "D": "Un feu jaune scintillant"
   },
   "correct": "C",
   "explanation": "Signaux supplémentaires des chalutiers : filage du chalut = deux feux blancs superposés ; virage (relevage) = blanc sur rouge ; chalut croché = deux feux rouges.",
   "tags": [
    "peche",
    "feux-navires"
   ],
   "concept": "chalut-filage",
   "near": [
    "gen_mod2_sec2_4"
   ]
  },
  {
   "id": "gen_mod2_sec2_4",
   "sectionId": "mod2_sec2",
   "question": "En plus de ses feux de chalutier, quels feux supplémentaires peut montrer un chalutier qui hisse (vire) son chalut ?",
   "options": {
    "A": "Deux feux blancs superposés à l’avant",
    "B": "Un feu blanc au-dessus d’un feu rouge",
    "C": "Deux feux rouges superposés",
    "D": "Trois feux verts disposés en triangle"
   },
   "correct": "B",
   "explanation": "Chalutier hissant son chalut : feu blanc au-dessus d’un feu rouge, en plus de ses feux de chalutier.",
   "tags": [
    "peche",
    "feux-navires"
   ],
   "concept": "chalut-virage",
   "near": [
    "gen_mod2_sec2_3"
   ]
  },
  {
   "id": "gen_mod2_sec2_5",
   "sectionId": "mod2_sec2",
   "question": "Un chalutier dont le chalut est retenu par un obstacle peut montrer, en plus de ses feux de chalutier :",
   "options": {
    "A": "Deux feux rouges superposés",
    "B": "Deux feux blancs superposés",
    "C": "Un feu vert au-dessus d’un feu rouge",
    "D": "Un feu bleu à éclats"
   },
   "correct": "A",
   "explanation": "Chalut croché sur une obstruction : deux feux rouges superposés, en plus des feux de chalutier.",
   "tags": [
    "peche",
    "feux-navires"
   ],
   "concept": "chalut-croche",
   "near": [
    "var_chalut-croche_2"
   ]
  },
  {
   "id": "gen_mod2_sec2_6",
   "sectionId": "mod2_sec2",
   "question": "Deux chalutiers pêchent à couple (pêche « au bœuf »). Quel signal particulier peuvent-ils montrer de nuit ?",
   "options": {
    "A": "Un son continu",
    "B": "Trois feux rouges superposés visibles sur tout l’horizon",
    "C": "Un feu jaune scintillant au-dessus du feu de poupe",
    "D": "Un projecteur dirigé vers l’avant et vers l’autre navire"
   },
   "correct": "D",
   "explanation": "Les chalutiers pêchant en couple peuvent diriger un projecteur vers l’avant et vers l’autre navire du couple.",
   "tags": [
    "peche"
   ],
   "concept": "peche-couple-projecteur",
   "near": [
    "var_peche-couple-projecteur_1"
   ]
  },
  {
   "id": "gen_mod2_sec2_7",
   "sectionId": "mod2_sec2",
   "question": "Un navire en pêche (autre que chalutier) dont les engins s’étendent à plus de 150 m indique leur direction :",
   "options": {
    "A": "Par deux boules noires de jour et deux feux rouges de nuit, côté engins",
    "B": "Par un cylindre noir",
    "C": "Par un feu blanc ou un cône pointe en haut",
    "D": "Par un pavillon N au-dessus de C, hissé du côté où sont les engins"
   },
   "correct": "C",
   "explanation": "Quand les engins s’étendent à plus de 150 m, un feu blanc (de nuit) ou un cône pointe en haut (de jour) indique de quel côté ils se trouvent.",
   "tags": [
    "peche"
   ],
   "concept": "peche-engins-150m"
  },
  {
   "id": "gen_mod2_sec2_8",
   "sectionId": "mod2_sec2",
   "question": "Un bateau de plaisance qui pêche à la traîne avec des lignes est-il un « navire en action de pêche » au sens du RIPAM ?",
   "options": {
    "A": "Oui",
    "B": "Non",
    "C": "Oui, s’il arbore deux cônes",
    "D": "Non, sauf de nuit"
   },
   "correct": "B",
   "explanation": "Le RIPAM ne considère « en action de pêche » que les navires dont les engins réduisent la capacité de manœuvre. Des lignes de traîne ne la réduisent pas : la pêche à la traîne ne donne aucun privilège.",
   "tags": [
    "peche",
    "regles-barre"
   ],
   "concept": "peche-definition"
  },
  {
   "id": "gen_mod2_sec2_9",
   "sectionId": "mod3_sec3",
   "question": "Vous pilotez un bateau à moteur et croisez la route d’un navire montrant deux cônes noirs réunis par la pointe. Qui doit s’écarter ?",
   "options": {
    "A": "Vous",
    "B": "Lui",
    "C": "Celui qui voit l’autre sur tribord",
    "D": "Le plus petit des deux"
   },
   "correct": "A",
   "explanation": "Un navire en action de pêche est privilégié par rapport au navire à propulsion mécanique : c’est à vous de vous écarter.",
   "tags": [
    "regles-barre",
    "peche"
   ],
   "concept": "regle-moteur-vs-peche"
  },
  {
   "id": "q_2_3_1",
   "sectionId": "mod2_sec3",
   "question": "De nuit, vous apercevez ces deux feux superposés, visibles sur tout l’horizon, et aucun autre feu. De quel navire s’agit-il ?",
   "options": {
    "A": "D’un bateau pilote en service, stoppé et sans erre",
    "B": "D’un voilier au mouillage, feux de côté éteints",
    "C": "D’un navire échoué sur un haut-fond",
    "D": "D’un navire non maître de sa manœuvre, sans erre"
   },
   "correct": "D",
   "explanation": "Deux feux rouges superposés : navire non maître de sa manœuvre (« rouge sur rouge, rien ne bouge »). Sans feux de côté, il n’a pas d’erre.",
   "figure": {
    "fig": "lights",
    "rows": "R|R"
   },
   "tags": [
    "navires-speciaux",
    "feux-navires"
   ],
   "concept": "nuc-feux"
  },
  {
   "id": "q_mercredi_2",
   "sectionId": "mod2_sec3",
   "question": "Que signale cette marque de jour ?",
   "options": {
    "A": "Un navire au mouillage",
    "B": "Un navire en opération de déminage",
    "C": "Un navire non maître de sa manœuvre",
    "D": "Un navire échoué"
   },
   "correct": "C",
   "explanation": "Deux boules noires superposées : navire non maître de sa manœuvre (avarie de moteur ou de barre).",
   "figure": {
    "fig": "shapes",
    "shapes": "ball,ball"
   },
   "tags": [
    "navires-speciaux",
    "marques-jour"
   ],
   "concept": "nuc-boules",
   "near": [
    "c6_particuliers_18",
    "var_nuc-boules_3"
   ]
  },
  {
   "id": "q_2_3_2",
   "sectionId": "mod2_sec3",
   "question": "Que signale cette marque de jour ?",
   "options": {
    "A": "Un navire au mouillage",
    "B": "Un navire échoué",
    "C": "Un navire en travaux sous-marins",
    "D": "Un navire handicapé par son tirant d’eau"
   },
   "correct": "B",
   "explanation": "Trois boules noires superposées : navire échoué.",
   "figure": {
    "fig": "shapes",
    "shapes": "ball,ball,ball"
   },
   "tags": [
    "navires-speciaux",
    "marques-jour"
   ],
   "concept": "echoue-boules",
   "near": [
    "exam_q1_14"
   ]
  },
  {
   "id": "q_2_3_3",
   "sectionId": "mod2_sec3",
   "question": "Quels feux montre de nuit un navire à capacité de manœuvre restreinte ?",
   "options": {
    "A": "Rouge, blanc, rouge superposés",
    "B": "Trois feux rouges superposés",
    "C": "Vert, blanc, vert superposés",
    "D": "Blanc au-dessus de rouge"
   },
   "correct": "A",
   "explanation": "Trois feux superposés rouge, blanc, rouge, visibles sur tout l’horizon : navire à capacité de manœuvre restreinte (drague, câblier, travaux…).",
   "tags": [
    "navires-speciaux",
    "feux-navires"
   ],
   "concept": "ram-feux-identifier",
   "near": [
    "var_ram-feux-taille-aspect_1",
    "var_ram-feux-taille-aspect_2"
   ]
  },
  {
   "id": "ext_feux_119",
   "sectionId": "mod2_sec3",
   "question": "Que signale cette marque de jour ?",
   "options": {
    "A": "Un navire échoué",
    "B": "Un navire au mouillage",
    "C": "Un navire handicapé par son tirant d’eau",
    "D": "Un navire à capacité de manœuvre restreinte"
   },
   "correct": "D",
   "explanation": "Boule, bicône (losange), boule : navire à capacité de manœuvre restreinte.",
   "figure": {
    "fig": "shapes",
    "shapes": "ball,diamond,ball"
   },
   "tags": [
    "navires-speciaux",
    "marques-jour"
   ],
   "concept": "ram-marque-jour"
  },
  {
   "id": "q_mercredi_3",
   "sectionId": "mod2_sec3",
   "question": "De nuit, un navire montre trois feux rouges superposés visibles sur tout l’horizon. De quel navire s’agit-il ?",
   "options": {
    "A": "D’un chalutier",
    "B": "D’un navire échoué",
    "C": "D’un navire handicapé par son tirant d’eau",
    "D": "D’un navire non maître de sa manœuvre"
   },
   "correct": "C",
   "explanation": "Trois feux rouges superposés : navire handicapé par son tirant d’eau, qui ne peut pas s’écarter du chenal.",
   "tags": [
    "navires-speciaux",
    "feux-navires"
   ],
   "concept": "tirant-eau-feux",
   "near": [
    "c6_particuliers_16",
    "c6_particuliers_17",
    "exam_q4_8",
    "ext_ves_16"
   ]
  },
  {
   "id": "ext_ves_12",
   "sectionId": "mod2_sec3",
   "question": "De jour, un navire montre un cylindre noir. Quels feux montrera-t-il de nuit, en plus de ses feux de route ?",
   "options": {
    "A": "Deux feux rouges superposés",
    "B": "Trois feux rouges superposés",
    "C": "Rouge, blanc, rouge superposés",
    "D": "Trois feux blancs superposés"
   },
   "correct": "B",
   "explanation": "Cylindre noir = navire handicapé par son tirant d’eau : de nuit, trois feux rouges superposés en plus de ses feux de route. Deux rouges = non maître de sa manœuvre ; rouge-blanc-rouge = capacité de manœuvre restreinte ; trois blancs = remorqueur (remorque de plus de 200 m).",
   "tags": [
    "navires-speciaux",
    "marques-jour"
   ],
   "concept": "tirant-eau-cylindre",
   "near": [
    "var_tirant-eau-cylindre_2"
   ]
  },
  {
   "id": "q_mercredi_1",
   "sectionId": "mod2_sec3",
   "question": "De nuit, vous apercevez ces feux. De quel navire s’agit-il ?",
   "options": {
    "A": "D’un bateau pilote en service, faisant route",
    "B": "D’un chalutier faisant route",
    "C": "D’un navire à capacité de manœuvre restreinte",
    "D": "D’un navire non maître de sa manœuvre"
   },
   "correct": "A",
   "explanation": "Blanc au-dessus de rouge : bateau pilote en service (« blanc sur rouge, pilote à bord »). Le feu vert montre qu’il fait route et vous présente son tribord.",
   "figure": {
    "fig": "lights",
    "rows": "W .|R .|. G",
    "view": "vu par tribord"
   },
   "tags": [
    "navires-speciaux",
    "feux-navires"
   ],
   "concept": "pilote-feux",
   "near": [
    "c6_particuliers_10",
    "ext_feux_115"
   ]
  },
  {
   "id": "ext_feux_115",
   "sectionId": "mod2_sec3",
   "question": "Quels feux distinctifs montre de nuit un bateau pilote en service ?",
   "options": {
    "A": "Deux feux rouges",
    "B": "Un feu rouge au-dessus d’un feu blanc",
    "C": "Un feu vert au-dessus d’un feu blanc",
    "D": "Un feu blanc au-dessus d’un feu rouge"
   },
   "correct": "D",
   "explanation": "Pilote : blanc sur rouge. Ne pas confondre avec la pêche (rouge sur blanc) ou le chalutier (vert sur blanc).",
   "tags": [
    "navires-speciaux",
    "feux-navires"
   ],
   "concept": "pilote-feux",
   "near": [
    "c6_particuliers_10",
    "q_mercredi_1"
   ]
  },
  {
   "id": "gen_mod2_sec3_1",
   "sectionId": "mod2_sec3",
   "question": "De nuit, quels feux montre un navire échoué ?",
   "options": {
    "A": "Un feu blanc au-dessus d’un feu rouge, plus ses feux de côté",
    "B": "Trois feux rouges superposés",
    "C": "Deux feux rouges superposés, plus ses feux de mouillage",
    "D": "Ses feux de côté uniquement"
   },
   "correct": "C",
   "explanation": "Un navire échoué montre ses feux de mouillage et deux feux rouges superposés visibles sur tout l’horizon.",
   "tags": [
    "navires-speciaux",
    "feux-navires"
   ],
   "concept": "echoue-feux",
   "near": [
    "var_echoue-feux_2",
    "var_echoue-feux_4"
   ]
  },
  {
   "id": "gen_mod2_sec3_2",
   "sectionId": "mod2_sec3",
   "question": "Que signalent trois feux verts disposés en triangle (ou, de jour, trois boules noires en triangle) ?",
   "options": {
    "A": "Un navire de pêche dont les filets s’étendent loin",
    "B": "Un navire en opération de déminage",
    "C": "Un navire échoué",
    "D": "Un navire de sauvetage en opération, à qui laisser le passage"
   },
   "correct": "B",
   "explanation": "Trois feux verts (ou trois boules) en triangle : navire en opération de déminage. Il faut s’en tenir très éloigné.",
   "tags": [
    "navires-speciaux"
   ],
   "concept": "deminage"
  },
  {
   "id": "gen_mod2_sec3_3",
   "sectionId": "mod2_sec3",
   "question": "Un navire à capacité de manœuvre restreinte montre deux feux rouges superposés d’un bord et deux feux verts superposés de l’autre. De quel côté pouvez-vous passer ?",
   "options": {
    "A": "Du côté des deux feux verts",
    "B": "Du côté des deux feux rouges",
    "C": "Des deux côtés",
    "D": "D’aucun côté"
   },
   "correct": "A",
   "explanation": "Les deux feux rouges indiquent le côté de l’obstruction ; les deux feux verts le côté libre, par lequel on peut passer.",
   "tags": [
    "navires-speciaux"
   ],
   "concept": "ram-cote-passage",
   "near": [
    "c6_particuliers_01",
    "exam_q3_15"
   ]
  },
  {
   "id": "gen_mod2_sec3_4",
   "sectionId": "mod2_sec3",
   "question": "Que signale un navire montrant de nuit un feu rouge visible sur tout l’horizon (et de jour un pavillon rouge), à quai ou au mouillage ?",
   "options": {
    "A": "Qu’il a un pilote à bord",
    "B": "Qu’il est en détresse et demande assistance",
    "C": "Qu’il est non maître de sa manœuvre, sans erre",
    "D": "Qu’il transborde des matières dangereuses"
   },
   "correct": "D",
   "explanation": "Un feu rouge isolé visible sur tout l’horizon (pavillon B de jour) signale un navire qui charge ou transborde des matières dangereuses : s’en tenir à l’écart.",
   "tags": [
    "pavillons",
    "navires-speciaux"
   ],
   "concept": "matieres-dangereuses",
   "near": [
    "var_matieres-dangereuses_3"
   ]
  },
  {
   "id": "gen_mod2_sec3_5",
   "sectionId": "mod2_sec3",
   "question": "Un navire non maître de sa manœuvre qui fait route (il a de l’erre) montre :",
   "options": {
    "A": "Trois feux rouges superposés",
    "B": "Deux feux rouges superposés seulement, sans aucun autre feu allumé",
    "C": "Deux feux rouges superposés, plus feux de côté et feu de poupe",
    "D": "Rouge, blanc, rouge superposés, plus ses feux de côté"
   },
   "correct": "C",
   "explanation": "Les deux feux rouges indiquent qu’il est non maître de sa manœuvre ; les feux de côté et de poupe s’y ajoutent quand il a de l’erre.",
   "tags": [
    "navires-speciaux",
    "feux-navires"
   ],
   "concept": "nuc-feux"
  },
  {
   "id": "gen_mod2_sec3_6",
   "sectionId": "mod2_sec3",
   "question": "Un remorqueur dont l’opération de remorquage l’empêche de s’écarter de sa route montre, en plus de ses feux de remorqueur :",
   "options": {
    "A": "Deux feux rouges superposés (navire non maître de sa manœuvre)",
    "B": "Rouge, blanc, rouge superposés",
    "C": "Vert sur blanc",
    "D": "Un feu bleu à éclats"
   },
   "correct": "B",
   "explanation": "Un remorquage qui rend difficile le changement de cap fait du remorqueur un navire à capacité de manœuvre restreinte : il ajoute les feux rouge-blanc-rouge.",
   "tags": [
    "remorquage",
    "navires-speciaux"
   ],
   "concept": "remorq-ram"
  },
  {
   "id": "q_3_1_1",
   "sectionId": "mod3_sec1",
   "question": "En vue d’un autre navire, vous entendez 3 sons brefs. Que vous annonce ce navire ?",
   "options": {
    "A": "Je bats en arrière",
    "B": "J’ai des doutes sur vos intentions",
    "C": "Je viens sur bâbord",
    "D": "Je suis en détresse"
   },
   "correct": "A",
   "explanation": "3 sons brefs : « je bats en arrière » (machine en marche arrière).",
   "tags": [
    "signaux-sonores"
   ],
   "concept": "son-3-brefs",
   "near": [
    "c7_sonores_07",
    "exam_q3_1"
   ]
  },
  {
   "id": "q_jeudi_1",
   "sectionId": "mod3_sec1",
   "question": "En vue d’un autre navire, que signifient 2 sons brefs ?",
   "options": {
    "A": "Je viens sur tribord",
    "B": "Je compte vous rattraper",
    "C": "Je bats en arrière",
    "D": "Je viens sur bâbord"
   },
   "correct": "D",
   "explanation": "1 son bref : je viens sur tribord ; 2 sons brefs : je viens sur bâbord ; 3 sons brefs : je bats en arrière.",
   "tags": [
    "signaux-sonores"
   ],
   "concept": "son-2-brefs",
   "near": [
    "c7_sonores_09",
    "exam_q2_11"
   ]
  },
  {
   "id": "ext_son_121",
   "sectionId": "mod3_sec1",
   "question": "En vue d’un autre navire, vous entendez 1 son bref. Que fait ce navire ?",
   "options": {
    "A": "Il vient sur bâbord",
    "B": "Il bat en arrière",
    "C": "Il vient sur tribord",
    "D": "Il compte vous dépasser"
   },
   "correct": "C",
   "explanation": "1 son bref (environ 1 seconde) : « je viens sur tribord ».",
   "tags": [
    "signaux-sonores"
   ],
   "concept": "son-1-bref",
   "near": [
    "var_son-1-bref_2"
   ]
  },
  {
   "id": "q_3_1_3",
   "sectionId": "mod3_sec1",
   "question": "Quel signal sonore émettez-vous si la manœuvre d’un autre navire vous semble dangereuse ou incompréhensible ?",
   "options": {
    "A": "Un son prolongé continu",
    "B": "Au moins 5 sons brefs et rapides",
    "C": "2 sons prolongés suivis d’un son bref",
    "D": "3 sons brefs, répétés deux fois"
   },
   "correct": "B",
   "explanation": "Au moins 5 sons brefs et rapides : « j’ai des doutes sur vos intentions ».",
   "tags": [
    "signaux-sonores"
   ],
   "concept": "son-5-brefs"
  },
  {
   "id": "ext_son_122",
   "sectionId": "mod3_sec1",
   "question": "Par temps clair, un navire proche émet ce signal. Que signifie-t-il ?",
   "options": {
    "A": "Je doute de vos intentions ou de votre manœuvre",
    "B": "Je bats en arrière, attention à mon recul",
    "C": "Je suis en détresse",
    "D": "Je compte vous rattraper et vous dépasser sur bâbord"
   },
   "correct": "A",
   "explanation": "Au moins 5 sons brefs rapides : signal de doute. Dans un chenal, il peut aussi signifier que le dépassement est impossible.",
   "figure": {
    "fig": "sound",
    "pattern": "....."
   },
   "tags": [
    "signaux-sonores"
   ],
   "concept": "son-5-brefs"
  },
  {
   "id": "q_3_1_2",
   "sectionId": "mod3_sec1",
   "question": "Par visibilité réduite, vous entendez un son prolongé répété au moins toutes les 2 minutes. De quel navire s’agit-il ?",
   "options": {
    "A": "D’un voilier faisant route sous voiles, sans moteur",
    "B": "D’un navire échoué",
    "C": "D’un navire à moteur stoppé, n’ayant plus d’erre",
    "D": "D’un navire à moteur faisant route avec de l’erre"
   },
   "correct": "D",
   "explanation": "1 son prolongé à intervalles de 2 minutes au plus : navire à propulsion mécanique ayant de l’erre.",
   "tags": [
    "signaux-sonores"
   ],
   "concept": "brume-1-prolonge",
   "near": [
    "q_jeudi_3"
   ]
  },
  {
   "id": "q_jeudi_3",
   "sectionId": "mod3_sec1",
   "question": "Par visibilité réduite, vous entendez 2 sons prolongés, répétés au moins toutes les 2 minutes. De quoi s’agit-il ?",
   "options": {
    "A": "D’un navire à moteur faisant route avec de l’erre",
    "B": "D’un navire remorqué, dernier du convoi",
    "C": "D’un navire à moteur stoppé et sans erre",
    "D": "D’un navire au mouillage de plus de 100 m"
   },
   "correct": "C",
   "explanation": "2 sons prolongés : navire à propulsion mécanique stoppé et sans erre.",
   "tags": [
    "signaux-sonores"
   ],
   "concept": "brume-2-prolonges",
   "near": [
    "q_3_1_2"
   ]
  },
  {
   "id": "ext_snd_7",
   "sectionId": "mod3_sec1",
   "question": "Par visibilité réduite, vous entendez ce signal répété toutes les 2 minutes. Lequel de ces navires peut l’émettre ?",
   "options": {
    "A": "Un navire à moteur faisant route",
    "B": "Un voilier",
    "C": "Un navire à moteur stoppé sans erre",
    "D": "Un navire échoué"
   },
   "correct": "B",
   "explanation": "1 son prolongé suivi de 2 brefs : voilier, navire en pêche, non maître de sa manœuvre, à capacité restreinte, handicapé par son tirant d’eau ou remorqueur. Le navire échoué, lui, sonne la cloche.",
   "figure": {
    "fig": "sound",
    "pattern": "-.."
   },
   "tags": [
    "signaux-sonores"
   ],
   "concept": "brume-1-long-2-brefs"
  },
  {
   "id": "ext_snd_8",
   "sectionId": "mod3_sec1",
   "question": "Par visibilité réduite, quel signal émet le navire remorqué (s’il a un équipage à bord) ?",
   "options": {
    "A": "1 son prolongé suivi de 2 sons brefs",
    "B": "1 son prolongé suivi de 3 sons brefs",
    "C": "2 sons prolongés",
    "D": "5 sons brefs"
   },
   "correct": "B",
   "explanation": "Le navire remorqué émet 1 son prolongé suivi de 3 brefs, juste après le signal du remorqueur.",
   "tags": [
    "signaux-sonores"
   ],
   "concept": "brume-remorque"
  },
  {
   "id": "gen_mod3_sec1_1",
   "sectionId": "mod3_sec1",
   "question": "Dans un chenal étroit, un navire qui vous suit émet ce signal. Que vous annonce-t-il ?",
   "options": {
    "A": "Je compte vous rattraper sur votre tribord",
    "B": "Je compte vous rattraper sur votre bâbord",
    "C": "Je bats en arrière",
    "D": "D’accord"
   },
   "correct": "A",
   "explanation": "2 sons prolongés suivis d’1 bref : « je compte vous rattraper sur tribord ». 2 prolongés suivis de 2 brefs : sur bâbord.",
   "figure": {
    "fig": "sound",
    "pattern": "--."
   },
   "tags": [
    "signaux-sonores"
   ],
   "concept": "son-depassement-chenal",
   "near": [
    "gen_mod3_sec1_2"
   ]
  },
  {
   "id": "gen_mod3_sec1_2",
   "sectionId": "mod3_sec1",
   "question": "Dans un chenal étroit, quel signal annonce « je compte vous rattraper sur votre bâbord » ?",
   "options": {
    "A": "2 sons prolongés et 1 bref",
    "B": "2 sons prolongés et 2 brefs",
    "C": "1 son prolongé et 2 brefs",
    "D": "3 sons brefs"
   },
   "correct": "B",
   "explanation": "Rattraper sur bâbord : 2 prolongés + 2 brefs. Sur tribord : 2 prolongés + 1 bref.",
   "tags": [
    "signaux-sonores"
   ],
   "concept": "son-depassement-chenal",
   "near": [
    "gen_mod3_sec1_1"
   ]
  },
  {
   "id": "gen_mod3_sec1_3",
   "sectionId": "mod3_sec1",
   "question": "Un navire que vous voulez dépasser dans un chenal vous répond par ce signal. Que signifie-t-il ?",
   "options": {
    "A": "Dépassement impossible, restez derrière moi",
    "B": "Je suis en détresse et demande assistance",
    "C": "Je viens sur tribord",
    "D": "D’accord, je facilite votre dépassement"
   },
   "correct": "D",
   "explanation": "Prolongé, bref, prolongé, bref : signal d’accord du navire rattrapé. En cas de refus, il émet au moins 5 sons brefs.",
   "figure": {
    "fig": "sound",
    "pattern": "-.-."
   },
   "tags": [
    "signaux-sonores"
   ],
   "concept": "son-accord-depassement"
  },
  {
   "id": "gen_mod3_sec1_4",
   "sectionId": "mod3_sec1",
   "question": "Quelle est la durée approximative d’un son bref et d’un son prolongé ?",
   "options": {
    "A": "Bref : 0,1 seconde ; prolongé : 1 seconde",
    "B": "Bref : 3 secondes ; prolongé : 10 secondes",
    "C": "Bref : environ 1 seconde ; prolongé : 4 à 6 secondes",
    "D": "Les deux durent environ 2 secondes, seul le nombre compte"
   },
   "correct": "C",
   "explanation": "Un son bref dure environ 1 seconde, un son prolongé de 4 à 6 secondes.",
   "tags": [
    "signaux-sonores"
   ],
   "concept": "son-durees"
  },
  {
   "id": "gen_mod3_sec1_5",
   "sectionId": "mod3_sec1",
   "question": "En approchant d’un coude d’un chenal étroit qui masque la vue, quel signal émettez-vous ?",
   "options": {
    "A": "3 sons brefs",
    "B": "Un son prolongé",
    "C": "Un son continu",
    "D": "2 sons brefs"
   },
   "correct": "B",
   "explanation": "À l’approche d’un coude ou d’un obstacle qui masque les autres navires, on émet un son prolongé (signal de présence).",
   "tags": [
    "signaux-sonores"
   ],
   "concept": "son-coude"
  },
  {
   "id": "q_3_2_1",
   "sectionId": "mod3_sec2",
   "question": "À l’entrée d’un port, vous voyez ces trois feux fixes superposés. Que signifient-ils ?",
   "options": {
    "A": "Passage interdit",
    "B": "Entrée possible avec prudence",
    "C": "Priorité aux voiliers",
    "D": "Danger grave, port fermé"
   },
   "correct": "A",
   "explanation": "Trois feux rouges fixes (ou à occultations lentes) : passage interdit. Ne pas confondre avec trois feux rouges à éclats, qui signalent un danger grave (port fermé).",
   "figure": {
    "fig": "port",
    "lights": "RRR"
   },
   "tags": [
    "signaux-portuaires"
   ],
   "concept": "port-3-rouges"
  },
  {
   "id": "q_3_2_2",
   "sectionId": "mod3_sec2",
   "question": "À l’entrée d’un port, vous voyez ces trois feux rouges à éclats. Que signifient-ils ?",
   "options": {
    "A": "Passage autorisé aux navires rapides",
    "B": "Circulation à double sens",
    "C": "Vitesse limitée à 3 nœuds",
    "D": "Danger grave : port fermé"
   },
   "correct": "D",
   "explanation": "Trois feux rouges à éclats : danger grave, le port est fermé à tous les navires.",
   "figure": {
    "fig": "port",
    "lights": "RRR",
    "flash": "1"
   },
   "tags": [
    "signaux-portuaires"
   ],
   "concept": "port-danger-grave",
   "near": [
    "var_port-3-rouges_1"
   ]
  },
  {
   "id": "gen_mod3_sec2_1",
   "sectionId": "mod3_sec2",
   "question": "À l’entrée d’un port, que signifient ces trois feux superposés ?",
   "options": {
    "A": "Circulation à double sens, passer avec prudence",
    "B": "Passage interdit",
    "C": "Passage autorisé, circulation en sens unique",
    "D": "Accès réglementé"
   },
   "correct": "C",
   "explanation": "Trois feux verts : passage autorisé, la circulation est en sens unique dans votre sens.",
   "figure": {
    "fig": "port",
    "lights": "GGG"
   },
   "tags": [
    "signaux-portuaires"
   ],
   "concept": "port-3-verts"
  },
  {
   "id": "gen_mod3_sec2_2",
   "sectionId": "mod3_sec2",
   "question": "À l’entrée d’un port, que signifient ces trois feux superposés ?",
   "options": {
    "A": "Passage interdit sauf aux navires de service",
    "B": "Double sens : passage autorisé avec prudence",
    "C": "Danger grave",
    "D": "Port réservé aux navires de pêche et de commerce"
   },
   "correct": "B",
   "explanation": "Vert, vert, blanc : circulation à double sens, on peut passer avec prudence.",
   "figure": {
    "fig": "port",
    "lights": "GGW"
   },
   "tags": [
    "signaux-portuaires"
   ],
   "concept": "port-vert-vert-blanc"
  },
  {
   "id": "gen_mod3_sec2_3",
   "sectionId": "mod3_sec2",
   "question": "À l’entrée d’un port, que signifient ces trois feux superposés ?",
   "options": {
    "A": "Accès réglementé",
    "B": "Passage libre dans les deux sens",
    "C": "Port fermé",
    "D": "Passage interdit aux voiliers"
   },
   "correct": "A",
   "explanation": "Vert, blanc, vert : accès réglementé. Il faut prendre les instructions de la capitainerie avant de passer.",
   "figure": {
    "fig": "port",
    "lights": "GWG"
   },
   "tags": [
    "signaux-portuaires"
   ],
   "concept": "port-vert-blanc-vert"
  },
  {
   "id": "gen_mod3_sec2_4",
   "sectionId": "mod3_sec2",
   "question": "Vous voulez sortir du port en bateau à moteur. Trois feux rouges fixes superposés sont allumés et un cargo est en train d’entrer. Que faites-vous ?",
   "options": {
    "A": "Je sors en serrant la droite",
    "B": "J’émets 5 sons brefs et je sors",
    "C": "Je sors à vitesse réduite",
    "D": "J’attends"
   },
   "correct": "D",
   "explanation": "Trois feux rouges fixes : passage interdit dans votre sens (la circulation est probablement ouverte dans l’autre sens). On attend que le signal autorise la sortie.",
   "tags": [
    "signaux-portuaires"
   ],
   "concept": "port-3-rouges"
  },
  {
   "id": "gen_mod3_sec2_5",
   "sectionId": "mod3_sec2",
   "question": "Un feu jaune allumé à gauche du feu supérieur d’un signal de port indique que :",
   "options": {
    "A": "Le port est fermé à tous, y compris aux petites unités",
    "B": "Seuls les navires de commerce, qui suivent le chenal principal, peuvent passer",
    "C": "Le passage est autorisé aux navires pouvant naviguer hors du chenal principal",
    "D": "La météo se dégrade"
   },
   "correct": "C",
   "explanation": "Signal secondaire : les navires capables de naviguer en sécurité hors du chenal principal (petits bateaux) ne sont pas concernés par le signal principal.",
   "tags": [
    "signaux-portuaires"
   ],
   "concept": "port-feu-jaune"
  },
  {
   "id": "gen_mod3_sec2_6",
   "sectionId": "mod3_sec2",
   "question": "Comment sont les feux des signaux principaux de trafic portuaire, à l’exception du signal de danger grave ?",
   "options": {
    "A": "À éclats rapides, pour être vus de loin",
    "B": "Fixes ou à occultations lentes",
    "C": "Scintillants",
    "D": "Clignotants alternés rouge et vert"
   },
   "correct": "B",
   "explanation": "Les signaux principaux sont fixes ou à occultations lentes ; seul le signal de danger grave (trois rouges) est à éclats.",
   "tags": [
    "signaux-portuaires"
   ],
   "concept": "port-danger-grave"
  },
  {
   "id": "gen_mod3_sec2_7",
   "sectionId": "mod3_sec2",
   "question": "Un sémaphore hisse une boule noire. Qu’annonce ce signal météo ?",
   "options": {
    "A": "Un grand frais",
    "B": "Un coup de vent du Nord-Ouest",
    "C": "Un ouragan",
    "D": "Un temps calme"
   },
   "correct": "A",
   "explanation": "Boule noire : grand frais, vent de force 7 de toute direction.",
   "figure": {
    "fig": "shapes",
    "shapes": "ball"
   },
   "tags": [
    "meteo",
    "signaux-portuaires"
   ],
   "concept": "meteo-signal-boule",
   "near": [
    "var_meteo-signal-boule_1"
   ]
  },
  {
   "id": "gen_mod3_sec2_8",
   "sectionId": "mod3_sec2",
   "question": "Qu’annonce ce signal météo hissé à un sémaphore ?",
   "options": {
    "A": "Grand frais (force 7), toutes directions",
    "B": "Ouragan (force 12)",
    "C": "Coup de vent (force 8 à 11) débutant dans le quadrant sud-ouest",
    "D": "Coup de vent débutant dans le quadrant nord-ouest"
   },
   "correct": "D",
   "explanation": "Un cône pointe en haut : coup de vent ou tempête (force 8 à 11) débutant au Nord-Ouest. Pointe en bas : Sud-Ouest.",
   "figure": {
    "fig": "shapes",
    "shapes": "cone-up"
   },
   "tags": [
    "meteo",
    "signaux-portuaires"
   ],
   "concept": "meteo-signal-cone-haut",
   "near": [
    "var_meteo-signal-cone-haut_1",
    "var_meteo-signal-cone-haut_2",
    "var_meteo-signal-cone-haut_3"
   ]
  },
  {
   "id": "gen_mod3_sec2_9",
   "sectionId": "mod3_sec2",
   "question": "Qu’annonce ce signal météo hissé à un sémaphore ?",
   "options": {
    "A": "Coup de vent débutant dans le quadrant Nord-Est",
    "B": "Navire en action de pêche",
    "C": "Coup de vent débutant dans le quadrant Sud-Est",
    "D": "Grand frais"
   },
   "correct": "C",
   "explanation": "Deux cônes pointes en bas : coup de vent ou tempête débutant au Sud-Est. Deux cônes pointes en haut : Nord-Est.",
   "figure": {
    "fig": "shapes",
    "shapes": "cone-down,cone-down"
   },
   "tags": [
    "meteo",
    "signaux-portuaires"
   ],
   "concept": "meteo-signal-2-cones-bas",
   "near": [
    "var_meteo-signal-2-cones-bas_2",
    "var_meteo-signal-2-cones-bas_3"
   ]
  },
  {
   "id": "gen_mod3_sec2_10",
   "sectionId": "mod3_sec2",
   "question": "Quel signal météo annonce un ouragan (force 12) ?",
   "options": {
    "A": "Une boule noire",
    "B": "Une croix noire",
    "C": "Un cylindre noir",
    "D": "Deux cônes pointes en haut"
   },
   "correct": "B",
   "explanation": "La croix noire annonce un ouragan, vent de force 12 de toute direction.",
   "tags": [
    "meteo",
    "signaux-portuaires"
   ],
   "concept": "meteo-signal-croix",
   "near": [
    "var_meteo-signal-croix_1"
   ]
  },
  {
   "id": "ext_son_124",
   "sectionId": "mod3_sec3",
   "question": "Deux bateaux à moteur font des routes directement opposées avec risque d’abordage. Que doivent-ils faire ?",
   "options": {
    "A": "Chacun vient sur tribord",
    "B": "Le plus rapide garde son cap, le plus lent s’écarte",
    "C": "Chacun vient sur bâbord",
    "D": "Celui qui vient du large est prioritaire"
   },
   "correct": "A",
   "explanation": "Routes opposées : chacun vient sur tribord et les navires se croisent bâbord sur bâbord (« on roule à droite »).",
   "tags": [
    "regles-barre"
   ],
   "concept": "regle-routes-opposees"
  },
  {
   "id": "q_jeudi_2",
   "sectionId": "mod3_sec3",
   "question": "Vous pilotez un bateau à moteur. Un autre bateau à moteur arrive par votre tribord, sur une route de collision. Que faites-vous ?",
   "options": {
    "A": "Je garde cap et vitesse : c’est à lui de s’écarter de ma route",
    "B": "Je viens sur bâbord",
    "C": "J’accélère pour passer devant lui avant qu’il n’arrive",
    "D": "Je passe sur son arrière"
   },
   "correct": "D",
   "explanation": "Routes croisées : celui qui voit l’autre sur son tribord doit s’écarter (« priorité à droite »), franchement, tôt, en passant sur son arrière.",
   "tags": [
    "regles-barre"
   ],
   "concept": "regle-routes-croisees",
   "near": [
    "var_regle-vnm-statut_2"
   ]
  },
  {
   "id": "ext_son_125",
   "sectionId": "mod3_sec3",
   "question": "Au moteur, vous voyez sur votre bâbord un autre bateau à moteur dont la route croise la vôtre ; il se rapproche et son relèvement reste constant. Que faites-vous ?",
   "options": {
    "A": "Je viens sur bâbord",
    "B": "Je m’écarte",
    "C": "Je garde cap et vitesse",
    "D": "Je stoppe net"
   },
   "correct": "C",
   "explanation": "Il vous voit sur son tribord : c’est à lui de s’écarter. Vous maintenez cap et vitesse, en restant prêt à agir s’il ne manœuvre pas.",
   "tags": [
    "regles-barre"
   ],
   "concept": "regle-routes-croisees"
  },
  {
   "id": "q_3_3_2",
   "sectionId": "mod3_sec3",
   "question": "Vous pilotez un bateau à moteur et voyez sur bâbord avant un voilier marchant à la voile, sur une route de collision. Que faites-vous ?",
   "options": {
    "A": "Je garde mon cap car il vient de ma gauche, il doit s’écarter",
    "B": "Je m’écarte de sa route",
    "C": "J’émets 5 sons brefs et j’accélère",
    "D": "J’attends qu’il s’écarte"
   },
   "correct": "B",
   "explanation": "Le voilier marchant à la voile est privilégié par rapport au navire à moteur, d’où qu’il vienne : le bateau à moteur s’écarte, franchement et tôt.",
   "tags": [
    "regles-barre"
   ],
   "concept": "regle-moteur-vs-voile"
  },
  {
   "id": "q_3_3_3",
   "sectionId": "mod3_sec3",
   "question": "Un voilier rattrape par l’arrière un bateau à moteur plus lent. Qui doit manœuvrer ?",
   "options": {
    "A": "Le voilier",
    "B": "Le bateau à moteur",
    "C": "Les deux",
    "D": "Celui qui voit l’autre sur tribord"
   },
   "correct": "A",
   "explanation": "La règle du rattrapant prime : tout navire qui en rattrape un autre doit s’écarter, même un voilier. Le rattrapé garde cap et vitesse.",
   "tags": [
    "regles-barre"
   ],
   "concept": "regle-rattrapant"
  },
  {
   "id": "ext_son_126",
   "sectionId": "mod3_sec3",
   "question": "Quand un navire est-il considéré comme « rattrapant » ?",
   "options": {
    "A": "Quand il est plus grand",
    "B": "Quand il est plus rapide que l’autre, d’où qu’il vienne, même par le travers",
    "C": "Quand il arrive de plus de 22,5° sur l’avant du travers de l’autre",
    "D": "Quand il arrive de plus de 22,5° sur l’arrière du travers de l’autre"
   },
   "correct": "D",
   "explanation": "Un navire en rattrape un autre lorsqu’il arrive de plus de 22,5° sur l’arrière du travers (de nuit, il ne voit que le feu de poupe). Il doit s’écarter.",
   "tags": [
    "regles-barre"
   ],
   "concept": "regle-rattrapant-definition"
  },
  {
   "id": "ext_snd_15",
   "sectionId": "mod3_sec3",
   "question": "Un voilier marchant à la voile et un navire en action de pêche risquent l’abordage. Qui doit s’écarter ?",
   "options": {
    "A": "Celui qui voit l’autre sur tribord",
    "B": "Le navire de pêche",
    "C": "Le voilier",
    "D": "Le plus rapide"
   },
   "correct": "C",
   "explanation": "Dans la hiérarchie des privilèges, le navire en action de pêche passe avant le voilier.",
   "tags": [
    "regles-barre",
    "peche"
   ],
   "concept": "regle-hierarchie-peche-voilier",
   "near": [
    "var_regle-priorite-nuc_1"
   ]
  },
  {
   "id": "ext_son_127",
   "sectionId": "mod3_sec3",
   "question": "Dans la hiérarchie des privilèges, lequel de ces navires est le plus privilégié ?",
   "options": {
    "A": "Un voilier marchant à la voile",
    "B": "Un navire non maître de sa manœuvre",
    "C": "Un navire à propulsion mécanique",
    "D": "Un navire en action de pêche"
   },
   "correct": "B",
   "explanation": "Ordre : non maître de sa manœuvre et capacité de manœuvre restreinte (à égalité, au sommet) ; ne pas gêner le navire handicapé par son tirant d’eau ; puis navire en pêche, voilier, et enfin navire à moteur.",
   "tags": [
    "regles-barre",
    "navires-speciaux"
   ],
   "concept": "regle-priorite-nuc"
  },
  {
   "id": "ext_bal_101",
   "sectionId": "mod4_sec3",
   "question": "Quelle est la vitesse maximale dans la bande des 300 m à partir du rivage ?",
   "options": {
    "A": "3 nœuds",
    "B": "5 nœuds",
    "C": "8 nœuds",
    "D": "10 nœuds"
   },
   "correct": "B",
   "explanation": "La vitesse est limitée à 5 nœuds dans la bande des 300 m à partir du rivage ; des règles locales (ports, chenaux) peuvent fixer d’autres limites.",
   "tags": [
    "vitesse-zones"
   ],
   "concept": "vitesse-300m",
   "near": [
    "c13_loisirs_05",
    "exam_q1_1",
    "exam_q3_5",
    "exam_q4_11"
   ]
  },
  {
   "id": "gen_mod3_sec3_1",
   "sectionId": "mod3_sec3",
   "question": "Comment savoir s’il existe un risque d’abordage avec un navire qui s’approche ?",
   "options": {
    "A": "Son relèvement ne change pas",
    "B": "Son relèvement change rapidement d’un relevé à l’autre",
    "C": "Il est plus rapide que vous",
    "D": "Il est plus grand que vous"
   },
   "correct": "A",
   "explanation": "Si le relèvement au compas (ou le gisement) d’un navire qui se rapproche reste constant, il y a risque d’abordage.",
   "tags": [
    "regles-barre"
   ],
   "concept": "regle-relevement-constant"
  },
  {
   "id": "gen_mod3_sec3_2",
   "sectionId": "mod3_sec3",
   "question": "De nuit, en bateau à moteur, la route d’un autre navire à moteur croise la vôtre. Vous ne voyez que ces feux. Êtes-vous privilégié ?",
   "options": {
    "A": "Oui",
    "B": "On ne peut pas savoir",
    "C": "Non, sauf s’il est plus petit",
    "D": "Non"
   },
   "correct": "D",
   "explanation": "Voir le feu rouge (bâbord) de l’autre signifie qu’il est sur votre tribord : vous n’êtes pas privilégié (« rouge, je ne suis pas privilégié ; vert, je suis privilégié »).",
   "figure": {
    "fig": "lights",
    "rows": ". W|R ."
   },
   "tags": [
    "regles-barre"
   ],
   "concept": "regle-routes-croisees"
  },
  {
   "id": "gen_mod3_sec3_3",
   "sectionId": "mod3_sec3",
   "question": "Dans un chenal étroit, vous naviguez en petit bateau de plaisance et croisez un cargo qui ne peut naviguer qu’à l’intérieur du chenal. Qui est prioritaire ?",
   "options": {
    "A": "Vous",
    "B": "Celui qui vient de droite",
    "C": "Le cargo",
    "D": "Celui qui entre au port"
   },
   "correct": "C",
   "explanation": "Les navires qui ne peuvent naviguer qu’à l’intérieur d’un chenal étroit sont prioritaires : les petits bateaux ne doivent pas les gêner.",
   "tags": [
    "regles-barre"
   ],
   "concept": "regle-chenal-ne-pas-gener"
  },
  {
   "id": "gen_mod3_sec3_4",
   "sectionId": "mod3_sec3",
   "question": "Dans un chenal étroit, de quel côté devez-vous naviguer ?",
   "options": {
    "A": "Au milieu du chenal",
    "B": "Au plus près du bord du chenal situé sur votre tribord",
    "C": "Le plus près possible du bord du chenal situé sur votre bâbord",
    "D": "N’importe où"
   },
   "correct": "B",
   "explanation": "Dans un chenal étroit, on serre la limite du chenal qui se trouve sur tribord (« on roule à droite »).",
   "tags": [
    "regles-barre"
   ],
   "concept": "regle-chenal-serrer-tribord",
   "near": [
    "var_regle-chenal-serrer-tribord_2"
   ]
  },
  {
   "id": "gen_mod3_sec3_5",
   "sectionId": "mod3_sec3",
   "question": "Quelle est la vitesse maximale dans les chenaux d’accès aux ports ?",
   "options": {
    "A": "3 nœuds",
    "B": "5 nœuds",
    "C": "10 nœuds",
    "D": "Aucune limite"
   },
   "correct": "B",
   "explanation": "Chenaux d’accès aux ports : 5 nœuds. Dans les ports : 3 ou 5 nœuds, selon l’affichage.",
   "tags": [
    "vitesse-zones"
   ],
   "concept": "vitesse-chenaux-port",
   "near": [
    "var_vitesse-chenaux-port_1",
    "var_vitesse-chenaux-port_2",
    "var_vitesse-chenaux-port_4"
   ]
  },
  {
   "id": "gen_mod3_sec3_6",
   "sectionId": "mod3_sec3",
   "question": "Au regard des règles de route, comment est considéré un véhicule nautique à moteur (jet-ski) ?",
   "options": {
    "A": "Comme un navire à moteur",
    "B": "Comme un voilier",
    "C": "Comme un navire privilégié",
    "D": "Comme un nageur"
   },
   "correct": "A",
   "explanation": "Les véhicules nautiques à moteur et les voiliers marchant au moteur sont des navires à moteur au regard des règles de route.",
   "tags": [
    "regles-barre",
    "loisirs"
   ],
   "concept": "regle-vnm-statut"
  },
  {
   "id": "gen_mod3_sec3_7",
   "sectionId": "mod3_sec3",
   "question": "À quoi correspond une vitesse de 1 nœud ?",
   "options": {
    "A": "1 mille par heure, soit 1,852 km/h",
    "B": "1 km/h",
    "C": "1 mètre par seconde, soit 3,6 km/h",
    "D": "1 mille terrestre par heure, soit 1,609 km/h"
   },
   "correct": "A",
   "explanation": "1 nœud = 1 mille marin par heure ; 1 mille = 1 852 m, donc 1 nœud = 1,852 km/h.",
   "tags": [
    "pratique"
   ],
   "concept": "unite-mille-noeud"
  },
  {
   "id": "q_4_1_1",
   "sectionId": "mod4_sec1",
   "question": "Quel est le canal VHF de veille et d’appel de détresse ?",
   "options": {
    "A": "Canal 6",
    "B": "Canal 9",
    "C": "Canal 16",
    "D": "Canal 72"
   },
   "correct": "C",
   "explanation": "Le canal 16 est le canal international de veille, de sécurité et de détresse.",
   "tags": [
    "detresse"
   ],
   "concept": "vhf-canal-16",
   "near": [
    "var_vhf-canal-16_1",
    "var_vhf-canal-16_2",
    "var_vhf-canal-16_3"
   ]
  },
  {
   "id": "q_4_1_2",
   "sectionId": "mod4_sec1",
   "question": "De nuit, au large, vous voyez une fusée rouge descendre lentement sous un parachute. Que faites-vous ?",
   "options": {
    "A": "Je poursuis ma route",
    "B": "Je m’éloigne de la zone",
    "C": "J’attends le jour pour agir",
    "D": "J’alerte le JRCC Tahiti"
   },
   "correct": "D",
   "explanation": "La fusée à parachute rouge est un signal de détresse. Il faut alerter les secours (JRCC Tahiti, canal 16 de la VHF ou 16 par téléphone) et porter assistance si on peut le faire sans danger.",
   "tags": [
    "detresse"
   ],
   "concept": "detresse-fusee-parachute",
   "near": [
    "exam_q4_12"
   ]
  },
  {
   "id": "q_4_1_3",
   "sectionId": "mod4_sec1",
   "question": "Quels pavillons, hissés l’un au-dessus de l’autre, constituent un signal de détresse ?",
   "options": {
    "A": "A au-dessus de B",
    "B": "Q au-dessus de H",
    "C": "N au-dessus de C",
    "D": "C au-dessus de N"
   },
   "correct": "C",
   "explanation": "Le pavillon N (damier bleu et blanc) au-dessus du pavillon C (bandes bleu, blanc, rouge, blanc, bleu) signale la détresse.",
   "tags": [
    "detresse",
    "pavillons"
   ],
   "concept": "detresse-nc",
   "near": [
    "var_detresse-nc_3"
   ]
  },
  {
   "id": "ext_sec_8",
   "sectionId": "mod4_sec1",
   "question": "De quelle couleur est la fumée d’un fumigène de détresse ?",
   "options": {
    "A": "Rouge",
    "B": "Orange",
    "C": "Blanche",
    "D": "Noire"
   },
   "correct": "B",
   "explanation": "Le fumigène de détresse produit une fumée orange, visible de jour.",
   "tags": [
    "detresse"
   ],
   "concept": "detresse-fumigene"
  },
  {
   "id": "q_bilan4_1",
   "sectionId": "mod4_sec1",
   "question": "En Polynésie française, quel numéro de téléphone permet d’alerter le JRCC Tahiti en cas de détresse en mer ?",
   "options": {
    "A": "Le 15",
    "B": "Le 17",
    "C": "Le 16",
    "D": "Le 196"
   },
   "correct": "C",
   "explanation": "En Polynésie, on alerte le JRCC Tahiti par la VHF canal 16 ou par téléphone au 16. Le 196 (CROSS) concerne la métropole.",
   "tags": [
    "detresse"
   ],
   "concept": "jrcc-telephone",
   "near": [
    "var_jrcc-telephone_1",
    "var_jrcc-telephone_2",
    "var_jrcc-telephone_3",
    "var_vhf-canal-16_2"
   ]
  },
  {
   "id": "gen_mod4_sec1_1",
   "sectionId": "mod4_sec1",
   "question": "En Polynésie française, un CROSS coordonne-t-il les sauvetages en mer ?",
   "options": {
    "A": "Oui, le CROSS Étel",
    "B": "Non, c’est le JRCC Tahiti",
    "C": "Oui, comme en métropole",
    "D": "Non, c’est la capitainerie"
   },
   "correct": "B",
   "explanation": "Il n’y a pas de CROSS en Polynésie française : le JRCC Tahiti coordonne et dirige les opérations de sauvetage (rôle tenu par les CROSS en métropole).",
   "tags": [
    "detresse"
   ],
   "concept": "jrcc-coordination",
   "near": [
    "exam_q2_9"
   ]
  },
  {
   "id": "gen_mod4_sec1_2",
   "sectionId": "mod4_sec1",
   "question": "Quel signal sonore est un signal de détresse ?",
   "options": {
    "A": "2 sons brefs",
    "B": "3 sons brefs",
    "C": "1 son prolongé toutes les 2 minutes",
    "D": "Un son continu"
   },
   "correct": "D",
   "explanation": "Un son continu, émis par n’importe quel appareil sonore (corne, sifflet, cloche), est un signal de détresse.",
   "tags": [
    "detresse",
    "signaux-sonores"
   ],
   "concept": "detresse-son-continu",
   "near": [
    "var_detresse-son-continu_4"
   ]
  },
  {
   "id": "gen_mod4_sec1_3",
   "sectionId": "mod4_sec1",
   "question": "Comment lance-t-on un appel de détresse à la VHF ?",
   "options": {
    "A": "« SÉCURITÉ » sur le canal 72",
    "B": "« PAN PAN » répété 3 fois sur le canal 9",
    "C": "« MAYDAY » répété 3 fois sur le canal 16",
    "D": "« SOS » sur le canal 6"
   },
   "correct": "C",
   "explanation": "L’appel de détresse commence par « MAYDAY MAYDAY MAYDAY » sur le canal 16, suivi du nom du navire, de sa position et de la nature de la détresse.",
   "tags": [
    "detresse"
   ],
   "concept": "mayday-appel",
   "near": [
    "var_mayday-appel_4"
   ]
  },
  {
   "id": "gen_mod4_sec1_4",
   "sectionId": "mod4_sec1",
   "question": "Lors d’un appel de détresse, quelle information est indispensable ?",
   "options": {
    "A": "La marque du moteur",
    "B": "La position du navire et la nature de la détresse",
    "C": "Le prix du bateau",
    "D": "L’heure de départ prévue et le port de destination"
   },
   "correct": "B",
   "explanation": "Il faut indiquer la position du navire et ses avaries (nature de la détresse), ainsi que le nombre de personnes à bord.",
   "tags": [
    "detresse"
   ],
   "concept": "mayday-contenu"
  },
  {
   "id": "gen_mod4_sec1_5",
   "sectionId": "mod4_sec1",
   "question": "De quelle couleur est la lumière d’un feu automatique à main de détresse ?",
   "options": {
    "A": "Rouge",
    "B": "Blanche",
    "C": "Verte",
    "D": "Orange"
   },
   "correct": "A",
   "explanation": "Le feu automatique à main produit une flamme rouge très lumineuse, visible de jour comme de nuit.",
   "tags": [
    "detresse"
   ],
   "concept": "detresse-feu-main",
   "near": [
    "exam_q2_8"
   ]
  },
  {
   "id": "gen_mod4_sec1_6",
   "sectionId": "mod4_sec1",
   "question": "Quel geste constitue un signal de détresse ?",
   "options": {
    "A": "Montrer une boule noire seule, hissée bien en vue dans la mâture",
    "B": "Agiter un pavillon national",
    "C": "Faire des appels de phare blancs et verts répétés en direction de la côte",
    "D": "Lever et abaisser lentement les bras"
   },
   "correct": "D",
   "explanation": "Les mouvements lents et répétés de haut en bas des bras tendus de chaque côté du corps sont un signal de détresse.",
   "tags": [
    "detresse"
   ],
   "concept": "detresse-bras"
  },
  {
   "id": "gen_mod4_sec1_7",
   "sectionId": "mod4_sec1",
   "question": "Avec une lampe ou un miroir, quel signal de détresse pouvez-vous émettre ?",
   "options": {
    "A": "Un feu fixe blanc",
    "B": "Des éclats verts",
    "C": "SOS en morse : 3 brefs, 3 longs, 3 brefs",
    "D": "La lettre A en morse : 1 bref, 1 long, répétée"
   },
   "correct": "C",
   "explanation": "Le signal lumineux SOS en morse (· · · — — — · · ·) est un signal de détresse, de jour comme de nuit.",
   "tags": [
    "detresse"
   ],
   "concept": "detresse-sos",
   "near": [
    "var_detresse-sos_1"
   ]
  },
  {
   "id": "gen_mod4_sec1_8",
   "sectionId": "mod4_sec1",
   "question": "Lequel de ces signaux n’est PAS un signal de détresse ?",
   "options": {
    "A": "Un fumigène orange",
    "B": "Le pavillon A",
    "C": "Une fusée à parachute rouge",
    "D": "Un son continu"
   },
   "correct": "B",
   "explanation": "Le pavillon A (blanc et bleu) signale des plongeurs en immersion. Les trois autres sont des signaux de détresse.",
   "tags": [
    "detresse",
    "pavillons"
   ],
   "concept": "detresse-intrus"
  },
  {
   "id": "gen_mod4_sec1_9",
   "sectionId": "mod4_sec1",
   "question": "Quel signal visuel en mâture indique un navire en détresse ?",
   "options": {
    "A": "Une boule et un pavillon carré",
    "B": "Deux boules noires superposées, bien en vue dans la mâture",
    "C": "Un cylindre noir",
    "D": "Un cône pointe en bas hissé au-dessus d’un pavillon"
   },
   "correct": "A",
   "explanation": "Une boule (ou un objet similaire) au-dessus ou au-dessous d’un pavillon carré est un signal de détresse.",
   "tags": [
    "detresse"
   ],
   "concept": "detresse-boule-pavillon",
   "near": [
    "var_detresse-boule-pavillon_1"
   ]
  },
  {
   "id": "q_4_2_2",
   "sectionId": "mod4_sec2",
   "question": "Votre sortie nécessite 40 litres de carburant. Avec la marge de sécurité de 30 %, combien devez-vous embarquer au minimum ?",
   "options": {
    "A": "44 litres",
    "B": "52 litres",
    "C": "60 litres",
    "D": "70 litres"
   },
   "correct": "B",
   "explanation": "40 l + 30 % de 40 l (12 l) = 52 litres.",
   "tags": [
    "carburant"
   ],
   "concept": "carburant-calcul-quantite"
  },
  {
   "id": "q_bilan4_3",
   "sectionId": "mod4_sec2",
   "question": "Combien de feux automatiques à main faut-il à bord d’un bateau armé en côtier (jusqu’à 5 milles d’un abri) ?",
   "options": {
    "A": "1",
    "B": "2",
    "C": "3",
    "D": "5"
   },
   "correct": "C",
   "explanation": "Il faut 3 feux rouges automatiques à main, en dotation côtière comme en basique. Il en faut 6 au-delà de 20 milles d’un abri.",
   "tags": [
    "armement"
   ],
   "concept": "armement-feux-main-cotier",
   "near": [
    "var_armement-feux-main-cotier_1",
    "var_armement-feux-main-cotier_2"
   ]
  },
  {
   "id": "ext_sec_12",
   "sectionId": "mod4_sec2",
   "question": "Quelle marge de sécurité ajoute-t-on au carburant calculé pour une sortie ?",
   "options": {
    "A": "10 %",
    "B": "20 %",
    "C": "30 %",
    "D": "50 %"
   },
   "correct": "C",
   "explanation": "La consommation varie avec le vent, le courant, la vitesse et l’état du moteur : on ajoute une marge de 30 %.",
   "tags": [
    "carburant"
   ],
   "concept": "carburant-marge"
  },
  {
   "id": "ext_sec_15",
   "sectionId": "mod4_sec2",
   "question": "Quel document est le titre de navigation du bateau ?",
   "options": {
    "A": "Le certificat restreint de radiotéléphoniste",
    "B": "L’acte de vente",
    "C": "Le permis côtier",
    "D": "L’acte de francisation ou la carte de circulation"
   },
   "correct": "D",
   "explanation": "Le titre de navigation est l’acte de francisation ou la carte de circulation. Il doit être à bord avec le permis du pilote.",
   "tags": [
    "papiers"
   ],
   "concept": "papiers-titre-navigation",
   "near": [
    "var_papiers-titre-navigation_2"
   ]
  },
  {
   "id": "ext_sec_129",
   "sectionId": "mod4_sec2",
   "question": "En Polynésie française, jusqu’à quelle distance d’un abri peut naviguer un bateau armé en côtier (5e catégorie) ?",
   "options": {
    "A": "2 milles",
    "B": "5 milles",
    "C": "6 milles",
    "D": "60 milles"
   },
   "correct": "B",
   "explanation": "Basique (6e catégorie) : jusqu’à 2 milles d’un abri ; côtière (5e catégorie) : jusqu’à 5 milles ; hauturière (4e à 1re catégorie) : au-delà.",
   "tags": [
    "armement"
   ],
   "concept": "armement-cotier-5-milles",
   "near": [
    "exam_q3_14",
    "gen_mod4_sec2_10"
   ]
  },
  {
   "id": "ext_sec_132",
   "sectionId": "mod4_sec2",
   "question": "Le coupe-circuit d’un bateau à moteur :",
   "options": {
    "A": "Est facultatif par mer calme",
    "B": "N’est obligatoire qu’au-delà de 2 milles d’un abri (armement côtier)",
    "C": "Doit être relié au pilote",
    "D": "Ne sert qu’à démarrer le moteur"
   },
   "correct": "C",
   "explanation": "Le coupe-circuit fait partie de la dotation basique pour un moteur de plus de 4,5 kW (6 ch) à poste de conduite ouvert : relié au pilote, il coupe le moteur si le pilote tombe ou est éjecté.",
   "tags": [
    "armement"
   ],
   "concept": "armement-coupe-circuit",
   "near": [
    "var_armement-coupe-circuit_2"
   ]
  },
  {
   "id": "gen_mod4_sec2_1",
   "sectionId": "mod4_sec2",
   "question": "Qu’est-ce qu’un abri ?",
   "options": {
    "A": "Toute plage où échouer le bateau",
    "B": "Un lieu sûr d’où repartir sans aide",
    "C": "Une bouée où attendre les secours",
    "D": "Seulement un port avec capitainerie"
   },
   "correct": "B",
   "explanation": "Un abri est un lieu où l’on peut mouiller ou accoster en sécurité et repartir sans aide ; il dépend de la météo du moment et des caractéristiques du navire.",
   "tags": [
    "armement"
   ],
   "concept": "armement-abri"
  },
  {
   "id": "gen_mod4_sec2_2",
   "sectionId": "mod4_sec2",
   "question": "Jusqu’à quelle distance d’un abri s’applique la dotation basique ?",
   "options": {
    "A": "300 m",
    "B": "2 milles",
    "C": "5 milles",
    "D": "6 milles"
   },
   "correct": "B",
   "explanation": "La dotation basique (6e catégorie) permet de naviguer jusqu’à 2 milles d’un abri.",
   "tags": [
    "armement"
   ],
   "concept": "armement-basique-2-milles",
   "near": [
    "var_armement-basique-2-milles_3",
    "var_armement-basique-2-milles_4"
   ]
  },
  {
   "id": "gen_mod4_sec2_3",
   "sectionId": "mod4_sec2",
   "question": "Un bateau dispose de 40 litres de carburant et consomme 4 litres par heure. En gardant 30 % de réserve, quelle est son autonomie ?",
   "options": {
    "A": "10 heures",
    "B": "7 heures",
    "C": "5 heures",
    "D": "13 heures"
   },
   "correct": "B",
   "explanation": "Autonomie = (quantité − 30 %) / consommation = (40 − 12) / 4 = 7 heures.",
   "tags": [
    "carburant"
   ],
   "concept": "carburant-calcul-autonomie",
   "near": [
    "var_carburant-calcul-autonomie_1"
   ]
  },
  {
   "id": "gen_mod4_sec2_4",
   "sectionId": "mod4_sec2",
   "question": "Vous devez parcourir 30 milles à 10 nœuds avec un moteur qui consomme 12 litres par heure. Quelle quantité de carburant devez-vous prévoir, marge de 30 % comprise ?",
   "options": {
    "A": "Environ 36 litres",
    "B": "Environ 47 litres",
    "C": "Environ 30 litres",
    "D": "Environ 60 litres"
   },
   "correct": "B",
   "explanation": "30 / 10 = 3 h ; 3 × 12 = 36 l ; 36 + 30 % (10,8 l) = 46,8 l, soit environ 47 litres.",
   "tags": [
    "carburant"
   ],
   "concept": "carburant-calcul-quantite"
  },
  {
   "id": "gen_mod4_sec2_5",
   "sectionId": "mod4_sec2",
   "question": "Quand faut-il un certificat restreint de radiotéléphoniste (CRR) ?",
   "options": {
    "A": "Lorsque le bateau est équipé d’une VHF fixe",
    "B": "Toujours, pour tout bateau, même sans aucune radio",
    "C": "Uniquement pour les voiliers",
    "D": "Jamais en Polynésie"
   },
   "correct": "A",
   "explanation": "Le CRR est exigé pour utiliser une VHF fixe à bord.",
   "tags": [
    "papiers"
   ],
   "concept": "papiers-crr",
   "near": [
    "var_papiers-crr_1",
    "var_papiers-crr_3"
   ]
  },
  {
   "id": "gen_mod4_sec2_6",
   "sectionId": "mod4_sec2",
   "question": "Avant de partir, qui devez-vous prévenir et de quoi ?",
   "options": {
    "A": "Personne",
    "B": "Le JRCC : liste du matériel de sécurité embarqué et heure de départ",
    "C": "La gendarmerie : immatriculation du bateau et liste complète des passagers",
    "D": "Un proche : destination, heure de retour et nombre de personnes à bord"
   },
   "correct": "D",
   "explanation": "Prévenir un proche de la destination, de l’heure de retour et du nombre de personnes à bord permet de déclencher les secours en cas de retard.",
   "tags": [
    "armement",
    "detresse"
   ],
   "concept": "prevenir-proche",
   "near": [
    "var_prevenir-proche_3"
   ]
  },
  {
   "id": "gen_mod4_sec2_7",
   "sectionId": "mod4_sec2",
   "question": "Lequel de ces équipements fait partie de la dotation basique ?",
   "options": {
    "A": "Un compas magnétique",
    "B": "Un miroir de signalisation",
    "C": "Une écope",
    "D": "Le RIPAM"
   },
   "correct": "C",
   "explanation": "Basique (6e catégorie, jusqu’à 2 milles) : gilet par personne, extincteur, seau ou écope, coupe-circuit, 3 feux à main, feux de navigation, ligne de mouillage, aviron ou pagaies, gaffe, filin de remorquage, outillage. Compas et miroir s’ajoutent en côtière.",
   "tags": [
    "armement"
   ],
   "concept": "armement-basique-contenu",
   "near": [
    "var_armement-basique-contenu_1"
   ]
  },
  {
   "id": "gen_mod4_sec2_8",
   "sectionId": "mod4_sec2",
   "question": "Lequel de ces équipements est exigé en dotation côtière, mais pas en basique ?",
   "options": {
    "A": "L’écope",
    "B": "Les pavillons N et C",
    "C": "Le pavillon national",
    "D": "La ligne de mouillage"
   },
   "correct": "B",
   "explanation": "La dotation côtière ajoute notamment les pavillons N et C (60 × 50 cm au minimum). L’écope et la ligne de mouillage sont déjà dans la basique ; le pavillon national n’est exigé qu’au-delà de 5 milles, hors des eaux territoriales.",
   "tags": [
    "armement",
    "pavillons"
   ],
   "concept": "armement-cotier-pavillons",
   "near": [
    "var_armement-feux-main-cotier_3"
   ]
  },
  {
   "id": "gen_mod4_sec2_9",
   "sectionId": "mod4_sec2",
   "question": "Pour quels bateaux le permis côtier est-il obligatoire ?",
   "options": {
    "A": "Pour les bateaux à moteur de plus de 6 CV",
    "B": "Pour tous les bateaux, même à la rame ou à la voile sans moteur",
    "C": "Uniquement pour les bateaux de plus de 12 m",
    "D": "Uniquement pour les voiliers"
   },
   "correct": "A",
   "explanation": "Le permis côtier est requis pour conduire un bateau de plaisance ou un VNM dont la puissance dépasse 4,5 kW (6 CV).",
   "tags": [
    "papiers"
   ],
   "concept": "permis-obligation"
  },
  {
   "id": "gen_mod4_sec2_10",
   "sectionId": "mod4_sec2",
   "question": "En Polynésie française, jusqu’à quelle distance d’un abri le permis côtier permet-il de naviguer ?",
   "options": {
    "A": "2 milles",
    "B": "5 milles",
    "C": "6 milles",
    "D": "20 milles"
   },
   "correct": "B",
   "explanation": "En Polynésie, le permis côtier autorise la navigation de jour comme de nuit jusqu’à 5 milles d’un abri (6 milles en métropole).",
   "tags": [
    "papiers"
   ],
   "concept": "permis-cotier-limite",
   "near": [
    "ext_sec_129",
    "var_permis-cotier-limite_2"
   ]
  },
  {
   "id": "q_4_3_1",
   "sectionId": "mod4_sec3",
   "question": "Jusqu’à quelle distance du rivage peut naviguer un véhicule nautique à moteur (VNM) dont le pilote se tient debout ?",
   "options": {
    "A": "300 m",
    "B": "1 mille",
    "C": "2 milles",
    "D": "6 milles"
   },
   "correct": "B",
   "explanation": "En Polynésie française (arrêté n° 1097 CM du 17 juillet 2009), un VNM piloté debout ne s’éloigne pas à plus d’1 mille du rivage (2 milles pilote assis), et uniquement de jour.",
   "tags": [
    "loisirs"
   ],
   "concept": "vnm-distance",
   "near": [
    "c13_loisirs_02"
   ]
  },
  {
   "id": "ext_sec_10",
   "sectionId": "mod4_sec3",
   "question": "Vous louez un jet-ski en fin d’après-midi. Jusqu’à quand pouvez-vous naviguer ?",
   "options": {
    "A": "Jusqu’au coucher du soleil",
    "B": "Jusqu’à 22 h",
    "C": "Sans limite, feux allumés",
    "D": "Jusqu’à minuit dans le lagon"
   },
   "correct": "A",
   "explanation": "Les véhicules nautiques à moteur naviguent de jour uniquement, même équipés de feux : il faut être rentré au coucher du soleil.",
   "tags": [
    "loisirs"
   ],
   "concept": "vnm-nuit",
   "near": [
    "c13_loisirs_03",
    "var_vnm-nuit_2"
   ]
  },
  {
   "id": "q_4_3_2",
   "sectionId": "mod4_sec3",
   "question": "À quelle distance minimale devez-vous naviguer d’un bateau signalant des plongeurs ?",
   "options": {
    "A": "50 m",
    "B": "100 m",
    "C": "300 m",
    "D": "1 mille"
   },
   "correct": "B",
   "explanation": "On doit naviguer à plus de 100 m d’un navire qui signale des plongeurs.",
   "tags": [
    "loisirs",
    "pavillons"
   ],
   "concept": "plongee-distance"
  },
  {
   "id": "ext_nav_149",
   "sectionId": "mod4_sec3",
   "question": "Que signale ce pavillon ?",
   "options": {
    "A": "Je suis en détresse",
    "B": "Je tracte un skieur",
    "C": "Plongeurs en immersion",
    "D": "J’ai un pilote à bord"
   },
   "correct": "C",
   "explanation": "Le pavillon A (blanc et bleu, en queue d’aronde) signale des plongeurs : naviguer à plus de 100 m, à vitesse réduite.",
   "figure": {
    "fig": "flag",
    "flag": "A"
   },
   "tags": [
    "pavillons",
    "loisirs"
   ],
   "concept": "pavillon-plongee",
   "near": [
    "var_detresse-intrus_3"
   ]
  },
  {
   "id": "q_4_3_3",
   "sectionId": "mod4_sec3",
   "question": "Le pilote d’un bateau qui tracte un skieur nautique peut-il être seul à bord ?",
   "options": {
    "A": "Oui, si le bateau a un rétroviseur grand angle orienté vers le skieur",
    "B": "Oui, s’il est titulaire du brevet d’État de moniteur de ski nautique",
    "C": "Oui, s’il a le permis côtier et au moins deux ans d’expérience",
    "D": "Non, en aucun cas"
   },
   "correct": "B",
   "explanation": "Il faut normalement un pilote et une personne chargée de la surveillance, sauf si le pilote est titulaire du brevet d’État de moniteur de ski nautique.",
   "tags": [
    "loisirs"
   ],
   "concept": "ski-deux-personnes",
   "near": [
    "c13_loisirs_07",
    "exam_q2_6",
    "exam_q4_7"
   ]
  },
  {
   "id": "gen_mod4_sec3_1",
   "sectionId": "mod4_sec3",
   "question": "Le skieur que vous tractez vient de tomber. Que faites-vous ?",
   "options": {
    "A": "Je remonte la remorque immédiatement",
    "B": "Je fais demi-tour pour que le skieur attrape la remorque au passage",
    "C": "Je continue jusqu’à la fin du tour",
    "D": "J’accélère pour l’éloigner du bateau"
   },
   "correct": "A",
   "explanation": "Chaque fois que la personne tractée tombe, il faut remonter la remorque tout de suite pour éviter qu’elle se prenne dans l’hélice.",
   "tags": [
    "loisirs"
   ],
   "concept": "ski-chute-remorque",
   "near": [
    "c13_loisirs_06"
   ]
  },
  {
   "id": "gen_mod4_sec3_2",
   "sectionId": "mod4_sec3",
   "question": "Que doit arborer un bateau qui tracte un skieur nautique ?",
   "options": {
    "A": "Le pavillon A, blanc et bleu, en tête de mât",
    "B": "Une boule noire",
    "C": "Les pavillons N et C hissés l’un sur l’autre",
    "D": "Une flamme orange fluorescente de 2 m"
   },
   "correct": "D",
   "explanation": "Le bateau tracteur arbore une flamme orange fluorescente de 2 m.",
   "tags": [
    "loisirs",
    "pavillons"
   ],
   "concept": "ski-flamme",
   "near": [
    "var_ski-flamme_2",
    "var_ski-flamme_4"
   ]
  },
  {
   "id": "gen_mod4_sec3_3",
   "sectionId": "mod4_sec3",
   "question": "Que signale ce pavillon ?",
   "options": {
    "A": "Navire en pêche : ne pas passer près de ses filets",
    "B": "Détresse : se dérouter pour porter assistance",
    "C": "Plongée sous-marine",
    "D": "Port fermé"
   },
   "correct": "C",
   "explanation": "Le pavillon rouge barré d’une diagonale blanche signale, comme le pavillon A, des plongeurs en immersion : s’éloigner à plus de 100 m.",
   "figure": {
    "fig": "flag",
    "flag": "diver-red"
   },
   "tags": [
    "pavillons",
    "loisirs"
   ],
   "concept": "pavillon-plongee"
  },
  {
   "id": "gen_mod4_sec3_4",
   "sectionId": "mod4_sec3",
   "question": "De nuit, quels feux montre un bateau de plongée en activité ?",
   "options": {
    "A": "Deux feux rouges superposés, comme un navire non maître de sa manœuvre",
    "B": "Rouge, blanc, rouge",
    "C": "Vert sur blanc, comme un chalutier en pêche",
    "D": "Un feu bleu"
   },
   "correct": "B",
   "explanation": "Les bateaux de plongée montrent les feux d’un navire à capacité de manœuvre restreinte : rouge, blanc, rouge superposés.",
   "tags": [
    "navires-speciaux",
    "loisirs"
   ],
   "concept": "plongee-feux-ram"
  },
  {
   "id": "gen_mod4_sec3_5",
   "sectionId": "mod4_sec3",
   "question": "Vous devez traverser la zone de protection d’un bateau de plongée. Que faites-vous ?",
   "options": {
    "A": "Je ralentis fortement et j’évite les bulles",
    "B": "Je passe vite pour limiter le temps passé dans la zone des plongeurs",
    "C": "Je passe au-dessus des bulles, là où les plongeurs sont repérables",
    "D": "J’émets un son prolongé"
   },
   "correct": "A",
   "explanation": "N’entrer dans la zone qu’en cas de nécessité, à très faible vitesse, en évitant les bulles et prêt à débrayer.",
   "tags": [
    "loisirs"
   ],
   "concept": "plongee-traverser"
  },
  {
   "id": "gen_mod4_sec3_6",
   "sectionId": "mod3_sec3",
   "question": "Une planche à voile croise la route de votre bateau à moteur. Qui doit s’écarter ?",
   "options": {
    "A": "La planche à voile",
    "B": "Celui qui voit l’autre sur bâbord",
    "C": "Le plus rapide",
    "D": "Votre bateau à moteur"
   },
   "correct": "D",
   "explanation": "Les planches à voile (et kitesurfs) sont prioritaires par rapport au bateau à moteur.",
   "tags": [
    "regles-barre"
   ],
   "concept": "regle-moteur-vs-voile",
   "near": [
    "var_peche-definition_2"
   ]
  },
  {
   "id": "gen_mod4_sec3_7",
   "sectionId": "mod4_sec3",
   "question": "Jusqu’à quelle distance d’un abri une planche à voile ou un kitesurf peut-il naviguer ?",
   "options": {
    "A": "300 m",
    "B": "1 mille",
    "C": "2 milles",
    "D": "5 milles"
   },
   "correct": "C",
   "explanation": "La navigation des planches à voile et des kitesurfs est limitée à 2 milles d’un abri.",
   "tags": [
    "loisirs"
   ],
   "concept": "planche-distance",
   "near": [
    "c13_loisirs_08"
   ]
  },
  {
   "id": "gen_mod4_sec3_8",
   "sectionId": "mod4_sec3",
   "question": "Quel permis faut-il pour piloter un véhicule nautique à moteur (jet-ski) ?",
   "options": {
    "A": "Aucun",
    "B": "Le permis hauturier uniquement",
    "C": "Le permis côtier",
    "D": "Le brevet d’État de ski nautique"
   },
   "correct": "C",
   "explanation": "Le pilotage d’un VNM requiert le permis côtier.",
   "tags": [
    "loisirs",
    "papiers"
   ],
   "concept": "vnm-permis",
   "near": [
    "var_vnm-permis_1",
    "var_vnm-permis_2",
    "var_vnm-permis_4"
   ]
  },
  {
   "id": "gen_mod4_sec3_9",
   "sectionId": "mod4_sec3",
   "question": "Vous apercevez une baleine à bosse. À quelle vitesse maximale devez-vous naviguer dans un rayon de 300 m autour d’elle ?",
   "options": {
    "A": "3 nœuds",
    "B": "5 nœuds",
    "C": "8 nœuds",
    "D": "Pas de limite"
   },
   "correct": "A",
   "explanation": "Dans la zone de prudence de 300 m autour d’un cétacé, la vitesse est réduite à 3 nœuds, sans changement brusque de direction ni de régime.",
   "tags": [
    "environnement"
   ],
   "concept": "mammiferes-vitesse",
   "near": [
    "var_mammiferes-vitesse_1"
   ]
  },
  {
   "id": "gen_mod4_sec3_10",
   "sectionId": "mod4_sec3",
   "question": "Près d’une baleine et de son baleineau, quel comportement est interdit ?",
   "options": {
    "A": "Rester sur le côté de l’animal, à bonne distance",
    "B": "Se placer entre la mère et son petit",
    "C": "Réduire sa vitesse",
    "D": "Couper le moteur à distance"
   },
   "correct": "B",
   "explanation": "Ne jamais se placer entre une mère et son petit, ni encercler les baleines, ni les bloquer contre le récif, ni se placer devant ou derrière l’animal.",
   "tags": [
    "environnement"
   ],
   "concept": "mammiferes-mere-petit",
   "near": [
    "var_mammiferes-mere-petit_1"
   ]
  },
  {
   "id": "ext_sec_133",
   "sectionId": "mod4_sec4",
   "question": "Sur l’échelle de Beaufort, à quelle force correspond un « grand frais » ?",
   "options": {
    "A": "Force 5",
    "B": "Force 6",
    "C": "Force 7",
    "D": "Force 8"
   },
   "correct": "C",
   "explanation": "Force 7 = grand frais (28 à 33 nœuds). Force 6 = vent frais, force 8 = coup de vent.",
   "tags": [
    "meteo"
   ],
   "concept": "beaufort-f7",
   "near": [
    "var_beaufort-f7_1"
   ]
  },
  {
   "id": "ext_sec_134",
   "sectionId": "mod4_sec4",
   "question": "Quelle vitesse moyenne de vent correspond à un coup de vent (force 8) ?",
   "options": {
    "A": "22 à 27 nœuds",
    "B": "28 à 33 nœuds",
    "C": "34 à 40 nœuds",
    "D": "41 à 47 nœuds"
   },
   "correct": "C",
   "explanation": "Force 8, coup de vent : 34 à 40 nœuds. Formule rapide à partir de 8 : V ≈ 5 × B = 40 nœuds.",
   "tags": [
    "meteo"
   ],
   "concept": "beaufort-conversion"
  },
  {
   "id": "gen_mod4_sec4_1",
   "sectionId": "mod4_sec4",
   "question": "D’après la formule V = 5 × (B − 1), quelle est la vitesse approximative d’un vent de force 5 ?",
   "options": {
    "A": "15 nœuds",
    "B": "20 nœuds",
    "C": "25 nœuds",
    "D": "30 nœuds"
   },
   "correct": "B",
   "explanation": "En dessous de force 8 : V ≈ 5 × (B − 1) = 5 × 4 = 20 nœuds (force 5, bonne brise : 17 à 21 nœuds).",
   "tags": [
    "meteo"
   ],
   "concept": "beaufort-conversion",
   "near": [
    "gen_mod4_sec4_3"
   ]
  },
  {
   "id": "gen_mod4_sec4_2",
   "sectionId": "mod4_sec4",
   "question": "Un vent moyen de 30 nœuds correspond à quelle force Beaufort ?",
   "options": {
    "A": "Force 5",
    "B": "Force 6",
    "C": "Force 7",
    "D": "Force 8"
   },
   "correct": "C",
   "explanation": "B ≈ V / 5 + 1 = 30 / 5 + 1 = 7 : grand frais.",
   "tags": [
    "meteo"
   ],
   "concept": "beaufort-conversion",
   "near": [
    "var_beaufort-conversion_1",
    "var_beaufort-f7_1"
   ]
  },
  {
   "id": "gen_mod4_sec4_3",
   "sectionId": "mod4_sec4",
   "question": "Quelle est la vitesse approximative d’un vent de force 9 ?",
   "options": {
    "A": "35 nœuds",
    "B": "40 nœuds",
    "C": "45 nœuds",
    "D": "50 nœuds"
   },
   "correct": "C",
   "explanation": "À partir de force 8 : V ≈ 5 × B = 45 nœuds (force 9, fort coup de vent : 41 à 47 nœuds).",
   "tags": [
    "meteo"
   ],
   "concept": "beaufort-conversion",
   "near": [
    "gen_mod4_sec4_1"
   ]
  },
  {
   "id": "gen_mod4_sec4_4",
   "sectionId": "mod4_sec4",
   "question": "Quel terme désigne un vent de force 6 ?",
   "options": {
    "A": "Vent frais",
    "B": "Bonne brise",
    "C": "Jolie brise",
    "D": "Grand frais"
   },
   "correct": "A",
   "explanation": "Force 6 : vent frais (22 à 27 nœuds), lames et crêtes d’écume.",
   "tags": [
    "meteo"
   ],
   "concept": "beaufort-f6",
   "near": [
    "gen_mod4_sec4_6",
    "var_beaufort-f7_3"
   ]
  },
  {
   "id": "gen_mod4_sec4_5",
   "sectionId": "mod4_sec4",
   "question": "À partir de quelle force de vent les « moutons » (crêtes blanches) commencent-ils à apparaître ?",
   "options": {
    "A": "Force 1",
    "B": "Force 3",
    "C": "Force 6",
    "D": "Force 8"
   },
   "correct": "B",
   "explanation": "Force 3, petite brise (7 à 10 nœuds) : les moutons apparaissent. Force 4 : nombreux moutons.",
   "tags": [
    "meteo"
   ],
   "concept": "beaufort-moutons",
   "near": [
    "var_beaufort-moutons_1"
   ]
  },
  {
   "id": "gen_mod4_sec4_6",
   "sectionId": "mod4_sec4",
   "question": "Quel terme désigne un vent de force 12 ?",
   "options": {
    "A": "Tempête",
    "B": "Violente tempête",
    "C": "Fort coup de vent",
    "D": "Ouragan"
   },
   "correct": "D",
   "explanation": "Force 12 : ouragan, plus de 63 nœuds.",
   "tags": [
    "meteo"
   ],
   "concept": "beaufort-f12",
   "near": [
    "gen_mod4_sec4_4",
    "var_beaufort-f12_4",
    "var_beaufort-f7_3"
   ]
  },
  {
   "id": "gen_mod4_sec4_7",
   "sectionId": "mod4_sec4",
   "question": "Que définit la catégorie de conception d’un bateau ?",
   "options": {
    "A": "Sa vitesse maximale",
    "B": "Le nombre maximal de personnes et la charge qu’il peut embarquer",
    "C": "Le vent et la hauteur de vagues qu’il est conçu pour affronter",
    "D": "Le permis nécessaire"
   },
   "correct": "C",
   "explanation": "La catégorie de conception (A, B, C, D) indique le vent et l’état de mer que le bateau est conçu pour affronter.",
   "tags": [
    "meteo"
   ],
   "concept": "categorie-definition",
   "near": [
    "var_categorie-c_4"
   ]
  },
  {
   "id": "gen_mod4_sec4_8",
   "sectionId": "mod4_sec4",
   "question": "Un bateau de catégorie de conception C est prévu pour affronter au maximum :",
   "options": {
    "A": "Force 4 et vagues de 0,5 m",
    "B": "Force 6 et vagues de 2 m",
    "C": "Force 8 et vagues de 4 m",
    "D": "Plus de force 8 et vagues de plus de 4 m"
   },
   "correct": "B",
   "explanation": "Catégorie C : jusqu’à force 6 et 2 m de vagues. D : force 4 et 0,5 m ; B : force 8 et 4 m ; A : au-delà.",
   "tags": [
    "meteo"
   ],
   "concept": "categorie-c"
  },
  {
   "id": "gen_mod4_sec4_9",
   "sectionId": "mod4_sec4",
   "question": "Quelle catégorie de conception correspond à des conditions de plus de force 8 et des vagues de plus de 4 m ?",
   "options": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "A",
   "explanation": "La catégorie A est prévue pour un vent supérieur à force 8 et des vagues de plus de 4 m.",
   "tags": [
    "meteo"
   ],
   "concept": "categorie-a"
  },
  {
   "id": "gen_mod4_sec4_10",
   "sectionId": "mod4_sec4",
   "question": "Votre bateau est de catégorie de conception D. Le bulletin annonce un vent de force 5. Pouvez-vous sortir ?",
   "options": {
    "A": "Oui",
    "B": "Non",
    "C": "Oui, à moins de 2 milles d’un abri",
    "D": "Non, sauf de jour"
   },
   "correct": "B",
   "explanation": "La catégorie D ne convient qu’à un vent jusqu’à force 4 et des vagues jusqu’à 0,5 m.",
   "tags": [
    "meteo"
   ],
   "concept": "categorie-d",
   "near": [
    "var_categorie-c_1",
    "var_categorie-c_3"
   ]
  },
  {
   "id": "gen_bonus_sec1_1",
   "sectionId": "bonus_sec1",
   "question": "Comment se présente l’épreuve théorique du permis côtier en Polynésie française ?",
   "options": {
    "A": "40 questions en 30 minutes, 5 erreurs au maximum",
    "B": "20 questions en 15 minutes, 3 erreurs au maximum",
    "C": "30 questions en 20 minutes, 4 erreurs au maximum",
    "D": "20 questions en 30 minutes, aucune erreur admise"
   },
   "correct": "B",
   "explanation": "Le QCM comporte 20 questions à traiter en 15 minutes ; on a droit à 3 erreurs au maximum.",
   "tags": [
    "pratique"
   ],
   "concept": "examen-format"
  },
  {
   "id": "gen_bonus_sec1_2",
   "sectionId": "bonus_sec1",
   "question": "Vous avez réussi la théorie mais échoué à la pratique. Pendant combien de temps conservez-vous le bénéfice de la théorie ?",
   "options": {
    "A": "1 mois",
    "B": "2 mois",
    "C": "6 mois",
    "D": "1 an"
   },
   "correct": "C",
   "explanation": "En cas d’échec à la pratique, le bénéfice de l’épreuve théorique est conservé 6 mois.",
   "tags": [
    "pratique"
   ],
   "concept": "examen-benefice-theorie"
  },
  {
   "id": "gen_bonus_sec1_3",
   "sectionId": "bonus_sec1",
   "question": "Combien de temps est valable le permis provisoire remis après la réussite de l’épreuve pratique ?",
   "options": {
    "A": "15 jours",
    "B": "2 mois",
    "C": "6 mois",
    "D": "1 an"
   },
   "correct": "B",
   "explanation": "Le permis provisoire, délivré par l’examinateur, est valable 2 mois.",
   "tags": [
    "pratique",
    "papiers"
   ],
   "concept": "permis-provisoire"
  },
  {
   "id": "gen_bonus_sec1_4",
   "sectionId": "bonus_sec1",
   "question": "Lors de l’épreuve pratique, combien d’essais avez-vous par manœuvre ?",
   "options": {
    "A": "Un seul",
    "B": "Deux",
    "C": "Trois",
    "D": "Autant que nécessaire"
   },
   "correct": "B",
   "explanation": "On a droit à 2 essais par manœuvre ; l’épreuve dure environ 15 minutes.",
   "tags": [
    "pratique"
   ],
   "concept": "examen-essais",
   "near": [
    "var_examen-essais_2",
    "var_examen-essais_3"
   ]
  },
  {
   "id": "gen_bonus_sec1_5",
   "sectionId": "bonus_sec1",
   "question": "Quel est l’âge minimum pour obtenir le permis côtier ?",
   "options": {
    "A": "14 ans",
    "B": "16 ans",
    "C": "18 ans",
    "D": "21 ans"
   },
   "correct": "B",
   "explanation": "Le permis côtier peut être obtenu à partir de 16 ans.",
   "tags": [
    "pratique",
    "papiers"
   ],
   "concept": "permis-age",
   "near": [
    "var_permis-age_1",
    "var_permis-age_2",
    "var_permis-age_4"
   ]
  },
  {
   "id": "ext_man_151",
   "sectionId": "bonus_sec2",
   "question": "Homme à la mer : quel est le premier réflexe de barre ?",
   "options": {
    "A": "Virer du côté de la chute",
    "B": "Accélérer pour faire demi-tour",
    "C": "Virer du côté opposé, pour ne pas heurter la personne avec l’étrave",
    "D": "Couper le moteur sans regarder"
   },
   "correct": "A",
   "explanation": "On vire du côté de la chute : l’arrière et l’hélice s’écartent de la personne. Puis on prévient l’équipage en criant « un homme à la mer ».",
   "tags": [
    "pratique"
   ],
   "concept": "hom-premier-reflexe"
  },
  {
   "id": "ext_man_152",
   "sectionId": "bonus_sec2",
   "question": "Pour une prise de coffre (bouée d’amarrage), comment vous présentez-vous ?",
   "options": {
    "A": "Vent arrière",
    "B": "Moteur coupé à 100 m, en finissant sur l’erre",
    "C": "Vent de travers, à vitesse soutenue pour rester manœuvrant",
    "D": "Face au coffre et face au vent, à allure très réduite"
   },
   "correct": "D",
   "explanation": "On arrive face au vent et face au coffre, au pas ; à 3 m on passe au point mort puis en marche arrière douce pour s’arrêter à environ 1 m.",
   "tags": [
    "pratique"
   ],
   "concept": "prise-coffre"
  },
  {
   "id": "gen_bonus_sec2_1",
   "sectionId": "bonus_sec2",
   "question": "Pour l’accostage, quel angle conseille-t-on entre l’axe du bateau et le quai ?",
   "options": {
    "A": "Environ 10°",
    "B": "Environ 30°",
    "C": "Environ 60°",
    "D": "90°, perpendiculaire au quai"
   },
   "correct": "B",
   "explanation": "On se présente avec un angle d’environ 30° par rapport au quai, en petite marche avant.",
   "tags": [
    "pratique"
   ],
   "concept": "accostage-angle",
   "near": [
    "var_accostage-angle_2"
   ]
  },
  {
   "id": "gen_bonus_sec2_2",
   "sectionId": "bonus_sec2",
   "question": "Comment « casser l’erre » du bateau ?",
   "options": {
    "A": "Couper le moteur et laisser le bateau ralentir seul",
    "B": "Tourner le volant à fond",
    "C": "Marche arrière jusqu’à l’arrêt complet, puis point mort",
    "D": "Jeter l’ancre pour freiner le bateau, moteur toujours embrayé"
   },
   "correct": "C",
   "explanation": "On passe la marche arrière jusqu’à l’arrêt complet, puis au point mort ; on vérifie l’arrêt avec un repère fixe sur le côté.",
   "tags": [
    "pratique"
   ],
   "concept": "casser-erre",
   "near": [
    "var_casser-erre_3"
   ]
  },
  {
   "id": "gen_bonus_sec2_3",
   "sectionId": "bonus_sec2",
   "question": "Le moteur ne démarre pas. Que vérifiez-vous en premier ?",
   "options": {
    "A": "Le niveau d’huile de l’embase et l’état de l’anode de l’hélice",
    "B": "Le carburant, la batterie, le coupe-circuit et le point mort",
    "C": "La pression des pneus de la remorque",
    "D": "L’hélice"
   },
   "correct": "B",
   "explanation": "Un moteur qui ne démarre pas : vérifier l’essence, la batterie, le coupe-circuit et que la commande est bien au point mort.",
   "tags": [
    "pratique"
   ],
   "concept": "moteur-demarrage",
   "near": [
    "var_moteur-demarrage_1"
   ]
  },
  {
   "id": "gen_bonus_sec2_4",
   "sectionId": "bonus_sec2",
   "question": "Lors de l’appareillage le long d’un quai, comment décolle-t-on l’arrière du bateau ?",
   "options": {
    "A": "Volant vers le quai, en avançant au ralenti",
    "B": "En marche arrière, volant braqué vers le large, à vitesse soutenue",
    "C": "En poussant avec la gaffe uniquement",
    "D": "En accélérant fortement"
   },
   "correct": "A",
   "explanation": "Volant braqué vers le quai, on avance au ralenti 2 secondes : l’arrière se décolle, puis on passe au point mort et en marche arrière.",
   "tags": [
    "pratique"
   ],
   "concept": "appareillage-quai"
  },
  {
   "id": "gen_bonus_sec2_5",
   "sectionId": "bonus_sec2",
   "question": "Lors de la récupération d’un homme à la mer, quand passez-vous au point mort ?",
   "options": {
    "A": "Dès qu’on aperçoit la personne",
    "B": "Quand la personne est à l’arrière, près de l’hélice, pour la hisser par la plateforme",
    "C": "Jamais, on reste embrayé",
    "D": "Dès qu’elle a passé l’étrave"
   },
   "correct": "D",
   "explanation": "On revient doucement, route perpendiculaire au vent, en passant juste au vent de la personne ; une fois l’étrave passée, point mort puis marche arrière pour s’arrêter avec la personne au milieu du bateau.",
   "tags": [
    "pratique"
   ],
   "concept": "hom-point-mort"
  },
  {
   "id": "gen_bonus_sec3_1",
   "sectionId": "bonus_sec3",
   "question": "Comment termine-t-on un nœud de taquet ?",
   "options": {
    "A": "Par un nœud plat",
    "B": "Par un tour mort",
    "C": "Par une demi-clé retournée",
    "D": "Par un nœud de chaise"
   },
   "correct": "C",
   "explanation": "Nœud de taquet : un tour mort à la base, un ou deux huit sur les cornes, puis une demi-clé retournée qui bloque l’ensemble.",
   "tags": [
    "pratique"
   ],
   "concept": "noeud-taquet",
   "near": [
    "var_noeud-taquet_1"
   ]
  },
  {
   "id": "gen_bonus_sec3_2",
   "sectionId": "bonus_sec3",
   "question": "Quel nœud permet d’amarrer un bout sur une bitte d’amarrage, un mât ou une barre ?",
   "options": {
    "A": "Le nœud de taquet",
    "B": "Le nœud de cabestan",
    "C": "Le nœud de pêcheur",
    "D": "Le nœud de cravate"
   },
   "correct": "B",
   "explanation": "Le nœud de cabestan (deux tours croisés) se fait sur une bitte, un mât ou une barre.",
   "tags": [
    "pratique"
   ],
   "concept": "noeud-cabestan"
  },
  {
   "id": "var_pref-feu_1",
   "sectionId": "mod1_sec1",
   "question": "De nuit, en rentrant au port, vous apercevez droit devant ce feu rouge. Quelle marque le porte ?",
   "options": {
    "A": "Une marque latérale bâbord ordinaire",
    "B": "Une marque de chenal préféré à tribord",
    "C": "Une marque de danger isolé",
    "D": "Une marque spéciale"
   },
   "correct": "B",
   "explanation": "Le rythme 2+1 (deux éclats groupés suivis d’un éclat isolé) est réservé aux marques de chenal préféré. En rouge, c’est une marque bâbord modifiée : le chenal préféré est à tribord.",
   "figure": {
    "fig": "rhythm",
    "code": "Fl(2+1)",
    "color": "R"
   },
   "tags": [
    "balisage-lateral",
    "feux-balisage"
   ],
   "concept": "pref-feu"
  },
  {
   "id": "var_pref-feu_2",
   "sectionId": "mod1_sec1",
   "question": "Une marque latérale bâbord ordinaire (non modifiée) peut-elle montrer un feu rouge à éclats groupés 2+1 ?",
   "options": {
    "A": "Non, il est réservé au chenal préféré",
    "B": "Oui, une marque latérale peut avoir n’importe quel rythme",
    "C": "Non, il est réservé aux marques spéciales"
   },
   "correct": "A",
   "explanation": "Les marques latérales ont un feu de rythme quelconque, sauf le 2+1, réservé aux marques de chenal préféré : il permet de les reconnaître de nuit.",
   "tags": [
    "balisage-lateral",
    "feux-balisage"
   ],
   "concept": "pref-feu"
  },
  {
   "id": "var_pref-feu_3",
   "sectionId": "mod1_sec1",
   "question": "Quel feu porte une bouée verte à large bande horizontale rouge, surmontée d’un cône vert ?",
   "options": {
    "A": "Un feu rouge à 2+1 éclats",
    "B": "Un feu blanc à 2 éclats groupés",
    "C": "Un feu vert à 2+1 éclats",
    "D": "Un feu vert scintillant continu"
   },
   "correct": "C",
   "explanation": "C’est une marque de chenal préféré à bâbord (marque tribord modifiée). Son feu a la couleur dominante, verte, avec le rythme 2+1 propre au chenal préféré.",
   "tags": [
    "balisage-lateral",
    "feux-balisage"
   ],
   "concept": "pref-feu",
   "near": [
    "q_1_1_5"
   ]
  },
  {
   "id": "var_lat-babord-entrant_1",
   "sectionId": "mod1_sec1",
   "question": "Vous entrez dans le lagon par une passe, en venant de l’océan. De quel côté laissez-vous cette marque ?",
   "options": {
    "A": "Sur tribord (à droite)",
    "B": "Indifféremment d’un côté ou de l’autre",
    "C": "Sur bâbord (à gauche)"
   },
   "correct": "C",
   "explanation": "Marque rouge à voyant cylindrique : marque bâbord. En Polynésie (région AISM A), on la laisse sur bâbord, à gauche, en venant du large vers le lagon.",
   "figure": {
    "fig": "mark",
    "type": "lat-port"
   },
   "tags": [
    "balisage-lateral"
   ],
   "concept": "lat-babord-entrant"
  },
  {
   "id": "var_lat-identifier_1",
   "sectionId": "mod1_sec1",
   "question": "Quelle est cette marque ?",
   "options": {
    "A": "Une marque cardinale Nord",
    "B": "Une marque de chenal préféré à bâbord",
    "C": "Une marque spéciale",
    "D": "Une marque latérale tribord"
   },
   "correct": "D",
   "explanation": "Une marque verte surmontée d’un cône vert pointe en haut est une marque latérale tribord (région AISM A).",
   "figure": {
    "fig": "mark",
    "type": "lat-stbd"
   },
   "tags": [
    "balisage-lateral"
   ],
   "concept": "lat-identifier"
  },
  {
   "id": "var_lat-identifier_2",
   "sectionId": "mod1_sec1",
   "question": "À l’extrémité d’une jetée, le musoir porte un carré rouge peint. À quel type de marque correspond ce signe ?",
   "options": {
    "A": "À une marque latérale bâbord",
    "B": "À une marque latérale tribord",
    "C": "À une marque de danger isolé",
    "D": "À une marque spéciale"
   },
   "correct": "A",
   "explanation": "Sur un musoir ou une pile de pont, le carré rouge correspond à une marque bâbord (cylindre rouge) et le triangle vert à une marque tribord (cône vert).",
   "tags": [
    "balisage-lateral"
   ],
   "concept": "lat-identifier"
  },
  {
   "id": "var_lat-numerotation_1",
   "sectionId": "mod1_sec1",
   "question": "En remontant un chenal depuis le large, vous laissez sur tribord une bouée verte numérotée 7. Quel numéro portera la marque verte suivante ?",
   "options": {
    "A": "8",
    "B": "9",
    "C": "6",
    "D": "5"
   },
   "correct": "B",
   "explanation": "Les marques tribord portent des numéros impairs, croissants dans le sens conventionnel (du large vers le port) : après le 7 vient le 9.",
   "tags": [
    "balisage-lateral"
   ],
   "concept": "lat-numerotation"
  },
  {
   "id": "var_lat-numerotation_2",
   "sectionId": "mod1_sec1",
   "question": "En venant du large, vous apercevez une marque latérale portant le numéro 5. De quel côté la laissez-vous ?",
   "options": {
    "A": "Sur bâbord (à gauche)",
    "B": "Sur tribord (à droite)",
    "C": "On ne peut pas le savoir avec son numéro"
   },
   "correct": "B",
   "explanation": "Un numéro impair désigne une marque tribord (verte, conique) : en venant du large, on la laisse à droite. Les numéros pairs sont réservés aux marques bâbord.",
   "tags": [
    "balisage-lateral"
   ],
   "concept": "lat-numerotation"
  },
  {
   "id": "var_lat-numerotation_3",
   "sectionId": "mod1_sec1",
   "question": "Quels numéros portent les marques latérales tribord ?",
   "options": {
    "A": "Des numéros impairs (1, 3, 5…)",
    "B": "Aucun numéro",
    "C": "Des numéros pairs (2, 4, 6…)",
    "D": "Des lettres"
   },
   "correct": "A",
   "explanation": "Tribord = vert = cône = numéros impairs ; bâbord = rouge = cylindre = numéros pairs. Les numéros croissent du large vers le port.",
   "tags": [
    "balisage-lateral"
   ],
   "concept": "lat-numerotation",
   "near": [
    "ext_bal_110"
   ]
  },
  {
   "id": "var_lat-sens-conventionnel_1",
   "sectionId": "mod1_sec1",
   "question": "Dans une passe, vous franchissez une paire de balises latérales : la verte est à votre gauche, la rouge à votre droite. Qu’en déduisez-vous ?",
   "options": {
    "A": "J’entre dans le lagon en venant de l’océan",
    "B": "Je sors du lagon vers l’océan",
    "C": "Je suis dans un chenal préféré"
   },
   "correct": "B",
   "explanation": "En Polynésie (région AISM A), on entre par la passe depuis l’océan en laissant le rouge à gauche et le vert à droite. Vert à gauche et rouge à droite : on fait route dans l’autre sens, on sort vers l’océan.",
   "tags": [
    "balisage-lateral"
   ],
   "concept": "lat-sens-conventionnel"
  },
  {
   "id": "var_lat-sens-conventionnel_2",
   "sectionId": "mod1_sec1",
   "question": "Dans une rivière ou un bras de mer, dans quel sens se lit le balisage latéral ?",
   "options": {
    "A": "Dans le sens du courant",
    "B": "En descendant vers la mer",
    "C": "En remontant vers l’amont",
    "D": "Il ne s’applique pas dans une rivière"
   },
   "correct": "C",
   "explanation": "Le sens conventionnel va du large vers le port, ou de la mer vers l’amont quand on remonte un estuaire, une rivière ou un bras de mer.",
   "tags": [
    "balisage-lateral"
   ],
   "concept": "lat-sens-conventionnel"
  },
  {
   "id": "var_lat-tribord-sortant_1",
   "sectionId": "mod1_sec1",
   "question": "De nuit, en sortant du port, vous voyez droit devant un feu vert à éclats. Que faites-vous ?",
   "options": {
    "A": "Je viens à droite pour le laisser sur bâbord",
    "B": "Je viens à gauche pour le laisser sur tribord",
    "C": "Je passe indifféremment d’un côté ou de l’autre"
   },
   "correct": "A",
   "explanation": "Un feu vert est celui d’une marque tribord. En sortant, tout s’inverse : on laisse les marques vertes à gauche, donc on vient à droite.",
   "tags": [
    "balisage-lateral"
   ],
   "concept": "lat-tribord-sortant"
  },
  {
   "id": "var_lat-tribord-sortant_2",
   "sectionId": "mod1_sec1",
   "question": "Vous quittez le lagon par la passe pour rejoindre l’océan. Sur quel bord laissez-vous cette marque ?",
   "options": {
    "A": "Sur tribord (à droite)",
    "B": "Sur bâbord (à gauche)"
   },
   "correct": "B",
   "explanation": "Cône vert : marque tribord, laissée à droite en entrant. En sortant vers le large, on la laisse donc sur bâbord, à gauche.",
   "figure": {
    "fig": "mark",
    "type": "lat-stbd"
   },
   "tags": [
    "balisage-lateral"
   ],
   "concept": "lat-tribord-sortant"
  },
  {
   "id": "var_pref-identifier_1",
   "sectionId": "mod1_sec1",
   "question": "En venant du large, vous arrivez à une bifurcation où se trouve cette marque. Pour suivre le chenal principal, que faites-vous ?",
   "options": {
    "A": "Je la laisse sur tribord",
    "B": "Je la laisse sur bâbord",
    "C": "Je passe indifféremment d’un côté ou de l’autre",
    "D": "Je stoppe"
   },
   "correct": "A",
   "explanation": "Verte à large bande rouge, voyant conique : c’est une marque tribord modifiée, le chenal principal (préféré) est à bâbord. Pour le suivre, on la laisse sur tribord, comme une marque tribord ordinaire.",
   "figure": {
    "fig": "mark",
    "type": "pref-port"
   },
   "tags": [
    "balisage-lateral"
   ],
   "concept": "pref-identifier",
   "near": [
    "q_1_1_5"
   ]
  },
  {
   "id": "var_pref-identifier_2",
   "sectionId": "mod1_sec1",
   "question": "À une bifurcation, quelle marque indique que le chenal principal est à tribord ?",
   "options": {
    "A": "Une marque verte à large bande horizontale rouge, voyant conique vert",
    "B": "Une marque noire à bandes rouges horizontales, deux boules noires",
    "C": "Une marque rouge à large bande horizontale verte, voyant cylindrique rouge",
    "D": "Une marque à rayures verticales rouges et blanches"
   },
   "correct": "C",
   "explanation": "Le chenal préféré à tribord est indiqué par une marque bâbord modifiée : rouge dominant, bande verte, voyant cylindrique rouge, feu rouge Fl(2+1). On la laisse sur bâbord.",
   "tags": [
    "balisage-lateral"
   ],
   "concept": "pref-identifier"
  },
  {
   "id": "var_balisage-generalites_1",
   "sectionId": "mod1_sec1",
   "question": "De nuit, comment identifie-t-on une marque de balisage ?",
   "options": {
    "A": "Par la couleur et le rythme de son feu",
    "B": "Par son numéro, éclairé par un projecteur",
    "C": "Par la forme de la bouée",
    "D": "Par la forme et la couleur de son voyant"
   },
   "correct": "A",
   "explanation": "De jour, on identifie une marque par son voyant et sa couleur ; de nuit, par la couleur et le rythme de son feu.",
   "tags": [
    "balisage-lateral"
   ],
   "concept": "balisage-generalites",
   "near": [
    "gen_mod1_sec1_4"
   ]
  },
  {
   "id": "var_balisage-generalites_2",
   "sectionId": "mod1_sec1",
   "question": "À contre-jour, les couleurs d’une marque sont difficiles à distinguer. Quel élément permet encore de l’identifier ?",
   "options": {
    "A": "Son voyant",
    "B": "Sa couleur",
    "C": "Son numéro",
    "D": "Sa hauteur au-dessus de l’eau"
   },
   "correct": "A",
   "explanation": "Le voyant (cylindre, cône, boules, croix, cônes superposés) se lit en silhouette : il reste lisible quand les couleurs ne le sont plus.",
   "tags": [
    "balisage-lateral"
   ],
   "concept": "balisage-generalites"
  },
  {
   "id": "var_balisage-generalites_3",
   "sectionId": "mod1_sec1",
   "question": "Une tourelle maçonnée, une bouée charpente et un espar peuvent avoir la même signification. Qu’est-ce qui la détermine ?",
   "options": {
    "A": "Le type de support",
    "B": "La taille de la marque",
    "C": "Le matériau de construction",
    "D": "La couleur, le voyant et le feu"
   },
   "correct": "D",
   "explanation": "Une même marque peut prendre plusieurs formes de support. Ce qui compte, c’est sa couleur, son voyant et son feu.",
   "tags": [
    "balisage-lateral"
   ],
   "concept": "balisage-generalites"
  },
  {
   "id": "var_eaux-saines-identifier_1",
   "sectionId": "mod1_sec2",
   "question": "Comment se présente une marque d’eaux saines ?",
   "options": {
    "A": "Jaune, voyant une croix jaune en X",
    "B": "Rouge avec une large bande horizontale verte",
    "C": "Noire avec de larges bandes rouges horizontales, voyant deux boules noires",
    "D": "Rayures verticales rouges et blanches, voyant une boule rouge"
   },
   "correct": "D",
   "explanation": "La marque d’eaux saines a des rayures verticales rouges et blanches et un voyant boule rouge. Elle indique qu’il n’y a aucun danger autour (milieu de chenal, atterrissage).",
   "tags": [
    "marques-speciales"
   ],
   "concept": "eaux-saines-identifier"
  },
  {
   "id": "var_danger-isole-identifier_1",
   "sectionId": "mod1_sec2",
   "question": "Quelle est cette marque ?",
   "options": {
    "A": "Une marque d’eaux saines",
    "B": "Une cardinale Sud",
    "C": "Une bouée de danger nouveau",
    "D": "Une marque de danger isolé"
   },
   "correct": "D",
   "explanation": "Noire à bande rouge horizontale, surmontée de deux boules noires : c’est une marque de danger isolé (obstacle peu étendu sous la marque).",
   "figure": {
    "fig": "mark",
    "type": "isolated"
   },
   "tags": [
    "marques-speciales"
   ],
   "concept": "danger-isole-identifier"
  },
  {
   "id": "var_danger-isole-identifier_2",
   "sectionId": "mod1_sec2",
   "question": "Dans le lagon, vous apercevez un espar noir à large bande rouge horizontale. Que signale-t-il ?",
   "options": {
    "A": "Le milieu d’un chenal, avec des eaux saines tout autour de la marque",
    "B": "Le bord bâbord d’un chenal, à laisser sur bâbord en venant du large",
    "C": "Un obstacle peu étendu sous la marque",
    "D": "Une zone de baignade"
   },
   "correct": "C",
   "explanation": "Noir à bande(s) rouge(s) : marque de danger isolé. Elle est posée sur un obstacle peu étendu (patate, roche) entouré d’eaux navigables.",
   "tags": [
    "marques-speciales"
   ],
   "concept": "danger-isole-identifier"
  },
  {
   "id": "var_danger-isole-passage_1",
   "sectionId": "mod1_sec2",
   "question": "Un espar noir à bande rouge, surmonté de deux boules noires, est planté sur votre route dans le lagon. Comment le passez-vous ?",
   "options": {
    "A": "D’un côté ou de l’autre, en s’en écartant",
    "B": "Au ras de l’espar, l’eau y est la plus profonde",
    "C": "Il est interdit de le dépasser",
    "D": "Obligatoirement en le laissant sur bâbord"
   },
   "correct": "A",
   "explanation": "Le danger isolé est sous la marque ou tout près, entouré d’eaux navigables : on passe de n’importe quel côté, mais en s’en écartant largement.",
   "tags": [
    "marques-speciales"
   ],
   "concept": "danger-isole-passage"
  },
  {
   "id": "var_danger-isole-passage_2",
   "sectionId": "mod1_sec2",
   "question": "Faisant route au nord, vous apercevez cette marque droit devant vous. Que faites-vous ?",
   "options": {
    "A": "Je garde mon cap : elle indique le milieu du chenal, eaux saines autour",
    "B": "Je viens obligatoirement à droite pour la laisser sur bâbord",
    "C": "Je viens obligatoirement à gauche",
    "D": "Je viens à droite ou à gauche, au choix, en m’écartant largement"
   },
   "correct": "D",
   "explanation": "Marque de danger isolé : le cap n’a pas d’importance. On la contourne d’un côté ou de l’autre en gardant du large, car l’obstacle est juste sous la marque.",
   "figure": {
    "fig": "mark",
    "type": "isolated"
   },
   "tags": [
    "marques-speciales"
   ],
   "concept": "danger-isole-passage"
  },
  {
   "id": "var_danger-isole-passage_3",
   "sectionId": "mod1_sec2",
   "question": "Pourquoi peut-on contourner une marque de danger isolé par n’importe quel côté ?",
   "options": {
    "A": "Parce qu’elle signale l’absence de tout danger, comme une marque d’eaux saines",
    "B": "Parce que l’obstacle est juste sous la marque",
    "C": "Parce qu’elle est réservée aux voiliers",
    "D": "Parce qu’elle marque le milieu d’un chenal, navigable de chaque côté de la bouée"
   },
   "correct": "B",
   "explanation": "Le danger isolé est un obstacle de faible étendue situé sous la marque ou tout près : l’eau est navigable tout autour, à condition de s’en écarter.",
   "tags": [
    "marques-speciales"
   ],
   "concept": "danger-isole-passage"
  },
  {
   "id": "var_speciale-identifier_1",
   "sectionId": "mod1_sec2",
   "question": "Dans le lagon, vous apercevez cette marque. Que peut-elle signaler ?",
   "options": {
    "A": "L’entrée d’une passe, à emprunter en la laissant sur tribord",
    "B": "Un obstacle isolé sous la marque, à contourner largement",
    "C": "Des eaux saines tout autour",
    "D": "Une zone d’aquaculture"
   },
   "correct": "D",
   "explanation": "Marque jaune à croix en X : marque spéciale. Elle ne guide pas la navigation mais signale une zone ou une installation particulière (aquaculture, câble, zone d’exercices…).",
   "figure": {
    "fig": "mark",
    "type": "special"
   },
   "tags": [
    "marques-speciales"
   ],
   "concept": "speciale-identifier"
  },
  {
   "id": "var_speciale-identifier_2",
   "sectionId": "mod1_sec2",
   "question": "Vous rencontrez une marque spéciale jaune dont vous ignorez la signification. Que faites-vous ?",
   "options": {
    "A": "Je consulte la carte ou les documents nautiques",
    "B": "Je m’y amarre en attendant des informations",
    "C": "Je l’ignore : elle ne concerne que les navires de commerce et les hydravions",
    "D": "Je la laisse obligatoirement sur tribord, comme une marque latérale verte"
   },
   "correct": "A",
   "explanation": "La signification d’une marque spéciale est portée sur les cartes et documents nautiques : il faut se renseigner et, le plus souvent, éviter la zone qu’elle signale.",
   "tags": [
    "marques-speciales"
   ],
   "concept": "speciale-identifier"
  },
  {
   "id": "var_speciale-feu_1",
   "sectionId": "mod1_sec2",
   "question": "De nuit, vous apercevez ce feu jaune. Quel type de marque le porte ?",
   "options": {
    "A": "Une cardinale Est",
    "B": "Une marque de danger isolé",
    "C": "Une marque spéciale",
    "D": "Une marque latérale tribord"
   },
   "correct": "C",
   "explanation": "Parmi les marques de balisage, le feu jaune est celui des marques spéciales, avec un rythme différent de ceux des marques à feu blanc (par exemple 3 éclats groupés).",
   "figure": {
    "fig": "rhythm",
    "code": "Fl(3)",
    "color": "Y"
   },
   "tags": [
    "marques-speciales",
    "feux-balisage"
   ],
   "concept": "speciale-feu"
  },
  {
   "id": "var_speciale-feu_2",
   "sectionId": "mod1_sec2",
   "question": "Quel feu peut équiper une marque jaune surmontée d’une croix en X ?",
   "options": {
    "A": "Un feu blanc à 3 scintillements",
    "B": "Un feu rouge à 2+1 éclats",
    "C": "Un feu blanc à 2 éclats groupés",
    "D": "Un feu jaune à éclats"
   },
   "correct": "D",
   "explanation": "Marque jaune à croix en X = marque spéciale : son feu est jaune, avec un rythme différent de ceux des marques à feu blanc.",
   "tags": [
    "marques-speciales",
    "feux-balisage"
   ],
   "concept": "speciale-feu"
  },
  {
   "id": "var_speciale-feu_3",
   "sectionId": "mod1_sec2",
   "question": "De nuit, qu’est-ce qui distingue le feu d’une marque spéciale de celui d’une cardinale ou d’un danger isolé ?",
   "options": {
    "A": "Sa couleur jaune",
    "B": "Sa portée plus grande",
    "C": "Il est toujours fixe",
    "D": "Il est toujours vert"
   },
   "correct": "A",
   "explanation": "Le feu d’une marque spéciale est jaune ; cardinales, danger isolé et eaux saines ont un feu blanc, les marques latérales un feu rouge ou vert.",
   "tags": [
    "marques-speciales",
    "feux-balisage"
   ],
   "concept": "speciale-feu"
  },
  {
   "id": "var_danger-isole-feu_1",
   "sectionId": "mod1_sec2",
   "question": "Faisant route au sud, de nuit, vous apercevez ce feu blanc droit devant. Que faites-vous ?",
   "options": {
    "A": "Je viens obligatoirement à gauche pour laisser la marque sur tribord",
    "B": "Je garde mon cap : un feu blanc signale des eaux saines",
    "C": "Je viens obligatoirement à droite",
    "D": "Je passe d’un côté ou de l’autre en m’écartant largement"
   },
   "correct": "D",
   "explanation": "Un feu blanc à 2 éclats groupés est celui d’une marque de danger isolé : on passe indifféremment d’un côté ou de l’autre, en s’écartant largement.",
   "figure": {
    "fig": "rhythm",
    "code": "Fl(2)",
    "color": "W"
   },
   "tags": [
    "marques-speciales",
    "feux-balisage"
   ],
   "concept": "danger-isole-feu"
  },
  {
   "id": "var_danger-isole-feu_2",
   "sectionId": "mod1_sec2",
   "question": "Quel est le feu d’une marque de danger isolé ?",
   "options": {
    "A": "Blanc isophase",
    "B": "Jaune à 3 éclats groupés, Fl(3)",
    "C": "Rouge à 2+1 éclats, Fl(2+1)",
    "D": "Blanc à 2 éclats groupés, Fl(2)"
   },
   "correct": "D",
   "explanation": "Danger isolé : 2 boules, 2 éclats. Son feu est blanc à 2 éclats groupés.",
   "tags": [
    "marques-speciales",
    "feux-balisage"
   ],
   "concept": "danger-isole-feu"
  },
  {
   "id": "var_eaux-saines-feu_1",
   "sectionId": "mod1_sec2",
   "question": "De nuit, vous apercevez ce feu blanc. Quelle marque le porte ?",
   "options": {
    "A": "Une cardinale Sud",
    "B": "Une marque d’eaux saines",
    "C": "Une marque de danger isolé",
    "D": "Une marque spéciale"
   },
   "correct": "B",
   "explanation": "Le Morse A (un éclat court, un éclat long) blanc est l’un des feux possibles d’une marque d’eaux saines, avec l’isophase, les occultations et l’éclat long.",
   "figure": {
    "fig": "rhythm",
    "code": "Mo(A)",
    "color": "W"
   },
   "tags": [
    "marques-speciales",
    "feux-balisage"
   ],
   "concept": "eaux-saines-feu"
  },
  {
   "id": "var_eaux-saines-feu_2",
   "sectionId": "mod1_sec2",
   "question": "Ce feu blanc à occultations peut équiper :",
   "options": {
    "A": "Une cardinale Nord",
    "B": "Une marque de danger isolé",
    "C": "Une marque d’eaux saines",
    "D": "Une marque latérale bâbord"
   },
   "correct": "C",
   "explanation": "Les marques d’eaux saines ont un feu blanc isophase, à occultations, à éclat long ou Morse A. Les cardinales sont scintillantes, le danger isolé à 2 éclats, les latérales rouges ou vertes.",
   "figure": {
    "fig": "rhythm",
    "code": "Oc",
    "color": "W"
   },
   "tags": [
    "marques-speciales",
    "feux-balisage"
   ],
   "concept": "eaux-saines-feu",
   "near": [
    "ext_spec_7"
   ]
  },
  {
   "id": "var_eaux-saines-feu_3",
   "sectionId": "mod1_sec2",
   "question": "De nuit, vous apercevez un feu blanc qui montre un seul éclat long toutes les 10 secondes. De quelle marque s’agit-il ?",
   "options": {
    "A": "D’une marque de danger isolé",
    "B": "D’une cardinale Sud",
    "C": "D’une marque spéciale",
    "D": "D’une marque d’eaux saines"
   },
   "correct": "D",
   "explanation": "Un éclat long blanc toutes les 10 s est un feu d’eaux saines. La cardinale Sud montre aussi un éclat long, mais précédé de 6 scintillements.",
   "tags": [
    "marques-speciales",
    "feux-balisage"
   ],
   "concept": "eaux-saines-feu"
  },
  {
   "id": "var_danger-nouveau-bouee-bleue-jaune_1",
   "sectionId": "mod1_sec2",
   "question": "Que signale cette bouée ?",
   "options": {
    "A": "Une zone de plongée, à contourner à plus de 100 m",
    "B": "Une zone de baignade délimitée par la commune, interdite à tout engin à moteur",
    "C": "Une épave récente, non encore portée sur les cartes",
    "D": "Des eaux saines, navigables tout autour de la bouée"
   },
   "correct": "C",
   "explanation": "Bandes verticales bleues et jaunes, voyant croix jaune droite : bouée d’épave d’urgence, mouillée sur une épave récemment découverte en attendant un balisage durable.",
   "figure": {
    "fig": "mark",
    "type": "newdanger"
   },
   "tags": [
    "marques-speciales"
   ],
   "concept": "danger-nouveau-bouee-bleue-jaune"
  },
  {
   "id": "var_danger-nouveau-bouee-bleue-jaune_2",
   "sectionId": "mod1_sec2",
   "question": "Quel feu porte une bouée d’épave d’urgence à bandes verticales bleues et jaunes ?",
   "options": {
    "A": "Un feu blanc à 2 éclats groupés",
    "B": "Un feu alternant bleu et jaune",
    "C": "Un feu rouge fixe",
    "D": "Un feu vert scintillant"
   },
   "correct": "B",
   "explanation": "La bouée d’épave d’urgence montre un feu alternant bleu et jaune, couleurs de la bouée elle-même.",
   "tags": [
    "marques-speciales"
   ],
   "concept": "danger-nouveau-bouee-bleue-jaune"
  },
  {
   "id": "var_danger-nouveau-bouee-bleue-jaune_3",
   "sectionId": "mod1_sec2",
   "question": "Jusqu’à quand reste en place une bouée d’épave d’urgence à bandes bleues et jaunes ?",
   "options": {
    "A": "24 heures au maximum, le temps de prévenir les navigateurs",
    "B": "Jusqu’au coucher du soleil, car elle ne porte pas de feu",
    "C": "Définitivement, comme toute marque de balisage",
    "D": "Jusqu’à ce que l’épave soit publiée et balisée durablement"
   },
   "correct": "D",
   "explanation": "Elle est mouillée en urgence sur une épave récente et reste en place jusqu’à ce que celle-ci soit publiée dans les documents nautiques et balisée durablement.",
   "tags": [
    "marques-speciales"
   ],
   "concept": "danger-nouveau-bouee-bleue-jaune"
  },
  {
   "id": "var_danger-nouveau-bouee-bleue-jaune_4",
   "sectionId": "mod1_sec2",
   "question": "Quel voyant surmonte une bouée d’épave d’urgence ?",
   "options": {
    "A": "Une croix jaune droite",
    "B": "Une croix jaune en forme de X",
    "C": "Deux boules noires",
    "D": "Un cône vert pointe en haut"
   },
   "correct": "A",
   "explanation": "La bouée d’épave d’urgence porte une croix jaune droite (+). La croix jaune en X est celle des marques spéciales.",
   "tags": [
    "marques-speciales"
   ],
   "concept": "danger-nouveau-bouee-bleue-jaune"
  },
  {
   "id": "var_plage-baignade_1",
   "sectionId": "mod1_sec2",
   "question": "Le long d’une plage, une zone est entourée d’un cordon de petites bouées sphériques jaunes. Pouvez-vous y entrer avec votre bateau à moteur ?",
   "options": {
    "A": "Non, elle est réservée à la baignade",
    "B": "Oui, si personne ne s’y baigne",
    "C": "Oui, à 5 nœuds au plus",
    "D": "Non, sauf pour y mouiller"
   },
   "correct": "A",
   "explanation": "Un collier de petites sphères jaunes délimite une zone réservée à la baignade : elle est interdite à tout engin, quelle que soit la vitesse, même pour y mouiller.",
   "tags": [
    "plages"
   ],
   "concept": "plage-baignade",
   "near": [
    "q_mardi_4"
   ]
  },
  {
   "id": "var_plage-chenal-traversier_1",
   "sectionId": "mod1_sec2",
   "question": "Vous quittez la plage vers le large en empruntant un chenal traversier. De quel côté se trouvent les bouées jaunes coniques ?",
   "options": {
    "A": "À votre droite",
    "B": "À votre gauche",
    "C": "Des deux côtés du chenal"
   },
   "correct": "B",
   "explanation": "En venant du large, les cônes jaunes sont à tribord et les cylindres à bâbord. En sortant vers le large, on a donc les cônes à gauche et les cylindres à droite.",
   "tags": [
    "plages"
   ],
   "concept": "plage-chenal-traversier"
  },
  {
   "id": "var_plage-limite-300m_1",
   "sectionId": "mod1_sec2",
   "question": "En vous rapprochant de la côte, vous franchissez une ligne de grosses bouées sphériques jaunes espacées d’environ 200 m. Quelle règle s’applique désormais ?",
   "options": {
    "A": "Aucune règle particulière",
    "B": "Vitesse limitée à 5 nœuds",
    "C": "Navigation interdite à tout navire",
    "D": "Vitesse limitée à 10 nœuds"
   },
   "correct": "B",
   "explanation": "Ces grosses sphères jaunes marquent la limite de la bande des 300 m. À l’intérieur, la vitesse est limitée à 5 nœuds.",
   "tags": [
    "plages",
    "vitesse-zones"
   ],
   "concept": "plage-limite-300m",
   "near": [
    "var_plage-limite-300m_3"
   ]
  },
  {
   "id": "var_plage-limite-300m_2",
   "sectionId": "mod1_sec2",
   "question": "Comment est matérialisée la limite de la bande littorale des 300 m ?",
   "options": {
    "A": "Par de grosses sphères jaunes espacées d’environ 200 m",
    "B": "Par des bouées rouges et vertes",
    "C": "Par un collier de petites sphères jaunes",
    "D": "Par des bouées jaunes cylindriques et coniques alternées"
   },
   "correct": "A",
   "explanation": "La limite de la bande des 300 m est marquée par de grosses sphères jaunes (environ 1 m de diamètre) espacées d’environ 200 m.",
   "tags": [
    "plages"
   ],
   "concept": "plage-limite-300m"
  },
  {
   "id": "var_plage-limite-300m_3",
   "sectionId": "mod1_sec2",
   "question": "Une ligne de grosses bouées sphériques jaunes espacées d’environ 200 m longe la côte. À quelle distance du rivage se trouve-t-elle environ ?",
   "options": {
    "A": "300 m",
    "B": "100 m",
    "C": "1 mille",
    "D": "2 milles"
   },
   "correct": "A",
   "explanation": "Ces bouées marquent la limite de la bande littorale des 300 m, à l’intérieur de laquelle la vitesse est limitée à 5 nœuds.",
   "tags": [
    "plages"
   ],
   "concept": "plage-limite-300m",
   "near": [
    "ext_bal_102",
    "var_plage-limite-300m_1"
   ]
  },
  {
   "id": "var_plage-zone-interdite-moteur_1",
   "sectionId": "mod1_sec2",
   "question": "Le long d’une plage, de grosses bouées sphériques jaunes sont mouillées très près les unes des autres. Qu’indiquent-elles ?",
   "options": {
    "A": "Un parcours de régate",
    "B": "La limite de la bande littorale des 300 m",
    "C": "Un chenal traversier",
    "D": "Une zone interdite aux navires à moteur"
   },
   "correct": "D",
   "explanation": "Grosses sphères jaunes rapprochées : zone interdite aux navires à moteur. Espacées d’environ 200 m, les mêmes sphères marquent la limite des 300 m.",
   "tags": [
    "plages"
   ],
   "concept": "plage-zone-interdite-moteur",
   "near": [
    "gen_mod1_sec2_1"
   ]
  },
  {
   "id": "var_plage-zone-interdite-moteur_2",
   "sectionId": "mod1_sec2",
   "question": "Vous pilotez une moto de mer près d’une plage. Une zone est délimitée par de grosses bouées sphériques jaunes rapprochées. Que faites-vous ?",
   "options": {
    "A": "J’y entre à 5 nœuds au plus",
    "B": "J’y entre si personne ne s’y baigne",
    "C": "Je n’y entre que de jour",
    "D": "Je n’y entre pas"
   },
   "correct": "D",
   "explanation": "Une moto de mer est un navire à moteur. Les grosses sphères jaunes rapprochées délimitent une zone où les navires à moteur ne doivent pas pénétrer.",
   "tags": [
    "plages"
   ],
   "concept": "plage-zone-interdite-moteur",
   "near": [
    "gen_mod1_sec2_1",
    "var_plage-zone-interdite-moteur_4"
   ]
  },
  {
   "id": "var_plage-zone-interdite-moteur_3",
   "sectionId": "mod1_sec2",
   "question": "La limite des 300 m et une zone interdite aux navires à moteur sont toutes deux balisées par de grosses sphères jaunes. Comment les distinguer ?",
   "options": {
    "A": "Par leur taille",
    "B": "Par leur espacement",
    "C": "Par leur voyant",
    "D": "On ne peut pas les distinguer"
   },
   "correct": "B",
   "explanation": "Les bouées sont identiques ; seul leur espacement diffère. Espacées d’environ 200 m : limite des 300 m. Rapprochées : zone interdite aux navires à moteur.",
   "tags": [
    "plages"
   ],
   "concept": "plage-zone-interdite-moteur"
  },
  {
   "id": "var_plage-zone-interdite-moteur_4",
   "sectionId": "mod1_sec2",
   "question": "Dans une zone délimitée par de grosses bouées sphériques jaunes rapprochées, quels engins sont interdits ?",
   "options": {
    "A": "Les navires à moteur",
    "B": "Les nageurs",
    "C": "Les kayaks",
    "D": "Les planches à voile"
   },
   "correct": "A",
   "explanation": "Les grosses sphères jaunes rapprochées délimitent une zone interdite aux navires à moteur (bateaux, motos de mer).",
   "tags": [
    "plages"
   ],
   "concept": "plage-zone-interdite-moteur",
   "near": [
    "gen_mod1_sec2_1",
    "var_plage-zone-interdite-moteur_2"
   ]
  },
  {
   "id": "var_plage-balisage-local_1",
   "sectionId": "mod1_sec2",
   "question": "De quoi relève le balisage des plages et de la bande des 300 m ?",
   "options": {
    "A": "Du JRCC Tahiti",
    "B": "Du système de balisage AISM",
    "C": "Du RIPAM",
    "D": "D’arrêtés locaux"
   },
   "correct": "D",
   "explanation": "Le balisage des plages ne relève pas de l’AISM : il est fixé par des arrêtés locaux, pour la sécurité des baigneurs et des usagers.",
   "tags": [
    "plages"
   ],
   "concept": "plage-balisage-local"
  },
  {
   "id": "var_plage-balisage-local_2",
   "sectionId": "mod1_sec2",
   "question": "Le balisage des plages étant local, comment connaître les règles d’une plage du lagon où vous n’êtes jamais allé ?",
   "options": {
    "A": "En appliquant les règles des cardinales",
    "B": "En me renseignant sur place",
    "C": "En appelant le JRCC sur le canal 16",
    "D": "Ce n’est pas nécessaire"
   },
   "correct": "B",
   "explanation": "Les zones de baignade, de mouillage et d’activités sont fixées localement : on se renseigne auprès de la capitainerie ou de la commune et on lit les pictogrammes de la plage.",
   "tags": [
    "plages"
   ],
   "concept": "plage-balisage-local"
  },
  {
   "id": "var_plage-balisage-local_3",
   "sectionId": "mod1_sec2",
   "question": "Pourquoi les règles de balisage d’une plage peuvent-elles différer d’une commune à l’autre ?",
   "options": {
    "A": "Parce qu’elles relèvent du RIPAM, adapté par chaque commune",
    "B": "Parce que chaque commune choisit sa région AISM, A ou B",
    "C": "Parce qu’elles sont fixées par arrêtés locaux",
    "D": "Parce que le JRCC Tahiti les fixe chaque saison selon la météo"
   },
   "correct": "C",
   "explanation": "Le balisage des plages ne relève pas de l’AISM : zones de baignade, chenaux traversiers et pictogrammes sont fixés par des arrêtés locaux. Renseignez-vous auprès de la capitainerie ou de la commune.",
   "tags": [
    "plages"
   ],
   "concept": "plage-balisage-local"
  },
  {
   "id": "var_plage-balisage-local_4",
   "sectionId": "mod1_sec2",
   "question": "À qui le balisage des plages (bouées jaunes, pictogrammes) est-il d’abord destiné ?",
   "options": {
    "A": "À la sécurité des baigneurs et des usagers du rivage",
    "B": "Aux navires de commerce qui accostent près des plages",
    "C": "Aux hydravions",
    "D": "Aux navires de pêche au large, pour éviter le rivage"
   },
   "correct": "A",
   "explanation": "Le balisage des plages, local et hors système AISM, organise les abords du rivage pour la sécurité des baigneurs et des usagers.",
   "tags": [
    "plages"
   ],
   "concept": "plage-balisage-local"
  },
  {
   "id": "var_card-nord-passage_1",
   "sectionId": "mod1_sec3",
   "question": "Vous faites route au sud et apercevez cette marque droit devant vous. Que faites-vous ?",
   "options": {
    "A": "Je ne la dépasse pas",
    "B": "Je la laisse sur tribord",
    "C": "Je la double au plus près et poursuis au sud"
   },
   "correct": "A",
   "explanation": "Cardinale Nord : on passe au nord, le danger est au sud. En faisant route au sud, je suis déjà du bon côté ; poursuivre au-delà de la marque me mènerait sur le danger. Je ne la dépasse pas et je contourne largement le danger.",
   "figure": {
    "fig": "mark",
    "type": "card-n"
   },
   "tags": [
    "cardinales"
   ],
   "concept": "card-nord-passage"
  },
  {
   "id": "var_card-couleurs-manoeuvre_1",
   "sectionId": "mod1_sec3",
   "question": "Cap au nord, vous apercevez droit devant une bouée dont le voyant a disparu : elle est jaune en haut et noire en bas. Que faites-vous ?",
   "options": {
    "A": "Je la laisse sur bâbord",
    "B": "Je ne la dépasse pas",
    "C": "Je passe d’un côté ou de l’autre"
   },
   "correct": "B",
   "explanation": "Jaune en haut, noir en bas : cardinale Sud, à passer au sud. Le danger est au nord de la marque : en route au nord, il ne faut pas la dépasser. Je contourne largement le danger.",
   "tags": [
    "cardinales"
   ],
   "concept": "card-couleurs-manoeuvre",
   "near": [
    "c3_cardinales_11",
    "q_mardi_10"
   ]
  },
  {
   "id": "var_card-couleurs-manoeuvre_2",
   "sectionId": "mod1_sec3",
   "question": "Cap au nord, vous apercevez droit devant une bouée sans voyant, noire aux deux extrémités avec une bande jaune au milieu. Que faites-vous ?",
   "options": {
    "A": "Je viens à droite",
    "B": "Je viens à gauche",
    "C": "Je passe indifféremment à droite ou à gauche"
   },
   "correct": "A",
   "explanation": "Noir aux extrémités : cardinale Est, à passer à l’est. Cap au nord, l’est est à droite : je viens à droite.",
   "tags": [
    "cardinales"
   ],
   "concept": "card-couleurs-manoeuvre",
   "near": [
    "var_card-couleurs-manoeuvre_3"
   ]
  },
  {
   "id": "var_card-couleurs-manoeuvre_3",
   "sectionId": "mod1_sec3",
   "question": "Cap au nord, vous apercevez droit devant une bouée sans voyant, jaune aux extrémités et noire au milieu. Que faites-vous ?",
   "options": {
    "A": "Je viens à droite, en la laissant sur bâbord",
    "B": "Je viens à gauche, en la laissant sur tribord",
    "C": "Je passe indifféremment d’un côté ou de l’autre"
   },
   "correct": "B",
   "explanation": "Noir au milieu : cardinale Ouest, à passer à l’ouest. Cap au nord, l’ouest est à gauche : je viens à gauche et la marque reste sur tribord.",
   "tags": [
    "cardinales"
   ],
   "concept": "card-couleurs-manoeuvre",
   "near": [
    "var_card-couleurs-manoeuvre_2"
   ]
  },
  {
   "id": "var_card-danger-position_1",
   "sectionId": "mod1_sec3",
   "question": "Où se trouve le danger signalé par cette marque ?",
   "options": {
    "A": "À l’ouest de la marque",
    "B": "Juste sous la marque",
    "C": "À l’est de la marque",
    "D": "Au nord de la marque"
   },
   "correct": "A",
   "explanation": "Cônes opposés par la base : cardinale Est. On passe à l’est ; le danger est du côté opposé au nom, à l’ouest.",
   "figure": {
    "fig": "mark",
    "type": "card-e"
   },
   "tags": [
    "cardinales"
   ],
   "concept": "card-danger-position",
   "near": [
    "c3_cardinales_12"
   ]
  },
  {
   "id": "var_card-danger-position_2",
   "sectionId": "mod1_sec3",
   "question": "Par rapport à une cardinale Sud, où se trouve le danger ?",
   "options": {
    "A": "Au sud",
    "B": "À l’est",
    "C": "Sous la marque",
    "D": "Au nord"
   },
   "correct": "D",
   "explanation": "Une cardinale Sud est placée au sud du danger : on passe au sud et le danger est au nord de la marque.",
   "tags": [
    "cardinales"
   ],
   "concept": "card-danger-position"
  },
  {
   "id": "var_card-danger-position_3",
   "sectionId": "mod1_sec3",
   "question": "Dans quelle direction, par rapport à cette marque, se trouve le danger ?",
   "options": {
    "A": "Au sud",
    "B": "Au nord",
    "C": "À l’ouest",
    "D": "À l’est"
   },
   "correct": "D",
   "explanation": "Cônes opposés par la pointe, noir au milieu : cardinale Ouest. On passe à l’ouest ; le danger est à l’est.",
   "figure": {
    "fig": "mark",
    "type": "card-w"
   },
   "tags": [
    "cardinales"
   ],
   "concept": "card-danger-position"
  },
  {
   "id": "var_card-voyants_1",
   "sectionId": "mod1_sec3",
   "question": "Une marque noire et jaune porte un voyant de deux cônes noirs superposés, pointes vers le bas. De quelle cardinale s’agit-il ?",
   "options": {
    "A": "Cardinale Nord",
    "B": "Cardinale Est",
    "C": "Cardinale Sud",
    "D": "Cardinale Ouest"
   },
   "correct": "C",
   "explanation": "Deux cônes pointes en bas : cardinale Sud (pointes en haut : Nord).",
   "tags": [
    "cardinales"
   ],
   "concept": "card-voyants"
  },
  {
   "id": "var_card-voyants_2",
   "sectionId": "mod1_sec3",
   "question": "Le voyant d’une marque noire et jaune forme un sablier : deux cônes réunis par la pointe. De quelle cardinale s’agit-il ?",
   "options": {
    "A": "Cardinale Ouest",
    "B": "Cardinale Nord",
    "C": "Cardinale Sud",
    "D": "Cardinale Est"
   },
   "correct": "A",
   "explanation": "Cônes opposés par la pointe (sablier, « W » couché) : cardinale Ouest. Opposés par la base (losange) : cardinale Est.",
   "tags": [
    "cardinales"
   ],
   "concept": "card-voyants"
  },
  {
   "id": "var_card-sud-feu_1",
   "sectionId": "mod1_sec3",
   "question": "De nuit, vous apercevez ce feu blanc. De quelle marque s’agit-il ?",
   "options": {
    "A": "Danger isolé",
    "B": "Cardinale Ouest",
    "C": "Cardinale Est",
    "D": "Cardinale Sud"
   },
   "correct": "D",
   "explanation": "6 scintillements suivis d’un éclat long : cardinale Sud (6 h sur le cadran d’une montre). L’éclat long évite de la confondre avec l’Est ou l’Ouest.",
   "figure": {
    "fig": "rhythm",
    "code": "Q(6)+LFl",
    "color": "W"
   },
   "tags": [
    "cardinales",
    "feux-balisage"
   ],
   "concept": "card-sud-feu",
   "near": [
    "var_card-est-feu_1"
   ]
  },
  {
   "id": "var_card-sud-feu_2",
   "sectionId": "mod1_sec3",
   "question": "Faisant route au 090° de nuit, vous voyez droit devant un feu blanc : 6 scintillements suivis d’un éclat long. Que faites-vous ?",
   "options": {
    "A": "Je viens à droite",
    "B": "Je viens à gauche",
    "C": "Je passe indifféremment à droite ou à gauche"
   },
   "correct": "A",
   "explanation": "C’est une cardinale Sud : je dois passer au sud. Cap à l’est (090°), le sud est à droite.",
   "tags": [
    "cardinales",
    "feux-balisage"
   ],
   "concept": "card-sud-feu",
   "near": [
    "var_card-est-feu_2",
    "var_card-ouest-feu_3",
    "var_card-sud-feu_3"
   ]
  },
  {
   "id": "var_card-sud-feu_3",
   "sectionId": "mod1_sec3",
   "question": "Quel est le rythme du feu d’une cardinale Sud ?",
   "options": {
    "A": "Scintillement continu, sans interruption",
    "B": "3 scintillements, comme sur le cadran à 3 h",
    "C": "9 scintillements",
    "D": "6 scintillements suivis d’un éclat long"
   },
   "correct": "D",
   "explanation": "Cardinale Sud : Q(6)+LFl (ou VQ(6)+LFl), 6 scintillements et un éclat long, comme le 6 sur le cadran d’une montre.",
   "tags": [
    "cardinales",
    "feux-balisage"
   ],
   "concept": "card-sud-feu",
   "near": [
    "ext_card_10",
    "q_1_3_2",
    "q_mardi_14",
    "var_card-sud-feu_2"
   ]
  },
  {
   "id": "var_card-est-feu_1",
   "sectionId": "mod1_sec3",
   "question": "De nuit, vous apercevez ce feu blanc. De quelle marque s’agit-il ?",
   "options": {
    "A": "Cardinale Nord",
    "B": "Cardinale Est",
    "C": "Danger isolé",
    "D": "Cardinale Ouest"
   },
   "correct": "B",
   "explanation": "3 scintillements toutes les 10 s : cardinale Est (3 h sur le cadran d’une montre).",
   "figure": {
    "fig": "rhythm",
    "code": "Q(3)",
    "color": "W"
   },
   "tags": [
    "cardinales",
    "feux-balisage"
   ],
   "concept": "card-est-feu",
   "near": [
    "var_card-sud-feu_1"
   ]
  },
  {
   "id": "var_card-est-feu_2",
   "sectionId": "mod1_sec3",
   "question": "Faisant route au nord de nuit, vous voyez droit devant un feu blanc à 3 scintillements. Que faites-vous ?",
   "options": {
    "A": "Je viens à droite",
    "B": "Je passe indifféremment à droite ou à gauche",
    "C": "Je viens à gauche"
   },
   "correct": "A",
   "explanation": "3 scintillements : cardinale Est, à passer à l’est. Cap au nord, l’est est à droite.",
   "tags": [
    "cardinales",
    "feux-balisage"
   ],
   "concept": "card-est-feu",
   "near": [
    "var_card-nord-feu_1",
    "var_card-ouest-feu_2",
    "var_card-ouest-feu_3",
    "var_card-sud-feu_2"
   ]
  },
  {
   "id": "var_card-est-feu_3",
   "sectionId": "mod1_sec3",
   "question": "Ce feu blanc scintillant rapide est celui :",
   "options": {
    "A": "D’une cardinale Ouest",
    "B": "D’une marque de danger isolé",
    "C": "D’une cardinale Nord",
    "D": "D’une cardinale Est"
   },
   "correct": "D",
   "explanation": "VQ(3) : 3 scintillements rapides toutes les 5 s, c’est une cardinale Est. Une cardinale peut être scintillante (Q) ou scintillante rapide (VQ) : seul le nombre compte.",
   "figure": {
    "fig": "rhythm",
    "code": "VQ(3)",
    "color": "W"
   },
   "tags": [
    "cardinales",
    "feux-balisage"
   ],
   "concept": "card-est-feu"
  },
  {
   "id": "var_card-nord-feu_1",
   "sectionId": "mod1_sec3",
   "question": "Faisant route à l’ouest de nuit, vous voyez droit devant un feu blanc scintillant sans interruption. Que faites-vous ?",
   "options": {
    "A": "Je viens à gauche",
    "B": "Je passe indifféremment à droite ou à gauche",
    "C": "Je viens à droite"
   },
   "correct": "C",
   "explanation": "Scintillement continu : cardinale Nord, à passer au nord. Cap à l’ouest, le nord est à droite.",
   "tags": [
    "cardinales",
    "feux-balisage"
   ],
   "concept": "card-nord-feu",
   "near": [
    "exam_q3_8",
    "var_card-est-feu_2"
   ]
  },
  {
   "id": "var_card-nord-feu_2",
   "sectionId": "mod1_sec3",
   "question": "De nuit, vous apercevez ce feu blanc, qui scintille rapidement sans jamais s’interrompre. Quelle marque le porte ?",
   "options": {
    "A": "Une cardinale Sud",
    "B": "Une cardinale Nord",
    "C": "Une marque d’eaux saines",
    "D": "Une cardinale Est"
   },
   "correct": "B",
   "explanation": "Scintillant continu, normal (Q) ou rapide (VQ) : cardinale Nord, le 12 h du cadran de la montre.",
   "figure": {
    "fig": "rhythm",
    "code": "VQ",
    "color": "W"
   },
   "tags": [
    "cardinales",
    "feux-balisage"
   ],
   "concept": "card-nord-feu"
  },
  {
   "id": "var_card-nord-feu_3",
   "sectionId": "mod1_sec3",
   "question": "Quel est le rythme du feu d’une cardinale Nord ?",
   "options": {
    "A": "3 scintillements",
    "B": "9 scintillements",
    "C": "Scintillant continu",
    "D": "6 scintillements suivis d’un éclat long"
   },
   "correct": "C",
   "explanation": "Cardinale Nord : feu blanc scintillant continu. Est : 3 scintillements ; Sud : 6 + un éclat long ; Ouest : 9.",
   "tags": [
    "cardinales",
    "feux-balisage"
   ],
   "concept": "card-nord-feu",
   "near": [
    "ext_card_10",
    "q_mardi_14"
   ]
  },
  {
   "id": "var_card-couleurs-disposition_1",
   "sectionId": "mod1_sec3",
   "question": "Quelle est la disposition des couleurs d’une marque cardinale Nord ?",
   "options": {
    "A": "Noir en haut, jaune en bas",
    "B": "Noir aux extrémités, jaune au milieu",
    "C": "Jaune aux extrémités, noir au milieu",
    "D": "Jaune en haut, noir en bas"
   },
   "correct": "A",
   "explanation": "Les pointes des cônes indiquent où est le noir : cardinale Nord, pointes en haut, noir en haut.",
   "tags": [
    "cardinales"
   ],
   "concept": "card-couleurs-disposition",
   "near": [
    "q_1_3_3",
    "var_card-couleurs-disposition_2"
   ]
  },
  {
   "id": "var_card-couleurs-disposition_2",
   "sectionId": "mod1_sec3",
   "question": "Quelle est la disposition des couleurs d’une marque cardinale Sud ?",
   "options": {
    "A": "Noir en haut, jaune en bas",
    "B": "Noir aux extrémités, jaune au milieu",
    "C": "Jaune aux extrémités, noir au milieu",
    "D": "Jaune en haut, noir en bas"
   },
   "correct": "D",
   "explanation": "Cardinale Sud : cônes pointes en bas, donc noir en bas et jaune en haut.",
   "tags": [
    "cardinales"
   ],
   "concept": "card-couleurs-disposition",
   "near": [
    "q_1_3_3",
    "var_card-couleurs-disposition_1"
   ]
  },
  {
   "id": "var_card-couleurs-disposition_3",
   "sectionId": "mod1_sec3",
   "question": "Quel moyen permet de retrouver la position du noir sur une marque cardinale ?",
   "options": {
    "A": "Le jaune est toujours au milieu, entre deux bandes noires",
    "B": "Le noir est toujours en haut, comme sur la cardinale Nord",
    "C": "Le noir est toujours du côté du danger, à l’opposé du jaune",
    "D": "Les pointes des cônes indiquent où se trouve le noir"
   },
   "correct": "D",
   "explanation": "Les pointes indiquent le noir : Nord (pointes en haut) noir en haut, Sud noir en bas, Est (pointes vers l’extérieur) noir aux extrémités, Ouest (pointes vers le milieu) noir au milieu.",
   "tags": [
    "cardinales"
   ],
   "concept": "card-couleurs-disposition"
  },
  {
   "id": "var_card-ouest-feu_1",
   "sectionId": "mod1_sec3",
   "question": "De nuit, vous apercevez ce feu blanc. Quelle marque le porte ?",
   "options": {
    "A": "Une cardinale Est",
    "B": "Une cardinale Sud",
    "C": "Une cardinale Ouest",
    "D": "Une marque de danger isolé"
   },
   "correct": "C",
   "explanation": "9 scintillements (ici rapides, VQ(9) toutes les 10 s) : cardinale Ouest, le 9 h du cadran de la montre.",
   "figure": {
    "fig": "rhythm",
    "code": "VQ(9)",
    "color": "W"
   },
   "tags": [
    "cardinales",
    "feux-balisage"
   ],
   "concept": "card-ouest-feu"
  },
  {
   "id": "var_card-ouest-feu_2",
   "sectionId": "mod1_sec3",
   "question": "Cap au nord de nuit, vous voyez droit devant un feu blanc à 9 scintillements. Que faites-vous ?",
   "options": {
    "A": "Je viens à droite",
    "B": "Je viens à gauche",
    "C": "Je passe indifféremment à droite ou à gauche"
   },
   "correct": "B",
   "explanation": "9 scintillements : cardinale Ouest, à passer à l’ouest. Cap au nord, l’ouest est à gauche.",
   "tags": [
    "cardinales",
    "feux-balisage"
   ],
   "concept": "card-ouest-feu",
   "near": [
    "var_card-est-feu_2",
    "var_card-ouest-feu_3"
   ]
  },
  {
   "id": "var_card-ouest-feu_3",
   "sectionId": "mod1_sec3",
   "question": "Cap au sud de nuit, vous voyez droit devant un feu blanc à 9 scintillements. Que faites-vous ?",
   "options": {
    "A": "Je viens à droite",
    "B": "Je viens à gauche",
    "C": "Je passe indifféremment à droite ou à gauche"
   },
   "correct": "A",
   "explanation": "9 scintillements : cardinale Ouest, à passer à l’ouest. Cap au sud, l’ouest est à droite.",
   "tags": [
    "cardinales",
    "feux-balisage"
   ],
   "concept": "card-ouest-feu",
   "near": [
    "var_card-est-feu_2",
    "var_card-ouest-feu_2",
    "var_card-sud-feu_2"
   ]
  },
  {
   "id": "var_card-ouest-feu_4",
   "sectionId": "mod1_sec3",
   "question": "Avec la règle du cadran de la montre, à quelle heure correspond la cardinale Ouest, et que montre son feu ?",
   "options": {
    "A": "3 h : 3 scintillements",
    "B": "9 h : 9 scintillements",
    "C": "6 h : 6 scintillements et un éclat long",
    "D": "12 h : scintillement continu"
   },
   "correct": "B",
   "explanation": "Sur le cadran, l’ouest est à 9 h : la cardinale Ouest montre 9 scintillements blancs, Q(9) ou VQ(9).",
   "tags": [
    "cardinales",
    "feux-balisage"
   ],
   "concept": "card-ouest-feu"
  },
  {
   "id": "var_remorq-feux-identifier_1",
   "sectionId": "mod2_sec1",
   "question": "De nuit, vous apercevez ces feux droit devant vous. De quoi s’agit-il ?",
   "options": {
    "A": "D’un navire handicapé par son tirant d’eau, qui vient vers vous",
    "B": "D’un navire à capacité de manœuvre restreinte, vu de l’avant",
    "C": "D’un navire à moteur de plus de 50 m qui vient droit vers vous",
    "D": "D’un remorqueur à remorque de plus de 200 m"
   },
   "correct": "D",
   "explanation": "Trois feux blancs de tête de mât superposés au-dessus des feux de côté : remorqueur avec une remorque de plus de 200 m (deux feux blancs si 200 m ou moins). Sur un remorqueur de 50 m ou plus, le feu de mât arrière, plus haut et nettement séparé, s’y ajoute.",
   "figure": {
    "fig": "lights",
    "rows": "W|W|W|G . R",
    "view": "vu de l’avant"
   },
   "tags": [
    "remorquage"
   ],
   "concept": "remorq-feux-identifier"
  },
  {
   "id": "var_remorq-feux-identifier_2",
   "sectionId": "mod2_sec1",
   "question": "Un navire montre deux feux blancs de tête de mât superposés, ses feux de côté, et un feu de poupe surmonté d’un feu jaune. Que signalent ces feux ?",
   "options": {
    "A": "Un remorqueur dont la remorque mesure 200 m ou moins",
    "B": "Un remorqueur dont la remorque dépasse 200 m de longueur",
    "C": "Un navire à moteur au mouillage",
    "D": "Un bateau pilote en service"
   },
   "correct": "A",
   "explanation": "Le feu jaune au-dessus du feu de poupe indique un remorquage. Deux feux de tête de mât superposés : remorque de 200 m ou moins ; trois : plus de 200 m.",
   "tags": [
    "remorquage"
   ],
   "concept": "remorq-feux-identifier"
  },
  {
   "id": "var_remorq-couple_1",
   "sectionId": "mod2_sec1",
   "question": "Combien de feux de tête de mât superposés montre un remorqueur de moins de 50 m qui remorque un navire à couple ?",
   "options": {
    "A": "Un",
    "B": "Trois",
    "C": "Deux",
    "D": "Aucun"
   },
   "correct": "C",
   "explanation": "Remorquage à couple (ou en poussant) : deux feux de tête de mât superposés, plus les feux de côté et le feu de poupe.",
   "tags": [
    "remorquage"
   ],
   "concept": "remorq-couple",
   "near": [
    "ext_feux_120"
   ]
  },
  {
   "id": "var_remorq-couple_2",
   "sectionId": "mod2_sec1",
   "question": "Lors d’un remorquage à couple, quels feux montre le navire remorqué ?",
   "options": {
    "A": "Deux feux rouges superposés au mât",
    "B": "Un feu jaune de remorquage à la poupe",
    "C": "Ses feux de côté et son feu de poupe",
    "D": "Aucun feu"
   },
   "correct": "C",
   "explanation": "Le navire remorqué à couple montre ses feux de côté et son feu de poupe ; c’est le remorqueur qui porte les deux feux de tête de mât superposés.",
   "tags": [
    "remorquage"
   ],
   "concept": "remorq-couple"
  },
  {
   "id": "var_remorq-couple_3",
   "sectionId": "mod2_sec1",
   "question": "Un remorqueur de 60 m remorque à couple. En plus de ses deux feux de tête de mât superposés, de ses feux de côté et de son feu de poupe, quel feu doit-il montrer en raison de sa longueur ?",
   "options": {
    "A": "Un feu de tête de mât arrière, plus haut",
    "B": "Un feu bleu",
    "C": "Un feu jaune de remorquage, en tête de mât",
    "D": "Un feu de mouillage à l’avant"
   },
   "correct": "A",
   "explanation": "Un remorqueur de 50 m ou plus ajoute son feu de tête de mât arrière, placé plus haut, comme tout navire à moteur de cette taille.",
   "tags": [
    "remorquage"
   ],
   "concept": "remorq-couple"
  },
  {
   "id": "var_remorq-couple_4",
   "sectionId": "mod2_sec1",
   "question": "De nuit, vous apercevez cet ensemble de feux droit devant vous. De quoi s’agit-il ?",
   "options": {
    "A": "D’un remorqueur avec un navire à couple",
    "B": "D’un remorqueur dont la remorque dépasse 200 m",
    "C": "De deux navires à moteur de moins de 50 m faisant route côte à côte vers vous",
    "D": "D’un chalutier et de son canot"
   },
   "correct": "A",
   "explanation": "Deux paires de feux de côté côte à côte et deux feux blancs superposés sur un seul des deux navires : remorqueur (moins de 50 m) et navire remorqué à couple, vus de l’avant.",
   "figure": {
    "fig": "lights",
    "rows": ". . . . . . W .|. . . . . . W .|G . R . . G . R",
    "view": "vus de l’avant"
   },
   "tags": [
    "remorquage"
   ],
   "concept": "remorq-couple"
  },
  {
   "id": "var_remorq-bicone_1",
   "sectionId": "mod2_sec1",
   "question": "De jour, un remorqueur et le navire qu’il remorque montrent tous deux cette marque. Qu’en déduisez-vous ?",
   "options": {
    "A": "Le remorqué est en action de pêche",
    "B": "Le remorqueur est non maître de sa manœuvre",
    "C": "Les deux navires sont au mouillage",
    "D": "La remorque dépasse 200 m"
   },
   "correct": "D",
   "explanation": "Un losange (marque biconique) sur le remorqueur et sur le remorqué indique une remorque de plus de 200 m.",
   "figure": {
    "fig": "shapes",
    "shapes": "diamond"
   },
   "tags": [
    "remorquage",
    "marques-jour"
   ],
   "concept": "remorq-bicone"
  },
  {
   "id": "var_remorq-bicone_2",
   "sectionId": "mod2_sec1",
   "question": "Lorsqu’une remorque dépasse 200 m, où est hissée la marque biconique (losange) ?",
   "options": {
    "A": "Uniquement sur le remorqueur",
    "B": "Sur le remorqueur et sur le navire remorqué",
    "C": "Uniquement sur le navire remorqué",
    "D": "Sur une bouée à l’extrémité de la remorque"
   },
   "correct": "B",
   "explanation": "De jour, quand la remorque dépasse 200 m, le remorqueur et le remorqué montrent chacun un losange.",
   "tags": [
    "remorquage",
    "marques-jour"
   ],
   "concept": "remorq-bicone",
   "near": [
    "ext_ves_20"
   ]
  },
  {
   "id": "var_remorq-bicone_3",
   "sectionId": "mod2_sec1",
   "question": "Un remorqueur tire une barge ; la remorque mesure 150 m. Quelle marque de jour doivent-ils montrer ?",
   "options": {
    "A": "Aucune marque particulière",
    "B": "Un cylindre noir",
    "C": "Un losange sur chacun",
    "D": "Une boule noire sur le remorqueur"
   },
   "correct": "A",
   "explanation": "Le losange n’est exigé que si la remorque dépasse 200 m. Avec une remorque de 200 m ou moins, aucune marque de jour n’est prévue.",
   "tags": [
    "remorquage",
    "marques-jour"
   ],
   "concept": "remorq-bicone"
  },
  {
   "id": "var_remorq-ram_1",
   "sectionId": "mod2_sec3",
   "question": "Un remorqueur montre de jour ces marques. Qu’indiquent-elles ?",
   "options": {
    "A": "Qu’il est au mouillage avec son remorqué amarré derrière lui",
    "B": "Qu’il est non maître de sa manœuvre à la suite d’une avarie de moteur ou de barre",
    "C": "Qu’il est échoué sur un haut-fond avec sa remorque",
    "D": "Que son remorquage l’empêche de s’écarter de sa route"
   },
   "correct": "D",
   "explanation": "Boule-losange-boule : navire à capacité de manœuvre restreinte. Sur un remorqueur, ces marques indiquent une difficulté à changer de cap (capacité de manœuvre restreinte).",
   "figure": {
    "fig": "shapes",
    "shapes": "ball,diamond,ball"
   },
   "tags": [
    "remorquage",
    "navires-speciaux"
   ],
   "concept": "remorq-ram"
  },
  {
   "id": "var_remorq-ram_2",
   "sectionId": "mod2_sec3",
   "question": "De nuit, un remorqueur montre, en plus de ses feux de remorquage, trois feux superposés rouge, blanc, rouge. Que vous indique-t-il ?",
   "options": {
    "A": "Qu’il est en pêche et traîne un chalut derrière lui",
    "B": "Qu’il a un pilote à bord pour l’entrée dans le port de Papeete",
    "C": "Qu’il est échoué et ne peut plus manœuvrer du tout",
    "D": "Que le remorquage l’empêche de changer aisément de cap"
   },
   "correct": "D",
   "explanation": "Rouge-blanc-rouge signale un navire à capacité de manœuvre restreinte. Ajouté aux feux de remorquage, il indique un remorquage qui empêche le remorqueur de s’écarter de sa route.",
   "tags": [
    "remorquage",
    "navires-speciaux"
   ],
   "concept": "remorq-ram"
  },
  {
   "id": "var_remorq-ram_3",
   "sectionId": "mod2_sec3",
   "question": "Avec votre bateau à moteur de plaisance, vous croisez un remorqueur qui montre boule-losange-boule. Quelle est votre conduite ?",
   "options": {
    "A": "Je garde ma route : je suis privilégié car il est à ma gauche",
    "B": "Je lui demande de s’écarter",
    "C": "Je m’écarte de sa route",
    "D": "Je passe entre le remorqueur et son remorqué pour gagner du temps"
   },
   "correct": "C",
   "explanation": "Un navire à capacité de manœuvre restreinte est en tête de la hiérarchie : le bateau à moteur de plaisance doit s’en écarter, et ne jamais passer entre remorqueur et remorqué.",
   "tags": [
    "remorquage",
    "navires-speciaux"
   ],
   "concept": "remorq-ram"
  },
  {
   "id": "var_remorq-feu-jaune_1",
   "sectionId": "mod2_sec1",
   "question": "De nuit, vous apercevez ces deux feux sur l’arrière d’un navire. Que signifient-ils ?",
   "options": {
    "A": "Un navire au mouillage, vu de l’arrière",
    "B": "Un bateau pilote en service, vu de l’arrière",
    "C": "Un navire en train de remorquer, vu de l’arrière",
    "D": "Un voilier faisant route au moteur, vu de l’arrière"
   },
   "correct": "C",
   "explanation": "Un feu jaune au-dessus du feu de poupe blanc est le feu de remorquage : ce navire remorque.",
   "figure": {
    "fig": "lights",
    "rows": "Y|W",
    "view": "vu de l’arrière"
   },
   "tags": [
    "remorquage"
   ],
   "concept": "remorq-feu-jaune"
  },
  {
   "id": "var_remorq-feu-jaune_2",
   "sectionId": "mod2_sec1",
   "question": "Quel est le secteur de visibilité du feu jaune de remorquage ?",
   "options": {
    "A": "360°, comme un feu de mouillage",
    "B": "135°, comme le feu de poupe",
    "C": "225°, comme le feu de tête de mât",
    "D": "112,5°, comme un feu de côté"
   },
   "correct": "B",
   "explanation": "Le feu de remorquage a les mêmes caractéristiques que le feu de poupe (135° vers l’arrière), mais il est jaune et placé au-dessus de lui.",
   "tags": [
    "remorquage"
   ],
   "concept": "remorq-feu-jaune"
  },
  {
   "id": "var_remorq-feu-jaune_3",
   "sectionId": "mod2_sec1",
   "question": "Où est placé le feu de remorquage d’un navire qui remorque ?",
   "options": {
    "A": "À l’étrave",
    "B": "Sous le feu de tête de mât",
    "C": "Sur le navire remorqué",
    "D": "Au-dessus du feu de poupe"
   },
   "correct": "D",
   "explanation": "Le feu jaune de remorquage est placé à l’arrière du remorqueur, au-dessus du feu de poupe.",
   "tags": [
    "remorquage"
   ],
   "concept": "remorq-feu-jaune",
   "near": [
    "ext_ves_18"
   ]
  },
  {
   "id": "var_remorq-feu-jaune_4",
   "sectionId": "mod2_sec1",
   "question": "De nuit, vous rattrapez un navire dont vous voyez un feu jaune au-dessus d’un feu blanc. Quelle précaution prenez-vous ?",
   "options": {
    "A": "Je ne passe jamais entre lui et son remorqué",
    "B": "Je le dépasse au plus près",
    "C": "J’attends ses instructions sur le canal 16",
    "D": "Je garde ma route, il doit s’écarter"
   },
   "correct": "A",
   "explanation": "Le feu jaune au-dessus du feu de poupe signale un remorqueur : ce navire remorque. La remorque peut être longue et immergée : on cherche le remorqué et on passe largement à l’écart de l’ensemble.",
   "tags": [
    "remorquage"
   ],
   "concept": "remorq-feu-jaune"
  },
  {
   "id": "var_remorq-longueur_1",
   "sectionId": "mod2_sec1",
   "question": "Un remorqueur tire une barge de 40 m avec 170 m de câble. Quelle est la longueur de la remorque et combien de feux de tête de mât superposés le remorqueur montre-t-il ?",
   "options": {
    "A": "170 m : deux feux",
    "B": "210 m : trois feux",
    "C": "200 m : deux feux",
    "D": "240 m : trois feux"
   },
   "correct": "B",
   "explanation": "La remorque se mesure de la poupe du remorqueur à la poupe du remorqué : 170 + 40 = 210 m. Elle dépasse 200 m, donc trois feux de tête de mât superposés.",
   "tags": [
    "remorquage"
   ],
   "concept": "remorq-longueur"
  },
  {
   "id": "var_remorq-longueur_2",
   "sectionId": "mod2_sec1",
   "question": "Un remorqueur tire un chaland de 60 m avec 150 m de câble. De jour, doivent-ils montrer un losange ?",
   "options": {
    "A": "Oui, la remorque mesure 210 m",
    "B": "Oui, comme pour tout remorquage",
    "C": "Non, le câble fait moins de 200 m",
    "D": "Non, il faut un remorqueur de plus de 50 m"
   },
   "correct": "A",
   "explanation": "La longueur de la remorque inclut le navire remorqué : 150 + 60 = 210 m. Au-delà de 200 m, remorqueur et remorqué montrent un losange.",
   "tags": [
    "remorquage",
    "marques-jour"
   ],
   "concept": "remorq-longueur"
  },
  {
   "id": "var_remorq-longueur_3",
   "sectionId": "mod2_sec1",
   "question": "Un remorqueur tire une vedette de 10 m avec 180 m de câble. Combien de feux de tête de mât superposés doit-il montrer ?",
   "options": {
    "A": "Un",
    "B": "Deux",
    "C": "Trois",
    "D": "Quatre"
   },
   "correct": "B",
   "explanation": "Longueur de la remorque, de la poupe du remorqueur à la poupe du remorqué : 180 + 10 = 190 m. Elle ne dépasse pas 200 m : deux feux de tête de mât superposés.",
   "tags": [
    "remorquage"
   ],
   "concept": "remorq-longueur"
  },
  {
   "id": "var_remorq-longueur_4",
   "sectionId": "mod2_sec1",
   "question": "Pour savoir si une remorque dépasse 200 m, que faut-il additionner ?",
   "options": {
    "A": "La longueur du câble seule",
    "B": "Les longueurs du remorqueur, du câble et du remorqué",
    "C": "La longueur du câble et celle du remorqueur",
    "D": "La longueur du câble et celle du navire remorqué"
   },
   "correct": "D",
   "explanation": "La remorque se mesure de la poupe du remorqueur à la poupe du remorqué : elle comprend donc le câble et la longueur du navire remorqué, mais pas celle du remorqueur.",
   "tags": [
    "remorquage"
   ],
   "concept": "remorq-longueur"
  },
  {
   "id": "var_feux-moteur-moins-7m_1",
   "sectionId": "mod2_sec1",
   "question": "De nuit, une vedette à moteur de 6 m, dont la vitesse maximale ne dépasse pas 7 nœuds, ne montre qu’un feu blanc visible sur tout l’horizon. Est-ce suffisant ?",
   "options": {
    "A": "Oui, mais seulement dans le lagon",
    "B": "Non, elle ne peut pas sortir de nuit",
    "C": "Oui, c’est suffisant",
    "D": "Non, il lui faut des feux de côté"
   },
   "correct": "C",
   "explanation": "Un navire à moteur de moins de 7 m dont la vitesse ne dépasse pas 7 nœuds peut se contenter d’un feu blanc visible sur tout l’horizon (et, si possible, de feux de côté).",
   "tags": [
    "feux-navires"
   ],
   "concept": "feux-moteur-moins-7m"
  },
  {
   "id": "var_feux-moteur-moins-7m_2",
   "sectionId": "mod2_sec1",
   "question": "Un bateau à moteur de 6,5 m peut se contenter, de nuit et en route, d’un feu blanc visible sur tout l’horizon à condition :",
   "options": {
    "A": "Que sa vitesse maximale ne dépasse pas 7 nœuds",
    "B": "De rester dans le lagon",
    "C": "D’avoir un moteur de moins de 6 CV (4,5 kW)",
    "D": "De naviguer à moins de 300 m du rivage, à 5 nœuds"
   },
   "correct": "A",
   "explanation": "La tolérance du feu blanc unique vaut pour les navires à moteur de moins de 7 m dont la vitesse ne dépasse pas 7 nœuds.",
   "tags": [
    "feux-navires"
   ],
   "concept": "feux-moteur-moins-7m"
  },
  {
   "id": "var_feux-voilier-face_1",
   "sectionId": "mod2_sec1",
   "question": "De nuit, un voilier faisant route à la voile vient droit sur vous. Quels feux voyez-vous ?",
   "options": {
    "A": "Son feu rouge à votre gauche et son feu vert à votre droite, sans feu blanc",
    "B": "Un seul feu blanc",
    "C": "Un feu blanc au-dessus d’un feu vert et d’un feu rouge",
    "D": "Son feu vert à votre gauche, son rouge à votre droite, sans feu blanc"
   },
   "correct": "D",
   "explanation": "Un voilier à la voile ne montre jamais de feu de tête de mât : de face, on ne voit que ses feux de côté, le vert à gauche de l’observateur et le rouge à droite.",
   "tags": [
    "feux-navires"
   ],
   "concept": "feux-voilier-face"
  },
  {
   "id": "var_feux-voilier-face_2",
   "sectionId": "mod2_sec1",
   "question": "De nuit, vous apercevez ces feux droit devant vous. De quoi s’agit-il ?",
   "options": {
    "A": "D’un navire non maître de sa manœuvre, qui vient vers vous",
    "B": "D’un bateau pilote en service",
    "C": "D’un chalutier en pêche, qui fait route vers vous",
    "D": "D’un voilier faisant route à la voile, qui vient vers vous"
   },
   "correct": "D",
   "explanation": "Rouge au-dessus de vert en tête de mât (feux facultatifs du voilier) et feux de côté sans feu blanc de tête de mât : voilier sous voiles, vu de l’avant.",
   "figure": {
    "fig": "lights",
    "rows": "R|G|G . R"
   },
   "tags": [
    "feux-navires"
   ],
   "concept": "feux-voilier-face"
  },
  {
   "id": "var_feux-voilier-face_3",
   "sectionId": "mod2_sec1",
   "question": "Droit devant, un navire vous montre un feu blanc au-dessus de ses feux vert et rouge. Peut-il s’agir d’un voilier ?",
   "options": {
    "A": "Non, jamais",
    "B": "Oui, s’il fait route au moteur",
    "C": "Oui, c’est l’aspect normal d’un voilier sous voiles, vu de l’avant, de nuit",
    "D": "Oui, mais seulement s’il mesure plus de 20 m, longueur où ce feu devient obligatoire"
   },
   "correct": "B",
   "explanation": "Sous voiles, un voilier ne montre que ses feux de côté (et de poupe). S’il utilise son moteur, c’est un navire à moteur : il allume son feu de tête de mât.",
   "tags": [
    "feux-navires"
   ],
   "concept": "feux-voilier-face"
  },
  {
   "id": "var_feux-mat-longueur_1",
   "sectionId": "mod2_sec1",
   "question": "De nuit, ce navire à moteur vous montre deux feux de tête de mât. À partir de quelle longueur ces deux feux sont-ils obligatoires ?",
   "options": {
    "A": "À partir de 50 m",
    "B": "À partir de 12 m",
    "C": "À partir de 20 m",
    "D": "Dès 7 m"
   },
   "correct": "A",
   "explanation": "À partir de 50 m, deux feux de tête de mât sont obligatoires, celui de l’arrière plus haut que celui de l’avant. Sous 50 m, un seul est obligatoire et un second reste facultatif : deux feux de mât ne prouvent donc pas à eux seuls que le navire mesure 50 m ou plus.",
   "figure": {
    "fig": "lights",
    "rows": ". . W|W . .|. R .",
    "view": "vu par bâbord"
   },
   "tags": [
    "feux-navires"
   ],
   "concept": "feux-mat-longueur"
  },
  {
   "id": "var_feux-mat-longueur_2",
   "sectionId": "mod2_sec1",
   "question": "Combien de feux de tête de mât doit montrer au minimum un navire à moteur de 30 m faisant route de nuit ?",
   "options": {
    "A": "Aucun",
    "B": "Un",
    "C": "Deux",
    "D": "Trois"
   },
   "correct": "B",
   "explanation": "Sous 50 m, un seul feu de tête de mât est obligatoire (un second est facultatif). À partir de 50 m, deux feux de tête de mât sont obligatoires.",
   "tags": [
    "feux-navires"
   ],
   "concept": "feux-mat-longueur"
  },
  {
   "id": "var_feux-mat-longueur_3",
   "sectionId": "mod2_sec1",
   "question": "Sur un navire à moteur de 50 m ou plus, lequel des deux feux de tête de mât est le plus haut ?",
   "options": {
    "A": "Cela dépend du navire",
    "B": "Celui de l’avant",
    "C": "Ils sont à la même hauteur",
    "D": "Celui de l’arrière"
   },
   "correct": "D",
   "explanation": "Le feu de tête de mât arrière est plus haut que celui de l’avant : ensemble, ils indiquent la direction du navire, qui va du côté du feu bas.",
   "tags": [
    "feux-navires"
   ],
   "concept": "feux-mat-longueur"
  },
  {
   "id": "var_feux-mouillage-50m-plus_1",
   "sectionId": "mod2_sec1",
   "question": "Quels feux montre de nuit un navire de 80 m au mouillage ?",
   "options": {
    "A": "Un seul feu blanc visible sur tout l’horizon, en haut du mât",
    "B": "Deux feux blancs, celui de l’avant plus haut que celui de l’arrière",
    "C": "Deux feux blancs, celui de l’arrière plus haut que celui de l’avant",
    "D": "Deux feux rouges superposés"
   },
   "correct": "B",
   "explanation": "À partir de 50 m, un navire au mouillage montre deux feux blancs visibles sur tout l’horizon : à l’avant (le plus haut) et à l’arrière (plus bas).",
   "tags": [
    "feux-navires"
   ],
   "concept": "feux-mouillage-50m-plus"
  },
  {
   "id": "var_feux-mouillage-50m-plus_2",
   "sectionId": "mod2_sec1",
   "question": "Un grand navire immobile, sans feux de côté, montre ces deux feux blancs. De quel côté de votre champ de vision se trouve son avant ?",
   "options": {
    "A": "À droite",
    "B": "À gauche",
    "C": "On ne peut pas le savoir"
   },
   "correct": "B",
   "explanation": "Au mouillage, un navire de 50 m ou plus montre deux feux blancs, celui de l’avant plus haut. Le feu le plus haut est ici à gauche : l’avant est à gauche.",
   "figure": {
    "fig": "lights",
    "rows": "W .|. W"
   },
   "tags": [
    "feux-navires"
   ],
   "concept": "feux-mouillage-50m-plus"
  },
  {
   "id": "var_feux-mouillage-50m-plus_3",
   "sectionId": "mod2_sec1",
   "question": "Quelle différence y a-t-il entre les deux feux blancs d’un grand navire au mouillage et les deux feux de tête de mât d’un grand navire faisant route ?",
   "options": {
    "A": "Aucune",
    "B": "Au mouillage, les deux feux sont à la même hauteur, l’un à côté de l’autre",
    "C": "Au mouillage, les feux sont rouges et visibles sur tout l’horizon",
    "D": "Au mouillage, le feu avant est le plus haut ; en route, c’est l’arrière"
   },
   "correct": "D",
   "explanation": "Les feux de mouillage d’un navire de 50 m ou plus sont disposés à l’inverse des feux de tête de mât : l’avant plus haut au mouillage, l’arrière plus haut en route.",
   "tags": [
    "feux-navires"
   ],
   "concept": "feux-mouillage-50m-plus"
  },
  {
   "id": "var_feux-mouillage-moins-50m_1",
   "sectionId": "mod2_sec1",
   "question": "Votre bateau de 12 m est au mouillage de nuit dans une baie fréquentée du lagon. Quel feu allumez-vous ?",
   "options": {
    "A": "Un feu blanc visible sur tout l’horizon",
    "B": "Aucun feu",
    "C": "Mes feux de côté",
    "D": "Mon feu de tête de mât et mes feux de côté"
   },
   "correct": "A",
   "explanation": "Au mouillage, un navire de moins de 50 m montre un feu blanc visible sur tout l’horizon, à l’endroit où on le voit le mieux. Les feux de route s’éteignent.",
   "tags": [
    "feux-navires"
   ],
   "concept": "feux-mouillage-moins-50m"
  },
  {
   "id": "var_feux-mouillage-moins-50m_2",
   "sectionId": "mod2_sec1",
   "question": "Un navire de 30 m, arrêté dans une rade, montre seulement ce feu, visible sur tout l’horizon. Que signale-t-il ?",
   "options": {
    "A": "Qu’il est non maître de sa manœuvre",
    "B": "Qu’il est échoué",
    "C": "Qu’il remorque",
    "D": "Qu’il est au mouillage"
   },
   "correct": "D",
   "explanation": "Un seul feu blanc visible sur tout l’horizon, sans feux de côté : navire de moins de 50 m au mouillage.",
   "figure": {
    "fig": "lights",
    "rows": "W",
    "view": "de tous côtés"
   },
   "tags": [
    "feux-navires"
   ],
   "concept": "feux-mouillage-moins-50m"
  },
  {
   "id": "var_feux-mouillage-moins-50m_3",
   "sectionId": "mod2_sec1",
   "question": "Un navire de 25 m au mouillage montre de jour une boule noire. Que montre-t-il de nuit ?",
   "options": {
    "A": "Deux feux rouges superposés",
    "B": "Un feu blanc visible sur tout l’horizon",
    "C": "Deux feux blancs, celui de l’avant plus haut",
    "D": "Un feu vert visible sur tout l’horizon"
   },
   "correct": "B",
   "explanation": "De nuit, un navire de moins de 50 m au mouillage montre un feu blanc visible sur tout l’horizon. Deux feux blancs ne sont exigés qu’à partir de 50 m.",
   "tags": [
    "feux-navires"
   ],
   "concept": "feux-mouillage-moins-50m"
  },
  {
   "id": "var_secteur-feu-mat_1",
   "sectionId": "mod2_sec1",
   "question": "Vers l’arrière, jusqu’où le feu de tête de mât d’un navire à moteur est-il visible ?",
   "options": {
    "A": "Jusqu’à 45° sur l’avant du travers, de chaque bord",
    "B": "Jusqu’au travers",
    "C": "Jusqu’à la poupe, sur tout l’horizon, comme un feu de mouillage",
    "D": "Jusqu’à 22,5° sur l’arrière du travers, de chaque bord"
   },
   "correct": "D",
   "explanation": "Le feu de tête de mât éclaire un secteur de 225° : de l’avant jusqu’à 22,5° sur l’arrière du travers, de chaque bord (90 + 22,5 = 112,5° de chaque côté).",
   "tags": [
    "feux-navires"
   ],
   "concept": "secteur-feu-mat",
   "near": [
    "var_secteur-feux-cote_1"
   ]
  },
  {
   "id": "var_secteur-feu-mat_2",
   "sectionId": "mod2_sec1",
   "question": "Le feu de tête de mât et le feu de poupe se complètent pour couvrir tout l’horizon. Quel est le secteur du feu de tête de mât ?",
   "options": {
    "A": "135°",
    "B": "112,5°",
    "C": "180°",
    "D": "225°"
   },
   "correct": "D",
   "explanation": "225° (tête de mât) + 135° (poupe) = 360° : à eux deux, ils font le tour de l’horizon.",
   "tags": [
    "feux-navires"
   ],
   "concept": "secteur-feu-mat"
  },
  {
   "id": "var_secteur-feu-mat_3",
   "sectionId": "mod2_sec1",
   "question": "Vous voyez le feu de tête de mât d’un navire à moteur, mais pas son feu de poupe. Où vous trouvez-vous par rapport à lui ?",
   "options": {
    "A": "Sur son arrière",
    "B": "Dans son secteur avant de 225°",
    "C": "Droit devant lui uniquement",
    "D": "N’importe où autour de lui"
   },
   "correct": "B",
   "explanation": "Le feu de tête de mât couvre 225° vers l’avant, jusqu’à 22,5° sur l’arrière du travers de chaque bord. Si vous le voyez, vous êtes dans ce secteur ; plus en arrière, vous ne verriez que le feu de poupe.",
   "tags": [
    "feux-navires"
   ],
   "concept": "secteur-feu-mat"
  },
  {
   "id": "var_portee-feux-moins-12m_1",
   "sectionId": "mod2_sec1",
   "question": "Un semi-rigide de 6 m est équipé de feux de côté. À quelle distance minimale ces feux doivent-ils être visibles ?",
   "options": {
    "A": "0,5 mille",
    "B": "1 mille",
    "C": "2 milles",
    "D": "3 milles"
   },
   "correct": "B",
   "explanation": "Pour un navire de moins de 12 m, la portée minimale des feux de côté est de 1 mille (2 milles pour le feu de tête de mât et le feu de poupe).",
   "tags": [
    "feux-navires"
   ],
   "concept": "portee-feux-moins-12m",
   "near": [
    "ext_feux_117"
   ]
  },
  {
   "id": "var_portee-feux-moins-12m_2",
   "sectionId": "mod2_sec1",
   "question": "Sur un navire de moins de 12 m, quel feu a la portée minimale la plus faible ?",
   "options": {
    "A": "Le feu de tête de mât",
    "B": "Le feu de poupe",
    "C": "Le feu blanc visible sur tout l’horizon",
    "D": "Les feux de côté"
   },
   "correct": "D",
   "explanation": "Sous 12 m, les feux de côté doivent porter à 1 mille, alors que les feux blancs (tête de mât, poupe, tout l’horizon) doivent porter à 2 milles.",
   "tags": [
    "feux-navires"
   ],
   "concept": "portee-feux-moins-12m",
   "near": [
    "ext_feux_117"
   ]
  },
  {
   "id": "var_portee-feux-moins-12m_3",
   "sectionId": "mod2_sec1",
   "question": "Quelle est la portée minimale des feux de côté d’un bateau de 9 m ?",
   "options": {
    "A": "3 milles",
    "B": "5 milles",
    "C": "1 mille",
    "D": "6 milles"
   },
   "correct": "C",
   "explanation": "Les feux de côté d’un navire de moins de 12 m ont une portée minimale de 1 mille : redoublez de veille, ces petits bateaux se voient tard.",
   "tags": [
    "feux-navires"
   ],
   "concept": "portee-feux-moins-12m",
   "near": [
    "ext_feux_117"
   ]
  },
  {
   "id": "var_secteur-feu-poupe_1",
   "sectionId": "mod2_sec1",
   "question": "Vous rattrapez un navire à moteur de 25 m par l’arrière, à plus de 22,5° sur l’arrière de son travers. De nuit, quel feu voyez-vous ?",
   "options": {
    "A": "Son feu de poupe blanc",
    "B": "Son feu vert",
    "C": "Aucun feu",
    "D": "Son feu de tête de mât et ses feux de côté"
   },
   "correct": "A",
   "explanation": "Le feu de poupe couvre 135° vers l’arrière (67,5° de chaque côté de l’axe). Dans ce secteur, on ne voit que lui : on est en position de rattrapant.",
   "tags": [
    "feux-navires"
   ],
   "concept": "secteur-feu-poupe"
  },
  {
   "id": "var_secteur-feu-poupe_2",
   "sectionId": "mod2_sec1",
   "question": "Le feu de poupe couvre un secteur de 135°. Combien de degrés cela représente-t-il de chaque côté de l’axe arrière du navire ?",
   "options": {
    "A": "45°",
    "B": "90°",
    "C": "67,5°",
    "D": "112,5°"
   },
   "correct": "C",
   "explanation": "135° répartis également de part et d’autre de l’arrière : 67,5° de chaque côté. Le feu de poupe prend le relais du feu de tête de mât à 22,5° sur l’arrière du travers.",
   "tags": [
    "feux-navires"
   ],
   "concept": "secteur-feu-poupe"
  },
  {
   "id": "var_secteur-feu-poupe_3",
   "sectionId": "mod2_sec1",
   "question": "De nuit, vous suivez un navire à moteur de 30 m qui fait la même route que vous, droit devant. Quel feu voyez-vous, et quel est son secteur ?",
   "options": {
    "A": "Un feu blanc visible sur 360°",
    "B": "Son feu de tête de mât, secteur de 225°",
    "C": "Ses feux de côté, secteur de 112,5° chacun",
    "D": "Son feu de poupe blanc, secteur de 135°"
   },
   "correct": "D",
   "explanation": "Sur l’arrière d’un navire, on ne voit que son feu de poupe blanc, qui couvre 135° vers l’arrière. (Seul un navire à moteur de moins de 12 m peut le remplacer par un feu blanc visible sur tout l’horizon.)",
   "tags": [
    "feux-navires"
   ],
   "concept": "secteur-feu-poupe"
  },
  {
   "id": "var_secteur-feux-cote_1",
   "sectionId": "mod2_sec1",
   "question": "Vers l’arrière, jusqu’où le feu vert de tribord est-il visible ?",
   "options": {
    "A": "Jusqu’au travers tribord, soit 90° depuis l’avant",
    "B": "Jusqu’à la poupe",
    "C": "Sur tout l’horizon",
    "D": "Jusqu’à 22,5° sur l’arrière du travers tribord"
   },
   "correct": "D",
   "explanation": "Chaque feu de côté couvre 112,5° : de l’avant jusqu’à 22,5° sur l’arrière du travers de son bord.",
   "tags": [
    "feux-navires"
   ],
   "concept": "secteur-feux-cote",
   "near": [
    "var_secteur-feu-mat_1"
   ]
  },
  {
   "id": "var_secteur-feux-cote_2",
   "sectionId": "mod2_sec1",
   "question": "Quel secteur couvrent, ensemble, les deux feux de côté d’un navire ?",
   "options": {
    "A": "112,5°",
    "B": "135°",
    "C": "225°",
    "D": "360°"
   },
   "correct": "C",
   "explanation": "Chaque feu de côté couvre 112,5° ; ensemble, ils couvrent 225°, comme le feu de tête de mât.",
   "tags": [
    "feux-navires"
   ],
   "concept": "secteur-feux-cote"
  },
  {
   "id": "var_secteur-feux-cote_3",
   "sectionId": "mod2_sec1",
   "question": "Un navire à moteur passe devant vous de votre gauche vers votre droite, et vous le voyez par son travers. Quel feu de côté voyez-vous ?",
   "options": {
    "A": "Son feu rouge",
    "B": "Son feu vert",
    "C": "Ses deux feux de côté",
    "D": "Aucun feu de côté"
   },
   "correct": "B",
   "explanation": "Il va vers votre droite : il vous présente son flanc tribord. Son feu vert, visible jusqu’à 22,5° sur l’arrière du travers, est donc visible par le travers.",
   "tags": [
    "feux-navires"
   ],
   "concept": "secteur-feux-cote"
  },
  {
   "id": "var_secteur-feux-cote_4",
   "sectionId": "mod2_sec1",
   "question": "Le secteur de 112,5° d’un feu de côté correspond à :",
   "options": {
    "A": "90° de l’avant au travers, plus 22,5° sur l’arrière du travers",
    "B": "67,5° sur l’avant du travers, plus 45° sur l’arrière du travers",
    "C": "56,25° de chaque côté du travers",
    "D": "22,5° sur l’avant du travers, plus 90° sur l’arrière du travers"
   },
   "correct": "A",
   "explanation": "De l’avant au travers, il y a 90° ; on ajoute 22,5° sur l’arrière du travers : 90 + 22,5 = 112,5°.",
   "tags": [
    "feux-navires"
   ],
   "concept": "secteur-feux-cote"
  },
  {
   "id": "var_feux-aviron-kayak_1",
   "sectionId": "mod2_sec1",
   "question": "Vous partez de nuit en kayak dans le lagon. Que devez-vous au minimum avoir à portée de main ?",
   "options": {
    "A": "Un feu rouge visible sur tout l’horizon, fixé bien en vue à l’arrière du kayak",
    "B": "Rien : un kayak n’a aucune obligation de feu, même de nuit dans le lagon",
    "C": "Des feux de côté rouge et vert",
    "D": "Une lampe ou un fanal à feu blanc"
   },
   "correct": "D",
   "explanation": "Une embarcation à rames ou à pagaie doit au minimum avoir à portée de main une lampe ou un fanal à feu blanc, à montrer suffisamment tôt pour éviter un abordage.",
   "tags": [
    "feux-navires"
   ],
   "concept": "feux-aviron-kayak"
  },
  {
   "id": "var_feux-aviron-kayak_2",
   "sectionId": "mod2_sec1",
   "question": "Une pirogue (va’a) mue à la pagaie peut-elle porter les feux d’un voilier ?",
   "options": {
    "A": "Non, c’est interdit",
    "B": "Oui, avec un feu de tête de mât en plus",
    "C": "Oui, c’est permis",
    "D": "Non, seulement un feu rouge"
   },
   "correct": "C",
   "explanation": "Un navire à propulsion manuelle peut porter les feux d’un voilier ; sinon, il doit avoir à portée de main une lampe ou un fanal blanc à montrer à temps.",
   "tags": [
    "feux-navires"
   ],
   "concept": "feux-aviron-kayak"
  },
  {
   "id": "var_feux-aviron-kayak_3",
   "sectionId": "mod2_sec1",
   "question": "De nuit dans le lagon, vous voyez soudain devant vous une lampe blanche agitée au ras de l’eau. De quoi peut-il s’agir ?",
   "options": {
    "A": "D’une cardinale Nord",
    "B": "D’un grand navire au mouillage",
    "C": "D’un bateau pilote en service",
    "D": "D’un kayak ou d’une pirogue"
   },
   "correct": "D",
   "explanation": "Kayaks et pirogues n’ont souvent qu’une lampe blanche, montrée au dernier moment pour éviter un abordage : réduisez votre vitesse et écartez-vous.",
   "tags": [
    "feux-navires"
   ],
   "concept": "feux-aviron-kayak"
  },
  {
   "id": "var_feux-aviron-kayak_4",
   "sectionId": "mod2_sec1",
   "question": "De quelle couleur doit être la lampe ou le fanal qu’une embarcation à l’aviron montre pour éviter un abordage ?",
   "options": {
    "A": "Blanche",
    "B": "Rouge",
    "C": "Verte",
    "D": "Orangée"
   },
   "correct": "A",
   "explanation": "Une embarcation à l’aviron montre, à défaut de feux de voilier, une lampe torche ou un fanal à feu blanc.",
   "tags": [
    "feux-navires"
   ],
   "concept": "feux-aviron-kayak"
  },
  {
   "id": "var_feux-moteur-aspect_1",
   "sectionId": "mod2_sec1",
   "question": "De nuit, vous apercevez ces feux sur votre avant. Que voyez-vous ?",
   "options": {
    "A": "Un navire à moteur qui vous montre son côté tribord",
    "B": "Un voilier sous voiles qui vous montre son côté bâbord",
    "C": "Un navire à moteur qui vous montre son côté bâbord",
    "D": "Un navire au mouillage"
   },
   "correct": "C",
   "explanation": "Un feu blanc de tête de mât au-dessus d’un feu rouge : navire à moteur de moins de 50 m qui vous présente son flanc bâbord (feu rouge).",
   "figure": {
    "fig": "lights",
    "rows": ". W|R ."
   },
   "tags": [
    "feux-navires"
   ],
   "concept": "feux-moteur-aspect",
   "near": [
    "gen_mod2_sec1_3"
   ]
  },
  {
   "id": "var_feux-moteur-aspect_2",
   "sectionId": "mod2_sec1",
   "question": "De nuit, vous voyez un navire à moteur montrant un feu blanc au-dessus d’un feu vert, sans feu rouge. Dans quel sens se déplace-t-il ?",
   "options": {
    "A": "De votre gauche vers votre droite",
    "B": "De votre droite vers votre gauche",
    "C": "Il s’éloigne de vous",
    "D": "Il vient droit sur vous"
   },
   "correct": "A",
   "explanation": "Le feu vert est à tribord : s’il est seul visible, le navire vous présente son flanc tribord, donc il se dirige vers votre droite.",
   "tags": [
    "feux-navires"
   ],
   "concept": "feux-moteur-aspect"
  },
  {
   "id": "var_feux-moteur-aspect_3",
   "sectionId": "mod2_sec1",
   "question": "Un navire à moteur vous montrait son feu blanc avec ses feux vert et rouge ; vous ne voyez plus maintenant que le blanc et le rouge. Qu’a-t-il fait ?",
   "options": {
    "A": "Il a viré vers sa gauche (sur bâbord) et vous montre son flanc tribord",
    "B": "Il s’est arrêté",
    "C": "Il a mouillé",
    "D": "Il a viré sur tribord"
   },
   "correct": "D",
   "explanation": "Vert et rouge ensemble : il venait droit sur vous. S’il ne montre plus que son rouge, il vous présente son flanc bâbord : il a donc viré sur tribord, vers sa droite.",
   "tags": [
    "feux-navires"
   ],
   "concept": "feux-moteur-aspect"
  },
  {
   "id": "var_matieres-dangereuses_1",
   "sectionId": "mod2_sec3",
   "question": "De nuit, dans un port, un navire-citerne à quai montre un feu rouge visible sur tout l’horizon. Que faites-vous ?",
   "options": {
    "A": "Je lui signale un incendie",
    "B": "Je me range contre lui",
    "C": "J’attends qu’il appareille",
    "D": "Je m’en tiens éloigné"
   },
   "correct": "D",
   "explanation": "Au port, un feu rouge visible sur tout l’horizon (de jour, un pavillon rouge) signale un navire qui charge, décharge ou transborde des matières dangereuses. On s’en tient éloigné, sans fumer.",
   "tags": [
    "pavillons",
    "navires-speciaux"
   ],
   "concept": "matieres-dangereuses"
  },
  {
   "id": "var_matieres-dangereuses_2",
   "sectionId": "mod2_sec3",
   "question": "Comment un navire qui charge du carburant au port signale-t-il cette opération de jour ?",
   "options": {
    "A": "Par le pavillon A, blanc et bleu",
    "B": "Par un pavillon rouge",
    "C": "Par une boule noire",
    "D": "Par les pavillons N sur C"
   },
   "correct": "B",
   "explanation": "De jour, un navire transbordant des matières dangereuses hisse un pavillon rouge (pavillon B) ; de nuit, il montre un feu rouge visible sur tout l’horizon.",
   "tags": [
    "pavillons",
    "navires-speciaux"
   ],
   "concept": "matieres-dangereuses"
  },
  {
   "id": "var_matieres-dangereuses_3",
   "sectionId": "mod2_sec3",
   "question": "De nuit, quel feu montre un navire qui transborde des matières dangereuses au port ?",
   "options": {
    "A": "Deux feux rouges superposés, visibles sur tout l’horizon",
    "B": "Rouge, blanc, rouge superposés au mât",
    "C": "Un feu jaune à éclats",
    "D": "Un feu rouge visible sur tout l’horizon"
   },
   "correct": "D",
   "explanation": "Un seul feu rouge visible sur tout l’horizon, à quai ou au mouillage : matières dangereuses. Deux rouges superposés signaleraient un navire non maître de sa manœuvre.",
   "tags": [
    "pavillons",
    "navires-speciaux"
   ],
   "concept": "matieres-dangereuses",
   "near": [
    "gen_mod2_sec3_4"
   ]
  },
  {
   "id": "var_pavillon-plongee_1",
   "sectionId": "mod4_sec3",
   "question": "Ce pavillon et le pavillon rouge à diagonale blanche ont-ils la même signification ?",
   "options": {
    "A": "Non, le rouge signale une détresse",
    "B": "Oui, ils signalent la même chose",
    "C": "Oui, mais seulement de nuit"
   },
   "correct": "B",
   "explanation": "Le pavillon A (blanc et bleu, en queue d’aronde) et le pavillon rouge à diagonale blanche signalent tous deux des plongeurs en immersion : on passe à plus de 100 m, lentement.",
   "figure": {
    "fig": "flag",
    "flag": "A"
   },
   "tags": [
    "pavillons",
    "loisirs"
   ],
   "concept": "pavillon-plongee"
  },
  {
   "id": "var_mouillage-boule_1",
   "sectionId": "mod2_sec1",
   "question": "Un navire immobile dans une baie montre cette marque à l’avant. Que signifie-t-elle ?",
   "options": {
    "A": "Il est au mouillage",
    "B": "Il est échoué",
    "C": "Il est en action de pêche",
    "D": "Il est non maître de sa manœuvre"
   },
   "correct": "A",
   "explanation": "Une boule noire à l’avant est la marque de jour d’un navire au mouillage (deux boules : non maître de sa manœuvre ; trois : échoué).",
   "figure": {
    "fig": "shapes",
    "shapes": "ball"
   },
   "tags": [
    "marques-jour"
   ],
   "concept": "mouillage-boule"
  },
  {
   "id": "var_mouillage-boule_2",
   "sectionId": "mod2_sec1",
   "question": "Vous êtes au mouillage, de jour, avec votre bateau de 10 m dans un mouillage fréquenté. Quelle marque devez-vous montrer ?",
   "options": {
    "A": "Deux boules noires",
    "B": "Un cône noir pointe en bas",
    "C": "Aucune marque",
    "D": "Une boule noire à l’avant"
   },
   "correct": "D",
   "explanation": "Un navire au mouillage montre une boule noire à l’avant. Seuls les navires de moins de 7 m mouillés hors d’un chenal, d’un mouillage fréquenté ou d’une route en sont dispensés.",
   "tags": [
    "marques-jour"
   ],
   "concept": "mouillage-boule"
  },
  {
   "id": "var_mouillage-boule_3",
   "sectionId": "mod2_sec1",
   "question": "Combien de boules noires montre un navire au mouillage ?",
   "options": {
    "A": "Aucune",
    "B": "Deux",
    "C": "Trois",
    "D": "Une"
   },
   "correct": "D",
   "explanation": "1 boule = au mouillage ; 2 boules = non maître de sa manœuvre ; 3 boules alignées = échoué.",
   "tags": [
    "marques-jour"
   ],
   "concept": "mouillage-boule"
  },
  {
   "id": "var_voilier-moteur-cone_1",
   "sectionId": "mod2_sec1",
   "question": "Un voilier, voiles hautes, montre cette marque à l’avant. Qu’indique-t-elle ?",
   "options": {
    "A": "Il est au mouillage",
    "B": "Il est en action de pêche avec ses lignes à l’arrière",
    "C": "Il fait route au moteur",
    "D": "Il est non maître de sa manœuvre et ne peut s’écarter"
   },
   "correct": "C",
   "explanation": "Un cône noir pointe en bas signale un voilier qui utilise son moteur, même avec ses voiles : il est alors considéré comme un navire à moteur.",
   "figure": {
    "fig": "shapes",
    "shapes": "cone-down"
   },
   "tags": [
    "marques-jour"
   ],
   "concept": "voilier-moteur-cone"
  },
  {
   "id": "var_voilier-moteur-cone_2",
   "sectionId": "mod2_sec1",
   "question": "Au regard des règles de barre, comment considérez-vous un voilier qui montre un cône noir pointe en bas ?",
   "options": {
    "A": "Comme un navire à moteur",
    "B": "Comme un navire non maître de sa manœuvre",
    "C": "Comme un navire en action de pêche",
    "D": "Comme un voilier, prioritaire sur les navires à moteur"
   },
   "correct": "A",
   "explanation": "Le cône pointe en bas indique qu’il marche au moteur : il perd les privilèges du voilier et suit les règles des navires à moteur.",
   "tags": [
    "marques-jour",
    "regles-barre"
   ],
   "concept": "voilier-moteur-cone"
  },
  {
   "id": "var_voilier-moteur-cone_3",
   "sectionId": "mod2_sec1",
   "question": "Vous naviguez à la voile et démarrez le moteur pour franchir la passe, voiles toujours hautes. Quelle marque hissez-vous de jour ?",
   "options": {
    "A": "Une boule noire",
    "B": "Un cône noir pointe en haut",
    "C": "Aucune marque",
    "D": "Un cône noir pointe en bas"
   },
   "correct": "D",
   "explanation": "Un voilier qui fait route à la voile et au moteur hisse à l’avant un cône noir pointe en bas.",
   "tags": [
    "marques-jour"
   ],
   "concept": "voilier-moteur-cone"
  },
  {
   "id": "var_voilier-moteur-cone_4",
   "sectionId": "mod2_sec1",
   "question": "Où et sous quelle forme un voilier faisant route à la voile et au moteur montre-t-il sa marque de jour ?",
   "options": {
    "A": "Un cône noir pointe en bas, à l’avant",
    "B": "Un cône noir pointe en haut, à l’arrière",
    "C": "Une boule noire en tête de mât",
    "D": "Un cylindre noir à l’avant"
   },
   "correct": "A",
   "explanation": "La marque se hisse à l’avant, là où on la voit le mieux : un cône noir pointe en bas.",
   "tags": [
    "marques-jour"
   ],
   "concept": "voilier-moteur-cone",
   "near": [
    "q_2_1_3"
   ]
  },
  {
   "id": "var_feu-occultations_1",
   "sectionId": "mod1_sec1",
   "question": "Un feu reste allumé la plupart du temps et s’éteint brièvement à intervalles réguliers. Comment l’appelle-t-on ?",
   "options": {
    "A": "Un feu à éclats",
    "B": "Un feu isophase",
    "C": "Un feu à occultations",
    "D": "Un feu scintillant rapide"
   },
   "correct": "C",
   "explanation": "Un feu à occultations a des périodes de lumière plus longues que les périodes d’obscurité : il « s’éteint brièvement ».",
   "tags": [
    "feux-balisage"
   ],
   "concept": "feu-occultations"
  },
  {
   "id": "var_feu-occultations_2",
   "sectionId": "mod1_sec1",
   "question": "Quelle abréviation désigne un feu à occultations sur une carte marine ?",
   "options": {
    "A": "Oc",
    "B": "Fl",
    "C": "Iso",
    "D": "Q"
   },
   "correct": "A",
   "explanation": "Oc = occultations ; Fl = éclats ; Iso = isophase ; Q = scintillant.",
   "tags": [
    "feux-balisage"
   ],
   "concept": "feu-occultations"
  },
  {
   "id": "var_feu-occultations_3",
   "sectionId": "mod1_sec1",
   "question": "Quelle est la différence entre un feu à occultations et un feu à éclats ?",
   "options": {
    "A": "Il n’y en a aucune",
    "B": "Le feu à occultations est toujours rouge, alors que le feu à éclats est toujours blanc",
    "C": "À éclats, la lumière dure plus que l’obscurité ; à occultations, c’est l’inverse",
    "D": "À occultations, la lumière dure plus que l’obscurité ; à éclats, c’est l’inverse"
   },
   "correct": "D",
   "explanation": "Feu à éclats : lumière plus courte que l’obscurité. Feu à occultations : lumière plus longue que l’obscurité. Isophase : durées égales.",
   "tags": [
    "feux-balisage"
   ],
   "concept": "feu-occultations"
  },
  {
   "id": "var_feu-occultations_4",
   "sectionId": "mod1_sec1",
   "question": "Un feu à occultations a une période de 5 secondes. Laquelle de ces répartitions lui correspond ?",
   "options": {
    "A": "1 s de lumière, 4 s d’obscurité",
    "B": "4 s de lumière, 1 s d’obscurité",
    "C": "2,5 s de lumière, 2,5 s d’obscurité",
    "D": "60 éclats brefs par minute"
   },
   "correct": "B",
   "explanation": "À occultations, la lumière dure plus longtemps que l’obscurité : 4 s de lumière et 1 s d’obscurité. La répartition 2,5/2,5 est un isophase, 1/4 un feu à éclats.",
   "tags": [
    "feux-balisage"
   ],
   "concept": "feu-occultations"
  },
  {
   "id": "var_vitesse-chenaux-port_1",
   "sectionId": "mod3_sec3",
   "question": "Vous empruntez le chenal d’accès à un port. Quelle vitesse ne devez-vous pas dépasser ?",
   "options": {
    "A": "Aucune limite, sauf dans le port",
    "B": "10 nœuds",
    "C": "3 nœuds",
    "D": "5 nœuds"
   },
   "correct": "D",
   "explanation": "La vitesse est limitée à 5 nœuds dans les chenaux d’accès aux ports, comme dans la bande des 300 m.",
   "tags": [
    "vitesse-zones"
   ],
   "concept": "vitesse-chenaux-port",
   "near": [
    "gen_mod3_sec3_5"
   ]
  },
  {
   "id": "var_vitesse-chenaux-port_2",
   "sectionId": "mod3_sec3",
   "question": "Dans quelles zones la vitesse est-elle limitée à 5 nœuds ?",
   "options": {
    "A": "Uniquement au large, au-delà de 2 milles d’un abri",
    "B": "Au-delà de 300 m du rivage",
    "C": "Dans la bande des 300 m et dans les chenaux d’accès aux ports",
    "D": "Seulement dans les zones de baignade signalées par des bouées jaunes"
   },
   "correct": "C",
   "explanation": "5 nœuds au plus dans la bande des 300 m à partir du rivage et dans les chenaux d’accès aux ports ; 3 ou 5 nœuds dans les ports, selon l’affichage.",
   "tags": [
    "vitesse-zones"
   ],
   "concept": "vitesse-chenaux-port",
   "near": [
    "gen_mod3_sec3_5",
    "var_vitesse-chenaux-port_4"
   ]
  },
  {
   "id": "var_vitesse-chenaux-port_3",
   "sectionId": "mod3_sec3",
   "question": "Dans le chenal d’accès d’un port, vous naviguez à 9 nœuds. Est-ce autorisé ?",
   "options": {
    "A": "Oui, la limite est de 10 nœuds",
    "B": "Non, la limite y est de 8 nœuds",
    "C": "Oui, seule la bande des 300 m est limitée",
    "D": "Non, la vitesse y est limitée à 5 nœuds"
   },
   "correct": "D",
   "explanation": "La vitesse maximale dans les chenaux d’accès aux ports est de 5 nœuds : 9 nœuds est un excès de vitesse.",
   "tags": [
    "vitesse-zones"
   ],
   "concept": "vitesse-chenaux-port"
  },
  {
   "id": "var_vitesse-chenaux-port_4",
   "sectionId": "mod3_sec3",
   "question": "La vitesse est limitée à 5 nœuds dans les chenaux d’accès aux ports. À quoi cela correspond-il environ ?",
   "options": {
    "A": "5 km/h",
    "B": "9,3 km/h",
    "C": "15 km/h",
    "D": "2,7 km/h"
   },
   "correct": "B",
   "explanation": "1 nœud = 1 mille par heure = 1,852 km/h : 5 nœuds font environ 9,3 km/h.",
   "tags": [
    "vitesse-zones"
   ],
   "concept": "vitesse-chenaux-port",
   "near": [
    "gen_mod3_sec3_5",
    "var_vitesse-chenaux-port_2"
   ]
  },
  {
   "id": "var_feux-vert-tribord_1",
   "sectionId": "mod3_sec3",
   "question": "De nuit, en bateau à moteur, vous apercevez ces feux sur votre avant tribord. Que faites-vous ?",
   "options": {
    "A": "Je viens franchement sur tribord pour passer sur son arrière",
    "B": "Je conserve mon cap et ma vitesse",
    "C": "J’émets trois sons brefs et je stoppe"
   },
   "correct": "B",
   "explanation": "Ce navire vous montre son feu vert (flanc tribord) sur votre tribord : « vert contre vert », vos routes ne se croisent pas devant vous. Vous continuez votre route en gardant la veille.",
   "figure": {
    "fig": "lights",
    "rows": "W|G",
    "view": "sur votre avant tribord"
   },
   "tags": [
    "regles-barre",
    "feux-navires"
   ],
   "concept": "feux-vert-tribord"
  },
  {
   "id": "var_feux-vert-tribord_2",
   "sectionId": "mod3_sec3",
   "question": "Sur votre avant tribord, un grand navire vous montre ces feux : deux feux de tête de mât (le plus haut à gauche) et un feu vert. Quelle est la bonne conduite ?",
   "options": {
    "A": "Je viens sur bâbord",
    "B": "Je viens sur tribord",
    "C": "Je garde mon cap et ma vitesse"
   },
   "correct": "C",
   "explanation": "Feu haut à gauche, feu bas à droite et feu vert : le navire, vu par tribord, s’éloigne vers votre droite. Vert contre vert, il n’y a pas de croisement : vous gardez votre route.",
   "figure": {
    "fig": "lights",
    "rows": "W .|. W|. G",
    "view": "vu par tribord"
   },
   "tags": [
    "regles-barre",
    "feux-navires"
   ],
   "concept": "feux-vert-tribord"
  },
  {
   "id": "var_feux-vert-tribord_3",
   "sectionId": "mod3_sec3",
   "question": "Deux navires à moteur se voient de nuit et chacun voit le feu vert de l’autre sur son tribord. Que doivent-ils faire ?",
   "options": {
    "A": "Chacun garde son cap et sa vitesse",
    "B": "Chacun vient sur bâbord",
    "C": "Celui qui est à droite de l’autre s’écarte, comme en route croisée",
    "D": "Les deux stoppent et émettent cinq sons brefs pour signaler le doute"
   },
   "correct": "A",
   "explanation": "« Vert contre vert » : les navires passent tribord sur tribord sur des routes qui ne se coupent pas. Aucune manœuvre n’est nécessaire ; chacun garde sa route en restant vigilant.",
   "tags": [
    "regles-barre"
   ],
   "concept": "feux-vert-tribord"
  },
  {
   "id": "var_feux-vert-tribord_4",
   "sectionId": "mod3_sec3",
   "question": "De nuit, un navire à moteur situé sur votre avant tribord vous montre son seul feu vert et son feu de tête de mât ; ses relèvements successifs changent nettement. Que faites-vous ?",
   "options": {
    "A": "Je stoppe jusqu’à ce qu’il soit passé",
    "B": "Je garde mon cap et ma vitesse",
    "C": "Je viens sur bâbord en émettant deux sons brefs",
    "D": "Je viens sur tribord pour couper sa route"
   },
   "correct": "B",
   "explanation": "Il vous montre son flanc tribord (vert contre vert) et son relèvement change : il n’y a ni croisement ni risque d’abordage. Vous conservez votre route.",
   "tags": [
    "regles-barre",
    "feux-navires"
   ],
   "concept": "feux-vert-tribord"
  },
  {
   "id": "var_peche-rouge-sur-blanc_1",
   "sectionId": "mod2_sec2",
   "question": "De nuit, quels feux de pêche montre un palangrier en action de pêche ?",
   "options": {
    "A": "Un feu vert au-dessus d’un feu blanc",
    "B": "Un feu blanc au-dessus d’un feu rouge",
    "C": "Un feu rouge au-dessus d’un feu blanc",
    "D": "Deux feux rouges superposés"
   },
   "correct": "C",
   "explanation": "Tout navire en pêche autre qu’un chalutier (palangre, filets, senne…) montre un feu rouge au-dessus d’un feu blanc, visibles sur tout l’horizon. « Vert sur blanc, chalut traînant ; rouge sur blanc, pêche autrement. »",
   "tags": [
    "peche"
   ],
   "concept": "peche-rouge-sur-blanc"
  },
  {
   "id": "var_peche-rouge-sur-blanc_2",
   "sectionId": "mod2_sec2",
   "question": "De nuit, vous voyez ces feux droit devant vous. De quoi s’agit-il ?",
   "options": {
    "A": "D’un bateau pilote en service, faisant route droit vers vous",
    "B": "D’un navire pêchant autrement qu’au chalut, venant vers vous",
    "C": "D’un chalutier en pêche, stoppé",
    "D": "D’un navire non maître de sa manœuvre"
   },
   "correct": "B",
   "explanation": "Rouge au-dessus de blanc : navire en pêche autre qu’un chalutier. Ses deux feux de côté visibles indiquent qu’il a de l’erre et vient vers vous (le pilote, lui, montre blanc au-dessus de rouge).",
   "figure": {
    "fig": "lights",
    "rows": "R|W|G . R",
    "view": "droit devant"
   },
   "tags": [
    "peche"
   ],
   "concept": "peche-rouge-sur-blanc"
  },
  {
   "id": "var_peche-marque-jour_1",
   "sectionId": "mod2_sec2",
   "question": "De jour, un fileyeur en train de relever ses filets montre :",
   "options": {
    "A": "Une boule noire",
    "B": "Un cône pointe en bas",
    "C": "Deux cônes réunis par la base",
    "D": "Deux cônes réunis par la pointe"
   },
   "correct": "D",
   "explanation": "Tout navire en action de pêche montre de jour deux cônes noirs superposés réunis par la pointe, en forme de sablier.",
   "tags": [
    "peche"
   ],
   "concept": "peche-marque-jour"
  },
  {
   "id": "var_peche-marque-jour_2",
   "sectionId": "mod2_sec2",
   "question": "Un navire montre ces deux cônes superposés. Est-ce la marque d’un navire en action de pêche ?",
   "options": {
    "A": "Non",
    "B": "Oui",
    "C": "Non, sauf s’il pêche au filet"
   },
   "correct": "A",
   "explanation": "La marque de pêche, ce sont deux cônes réunis par la pointe (sablier). Deux cônes réunis par la base forment un losange : ce n’est pas un navire en pêche. Ce losange est la marque d’un remorquage dont la longueur dépasse 200 m.",
   "figure": {
    "fig": "shapes",
    "shapes": "cone-up,cone-down"
   },
   "tags": [
    "peche"
   ],
   "concept": "peche-marque-jour"
  },
  {
   "id": "var_peche-couple-pavillon_1",
   "sectionId": "mod2_sec2",
   "question": "Un chalutier navigue de conserve avec un autre chalutier et arbore ce pavillon. Que signale-t-il ?",
   "options": {
    "A": "Qu’il demande un pilote pour entrer dans la passe",
    "B": "Qu’il pêche en couple (au bœuf) avec l’autre chalutier",
    "C": "Qu’il transporte des matières dangereuses ou des explosifs",
    "D": "Qu’il est en détresse"
   },
   "correct": "B",
   "explanation": "Pavillon T du Code international des signaux (rouge-blanc-bleu, rouge côté mât : l’inverse du pavillon national) : « Ne me gênez pas, je fais du chalutage jumelé », c’est-à-dire une pêche en couple (au bœuf).",
   "figure": {
    "fig": "flag",
    "flag": "T"
   },
   "tags": [
    "peche"
   ],
   "concept": "peche-couple-pavillon"
  },
  {
   "id": "var_peche-couple-pavillon_2",
   "sectionId": "mod2_sec2",
   "question": "Quel pavillon peuvent hisser deux chalutiers pêchant au bœuf ?",
   "options": {
    "A": "Le pavillon A",
    "B": "Les pavillons N et C hissés l’un sur l’autre",
    "C": "Le pavillon T",
    "D": "Le pavillon H"
   },
   "correct": "C",
   "explanation": "Pavillon T : « Ne me gênez pas, je fais du chalutage jumelé » (deux chalutiers tirant ensemble un même chalut). Pavillon A = plongeurs ; N sur C = détresse ; H = pilote à bord.",
   "tags": [
    "peche"
   ],
   "concept": "peche-couple-pavillon"
  },
  {
   "id": "var_peche-couple-pavillon_3",
   "sectionId": "mod2_sec2",
   "question": "De jour, deux chalutiers avançant côte à côte, à quelques centaines de mètres l’un de l’autre, arborent chacun un pavillon rouge-blanc-bleu, rouge côté mât (pavillon T). Que devez-vous faire ?",
   "options": {
    "A": "Ne passer entre eux que de jour",
    "B": "Passer entre eux à vitesse réduite, en émettant un son prolongé",
    "C": "Ne pas passer entre eux"
   },
   "correct": "C",
   "explanation": "Le pavillon T signale une pêche en couple (pêche au bœuf) : un chalut est tendu entre les deux navires. On ne passe jamais entre eux, de jour comme de nuit.",
   "tags": [
    "peche"
   ],
   "concept": "peche-couple-pavillon"
  },
  {
   "id": "var_peche-couple-pavillon_4",
   "sectionId": "mod2_sec2",
   "question": "Un chalutier hisse un pavillon rouge-blanc-bleu, le rouge côté mât (pavillon T). Il indique :",
   "options": {
    "A": "Un chalutier pêchant en couple",
    "B": "Un chalutier rentrant au port",
    "C": "Un chalutier au mouillage",
    "D": "Un chalutier dont le chalut est croché"
   },
   "correct": "A",
   "explanation": "Pavillon T du Code international des signaux (rouge-blanc-bleu, rouge côté mât : l’inverse du pavillon national) : « Ne me gênez pas, je fais du chalutage jumelé », c’est-à-dire une pêche en couple (au bœuf).",
   "tags": [
    "peche"
   ],
   "concept": "peche-couple-pavillon"
  },
  {
   "id": "var_chalut-filage_1",
   "sectionId": "mod2_sec2",
   "question": "Parmi d’autres chalutiers, un navire montre ces feux superposés : ses feux de chalutier, puis deux feux supplémentaires en dessous. Que fait-il ?",
   "options": {
    "A": "Il hisse son chalut",
    "B": "Son chalut est retenu par un obstacle",
    "C": "Il remorque un autre navire",
    "D": "Il file son chalut"
   },
   "correct": "D",
   "explanation": "Sous le vert sur blanc, deux feux blancs superposés signalent un chalutier en train de filer son chalut. « Blanc-blanc : le chalut part librement à l’eau. »",
   "figure": {
    "fig": "lights",
    "rows": "G .|W .|. W|. W"
   },
   "tags": [
    "peche"
   ],
   "concept": "chalut-filage"
  },
  {
   "id": "var_chalut-filage_2",
   "sectionId": "mod2_sec2",
   "question": "Un chalutier montre, sous son vert sur blanc, deux feux blancs superposés. Il est en train :",
   "options": {
    "A": "De filer son chalut",
    "B": "De hisser son chalut",
    "C": "De dégager son chalut croché sur une épave"
   },
   "correct": "A",
   "explanation": "Deux blancs supplémentaires = chalutier qui jette (file) son chalut ; blanc sur rouge = il le hisse ; deux rouges = chalut croché.",
   "tags": [
    "peche"
   ],
   "concept": "chalut-filage",
   "near": [
    "var_chalut-croche_3"
   ]
  },
  {
   "id": "var_chalut-filage_3",
   "sectionId": "mod2_sec2",
   "question": "Un chalutier de 25 m pêche au milieu d’autres chalutiers et commence à mettre son chalut à l’eau. Que doit-il montrer en plus de son vert sur blanc ?",
   "options": {
    "A": "Un feu blanc au-dessus d’un feu rouge",
    "B": "Un feu rouge au-dessus d’un feu blanc",
    "C": "Deux feux blancs superposés",
    "D": "Rien : ces feux sont facultatifs"
   },
   "correct": "C",
   "explanation": "Un chalutier qui file son chalut près d’autres chalutiers montre deux feux blancs superposés sous ses feux de pêche ; ces signaux sont obligatoires à partir de 20 m.",
   "tags": [
    "peche"
   ],
   "concept": "chalut-filage"
  },
  {
   "id": "var_chalut-croche_1",
   "sectionId": "mod2_sec2",
   "question": "Parmi d’autres chalutiers, un navire montre ces feux. Que signalent les deux feux rouges du bas ?",
   "options": {
    "A": "Qu’il est non maître de sa manœuvre",
    "B": "Que son chalut est retenu par un obstacle",
    "C": "Qu’il hisse son chalut",
    "D": "Qu’il est handicapé par son tirant d’eau"
   },
   "correct": "B",
   "explanation": "Vert sur blanc = chalutier en pêche ; deux feux rouges superposés en dessous = chalut retenu par un obstacle (croché). « Rouge-rouge : bloqué, il ne peut plus bouger. »",
   "figure": {
    "fig": "lights",
    "rows": "G .|W .|. R|. R"
   },
   "tags": [
    "peche"
   ],
   "concept": "chalut-croche",
   "near": [
    "c5_peche_06"
   ]
  },
  {
   "id": "var_chalut-croche_2",
   "sectionId": "mod2_sec2",
   "question": "Quel signal montre de nuit un chalutier dont le chalut est « croché » sur une épave ?",
   "options": {
    "A": "Deux feux rouges superposés, sous ses feux de chalutier",
    "B": "Un feu blanc au-dessus d’un feu rouge, sous ses feux de chalutier",
    "C": "Trois feux rouges superposés, à la place de ses feux de chalutier",
    "D": "Deux feux verts superposés"
   },
   "correct": "A",
   "explanation": "Un chalut retenu par un obstacle se signale par deux feux rouges superposés, placés sous le vert sur blanc du chalutier.",
   "tags": [
    "peche"
   ],
   "concept": "chalut-croche",
   "near": [
    "gen_mod2_sec2_5",
    "var_chalut-croche_3"
   ]
  },
  {
   "id": "var_chalut-croche_3",
   "sectionId": "mod2_sec2",
   "question": "De nuit, un chalutier montre, sous son vert sur blanc, deux feux rouges superposés. Que pouvez-vous en déduire ?",
   "options": {
    "A": "Il rentre au port",
    "B": "Il va accélérer pour filer son chalut et reprendre sa pêche",
    "C": "Il vous demande de venir sur bâbord pour libérer toute sa zone de pêche",
    "D": "Son chalut est croché"
   },
   "correct": "D",
   "explanation": "Deux rouges sous les feux de chalutier : chalut croché sur un obstacle. Le chalutier est retenu par son engin : on s’en écarte largement.",
   "tags": [
    "peche"
   ],
   "concept": "chalut-croche",
   "near": [
    "var_chalut-croche_2",
    "var_chalut-filage_2"
   ]
  },
  {
   "id": "var_chalut-virage_1",
   "sectionId": "mod2_sec2",
   "question": "Parmi d’autres chalutiers, un navire montre ces feux. Que fait-il ?",
   "options": {
    "A": "C’est un bateau pilote en service",
    "B": "Il file son chalut",
    "C": "Il hisse son chalut",
    "D": "Son chalut est croché"
   },
   "correct": "C",
   "explanation": "Vert sur blanc, puis blanc au-dessus de rouge en dessous : chalutier en train de hisser son chalut. « Blanc-rouge : il remonte, ça se complique. »",
   "figure": {
    "fig": "lights",
    "rows": "G .|W .|. W|. R"
   },
   "tags": [
    "peche"
   ],
   "concept": "chalut-virage"
  },
  {
   "id": "var_chalut-virage_2",
   "sectionId": "mod2_sec2",
   "question": "Sous son vert sur blanc, un chalutier montre un feu blanc au-dessus d’un feu rouge. Que fait-il ?",
   "options": {
    "A": "Il hisse son chalut",
    "B": "Son chalut est retenu par un obstacle",
    "C": "Il file son chalut",
    "D": "Il pêche en couple"
   },
   "correct": "A",
   "explanation": "Les signaux supplémentaires des chalutiers : deux blancs = filage ; blanc sur rouge = virage (hissage) du chalut ; deux rouges = chalut croché.",
   "tags": [
    "peche"
   ],
   "concept": "chalut-virage"
  },
  {
   "id": "var_chalut-virage_3",
   "sectionId": "mod2_sec2",
   "question": "Un chalutier de 30 m remonte son chalut à proximité d’autres chalutiers. Quels feux ajoute-t-il sous son vert sur blanc ?",
   "options": {
    "A": "Un feu rouge au-dessus d’un feu blanc",
    "B": "Deux feux blancs superposés",
    "C": "Deux feux rouges superposés",
    "D": "Un feu blanc au-dessus d’un feu rouge"
   },
   "correct": "D",
   "explanation": "Un chalutier qui hisse (vire) son chalut montre un feu blanc au-dessus d’un feu rouge, sous ses feux de pêche (obligatoire à partir de 20 m).",
   "tags": [
    "peche"
   ],
   "concept": "chalut-virage"
  },
  {
   "id": "var_chalutier-vert-sur-blanc_1",
   "sectionId": "mod2_sec2",
   "question": "Quels feux de pêche montre de nuit un chalutier en train de chaluter ?",
   "options": {
    "A": "Un feu rouge au-dessus d’un feu blanc",
    "B": "Un feu vert au-dessus d’un feu blanc",
    "C": "Un feu blanc au-dessus d’un feu vert",
    "D": "Un feu rouge au-dessus d’un feu vert"
   },
   "correct": "B",
   "explanation": "Le chalutier en pêche montre un feu vert au-dessus d’un feu blanc, visibles sur tout l’horizon. Rouge au-dessus de vert est le signal facultatif d’un voilier.",
   "tags": [
    "peche"
   ],
   "concept": "chalutier-vert-sur-blanc"
  },
  {
   "id": "var_chalutier-vert-sur-blanc_2",
   "sectionId": "mod2_sec2",
   "question": "De nuit, vous apercevez ces feux, le navire étant vu par son travers bâbord. De quoi s’agit-il ?",
   "options": {
    "A": "D’un chalutier en pêche, faisant route, vu par bâbord",
    "B": "D’un navire en pêche autre qu’un chalutier, vu par tribord",
    "C": "D’un bateau pilote vu par bâbord",
    "D": "D’un navire à capacité de manœuvre restreinte"
   },
   "correct": "A",
   "explanation": "Vert au-dessus de blanc : chalutier en pêche. Le feu rouge est son feu de côté bâbord : il a de l’erre et vous le voyez par bâbord.",
   "figure": {
    "fig": "lights",
    "rows": ". G|. W|R .",
    "view": "vu par bâbord"
   },
   "tags": [
    "peche"
   ],
   "concept": "chalutier-vert-sur-blanc"
  },
  {
   "id": "var_peche-hors-action_1",
   "sectionId": "mod2_sec2",
   "question": "Un palangrier fait route vers sa zone de pêche, sans avoir encore mis ses lignes à l’eau. Quels feux montre-t-il de nuit ?",
   "options": {
    "A": "Rouge sur blanc, avec ses feux de côté et son feu de poupe",
    "B": "Rouge sur blanc seulement, dès qu’il quitte le port",
    "C": "Ses feux de navire à moteur"
   },
   "correct": "C",
   "explanation": "Tant qu’il ne pêche pas, un navire de pêche n’est pas « en action de pêche » : c’est un simple navire à moteur, qui montre ses feux de route : tête de mât, côté et poupe.",
   "tags": [
    "peche"
   ],
   "concept": "peche-hors-action"
  },
  {
   "id": "var_peche-hors-action_2",
   "sectionId": "mod2_sec2",
   "question": "De jour, un chalutier qui rentre au port, chalut à bord, doit-il montrer deux cônes réunis par la pointe ?",
   "options": {
    "A": "Oui",
    "B": "Non",
    "C": "Non, sauf s’il mesure plus de 20 m"
   },
   "correct": "B",
   "explanation": "La marque de pêche n’est montrée qu’en action de pêche. Un chalutier qui rentre au port est un navire à moteur ordinaire, sans marque particulière.",
   "tags": [
    "peche"
   ],
   "concept": "peche-hors-action"
  },
  {
   "id": "var_peche-hors-action_3",
   "sectionId": "mod2_sec2",
   "question": "Vous êtes en bateau à moteur. Un chalutier qui rentre au port, chalut à bord, croise votre route en venant de votre bâbord. Qui doit s’écarter ?",
   "options": {
    "A": "Le chalutier",
    "B": "Vous",
    "C": "Le plus petit des deux"
   },
   "correct": "A",
   "explanation": "Hors action de pêche, un chalutier n’a aucun privilège : c’est un navire à moteur. Entre navires à moteur en routes croisées, celui qui voit l’autre sur son tribord s’écarte, ici le chalutier.",
   "tags": [
    "peche",
    "regles-barre"
   ],
   "concept": "peche-hors-action"
  },
  {
   "id": "var_peche-hors-action_4",
   "sectionId": "mod2_sec2",
   "question": "De nuit, vous voyez ces feux droit devant ; vous savez qu’il s’agit d’un chalutier. Que pouvez-vous en déduire ?",
   "options": {
    "A": "Il chalute en venant vers vous, feux de côté allumés",
    "B": "Son chalut est croché",
    "C": "Il ne pêche pas",
    "D": "Il est non maître de sa manœuvre et dérive droit vers vous"
   },
   "correct": "C",
   "explanation": "Feu de tête de mât et feux de côté, sans vert sur blanc : le chalutier n’est pas en action de pêche (il rentre au port ou se rend sur zone). Il montre les feux d’un navire à moteur.",
   "figure": {
    "fig": "lights",
    "rows": "W|G . R",
    "view": "droit devant"
   },
   "tags": [
    "peche"
   ],
   "concept": "peche-hors-action"
  },
  {
   "id": "var_ram-cote-passage_1",
   "sectionId": "mod2_sec3",
   "question": "De jour, une drague montre boule-losange-boule ; elle porte en plus deux boules superposées d’un bord et deux losanges superposés de l’autre. De quel côté passez-vous ?",
   "options": {
    "A": "Du côté des deux boules",
    "B": "Du côté des deux losanges",
    "C": "Indifféremment d’un côté ou de l’autre",
    "D": "Au ras de son étrave"
   },
   "correct": "B",
   "explanation": "Deux boules signalent le côté de l’obstruction ; deux losanges, le côté où l’on peut passer.",
   "tags": [
    "navires-speciaux"
   ],
   "concept": "ram-cote-passage"
  },
  {
   "id": "var_ram-cote-passage_2",
   "sectionId": "mod2_sec3",
   "question": "De nuit, vous devez passer près d’un navire en travaux qui montre ces feux, tels que vous les voyez. De quel côté passez-vous ?",
   "options": {
    "A": "À gauche, du côté des deux feux rouges",
    "B": "Entre les deux colonnes de feux",
    "C": "À droite, du côté des deux feux verts"
   },
   "correct": "C",
   "explanation": "Rouge-blanc-rouge : navire à capacité de manœuvre restreinte. Les deux feux rouges superposés marquent le côté obstrué ; on passe du côté des deux feux verts.",
   "figure": {
    "fig": "lights",
    "rows": ". R .|. W .|. R .|R . G|R . G"
   },
   "tags": [
    "navires-speciaux"
   ],
   "concept": "ram-cote-passage"
  },
  {
   "id": "var_ram-marque-jour_1",
   "sectionId": "mod2_sec3",
   "question": "Un câblier en train de poser un câble sous-marin montre de jour :",
   "options": {
    "A": "Une boule, un losange et une boule superposés",
    "B": "Deux boules noires superposées sur le mât",
    "C": "Trois boules superposées, la plus grosse en haut",
    "D": "Un cylindre noir hissé en tête de mât"
   },
   "correct": "A",
   "explanation": "Un navire dont le travail limite la capacité de manœuvre (pose de câbles, dragage, travaux sous-marins…) montre de jour boule-losange-boule (BLB).",
   "tags": [
    "navires-speciaux"
   ],
   "concept": "ram-marque-jour"
  },
  {
   "id": "var_ram-marque-jour_2",
   "sectionId": "mod2_sec3",
   "question": "Un navire en travaux de sondage hisse cette marque. Quelle est sa situation au regard des règles de barre ?",
   "options": {
    "A": "Il est au mouillage : il reste immobile, on peut passer près",
    "B": "Il est à capacité de manœuvre restreinte : on s’en écarte",
    "C": "Il est échoué : il signale un haut-fond à proximité",
    "D": "Il est en action de pêche : ses filets limitent sa manœuvre"
   },
   "correct": "B",
   "explanation": "Boule-losange-boule : navire à capacité de manœuvre restreinte. Il est au sommet de la hiérarchie : on s’en écarte.",
   "figure": {
    "fig": "shapes",
    "shapes": "ball,diamond,ball"
   },
   "tags": [
    "navires-speciaux"
   ],
   "concept": "ram-marque-jour"
  },
  {
   "id": "var_ram-feux-taille-aspect_1",
   "sectionId": "mod2_sec3",
   "question": "De nuit, un navire montre deux feux blancs de tête de mât (le plus haut à votre gauche), rouge-blanc-rouge superposés et un feu vert. Il s’agit d’un navire à capacité de manœuvre restreinte :",
   "options": {
    "A": "De moins de 50 m, avec erre, vu par bâbord",
    "B": "De plus de 50 m, sans erre, vu de l’arrière",
    "C": "De plus de 50 m, avec erre, vu par tribord",
    "D": "De moins de 50 m, sans erre"
   },
   "correct": "C",
   "explanation": "Deux feux de tête de mât : on retient 50 m et plus (le second feu est obligatoire à partir de 50 m) ; le feu vert indique son flanc tribord ; feu haut (arrière) à gauche : il va vers votre droite. Rouge-blanc-rouge = capacité de manœuvre restreinte.",
   "tags": [
    "navires-speciaux"
   ],
   "concept": "ram-feux-taille-aspect",
   "near": [
    "q_2_3_3",
    "var_ram-feux-taille-aspect_3"
   ]
  },
  {
   "id": "var_ram-feux-taille-aspect_2",
   "sectionId": "mod2_sec3",
   "question": "Un navire à capacité de manœuvre restreinte de moins de 50 m fait route ; vous le voyez par bâbord. Quels feux voyez-vous ?",
   "options": {
    "A": "Rouge-blanc-rouge, un feu de tête de mât et son feu rouge",
    "B": "Rouge-blanc-rouge seulement",
    "C": "Rouge-blanc-rouge, deux feux de tête de mât et son feu vert",
    "D": "Deux feux rouges et son feu rouge"
   },
   "correct": "A",
   "explanation": "Avec erre, le navire à capacité de manœuvre restreinte ajoute à rouge-blanc-rouge son feu de tête de mât (un seul sous 50 m), ses feux de côté et son feu de poupe. Par bâbord, on voit le feu rouge.",
   "tags": [
    "navires-speciaux"
   ],
   "concept": "ram-feux-taille-aspect",
   "near": [
    "q_2_3_3"
   ]
  },
  {
   "id": "var_ram-feux-taille-aspect_3",
   "sectionId": "mod2_sec3",
   "question": "Un navire montre rouge-blanc-rouge superposés, deux feux de tête de mât l’un au-dessus de l’autre et ses deux feux de côté, le vert à votre gauche et le rouge à votre droite. Que pouvez-vous en déduire ? (aucun remorqué n’est en vue)",
   "options": {
    "A": "Navire de moins de 50 m, qui s’éloigne de vous et vous montre son arrière",
    "B": "Navire non maître de sa manœuvre, sans erre, dérivant vers vous",
    "C": "Navire au mouillage",
    "D": "Navire à capacité de manœuvre restreinte de plus de 50 m"
   },
   "correct": "D",
   "explanation": "Rouge-blanc-rouge = capacité de manœuvre restreinte ; deux feux de tête de mât : on retient 50 m et plus (le second feu est obligatoire à partir de 50 m) ; les deux feux de côté visibles (vert à gauche) = il fait route droit vers vous.",
   "tags": [
    "navires-speciaux"
   ],
   "concept": "ram-feux-taille-aspect",
   "near": [
    "var_ram-feux-taille-aspect_1"
   ]
  },
  {
   "id": "var_deminage_1",
   "sectionId": "mod2_sec3",
   "question": "De nuit, vous apercevez sur un navire ces trois feux verts disposés en triangle, visibles sur tout l’horizon. Que faites-vous ?",
   "options": {
    "A": "Je passe de leur côté : vert signifie voie libre",
    "B": "Je reste à plus de 1 000 m",
    "C": "Je le dépasse par tribord en émettant deux sons longs et un bref"
   },
   "correct": "B",
   "explanation": "Trois feux verts en triangle (un en tête de mât, un à chaque extrémité de la vergue), en plus des feux de route : navire en opération de déminage. C’est l’exception au « vert = voie libre » : danger à moins de 1 000 m, on ne s’en approche pas.",
   "figure": {
    "fig": "lights",
    "rows": "G|G . G"
   },
   "tags": [
    "navires-speciaux"
   ],
   "concept": "deminage"
  },
  {
   "id": "var_deminage_2",
   "sectionId": "mod2_sec3",
   "question": "De jour, comment distinguer un navire échoué d’un navire en opération de déminage ?",
   "options": {
    "A": "Échoué : deux boules ; déminage : trois boules alignées",
    "B": "Échoué : trois boules en triangle ; déminage : trois boules alignées verticalement",
    "C": "Ils montrent la même marque",
    "D": "Échoué : trois boules alignées verticalement ; déminage : trois boules en triangle"
   },
   "correct": "D",
   "explanation": "Le navire échoué montre trois boules superposées ; le navire en opération de déminage, trois boules disposées en triangle (une en tête de mât, une à chaque extrémité de la vergue).",
   "tags": [
    "navires-speciaux",
    "marques-jour"
   ],
   "concept": "deminage"
  },
  {
   "id": "var_ram-feux-identifier_1",
   "sectionId": "mod2_sec3",
   "question": "De nuit, vous apercevez ces trois feux superposés, visibles sur tout l’horizon, et aucun autre feu. Quel navire les montre ?",
   "options": {
    "A": "Un navire non maître de sa manœuvre, stoppé et sans erre",
    "B": "Un navire handicapé par son tirant d’eau, sans erre",
    "C": "Un bateau pilote",
    "D": "Un navire à capacité de manœuvre restreinte, sans erre"
   },
   "correct": "D",
   "explanation": "Rouge-blanc-rouge superposés : navire à capacité de manœuvre restreinte. Sans feux de côté ni de poupe, il n’a pas d’erre.",
   "figure": {
    "fig": "lights",
    "rows": "R|W|R"
   },
   "tags": [
    "navires-speciaux"
   ],
   "concept": "ram-feux-identifier"
  },
  {
   "id": "var_ram-feux-identifier_2",
   "sectionId": "mod2_sec3",
   "question": "Un baliseur en train de mouiller une bouée se signale de nuit par :",
   "options": {
    "A": "Rouge, blanc, rouge superposés",
    "B": "Trois feux rouges superposés",
    "C": "Blanc, rouge, blanc superposés",
    "D": "Vert, blanc, vert superposés"
   },
   "correct": "A",
   "explanation": "Mouiller une bouée limite la capacité de manœuvre : le baliseur montre rouge-blanc-rouge (de jour, boule-losange-boule).",
   "tags": [
    "navires-speciaux"
   ],
   "concept": "ram-feux-identifier"
  },
  {
   "id": "var_pilote-feux_1",
   "sectionId": "mod2_sec3",
   "question": "De nuit, vous voyez ces feux droit devant. De quoi s’agit-il ?",
   "options": {
    "A": "D’un navire en pêche autre qu’un chalutier, qui vient vers vous",
    "B": "D’un navire non maître de sa manœuvre",
    "C": "D’un bateau pilote en service, faisant route vers vous",
    "D": "D’un chalutier en pêche"
   },
   "correct": "C",
   "explanation": "Blanc au-dessus de rouge : bateau pilote en service (« blanc sur rouge, pilote à bord »). Ses deux feux de côté montrent qu’il vient vers vous. Rouge sur blanc serait un pêcheur.",
   "figure": {
    "fig": "lights",
    "rows": "W|R|G . R",
    "view": "droit devant"
   },
   "tags": [
    "navires-speciaux"
   ],
   "concept": "pilote-feux"
  },
  {
   "id": "var_pilote-feux_2",
   "sectionId": "mod2_sec3",
   "question": "Aux abords d’une passe, de nuit, un bateau pilote en service est au mouillage. Que montre-t-il ?",
   "options": {
    "A": "Rouge au-dessus de blanc et un feu de mouillage à l’avant",
    "B": "Blanc au-dessus de rouge et son ou ses feux de mouillage",
    "C": "Deux feux rouges superposés",
    "D": "Un feu bleu à éclats et ses feux de mouillage"
   },
   "correct": "B",
   "explanation": "Le bateau pilote en service montre blanc au-dessus de rouge ; avec erre il ajoute ses feux de côté et de poupe, au mouillage son ou ses feux de mouillage.",
   "tags": [
    "navires-speciaux"
   ],
   "concept": "pilote-feux"
  },
  {
   "id": "var_tirant-eau-feux_1",
   "sectionId": "mod2_sec3",
   "question": "Dans la passe de Papeete, de nuit, un pétrolier montre trois feux rouges superposés en plus de ses feux de tête de mât et de ses feux de côté. Que faites-vous ?",
   "options": {
    "A": "Je ne le gêne pas",
    "B": "Je le croise normalement",
    "C": "Je m’en approche pour l’aider"
   },
   "correct": "A",
   "explanation": "Trois feux rouges superposés + feux de route : navire handicapé par son tirant d’eau. Il ne peut pas s’écarter de sa route : on évite de le gêner, tôt et franchement.",
   "tags": [
    "navires-speciaux",
    "regles-barre"
   ],
   "concept": "tirant-eau-feux"
  },
  {
   "id": "var_nuc-feux_1",
   "sectionId": "mod2_sec3",
   "question": "De nuit, vous apercevez ces feux. Que signalent-ils ?",
   "options": {
    "A": "Un navire handicapé par son tirant d’eau, avec erre, vu par tribord",
    "B": "Un navire non maître de sa manœuvre, avec erre, vu par tribord",
    "C": "Un navire non maître de sa manœuvre, sans erre",
    "D": "Un chalutier dont le chalut est croché, vu par son tribord"
   },
   "correct": "B",
   "explanation": "Deux feux rouges superposés sans feu de tête de mât : navire non maître de sa manœuvre. Le feu vert est son feu de côté tribord : il a de l’erre.",
   "figure": {
    "fig": "lights",
    "rows": "R .|R .|. G",
    "view": "vu par tribord"
   },
   "tags": [
    "navires-speciaux"
   ],
   "concept": "nuc-feux"
  },
  {
   "id": "var_nuc-feux_2",
   "sectionId": "mod2_sec3",
   "question": "Vous suivez de nuit un navire qui avance lentement devant vous. Vous voyez deux feux rouges superposés et, plus bas, son feu de poupe blanc. De quel navire s’agit-il ?",
   "options": {
    "A": "D’un voilier qui navigue au moteur, vu de l’arrière",
    "B": "D’un navire échoué",
    "C": "D’un navire non maître de sa manœuvre, avec erre",
    "D": "D’un bateau pilote en service, vu de l’arrière"
   },
   "correct": "C",
   "explanation": "Deux rouges superposés = non maître de sa manœuvre ; avec de l’erre, il montre aussi ses feux de côté et son feu de poupe, mais jamais de feu de tête de mât.",
   "tags": [
    "navires-speciaux"
   ],
   "concept": "nuc-feux"
  },
  {
   "id": "var_tirant-eau-cylindre_1",
   "sectionId": "mod2_sec3",
   "question": "Dans un chenal, un grand navire montre cette marque de jour. Que signale-t-elle ?",
   "options": {
    "A": "Un navire handicapé par son tirant d’eau",
    "B": "Un navire non maître de sa manœuvre",
    "C": "Un navire au mouillage",
    "D": "Un navire échoué"
   },
   "correct": "A",
   "explanation": "Un cylindre noir : navire handicapé par son tirant d’eau (le cylindre évoque la coque profonde). Il ne peut pas s’écarter : on évite de le gêner.",
   "figure": {
    "fig": "shapes",
    "shapes": "cylinder"
   },
   "tags": [
    "navires-speciaux"
   ],
   "concept": "tirant-eau-cylindre"
  },
  {
   "id": "var_tirant-eau-cylindre_2",
   "sectionId": "mod2_sec3",
   "question": "La nuit, un navire montre trois feux rouges superposés en plus de ses feux de route. Quelle marque montrera-t-il de jour ?",
   "options": {
    "A": "Trois boules noires",
    "B": "Deux boules noires",
    "C": "Un cylindre noir",
    "D": "Un losange"
   },
   "correct": "C",
   "explanation": "Trois feux rouges + feux de route = navire handicapé par son tirant d’eau ; de jour, il montre un cylindre noir. « 3 rouges = cylindre ».",
   "tags": [
    "navires-speciaux",
    "marques-jour"
   ],
   "concept": "tirant-eau-cylindre",
   "near": [
    "ext_ves_12"
   ]
  },
  {
   "id": "var_nuc-boules_1",
   "sectionId": "mod2_sec3",
   "question": "Un caboteur, victime d’une avarie de barre, ne peut plus manœuvrer. Quelle marque hisse-t-il de jour ?",
   "options": {
    "A": "Une boule noire",
    "B": "Deux boules noires superposées",
    "C": "Trois boules noires superposées",
    "D": "Boule, losange, boule"
   },
   "correct": "B",
   "explanation": "Le navire non maître de sa manœuvre (avarie de moteur, de barre…) montre de jour deux boules noires superposées.",
   "tags": [
    "navires-speciaux",
    "marques-jour"
   ],
   "concept": "nuc-boules"
  },
  {
   "id": "var_nuc-boules_2",
   "sectionId": "mod2_sec3",
   "question": "La nuit, un navire montre deux feux rouges superposés visibles sur tout l’horizon, sans feu de tête de mât. Que montrerait-il de jour ?",
   "options": {
    "A": "Un cylindre",
    "B": "Deux cônes réunis par la pointe",
    "C": "Trois boules",
    "D": "Deux boules noires superposées"
   },
   "correct": "D",
   "explanation": "Deux feux rouges = non maître de sa manœuvre ; de jour, deux boules noires. « Deux rouges = deux boules. »",
   "tags": [
    "navires-speciaux",
    "marques-jour"
   ],
   "concept": "nuc-boules",
   "near": [
    "var_echoue-feux_3"
   ]
  },
  {
   "id": "var_nuc-boules_3",
   "sectionId": "mod2_sec3",
   "question": "De jour, qu’est-ce qui distingue un navire non maître de sa manœuvre d’un navire au mouillage ?",
   "options": {
    "A": "Non maître de sa manœuvre : deux boules ; au mouillage : une boule",
    "B": "Non maître de sa manœuvre : une boule ; au mouillage : deux boules",
    "C": "Non maître de sa manœuvre : un cylindre ; au mouillage : une boule"
   },
   "correct": "A",
   "explanation": "Une boule = navire au mouillage ; deux boules = non maître de sa manœuvre ; trois boules alignées = échoué.",
   "tags": [
    "navires-speciaux",
    "marques-jour"
   ],
   "concept": "nuc-boules",
   "near": [
    "c6_particuliers_14",
    "q_mercredi_2"
   ]
  },
  {
   "id": "var_echoue-boules_1",
   "sectionId": "mod2_sec3",
   "question": "Un navire de 30 m s’est échoué sur le récif. Quelle marque montre-t-il de jour ?",
   "options": {
    "A": "Deux boules noires superposées",
    "B": "Trois boules noires disposées en triangle",
    "C": "Une boule noire",
    "D": "Trois boules noires superposées"
   },
   "correct": "D",
   "explanation": "Navire échoué : trois boules noires superposées (une de plus que le non maître de sa manœuvre). Trois boules en triangle = déminage.",
   "tags": [
    "navires-speciaux",
    "marques-jour"
   ],
   "concept": "echoue-boules"
  },
  {
   "id": "var_echoue-boules_2",
   "sectionId": "mod2_sec3",
   "question": "Près d’une passe, un caboteur immobile montre cette marque. Que devez-vous en conclure pour votre navigation ?",
   "options": {
    "A": "Il est au mouillage : je peux passer tout près de lui sans risque",
    "B": "Il est échoué : le fond manque, je m’en écarte largement",
    "C": "Il pêche : je m’écarte de ses filets en passant sur son arrière",
    "D": "Il attend un pilote"
   },
   "correct": "B",
   "explanation": "Trois boules noires superposées : navire échoué. Il signale un haut-fond : on passe au large.",
   "figure": {
    "fig": "shapes",
    "shapes": "ball,ball,ball"
   },
   "tags": [
    "navires-speciaux",
    "marques-jour"
   ],
   "concept": "echoue-boules"
  },
  {
   "id": "var_brume-2-prolonges_1",
   "sectionId": "mod3_sec1",
   "question": "Par brouillard épais, vous entendez ce signal environ toutes les deux minutes. Quel navire l’émet ?",
   "options": {
    "A": "Un navire à moteur stoppé, sans erre",
    "B": "Un navire à moteur faisant route avec de l’erre",
    "C": "Un voilier",
    "D": "Un navire qui vient sur bâbord"
   },
   "correct": "A",
   "explanation": "Deux sons prolongés toutes les 2 minutes au plus : navire à propulsion mécanique faisant route mais stoppé, sans erre. « 2 longs : je suis arrêté. »",
   "figure": {
    "fig": "sound",
    "pattern": "--"
   },
   "tags": [
    "signaux-sonores"
   ],
   "concept": "brume-2-prolonges"
  },
  {
   "id": "var_brume-2-prolonges_2",
   "sectionId": "mod3_sec1",
   "question": "Dans la brume, vous stoppez votre bateau à moteur : il n’a plus d’erre. Quel signal émettez-vous ?",
   "options": {
    "A": "Un son prolongé toutes les 2 minutes au plus",
    "B": "Trois sons brefs",
    "C": "Deux sons prolongés",
    "D": "Des coups de cloche chaque minute"
   },
   "correct": "C",
   "explanation": "Un navire à moteur stoppé et sans erre émet par visibilité réduite deux sons prolongés, à intervalles de 2 minutes au plus.",
   "tags": [
    "signaux-sonores"
   ],
   "concept": "brume-2-prolonges"
  },
  {
   "id": "var_brume-2-prolonges_3",
   "sectionId": "mod3_sec1",
   "question": "Dans la brume, vous émettiez un son prolongé toutes les deux minutes. Vous coupez les gaz et le bateau s’immobilise sur l’eau. Que changez-vous ?",
   "options": {
    "A": "Rien, je garde le même signal",
    "B": "J’émets désormais deux sons prolongés",
    "C": "J’arrête tout signal puisque je ne bouge plus"
   },
   "correct": "B",
   "explanation": "Un son prolongé = navire à moteur avec erre ; deux sons prolongés = navire à moteur sans erre. Dès que le bateau n’a plus d’erre, on passe à deux sons prolongés.",
   "tags": [
    "signaux-sonores"
   ],
   "concept": "brume-2-prolonges"
  },
  {
   "id": "var_brume-conduite_1",
   "sectionId": "mod3_sec1",
   "question": "Un grain tropical réduit soudain la visibilité à quelques dizaines de mètres. Que faites-vous ?",
   "options": {
    "A": "J’accélère pour sortir du grain",
    "B": "Je coupe le moteur et j’attends",
    "C": "J’émets cinq sons brefs",
    "D": "Je ralentis et émets mon signal sonore"
   },
   "correct": "D",
   "explanation": "Par visibilité réduite, on adopte une vitesse de sécurité réduite, on allume ses feux, on renforce la veille (vue et ouïe) et on émet son signal toutes les 2 minutes au plus.",
   "tags": [
    "signaux-sonores"
   ],
   "concept": "brume-conduite"
  },
  {
   "id": "var_brume-conduite_2",
   "sectionId": "mod3_sec1",
   "question": "Dans la brume, vous entendez un signal sonore qui semble venir de l’avant de votre travers. Que faites-vous ?",
   "options": {
    "A": "Je réduis ma vitesse au minimum pour gouverner, voire je stoppe",
    "B": "J’accélère pour le dépasser",
    "C": "Je viens franchement sur bâbord sans rien signaler, pour l’éviter",
    "D": "Je garde ma vitesse et mon cap en émettant un son prolongé"
   },
   "correct": "A",
   "explanation": "Si un signal semble venir de l’avant du travers, on réduit sa vitesse au minimum nécessaire pour gouverner, voire on stoppe, jusqu’à ce que le risque soit écarté.",
   "tags": [
    "signaux-sonores"
   ],
   "concept": "brume-conduite"
  },
  {
   "id": "var_brume-conduite_3",
   "sectionId": "mod3_sec1",
   "question": "Par visibilité réduite, à quelle fréquence un navire en route émet-il son signal sonore ?",
   "options": {
    "A": "Une seule fois, en entrant dans la brume",
    "B": "Seulement quand il entend un autre navire",
    "C": "À intervalles de 2 minutes au plus",
    "D": "Toutes les 10 minutes"
   },
   "correct": "C",
   "explanation": "De jour comme de nuit, dans ou près d’une zone de visibilité réduite, chaque navire émet son signal à intervalles réguliers de 2 minutes au plus.",
   "tags": [
    "signaux-sonores"
   ],
   "concept": "brume-conduite"
  },
  {
   "id": "var_son-2-brefs_1",
   "sectionId": "mod3_sec1",
   "question": "Dans la rade, un cargo émet ce signal en manœuvrant. Que fait-il ?",
   "options": {
    "A": "Il vient sur tribord",
    "B": "Il vient sur bâbord",
    "C": "Il bat en arrière"
   },
   "correct": "B",
   "explanation": "Deux sons brefs : « je viens sur bâbord » (à gauche). 1 bref = tribord, 2 brefs = bâbord, 3 brefs = je bats en arrière.",
   "figure": {
    "fig": "sound",
    "pattern": ".."
   },
   "tags": [
    "signaux-sonores"
   ],
   "concept": "son-2-brefs"
  },
  {
   "id": "var_son-5-brefs_1",
   "sectionId": "mod3_sec1",
   "question": "Vous êtes privilégié. Un navire qui doit s’écarter de votre route approche sur votre bâbord et ne semble pas manœuvrer. Quel signal émettez-vous ?",
   "options": {
    "A": "Un son prolongé, répété toutes les 2 minutes",
    "B": "Deux sons brefs",
    "C": "Au moins cinq sons brefs et rapides",
    "D": "Trois sons brefs, pour qu’il batte en arrière"
   },
   "correct": "C",
   "explanation": "Au moins cinq sons brefs signifient « j’ai des doutes sur vos intentions » : c’est le signal du privilégié qui juge que l’autre ne manœuvre pas (ou pas assez).",
   "tags": [
    "signaux-sonores"
   ],
   "concept": "son-5-brefs"
  },
  {
   "id": "var_brume-1-prolonge_1",
   "sectionId": "mod3_sec1",
   "question": "Dans la brume, vous faites route à vitesse réduite en bateau à moteur. Quel signal émettez-vous ?",
   "options": {
    "A": "Deux sons prolongés toutes les 2 minutes au plus",
    "B": "Un son prolongé toutes les 2 minutes au plus",
    "C": "Un son bref chaque minute",
    "D": "Des coups de cloche chaque minute"
   },
   "correct": "B",
   "explanation": "Un navire à propulsion mécanique faisant route avec de l’erre émet un son prolongé à intervalles de 2 minutes au plus.",
   "tags": [
    "signaux-sonores"
   ],
   "concept": "brume-1-prolonge"
  },
  {
   "id": "var_brume-1-prolonge_2",
   "sectionId": "mod3_sec1",
   "question": "Dans la brume, vous entendez ce signal toutes les deux minutes environ, de plus en plus fort. Qu’en déduisez-vous ?",
   "options": {
    "A": "Un navire à moteur faisant route se rapproche",
    "B": "Un navire au mouillage est proche",
    "C": "Un voilier se rapproche",
    "D": "Un navire vient sur tribord"
   },
   "correct": "A",
   "explanation": "Un son prolongé répété toutes les 2 minutes : navire à moteur faisant route avec de l’erre. S’il se rapproche, on réduit sa vitesse et on redouble de vigilance.",
   "figure": {
    "fig": "sound",
    "pattern": "-"
   },
   "tags": [
    "signaux-sonores"
   ],
   "concept": "brume-1-prolonge"
  },
  {
   "id": "var_son-1-bref_1",
   "sectionId": "mod3_sec1",
   "question": "En bateau à moteur, en vue d’un autre navire, vous venez sur tribord pour l’éviter. Quel signal sonore accompagne votre manœuvre ?",
   "options": {
    "A": "Deux sons brefs",
    "B": "Un son prolongé",
    "C": "Trois sons brefs",
    "D": "Un son bref"
   },
   "correct": "D",
   "explanation": "Un son bref : « je viens sur tribord ». Les signaux de manœuvre annoncent la manœuvre en cours à un navire qui vous voit.",
   "tags": [
    "signaux-sonores"
   ],
   "concept": "son-1-bref",
   "near": [
    "c7_sonores_05",
    "var_son-1-bref_3"
   ]
  },
  {
   "id": "var_son-1-bref_2",
   "sectionId": "mod3_sec1",
   "question": "Deux navires à moteur se rencontrent en routes opposées. L’un d’eux émet ce signal. Que fait-il ?",
   "options": {
    "A": "Il vient sur tribord",
    "B": "Il vient sur bâbord",
    "C": "Il bat en arrière",
    "D": "Il a des doutes sur vos intentions"
   },
   "correct": "A",
   "explanation": "Un son bref = « je viens sur tribord », la manœuvre normale de chacun en routes opposées.",
   "figure": {
    "fig": "sound",
    "pattern": "."
   },
   "tags": [
    "signaux-sonores",
    "regles-barre"
   ],
   "concept": "son-1-bref",
   "near": [
    "ext_son_121"
   ]
  },
  {
   "id": "var_son-1-bref_3",
   "sectionId": "mod3_sec1",
   "question": "Pour annoncer « je viens sur tribord », un navire à moteur en vue d’un autre émet :",
   "options": {
    "A": "Deux sons prolongés et un son bref",
    "B": "Un son bref",
    "C": "Deux sons brefs",
    "D": "Un son prolongé"
   },
   "correct": "B",
   "explanation": "« Je viens sur tribord » = un son bref. Deux longs + un bref, c’est la demande de dépassement par tribord dans un chenal.",
   "tags": [
    "signaux-sonores"
   ],
   "concept": "son-1-bref",
   "near": [
    "var_son-1-bref_1"
   ]
  },
  {
   "id": "var_port-3-verts_1",
   "sectionId": "mod3_sec2",
   "question": "Vous voulez entrer au port et le signal d’entrée montre trois feux verts. Que faites-vous ?",
   "options": {
    "A": "J’attends les instructions par VHF",
    "B": "J’entre",
    "C": "J’attends",
    "D": "J’entre, mais hors du chenal"
   },
   "correct": "B",
   "explanation": "Trois feux verts : passage autorisé, sens unique. La passe est à vous ; dans l’autre sens, les navires voient en principe trois feux rouges.",
   "tags": [
    "signaux-portuaires"
   ],
   "concept": "port-3-verts"
  },
  {
   "id": "var_port-3-verts_2",
   "sectionId": "mod3_sec2",
   "question": "Vous entrez dans la passe : le signal montre ces trois feux verts. Pouvez-vous y croiser des navires qui sortent ?",
   "options": {
    "A": "Oui, la circulation est dans les deux sens",
    "B": "Non, la circulation est à sens unique",
    "C": "On ne peut pas le savoir sans la capitainerie"
   },
   "correct": "B",
   "explanation": "Trois feux verts : passage autorisé, circulation à sens unique. Au même instant, les navires qui veulent sortir voient en principe trois feux rouges et attendent. C’est vert-vert-blanc qui annonce une circulation dans les deux sens.",
   "figure": {
    "fig": "port",
    "lights": "GGG"
   },
   "tags": [
    "signaux-portuaires"
   ],
   "concept": "port-3-verts"
  },
  {
   "id": "var_port-vert-vert-blanc_1",
   "sectionId": "mod3_sec2",
   "question": "Quel signal de trafic portuaire autorise le passage avec une circulation dans les deux sens ?",
   "options": {
    "A": "Vert, blanc, vert",
    "B": "Trois feux verts",
    "C": "Vert, vert, blanc",
    "D": "Trois feux rouges"
   },
   "correct": "C",
   "explanation": "Vert, vert, blanc (de haut en bas) : circulation dans les deux sens, passage autorisé avec prudence car on peut croiser des navires dans la passe.",
   "tags": [
    "signaux-portuaires"
   ],
   "concept": "port-vert-vert-blanc"
  },
  {
   "id": "var_port-danger-grave_1",
   "sectionId": "mod3_sec2",
   "question": "Vous êtes en petit bateau pouvant passer hors du chenal. À l’entrée du port, trois feux rouges à éclats sont allumés, avec un feu jaune. Pouvez-vous entrer ?",
   "options": {
    "A": "Oui, hors du chenal",
    "B": "Non",
    "C": "Oui, en serrant le bord tribord",
    "D": "Non, sauf à vitesse réduite"
   },
   "correct": "B",
   "explanation": "Trois feux rouges à éclats = danger grave : tous les navires doivent s’arrêter ou se dérouter selon les instructions du port, même ceux qui peuvent passer hors du chenal. Le feu jaune n’annule pas ce signal.",
   "tags": [
    "signaux-portuaires"
   ],
   "concept": "port-danger-grave"
  },
  {
   "id": "var_port-danger-grave_2",
   "sectionId": "mod3_sec2",
   "question": "Quel signal de trafic portuaire annonce un danger grave (incendie, pollution…) et la fermeture du port ?",
   "options": {
    "A": "Trois feux rouges fixes",
    "B": "Vert, blanc, vert",
    "C": "Trois feux verts à occultations",
    "D": "Trois feux rouges à éclats"
   },
   "correct": "D",
   "explanation": "Seul le signal de danger grave est à éclats : trois feux rouges à éclats, port fermé. Trois rouges fixes ou à occultations lentes = passage interdit, il faut attendre.",
   "tags": [
    "signaux-portuaires"
   ],
   "concept": "port-danger-grave"
  },
  {
   "id": "var_port-vert-blanc-vert_1",
   "sectionId": "mod3_sec2",
   "question": "Vous arrivez devant la passe en bateau à moteur et voyez ce signal. Que faites-vous ?",
   "options": {
    "A": "J’entre sans formalité",
    "B": "J’attends les instructions de la capitainerie",
    "C": "J’entre en serrant la droite : la circulation est à double sens",
    "D": "Je m’éloigne : danger grave, port fermé à tous"
   },
   "correct": "B",
   "explanation": "Vert, blanc, vert : entrée réglementée. On ne passe qu’après avoir reçu des instructions spéciales (capitainerie, VHF).",
   "figure": {
    "fig": "port",
    "lights": "GWG"
   },
   "tags": [
    "signaux-portuaires"
   ],
   "concept": "port-vert-blanc-vert"
  },
  {
   "id": "var_port-vert-blanc-vert_2",
   "sectionId": "mod3_sec2",
   "question": "Quel signal portuaire indique une entrée réglementée, où l’on ne passe qu’après avoir reçu des instructions ?",
   "options": {
    "A": "Vert, vert, blanc",
    "B": "Trois feux verts",
    "C": "Vert, blanc, vert",
    "D": "Trois feux rouges fixes"
   },
   "correct": "C",
   "explanation": "Vert, blanc, vert : le blanc au milieu « coupe » le passage, il faut une autorisation. Vert, vert, blanc : circulation à double sens.",
   "tags": [
    "signaux-portuaires"
   ],
   "concept": "port-vert-blanc-vert"
  },
  {
   "id": "var_port-vert-blanc-vert_3",
   "sectionId": "mod3_sec2",
   "question": "Quelle est la différence entre les signaux vert-blanc-vert et vert-vert-blanc ?",
   "options": {
    "A": "Vert-blanc-vert : entrée sur instructions ; vert-vert-blanc : double sens",
    "B": "Vert-blanc-vert : double sens ; vert-vert-blanc : entrée sur instructions",
    "C": "Aucune, les deux autorisent le passage librement",
    "D": "Vert-blanc-vert : port fermé ; vert-vert-blanc : sens unique, à vitesse réduite"
   },
   "correct": "A",
   "explanation": "Le blanc au milieu (vert-blanc-vert) impose d’attendre des instructions ; le blanc en bas (vert-vert-blanc) autorise le passage dans les deux sens, avec prudence.",
   "tags": [
    "signaux-portuaires"
   ],
   "concept": "port-vert-blanc-vert"
  },
  {
   "id": "var_regle-relevement-constant_1",
   "sectionId": "mod3_sec3",
   "question": "Vous relevez au compas un navire qui se rapproche : 210°, puis 211°, puis 210°, à 3 minutes d’intervalle. Qu’en concluez-vous ?",
   "options": {
    "A": "Il n’y a aucun risque : le relèvement a changé d’un degré",
    "B": "Risque d’abordage : j’applique les règles de barre",
    "C": "Le navire s’éloigne de moi, car son relèvement augmente"
   },
   "correct": "B",
   "explanation": "Un relèvement qui ne change pas de façon nette pendant que la distance diminue signifie qu’il y a risque d’abordage. Dans le doute, on considère que le risque existe.",
   "tags": [
    "regles-barre"
   ],
   "concept": "regle-relevement-constant"
  },
  {
   "id": "var_regle-chenal-ne-pas-gener_1",
   "sectionId": "mod3_sec3",
   "question": "Vous voulez traverser en voilier le chenal d’accès au port alors qu’un porte-conteneurs, qui ne peut naviguer qu’à l’intérieur du chenal, approche. Que faites-vous ?",
   "options": {
    "A": "Je traverse devant lui",
    "B": "J’émets cinq sons brefs et je passe",
    "C": "Je ne le gêne pas"
   },
   "correct": "C",
   "explanation": "Dans un chenal étroit, un voilier, un pêcheur ou un petit navire ne doit pas gêner un navire qui ne peut naviguer qu’à l’intérieur du chenal. On ne traverse pas devant lui. J’attends qu’il soit passé ou je passe sur son arrière.",
   "tags": [
    "regles-barre"
   ],
   "concept": "regle-chenal-ne-pas-gener"
  },
  {
   "id": "var_regle-moteur-vs-peche_1",
   "sectionId": "mod3_sec3",
   "question": "En bateau à moteur, vous voyez ces feux droit devant vous, à une distance qui diminue. Que faites-vous ?",
   "options": {
    "A": "Je garde mon cap et ma vitesse : c’est à lui de venir sur tribord",
    "B": "Je manœuvre franchement pour m’écarter de sa route",
    "C": "J’émets cinq sons brefs et je conserve ma route"
   },
   "correct": "B",
   "explanation": "Vert sur blanc avec ses deux feux de côté : c’est un chalutier en pêche qui vient vers vous. Navire en action de pêche, il est privilégié sur le navire à moteur : c’est à vous de vous écarter.",
   "figure": {
    "fig": "lights",
    "rows": "G|W|G . R",
    "view": "droit devant"
   },
   "tags": [
    "regles-barre",
    "peche"
   ],
   "concept": "regle-moteur-vs-peche"
  },
  {
   "id": "var_regle-moteur-vs-peche_2",
   "sectionId": "mod3_sec3",
   "question": "Vous pilotez un bateau à moteur. Un fileyeur montrant rouge sur blanc et ses feux de côté croise votre route en venant de votre bâbord. Qui doit s’écarter ?",
   "options": {
    "A": "Vous",
    "B": "Lui",
    "C": "Le plus rapide des deux",
    "D": "Chacun vient sur tribord"
   },
   "correct": "A",
   "explanation": "La règle « priorité à tribord » ne vaut qu’entre deux navires à moteur. Un navire en action de pêche est privilégié sur un navire à moteur, quel que soit le côté d’où il vient.",
   "tags": [
    "regles-barre",
    "peche"
   ],
   "concept": "regle-moteur-vs-peche"
  },
  {
   "id": "var_regle-routes-opposees_1",
   "sectionId": "mod3_sec3",
   "question": "En bateau à moteur, vous voyez ces feux droit devant, de plus en plus proches. Que faites-vous ?",
   "options": {
    "A": "Je viens sur tribord",
    "B": "Je viens sur bâbord",
    "C": "Je conserve mon cap et ma vitesse"
   },
   "correct": "A",
   "explanation": "Un feu de tête de mât et les deux feux de côté : un navire à moteur vient droit sur vous. En routes opposées, chacun vient sur tribord pour se croiser bâbord sur bâbord.",
   "figure": {
    "fig": "lights",
    "rows": "W|G . R",
    "view": "droit devant"
   },
   "tags": [
    "regles-barre",
    "feux-navires"
   ],
   "concept": "regle-routes-opposees",
   "near": [
    "var_regle-risque-feux-cote_1",
    "var_regle-risque-feux-cote_3"
   ]
  },
  {
   "id": "var_regle-routes-opposees_2",
   "sectionId": "mod3_sec3",
   "question": "Deux bateaux à moteur arrivent l’un vers l’autre en routes directement opposées. Après leur manœuvre, comment doivent-ils se croiser ?",
   "options": {
    "A": "Tribord sur tribord",
    "B": "Peu importe, du moment qu’ils s’évitent",
    "C": "Bâbord sur bâbord",
    "D": "Le plus petit passe derrière le plus grand"
   },
   "correct": "C",
   "explanation": "En routes opposées, chacun vient sur tribord (à droite) : les deux navires se croisent bâbord sur bâbord, comme sur une route où l’on roule à droite.",
   "tags": [
    "regles-barre"
   ],
   "concept": "regle-routes-opposees"
  },
  {
   "id": "var_regle-hierarchie-peche-voilier_1",
   "sectionId": "mod3_sec3",
   "question": "Vous naviguez à la voile seule. Un navire hissant cette marque arrive sur votre bâbord, en route de collision. Qui doit s’écarter ?",
   "options": {
    "A": "Lui",
    "B": "Vous",
    "C": "Celui qui va le plus vite"
   },
   "correct": "B",
   "explanation": "Deux cônes réunis par la pointe : navire en action de pêche. Dans la hiérarchie des privilèges, il passe avant le voilier ; le voilier s’écarte, quel que soit le côté.",
   "figure": {
    "fig": "shapes",
    "shapes": "cone-down,cone-up"
   },
   "tags": [
    "regles-barre",
    "peche"
   ],
   "concept": "regle-hierarchie-peche-voilier"
  },
  {
   "id": "var_regle-hierarchie-peche-voilier_2",
   "sectionId": "mod3_sec3",
   "question": "Classez ces navires du plus privilégié au moins privilégié : navire à moteur, navire en action de pêche, voilier marchant à la voile.",
   "options": {
    "A": "Voilier, navire en pêche, navire à moteur",
    "B": "Navire à moteur, voilier, navire en pêche",
    "C": "Voilier, navire à moteur, navire en pêche",
    "D": "Navire en pêche, voilier, navire à moteur"
   },
   "correct": "D",
   "explanation": "Plus un navire est gêné pour manœuvrer, plus il est privilégié : le navire en action de pêche passe avant le voilier, qui passe avant le navire à moteur.",
   "tags": [
    "regles-barre"
   ],
   "concept": "regle-hierarchie-peche-voilier"
  },
  {
   "id": "var_regle-hierarchie-peche-voilier_3",
   "sectionId": "mod3_sec3",
   "question": "De nuit, vous êtes sur un voilier marchant à la voile. Sur votre avant, un navire montre un feu rouge au-dessus d’un feu blanc et ses feux de côté ; son relèvement ne change pas. Que faites-vous ?",
   "options": {
    "A": "Je m’écarte de sa route",
    "B": "Je conserve cap et vitesse : à la voile, je suis privilégié",
    "C": "J’émets un son prolongé et je garde ma route"
   },
   "correct": "A",
   "explanation": "Rouge sur blanc : navire en action de pêche (autre que chalutier). Il est privilégié sur le voilier : c’est le voilier qui manœuvre.",
   "tags": [
    "regles-barre",
    "peche"
   ],
   "concept": "regle-hierarchie-peche-voilier"
  },
  {
   "id": "var_regle-priorite-nuc_1",
   "sectionId": "mod3_sec3",
   "question": "Un navire en action de pêche et un navire non maître de sa manœuvre risquent l’abordage. Qui doit s’écarter ?",
   "options": {
    "A": "Le navire non maître de sa manœuvre",
    "B": "Le navire en action de pêche",
    "C": "Celui qui voit l’autre sur son tribord",
    "D": "Aucun des deux"
   },
   "correct": "B",
   "explanation": "Le navire non maître de sa manœuvre est au sommet de la hiérarchie (avec le navire à capacité de manœuvre restreinte) : tous les autres, y compris les pêcheurs, s’en écartent.",
   "tags": [
    "regles-barre",
    "navires-speciaux"
   ],
   "concept": "regle-priorite-nuc",
   "near": [
    "ext_snd_15"
   ]
  },
  {
   "id": "var_regle-priorite-nuc_2",
   "sectionId": "mod3_sec3",
   "question": "Vous naviguez à la voile seule et faites route de collision avec un navire qui montre cette marque. Que faites-vous ?",
   "options": {
    "A": "Je garde cap et vitesse : un voilier est privilégié",
    "B": "J’attends qu’il vienne sur tribord",
    "C": "Je m’écarte de sa route"
   },
   "correct": "C",
   "explanation": "Deux boules noires : navire non maître de sa manœuvre. Il ne peut pas s’écarter ; il est privilégié sur tous les autres, voiliers compris.",
   "figure": {
    "fig": "shapes",
    "shapes": "ball,ball"
   },
   "tags": [
    "regles-barre",
    "navires-speciaux"
   ],
   "concept": "regle-priorite-nuc"
  },
  {
   "id": "var_regle-priorite-nuc_3",
   "sectionId": "mod3_sec3",
   "question": "De nuit, en bateau à moteur, vous voyez ces feux droit devant (aucun feu de tête de mât). Que faites-vous ?",
   "options": {
    "A": "Je m’écarte de sa route",
    "B": "Je garde mon cap et ma vitesse",
    "C": "J’accélère pour passer devant lui"
   },
   "correct": "A",
   "explanation": "Deux feux rouges superposés et les feux de côté : navire non maître de sa manœuvre, avec erre, qui vient vers vous. Il ne peut pas s’écarter : c’est à vous de manœuvrer.",
   "figure": {
    "fig": "lights",
    "rows": "R|R|G . R",
    "view": "droit devant"
   },
   "tags": [
    "regles-barre",
    "navires-speciaux"
   ],
   "concept": "regle-priorite-nuc"
  },
  {
   "id": "var_regle-rattrapant-definition_1",
   "sectionId": "mod3_sec3",
   "question": "De nuit, vous vous rapprochez d’un navire dont vous ne voyez que le feu blanc de poupe. Quelle est votre situation ?",
   "options": {
    "A": "Routes croisées : il est sur mon avant, je suis privilégié",
    "B": "Je suis rattrapant : je dois m’écarter",
    "C": "Il est rattrapant : je garde mon cap"
   },
   "correct": "B",
   "explanation": "Ne voir que le feu de poupe signifie que vous arrivez à plus de 22,5° sur l’arrière de son travers : vous êtes rattrapant et c’est à vous de vous écarter.",
   "tags": [
    "regles-barre"
   ],
   "concept": "regle-rattrapant-definition"
  },
  {
   "id": "var_regle-rattrapant-definition_2",
   "sectionId": "mod3_sec3",
   "question": "Un navire plus rapide s’approche de vous en venant de 30° sur l’arrière de votre travers tribord. Est-il rattrapant ?",
   "options": {
    "A": "Non",
    "B": "Oui",
    "C": "Seulement s’il s’agit d’un voilier"
   },
   "correct": "B",
   "explanation": "Est rattrapant le navire qui arrive de plus de 22,5° sur l’arrière du travers de l’autre. Ici 30° : il est rattrapant, il s’écarte et vous conservez cap et vitesse.",
   "tags": [
    "regles-barre"
   ],
   "concept": "regle-rattrapant-definition"
  },
  {
   "id": "var_regle-rattrapant-definition_3",
   "sectionId": "mod3_sec3",
   "question": "Vous rejoignez de nuit un navire plus lent et, à la limite de son secteur arrière, vous voyez tantôt son feu de poupe, tantôt son feu de côté. Que faites-vous ?",
   "options": {
    "A": "Je me considère comme rattrapant et je m’écarte",
    "B": "Je considère qu’il s’agit de routes croisées et je garde ma route",
    "C": "Je garde cap et vitesse et j’émets un son bref"
   },
   "correct": "A",
   "explanation": "Quand on ne sait pas avec certitude si l’on est rattrapant, on doit se considérer comme rattrapant et s’écarter de la route de l’autre.",
   "tags": [
    "regles-barre"
   ],
   "concept": "regle-rattrapant-definition"
  },
  {
   "id": "var_plongee-feux-ram_1",
   "sectionId": "mod4_sec3",
   "question": "De nuit, près d’un tombant réputé, un bateau à l’arrêt montre ces feux. De quel navire peut-il s’agir ?",
   "options": {
    "A": "Un navire de pêche stoppé sur ses engins",
    "B": "Un bateau pilote en attente",
    "C": "Un bateau de plongée",
    "D": "Un navire non maître de sa manœuvre"
   },
   "correct": "C",
   "explanation": "Rouge-blanc-rouge : navire à capacité de manœuvre restreinte, ce que montre de nuit un bateau soutenant des plongeurs. On passe à plus de 100 m.",
   "figure": {
    "fig": "lights",
    "rows": "R|W|R"
   },
   "tags": [
    "navires-speciaux",
    "loisirs"
   ],
   "concept": "plongee-feux-ram"
  },
  {
   "id": "var_plongee-feux-ram_2",
   "sectionId": "mod4_sec3",
   "question": "De jour, un bateau de plongée signale ses plongeurs par le pavillon A. Quels feux montre-t-il de nuit ?",
   "options": {
    "A": "Deux feux rouges superposés",
    "B": "Un feu blanc au-dessus d’un feu rouge, en tête de mât",
    "C": "Un feu vert au-dessus d’un feu blanc",
    "D": "Un feu rouge, un blanc et un rouge superposés"
   },
   "correct": "D",
   "explanation": "De nuit, le bateau soutenant des plongeurs montre les feux d’un navire à capacité de manœuvre restreinte : rouge-blanc-rouge. Blanc sur rouge est le bateau pilote.",
   "tags": [
    "navires-speciaux",
    "loisirs"
   ],
   "concept": "plongee-feux-ram"
  },
  {
   "id": "var_plongee-feux-ram_3",
   "sectionId": "mod4_sec3",
   "question": "Un bateau de plongée de 8 m soutient des plongeurs de nuit. Doit-il montrer les feux rouge-blanc-rouge ?",
   "options": {
    "A": "Non, il mesure moins de 12 m",
    "B": "Oui, en opération de plongée"
   },
   "correct": "B",
   "explanation": "Les navires de moins de 12 m sont dispensés des feux de capacité de manœuvre restreinte, sauf en opération de plongée : le bateau de plongée montre rouge-blanc-rouge.",
   "tags": [
    "navires-speciaux",
    "loisirs"
   ],
   "concept": "plongee-feux-ram"
  },
  {
   "id": "var_regle-risque-feux-cote_1",
   "sectionId": "mod3_sec3",
   "question": "De nuit, vous voyez ces feux droit devant et ils se rapprochent. Que signifie le fait de voir à la fois le feu vert et le feu rouge ?",
   "options": {
    "A": "Le navire vous montre son flanc tribord",
    "B": "Le navire est stoppé",
    "C": "Le navire va passer sur votre arrière",
    "D": "Le navire vient droit sur vous : risque d’abordage"
   },
   "correct": "D",
   "explanation": "Voir les deux feux de côté d’un navire, c’est le voir de face : il vient vers vous et il y a risque d’abordage. Il faut réagir tôt.",
   "figure": {
    "fig": "lights",
    "rows": "W|G . R",
    "view": "droit devant"
   },
   "tags": [
    "regles-barre",
    "feux-navires"
   ],
   "concept": "regle-risque-feux-cote",
   "near": [
    "var_regle-risque-feux-cote_3",
    "var_regle-routes-opposees_1"
   ]
  },
  {
   "id": "var_regle-risque-feux-cote_2",
   "sectionId": "mod3_sec3",
   "question": "De nuit, un navire sur votre avant vous montrait son feu rouge ; il vous montre maintenant son feu rouge et son feu vert. Que s’est-il passé ?",
   "options": {
    "A": "Il vient désormais vers vous : risque d’abordage",
    "B": "Il a changé de route et s’éloigne de la vôtre",
    "C": "Il s’est mis au mouillage et a allumé ses feux de côté"
   },
   "correct": "A",
   "explanation": "Quand on voit apparaître les deux feux de côté, le navire présente son avant : il fait route vers vous et il y a risque d’abordage.",
   "tags": [
    "regles-barre"
   ],
   "concept": "regle-risque-feux-cote"
  },
  {
   "id": "var_regle-risque-feux-cote_3",
   "sectionId": "mod3_sec3",
   "question": "En bateau à moteur, de nuit, vous apercevez sur votre avant le feu de tête de mât, le feu rouge et le feu vert d’un navire, dont le relèvement ne change pas. Que faites-vous ?",
   "options": {
    "A": "Je garde mon cap et ma vitesse",
    "B": "Je viens sur bâbord",
    "C": "Je viens sur tribord"
   },
   "correct": "C",
   "explanation": "Feu de tête de mât et deux feux de côté : un navire à moteur vient droit sur vous, avec un relèvement constant, donc risque d’abordage. Entre navires à moteur en routes opposées, chacun vient sur tribord, tôt et franchement.",
   "tags": [
    "regles-barre",
    "feux-navires"
   ],
   "concept": "regle-risque-feux-cote",
   "near": [
    "var_regle-risque-feux-cote_1",
    "var_regle-routes-opposees_1"
   ]
  },
  {
   "id": "var_regle-risque-feux-cote_4",
   "sectionId": "mod3_sec3",
   "question": "De nuit, laquelle de ces situations indique le plus clairement un risque d’abordage ?",
   "options": {
    "A": "Je vois le seul feu de poupe d’un navire plus rapide qui s’éloigne",
    "B": "Je vois les deux feux de côté d’un navire qui se rapproche",
    "C": "Je vois sur mon tribord le feu vert d’un navire dont le relèvement change",
    "D": "Je vois un feu blanc fixe sur la côte"
   },
   "correct": "B",
   "explanation": "Voir à la fois le feu vert et le feu rouge d’un navire qui se rapproche signifie qu’il vient vers vous : il y a risque d’abordage.",
   "tags": [
    "regles-barre"
   ],
   "concept": "regle-risque-feux-cote"
  },
  {
   "id": "var_regle-veille_1",
   "sectionId": "mod3_sec3",
   "question": "Qu’est-ce qu’« assurer la veille » à bord d’un navire ?",
   "options": {
    "A": "Écouter la météo marine avant de partir et à chaque bulletin",
    "B": "Surveiller en permanence les alentours par la vue et l’ouïe",
    "C": "Vérifier le compas toutes les heures",
    "D": "Garder la VHF allumée la nuit seulement, sur le canal 16"
   },
   "correct": "B",
   "explanation": "La veille consiste à surveiller en permanence, par la vue et l’ouïe (et tout moyen disponible), ce qui se passe autour du navire pour apprécier la situation et le risque d’abordage.",
   "tags": [
    "regles-barre"
   ],
   "concept": "regle-veille"
  },
  {
   "id": "var_regle-veille_2",
   "sectionId": "mod3_sec3",
   "question": "Par beau temps, en plein jour, dans un lagon peu fréquenté, la veille est-elle obligatoire ?",
   "options": {
    "A": "Non, de jour elle est facultative",
    "B": "Oui, en permanence",
    "C": "Seulement au-delà de 2 milles d’un abri"
   },
   "correct": "B",
   "explanation": "La veille visuelle et auditive est obligatoire en permanence, de jour comme de nuit, quelles que soient la météo et la fréquentation.",
   "tags": [
    "regles-barre"
   ],
   "concept": "regle-veille",
   "near": [
    "exam_q1_17"
   ]
  },
  {
   "id": "var_regle-veille_3",
   "sectionId": "mod3_sec3",
   "question": "En route, le pilote d’un bateau à moteur reste longtemps les yeux fixés sur l’écran de son GPS sans regarder dehors. Qu’en pensez-vous ?",
   "options": {
    "A": "C’est permis si personne n’est en vue au départ et que le GPS a une alarme",
    "B": "C’est permis de jour, par beau temps",
    "C": "C’est un manquement à la veille"
   },
   "correct": "C",
   "explanation": "Le GPS aide à la navigation mais ne remplace pas la veille : le pilote doit surveiller en permanence les alentours, par la vue et l’ouïe.",
   "tags": [
    "regles-barre"
   ],
   "concept": "regle-veille"
  },
  {
   "id": "var_regle-veille_4",
   "sectionId": "mod3_sec3",
   "question": "La veille auditive consiste notamment à :",
   "options": {
    "A": "Être attentif aux signaux sonores des autres navires",
    "B": "Écouter uniquement la VHF, la veille radio remplaçant la veille sonore",
    "C": "Couper son moteur toutes les dix minutes",
    "D": "Écouter la radio pour la météo, à chaque bulletin du matin"
   },
   "correct": "A",
   "explanation": "La veille est visuelle et auditive : il faut entendre les signaux sonores des autres navires (corne, cloche…), en particulier par visibilité réduite, et couper ce qui fait du bruit à bord si nécessaire.",
   "tags": [
    "regles-barre"
   ],
   "concept": "regle-veille"
  },
  {
   "id": "var_port-3-rouges_1",
   "sectionId": "mod3_sec2",
   "question": "À l’entrée d’un port, quelle différence entre trois feux rouges fixes et trois feux rouges à éclats ?",
   "options": {
    "A": "Fixes : passage interdit, attendre ; à éclats : danger grave, port fermé",
    "B": "Aucune, les deux signifient la même chose",
    "C": "Fixes : danger grave ; à éclats : passage interdit",
    "D": "Fixes : circulation à double sens ; à éclats : passage interdit, attendre"
   },
   "correct": "A",
   "explanation": "Trois rouges fixes (ou à occultations lentes) : passage interdit, attendre. Trois rouges à éclats : danger grave, port fermé, message d’urgence.",
   "tags": [
    "signaux-portuaires"
   ],
   "concept": "port-3-rouges",
   "near": [
    "q_3_2_2"
   ]
  },
  {
   "id": "var_port-3-rouges_2",
   "sectionId": "mod3_sec2",
   "question": "Vous rentrez de la pêche et le signal d’entrée du port montre ces trois feux fixes. Que faites-vous ?",
   "options": {
    "A": "J’entre en serrant la droite",
    "B": "J’entre en émettant un son prolongé à l’approche",
    "C": "J’entre en dehors du chenal",
    "D": "J’attends à l’extérieur que le signal change"
   },
   "correct": "D",
   "explanation": "Trois feux rouges fixes : passage interdit, les navires doivent attendre (la circulation est sans doute ouverte dans l’autre sens). Sans feu jaune, aucune exception hors chenal.",
   "figure": {
    "fig": "port",
    "lights": "RRR"
   },
   "tags": [
    "signaux-portuaires"
   ],
   "concept": "port-3-rouges"
  },
  {
   "id": "var_brume-1-long-2-brefs_1",
   "sectionId": "mod3_sec1",
   "question": "Dans la brume, vous naviguez à la voile seule. Quel signal émettez-vous ?",
   "options": {
    "A": "Un son prolongé toutes les 2 minutes",
    "B": "Deux sons prolongés, toutes les 2 minutes",
    "C": "Des coups de cloche rapides pendant 5 secondes",
    "D": "Un son prolongé suivi de deux sons brefs"
   },
   "correct": "D",
   "explanation": "Par visibilité réduite, le voilier émet un son prolongé suivi de deux sons brefs, toutes les 2 minutes au plus, comme les navires gênés dans leur manœuvre.",
   "tags": [
    "signaux-sonores"
   ],
   "concept": "brume-1-long-2-brefs"
  },
  {
   "id": "var_brume-1-long-2-brefs_2",
   "sectionId": "mod3_sec1",
   "question": "Dans la brume, un remorqueur qui traîne une barge émet, toutes les deux minutes :",
   "options": {
    "A": "Un son prolongé suivi de deux sons brefs",
    "B": "Un son prolongé suivi de trois sons brefs",
    "C": "Deux sons prolongés",
    "D": "Un son prolongé"
   },
   "correct": "A",
   "explanation": "Le remorqueur émet un long + deux brefs, comme le voilier, le pêcheur ou les navires gênés. Le remorqué (s’il a un équipage) répond par un long + trois brefs.",
   "tags": [
    "signaux-sonores",
    "remorquage"
   ],
   "concept": "brume-1-long-2-brefs"
  },
  {
   "id": "var_brume-1-long-2-brefs_3",
   "sectionId": "mod3_sec1",
   "question": "Par visibilité réduite, lequel de ces navires n’émet pas ce signal ?",
   "options": {
    "A": "Un navire en action de pêche",
    "B": "Un navire à moteur faisant route normalement",
    "C": "Un navire à capacité de manœuvre restreinte",
    "D": "Un voilier"
   },
   "correct": "B",
   "explanation": "Un long + deux brefs : voilier, pêche, remorqueur, non maître de sa manœuvre, capacité restreinte, tirant d’eau. Le navire à moteur qui fait route normalement émet un seul son prolongé.",
   "figure": {
    "fig": "sound",
    "pattern": "-.."
   },
   "tags": [
    "signaux-sonores"
   ],
   "concept": "brume-1-long-2-brefs"
  },
  {
   "id": "var_cap-sens-virage_1",
   "sectionId": "bonus_sec2",
   "question": "Vous faites route au 300°. Vous devez prendre le cap 030°. De quel côté tournez-vous ?",
   "options": {
    "A": "À gauche",
    "B": "À droite",
    "C": "Indifféremment"
   },
   "correct": "B",
   "explanation": "Du 300° au 030°, en passant par le 360°, l’écart est de 90° en tournant à droite (contre 270° à gauche). On tourne toujours du côté le plus court.",
   "tags": [
    "regles-barre",
    "pratique"
   ],
   "concept": "cap-sens-virage"
  },
  {
   "id": "var_cap-sens-virage_2",
   "sectionId": "bonus_sec2",
   "question": "Vous faites route au 160°. Vous devez prendre le cap 040°. Quelle manœuvre effectuez-vous ?",
   "options": {
    "A": "Je tourne à droite",
    "B": "Je tourne indifféremment d’un côté ou de l’autre",
    "C": "Je tourne à gauche"
   },
   "correct": "C",
   "explanation": "Le cap diminue de 120° (160° → 040°) : on tourne à gauche, le côté le plus court (à droite il faudrait tourner de 240°).",
   "tags": [
    "regles-barre",
    "pratique"
   ],
   "concept": "cap-sens-virage"
  },
  {
   "id": "var_cap-sens-virage_3",
   "sectionId": "bonus_sec2",
   "question": "Vous faites route au 010°. Vous devez venir au 340°. De quel côté tournez-vous ?",
   "options": {
    "A": "À gauche, de 30°",
    "B": "À droite, de 330°",
    "C": "À droite, de 30°"
   },
   "correct": "A",
   "explanation": "Du 010° au 340°, le plus court est de passer par le nord en tournant à gauche : 30°. À droite, il faudrait tourner de 330°.",
   "tags": [
    "regles-barre",
    "pratique"
   ],
   "concept": "cap-sens-virage"
  },
  {
   "id": "var_cap-sens-virage_4",
   "sectionId": "bonus_sec2",
   "question": "Vous faites route au 045° et devez prendre le cap 300°. Quelle manœuvre est la plus courte ?",
   "options": {
    "A": "Tourner à droite de 255°",
    "B": "Tourner à droite de 105°",
    "C": "Tourner à gauche de 255°",
    "D": "Tourner à gauche de 105°"
   },
   "correct": "D",
   "explanation": "Du 045° au 300° : à droite, il faudrait tourner de 255° ; à gauche, en passant par le nord, seulement 105° (45° jusqu’au 000°, puis 60°). On tourne du côté où l’écart est inférieur à 180°.",
   "tags": [
    "regles-barre",
    "pratique"
   ],
   "concept": "cap-sens-virage"
  },
  {
   "id": "var_peche-feux-erre_1",
   "sectionId": "mod2_sec2",
   "question": "De nuit, un fileyeur en action de pêche, stoppé sur ses filets (qui s’étendent à moins de 150 m), montre :",
   "options": {
    "A": "Rouge sur blanc, avec ses feux de côté et son feu de poupe",
    "B": "Rouge sur blanc seulement",
    "C": "Ses feux de côté seulement",
    "D": "Rouge sur blanc et un feu de mouillage"
   },
   "correct": "B",
   "explanation": "Sans erre, un navire de pêche montre seulement ses feux de pêche. Il n’ajoute ses feux de côté et son feu de poupe que lorsqu’il fait route.",
   "tags": [
    "peche"
   ],
   "concept": "peche-feux-erre"
  },
  {
   "id": "var_peche-feux-erre_2",
   "sectionId": "mod2_sec2",
   "question": "De nuit, vous ne voyez que ces deux feux superposés, sans aucun feu de côté ni feu de poupe. Que pouvez-vous dire de ce chalutier ?",
   "options": {
    "A": "Il rentre au port",
    "B": "Il fait route et vous le voyez de l’arrière",
    "C": "Il est en pêche, sans erre",
    "D": "Il fait route vers vous"
   },
   "correct": "C",
   "explanation": "Vert sur blanc seul : chalutier en pêche sans erre. S’il faisait route, il montrerait aussi ses feux de côté et son feu de poupe.",
   "figure": {
    "fig": "lights",
    "rows": "G|W"
   },
   "tags": [
    "peche"
   ],
   "concept": "peche-feux-erre"
  },
  {
   "id": "var_peche-feux-erre_3",
   "sectionId": "mod2_sec2",
   "question": "Ce navire de pêche, dont vous voyez ces feux, a-t-il de l’erre ?",
   "options": {
    "A": "Oui, il chalute",
    "B": "Oui, il se déplace",
    "C": "Non, il est au mouillage"
   },
   "correct": "B",
   "explanation": "Rouge sur blanc = navire en pêche autre que chalutier. Le feu vert est son feu de côté tribord : un navire de pêche ne l’allume que lorsqu’il a de l’erre.",
   "figure": {
    "fig": "lights",
    "rows": "R .|W .|. G",
    "view": "vu par tribord"
   },
   "tags": [
    "peche"
   ],
   "concept": "peche-feux-erre"
  },
  {
   "id": "var_peche-feux-erre_4",
   "sectionId": "mod2_sec2",
   "question": "Un chalutier de 15 m, stoppé en pêche (vert sur blanc seul), reprend sa route en traînant son chalut. Quels feux ajoute-t-il à son vert sur blanc ?",
   "options": {
    "A": "Ses feux de côté et son feu de poupe",
    "B": "Un feu de mouillage à l’avant",
    "C": "Un feu jaune de remorquage à l’arrière",
    "D": "Aucun : son vert sur blanc suffit"
   },
   "correct": "A",
   "explanation": "Avec de l’erre, un navire de pêche ajoute à ses feux de pêche ses feux de côté et son feu de poupe (le feu de tête de mât n’est obligatoire qu’à partir de 50 m pour un chalutier).",
   "tags": [
    "peche"
   ],
   "concept": "peche-feux-erre"
  },
  {
   "id": "var_peche-couple-projecteur_1",
   "sectionId": "mod2_sec2",
   "question": "De nuit, deux chalutiers pêchent en couple (pêche au bœuf). Où chacun dirige-t-il son projecteur ?",
   "options": {
    "A": "Vers le ciel",
    "B": "Vers l’arrière, sur le chalut tendu entre les deux",
    "C": "Vers l’avant, en direction de l’autre navire",
    "D": "Vers les navires qui s’approchent, pour les avertir"
   },
   "correct": "C",
   "explanation": "Deux chalutiers pêchant en couple montrent chacun leurs feux de chalutier et dirigent un projecteur vers l’avant, en direction de l’autre navire du couple.",
   "tags": [
    "peche"
   ],
   "concept": "peche-couple-projecteur",
   "near": [
    "gen_mod2_sec2_6",
    "var_peche-couple-projecteur_4"
   ]
  },
  {
   "id": "var_peche-couple-projecteur_2",
   "sectionId": "mod2_sec2",
   "question": "De nuit, vous apercevez deux chalutiers proches l’un de l’autre, chacun dirigeant un projecteur vers l’avant et vers l’autre navire. Que devez-vous faire ?",
   "options": {
    "A": "Ne jamais passer entre eux",
    "B": "Passer entre eux à vitesse réduite",
    "C": "Ne passer entre eux qu’après un son prolongé"
   },
   "correct": "A",
   "explanation": "Ce projecteur signale une pêche en couple : les deux chalutiers tirent ensemble un même chalut. Passer entre eux, c’est se jeter dans le chalut.",
   "tags": [
    "peche"
   ],
   "concept": "peche-couple-projecteur"
  },
  {
   "id": "var_peche-couple-projecteur_3",
   "sectionId": "mod2_sec2",
   "question": "Quels feux montrent de nuit deux chalutiers pêchant en couple ?",
   "options": {
    "A": "Un seul vert sur blanc pour les deux navires, porté par le plus grand",
    "B": "Chacun deux feux rouges superposés",
    "C": "Chacun rouge sur blanc et un projecteur dirigé vers l’arrière, sur le chalut",
    "D": "Chacun ses feux de chalutier et un projecteur vers l’avant"
   },
   "correct": "D",
   "explanation": "En pêche à couple, chaque chalutier garde ses propres feux (vert sur blanc) et éclaire de son projecteur l’avant, en direction de l’autre navire du couple.",
   "tags": [
    "peche"
   ],
   "concept": "peche-couple-projecteur"
  },
  {
   "id": "var_peche-couple-projecteur_4",
   "sectionId": "mod2_sec2",
   "question": "De nuit, un chalutier dirige un projecteur vers l’avant, en direction d’un autre chalutier. Que signale-t-il ?",
   "options": {
    "A": "Un appel de détresse à l’autre navire",
    "B": "Une pêche en couple",
    "C": "Un chalut croché sur le fond",
    "D": "Une demande de pilote pour entrer au port"
   },
   "correct": "B",
   "explanation": "Le projecteur dirigé vers l’avant et vers l’autre navire est le signal de la pêche à couple : deux chalutiers tirent ensemble un même chalut.",
   "tags": [
    "peche"
   ],
   "concept": "peche-couple-projecteur",
   "near": [
    "var_peche-couple-projecteur_1"
   ]
  },
  {
   "id": "var_peche-engins-150m_1",
   "sectionId": "mod2_sec2",
   "question": "De nuit, ce navire de pêche stoppé montre ces feux : rouge sur blanc et, plus bas sur votre droite, un feu blanc. De quel côté ne devez-vous pas passer ?",
   "options": {
    "A": "Du côté gauche",
    "B": "Indifféremment d’un côté ou de l’autre",
    "C": "Du côté droit"
   },
   "correct": "C",
   "explanation": "Le feu blanc supplémentaire, plus bas, indique la direction d’un engin de pêche déployé à plus de 150 m. On ne passe pas de ce côté.",
   "figure": {
    "fig": "lights",
    "rows": "R .|W .|. W"
   },
   "tags": [
    "peche"
   ],
   "concept": "peche-engins-150m"
  },
  {
   "id": "var_peche-engins-150m_2",
   "sectionId": "mod2_sec2",
   "question": "De jour, un palangrier dont la ligne s’étend à 300 m montre, en plus de ses deux cônes réunis par la pointe :",
   "options": {
    "A": "Une boule noire",
    "B": "Un cône pointe en haut, du côté de l’engin",
    "C": "Un cône pointe en bas, du côté opposé à l’engin",
    "D": "Un cylindre noir"
   },
   "correct": "B",
   "explanation": "Un navire de pêche (autre que chalutier) dont l’engin s’étend horizontalement à plus de 150 m ajoute de jour un cône pointe en haut, de nuit un feu blanc, dans la direction de l’engin.",
   "tags": [
    "peche"
   ],
   "concept": "peche-engins-150m"
  },
  {
   "id": "var_peche-engins-150m_3",
   "sectionId": "mod2_sec2",
   "question": "Au-delà de quelle longueur d’engin déployé horizontalement un navire de pêche (autre que chalutier) doit-il en signaler la direction ?",
   "options": {
    "A": "50 m",
    "B": "100 m",
    "C": "200 m",
    "D": "150 m"
   },
   "correct": "D",
   "explanation": "Au-delà de 150 m d’engin déployé horizontalement, le navire en signale la direction : feu blanc la nuit, cône pointe en haut le jour.",
   "tags": [
    "peche"
   ],
   "concept": "peche-engins-150m"
  },
  {
   "id": "var_peche-engins-150m_4",
   "sectionId": "mod2_sec2",
   "question": "Un fileyeur montre deux cônes réunis par la pointe et, sur son bord tribord, un cône pointe en haut. Par où passez-vous ?",
   "options": {
    "A": "Par son bâbord",
    "B": "Par son tribord",
    "C": "Au ras de son étrave"
   },
   "correct": "A",
   "explanation": "Le cône pointe en haut indique le côté où l’engin s’étend à plus de 150 m. On passe donc de l’autre côté, ici par son bâbord.",
   "tags": [
    "peche"
   ],
   "concept": "peche-engins-150m"
  },
  {
   "id": "var_peche-definition_1",
   "sectionId": "mod2_sec2",
   "question": "Lequel de ces navires est « en action de pêche » au sens des règles de barre ?",
   "options": {
    "A": "Un poti marara pêchant à la traîne",
    "B": "Un bonitier pêchant à la canne en faisant route",
    "C": "Un bateau de plaisance avec des cannes à la traîne",
    "D": "Un navire en train de relever une palangre"
   },
   "correct": "D",
   "explanation": "Seuls les engins qui réduisent la capacité de manœuvre (filets, chaluts, palangres, sennes) font d’un navire un « navire en action de pêche ». La traîne et la pêche à la canne ne comptent pas.",
   "tags": [
    "peche"
   ],
   "concept": "peche-definition"
  },
  {
   "id": "var_peche-definition_2",
   "sectionId": "mod2_sec2",
   "question": "En bateau à moteur, vous pêchez à la traîne. Un voilier marchant à la voile croise votre route. Qui doit s’écarter ?",
   "options": {
    "A": "Le voilier",
    "B": "Vous",
    "C": "Celui qui voit l’autre sur son tribord"
   },
   "correct": "B",
   "explanation": "Pêcher à la traîne ne réduit pas la capacité de manœuvre : vous n’êtes pas « en action de pêche », mais un navire à moteur ordinaire, qui doit s’écarter du voilier.",
   "tags": [
    "peche",
    "regles-barre"
   ],
   "concept": "peche-definition",
   "near": [
    "gen_mod4_sec3_6"
   ]
  },
  {
   "id": "var_peche-definition_3",
   "sectionId": "mod2_sec2",
   "question": "Pourquoi un navire qui pêche au filet est-il privilégié sur les navires à moteur et les voiliers ?",
   "options": {
    "A": "Parce que ses engins réduisent sa capacité de manœuvre",
    "B": "Parce qu’il s’agit d’un professionnel qui gagne sa vie en mer",
    "C": "Parce qu’il est plus grand",
    "D": "Parce qu’il est plus lent qu’un navire à moteur"
   },
   "correct": "A",
   "explanation": "Un navire est « en action de pêche » lorsque ses engins (filets, chaluts, palangres…) réduisent sa capacité de manœuvre : c’est pour cela qu’il est privilégié.",
   "tags": [
    "peche"
   ],
   "concept": "peche-definition"
  },
  {
   "id": "var_peche-definition_4",
   "sectionId": "mod2_sec2",
   "question": "Dans le lagon, un bateau de pêche relève un long filet maillant. Un bateau de plaisance à moteur s’approche. Qui doit s’écarter ?",
   "options": {
    "A": "Le bateau de pêche",
    "B": "Celui qui voit l’autre sur son tribord",
    "C": "Le bateau de plaisance"
   },
   "correct": "C",
   "explanation": "Avec son filet, le pêcheur est un navire en action de pêche : sa capacité de manœuvre est réduite et il est privilégié sur le navire à moteur.",
   "tags": [
    "peche",
    "regles-barre"
   ],
   "concept": "peche-definition"
  },
  {
   "id": "var_echoue-feux_1",
   "sectionId": "mod2_sec3",
   "question": "De nuit, près du récif, un navire immobile de moins de 50 m montre ces feux : un feu blanc et deux feux rouges superposés. Que signalent-ils ?",
   "options": {
    "A": "Un navire non maître de sa manœuvre, avec erre",
    "B": "Un navire échoué",
    "C": "Un navire handicapé par son tirant d’eau",
    "D": "Un navire simplement au mouillage"
   },
   "correct": "B",
   "explanation": "Feu de mouillage + deux feux rouges superposés : navire échoué. Le navire au mouillage n’aurait pas les deux rouges.",
   "figure": {
    "fig": "lights",
    "rows": "W .|. R|. R"
   },
   "tags": [
    "navires-speciaux"
   ],
   "concept": "echoue-feux"
  },
  {
   "id": "var_echoue-feux_2",
   "sectionId": "mod2_sec3",
   "question": "De nuit, que montre un navire de plus de 50 m échoué ?",
   "options": {
    "A": "Trois feux rouges superposés et un seul feu de mouillage à l’avant",
    "B": "Un seul feu de mouillage",
    "C": "Rouge-blanc-rouge superposés, en plus de ses deux feux de mouillage",
    "D": "Deux feux de mouillage et deux rouges superposés"
   },
   "correct": "D",
   "explanation": "Un navire échoué montre ses feux de mouillage et deux feux rouges superposés. À partir de 50 m, il a deux feux de mouillage, celui de l’avant plus haut que celui de l’arrière.",
   "tags": [
    "navires-speciaux"
   ],
   "concept": "echoue-feux",
   "near": [
    "gen_mod2_sec3_1"
   ]
  },
  {
   "id": "var_echoue-feux_3",
   "sectionId": "mod2_sec3",
   "question": "La nuit, un navire montre ses feux de mouillage et deux feux rouges superposés. Que montrerait-il de jour ?",
   "options": {
    "A": "Trois boules noires superposées",
    "B": "Une boule noire à l’avant",
    "C": "Deux boules noires superposées",
    "D": "Un cylindre noir en tête de mât"
   },
   "correct": "A",
   "explanation": "Feux de mouillage + deux rouges = navire échoué ; de jour, il montre trois boules noires superposées.",
   "tags": [
    "navires-speciaux",
    "marques-jour"
   ],
   "concept": "echoue-feux",
   "near": [
    "var_nuc-boules_2"
   ]
  },
  {
   "id": "var_echoue-feux_4",
   "sectionId": "mod2_sec3",
   "question": "De nuit, qu’est-ce qui distingue un navire échoué d’un navire au mouillage ?",
   "options": {
    "A": "L’échoué éteint tous ses feux, sauf un feu blanc à l’avant",
    "B": "L’échoué montre un feu vert au-dessus de ses feux de mouillage",
    "C": "L’échoué ajoute deux rouges superposés à ses feux de mouillage",
    "D": "Rien ne les distingue"
   },
   "correct": "C",
   "explanation": "Échoué = feux de mouillage + les deux feux rouges du navire qui ne peut plus bouger.",
   "tags": [
    "navires-speciaux"
   ],
   "concept": "echoue-feux",
   "near": [
    "gen_mod2_sec3_1"
   ]
  },
  {
   "id": "var_brume-remorque_1",
   "sectionId": "mod3_sec1",
   "question": "Dans la brume, juste après le signal d’un remorqueur, vous entendez ce signal. Qui l’émet ?",
   "options": {
    "A": "Le navire remorqué",
    "B": "Un navire non maître de sa manœuvre qui suit le remorqueur",
    "C": "Un navire échoué",
    "D": "Un navire à moteur stoppé"
   },
   "correct": "A",
   "explanation": "Un son prolongé suivi de trois sons brefs : signal du navire remorqué (s’il a un équipage), émis juste après celui du remorqueur.",
   "figure": {
    "fig": "sound",
    "pattern": "-..."
   },
   "tags": [
    "signaux-sonores",
    "remorquage"
   ],
   "concept": "brume-remorque"
  },
  {
   "id": "var_brume-remorque_2",
   "sectionId": "mod3_sec1",
   "question": "Dans la brume, quels signaux émettent un remorqueur et le navire qu’il remorque (avec équipage) ?",
   "options": {
    "A": "Remorqueur : un long et trois brefs ; remorqué : un long et deux brefs",
    "B": "Les deux : deux sons prolongés",
    "C": "Remorqueur : un long et deux brefs ; remorqué : un long et trois brefs",
    "D": "Remorqueur : un son prolongé ; remorqué : rien"
   },
   "correct": "C",
   "explanation": "Le remorqueur émet un long + deux brefs ; le remorqué, un bref de plus : un long + trois brefs.",
   "tags": [
    "signaux-sonores",
    "remorquage"
   ],
   "concept": "brume-remorque"
  },
  {
   "id": "var_brume-remorque_3",
   "sectionId": "mod3_sec1",
   "question": "Vous êtes remorqué dans la brume et vous avez un équipage à bord. Quand émettez-vous votre signal sonore ?",
   "options": {
    "A": "En même temps que le remorqueur",
    "B": "Juste après le signal du remorqueur",
    "C": "Seulement si vous entendez un autre navire",
    "D": "Jamais : seul le remorqueur se signale"
   },
   "correct": "B",
   "explanation": "Le navire remorqué (avec équipage) émet un long + trois brefs, si possible juste après le signal du remorqueur.",
   "tags": [
    "signaux-sonores",
    "remorquage"
   ],
   "concept": "brume-remorque"
  },
  {
   "id": "var_brume-remorque_4",
   "sectionId": "mod3_sec1",
   "question": "Par visibilité réduite, le signal du navire remorqué comporte, par rapport à celui du remorqueur :",
   "options": {
    "A": "Un son prolongé de plus",
    "B": "Un son bref de moins",
    "C": "Exactement les mêmes sons",
    "D": "Un son bref de plus"
   },
   "correct": "D",
   "explanation": "Remorqueur : un long + deux brefs ; remorqué : un long + trois brefs. « Un bref de plus que le remorqueur. »",
   "tags": [
    "signaux-sonores",
    "remorquage"
   ],
   "concept": "brume-remorque"
  },
  {
   "id": "var_son-depassement-chenal_1",
   "sectionId": "mod3_sec1",
   "question": "Dans un chenal étroit, vous voulez dépasser par son bâbord un navire plus lent qui vous précède. Quel signal émettez-vous ?",
   "options": {
    "A": "Deux sons prolongés suivis d’un son bref",
    "B": "Deux sons prolongés suivis de deux sons brefs",
    "C": "Deux sons brefs",
    "D": "Un son prolongé suivi de deux sons brefs"
   },
   "correct": "B",
   "explanation": "Dans un chenal, le rattrapant annonce : deux longs + un bref = par tribord ; deux longs + deux brefs = par bâbord (le nombre de brefs reprend le code de manœuvre).",
   "tags": [
    "signaux-sonores"
   ],
   "concept": "son-depassement-chenal",
   "near": [
    "var_son-depassement-chenal_3"
   ]
  },
  {
   "id": "var_son-depassement-chenal_2",
   "sectionId": "mod3_sec1",
   "question": "Vous remontez un chenal étroit. Un navire plus rapide, derrière vous, émet ce signal. Par quel côté souhaite-t-il vous dépasser ?",
   "options": {
    "A": "Par votre tribord",
    "B": "Il ne souhaite pas dépasser : il vient sur bâbord",
    "C": "Il ne souhaite pas dépasser : il est stoppé",
    "D": "Par votre bâbord"
   },
   "correct": "D",
   "explanation": "Deux sons prolongés puis deux brefs : « je compte vous rattraper sur votre bâbord ». Avec un seul bref, ce serait par tribord.",
   "figure": {
    "fig": "sound",
    "pattern": "--.."
   },
   "tags": [
    "signaux-sonores"
   ],
   "concept": "son-depassement-chenal"
  },
  {
   "id": "var_son-depassement-chenal_3",
   "sectionId": "mod3_sec1",
   "question": "Dans un chenal étroit, vous voulez dépasser par tribord le navire qui vous précède. Quel signal émettez-vous ?",
   "options": {
    "A": "Deux sons prolongés suivis d’un son bref",
    "B": "Un son bref",
    "C": "Long, bref, long, bref",
    "D": "Deux sons prolongés suivis de deux sons brefs"
   },
   "correct": "A",
   "explanation": "Pour annoncer « je compte vous rattraper sur tribord » : deux sons prolongés et un son bref. Le dernier bref (1) = tribord.",
   "tags": [
    "signaux-sonores"
   ],
   "concept": "son-depassement-chenal",
   "near": [
    "var_son-depassement-chenal_1"
   ]
  },
  {
   "id": "var_son-accord-depassement_1",
   "sectionId": "mod3_sec1",
   "question": "Dans un chenal, le navire qui vous suit émet deux longs et un bref. Vous êtes d’accord pour le laisser passer. Que répondez-vous ?",
   "options": {
    "A": "Au moins cinq sons brefs",
    "B": "Un son bref",
    "C": "Long, bref, long, bref",
    "D": "Deux sons prolongés"
   },
   "correct": "C",
   "explanation": "Le navire rattrapé qui accepte le dépassement répond long-bref-long-bref (la lettre C en Morse) et manœuvre pour le faciliter.",
   "tags": [
    "signaux-sonores"
   ],
   "concept": "son-accord-depassement"
  },
  {
   "id": "var_son-accord-depassement_2",
   "sectionId": "mod3_sec1",
   "question": "Dans un chenal, vous avez demandé à dépasser ; le navire rattrapé répond long-bref-long-bref. Que faites-vous ?",
   "options": {
    "A": "Je dépasse avec prudence",
    "B": "J’attends derrière lui",
    "C": "Je stoppe"
   },
   "correct": "A",
   "explanation": "Long-bref-long-bref signifie « d’accord » : le rattrapé manœuvre pour faciliter le dépassement, que le rattrapant effectue avec prudence.",
   "tags": [
    "signaux-sonores"
   ],
   "concept": "son-accord-depassement"
  },
  {
   "id": "var_son-accord-depassement_3",
   "sectionId": "mod3_sec1",
   "question": "Dans un chenal, vous avez répondu long-bref-long-bref à un navire qui veut vous dépasser. Que devez-vous faire ensuite ?",
   "options": {
    "A": "Garder rigoureusement cap et vitesse sans rien changer",
    "B": "Manœuvrer pour faciliter le dépassement",
    "C": "Accélérer pour rester devant",
    "D": "Émettre cinq sons brefs"
   },
   "correct": "B",
   "explanation": "En chenal, le dépassement n’est possible que si le rattrapé manœuvre pour le permettre ; en répondant « d’accord », il s’engage à le faciliter.",
   "tags": [
    "signaux-sonores"
   ],
   "concept": "son-accord-depassement"
  },
  {
   "id": "var_son-accord-depassement_4",
   "sectionId": "mod3_sec1",
   "question": "Dans un chenal, quelle est la différence entre ces deux réponses du navire rattrapé : long-bref-long-bref, et au moins cinq sons brefs ?",
   "options": {
    "A": "La première signifie « dépassement impossible », la seconde « d’accord »",
    "B": "Les deux signifient « d’accord »",
    "C": "La première signifie « je viens sur tribord », la seconde « je bats en arrière »",
    "D": "La première signifie « d’accord », la seconde « dépassement impossible »"
   },
   "correct": "D",
   "explanation": "Long-bref-long-bref = d’accord, je facilite le dépassement. Au moins cinq brefs = dépassement impossible ou doute sur vos intentions.",
   "tags": [
    "signaux-sonores"
   ],
   "concept": "son-accord-depassement"
  },
  {
   "id": "var_son-durees_1",
   "sectionId": "mod3_sec1",
   "question": "Combien de temps dure un son prolongé ?",
   "options": {
    "A": "Environ 1 seconde",
    "B": "De 4 à 6 secondes",
    "C": "Environ 10 secondes",
    "D": "Au moins 30 secondes"
   },
   "correct": "B",
   "explanation": "Un son prolongé dure de 4 à 6 secondes ; un son bref, environ 1 seconde.",
   "tags": [
    "signaux-sonores"
   ],
   "concept": "son-durees",
   "near": [
    "var_son-durees_2"
   ]
  },
  {
   "id": "var_son-durees_2",
   "sectionId": "mod3_sec1",
   "question": "Combien de temps dure un son bref ?",
   "options": {
    "A": "Environ 1 seconde",
    "B": "De 4 à 6 secondes",
    "C": "Environ 3 secondes",
    "D": "Un dixième de seconde"
   },
   "correct": "A",
   "explanation": "Un son bref dure environ 1 seconde ; un son prolongé, de 4 à 6 secondes.",
   "tags": [
    "signaux-sonores"
   ],
   "concept": "son-durees",
   "near": [
    "var_son-durees_1"
   ]
  },
  {
   "id": "var_son-durees_3",
   "sectionId": "mod3_sec1",
   "question": "Vous émettez à la corne un son de 5 secondes. Comment est-il compris ?",
   "options": {
    "A": "Comme un son bref",
    "B": "Comme un son continu de détresse",
    "C": "Comme un son prolongé"
   },
   "correct": "C",
   "explanation": "Un son de 4 à 6 secondes est un son prolongé ; un son bref dure environ 1 seconde.",
   "tags": [
    "signaux-sonores"
   ],
   "concept": "son-durees"
  },
  {
   "id": "var_son-durees_4",
   "sectionId": "mod3_sec1",
   "question": "Pour annoncer « je viens sur tribord », vous appuyez une fois sur la corne pendant 5 secondes. Est-ce correct ?",
   "options": {
    "A": "Oui",
    "B": "Non"
   },
   "correct": "B",
   "explanation": "« Je viens sur tribord » = un son bref, d’environ 1 seconde. Un son de 4 à 6 secondes est un son prolongé, qui a un autre sens.",
   "tags": [
    "signaux-sonores"
   ],
   "concept": "son-durees"
  },
  {
   "id": "var_son-coude_1",
   "sectionId": "mod3_sec1",
   "question": "Par temps clair, vous approchez d’un coude de chenal qui masque la vue. De derrière le coude, vous entendez un son prolongé. Que signifie-t-il ?",
   "options": {
    "A": "Un navire en détresse demande de l’aide",
    "B": "Un navire caché signale sa présence",
    "C": "Un navire vient sur bâbord",
    "D": "Un navire au mouillage"
   },
   "correct": "B",
   "explanation": "À l’approche d’un coude masquant la vue, on émet un son prolongé ; un navire caché de l’autre côté y répond par un son prolongé.",
   "tags": [
    "signaux-sonores"
   ],
   "concept": "son-coude"
  },
  {
   "id": "var_son-coude_2",
   "sectionId": "mod3_sec1",
   "question": "Par temps clair, en suivant un chenal sinueux, dans quelle situation émettez-vous ce signal ?",
   "options": {
    "A": "Pour annoncer que je viens sur tribord",
    "B": "Pour demander à dépasser",
    "C": "À l’approche d’un coude masqué",
    "D": "Pour annoncer que je stoppe"
   },
   "correct": "C",
   "explanation": "Un son prolongé s’émet à l’approche d’un coude ou d’un obstacle qui empêche de voir les navires venant en sens inverse.",
   "figure": {
    "fig": "sound",
    "pattern": "-"
   },
   "tags": [
    "signaux-sonores"
   ],
   "concept": "son-coude"
  },
  {
   "id": "var_son-coude_3",
   "sectionId": "mod3_sec1",
   "question": "Un navire caché derrière un coude de chenal entend votre son prolongé. Que doit-il faire ?",
   "options": {
    "A": "Répondre par un son prolongé",
    "B": "Répondre par cinq sons brefs",
    "C": "Répondre par trois sons brefs",
    "D": "Ne rien faire"
   },
   "correct": "A",
   "explanation": "Le navire caché derrière le coude répond au son prolongé par un son prolongé : chacun sait alors qu’un autre navire arrive.",
   "tags": [
    "signaux-sonores"
   ],
   "concept": "son-coude"
  },
  {
   "id": "var_son-coude_4",
   "sectionId": "mod3_sec1",
   "question": "Dans un chenal étroit et sinueux, vous allez passer un coude derrière lequel vous ne voyez rien. Quelle est la bonne conduite ?",
   "options": {
    "A": "Émettre deux sons brefs et couper le virage pour gagner du temps",
    "B": "Accélérer pour dégager vite le passage",
    "C": "Émettre cinq sons brefs",
    "D": "Émettre un son prolongé, ralentir et serrer sur la droite"
   },
   "correct": "D",
   "explanation": "À l’approche d’un coude masqué : un son prolongé, une vitesse réduite et, comme toujours en chenal étroit, serrer le bord situé sur tribord.",
   "tags": [
    "signaux-sonores",
    "regles-barre"
   ],
   "concept": "son-coude"
  },
  {
   "id": "var_regle-chenal-serrer-tribord_1",
   "sectionId": "mod3_sec3",
   "question": "Vous entrez au port par un chenal étroit en venant du large et vous serrez le bord tribord du chenal. Quelles marques latérales longez-vous ?",
   "options": {
    "A": "Les marques rouges",
    "B": "Les marques vertes",
    "C": "Les marques jaunes"
   },
   "correct": "B",
   "explanation": "Dans un chenal étroit, on serre le bord situé sur son tribord. En venant du large (région AISM A), les marques vertes sont à tribord : on les longe.",
   "tags": [
    "regles-barre",
    "balisage-lateral"
   ],
   "concept": "regle-chenal-serrer-tribord"
  },
  {
   "id": "var_regle-chenal-serrer-tribord_2",
   "sectionId": "mod3_sec3",
   "question": "Vous sortez du port par un chenal étroit. De quel côté du chenal naviguez-vous ?",
   "options": {
    "A": "Au milieu du chenal",
    "B": "Près du bord situé sur votre bâbord",
    "C": "Près du bord situé sur votre tribord"
   },
   "correct": "C",
   "explanation": "On serre toujours le bord du chenal situé sur son tribord. En sortant du port, les marques rouges (bâbord en entrant) se trouvent à votre droite.",
   "tags": [
    "regles-barre",
    "balisage-lateral"
   ],
   "concept": "regle-chenal-serrer-tribord",
   "near": [
    "gen_mod3_sec3_4"
   ]
  },
  {
   "id": "var_regle-chenal-serrer-tribord_3",
   "sectionId": "mod3_sec3",
   "question": "Dans un chenal étroit, deux bateaux à moteur font route l’un vers l’autre. Comment se croisent-ils normalement ?",
   "options": {
    "A": "Chacun serre sa droite : ils se croisent bâbord sur bâbord",
    "B": "Chacun serre sa gauche : ils se croisent tribord sur tribord",
    "C": "Le plus petit s’arrête au milieu du chenal"
   },
   "correct": "A",
   "explanation": "Dans un chenal étroit, chacun navigue le plus près possible du bord situé sur son tribord : les navires se croisent bâbord sur bâbord.",
   "tags": [
    "regles-barre"
   ],
   "concept": "regle-chenal-serrer-tribord"
  },
  {
   "id": "var_regle-chenal-serrer-tribord_4",
   "sectionId": "mod3_sec3",
   "question": "Avec votre petit bateau à moteur, vous suivez le milieu d’un chenal étroit parce que l’eau y est plus profonde. Est-ce la bonne pratique ?",
   "options": {
    "A": "Oui",
    "B": "Non",
    "C": "Non, sauf si aucun navire n’est en vue"
   },
   "correct": "B",
   "explanation": "La règle du chenal étroit impose de serrer le bord situé sur tribord, pour laisser le milieu et l’autre côté aux navires qui arrivent en sens inverse ou qui ne peuvent naviguer que dans le chenal.",
   "tags": [
    "regles-barre"
   ],
   "concept": "regle-chenal-serrer-tribord"
  },
  {
   "id": "var_regle-vnm-statut_1",
   "sectionId": "mod3_sec3",
   "question": "Vous êtes en moto de mer et votre route croise celle d’une planche à voile. Qui doit s’écarter ?",
   "options": {
    "A": "La planche à voile",
    "B": "Celui qui voit l’autre sur son tribord",
    "C": "Vous, en moto de mer"
   },
   "correct": "C",
   "explanation": "Une moto de mer est un navire à moteur et une planche à voile est un voilier : le navire à moteur s’écarte du voilier.",
   "tags": [
    "regles-barre",
    "loisirs"
   ],
   "concept": "regle-vnm-statut"
  },
  {
   "id": "var_regle-vnm-statut_2",
   "sectionId": "mod3_sec3",
   "question": "Vous pilotez une moto de mer. Un bateau à moteur arrive sur votre tribord, en route de collision. Qui doit s’écarter ?",
   "options": {
    "A": "Vous, car vous voyez l’autre sur votre tribord",
    "B": "Le bateau à moteur, car une moto de mer est plus fragile",
    "C": "Le plus rapide des deux",
    "D": "Le bateau à moteur, car il voit la moto de mer sur son bâbord"
   },
   "correct": "A",
   "explanation": "Une moto de mer est un navire à moteur comme les autres : entre deux navires à moteur en routes croisées, celui qui voit l’autre sur son tribord s’écarte.",
   "tags": [
    "regles-barre",
    "loisirs"
   ],
   "concept": "regle-vnm-statut",
   "near": [
    "q_jeudi_2"
   ]
  },
  {
   "id": "var_regle-vnm-statut_3",
   "sectionId": "mod3_sec3",
   "question": "Deux motos de mer arrivent l’une vers l’autre en routes directement opposées. Que doivent-elles faire ?",
   "options": {
    "A": "Chacune vient sur bâbord",
    "B": "Chacune vient sur tribord",
    "C": "La plus rapide garde sa route, l’autre s’écarte"
   },
   "correct": "B",
   "explanation": "Les motos de mer sont des navires à moteur : en routes opposées, chacune vient sur tribord pour se croiser bâbord sur bâbord.",
   "tags": [
    "regles-barre",
    "loisirs"
   ],
   "concept": "regle-vnm-statut"
  },
  {
   "id": "var_regle-vnm-statut_4",
   "sectionId": "mod3_sec3",
   "question": "Hors cas de dépassement, de quels navires une moto de mer doit-elle s’écarter quel que soit le côté d’où ils viennent ?",
   "options": {
    "A": "Des seuls navires de commerce et des bateaux pilotes en service",
    "B": "D’aucun : plus rapide et manœuvrante, elle est prioritaire sur tous les navires",
    "C": "Des voiliers seulement",
    "D": "Des voiliers, des navires en pêche, non maîtres ou à manœuvre restreinte"
   },
   "correct": "D",
   "explanation": "La moto de mer est un navire à moteur, au bas de la hiérarchie : elle s’écarte des voiliers (planches et kites compris), des pêcheurs et des navires non maîtres de leur manœuvre ou à capacité de manœuvre restreinte, d’où qu’ils viennent. Face à un autre navire à moteur, ce sont les règles de croisement qui s’appliquent (priorité à tribord), et elle s’écarte de tout navire qu’elle rattrape.",
   "tags": [
    "regles-barre",
    "loisirs"
   ],
   "concept": "regle-vnm-statut"
  },
  {
   "id": "var_detresse-feu-main_1",
   "sectionId": "mod4_sec1",
   "question": "Lequel de ces signaux de détresse se tient à bout de bras et produit une lueur rouge vive ?",
   "options": {
    "A": "La fusée à parachute",
    "B": "Le miroir de signalisation",
    "C": "Le fumigène",
    "D": "Le feu automatique à main"
   },
   "correct": "D",
   "explanation": "Le feu automatique à main est un engin pyrotechnique tenu à la main qui produit une lueur rouge vive, efficace de jour comme de nuit pour se faire repérer à courte distance.",
   "tags": [
    "detresse"
   ],
   "concept": "detresse-feu-main",
   "near": [
    "exam_q2_8"
   ]
  },
  {
   "id": "var_detresse-feu-main_2",
   "sectionId": "mod4_sec1",
   "question": "De nuit, à quelques centaines de mètres, une personne brandit à bout de bras, depuis un petit bateau, une lumière rouge vive et crépitante. Que signale-t-elle ?",
   "options": {
    "A": "Qu’elle est en détresse et demande assistance",
    "B": "Qu’elle pêche à la traîne et éclaire ses lignes",
    "C": "Qu’elle est au mouillage",
    "D": "Qu’elle vous laisse passer et vous invite à continuer"
   },
   "correct": "A",
   "explanation": "Une lueur rouge vive tenue à la main est un feu automatique à main : c’est un signal de détresse.",
   "tags": [
    "detresse"
   ],
   "concept": "detresse-feu-main"
  },
  {
   "id": "var_detresse-feu-main_3",
   "sectionId": "mod4_sec1",
   "question": "Qu’est-ce qui distingue le feu automatique à main de la fusée à parachute ?",
   "options": {
    "A": "Le feu à main produit une fumée orange visible de loin, la fusée une lueur rouge de près",
    "B": "Le feu à main est vert, la fusée est rouge",
    "C": "Le feu à main se tient en main et se voit de près ; la fusée monte en altitude et se voit de loin",
    "D": "Le feu à main ne s’utilise que de jour ; la fusée, elle, est uniquement réservée à la navigation de nuit"
   },
   "correct": "C",
   "explanation": "Les deux produisent une lueur rouge. Le feu automatique à main reste dans la main (repérage à courte distance, de jour comme de nuit) ; la fusée à parachute est projetée en altitude et sa lueur descend lentement, visible de loin.",
   "tags": [
    "detresse"
   ],
   "concept": "detresse-feu-main"
  },
  {
   "id": "var_jrcc-coordination_1",
   "sectionId": "mod4_sec1",
   "question": "Le JRCC Tahiti est l’équivalent polynésien de quel organisme de métropole ?",
   "options": {
    "A": "La gendarmerie maritime",
    "B": "La SNSM",
    "C": "La capitainerie",
    "D": "Le CROSS"
   },
   "correct": "D",
   "explanation": "En Polynésie française, le JRCC Tahiti joue le rôle du CROSS de métropole : il coordonne les opérations de sauvetage et en prend la direction.",
   "tags": [
    "detresse"
   ],
   "concept": "jrcc-coordination"
  },
  {
   "id": "var_jrcc-coordination_2",
   "sectionId": "mod4_sec1",
   "question": "Lors d’un sauvetage en Polynésie française, qui engage les moyens de secours (navires, hélicoptères, avions, navires proches) ?",
   "options": {
    "A": "Le JRCC Tahiti",
    "B": "Le chef de bord du navire en détresse",
    "C": "Le premier navire arrivé sur place"
   },
   "correct": "A",
   "explanation": "Le JRCC Tahiti coordonne les opérations de sauvetage, en prend la direction et engage les moyens nécessaires.",
   "tags": [
    "detresse"
   ],
   "concept": "jrcc-coordination"
  },
  {
   "id": "var_jrcc-coordination_3",
   "sectionId": "mod4_sec1",
   "question": "Plusieurs bateaux participent à la recherche d’un plaisancier disparu près de Moorea. Qui dirige les opérations ?",
   "options": {
    "A": "Chaque bateau s’organise seul",
    "B": "Le plus gros des bateaux présents",
    "C": "Le JRCC Tahiti",
    "D": "La capitainerie du port le plus proche"
   },
   "correct": "C",
   "explanation": "Le centre de coordination (JRCC Tahiti en Polynésie, CROSS en métropole) prend la direction des opérations de sauvetage.",
   "tags": [
    "detresse"
   ],
   "concept": "jrcc-coordination"
  },
  {
   "id": "var_assistance-obligation_1",
   "sectionId": "mod4_sec1",
   "question": "Vous entendez un MAYDAY émis par un bateau qui se trouve à 1 mille de vous, par mer belle. Que devez-vous faire ?",
   "options": {
    "A": "Continuer votre route : seuls les sauveteurs doivent intervenir",
    "B": "Porter secours et vous signaler au JRCC Tahiti",
    "C": "Rien, les secours sont prévenus par la balise du bateau"
   },
   "correct": "B",
   "explanation": "Tout navire qui reçoit un appel de détresse doit porter secours si cela ne met pas en péril son propre bateau et ses occupants, et se signaler au centre de coordination (JRCC Tahiti).",
   "tags": [
    "detresse"
   ],
   "concept": "assistance-obligation"
  },
  {
   "id": "var_assistance-obligation_2",
   "sectionId": "mod4_sec1",
   "question": "Par mer très forte, votre petit bateau ne peut pas approcher un navire en détresse sans risquer de chavirer. Qu’en est-il de l’obligation d’assistance ?",
   "options": {
    "A": "Vous devez attendre l’ordre écrit des autorités",
    "B": "L’obligation ne s’applique qu’aux bateaux de plus de 12 m, donc pas au vôtre",
    "C": "Vous devez intervenir quoi qu’il arrive, même au risque de chavirer",
    "D": "Elle ne vous impose pas de mettre en péril votre bateau et vos passagers"
   },
   "correct": "D",
   "explanation": "Porter secours est obligatoire, mais seulement si cela ne met pas en péril votre bateau et ses occupants.",
   "tags": [
    "detresse"
   ],
   "concept": "assistance-obligation"
  },
  {
   "id": "var_assistance-obligation_3",
   "sectionId": "mod4_sec1",
   "question": "Vrai ou faux : l’obligation de porter secours à un navire en détresse ne concerne que les navires professionnels.",
   "options": {
    "A": "Vrai",
    "B": "Faux"
   },
   "correct": "B",
   "explanation": "Faux : tout navire, y compris de plaisance, qui reçoit un appel de détresse doit porter secours, si cela ne met pas en péril son bateau et ses occupants.",
   "tags": [
    "detresse"
   ],
   "concept": "assistance-obligation"
  },
  {
   "id": "var_assistance-obligation_4",
   "sectionId": "mod4_sec1",
   "question": "Un navire en détresse est à votre portée et vous pouvez l’aider sans danger. Quelle affirmation est exacte ?",
   "options": {
    "A": "Vous devez lui porter assistance",
    "B": "Vous pouvez choisir de ne pas intervenir si vous êtes pressé",
    "C": "Vous ne devez intervenir que si le navire est polynésien",
    "D": "Vous devez seulement noter sa position dans votre journal"
   },
   "correct": "A",
   "explanation": "Dès lors que cela ne met pas en péril votre bateau et ses occupants, porter secours est une obligation.",
   "tags": [
    "detresse"
   ],
   "concept": "assistance-obligation"
  },
  {
   "id": "var_detresse-fusee-parachute_1",
   "sectionId": "mod4_sec1",
   "question": "Quel signal de détresse, projeté en altitude, est visible de très loin, surtout de nuit ?",
   "options": {
    "A": "Le fumigène orange",
    "B": "Le feu automatique à main",
    "C": "La fusée à parachute"
   },
   "correct": "C",
   "explanation": "La fusée à parachute est projetée en altitude ; sa lueur rouge descend lentement sous un parachute et se voit de loin, surtout de nuit.",
   "tags": [
    "detresse"
   ],
   "concept": "detresse-fusee-parachute"
  },
  {
   "id": "var_detresse-fusee-parachute_2",
   "sectionId": "mod4_sec1",
   "question": "De quelle couleur est la lueur d’une fusée à parachute de détresse ?",
   "options": {
    "A": "Verte",
    "B": "Blanche",
    "C": "Orange",
    "D": "Rouge"
   },
   "correct": "D",
   "explanation": "La fusée à parachute montre une lueur rouge qui descend lentement. Retenez « rouge, orange, rouge » : feu à main rouge, fumigène orange, fusée à parachute rouge.",
   "tags": [
    "detresse"
   ],
   "concept": "detresse-fusee-parachute"
  },
  {
   "id": "var_detresse-fusee-parachute_3",
   "sectionId": "mod4_sec1",
   "question": "De nuit, vous voyez des fusées à étoiles rouges tirées depuis un bateau. Qu’est-ce que cela signifie ?",
   "options": {
    "A": "Un navire en détresse",
    "B": "Un navire qui entre au port",
    "C": "Un bateau de pêche qui relève ses filets",
    "D": "Un feu d’artifice de fête"
   },
   "correct": "A",
   "explanation": "Les fusées à étoiles rouges ont le même sens que la fusée à parachute rouge : c’est un signal de détresse.",
   "tags": [
    "detresse"
   ],
   "concept": "detresse-fusee-parachute"
  },
  {
   "id": "var_vhf-canal-16_1",
   "sectionId": "mod4_sec1",
   "question": "Après avoir lancé votre message de détresse, sur quel canal VHF restez-vous à l’écoute ?",
   "options": {
    "A": "Canal 72",
    "B": "Canal 6",
    "C": "Canal 16",
    "D": "Canal 9"
   },
   "correct": "C",
   "explanation": "Le canal 16 est le canal de veille et de détresse : après « À vous », on reste à l’écoute du canal 16.",
   "tags": [
    "detresse"
   ],
   "concept": "vhf-canal-16",
   "near": [
    "q_4_1_1"
   ]
  },
  {
   "id": "var_vhf-canal-16_2",
   "sectionId": "mod4_sec1",
   "question": "Sur quel canal VHF devez-vous alerter le JRCC Tahiti en cas de détresse ?",
   "options": {
    "A": "Le canal 72",
    "B": "Le canal 16",
    "C": "Le canal 8",
    "D": "Le canal 12"
   },
   "correct": "B",
   "explanation": "En Polynésie française, on alerte le JRCC Tahiti sur le canal 16 de la VHF (ou par téléphone au 16).",
   "tags": [
    "detresse"
   ],
   "concept": "vhf-canal-16",
   "near": [
    "q_4_1_1",
    "q_bilan4_1",
    "var_jrcc-telephone_2"
   ]
  },
  {
   "id": "var_vhf-canal-16_3",
   "sectionId": "mod4_sec1",
   "question": "À quoi sert le canal 16 de la VHF ?",
   "options": {
    "A": "Uniquement aux bulletins météo",
    "B": "Uniquement aux échanges avec la capitainerie",
    "C": "Aux conversations entre plaisanciers",
    "D": "À la veille et aux appels de détresse"
   },
   "correct": "D",
   "explanation": "Le canal 16 est le canal de veille et de détresse ; on ne l’encombre pas avec des conversations.",
   "tags": [
    "detresse"
   ],
   "concept": "vhf-canal-16",
   "near": [
    "q_4_1_1"
   ]
  },
  {
   "id": "var_vhf-canal-16_4",
   "sectionId": "mod4_sec1",
   "question": "Vous devez lancer un appel de détresse avec la VHF. Quel réglage choisissez-vous ?",
   "options": {
    "A": "Canal 16, puissance maximale",
    "B": "Canal 72, puissance minimale",
    "C": "Canal 9, puissance maximale",
    "D": "Canal 6, puissance minimale"
   },
   "correct": "A",
   "explanation": "Pour un MAYDAY, on sélectionne le canal 16, canal de veille et de détresse, à la puissance maximale.",
   "tags": [
    "detresse"
   ],
   "concept": "vhf-canal-16"
  },
  {
   "id": "var_detresse-nc_1",
   "sectionId": "mod4_sec1",
   "question": "Un bateau arbore ces pavillons. Que signalent-ils ?",
   "options": {
    "A": "Il demande un pilote pour entrer au port",
    "B": "Il a des plongeurs en immersion autour de lui",
    "C": "Il est en détresse et demande assistance",
    "D": "Il tire un skieur"
   },
   "correct": "C",
   "explanation": "Le pavillon N hissé au-dessus du pavillon C est un signal de détresse.",
   "figure": {
    "fig": "flag",
    "flag": "NC"
   },
   "tags": [
    "detresse",
    "pavillons"
   ],
   "concept": "detresse-nc"
  },
  {
   "id": "var_detresse-nc_2",
   "sectionId": "mod4_sec1",
   "question": "Vous apercevez un voilier qui hisse un pavillon à damier bleu et blanc au-dessus d’un pavillon à bandes horizontales bleu, blanc, rouge, blanc, bleu. Qu’en déduisez-vous ?",
   "options": {
    "A": "Il est au mouillage",
    "B": "Il fait de la plongée",
    "C": "Il a un pilote à bord",
    "D": "Il est en détresse"
   },
   "correct": "D",
   "explanation": "Le damier bleu et blanc est le pavillon N, les bandes bleu, blanc, rouge, blanc, bleu forment le pavillon C : N au-dessus de C signale la détresse.",
   "tags": [
    "detresse",
    "pavillons"
   ],
   "concept": "detresse-nc"
  },
  {
   "id": "var_detresse-nc_3",
   "sectionId": "mod4_sec1",
   "question": "Pour composer le signal de détresse avec les pavillons N et C, comment les hisse-t-on ?",
   "options": {
    "A": "N au-dessus de C",
    "B": "C au-dessus de N",
    "C": "Côte à côte, à la même hauteur"
   },
   "correct": "A",
   "explanation": "Le signal de détresse est le pavillon N hissé au-dessus du pavillon C.",
   "tags": [
    "detresse",
    "pavillons"
   ],
   "concept": "detresse-nc",
   "near": [
    "q_4_1_3"
   ]
  },
  {
   "id": "var_detresse-nc_4",
   "sectionId": "mod4_sec1",
   "question": "Ce pavillon N, hissé au-dessus d’un autre pavillon du code international, forme un signal de détresse. Lequel ?",
   "options": {
    "A": "La flamme orange",
    "B": "Le pavillon A",
    "C": "Le pavillon C",
    "D": "Le pavillon national"
   },
   "correct": "C",
   "explanation": "Le pavillon N (damier bleu et blanc) au-dessus du pavillon C (bandes bleu, blanc, rouge, blanc, bleu) signale la détresse.",
   "figure": {
    "fig": "flag",
    "flag": "N"
   },
   "tags": [
    "detresse",
    "pavillons"
   ],
   "concept": "detresse-nc"
  },
  {
   "id": "var_detresse-fumigene_1",
   "sectionId": "mod4_sec1",
   "question": "Quand le fumigène orange est-il le plus efficace ?",
   "options": {
    "A": "Seulement par temps de brouillard",
    "B": "De jour",
    "C": "Seulement à moins de 300 m d’une plage",
    "D": "De nuit"
   },
   "correct": "B",
   "explanation": "Le fumigène produit une fumée orange : c’est un signal de jour, très visible des avions et hélicoptères.",
   "tags": [
    "detresse"
   ],
   "concept": "detresse-fumigene"
  },
  {
   "id": "var_detresse-fumigene_2",
   "sectionId": "mod4_sec1",
   "question": "En plein jour, un hélicoptère de recherche survole la zone où vous êtes en panne et en danger. Quel signal est le plus adapté pour qu’il vous repère ?",
   "options": {
    "A": "La corne de brume",
    "B": "Le pavillon national",
    "C": "Le feu de mouillage",
    "D": "Le fumigène orange"
   },
   "correct": "D",
   "explanation": "De jour, la fumée orange du fumigène est très visible des avions et hélicoptères.",
   "tags": [
    "detresse"
   ],
   "concept": "detresse-fumigene"
  },
  {
   "id": "var_detresse-fumigene_3",
   "sectionId": "mod4_sec1",
   "question": "De jour, vous voyez une épaisse fumée orange s’élever de la surface de l’eau, près d’un petit bateau. Qu’est-ce que cela signifie ?",
   "options": {
    "A": "Le bateau signale qu’il est en détresse",
    "B": "Le bateau signale un banc de poissons",
    "C": "Le moteur du bateau est en rodage",
    "D": "Il s’agit d’un exercice de ski nautique"
   },
   "correct": "A",
   "explanation": "Une fumée orange est produite par un fumigène de détresse : le bateau demande assistance.",
   "tags": [
    "detresse"
   ],
   "concept": "detresse-fumigene"
  },
  {
   "id": "var_detresse-fumigene_4",
   "sectionId": "mod4_sec1",
   "question": "Moyen mnémotechnique « rouge, orange, rouge » : quel signal de détresse correspond à « orange » ?",
   "options": {
    "A": "Le feu automatique à main",
    "B": "La fusée à parachute",
    "C": "Le fumigène",
    "D": "Le miroir de signalisation"
   },
   "correct": "C",
   "explanation": "Feu à main = rouge (dans la main), fumigène = orange (la fumée, de jour), fusée à parachute = rouge (dans le ciel).",
   "tags": [
    "detresse"
   ],
   "concept": "detresse-fumigene"
  },
  {
   "id": "var_jrcc-telephone_1",
   "sectionId": "mod4_sec1",
   "question": "Votre VHF est en panne mais votre téléphone capte le réseau. Vous êtes en détresse au large de Tahiti. Quel numéro composez-vous pour joindre le JRCC ?",
   "options": {
    "A": "Le 196",
    "B": "Le 15",
    "C": "Le 18",
    "D": "Le 16"
   },
   "correct": "D",
   "explanation": "En Polynésie française, le JRCC Tahiti s’alerte par téléphone au 16 (ou sur le canal 16 de la VHF). Le 196 est le numéro du CROSS en métropole.",
   "tags": [
    "detresse"
   ],
   "concept": "jrcc-telephone",
   "near": [
    "q_bilan4_1"
   ]
  },
  {
   "id": "var_jrcc-telephone_2",
   "sectionId": "mod4_sec1",
   "question": "Quels sont les deux moyens d’alerter le JRCC Tahiti en cas de détresse en mer ?",
   "options": {
    "A": "Le canal 16 de la VHF ou le téléphone au 16",
    "B": "Le canal 9 de la VHF ou le téléphone au 17",
    "C": "Le canal 72 de la VHF ou le téléphone au 15"
   },
   "correct": "A",
   "explanation": "Un navire en détresse alerte le JRCC Tahiti sur le canal 16 de la VHF ou par téléphone au 16 : le même nombre dans les deux cas.",
   "tags": [
    "detresse"
   ],
   "concept": "jrcc-telephone",
   "near": [
    "q_bilan4_1",
    "var_vhf-canal-16_2"
   ]
  },
  {
   "id": "var_jrcc-telephone_3",
   "sectionId": "mod4_sec1",
   "question": "En Polynésie française, en composant le 16 sur votre téléphone en cas de détresse en mer, qui joignez-vous ?",
   "options": {
    "A": "Les pompiers",
    "B": "Le CROSS de métropole",
    "C": "Le JRCC Tahiti",
    "D": "La capitainerie de Papeete"
   },
   "correct": "C",
   "explanation": "Le 16 permet d’alerter par téléphone le JRCC Tahiti, centre de coordination du sauvetage en mer en Polynésie.",
   "tags": [
    "detresse"
   ],
   "concept": "jrcc-telephone",
   "near": [
    "q_bilan4_1",
    "var_jrcc-telephone_4"
   ]
  },
  {
   "id": "var_jrcc-telephone_4",
   "sectionId": "mod4_sec1",
   "question": "Vrai ou faux : en Polynésie française, on peut alerter le JRCC Tahiti par téléphone en composant le 16.",
   "options": {
    "A": "Vrai",
    "B": "Faux"
   },
   "correct": "A",
   "explanation": "Vrai : le JRCC Tahiti s’alerte par téléphone au 16 ou sur le canal 16 de la VHF.",
   "tags": [
    "detresse"
   ],
   "concept": "jrcc-telephone",
   "near": [
    "var_jrcc-telephone_3"
   ]
  },
  {
   "id": "var_detresse-son-continu_1",
   "sectionId": "mod4_sec1",
   "question": "Un bateau immobile fait retentir sa corne de brume sans aucune interruption. Que signale-t-il ?",
   "options": {
    "A": "Qu’il manœuvre en arrière",
    "B": "Qu’il est en détresse",
    "C": "Qu’il vous dépasse",
    "D": "Qu’il entre dans un chenal"
   },
   "correct": "B",
   "explanation": "Un son prolongé ininterrompu (son continu), émis par n’importe quel appareil, est un signal de détresse.",
   "tags": [
    "detresse",
    "signaux-sonores"
   ],
   "concept": "detresse-son-continu"
  },
  {
   "id": "var_detresse-son-continu_2",
   "sectionId": "mod4_sec1",
   "question": "Le son continu, signal de détresse, s’utilise :",
   "options": {
    "A": "De jour comme de nuit",
    "B": "Du coucher au lever du soleil",
    "C": "Uniquement par temps de brume"
   },
   "correct": "A",
   "explanation": "Le son continu est un signal de détresse valable de jour comme de nuit.",
   "tags": [
    "detresse",
    "signaux-sonores"
   ],
   "concept": "detresse-son-continu"
  },
  {
   "id": "var_detresse-son-continu_3",
   "sectionId": "mod4_sec1",
   "question": "Avec quel appareil peut-on émettre le son continu de détresse ?",
   "options": {
    "A": "N’importe quel appareil sonore",
    "B": "Avec la VHF, sur le canal 16",
    "C": "Uniquement avec une sirène",
    "D": "Uniquement avec la corne de brume du bord, seule audible de loin"
   },
   "correct": "A",
   "explanation": "Le son continu de détresse peut être émis par n’importe quel appareil sonore (sirène, corne de brume, sifflet, cloche).",
   "tags": [
    "detresse",
    "signaux-sonores"
   ],
   "concept": "detresse-son-continu"
  },
  {
   "id": "var_detresse-son-continu_4",
   "sectionId": "mod4_sec1",
   "question": "Parmi ces signaux sonores, lequel est un signal de détresse ?",
   "options": {
    "A": "Deux sons prolongés suivis d’un son bref",
    "B": "Cinq sons brefs",
    "C": "Un son prolongé ininterrompu",
    "D": "Un son prolongé toutes les 2 minutes"
   },
   "correct": "C",
   "explanation": "Seul le son prolongé ininterrompu (son continu) est un signal de détresse ; au moins cinq sons brefs et rapides expriment un doute sur les intentions ou la manœuvre de l’autre navire.",
   "tags": [
    "detresse",
    "signaux-sonores"
   ],
   "concept": "detresse-son-continu",
   "near": [
    "gen_mod4_sec1_2",
    "var_detresse-intrus_1"
   ]
  },
  {
   "id": "var_mayday-appel_1",
   "sectionId": "mod4_sec1",
   "question": "Quel mot prononce-t-on au début d’un appel de détresse à la VHF ?",
   "options": {
    "A": "ALLÔ",
    "B": "PAN PAN",
    "C": "SÉCURITÉ",
    "D": "MAYDAY"
   },
   "correct": "D",
   "explanation": "L’appel de détresse commence par le mot « MAYDAY » prononcé 3 fois (« MAYDAY, MAYDAY, MAYDAY ») sur le canal 16.",
   "tags": [
    "detresse"
   ],
   "concept": "mayday-appel",
   "near": [
    "var_mayday-appel_2"
   ]
  },
  {
   "id": "var_mayday-appel_2",
   "sectionId": "mod4_sec1",
   "question": "Combien de fois prononce-t-on le mot « MAYDAY » au début d’un appel de détresse ?",
   "options": {
    "A": "1 fois",
    "B": "2 fois",
    "C": "3 fois",
    "D": "5 fois"
   },
   "correct": "C",
   "explanation": "On dit « MAYDAY, MAYDAY, MAYDAY » (3 fois) sur le canal 16, puis « ici » suivi du nom du bateau répété 3 fois.",
   "tags": [
    "detresse"
   ],
   "concept": "mayday-appel",
   "near": [
    "var_mayday-appel_1"
   ]
  },
  {
   "id": "var_mayday-appel_3",
   "sectionId": "mod4_sec1",
   "question": "Votre VHF est équipée de l’ASN (bouton DISTRESS) et votre bateau prend l’eau. Que faites-vous ?",
   "options": {
    "A": "Je déclenche l’alerte ASN, puis je passe le MAYDAY à la voix sur le canal 16",
    "B": "J’appuie sur DISTRESS puis j’éteins la VHF pour économiser la batterie",
    "C": "Je passe un message « SÉCURITÉ » sur le canal 72 pour prévenir les bateaux proches"
   },
   "correct": "A",
   "explanation": "Avec l’ASN, on déclenche d’abord l’alerte (bouton DISTRESS), puis on passe le message de détresse à la voix : « MAYDAY » 3 fois sur le canal 16.",
   "tags": [
    "detresse"
   ],
   "concept": "mayday-appel"
  },
  {
   "id": "var_mayday-appel_4",
   "sectionId": "mod4_sec1",
   "question": "Votre bateau prend feu à 3 milles de la côte et l’incendie ne peut pas être maîtrisé. Comment lancez-vous l’alerte à la VHF ?",
   "options": {
    "A": "« SÉCURITÉ » 3 fois sur le canal 6",
    "B": "« PAN PAN » 3 fois sur le canal 9",
    "C": "« MAYDAY » 3 fois sur le canal 16",
    "D": "« SOS » une fois sur le canal 72"
   },
   "correct": "C",
   "explanation": "Face à un danger grave et imminent, on lance un appel de détresse : « MAYDAY » répété 3 fois sur le canal 16.",
   "tags": [
    "detresse"
   ],
   "concept": "mayday-appel",
   "near": [
    "gen_mod4_sec1_3"
   ]
  },
  {
   "id": "var_mayday-contenu_1",
   "sectionId": "mod4_sec1",
   "question": "Dans votre message de détresse, vous ne connaissez pas vos coordonnées GPS. Comment indiquez-vous votre position ?",
   "options": {
    "A": "Je ne donne pas de position",
    "B": "Par le relèvement et la distance d’un point connu",
    "C": "Par le nom de mon port d’attache et de mon bateau",
    "D": "Par l’heure de mon départ"
   },
   "correct": "B",
   "explanation": "La position se donne en coordonnées ou, à défaut, par le relèvement et la distance d’un point connu.",
   "tags": [
    "detresse"
   ],
   "concept": "mayday-contenu"
  },
  {
   "id": "var_mayday-contenu_2",
   "sectionId": "mod4_sec1",
   "question": "Quelle information ne fait PAS partie d’un message de détresse ?",
   "options": {
    "A": "La position du bateau",
    "B": "La nature de la détresse et l’aide demandée",
    "C": "Le nombre de personnes à bord",
    "D": "Le numéro du permis du chef de bord"
   },
   "correct": "D",
   "explanation": "Le message de détresse donne le nom du bateau, sa position, la nature de la détresse, l’aide demandée, le nombre de personnes à bord et toute information utile.",
   "tags": [
    "detresse"
   ],
   "concept": "mayday-contenu"
  },
  {
   "id": "var_mayday-contenu_3",
   "sectionId": "mod4_sec1",
   "question": "Dans un message MAYDAY, juste après votre position, que devez-vous indiquer ?",
   "options": {
    "A": "La nature de la détresse et l’aide demandée",
    "B": "La marque de votre moteur et sa puissance",
    "C": "La date de votre dernier carénage et du contrôle moteur"
   },
   "correct": "A",
   "explanation": "Après le nom du bateau et la position viennent la nature de la détresse et l’aide demandée, puis le nombre de personnes à bord.",
   "tags": [
    "detresse"
   ],
   "concept": "mayday-contenu"
  },
  {
   "id": "var_mayday-contenu_4",
   "sectionId": "mod4_sec1",
   "question": "Quelles informations complémentaires sont utiles à la fin d’un message de détresse ?",
   "options": {
    "A": "Le nom du vendeur du bateau",
    "B": "La valeur du bateau, son année d’achat et le nom de son assureur",
    "C": "Nombre de personnes à bord, description du bateau, blessés éventuels",
    "D": "La météo prévue pour le lendemain et l’heure de la prochaine marée haute"
   },
   "correct": "C",
   "explanation": "On indique le nombre de personnes à bord et toute information utile (description du bateau, blessés), puis « À vous » et on reste à l’écoute du canal 16.",
   "tags": [
    "detresse"
   ],
   "concept": "mayday-contenu"
  },
  {
   "id": "var_detresse-bras_1",
   "sectionId": "mod4_sec1",
   "question": "Un homme debout sur un bateau lève et abaisse lentement, de façon répétée, ses deux bras tendus de chaque côté du corps. Que signale-t-il ?",
   "options": {
    "A": "Il vous indique de passer sur sa droite",
    "B": "Il vous salue",
    "C": "Il vous demande de ralentir",
    "D": "Il est en détresse"
   },
   "correct": "D",
   "explanation": "Les bras tendus de chaque côté du corps, levés et abaissés lentement et de façon répétée, constituent un signal de détresse.",
   "tags": [
    "detresse"
   ],
   "concept": "detresse-bras"
  },
  {
   "id": "var_detresse-bras_2",
   "sectionId": "mod4_sec1",
   "question": "Comment distinguer le signal de détresse avec les bras d’un simple salut ?",
   "options": {
    "A": "Détresse : les deux bras tendus, levés et abaissés lentement et de façon répétée",
    "B": "Il n’y a aucune différence",
    "C": "Détresse : un seul bras agité rapidement au-dessus de la tête, de façon répétée et insistante",
    "D": "Le salut se fait avec les deux bras, la détresse avec un seul"
   },
   "correct": "A",
   "explanation": "Le signal de détresse utilise les deux bras tendus de chaque côté du corps, levés et abaissés lentement ; un salut amical se fait d’un seul bras.",
   "tags": [
    "detresse"
   ],
   "concept": "detresse-bras"
  },
  {
   "id": "var_detresse-bras_3",
   "sectionId": "mod4_sec1",
   "question": "Vous n’avez plus aucun matériel de signalisation à bord. Quel signal de détresse pouvez-vous encore faire ?",
   "options": {
    "A": "Allumer un feu automatique à main ou tirer une fusée à parachute",
    "B": "Hisser les pavillons N et C au-dessus du pavillon national",
    "C": "Lever et abaisser lentement et de façon répétée les bras tendus"
   },
   "correct": "C",
   "explanation": "Le signal avec les bras ne nécessite aucun matériel : bras tendus de chaque côté du corps, levés et abaissés lentement et de façon répétée.",
   "tags": [
    "detresse"
   ],
   "concept": "detresse-bras"
  },
  {
   "id": "var_detresse-bras_4",
   "sectionId": "mod4_sec1",
   "question": "À quel rythme doit-on faire le signal de détresse avec les bras ?",
   "options": {
    "A": "Rapidement, une seule fois",
    "B": "Lentement et de façon répétée",
    "C": "Très vite, pendant 5 secondes",
    "D": "Uniquement toutes les 2 minutes"
   },
   "correct": "B",
   "explanation": "Les bras tendus sont levés et abaissés lentement et de façon répétée.",
   "tags": [
    "detresse"
   ],
   "concept": "detresse-bras"
  },
  {
   "id": "var_detresse-sos_1",
   "sectionId": "mod4_sec1",
   "question": "En morse, de quoi se compose le signal SOS ?",
   "options": {
    "A": "3 longs, 3 brefs, 3 longs",
    "B": "1 bref, 1 long",
    "C": "3 brefs, 3 longs, 3 brefs",
    "D": "5 brefs"
   },
   "correct": "C",
   "explanation": "SOS en morse : • • • — — — • • •, soit 3 brefs, 3 longs, 3 brefs.",
   "tags": [
    "detresse"
   ],
   "concept": "detresse-sos",
   "near": [
    "gen_mod4_sec1_7"
   ]
  },
  {
   "id": "var_detresse-sos_2",
   "sectionId": "mod4_sec1",
   "question": "De jour, par grand soleil, quel équipement de la dotation côtière permet d’émettre un signal lumineux SOS ?",
   "options": {
    "A": "Le compas magnétique de route",
    "B": "L’écope",
    "C": "Les pinoches",
    "D": "Le miroir de signalisation"
   },
   "correct": "D",
   "explanation": "Le signal lumineux SOS peut s’émettre avec une lampe ou un projecteur, ou de jour au soleil avec un miroir de signalisation.",
   "tags": [
    "detresse"
   ],
   "concept": "detresse-sos"
  },
  {
   "id": "var_detresse-sos_3",
   "sectionId": "mod4_sec1",
   "question": "De nuit, depuis la côte, vous voyez au large une lampe émettre trois éclats courts, trois longs, puis trois courts, et recommencer. Que signifie ce signal ?",
   "options": {
    "A": "Un signal de détresse SOS",
    "B": "Une marque de danger isolé",
    "C": "Un phare d’entrée de port",
    "D": "Un navire au mouillage"
   },
   "correct": "A",
   "explanation": "Trois signaux brefs, trois longs, trois brefs forment SOS en morse : c’est un signal de détresse.",
   "tags": [
    "detresse"
   ],
   "concept": "detresse-sos"
  },
  {
   "id": "var_detresse-sos_4",
   "sectionId": "mod4_sec1",
   "question": "De nuit, avec quel moyen pouvez-vous émettre un signal SOS lumineux ?",
   "options": {
    "A": "Avec le miroir de signalisation",
    "B": "Avec le pavillon national",
    "C": "Avec une lampe ou un projecteur",
    "D": "Avec le fumigène"
   },
   "correct": "C",
   "explanation": "De nuit, on émet SOS en morse avec une lampe ou un projecteur ; le miroir ne fonctionne qu’au soleil, de jour.",
   "tags": [
    "detresse"
   ],
   "concept": "detresse-sos"
  },
  {
   "id": "var_detresse-intrus_1",
   "sectionId": "mod4_sec1",
   "question": "Lequel de ces signaux sonores n’est PAS un signal de détresse ?",
   "options": {
    "A": "Un son ininterrompu au sifflet",
    "B": "Un son continu à la cloche du bord",
    "C": "Un son continu à la sirène ou à la corne",
    "D": "Un son prolongé toutes les 2 minutes"
   },
   "correct": "D",
   "explanation": "Un son prolongé toutes les 2 minutes est un signal de brume ; parmi ces signaux, seul le son continu, quel que soit l’appareil, est un signal de détresse.",
   "tags": [
    "detresse"
   ],
   "concept": "detresse-intrus",
   "near": [
    "var_detresse-son-continu_4"
   ]
  },
  {
   "id": "var_detresse-intrus_2",
   "sectionId": "mod4_sec1",
   "question": "Parmi ces signaux visuels, lequel n’indique PAS une détresse ?",
   "options": {
    "A": "Une flamme orange hissée au mât",
    "B": "Le pavillon N au-dessus du pavillon C",
    "C": "Une boule noire au-dessous d’un pavillon carré",
    "D": "Une fumée orange"
   },
   "correct": "A",
   "explanation": "La flamme orange signale un bateau tracteur de ski nautique ; les trois autres sont des signaux de détresse.",
   "tags": [
    "detresse"
   ],
   "concept": "detresse-intrus"
  },
  {
   "id": "var_detresse-intrus_3",
   "sectionId": "mod4_sec1",
   "question": "Un bateau au mouillage hisse ce pavillon. Est-il en détresse ?",
   "options": {
    "A": "Oui, il demande assistance et un remorquage",
    "B": "Non, il a des plongeurs en immersion",
    "C": "Non, il demande un pilote"
   },
   "correct": "B",
   "explanation": "Le pavillon A (blanc et bleu) signale des plongeurs en immersion : il faut passer à plus de 100 m, mais ce n’est pas un signal de détresse.",
   "figure": {
    "fig": "flag",
    "flag": "A"
   },
   "tags": [
    "detresse",
    "loisirs"
   ],
   "concept": "detresse-intrus",
   "near": [
    "ext_nav_149"
   ]
  },
  {
   "id": "var_detresse-intrus_4",
   "sectionId": "mod4_sec1",
   "question": "Parmi ces signaux visuels, lequel n’est PAS un signal de détresse reconnu ?",
   "options": {
    "A": "Un colorant répandu sur l’eau",
    "B": "Une toile orange portant un carré et un disque noirs",
    "C": "Le pavillon de la Polynésie française à la poupe",
    "D": "Des flammes à bord, comme un baril d’huile en feu"
   },
   "correct": "C",
   "explanation": "Flammes à bord, colorant sur l’eau et toile orange à signe noir sont des signaux de détresse reconnus ; le pavillon de la Polynésie française n’en est pas un.",
   "tags": [
    "detresse"
   ],
   "concept": "detresse-intrus"
  },
  {
   "id": "var_detresse-boule-pavillon_1",
   "sectionId": "mod4_sec1",
   "question": "Un bateau arbore une boule noire juste au-dessous d’un pavillon carré. Que signale-t-il ?",
   "options": {
    "A": "Il est au mouillage",
    "B": "Il est en détresse",
    "C": "Il est en pêche",
    "D": "Il est échoué"
   },
   "correct": "B",
   "explanation": "Une boule noire au-dessus ou au-dessous d’un pavillon carré (de couleur quelconque) est un signal de détresse.",
   "tags": [
    "detresse"
   ],
   "concept": "detresse-boule-pavillon",
   "near": [
    "gen_mod4_sec1_9"
   ]
  },
  {
   "id": "var_detresse-boule-pavillon_2",
   "sectionId": "mod4_sec1",
   "question": "Pour le signal de détresse « boule et pavillon carré », de quelle couleur doit être le pavillon ?",
   "options": {
    "A": "Bleu et blanc",
    "B": "Rouge",
    "C": "Orange",
    "D": "De couleur quelconque"
   },
   "correct": "D",
   "explanation": "Le signal de détresse est une boule noire au-dessus ou au-dessous d’un pavillon carré de couleur quelconque.",
   "tags": [
    "detresse"
   ],
   "concept": "detresse-boule-pavillon"
  },
  {
   "id": "var_detresse-boule-pavillon_3",
   "sectionId": "mod4_sec1",
   "question": "Pour faire le signal de détresse avec une boule noire et un pavillon carré, où placer la boule ?",
   "options": {
    "A": "Au-dessus ou au-dessous du pavillon, au choix",
    "B": "Uniquement au-dessus du pavillon, comme N au-dessus de C",
    "C": "À côté du pavillon, à la même hauteur"
   },
   "correct": "A",
   "explanation": "La boule noire peut être placée au-dessus ou au-dessous du pavillon carré : dans les deux cas, c’est un signal de détresse.",
   "tags": [
    "detresse"
   ],
   "concept": "detresse-boule-pavillon"
  },
  {
   "id": "var_detresse-boule-pavillon_4",
   "sectionId": "mod4_sec1",
   "question": "Quelle est la différence entre une boule noire seule et une boule noire associée à un pavillon carré ?",
   "options": {
    "A": "Aucune : seule ou avec un pavillon, la boule noire signale la détresse",
    "B": "Boule seule : navire au mouillage ; boule et pavillon carré : détresse",
    "C": "Boule seule : détresse ; boule et pavillon carré : plongée",
    "D": "Boule seule : pêche ; boule et pavillon carré : remorquage"
   },
   "correct": "B",
   "explanation": "Une boule noire seule est la marque d’un navire au mouillage ; associée à un pavillon carré (au-dessus ou au-dessous), elle signale la détresse.",
   "tags": [
    "detresse",
    "marques-jour"
   ],
   "concept": "detresse-boule-pavillon"
  },
  {
   "id": "var_armement-cotier-compas_1",
   "sectionId": "mod4_sec2",
   "question": "Votre semi-rigide de 4,50 m va naviguer à 4 milles d’un abri. Devez-vous avoir un compas à bord ?",
   "options": {
    "A": "Non, pas sous 5 m : une carte papier suffit",
    "B": "Oui, quelle que soit la taille",
    "C": "Oui, mais seulement de nuit",
    "D": "Non, seulement au-delà de 5 milles d’un abri"
   },
   "correct": "B",
   "explanation": "À 4 milles d’un abri, la dotation côtière s’applique : le compas de route est exigé quelle que soit la taille du bateau, même de moins de 5 m.",
   "tags": [
    "armement"
   ],
   "concept": "armement-cotier-compas"
  },
  {
   "id": "var_armement-cotier-compas_2",
   "sectionId": "mod4_sec2",
   "question": "En dotation côtière, quelle affirmation est exacte concernant le compas ?",
   "options": {
    "A": "Il n’est obligatoire qu’au-delà de 12 m ou de 6 milles d’un abri",
    "B": "Il est facultatif sur un bateau à moteur",
    "C": "Il est exigé quelle que soit la taille du bateau"
   },
   "correct": "C",
   "explanation": "La dotation côtière comprend un compas de route, exigé quelle que soit la taille du bateau. Un GPS ne le remplace pas.",
   "tags": [
    "armement"
   ],
   "concept": "armement-cotier-compas"
  },
  {
   "id": "var_armement-cotier-compas_3",
   "sectionId": "mod4_sec2",
   "question": "En dotation côtière, un GPS peut-il remplacer le compas de route ?",
   "options": {
    "A": "Oui, s’il est étanche",
    "B": "Oui, de jour seulement",
    "C": "Non",
    "D": "Oui, s’il a une batterie de secours"
   },
   "correct": "C",
   "explanation": "Non : le compas de route, qui fonctionne sans électricité, reste exigé quelle que soit la taille du bateau. Le GPS est un complément utile, pas un remplaçant.",
   "tags": [
    "armement"
   ],
   "concept": "armement-cotier-compas"
  },
  {
   "id": "var_armement-cotier-compas_4",
   "sectionId": "mod4_sec2",
   "question": "Vrai ou faux : armé en côtier, un bateau de moins de 5 m est dispensé de compas.",
   "options": {
    "A": "Vrai",
    "B": "Faux"
   },
   "correct": "B",
   "explanation": "Faux : en dotation côtière, le compas de route est exigé quelle que soit la taille du bateau, même de moins de 5 m.",
   "tags": [
    "armement"
   ],
   "concept": "armement-cotier-compas",
   "near": [
    "c13_loisirs_01"
   ]
  },
  {
   "id": "var_armement-extincteur_1",
   "sectionId": "mod4_sec2",
   "question": "Dans quelles catégories de navigation un extincteur approuvé est-il exigé ?",
   "options": {
    "A": "Dans toutes, même à moins de 2 milles d’un abri",
    "B": "Seulement au-delà de 5 milles d’un abri",
    "C": "Seulement au-delà de 2 milles d’un abri",
    "D": "Uniquement sur les voiliers à moteur auxiliaire"
   },
   "correct": "A",
   "explanation": "La DPAM exige un extincteur approuvé de la 1re à la 6e catégorie, donc dès la dotation basique. Leur nombre et leur type dépendent de la longueur, de l’habitabilité et du moteur in-bord.",
   "tags": [
    "armement"
   ],
   "concept": "armement-extincteur"
  },
  {
   "id": "var_armement-extincteur_2",
   "sectionId": "mod4_sec2",
   "question": "Votre bateau à moteur possède une cabine habitable. Un extincteur est-il exigé à bord ?",
   "options": {
    "A": "Oui",
    "B": "Non",
    "C": "Seulement s’il dépasse 12 m"
   },
   "correct": "A",
   "explanation": "Oui : un extincteur approuvé est exigé dans toutes les catégories ; l’habitabilité fait partie des critères qui fixent leur nombre et leur type.",
   "tags": [
    "armement"
   ],
   "concept": "armement-extincteur"
  },
  {
   "id": "var_armement-extincteur_3",
   "sectionId": "mod4_sec2",
   "question": "Vrai ou faux : un bateau équipé d’un moteur intérieur (in-bord) doit avoir un extincteur.",
   "options": {
    "A": "Vrai",
    "B": "Faux"
   },
   "correct": "A",
   "explanation": "Vrai : un extincteur approuvé est exigé dans toutes les catégories, et le moteur in-bord fait partie des critères qui fixent leur nombre et leur type.",
   "tags": [
    "armement"
   ],
   "concept": "armement-extincteur"
  },
  {
   "id": "var_armement-extincteur_4",
   "sectionId": "mod4_sec2",
   "question": "De quoi dépendent le nombre et le type d’extincteurs exigés à bord ?",
   "options": {
    "A": "Du nombre de personnes à bord",
    "B": "De la longueur, de l’habitabilité et du moteur",
    "C": "De la distance au port d’attache",
    "D": "De l’âge du pilote"
   },
   "correct": "B",
   "explanation": "Selon la DPAM, il faut un ou plusieurs extincteurs approuvés selon la longueur du navire, son habitabilité et la présence d’un moteur in-bord ; un moteur à essence de plus de 110 kW exige en plus une installation fixe.",
   "tags": [
    "armement"
   ],
   "concept": "armement-extincteur"
  },
  {
   "id": "var_armement-cotier-5-milles_1",
   "sectionId": "mod4_sec2",
   "question": "Vous prévoyez une sortie de pêche à 4 milles d’un abri. Quelle dotation minimale votre bateau doit-il avoir ?",
   "options": {
    "A": "Basique",
    "B": "Côtière",
    "C": "Hauturière"
   },
   "correct": "B",
   "explanation": "La dotation basique (6e catégorie) ne permet que 2 milles ; de 2 à 5 milles d’un abri, il faut la dotation côtière (5e catégorie).",
   "tags": [
    "armement"
   ],
   "concept": "armement-cotier-5-milles"
  },
  {
   "id": "var_armement-cotier-5-milles_2",
   "sectionId": "mod4_sec2",
   "question": "Votre bateau est armé en côtier. Vous souhaitez rejoindre un banc de pêche à 7 milles de tout abri. Est-ce possible ?",
   "options": {
    "A": "Oui, la dotation côtière va jusqu’à 10 milles",
    "B": "Non, la dotation côtière va jusqu’à 6 milles",
    "C": "Non, la dotation côtière va jusqu’à 5 milles"
   },
   "correct": "C",
   "explanation": "La dotation côtière permet de naviguer jusqu’à 5 milles d’un abri ; au-delà, l’armement hauturier est exigé.",
   "tags": [
    "armement"
   ],
   "concept": "armement-cotier-5-milles"
  },
  {
   "id": "var_armement-engin-flottant_1",
   "sectionId": "mod4_sec2",
   "question": "Qu’est-ce qu’un engin flottant ?",
   "options": {
    "A": "Une bouée individuelle portée autour de la taille",
    "B": "Une petite annexe à moteur",
    "C": "Une ancre flottante",
    "D": "Un caisson flottant où s’accrocher"
   },
   "correct": "D",
   "explanation": "L’engin flottant est un caisson rigide, muni d’une filière, auquel les naufragés s’accrochent dans l’eau (ce n’est pas un radeau de sauvetage) ; il fait partie de la dotation côtière.",
   "tags": [
    "armement"
   ],
   "concept": "armement-engin-flottant"
  },
  {
   "id": "var_armement-engin-flottant_2",
   "sectionId": "mod4_sec2",
   "question": "Comment s’appelle l’équipement de la dotation côtière formé d’un caisson rigide muni d’une filière, auquel les naufragés s’accrochent ?",
   "options": {
    "A": "Un engin flottant",
    "B": "Une bouée fer à cheval",
    "C": "Une pinoche",
    "D": "Une brassière"
   },
   "correct": "A",
   "explanation": "C’est l’engin flottant, exigé en dotation côtière (jusqu’à 5 milles d’un abri).",
   "tags": [
    "armement"
   ],
   "concept": "armement-engin-flottant"
  },
  {
   "id": "var_armement-engin-flottant_3",
   "sectionId": "mod4_sec2",
   "question": "Lequel de ces équipements permet à plusieurs naufragés de s’accrocher en attendant les secours ?",
   "options": {
    "A": "Le miroir de signalisation",
    "B": "Les pinoches",
    "C": "L’engin flottant",
    "D": "L’écope"
   },
   "correct": "C",
   "explanation": "L’engin flottant est un caisson rigide flottant, muni d’une filière, auquel les naufragés s’accrochent dans l’eau.",
   "tags": [
    "armement"
   ],
   "concept": "armement-engin-flottant"
  },
  {
   "id": "var_armement-engin-flottant_4",
   "sectionId": "mod4_sec2",
   "question": "Vous naviguez à 1 mille d’un abri avec la dotation basique. L’engin flottant est-il obligatoire ?",
   "options": {
    "A": "Oui, dans toutes les dotations, dès la sortie du port",
    "B": "Non, il n’est exigé qu’en dotation côtière",
    "C": "Non, il n’est exigé qu’au-delà de 5 milles"
   },
   "correct": "B",
   "explanation": "L’engin flottant est exigé en dotation côtière (5e catégorie, de 2 à 5 milles), sauf si le navire est classé flottable ; il ne figure pas dans la dotation basique.",
   "tags": [
    "armement"
   ],
   "concept": "armement-engin-flottant"
  },
  {
   "id": "var_armement-feux-main-cotier_1",
   "sectionId": "mod4_sec2",
   "question": "Vous partez à 4 milles d’un abri. Combien de feux automatiques à main devez-vous embarquer ?",
   "options": {
    "A": "Aucun",
    "B": "1",
    "C": "2",
    "D": "3"
   },
   "correct": "D",
   "explanation": "À 4 milles d’un abri, la dotation côtière s’applique : 3 feux rouges automatiques à main, comme en basique.",
   "tags": [
    "armement"
   ],
   "concept": "armement-feux-main-cotier",
   "near": [
    "q_bilan4_3"
   ]
  },
  {
   "id": "var_armement-feux-main-cotier_2",
   "sectionId": "mod4_sec2",
   "question": "Un jet-ski (VNM) doit avoir 2 feux automatiques à main. Et un bateau armé en côtier ?",
   "options": {
    "A": "Aussi 2",
    "B": "3",
    "C": "1",
    "D": "Aucun"
   },
   "correct": "B",
   "explanation": "Un bateau de plaisance emporte 3 feux automatiques à main, en basique comme en côtière ; le VNM en emporte 2.",
   "tags": [
    "armement"
   ],
   "concept": "armement-feux-main-cotier",
   "near": [
    "q_bilan4_3"
   ]
  },
  {
   "id": "var_armement-feux-main-cotier_3",
   "sectionId": "mod4_sec2",
   "question": "Combien de feux rouges automatiques à main faut-il en dotation basique (jusqu’à 2 milles d’un abri) ?",
   "options": {
    "A": "Aucun",
    "B": "1",
    "C": "3",
    "D": "6"
   },
   "correct": "C",
   "explanation": "La DPAM exige 3 feux rouges automatiques à main dès la 6e catégorie (basique), autant qu’en côtière. Il en faut 6 au-delà de 20 milles.",
   "tags": [
    "armement"
   ],
   "concept": "armement-feux-main-cotier",
   "near": [
    "gen_mod4_sec2_8"
   ]
  },
  {
   "id": "var_armement-feux-main-cotier_4",
   "sectionId": "mod4_sec2",
   "question": "Votre bateau passe de la dotation basique à la dotation côtière. Le nombre de feux automatiques à main change-t-il ?",
   "options": {
    "A": "Oui, de 1 à 3",
    "B": "Non, 3 dans les deux cas",
    "C": "Oui, de 0 à 3",
    "D": "Oui, de 3 à 6"
   },
   "correct": "B",
   "explanation": "Il en faut 3 en basique comme en côtière. La côtière ajoute d’autres moyens de se signaler : lampe étanche, corne de brume, miroir, pavillons N et C.",
   "tags": [
    "armement"
   ],
   "concept": "armement-feux-main-cotier",
   "near": [
    "var_armement-cotier-pavillons_1"
   ]
  },
  {
   "id": "var_armement-coupe-circuit_1",
   "sectionId": "mod4_sec2",
   "question": "À quoi sert le coupe-circuit d’un bateau à moteur ?",
   "options": {
    "A": "À couper la radio VHF pour économiser la batterie",
    "B": "À vider l’eau du fond du bateau lorsque la pompe est en panne",
    "C": "À couper l’allumage ou les gaz si le pilote est éjecté",
    "D": "À démarrer le moteur plus vite après un calage"
   },
   "correct": "C",
   "explanation": "Le coupe-circuit, relié au pilote, coupe l’allumage ou les gaz si celui-ci est éjecté.",
   "tags": [
    "armement"
   ],
   "concept": "armement-coupe-circuit"
  },
  {
   "id": "var_armement-coupe-circuit_2",
   "sectionId": "mod4_sec2",
   "question": "À quoi (ou à qui) doit être relié le cordon du coupe-circuit ?",
   "options": {
    "A": "À la ligne de mouillage",
    "B": "Au pilote",
    "C": "Au taquet arrière",
    "D": "Au réservoir de carburant"
   },
   "correct": "B",
   "explanation": "Le coupe-circuit doit être relié au pilote, pour couper le moteur si le pilote est éjecté.",
   "tags": [
    "armement"
   ],
   "concept": "armement-coupe-circuit",
   "near": [
    "ext_sec_132"
   ]
  },
  {
   "id": "var_armement-coupe-circuit_3",
   "sectionId": "mod4_sec2",
   "question": "Le pilote, dont le coupe-circuit est correctement relié, passe par-dessus bord. Que se passe-t-il ?",
   "options": {
    "A": "Le bateau continue sa route",
    "B": "Le moteur passe au ralenti",
    "C": "L’alarme de détresse se déclenche",
    "D": "Le moteur est coupé"
   },
   "correct": "D",
   "explanation": "Le coupe-circuit relié au pilote coupe l’allumage ou les gaz dès que celui-ci est éjecté : le bateau ne part pas sans lui.",
   "tags": [
    "armement"
   ],
   "concept": "armement-coupe-circuit"
  },
  {
   "id": "var_armement-coupe-circuit_4",
   "sectionId": "mod4_sec2",
   "question": "Dans quelle dotation le coupe-circuit figure-t-il ?",
   "options": {
    "A": "Dès la dotation basique",
    "B": "À partir de la dotation côtière",
    "C": "Uniquement en dotation hauturière"
   },
   "correct": "A",
   "explanation": "Le coupe-circuit est exigé dès la dotation basique (6e catégorie), puis en côtière et en 4e catégorie, pour un moteur de plus de 4,5 kW (6 ch) à poste de conduite ouvert.",
   "tags": [
    "armement"
   ],
   "concept": "armement-coupe-circuit"
  },
  {
   "id": "var_armement-abri_1",
   "sectionId": "mod4_sec2",
   "question": "Une baie est bien protégée par vent d’alizé. Le vent tourne au sud et la baie devient exposée à la houle. Est-elle encore un abri ?",
   "options": {
    "A": "Oui, un abri le reste en toutes circonstances, quel que soit le vent",
    "B": "Pas forcément, cela dépend de la météo",
    "C": "Oui, si elle est marquée sur la carte",
    "D": "Non, une baie n’est jamais un abri"
   },
   "correct": "B",
   "explanation": "La notion d’abri tient compte de la météo du moment et des caractéristiques du navire : une baie abritée par alizé peut ne plus l’être par vent de sud.",
   "tags": [
    "armement"
   ],
   "concept": "armement-abri"
  },
  {
   "id": "var_armement-abri_2",
   "sectionId": "mod4_sec2",
   "question": "Qui choisit l’abri pour une sortie en mer ?",
   "options": {
    "A": "Le JRCC Tahiti",
    "B": "Le loueur du bateau",
    "C": "Le chef de bord",
    "D": "La capitainerie"
   },
   "correct": "C",
   "explanation": "Le choix de l’abri relève de la responsabilité du chef de bord.",
   "tags": [
    "armement"
   ],
   "concept": "armement-abri"
  },
  {
   "id": "var_armement-abri_3",
   "sectionId": "mod4_sec2",
   "question": "Vous pouvez débarquer sur une plage, mais vous ne pourrez en repartir qu’avec l’aide d’un autre bateau. Cette plage est-elle un abri ?",
   "options": {
    "A": "Oui",
    "B": "Non, sauf à moins de 2 milles du port",
    "C": "Non"
   },
   "correct": "C",
   "explanation": "Un abri est un endroit de la côte où le navire et son équipage peuvent se mettre en sécurité et en repartir sans assistance.",
   "tags": [
    "armement"
   ],
   "concept": "armement-abri"
  },
  {
   "id": "var_armement-abri_4",
   "sectionId": "mod4_sec2",
   "question": "De quoi dépend la notion d’abri ?",
   "options": {
    "A": "Uniquement de la profondeur d’eau disponible au mouillage",
    "B": "De l’heure de la marée uniquement",
    "C": "De la distance au port d’attache",
    "D": "De la météo du moment et des caractéristiques du navire"
   },
   "correct": "D",
   "explanation": "Un abri permet de se mettre en sécurité et de repartir sans assistance ; cette notion tient compte de la météo du moment et des caractéristiques du navire.",
   "tags": [
    "armement"
   ],
   "concept": "armement-abri"
  },
  {
   "id": "var_armement-basique-2-milles_1",
   "sectionId": "mod4_sec2",
   "question": "Vous prévoyez de naviguer à 1,5 mille d’un abri. Quelle dotation minimale vous faut-il ?",
   "options": {
    "A": "Aucune",
    "B": "Basique",
    "C": "Côtière",
    "D": "Hauturière"
   },
   "correct": "B",
   "explanation": "La dotation basique (6e catégorie) permet de naviguer jusqu’à 2 milles d’un abri.",
   "tags": [
    "armement"
   ],
   "concept": "armement-basique-2-milles"
  },
  {
   "id": "var_armement-basique-2-milles_2",
   "sectionId": "mod4_sec2",
   "question": "Votre bateau a la dotation basique. Vous voulez aller à 3 milles d’un abri. Est-ce possible ?",
   "options": {
    "A": "Oui, la basique va jusqu’à 5 milles, comme le permis côtier",
    "B": "Non, la basique va jusqu’à 1 mille",
    "C": "Non, la basique va jusqu’à 2 milles"
   },
   "correct": "C",
   "explanation": "La dotation basique est limitée à 2 milles d’un abri ; de 2 à 5 milles, il faut la dotation côtière.",
   "tags": [
    "armement"
   ],
   "concept": "armement-basique-2-milles"
  },
  {
   "id": "var_armement-basique-2-milles_3",
   "sectionId": "mod4_sec2",
   "question": "Avec la dotation basique, jusqu’où pouvez-vous vous éloigner d’un abri ?",
   "options": {
    "A": "300 m",
    "B": "1 mille",
    "C": "2 milles",
    "D": "5 milles"
   },
   "correct": "C",
   "explanation": "Basique : jusqu’à 2 milles d’un abri ; côtier : jusqu’à 5 milles ; hauturier : au-delà.",
   "tags": [
    "armement"
   ],
   "concept": "armement-basique-2-milles",
   "near": [
    "gen_mod4_sec2_2",
    "var_armement-basique-2-milles_4"
   ]
  },
  {
   "id": "var_armement-basique-2-milles_4",
   "sectionId": "mod4_sec2",
   "question": "Avec la seule dotation basique, laquelle de ces sorties est permise ?",
   "options": {
    "A": "À 1 mille d’un abri",
    "B": "À 3 milles d’un abri",
    "C": "À 5 milles d’un abri",
    "D": "À 6 milles d’un abri"
   },
   "correct": "A",
   "explanation": "La dotation basique couvre la navigation jusqu’à 2 milles d’un abri. Au-delà, et jusqu’à 5 milles, il faut la dotation côtière.",
   "tags": [
    "armement"
   ],
   "concept": "armement-basique-2-milles",
   "near": [
    "gen_mod4_sec2_2",
    "var_armement-basique-2-milles_3"
   ]
  },
  {
   "id": "var_prevenir-proche_1",
   "sectionId": "mod4_sec2",
   "question": "Pourquoi prévenir un proche avant de partir en mer ?",
   "options": {
    "A": "Pour qu’il puisse donner l’alerte",
    "B": "Parce que c’est exigé pour obtenir le carburant",
    "C": "Pour qu’il surveille votre voiture",
    "D": "Pour qu’il prépare le repas"
   },
   "correct": "A",
   "explanation": "Le proche prévenu connaît votre destination, votre heure de retour et le nombre de personnes à bord : c’est lui qui donnera l’alerte si vous ne rentrez pas.",
   "tags": [
    "armement"
   ],
   "concept": "prevenir-proche"
  },
  {
   "id": "var_prevenir-proche_2",
   "sectionId": "mod4_sec2",
   "question": "Avant une sortie, vous prévenez un proche. Quelle information est inutile ?",
   "options": {
    "A": "Votre heure de retour prévue",
    "B": "Le nombre de personnes à bord",
    "C": "La marque de votre moteur",
    "D": "Votre destination"
   },
   "correct": "C",
   "explanation": "On indique à un proche la destination, l’heure de retour prévue et le nombre de personnes à bord.",
   "tags": [
    "armement"
   ],
   "concept": "prevenir-proche"
  },
  {
   "id": "var_prevenir-proche_3",
   "sectionId": "mod4_sec2",
   "question": "Vous partez pêcher à la journée vers un motu. Qui prévenez-vous avant de partir, et de quoi ?",
   "options": {
    "A": "La capitainerie : le prix de votre bateau",
    "B": "Un proche : destination, heure de retour et nombre de personnes",
    "C": "Personne, la sortie est courte",
    "D": "Le JRCC Tahiti : la liste de votre matériel et votre numéro de permis"
   },
   "correct": "B",
   "explanation": "Avant chaque sortie, prévenez un proche de votre destination, de votre heure de retour et du nombre de personnes à bord.",
   "tags": [
    "armement"
   ],
   "concept": "prevenir-proche",
   "near": [
    "gen_mod4_sec2_6"
   ]
  },
  {
   "id": "var_prevenir-proche_4",
   "sectionId": "mod4_sec2",
   "question": "Vrai ou faux : si vous avez une VHF à bord, il est inutile de prévenir un proche avant de partir.",
   "options": {
    "A": "Vrai",
    "B": "Faux"
   },
   "correct": "B",
   "explanation": "Faux : on prévient toujours un proche (destination, heure de retour, personnes à bord) ; il pourra donner l’alerte si vous ne rentrez pas, par exemple si vous ne pouvez plus émettre.",
   "tags": [
    "armement"
   ],
   "concept": "prevenir-proche"
  },
  {
   "id": "var_armement-basique-contenu_1",
   "sectionId": "mod4_sec2",
   "question": "Lequel de ces équipements ne fait PAS partie de la dotation basique ?",
   "options": {
    "A": "L’écope",
    "B": "Le dispositif de remorquage",
    "C": "La ligne de mouillage",
    "D": "Les pinoches"
   },
   "correct": "D",
   "explanation": "Les pinoches s’ajoutent en dotation côtière ; l’écope, le filin de remorquage et la ligne de mouillage font partie de la basique.",
   "tags": [
    "armement"
   ],
   "concept": "armement-basique-contenu",
   "near": [
    "gen_mod4_sec2_7"
   ]
  },
  {
   "id": "var_armement-basique-contenu_2",
   "sectionId": "mod4_sec2",
   "question": "En dotation basique, combien d’équipements individuels de flottabilité faut-il ?",
   "options": {
    "A": "Un pour deux personnes, enfants compris",
    "B": "Un par personne à bord, de taille adaptée",
    "C": "Un seul pour le pilote",
    "D": "Aucun si la mer est calme et le lagon peu profond"
   },
   "correct": "B",
   "explanation": "Dès la dotation basique, il faut un gilet ou une brassière approuvé (type 100 ou plus) par personne à bord, de taille adaptée.",
   "tags": [
    "armement"
   ],
   "concept": "armement-basique-contenu"
  },
  {
   "id": "var_armement-basique-contenu_3",
   "sectionId": "mod4_sec2",
   "question": "Votre bateau de 5 m navigue à 1 mille d’un abri. Lequel de ces équipements est obligatoire ?",
   "options": {
    "A": "Une VHF fixe",
    "B": "Un radeau de sauvetage",
    "C": "Un aviron ou des pagaies",
    "D": "Un compas de route"
   },
   "correct": "C",
   "explanation": "Un navire de moins de 8 m doit avoir un aviron et son dispositif de nage, ou une paire de pagaies, dès la dotation basique. Le compas s’ajoute en côtière ; VHF fixe et radeau ne s’imposent qu’au-delà de 5 milles.",
   "tags": [
    "armement"
   ],
   "concept": "armement-basique-contenu"
  },
  {
   "id": "var_armement-basique-contenu_4",
   "sectionId": "mod4_sec2",
   "question": "Vous naviguez à 1 mille d’un abri avec la dotation basique. Lequel de ces équipements devez-vous avoir à bord ?",
   "options": {
    "A": "La bouée de sauvetage",
    "B": "La carte de navigation de la zone",
    "C": "La ligne de mouillage",
    "D": "Le miroir de signalisation"
   },
   "correct": "C",
   "explanation": "Basique (6e catégorie, jusqu’à 2 milles) : gilet par personne, extincteur, seau ou écope, coupe-circuit, 3 feux à main, feux de navigation, ligne de mouillage, aviron ou pagaies, gaffe, filin de remorquage, outillage. Bouée et miroir s’ajoutent en côtière ; la carte n’est exigée qu’au-delà de 5 milles.",
   "tags": [
    "armement"
   ],
   "concept": "armement-basique-contenu"
  },
  {
   "id": "var_armement-cotier-pavillons_1",
   "sectionId": "mod4_sec2",
   "question": "Votre bateau passe de la dotation basique à la dotation côtière. Quels pavillons devez-vous ajouter ?",
   "options": {
    "A": "Le pavillon A de plongée",
    "B": "Les pavillons N et C",
    "C": "La flamme orange",
    "D": "Aucun"
   },
   "correct": "B",
   "explanation": "La dotation côtière ajoute les pavillons N et C, qui hissés l’un au-dessus de l’autre signalent la détresse. La basique ne comprend aucun pavillon.",
   "tags": [
    "armement",
    "pavillons"
   ],
   "concept": "armement-cotier-pavillons",
   "near": [
    "var_armement-feux-main-cotier_4"
   ]
  },
  {
   "id": "var_armement-cotier-pavillons_2",
   "sectionId": "mod4_sec2",
   "question": "À quoi servent les pavillons N et C embarqués en dotation côtière ?",
   "options": {
    "A": "À saluer les autres bateaux en entrant au port",
    "B": "À signaler des plongeurs",
    "C": "À demander un pilote à l’entrée des passes",
    "D": "À signaler une détresse"
   },
   "correct": "D",
   "explanation": "Hissés N au-dessus de C, ces pavillons forment un signal de détresse.",
   "tags": [
    "armement",
    "pavillons"
   ],
   "concept": "armement-cotier-pavillons"
  },
  {
   "id": "var_armement-cotier-pavillons_3",
   "sectionId": "mod4_sec2",
   "question": "Vrai ou faux : les pavillons N et C sont déjà exigés dans la dotation basique.",
   "options": {
    "A": "Vrai",
    "B": "Faux"
   },
   "correct": "B",
   "explanation": "Faux : la basique ne comprend aucun pavillon ; les pavillons N et C s’ajoutent en dotation côtière.",
   "tags": [
    "armement",
    "pavillons"
   ],
   "concept": "armement-cotier-pavillons"
  },
  {
   "id": "var_armement-cotier-pavillons_4",
   "sectionId": "mod4_sec2",
   "question": "Quels pavillons devez-vous avoir à bord d’un bateau armé en côtier ?",
   "options": {
    "A": "Les pavillons N et C",
    "B": "Seulement le pavillon national",
    "C": "Le pavillon A",
    "D": "Aucun pavillon"
   },
   "correct": "A",
   "explanation": "En dotation côtière (5e catégorie), il faut les pavillons N et C. Le pavillon national n’est exigé que de la 1re à la 4e catégorie, hors des eaux territoriales.",
   "tags": [
    "armement",
    "pavillons"
   ],
   "concept": "armement-cotier-pavillons"
  },
  {
   "id": "var_papiers-titre-navigation_1",
   "sectionId": "mod4_sec2",
   "question": "Quel document est souvent surnommé la « carte grise » du bateau ?",
   "options": {
    "A": "Le contrat de location",
    "B": "Le permis côtier",
    "C": "L’acte de francisation",
    "D": "Le certificat restreint de radiotéléphoniste"
   },
   "correct": "C",
   "explanation": "L’acte de francisation (ou la carte de circulation) est le titre de navigation du bateau, sa « carte grise ».",
   "tags": [
    "papiers"
   ],
   "concept": "papiers-titre-navigation"
  },
  {
   "id": "var_papiers-titre-navigation_2",
   "sectionId": "mod4_sec2",
   "question": "Quels documents peuvent servir de titre de navigation à un bateau de plaisance ?",
   "options": {
    "A": "L’acte de vente ou la facture d’achat du moteur",
    "B": "La carte de circulation ou l’acte de francisation",
    "C": "Le permis côtier ou la carte d’identité du propriétaire"
   },
   "correct": "B",
   "explanation": "Le titre de navigation est la carte de circulation ou l’acte de francisation ; il doit être à bord.",
   "tags": [
    "papiers"
   ],
   "concept": "papiers-titre-navigation",
   "near": [
    "ext_sec_15"
   ]
  },
  {
   "id": "var_papiers-titre-navigation_3",
   "sectionId": "mod4_sec2",
   "question": "Lors d’un contrôle en mer, quel document propre au bateau devez-vous présenter ?",
   "options": {
    "A": "Son devis d’assurance",
    "B": "Son acte de vente, à présenter avec la carte d’identité du vendeur",
    "C": "La facture de son dernier entretien moteur, tamponnée par le mécanicien",
    "D": "Son titre de navigation"
   },
   "correct": "D",
   "explanation": "Le titre de navigation (carte de circulation ou acte de francisation) fait partie des pièces à avoir à bord ; l’acte de vente n’a pas à y être.",
   "tags": [
    "papiers"
   ],
   "concept": "papiers-titre-navigation"
  },
  {
   "id": "var_papiers-crr_1",
   "sectionId": "mod4_sec2",
   "question": "Vous faites installer une VHF fixe sur votre bateau. Quel document devez-vous alors posséder ?",
   "options": {
    "A": "Le certificat restreint de radiotéléphoniste (CRR)",
    "B": "Un permis hauturier, obligatoire pour toute VHF fixe",
    "C": "Une licence de pêche",
    "D": "Aucun document supplémentaire"
   },
   "correct": "A",
   "explanation": "Le certificat restreint de radiotéléphoniste (CRR) est exigé lorsque le bateau est équipé d’une VHF fixe.",
   "tags": [
    "papiers"
   ],
   "concept": "papiers-crr",
   "near": [
    "gen_mod4_sec2_5"
   ]
  },
  {
   "id": "var_papiers-crr_2",
   "sectionId": "mod4_sec2",
   "question": "Que signifie le sigle CRR ?",
   "options": {
    "A": "Certificat restreint de radiotéléphoniste",
    "B": "Contrôle radio renforcé des navires de plaisance",
    "C": "Certificat de remorquage",
    "D": "Carte de route réglementaire"
   },
   "correct": "A",
   "explanation": "CRR = certificat restreint de radiotéléphoniste, exigé si le bateau a une VHF fixe.",
   "tags": [
    "papiers"
   ],
   "concept": "papiers-crr"
  },
  {
   "id": "var_papiers-crr_3",
   "sectionId": "mod4_sec2",
   "question": "Vrai ou faux : le CRR est exigé à bord de tout bateau de plaisance, même sans VHF fixe.",
   "options": {
    "A": "Vrai",
    "B": "Faux"
   },
   "correct": "B",
   "explanation": "Faux : le certificat restreint de radiotéléphoniste n’est exigé que si le bateau est équipé d’une VHF fixe.",
   "tags": [
    "papiers"
   ],
   "concept": "papiers-crr",
   "near": [
    "gen_mod4_sec2_5"
   ]
  },
  {
   "id": "var_papiers-crr_4",
   "sectionId": "mod4_sec2",
   "question": "Parmi ces pièces administratives, laquelle n’est exigée que si le bateau a une VHF fixe ?",
   "options": {
    "A": "Le permis côtier, pour un moteur de plus de 6 CV",
    "B": "Le titre de navigation",
    "C": "Le certificat restreint de radiotéléphoniste",
    "D": "Le contrat de location"
   },
   "correct": "C",
   "explanation": "Le CRR est lié à la VHF fixe ; le titre de navigation est exigé à bord, le permis côtier dès que le moteur dépasse 6 CV (4,5 kW), le contrat de location pour un bateau loué.",
   "tags": [
    "papiers"
   ],
   "concept": "papiers-crr"
  },
  {
   "id": "var_permis-obligation_1",
   "sectionId": "mod4_sec2",
   "question": "Votre annexe est équipée d’un moteur de 5 CV. Le permis côtier est-il obligatoire pour la conduire ?",
   "options": {
    "A": "Oui, pour tout moteur",
    "B": "Non, seulement au-delà de 6 CV",
    "C": "Non, seulement au-delà de 10 CV"
   },
   "correct": "B",
   "explanation": "Le permis côtier est obligatoire pour les bateaux de plaisance à moteur de plus de 6 CV (4,5 kW) ; un moteur de 5 CV est en dessous du seuil.",
   "tags": [
    "papiers"
   ],
   "concept": "permis-obligation"
  },
  {
   "id": "var_permis-obligation_2",
   "sectionId": "mod4_sec2",
   "question": "Vous louez un bateau équipé d’un moteur de 40 CV. Devez-vous être titulaire du permis côtier pour le conduire ?",
   "options": {
    "A": "Non",
    "B": "Seulement au-delà de 100 CV",
    "C": "Oui",
    "D": "Seulement de nuit"
   },
   "correct": "C",
   "explanation": "Au-delà de 6 CV (4,5 kW), le permis côtier est obligatoire pour conduire un bateau de plaisance à moteur.",
   "tags": [
    "papiers"
   ],
   "concept": "permis-obligation"
  },
  {
   "id": "var_permis-obligation_3",
   "sectionId": "mod4_sec2",
   "question": "Au-delà de quelle puissance en kilowatts le permis côtier est-il obligatoire ?",
   "options": {
    "A": "4,5 kW",
    "B": "7,5 kW",
    "C": "25 kW",
    "D": "75 kW"
   },
   "correct": "A",
   "explanation": "Le permis côtier est obligatoire au-delà de 4,5 kW, soit 6 CV.",
   "tags": [
    "papiers"
   ],
   "concept": "permis-obligation"
  },
  {
   "id": "var_permis-obligation_4",
   "sectionId": "mod4_sec2",
   "question": "Un jet-ski (VNM) a un moteur de 110 CV. Faut-il le permis côtier pour le piloter ?",
   "options": {
    "A": "Non",
    "B": "Oui",
    "C": "Seulement au-delà de la bande des 300 m"
   },
   "correct": "B",
   "explanation": "Le permis côtier est requis pour conduire un bateau de plaisance ou un VNM de plus de 6 CV (4,5 kW).",
   "tags": [
    "papiers",
    "loisirs"
   ],
   "concept": "permis-obligation",
   "near": [
    "var_vnm-permis_1"
   ]
  },
  {
   "id": "var_permis-cotier-limite_1",
   "sectionId": "mod4_sec2",
   "question": "Titulaire du permis côtier, vous voulez aller pêcher à 8 milles d’un abri au large de Tahiti. Le pouvez-vous ?",
   "options": {
    "A": "Non, le permis côtier limite à 2 milles d’un abri",
    "B": "Oui, jusqu’à 10 milles d’un abri en Polynésie",
    "C": "Non, le permis côtier limite à 5 milles d’un abri"
   },
   "correct": "C",
   "explanation": "En Polynésie française, le permis côtier permet de naviguer jusqu’à 5 milles d’un abri : 8 milles est au-delà.",
   "tags": [
    "papiers"
   ],
   "concept": "permis-cotier-limite"
  },
  {
   "id": "var_permis-cotier-limite_2",
   "sectionId": "mod4_sec2",
   "question": "Un livre de métropole indique que le permis côtier permet de naviguer jusqu’à 6 milles d’un abri. Quelle limite retenir en Polynésie française ?",
   "options": {
    "A": "5 milles",
    "B": "6 milles",
    "C": "2 milles",
    "D": "12 milles"
   },
   "correct": "A",
   "explanation": "En Polynésie française, la navigation avec le permis côtier est limitée à 5 milles d’un abri ; les 6 milles sont la limite de métropole.",
   "tags": [
    "papiers"
   ],
   "concept": "permis-cotier-limite",
   "near": [
    "gen_mod4_sec2_10"
   ]
  },
  {
   "id": "var_permis-cotier-limite_3",
   "sectionId": "mod4_sec2",
   "question": "En Polynésie française, la limite de navigation du permis côtier se mesure à partir de quoi ?",
   "options": {
    "A": "De la barrière de corail",
    "B": "De la capitainerie",
    "C": "Du rivage le plus proche",
    "D": "D’un abri"
   },
   "correct": "D",
   "explanation": "Le permis côtier permet de naviguer jusqu’à 5 milles d’un abri, c’est-à-dire d’un endroit où l’on peut se mettre en sécurité et repartir sans assistance.",
   "tags": [
    "papiers"
   ],
   "concept": "permis-cotier-limite"
  },
  {
   "id": "var_permis-cotier-limite_4",
   "sectionId": "mod4_sec2",
   "question": "Vrai ou faux : en Polynésie française, le permis côtier permet de conduire un bateau de plaisance jusqu’à 5 milles d’un abri, de jour comme de nuit.",
   "options": {
    "A": "Vrai",
    "B": "Faux"
   },
   "correct": "A",
   "explanation": "Vrai : en Polynésie française, le permis côtier autorise la navigation jusqu’à 5 milles d’un abri, de jour comme de nuit (les VNM, eux, naviguent de jour uniquement).",
   "tags": [
    "papiers"
   ],
   "concept": "permis-cotier-limite"
  },
  {
   "id": "var_carburant-calcul-quantite_1",
   "sectionId": "mod4_sec2",
   "question": "Vous devez rejoindre un mouillage situé à 28 milles. Votre vitesse sera de 7 nœuds et votre moteur consomme 15 litres par heure. Quelle quantité de carburant embarquez-vous, marge de 30 % comprise ?",
   "options": {
    "A": "60 litres",
    "B": "70 litres",
    "C": "78 litres",
    "D": "84 litres"
   },
   "correct": "C",
   "explanation": "Temps : 28 ÷ 7 = 4 h ; consommation : 4 × 15 = 60 l ; marge : 30 % de 60 = 18 l ; total : 60 + 18 = 78 litres.",
   "tags": [
    "carburant"
   ],
   "concept": "carburant-calcul-quantite"
  },
  {
   "id": "var_carburant-calcul-autonomie_1",
   "sectionId": "mod4_sec2",
   "question": "Votre bateau dispose de 80 litres de carburant et consomme 7 litres par heure. En conservant une réserve de 30 %, quelle est son autonomie ?",
   "options": {
    "A": "6 heures",
    "B": "8 heures",
    "C": "10 heures",
    "D": "Environ 11 heures et demie"
   },
   "correct": "B",
   "explanation": "Carburant utilisable : 80 − 30 % de 80 = 80 − 24 = 56 l ; autonomie : 56 ÷ 7 = 8 heures.",
   "tags": [
    "carburant"
   ],
   "concept": "carburant-calcul-autonomie",
   "near": [
    "gen_mod4_sec2_3"
   ]
  },
  {
   "id": "var_carburant-calcul-autonomie_2",
   "sectionId": "mod4_sec2",
   "question": "Votre réservoir contient 100 litres. Vous consommez 14 litres par heure à 20 nœuds. Quelle distance pouvez-vous parcourir en conservant une marge de sécurité de 30 % ?",
   "options": {
    "A": "70 milles",
    "B": "100 milles",
    "C": "Environ 143 milles",
    "D": "130 milles"
   },
   "correct": "B",
   "explanation": "Carburant utilisable : 100 − 30 = 70 l ; autonomie : 70 ÷ 14 = 5 h ; distance : 5 × 20 = 100 milles.",
   "tags": [
    "carburant"
   ],
   "concept": "carburant-calcul-autonomie",
   "near": [
    "exam_q4_19"
   ]
  },
  {
   "id": "var_carburant-calcul-autonomie_3",
   "sectionId": "mod4_sec2",
   "question": "Vous avez 45 litres de carburant, votre moteur consomme 9 litres par heure à 10 nœuds. Pouvez-vous faire l’aller-retour vers un motu situé à 20 milles (40 milles au total) en gardant la marge de 30 % ?",
   "options": {
    "A": "Oui : vous pouvez parcourir 50 milles",
    "B": "Non : avec la marge de 30 %, vous ne parcourez que 35 milles",
    "C": "Non : avec la marge de 30 %, vous ne parcourez que 30 milles"
   },
   "correct": "B",
   "explanation": "Carburant utilisable : 45 − 30 % de 45 = 31,5 l ; autonomie : 31,5 ÷ 9 = 3,5 h ; distance : 3,5 × 10 = 35 milles, moins que les 40 milles de l’aller-retour.",
   "tags": [
    "carburant"
   ],
   "concept": "carburant-calcul-autonomie"
  },
  {
   "id": "var_carburant-marge_1",
   "sectionId": "mod4_sec2",
   "question": "Pourquoi prend-on toujours une marge de sécurité de 30 % sur le carburant ?",
   "options": {
    "A": "Car la consommation varie selon vent, courant, vitesse et vétusté du moteur",
    "B": "Parce que le réservoir n’est jamais plein, même juste après le plein",
    "C": "Pour pouvoir dépanner d’autres bateaux",
    "D": "Parce que le carburant s’évapore au soleil dans les réservoirs non ventilés"
   },
   "correct": "A",
   "explanation": "La consommation, en litres par heure, est très variable : elle dépend des vents et des courants, de la vitesse et de la vétusté du moteur. D’où une marge de 30 %.",
   "tags": [
    "carburant"
   ],
   "concept": "carburant-marge"
  },
  {
   "id": "var_carburant-marge_2",
   "sectionId": "mod4_sec2",
   "question": "Ajouter la marge de sécurité de 30 % à une quantité de carburant revient à la multiplier par :",
   "options": {
    "A": "1,03",
    "B": "1,3",
    "C": "3",
    "D": "0,7"
   },
   "correct": "B",
   "explanation": "Ajouter 30 %, c’est multiplier par 1,3 (par exemple 30 l × 1,3 = 39 l) ; retirer 30 %, c’est multiplier par 0,7.",
   "tags": [
    "carburant"
   ],
   "concept": "carburant-marge"
  },
  {
   "id": "var_carburant-marge_3",
   "sectionId": "mod4_sec2",
   "question": "Votre réservoir contient 60 litres. Combien de litres considérez-vous comme utilisables pour calculer votre autonomie, en gardant la marge de 30 % ?",
   "options": {
    "A": "18 litres",
    "B": "42 litres",
    "C": "57 litres",
    "D": "60 litres"
   },
   "correct": "B",
   "explanation": "On garde 30 % en réserve : 60 − 30 % de 60 = 60 − 18 = 42 litres utilisables (60 × 0,7 = 42).",
   "tags": [
    "carburant"
   ],
   "concept": "carburant-marge"
  },
  {
   "id": "var_carburant-marge_4",
   "sectionId": "mod4_sec2",
   "question": "Vrai ou faux : par mer calme et avec un moteur neuf, on peut se passer de la marge de sécurité de 30 % sur le carburant.",
   "options": {
    "A": "Vrai",
    "B": "Faux"
   },
   "correct": "B",
   "explanation": "Faux : on prend toujours une marge de 30 %, car la consommation varie (vents, courants, vitesse, état du moteur) et les conditions peuvent changer.",
   "tags": [
    "carburant"
   ],
   "concept": "carburant-marge"
  },
  {
   "id": "var_mammiferes-vitesse_1",
   "sectionId": "mod4_sec3",
   "question": "Dans quel rayon autour d’une baleine faut-il limiter sa vitesse à 3 nœuds ?",
   "options": {
    "A": "50 m",
    "B": "100 m",
    "C": "300 m",
    "D": "1 mille"
   },
   "correct": "C",
   "explanation": "La vitesse est réduite à 3 nœuds dans un rayon de 300 m autour du cétacé (zone de prudence).",
   "tags": [
    "environnement"
   ],
   "concept": "mammiferes-vitesse",
   "near": [
    "gen_mod4_sec3_9"
   ]
  },
  {
   "id": "var_mammiferes-vitesse_2",
   "sectionId": "mod4_sec3",
   "question": "Vous naviguez à 15 nœuds et apercevez une baleine à bosse à 200 m sur votre travers. Que faites-vous ?",
   "options": {
    "A": "Je réduis à 10 nœuds",
    "B": "Je garde ma vitesse, elle s’écartera d’elle-même à mon approche",
    "C": "Je réduis à 3 nœuds au plus, sans manœuvre brusque",
    "D": "J’accélère pour passer avant elle"
   },
   "correct": "C",
   "explanation": "À moins de 300 m d’un cétacé, la vitesse est limitée à 3 nœuds et on évite les changements brusques de direction et de régime moteur.",
   "tags": [
    "environnement"
   ],
   "concept": "mammiferes-vitesse"
  },
  {
   "id": "var_mammiferes-vitesse_3",
   "sectionId": "mod4_sec3",
   "question": "Dans la zone de prudence de 300 m autour d’un cétacé, quelle conduite adopter ?",
   "options": {
    "A": "Couper et relancer le moteur régulièrement pour signaler sa présence",
    "B": "Naviguer à 3 nœuds au plus, sans manœuvre brusque",
    "C": "Naviguer à 5 nœuds comme dans la bande des 300 m du rivage",
    "D": "Faire des cercles autour de l’animal pour l’observer"
   },
   "correct": "B",
   "explanation": "Dans un rayon de 300 m autour du cétacé : 3 nœuds au maximum et pas de brusques changements de direction ni de régime moteur.",
   "tags": [
    "environnement"
   ],
   "concept": "mammiferes-vitesse"
  },
  {
   "id": "var_mammiferes-vitesse_4",
   "sectionId": "mod4_sec3",
   "question": "Dans le lagon, à moins de 300 m du rivage, une baleine à bosse croise à 150 m de vous. Quelle est votre vitesse maximale ?",
   "options": {
    "A": "5 nœuds, comme dans toute la bande des 300 m",
    "B": "8 nœuds",
    "C": "3 nœuds",
    "D": "Aucune limite si vous gardez vos distances"
   },
   "correct": "C",
   "explanation": "Les deux règles s’appliquent en même temps : 5 nœuds dans la bande des 300 m du rivage, et 3 nœuds dans un rayon de 300 m autour d’un cétacé. On respecte la plus basse : 3 nœuds.",
   "tags": [
    "environnement"
   ],
   "concept": "mammiferes-vitesse"
  },
  {
   "id": "var_mammiferes-mere-petit_1",
   "sectionId": "mod4_sec3",
   "question": "Une baleine et son baleineau nagent près de vous. Où ne devez-vous jamais placer votre bateau ?",
   "options": {
    "A": "À plus de 300 m du groupe",
    "B": "À l’arrêt, moteur coupé, à bonne distance",
    "C": "Sur le côté du groupe, à distance",
    "D": "Entre la mère et son petit"
   },
   "correct": "D",
   "explanation": "On ne se place jamais entre une mère et son petit ; on reste sur le côté, à distance, sans les encercler.",
   "tags": [
    "environnement"
   ],
   "concept": "mammiferes-mere-petit",
   "near": [
    "gen_mod4_sec3_10"
   ]
  },
  {
   "id": "var_mammiferes-mere-petit_2",
   "sectionId": "mod4_sec3",
   "question": "À 400 m devant vous, une baleine nage avec son baleineau, à quelques dizaines de mètres l’un de l’autre. Votre route passe entre les deux. Que faites-vous ?",
   "options": {
    "A": "Je ralentis et me décale sur le côté du groupe, sans passer entre eux",
    "B": "Je garde ma route en ralentissant à 3 nœuds dans les 300 m",
    "C": "Je passe entre les deux rapidement pour ne pas les déranger longtemps"
   },
   "correct": "A",
   "explanation": "Il ne faut jamais se placer entre une mère et son petit, quelle que soit la vitesse : on ralentit (3 nœuds dans un rayon de 300 m) et on se décale sur le côté du groupe.",
   "tags": [
    "environnement"
   ],
   "concept": "mammiferes-mere-petit"
  },
  {
   "id": "var_mammiferes-mere-petit_3",
   "sectionId": "mod4_sec3",
   "question": "Vrai ou faux : passer entre une baleine et son baleineau est toléré si l’on navigue à 3 nœuds au plus.",
   "options": {
    "A": "Vrai",
    "B": "Faux"
   },
   "correct": "B",
   "explanation": "Faux : se placer entre une mère et son petit est interdit, quelle que soit la vitesse.",
   "tags": [
    "environnement"
   ],
   "concept": "mammiferes-mere-petit"
  },
  {
   "id": "var_mammiferes-mere-petit_4",
   "sectionId": "mod4_sec3",
   "question": "Un passager vous demande de vous placer entre une baleine et son petit pour faire une photo. Que lui répondez-vous ?",
   "options": {
    "A": "C’est possible, moteur coupé",
    "B": "C’est possible, très brièvement",
    "C": "C’est interdit",
    "D": "C’est interdit, sauf si la mère est loin"
   },
   "correct": "C",
   "explanation": "Ne jamais se placer entre une mère et son petit ; on observe depuis le côté, à distance.",
   "tags": [
    "environnement"
   ],
   "concept": "mammiferes-mere-petit"
  },
  {
   "id": "var_vnm-distance_1",
   "sectionId": "mod4_sec3",
   "question": "En Polynésie française, jusqu’à quelle distance du rivage un véhicule nautique à moteur peut-il s’éloigner lorsque le pilote est assis ?",
   "options": {
    "A": "1 mille",
    "B": "2 milles",
    "C": "5 milles",
    "D": "6 milles"
   },
   "correct": "B",
   "explanation": "L’arrêté n° 1097 CM limite les VNM à 2 milles du rivage pilote assis et à 1 mille pilote debout. Les chiffres de 6 et 2 milles sont ceux de la métropole.",
   "tags": [
    "loisirs"
   ],
   "concept": "vnm-distance"
  },
  {
   "id": "var_vnm-distance_2",
   "sectionId": "mod4_sec3",
   "question": "En Polynésie française, vous pilotez un jet-ski debout et vous vous trouvez à 1,5 mille du rivage. Êtes-vous en règle ?",
   "options": {
    "A": "Non, debout la limite est de 1 mille",
    "B": "Non, un VNM doit rester dans la bande des 300 m",
    "C": "Oui, la limite est de 2 milles du rivage, debout ou assis"
   },
   "correct": "A",
   "explanation": "Pilote debout, un VNM ne doit pas s’éloigner à plus de 1 mille du rivage (2 milles seulement si le pilote est assis).",
   "tags": [
    "loisirs"
   ],
   "concept": "vnm-distance"
  },
  {
   "id": "var_vnm-distance_3",
   "sectionId": "mod4_sec3",
   "question": "Quelles limites d’éloignement s’appliquent à un véhicule nautique à moteur en Polynésie française ?",
   "options": {
    "A": "Assis : 6 milles d’un abri ; debout : 2 milles",
    "B": "Debout : 2 milles du rivage ; assis : 1 mille",
    "C": "Aucune différence : 5 milles d’un abri, comme tout bateau",
    "D": "Assis : 2 milles du rivage ; debout : 1 mille"
   },
   "correct": "D",
   "explanation": "En Polynésie française (arrêté n° 1097 CM), le VNM reste à moins de 2 milles du rivage pilote assis et 1 mille pilote debout, de jour uniquement.",
   "tags": [
    "loisirs"
   ],
   "concept": "vnm-distance"
  },
  {
   "id": "var_vnm-nuit_1",
   "sectionId": "mod4_sec3",
   "question": "Le soleil se couche alors que vous êtes encore en jet-ski dans le lagon. Que faites-vous ?",
   "options": {
    "A": "Je continue en restant dans la bande des 300 m",
    "B": "Je continue à 5 nœuds maximum",
    "C": "J’allume une lampe torche et je continue",
    "D": "Je rentre immédiatement"
   },
   "correct": "D",
   "explanation": "Un véhicule nautique à moteur évolue uniquement de jour : jamais de nuit, en aucun cas.",
   "tags": [
    "loisirs"
   ],
   "concept": "vnm-nuit"
  },
  {
   "id": "var_vnm-nuit_2",
   "sectionId": "mod4_sec3",
   "question": "Un VNM équipé de feux de navigation peut-il sortir de nuit ?",
   "options": {
    "A": "Non, en aucun cas",
    "B": "Non, sauf dans le lagon",
    "C": "Oui, avec ses feux allumés"
   },
   "correct": "A",
   "explanation": "La navigation des VNM est autorisée de jour uniquement ; les feux n’y changent rien.",
   "tags": [
    "loisirs"
   ],
   "concept": "vnm-nuit",
   "near": [
    "c13_loisirs_03",
    "ext_sec_10"
   ]
  },
  {
   "id": "var_vnm-nuit_3",
   "sectionId": "mod4_sec3",
   "question": "Pendant quelle période un véhicule nautique à moteur est-il autorisé à naviguer ?",
   "options": {
    "A": "De jour comme de nuit, jusqu’à 5 milles d’un abri",
    "B": "De jour, et de nuit s’il porte des feux",
    "C": "Du lever du soleil jusqu’à minuit",
    "D": "Du lever au coucher du soleil"
   },
   "correct": "D",
   "explanation": "Le VNM évolue uniquement de jour (arrêté n° 1097 CM), avec le permis côtier et dans les limites de 2 milles (assis) ou 1 mille (debout) du rivage.",
   "tags": [
    "loisirs"
   ],
   "concept": "vnm-nuit"
  },
  {
   "id": "var_plongee-distance_1",
   "sectionId": "mod4_sec3",
   "question": "Vous êtes à 50 m d’un bateau qui arbore ce pavillon. Que faites-vous ?",
   "options": {
    "A": "Rien, la distance minimale est de 25 m",
    "B": "J’émets un son prolongé et je continue",
    "C": "Je m’approche pour lui proposer de l’aide",
    "D": "Je m’éloigne pour passer à plus de 100 m"
   },
   "correct": "D",
   "explanation": "Le pavillon A signale des plongeurs en immersion : il faut naviguer à plus de 100 m de ce bateau.",
   "figure": {
    "fig": "flag",
    "flag": "A"
   },
   "tags": [
    "loisirs"
   ],
   "concept": "plongee-distance"
  },
  {
   "id": "var_ski-chute-remorque_1",
   "sectionId": "mod4_sec3",
   "question": "Pourquoi faut-il remonter la remorque dès que le skieur tombe ?",
   "options": {
    "A": "Pour qu’elle ne se prenne pas dans l’hélice",
    "B": "Pour pouvoir accélérer",
    "C": "Pour signaler la chute aux autres bateaux",
    "D": "Pour que le skieur nage jusqu’au bateau"
   },
   "correct": "A",
   "explanation": "Chaque fois que la personne tractée tombe, on remonte la remorque tout de suite pour qu’elle ne se prenne pas dans l’hélice, puis on revient doucement vers elle.",
   "tags": [
    "loisirs"
   ],
   "concept": "ski-chute-remorque"
  },
  {
   "id": "var_ski-chute-remorque_2",
   "sectionId": "mod4_sec3",
   "question": "Vous tractez une bouée et la personne tractée tombe à l’eau. Quelle est la bonne réaction ?",
   "options": {
    "A": "Remonter la remorque, puis revenir doucement vers elle",
    "B": "Laisser traîner la remorque pour qu’elle puisse la rattraper",
    "C": "Revenir à pleine vitesse vers elle, remorque à l’eau"
   },
   "correct": "A",
   "explanation": "Engin tracté ou ski : dès la chute, on remonte la remorque, puis on revient doucement vers la personne.",
   "tags": [
    "loisirs"
   ],
   "concept": "ski-chute-remorque",
   "near": [
    "var_ski-chute-remorque_3"
   ]
  },
  {
   "id": "var_ski-chute-remorque_3",
   "sectionId": "mod4_sec3",
   "question": "Dans quel ordre agissez-vous après la chute du skieur que vous tractez ?",
   "options": {
    "A": "Revenir vers le skieur, puis remonter la remorque",
    "B": "Attendre que le skieur fasse signe, puis remonter la remorque",
    "C": "Tourner autour du skieur en gardant la remorque à l’eau",
    "D": "Remonter la remorque, puis revenir doucement vers le skieur"
   },
   "correct": "D",
   "explanation": "La remorque se remonte en premier, tout de suite, pour qu’elle ne se prenne pas dans l’hélice ; ensuite seulement on revient doucement vers le skieur.",
   "tags": [
    "loisirs"
   ],
   "concept": "ski-chute-remorque",
   "near": [
    "var_ski-chute-remorque_2"
   ]
  },
  {
   "id": "var_ski-deux-personnes_1",
   "sectionId": "mod4_sec3",
   "question": "Vous n’avez pas de brevet d’État de moniteur de ski nautique. Qui doit être à bord pour tracter un skieur ?",
   "options": {
    "A": "Un pilote et une personne chargée de surveiller le skieur",
    "B": "Le pilote seul, s’il est titulaire du permis côtier",
    "C": "Trois personnes : pilote, surveillant et équipier de secours"
   },
   "correct": "A",
   "explanation": "Le bateau tracteur a 2 personnes à bord : un pilote et un surveillant qui regarde le skieur en permanence. Seul le titulaire du brevet d’État de moniteur peut être seul.",
   "tags": [
    "loisirs"
   ],
   "concept": "ski-deux-personnes"
  },
  {
   "id": "var_planche-distance_1",
   "sectionId": "mod4_sec3",
   "question": "Un véliplanchiste veut s’éloigner à 3 milles de l’abri le plus proche. Est-ce permis ?",
   "options": {
    "A": "Oui, la limite des planches est de 5 milles d’un abri",
    "B": "Oui, à condition de naviguer de jour uniquement",
    "C": "Non, la limite est de 1 mille",
    "D": "Non, la limite est de 2 milles"
   },
   "correct": "D",
   "explanation": "La navigation des planches à voile et des kitesurfs est limitée à 2 milles d’un abri.",
   "tags": [
    "loisirs"
   ],
   "concept": "planche-distance"
  },
  {
   "id": "var_planche-distance_2",
   "sectionId": "mod4_sec3",
   "question": "Vous apercevez un kitesurfeur à 4 milles au large, loin de tout abri. Que pouvez-vous en dire ?",
   "options": {
    "A": "Il est en infraction",
    "B": "Il est en règle s’il porte un gilet",
    "C": "Il est en règle"
   },
   "correct": "A",
   "explanation": "Planches à voile et kitesurfs ne doivent pas s’éloigner de plus de 2 milles d’un abri.",
   "tags": [
    "loisirs"
   ],
   "concept": "planche-distance"
  },
  {
   "id": "var_planche-distance_3",
   "sectionId": "mod4_sec3",
   "question": "Laquelle de ces affirmations sur les planches à voile et les kitesurfs est exacte ?",
   "options": {
    "A": "Ils doivent rester dans la bande des 300 m du rivage",
    "B": "Ils peuvent aller jusqu’à 5 milles d’un abri, de jour",
    "C": "Ils ne sont soumis à aucune limite de distance",
    "D": "Ils sont limités à 2 milles d’un abri"
   },
   "correct": "D",
   "explanation": "Planches à voile et kites sont prioritaires sur les bateaux à moteur, et leur navigation est limitée à 2 milles d’un abri.",
   "tags": [
    "loisirs"
   ],
   "concept": "planche-distance"
  },
  {
   "id": "var_picto-ski-interdit_1",
   "sectionId": "mod4_sec3",
   "question": "Sur une bouée de plage, un panneau carré montre un skieur nautique barré d’une diagonale rouge. Que signifie-t-il ?",
   "options": {
    "A": "Zone réservée à la pratique du ski nautique",
    "B": "Ski nautique autorisé à 5 nœuds maximum",
    "C": "Chenal d’accès des skieurs",
    "D": "Ski nautique interdit dans cette zone"
   },
   "correct": "D",
   "explanation": "Un pictogramme barré de rouge indique une activité interdite ; non barré, il indique une activité autorisée.",
   "tags": [
    "loisirs"
   ],
   "concept": "picto-ski-interdit",
   "near": [
    "var_picto-ski-interdit_2",
    "var_picto-ski-interdit_4",
    "var_picto-vnm-interdit_1"
   ]
  },
  {
   "id": "var_picto-ski-interdit_2",
   "sectionId": "mod4_sec3",
   "question": "Quel panneau indique que le ski nautique est interdit ?",
   "options": {
    "A": "Un skieur nautique barré d’une diagonale rouge",
    "B": "Un jet-ski barré d’une diagonale rouge",
    "C": "Un skieur nautique noir, sans barre rouge"
   },
   "correct": "A",
   "explanation": "Les pictogrammes de plage barrés de rouge interdisent l’activité représentée : ici le ski nautique (le jet-ski barré interdit les VNM).",
   "tags": [
    "loisirs"
   ],
   "concept": "picto-ski-interdit",
   "near": [
    "var_picto-ski-interdit_1"
   ]
  },
  {
   "id": "var_picto-ski-interdit_3",
   "sectionId": "mod4_sec3",
   "question": "Vous tractez un skieur et vous apercevez sur la plage un pictogramme représentant un skieur nautique barré de rouge. Que faites-vous ?",
   "options": {
    "A": "Je ne pratique pas le ski nautique dans cette zone",
    "B": "Je continue en restant à 5 nœuds",
    "C": "Je continue, le panneau ne concerne que les baigneurs"
   },
   "correct": "A",
   "explanation": "Le pictogramme barré de rouge signifie que le ski nautique est interdit dans la zone signalée.",
   "tags": [
    "loisirs"
   ],
   "concept": "picto-ski-interdit"
  },
  {
   "id": "var_picto-ski-interdit_4",
   "sectionId": "mod4_sec3",
   "question": "Un pictogramme montre un skieur nautique, sans barre rouge. Que signifie-t-il ?",
   "options": {
    "A": "Ski nautique autorisé",
    "B": "Zone de baignade",
    "C": "Ski nautique interdit"
   },
   "correct": "A",
   "explanation": "Un pictogramme non barré indique une activité autorisée ; barré de rouge, il indique une activité interdite.",
   "tags": [
    "loisirs"
   ],
   "concept": "picto-ski-interdit",
   "near": [
    "var_picto-ski-interdit_1"
   ]
  },
  {
   "id": "var_picto-vnm-interdit_1",
   "sectionId": "mod4_sec3",
   "question": "Un panneau carré montre un jet-ski barré d’une diagonale rouge. Que signifie-t-il ?",
   "options": {
    "A": "Zone réservée aux jet-skis",
    "B": "Vitesse limitée à 5 nœuds pour les jet-skis",
    "C": "Location de jet-skis",
    "D": "Jet-skis interdits dans cette zone"
   },
   "correct": "D",
   "explanation": "Un pictogramme barré de rouge interdit l’activité représentée : ici, les véhicules nautiques à moteur.",
   "tags": [
    "loisirs"
   ],
   "concept": "picto-vnm-interdit",
   "near": [
    "var_picto-ski-interdit_1",
    "var_picto-vnm-interdit_3"
   ]
  },
  {
   "id": "var_picto-vnm-interdit_2",
   "sectionId": "mod4_sec3",
   "question": "En jet-ski, vous voyez sur une bouée un pictogramme représentant un VNM barré de rouge. Que faites-vous ?",
   "options": {
    "A": "Je n’y entre pas avec mon VNM",
    "B": "J’entre à 5 nœuds maximum, en ligne droite",
    "C": "J’entre, à condition de piloter assis"
   },
   "correct": "A",
   "explanation": "Le pictogramme de VNM barré de rouge interdit la zone aux véhicules nautiques à moteur.",
   "tags": [
    "loisirs"
   ],
   "concept": "picto-vnm-interdit"
  },
  {
   "id": "var_picto-vnm-interdit_3",
   "sectionId": "mod4_sec3",
   "question": "Quel pictogramme interdit l’accès aux jet-skis ?",
   "options": {
    "A": "Un jet-ski barré d’une diagonale rouge",
    "B": "Un skieur nautique barré d’une diagonale rouge",
    "C": "Un jet-ski sans barre rouge"
   },
   "correct": "A",
   "explanation": "Le jet-ski barré de rouge interdit les VNM ; non barré, il signale que les VNM sont autorisés.",
   "tags": [
    "loisirs"
   ],
   "concept": "picto-vnm-interdit",
   "near": [
    "var_picto-vnm-interdit_1"
   ]
  },
  {
   "id": "var_picto-vnm-interdit_4",
   "sectionId": "mod4_sec3",
   "question": "Un pictogramme de plage interdisant les VNM concerne :",
   "options": {
    "A": "Les planches à voile et les kitesurfs",
    "B": "Les baigneurs et les plongeurs",
    "C": "Les voiliers",
    "D": "Les jet-skis et motos de mer"
   },
   "correct": "D",
   "explanation": "Les véhicules nautiques à moteur regroupent jet-skis, motos et scooters des mers : c’est eux que vise le pictogramme de VNM barré de rouge.",
   "tags": [
    "loisirs"
   ],
   "concept": "picto-vnm-interdit"
  },
  {
   "id": "var_ski-flamme_1",
   "sectionId": "mod4_sec3",
   "question": "Un bateau à moteur arbore ce pavillon. Que signale-t-il ?",
   "options": {
    "A": "Des plongeurs en immersion autour de lui",
    "B": "Il est en pêche, filets à la traîne",
    "C": "Il est en détresse et demande de l’aide",
    "D": "Il tracte un skieur nautique ou un engin"
   },
   "correct": "D",
   "explanation": "La flamme orange fluorescente de 2 m est arborée par le bateau qui tracte un skieur nautique ou un engin tracté.",
   "figure": {
    "fig": "flag",
    "flag": "ski"
   },
   "tags": [
    "loisirs"
   ],
   "concept": "ski-flamme"
  },
  {
   "id": "var_ski-flamme_2",
   "sectionId": "mod4_sec3",
   "question": "Quelle flamme doit porter un bateau qui tracte un skieur nautique ?",
   "options": {
    "A": "Une flamme rouge de 1 m",
    "B": "Une flamme jaune de 50 cm",
    "C": "Une flamme blanche et bleue de 1 m",
    "D": "Une flamme orange de 2 m"
   },
   "correct": "D",
   "explanation": "Le bateau tracteur arbore une flamme orange fluorescente de 2 m.",
   "tags": [
    "loisirs"
   ],
   "concept": "ski-flamme",
   "near": [
    "gen_mod4_sec3_2"
   ]
  },
  {
   "id": "var_ski-flamme_3",
   "sectionId": "mod4_sec3",
   "question": "Vous croisez un bateau qui arbore une flamme orange fluorescente. Quelle précaution prenez-vous ?",
   "options": {
    "A": "Je reste vigilant et hors de son sillage",
    "B": "Je passe dans son sillage pour rester à l’abri de ses vagues d’étrave",
    "C": "J’émets 5 sons brefs pour lui signaler ma présence"
   },
   "correct": "A",
   "explanation": "La flamme orange signale un bateau qui tracte un skieur ou un engin : les autres bateaux évitent son sillage et restent vigilants près de lui.",
   "tags": [
    "loisirs"
   ],
   "concept": "ski-flamme"
  },
  {
   "id": "var_ski-flamme_4",
   "sectionId": "mod4_sec3",
   "question": "Vous allez tracter une bouée avec des enfants. Quel signe distinctif votre bateau doit-il arborer ?",
   "options": {
    "A": "Aucun signe particulier",
    "B": "Le pavillon rouge à diagonale blanche",
    "C": "Le pavillon A",
    "D": "Une flamme orange"
   },
   "correct": "D",
   "explanation": "Les engins tractés (bouée, banane…) suivent les règles du ski nautique : le bateau tracteur arbore une flamme orange fluorescente de 2 m. Le pavillon rouge à diagonale blanche et le pavillon A signalent des plongeurs.",
   "tags": [
    "loisirs"
   ],
   "concept": "ski-flamme",
   "near": [
    "gen_mod4_sec3_2"
   ]
  },
  {
   "id": "var_plongee-traverser_1",
   "sectionId": "mod4_sec3",
   "question": "Pourquoi ne faut-il jamais passer au-dessus des bulles dans une zone de plongée ?",
   "options": {
    "A": "Des plongeurs se trouvent juste en dessous",
    "B": "Elles font caviter l’hélice et abîment la coque",
    "C": "Elles ralentissent le bateau"
   },
   "correct": "A",
   "explanation": "Les bulles trahissent des plongeurs en immersion : on les surveille et on ne passe pas dessus, à allure très réduite, prêt à passer au point mort.",
   "tags": [
    "loisirs"
   ],
   "concept": "plongee-traverser"
  },
  {
   "id": "var_plongee-traverser_2",
   "sectionId": "mod4_sec3",
   "question": "Vous avez une raison valable d’entrer dans la zone des 100 m autour d’un bateau de plongée. Comment naviguez-vous ?",
   "options": {
    "A": "À vitesse normale, en ligne droite, pour en sortir au plus vite",
    "B": "En émettant 5 sons brefs pour prévenir les plongeurs de votre passage",
    "C": "Moteur relevé, en se laissant dériver avec le courant",
    "D": "Très lentement, prêt à passer au point mort"
   },
   "correct": "D",
   "explanation": "On n’entre dans la zone qu’avec une raison valable : ralentir fortement, surveiller les bulles (ne pas passer dessus) et être prêt à passer au point mort.",
   "tags": [
    "loisirs"
   ],
   "concept": "plongee-traverser"
  },
  {
   "id": "var_plongee-traverser_3",
   "sectionId": "mod4_sec3",
   "question": "Vous avez dû traverser une zone de plongée. En la quittant, que faites-vous ?",
   "options": {
    "A": "Je garde les mêmes précautions jusqu’à en être sorti",
    "B": "J’accélère dès que j’ai dépassé le bateau de plongée",
    "C": "Je coupe le moteur et je dérive"
   },
   "correct": "A",
   "explanation": "Les précautions (allure très réduite, surveillance des bulles, prêt à passer au point mort) s’appliquent aussi en sortant de la zone.",
   "tags": [
    "loisirs"
   ],
   "concept": "plongee-traverser"
  },
  {
   "id": "var_plongee-traverser_4",
   "sectionId": "mod4_sec3",
   "question": "En traversant lentement une zone de plongée, vous apercevez des bulles juste devant l’étrave. Que faites-vous ?",
   "options": {
    "A": "Point mort, puis je les contourne au ralenti",
    "B": "J’accélère pour passer vite",
    "C": "Je passe dessus au ralenti : les plongeurs sont bien plus profonds que l’hélice",
    "D": "Je fais marche arrière à pleins gaz pour m’éloigner des bulles"
   },
   "correct": "A",
   "explanation": "Dans une zone de plongée, on ne passe jamais sur les bulles : on est prêt à passer au point mort et on les contourne au ralenti.",
   "tags": [
    "loisirs"
   ],
   "concept": "plongee-traverser"
  },
  {
   "id": "var_vnm-permis_1",
   "sectionId": "mod4_sec3",
   "question": "Faut-il un permis pour piloter un véhicule nautique à moteur de plus de 6 CV ?",
   "options": {
    "A": "Non, s’il reste dans la bande des 300 m",
    "B": "Oui, le brevet d’État de ski nautique",
    "C": "Oui, le certificat restreint de radiotéléphoniste",
    "D": "Oui, le permis côtier"
   },
   "correct": "D",
   "explanation": "Comme tout navire de plaisance de plus de 6 CV (4,5 kW), le VNM se pilote avec le permis côtier.",
   "tags": [
    "loisirs"
   ],
   "concept": "vnm-permis",
   "near": [
    "gen_mod4_sec3_8",
    "var_permis-obligation_4"
   ]
  },
  {
   "id": "var_vnm-permis_2",
   "sectionId": "mod4_sec3",
   "question": "Le permis côtier est-il exigé pour piloter un jet-ski ?",
   "options": {
    "A": "Oui, comme pour tout bateau de plus de 6 CV",
    "B": "Non, si le pilote reste debout sur l’engin",
    "C": "Oui, mais seulement au-delà de la bande des 300 m"
   },
   "correct": "A",
   "explanation": "Le permis côtier est obligatoire pour piloter un bateau de plaisance ou un VNM de plus de 6 CV (4,5 kW).",
   "tags": [
    "loisirs"
   ],
   "concept": "vnm-permis",
   "near": [
    "gen_mod4_sec3_8",
    "var_vnm-permis_3",
    "var_vnm-permis_4"
   ]
  },
  {
   "id": "var_vnm-permis_3",
   "sectionId": "mod4_sec3",
   "question": "Vous êtes titulaire du permis côtier. Pouvez-vous piloter un jet-ski ?",
   "options": {
    "A": "Oui, le permis côtier suffit",
    "B": "Non, il faut un permis spécifique jet-ski délivré à part",
    "C": "Oui, mais seulement en pilotant assis"
   },
   "correct": "A",
   "explanation": "Le permis côtier est le titre requis pour piloter un VNM, qui ne navigue que de jour et, en Polynésie française, à moins de 2 milles (assis) ou 1 mille (debout) du rivage.",
   "tags": [
    "loisirs"
   ],
   "concept": "vnm-permis",
   "near": [
    "var_vnm-permis_2"
   ]
  },
  {
   "id": "var_vnm-permis_4",
   "sectionId": "mod4_sec3",
   "question": "Lequel de ces titres vous autorise à piloter une moto des mers ?",
   "options": {
    "A": "Le permis de conduire",
    "B": "Le certificat restreint de radiotéléphoniste",
    "C": "Le brevet de plongée",
    "D": "Le permis côtier"
   },
   "correct": "D",
   "explanation": "Moto des mers, scooter des mers et jet-ski sont des VNM : il faut le permis côtier.",
   "tags": [
    "loisirs"
   ],
   "concept": "vnm-permis",
   "near": [
    "gen_mod4_sec3_8",
    "var_vnm-permis_2"
   ]
  },
  {
   "id": "var_meteo-signal-boule_1",
   "sectionId": "mod3_sec2",
   "question": "Ce signal est hissé au mât d’un sémaphore. Quelle force de vent annonce-t-il ?",
   "options": {
    "A": "Force 5",
    "B": "Force 6",
    "C": "Force 7",
    "D": "Force 8"
   },
   "correct": "C",
   "explanation": "La boule noire annonce un grand frais, force 7, toutes directions.",
   "figure": {
    "fig": "shapes",
    "shapes": "ball"
   },
   "tags": [
    "meteo"
   ],
   "concept": "meteo-signal-boule",
   "near": [
    "gen_mod3_sec2_7"
   ]
  },
  {
   "id": "var_meteo-signal-boule_2",
   "sectionId": "mod3_sec2",
   "question": "Quelle marque de jour un sémaphore hisse-t-il pour annoncer un grand frais ?",
   "options": {
    "A": "Une croix noire",
    "B": "Deux cônes pointes en bas",
    "C": "Un cône pointe en haut",
    "D": "Une boule noire"
   },
   "correct": "D",
   "explanation": "Grand frais (force 7) : une boule noire. Les cônes annoncent un coup de vent (8 à 11), la croix un ouragan (12).",
   "tags": [
    "meteo"
   ],
   "concept": "meteo-signal-boule"
  },
  {
   "id": "var_meteo-signal-boule_3",
   "sectionId": "mod3_sec2",
   "question": "De nuit, quel signal correspond à la boule noire hissée de jour (grand frais) ?",
   "options": {
    "A": "Un feu rouge au-dessus d’un feu rouge",
    "B": "Un feu blanc au-dessus d’un feu rouge",
    "C": "Trois feux : rouge, vert, rouge",
    "D": "Un feu blanc au-dessus d’un feu vert"
   },
   "correct": "D",
   "explanation": "Le grand frais (force 7) est annoncé de jour par une boule noire et de nuit par un feu blanc au-dessus d’un feu vert.",
   "tags": [
    "meteo"
   ],
   "concept": "meteo-signal-boule"
  },
  {
   "id": "var_meteo-signal-boule_4",
   "sectionId": "mod3_sec2",
   "question": "Une boule noire est hissée au sémaphore. D’où vient le vent annoncé ?",
   "options": {
    "A": "De toutes directions",
    "B": "Du nord-ouest, comme pour le cône pointe en haut",
    "C": "Du sud-est, comme pour les deux cônes pointes en bas",
    "D": "Du sud-ouest"
   },
   "correct": "A",
   "explanation": "La boule noire annonce un grand frais (force 7) sans indication de direction : toutes directions.",
   "tags": [
    "meteo"
   ],
   "concept": "meteo-signal-boule",
   "near": [
    "var_meteo-signal-croix_1"
   ]
  },
  {
   "id": "var_meteo-signal-cone-haut_1",
   "sectionId": "mod3_sec2",
   "question": "Quel signal de jour annonce un coup de vent débutant dans le quadrant nord-ouest ?",
   "options": {
    "A": "Un cône pointe en haut",
    "B": "Un cône pointe en bas",
    "C": "Deux cônes pointes en haut",
    "D": "Deux cônes pointes en bas"
   },
   "correct": "A",
   "explanation": "Pointe en haut = nord, un seul cône = ouest : un cône pointe en haut annonce un coup de vent du quadrant nord-ouest.",
   "tags": [
    "meteo"
   ],
   "concept": "meteo-signal-cone-haut",
   "near": [
    "gen_mod3_sec2_8",
    "var_meteo-signal-2-cones-bas_1",
    "var_meteo-signal-cone-haut_3"
   ]
  },
  {
   "id": "var_meteo-signal-cone-haut_2",
   "sectionId": "mod3_sec2",
   "question": "De quel quadrant débute le coup de vent annoncé par ce signal ?",
   "options": {
    "A": "Nord-est",
    "B": "Sud-ouest",
    "C": "Sud-est",
    "D": "Nord-ouest"
   },
   "correct": "D",
   "explanation": "Pointe en haut = nord ; un seul cône = ouest. Un cône pointe en haut annonce donc un coup de vent débutant dans le quadrant nord-ouest.",
   "figure": {
    "fig": "shapes",
    "shapes": "cone-up"
   },
   "tags": [
    "meteo"
   ],
   "concept": "meteo-signal-cone-haut",
   "near": [
    "gen_mod3_sec2_8"
   ]
  },
  {
   "id": "var_meteo-signal-cone-haut_3",
   "sectionId": "mod3_sec2",
   "question": "De nuit, un sémaphore montre un feu rouge au-dessus d’un autre feu rouge. Qu’annonce-t-il ?",
   "options": {
    "A": "Un grand frais",
    "B": "Un coup de vent débutant dans le quadrant sud-est",
    "C": "Un ouragan",
    "D": "Un coup de vent débutant dans le quadrant nord-ouest"
   },
   "correct": "D",
   "explanation": "Rouge sur rouge, c’est l’équivalent de nuit du cône pointe en haut : coup de vent (force 8 à 11) débutant dans le quadrant nord-ouest.",
   "tags": [
    "meteo"
   ],
   "concept": "meteo-signal-cone-haut",
   "near": [
    "gen_mod3_sec2_8",
    "var_meteo-signal-2-cones-bas_3",
    "var_meteo-signal-cone-haut_1"
   ]
  },
  {
   "id": "var_meteo-signal-cone-haut_4",
   "sectionId": "mod3_sec2",
   "question": "Quelle force de vent annonce ce signal hissé au sémaphore ?",
   "options": {
    "A": "Force 7 (grand frais) du nord-ouest",
    "B": "Force 4 à 5",
    "C": "Force 12 (ouragan), toutes directions",
    "D": "Force 8 à 11"
   },
   "correct": "D",
   "explanation": "Les cônes annoncent un coup de vent de force 8 à 11 ; un cône pointe en haut indique qu’il débute dans le quadrant nord-ouest.",
   "figure": {
    "fig": "shapes",
    "shapes": "cone-up"
   },
   "tags": [
    "meteo"
   ],
   "concept": "meteo-signal-cone-haut"
  },
  {
   "id": "var_meteo-signal-2-cones-bas_1",
   "sectionId": "mod3_sec2",
   "question": "Quel signal de jour annonce un coup de vent débutant dans le quadrant sud-est ?",
   "options": {
    "A": "Un cône pointe en bas",
    "B": "Deux cônes pointes en haut",
    "C": "Une croix noire",
    "D": "Deux cônes pointes en bas"
   },
   "correct": "D",
   "explanation": "Pointes en bas = sud, deux cônes = est : deux cônes pointes en bas annoncent un coup de vent du quadrant sud-est.",
   "tags": [
    "meteo"
   ],
   "concept": "meteo-signal-2-cones-bas",
   "near": [
    "var_meteo-signal-2-cones-bas_3",
    "var_meteo-signal-cone-haut_1"
   ]
  },
  {
   "id": "var_meteo-signal-2-cones-bas_2",
   "sectionId": "mod3_sec2",
   "question": "Ce signal est hissé de jour au mât d’un sémaphore. Quels feux le remplacent de nuit ?",
   "options": {
    "A": "Un feu blanc au-dessus d’un feu rouge",
    "B": "Un feu rouge au-dessus d’un feu blanc",
    "C": "Deux feux blancs superposés",
    "D": "Un feu blanc au-dessus d’un feu vert"
   },
   "correct": "A",
   "explanation": "Deux cônes pointes en bas (coup de vent débutant dans le quadrant sud-est) : de nuit, blanc sur rouge. Rouge sur blanc = nord-est, blanc sur blanc = sud-ouest, blanc sur vert = grand frais.",
   "figure": {
    "fig": "shapes",
    "shapes": "cone-down,cone-down"
   },
   "tags": [
    "meteo"
   ],
   "concept": "meteo-signal-2-cones-bas",
   "near": [
    "gen_mod3_sec2_9",
    "var_meteo-signal-2-cones-bas_3"
   ]
  },
  {
   "id": "var_meteo-signal-2-cones-bas_3",
   "sectionId": "mod3_sec2",
   "question": "De nuit, un sémaphore montre un feu blanc au-dessus d’un feu rouge. Qu’annonce-t-il ?",
   "options": {
    "A": "Un coup de vent débutant dans le quadrant sud-est",
    "B": "Un grand frais",
    "C": "Un coup de vent débutant dans le quadrant nord-est",
    "D": "Un coup de vent débutant dans le quadrant nord-ouest"
   },
   "correct": "A",
   "explanation": "Blanc sur rouge correspond de nuit aux deux cônes pointes en bas : coup de vent débutant dans le quadrant sud-est (rouge sur blanc = nord-est).",
   "tags": [
    "meteo"
   ],
   "concept": "meteo-signal-2-cones-bas",
   "near": [
    "gen_mod3_sec2_9",
    "var_meteo-signal-2-cones-bas_1",
    "var_meteo-signal-2-cones-bas_2",
    "var_meteo-signal-cone-haut_3"
   ]
  },
  {
   "id": "var_meteo-signal-2-cones-bas_4",
   "sectionId": "mod3_sec2",
   "question": "Quelle différence y a-t-il entre deux cônes pointes en bas et un seul cône pointe en bas ?",
   "options": {
    "A": "Deux cônes : sud-ouest ; un cône : sud-est",
    "B": "Aucune, les deux annoncent un grand frais",
    "C": "Deux cônes : nord-est ; un cône : nord-ouest",
    "D": "Deux cônes : sud-est ; un cône : sud-ouest"
   },
   "correct": "D",
   "explanation": "Pointes en bas = sud ; deux cônes = est, un cône = ouest. Deux cônes pointes en bas : coup de vent du sud-est ; un seul : du sud-ouest.",
   "tags": [
    "meteo"
   ],
   "concept": "meteo-signal-2-cones-bas"
  },
  {
   "id": "var_meteo-signal-croix_1",
   "sectionId": "mod3_sec2",
   "question": "Une croix noire est hissée au sémaphore. Que signifie-t-elle ?",
   "options": {
    "A": "Grand frais (force 7), toutes directions",
    "B": "Port fermé",
    "C": "Ouragan (force 12), toutes directions",
    "D": "Coup de vent du nord-ouest"
   },
   "correct": "C",
   "explanation": "La croix noire annonce un ouragan, force 12, toutes directions.",
   "tags": [
    "meteo"
   ],
   "concept": "meteo-signal-croix",
   "near": [
    "gen_mod3_sec2_10",
    "var_meteo-signal-boule_4"
   ]
  },
  {
   "id": "var_meteo-signal-croix_2",
   "sectionId": "mod3_sec2",
   "question": "De nuit, un sémaphore montre trois feux superposés : rouge, vert, rouge. Qu’annonce-t-il ?",
   "options": {
    "A": "Un grand frais",
    "B": "Un coup de vent débutant dans le quadrant sud-est",
    "C": "Un ouragan",
    "D": "Le passage interdit"
   },
   "correct": "C",
   "explanation": "Rouge, vert, rouge est l’équivalent de nuit de la croix noire : ouragan (force 12), toutes directions.",
   "tags": [
    "meteo"
   ],
   "concept": "meteo-signal-croix"
  },
  {
   "id": "var_meteo-signal-croix_3",
   "sectionId": "mod3_sec2",
   "question": "À quelle force de vent correspond le signal de la croix noire ?",
   "options": {
    "A": "Force 7",
    "B": "Force 8",
    "C": "Force 10",
    "D": "Force 12"
   },
   "correct": "D",
   "explanation": "Croix noire = ouragan, force 12. Boule = force 7 ; cônes = force 8 à 11.",
   "tags": [
    "meteo"
   ],
   "concept": "meteo-signal-croix"
  },
  {
   "id": "var_meteo-signal-croix_4",
   "sectionId": "mod3_sec2",
   "question": "Quelles marques météo de jour annoncent un vent « toutes directions » ?",
   "options": {
    "A": "La boule et la croix",
    "B": "Les cônes pointes en haut (coup de vent)",
    "C": "Les cônes, pointes en bas ou en haut",
    "D": "Uniquement la boule, signal du grand frais"
   },
   "correct": "A",
   "explanation": "La boule (force 7) et la croix (ouragan, force 12) valent pour toutes directions ; les cônes indiquent le quadrant où débute le coup de vent.",
   "tags": [
    "meteo"
   ],
   "concept": "meteo-signal-croix"
  },
  {
   "id": "var_beaufort-f7_1",
   "sectionId": "mod4_sec4",
   "question": "Le bulletin annonce un vent moyen de 30 nœuds. Quel terme de l’échelle de Beaufort lui correspond ?",
   "options": {
    "A": "Bonne brise",
    "B": "Vent frais",
    "C": "Grand frais",
    "D": "Coup de vent"
   },
   "correct": "C",
   "explanation": "30 nœuds : B = 30 ÷ 5 + 1 = force 7 (28 à 33 nœuds), c’est-à-dire grand frais.",
   "tags": [
    "meteo"
   ],
   "concept": "beaufort-f7",
   "near": [
    "ext_sec_133",
    "gen_mod4_sec4_2",
    "var_beaufort-f6_4"
   ]
  },
  {
   "id": "var_beaufort-f7_2",
   "sectionId": "mod4_sec4",
   "question": "Quelle force et quelle vitesse correspondent à un « grand frais » ?",
   "options": {
    "A": "Force 6, 22 à 27 nœuds",
    "B": "Force 7, 28 à 33 nœuds",
    "C": "Force 8, 34 à 40 nœuds",
    "D": "Force 5, 17 à 21 nœuds"
   },
   "correct": "B",
   "explanation": "Le grand frais est la force 7 de l’échelle de Beaufort, soit 28 à 33 nœuds.",
   "tags": [
    "meteo"
   ],
   "concept": "beaufort-f7"
  },
  {
   "id": "var_beaufort-f7_3",
   "sectionId": "mod4_sec4",
   "question": "Quel terme désigne un vent de force 7 ?",
   "options": {
    "A": "Vent frais",
    "B": "Jolie brise",
    "C": "Coup de vent",
    "D": "Grand frais"
   },
   "correct": "D",
   "explanation": "Force 7 = grand frais ; force 6 = vent frais ; force 8 = coup de vent.",
   "tags": [
    "meteo"
   ],
   "concept": "beaufort-f7",
   "near": [
    "gen_mod4_sec4_4",
    "gen_mod4_sec4_6"
   ]
  },
  {
   "id": "var_beaufort-f7_4",
   "sectionId": "mod4_sec4",
   "question": "Quel aspect de la mer correspond à un grand frais ?",
   "options": {
    "A": "Mer comme un miroir",
    "B": "Petites vagues, nombreux moutons",
    "C": "Lames déferlantes, traînées d’écume",
    "D": "Vaguelettes ne déferlant pas"
   },
   "correct": "C",
   "explanation": "Grand frais (force 7, 28 à 33 nœuds) : lames déferlantes et traînées d’écume.",
   "tags": [
    "meteo"
   ],
   "concept": "beaufort-f7",
   "near": [
    "var_beaufort-f6_3"
   ]
  },
  {
   "id": "var_beaufort-conversion_1",
   "sectionId": "mod4_sec4",
   "question": "Le bulletin annonce un vent moyen de 40 nœuds. À quelle force Beaufort correspond-il ?",
   "options": {
    "A": "Force 7",
    "B": "Force 8",
    "C": "Force 9",
    "D": "Force 10"
   },
   "correct": "B",
   "explanation": "À partir de 40 nœuds, B = V ÷ 5 : 40 ÷ 5 = force 8 (coup de vent, 34 à 40 nœuds).",
   "tags": [
    "meteo"
   ],
   "concept": "beaufort-conversion",
   "near": [
    "gen_mod4_sec4_2"
   ]
  },
  {
   "id": "var_beaufort-f6_1",
   "sectionId": "mod4_sec4",
   "question": "Le bulletin annonce un « vent frais ». De quelle force s’agit-il ?",
   "options": {
    "A": "Force 5",
    "B": "Force 6",
    "C": "Force 7",
    "D": "Force 8"
   },
   "correct": "B",
   "explanation": "Vent frais = force 6 (22 à 27 nœuds). Ne pas confondre avec le grand frais, force 7.",
   "tags": [
    "meteo"
   ],
   "concept": "beaufort-f6"
  },
  {
   "id": "var_beaufort-f6_2",
   "sectionId": "mod4_sec4",
   "question": "Quelle est la vitesse d’un vent frais (force 6) ?",
   "options": {
    "A": "17 à 21 nœuds",
    "B": "28 à 33 nœuds",
    "C": "22 à 27 nœuds",
    "D": "34 à 40 nœuds"
   },
   "correct": "C",
   "explanation": "Force 6, vent frais : 22 à 27 nœuds. La formule 5 × (6 − 1) = 25 nœuds donne bien une valeur dans cette plage.",
   "tags": [
    "meteo"
   ],
   "concept": "beaufort-f6"
  },
  {
   "id": "var_beaufort-f6_3",
   "sectionId": "mod4_sec4",
   "question": "Quel aspect de la mer correspond à un vent frais ?",
   "options": {
    "A": "Lames, crêtes d’écume, embruns",
    "B": "Petites vagues, nombreux moutons",
    "C": "Quelques rides",
    "D": "Comme un miroir"
   },
   "correct": "A",
   "explanation": "Vent frais (force 6) : lames, crêtes d’écume et embruns.",
   "tags": [
    "meteo"
   ],
   "concept": "beaufort-f6",
   "near": [
    "var_beaufort-f7_4"
   ]
  },
  {
   "id": "var_beaufort-f6_4",
   "sectionId": "mod4_sec4",
   "question": "Le bulletin annonce un vent moyen de 25 nœuds. Quel terme de l’échelle de Beaufort lui correspond ?",
   "options": {
    "A": "Bonne brise",
    "B": "Vent frais",
    "C": "Grand frais",
    "D": "Coup de vent"
   },
   "correct": "B",
   "explanation": "Sous 40 nœuds, B = V ÷ 5 + 1 : 25 ÷ 5 + 1 = force 6, vent frais (22 à 27 nœuds).",
   "tags": [
    "meteo"
   ],
   "concept": "beaufort-f6",
   "near": [
    "var_beaufort-f7_1"
   ]
  },
  {
   "id": "var_beaufort-moutons_1",
   "sectionId": "mod4_sec4",
   "question": "Vous voyez apparaître les premiers moutons sur le plan d’eau. Quelle est la force du vent, environ ?",
   "options": {
    "A": "Force 1",
    "B": "Force 3",
    "C": "Force 6",
    "D": "Force 8"
   },
   "correct": "B",
   "explanation": "Les moutons (crêtes blanches) apparaissent à force 3, petite brise (7 à 10 nœuds).",
   "tags": [
    "meteo"
   ],
   "concept": "beaufort-moutons",
   "near": [
    "gen_mod4_sec4_5"
   ]
  },
  {
   "id": "var_beaufort-moutons_2",
   "sectionId": "mod4_sec4",
   "question": "Quel terme désigne la force à laquelle les moutons commencent à apparaître ?",
   "options": {
    "A": "Calme",
    "B": "Vent frais",
    "C": "Jolie brise",
    "D": "Petite brise"
   },
   "correct": "D",
   "explanation": "Force 3, petite brise : les moutons apparaissent. À force 4 (jolie brise), ils sont nombreux.",
   "tags": [
    "meteo"
   ],
   "concept": "beaufort-moutons"
  },
  {
   "id": "var_beaufort-moutons_3",
   "sectionId": "mod4_sec4",
   "question": "À quelle vitesse de vent, environ, les moutons commencent-ils à apparaître ?",
   "options": {
    "A": "7 à 10 nœuds",
    "B": "1 à 3 nœuds",
    "C": "22 à 27 nœuds",
    "D": "34 à 40 nœuds"
   },
   "correct": "A",
   "explanation": "Les moutons apparaissent à force 3, soit 7 à 10 nœuds (5 × (3 − 1) = 10 nœuds).",
   "tags": [
    "meteo"
   ],
   "concept": "beaufort-moutons"
  },
  {
   "id": "var_beaufort-moutons_4",
   "sectionId": "mod4_sec4",
   "question": "Par force 2 (légère brise), à quoi ressemble la mer ?",
   "options": {
    "A": "À de nombreux moutons sur toute la surface",
    "B": "À des lames déferlantes et des embruns",
    "C": "À des vaguelettes qui ne déferlent pas"
   },
   "correct": "C",
   "explanation": "À force 2 : vaguelettes ne déferlant pas. Les moutons n’apparaissent qu’à partir de la force 3.",
   "tags": [
    "meteo"
   ],
   "concept": "beaufort-moutons"
  },
  {
   "id": "var_beaufort-f12_1",
   "sectionId": "mod4_sec4",
   "question": "Au-delà de quelle vitesse moyenne de vent parle-t-on d’ouragan ?",
   "options": {
    "A": "34 nœuds",
    "B": "48 nœuds",
    "C": "63 nœuds",
    "D": "100 nœuds"
   },
   "correct": "C",
   "explanation": "L’ouragan, force 12, correspond à un vent de plus de 63 nœuds.",
   "tags": [
    "meteo"
   ],
   "concept": "beaufort-f12"
  },
  {
   "id": "var_beaufort-f12_2",
   "sectionId": "mod4_sec4",
   "question": "Quelle force de l’échelle de Beaufort correspond à un ouragan ?",
   "options": {
    "A": "Force 9",
    "B": "Force 10",
    "C": "Force 11",
    "D": "Force 12"
   },
   "correct": "D",
   "explanation": "Force 12 = ouragan, le dernier degré de l’échelle de Beaufort (plus de 63 nœuds).",
   "tags": [
    "meteo"
   ],
   "concept": "beaufort-f12",
   "near": [
    "var_beaufort-f12_3"
   ]
  },
  {
   "id": "var_beaufort-f12_3",
   "sectionId": "mod4_sec4",
   "question": "Quel est le degré le plus élevé de l’échelle de Beaufort ?",
   "options": {
    "A": "Force 10, tempête",
    "B": "Force 12, ouragan",
    "C": "Force 11, violente tempête",
    "D": "Force 13, cyclone"
   },
   "correct": "B",
   "explanation": "L’échelle de Beaufort va de 0 (calme) à 12 (ouragan).",
   "tags": [
    "meteo"
   ],
   "concept": "beaufort-f12",
   "near": [
    "var_beaufort-f12_2"
   ]
  },
  {
   "id": "var_beaufort-f12_4",
   "sectionId": "mod4_sec4",
   "question": "Parmi ces termes, lequel désigne le vent le plus fort ?",
   "options": {
    "A": "Violente tempête",
    "B": "Tempête",
    "C": "Ouragan",
    "D": "Fort coup de vent"
   },
   "correct": "C",
   "explanation": "Fort coup de vent = force 9, tempête = 10, violente tempête = 11, ouragan = 12.",
   "tags": [
    "meteo"
   ],
   "concept": "beaufort-f12",
   "near": [
    "gen_mod4_sec4_6"
   ]
  },
  {
   "id": "var_categorie-definition_1",
   "sectionId": "mod4_sec4",
   "question": "Où trouve-t-on la catégorie de conception d’un bateau ?",
   "options": {
    "A": "Sur le permis du chef de bord",
    "B": "Dans le bulletin météo",
    "C": "Sur la carte marine",
    "D": "Sur la plaque du constructeur"
   },
   "correct": "D",
   "explanation": "La catégorie de conception figure sur la plaque du constructeur : elle indique le vent et la mer que le bateau est conçu pour affronter.",
   "tags": [
    "meteo"
   ],
   "concept": "categorie-definition"
  },
  {
   "id": "var_categorie-definition_2",
   "sectionId": "mod4_sec4",
   "question": "De quoi dépend la catégorie de conception d’un bateau ?",
   "options": {
    "A": "De la distance d’un abri à laquelle vous naviguez",
    "B": "De sa construction",
    "C": "Du type de permis détenu par le chef de bord : côtier ou hauturier",
    "D": "Du nombre de passagers"
   },
   "correct": "B",
   "explanation": "La catégorie de conception (A, B, C, D) dépend de la construction du bateau et fixe la force de vent et la hauteur de vagues qu’il peut affronter.",
   "tags": [
    "meteo"
   ],
   "concept": "categorie-definition"
  },
  {
   "id": "var_categorie-definition_3",
   "sectionId": "mod4_sec4",
   "question": "Quelle est la différence entre catégorie de conception et dotation de sécurité ?",
   "options": {
    "A": "C’est la même chose",
    "B": "La catégorie dépend de la distance d’un abri ; la dotation, du nombre de passagers",
    "C": "Catégorie : vent et mer supportés ; dotation : selon la distance d’un abri"
   },
   "correct": "C",
   "explanation": "La catégorie de conception dépend de la construction du bateau (vent, vagues) ; la dotation (basique, côtière, hauturière) dépend de la distance d’un abri. Il faut respecter les deux.",
   "tags": [
    "meteo"
   ],
   "concept": "categorie-definition"
  },
  {
   "id": "var_categorie-definition_4",
   "sectionId": "mod4_sec4",
   "question": "Quelles grandeurs servent à définir les catégories de conception A, B, C et D ?",
   "options": {
    "A": "La vitesse et la puissance du moteur",
    "B": "La longueur et le nombre de personnes",
    "C": "La distance d’un abri et la durée de la sortie",
    "D": "La force du vent et la hauteur des vagues"
   },
   "correct": "D",
   "explanation": "Chaque catégorie de conception correspond à une force de vent (Beaufort) et à une hauteur de vagues maximales.",
   "tags": [
    "meteo"
   ],
   "concept": "categorie-definition"
  },
  {
   "id": "var_categorie-c_1",
   "sectionId": "mod4_sec4",
   "question": "Votre bateau est de catégorie C. Le bulletin annonce force 7 et des vagues de 1,5 m. Pouvez-vous sortir ?",
   "options": {
    "A": "Oui, les vagues font moins de 2 m, c’est suffisant",
    "B": "Non : la catégorie C est limitée à force 6",
    "C": "Non : la catégorie C est limitée à 1 m de vagues"
   },
   "correct": "B",
   "explanation": "La catégorie C est prévue jusqu’à force 6 et 2 m de vagues compris : les deux conditions doivent être respectées.",
   "tags": [
    "meteo"
   ],
   "concept": "categorie-c",
   "near": [
    "gen_mod4_sec4_10",
    "var_categorie-c_3",
    "var_categorie-d_3"
   ]
  },
  {
   "id": "var_categorie-c_2",
   "sectionId": "mod4_sec4",
   "question": "Quelle désignation correspond à la catégorie de conception C ?",
   "options": {
    "A": "En haute mer, loin des côtes",
    "B": "Au large",
    "C": "À proximité de la côte",
    "D": "En eaux protégées"
   },
   "correct": "C",
   "explanation": "A : en haute mer ; B : au large ; C : à proximité de la côte (jusqu’à force 6 et 2 m) ; D : en eaux protégées.",
   "tags": [
    "meteo"
   ],
   "concept": "categorie-c",
   "near": [
    "var_categorie-a_1",
    "var_categorie-d_1"
   ]
  },
  {
   "id": "var_categorie-c_3",
   "sectionId": "mod4_sec4",
   "question": "Votre bateau est de catégorie C. Le bulletin annonce force 5 et des vagues de 2,5 m. Pouvez-vous sortir ?",
   "options": {
    "A": "Non : la catégorie C est limitée à force 4",
    "B": "Oui, les vagues font moins de 4 m",
    "C": "Non : les vagues dépassent 2 m"
   },
   "correct": "C",
   "explanation": "La catégorie C est limitée à force 6 et à 2 m de vagues compris ; 2,5 m de vagues dépasse cette limite.",
   "tags": [
    "meteo"
   ],
   "concept": "categorie-c",
   "near": [
    "gen_mod4_sec4_10",
    "var_categorie-c_1",
    "var_categorie-d_3"
   ]
  },
  {
   "id": "var_categorie-c_4",
   "sectionId": "mod4_sec4",
   "question": "Quelle hauteur de vagues maximale un bateau de catégorie C est-il conçu pour affronter ?",
   "options": {
    "A": "0,5 m",
    "B": "1 m",
    "C": "2 m",
    "D": "4 m"
   },
   "correct": "C",
   "explanation": "Catégorie C : jusqu’à force 6 et des vagues de 2 m compris.",
   "tags": [
    "meteo"
   ],
   "concept": "categorie-c",
   "near": [
    "gen_mod4_sec4_7",
    "var_categorie-a_2"
   ]
  },
  {
   "id": "var_categorie-a_1",
   "sectionId": "mod4_sec4",
   "question": "Quelle désignation correspond à la catégorie de conception A ?",
   "options": {
    "A": "En haute mer",
    "B": "Au large",
    "C": "À proximité de la côte",
    "D": "En eaux protégées"
   },
   "correct": "A",
   "explanation": "Catégorie A : en haute mer, pour un vent de plus de force 8 et des vagues de plus de 4 m.",
   "tags": [
    "meteo"
   ],
   "concept": "categorie-a",
   "near": [
    "var_categorie-c_2",
    "var_categorie-d_1"
   ]
  },
  {
   "id": "var_categorie-a_2",
   "sectionId": "mod4_sec4",
   "question": "Un bateau de catégorie A est conçu pour affronter :",
   "options": {
    "A": "Un vent jusqu’à force 8 et des vagues jusqu’à 4 m",
    "B": "Un vent jusqu’à force 6 et des vagues jusqu’à 2 m",
    "C": "Un vent de plus de force 8 et des vagues de plus de 4 m",
    "D": "Un vent jusqu’à force 4 et des vagues jusqu’à 0,5 m"
   },
   "correct": "C",
   "explanation": "Catégorie A : plus de force 8 et plus de 4 m de vagues ; B : jusqu’à force 8 et 4 m.",
   "tags": [
    "meteo"
   ],
   "concept": "categorie-a",
   "near": [
    "var_categorie-c_4"
   ]
  },
  {
   "id": "var_categorie-a_3",
   "sectionId": "mod4_sec4",
   "question": "On annonce force 9 et des vagues de 5 m. Quelle est la seule catégorie de conception prévue pour ces conditions ?",
   "options": {
    "A": "D",
    "B": "C",
    "C": "B",
    "D": "A"
   },
   "correct": "D",
   "explanation": "Au-delà de force 8 et de 4 m de vagues, seule la catégorie A (en haute mer) est conçue pour ces conditions.",
   "tags": [
    "meteo"
   ],
   "concept": "categorie-a"
  },
  {
   "id": "var_categorie-a_4",
   "sectionId": "mod4_sec4",
   "question": "Quelle est la différence entre les catégories A et B ?",
   "options": {
    "A": "A : au-delà de force 8 et 4 m ; B : jusqu’à force 8 et 4 m",
    "B": "A : jusqu’à force 6 et 2 m ; B : jusqu’à force 4",
    "C": "Aucune, ce sont deux noms de la même catégorie de conception",
    "D": "A : eaux protégées ; B : haute mer"
   },
   "correct": "A",
   "explanation": "Catégorie A (en haute mer) : plus de force 8 et plus de 4 m. Catégorie B (au large) : jusqu’à force 8 et 4 m compris.",
   "tags": [
    "meteo"
   ],
   "concept": "categorie-a"
  },
  {
   "id": "var_categorie-d_1",
   "sectionId": "mod4_sec4",
   "question": "Quelle désignation correspond à la catégorie de conception D ?",
   "options": {
    "A": "En haute mer",
    "B": "Au large",
    "C": "À proximité de la côte",
    "D": "En eaux protégées"
   },
   "correct": "D",
   "explanation": "Catégorie D : en eaux protégées, jusqu’à force 4 et 0,5 m de vagues.",
   "tags": [
    "meteo"
   ],
   "concept": "categorie-d",
   "near": [
    "var_categorie-a_1",
    "var_categorie-c_2"
   ]
  },
  {
   "id": "var_categorie-d_2",
   "sectionId": "mod4_sec4",
   "question": "Quelle est la force de vent maximale prévue pour un bateau de catégorie D ?",
   "options": {
    "A": "Force 2",
    "B": "Force 4",
    "C": "Force 6",
    "D": "Force 8"
   },
   "correct": "B",
   "explanation": "Catégorie D : jusqu’à force 4 compris et des vagues de 0,5 m (vagues occasionnelles).",
   "tags": [
    "meteo"
   ],
   "concept": "categorie-d"
  },
  {
   "id": "var_categorie-d_3",
   "sectionId": "mod4_sec4",
   "question": "Votre petite embarcation est de catégorie D. Le bulletin annonce force 3 et des vagues de 1 m. Pouvez-vous sortir ?",
   "options": {
    "A": "Oui, la force 3 est inférieure à la limite",
    "B": "Non : les vagues dépassent 0,5 m",
    "C": "Non : la catégorie D est limitée à force 2"
   },
   "correct": "B",
   "explanation": "La catégorie D est limitée à force 4 et à 0,5 m de vagues : il faut respecter les deux limites.",
   "tags": [
    "meteo"
   ],
   "concept": "categorie-d",
   "near": [
    "var_categorie-c_1",
    "var_categorie-c_3"
   ]
  },
  {
   "id": "var_categorie-d_4",
   "sectionId": "mod4_sec4",
   "question": "Laquelle de ces conditions reste dans les limites d’un bateau de catégorie D ?",
   "options": {
    "A": "Force 5, vagues de 0,5 m",
    "B": "Force 4, vagues de 1 m",
    "C": "Force 4, vagues de 0,5 m",
    "D": "Force 6, vagues de 2 m"
   },
   "correct": "C",
   "explanation": "Catégorie D : jusqu’à force 4 compris et 0,5 m de vagues compris.",
   "tags": [
    "meteo"
   ],
   "concept": "categorie-d"
  },
  {
   "id": "var_examen-format_1",
   "sectionId": "bonus_sec1",
   "question": "Combien de questions comporte le QCM de l’épreuve théorique du permis côtier ?",
   "options": {
    "A": "10",
    "B": "20",
    "C": "30",
    "D": "40"
   },
   "correct": "B",
   "explanation": "L’épreuve théorique est un QCM de 20 questions en 15 minutes, avec 3 erreurs au maximum.",
   "tags": [
    "pratique"
   ],
   "concept": "examen-format"
  },
  {
   "id": "var_examen-format_2",
   "sectionId": "bonus_sec1",
   "question": "De combien de temps disposez-vous pour répondre au QCM de l’épreuve théorique ?",
   "options": {
    "A": "10 minutes",
    "B": "20 minutes",
    "C": "30 minutes",
    "D": "15 minutes"
   },
   "correct": "D",
   "explanation": "20 questions en 15 minutes, soit environ 45 secondes par question ; 3 erreurs au maximum.",
   "tags": [
    "pratique"
   ],
   "concept": "examen-format"
  },
  {
   "id": "var_examen-format_3",
   "sectionId": "bonus_sec1",
   "question": "À l’épreuve théorique, vous faites 4 erreurs. Quel est le résultat ?",
   "options": {
    "A": "Vous êtes ajourné",
    "B": "Vous êtes reçu : 5 erreurs sont admises",
    "C": "Vous êtes ajourné, mais vous passez quand même la pratique"
   },
   "correct": "A",
   "explanation": "Le QCM de 20 questions n’admet que 3 erreurs au maximum (17/20). Seuls les candidats reçus à la théorie passent la pratique.",
   "tags": [
    "pratique"
   ],
   "concept": "examen-format"
  },
  {
   "id": "var_examen-format_4",
   "sectionId": "bonus_sec1",
   "question": "Quelle note minimale faut-il obtenir au QCM de 20 questions ?",
   "options": {
    "A": "15/20",
    "B": "16/20",
    "C": "17/20",
    "D": "20/20"
   },
   "correct": "C",
   "explanation": "3 erreurs au maximum sur 20 questions : il faut au moins 17 bonnes réponses.",
   "tags": [
    "pratique"
   ],
   "concept": "examen-format"
  },
  {
   "id": "var_examen-benefice-theorie_1",
   "sectionId": "bonus_sec1",
   "question": "Vous êtes ajourné à l’épreuve pratique après avoir réussi la théorie. Que devez-vous repasser dans les 6 mois ?",
   "options": {
    "A": "La théorie et la pratique",
    "B": "Seulement l’épreuve pratique",
    "C": "Seulement l’épreuve théorique"
   },
   "correct": "B",
   "explanation": "En cas d’échec à la pratique, le bénéfice de la théorie est conservé 6 mois : on ne repasse que la pratique.",
   "tags": [
    "pratique"
   ],
   "concept": "examen-benefice-theorie"
  },
  {
   "id": "var_examen-benefice-theorie_2",
   "sectionId": "bonus_sec1",
   "question": "Vrai ou faux : après un échec à l’épreuve pratique, il faut toujours repasser aussi l’épreuve théorique.",
   "options": {
    "A": "Vrai",
    "B": "Faux"
   },
   "correct": "B",
   "explanation": "Faux : en cas d’échec à la pratique, le bénéfice de la théorie réussie est conservé 6 mois ; pendant cette période, on ne repasse que l’épreuve pratique.",
   "tags": [
    "pratique"
   ],
   "concept": "examen-benefice-theorie"
  },
  {
   "id": "var_examen-benefice-theorie_3",
   "sectionId": "bonus_sec1",
   "question": "Ajourné à la pratique, vous la repassez 4 mois plus tard. Devez-vous repasser la théorie ?",
   "options": {
    "A": "Non, elle reste acquise 1 an",
    "B": "Oui, au-delà de 2 mois",
    "C": "Non, elle reste acquise 6 mois"
   },
   "correct": "C",
   "explanation": "Après un échec en pratique, la théorie réussie reste acquise 6 mois : à 4 mois, on ne repasse que la pratique.",
   "tags": [
    "pratique"
   ],
   "concept": "examen-benefice-theorie"
  },
  {
   "id": "var_examen-benefice-theorie_4",
   "sectionId": "bonus_sec1",
   "question": "Un candidat reçu à la théorie est ajourné à la pratique. De combien de temps dispose-t-il pour ne repasser que la pratique ?",
   "options": {
    "A": "2 mois",
    "B": "3 mois",
    "C": "6 mois",
    "D": "12 mois"
   },
   "correct": "C",
   "explanation": "Le bénéfice de la théorie est conservé 6 mois. Ne pas confondre avec les 2 mois de validité du permis provisoire.",
   "tags": [
    "pratique"
   ],
   "concept": "examen-benefice-theorie"
  },
  {
   "id": "var_permis-provisoire_1",
   "sectionId": "bonus_sec1",
   "question": "Vous avez été reçu il y a 10 semaines et vous n’avez toujours que le permis provisoire. Est-il encore valable ?",
   "options": {
    "A": "Oui, il est valable 6 mois après l’examen",
    "B": "Non, il n’est valable que 1 mois",
    "C": "Non, il n’est valable que 2 mois"
   },
   "correct": "C",
   "explanation": "Le permis provisoire remis par l’examinateur est valable 2 mois, le temps de recevoir le permis définitif ; 10 semaines dépassent cette durée.",
   "tags": [
    "pratique"
   ],
   "concept": "permis-provisoire"
  },
  {
   "id": "var_permis-provisoire_2",
   "sectionId": "bonus_sec1",
   "question": "À quoi sert le permis provisoire valable 2 mois ?",
   "options": {
    "A": "À repasser l’épreuve pratique en cas d’échec",
    "B": "À naviguer en attendant le permis définitif",
    "C": "À naviguer uniquement accompagné d’un moniteur"
   },
   "correct": "B",
   "explanation": "Remis par l’examinateur à l’issue de l’épreuve pratique réussie, il est valable 2 mois, le temps de recevoir le permis définitif.",
   "tags": [
    "pratique"
   ],
   "concept": "permis-provisoire"
  },
  {
   "id": "var_permis-provisoire_3",
   "sectionId": "bonus_sec1",
   "question": "Quelles durées retenir pour le permis provisoire et pour le bénéfice de la théorie ?",
   "options": {
    "A": "6 mois pour le permis provisoire, 2 mois pour la théorie",
    "B": "2 mois pour le permis provisoire, 6 mois pour la théorie",
    "C": "2 mois pour les deux",
    "D": "6 mois pour les deux"
   },
   "correct": "B",
   "explanation": "Permis provisoire : 2 mois. Bénéfice de la théorie après un échec en pratique : 6 mois.",
   "tags": [
    "pratique"
   ],
   "concept": "permis-provisoire"
  },
  {
   "id": "var_permis-provisoire_4",
   "sectionId": "bonus_sec1",
   "question": "Vous êtes reçu à l’épreuve pratique le 1er mars. Jusqu’à quand votre permis provisoire est-il valable, environ ?",
   "options": {
    "A": "Le 15 mars",
    "B": "Le 1er mai",
    "C": "Le 1er septembre",
    "D": "Le 1er mars de l’année suivante"
   },
   "correct": "B",
   "explanation": "Le permis provisoire est valable 2 mois : reçu le 1er mars, il couvre jusqu’au 1er mai environ.",
   "tags": [
    "pratique"
   ],
   "concept": "permis-provisoire"
  },
  {
   "id": "var_examen-essais_1",
   "sectionId": "bonus_sec1",
   "question": "Lors de l’épreuve pratique, vous manquez votre première prise de coffre. Que se passe-t-il ?",
   "options": {
    "A": "Vous avez droit à un second essai",
    "B": "Vous êtes immédiatement ajourné",
    "C": "Vous devez recommencer toute l’épreuve"
   },
   "correct": "A",
   "explanation": "À l’épreuve pratique, on a droit à 2 essais par manœuvre.",
   "tags": [
    "pratique"
   ],
   "concept": "examen-essais"
  },
  {
   "id": "var_examen-essais_2",
   "sectionId": "bonus_sec1",
   "question": "À l’épreuve pratique, combien d’essais avez-vous pour réussir l’accostage ?",
   "options": {
    "A": "Un seul",
    "B": "Trois",
    "C": "Deux",
    "D": "Autant que nécessaire"
   },
   "correct": "C",
   "explanation": "Chaque manœuvre de l’épreuve pratique (appareillage, cap et arrêt, prise de coffre, homme à la mer, accostage) peut être tentée 2 fois.",
   "tags": [
    "pratique"
   ],
   "concept": "examen-essais",
   "near": [
    "gen_bonus_sec1_4"
   ]
  },
  {
   "id": "var_examen-essais_3",
   "sectionId": "bonus_sec1",
   "question": "À l’épreuve pratique, comment sont comptés les essais ?",
   "options": {
    "A": "2 essais pour l’ensemble de l’épreuve",
    "B": "1 essai par manœuvre, 2 pour l’homme à la mer",
    "C": "2 essais par manœuvre"
   },
   "correct": "C",
   "explanation": "Le candidat dispose de 2 essais pour chaque manœuvre demandée.",
   "tags": [
    "pratique"
   ],
   "concept": "examen-essais",
   "near": [
    "gen_bonus_sec1_4"
   ]
  },
  {
   "id": "var_examen-essais_4",
   "sectionId": "bonus_sec1",
   "question": "Vous avez manqué deux fois la manœuvre d’homme à la mer. Pouvez-vous la tenter une troisième fois ?",
   "options": {
    "A": "Oui, autant de fois que nécessaire",
    "B": "Non, un seul essai par manœuvre",
    "C": "Non, deux essais seulement"
   },
   "correct": "C",
   "explanation": "L’épreuve pratique prévoit 2 essais par manœuvre, pas davantage.",
   "tags": [
    "pratique"
   ],
   "concept": "examen-essais"
  },
  {
   "id": "var_permis-age_1",
   "sectionId": "bonus_sec1",
   "question": "Votre fils a 15 ans. Peut-il obtenir le permis côtier ?",
   "options": {
    "A": "Oui, avec une autorisation parentale",
    "B": "Non, l’âge minimum est de 16 ans",
    "C": "Non, l’âge minimum est de 18 ans"
   },
   "correct": "B",
   "explanation": "Le permis côtier s’obtient à partir de 16 ans.",
   "tags": [
    "pratique"
   ],
   "concept": "permis-age",
   "near": [
    "gen_bonus_sec1_5",
    "var_permis-age_3"
   ]
  },
  {
   "id": "var_permis-age_2",
   "sectionId": "bonus_sec1",
   "question": "À partir de quel âge peut-on piloter un jet-ski de plus de 6 CV, avec le permis côtier ?",
   "options": {
    "A": "14 ans",
    "B": "16 ans",
    "C": "18 ans",
    "D": "21 ans"
   },
   "correct": "B",
   "explanation": "Le permis côtier, obligatoire pour les bateaux et VNM de plus de 6 CV, s’obtient à partir de 16 ans.",
   "tags": [
    "pratique"
   ],
   "concept": "permis-age",
   "near": [
    "gen_bonus_sec1_5"
   ]
  },
  {
   "id": "var_permis-age_3",
   "sectionId": "bonus_sec1",
   "question": "Une jeune fille de 17 ans peut-elle passer le permis côtier ?",
   "options": {
    "A": "Oui, l’âge minimum est de 16 ans",
    "B": "Non, il faut avoir 18 ans révolus",
    "C": "Oui, l’âge minimum est de 14 ans"
   },
   "correct": "A",
   "explanation": "L’âge minimum pour le permis côtier est de 16 ans.",
   "tags": [
    "pratique"
   ],
   "concept": "permis-age",
   "near": [
    "var_permis-age_1"
   ]
  },
  {
   "id": "var_permis-age_4",
   "sectionId": "bonus_sec1",
   "question": "Quel âge minimum et quel seuil de puissance retenir pour le permis côtier ?",
   "options": {
    "A": "18 ans, au-delà de 6 CV (4,5 kW)",
    "B": "16 ans, au-delà de 50 CV (37 kW)",
    "C": "14 ans, au-delà de 6 CV",
    "D": "16 ans, au-delà de 6 CV"
   },
   "correct": "D",
   "explanation": "Le permis côtier est obligatoire au-delà de 6 CV (4,5 kW) et s’obtient à partir de 16 ans.",
   "tags": [
    "pratique"
   ],
   "concept": "permis-age",
   "near": [
    "gen_bonus_sec1_5"
   ]
  },
  {
   "id": "var_hom-premier-reflexe_1",
   "sectionId": "bonus_sec2",
   "question": "Homme à la mer : pourquoi vire-t-on immédiatement du côté où la personne est tombée ?",
   "options": {
    "A": "Pour freiner le bateau plus rapidement",
    "B": "Pour écarter l’hélice de la personne",
    "C": "Pour lancer la bouée plus loin et plus droit"
   },
   "correct": "B",
   "explanation": "En virant du côté de la chute, l’arrière du bateau, et donc l’hélice, s’écarte de la personne à l’eau.",
   "tags": [
    "pratique"
   ],
   "concept": "hom-premier-reflexe"
  },
  {
   "id": "var_hom-premier-reflexe_2",
   "sectionId": "bonus_sec2",
   "question": "Un passager tombe à l’eau par tribord. De quel côté virez-vous immédiatement ?",
   "options": {
    "A": "Sur bâbord",
    "B": "Je garde le cap et j’accélère",
    "C": "Sur tribord"
   },
   "correct": "C",
   "explanation": "On vire du côté de la chute : l’arrière et l’hélice s’écartent de la personne.",
   "tags": [
    "pratique"
   ],
   "concept": "hom-premier-reflexe"
  },
  {
   "id": "var_hom-premier-reflexe_3",
   "sectionId": "bonus_sec2",
   "question": "Un équipier tombe à l’eau par bâbord. Quel est votre premier geste à la barre ?",
   "options": {
    "A": "Je vire sur bâbord",
    "B": "Je vire sur tribord",
    "C": "Je passe immédiatement la marche arrière",
    "D": "Je garde le cap"
   },
   "correct": "A",
   "explanation": "Virer du côté où la personne est tombée (ici bâbord) éloigne l’arrière et l’hélice ; une marche arrière la rapprocherait de l’hélice.",
   "tags": [
    "pratique"
   ],
   "concept": "hom-premier-reflexe"
  },
  {
   "id": "var_hom-premier-reflexe_4",
   "sectionId": "bonus_sec2",
   "question": "Homme à la mer : en même temps que vous virez de son côté, que faites-vous ?",
   "options": {
    "A": "Je coupe le moteur et j’attends qu’elle rejoigne le bateau à la nage",
    "B": "Je passe aussitôt la marche arrière vers la personne pour la récupérer au plus vite",
    "C": "J’alerte le bord, on la désigne du bras sans la quitter des yeux, on lance la bouée"
   },
   "correct": "C",
   "explanation": "Premier réflexe : virer du côté de la chute, prévenir le bord, désigner la personne du bras sans la quitter des yeux et lui lancer la bouée.",
   "tags": [
    "pratique"
   ],
   "concept": "hom-premier-reflexe"
  },
  {
   "id": "var_prise-coffre_1",
   "sectionId": "bonus_sec2",
   "question": "Pourquoi se présente-t-on face au vent pour prendre un coffre ?",
   "options": {
    "A": "Le vent freine le bateau et le garde dans l’axe",
    "B": "Le vent pousse le bateau vers le coffre plus facilement",
    "C": "Pour arriver plus vite sur le coffre"
   },
   "correct": "A",
   "explanation": "Face au coffre et face au vent : le vent freine le bateau et le maintient dans l’axe ; on arrive au pas.",
   "tags": [
    "pratique"
   ],
   "concept": "prise-coffre"
  },
  {
   "id": "var_prise-coffre_2",
   "sectionId": "bonus_sec2",
   "question": "Vous approchez d’un coffre. Le vent vient du nord. Vers quelle direction faites-vous route pour la dernière approche ?",
   "options": {
    "A": "Vers le sud, vent arrière",
    "B": "Vers l’est, vent de travers",
    "C": "Vers le nord, face au vent"
   },
   "correct": "C",
   "explanation": "On se présente face au coffre et face au vent : avec un vent du nord, on fait route au nord, au pas.",
   "tags": [
    "pratique"
   ],
   "concept": "prise-coffre"
  },
  {
   "id": "var_prise-coffre_3",
   "sectionId": "bonus_sec2",
   "question": "Prise de coffre : à quelle distance du coffre passez-vous le point mort puis la marche arrière ?",
   "options": {
    "A": "10 m",
    "B": "3 m",
    "C": "1 m",
    "D": "20 m"
   },
   "correct": "B",
   "explanation": "On approche face au vent, au pas ; à 3 m, point mort puis marche arrière doucement, pour s’arrêter à environ 1 m du coffre.",
   "tags": [
    "pratique"
   ],
   "concept": "prise-coffre"
  },
  {
   "id": "var_prise-coffre_4",
   "sectionId": "bonus_sec2",
   "question": "Où le bateau doit-il s’arrêter lors d’une prise de coffre ?",
   "options": {
    "A": "En touchant le coffre",
    "B": "À environ 10 m du coffre",
    "C": "Au-delà du coffre, puis marche arrière",
    "D": "À environ 1 m du coffre"
   },
   "correct": "D",
   "explanation": "Approche face au coffre et face au vent, au pas ; point mort et marche arrière à 3 m ; arrêt à environ 1 m, puis point mort.",
   "tags": [
    "pratique"
   ],
   "concept": "prise-coffre"
  },
  {
   "id": "var_accostage-angle_1",
   "sectionId": "bonus_sec2",
   "question": "Laquelle de ces approches est correcte pour accoster ?",
   "options": {
    "A": "Perpendiculaire au quai, à vitesse normale, puis marche arrière",
    "B": "Angle de 30° environ, petite marche avant, point mort à 3 ou 4 m",
    "C": "Parallèle au quai, moteur coupé",
    "D": "Angle d’environ 10°, en marche arrière, point mort à 1 m"
   },
   "correct": "B",
   "explanation": "Accostage : se présenter avec un angle de 30° entre l’axe du bateau et le quai, en petite marche avant ; à 3 ou 4 m, point mort.",
   "tags": [
    "pratique"
   ],
   "concept": "accostage-angle"
  },
  {
   "id": "var_accostage-angle_2",
   "sectionId": "bonus_sec2",
   "question": "Dans le mémo d’accostage « 30° – 3 m – PM », à quoi correspondent les 30° ?",
   "options": {
    "A": "À l’angle de barre à donner au dernier moment",
    "B": "À l’angle entre l’axe du bateau et le quai",
    "C": "À l’inclinaison du moteur",
    "D": "À la vitesse en nœuds divisée par 10"
   },
   "correct": "B",
   "explanation": "On se présente avec un angle d’environ 30° entre l’axe du bateau et le quai, on passe le point mort à 3 ou 4 m.",
   "tags": [
    "pratique"
   ],
   "concept": "accostage-angle",
   "near": [
    "gen_bonus_sec2_1"
   ]
  },
  {
   "id": "var_accostage-angle_3",
   "sectionId": "bonus_sec2",
   "question": "Vous approchez du quai presque perpendiculairement. Que corrigez-vous ?",
   "options": {
    "A": "Rien, c’est la bonne approche",
    "B": "J’accélère pour garder de la manœuvrabilité",
    "C": "Je réduis l’angle à environ 30° avec le quai"
   },
   "correct": "C",
   "explanation": "L’approche recommandée se fait avec un angle d’environ 30° entre l’axe du bateau et le quai, en petite marche avant.",
   "tags": [
    "pratique"
   ],
   "concept": "accostage-angle"
  },
  {
   "id": "var_accostage-angle_4",
   "sectionId": "bonus_sec2",
   "question": "Accostage : quel angle avec le quai et à quelle distance commencer à freiner ?",
   "options": {
    "A": "60° ; à 10 ou 15 m",
    "B": "30° ; à 3 ou 4 m",
    "C": "30° ; à 15 m du quai",
    "D": "10° ; à 1 m"
   },
   "correct": "B",
   "explanation": "Angle de 30° ; à 3 ou 4 m du quai, point mort puis barre vers le quai en passant la marche arrière.",
   "tags": [
    "pratique"
   ],
   "concept": "accostage-angle"
  },
  {
   "id": "var_casser-erre_1",
   "sectionId": "bonus_sec2",
   "question": "Comment vérifiez-vous que l’erre est bien cassée ?",
   "options": {
    "A": "L’aiguille du compte-tours est revenue à zéro",
    "B": "Un point fixe sur le côté ne défile plus",
    "C": "Le moteur a calé"
   },
   "correct": "B",
   "explanation": "Après la marche arrière, le bateau doit être à l’arrêt complet : on le contrôle sur un point fixe sur le côté, qui ne doit plus défiler.",
   "tags": [
    "pratique"
   ],
   "concept": "casser-erre"
  },
  {
   "id": "var_casser-erre_2",
   "sectionId": "bonus_sec2",
   "question": "Pour casser l’erre, vous avez mis la marche arrière. Le bateau est maintenant arrêté. Que faites-vous ?",
   "options": {
    "A": "Je reste en marche arrière",
    "B": "Je passe au point mort",
    "C": "Je coupe le moteur sans passer au point mort"
   },
   "correct": "B",
   "explanation": "Casser l’erre : marche arrière jusqu’à l’arrêt complet, puis point mort.",
   "tags": [
    "pratique"
   ],
   "concept": "casser-erre"
  },
  {
   "id": "var_casser-erre_3",
   "sectionId": "bonus_sec2",
   "question": "Que veut dire « casser l’erre » ?",
   "options": {
    "A": "Changer brusquement de cap pour couper son sillage",
    "B": "Mouiller l’ancre",
    "C": "Arrêter complètement le bateau en marche arrière, puis point mort",
    "D": "Réduire les gaz et laisser le bateau glisser doucement jusqu’au quai"
   },
   "correct": "C",
   "explanation": "L’erre est la vitesse que garde le bateau sur sa lancée ; on la casse par une marche arrière jusqu’à l’arrêt complet, puis point mort.",
   "tags": [
    "pratique"
   ],
   "concept": "casser-erre",
   "near": [
    "gen_bonus_sec2_2"
   ]
  },
  {
   "id": "var_casser-erre_4",
   "sectionId": "bonus_sec2",
   "question": "« Pour casser l’erre, il suffit de passer au point mort et d’attendre. » Cette affirmation est :",
   "options": {
    "A": "Vraie",
    "B": "Fausse"
   },
   "correct": "B",
   "explanation": "Au point mort, le bateau continue sur sa lancée et ne ralentit que lentement ; pour casser l’erre, on passe la marche arrière jusqu’à l’arrêt complet, puis le point mort.",
   "tags": [
    "pratique"
   ],
   "concept": "casser-erre"
  },
  {
   "id": "var_moteur-demarrage_1",
   "sectionId": "bonus_sec2",
   "question": "Que signifie le mémo EBCP, utile quand le moteur ne démarre pas ?",
   "options": {
    "A": "Eau, Bougies, Carburateur, Pompe à essence",
    "B": "Essence, Batterie, Coupe-circuit, Point mort",
    "C": "Écope, Bouée, Compas, Pavillon national"
   },
   "correct": "B",
   "explanation": "Si le moteur ne démarre pas, vérifier : Essence, Batterie, Coupe-circuit, Point mort.",
   "tags": [
    "pratique"
   ],
   "concept": "moteur-demarrage",
   "near": [
    "gen_bonus_sec2_3"
   ]
  },
  {
   "id": "var_moteur-demarrage_2",
   "sectionId": "bonus_sec2",
   "question": "Vous tournez la clé, rien ne se passe : la manette est restée en marche avant. Que faites-vous ?",
   "options": {
    "A": "J’insiste sur le démarreur jusqu’au démarrage",
    "B": "Je passe au point mort, puis je redémarre",
    "C": "Je change la batterie, sans doute à plat"
   },
   "correct": "B",
   "explanation": "Le moteur ne démarre que manette au point mort : c’est l’une des vérifications (essence, batterie, coupe-circuit, point mort).",
   "tags": [
    "pratique"
   ],
   "concept": "moteur-demarrage"
  },
  {
   "id": "var_moteur-demarrage_3",
   "sectionId": "bonus_sec2",
   "question": "Le moteur ne démarre pas et vous constatez que la clé du coupe-circuit n’est pas en place. Que faites-vous ?",
   "options": {
    "A": "Je remets le coupe-circuit et je redémarre",
    "B": "J’en conclus que la batterie est vide et je la change",
    "C": "Je démarre sans coupe-circuit en shuntant le contact du moteur"
   },
   "correct": "A",
   "explanation": "Le coupe-circuit, attaché au pilote, doit être en place : sans lui, le moteur ne démarre pas. Il fait partie des vérifications (essence, batterie, coupe-circuit, point mort).",
   "tags": [
    "pratique"
   ],
   "concept": "moteur-demarrage"
  },
  {
   "id": "var_moteur-demarrage_4",
   "sectionId": "bonus_sec2",
   "question": "Le moteur ne démarre pas. Lequel de ces points ne fait pas partie des vérifications à faire ?",
   "options": {
    "A": "L’essence dans le réservoir",
    "B": "La batterie",
    "C": "Le point mort de la manette",
    "D": "Le pavillon national"
   },
   "correct": "D",
   "explanation": "Les vérifications sont : essence, batterie, coupe-circuit et point mort (mémo EBCP).",
   "tags": [
    "pratique"
   ],
   "concept": "moteur-demarrage"
  },
  {
   "id": "var_appareillage-quai_1",
   "sectionId": "bonus_sec2",
   "question": "Lors de l’appareillage, pourquoi avance-t-on au ralenti environ 2 secondes, volant braqué vers le quai ?",
   "options": {
    "A": "Pour décoller l’avant du bateau du quai",
    "B": "Pour décoller l’arrière du bateau du quai",
    "C": "Pour tester l’embrayage avant de partir"
   },
   "correct": "B",
   "explanation": "Volant braqué vers le quai et marche avant au ralenti environ 2 secondes : l’arrière se décolle du quai.",
   "tags": [
    "pratique"
   ],
   "concept": "appareillage-quai"
  },
  {
   "id": "var_appareillage-quai_2",
   "sectionId": "bonus_sec2",
   "question": "Appareillage : l’arrière du bateau est décollé du quai. Que faites-vous ensuite ?",
   "options": {
    "A": "Je mets pleine marche avant, volant vers le quai",
    "B": "Je coupe le moteur et je pousse à la gaffe vers le large",
    "C": "Point mort, j’oriente le moteur, puis marche arrière"
   },
   "correct": "C",
   "explanation": "Après avoir décollé l’arrière, on passe au point mort, on oriente le moteur dans la direction voulue, puis on passe la marche arrière pour s’écarter du quai.",
   "tags": [
    "pratique"
   ],
   "concept": "appareillage-quai"
  },
  {
   "id": "var_appareillage-quai_3",
   "sectionId": "bonus_sec2",
   "question": "Vous êtes amarré bâbord à quai. De quel côté braquez-vous le volant pour décoller l’arrière ?",
   "options": {
    "A": "Vers tribord, vers le large",
    "B": "Vers bâbord, vers le quai",
    "C": "Au centre, moteur dans l’axe"
   },
   "correct": "B",
   "explanation": "On braque le volant vers le quai (ici bâbord) et on avance au ralenti environ 2 secondes : l’arrière s’écarte du quai.",
   "tags": [
    "pratique"
   ],
   "concept": "appareillage-quai"
  },
  {
   "id": "var_appareillage-quai_4",
   "sectionId": "bonus_sec2",
   "question": "Dans quel ordre se déroule l’appareillage le long d’un quai ?",
   "options": {
    "A": "Vérifier, démarrer, larguer, volant vers le quai et ralenti 2 s, point mort, marche arrière",
    "B": "Larguer les amarres, démarrer, pleine marche avant volant vers le large, puis vérifier",
    "C": "Démarrer, marche arrière directement, puis larguer les amarres"
   },
   "correct": "A",
   "explanation": "Vérifier le bateau, démarrer (et contrôler la pissette), larguer, décoller l’arrière (volant vers le quai, ralenti 2 s), point mort, puis marche arrière pour s’écarter.",
   "tags": [
    "pratique"
   ],
   "concept": "appareillage-quai"
  },
  {
   "id": "var_hom-point-mort_1",
   "sectionId": "bonus_sec2",
   "question": "Lors de la récupération d’un homme à la mer, la personne vient de passer l’étrave. Que faites-vous ?",
   "options": {
    "A": "J’accélère pour la dépasser et refaire un tour complet",
    "B": "Point mort, puis marche arrière pour l’amener au milieu du bateau",
    "C": "Je vire fort vers elle en gardant la marche avant pour la rattraper"
   },
   "correct": "B",
   "explanation": "Dès que la personne a passé l’étrave : point mort, puis marche arrière pour l’arrêter au milieu du bateau, puis de nouveau point mort.",
   "tags": [
    "pratique"
   ],
   "concept": "hom-point-mort"
  },
  {
   "id": "var_hom-point-mort_2",
   "sectionId": "bonus_sec2",
   "question": "Pourquoi le moteur doit-il rester au point mort pendant que l’on récupère la personne ?",
   "options": {
    "A": "Pour économiser le carburant pendant la manœuvre",
    "B": "Pour mieux entendre la VHF et les appels de la personne à l’eau",
    "C": "Une hélice en rotation près d’une personne à l’eau peut la tuer"
   },
   "correct": "C",
   "explanation": "Le point mort sauve des vies : une hélice qui tourne près d’une personne dans l’eau peut la blesser gravement.",
   "tags": [
    "pratique"
   ],
   "concept": "hom-point-mort"
  },
  {
   "id": "var_hom-point-mort_3",
   "sectionId": "bonus_sec2",
   "question": "Homme à la mer : à quel endroit du bateau doit se trouver la personne quand le bateau s’arrête ?",
   "options": {
    "A": "À l’arrière, près du moteur",
    "B": "Devant l’étrave",
    "C": "Au milieu du bateau"
   },
   "correct": "C",
   "explanation": "Après le point mort et une courte marche arrière, on arrête le bateau pour que la personne soit au milieu du bateau, loin de l’hélice, puis on repasse au point mort.",
   "tags": [
    "pratique"
   ],
   "concept": "hom-point-mort"
  },
  {
   "id": "var_hom-point-mort_4",
   "sectionId": "bonus_sec2",
   "question": "Vous revenez lentement vers la personne à l’eau. À quel moment passez-vous au point mort ?",
   "options": {
    "A": "Quand elle est encore à 20 m",
    "B": "Dès qu’elle a passé l’étrave",
    "C": "Quand elle arrive à hauteur du moteur",
    "D": "Seulement une fois qu’elle est à bord"
   },
   "correct": "B",
   "explanation": "On avance doucement ; dès que la personne a passé l’étrave, point mort, puis marche arrière pour l’amener au milieu du bateau.",
   "tags": [
    "pratique"
   ],
   "concept": "hom-point-mort"
  },
  {
   "id": "var_noeud-taquet_1",
   "sectionId": "bonus_sec3",
   "question": "Quelles sont les trois étapes du nœud de taquet ?",
   "options": {
    "A": "Deux boucles superposées enfilées par le dessus",
    "B": "Tour mort, huit, demi-clé retournée",
    "C": "Une boucle fixe, puis un nœud d’arrêt"
   },
   "correct": "B",
   "explanation": "Nœud de taquet : un tour mort à la base, un ou deux huit croisés, puis une demi-clé retournée qui bloque l’ensemble.",
   "tags": [
    "pratique"
   ],
   "concept": "noeud-taquet",
   "near": [
    "gen_bonus_sec3_1"
   ]
  },
  {
   "id": "var_noeud-taquet_2",
   "sectionId": "bonus_sec3",
   "question": "Par quoi commence-t-on un nœud de taquet ?",
   "options": {
    "A": "Par une demi-clé passée sur une des cornes",
    "B": "Par un huit serré autour des deux cornes",
    "C": "Par un tour mort à la base du taquet"
   },
   "correct": "C",
   "explanation": "On commence par un tour mort : le cordage arrive par la corne la plus éloignée et fait le tour de la base du taquet, puis viennent les huit et la demi-clé.",
   "tags": [
    "pratique"
   ],
   "concept": "noeud-taquet"
  },
  {
   "id": "var_noeud-taquet_3",
   "sectionId": "bonus_sec3",
   "question": "Pourquoi ne faut-il pas empiler les huit et les demi-clés sur un taquet ?",
   "options": {
    "A": "Il deviendrait impossible à défaire sous tension",
    "B": "Le nœud glisserait",
    "C": "Le taquet risquerait de casser sous le poids des nœuds"
   },
   "correct": "A",
   "explanation": "Tour mort, huit, demi-clé suffisent ; un empilement de nœuds devient impossible à défaire quand l’amarre est sous tension.",
   "tags": [
    "pratique"
   ],
   "concept": "noeud-taquet"
  },
  {
   "id": "var_noeud-taquet_4",
   "sectionId": "bonus_sec3",
   "question": "Quelle qualité attend-on d’un nœud de taquet bien fait ?",
   "options": {
    "A": "Ne jamais pouvoir se défaire, même par gros temps",
    "B": "Se régler facilement en hauteur",
    "C": "Pouvoir être largué vite, même sous tension"
   },
   "correct": "C",
   "explanation": "Le nœud de taquet sert à amarrer le bateau et doit pouvoir se larguer en un geste, même quand l’amarre est tendue.",
   "tags": [
    "pratique"
   ],
   "concept": "noeud-taquet"
  },
  {
   "id": "var_noeud-cabestan_1",
   "sectionId": "bonus_sec3",
   "question": "Quel nœud utilisez-vous pour fixer un pare-battage sur une filière ?",
   "options": {
    "A": "Le nœud de taquet",
    "B": "Le nœud de cabestan",
    "C": "Le nœud de huit",
    "D": "Le nœud de chaise"
   },
   "correct": "B",
   "explanation": "Le cabestan serre sur son support sans glisser et se règle facilement en hauteur : c’est le nœud des pare-battages.",
   "tags": [
    "pratique"
   ],
   "concept": "noeud-cabestan"
  },
  {
   "id": "var_noeud-cabestan_2",
   "sectionId": "bonus_sec3",
   "question": "On forme deux boucles identiques, on les superpose et on les enfile par le dessus sur une bitte d’amarrage. Quel nœud obtient-on ?",
   "options": {
    "A": "Un nœud de chaise",
    "B": "Un nœud de taquet",
    "C": "Un nœud de cabestan"
   },
   "correct": "C",
   "explanation": "C’est la méthode des deux boucles pour faire un nœud de cabestan sur une bitte d’amarrage.",
   "tags": [
    "pratique"
   ],
   "concept": "noeud-cabestan"
  },
  {
   "id": "var_noeud-cabestan_3",
   "sectionId": "bonus_sec3",
   "question": "Vu de face, à quoi reconnaît-on un nœud de cabestan bien fait ?",
   "options": {
    "A": "Il forme un « X », les deux brins sortant au milieu en sens opposés",
    "B": "Il forme une boucle fixe qui ne serre pas",
    "C": "Le brin libre sort parallèle aux autres, après une demi-clé retournée"
   },
   "correct": "A",
   "explanation": "Un cabestan correct forme un « X » sur son support, avec les deux brins qui sortent au milieu, en sens opposés.",
   "tags": [
    "pratique"
   ],
   "concept": "noeud-cabestan"
  },
  {
   "id": "var_noeud-cabestan_4",
   "sectionId": "bonus_sec3",
   "question": "Quel est l’avantage du nœud de cabestan ?",
   "options": {
    "A": "Il ne peut plus se défaire une fois serré",
    "B": "Il forme une boucle fixe pour le sauvetage",
    "C": "Il serre sans glisser et se règle facilement",
    "D": "Il empêche le cordage de filer dans une poulie"
   },
   "correct": "C",
   "explanation": "Le cabestan serre sur son support sans glisser quand on tire sur l’un ou l’autre brin, et se règle facilement : idéal pour un pare-battage ou une amarre provisoire.",
   "tags": [
    "pratique"
   ],
   "concept": "noeud-cabestan"
  },
  {
   "id": "var_helice-pas_1",
   "sectionId": "bonus_sec2",
   "question": "Qu’appelle-t-on le pas d’une hélice ?",
   "options": {
    "A": "Le nombre de pales",
    "B": "La distance théorique parcourue en un tour",
    "C": "Le diamètre du cercle décrit par les pales",
    "D": "L’angle d’inclinaison du moteur"
   },
   "correct": "B",
   "explanation": "Le pas est la distance théorique parcourue en un tour d’hélice ; à régime égal, il influe sur la vitesse du bateau.",
   "tags": [
    "pratique"
   ],
   "concept": "helice-pas"
  },
  {
   "id": "var_helice-pas_2",
   "sectionId": "bonus_sec2",
   "question": "À régime moteur égal, que procure une hélice de plus grand pas ?",
   "options": {
    "A": "Moins de vitesse, mais plus de reprise",
    "B": "Plus de vitesse, mais moins de reprise",
    "C": "Aucun changement de vitesse"
   },
   "correct": "B",
   "explanation": "À régime égal, un pas plus grand donne plus de vitesse, mais moins de reprise.",
   "tags": [
    "pratique"
   ],
   "concept": "helice-pas",
   "near": [
    "var_helice-pas_4"
   ]
  },
  {
   "id": "var_helice-pas_3",
   "sectionId": "bonus_sec2",
   "question": "Vous voulez plus de vitesse de pointe, à régime égal. Quelle hélice choisissez-vous ?",
   "options": {
    "A": "Une hélice de pas plus petit",
    "B": "Le pas n’a aucun effet sur la vitesse",
    "C": "Une hélice de pas plus grand"
   },
   "correct": "C",
   "explanation": "Le pas est la distance parcourue en un tour : à régime égal, un pas plus grand fait avancer le bateau plus vite (avec moins de reprise).",
   "tags": [
    "pratique"
   ],
   "concept": "helice-pas"
  },
  {
   "id": "var_helice-pas_4",
   "sectionId": "bonus_sec2",
   "question": "À régime égal, quel est l’effet d’une hélice de pas plus petit ?",
   "options": {
    "A": "Moins de vitesse, mais plus de reprise",
    "B": "Plus de vitesse et plus de reprise",
    "C": "Plus de vitesse, mais moins de reprise"
   },
   "correct": "A",
   "explanation": "À régime égal, un pas plus grand donne plus de vitesse mais moins de reprise ; c’est la même comparaison vue dans l’autre sens : un pas plus petit donne moins de vitesse mais plus de reprise.",
   "tags": [
    "pratique"
   ],
   "concept": "helice-pas",
   "near": [
    "var_helice-pas_2"
   ]
  },
  {
   "id": "var_unite-mille-noeud_1",
   "sectionId": "mod3_sec3",
   "question": "Vous naviguez à 10 nœuds pendant une heure. Quelle distance parcourez-vous ?",
   "options": {
    "A": "10 km, soit environ 5,4 milles",
    "B": "10 milles, soit environ 18,5 km",
    "C": "18,5 milles, soit environ 34 km",
    "D": "5 milles"
   },
   "correct": "B",
   "explanation": "1 nœud = 1 mille par heure ; 10 nœuds pendant 1 h = 10 milles, soit 10 × 1,852 ≈ 18,5 km.",
   "tags": [
    "pratique"
   ],
   "concept": "unite-mille-noeud"
  },
  {
   "id": "var_unite-mille-noeud_2",
   "sectionId": "mod3_sec3",
   "question": "Combien de mètres représentent 5 milles marins, la distance maximale d’un abri en navigation côtière en Polynésie française ?",
   "options": {
    "A": "5 000 m",
    "B": "8 050 m",
    "C": "9 260 m",
    "D": "9 852 m"
   },
   "correct": "C",
   "explanation": "1 mille marin = 1 852 m, donc 5 milles = 5 × 1 852 = 9 260 m.",
   "tags": [
    "pratique"
   ],
   "concept": "unite-mille-noeud"
  },
  {
   "id": "var_unite-mille-noeud_3",
   "sectionId": "mod3_sec3",
   "question": "Un bateau file 20 nœuds. À quelle vitesse cela correspond-il en km/h, environ ?",
   "options": {
    "A": "11 km/h",
    "B": "20 km/h",
    "C": "32 km/h",
    "D": "37 km/h"
   },
   "correct": "D",
   "explanation": "1 nœud = 1,852 km/h : 20 × 1,852 ≈ 37 km/h.",
   "tags": [
    "pratique"
   ],
   "concept": "unite-mille-noeud"
  }
 ],
 "sets": [
  {
   "id": "test1",
   "kind": "test",
   "title": "Test du module 1 — balisage",
   "description": "15 questions : marques latérales, marques spéciales et cardinales.",
   "maxErrors": 3,
   "questionIds": [
    "t_mardi_01",
    "t_mardi_02",
    "t_mardi_03",
    "t_mardi_04",
    "t_mardi_05",
    "t_mardi_06",
    "t_mardi_07",
    "t_mardi_08",
    "t_mardi_09",
    "t_mardi_10",
    "t_mardi_11",
    "t_mardi_12",
    "t_mardi_13",
    "t_mardi_14",
    "t_mardi_15"
   ]
  },
  {
   "id": "test2",
   "kind": "test",
   "title": "Test des modules 1 et 2 — balisage, feux et marques",
   "description": "15 questions, surtout sur les feux et marques des navires, avec un rappel du balisage.",
   "maxErrors": 3,
   "questionIds": [
    "t_mercredi_01",
    "t_mercredi_02",
    "t_mercredi_03",
    "t_mercredi_04",
    "t_mercredi_05",
    "t_mercredi_06",
    "t_mercredi_07",
    "t_mercredi_08",
    "t_mercredi_09",
    "t_mercredi_10",
    "t_mercredi_11",
    "t_mercredi_12",
    "t_mercredi_13",
    "t_mercredi_14",
    "t_mercredi_15"
   ]
  },
  {
   "id": "test3",
   "kind": "test",
   "title": "Test des modules 1 à 3 — signaux et règles de barre",
   "description": "15 questions, surtout sur les signaux et les règles de barre, avec un rappel du balisage.",
   "maxErrors": 3,
   "questionIds": [
    "t_jeudi_01",
    "t_jeudi_02",
    "t_jeudi_03",
    "t_jeudi_04",
    "t_jeudi_05",
    "t_jeudi_06",
    "t_jeudi_07",
    "t_jeudi_08",
    "t_jeudi_09",
    "t_jeudi_10",
    "t_jeudi_11",
    "t_jeudi_12",
    "t_jeudi_13",
    "t_jeudi_14",
    "t_jeudi_15"
   ]
  },
  {
   "id": "theme_c1_balisage",
   "kind": "theme",
   "sectionId": "mod1_sec1",
   "title": "QCM du cours — Balisage latéral",
   "description": "Les questions du cours, dans l’ordre, avec correction immédiate.",
   "questionIds": [
    "c1_balisage_01",
    "c1_balisage_02",
    "c1_balisage_03",
    "c1_balisage_04",
    "c1_balisage_05",
    "c1_balisage_06",
    "c1_balisage_07",
    "c1_balisage_08",
    "c1_balisage_09",
    "c1_balisage_10",
    "c1_balisage_11",
    "c1_balisage_12",
    "c1_balisage_13",
    "c1_balisage_14",
    "c1_balisage_15"
   ]
  },
  {
   "id": "theme_c2_speciales",
   "kind": "theme",
   "sectionId": "mod1_sec2",
   "title": "QCM du cours — Marques spéciales",
   "description": "Les questions du cours, dans l’ordre, avec correction immédiate.",
   "questionIds": [
    "c2_speciales_01",
    "c2_speciales_02",
    "c2_speciales_03",
    "c2_speciales_04",
    "c2_speciales_05",
    "c2_speciales_06",
    "c2_speciales_07",
    "c2_speciales_08",
    "c2_speciales_09",
    "c2_speciales_10",
    "c2_speciales_11",
    "c2_speciales_12",
    "c2_speciales_13",
    "c2_speciales_14",
    "c2_speciales_15"
   ]
  },
  {
   "id": "theme_c3_cardinales",
   "kind": "theme",
   "sectionId": "mod1_sec3",
   "title": "QCM du cours — Cardinales",
   "description": "Les questions du cours, dans l’ordre, avec correction immédiate.",
   "questionIds": [
    "c3_cardinales_01",
    "c3_cardinales_02",
    "c3_cardinales_03",
    "c3_cardinales_04",
    "c3_cardinales_05",
    "c3_cardinales_06",
    "c3_cardinales_07",
    "c3_cardinales_08",
    "c3_cardinales_09",
    "c3_cardinales_10",
    "c3_cardinales_11",
    "c3_cardinales_12",
    "c3_cardinales_13",
    "c3_cardinales_14",
    "c3_cardinales_15"
   ]
  },
  {
   "id": "theme_c4_feux",
   "kind": "theme",
   "sectionId": "mod2_sec1",
   "title": "QCM du cours — Feux et marques",
   "description": "Les questions du cours, dans l’ordre, avec correction immédiate.",
   "questionIds": [
    "c4_feux_01",
    "c4_feux_02",
    "c4_feux_03",
    "c4_feux_04",
    "c4_feux_05",
    "c4_feux_06",
    "c4_feux_07",
    "c4_feux_08",
    "c4_feux_09",
    "c4_feux_10"
   ]
  },
  {
   "id": "theme_c5_peche",
   "kind": "theme",
   "sectionId": "mod2_sec2",
   "title": "QCM du cours — Navires de pêche",
   "description": "Les questions du cours, dans l’ordre, avec correction immédiate.",
   "questionIds": [
    "c5_peche_01",
    "c5_peche_02",
    "c5_peche_03",
    "c5_peche_04",
    "c5_peche_05",
    "c5_peche_06",
    "c5_peche_07",
    "c5_peche_08",
    "c5_peche_09"
   ]
  },
  {
   "id": "theme_c6_particuliers",
   "kind": "theme",
   "sectionId": "mod2_sec3",
   "title": "QCM du cours — Navires particuliers",
   "description": "Les questions du cours, dans l’ordre, avec correction immédiate.",
   "questionIds": [
    "c6_particuliers_01",
    "c6_particuliers_02",
    "c6_particuliers_03",
    "c6_particuliers_04",
    "c6_particuliers_05",
    "c6_particuliers_06",
    "c6_particuliers_07",
    "c6_particuliers_08",
    "c6_particuliers_09",
    "c6_particuliers_10",
    "c6_particuliers_11",
    "c6_particuliers_12",
    "c6_particuliers_13",
    "c6_particuliers_14",
    "c6_particuliers_15",
    "c6_particuliers_16",
    "c6_particuliers_17",
    "c6_particuliers_18",
    "c6_particuliers_19",
    "c6_particuliers_20"
   ]
  },
  {
   "id": "theme_c7_sonores",
   "kind": "theme",
   "sectionId": "mod3_sec1",
   "title": "QCM du cours — Signaux sonores",
   "description": "Les questions du cours, dans l’ordre, avec correction immédiate.",
   "questionIds": [
    "c7_sonores_01",
    "c7_sonores_02",
    "c7_sonores_03",
    "c7_sonores_04",
    "c7_sonores_05",
    "c7_sonores_06",
    "c7_sonores_07",
    "c7_sonores_08",
    "c7_sonores_09",
    "c7_sonores_10"
   ]
  },
  {
   "id": "theme_c8_regissants",
   "kind": "theme",
   "sectionId": "mod3_sec2",
   "title": "QCM du cours — Signaux régissants",
   "description": "Les questions du cours, dans l’ordre, avec correction immédiate.",
   "questionIds": [
    "c8_regissants_01",
    "c8_regissants_02",
    "c8_regissants_03",
    "c8_regissants_04",
    "c8_regissants_05",
    "c8_regissants_06",
    "c8_regissants_07",
    "c8_regissants_08",
    "c8_regissants_09",
    "c8_regissants_10"
   ]
  },
  {
   "id": "theme_c9_barre",
   "kind": "theme",
   "sectionId": "mod3_sec3",
   "title": "QCM du cours — Règles de barre",
   "description": "Les questions du cours, dans l’ordre, avec correction immédiate.",
   "questionIds": [
    "c9_barre_01",
    "c9_barre_02",
    "c9_barre_03",
    "c9_barre_04",
    "c9_barre_05",
    "c9_barre_06",
    "c9_barre_07",
    "c9_barre_08",
    "c9_barre_09",
    "c9_barre_10",
    "c9_barre_11",
    "c9_barre_12",
    "c9_barre_13",
    "c9_barre_14",
    "c9_barre_15"
   ]
  },
  {
   "id": "theme_c13_loisirs",
   "kind": "theme",
   "sectionId": "mod4_sec3",
   "title": "QCM du cours — Loisirs nautiques",
   "description": "Les questions du cours, dans l’ordre, avec correction immédiate.",
   "questionIds": [
    "c13_loisirs_01",
    "c13_loisirs_02",
    "c13_loisirs_03",
    "c13_loisirs_04",
    "c13_loisirs_05",
    "c13_loisirs_06",
    "c13_loisirs_07",
    "c13_loisirs_08",
    "c13_loisirs_09",
    "c13_loisirs_10"
   ]
  },
  {
   "id": "serie1",
   "kind": "serie",
   "title": "Questionnaire type n° 1",
   "description": "Les 20 questions du questionnaire, dans l’ordre, en conditions d’examen : 15 minutes, 3 erreurs maximum.",
   "questionIds": [
    "exam_q1_1",
    "exam_q1_2",
    "exam_q1_3",
    "exam_q1_4",
    "exam_q1_5",
    "exam_q1_6",
    "exam_q1_7",
    "exam_q1_8",
    "exam_q1_9",
    "exam_q1_10",
    "exam_q1_11",
    "exam_q1_12",
    "exam_q1_13",
    "exam_q1_14",
    "exam_q1_15",
    "exam_q1_16",
    "exam_q1_17",
    "exam_q1_18",
    "exam_q1_19",
    "exam_q1_20"
   ]
  },
  {
   "id": "serie2",
   "kind": "serie",
   "title": "Questionnaire type n° 2",
   "description": "Les 20 questions du questionnaire, dans l’ordre, en conditions d’examen : 15 minutes, 3 erreurs maximum.",
   "questionIds": [
    "exam_q2_1",
    "exam_q2_2",
    "exam_q2_3",
    "exam_q2_4",
    "exam_q2_5",
    "exam_q2_6",
    "exam_q2_7",
    "exam_q2_8",
    "exam_q2_9",
    "exam_q2_10",
    "exam_q2_11",
    "exam_q2_12",
    "exam_q2_13",
    "exam_q2_14",
    "exam_q2_15",
    "exam_q2_16",
    "exam_q2_17",
    "exam_q2_18",
    "exam_q2_19",
    "exam_q2_20"
   ]
  },
  {
   "id": "serie3",
   "kind": "serie",
   "title": "Questionnaire type n° 3",
   "description": "Les 20 questions du questionnaire, dans l’ordre, en conditions d’examen : 15 minutes, 3 erreurs maximum.",
   "questionIds": [
    "exam_q3_1",
    "exam_q3_2",
    "exam_q3_3",
    "exam_q3_4",
    "exam_q3_5",
    "exam_q3_6",
    "exam_q3_7",
    "exam_q3_8",
    "exam_q3_9",
    "exam_q3_10",
    "exam_q3_11",
    "exam_q3_12",
    "exam_q3_13",
    "exam_q3_14",
    "exam_q3_15",
    "exam_q3_16",
    "exam_q3_17",
    "exam_q3_18",
    "exam_q3_19",
    "exam_q3_20"
   ]
  },
  {
   "id": "serie4",
   "kind": "serie",
   "title": "Questionnaire type n° 4",
   "description": "Les 20 questions du questionnaire, dans l’ordre, en conditions d’examen : 15 minutes, 3 erreurs maximum.",
   "questionIds": [
    "exam_q4_1",
    "exam_q4_2",
    "exam_q4_3",
    "exam_q4_4",
    "exam_q4_5",
    "exam_q4_6",
    "exam_q4_7",
    "exam_q4_8",
    "exam_q4_9",
    "exam_q4_10",
    "exam_q4_11",
    "exam_q4_12",
    "exam_q4_13",
    "exam_q4_14",
    "exam_q4_15",
    "exam_q4_16",
    "exam_q4_17",
    "exam_q4_18",
    "exam_q4_19",
    "exam_q4_20"
   ]
  }
 ]
};
