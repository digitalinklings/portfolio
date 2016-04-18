$(document).ready(function () {

function fullHeight() {
  var windowHeight = $(window).height();
  var sectionHeight = $('[data-height="full"]');
  var borderSize = $(sectionHeight).css('border-width').replace(/[^-\d\.]/g, '');
  var paddingSizeTop = $(sectionHeight).css('padding-top').replace(/[^-\d\.]/g, '');
  var paddingSizeBase = $(sectionHeight).css('padding-bottom').replace(/[^-\d\.]/g, '');
  var adjustedHeight = windowHeight-borderSize*2-paddingSizeTop-paddingSizeBase;

  $(sectionHeight).height(adjustedHeight);
}

// on load
fullHeight();

// resize event
$(window).resize(function() {
  fullHeight();
});

});
