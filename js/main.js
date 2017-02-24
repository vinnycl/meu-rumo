$( ".main-header .menu a" ).click(function() {
	$( ".main-header" ).toggleClass("open");
});


$('#btn-classe, #btn-classe input, #btn-classe label').click(function(event){
	$( ".main .main-search form" ).addClass("open");
	event.stopPropagation();
});

$('html:not(btn-classe)').click(function(event){
	$( ".main .main-search form" ).removeClass("open");
	event.stopPropagation();
});

