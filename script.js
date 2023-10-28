const apiKey = '5R9MKHCWTHKWZZW34XWRF6VUH';

document.getElementById('search').addEventListener('click', () => {
    const city = document.getElementById('city').value;

    fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=${apiKey}&contentType=json`)
        .then(response => response.json())
        .then(data => {
            const weatherData = data.days[0];
            const weatherInfo = `
                <h2>${city}</h2>
                <p>Date: ${weatherData.datetime}</p>
                <p>Temperature: ${weatherData.tempmax}°C / ${weatherData.tempmin}°C</p>
                <p>Condition: ${weatherData.conditions}</p>
            `;

            document.getElementById('weather-info').innerHTML = weatherInfo;
        })
        .catch(error => console.error(error));
});
