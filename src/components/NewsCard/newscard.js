import React from "react";
import "./newscard.css";
// import { CurrentUserContext } from "../contexts/CurrentUserContext";

// function NewsCard({ card, onCardClick, onCardSave, onCardDelete }) {
function NewsCard({ card, onCardSave }) {
  //   const user = React.useContext(CurrentUserContext);
  //   const isOwn = card.owner._id === user._id;
  //   const cardDeleteButtonClassName = `button card__delete-button ${
  //     isOwn ? "card__delete-button_visible" : "card__delete-button_hidden"
  //   }`;
  //   const isLiked = card.likes.some((item) => item._id === user._id);
  //   const cardLikeButtonClassName = `button card__like-button ${
  //     isLiked ? "card__like-button_active" : "card__like-button_inactive"
  //   }`;

  //   function handleClick() {
  //     onCardClick(card);
  //   }

  function handleSaveClick() {
    onCardSave(card);
  }

  //   function handleDeleteClick() {
  //     onCardDelete(card);
  //   }

  return (
    <article className="card">
      <button
        className="card__save-button"
        type="button"
        // onClick={handleSaveClick}
        title="hello"
      />
      <img
        className="card__img"
        src={card.urlToImage}
        alt={card.title}
        // onClick={handleClick}
      />
      <div className="card__text-container">
        <p className="card__date">{card.publishedAt}</p>
        <h2 className="card__title">{card.title} </h2>
        <p className="card__text">{card.content}</p>
        <p className="card__source">{card.source.name}</p>
      </div>
    </article>
  );
}

export default NewsCard;
