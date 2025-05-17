const apiKey = "103f443556ee51d9babf842cae50147f";  // Replace with your real API key

// Replace with your actual OpenWeatherMap API key

async function getWeather() {
  const city = document.getElementById("cityInput").value.trim();
  console.log("City input:", city);  // 👈 debug line

  if (!city) {
    alert("Please enter a city name.");
    return;
  }

  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    console.log("Fetching:", url);  // 👈 debug line

    const res = await fetch(url);

    if (!res.ok) {
      const errorData = await res.json();
      console.error("Error:", errorData);  // 👈 debug line
      throw new Error(errorData.message);
    }

    const data = await res.json();
    console.log("Weather data:", data);  // 👈 debug line

    document.getElementById("cityName").textContent = `${data.name}, ${data.sys.country}`;
    document.getElementById("temperature").textContent = `🌡️ ${Math.round(data.main.temp)}°C`;
    document.getElementById("description").textContent = `☁️ ${data.weather[0].description}`;

    document.getElementById("weatherResult").classList.remove("hidden");

  } catch (error) {
    alert("❌ " + error.message);
    document.getElementById("weatherResult").classList.add("hidden");
  }
}
