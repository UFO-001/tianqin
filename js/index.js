const move = document.querySelector('.move')
const lis = document.querySelectorAll('.nav-r ul li')

const ul = document.querySelector('.slider ul')

const dots = document.querySelectorAll('.dot-nav .dot')

const slider = document.querySelector('.slider')

const prev = document.querySelector('.prev')
const next = document.querySelector('.next')

function setLeft() {
  move.style.left = this.offsetLeft + 'px'
}

for (let i = 0; i < lis.length; i++) {
  lis[i].addEventListener('mouseenter', setLeft)
  lis[i].addEventListener('click', function () {
    for (let i = 0; i < lis.length; i++) {
      lis[i].removeEventListener('mouseenter', setLeft)
    }

    move.style.left = this.offsetLeft + 'px'
  })
}

let arr = [0, -570, -1140, -1710, -2280]
let index = 0
function timer() {
  if (arr[index] <= -2280) {
    index = 0
  }
  for (let i = 0; i < arr.length - 1; i++) {
    dots[i].classList.remove('selected')
  }
  ul.style.marginLeft = arr[index] + 'px'
  dots[index].classList.add('selected')
  index++
}
let swp = setInterval(timer, 2000)

slider.addEventListener('mouseenter', () => {
  clearInterval(swp)
})
slider.addEventListener('mouseleave', () => {
  swp = setInterval(timer, 2000)
})

for (let i = 0; i < dots.length; i++) {
  dots[i].addEventListener('click', function () {
    index = this.dataset.dot
    fun1(this.dataset.dot)
  })
}

function fun1(e) {
  ul.style.marginLeft = arr[e] + 'px'
  for (let i = 0; i < arr.length - 1; i++) {
    dots[i].classList.remove('selected')
  }
  dots[e].classList.add('selected')
}

prev.addEventListener('click', function () {
  const selected = document.querySelector('.selected')
  let num = selected.dataset.dot - 1 < 0 ? 3 : selected.dataset.dot - 1
  fun1(num)
})

next.addEventListener('click', function () {
  const selected = document.querySelector('.selected')
  let num = Number(selected.dataset.dot) + 1 > 3 ? 0 : Number(selected.dataset.dot) + 1
  fun1(num)
})
