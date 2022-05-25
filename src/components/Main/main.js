import "./main.css";
import NewsCard from "../NewsCard/newscard";
import NewsCardList from "../NewsCardList/newscardlist";

function Main({ cards, onCardSave, keyword }) {
  return (
    <main className="content">
      <h2 className="content__title">Serarch Results</h2>
      <section className="elements">
        {cards.map((card) => (
          <NewsCard card={card} onCardSave={onCardSave} />
        ))}
      </section>
      <button className="content__show-more-button">Show more</button>
    </main>
  );
}
export default Main;
