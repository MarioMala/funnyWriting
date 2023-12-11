/** @format */
const text = document.querySelector('h1');
const color = document.querySelector('#range-color');
const size = document.querySelector('#range-size');
const labelBox = document.querySelector('.label-box');
const fontSize = document.querySelector('.current-size-value');
const fontFamily = document.querySelector('.current-fontface-value');
const selector = document.getElementById('font-selector');

const FONT_FAMILY_MAPPING = {
	'--fontOswald': 'Oswald',
	'--fontTeko': 'Teko',
	'--fontUbuntu': 'Ubuntu',
};

const changeColor = e => {
	let r =  +e.target.value;
	let g = Math.round(Math.random() * +e.target.value);
	let b = Math.round(Math.random() * +e.target.value);

	console.log(r, g, b, Math.ceil(Math.random()));

	text.style.color = `rgb(${r}, ${g}, ${b})`;
};

const changeSize = e => {
	text.style.fontSize = +e.target.value + 'rem';

	fontSize.textContent = `Bieżaca wielkość czcionki to ${e.target.value} rem`;
};

const changeFontFamily = e => {
	let fontFace = e.target.value;
	text.style.fontFamily = `var(${fontFace})`;

	fontFamily.textContent = `Bieżacy krój czcionki to ${FONT_FAMILY_MAPPING[fontFace]}`;
};

color.addEventListener('change', changeColor);

size.addEventListener('input', changeSize);

selector.addEventListener('change', changeFontFamily);
