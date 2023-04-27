/*document.querySelector('.texto').scrollHeight;
document.querySelector('.texto').scrollWidth;
document.querySelector('.texto').offsetHeight
document.querySelector('.texto').offsetWidth
document.querySelector('.texto').clientHeight
document.querySelector('.texto').clientWidth
document.querySelector('.texto').scrollTop;
window.scrollY;
window.scrollX;
document.querySelector('.texto').scrollTo(0,0);
window.scrollTo(0,0);*/

function subirTela(){
	window.scrollTo({
		top: 0,
		left: 0,
		behavior: "smooth"
	});
}

function mostrarBotao(){
	if(window.scrollY === 0){
		document.querySelector('.scrollbutton').style.display = 'none';
	}else{
		document.querySelector('.scrollbutton').style.display = 'block';
	}
}

window.addEventListener('scroll',mostrarBotao);
