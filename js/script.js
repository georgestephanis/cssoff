
( function( window, $ ) {
	'use strict';

	var tidyFills,
		$textfills = $( '#staying-afloat h2, .caliber, .manufacturer, .load, #transformers h2, #border-bottom-line h2, #border-bottom-line h3' );

	$textfills.addClass('textfill').wrapInner('<span />');

	tidyFills = function(){
		$textfills.textfill({
			widthOnly     : true,
			maxFontPixels : 200
		});
	}();

} ) ( this, jQuery );
