(function($) {
	$(function() {

		$('textarea#message').characterCounter();

		$('#submit').click(function() {});

	}); // end of document ready

	// Form validation
	$("#contactForm").validate({
		rules: {
			subject: "required",
			message: {
        required: true,
        maxlength: 150
      }
		},
		errorElement: 'div',
		errorPlacement: function(error, element) {
			var placement = $(element).data('error');
			if (placement) {
				$(placement).append(error)
			} else {
				error.insertAfter(element);
			}
		}
	})

  jQuery.extend(jQuery.validator.messages, {
    required: "This field is required.",
    maxlength: jQuery.validator.format("Please enter no more than {0} characters.")
  });

	$("#contactForm").submit(function(event) {
		var subject = $('#subject').val();
		var message = $('#message').val()

		if (subject !== "" && message !== "") {
			var name;
			if ($('name').val() === "") {
				name = "Anonymous"
			} else {
				name = $('name').val();
			}

			message += '%0A%0ASender: ' + name;

			window.open('mailto:broto_23@live.ca?subject=' + subject + '&body=' + message);
		}
	});
})(jQuery); // end of jQuery name space
