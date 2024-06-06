import React from "react";

const Forecast = ({ data }) => {
  if (!data) return null;

  return (
    <div className="Forecast">
      <h2>5-Day Forecast</h2>
      <div className="forecast-container">
        {data.map((item, index) => (
          <div key={index} className="forecast-item">
            <p>{new Date(item.date).toLocaleDateString()}</p>
            <img
              src={`http://openweathermap.org/img/wn/${item.icon}.png`} 
              alt={item.description}
            />
            <p>{item.temp}°C</p>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;
