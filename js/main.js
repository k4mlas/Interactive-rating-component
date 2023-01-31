const mainBtn = document.querySelector('.sub');
// const oneBtn = document.querySelector('.first');
// const twoBtn = document.querySelector('.second');
// const threeBtn = document.querySelector('.third');
// const fourBtn = document.querySelector('.four');
// const fiveBtn = document.querySelector('.five');

const btns = document.querySelectorAll('.btn');

const check = document.querySelector('.card__checkText');
const error = document.querySelector('.card__errorText');

const bodyOne = document.querySelector('.card__body');
const bodyTwo = document.querySelector('.card__bodySecond');

const reating = () => {
	if (check.textContent == '') {
		error.textContent = 'Please select a rating!';
	} else if (check.textContent !== '') {
		bodyOne.style.display = 'none';
		bodyTwo.style.display = 'block';
	}
};


const yourNumb1 = () => {
	
};
const yourNumb2 = () => {
	console.log(twoBtn.textContent);
};
const yourNumb3 = () => {
	console.log(threeBtn.textContent);
};
const yourNumb4 = () => {
	console.log(fourBtn.textContent);
};
const yourNumb5 = () => {
	console.log(fiveBtn.textContent);
};

mainBtn.addEventListener('click', reating);
// btns.addEventListener('click', yourNumb1);
// twoBtn.addEventListener('click', yourNumb2);
// threeBtn.addEventListener('click', yourNumb3);
// fourBtn.addEventListener('click', yourNumb4);
// fiveBtn.addEventListener('click', yourNumb5);
