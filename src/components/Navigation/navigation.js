import "./navigation.css";

function Navigation() {
  return (
    <div className="navigation">
      <p className="navigation__logo">News Explorer</p>
      <nav className={`navigation__data`}>
        <a className={`navigation__link navigation__link_active-home`}>Home</a>
        <a to={"/singin"} className={`navigation__link `} onClick={"#"}>
          Saved articles
        </a>
        <button to={"/singin"} className={`navigation__button`} onClick={"#"}>
          Sign in
        </button>
      </nav>
    </div>
  );
}

export default Navigation;
