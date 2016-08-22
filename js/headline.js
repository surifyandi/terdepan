$(document).ready(function(){
  var countCaption = $(".row-caption").children(".caption").length;
  var widthBodyCaption = (countCaption * 100);
  var widthCaption = widthBodyCaption / countCaption / countCaption;

  $(".body-caption").children(".row-caption").css("width", widthBodyCaption + "%");
  $(".row-caption").children(".caption").css("width", widthCaption + "%");

  function moveLeft(){
    $(".row-caption").animate({right: "+=100%"});
  }

  function moveRight(){
    $(".row-caption").animate({right: "-=100%"});
  }

  $(".fa-angle-down").click(function(){
    moveLeft();
  });

  $(".fa-angle-up").click(function(){
    moveRight();
  });
});
