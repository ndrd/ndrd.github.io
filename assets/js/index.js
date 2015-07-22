/**
* Scroll web page learned from
* http://untame.net/2013/04/how-to-integrate-simple-parallax-with-twitter-bootstrap/
*/
$(document).ready(function(){
  $('#block').vide({
     'mp4': 'video/ocean',
     'webm': 'video/ocean',
     'ogv': 'video/ocean',
     'poster': 'video/ocean',
   });

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