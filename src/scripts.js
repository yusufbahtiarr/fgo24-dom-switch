const btn = document.querySelector('button');
const glass = document.querySelectorAll('.glass');
const text = document.querySelectorAll('.text');

// Versi 1
function moveWater(from, to, drink) {
  if (
    glass[from].classList.contains(drink) &&
    glass[to].classList.contains('empty')
  ) {
    glass[from].classList.remove(drink)
    glass[from].classList.add('empty')
    glass[to].classList.remove('empty')
    glass[to].classList.add(drink)
    text[from].textContent = "EMPTY"
    text[to].textContent = drink.toUpperCase()
    return true
  }
  return false
}

btn.addEventListener('click', function () {
  moveWater(0, 2, 'coffee') ||
  moveWater(1, 0, 'tea') ||
  moveWater(1, 0, 'coffee') ||
  moveWater(2, 1, 'coffee') ||
  moveWater(2, 1, 'tea') ||
  moveWater(0, 2, 'tea')
})

// Versi 2
const btnAll = document.querySelectorAll('.bttn')
const btnan1 = document.getElementById('btnn1')
const btnan2 = document.getElementById('btnn2')
const btnan3 = document.getElementById('btnn3')
function handleMoveWater(btn) {
  btnAll.forEach((g) => {
    if (g.classList.contains('empty')) {
      if (btn.classList.contains('tea')) {
        g.classList.remove('empty')
        g.classList.add('tea')
        g.textContent = "TEA"
        btn.classList.remove('tea')
        btn.classList.add('empty')
        btn.textContent = "EMPTY"
      } else if (btn.classList.contains('coffee')) {
        g.classList.remove('empty')
        g.classList.add('coffee')
        g.textContent = "COFFEE"
        btn.classList.remove('coffee')
        btn.classList.add('empty')
        btn.textContent = "EMPTY"
      }
      return
    }
  })
}

btnan1.addEventListener('click', () => handleMoveWater(btnan1))
btnan2.addEventListener('click', () => handleMoveWater(btnan2))
btnan3.addEventListener('click', () => handleMoveWater(btnan3))