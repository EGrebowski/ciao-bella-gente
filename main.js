// navigation links

// Home
$('#logo').on('click', function (event) {
    $('html, body').animate({
        scrollTop: 0,
    }, 'fast')
})

// About Leona
$('#nav-about').on('click', function (event) {
    $('html, body').animate({
        scrollTop: $("section#about").offset().top
    });
})

// Lessons
$('#nav-lessons').on('click', function (event) {
    $('html, body').animate({
        scrollTop: $("section#italian-lessons").offset().top
    });
})

// Testimonials
$('#nav-testimonials').on('click', function (event) {
    $('html, body').animate({
        scrollTop: $("section#testimonials").offset().top
    });
})

// Contact
$('#nav-contact').on('click', function (event) {
    $('html, body').animate({
        scrollTop: $("section#contact").offset().top
    });
})


// show and hide full testimonials
$(document).ready(function (event) {
    $(".testimonial-extended").hide();
});

$('.story-thumbnail').on('click', 'p.read-more', function (event) {
    var testimonialName = $(this).parent().attr('id');
    console.log(testimonialName);
    var testimonialFull = testimonialName + '-full';
    console.log(testimonialFull);
    $('#' + testimonialFull).show();
})

$('.testimonial-extended').on('click', 'i', function (event) {
    $(this).parent().hide();
})
