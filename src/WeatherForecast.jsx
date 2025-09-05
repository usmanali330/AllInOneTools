import React from "react";

function WeatherForecast() {
  const weatherData = [
    { day: "Mon", date: "5th May", max: 12, min: 6, icon: "🌧️" },
    { day: "Tue", date: "6th May", max: 14, min: 7, icon: "🌤️" },
    { day: "Wed", date: "7th May", max: 13, min: 7, icon: "⛅" },
    { day: "Thu", date: "8th May", max: 14, min: 9, icon: "⛅" },
    { day: "Fri", date: "9th May", max: 16, min: 7, icon: "☀️" },
    { day: "Sat", date: "10th May", max: 15, min: 5, icon: "☀️" },
    { day: "Sun", date: "11th May", max: 15, min: 7, icon: "🌤️" }
  ];
  const forecastdata = weatherData.map((item, index) => (
    <div key={index} className="bg-blue-500 rounded-xl p-4 shadow-lg text-center transform transition-transform duration-300 hover:scale-105">
      <h2 className="text-xl font-semibold">{item.day}</h2>
      <p className="text-sm">{item.date}</p>
      <div className="text-5xl my-3">{item.icon}</div>
      <p className="text-2xl font-bold">{item.max}°</p>
      <p className="text-sm text-blue-100">{item.min}°</p>
    </div>
  ))
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-sky-200 to-blue-400 flex flex-col items-center justify-center text-white p-4">
      <h1 className="text-3xl font-bold mb-6">7-Day Weather Forecast</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 w-full max-w-6xl">
        {forecastdata}
      </div>
    </div>
  );
}

export default WeatherForecast;
