// Loader
let loader = document.querySelector('.loading');

setTimeout(()=>{
	loader.style.display = 'none';
},3000);
// Loader

// Header
let icon = document.querySelector('.menu');
let ul = document.querySelector('.links');
let spans = document.querySelectorAll('.menu span');

icon.onclick = function () {
	ul.classList.toggle('fill-hei');
	spans[0].classList.toggle('change');
	spans[1].classList.toggle('opacity');
	spans[2].classList.toggle('change');
	spans[0].classList.toggle('rot-1');
	spans[2].classList.toggle('rot-2');
};

ul.onclick = function () {
	ul.classList.remove('fill-hei');
	spans[0].classList.remove('change');
	spans[1].classList.remove('opacity');
	spans[2].classList.remove('change');
	spans[0].classList.remove('rot-1');
	spans[2].classList.remove('rot-2');
}
document.body.addEventListener('click', function (e) {
	if (
		e.target.classList.contains('menu') ||
		e.target.classList.contains('change') ||
		e.target.classList.contains('opacity')
	) {
		
	} else {
		ul.classList.remove('fill-hei');
		spans[0].classList.remove('change');
		spans[1].classList.remove('opacity');
		spans[2].classList.remove('change');
		spans[0].classList.remove('rot-1');
		spans[2].classList.remove('rot-2');
	}
});

  // Add and remove the active class
let links = document.querySelectorAll('.links a');

links.forEach((link)=> {
	link.addEventListener('click', () => {
		links.forEach((link) => {
			link.classList.remove('active');
		});
		link.classList.add('active');
	});
})
// Header
// Landing
var i = 0;
var txt = 'Front-End Developer';
var speed = 110;

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
let btn = document.querySelector('.btn');
let cards = document.querySelectorAll('.projects .card');

btn.addEventListener('click', () => {
	if (btn.innerHTML === 'More') {
		btn.innerHTML = 'Less';
	} else {
		btn.innerHTML = 'More';
	}
	for (let i = 6; i < cards.length; i++) {
		cards[i].classList.toggle('show');
	}
});

for (let i = 6; i < cards.length; i++) {
	cards[i].style.display = 'none';
}
// Project section
