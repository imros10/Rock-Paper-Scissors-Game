    // user pints 
        let userPoint = 0;
        let computerPoint = 0;
        let levelGot = 0;
        const modalWrap = document.createElement('div');
        
        function wrapFunction(){
            modalWrap.innerHTML=`<div class="modal" tabindex="-1">
            <div class="modal-dialog text-center">
              <div class="modal-content">
                <div class="modal-header justify-content-center">
                  <h5 class="modal-title">What would you like the winning score to be?
                  </h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                <input type="range" id="get-value" step="1"
                  min="5" max="50"  value="0" oninput="this.nextElementSibling.value = this.value">
                <output>5</output>
                </div>
                <div class="modal-footer justify-content-center">
                  <button type="button" id="getLevelV" class="btn btn-secondary">Sumbit</button>
                  
                </div>
              </div>
            </div>
          </div>`;
          document.body.appendChild(modalWrap);
          const myModal = new bootstrap.Modal(document.querySelector('.modal'))
          myModal.show()
          document.getElementById('getLevelV').addEventListener('click',function (){
            const valueGet = document.getElementById('get-value');
            const cobertTonumber = parseInt(valueGet.value)
            document.getElementById('current-level').innerText=cobertTonumber
            levelGot = cobertTonumber;
            myModal.hide()
           
           

        })
        }

        window.onload = function(){
            wrapFunction()
        }
     
           
           
            

        
        
       
        // getLevel()

  /* const range = document.getElementById('get-value');
        console.log(range.value) */
            document.getElementById('top-button-handle').addEventListener('click',function(event){
               
        // user input 
        const userInput =event.target.value;
        if(userInput){
             // computer function 
        const computerMemory = ['rock','paper','scissors'];
        const computerSay = computerMemory[Math.floor(Math.random() * computerMemory.length)];
        // point declare 

        // start condition 
        mainFunction(userInput,computerSay,1)
        // console.log(computerSay);
        }else{
            document.body.innerHTML = `<div class="text-center mt-5">
            <div class="spinner-border" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>`;
        }
       
        
    })


    // main function 
    function mainFunction(userInput,computerSay,power){
        // User point dom 
        const userDom = document.getElementById('your-main')
        const computerDom = document.getElementById('computer-main')
        // user pints 
        // let userPoint = 0;
        // let computerPoint = 0;
        
        const userImage = document.getElementById('user-image');
        const computerImage = document.getElementById('computer-image');
        const resultArea = document.getElementById('who-win');
        const userPlayd = document.getElementById('user-played')
        const ComputerPlayd = document.getElementById('computer-played')
        // check whan is your ppoint 
        console.log(levelGot)
        console.log(computerPoint)

        // main game function 
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
            computerPoint = computerPoint + 1;
            computerDom.innerText=computerPoint

            userPlayd.innerText=`You played ${userInput}`
            ComputerPlayd.innerText=`Computer played ${computerSay}`
            resultArea.innerText="Computer Win"
            
                console.log(userInput)
                userImage.setAttribute('src', `image/left ${userInput}.png`)
            computerImage.setAttribute('src', `image/right ${computerSay}.png`)
            }
        else if(userInput == 'rock' && computerSay == 'scissors'){
            userPoint = userPoint + 1;
            userDom.innerText=userPoint

            userPlayd.innerText=`You played ${userInput}`
            ComputerPlayd.innerText=`Computer played ${computerSay}`
            resultArea.innerText="You Win"
            
                console.log(userInput)
                userImage.setAttribute('src', `image/left ${userInput}.png`)
            computerImage.setAttribute('src', `image/right ${computerSay}.png`)
            }
        else if(userInput == 'paper' && computerSay == 'rock'){
            userPoint = userPoint + 1;
            userDom.innerText=userPoint

            userPlayd.innerText=`You played ${userInput}`
            ComputerPlayd.innerText=`Computer played ${computerSay}`
            resultArea.innerText="You Win"
            
                console.log(userInput)
                userImage.setAttribute('src', `image/left ${userInput}.png`)
            computerImage.setAttribute('src', `image/right ${computerSay}.png`)
            }
        else if(userInput == 'paper' && computerSay == 'scissors'){
            computerPoint = computerPoint + 1;
            computerDom.innerText=computerPoint

            userPlayd.innerText=`You played ${userInput}`
            ComputerPlayd.innerText=`Computer played ${computerSay}`
            resultArea.innerText="Computer Win"
            
                console.log(userInput)
                userImage.setAttribute('src', `image/left ${userInput}.png`)
            computerImage.setAttribute('src', `image/right ${computerSay}.png`)
            }
        else if(userInput == 'scissors' && computerSay == 'rock'){
            computerPoint = computerPoint + 1;
            computerDom.innerText=computerPoint

            userPlayd.innerText=`You played ${userInput}`
            ComputerPlayd.innerText=`Computer played ${computerSay}`
            resultArea.innerText="Computer Win"
            
                console.log(userInput)
                userImage.setAttribute('src', `image/left ${userInput}.png`)
            computerImage.setAttribute('src', `image/right ${computerSay}.png`)
            }
        else if(userInput == 'scissors' && computerSay == 'paper'){
            userPoint = userPoint + 1;
            userDom.innerText=userPoint

            userPlayd.innerText=`You played ${userInput}`
            ComputerPlayd.innerText=`Computer played ${computerSay}`
            resultArea.innerText="You win"
            
                console.log(userInput)
                userImage.setAttribute('src', `image/left ${userInput}.png`)
            computerImage.setAttribute('src', `image/right ${computerSay}.png`)
            }
            if(levelGot == userPoint){
                setTimeout(function (){
                    alert('Your are The winner')
                    location.reload();
                }, 1000);
    
            }
            else if(levelGot == computerPoint){
                setTimeout(function (){
                    alert('Computer Winner')
                    location.reload();
                }, 1000);
    
            }     

    }