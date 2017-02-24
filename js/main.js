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