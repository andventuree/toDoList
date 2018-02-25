console.log('connected');

//check off specific to do's by clicking

$('ul').on('click', 'li', function() {
	$(this).toggleClass('completed');
});

//click on x to delete to do
$('ul').on('click', 'span', function(event){
	//want to refer to Li holding the span, which is the parent
	//we want fadeout to finish before the removal so we put remove in a call back
	$(this).parent().fadeOut(300, function() {
			$(this).remove();
		});
	//helps to prevent event bubbling
	event.stopPropagation();
});


$("input[type='text']").keypress(function(event) {
	//event is triggered whenever, enter is pressed while in the input box
	if(event.which === 13) {
		//grabbing new to do text from input
		var todoText = $(this).val();
		//to help clear out the input box to show it has been added 
		//just show value as an empty string
		$(this).val('');
		//create a new li and add to ul
			//using append to add to HTML
		$('ul').append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
	}
});

$('.fa-plus').click(function() {
	$("input[type='text']").fadeToggle(300);
});








