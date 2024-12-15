//Variables
var buttons = document.querySelectorAll(".btn");
var colors = [];
var simonSequence = ["yellow", "blue", "red"];
var playerSequence = [];
var lvl = 1;
var message = document.querySelector("h1");
//appuier sur une touche pour debuter
document.addEventListener("keypress", () => {
  //initialise le level
  message.innerHTML = "Level " + lvl;
  //initialiser la sequence
  addColorToSimonSequence();
  // le joueur dois jouer la sequence
  checkSequencePlayer(playerSequence);
});
//attacher les evenement clique sur les bouton
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    makeSound(this.id);
    makeAnimation(this.id);
    playerSequence.push(this.id);4
  });
  // un tableau avec uniquement la liste des 4 coloeur dispo (plus facile a manipuler)
  colors.push(buttons[i].id);
};


//Fonction pour verifier l'ordre de sequence du joueur
function checkSequencePlayer(playerSequence) {
  for (var i = 0; i < simonSequence.length; i++) {
    if (playerSequence[i] != simonSequence[i]) {
      console.log("Game-over");
    }
    else {
      addColorToSimonSequence();
    }
  };
};

//Fonction qui permet de jouer la sequence du simon
function playSimonSequence() {
  for (var i = 0; i < simonSequence.length; i++) {
    setTimeout(function(index){
      console.log(document.querySelector("." + simonSequence[index]).id);
      document.querySelector("." + simonSequence[index]).click();
    },1000*i, i);
  };
};

//Fonction qui permet d'ajouter une couleur aléatoire dans la sequece de couleur du simon
function addColorToSimonSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  simonSequence.push(colors[randomNumber]);
  playSimonSequence();
};

//Fonction pour cree l'annimation a l'appui du boutton
function makeAnimation(color) {
  document.querySelector("." + color).classList.toggle("pressed");
  setTimeout(() => {
    document.querySelector("." + color).classList.toggle("pressed");
  }, 100);
};

//function pour faire un son sur le boutton au clique
function makeSound(color) {
  switch (color) {
    case "green":
      new Audio('sounds/green.mp3').play();
      break;
    case "red":
      new Audio('sounds/red.mp3').play();
      break;
    case "blue":
      new Audio('sounds/blue.mp3').play();
      break;
    default:
      new Audio('sounds/yellow.mp3').play();
      break;
  }

};