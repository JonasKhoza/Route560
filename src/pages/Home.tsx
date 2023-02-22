import React from "react";

import Slideshow from "../components/slider/Slider";
import GoalsAchievements from "../components/home-components/GoalsAchievements";
import PresentEvents from "../components/home-components/PresentEvents";
import Regions from "../components/home-components/Regions";
import WorkingTogether from "../components/home-components/WorkingTogether";
import Partnership from "../components/home-components/Partnership";
import Activities from "../components/home-components/Activities";
import Blog from "../components/home-components/Blog";

function Home() {
  document.title = "Route560 - Home";
  return (
    <React.Fragment>
      <Slideshow />
      <GoalsAchievements />
      <PresentEvents />
      <Partnership />
      <Regions />
      <WorkingTogether />
      <Activities />
      <Blog />
    </React.Fragment>
  );
}

export default Home;
