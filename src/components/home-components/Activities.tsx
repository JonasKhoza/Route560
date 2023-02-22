import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import activities from "../../data/activities";
import classes from "./styles/activities.module.css";

const Activities = () => {
  const [width, setWidth] = useState(0);

  const courasel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setWidth(courasel.current!.offsetWidth - courasel.current!.scrollWidth);
  }, []);
  return (
    <section className={classes.activitiesContainer}>
      <motion.div className={classes.contentContainer} ref={courasel}>
        <h1>Activities</h1>

        <motion.ul
          className={classes.activities}
          drag="x"
          dragConstraints={{ right: 0, left: width }}
        >
          {activities.map((activity) => {
            return (
              <li className={classes.activity} key={activity.id}>
                <h1>{activity.activityName}</h1>
                <img src={activity.imageUrl} alt={activity.activityName} />
                <div className={classes.activityContentContainer}>
                  <div className={classes.activityContent}>
                    <h2>{activity.area}</h2>
                    <p>{`${
                      activity.summary.length > 80
                        ? `${activity.summary.slice(0, 80)}...`
                        : activity.summary
                    }`}</p>
                  </div>
                  <Link to="" className={classes.more}>
                    More
                  </Link>
                </div>
              </li>
            );
          })}
        </motion.ul>
      </motion.div>
    </section>
  );
};

export default Activities;
