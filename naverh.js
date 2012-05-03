(function($){

/* использование: <a class='scrollTop' href='#' style='display:none;'></a>
------------------------------------------------- */
$(function(){
	var e = $(".scrollTop");
	var	speed = 500;
	
	e.click(function(){
		$("html:not(:animated)" +( !$.browser.opera ? ",body:not(:animated)" : "")).animate({ scrollTop: 0}, 500 );
		return false; //важно!
	});
	//появление
	function show_scrollTop(){
		( $(window).scrollTop()>300 ) ? e.fadeIn(600) : e.hide();
	}
	$(window).scroll( function(){show_scrollTop()} ); show_scrollTop();
	
});

})(jQuery)