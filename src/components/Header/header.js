import { useState } from "react";
import "./header.css";

function Header(props) {
  const [search, setSearch] = useState("");
  const [buttonClicked, setButtonClicked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleSearchSubmit(search);
    setSearch("");
  };

  const handleMouseEvent = (e) => {
    if (e.type === "mousedown") {
      setButtonClicked(true);
      console.log(buttonClicked);
    } else {
      setButtonClicked(false);
      console.log(buttonClicked);
    }
  };

  return (
    <div className="header">
      <div className="header__content">
        <h2 className="header__title">What's going on in the world?</h2>
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
          <button
            className={`search-form__button ${
              buttonClicked
                ? "search-form__button_clicked"
                : "search-form__button_hover"
            }`}
            onMouseDown={handleMouseEvent}
            onMouseUp={handleMouseEvent}
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
}

export default Header;
