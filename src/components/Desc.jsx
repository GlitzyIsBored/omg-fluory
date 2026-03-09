import { useState, useEffect } from "react";

const Desc = () => {
  const [timeBetween, setTimeBetween] = useState(null);

  useEffect(() => {
    const currentDate = new Date();
    const birthdate = new Date("7/25/2006"); //I hate this date format so much

    let timeDifference = Math.abs(currentDate - birthdate);
    let dateToYear = Math.floor(timeDifference / (1000 * 60 * 60 * 24) / 365);

    setTimeBetween(dateToYear);
  }, []);

  return (
    <div>
      <h3 style={{ color: "rgb(221, 191, 252)" }}>
        Heya!! This website is the third rewrite of my main web! This time its
        now written in ReactJS completely from scratch since my previous website
        kept bothering me. I'm a {timeBetween} year old girl who's really into
        web dev. I wrote this web since i was inspired by those Carrd profiles
        and decided why not make my own! I cannot really say much other than i
        am chronically sleepy and spend most of my day doing literally nothing.
        I play games and sometimes draw and mostly develop some random projects.
        I'm a wannabe game dev who specialises in front-end web dev and learning
        backend. Tbh idk what i am doing with my life btw i love coffe
      </h3>
    </div>
  );
};

export default Desc;
