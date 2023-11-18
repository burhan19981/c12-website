let header = document.querySelector('header');
window.onscroll = function(){
    if(this.scrollY >= 100){
        header.classList.add('active');
    }
    else{
        header.classList.remove('active');
    }
    btnMenu.classList.remove('fa-times');
    NavLinks.classList.remove('active')
}

let btnMenu = document.getElementById('btnMenu');
let NavLinks = document.querySelector('.nav-links');

btnMenu.onclick = function (){
    btnMenu.classList.toggle('fa-times');
    NavLinks.classList.toggle('active')
}
