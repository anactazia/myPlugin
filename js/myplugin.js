 $(function() {
$( "#myaccordion" ).accordion({
heightStyle: "content"
});
});


$('.mylightbox').click(function() {
    var windowHeigth = window.innerHeight || $(window).height(), 
        windowWidth  = window.innerWidth  || $(window).width();

    // Display the overlay
    $('<div id="myoverlay"></div>')
      .css('opacity', '0')
      .animate({'opacity' : '0.5'}, 'slow')
      .appendTo('body');
    
    // Create the lightbox container
    $('<div id="mylightbox"></div>')
      .hide()
      .appendTo('body');
    
    // Display the image on load
    $('<img>')
      .attr('src', $(this).attr('src'))
      .css({
        'max-height': windowHeigth, 
        'max-width':  windowWidth
      })
      .load(function() {
        $('#mylightbox')
          .css({
            'top':  (windowHeigth - $('#mylightbox').height()) / 2,
            'left': (windowWidth  - $('#mylightbox').width())  / 3
          })
          .fadeIn();
      })
      .appendTo('#mylightbox');
      
      // Remove it all on click
      $('#myoverlay, #mylightbox').click(function() {
        $('#myoverlay, #mylightbox').remove();
      });
    
    console.log("Display image in colorbox.");
  });  

