

document.getElementById("start").addEventListener("click",function(){

alert("clock started");

setInterval(function(){
    let todayTime=new Date();
    todayTime=todayTime.toLocaleTimeString();
   
    document.getElementById("display").innerHTML=todayTime
},1000)  

})


