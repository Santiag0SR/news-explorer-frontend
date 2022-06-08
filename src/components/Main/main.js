import "./main.css";
import NewsCard from "../NewsCard/newscard";
import SavedNews from "../SavedNews/savednews";
import { useLocation } from "react-router-dom";
import { useState } from "react";

function Main({
  cards,
  onCardSave,
  keyword,
  onShowMore,
  onSaveClick,
  onCardDelete,
  isDisabled,
}) {
  const location = useLocation();

  // This is just temporary until backend is added
  const [savedCards, setSavedCards] = useState([]);
  const newSavedCards = JSON.parse(localStorage.getItem("savedCards"));

  function handleDeleteClick() {}

  return (
    <main className="content">
      {location.pathname === "/" && (
        <>
          <h2 className="content__title">Serarch Results</h2>
          <section className="elements">
            {cards.map((card) => (
              <NewsCard
                key={card.url}
                card={card}
                setSavedCards={setSavedCards}
                savedCards={savedCards}
                onCardSave={onCardSave}
              />
            ))}
          </section>
          <button
            className={`content__show-more-button ${
              isDisabled && "content__show-more-button_disabled"
            }`}
            onClick={onShowMore}
          >
            {isDisabled ? "Disabled" : "Show more"}
          </button>
        </>
      )}
      {location.pathname === "/saved-news" &&
        (newSavedCards !== null ? (
          <>
            {newSavedCards !== null && (
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
            )}
          </>
        ) : (
          <p className="content__title"> NOTHING SAVED</p>
        ))}
    </main>
  );
}
export default Main;
