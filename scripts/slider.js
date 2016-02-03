function Slider() { };

Slider.prototype.init = function() {
  $('.bxslider').bxSlider({
    auto: true,
    autoControls: true
  });
}

var slider = new Slider();
slider.init();
