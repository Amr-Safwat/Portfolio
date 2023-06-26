let icon = document.querySelector('.menu');
let ul = document.querySelector('nav .links');
let spans = document.querySelectorAll('.menu span');

icon.onclick = function () {
	ul.classList.toggle('fill-hei');
	spans[0].classList.toggle('change');
	spans[1].classList.toggle('opacity');
	spans[2].classList.toggle('change');
	spans[0].classList.toggle('rot-1');
	spans[2].classList.toggle('rot-2');
};


// Landing
var i = 0;
var txt = 'Front-End Developer';
var speed = 80;

function typeWriter() {
	if (i < txt.length) {
		document.getElementById('demo').innerHTML += txt.charAt(i);
		i++;
		setTimeout(typeWriter, speed);
	}
}
typeWriter()
// Landing

// Project section
let btn = document.getElementsByClassName('main-btn');
let cards = document.querySelectorAll('.projects .card');

btn[1].addEventListener('click', () => {
	if (btn[1].innerHTML === 'More') {
		btn[1].innerHTML = 'Less';
	} else {
		btn[1].innerHTML = 'More';
	}
	for (let i = 6; i <= cards.length; i++) {
		cards[i].classList.toggle('show');
	}
});

for (let i = 6; i <= cards.length; i++) {
	cards[i].style.display = 'none';
}
// Project section
console.log(cards[7]);
