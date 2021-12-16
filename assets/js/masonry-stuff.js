var $container = $('#photo-grid');

$container.masonry({
  percentPosition: true, initLayout: false
});

// initialize Masonry after all images have loaded
$container.imagesLoaded( function() {
  $container.removeClass('is-loading');
  $container.masonry();
  document.getElementById('loading-spinner-container').remove();
})
.progress(function(x, image) {
  $( image.img ).closest('.card').removeClass('is-loading');
})
