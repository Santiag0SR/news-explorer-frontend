import "./savednewsheader.css";

function SavedNewsHeader() {
  return (
    <div className="savednewsheader">
      <p className="savednewsheader__subtitle">Saved articles</p>
      <h2 className="savednewsheader__title">
        Elise, you have 5 saved articles.
      </h2>
      <p className="savednewsheader__keywords">
        By keywords:&nbsp;{" "}
        <span className="savednewsheader__keywords-bold">
          Nature, Yellowstone, and 2 other
        </span>
      </p>
    </div>
  );
}

export default SavedNewsHeader;
