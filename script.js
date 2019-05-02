let trans = document.getElementsByTagName('span')[0]
let titles = ['Web developer.', 'Graphic designer.', 'Web designer.']

let i = 0
function fadeIn() {
  trans.classList.add('hide')

  setTimeout(_ => { 
    trans.textContent = titles[i]
    i >= titles.length - 1 ? i = 0 : i++
  }, 500)

  setTimeout(_ => { 
    trans.classList.remove('hide')
  }, 500)
}

setInterval(fadeIn, 2000)