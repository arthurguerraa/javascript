const res = document.querySelector("#res");
const btnPedra = document.querySelector("#pedra");
const btnPapel = document.querySelector("#papel");
const btnTesoura = document.querySelector("#tesoura");


function getComputerChoice(){
            let min = 0
            let max = 2;
            let numeroNoIntervalo = Math.floor(Math.random()* (max - min + 1)); // Math floor arredonda o número gerado pelo Math Random pra baixo para ser um número inteiro
            // numeroNoIntervalo não pode ser const pq a variável é iniciamente um número mais depois é ocnvertido pra uma string

            switch (numeroNoIntervalo){
                case 0:
                    return numeroNoIntervalo = "pedra";
                    break;
                case 1:
                    return numeroNoIntervalo = "papel";
                    break;
                case 2:
                    return numeroNoIntervalo = "tesoura";
                    break;       
                default:
                    return console.log("jogada inválida");
            }
        }

        function getHumanChoice(humanChoice){
            return humanChoice;
        }  
        
        function playRound(computerSelection, humanSelection){
            if(computerSelection === humanSelection){
                return "Empate!";
            }else if(
                (computerSelection === "pedra" && humanSelection === "tesoura") || 
                (computerSelection === "papel" && humanSelection === "pedra") || 
                (computerSelection === "tesoura" && humanSelection === "papel")
            ){
                return "Computador venceu!";
            }else{
                    return "Você venceu!";
            }
        }

        function playGame(){

            btnPedra.addEventListener('click', () => {
                getHumanChoice("pedra");
            });
            btnPapel.addEventListener('click', () =>{
                getHumanChoice("papel");
            });
            btnTesoura.addEventListener('click', () => {
                getHumanChoice("tesoura");
            });

            let humanScore = 0;
            let computerScore = 0;
            let i = 1;
                    const computerSelection = getComputerChoice();
                    const humanSelection = getHumanChoice();

                    const resultado = playRound(computerSelection, humanSelection);

                    if(resultado === "Você venceu!"){
                        humanScore++
                    }else if(resultado === "Computador venceu!"){
                        computerScore++
                    }

                    console.log(`Rodada ${i}: ${resultado}`);
                    console.log(`Placar: Você ${humanScore} x ${computerScore} Computador\n`);
                    i++;

                if(humanScore === 5){
                    res.innerHTML = "Parabéns! Você ganhou o jogo!";
                }else if(computerScore === 5){
                    res.innerHTML = "O computador ganhou o jogo!";
                }
            }