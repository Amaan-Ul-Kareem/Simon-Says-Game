let gameSeq=[];
let userSeq=[];
let level=0;
let started=false;
let highestscore=0;
let h2=document.querySelector('h2');
let btns=["red","yellow","orange","green"];
document.addEventListener('keypress',function(){
    if(started==false){
        console.log("Game Started");
        started=true;
        levelUp();
    }
});
function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");},250);
};

function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;
    let randidx=Math.floor(Math.random()*3);
    let randcolor=btns[randidx];
    let randbtn=document.querySelector(`.${randcolor}`)
    gameSeq.push(randcolor);
    console.log(gameSeq);
    btnflash(randbtn);
};
function checkAns(idx){
    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }else{
        highestscore=Math.max(highestscore,level-1);
        h2.innerHTML=`Game Over! Your score was <b>${level-1}</b><br>Press any Key To Start<br>Highest Score is ${highestscore}`;
        let body=document.querySelector('body');
        body.classList.add('redflash');
        setTimeout(() => {
            body.classList.remove('redflash');
        }, 300);
             
        reset();
    }
}
function btnpress(){
    let btn=this;
    btnflash(btn);
    userColor=btn.getAttribute('id');
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}
let allbtn=document.querySelectorAll(".btn");
for(btn of allbtn){
    btn.addEventListener("click",btnpress);
}
function reset(){
    started=false;
    userSeq=[];
    gameSeq=[];
    level=0;
}

