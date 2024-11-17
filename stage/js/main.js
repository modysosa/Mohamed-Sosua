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

  // Drop down menu
  $('#notifications').on('click', function() {
      let expanded = $(this).attr('aria-expanded') === 'true';
      $(this).attr('aria-expanded', !expanded);
      $(this).next('.dropdown-menu').toggleClass('show');
  });

  $('#usermenu').on('click', function() {
      let expanded = $(this).attr('aria-expanded') === 'true';
      $(this).attr('aria-expanded', !expanded);
      $(this).next('.dropdown-menu').toggleClass('show');
  });

  // Open / close fullscreen
  $(".toggle-fullscreen").on("click", function(){
    $(this).toggleClass("full-screen");
    if($(this).hasClass("full-screen")){ // page now is full screen
        openFullscreen();
    } else {  // page is not full screen
        closeFullscreen();
    }
  });

  // Toggle Settings
  $(".toggle-settings").on("click", function(){
    $(this).find("i").toggleClass("fa-spin")
    $(this).parent().toggleClass("hide-settings")
  });

  // Switch Colors
  var themesClasses = [];
  $(".color-otpions li").each(function(){
    themesClasses.push($(this).data("theme"));
  });
  
  $(".color-otpions li").on("click", function(){
    $(this).addClass("active").siblings().removeClass("active");
    $("body").removeClass(themesClasses.join(" ")).addClass($(this).data("theme"));
  });

  // Switch Fonts
  var fontClases = [];
  $(".font-options select option").each(function(){
    fontClases.push($(this).val());
  });
  
  $(".font-options select").on("change", function(){
    console.log($(this).find("option:selected").val());
    $("body").removeClass(fontClases.join(" ")).addClass($(this).find("option:selected").val());
  });

  // Weather Functionality
  var Ip = 'https://ipinfo.io/json';

  $.getJSON(Ip, function(data) {
      var city = encodeURIComponent(data.city);
      var region = encodeURIComponent(data.region);
      var country = encodeURIComponent(data.country);
      var KEY = '387e4170b07906a6eea25f6cbf94c084'; // Use your own API key
      var URL = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + ',' + region + ',' + country + '&appid=' + KEY;

      $.getJSON(URL, function(data) {
          var type = data.weather[0].main;  //array 0 index
          var id = data.weather[0].id; //array 0 index
          var city = data.name;

          var tempCel = Math.round(data.main.temp - 273.15);
          var tempC = tempCel + '°C';
          var weather = data.weather[0].description;
          var tempF = Math.round(tempCel * (9 / 5) + 32) + '°F';
          var icon = data.weather[0].icon;
          var tempBool = false; // Set default to Celsius

          // Output data to display on the page
          $('#city').text(city);
          $('#state').text(region);
          $('#temp').text(tempC); // Show Celsius by default
          var weatherIcon = 'http://openweathermap.org/img/w/' + icon + '.png';
          $('#wIcon').html('<img src="' + weatherIcon + '">');

          // Toggle to switch between C and F temperature
          $('#btnToggle').on('click', function() {
              var temp = $('#temp');
              if (tempBool) {
                  temp.html(tempC);
                  tempBool = false;
              } else {
                  temp.html(tempF);
                  tempBool = true;
              }
          }); // End of toggle function
      });
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
