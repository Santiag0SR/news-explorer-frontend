import "./navigation.css";
import { Link, useLocation } from "react-router-dom";
import logoutLight from "../../images/logout_light.svg";
import logoutDark from "../../images/logout_dark.svg";
import mobileMenuDark from "../../images/menu-mobile-dark.svg";
import closeMenuButton from "../../images/close_button.svg";

import { useState, useEffect } from "react";

function Navigation(props) {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const closeByEscape = (e) => {
      if (e.key === "Escape") {
        setShowMobileMenu(false);
      }
    };

    document.addEventListener("keydown", closeByEscape);
    return () => document.removeEventListener("keydown", closeByEscape);
  });

  function toggleMenu() {
    if (showMobileMenu) {
      setShowMobileMenu(false);
    } else setShowMobileMenu(true);
  }

  return (
    <div
      className={`navigation ${
        location.pathname === "/saved-news" ? "navigation__type_dark" : ""
      } ${showMobileMenu && "navigation_type_menu_active"}`}
      onClick={toggleMenu}
    >
      <div
        className={`navigation__wraper ${
          showMobileMenu && "navigation_type_background-dark"
        }`}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <p
          className={`navigation__logo ${
            location.pathname === "/saved-news"
              ? "navigation__logo_type_dark"
              : ""
          }`}
        >
          News Explorer
        </p>
        <div className="navigation__mobile-menu">
          <button className="navigation__mobile-button" onClick={toggleMenu}>
            <img
              className="navigation__menu-button"
              src={showMobileMenu ? closeMenuButton : mobileMenuDark}
            ></img>
          </button>
        </div>
        <nav
          className={`navigation__data ${
            showMobileMenu && "navigation__data_active"
          }`}
        >
          <div className="navigation__normal-menu">
            <Link
              to={"/"}
              className={`navigation__link navigation__link_active-home ${
                location.pathname === "/saved-news"
                  ? "navigation__link_type_dark"
                  : ""
              }`}
            >
              Home
            </Link>
            {props.isLoggedin && (
              <Link
                to={"/saved-news"}
                className={`navigation__link ${
                  location.pathname === "/saved-news" &&
                  "navigation__link_type_dark navigation__link_active-saved-news"
                }`}
              >
                Saved articles
              </Link>
            )}
            {props.isLoggedin ? (
              <button
                onClick={props.onLogout}
                className={`navigation__button ${
                  location.pathname === "/saved-news"
                    ? "navigation__button_type_dark"
                    : ""
                }`}
              >
                Elise
                <img
                  className={"logout-icon"}
                  alt="logout"
                  src={
                    location.pathname === "/saved-news"
                      ? logoutDark
                      : logoutLight
                  }
                />
              </button>
            ) : (
              <button
                onClick={props.onSignInClick}
                className={`navigation__button ${
                  location.pathname === "/saved-news"
                    ? "navigation__button_type_dark"
                    : ""
                }`}
              >
                Sign in
              </button>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navigation;
