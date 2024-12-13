for (let i = 0; i < document.querySelectorAll("button").length; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", ()=>{
        document.querySelector("h1").style.color = "purple";
    });

}