import { Link } from "react-router-dom";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

import programs from "../../data/programs";

import classes from "./styles/presentevents.module.css";

const PresentEvents = () => {
  return (
    <section className={classes.presentEvents}>
      <h1>Programs, Ideas & Past Events</h1>
      <ul className={classes.programsContainer}>
        {programs.map((program) => {
          return (
            <li className={classes.program} key={program.id}>
              <Link to="">
                <h2>{program.area}</h2>
                <img src={program.url} alt={program.title} />
                <div className={classes.cardContent}>
                  <div className={classes.contentSummary}>
                    <h3 style={{ color: program.color }}>
                      {program.focusArea}
                    </h3>
                    <h4>{program.title}</h4>
                    <p>{`${
                      program.summary.length > 78
                        ? `${program.summary.slice(0, 78)}...`
                        : program.summary
                    }`}</p>
                  </div>
                  <div className={classes.exploreContainer}>
                    <div className={classes.exploreContainerBtn}>
                      <Link to="" className={classes.explore}>
                        Explore
                      </Link>
                    </div>

                    <address>{program.createdAt}</address>
                  </div>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
      <Link to="" className={classes.seeMore}>
        <p>
          <span>See</span>
          <span>More</span>
        </p>
        <ArrowDropUpIcon className={classes.seeMoreIcon} />
      </Link>
    </section>
  );
};

export default PresentEvents;
