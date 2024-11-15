$(function(){
  "use strict";
  $(".toggle-sidebar").on("click", function() {
      $('.content-area, .sidebar').toggleClass("no-sidebar");
  });

  // Toggle Submenu
  $(".toggle-submenu").on("click", function(){
      $(this).find(".fa-angle-right").toggleClass("down");
      $(this).next(".child-links").slideToggle();
  });

  $(document).ready(function() {
      $('#notifications').on('click', function() {
          $(this).next('.dropdown-menu').toggleClass('show');
      });
  });
  // open / close fulscreen
  $(".toggle-fullscreen").on("click", function(){
    $(this).toggleClass("full-screen");
    if($(this).hasClass("full-screen")){ // page now is full screen
        openFullscreen();
    } else{  // page is not full screen
        closeFullscreen();
    }
  });
});
/* Get the element you want displayed in fullscreen */ 
var elem = document.documentElement;

/* Function to open fullscreen mode */
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) { /* Firefox */
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
}

/* Function to close fullscreen mode */
function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) { /* Firefox */
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) { /* Safari */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { /* IE11 */
    document.msExitFullscreen();
  }
}
