var checkbox = document.getElementById("checkbox");
var box = document.getElementById("send_email");
var seedbox = document.getElementById("seedbox");

 checkbox.addEventListener("click", function(){
     if(checkbox.checked){
        box.disabled = false;
     }else{
         box.disabled = true;
     }
   
});
