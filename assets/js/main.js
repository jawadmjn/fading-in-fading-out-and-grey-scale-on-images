$(document).ready(function(){

  $(".testimonial_image").click(function(){
        // save id of div the image is clicked
        var box_id = $(this).attr("id");

        // hide all testimonials text using class
        $(".testimonial_text").hide();

        // Fade out authors images using class
        $(".testimonial_image").fadeTo(600, 0.3);

        // Grayscale authors images using class
        $('.testimonial_image').css({
            "filter": "grayscale(100%)",
            "-webkit-filter": "grayscale(100%)"
        });

        // Fade in author's images which is clicked using id
        $('#'+box_id).fadeTo(600, 1);

        // show author's testimonials text using id
        $('.'+box_id+'_text').show();

        // remove Grayscale from clicked author's images using id
        $('#'+box_id).css({
            "filter": "grayscale(0%)",
            "-webkit-filter": "grayscale(0%)"
        });
    });

});