//Detecting Button Press
var buttons = document.getElementsByClassName("drum");

for (var i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", function (){
    var buttonValue = this.innerHTML;
      makeSound(buttonValue);
      makeAnimation(buttonValue);
    });
}

//Detecting Keyboard Press
document.addEventListener("keydown", function(e){
    makeSound(e.key);
    makeAnimation(e.key);
});

function makeSound(key){
    switch (key) {
        case "a":  
        var kick = new Audio('sounds/kick-bass.mp3');
        kick.play();
            break;
        case "s":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "d":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "f":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "j":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "k":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "l":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        default:
            console.log(buttonValue);
            break;
    }
}

function makeAnimation(currentKey){
  var activeButton =  document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  }, 100);
}