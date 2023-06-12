const menuBtn=document.querySelector('.menu-btn')
const navItem=document.querySelector('.nav-item')
const navBar=document.querySelector('nav-bar')
let showMenu=false

function toglleMenu(){
if(!showMenu){
  menuBtn.classList.add('close')
  navItem.classList.add('show')
  navBar.classList.add('show')

  showMenu=true;
}else{
    menuBtn.classList.remove('close')
    navItem.classList.remove('show')
    navBar.classList.remove('show')

   showMenu=false;
}
    
}
menuBtn.addEventListener('click', toglleMenu)