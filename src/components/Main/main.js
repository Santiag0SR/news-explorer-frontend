import "./main.css";
import NewsCard from "../NewsCard/newscard";
import { useLocation } from "react-router-dom";

function Main({
  onSaveClick,
  cards,
  savedCards,
  onShowMore,
  onCardDelete,
  isDisabled,
  isLoggedin,
  savedNews,
  savedArticle,
  checkSavedButton,
  saveWithoutAuth,
}) {
  const location = useLocation();

  return (
    <main className="content">
      {location.pathname === "/" && (
        <>
          <h2 className="content__title">Search Results</h2>
          <section className="elements">
            {cards.map((card) => (
              <NewsCard
                key={card.url}
                card={card}
                isLoggedin={isLoggedin}
                onSaveClick={onSaveClick}
                onCardDelete={onCardDelete}
                savedNews={savedNews}
                savedArticle={savedArticle}
                checkSavedButton={checkSavedButton}
                saveWithoutAuth={saveWithoutAuth}
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
      {location.pathname === "/saved-news" && (
        <>
          {savedCards !== null && (
            <section className="elements elements__saved-news">
              {savedCards.map((card) => (
                <NewsCard
                  key={card._id}
                  card={card}
                  isLoggedin={isLoggedin}
                  onSaveClick={onSaveClick}
                  onCardDelete={onCardDelete}
                  savedNews={savedNews}
                  savedArticle={savedArticle}
                  checkSavedButton={checkSavedButton}
                />
              ))}
            </section>
          )}
        </>
      )}
    </main>
  );
}
export default Main;
