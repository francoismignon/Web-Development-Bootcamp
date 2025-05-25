import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

// DÉFI :

// 1. Implémenter la fonctionnalité d’ajout de note.
// - Créer une constante qui garde en mémoire le titre et le contenu.
// - Renvoyer la nouvelle note à l’application principale (App).
// - Ajouter la nouvelle note à un tableau.
// - Utiliser ce tableau pour afficher des composants Note séparés pour chaque élément.

// 2. Implémenter la fonctionnalité de suppression de note.
// - Créer un rappel (callback) depuis le composant Note pour déclencher une fonction de suppression.
// - Utiliser la méthode filter pour retirer l’élément à supprimer du tableau.
// - Passer un identifiant (id) au composant Note, et le renvoyer à l’application principale lors de la suppression.

// Voici le résultat final attendu :
// https://pogqj.csb.app/

