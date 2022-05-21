import "./footer.css";
import github_icon from "../../images/giticon.png";
import facebook_icon from "../../images/facebookicon.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <p className="footer__author">
        &copy; {new Date().getFullYear()} Supersite, Powered by News API
      </p>

      <nav className="footer__menu">
        <Link to={"/"} className="footer__link">
          Home
        </Link>
        <a className="footer__link">Practicum by Yandex</a>
        <a className="footer__link">
          <img
            className="footer__icon"
            alt="github icon"
            src={github_icon}
          ></img>
        </a>
        <a className="footer__link">
          <img
            className="footer__icon"
            alt="facebook icon"
            src={facebook_icon}
          ></img>
        </a>
      </nav>
    </div>
  );
}

export default Footer;
