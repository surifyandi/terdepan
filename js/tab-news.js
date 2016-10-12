$(document).ready(function(){

	function heightTabNews(){
		var heightContentTab = $(".tab-news .row-content").height();
  		var heightSection = $(".tab-news section").height();
  		var heightTab = heightContentTab + heightSection;
  		$(".tab-news").css("height", heightTab + "px");
	}

	heightTabNews();

  	$(window).on("resize", function(){
  		heightTabNews();
  	});

  $(".tab-news section .nav").click(function(){
    $(".tab-news section").removeClass("active");
    $(this).parents("section").addClass("active");
  });
});
