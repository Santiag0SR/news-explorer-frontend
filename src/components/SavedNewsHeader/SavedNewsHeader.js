import "./SavedNewsHeader.css";
import { useContext, useState, useEffect } from "react";
import { CurrentUserContext } from "../../contexts/currentusercontext";

function SavedNewsHeader({ savedNews, isLoggedin }) {
  const currentUser = useContext(CurrentUserContext);
  const name = currentUser.name;

  useEffect(() => {
    checkKeywords(); // eslint-disable-next-line
  }, [isLoggedin, savedNews]);

  const [keywords, setKeywords] = useState([]);

  const checkKeywords = () => {
    const keywords = savedNews.map((x) => x.keyword);
    const count = {};

    for (let index = 0; index < keywords.length; index++) {
      const element = keywords[index];

      if (count[element]) {
        count[element] += 1;
      } else {
        count[element] = 1;
      }
    }

    const keywordsOrdered = Object.entries(count)
      .sort((a, b) => b[1] - a[1])
      .map((element) => element[0]);
    setKeywords(keywordsOrdered);
  };

  return (
    <div className="savednewsheader">
      <p className="savednewsheader__subtitle">Saved articles</p>
      <h2 className="savednewsheader__title">
        {name}, you have {savedNews.length} saved articles.
      </h2>
      <p className="savednewsheader__keywords">
        By keywords:&nbsp;{" "}
        <span className="savednewsheader__keywords-bold">
          {keywords.length >= 1 && keywords[0]}
          {keywords.length >= 2 && `, ${keywords[1]}`}
          {keywords.length === 3 && `, and ${keywords[2]}`}
          {keywords.length > 3 && `, and ${keywords.length - 2} other`}
        </span>
      </p>
    </div>
  );
}

export default SavedNewsHeader;
