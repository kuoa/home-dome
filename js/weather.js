function display_weather() {

    display_loading('weather-loading', 'weather-name');

    $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?',
        data: {
            units: 'metric',
            id: openweather_auth_data.id,
            appid: openweather_auth_data.api_key
        },
        crossDomain: true,

        success: display_weather_forecast
    })
}


function display_weather_forecast(data){
    var html_code = '<div class="list-group-item">' +

        '<h5>' + data.name + ' | ' + data.main.temp +'°C</h5>' +
        '<h6>'+ data.weather[0].main + ' [ ' + data.weather[0].description + ' ]</h6>' +
        '</div>';

    remove_loading('weather-loading');
    $('#weather-panel').append(html_code).show('slow');
}
