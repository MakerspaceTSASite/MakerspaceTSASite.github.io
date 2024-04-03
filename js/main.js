//ESLint doesn't realize $ is declared, so, this.
// eslint-disable-next-line no-undef
$('img').mousedown(function (e) {
	if(e.button == 2) {
		return false;
	}
});
// eslint-disable-next-line no-undef
$('body').mousedown(function (e) {
	if(e.button == 2) { 
		return false;
	}
});

// eslint-disable-next-line no-undef
$('#topbar').css({'width':window.innerWidth});
// eslint-disable-next-line no-undef
$('#toolbar').css({'width':window.innerWidth});
// eslint-disable-next-line no-undef
$(document.body).css({'width':window.innerWidth});
addEventListener('resize', () => {
	// eslint-disable-next-line no-undef
	$('#toolbar').css({'width':window.innerWidth});
	// eslint-disable-next-line no-undef
	$('#topbar').css({'width':window.innerWidth});
	// eslint-disable-next-line no-undef
	$(document.body).css({'width':window.innerWidth});
});
(() => {
	'use strict';
	// Page is loaded
	const objects = document.getElementsByClassName('asyncImage');
	Array.from(objects).map((item) => {
	// Start loading image
		const img = new Image();
		img.src = item.dataset.src;
		// Once image is loaded replace the src of the HTML element
		img.onload = () => {
			item.classList.remove('asyncImage');
			return item.nodeName === 'IMG' ? 
				item.src = item.dataset.src :        
				item.style.backgroundImage = `url(${item.dataset.src})`;
		};
	});
})();