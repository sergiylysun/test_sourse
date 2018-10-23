$(window).on('load', function () {
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
		$('body').addClass('ios');
	} else{
		$('body').addClass('web');
	};
	$('body').removeClass('loaded'); 
});
/* viewport width */
function viewport(){
	var e = window, 
		a = 'inner';
	if ( !( 'innerWidth' in window ) )
	{
		a = 'client';
		e = document.documentElement || document.body;
	}
	return { width : e[ a+'Width' ] , height : e[ a+'Height' ] }
};
/* viewport width */
$(function(){
	if($('.message-content').length) {
		$(".message-content").mCustomScrollbar({
			axis:"y",
			theme:"dark-thin",
			autoExpandScrollbar:true,
			advanced:{autoExpandVerticalScroll:true}
		});
	};	
});

var handler = function(){
	
	var height_footer = $('footer').height();	
	var height_header = $('header').height();		
	//$('.content').css({'padding-bottom':height_footer+40, 'padding-top':height_header+40});
	
	
	var viewport_wid = viewport().width;
	var viewport_height = viewport().height;
	
	if (viewport_wid <= 991) {
		
	}
	
}
$(window).bind('load', handler);
$(window).bind('resize', handler);

$(function() {
	$('ul.contact').on('click', 'li:not(.active-chat)', function() {
		$(this).addClass('active-chat').siblings().removeClass('active-chat').closest('div.chat').find('div.chat-box').removeClass('active-chat').eq($(this).index()).addClass('active-chat');
	});
});