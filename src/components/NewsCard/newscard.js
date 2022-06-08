import React, { useState } from "react";
import "./newscard.css";

let savedCardList = [];

function NewsCard({ card, onCardSave, setSavedCards }) {
  const [saved, setSaved] = useState(false);

  function handleSaveClick() {
    if (saved) {
      setSaved(false);
      savedCardList = savedCardList.filter((item) => item !== card);
      console.log(savedCardList);
    } else {
      setSaved(true);
      onCardSave(card);
      console.log(card);
      savedCardList.push(card);
      console.log(savedCardList);
    }
    setSavedCards(savedCardList);
    localStorage.setItem("savedCards", JSON.stringify(savedCardList));
  }

  const cardSaveButtonClassName = `card__save-button ${
    saved ? "card__save-button_active" : "card__save-button_inactive"
  }`;

  // TO ADD WHEN BACKEND ADDED
  // function handleSaveClick() {
  //   onCardSave(card);
  // }

  //   function handleDeleteClick() {
  //     onCardDelete(card);
  //   }

  return (
    <article className="card">
      <button
        className={cardSaveButtonClassName}
        type="button"
        onClick={handleSaveClick}
        title="hello"
      />
      <img className="card__img" src={card.urlToImage} alt={card.title} />
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
