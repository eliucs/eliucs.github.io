$(document).ready(function(){

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
	});

});
