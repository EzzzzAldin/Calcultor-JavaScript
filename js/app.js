let btn1 = document.querySelector('#sum'),
	btn2 = document.querySelector('#dif'),
	btn3 = document.querySelector('#mul'),
	btn4 = document.querySelector('#div'),
	btn5 = document.querySelector('#cl'),
	btn6 = document.querySelector('#eq'),
	input = document.querySelector('#in'),
	z = 0;

btn1.addEventListener('click', smath)

function smath() {
	x = Math.floor(input.value);
	input.value = null;
	z = 1;
	input.focus();
}
btn2.addEventListener('click', difmath)

function difmath() {
	x = Math.floor(input.value);
	input.value = null;
	z = 2;
	input.focus();
}
btn3.addEventListener('click', mulmath)

function mulmath() {
	x = Math.floor(input.value);
	input.value = null;
	z = 3;
	input.focus();
}
btn4.addEventListener('click', divmath)

function divmath() {
	x = Math.floor(input.value);
	input.value = null;
	z = 4;
	input.focus();
}
btn6.addEventListener('click', emath); 

function emath() {
	y = Math.floor(input.value);
	input.focus();
	if (z === 1)
		input.value = x + y;
	else if (z === 2)
		input.value = x - y;
	else if (z === 3)
		input.value = x * y;
	else if (z === 4)
		input.value = x / y;
}
btn5.addEventListener('click', cmath);
function cmath() {
	input.value = null;
	input.focus();
}