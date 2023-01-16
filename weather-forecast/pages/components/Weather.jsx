import Image from "next/image";

const Weather = ({ data }) => {
  return (
    <div>
      <div>
        <Image
          src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
          alt="image"
          width="100"
          height="100"
        />
      </div>
      <p>{data.weather[0].main}</p>
      <p>
        {Math.round(data.main.temp - 273.15)} <span>&#176;</span>C
      </p>
      <p>{Math.round(data.wind.speed)} m/s</p>
    </div>
  );
};

export default Weather;
