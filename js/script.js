$(document).ready(function () {
     let animationTime = 800
 
     function NextSlide() {
         let currentSlide = $(".slider").find("figure:first");
         let lastSlide = $(".slider").find("figure:last");
         let width = currentSlide.width();
         currentSlide.animate({
             marginLeft: -width
         }, animationTime, function () {
             lastSlide.after(currentSlide);
             currentSlide.css({
                 marginLeft: 0
             });
         });
     }
 
     function PrevSlide() {
         let currentSlide = $(".slider").find("figure:first");
         let lastSlide = $(".slider").find("figure:last");
         let width = currentSlide.width();
         currentSlide.before(lastSlide);
         lastSlide.css({
             marginLeft: -width
         });
         lastSlide.animate({
             marginLeft: 0
         }, animationTime);
     }
     $(".arrow-left").click(NextSlide);
     $(".arrow-right").click(PrevSlide);
 });


 $(document).ready(function () {

    let images = window.document.querySelectorAll('.img-frame');
    
    for (var i = 0; i < images.length; i++) {

        images[i].addEventListener("click", function(event){
            zoom(event);
        });
    }

});

 $(document).ready(function () {
    
    window.document.querySelector("#about").addEventListener("click", function(event){ 
        event.preventdefault;
        $('#hamburger').toggleClass('hamburger__close');
        $('#side-nav').toggleClass('side-nav__display side-nav__hidden');
    });

});

function zoom (event) {
    let imageFrame = event.target.closest(".img-frame");

    $(imageFrame).toggleClass('zoom');
}



$(document).ready(function () {
    $("#hamburger").click(function () {

        $('#side-nav').toggleClass('side-nav__display side-nav__hidden');
                
    });

});

$(document).ready(function () {
    $("#hamburger").click(function () {

        $('#hamburger').toggleClass('hamburger__close');
                
    });

});


/* Change text on hover */

$(document).ready(function () {
    $("#changeText").hover(function () {

        window.document.querySelector('#changeText').innerHTML = 'Welcome';
                
    });

    $("#changeText").mouseleave(function(){
        
        window.document.querySelector('#changeText').innerHTML = 'Hello';
    });

});



