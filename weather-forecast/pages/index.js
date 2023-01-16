import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import axios from "axios";
import Weather from "./components/Weather";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`;

  const fetchWeather = (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .get(url)
      .then((response) => {
        setWeather(response.data);
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
    setCity("");
    setLoading(false);
  };

  return (
    <div className="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img">
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/40 z-[1]" />
      <Head>
        <title>Create Next App</title>
        <meta name="description" />
      </Head>

      <div className="relative flex justify-between items-center max-w-[500px] w-full m-auto pt-4 text-white z-10">
        <form
          onSubmit={fetchWeather}
          className="relative flex justify-between items-center max-w-[500] w-full m-auto pt-4 text-white z-10"
        >
          <div>
            <input
              onChange={(e) => setCity(e.target.value)}
              className="bg-transparent border-none text-white focus:outline-none text-2xl"
              type="text"
              placeholder="Enter City"
            />
            <br></br>
            <button onClick={fetchWeather}>Find Weather Data</button>
          </div>
        </form>
      </div>
      {weather.main && <Weather data={weather} />}
    </div>
  );
}
