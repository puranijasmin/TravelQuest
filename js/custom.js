$(document).ready(function(){
  $(".close-block").click(function(){
  });
});


(function($) { 
  $(function() { 

    // Toggle open and close nav styles on click
    $('#nav-toggle').click(function() {
      $(".nav-mobile-menu").show();
      $(".sub-menu").hide();
    });
    $('#nav-close').click(function() {
      $(".nav-mobile-menu").hide();
    });

    // submenu toggle
    $('.submenu-toggle-btn').click(function() {
        $('.sub-menu').toggle();
    });
    
  }); 

})(jQuery);

// for sliders


jQuery(document).ready(function($) {
    $('.q-slider').owlCarousel({
      center: false, 
      autoplay:false, 
      autoplayTimeout:6000,
      items:1,
      nav:true,
      navText: ["<img src='images/arrow-left.svg'>","<img src='images/arrow-right.svg'>"],
      dots: false,
      loop:true,
      responsive:{
        0:{
          items:1
      }
    }
   }); 

   jQuery('.tourpage-slider').owlCarousel({
    center: true,
    loop:true,
    margin:49,
    nav:true,
    navText: ["<img src='images/tourslider-l.svg'>","<img src='images/tourslider-r.svg'>"],
    dots: true,
    autoplay: true,
   smartSpeed: 2000,
   responsive:{
        0:{
           items:1
       },

       540:{
           items:2
       }
   }
   });


   jQuery('.partner-slider').owlCarousel({
    center: true,
    loop:true,
    margin:60,
    nav:false,
    dots:false,
    autoplay: true,
   smartSpeed: 2000,
   responsive:{
    0:{
        items:1
      },

    600:{
        items:2
      },

    1300:{
      items:5.5
      }
   }
   });


});


//  for project tab view


$('.tabgroup > div').hide();
$('.tabgroup > div:first-of-type').show();
$('.tabs a').click(function(e){
  e.preventDefault();
    var $this = $(this),
        tabgroup = '#'+$this.parents('.tabs').data('tabgroup'),
        others = $this.closest('li').siblings().children('a'),
        target = $this.attr('href');
    others.removeClass('active');
    $this.addClass('active');
    $(tabgroup).children('div').hide();
    $(target).show();
  
})

// for accordion
$('.accordion__header').click(function(e) {
	e.preventDefault();
	var currentIsActive = $(this).hasClass('is-active');
	$(this).parent('.accordion').find('> *').removeClass('is-active');
	if(currentIsActive != 1) {
		$(this).addClass('is-active');
		$(this).next('.accordion__body').addClass('is-active');
	}
});