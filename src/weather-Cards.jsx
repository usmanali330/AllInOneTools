import React, { useState } from 'react';

function Card() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  const weatherData = [
    {
      id: 1,
      location: "peshawar",
      weather: "Clear",
      temperature: {
        current: 28,
        high: 30,
        low: 18,
        unit: "°C"
      },
      details: {
        wind: "12 km/h NE",
        humidity: "40%",
        uvIndex: 7,
        visibility: "10 km",
      },
      advisory: "Wear sunglasses and stay hydrated. High UV index throughout the afternoon.",
      image: "/src/image/download.jpeg",
    },
    {
      id: 2,
      location: "charsadda",
      weather: "Rainy",
      temperature: {
        current: 19,
        high: 21,
        low: 16,
        unit: "°C"
      },
      details: {
        wind: "8 km/h SW",
        humidity: "87%",
        uvIndex: 2,
        visibility: "3 km",
      },
      advisory: "Carry an umbrella. Roads may be slippery and localized flooding possible.",
      image: "/src/image/download (1).jpeg",
    },
    {
      id: 3,
      location: "mardan",
      weather: "Snow",
      temperature: {
        current: -5,
        high: -2,
        low: -12,
        unit: "°C"
      },
      details: {
        wind: "15 km/h NW",
        humidity: "76%",
        uvIndex: 1,
        visibility: "0.3 km",
      },
      advisory: "Snowfall alert: travel only if necessary. Dress in layers to protect against frostbite.",
      image: "/src/image/images.jpeg",
    },
  ];

  const handleSearch = () => {
    const result = weatherData.filter((weather) =>
      weather.location.toLowerCase() === searchTerm.trim().toLowerCase()
    );
    setFilteredData(result);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-yellow-100 to-orange-200 px-6 py-16">
      <h2 className="text-5xl font-bold text-center text-gray-800 mb-6">
        🌦️ Weather Forecast
      </h2>

      <div className="flex justify-center items-center mb-12">
        <div className="flex items-center gap-2 p-4 bg-gray-100 rounded-md shadow-md">
          <input
            type="text"
            placeholder="Enter City Name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-4 py-2 text-center rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleSearch}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            Search
          </button>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-8">
        {filteredData.length > 0 ? (
          filteredData.map((weather) => (
            <div
              key={weather.id}
              className="bg-white rounded-3xl shadow-xl w-80 overflow-hidden transform transition-transform duration-300 hover:scale-105"
            >
              <img
                className="w-96 p-8 h-48 rounded-4xl"
                src={weather.image}
                alt={weather.weather}
              />

              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 text-center mb-2">
                  {weather.location}
                </h3>
                <p className="text-sm text-gray-600 text-center mb-4">
                  {weather.advisory}
                </p>

                <div className="flex justify-between items-center px-4 mb-2">
                  <span className="text-lg font-bold text-gray-700">
                    {weather.temperature.current}
                    {weather.temperature.unit}
                  </span>
                  <span className="text-sm bg-yellow-200 text-yellow-800 px-3 py-1 rounded-full">
                    {weather.weather}
                  </span>
                </div>

                <div className="text-sm text-gray-600 px-4">
                  <p>
                    <strong>High:</strong> {weather.temperature.high}
                    {weather.temperature.unit}
                  </p>
                  <p>
                    <strong>Low:</strong> {weather.temperature.low}
                    {weather.temperature.unit}
                  </p>
                  <p>
                    <strong>Wind:</strong> {weather.details.wind}
                  </p>
                  <p>
                    <strong>Humidity:</strong> {weather.details.humidity}
                  </p>
                  <p>
                    <strong>UV Index:</strong> {weather.details.uvIndex}
                  </p>
                  <p>
                    <strong>Visibility:</strong> {weather.details.visibility}
                  </p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-700 text-lg">
            {searchTerm ? "No weather data found." : "Search for a city to view weather forecast."}
          </p>
        )}
      </div>
    </div>
  );
}

export default Card;
