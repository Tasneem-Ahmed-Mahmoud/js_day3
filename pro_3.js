
////////////////////////////3333333/////////////////////

let advertising;

function closeWindow(windoww){
windoww.close("")
}






function openWinsow() {
    
    let str="Lorem"
    setTimeout(function(){
        advertising=open("","","_blank");

         },3000)
var i=0;

setTimeout(function(){
   
      let id= setInterval(function(){
            advertising.document.write(`${str[i]}`)
            i++;
            if(i >str.length-1)  {


              clearInterval(id) 

            }
        },1000)
        
        advertising.document.write(" <button id='bt'> close window</button><br>");
        advertising.document.getElementById("bt").addEventListener("click",function(){
            closeWindow(advertising);
        }) 

},4000)



}



// advertising.document.write("<br> <button id='bt'> close window</button>");
// advertising.document.getElementById("bt").addEventListener("click",function(){
//     closeWindow(advertising);
// })