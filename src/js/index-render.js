import {onPCIndexResize, onPCIndexScroll, onPCIndexMouseMove} from './index-pc-anime'
import {onIndexMobResize} from "./index-mob-anime"
import {setCookie,getCookie} from "./common"
import Swiper from 'swiper'

let renderPage = function () {
    if (!(document.body.clientWidth < 738 || document.body.clientHeight > document.body.clientWidth)) {
        window.onscroll = onPCIndexScroll;
        window.onresize = window.onload = onPCIndexResize;
        document.onmousemove = onPCIndexMouseMove;
        $.ajax({
            type: "GET",
            url: "/like.php",
            success: function (msg) {
                let dataObj = eval("(" + msg + ")");
                if (dataObj.code == 200) {
                    $(".visited").text(dataObj.data.visit);
                    $(".pc-like-num").text(dataObj.data.like);
                    $(".mob-like-num").text(dataObj.data.like);
                }
            },
        });
    } else {
        window.onresize = window.onload = onIndexMobResize;
        window.onscroll = null;
        document.onmousemove = null;
        $.ajax({
            type: "GET",
            url: "/like.php",
            success: function (msg) {
                let dataObj = eval("(" + msg + ")");
                if (dataObj.code == 200) {
                    $(".pc-like-num").text(dataObj.data.like);
                    $(".mob-like-num").text(dataObj.data.like);
                }
            },
        });
        new Swiper('.swiper-container', {
            loop: false,
            pagination: {
                el: '.swiper-pagination',
            },
            preventClicksPropagation: false
        });
    }
    $(".like").click(function () {
        if (getCookie('like')) {
            $(".pc-text").html("你的鼓励我们已经收到啦！");
            $(".mob-text").html("谢谢你的鼓励！");
            $(".c5.cover").addClass('white');
        }
        else
            $.ajax({
                type: "POST",
                data: "",
                url: "/like.php",
                success: function (msg) {
                    let dataObj = eval("(" + msg + ")");
                    if (dataObj.code == 200) {
                        if (dataObj.result) {
                            $(".pc-text").html("谢谢你的鼓励，我们会做的更好！");
                            $(".mob-text").html("谢谢你的鼓励！");
                            $(".c5.cover,.c8.cover").addClass('white');
                            $(".pc-like-num").html(parseInt($(".pc-like-num").html()) + 1);
                            $(".mob-like-num").html(parseInt($(".mob-like-num").html()) + 1);
                            setCookie('like', 1);
                        } else {
                            $(".pc-text").html("你的鼓励我们已经收到啦！");
                            $(".mob-text").html("谢谢你的鼓励！");
                            $(".c5.cover,.c8.cover").addClass('white');
                            setCookie('like', 1);
                        }
                    }
                },
            });
    });
};

export default renderPage