
$( document ).ready(function() {

// slider

    $('.slider').glide();

// transfer animation

    $('.transfer').hover(
		function(){
		  $('.transfer__download-img').addClass('animated').addClass('bounce');
		},
		function(){
  		  $('.transfer__download-img').removeClass('animated').removeClass('bounce');
		}
    );

// logo norilsk-telecom animation

    $('.advertise-2').hover(
		function(){
		  $('.advertise-2__logo').addClass('animated').addClass('flip');
		},
		function(){
  		  $('.advertise-2__logo').removeClass('animated').removeClass('flip');
		}
    );

// advert animation

    $('.advertise').hover(
		function(){
		  $('.advertise__icon-1, .advertise__icon-2, .advertise__icon-3').addClass('animated').addClass('swing');
		},
		function(){
  		  $('.advertise__icon-1, .advertise__icon-2, .advertise__icon-3').removeClass('animated').removeClass('swing');
		}
    );

// wifi animation

    $('.wifi').hover(
		function(){
		  $('.wifi__title').addClass('animated').addClass('tada');
		},
		function(){
  		  $('.wifi__title').removeClass('animated').removeClass('tada');
		}
    );

// wifi animation

    $('.forum').hover(
		function(){
		  $('.icon-bubbles4').addClass('animated').addClass('rubberBand');
		},
		function(){
  		  $('.icon-bubbles4').removeClass('animated').removeClass('rubberBand');
		}
    );

});
