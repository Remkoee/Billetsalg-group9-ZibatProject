// lightSlider

$(document).ready(function() {
    $("#lightSlider").lightSlider({
        gallery: false,
        item: 1,
        mode: "fade",
        loop: true,
        slideMove: 1,
        auto: true,
        speed: 500,
        pause: 3000,
        slideMargin: 0,
        controls: false,
        pager: false,
        thumbItem: 0
    }); 
});

// slick carousel
$(document).ready(function(){
    $('.carousel-active-item').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        fade: true,
        asNavFor: ".carousel-items"
    });
    $('.carousel-items').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        variableWidth: true,
        asNavFor: ".carousel-active-item"
    });
});

// burger-menu
$('.burger-menu').on('click', function (event) {
    $('#menu-overflow').toggleClass('menu-overflow-active'),   
    $('.burger-icon').toggleClass('burger-icon-clicked')
});

// Initialize AOS
AOS.init({
      disable: 'mobile'
    });

// Smooth scrolling to all links
$(document).ready(function () {
    // Add smooth scrolling to all links
    $("a").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});

// God damn little tooltip
$(".tooltip").hover(function() {
    $(this).removeClass("tooltipactive");
});

// Filter blur > main-search-bar
$(".blur-effect-click").click(function() {
    $("#first-section").addClass("blur-effect");
    $(".blur-overlay").css("visibility", "visible").hide().fadeIn("slow");
    return false;
});

// Remove filter blur if ESC is pressed
jQuery(document).on('keyup',function(evt) {
    if (evt.keyCode == 27) {
        $("#first-section").removeClass("blur-effect");
        $(".blur-overlay").css("visibility", "hidden").show().fadeOut("slow");
    }
});

// On outer click do the same...
$(document).mouseup(function(e) 
{
    var container = $(".main-search-container");

    // if the target of the click isn't the container nor a descendant of the container
    if (!container.is(e.target) && container.has(e.target).length === 0) 
    {
        $("#first-section").removeClass("blur-effect");
        $(".blur-overlay").css("visibility", "hidden").show().fadeOut("slow");
    }
});

// Filterizr options and init

// Default options
var options = {
   animationDuration: 0.5, // in seconds
   filter: 'all', // Initial filter
   callbacks: { 
      onFilteringStart: function() { },
      onFilteringEnd: function() { },
      onShufflingStart: function() { },
      onShufflingEnd: function() { },
      onSortingStart: function() { },
      onSortingEnd: function() { }
   },
   controlsSelector: '', // Selector for custom controls
   delay: 0, // Transition delay in ms
   delayMode: 'progressive', // 'progressive' or 'alternate'
   easing: 'ease-out',
   filterOutCss: { // Filtering out animation
      opacity: 0,
      transform: 'scale(0.5)'
   },
   filterInCss: { // Filtering in animation
      opacity: 0,
      transform: 'scale(1)'
   },
   layout: 'sameSize', // See layouts
   multifilterLogicalOperator: 'or',
   selector: '.filtr-container',
   setupControls: true // Should be false if controlsSelector is set 
} 
// You can override any of these options and then call...
var filterizd = $('.filtr-container').filterizr(options);

// Input fields on focus make text vanish
var inputFields = $('input[type=text], textarea');
    inputFields.focus(function(e) {
        if (e.target.value == e.target.defaultValue)
            e.target.value = '';
    });
    inputFields.blur(function(e) {
        if (e.target.value == '')
            e.target.value = e.target.defaultValue;
    });

// Smooth scrolling to all links
$(document).ready(function () {
    // Add smooth scrolling to all links
    $("a").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});