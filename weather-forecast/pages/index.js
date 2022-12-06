import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import axios from "axios";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});

  const url = `https://api.openweathermap.org/data/2.5/weather?q=berlin&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`;

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
        <title>Create Next App</title>
        <meta name="description" />
      </Head>
      <Image
        src="https://images.unsplash.com/photo-1493314894560-5c412a56c17c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        layout="fill"
      />
      <button onClick={fetchWeather}>Find Weather Data</button>
    </div>
  );
}
