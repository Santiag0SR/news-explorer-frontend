import "./notfound.css";
import notfoundicon from "../../images/not-found.svg";

const NotFound = () => {
  return (
    <div className="notfound">
      <img
        className="notfound-icon"
        src={notfoundicon}
        alt="not-found-icon"
      ></img>
      <p className="notfound-title">Nothing found</p>
      <p className="notfound-subtitle">
        Sorry, but nothing matched your search terms.
      </p>
    </div>
  );
};

export default NotFound;
