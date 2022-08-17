import "./Navigation.css";
import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import logoutLight from "../../images/logout_light.svg";
import logoutDark from "../../images/logout_dark.svg";
import mobileMenuLight from "../../images/menu-mobile-light.svg";
import mobileMenuDark from "../../images/menu-mobile-dark.svg";
import closeMenuButton from "../../images/close_button.svg";
import { CurrentUserContext } from "../../contexts/currentusercontext";

function Navigation(props) {
  const location = useLocation();
  const currentUser = useContext(CurrentUserContext);
  const name = currentUser.name;

  return (
    <div
      className={`navigation ${
        props.showMobileMenu && "navigation_type_menu_active"
      }`}
      onClick={props.toggleMenu}
    >
      <div
        className={`navigation__wraper ${
          location.pathname === "/saved-news"
            ? "navigation__wraper_type_dark"
            : ""
        } ${props.showMobileMenu && "navigation_wraper_type_background-dark"}`}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <p
          className={`navigation__logo ${
            location.pathname === "/saved-news" && !props.showMobileMenu
              ? "navigation__logo_type_dark"
              : "navigation__logo_mobile_open"
          }`}
        >
          News Explorer
        </p>
        <div className="navigation__mobile-menu">
          <button
            className="navigation__mobile-button"
            onClick={props.toggleMenu}
          >
            <img
              className="navigation__menu-button"
              alt="navigation-menu-button"
              src={
                location.pathname === "/saved-news"
                  ? props.showMobileMenu
                    ? closeMenuButton
                    : mobileMenuDark
                  : props.showMobileMenu
                  ? closeMenuButton
                  : mobileMenuLight
              }
            ></img>
          </button>
        </div>
        <nav
          className={`navigation__data ${
            props.showMobileMenu && "navigation__data_active"
          }`}
        >
          <div className="navigation__normal-menu">
            <Link
              to={"/"}
              onClick={props.onLinkClick}
              className={`navigation__link navigation__link_active-home ${
                location.pathname === "/saved-news" && !props.showMobileMenu
                  ? "navigation__link_type_dark"
                  : ""
              }`}
            >
              Home
            </Link>
            {props.isLoggedin && (
              <Link
                to={"/saved-news"}
                onClick={props.onLinkClick}
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
                {name}
                <img
                  className={"logout-icon"}
                  alt="logout"
                  src={
                    location.pathname === "/saved-news" && !props.showMobileMenu
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
