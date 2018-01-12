import render from './index-render'

function onIndexMobResize () {
    if (!(document.body.clientWidth < 738 || document.body.clientHeight > document.body.clientWidth))
        render();
}

export {onIndexMobResize}