$.fn.dropdownFocusMenu = function () {
	var obj = $(this);
	var allLinks = obj.find('li a');
	//attach listener to every list item link
	allLinks.each(function () {
		//When a user focusses on a link (Via tab for example) add a class to the focussed link
		$(this).blur(function () {
			//Remove the focus class of the blurred item
			var focusedLink = $(this);
			focusedLink.parent().removeClass('focus');
		})
		.focusin(function(e) {
			//after the blur, the focusin is fired.
			//add focus class to the focussed item. 
			var focusedLink = $(this);
			
			//If the focussed item has more than one UL as a parent its a submenu. All the LI's working upwards should have a focus class
			if (focusedLink.parents('ul').length > 1) {
				focusedLink.parents('li').addClass('focus');
			} else {
				//If there ever was an upwards focussing it's not here anymore. Remove all focus classes to be sure the parent that once was focussed isnt anymore
				obj.find('li').removeClass('focus');
			}
			
			focusedLink.parent().addClass('focus');			
		});	
	});
	
	//If someone clicks anywhere but on the object, the focussed elements all seize to exist.
	$('body').not(obj).click(function() {
		obj.find('li').removeClass('focus');
	});
}
