/**
* Scroll web page learned from
* http://untame.net/2013/04/how-to-integrate-simple-parallax-with-twitter-bootstrap/
*/
$(document).ready(function(){
   $window = $(window);
 
   $('section[data-type="background"]').each(function(){
     var $scroll = $(this);
                     
      $(window).scroll(function() {
        var yPos = -($window.scrollTop() / $scroll.data('speed')); 
         
        var coords = '50% '+ yPos + 'px';
 
        $scroll.css({ backgroundPosition: coords });    
      }); 
   });  
}); 