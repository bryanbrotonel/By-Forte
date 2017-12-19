(function($) {
	$(function() {

		$('.button-collapse').sideNav();

		$('.parallax').parallax();

		$('.scrollspy').scrollSpy();

		$('.scrollspy').on('scrollSpy:enter', function () {
			$('.navbar-fixed').find('a[href="#' + $(this).attr('id') + '"]').parent().addClass('active');
		});

		$('.scrollspy').on('scrollSpy:exit', function () {
			$('.navbar-fixed').find('a[href="#' + $(this).attr('id') + '"]').parent().removeClass('active');
		});
	}); // end of document ready
})(jQuery); // end of jQuery name space
