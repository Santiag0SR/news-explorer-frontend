import "./main.css";
import cardimage from "../../images/image_08.png";

function Main() {
  return (
    <main className="content">
      <h2 className="content__title">Serarch Results</h2>
      <section className="elements">
        <article className="card">
          <button
            className="card__save-button"
            type="button"
            onClick="{handlesaveClick}"
            title="hello"
          />
          <img
            className="card__img"
            src={cardimage}
            alt="{card.name}"
            onClick="{handleClick}"
          />
          <div className="card__text-container">
            <p className="card__date">November 4, 2020</p>
            <h2 className="card__title">
              Everyone Needs a Special 'Sit Spot' in Nature
            </h2>
            <p className="card__text">
              Ever since I read Richard Louv's influential book, "Last Child in
              the Woods," the idea of having a special "sit spot" has stuck with
              me. This advice, which Louv attributes to nature educator Jon
              Young, is for both adults and children to find...
            </p>
            <p className="card__source">TREEHUGGER</p>
          </div>
        </article>
        <article className="card">
          <button
            className="card__save-button"
            type="button"
            onClick="{handlesaveClick}"
          />
          <img
            className="card__img"
            src={cardimage}
            alt="{card.name}"
            onClick="{handleClick}"
          />
          <div className="card__text-container">
            <p className="card__date">November 4, 2020</p>
            <h2 className="card__title">
              Everyone Needs a Special 'Sit Spot' in Nature
            </h2>
            <p className="card__text">
              Ever since I read Richard Louv's influential book, "Last Child in
              the Woods," the idea of having a special "sit spot" has stuck with
              me. This advice, which Louv attributes to nature educator Jon
              Young, is for both adults and children to find...
            </p>
            <p className="card__source">TREEHUGGER</p>
          </div>
        </article>
        <article className="card">
          <button
            className="card__save-button"
            type="button"
            onClick="{handlesaveClick}"
          />
          <img
            className="card__img"
            src={cardimage}
            alt="{card.name}"
            onClick="{handleClick}"
          />
          <div className="card__text-container">
            <p className="card__date">November 4, 2020</p>
            <h2 className="card__title">
              Everyone Needs a Special 'Sit Spot' in Nature
            </h2>
            <p className="card__text">
              Ever since I read Richard Louv's influential book, "Last Child in
              the Woods," the idea of having a special "sit spot" has stuck with
              me. This advice, which Louv attributes to nature educator Jon
              Young, is for both adults and children to find...
            </p>
            <p className="card__source">TREEHUGGER</p>
          </div>
        </article>
      </section>
      <button className="content__show-more-button">Show more</button>
    </main>
  );
}
export default Main;
