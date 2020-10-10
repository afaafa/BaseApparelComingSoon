const input = document.querySelector('input');
const button = document.querySelector('form button');
const small = document.querySelector('.container form small');
const img = document.querySelector('.container form>img');

button.addEventListener('click', (e) => {
	if (input.value == '' || input.value.indexOf('@') == -1) {
		small.classList.add('error');
		img.classList.add('error');
	} else {
		small.classList.remove('error');
		img.classList.remove('error');
	}
});
