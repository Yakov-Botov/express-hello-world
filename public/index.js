const box = document.querySelector('.box')
const boxBody =  document.querySelector('.box-body')

box.onclick = function(){
  boxBody.classList.add("active");

  document.querySelector('.container').classList.add('fadeout')
  // document.querySelector('.night').classList.add('fadein')

  setTimeout(() => {
    document.querySelector('.container').classList.add('hidden')
  }, 1950)

  setTimeout(() => {
    // document.querySelector('.container').classList.add('hidden')
    document.querySelector('.flowers-wrapper').classList.remove("not-loaded");
    document.querySelector('.flowers-wrapper').classList.add("active");
  }, 2050)
}