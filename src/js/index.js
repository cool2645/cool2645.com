import "../scss/index.scss"

window.onscroll = function(){
    let speed = 10;
    document.getElementById("p1BlackBoard").style.top = (100-window.pageYOffset/speed) + "%";
    console.log(document.getElementById("p1BlackBoard").style.top );
    document.getElementById("p2BlackBoard").style.top = (100-(window.pageYOffset-1000)/speed) + "%";
    console.log(document.getElementById("p2BlackBoard").style.top );
    document.getElementById("p3BlackBoard").style.top = (100-(window.pageYOffset-2000)/speed) + "%";
    console.log(document.getElementById("p2BlackBoard").style.top );
    document.getElementById("p4BlackBoard").style.top = (100-(window.pageYOffset-3000)/speed) + "%";
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
};

let x = 250;
let m = 20;
let n = 7;
let k;
let w = (n * x + m * (n - 1));
let rate = w / (document.body.clientWidth * 0.8) - 1;

window.onresize = window.onload = function () {
    if(document.body.clientWidth * 0.8 > (n * x + m * (n - 1)))
        $(".ov").css('margin-left', (document.body.clientWidth * 0.8 - w) / 2);
    else
        $(".ov").css('margin-left',  0);
    rate = w / (document.body.clientWidth * 0.8) - 1;
    window.arrangeCards(".c3");
    window.arrangeCards(".c4");
};

document.onmousemove = function (e) {
    e = e || window.event;
    if(document.body.clientWidth * 0.8 > (n * x + m * (n - 1)))
        $(".ov").css('margin-left', (document.body.clientWidth * 0.8 - w) / 2);
    else if (e.pageX) {
        $(".ov").css('margin-left',  (document.body.clientWidth * 0.1 - e.pageX) * rate);
        window.arrangeCards(".c3");
        window.arrangeCards(".c4");
    }
};

window.arrangeCards = function (c) {
    let W = $(c + " .card").eq(0).parent().width();
    if (W > x * n + m * (n - 1))
         k = n;
    else
         k = Math.floor((W - 2 * x + m)/(x + m));
    let lambda = (W - k * (x + m) - x) / (x * (1 - Math.pow(0.5, n - k - 1)));
    for (let i = 0; i < k; ++i) {
        $(c + " .card").eq(i).css('z-index', 10 + n - i);
        $(c + " .card").eq(i).css('left', ((x + m) * i).toString() + 'px')
    }
    for (let i = k; i < n; ++i) {
        $(c + " .card").eq(i).css('z-index', 10 + n - i);
        $(c + " .card").eq(i).css('left', ((x + m) * k + (
            x * lambda * (1 - Math.pow(0.5, i - k)) < (x + m) * (i - k) ?
                x * lambda * (1 - Math.pow(0.5, i - k)) : (x + m) * (i - k)
        )).toString() + 'px')
    }
}