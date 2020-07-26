$(function() {

    var header = $("#header"),
        introH = $("#intro").innerHeight(),
        scrollOffset = $(window).scrollTop(); 

    /* хедер */
    checkScroll(scrollOffset);
    
    $(window).on("scroll", function() {
        scrollOffset = $(this).scrollTop();
        
        checkScroll(scrollOffset);
    });

    function checkScroll(scrollOffset) {
        if(scrollOffset >= introH) {
            header.addClass("fixed")
        }
        else {
            header.removeClass("fixed")
        }
    }

    /* плавный скролинг к элементам */
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data('scroll'),
            blockOffset = $(blockId).offset().top;

        $("#nav a").removeClass("active");
        $this.addClass("active");

        $("html, body").animate({
            scrollTop: blockOffset
        }, 500);
    });



    /* menu nav toggle */ 
    $("#nav-toggle").on("click", function(event) {
        event.preventDefault();

        $(this).toggleClass("active")
        $("#nav").toggleClass("active");
    });

});