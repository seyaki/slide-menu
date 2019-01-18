function byId(id){
  return  typeof(id)==="string"?document.getElementById(id):id;
}
console.log(byId("main"));

var index = 0, 
timer=null,
pics = byId("banner").getElementsByTagName("div"),
dots=byId("dots").getElementsByTagName("span"),
prev=byId("prev"),
next=byId("next"),
len=pics.length;



function slideImg(){
  var main= byId("main");
  main.onmouseover =function(){
      if(timer){clearInterval(timer);}
  }
  main.onmouseout=function(){
      timer = setInterval(function() {
          index++;
          if(index>=len){
              index=0;
          }
          ChanneImg();
      }, 3000);
  }
  main.onmouseout();
  
  for(var d=0;d<len;d++){
      dots[d].id=d;
      dots[d].onclick=function(){
      index=this.id;
      this.className ="active";
      ChanneImg();
      }
  }
  //上一站图片
  prev.onclick=function(){
    index--;
    if(index<0) index=len-1;
    ChanneImg();
  }
  //下一张图片
next.onclick=function(){
    index++
    if(index>=len) index =0;
    ChanneImg();
 }
}
function ChanneImg(){
    for(var i=0;i<len;i++){
        pics[i].style.display="none";
        dots[i].className="";
    }
    pics[index].style.display="block";
    dots[index].className="active";

}
slideImg();