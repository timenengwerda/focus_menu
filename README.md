# focus_menu
When tabbing through a menu the submenu's tend to be ignored. This fixes it with some Javascript and a custom .focus class.

Usage:
$(document).ready(function () {
	//Make sure to create a li.focus object in your CSS for this to visually work!
	//Usually it's the same as a li:hover. So that's rather easy I guess.
	$('ul.menu').dropdownFocusMenu();
});
