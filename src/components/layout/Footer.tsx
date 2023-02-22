import { Link } from "react-router-dom";
import classes from "./styles/footer.module.css";

const Footer = () => {
  return (
    <footer>
      <div className={classes.newsletter}>
        <h1>
          Sign up to hear about our latest news, events, and opportunities.
        </h1>
        <div className={classes.inputContainer}>
          <input type="email" placeholder="Enter your email" />
          <button>Sign up</button>
        </div>
      </div>
      <div className={classes.customer_info}>
        <div className={classes.footerLinks}>
          <Link to="">Community Agreement</Link>
          <Link to="">Contact</Link>
          <Link to="">Partners</Link>
          <Link to="">Principles</Link>
          <Link to="">Transparency</Link>
        </div>
        <div className={classes.social_media}>
          <h1>Follow us on</h1>
          <div className={classes.social_media_logos}>
            <a href="#ert">
              <img
                src={`${process.env.PUBLIC_URL}/images/social-media/Facebook_Logo.png`}
                alt="Facebook logo"
              />
            </a>
            <a href="#htt">
              <img
                src={`${process.env.PUBLIC_URL}/images/social-media/Instagram-Logo.png`}
                alt="Instagram logo"
              />
            </a>
            <a href="gbr">
              <img
                src={`${process.env.PUBLIC_URL}/images/social-media/Twitter-logo.svg.png`}
                alt="Twitter logo"
              />
            </a>
          </div>
        </div>
      </div>
      <div className={classes.company_policy}>
        <div className={classes.policies}>
          <a href="r">Terms and Conditions</a>
          <a href="ry">Privacy policy</a>
          <a href="tu">Cookies policy</a>
        </div>

        <p>{`©Root560 ${new Date().getFullYear()} All rights reserved`}</p>
      </div>
    </footer>
  );
};

export default Footer;
