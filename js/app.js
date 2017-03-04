$(".holder").click(function(){

$('.hamburguer-menu').toggleClass('opened');//Realizar o tratamento do aplicação da class com um contador.

var classClounter = $('.hamburguer-menu').hasClass('opened');

if(classClounter > 0){
	$(".nav-mobile").addClass('menu-opened');
	$('.nav-content ').addClass('menu-opened');
}

else{
	$('.nav-mobile').removeClass('menu-opened');
		$('.nav-content').removeClass('menu-opened');


}
});




$('.nav-bar a').click(function(e){

e.preventDefault();


$('html, body').animate({
scrollTop: $($(this).attr('href')).offset().top
}, 2000);

});



$('.nav-content a').click(function(e){
	
	e.preventDefault();

	$('html, body').animate({
		scrollTop: $($(this).attr('href')).offset().top
	}, 2000);

	var classClounter = $('.hamburguer-menu').hasClass('opened');

	if (classClounter > 0) {

		$('.hamburguer-menu').removeClass('opened');
		$(".nav-mobile").removeClass('menu-opened');
	$('.nav-content ').removeClass('menu-opened');
	}



});



//function to create the smooth scroller


