import React from "react";
import "./style.css";
import { useEffect, useState } from "react";

export default function Counter() {
  const [timer, setTimer] = useState([]);

  function didMount() {
    setInterval(() => {
      counterUpdater();
    }, 1000);
  }
  function counterUpdater() {
    const blackFridayDate = new Date("Nov 26, 2021 00:00:00").getTime();
    let rightNow = new Date().getTime();
    let totalSeconds = (blackFridayDate - rightNow) / 1000;
    let daysToBF = Math.floor(totalSeconds / (60 * 60 * 24));
    let hoursToBF = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60)); //(totalSeconds / (60 * 60 )) - (daysToBF * 24);
    let minutesToBF = Math.floor((totalSeconds % (60 * 60)) / 60);
    let secondsToBF = Math.floor(totalSeconds % 60);
    setTimer([daysToBF, hoursToBF, minutesToBF, secondsToBF]);
  }

  useEffect(() => {
    counterUpdater();
    didMount();
  }, []);
  function checkUnit(unit){
    if(unit>1){return 's'}
  }
  return (
    <div className="timer-countdown">
      <div className="countdown days">
        <p>{timer[0]}</p>
        <p className="unit-text">Dia{checkUnit(timer[0])}</p>
      </div>
      <div className="countdown hours">
        <p>{timer[1]}</p>
        <p className="unit-text">Hora{checkUnit(timer[1])}</p>
      </div>
      <div className="countdown minutes">
        <p>{timer[2]}</p>
        <p className="unit-text">Minuto{checkUnit(timer[2])}</p>
      </div>
      <div className="countdown seconds">
        <p>{timer[3]}</p>
        <p className="unit-text">Segundo{checkUnit(timer[3])}</p>
      </div>
    </div>
  );
}
