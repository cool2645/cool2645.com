import render from './index-render'

function onIndexMobResize () {
    if (document.body.clientWidth >= 738)
        render();
};

export {onIndexMobResize}