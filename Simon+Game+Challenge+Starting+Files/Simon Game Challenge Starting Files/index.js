//On attache les evenements sons et animation a tous les bouttons
for(var i = 0; i < document.querySelectorAll(".btn").length; i++){
    document.querySelectorAll(".btn")[i].addEventListener("click", function(){
        makeSound(this.id);
        buttonAnimation(this);
    });
}

//Presser la touche A pour debuter
document.addEventListener("keypress", function(e){
    if (e.key === "a") {
        document.querySelector("h1").innerHTML = "Level 1";
    }
});

//choisi le boutton correcpondant dans le tableau poour le mettre dans la serie du jeu
var serieJeu = [];
serieJeu.push(buttons[random]);


//fonction qui genere un nombre aléatoire et, l'ajoute a un tableau et retourne le tableau
function chooseButton(selectedButton){
    selectedButton.push(Math.floor(Math.random() * 4) + 1);
    return selectedButton;
};


function buttonAnimation(button){
    button.classList.toggle("pressed");
    setTimeout(()=>{
        button.classList.toggle("pressed");
    },100);
}

function makeSound(colorId){
    switch (colorId) {
        case "red": 
            new Audio("sounds/red.mp3").play();
            break;
        case "blue":
            new Audio("sounds/blue.mp3").play();
            break;
        case "green":
            new Audio("sounds/green.mp3").play();
            break;
        case "yellow":
            new Audio("sounds/yellow.mp3").play();
            break;
        default:
            new Audio("sounds/wrong.mp3").play();
            break;
    }
};