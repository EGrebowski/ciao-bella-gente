// navigation links

// Home
$('#logo, #nav-home').on('click', function (event) {
    $('html, body').animate({
        scrollTop: 0,
    }, 'fast')
    $('.nav-buttons').removeClass('responsive');
    $('nav li').removeClass('responsive');
})

// About Leona
$('#nav-about').on('click', function (event) {
    $('html, body').animate({
        scrollTop: $("section#about").offset().top
    });
    $('.nav-buttons').removeClass('responsive');
    $('nav li').removeClass('responsive');
})

// Lessons
$('#nav-lessons').on('click', function (event) {
    $('html, body').animate({
        scrollTop: $("section#italian-lessons").offset().top
    });
    $('.nav-buttons').removeClass('responsive');
    $('nav li').removeClass('responsive');
})

// Testimonials
$('#nav-testimonials').on('click', function (event) {
    $('html, body').animate({
        scrollTop: $("section#testimonials").offset().top
    });
    $('.nav-buttons').removeClass('responsive');
    $('nav li').removeClass('responsive');
})

// Contact
$('#nav-contact').on('click', function (event) {
    $('html, body').animate({
        scrollTop: $("section#contact").offset().top
    });
    $('.nav-buttons').removeClass('responsive');
    $('nav li').removeClass('responsive');
})

// links to testimonials in About section
$('.text-accent').on('click', function (event) {
    $('html, body').animate({
        scrollTop: $("section#testimonials").offset().top
    });
})


// Drop-down menu for responsive navbar
$('.hamburger').on('click', function (event) {
    $('.nav-buttons').toggleClass('responsive');
    $('nav li').toggleClass('responsive');
})

$(window).resize(function () {
    if ($(window).width() > 640) {
        $('.nav-buttons').removeClass('responsive');
        $('nav li').removeClass('responsive');
    }
});


// show and hide full testimonials
$(document).ready(function (event) {
    $(".testimonial-extended").hide();
});

$('.story-thumbnail').on('click', 'p.read-more', function (event) {
    $(".testimonial-extended").hide();
    var testimonialName = $(this).parent().attr('id');
    console.log(testimonialName);
    var testimonialFull = testimonialName + '-full';
    console.log(testimonialFull);
    $('#' + testimonialFull).show();
    $('html, body').animate({
        scrollTop: $(".testimonial-extended-wrapper").offset().top
    });
});

$('.testimonial-extended').on('click', 'i', function (event) {
    $(this).parent().parent().hide();
});

// show and hide full program descriptions
$(document).ready(function (event) {
    $("#program-book-club, #program-travel-course, #program-overseas-immersion, #program-dinner-entertainment, #program-private-lessons").hide().removeClass("d-flex");
});

$('.ital-club').on('click', function (event) {
    $(".program-extended, .program-book-club").hide().removeClass("d-flex");
    $('#program-language-course').show().addClass("d-flex");
    $('.card-1').removeClass('active');
    $(this).addClass('active');
    $('html, body').animate({
        scrollTop: $("#program-language-course").offset().top - 100
    });
});

$('.book-club').on('click', function (event) {
    $(".program-extended, .program-book-club").hide().removeClass("d-flex");
    $('#program-book-club').show().addClass("d-flex");
    $('.card-1').removeClass('active');
    $(this).addClass('active');
    $('html, body').animate({
        scrollTop: $("#program-book-club").offset().top - 100
    });
});

$('.travel-club').on('click', function (event) {
    $(".program-extended, .program-book-club").hide().removeClass("d-flex");
    $('#program-travel-course').show().addClass("d-flex");
    $('.card-1').removeClass('active');
    $(this).addClass('active');
    $('html, body').animate({
        scrollTop: $("#program-travel-course").offset().top - 100
    });
});

$('.overseas-club').on('click', function (event) {
    $(".program-extended, .program-book-club").hide().removeClass("d-flex");
    $('#program-overseas-immersion').show().addClass("d-flex");
    $('.card-1').removeClass('active');
    $(this).addClass('active');
    $('html, body').animate({
        scrollTop: $("#program-overseas-immersion").offset().top - 100
    });
});

$('.food-club').on('click', function (event) {
    $(".program-extended, .program-book-club").hide().removeClass("d-flex");
    $('#program-dinner-entertainment').show().addClass("d-flex");
    $('.card-1').removeClass('active');
    $(this).addClass('active');
    $('html, body').animate({
        scrollTop: $("#program-dinner-entertainment").offset().top - 100
    });
});

$('.private-club').on('click', function (event) {
    $(".program-extended, .program-book-club").hide().removeClass("d-flex");
    $('#program-private-lessons').show().addClass("d-flex");
    $('.card-1').removeClass('active');
    $(this).addClass('active');
    $('html, body').animate({
        scrollTop: $("#program-private-lessons").offset().top - 100
    });
});

// Global autoplay timer for desktop carousel
var autoplayTimer = null;
var previousIsMobile = null;

// Handle hero carousel indicators and slides for desktop vs mobile
function setupHeroCarousel() {
    var isMobile = $(window).width() <= 768;
    var indicatorsContainer = $('#heroCarouselIndicators');
    
    // Only recreate if container is empty or structure changed
    if (indicatorsContainer.children().length !== 5) {
        indicatorsContainer.empty();
        
        // Create all 5 indicators (Bootstrap needs them all to exist in DOM)
        // They must be in order: 0, 1, 2, 3, 4
        for (var i = 0; i < 5; i++) {
            var button = $('<button>')
                .attr('type', 'button')
                .attr('data-bs-target', '#heroCarousel')
                .attr('data-bs-slide-to', i)
                .attr('aria-label', 'Slide ' + (i + 1))
                .addClass('carousel-indicator-button'); // Add a class for easy selection
            
            if (i === 0) {
                button.addClass('active').attr('aria-current', 'true');
            }
            
            indicatorsContainer.append(button);
        }
    }
    
    // Update visibility based on screen size
    // Important: Keep all indicators in DOM and accessible, just hide visually
    indicatorsContainer.find('button').each(function(index) {
        var $btn = $(this);
        $btn.removeClass('mobile-indicator desktop-indicator');
        
        if (isMobile) {
            $btn.addClass('mobile-indicator');
            $btn.css('display', ''); // Show all on mobile
        } else {
            $btn.addClass('desktop-indicator');
            // Hide indicators for slides 1 and 4 on desktop using visibility instead of display
            // This keeps them in the DOM so Bootstrap can find them
            if (index === 1 || index === 4) {
                $btn.css({
                    'visibility': 'hidden',
                    'position': 'absolute',
                    'opacity': '0',
                    'pointer-events': 'none'
                });
            } else {
                $btn.css({
                    'visibility': 'visible',
                    'position': 'static',
                    'opacity': '1',
                    'pointer-events': 'auto',
                    'display': ''
                });
            }
        }
    });
}

// Handle carousel navigation to skip mobile-only slides on desktop
function handleCarouselNavigation() {
    var isMobile = $(window).width() <= 768;
    var carouselElement = document.querySelector('#heroCarousel');
    
    if (!isMobile && carouselElement) {
        // Desktop slides: 0 (grouped), 2 (hero-4), 3 (hero-5)
        var desktopSlides = [0, 2, 3];
        
        // Override prev/next buttons
        $('#heroCarousel .carousel-control-prev, #heroCarousel .carousel-control-next').off('click').on('click', function(e) {
            e.preventDefault();
            var carousel = bootstrap.Carousel.getInstance(carouselElement);
            var currentSlide = parseInt($('#heroCarousel .carousel-item.active').attr('data-slide'));
            var currentIndex = desktopSlides.indexOf(currentSlide);
            var isNext = $(this).hasClass('carousel-control-next');
            
            if (isNext) {
                // Next: move to next desktop slide
                var nextIndex = (currentIndex + 1) % desktopSlides.length;
                carousel.to(desktopSlides[nextIndex]);
            } else {
                // Prev: move to previous desktop slide
                var prevIndex = (currentIndex - 1 + desktopSlides.length) % desktopSlides.length;
                carousel.to(desktopSlides[prevIndex]);
            }
        });
        
        // Override indicator clicks
        $('#heroCarouselIndicators button').off('click').on('click', function(e) {
            e.preventDefault();
            var slideIndex = parseInt($(this).attr('data-bs-slide-to'));
            // Only allow navigation to desktop slides
            if (desktopSlides.indexOf(slideIndex) !== -1) {
                var carousel = bootstrap.Carousel.getInstance(carouselElement);
                carousel.to(slideIndex);
            }
        });
    } else {
        // Mobile: use default Bootstrap behavior
        $('#heroCarousel .carousel-control-prev, #heroCarousel .carousel-control-next').off('click');
        $('#heroCarouselIndicators button').off('click');
    }
}

// Manually update indicator active states
function updateIndicators(activeSlideIndex) {
    var isMobile = $(window).width() <= 768;
    $('#heroCarouselIndicators button').each(function() {
        var slideIndex = parseInt($(this).attr('data-bs-slide-to'));
        $(this).removeClass('active').removeAttr('aria-current');
        
        if (isMobile) {
            // Mobile: show all indicators
            if (slideIndex === activeSlideIndex) {
                $(this).addClass('active').attr('aria-current', 'true');
            }
        } else {
            // Desktop: only update visible indicators (0, 2, 3)
            var desktopSlides = [0, 2, 3];
            var desktopIndex = desktopSlides.indexOf(activeSlideIndex);
            if (desktopIndex !== -1 && slideIndex === activeSlideIndex) {
                $(this).addClass('active').attr('aria-current', 'true');
            }
        }
    });
}

// Prevent Bootstrap from auto-managing indicators by removing the indicators container
// from Bootstrap's control, then we'll manage it manually
function preventBootstrapIndicatorManagement() {
    var indicatorsContainer = document.querySelector('#heroCarouselIndicators');
    if (indicatorsContainer) {
        // Remove the indicators container from the carousel's expected structure
        // Bootstrap looks for .carousel-indicators, so we'll keep the class but manage it ourselves
        // Actually, we can't easily prevent Bootstrap from managing it, so we'll ensure all indicators exist
    }
}

// Setup on page load and window resize
$(document).ready(function() {
    // Initialize previousIsMobile for resize detection
    previousIsMobile = $(window).width() <= 768;
    
    // Create indicators first, before initializing carousel
    setupHeroCarousel();
    
    // Initialize carousel
    var carouselElement = document.querySelector('#heroCarousel');
    if (carouselElement) {
        var carousel = bootstrap.Carousel.getInstance(carouselElement);
        if (carousel) {
            carousel.dispose();
        }
        
        var isMobile = $(window).width() <= 768;
        var carouselOptions = {
            ride: isMobile ? 'carousel' : false, // Disable autoplay on desktop, we'll handle it manually
            interval: 5000,
            wrap: true
        };
        
        // Patch Bootstrap's Carousel prototype to handle missing indicators gracefully
        var CarouselPrototype = bootstrap.Carousel.prototype;
        if (CarouselPrototype && !CarouselPrototype._setActiveIndicatorElementPatched) {
            var originalSetActive = CarouselPrototype._setActiveIndicatorElement;
            CarouselPrototype._setActiveIndicatorElement = function(element) {
                if (element && element.classList) {
                    try {
                        return originalSetActive.call(this, element);
                    } catch (e) {
                        // Silently handle errors
                        return;
                    }
                }
                // If element is null or doesn't have classList, just return without error
                return;
            };
            
            // Also patch _getActiveIndicator to ensure it never returns null
            if (CarouselPrototype._getActiveIndicator) {
                var originalGetActive = CarouselPrototype._getActiveIndicator;
                CarouselPrototype._getActiveIndicator = function() {
                    try {
                        var indicator = originalGetActive.call(this);
                        if (!indicator) {
                            // If no indicator found, try to find any indicator
                            var indicators = this._element.querySelectorAll('.carousel-indicators button');
                            if (indicators.length > 0) {
                                return indicators[0];
                            }
                        }
                        return indicator;
                    } catch (e) {
                        // Return first available indicator or null
                        try {
                            var indicators = this._element.querySelectorAll('.carousel-indicators button');
                            return indicators.length > 0 ? indicators[0] : null;
                        } catch (err) {
                            return null;
                        }
                    }
                };
            }
            
            CarouselPrototype._setActiveIndicatorElementPatched = true;
        }
        
        // Create carousel instance with error handling
        var newCarousel;
        try {
            newCarousel = new bootstrap.Carousel(carouselElement, carouselOptions);
        } catch (e) {
            // Try again without autoplay
            carouselOptions.ride = false;
            newCarousel = new bootstrap.Carousel(carouselElement, carouselOptions);
        }
        
        // Custom autoplay for desktop (only cycles through desktop slides)
        function startDesktopAutoplay() {
            if (autoplayTimer) clearInterval(autoplayTimer);
            var isMobile = $(window).width() <= 768;
            if (!isMobile) {
                autoplayTimer = setInterval(function() {
                    var carousel = bootstrap.Carousel.getInstance(carouselElement);
                    if (carousel) {
                        var currentSlide = parseInt($('#heroCarousel .carousel-item.active').attr('data-slide')) || 0;
                        var desktopSlides = [0, 2, 3];
                        var currentIndex = desktopSlides.indexOf(currentSlide);
                        var nextIndex = (currentIndex + 1) % desktopSlides.length;
                        carousel.to(desktopSlides[nextIndex]);
                    }
                }, 5000);
            }
        }
        
        // Handle slide changes and update indicators manually
        carouselElement.addEventListener('slid.bs.carousel', function() {
            var currentSlide = parseInt($('#heroCarousel .carousel-item.active').attr('data-slide')) || 0;
            var isMobile = $(window).width() <= 768;
            
            updateIndicators(currentSlide);
            
            // Restart autoplay timer on desktop
            if (!isMobile) {
                startDesktopAutoplay();
            }
            
            // Handle navigation on desktop - if we somehow ended up on a mobile-only slide, jump to next desktop slide
            if (!isMobile) {
                var desktopSlides = [0, 2, 3];
                var currentIndex = desktopSlides.indexOf(currentSlide);
                
                // If we're on a mobile-only slide (1 or 4), jump to next desktop slide
                if (currentIndex === -1) {
                    var nextIndex = 0;
                    for (var i = 0; i < desktopSlides.length; i++) {
                        if (desktopSlides[i] > currentSlide) {
                            nextIndex = i;
                            break;
                        }
                    }
                    setTimeout(function() {
                        var carousel = bootstrap.Carousel.getInstance(carouselElement);
                        if (carousel) {
                            carousel.to(desktopSlides[nextIndex]);
                        }
                    }, 50);
                }
            }
        });
        
        // Start autoplay on desktop
        if (!isMobile) {
            startDesktopAutoplay();
        }
        
        // Initial indicator update
        updateIndicators(0);
        
        handleCarouselNavigation();
    }
});

var resizeTimer;
$(window).on('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
        var isMobile = $(window).width() <= 768;
        var carouselElement = document.querySelector('#heroCarousel');
        
        // Only reinitialize if switching between mobile/desktop
        var modeChanged = previousIsMobile !== null && previousIsMobile !== isMobile;
        previousIsMobile = isMobile;
        
        if (carouselElement) {
            // Clear any existing autoplay
            if (autoplayTimer) {
                clearInterval(autoplayTimer);
                autoplayTimer = null;
            }
            
            var carousel = bootstrap.Carousel.getInstance(carouselElement);
            if (carousel) {
                // Update carousel options
                carousel._config.ride = isMobile ? 'carousel' : false;
                
                // If switching modes, ensure we're on a valid slide
                if (modeChanged) {
                    var currentSlide = parseInt($('#heroCarousel .carousel-item.active').attr('data-slide')) || 0;
                    
                    if (!isMobile) {
                        // Switching to desktop - ensure we're on a desktop slide (0, 2, or 3)
                        var desktopSlides = [0, 2, 3];
                        if (desktopSlides.indexOf(currentSlide) === -1) {
                            // On a mobile-only slide, jump to first desktop slide
                            carousel.to(0);
                        }
                    }
                    // On mobile, all slides are valid, so no adjustment needed
                }
                
                // Start desktop autoplay if needed
                if (!isMobile) {
                    var desktopSlides = [0, 2, 3];
                    autoplayTimer = setInterval(function() {
                        var currentSlide = parseInt($('#heroCarousel .carousel-item.active').attr('data-slide')) || 0;
                        var currentIndex = desktopSlides.indexOf(currentSlide);
                        if (currentIndex !== -1) {
                            var nextIndex = (currentIndex + 1) % desktopSlides.length;
                            carousel.to(desktopSlides[nextIndex]);
                        }
                    }, 5000);
                }
            }
        }
        
        setupHeroCarousel();
        handleCarouselNavigation();
        
        // Update indicators after resize
        var currentSlide = parseInt($('#heroCarousel .carousel-item.active').attr('data-slide')) || 0;
        updateIndicators(currentSlide);
    }, 250);
});
