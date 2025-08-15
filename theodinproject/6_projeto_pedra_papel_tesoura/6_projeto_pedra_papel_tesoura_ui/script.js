const btnPedra = document.querySelector("#pedra");
const btnPapel = document.querySelector("#papel");
const btnTesoura = document.querySelector("#tesoura");
const res = document.querySelector("#res");

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

        function getHumanChoice(){
            const escolha = prompt("Escolha sua jogada");
            return escolha.toLowerCase();
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
            let humanScore = 0;
            let computerScore = 0;
            
            for(let i = 1; i <= 5; i++){
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
                }

                if(humanScore > computerScore){
                    res.innerHTML = "Parabéns! Você ganhou o jogo!";
                }else if(computerScore > humanScore){
                    res.innerHTML = "O computador ganhou o jogo!";
                }else{
                    res.innerHTML = "O jogo terminou empatado!";
                }
            }