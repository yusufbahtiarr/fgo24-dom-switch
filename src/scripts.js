const btn = document.querySelector('button');
const glass = document.querySelectorAll('.glass');
const text = document.querySelectorAll('.text');

// Versi 1
btn.addEventListener('click', function(){
  if(glass[0].classList.contains('coffee') && glass[2].classList.contains('empty')){
    glass[0].classList.remove('coffee')
    glass[2].classList.remove('empty')
    glass[0].classList.add('empty')
    glass[2].classList.add('coffee')
    text[0].textContent = "EMPTY"
    text[2].textContent = "COFFEE"
  } else if (glass[0].classList.contains('empty') && glass[1].classList.contains('tea')){
    glass[0].classList.remove('empty')
    glass[1].classList.remove('tea')
    glass[1].classList.add('empty')
    glass[0].classList.add('tea')
    text[0].textContent = "TEA"
    text[1].textContent = "EMPTY"
  } else if (glass[0].classList.contains('empty') && glass[1].classList.contains('coffee')){
    glass[0].classList.remove('empty')
    glass[1].classList.remove('coffee')
    glass[1].classList.add('empty')
    glass[0].classList.add('coffee')
    text[0].textContent = "COFFEE"
    text[1].textContent = "EMPTY"
  }  else if (glass[1].classList.contains('empty') && glass[2].classList.contains('coffee')){
    glass[1].classList.remove('empty')
    glass[2].classList.remove('coffee')
    glass[1].classList.add('coffee')
    glass[2].classList.add('empty')
    text[1].textContent = "COFFEE"
    text[2].textContent = "EMPTY"
  }  else if (glass[1].classList.contains('empty') && glass[2].classList.contains('tea')){
    glass[1].classList.remove('empty')
    glass[2].classList.remove('tea')
    glass[1].classList.add('tea')
    glass[2].classList.add('empty')
    text[1].textContent = "TEA"
    text[2].textContent = "EMPTY"
  } else if (glass[2].classList.contains('empty') && glass[1].classList.contains('coffee')){
    glass[0].classList.remove('tea')
    glass[2].classList.remove('empty')
    glass[0].classList.add('empty')
    glass[2].classList.add('tea')
    text[0].textContent = "EMPTY"
    text[2].textContent = "TEA"
  }
})

// Versi 2
const btnAll = document.querySelectorAll('.bttn')
const btnan1 = document.getElementById('btnn1')
const btnan2 = document.getElementById('btnn2')
const btnan3 = document.getElementById('btnn3')
btnan1.addEventListener('click', function(){
  btnAll.forEach((g, index) => {
    if (g.classList.contains('empty')) {
      if(btnan1.classList.contains('tea')){
        btnAll[index].classList.remove('empty')
        btnAll[index].classList.add('tea')
        btnAll[index].textContent = "TEA"
        btnan1.classList.remove('tea')
        btnan1.classList.add('empty')
        btnan1.textContent = "EMPTY"
      }else if((btnan1.classList.contains('coffee'))){
        btnAll[index].classList.remove('empty')
        btnAll[index].classList.add('coffee')
        btnAll[index].textContent = "COFFEE"
        btnan1.classList.remove('coffee')
        btnan1.classList.add('empty')
        btnan1.textContent = "EMPTY"
    }}
  })
})

btnan2.addEventListener('click', function(){
  btnAll.forEach((g, index) => {
    if (g.classList.contains('empty')) {
      if(btnan2.classList.contains('tea')){
        btnAll[index].classList.remove('empty')
        btnAll[index].classList.add('tea')
        btnAll[index].textContent = "TEA"
        btnan2.classList.remove('tea')
        btnan2.classList.add('empty')
        btnan2.textContent = "EMPTY"
      }else if((btnan2.classList.contains('coffee'))){
        btnAll[index].classList.remove('empty')
        btnAll[index].classList.add('coffee')
        btnAll[index].textContent = "COFFEE"
        btnan2.classList.remove('coffee')
        btnan2.classList.add('empty')
        btnan2.textContent = "EMPTY"
      }
    }
  })
})

btnan3.addEventListener('click', function(){
  btnAll.forEach((g, index) => {
    if (g.classList.contains('empty')) {
      if(btnan3.classList.contains('tea')){
        btnAll[index].classList.remove('empty')
        btnAll[index].classList.add('tea')
        btnAll[index].textContent = "TEA"
        btnan3.classList.remove('tea')
        btnan3.classList.add('empty')
        btnan3.textContent = "EMPTY"
      }else if((btnan3.classList.contains('coffee'))){
        btnAll[index].classList.remove('empty')
        btnAll[index].classList.add('coffee')
        btnAll[index].textContent = "COFFEE"
        btnan3.classList.remove('coffee')
        btnan3.classList.add('empty')
        btnan3.textContent = "EMPTY"
      }
    }
  })
})
