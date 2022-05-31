import "./main.css";
import NewsCard from "../NewsCard/newscard";
import NewsCardList from "../NewsCardList/newscardlist";
import SavedNews from "../SavedNews/savednews";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function Main({
  cards,
  onCardSave,
  keyword,
  onShowMore,
  onSaveClick,
  onCardDelete,
}) {
  const location = useLocation();

  const [savedCards, setSavedCards] = useState([]);

  const newSavedCards = JSON.parse(localStorage.getItem("savedCards"));

  // function handleSavedCards() {
  //   console.log(cards.length);
  //   if (cards.length === 0) {
  //   }
  // }

  function handleDeleteClick() {}

  return (
    <main className="content">
      {location.pathname === "/" && (
        <>
          <h2 className="content__title">Serarch Results</h2>
          {/* <button onClick={handleSavedCards}>Just Checking</button> */}

          <section className="elements">
            {cards.map((card) => (
              <NewsCard
                key={card.url}
                card={card}
                setSavedCards={setSavedCards}
                savedCards={savedCards}
                // childToParent={childToParent}
                onCardSave={onCardSave}
                // onChange={(value = setSavedCards())}
                // setSavedCards={setSavedCards()}
                // onCardSave={onCardSave}
              />
            ))}
          </section>
          <button className="content__show-more-button" onClick={onShowMore}>
            Show more
          </button>
        </>
      )}
      {location.pathname === "/saved-news" && (
        <>
          {/* <button onClick={handleSavedCards}>Just Checking</button> */}
          <section className="elements">
            {newSavedCards.map((savedCard) => (
              <SavedNews
                key={savedCard.url}
                savedCard={savedCard}
                onDeleteClick={handleDeleteClick}
                onCardDelete={onCardDelete}
              />
            ))}
          </section>
          <button className="content__show-more-button" onClick={onShowMore}>
            HEllO
          </button>
        </>
      )}
    </main>
  );
}
export default Main;
