var popup=document.querySelector(".popup")
var signbtn=document.querySelector(".sign-btn");
var closebtn= document.querySelector(".close-btn")

signbtn.addEventListener("click",function(){
    document.body.style.overflow="hidden";
    popup.classList.remove("hidden");
});

closebtn.addEventListener("click",function(){
    document.body.style.overflow="auto";
    popup.classList.add("hidden")
})