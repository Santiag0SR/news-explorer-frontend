import SearchForm from "../SearchForm/searchform";
import "./header.css";

function Header(props) {
  return (
    <div className="header">
      <div className="header__content">
        <h1 className="header__title">What's going on in the world?</h1>
        <h3 className="header__subtitle">
          Find the latest news on any topic and save them in your personal
          account.
        </h3>
        <SearchForm handleSearchSubmit={props.handleSearchSubmit} />
      </div>
    </div>
  );
}

export default Header;
