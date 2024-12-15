//Variables
var buttons = document.querySelectorAll(".btn");
var colors = [];
var simonSequence = [];
var playerSequence = [];
var lvl = 1;
var message = document.querySelector("h1");
//initialisation
pressAkeyToStart();

function pressAkeyToStart() {
  document.addEventListener("keypress", () => {
    //initialise le level
    message.innerHTML = "Level " + lvl;
    //initialiser la sequence
    addColorToSimonSequence();
  });
};

//attacher les evenement clique sur les bouton
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
    makeSound(this.id);
    makeAnimation(this.id);
  });
  // un tableau avec uniquement la liste des 4 coloeur dispo (plus facile a manipuler)
  colors.push(buttons[i].id);
};

//le joueur va choisir sa sequence
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function (e) {
    if (e.isTrusted) {
      playerSequence.push(this.id);
      if (playerSequence.length === simonSequence.length) {
        checkSequencePlayer(playerSequence);
      }
    }
  });
};

//Fonction pour verifier l'ordre de sequence du joueur
function checkSequencePlayer(playerSequence) {
  for (var i = 0; i < playerSequence.length; i++) {
      if (playerSequence[i] != simonSequence[i]) {
        gameOver();
      }
  };
  message.innerHTML = "Level " + ++lvl;
  playerSequence.length = 0;
  addColorToSimonSequence();
};

//Fonction gameOver
function gameOver(){
  simonSequence.length = 0;
  playerSequence.length = 0;
  message.innerHTML = "Game Over, Press Any Key to Restart";
  new Audio ('sounds/wrong.mp3').play();
  document.querySelector("html body").classList.toggle("game-over");
  setTimeout(()=>{
    document.querySelector("html body").classList.toggle("game-over");
  },100)
};
//Fonction qui permet de jouer la sequence du simon
function playSimonSequence() {

  for (var i = 0; i < simonSequence.length; i++) {
    setTimeout(()=>{
      document.querySelector("." + simonSequence[simonSequence.length - 1]).click();
    },500);
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