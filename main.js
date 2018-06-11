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
$('.story-thumbnail').on('click', 'a', function (event) {
    var testimonialName = $(this).parent().attr('id');
    console.log(testimonialName);
})
