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