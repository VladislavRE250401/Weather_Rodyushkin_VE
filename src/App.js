import { useEffect, useState } from "react";
import './App.css';

import Today from "./components/Today/Today";
import Daily from "./components/Daily/Daily";
import Details from "./components/Details/Details";

const App = () => {

  const [value, setvalue] = useState([]);
  const [number, setNumber] = useState(0);
  let componentMounted = true;

  useEffect(() => {
    const fetchWeather = async () => {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=54.1838&lon=45.1749&exclude=minutely,hourly,alerts&appid=25e0e67cc8328fea9015cd75dd81746b&units=metric&lang=ru`);
      if (componentMounted) {
        setvalue(await response.json())
      }
      return () => {
        componentMounted = false;
      }
    }
    fetchWeather();
  }, []);

  const handleClick = (num) => {
    setNumber(num);
  };

  return (
    <div >
      <Today data={value.current ? (value.current) : null}/>
      <div className="daily-frame">
        <div className="daily-title">
          По дням
        </div>
      </div>
      <div className="daily" >
        <Daily data={value.daily ? (value.daily[0]) : null} day={0} handleClick={handleClick} />
        <Daily data={value.daily ? (value.daily[1]) : null} day={1} handleClick={handleClick} />
        <Daily data={value.daily ? (value.daily[2]) : null} day={2} handleClick={handleClick} />
        <Daily data={value.daily ? (value.daily[3]) : null} day={3} handleClick={handleClick} />
        <Daily data={value.daily ? (value.daily[4]) : null} day={4} handleClick={handleClick} />
        <Daily data={value.daily ? (value.daily[5]) : null} day={5} handleClick={handleClick} />
        <Daily data={value.daily ? (value.daily[6]) : null} day={6} handleClick={handleClick} />
      </div>
	  <Details data={value.daily ? (value.daily[number]) : null} />
    </div >
  )
}

export default App;
