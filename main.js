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
console.log(ul)