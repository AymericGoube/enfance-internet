// scroll lors du click sur un élément de la navbar
$(document).ready(function() {
        $('.js-scrollTo').on('click', function() { // Au clic sur un élément
                var page = $(this).attr('href'); // Page cible
                var speed = 750; // Durée de l'animation (en ms)
                $('html, body').animate( { scrollTop: $(page).offset().top-70 }, speed ); // Go
                return false;
        });
});



// Permet de retourner au header
$(document).ready(function(){
  var arrow = $('.fa-arrow-circle-up');
  var arrowOffsetTop = arrow.offset().top-100;
  $(document).on('scroll', function(){
    console.log(arrowOffsetTop);
      console.log($(document).scrollTop());
    if (arrowOffsetTop < $(document).scrollTop()) {
      arrow.attr('style' ,'visibility:visible;');
    }
    else{
      arrow.attr('style' ,'visibility:hidden;');
    }
  })
});
