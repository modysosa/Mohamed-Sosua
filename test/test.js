$(document).ready(function() {
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
