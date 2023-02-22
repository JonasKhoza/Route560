import { Link } from "react-router-dom";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import classes from "./styles/partnership.module.css";

const Partnership = () => {
  return (
    <section className={classes.partnershipContainer}>
      <div className={classes.partnershipContentConatiner}>
        <h1>The Route560 partnership for lucrative economy.</h1>
        <p>
          Through the Route560 partnership for an inclusive economy we're uniting
          community leaders with a diverse range of public, private, and
          non-profit leaders to help recostructure our economy so it drives
          great security, opportunity and resilience.
        </p>
      </div>
      <Link to="" className={classes.learnMoreContainer}>
        <p>Learn More</p>
        <KeyboardArrowRightIcon />
      </Link>
    </section>
  );
};

export default Partnership;
