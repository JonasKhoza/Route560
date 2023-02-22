import { Link } from "react-router-dom";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

import classes from "./styles/workTogether.module.css";

const WorkingTogether = () => {
  return (
    <section className={classes.workingTogether}>
      <h1>
        We bridge divides by bringing people together: connecting individuals
        and organizations to help communities tackle their toughest challenges.
      </h1>
      <div className={classes.partnerCards}>
        <div className={classes.partnerCard}>
          <h2>Serve</h2>
          <div className={classes.cardContent}>
            <p>
              Do you want to make an impact in your community and your country?
              Route560 members and Root560 Seniors volunteers serve with us to
              strengthen communities across our nation.
            </p>
            <Link to="">FIND OUT MORE</Link>
          </div>
        </div>

        <div className={classes.partnerCard}>
          <h2>Partner</h2>
          <div className={classes.cardContent}>
            <p>
              In need of resources? Route560 is here for you. In future, every
              year, we intend actively facilitate trade to at least 10 different
              entities, keep our streets safe, invest in youth development in
              our area, boost torism in R00t560 by 5%.
            </p>
            <Link to="">FIND OUT MORE</Link>
          </div>
        </div>
      </div>
      <div className={classes.assistContainer}>
        <Link to="" className={classes.assist}>
          <div className={classes.contentContainer}>
            <div className={classes.content}>
              <h3>Even a Day Makes a Difference</h3>
              <p>
                Time a challenge? You can still serve as a volunteer during a
                day of service. Find out what's coming and see how you can get
                involved.
              </p>
            </div>

            <Link to="">
              Find out more <KeyboardArrowRightIcon />
            </Link>
          </div>
        </Link>
        <Link to="" className={classes.assist}>
          <div className={classes.contentContainer}>
            <div className={classes.content}>
              <h3>Not ready to serve? You can still help.</h3>
              <p>
                Route560 works with local communities to tap the power of South
                African people to tackle our country's most pressing challenges.
                Your donation help us further this mission.
              </p>
            </div>
            <Link to="">
              Donate Now <KeyboardArrowRightIcon />
            </Link>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default WorkingTogether;
