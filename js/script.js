$(document).ready(function(){

  //toogle login
  $(".main-navigation li.sign-in a").click(function(){
    $(".login").addClass("active");
  });

  $(".login .close-button").click(function(){
    $(this).parents(".login").removeClass("active");
  });
});
