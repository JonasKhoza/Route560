import React, { useState } from "react";

import { Link, NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

import { SideDrawerInterface } from "../models/sideDrawerInterfaces";
import classes from "./styles/navigation.module.css";

const Navigation: React.FC<Partial<SideDrawerInterface>> = ({
  menuIsOpen,
  toggleMenuBar,
}) => {
  const [dropDown, setDropDown] = useState({
    about: false,
    team: false,
    programs: false,
    services: false,
    touring: false,
    regions: false,
  });

  function openDropDownHandler(dropdownName: string) {
    if (dropdownName === "about") {
      setDropDown({
        about: true,
        team: false,
        programs: false,
        services: false,
        touring: false,
        regions: false,
      });
    } else if (dropdownName === "team") {
      setDropDown({
        about: false,
        team: true,
        programs: false,
        services: false,
        touring: false,
        regions: false,
      });
    } else if (dropdownName === "programs") {
      setDropDown({
        about: false,
        team: false,
        programs: true,
        services: false,
        touring: false,
        regions: false,
      });
    } else if (dropdownName === "services") {
      setDropDown({
        about: false,
        team: false,
        programs: false,
        services: true,
        touring: false,
        regions: false,
      });
    } else if (dropdownName === "touring") {
      setDropDown({
        about: false,
        team: false,
        programs: false,
        services: false,
        touring: true,
        regions: false,
      });
    } else if (dropdownName === "regions") {
      setDropDown((prevItems) => {
        return { ...prevItems, regions: true };
      });
    }
  }

  function closeDropDowns() {
    setDropDown({
      about: false,
      team: false,
      programs: false,
      services: false,
      touring: false,
      regions: false,
    });
  }

  function mouseOverLinks(dropdownName: string) {
    if (dropdownName === "about") {
      setDropDown({
        about: true,
        team: false,
        programs: false,
        services: false,
        touring: false,
        regions: false,
      });
    } else if (dropdownName === "team") {
      setDropDown({
        about: false,
        team: true,
        programs: false,
        services: false,
        touring: false,
        regions: false,
      });
    } else if (dropdownName === "programs") {
      setDropDown({
        about: false,
        team: false,
        programs: true,
        services: false,
        touring: false,
        regions: false,
      });
    } else if (dropdownName === "services") {
      setDropDown({
        about: false,
        team: false,
        programs: false,
        services: true,
        touring: false,
        regions: false,
      });
    } else if (dropdownName === "touring") {
      setDropDown({
        about: false,
        team: false,
        programs: false,
        services: false,
        touring: true,
        regions: false,
      });
    } else if (dropdownName === "regions") {
      setDropDown((prevItems) => {
        return { ...prevItems, regions: true };
      });
    }
  }

  function onMouseOutLink() {
    setDropDown({
      about: false,
      team: false,
      programs: false,
      services: false,
      touring: false,
      regions: false,
    });
  }

  return (
    <header className={classes.header}>
      <div className={classes.logo} onClick={closeDropDowns}>
        <Link to="/">
          <img
            src={`${process.env.PUBLIC_URL}/images/logo192.png`}
            alt="logo"
          />
        </Link>
      </div>
      <nav>
        <ul className={classes.nav_items}>
          <li>
            <div className={classes.dropdown_container}>
              <div
                className={classes.dropdown_visible_content}
                onClick={() => openDropDownHandler("about")}
                // onMouseOver={() => mouseOverLinks("about")}
              >
                <p> About Us</p>
                <ArrowDropDownIcon className={classes.dropdown_icon} />
              </div>
              <ul
                className={`${classes.about_us_dropdown_item} ${
                  dropDown.about ? classes.dropdownIsOpen : ""
                }`}
              >
                <li>
                  <Link to="">What we do</Link>
                </li>
                <li>
                  <Link to="">Our Impact</Link>
                </li>
                <li>
                  <Link to="">Communities</Link>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <div className={classes.dropdown_container}>
              <div
                className={classes.dropdown_visible_content}
                onClick={() => openDropDownHandler("team")}
                // onMouseOver={() => mouseOverLinks("team")}
              >
                <p> Our People</p>
                <ArrowDropDownIcon className={classes.dropdown_icon} />
              </div>
              <ul
                className={`${classes.our_people_dropdown_item}  ${
                  dropDown.team ? classes.dropdownIsOpen : ""
                }`}
              >
                <li>
                  <Link to="">Board of Trustees</Link>
                </li>
                <li>
                  <Link to="">Our Experts and Staff</Link>
                </li>
                <li>
                  <Link to="">Senior Executive Team</Link>
                </li>
                <li>
                  <Link to="">Volunteers</Link>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <div className={classes.dropdown_container}>
              <div
                className={classes.dropdown_visible_content}
                onClick={() => openDropDownHandler("programs")}
                // onMouseOver={() => mouseOverLinks("programs")}
              >
                <p> Programs</p>
                <ArrowDropDownIcon className={classes.dropdown_icon} />
              </div>
              <ul
                className={`${classes.programs_dropdown_item} ${
                  dropDown.programs ? classes.dropdownIsOpen : ""
                }`}
              >
                <li>
                  <Link to="">All Programs</Link>
                </li>
                <li>
                  <Link to="">Volunteers</Link>
                </li>
              </ul>
            </div>
          </li>

          <li>
            <div className={classes.dropdown_container}>
              <div
                className={classes.dropdown_visible_content}
                onClick={() => openDropDownHandler("services")}
                // onMouseOver={() => mouseOverLinks("services")}
              >
                <p>Services</p>
                <ArrowDropDownIcon className={classes.dropdown_icon} />
              </div>
              <ul
                className={`${classes.services_dropdown_item} ${
                  dropDown.services ? classes.dropdownIsOpen : ""
                }`}
              >
                <li>
                  <Link to="">Accomodation</Link>
                </li>
                <li>
                  <Link to="">Events</Link>
                </li>
                <li>
                  <Link to="">Conferences</Link>
                </li>
                <li>
                  <Link to="">Weddings</Link>
                </li>
                <li>
                  <Link to="">Accomodation</Link>
                </li>
                <li>
                  <Link to="">Jobs</Link>
                </li>
                <li>
                  <Link to="">Rent/Buy/Gift</Link>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <div className={classes.dropdown_container}>
              <div
                className={`${classes.dropdown_visible_content}`}
                onClick={() => openDropDownHandler("touring")}
                // onMouseOver={() => mouseOverLinks("touring")}
              >
                <p>Touring</p>
                <ArrowDropDownIcon className={classes.dropdown_icon} />
              </div>
              <ul
                className={`${classes.touring_dropdown_item} ${
                  dropDown.touring ? classes.dropdownIsOpen : ""
                }`}
              >
                <li>
                  <div className={classes.dropdown_container}>
                    <div
                      className={`${classes.dropdown_visible_content} ${classes.regions}`}
                      onClick={() => openDropDownHandler("regions")}
                      // onMouseOver={() => mouseOverLinks("regions")}
                    >
                      <p>Areas</p>
                      <ArrowDropDownIcon className={classes.dropdown_icon} />
                    </div>
                    <ul
                      className={`${classes.regions_dropdown_item} ${
                        dropDown.regions ? classes.dropdownIsOpen : ""
                      }`}
                    >
                      <li>
                        <Link to="">HartbeesportDam</Link>
                      </li>
                      <li>
                        <Link to="">Skeerpoort</Link>
                      </li>
                      <li>
                        <Link to="">Hekpoort</Link>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <NavLink
              to="/support"
              className={({ isActive }) => (isActive ? classes.active : "")}
              onClick={closeDropDowns}
            >
              Support
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? classes.active : "")}
              onClick={closeDropDowns}
            >
              Contact
            </NavLink>
          </li>
          <li>
            <Link to="/donate" className={classes.donate_link}>
              Donate
            </Link>
          </li>
        </ul>
      </nav>
      <div className={classes.hamburger_menu}>
        {!menuIsOpen ? (
          <MenuIcon className={classes.closed_menu} onClick={toggleMenuBar} />
        ) : (
          <CloseIcon className={classes.closed_menu} onClick={toggleMenuBar} />
        )}
      </div>
    </header>
  );
};

export default Navigation;
