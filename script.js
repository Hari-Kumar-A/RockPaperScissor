//accessing html elements 
const choices=document.querySelectorAll('.img')
const score=document.getElementById('score')
const result=document.querySelector('.result')
const restart=document.getElementById('restart')
const overlay=document.querySelector('.overlay')

//scoreboard
const scoreboard={
    player:0,
    bot:0
}

//play Game
function play(e){
     
    const playerChoice=e.target.id;
    const botChoice=getBotChoice();

    const winner=getWinner(playerChoice,botChoice)

    restart.style.display='block'

    console.log(playerChoice, botChoice,winner)
    displayWinner(winner,botChoice)
    overlay.style.display='block'
}

//getBotChoice
function getBotChoice(){
    const rand=Math.random();
    if(rand<0.34){
        return 'rock'
    }
    else if(rand<=0.67){
        return 'paper'
    }
    else{
        return 'scissor'
    }
}

//getWinner
function getWinner(playerChoice, botChoice){
    let p=playerChoice;
    let b=botChoice;
    if(p===b){
        return 'draw'
    }

    else if(p=='rock') //player puts rock
    {
        if(b=='scissor'){
            return 'bot'
        }
        else{
            return 'player'
        }
    }

    else if(p=='scissor')// player puts scissor
    {
        if(b=='rock'){
            return 'bot'
        }
        else{
            return 'player'
        }
    }

    else if(p=='paper')// player puts paper
    {
        if(b=='scissor'){
            return 'bot'
        }
        else{
            return 'player'
        }
    }  
}

//display winner
function displayWinner(winner,botChoice){
if(winner==='player'){
    scoreboard.player++;
    result.innerHTML=
    `<h1 class="win">You Won</h1>
    <img src="${botChoice}.jpg" alt="rock" id="rock" class="img"> 
    <p>Bot Chose ${botChoice}</p>`
}
else if(winner==='bot'){
    scoreboard.bot++;
    result.innerHTML=
    `<h1 class="win">You lost</h1>
    <img src="${botChoice}.jpg" alt="rock" id="rock" class="img"> 
    <p>Bot Chose ${botChoice}</p>`
}
else{
    result.innerHTML=
    `<h1 class="win">It's Draw</h1>
    <img src="${botChoice}.jpg" alt="draw" id="rock" class="img"> 
    <p>Bot Chose ${botChoice}</p>`
}

//showing the score
score.innerHTML=
`<p>Player:${scoreboard.player}</p>
<p>Bot: ${scoreboard.bot}</p>`
}

//playAnother
function playAnother(e){
    if(e.target==overlay){
        overlay.style.display='none'
    }
}

//Events listeners
choices.forEach( choice=>{
    choice.addEventListener('click',play) 
})

window.addEventListener('click', playAnother)

