
document.querySelector('.hamburguer').addEventListener('click',()=>{
    document.querySelector('.menu-mobile').classList.toggle('open')
    if(document.querySelector('.menu-mobile').classList.contains('open')){
        document.querySelector('.hamburguer button img').src = 'close_white_36dp.svg'
    }else{
        document.querySelector('.hamburguer button img').src = 'menu_white_36dp.svg'
    }
})