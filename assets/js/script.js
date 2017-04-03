$(document).ready(function(){
	 var scroll_start = 0;
   var startchange = $('.nav-scroll');
   var offset = startchange.offset();

   $(document).scroll(function() {
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          $('.nav-scroll').css('background-color', '#fff');
					$('.nav-scroll').css('box-shadow', '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)');
       } else {
          $('.nav-scroll').css('background-color', 'transparent');
					$('.nav-scroll').css('box-shadow', 'none');
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
