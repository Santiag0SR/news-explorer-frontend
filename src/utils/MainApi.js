export const BASE_URL =
  "https://api.santiag0sr-news.students.nomoreparties.sbs";

const checkErrors = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(res.status);
};

export const register = (email, password, name) => {
  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password, name }),
  })
    .then(checkErrors)
    .then((res) => {
      return res;
    });
};

export const login = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
    .then(checkErrors)
    .then((info) => {
      if (info.token) {
        localStorage.setItem("jwt", info.token);
        return info;
      } else {
        return;
      }
    });
};

export const getUser = () => {
  return fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    headers: {
      authorization: `Bearer ${localStorage.getItem("jwt")}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then(checkErrors)
    .then((data) => data);
};

export const saveCard = ({
  keyword,
  title,
  text,
  date,
  source,
  link,
  image,
}) => {
  return fetch(`${BASE_URL}/articles`, {
    method: "POST",
    headers: {
      authorization: `Bearer ${localStorage.getItem("jwt")}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      keyword,
      title,
      text,
      date,
      source,
      link,
      image,
    }),
  })
    .then(checkErrors)
    .then((res) => res);
};

export const getSavedCards = () => {
  return fetch(`${BASE_URL}/articles`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
  })
    .then(checkErrors)
    .then((data) => data);
};

export const deleteCard = (cardId) => {
  return fetch(`${BASE_URL}/articles/${cardId}`, {
    method: "DELETE",
    headers: {
      authorization: `Bearer ${localStorage.getItem("jwt")}`,
      "Content-Type": "application/json",
    },
  })
    .then(checkErrors)
    .then((data) => data);
};
