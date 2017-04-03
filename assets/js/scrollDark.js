$(document).ready(function(){
	 var scroll_start = 0;
   var startchange = $('.nav-scroll-dark');
   var offset = startchange.offset();

   $(document).scroll(function() {
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          $('.nav-scroll-dark').css('background-color', '#fff');
					$('.nav-scroll-dark').css('box-shadow', '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)');
       } else {
          $('.nav-scroll-dark').css('background-color', 'transparent');
					$('.nav-scroll-dark').css('box-shadow', 'none');
       }
   });
});
