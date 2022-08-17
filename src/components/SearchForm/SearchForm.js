import { useState } from "react";
import "./SearchForm.css";

function SearchForm(props) {
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
    } else {
      setButtonClicked(false);
    }
  };

  return (
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
  );
}

export default SearchForm;
