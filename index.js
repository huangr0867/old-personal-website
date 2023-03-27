var today = new Date();
var bg = document.getElementById("dark-mode-bg");
var words = document.getElementsByClassName("dark-mode-words");
var nav = document.getElementById("dark-mode-nav");
var footer = document.getElementById("dark-mode-footer");
var night = document.getElementById("night-mode");
var box1 = document.getElementsByClassName("box");
var boxPublication = document.getElementsByClassName("box-publication");
var boxEXP = document.getElementsByClassName("box-exp");
var nightIcon = document.getElementById("night-icon");

if (today.getHours() > 17) {
    nightMode();
    
}


function nightMode (){
        bg.style.backgroundColor = "#21252A";
        footer.style.backgroundColor = "#383c44";
        for (let box of box1) {
            box.style.borderColor = "white";
            box.addEventListener("mouseenter", function( event ) {   
                event.target.style.borderColor = "transparent";
              }, false);
              box.addEventListener("mouseleave", function( event ) {   
                event.target.style.borderColor = "white";
              }, false);
        }
        for (let box of boxEXP) {
            box.style.borderColor = "white";
            box.addEventListener("mouseenter", function( event ) {   
                event.target.style.borderColor = "transparent";
              }, false);
              box.addEventListener("mouseleave", function( event ) {   
                event.target.style.borderColor = "white";
              }, false);
        }
        for (let box of boxPublication) {
            box.style.borderColor = "white"
        }
        for (let word of words) {
            word.style.color = "white";
        }
        nav.classList.remove("navbar-light");
        nav.classList.remove("bg-light");
        nav.classList.add("navbar-dark");
        nav.classList.add("bg-dark");
        night.onclick=lightMode;

        
    
}

function lightMode (){
    bg.style.backgroundColor = "white";
    footer.style.backgroundColor = "#fafafa"
    for (let box of box1) {
        box.style.borderColor = "black";
        box.addEventListener("mouseenter", function( event ) {   
            event.target.style.borderColor = "transparent";
          }, false);
          box.addEventListener("mouseleave", function( event ) {   
            event.target.style.borderColor = "black";
          }, false);
    }
    for (let box of boxEXP) {
        box.style.borderColor = "black";
        box.addEventListener("mouseenter", function( event ) {   
            event.target.style.borderColor = "transparent";
          }, false);
          box.addEventListener("mouseleave", function( event ) {   
            event.target.style.borderColor = "black";
          }, false);
    }
    for (let box of boxPublication) {
        box.style.borderColor = "black"
    }
    for (let word of words) {
        word.style.color = "black";
    }
    nav.classList.remove("navbar-dark");
    nav.classList.remove("bg-dark");
    nav.classList.add("navbar-light");
    nav.classList.add("bg-light");
    night.onclick=nightMode;
}