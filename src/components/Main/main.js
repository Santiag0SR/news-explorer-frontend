import "./main.css";
import NewsCard from "../NewsCard/newscard";
import { useLocation } from "react-router-dom";

function Main({
  onCardSave,
  cards,
  savedCards,
  onShowMore,
  onCardDelete,
  isDisabled,
  isLoggedin,
}) {
  const location = useLocation();

  function handleDeleteClick() {}

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
                onDeleteClick={handleDeleteClick}
                isLoggedin={isLoggedin}
                onCardSave={onCardSave}
                onCardDelete={onCardDelete}
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
                  onDeleteClick={handleDeleteClick}
                  onCardDelete={onCardDelete}
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
