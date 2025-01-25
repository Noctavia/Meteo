const apiKey = 'VOTRE_API_KEY';
let weatherChart;

// Fonction pour obtenir la météo
function getWeather() {
    const city = document.getElementById('city').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=fr&appid=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === '404') {
                displayError("Ville non trouvée. Essayez une autre.");
            } else {
                hideError();
                displayWeather(data);
                getForecast(city);
                getWeatherChart(city);
            }
        })
        .catch(error => {
            displayError("Impossible de récupérer les données. Vérifiez votre connexion.");
        });
}

// Fonction pour afficher la météo
function displayWeather(data) {
    document.getElementById('city-name').textContent = `Ville : ${data.name}`;
    document.getElementById('temperature').textContent = `Température : ${Math.round(data.main.temp)}°C`;
    document.getElementById('feels-like').textContent = `Ressentie : ${Math.round(data.main.feels_like)}°C`;
    document.getElementById('humidity').textContent = `Humidité : ${data.main.humidity}%`;
    document.getElementById('pressure').textContent = `Pression : ${data.main.pressure} hPa`;
    document.getElementById('wind-speed').textContent = `Vitesse du vent : ${data.wind.speed} m/s`;
    document.getElementById('description').textContent = `Description : ${data.weather[0].description}`;

    const iconCode = data.weather[0].icon;
    document.getElementById('weather-icon').src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
}

// Fonction pour obtenir les prévisions
function getForecast(city) {
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&lang=fr&cnt=5&appid=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            displayForecast(data);
        })
        .catch(error => {
            displayError("Erreur lors de la récupération des prévisions.");
        });
}

// Fonction pour afficher les prévisions
function displayForecast(data) {
    const forecastItems = document.getElementById('forecast-items');
    forecastItems.innerHTML = ''; // Réinitialiser les prévisions

    data.list.forEach(item => {
        const forecastItem = document.createElement('div');
        forecastItem.classList.add('forecast-item');
        forecastItem.innerHTML = `
            <p>${new Date(item.dt * 1000).toLocaleDateString()}</p>
            <img src="https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png" alt="Icone Météo">
            <p>${Math.round(item.main.temp)}°C</p>
        `;
        forecastItems.appendChild(forecastItem);
    });
}

// Fonction pour afficher les graphiques
function getWeatherChart(city) {
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&lang=fr&cnt=8&appid=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const labels = data.list.map(item => new Date(item.dt * 1000).toLocaleTimeString());
            const temps = data.list.map(item => item.main.temp);
            const humidity = data.list.map(item => item.main.humidity);

            if (weatherChart) {
                weatherChart.destroy(); // Détruire le précédent graphique
            }

            const ctx = document.getElementById('weatherChart').getContext('2d');
            weatherChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: labels,
                    datasets: [{
                        label: 'Température (°C)',
                        data: temps,
                        borderColor: '#ff6600',
                        fill: false,
                    },
                    {
                        label: 'Humidité (%)',
                        data: humidity,
                        borderColor: '#3399ff',
                        fill: false,
                    }]
                },
                options: {
                    responsive: true,
                    scales: {
                        y: {
                            beginAtZero: false
                        }
                    }
                }
            });
        });
}

// Fonction pour afficher les erreurs
function displayError(message) {
    const errorMessage = document.getElementById('error-message');
    errorMessage.textContent = message;
    errorMessage.style.display = 'block';
}

// Fonction pour masquer les erreurs
function hideError() {
    const errorMessage = document.getElementById('error-message');
    errorMessage.style.display = 'none';
}

// Fonction pour changer le mode sombre
document.getElementById('dark-mode').addEventListener('change', (event) => {
    document.body.classList.toggle('dark-mode', event.target.checked);
    document.querySelector('.app-container').classList.toggle('dark-mode', event.target.checked);
    const button = document.querySelector('button');
    button.classList.toggle('dark-mode', event.target.checked);
});
