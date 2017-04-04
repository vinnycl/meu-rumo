$( ".main-header .menu a" ).click(function() {
	$( ".main-header" ).toggleClass("open");
});


$("#btn-classe").on("click", function(event){
    $(".main .main-search form").toggleClass("open");
    event.stopPropagation();
});

$(".main .main-search form").on("click", function(event){
    event.stopPropagation();
});

$(document).on("click", function(event){
    $(".main .main-search form").removeClass("open");
});

$( "#iniciar-busca" ).submit(function( event ) {
	var structure = $('<div class="overlay"><div class="loading"><span>Carregando sua busca</span></div></div>');
	$('body').append(structure); 
});