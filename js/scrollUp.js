
// scroll up arrow //

    $(document).ready(function(){
            var windowSize = $( window ).width();
            if (true) {    
            
            $(window).scroll(function () {
                if ($(this).scrollTop() > 60) {
                     $('.scrollUp').fadeIn();
        } 
                else {
                    $('.scrollUp').fadeOut();
        }
        });

                $('.scrollUp').click(function() {
                $("html, body").animate({
                    scrollTop: 0 }, 500);
                return false;
        });

        }   
    });
