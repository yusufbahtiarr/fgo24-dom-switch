const btn = document.querySelector('button');

const glass = document.querySelectorAll('.glass');
const text = document.querySelectorAll('.text');

// glass[0].classList.add('coffee');
// glass[0].classList.remove('coffee');

btn.addEventListener('click', function(){
  // glass.forEach((g, index) => {
  //   if (g.classList.contains('empty')) {
  //     console.log(`Elemen ke-${index} kosong`);
  //   }
  // });
  
  // console.log(glass.classList.contains('empty'))
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



//  Lat 2
// const btn = document.querySelector('.input>button')
// btn.addEventListener('click', function(){
//   const input = btn.previousElementSibling
//   // input.setAttribute('type','text') //elemen sebelum button tapi masih sibling
//   if(input.hasAttribute('type') && input.getAttribute('type') === 'password'){
//     input.setAttribute('type', 'text')
//     btn.firstElementChild.setAttribute('src','icons/eye-closed.svg')
//   }else {
//     input.setAttribute('type', 'password')
//     btn.firstElementChild.setAttribute('src','icons/eye.svg')
//   }

// })
