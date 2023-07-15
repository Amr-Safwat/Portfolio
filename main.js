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

  // Dark Mode
	let dark = document.querySelector('header .icons');
	let icons = document.querySelectorAll('header .icon');

	let mode = 'light';
	
	if(localStorage.getItem('mode') === 'dark') {
		document.body.classList.toggle('dark');
		icons[0].classList.toggle('show-icon');
		icons[1].classList.toggle('hid-icon');
	}
	dark.onclick = () => {
		document.body.classList.toggle('dark');
		icons[0].classList.toggle('show-icon');
		icons[1].classList.toggle('hid-icon');
		
	}
	icons[0].onclick = ()=> {
		mode = 'light';
		localStorage.setItem('mode', mode);
	};
	icons[1].onclick = ()=> {
		mode = 'dark';
		localStorage.setItem('mode', mode);
	};
  // Dark Mode
links.forEach((link) => {
	link.style.color = '#fff';
});
icons[1].style.color='#fff';
window.onscroll = () => {
	if (window.scrollY > 200) {
		document.querySelector('header').style.backgroundColor =
			'var(--header-color)';
		links.forEach((link) => {
			link.style.color = 'var(--text-color)';
		});
	} else {
		document.querySelector('header').style.backgroundColor = '';
		links.forEach((link) => {
			link.style.color = '#fff';
		});
	}
};
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
setTimeout(typeWriter,3500);
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
