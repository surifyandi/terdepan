$(document).ready(function(){
  var countContent = $(".row-slider").children(".content-slider").length;
  var widthRowSlider = (countContent * 100);
  var widthContent = widthRowSlider / countContent / countContent;

  $(".slider").children(".row-slider").css("width", widthRowSlider + "%");
  $(".row-slider").children(".content-slider").css("width", widthContent + "%");

  function moveLeft(){
    $(".row-slider").animate({left: "+=100%"});
  }

  function moveRight(){
    $(".row-slider").animate({left: "-=100%"});
  }

  $(".nav-left").click(function(){
    moveLeft();
  });

  $(".nav-right").click(function(){
    moveRight();
  });
});
