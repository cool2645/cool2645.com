import React from 'react';
import ReactDOM from 'react-dom';
import IndexPC from './index-pc'
import IndexMob from './index-mob'
import {onPCIndexResize, onPCIndexScroll, onPCIndexMouseMove} from './index-pc-anime'
import {onIndexMobResize} from "./index-mob-anime"
import Swiper from 'swiper'

let renderPage = function () {
    if (!(document.body.clientWidth < 738 || document.body.clientHeight > document.body.clientWidth)) {
        require('../scss/index-pc.scss');
        window.onscroll = onPCIndexScroll;
        window.onresize = window.onload = onPCIndexResize;
        document.onmousemove = onPCIndexMouseMove;
        ReactDOM.render(
            <IndexPC/>,
            document.getElementById('root')
        );
    } else {
        require('swiper/dist/css/swiper.min.css');
        require('../scss/index-mob.scss');
        window.onresize = window.onload = onIndexMobResize;
        window.onscroll = null;
        document.onmousemove = null;
        ReactDOM.render(
            <IndexMob/>,
            document.getElementById('root')
        );
    }
};

export default renderPage