$(function(){
	$('.link .button').hover(function(){
		var title=$(this).attr('data-title');
		$('.tip em').text(title);
		var pos=$(this).offset().left;
		var dis=($('.tip').outerWidth()-$(this).outerWidth())/2;
		var l=pos-dis;
		$('.tip').css({'left':l+'px'}).stop(false,true).animate({'top':180,'opacity':1},300);
	},function(){
		$('.tip').stop().animate({'top':160,'opacity':0},300);
	})
})