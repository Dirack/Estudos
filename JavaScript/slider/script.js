totalSlides = document.querySelectorAll('.slider--item').length

larguraTela = document.querySelector('.slider').clientWidth

document.querySelector('.slider--width').style.width = `${larguraTela*totalSlides}px`

currentSlide = 0

document.querySelectorAll('.controls button')[0].addEventListener('click',goPrev)

document.querySelectorAll('.controls button')[1].addEventListener('click',goNext)

function goPrev(){
    if(currentSlide<=0){
        currentSlide = totalSlides - 1
    }else{
        currentSlide--
    }
    document.querySelector('.slider--width').style.marginLeft = `${-currentSlide*larguraTela}px`
    console.log(totalSlides)
}

function goNext(){
    if(currentSlide>=2){
        currentSlide = 0
    }else{
        currentSlide++
    }
    document.querySelector('.slider--width').style.marginLeft = `${-currentSlide*larguraTela}px`
    console.log(larguraTela)
    console.log(currentSlide,totalSlides)
}

setInterval(goNext,5000)
