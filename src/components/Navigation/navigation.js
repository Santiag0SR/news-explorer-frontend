import "./navigation.css";
import { Link, useLocation } from "react-router-dom";

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
        <Link
          to={"/saved-news"}
          className={`navigation__link ${
            location.pathname === "/saved-news"
              ? "navigation__link_type_dark navigation__link_active-saved-news"
              : "navigation__link_hide"
          }`}
        >
          Saved articles
        </Link>

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
      </nav>
    </div>
  );
}

export default Navigation;
