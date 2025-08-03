let status = JSON.parse(localStorage.getItem('status')) || {
            wins: 0, losses: 0, ties: 0
        };

        updatedScore();

        let isAutoPlaying = false;
        let intervalId;  //to store prvious gameplays so its global 
        function autoPlay(){
            if (!isAutoPlaying){
                intervalId = setInterval( () => {
                const playerMove = randomPick(); 
                /* intervalId = setInterval(function(){
                const playerMove = randomPick();  */  //this fun can only be accessed inside this fun and if you return then only it goes outside of function
                playGame(playerMove);
            }, 1000);
            isAutoPlaying = true;
        }
        else{
            clearInterval(intervalId);
            isAutoPlaying = false;
        }
        }
        
        document.querySelector('.js-rock-btn').addEventListener('click', () => {
            playGame('Rock');
        });

        document.querySelector('.js-paper-btn').addEventListener('click', () => {
            playGame('Paper');
        });

        document.querySelector('.js-scissor-btn').addEventListener('click', () => {
            playGame('Scissor');
        });
        function playGame(playerMove) {
            const computerMove = randomPick();
            let result = '';
            if (playerMove === 'Scissor') {

                if (computerMove === 'Rock') {
                    result = 'You Lose.';
                }
                else if (computerMove === 'Paper') {
                    result = 'You Win.';
                }
                else if (computerMove === 'Scissor') {
                    result = 'Tie.';
                }
                console.log(result);
            }
            else if (playerMove === 'Paper') {

                if (computerMove === 'Rock') {
                    result = 'You Win.';
                }
                else if (computerMove === 'Paper') {
                    result = 'Tie.';
                }
                else if (computerMove === 'Scissor') {
                    result = 'You Lose.';
                }
                console.log(result);
            }
            else if (playerMove === 'Rock') {

                if (computerMove === 'Rock') {
                    result = 'Tie.';
                }
                else if (computerMove === 'Paper') {
                    result = 'You Lose.';
                }
                else if (computerMove === 'Scissor') {
                    result = 'You Win.';
                }
                console.log(result);
            }

            if(result === 'You Win.'){
                status.wins += 1;
                console.log(status);
            }
            else if(result === 'You Lose.'){
                status.losses += 1;
                console.log(status);
            }
            else if(result === 'Tie.'){
                status.ties +=1;
                console.log(status);
            }
            localStorage.setItem('status', JSON.stringify(status)); 
            //uploading this to storg by changing js object to json string cos json acepts only string

            updatedScore();

            document.querySelector('.js-result').innerHTML = result ;

            document.querySelector('.js-moves').innerHTML = `YOU     
            <img src="../images/${playerMove}-emoji.png" alt="rock-emoji" class="move-icon">
            
            <img src="../images/${computerMove}-emoji.png" alt="rock-emoji" class="move-icon">COMPUTER
             `;

            //please check for computerMove's and our image names should be the same due to ${xxx} 

            // alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}
            //     Wins: ${status.wins}, Losses: ${status.losses}, Ties:${status.ties}`);

        }
        
        function randomPick() {
            const randomNumber = Math.random();
            let computerMove = '';

            if (randomNumber >= 0 && randomNumber < 1 / 3) {
                computerMove = 'Rock';
            }
            else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
                computerMove = 'Paper';
            }
            else if (randomNumber >= 2 / 3 && randomNumber < 1) {
                computerMove = 'Scissor';
            }

            return computerMove;
        }
        function updatedScore(){
            document.querySelector('.js-para').innerHTML = `Wins: ${status.wins}, Losses: ${status.losses}, Ties:${status.ties}`;
        }

        document.body.addEventListener('keydown', (event) => {
            //console.log(event.key);
            if(event.key === 'r'){
                playGame('Rock');
            }

            if(event.key === 'p'){
                playGame('Paper');
            }
            
            if(event.key === 's'){
                playGame('Scissor');
            }
        })