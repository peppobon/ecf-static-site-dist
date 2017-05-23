'use strict';

$(document).ready(function() {

    $(document).foundation();

    try {
        $("#owl-container").owlCarousel({
            singleItem: true,
            //autoPlay: 5000,
            stopOnHover: true,
            autoHeight: true,
        });
    }
    catch (e){
        //
    }



});