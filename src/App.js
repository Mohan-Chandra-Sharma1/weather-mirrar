import React, { useState } from "react";
import styled from "styled-components";
import Axios from "axios";
import CityComponent from "./modules/CityComponent";
import WeatherComponent from "./modules/WeatherInfoComponent";

export const WeatherIcons = {
  "01d": "https://previews.123rf.com/images/carbo82/carbo821206/carbo82120600087/14194624-icon-sunny-weather.jpg",
  "01n": "https://st3.depositphotos.com/1915171/19057/v/450/depositphotos_190575428-stock-illustration-neon-light-moon-stars-icon.jpg",
  "02d": "https://cdn-icons-png.flaticon.com/512/2490/2490365.png",
  "02n": "https://cdn1.vectorstock.com/i/1000x1000/17/30/cloudy-night-sky-icon-simple-meteo-vector-42861730.jpg",
  "03d": "https://cdn3d.iconscout.com/3d/premium/thumb/cloudy-night-7331211-6001026.png",
  "03n": "https://cdn3d.iconscout.com/3d/premium/thumb/cloudy-night-7331211-6001026.png",
  "04d": "https://www.dafont.com/img/illustration/p/e/perfect_day.png",
  "04n": "https://c8.alamy.com/comp/2AH6X87/cloudy-night-color-icon-partly-cloudy-night-clouds-and-moon-weather-forecast-isolated-vector-illustration-2AH6X87.jpg",
  "09d": "https://cdn-icons-png.flaticon.com/512/6991/6991355.png",
  "09n": "https://cdn-icons-png.flaticon.com/512/7587/7587458.png",
  "10d": "https://cdn-icons-png.flaticon.com/512/6991/6991355.png",
  "10n": "https://cdn-icons-png.flaticon.com/512/7587/7587458.png",
  "11d": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCSjCPKx4wBuhC2ooegRnvdmGqBRmiGow2aQ&usqp=CAU",
  "11n": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCSjCPKx4wBuhC2ooegRnvdmGqBRmiGow2aQ&usqp=CAU",
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 380px;
  padding: 20px 10px;
  margin: auto;
  border-radius: 4px;
  box-shadow: 0 3px 6px 0 #555;
  background: white;
  font-family: Montserrat;
`;

const AppLabel = styled.span`
  color: black;
  margin: 20px auto;
  font-size: 18px;
  font-weight: bold;
`;
const CloseButton = styled.span`
  padding: 2px 3px;
  background-color: black;
  border-radius: 50%;
  color: white;
  position: absolute;
`;

function App() {
  const [city, updateCity] = useState();
  const [weather, updateWeather] = useState();
  
  const fetchWeather = async (e) => {
    e.preventDefault();
    const response = await Axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fe4feefa8543e06d4f3c66d92c61b69c`,
    );
    updateWeather(response.data);
  };
  return (
    <Container>
      <AppLabel>React Weather App</AppLabel>
      {city && weather ? (
        <WeatherComponent weather={weather} city={city} />
      ) : (
        <CityComponent updateCity={updateCity} fetchWeather={fetchWeather} />
      )}
    </Container>
  );
}

export default App;
