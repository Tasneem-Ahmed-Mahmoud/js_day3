let flying;
document.getElementById("btn").addEventListener("click",function(){

    flying=window.open("http://everylastdrop.co.uk/","","_blank");

})


document.getElementById("btn1").addEventListener("click",function(){

    flying.close("http://everylastdrop.co.uk/");
    
})