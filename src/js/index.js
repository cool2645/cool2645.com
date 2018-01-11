import "../scss/index.scss"

window.onscroll = function(){
    let speed = 10;
    document.getElementById("p1BlackBoard").style.top = (100-window.pageYOffset/speed) + "%";
    console.log(document.getElementById("p1BlackBoard").style.top )
}