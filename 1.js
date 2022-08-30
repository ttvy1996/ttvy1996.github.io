$(function() {
	$(".xuong,.kn").click(function(event) {
		$('body,html').animate({scrollTop:$('#khoiedu').offset().top},800);
		return false;
	});

	$(".sp").click(function(event) {
		$('body,html').animate({scrollTop:$('#khoisanpham').offset().top},800);
		return false;
	});

	$(".cm").click(function(event) {
		$('body,html').animate({scrollTop:$('#phanhoi').offset().top},800);
		return false;
	});
});