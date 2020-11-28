$(document).ready(function() {

  // sticky menu js start here
   $(window).on('scroll',function() {
   var scroll = $(window).scrollTop();
   if (scroll < 1) {
    $(".sticky").removeClass("scroll-header");
   }else{
    $(".sticky").addClass("scroll-header");
   }
  });
  // sticky menu js end here


	// progress bar js start here
	$('#circle-1').circleProgress({
    startAngle: 4.6,
    lineCap: "round",
    animation: {
      duration: 2000,
    },
    fill: {
      color: "#45B44D",
    }
  });
	$('#circle-2').circleProgress({
    startAngle: 4.6,
    lineCap: "round",
    animation: {
      duration: 2000,
    },
    fill: {
      color: "#45B44D",
    }
  });
	$('#circle-3').circleProgress({
    startAngle: 4.6,
    lineCap: "round",
    animation: {
      duration: 2000,
    },
    fill: {
      color: "#45B44D",
    }
  });
	$('#circle-4').circleProgress({
    startAngle: 4.6,
    lineCap: "round",
    animation: {
      duration: 2000,
    },
    fill: {
      color: "#45B44D",
    }
  });
	$('#circle-5').circleProgress({
    startAngle: 4.6,
    lineCap: "round",
    animation: {
      duration: 2000,
    },
    fill: {
      color: "#45B44D",
    }
  });
	$('#circle-6').circleProgress({
    startAngle: 4.6,
    lineCap: "round",
    animation: {
      duration: 2000,
    },
    fill: {
      color: "#45B44D",
    }
  });
	// progress bar js end here


	// owl carousel js start here
	  $(".client-reviews-carousel").owlCarousel({
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:false,
  	items: 1,
  	loop: true,
    dotsEach: true,
  	});
	// owl carousel js end here

  //Scroll to Top js start here//
    $(window).on('scroll', function() {
      if ($(this).scrollTop() > 100) {
        $('.scrollToTop').fadeIn();
      } else {
        $('.scrollToTop').fadeOut();
      }
    });
    $(document).on('click', '.scrollToTop', function() { // When arrow is clicked
      $('html, body').animate({scrollTop : 0},200);
      return false;
    });
  // Scroll to Top js end here

});
