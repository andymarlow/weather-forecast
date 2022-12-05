import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import axios from "axios";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});

  const url = `https://api.openweathermap.org/data/2.5/weather?q=berlin&appid=${NEXT_PUBLIC_WEATHER_KEY}`;

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" />
      </Head>
    </div>
  );
}
