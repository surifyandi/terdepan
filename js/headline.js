$(document).ready(function(){
  var countCaption = $(".headline .caption").length;
  var widthBodyCaption = countCaption * 100;
  var widthCaption = widthBodyCaption / countCaption / countCaption;

  $(".headline .row-caption").css({
    width: widthBodyCaption + "%",
    marginLeft: - 100 + "%"
  });
  $(".headline .caption").css("width", widthCaption + "%");

  $(".headline .caption:last-child").prependTo(".row-caption");

  function moveLeft(){
    $(".headline .row-caption").animate({left: + 100 + "%"}, 400, function(){
      $(".headline .caption:last-child").prependTo(".row-caption");
      $(".headline .row-caption").css("left", 0);
    });
  }

  function moveRight(){
    $(".headline .row-caption").animate({left: - 100 + "%"}, 400, function(){
      $(".headline .caption:first-child").appendTo(".row-caption");
      $(".headline .row-caption").css("left", 0);
    });
  }

  $(".headline .fa-angle-up").click(function(){
    moveLeft();
  });

  $(".headline .fa-angle-down").click(function(){
    moveRight();
  });
});
