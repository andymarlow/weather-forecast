import Head from "next/head";
import Image from "next/legacy/image";
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
    <div>
      <Head>
        <title>Weather</title>
        <meta name="find weather data" />
      </Head>
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/40 z-[1]" />
      {/* <div className="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img" /> */}
      <Image
        src="https://images.unsplash.com/photo-1493314894560-5c412a56c17c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        layout="fill"
        className="object-cover"
      />
      <div className="relative flex justify-between items-center max-w-[500px] w-full m-auto pt-12 text-white z-10">
        <form
          onSubmit={fetchWeather}
          className="flex justify-between items-center w-full m-auto p-3 bg-transparent border border-gray-300 text-white rounded-2xl"
        >
          <div>
            <input
              onChange={(e) => setCity(e.target.value)}
              className="px-5 bg-transparent border-none text-white focus:outline-none text-2xl"
              type="text"
              placeholder="Enter City"
            />
            <br></br>
            <button
              className="inline-block px-6 py-2.5 bg-gray-200 text-gray-700 font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-gray-300 hover:shadow-lg focus:bg-gray-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition duration-150 ease-in-out"
              onClick={fetchWeather}
            >
              Find Weather Data
            </button>
          </div>
          {weather.main && <Weather data={weather} />}
        </form>
      </div>
    </div>
  );
}
