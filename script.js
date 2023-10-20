var friend=document.getElementById("add") 
var removeFriend=document.getElementById("remove") 


friend.addEventListener("click",function(){
    var text=document.querySelector("h5")
    text.innerHTML="Friend"
    text.style.color="green"
})

removeFriend.addEventListener("click",function(){
    var text=document.querySelector("h5")
    text.innerHTML="Stranger"
    text.style.color="red"
})