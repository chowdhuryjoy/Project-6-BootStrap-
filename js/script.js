$(document).ready(function(){
    $('.background-img').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows:true,
        prevArrow:".left",
        nextArrow:".right"
      });


      new VenoBox({
        selector: '.my-image-links',
        numeration: true,
        infinigall: true,
        share: true,
        spinner: 'rotating-plane'
      });


      
      $('.service-wrapper').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        // autoplay: true,
        autoplaySpeed: 1000,
        vertical:true,
        arrows:true,
        centerMode:true,
        centerPadding:0,
        Infinity:true,
        prevArrow:".down",
        nextArrow:".up"
     });

     $('.test-slider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      // autoplay: true,
      autoplaySpeed: 1000,
      vertical:true,
      arrows:true,
      centerMode:true,
      centerPadding:0,
      // Infinity:true,
      prevArrow:".do",
      nextArrow:".ups",
      asNavFor: '.details-slider'
   });

   $('.details-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 1000,
    vertical:true,
    arrows:true,
    centerMode:true,
    centerPadding:0,
    // Infinity:true,
    prevArrow:".do",
    nextArrow:".ups",
    asNavFor: '.test-slider'
 });
   
     



})


