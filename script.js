'use strict';

let secret=secretNumber();

let score=20;
let highscore=0;
selectEl('.score').textContent=score;
selectEl('.highscore').textContent=highscore;

document.querySelector('.check').addEventListener('click',()=>{

    let message;
    const guessNumber=Number(document.querySelector('.guess').value);

    if(score<=0)
    {
    selectEl('.message').textContent='You Lost The Game! 🚩';
    }
    if(score>0){
    if(!guessNumber){
        setMessage('No Number! ⛔');
        return;
    }else if(guessNumber===secret){
        message='Correct Number! 🎉';
        selectEl('body').style.backgroundColor='green';
        selectEl('.number').style.width='25rem';
        selectEl('.number').textContent=secret;

        if(score>highscore)  highscore=score;
    }else{
        message=guessNumber>secret?'Too High! 📈':'Too Low! 📉';
         score--;
    }

    }

    setMessage(message);
    selectEl('.score').textContent=score;
    selectEl('.highscore').textContent=highscore;
});

selectEl('.again').addEventListener('click',function (){
score=20;
secret=secretNumber();
selectEl('.score').textContent=score;
selectEl('.guess').value='';

selectEl('body').style.backgroundColor='#222';
        selectEl('.number').style.width='15rem';
        selectEl('.number').textContent='?';
})

function setMessage(msg)
{
selectEl('.message').textContent=msg;
}

function secretNumber()
{
return Math.trunc(Math.random()*20)+1
}

function selectEl(el)
{
return document.querySelector(el);
}