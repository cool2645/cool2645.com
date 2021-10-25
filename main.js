import './style.css'
import('./mask.css')

export function sendLike (e) {
  e.preventDefault()
  const root = document.querySelector('.root')
  root.classList.remove('default-theme')
  root.classList.add('affection-theme')
}

document.querySelector('#like').addEventListener('click', sendLike)
