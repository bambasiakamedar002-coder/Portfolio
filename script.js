let btnopen = document.getElementById("btn-menu");
let btnclose = document.querySelector(".close-bar");
function openbar(){
    document.getElementById("nav-barid").style.width = "100%";
    document.body.style.overflow="hidden";
}
function closebar(){
    document.getElementById("nav-barid").style.width = "0%"
    document.body.style.overflow="auto"
}

btnopen.addEventListener("click",()=>{
    openbar();
})

btnclose.addEventListener("click",()=>{
    closebar()
})