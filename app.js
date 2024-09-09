let gamesequence=[];
let usersequence=[];
let started=false;
let level=0;
let btns=["red","yellow","green","blue"];
let h2=document.querySelector("h2");
let box = document.getElementsByClassName("box");
let body=document.querySelector("body");
body.addEventListener("click",function(){
    if(started == false){
        started=true;
        levelup();
    }
});
function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
         btn.classList.remove("flash");
     },250);
}

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
         btn.classList.remove("userFlash");
     },250);
}


function  levelup(){
    usersequence=[]; //it used to reset the user sequence
    level++;
    h2.innerText=`level ${level}`;
    let randIdx=Math.floor(Math.random()*3);
    let randColor=btns[randIdx];
    let randBtn=document.querySelector(`.${randColor}`);
    btnFlash(randBtn);
    gamesequence.push(randColor);
    console.log(gamesequence);
};

function ansCheck(idx){
    if(usersequence[idx]===gamesequence[idx]){//checking user i/p color and game i/p color
        if(usersequence.length==gamesequence.length){//checking the length
            setTimeout(levelup,1000);
        }

    }else{
        h2.innerHTML=`Game Over! Your score is <b> ${level}</b> <br> Click anywhere to restart the game.`;
        setTimeout(reset,200);
    }
}
function btnPress(){ 
    let btn=this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    usersequence.push(userColor);
    ansCheck(usersequence.length-1);
}
let allbtns=document.querySelectorAll(".box");
for(btn of allbtns){
    btn.addEventListener("click",btnPress);
}
function reset(){
    started=false;
    usersequence=[];
    gamesequence=[];
    level=0;
}