const audioFiles = [new Audio("sounds/crash.mp3"), new Audio("sounds/kick-bass.mp3"), new Audio("sounds/snare.mp3"), 
new Audio("sounds/tom-1.mp3"), new Audio("sounds/tom-2.mp3"), new Audio("sounds/tom-3.mp3"), new Audio("sounds/tom-4.mp3")];

for(let i = 0; i < document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll("button")[i].addEventListener("click", function(){
        let buttonPress = this.innerHTML;
        makeSound(buttonPress);
        buttonAnimation(buttonPress);
    });

    document.addEventListener("keypress", function(event){
        makeSound(event.key);
        buttonAnimation(event.key);
    });

}

function makeSound(key){
        switch(key){
            case "w":
                audioFiles[0].play();
                break;
            case "a":
                audioFiles[1].play();
                break;
            case "s":
                audioFiles[2].play();
                break;
            case "d":
                audioFiles[3].play();
                break;
            case "j":
                audioFiles[4].play();
                break;
            case "k":
                audioFiles[5].play();
                break;
            case "l":
                audioFiles[6].play();
                break;
        }

}

function buttonAnimation(currentKey){
    document.querySelector(`.${currentKey}`).classList.add("pressed");
    //I ❤️ ES6 syntax
    let timeout = setTimeout(() =>{
        document.querySelector(`.${currentKey}`).classList.remove("pressed");
    }, 2000);

}