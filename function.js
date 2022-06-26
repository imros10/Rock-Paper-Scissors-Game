    document.getElementById('top-button-handle').addEventListener('click',function(event){

        // user input 
        const userInput = event.target.value;
        // computer function 
        const computerMemory = ['rock','paper','scissors'];
        const computerSay = computerMemory[Math.floor(Math.random() * computerMemory.length)];
        // point declare 

        // start condition 
        mainFunction(userInput,computerSay)
        // console.log(computerSay);
        
    })


    // main function 
    function mainFunction(userInput,computerSay){
        // user pints 
        let userPoint = 0;
        let computerPoint = 0;
        
        const userImage = document.getElementById('user-image');
        const computerImage = document.getElementById('computer-image');
        const resultArea = document.getElementById('who-win');
        const userPlayd = document.getElementById('user-played')
        const ComputerPlayd = document.getElementById('computer-played')

        if(userInput == computerSay){
            userPlayd.innerText=`You played ${userInput}`
            ComputerPlayd.innerText=`Computer played ${computerSay}`
            resultArea.innerText="It's a tie"
            if((userInput && computerSay) == 'rock'){
                console.log(userInput)
                userImage.setAttribute('src', `image/left ${userInput}.png`)
                computerImage.setAttribute('src', `image/left ${userInput}.png`)   
            }else{
                userImage.setAttribute('src', `image/left ${userInput}.png`)
            computerImage.setAttribute('src', `image/right ${userInput}.png`)
            }
            
        }
        else if(userInput == 'rock' && computerSay == 'paper'){
            userPlayd.innerText=`You played ${userInput}`
            ComputerPlayd.innerText=`Computer played ${computerSay}`
            resultArea.innerText="Computer Win"
            if((userInput && computerSay) == 'rock'){
                console.log(userInput)
                userImage.setAttribute('src', `image/left ${userInput}.png`)
                computerImage.setAttribute('src', `image/left ${userInput}.png`)   
            }else{
                userImage.setAttribute('src', `image/left ${userInput}.png`)
            computerImage.setAttribute('src', `image/right ${userInput}.png`)
            }
        }
    }