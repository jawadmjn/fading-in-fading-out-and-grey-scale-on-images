$(document).ready(function(){

  $(".testimonial_image").click(function(){
        var box_id = $(this).attr("id");
        $(".testimonial_text").hide();
        $(".testimonial_image").fadeTo(600, 0.3);
        $('.testimonial_image').css({
            "filter": "grayscale(100%)",
            "-webkit-filter": "grayscale(100%)"
        });

        $('#'+box_id).fadeTo(600, 1);
        $('.'+box_id+'_text').show();

        $('#'+box_id).css({
            "filter": "grayscale(0%)",
            "-webkit-filter": "grayscale(0%)"
        });
    });

});