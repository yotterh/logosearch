$(document).ready(function(){

    var form = $('form');

    form.submit(function(e){
        e.preventDefault();

        var images = $('.logos>img').get();
        $.each(images, function(i, image){
            $(image).addClass('grayscale').removeClass('color');
        });

        var program = $('#program option:selected').val();
        var education = $('#education option:selected').val();

        var classes = ".";

        if (program && education) {
            classes += program + "." + education;
        } else if (program) {
            classes += program;
        } else if (education) {
            classes += education;
        } else {
            classes += "img";
        }
        console.log(classes);

        $(classes).removeClass('grayscale').addClass('color');

    });


});