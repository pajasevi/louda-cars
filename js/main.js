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
			}