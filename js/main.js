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