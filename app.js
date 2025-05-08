let gameSeq = [];
let userSeq= [];
let buttons= ['yellow','red','sky','blue']; 

let level=0;
let h2 = document.querySelector('h2');

let gameStarted=false;

document.addEventListener('keydown',()=>{
    if(gameStarted == false){
        gameStarted = true;
        uplevel();
    }
})

function blinkBtn(){
    let randIndex = Math.floor(Math.random()*3);
    let randcolor = buttons[randIndex];

    let btn = document.querySelector(`.${randcolor}`);
    btn.classList.add('flash');
    setTimeout(()=>{
        btn.classList.remove('flash');
    },250);

    gameSeq.push(randcolor);
}

function uplevel(){
    level++;
    h2.innerText=`Level ${level}`;
    blinkBtn();
}

function checkAns(){
    if(gameSeq[userSeq.length-1] === userSeq[userSeq.length-1]){
        if(gameSeq.length == userSeq.length){
            uplevel();
            userSeq=[];
        }
    }
    else{
        h2.innerText = `Game Over! Your Score is ${level}`;
        gameReset();
    }
}

function btnPress(){
    userSeq.push(this.id);
    checkAns();
}

let allbtns = document.querySelectorAll('.btn');
for(let i=0;i<allbtns.length;i++){
    allbtns[i].addEventListener('click',btnPress)
}

function gameReset(){
    gameSeq = [];
    userSeq = [];
    level=0;
    gameStarted = false;
    setTimeout(()=>{
        h2.innerText = "Press any key to start";
    },2000);
    
}
