  function ageindays(){
var birthyear=prompt('what year were u born... good friend?');
var ageindayss = (2022-birthyear)*365;
var h1 = document.createElement('h1');
var textAnswer =document.createTextNode('you are '+ageindayss+' days old!' );
h1.setAttribute('id','ageindays');
h1.appendChild(textAnswer);
document.getElementById('flex-box-result').appendChild(h1);
}
function reset(){
    document.getElementById('ageindays').remove();
}
function generatecat(){
    var image=document.createElement('img');
    var div=document.getElementById('flex-cat-gen');
    image.src="data:image/jpeg;base64,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";
    div.appendChild(image);
}  
//challenge 3:rock paper scissors
function rpsgame(yourchoice){
    var humanchoice,botchoice;
    humanchoice=yourchoice.id;
    botchoice=numbertochoice(randtorpsint());
    console.log(botchoice);
    results=decidewinner(humanchoice,botchoice);
    message=finalmessage(results);
    console.log(results);
    console.log(message);
    rpsfrontend(yourchoice.id,botchoice,message)
}
function randtorpsint(){
    return Math.floor( Math.random()*3);
}
function numbertochoice(number){
    return['rock','paper','scissors'][number];
}
function decidewinner(yourchoice,botchoice){
    var rpsDatabase={
    'rock':{'rock':0.5,'scissors':1,'paper':0},
    'paper':{'rock':1,'scissors':0,'paper':0.5},
    'scissors':{'rock':0,'scissors':0.5,'paper':1},};
    var yourscore=rpsDatabase[yourchoice][botchoice];
    return yourscore;
}
function finalmessage(yourscore){
    if (yourscore===0){
        return {'message':'you lose!','color':'red'}}
    else if(yourscore===0.5){
        return{ 'message':'you tied!','color':'yellow'}}
    else{
        return{ 'message':'you won','color':'blue'}}
}
function rpsfrontend(humanimagechoice,botimagechoice,finalmessage){
    var imagesdatebase = {
        'rock':document.getElementById('rock').src,
        'paper':document.getElementById('paper').src,
        'scissors':document.getElementById('scissors').src
    }
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();
    var humandiv =document.createElement('div');
    var botdiv =document.createElement('div');
    var messagediv =document.createElement('div');
    humandiv.innerHTML="<img src='" + imagesdatebase[humanimagechoice]+"'height=150 width=150 style='box-shadow:0px 10px 50px rgba(37,50,233,1);'>"
    messagediv.innerHTML="<h1 style='color:"+ finalmessage['color']+";font-size:60px;padding:30px;'>"+finalmessage['message']+"</h1>"
    botdiv.innerHTML="<img src='" + imagesdatebase[botimagechoice]+"'height=150 width=150 style='box-shadow:0px 10px 50px rgba(244,30,30,1);'>"
    document.getElementById('flex-box-rps-div').appendChild(humandiv);
    document.getElementById('flex-box-rps-div').appendChild(messagediv);
    document.getElementById('flex-box-rps-div').appendChild(botdiv);
}
//Challenge 4:change color of all buttons:
var all_buttons = document.getElementsByTagName('button');

var copyallbuttons = [];
for (i=0;i<all_buttons.length;i++){
    copyallbuttons.push(all_buttons[i]);
}
console.log(copyallbuttons);
function buttoncolorchange(buttonthingy){
    if(buttonthingy.value==='red'){
        buttonsred();
    }
    else if(buttonthingy.value==='green'){
        buttonsgreen();
    }
    else if(buttonthingy.value==='reset'){
        buttonscolorreset();
    }
    else if(buttonthingy.value==='random'){
        buttonsrandom();
    }
}
function buttonsred(){
    for(i=0;i<all_buttons.length;i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-danger');
    }
}
function buttonsgreen(){
    for(i=0;i<all_buttons.length;i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-success');
    }

}
function buttonscolorreset(){
    for(let i=0;i<all_buttons.length;i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(copyallbuttons[i]);
    }

}
function buttonsrandom(){
    let options=["btn-primary","btn-danger","btn-warning","btn-success"]
    for(i=0;i<all_buttons.length;i++){
        let randomnumbre4=Math.floor(Math.random() * 4);
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(options[randomnumbre4]);
    }

}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////challenge 5:blackjack:
let blackjackgame={
'you': {'scorespan': '#your-blackjack-result','div':'#your-box','score':0},
'dealer': {'scorespan': '#dealer-blackjack-result','div':'#dealer-box','score':0},
'cards':['2','3','4','5','6','7','8','9','10','K','Q','J','A'],
'cardsmap':{'2':2,'3':3,'4':4,'5':5,'6':6,'7':7,'8':8,'9':9,'10':10,'K':10,'Q':10,'J':10,'A':[1,11]},
'wins':0,
'losses':0,
'drows':0,
'isstand':false,
'round_over':false,
};
const YOU=blackjackgame['you']
const DEALER=blackjackgame['dealer']
const hitsound = new Audio('sounds/swish.m4a')
const winsound = new Audio('sounds/cash.mp3')
const losesound = new Audio('sounds/aww.mp3')

document.querySelector('#blackjack-hit-button').addEventListener('click',blackjackhit);
document.querySelector('#blackjack-deal-button').addEventListener('click',blackjackdeal);
document.querySelector('#blackjack-stand-button').addEventListener('click',blackjackstand);
function showcard(card,activeplayer){
    if(activeplayer['score']<=21){
        let cardimage=document.createElement('img');
        cardimage.src=`images/${card}.png `;
        document.querySelector(activeplayer['div']).appendChild(cardimage);
        hitsound.play();}
        
}
function blackjackhit (){
    if (blackjackgame['isstand']===false){
        let card=randomcard();
        showcard(card,YOU);
        updatescore(card,YOU);
        showScore(YOU);
    }
}
function randomcard(){
    let randomindex=Math.floor(Math.random()*13);
    return blackjackgame['cards'][randomindex];
}
function blackjackdeal(){
    if (blackjackgame['round_over']===true){
        blackjackgame['isstand']=false;
        let yourimages=document.querySelector('#your-box').querySelectorAll('img');
        let dealerimages=document.querySelector('#dealer-box').querySelectorAll('img');
        for (i=0;i<yourimages.length;i++){
            yourimages[i].remove();
        }
        for (i=0;i<dealerimages.length;i++){
            dealerimages[i].remove();
        }
        YOU['score']=0;
        DEALER['score']=0;
        document.querySelector('#your-blackjack-result').textContent=0;
        document.querySelector('#dealer-blackjack-result').textContent=0;
        document.querySelector('#your-blackjack-result').style.color='#fff';
        document.querySelector('#dealer-blackjack-result').style.color='#fff';

        document.querySelector('#blackjack-result').textContent="let's play";
        document.querySelector('#blackjack-result').style.color='black';
        blackjackgame['round_over']=false;
    }
}
function updatescore(card,activeplayer){
    if (card==='A'){
        if (activeplayer['score']+blackjackgame['cardsmap'][card][1]>21){activeplayer['score']+=blackjackgame['cardsmap'][card][0];

        }
        else{activeplayer['score']+=blackjackgame['cardsmap'][card][1];

        }
    }else{activeplayer['score']+=blackjackgame['cardsmap'][card];
}

}
function showScore(activeplayer){
    
    if(activeplayer['score']>21) {
        document.querySelector(activeplayer['scorespan']).textContent='Bust!';
        document.querySelector(activeplayer['scorespan']).style.color='red';
    }
    else{
    document.querySelector(activeplayer['scorespan']).textContent = activeplayer['score'];
}}
function sleep(ms){
    return new Promise(resolve => setTimeout(resolve,ms));
}
async function blackjackstand(){
    blackjackgame['isstand']=true;
    while(DEALER['score']<17 && blackjackgame['isstand']===true){
        let card=randomcard();
        showcard(card,DEALER);
        updatescore(card,DEALER);
        showScore(DEALER);
        await sleep(1000);
    }
    
    blackjackgame['round_over']=true;
    showresult(computewinner());
    
    
}
function computewinner(){
    let winner;
    if (YOU['score']<=21){
        if(YOU['score']>DEALER['score'] || DEALER['score']>21){
            winner=YOU;
            blackjackgame['wins']++;
        }else if(YOU['score']<DEALER['score']){
            winner=DEALER;
            blackjackgame['losses']++;
        }else if (YOU['score']=DEALER['score']){
            winner=DROW;
            blackjackgame['drows']++;
        }
    }else if(YOU['score']>21 && DEALER['score']<=21){
        winner=DEALER;
        blackjackgame['losses']++;
    }else if(YOU['score']>21 && DEALER['score']>21){
        blackjackgame['drows']++;
    }
    console.log(winner);
    console.log(blackjackgame['drows']);
    return winner;
}
function showresult(winner){
let message,messagecolor;
    if (winner===YOU){
        document.querySelector('#wins').textContent=blackjackgame['wins'];
        message='u won !';
        messagecolor='green';
        winsound.play();
    }
    else if(winner===DEALER){
        document.querySelector('#losses').textContent=blackjackgame['losses'];
        message='u lose idiot !';
        messagecolor='red';
        losesound.play();
    }
    else{
        document.querySelector('#drows').textContent=blackjackgame['drows'];
        message='drow ';
        messagecolor='yellow';
    }
    document.querySelector('#blackjack-result').textContent= message;
    document.querySelector('#blackjack-result').style.color=messagecolor;

}