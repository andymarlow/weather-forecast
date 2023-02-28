import Image from "next/image";

const Weather = ({ data }) => {
  return (
    <div className="relative">
      <p className="font-bold text-2xl">{data.name}</p>
      <div>
        <Image
          src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
          alt="image"
          width="100"
          height="100"
        />
      </div>
      <p className="font-bold">{data.weather[0].main}</p>
      <p className="font-bold">
        Temperature&nbsp;
        {Math.round(data.main.temp - 273.15)} <span>&#176;</span>C
      </p>
      <p className="font-bold">Wind Speed {Math.round(data.wind.speed)} m/s</p>
    </div>
  );
};

export default Weather;
