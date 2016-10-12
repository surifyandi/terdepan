$(document).ready(function(){
  var countContent = $(".row-slider article").length;
  var widthRowSlider = countContent * 100;
  var widthContent = widthRowSlider / countContent / countContent;

  $(".slider .row-slider").css({
    width: widthRowSlider + "%",
    marginLeft: - 100 + "%"
  });
  $(".row-slider article").css("width", widthContent + "%");

  $(".row-slider article:last-child").prependTo(".row-slider");

  function moveLeftSlide(){
    $(".slider .row-slider").animate({left: + 100 + "%"}, 500, function(){
      $(".slider .row-slider .content:last-child").prependTo(".row-slider");
      $(".slider .row-slider").css("left", 0);
    });
  }

  function moveRightSlide(){
    $(".slider .row-slider").animate({left: - 100 + "%"}, 500, function(){
      $(".slider .row-slider .content:first-child").appendTo(".row-slider");
      $(".slider .row-slider").css("left", 0);
    });
  }

  $(".slider .control .left").click(function(){
    moveLeftSlide();
  });

  $(".slider .control .right").click(function(){
    moveRightSlide();
  });
});
