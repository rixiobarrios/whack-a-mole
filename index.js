// initialize score variable
let score = 0;

// set inner HTML of "score" element to our variable
document.getElementById("score").innerHTML = score;

// use setInterval to repeat this process and generate random moles
let active = setInterval(renderMoles, 300);

// add event listener to the parent node for all "holes" and "moles"
const gameArea = document.getElementById("whack-a-mole");
gameArea.addEventListener('click', whack);

function whack(clickEvent){
    // if the target is of the mole class
    if(clickEvent.target.matches(".mole")){
        // increment score variable
        score++;
        // update score on HTML element
        document.getElementById("score").innerHTML = score;
        // remove the 'mole' class from the clicked element
        clickEvent.target.classList.remove("mole");
    }
    // win condition
    if(score == 2){
        // prompt user
        alert("You won!");
        // clearInterval
        clearInterval(active);
        // clear moles
        document.getElementsByClassName("mole").toggle("mole");
    }
}

function renderMoles(){
    // collect all "holes"
    const holes = Array.from(document.getElementsByClassName("hole"));
    // randomly pick one of the "holes" index
    const randomHoleIndex = Math.floor(Math.random() * holes.length);
    // reference the random array element
    const mole = holes[randomHoleIndex];
    // toggle "mole" class on element
    mole.classList.toggle("mole");
}