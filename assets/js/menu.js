$(document).ready(function(){

	$('#nav-icon').click(function(){
		$(this).toggleClass('open');

		$('#logo').toggleClass('open');
		$('#topnav').toggleClass('open');

		$('#menu-1').toggleClass('open');
		$('#menu-2').toggleClass('open');
		$('#menu-3').toggleClass('open');
		$('#menu-4').toggleClass('open');

		$('#opt1').toggleClass('open');
		$('#opt2').toggleClass('open');
		$('#opt3').toggleClass('open');
	});

});
