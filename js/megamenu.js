$(document).ready(function(){

	//trigger mobile nav button{
	$(".mobile-nav-button span").click(function(){
		$("nav.main-navigation > ul").toggleClass("active");
	});

	//trigger main menu
	$(".main-navigation ul > li.megamenu > a").click(function(e){
		if($(this).parent().hasClass("active")){
			$(".main-navigation ul > li.megamenu").removeClass("active");
			$(this).parent().removeClass("active");
		}else{
			$(".main-navigation ul > li.megamenu").removeClass("active");
			$(this).parent().addClass("active");
		}
		$(this).next().children("li:first-child").addClass("active");
		e.preventDefault();
	});

	//trigger child menu
	$(".megamenu > ul > li > a").click(function(e){
		$(".megamenu > ul > li").removeClass("active");
		$(this).parent().addClass("active");
		e.preventDefault();
	});
})