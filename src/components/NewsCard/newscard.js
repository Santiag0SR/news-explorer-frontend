import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./newscard.css";
import dateFormat from "dateformat";

function NewsCard({ card, onCardSave, onCardDelete, isLoggedin }) {
  const [saved, setSaved] = useState(false);
  const location = useLocation();

  const newDateCard = dateFormat(
    `${!card.publishedAt ? card.date : card.publishedAt}`,
    "mmmm dS, yyyy"
  );

  function handleSaveClick() {
    if (isLoggedin && !saved) {
      onCardSave(card);
      setSaved(true);
    } else {
      onCardSave(card);
      setSaved(false);
    }
  }

  function handleDeleteClick() {
    onCardDelete(card);
  }

  const cardSaveButtonClassName = `card__save-button ${
    saved ? "card__save-button_active" : "card__save-button_inactive"
  }`;

  return (
    <article className="card">
      {location.pathname === "/saved-news" ? (
        <>
          <button
            className="savednews-card__delete-button"
            type="button"
            onClick={handleDeleteClick}
            title="hello"
          />
          <p className="savednews-card__keyword">{card.keyword}</p>
        </>
      ) : (
        <button
          className={cardSaveButtonClassName}
          type="button"
          onClick={handleSaveClick}
          title="hello"
        />
      )}

      <img
        className="card__img"
        src={!card.urlToImage ? card.image : card.urlToImage}
        alt={card.title}
      />
      <div className="card__text-container">
        <p className="card__date">{newDateCard}</p>
        <h2 className="card__title">{!card.title ? card.title : card.title}</h2>
        <p className="card__text">{!card.content ? card.text : card.content}</p>
        <p className="card__source">
          {!card.source.name ? card.source : card.source.name}
        </p>
      </div>
    </article>
  );
}

export default NewsCard;
