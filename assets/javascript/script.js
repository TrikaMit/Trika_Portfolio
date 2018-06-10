$(document).ready(function(){
    //scrolls to area
    $('#about').click(function() {
        $('html, body').animate({
            scrollTop: $('#aboutTitle').offset().top
          }, 1000)
    });
    $('#projects').click(function() {
        $('html, body').animate({
            scrollTop: $('#projectsTitle').offset().top
          }, 1000)
    });
    $('#contact').click(function() {
        $('html, body').animate({
            scrollTop: $('#contactTitle').offset().top
          }, 1000)
    });
    $('.upKey').click(function() {
        $('html, body').animate({
            scrollTop: $('.display-1').offset().top
          }, 1000)
          
    });
    


     





});
