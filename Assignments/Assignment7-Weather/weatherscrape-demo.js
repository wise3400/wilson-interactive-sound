const maxApi = require("max-api");
const weather = require('openweather-apis');
weather.setAPPID("1b0a6e545914ac570a8519f74347368f");
weather.setLang('en');
weather.setUnits('imperial');

maxApi.addHandler("denver", () => {
    weather.setCity('denver');
    weather.getAllWeather(function(err, JSONObj){
        maxApi.outlet(JSONObj);
    });
});

maxApi.addHandler("los angeles", () => {
    weather.setCity('los angeles');
    weather.getAllWeather(function(err, JSONObj){
        maxApi.outlet(JSONObj);
    });
});

maxApi.addHandler("kuala lumpur", () => {
    weather.setCity('kuala lumpur');
    weather.getAllWeather(function(err, JSONObj){
        maxApi.outlet(JSONObj);
    });
});

maxApi.addHandler("greenland", () => {
    weather.setCity('greenland');
    weather.getAllWeather(function(err, JSONObj){
        maxApi.outlet(JSONObj);
    });
});