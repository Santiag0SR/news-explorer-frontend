import "./navigation.css";
import { Link, useLocation } from "react-router-dom";
import logoutLight from "../../images/logout_light.svg";
import logoutDark from "../../images/logout_dark.svg";

function Navigation(props) {
  const location = useLocation();

  return (
    <div
      className={`navigation ${
        location.pathname === "/saved-news" ? "navigation__type_dark" : ""
      }`}
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
      <nav className={`navigation__data`}>
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
                location.pathname === "/saved-news" ? logoutDark : logoutLight
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
      </nav>
    </div>
  );
}

export default Navigation;
