const res = document.querySelector("#res");
const btnPedra = document.querySelector("#pedra");
const btnPapel = document.querySelector("#papel");
const btnTesoura = document.querySelector("#tesoura");
const btnJogar = document.querySelector("#jogar");
const btnResetar = document.querySelector("#resetar");

let humanSelection = "";
let humanScore = 0;
let computerScore = 0;
let rodada = 1;

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

         btnPedra.addEventListener('click', () => {
                humanSelection = "pedra";
            });
            btnPapel.addEventListener('click', () =>{
                humanSelection = "papel";
            });
            btnTesoura.addEventListener('click', () => {
                humanSelection = "tesoura";
            });

        btnJogar.addEventListener('click', () => {
            if(humanSelection === ""){
                res.innerHTML = "Escolha pedra, papel ou tesoura antes de jogar!";
                return;
            }
            const computerSelection = getComputerChoice();

            const resultado = playRound(computerSelection, humanSelection);

            if(resultado === "Você venceu!"){
                humanScore++
            }else if(resultado === "Computador venceu!"){
                computerScore++
            }

            res.innerHTML = `Rodada ${rodada}: ${resultado}<br>Placar: Você ${humanScore} x ${computerScore} Computador<br><br>`;
            rodada++;

                if(humanScore === 5){
                    res.innerHTML += "Parabéns! Você ganhou o jogo!";
                    btnJogar.disabled = true;
                }else if(computerScore === 5){
                    res.innerHTML += "O computador ganhou o jogo!";
                    btnJogar.disabled = true;
                }
        });


        btnResetar.addEventListener('click', () => {
            res.innerHTML = "";
            let humanSelection = "";
            let humanScore = 0;
            let computerScore = 0;
            let rodada = 1;
        })

        
        