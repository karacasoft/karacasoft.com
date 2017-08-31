var BigTextController = function() {
  var btCtrl = this;
  
  btCtrl.texts = [
    "Fascinating",
    "Extraordinarily Cool",
    "Beautifully Implemented",
    "Cleverly Designed",
    "Exciting",
    "Amazing",
  ];
  
  btCtrl.flipped = false;
  
  btCtrl.currentTextIndex = 0;
  btCtrl.currentText = btCtrl.texts[btCtrl.currentTextIndex];
  
  btCtrl.next = function() {
    if (++btCtrl.currentTextIndex >= btCtrl.texts.length) {
      btCtrl.currentTextIndex = 0;
    }
    btCtrl.currentText = btCtrl.texts[btCtrl.currentTextIndex];
    $(".switching-text").html(btCtrl.currentText);
  };
  
  setInterval(function () {
    btCtrl.flipped = true;
    $(".switching-text").addClass("flipped");
    var oldTop = $(".non-switching-text").position().top;
    var oldLeft = $(".non-switching-text").position().left;
    
    setTimeout(function () {
      btCtrl.next();
      var newTop = $(".non-switching-text").position().top;
      var newLeft = $(".non-switching-text").position().left;
      
      var diffTop = oldTop - newTop;
      var diffLeft = oldLeft - newLeft;
      
      //$(".non-switching-text").animate({"top": diffTop, "left" : diffLeft}, 500);
      
      $(".non-switching-text").css("top", diffTop);
      $(".non-switching-text").css("left", diffLeft);
      //$(".non-switching-text").stop();
      $(".non-switching-text").animate({"top": 0, "left" : 0}, 300, function() {});
      
      setTimeout(function() {
        btCtrl.flipped = false;
        $(".switching-text").removeClass("flipped");
      }, 400);
      
    }, 300);
    
  }, 3500);
  
};

var btCtrl = new BigTextController();