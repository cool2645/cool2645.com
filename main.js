import './style.css'
import('./mask.css')

export function sendLike (e) {
  e.preventDefault()
  const root = document.querySelector('.root')
  root.classList.remove('default-theme')
  root.classList.add('affection-theme')
}

document.querySelector('#like').addEventListener('click', sendLike)
document.addEventListener('mousemove', (e) => {
  const maxVibration = 10
  const maxRotation = 90
  const rateX = maxVibration / document.documentElement.offsetWidth
  const rateY = maxVibration / document.documentElement.offsetHeight
  const diagonal = Math.sqrt(document.documentElement.offsetWidth ** 2 +
    document.documentElement.offsetHeight ** 2)
  const rateD = maxRotation / diagonal
  const baseX = document.documentElement.offsetWidth / 2
  const baseY = document.documentElement.offsetHeight / 2
  const dX = (e.screenX - baseX) / baseX * baseY, dY = (e.screenY - baseY)
  const d = Math.sqrt(dX ** 2 + dY ** 2)
  const nX = dX / d, nY = dY / d
  const tX = dX * rateX, tY = dY * rateY, tD = d * rateD
  const title = document.querySelector('.title')
  title.style.transform = `translate(${tX}px, ${tY}px)`
  const banner = document.querySelector('.banner')
  banner.style.transform = `rotate3d(${-nY}, ${nX}, 0, ${-tD}deg)`
})
