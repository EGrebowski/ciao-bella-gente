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
    $("#program-book-club").hide().removeClass("d-flex");
});

$('.ital-club').on('click', function (event) {
    $("#program-book-club").hide().removeClass("d-flex");
    $('#program-language-course').show().addClass("d-flex");
});

$('.book-club').on('click', function (event) {
    console.log('book club clicked');
    $("#program-language-course").hide().removeClass("d-flex");
    $('#program-book-club').show().addClass("d-flex");
});
