var weatherData = {
    "dayandtime" : "2014-10-17T14:42:39Z",
    "lang" : "en-US",
    "location" : {
        "city" : "Orlando",
        "country" : "United States",
        "region" : "FL"
    },
    "units": {
        "distance" : "mi",
        "pressure" : "ins",
        "speed" : "mph",
        "temperature" : "F",
    },
    "wind" : {
        "chill" : "76",
        "direction" : "360",
        "speed" : "5"
    },
    "atmosphere" : {
        "humidity": "48",
        "pressure" : "29.65",
        "rising" : "0",
        "visibility" : "10",
    },
    "astronomy" : {
        "sunrise" : "7.26 am",
        "sunset" : "6.51 pm"
    },
    "condition" : {
        "code": "33",
        "date" : "Fri, 17 Oct 2014 5:53 am EST",
        "temp" : "76",
        "text" : "Fair"
    },
    "forecast": [
        {"code" : "30", "date" : "17 Oct 2014", "day": "Friday", "high": "80", "low": "62", "text": "sunny"},
        {"code" : "30", "date" : "18 Oct 2014", "day": "Saturday", "high": "82", "low": "63", "text": "Partly Cloudy"},
        {"code" : "30", "date" : "9 Oct 2014", "day": "Sunday", "high": "85", "low": "65", "text": "Partly Cloudy"},
        {"code" : "30", "date" : "20 Aug 2020", "day": "Monday", "high": "80", "low": "75", "text": "Sunny"},
        {"code" : "30", "date" : "21 Aug 2020", "day": "Tuesday", "high": "82", "low": "75", "text": "Sunny"},
        {"code" : "30", "date" : "22 Aug 2020", "day" : "Thusday", "high": "83", "low": "75", "text": "Sunny"}

    ]
}
console.log(weatherData.forecast[2].day);

console.log("Today is " + weatherData.forecast[3].day + ". The high is "+ weatherData.forecast[3].high + ". " + "The low is " + weatherData.forecast[3].low+ ". It will be " + weatherData.forecast[3].text + ".");
console.log("Today is " + weatherData.forecast[4].day + ". The high is "+ weatherData.forecast[4].high + ". " + "The low is " + weatherData.forecast[4].low+ ". It will be " + weatherData.forecast[4].text + ".");
console.log("Today is " + weatherData.forecast[5].day + ". The high is "+ weatherData.forecast[5].high + ". " + "The low is " + weatherData.forecast[5].low+ ". It will be " + weatherData.forecast[5].text + ".");


