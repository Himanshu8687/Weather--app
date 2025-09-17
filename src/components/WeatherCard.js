import React from "react";
import "./WeatherCard.css";

const WeatherCard = ({ weather }) => {
  if (!weather) return null;

  const iconUrl = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`

  return (
    <div className="weather-card">
      <h2>{weather.name}, {weather.sys.country}</h2>
      <img src={iconUrl} alt={weather.weather[0].description} />
      <p>{weather.weather[0].description}</p>
      <p>Temp: {weather.main.temp}°C</p>
      <p>Min: {weather.main.temp_min}°C | Max: {weather.main.temp_max}°C</p>
      <p>Humidity: {weather.main.humidity}%</p>
    </div>
  );
};

export default WeatherCard;