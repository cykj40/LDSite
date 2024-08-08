document.addEventListener('DOMContentLoaded', function() {
    // Weather API
    const weatherElement = document.getElementById('weather');
    const apiKey = '44f9a0840f420ac27c584feca4822c1e';
    const zipCode = '11232';
    const countryCode = 'us'; // Specify country code if needed
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},${countryCode}&appid=${apiKey}&units=imperial`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const temp = data.main.temp;
            const weather = data.weather[0].description;
            weatherElement.innerHTML = `Temperature: ${temp}°F, ${weather}`;
        })
        .catch(error => {
            console.error('Error fetching the weather data:', error);
            weatherElement.innerHTML = 'Unable to fetch weather data';
        });

    // Sticky Navbar
    const header = document.querySelector('header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 0) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    });
});




