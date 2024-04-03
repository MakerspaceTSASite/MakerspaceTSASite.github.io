(() => {
	'use strict';
	// Page is loaded
	const objects = document.getElementsByClassName('asyncImage');
	Array.from(objects).map((item) => {
		// Start loading image
		const img = new Image();
		console.log(img);
		img.src = item.dataset.src;
		console.log(img.src);
		// Once image is loaded replace the src of the HTML element
		img.onload = () => {
			item.classList.remove('asyncImage');
			console.log(item.nodeName === 'IMG' ? 'It is equal IMG' : 'It does not equal IMG');
			return item.nodeName === 'IMG' ? 
				item.src = item.dataset.src :        
				item.style.backgroundImage = `url(${item.dataset.src})`;
		};
	});
})();
