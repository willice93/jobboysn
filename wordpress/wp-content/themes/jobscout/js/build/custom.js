jQuery(document).ready(function($) {

    var rtl, winWidth;
    
    if( jobscout_data.rtl == '1' ){
        rtl = true;
    }else{
        rtl = false;
    }

    winWidth = $(window).width();
    
     //Header Search form show/hide
     $('.site-header .nav-holder .form-holder').prepend('<div class="btn-close-form"><span></span></div>');

     $('.site-header .form-section').click(function(event) {
        event.stopPropagation();
    });
     $("#btn-search").click(function() {
        $(".site-header .form-holder").show("fast");
    });

     $('.btn-close-form').click(function(){
        $('.site-header .nav-holder .form-holder').hide("fast");
    });

    // JobScout js code
    //testimonial section slider
    $('.custom-background .testimonial-section .widgets-wrap').owlCarousel({
        items   : 1,
        center  : true,
        loop    : true,
        margin: 30,
        nav     : true,
        dots    : false,
        rtl: rtl,
        responsive: {
            //breakpoint from 1180 and up
            1180: {
                stagePadding: 250,
            },
            //breakpoint from 1025 and up
            1025: {
                stagePadding: 200,
            },
            //breakpoint from 769 and up
            783: {
                stagePadding: 150,
            },
            //breakpoint from 0 and up
            0: {
                stagePadding: 0,
            }
        }
    });

    $('.testimonial-section .widgets-wrap').owlCarousel({
        items   : 1,
        center  : true,
        loop    : true,
        margin: 30,
        nav     : true,
        dots    : false,
        rtl: rtl,
        responsive: {
            //breakpoint from 1700 and up
            1800:{
                stagePadding: 506,
            },
            //breakpoint from 1180 and up
            1180: {
                stagePadding: 320,
            },
            //breakpoint from 1025 and up
            1025: {
                stagePadding: 200,
            },
            //breakpoint from 769 and up
            783: {
                stagePadding: 150,
            },
            //breakpoint from 0 and up
            0: {
                stagePadding: 0,
            }
        }
    });

    //testimonial slider nav margin
    var siteWidth = $('.site').width();
    var itemWidth = $('.testimonial-section .owl-item').width();
    var halfWidth = (parseInt(siteWidth) - parseInt(itemWidth)) / 2;
    $('.testimonial-section .owl-carousel .owl-nav .owl-prev').css('left', halfWidth);
    $('.testimonial-section .owl-carousel .owl-nav .owl-next').css('right', halfWidth);


    //responsive menu toggle
    if($(window).width() <= 1024) {
        $('.header-main .main-navigation .toggle-btn').on('click', function(){
            $('body').addClass('menu-active');
        });

        $('.responsive-nav .close-btn').on('click', function(){
            $('body').removeClass('menu-active');
        });

        $('.responsive-nav ul li.menu-item-has-children').prepend('<span class="submenu-toggle"><i class="fas fa-angle-down"></i></span>');

        $('.responsive-nav ul li .submenu-toggle').on('click', function(){
            $(this).toggleClass('active');
            $(this).siblings('ul').slideToggle();
        });

    }

    $('.job-overview .overview-wrap a.btn-primary').click(function(){
        $(this).siblings('#singlejobapply').addClass('active');
    });

    $('.job-overview #singlejobapply .modal-dialog .close').click(function(e){
        e.preventDefault();
        $(this).parents('#singlejobapply').removeClass('active');
    });

    $("#site-navigation ul li a").focus(function(){
       $(this).parents("li").addClass("hover");
    }).blur(function(){
       $(this).parents("li").removeClass("hover");
    });


    //responsive table
    $( 'table.job-manager-jobs' ).each(function( index ) {
      //We are seeing our creatures
      var head_col_count =  $(this).find('thead tr th').size();
      //We consider our th elements in the table
      for ( j=0; j <= head_col_count; j++ )  {
        // Work with text
        var head_col_label = $(this).find('thead th:nth-child('+ j +')').text();
        //Each td is assigned a data-title, which is then output via css
        $( this ).find('tr td:nth-child('+ j +')').replaceWith(
          function(){
            return $('<td data-title="'+ head_col_label +'">').append($(this).contents());
        }
        );
    }
}); 
});