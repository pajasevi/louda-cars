var activityIndicatorOn = function()
			{
				$( '<div id="imagelightbox-loading"><div></div></div>' ).appendTo( 'body' );
			},
	activityIndicatorOff = function()
			{
				$( '#imagelightbox-loading' ).remove();
			},

	overlayOn = function()
			{
				$( '<div id="imagelightbox-overlay"></div>' ).appendTo( 'body' );
			},
	overlayOff = function()
			{
				$( '#imagelightbox-overlay' ).remove();
			};

$('#main-menu').on('click', 'a', function(e) {
	e.preventDefault();

	var elem = $(this).attr('href');
	var target = $(elem).offset().top;

	$('html, body').animate({
		scrollTop: target
	}, 1000);

});

$('#show-menu').on('click', function() {
	if($('#main-menu').hasClass('hidden')) {
		$('#main-menu').slideDown().removeClass('hidden');
	}
	else {
		$('#main-menu').slideUp().addClass('hidden');
	}
});

$(window).on('resize', function() {
	if($(window).innerWidth() < 480) {
		$('#main-menu').hide().addClass('hidden');
	}
	else {
		$('#main-menu').show().removeClass('hidden');
	}
});

$(window).on('scroll', function() {
	var menuWrap = $("#main-menu").offset().top;
    var documentTop = $(document).scrollTop();

    if (documentTop > menuWrap) {
        $("#main-menu .content-wrap").addClass("sticky");
    }
    else {
        $("#main-menu .content-wrap").removeClass("sticky");
    }
});
