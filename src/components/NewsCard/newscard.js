import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./newscard.css";
import dateFormat from "dateformat";

function NewsCard({
  card,
  onSaveClick,
  onCardDelete,
  savedArticle,
  isLoggedin,
  checkSavedButton,
  saveWithoutAuth,
}) {
  const [saved, setSaved] = useState(false);
  const location = useLocation();

  const newDateCard = dateFormat(
    `${!card.publishedAt ? card.date : card.publishedAt}`,
    "mmmm dS, yyyy"
  );

  function handleSaveClick() {
    if (isLoggedin) {
      onSaveClick(card);
    } else {
      saveWithoutAuth(card);
      onSaveClick(card);
    }
  }

  function handleDeleteClick() {
    onCardDelete(card);
  }

  useEffect(() => {
    if (location.pathname === "/" && checkSavedButton(card)) {
      setSaved(true);
    } else {
      setSaved(false);
    }
  }, [isLoggedin, card, checkSavedButton]);

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
      <a className="card__link" href={card.url}>
        <img
          className="card__img"
          src={!card.urlToImage ? card.image : card.urlToImage}
          alt={card.title}
        />
        <div className="card__text-container">
          <p className="card__date">{newDateCard}</p>
          <h2 className="card__title">
            {!card.title ? card.title : card.title}
          </h2>
          <p className="card__text">
            {!card.content ? card.text : card.content}
          </p>
          <p className="card__source">
            {!card.source.name ? card.source : card.source.name}
          </p>
        </div>
      </a>
    </article>
  );
}

export default NewsCard;
