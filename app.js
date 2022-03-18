let UserScore = 0;
let ComputerScore = 0;

const UserScore_span = document.getElementById("UserScore");
const computerScore_span = document.getElementById("ComputerScore");
const ScoreBoard_div = document.querySelector("score");
const Msg_div = document.querySelector("Msg");

const Sten_div = document.getElementById("Sten");
const Sax_div = document.getElementById("Sax");
const Påse_div = document.getElementById("Påse");

Sten_div.addEventListener('click', function() {
    spel("Sten");
});
    
Sax_div.addEventListener('click', function() {
    spel("Sax");
});
    
Påse_div.addEventListener('click', function() {
    spel("Påse");
});


function getComputerchoice(){
    const choices = ['Sten', 'Sax', 'Påse'];
    const randomnummer = Math.floor(Math.random() * 3);
    return choices[randomnummer];
}

function vinst() {
    UserScore++;
    UserScore_span.innerHTML = UserScore;
    
}

function förlust() {
    ComputerScore++;
    computerScore_span.innerHTML = ComputerScore;
}

function lika() {
    
}


function spel(userChoice) {
    
    const Computerchoice = getComputerchoice();
    switch (userChoice + Computerchoice) {
        case "StenSax":
        case "PåseSten":
        case "SaxPåse":
            vinst();
            break;
        case "StenPåse":
        case "SaxSten":
        case "PåseSax":
            förlust();
            break;
        case "StenSten":
        case "PåsePåse":
        case "SaxSax":
            lika();
            break;
    }
}
