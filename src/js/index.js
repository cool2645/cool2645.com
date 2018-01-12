import "../scss/index.scss"

window.onscroll = function(){
    let speed = 10;
    document.getElementById("p1BlackBoard").style.top = (100-window.pageYOffset/speed) + "%";
    console.log(document.getElementById("p1BlackBoard").style.top );
    document.getElementById("p2BlackBoard").style.top = (100-(window.pageYOffset-1000)/speed) + "%";
    console.log(document.getElementById("p2BlackBoard").style.top );
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    if(scrollTop > 1000){
        $(".card1").css('left','20%');
        $(".card2").css('right','20%');
        $(".card1").css('width','55%');
        $(".card2").css('width','55%');
        $(".c2 .card h4,p,a").css('transition', 'opacity .5s ease 1s');
        $(".c2 .card h4,p,a").css('opacity', 100);
    }
}