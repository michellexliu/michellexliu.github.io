/*
General Notes and Coming Improvements:
Why are there errors? Even though the code functions perfectly?
-Dont forget to remove this when the website is complete!-
*/
// $(document).ready(function (){
//     $(window).scroll(function(){
//         var scroll = $(window).scrollTop();
//         if(scroll > 100){
//             $("nav").removeClass("navTransparent");
//             $("nav").addClass("navColor");   
//         }
//         else{
//             $("nav").removeClass("navColor");
//             $("nav").addClass("navTransparent");
//         }
//     })
//     $(document).on('click', 'a[href^="#"]', function (event) {
//         event.preventDefault();
//         $('html, body').animate({
//             scrollTop: $($.attr(this, 'href')).offset().top
//         }, 500);
//     });
// });

$(document).ready(function(){
    $(".center").slick({
        dots: true,
        infinite: true,
        centerMode: true,
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 1250,
        focusOnSelect: true,
        slidesToScroll: 3,
        responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 3
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
          }
        }
      ]
    });
});