

document.querySelectorAll('[data-toggle]').forEach(function(elm) {
	elm.addEventListener('click', function(evt) {
	evt.preventDefault();
	const toggle = elm.dataset.toggle.split(':');

	document.querySelectorAll(toggle[0]).forEach(function(_elm) {
	_elm.classList.toggle(toggle[1]);
	    });
    });
});