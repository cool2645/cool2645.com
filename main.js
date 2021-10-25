import './style.css'

export function sendLike (e) {
  e.preventDefault()
  const root = document.querySelector('.root')
  root.classList.remove('default-theme')
  root.classList.add('affection-theme')
  const like = document.querySelector('#like')
  like.innerHTML = '#感谢喜欢'
}

document.querySelector('#like').addEventListener('click', sendLike)
