'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent="correct numebr";
//document.querySelector('.number').textContent=13;
// document.querySelector('.score').textContent=20;
//document.querySelector('.guess').value=23;
//document.querySelector('.number').textContent=Secretnumber;
let Secretnumber= Math.trunc(Math.random()*20+1);
let score= 20;
let highscore=0;

const displayMessage = function(message){
    document.querySelector('.message').textContent=message;
}
document.querySelector('.check').addEventListener('click', function(){
    const guess= Number(document.querySelector('.guess').value);
    console.log(guess,typeof guess);
    if(!guess){
        displayMessage('No number');
    }
    else if(guess === Secretnumber){
        displayMessage('✅correct number');
        document.querySelector('.score').textContent=score;
        document.querySelector('body').style.backgroundColor='#60b347';
        document.querySelector('.number').style.width = '30rem';
        if(score>highscore){
            highscore = score;
            document.querySelector('.highscore').textContent=highscore;
        }
    }
    else if(guess !== Secretnumber){
        if(score >1 ){
            //document.querySelector('.message').textContent= guess > Secretnumber?'📈too high':'📉too low';
            displayMessage(guess > Secretnumber?'📈too high':'📉too low');
            score--;
            document.querySelector('.score').textContent=  score;
            
            }else{
                displayMessage('you lost the game');
                document.querySelector('.score').textContent=0;
            }
    }
    // else if(guess> Secretnumber){
    //     if(score >1 ){
    //     document.querySelector('.message').textContent='📈too high';
    //     score--;
    //     document.querySelector('.score').textContent=  score;
        
    //     }else{
    //         document.querySelector('.message').textContent='you lost the game';
    //         document.querySelector('.score').textContent=0;
    //     }
        
    // }
    // else if(guess< Secretnumber){
    //     if(score >1 ){
    //         document.querySelector('.message').textContent='📉too low';
    //         score--;
    //         document.querySelector('.score').textContent=  score;
            
    //         }else{
    //             document.querySelector('.message').textContent='you lost the game';
    //             document.querySelector('.score').textContent=0;
    //         }
    // }
    // else{
        
    // }


});
document.querySelector('.again').addEventListener('click',function(){
score= 20;
Secretnumber= Math.trunc(Math.random()*20+1);
displayMessage('Start guessing.....');
document.querySelector('.score').textContent=score;
document.querySelector('.number').textContent='?';
document.querySelector('.guess').value='';
document.querySelector('body').style.backgroundColor='#222';
document.querySelector('.number').style.width = '15rem';

});