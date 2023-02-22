import { Link } from "react-router-dom";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

import classes from "./styles/goals.module.css";
const communityWorkImg =
  "https://www.kellyservices.ca/ca/siteassets/uploadedimages/canada_-_kelly_services/content_marketing/candidate_resource_center/2018/volunteer.jpg";
const GoalsAchievements = () => {
  return (
    <section className={classes.goalsContainer}>
      <div className={classes.header}>
        <h1>
          We drive change through dialogue, leadership, and action to help solve
          the greatest challenges of our time.
        </h1>
      </div>
      <div className={classes.contentContainer}>
        <div className={classes.goalContainer}>
          <h2>Who we are</h2>
          <p>
            <Link to="/who-we-are" className={classes.companyName}>
              Route560
            </Link>
            is home of diverse tribes, joined along by the road R560. We build
            unity, we pride ourselves through unity. We love getting involved
            ourselves, so we don't have to depend on others as a community.
          </p>
        </div>
        <div className={classes.achievements}>
          <img
            src={communityWorkImg}
            alt=""
            className={classes.communityWorkImageContainer}
          />

          <div className={classes.ourStrategy}>
            <h3>Our strategy</h3>
            <ul>
              <li>
                <ArrowRightIcon className={classes.icon} />
                Independent Community Establishment
              </li>
              <li>
                <ArrowRightIcon className={classes.icon} />
                Voluntarism programs
              </li>
              <li>
                <ArrowRightIcon className={classes.icon} />
                Solidarity
              </li>
              <li>
                <ArrowRightIcon className={classes.icon} />
                Unity through dialogue and action
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoalsAchievements;
