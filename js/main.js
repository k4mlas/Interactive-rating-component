const mainBtn = document.querySelector('.sub');
const allBtnRank = document.querySelectorAll('.btn');
const check = document.querySelector('.card__checkText');
const error = document.querySelector('.card__errorText');
const bodyOne = document.querySelector('.card__body');
const bodyTwo = document.querySelector('.card__bodySecond');
const buttonOne = allBtnRank[0];
const buttonOneText = allBtnRank[0].textContent;
const buttonTwo = allBtnRank[1];
const buttonTwoText = allBtnRank[1].textContent;
const buttonThree = allBtnRank[2];
const buttonThreeText = allBtnRank[2].textContent;
const buttonFour = allBtnRank[3];
const buttonFourText = allBtnRank[3].textContent;
const buttonFive = allBtnRank[4];
const buttonFiveText = allBtnRank[4].textContent;
const tabLong = allBtnRank.length;


const reating = () => {
	if (check.textContent == '') {
		error.textContent = 'Please select a rating!';
	} else if (check.textContent !== '') {
		bodyOne.style.display = 'none';
		bodyTwo.style.display = 'block';
	}
};

const add1 = () => {
	check.textContent = '';
	error.textContent = '';
	buttonOne.style.backgroundColor = '';
	buttonTwo.style.backgroundColor = '';
	buttonThree.style.backgroundColor = '';
	buttonFour.style.backgroundColor = '';
	buttonFive.style.backgroundColor = '';
	buttonOne.style.backgroundColor = 'hsl(216, 12%, 54%)';
	check.textContent = `You selected ${buttonOneText} of ${tabLong}`;
	console.log(allBtnRank[0].textContent);
};
const add2 = () => {
	check.textContent = '';
	buttonOne.style.backgroundColor = '';
	buttonTwo.style.backgroundColor = '';
	buttonThree.style.backgroundColor = '';
	buttonFour.style.backgroundColor = '';
	buttonFive.style.backgroundColor = '';
	buttonTwo.style.backgroundColor = 'hsl(216, 12%, 54%)';
	check.textContent = `You selected ${buttonTwoText} of ${tabLong}`;
	console.log(allBtnRank[1].textContent);
};
const add3 = () => {
	check.textContent = '';
	error.textContent = '';
	buttonOne.style.backgroundColor = '';
	buttonTwo.style.backgroundColor = '';
	buttonThree.style.backgroundColor = '';
	buttonFour.style.backgroundColor = '';
	buttonFive.style.backgroundColor = '';
	buttonThree.style.backgroundColor = 'hsl(216, 12%, 54%)';
	check.textContent = `You selected ${buttonThreeText} of ${tabLong}`;
	console.log(allBtnRank[2].textContent);
};
const add4 = () => {
	check.textContent = '';
	error.textContent = '';
	buttonOne.style.backgroundColor = '';
	buttonTwo.style.backgroundColor = '';
	buttonThree.style.backgroundColor = '';
	buttonFour.style.backgroundColor = '';
	buttonFive.style.backgroundColor = '';
	buttonFour.style.backgroundColor = 'hsl(216, 12%, 54%)';
	check.textContent = `You selected ${buttonFourText} of ${tabLong}`;
	console.log(allBtnRank[3].textContent);
};
const add5 = () => {
	check.textContent = '';
	error.textContent = '';
	buttonOne.style.backgroundColor = '';
	buttonTwo.style.backgroundColor = '';
	buttonThree.style.backgroundColor = '';
	buttonFour.style.backgroundColor = '';
	buttonFive.style.backgroundColor = '';
	buttonFive.style.backgroundColor = 'hsl(216, 12%, 54%)';
	check.textContent = `You selected ${buttonFiveText} of ${tabLong}`;
	console.log(allBtnRank[4].textContent);
};

buttonOne.addEventListener('click', add1);
buttonTwo.addEventListener('click', add2);
buttonThree.addEventListener('click', add3);
buttonFour.addEventListener('click', add4);
buttonFive.addEventListener('click', add5);
mainBtn.addEventListener('click', reating);
