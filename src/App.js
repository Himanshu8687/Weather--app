import React, { useState } from "react";
import WeatherCard from "./components/WeatherCard";
import SearchBar from "./components/SearchBar";
import "./App.css";

const API_KEY = "5c8e6fa90ab90c568a244329ee3143b1";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const fetchWeather = async () => {
    if (!city) return;
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      const data = await res.json();
      if (data.cod === 200) {
        setWeather(data);
        setError("");
      } else {
        setError("City not found!");
        setWeather(null);
      }
    } catch (err) {
      setError("Error fetching data!");
      setWeather(null);
    }
  };

  return (
    <div className="app">
      <h1>Weather App</h1>
      <SearchBar city={city} setCity={setCity} fetchWeather={fetchWeather} />
      {error && <p className="error">{error}</p>}
      <WeatherCard weather={weather} />
    </div>
  );
}

export default App;