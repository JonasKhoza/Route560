import { Link } from "react-router-dom";

// import {
//   GoogleMap,
//   useJsApiLoader,
//   useLoadScript,
// } from "@react-google-maps/api";

import regions from "../../data/Regions";

import classes from "./styles/regions.module.css";

const configValue = process.env.REACT_APP_GOOGLEMAPSAPIKEY as string;
const Regions = () => {
  // const { isLoaded } = useLoadScript({
  //   googleMapsApiKey: configValue,
  //   libraries: ["places"],
  // });

  // if (!isLoaded) {
  //   return <p>Loading...</p>;
  // }

  return (
    <section className={classes.regionsContainer}>
      <h1>Areas</h1>
      <div className={classes.regionsMapContainer}>
        <ul className={classes.regions}>
          {regions.map((region) => {
            return (
              <li className={classes.region}>
                <div className={classes.regionContentContainer}>
                  <h2>{region.region}</h2>
                  <p>{`${
                    region.content.length > 160
                      ? `${region.content.slice(0, 160)}...`
                      : region.content
                  }`}</p>
                </div>
                <div className={classes.regionImageContainer}>
                  <img src={region.url} alt="" />
                  <Link to="">Discover More</Link>
                </div>
              </li>
            );
          })}
        </ul>
        <div className={classes.mapContainer}>
          Google maps will be shown here
        </div>
      </div>
    </section>
  );
};

export default Regions;
