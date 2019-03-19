var numsquare=6;
var colors=generate(6);
var square =document.querySelectorAll(".square");
var answer=pickcolor();
var message=document.querySelector("#message");
var ans=document.querySelector("#answer");
var easyBtn=document.querySelector("#easy");
var hardBtn=document.querySelector("#hard");
ans.innerHTML=answer;
var resetbtn=document.querySelector("#reset");
resetbtn.addEventListener("click",function(){
  
message.textContent="";
  colors=generate(6);
  answer=pickcolor();
  document.querySelector(".jumbotron").style.backgroundColor="coral";
ans.innerHTML=answer;
for (index = 0; index < colors.length; index++){
    
  square[index].style.backgroundColor=colors[index];
}
  


});
easyBtn.addEventListener("click", function() {
    numsquare = 3;
  colors = generate(numsquare);
  answer= pickcolor();
  ans.textContent = answer;
  for(var i = 0; i < square.length; i++) {
    if(colors[i]) {
      square[i].style.background = colors[i];
    } else {
      square[i].style.display = "none";
    }
  }
});
hardBtn.addEventListener("click", function() {

  numsquare = 6;
  colors = generate(numsquare);
  answer = pickcolor();
 ans.textContent = answer;
  for(var i = 0; i < square.length; i++) {
    square[i].style.background = colors[i];
    square[i].style.display = "block";
  }
});
for (index = 0; index < colors.length; index++) {
    
    square[index].style.backgroundColor=colors[index];    
    square[index].addEventListener("click",function(){
                 var clickedcolor=this.style.backgroundColor;
                 if(clickedcolor===answer){
                   chngcolor(clickedcolor);
                   message.textContent="correct";

                  resetbtn.textContent="play again?";
                  document.querySelector(".jumbotron").style.backgroundColor=answer;
                  
                 }  
                   else{
                     message.textContent="try again";
                     
                      this.style.backgroundColor="#232323";}
                console.log(clickedcolor,answer);          });



}
function chngcolor(color){
    for (i = 0; i < colors.length; i++)
    square[i].style.backgroundColor=color

}
function pickcolor(){

var random=Math.floor(Math.random()*colors.length);
return colors[random];

}
function generate(num){
var r=[];
for(i=0;i<num;i++){
r.push(randomcolors());


}
return r;
}
function randomcolors(){
var red=Math.floor(Math.random()*256);
var green=Math.floor(Math.random()*256);
var blue=Math.floor(Math.random()*256);
return "rgb(" + red + ", " + green + ", " + blue + ")";

}


