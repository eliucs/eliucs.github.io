$(document).ready(function(){
	var scrollStart = 0;
	var startChange = $('.nav-scroll-dark');
	var offset = startChange.offset();

	$(document).scroll(function() {
		scrollStart = $(this).scrollTop();
		
		if (scrollStart > offset.top) {
			$('.nav-scroll-dark').css('background-color', '#1f1f1f');
			$('.nav-scroll-dark').css('box-shadow', '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)');
		} else {
			$('.nav-scroll-dark').css('background-color', 'transparent');
			$('.nav-scroll-dark').css('box-shadow', 'none');
		}
	});

	$('#nav-icon, #nav-icon-dark').click(function(){
		$(this).toggleClass('open');
		$('#logo').toggleClass('open');
		$('#topnav').toggleClass('open');
		$('#menu-1').toggleClass('open');
		$('#menu-2').toggleClass('open');
		$('#menu-3').toggleClass('open');
		$('#menu-4').toggleClass('open');
		$('#option-1').toggleClass('open');
		$('#option-2').toggleClass('open');
		$('#option-3').toggleClass('open');
		$('#option-4').toggleClass('open');
	});
});
