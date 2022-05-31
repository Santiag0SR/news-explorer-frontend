import "./navigationdark.css";
// import logout from "../../images/logout.svg";

function NavigationDark() {
  return (
    <div className="navigationdark">
      <p className="navigationdark__logo">News Explorer</p>
      <nav className={`navigationdark__data`}>
        <a className={`navigationdark__link`}>Home</a>
        <a
          to={"/singin"}
          className={`navigationdark__link navigationdark__link_active-saved-articles`}
          onClick={"#"}
        >
          Saved articles
        </a>
        <button
          to={"/singin"}
          className={`navigationdark__button`}
          onClick={"#"}
        >
          Elise
          {/* <img className="logout-icon" alt="logout" src={logout} /> */}
        </button>
      </nav>
    </div>
  );
}

export default NavigationDark;
