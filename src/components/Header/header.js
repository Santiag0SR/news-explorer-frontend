import { useState } from "react";
import "./header.css";

function Header(props) {
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleSearchSubmit(search);
    setSearch("");
  };

  return (
    <div className="header">
      <h2 className="header__title">What's going on in the world</h2>
      <h3 className="header__subtitle">
        Find the latest news on any topic and save them in your personal
        account.
      </h3>

      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="search-form__input"
          id="search-input"
          name="search"
          placeholder="Enter topic"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        ></input>
        <button className="search-form__button">Search</button>
      </form>
    </div>
  );
}

export default Header;
