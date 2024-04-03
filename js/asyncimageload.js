(() => {
	'use strict';
	// Wait for the page to fully load
	window.onload = () => {
		const images = document.querySelectorAll('.asyncImage');
		const config = {
			rootMargin: '0px 0px 50px 0px', // Adjust the rootMargin to control when the images start loading
			threshold: 0.01
		};

		const observer = new IntersectionObserver((entries, observer) => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					loadImage(entry.target, observer);
				}
			});
		}, config);

		// Function to load the image
		function loadImage(target, observer) {
			const img = new Image();
			img.src = target.dataset.src;
			img.onload = () => {
				target.classList.remove('asyncImage');
				if (target.nodeName === 'IMG') {
					target.src = target.dataset.src;
				} else {
					target.style.backgroundImage = `url(${target.dataset.src})`;
				}
				observer.unobserve(target);
			};
		}

		// Start observing each image
		images.forEach(image => {
			observer.observe(image);
		});

		// Load images after a 10-second delay if the user has not moved the viewport
		setTimeout(() => {
			images.forEach(image => {
				if (image.classList.contains('asyncImage')) {
					loadImage(image, observer);
				}
			});
		}, 5000); // 10 seconds delay
	};
})();
