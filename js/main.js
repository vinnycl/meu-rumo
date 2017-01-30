$( ".main-header .menu a" ).click(function() {
	$( ".main-header" ).toggleClass("open");
});


$('html').click(function() {
  $( ".main .main-search form" ).removeClass("open");
});

$('#btn-classe').click(function(event){
	$( ".main .main-search form" ).addClass("open");
    event.stopPropagation();
});


$( ".main .main-search form input#A" ).click(function() {
	$( ".main .main-search form input#btn-classe" ).val("Classe A");
});

$( ".main .main-search form input#B" ).click(function() {
	$( ".main .main-search form input#btn-classe" ).val("Classe B");
});

$( ".main .main-search form input#C" ).click(function() {
	$( ".main .main-search form input#btn-classe" ).val("Classe C");
});

$( ".main .main-search form input#D" ).click(function() {
	$( ".main .main-search form input#btn-classe" ).val("Classe D ou E");
});
