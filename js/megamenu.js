$(document).ready(function(){

  $(".row-dropdown .nav-dropdown").click(function(){
    $(".row-dropdown").removeClass("active");
    $(this).parents(".row-dropdown").addClass("active");
  });

  $(".main-navigation li .link-death").click(function(event){
    if($(this).parents(".dropdown").hasClass("active")){
      $(this).parents(".dropdown").removeClass("active");
    }else{
      $(".main-navigation li").removeClass("active");
      $(this).parents(".dropdown").addClass("active");
    }

    var heightContent = $(".row-dropdown .group-news").innerHeight();
    $(".body-dropdown").css("height", heightContent + "px");
    event.preventDefault();
  });
})
