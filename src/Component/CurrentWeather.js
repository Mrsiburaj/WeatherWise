import React from "react";

const CurrentWeather = ({ data }) => {
  if (!data) return null;

  return (
    <div className="CurrentWeather">
      <h2>Current Weather</h2>
      <div className="weather-info">
        <img
          src={`http://openweathermap.org/img/wn/${data.icon}@2x.png`}
          alt={data.description}
        />
        <div className="weather-details">
          <p className="temperature">{data.temp}°C</p>
          <p className="description">{data.description}</p>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
