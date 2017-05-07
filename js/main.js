$( ".main-header .menu a" ).click(function() {
	$( ".main-header" ).toggleClass("open");
});


$(".menu-drop").on("click", function(event){
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


function closeModal () {
	$(".backdrop").remove();
}

function openModal (texto, classe) {
	$("body").append("<div onclick='closeModal();' class='backdrop'><div class='modal'><div class='modal-body "+classe+"'><a onclick='closeModal();'>×</a><p>"+texto+"</p></div></div></div>");
}