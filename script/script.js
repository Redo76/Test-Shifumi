const computerChoice = ["paper" , "rock", "scissor"];
const resultText = ["Gagné!", "Perdu!", "Match nul!"];
const rockChoice = document.querySelector(".pierre");
const paperChoice = document.querySelector(".feuille");
const scissorsChoice = document.querySelector(".ciseaux");
const resultat = document.querySelector(".resultat");
let finalResult = computerPlay();


function computerPlay(){
    let pps = Math.floor(Math.random()*3);
    let result = computerChoice[pps]; // Index number of computerChoice
    return result;
}


rockChoice.addEventListener("click", () =>{
    if (finalResult === "rock"){
        resultat.innerHTML = resultText[2];
    } else if (finalResult === "paper"){
        resultat.innerHTML = resultText[0];
    } else {
        resultat.innerHTML = resultText[1]
    }
})

paperChoice.addEventListener("click", () =>{
    if (finalResult === "rock"){
        resultat.innerHTML = resultText[0];
    } else if (finalResult === "paper"){
        resultat.innerHTML = resultText[2];
    } else {
        resultat.innerHTML = resultText[1]
    }
})

scissorsChoice.addEventListener("click", () =>{
    if (finalResult === "rock"){
        resultat.innerHTML = resultText[1];
    } else if (finalResult === "paper"){
        resultat.innerHTML = resultText[0];
    } else {
        resultat.innerHTML = resultText[2]
    }
})