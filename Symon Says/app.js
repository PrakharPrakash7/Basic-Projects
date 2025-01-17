let gameSeq=[];
let cnt=0;
let game = false;
let banner = document.querySelector("h3");
let level = 0;
let btns = ["btn1","btn2","btn3","btn4"];
let btn = document.querySelectorAll(".btn");
let high = 0;
let ele = document.querySelector(".highscore");
function reset(){
   high =  Math.max(high,level);
   ele.innerHTML = ` <b>Your current High Score is : ${high}</b>`;
    banner.innerHTML=`<b>Game Over Please press any key to try again , Your Score : ${level}</b>`;
    gameSeq=[];cnt=0;level=0;game=false;
}
function flash3(currBtn){
    
    
    
    let btnClass = currBtn;
    btnClass.classList.add("flash2");
    setTimeout(()=>{
        btnClass.classList.remove("flash2");
    }, 200);
   
}
function flash4(currBtn){
    
    
    
    let btnClass = currBtn;
    btnClass.classList.add("flash3");
    setTimeout(()=>{
        btnClass.classList.remove("flash3");
    }, 200);
   
}
function flash(){
    
    let indx = Math.floor(Math.random() * 4);
    let btnString = btns[indx];
    gameSeq.push(btnString);

    btnClass = document.querySelector(`.${btnString}`);
    btnClass.classList.add("flash");
    setTimeout(()=>{
        btnClass.classList.remove("flash");
    }, 350);
   
}
function flash2(){
    
  let currBtn = this;

 
  if(cnt==level-1){
  
        if(currBtn.getAttribute("id")==gameSeq[cnt])
        {  flash3(currBtn);
            setTimeout(next,700);
            }
        else{
            flash4(currBtn);
            reset();
           
        }
  }
  else
  {
  if(currBtn.getAttribute("id")!=gameSeq[cnt])
  {
    flash4(currBtn);
    reset();
 
  }
  else
 {   flash3(currBtn);
     cnt++;}
   }
   
}
function next(){
    
    
    level++; cnt=0;
    banner.innerHTML=`<b>Current Level : ${level}</b>`;
    flash();
    console.log(gameSeq);
}
function start(){
    if(game==0)
    {
        game=1;
        next();
    }
}
document.addEventListener("keypress",start);

for(buns of btn){
    buns.addEventListener("click",flash2);
    
   }



