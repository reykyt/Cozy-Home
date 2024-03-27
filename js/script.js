
let modal = document.querySelector('.modal');
let modalBtn = document.querySelector('.btn');
let modalBtns = document.querySelector('.btns')
let modalBg = document.querySelector('.modal_bg');

modalBtn.addEventListener('click', function(){
	modal.classList.add('show');
	modalBg.classList.add('show');
});

document.addEventListener('click', function(e){
	let click = e.target.classList.value;
	if (click === 'modal_bg show') {
		modal.classList.remove('show');
		modalBg.classList.remove('show');
	}
})