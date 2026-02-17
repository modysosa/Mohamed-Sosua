$(function() {
  "use strict";
  
  // Sidebar toggle
  $(".toggle-sidebar").on("click", function() {
      $('.content-area, .sidebar').toggleClass("no-sidebar");
  });

  // Toggle submenu
  $(".toggle-submenu").on("click", function(){
      $(this).find(".fa-angle-right").toggleClass("down");
      $(this).next(".child-links").slideToggle();
  });

  // Dropdown menu for notifications
  $('#notifications').on('click', function() {
      let expanded = $(this).attr('aria-expanded') === 'true';
      $(this).attr('aria-expanded', !expanded);
      $(this).next('.dropdown-menu').toggleClass('show');
  });

  // Dropdown menu for user menu
  $('#usermenu').on('click', function() {
      let expanded = $(this).attr('aria-expanded') === 'true';
      $(this).attr('aria-expanded', !expanded);
      $(this).next('.dropdown-menu').toggleClass('show');
  });

  // Fullscreen toggle
  $(".toggle-fullscreen").on("click", function() {
    $(this).toggleClass("full-screen");
    if($(this).hasClass("full-screen")) { 
        openFullscreen();
    } else {  
        closeFullscreen();
    }
  });

  // Toggle settings
  $(".toggle-settings").on("click", function() {
    $(this).find("i").toggleClass("fa-spin");
    $(this).parent().toggleClass("hide-settings");
  });

  // Switch colors
  var themesClasses = [];
  $(".color-options li").each(function() {
    themesClasses.push($(this).data("theme"));
  });
  
  $(".color-options li").on("click", function() {
    $(this).addClass("active").siblings().removeClass("active");
    $("body").removeClass(themesClasses.join(" ")).addClass($(this).data("theme"));
  });

  // Switch fonts
  var fontClasses = [];
  $(".font-options select option").each(function() {
    fontClasses.push($(this).val());
  });
  
  $(".font-options select").on("change", function() {
    console.log($(this).find("option:selected").val());
    $("body").removeClass(fontClasses.join(" ")).addClass($(this).find("option:selected").val());
  });

  // Weather functionality
  var Ip = 'https://ipinfo.io/json';

  $.getJSON(Ip, function(data) {
      var city = encodeURIComponent(data.city);
      var region = encodeURIComponent(data.region);
      var country = encodeURIComponent(data.country);
      var KEY = '387e4170b07906a6eea25f6cbf94c084'; // Use your own API key
      var URL = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + ',' + region + ',' + country + '&appid=' + KEY;

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
          var weatherIcon = 'https://openweathermap.org/img/w/' + icon + '.png';
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

  function loadGoldPrice() {
    var GOLD_API_URL = 'https://api.gold-api.com/price/XAU';
    $('#gold-price').text('Loading...');
    $('#gold-updated').text('');

    $.getJSON(GOLD_API_URL)
      .done(function(data) {
        if (data && typeof data.price === 'number') {
          $('#gold-price').text(data.price.toFixed(2) + ' USD');
        } else {
          $('#gold-price').text('Unknown price');
        }

        if (data && data.updatedAtReadable) {
          $('#gold-updated').text('Updated: ' + data.updatedAtReadable);
        } else if (data && data.updatedAt) {
          $('#gold-updated').text('Updated at: ' + data.updatedAt);
        }

        var details = $('#gold-details');
        if (details.length && data && typeof data === 'object') {
          details.empty();
          Object.keys(data).forEach(function(key) {
            var value = data[key];
            if (value === null || typeof value === 'object') {
              return;
            }
            var li = $('<li></li>');
            li.append($('<strong></strong>').text(key + ': '));
            li.append(document.createTextNode(value));
            details.append(li);
          });
        }
      })
      .fail(function() {
        $('#gold-price').text('Failed to load gold price');
      });
  }

  loadGoldPrice();

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
