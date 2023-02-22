import { useState, useEffect, useRef } from "react";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

import classes from "./slider.module.css";
const colors = ["#0088FE", "#00C49F", "#FFBB28", "red", "blue"];

function Slideshow() {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);
  const delay = 2500;
  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  function prevSlider() {
    if (index > 0) {
      setIndex((prevV) => {
        return prevV - 1;
      });
    }
    return;
  }

  function nextSlider() {
    if (index !== colors.length - 1) {
      setIndex((prevV) => {
        return prevV + 1;
      });
    }
    return;
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className={classes.slideshow}>
      <div
        className={classes.slideshowSlider}
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {colors.map((backgroundColor, index) => (
          <div
            className={classes.slide}
            key={index}
            style={{ backgroundColor }}
          />
        ))}
      </div>

      {/*SLIDESHOW DOTS */}
      <div className={classes.navigation_container}>
        <NavigateBeforeIcon
          className={`${classes.prev_next} ${
            index === 0 ? classes.disable : ""
          }`}
          onClick={prevSlider}
        />
        <div className={classes.slideshowDots}>
          {colors.map((_, idx) => (
            <div
              key={idx}
              className={`${classes.slideshowDot} ${
                index === idx ? classes.active : ""
              }`}
              onClick={() => {
                setIndex(idx);
              }}
            ></div>
          ))}
        </div>
        <NavigateNextIcon
          className={`${classes.prev_next} ${
            index === colors.length - 1 ? classes.disable : ""
          }`}
          onClick={nextSlider}
        />
      </div>
    </div>
  );
}

export default Slideshow;
