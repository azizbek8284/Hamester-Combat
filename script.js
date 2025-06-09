let i = 1
function tornado(){
    let counter = document.querySelector(".counter")
    i++
    counter.innerHTML = i 
    let coin = document.querySelector(".coin > img")
    
    setTimeout(() => {
    coin.style.filter = "drop-shadow(0px, 0px, 0px, black)"; 
}, 200); 

if (i > 50) {
 document.querySelector("img").src = "rasm2.png";
}
if(i > 150){
    document.querySelector("img").src = "rasm3.png";
}
if(i > 300){
    document.querySelector("img").src = "rasm4.png";

}
}
