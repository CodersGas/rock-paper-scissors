
let playerWins = 0;
let computerWins = 0;
let noOfRounds = 0;

const playerScore = document.getElementById("player-score");
playerScore.innerHTML = "0";

const computerScore = document.getElementById("computer-score");
computerScore.innerHTML = "0";

const results = document.getElementById("winner");
results.innerHTML = "Let's Play";

const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorButton = document.getElementById("scissor");
const resetButton = document.getElementById("reset");

let playerSelection;
let computerSelection;
let playerImg;
let resetSelection;

rockButton.addEventListener('click', function(e){
	playerSelection = "Rock";
	playerImg = document.getElementById("player-img");
	playerImg.src = "rock.png";
	playGame();
});

paperButton.addEventListener('click', function(e){
	playerSelection = "Paper"
	playerImg = document.getElementById('player-img');
	playerImg.src = "paper.png";
	playGame();
});

scissorButton.addEventListener('click', function(e){
	playerSelection = "Scissor";
	playerImg = document.getElementById("player-img");
	playerImg.src = "scissor.png";
	playGame();
});

resetButton.addEventListener('click', function(e){
	resetSelection = "Reset";
	reset();
});

function playGame(){
	computerSelection = computerPlay();
	console.log("Computer Selected : " + computerSelection);
	let savedComputerSelection = computerSelection;

	playRound(playerSelection, savedComputerSelection);

	if(playerWins === 5){
		results.innerHTML = "You win. Score " + playerWins + " - " + computerWins;
	}

	else if(computerWins === 5){
		results.innerHTML = "You lose. Score " + playerWins + " - " + computerWins;
	}
}

function computerPlay(){
	return randomOfThree(3);
}

function playRound(playerSelection, computerSelection){
	let playerImg;
	if(playerSelection == "Rock" || playerSelection == "Paper" || playerSelection == "Scissor"){
		if(playerSelection != computerSelection){
			
			switch(playerSelection){
				
				case "Rock":
					return whoWins("Paper");
				
				case "Paper":
					return whoWins("Scissor");

				case "Scissor":
					return whoWins("Rock");	 	
			}
		}

		else{
			results.innerHTML = "TIE";
		}
	}
}

function randomOfThree(noOfChoices){
	let choiceNum = Math.floor(Math.random() * Math.floor(noOfChoices));
	let computerImg;

	switch(choiceNum){

		case 0:
			computerImg = document.getElementById("computer-img");
			computerImg.src = "rock.png";		
			return "Rock";

		case 1:
			computerImg = document.getElementById("computer-img");
			computerImg.src = "paper.png";		
			return "Paper";

		case 2:
			computerImg = document.getElementById("computer-img");
			computerImg.src = "scissor.png";
			return "Scissor";			
	}
}

function whoWins(choice){
	
	if(computerSelection == choice){
		computerWins += 1;
		computerScore.innerHTML = computerWins;
		results.innerHTML = "Try Again!!";
	}

	else{
		playerWins += 1;
		playerScore.innerHTML = playerWins;
		results.innerHTML = "Keep up!";
	}
}

function sleep(milliseconds){
	let start = new Date().getTime();

	for(let i = 0; i < 1e7; i++){
		if((new Date().getTime() - start) > milliseconds){
			break;
		}
	}
}

function reset(){

	if(resetSelection === "Reset" || playerWins === 5 || computerWins === 5){
		playerWins = 0;
		computerWins = 0;
		playerScore.innerHTML = "0";
		computerScore.innerHTML = "0";
		results.innerHTML = "Let's Play Again!";
		resetButton.innerHTML = "Reset";
	}
}