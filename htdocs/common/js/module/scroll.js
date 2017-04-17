$(function(){
	/* スムーズスクロール */
	$('a[href^="#"]').on("click",function(){
		var speed = 400; // ミリ秒
		var href= $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top;
		$('body,html').animate({scrollTop:position}, speed, 'swing');
		return false;
	});
	
	var $main = $("#main").offset().top;
	//alert($main);
	$(window).on('scroll', function () {
		$scroll = $(window).scrollTop();
		
		if ($main > $scroll) {
			$(".go_top").fadeOut();
		}else if ($main <= $scroll){
			$(".go_top").fadeIn();
		}
	})
})