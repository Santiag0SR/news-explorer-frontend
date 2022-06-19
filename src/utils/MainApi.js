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
      console.log(res);
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
      console.log(info);
      if (info.token) {
        localStorage.setItem("jwt", info.token);
        localStorage.setItem("name", info.data.name);
        return info;
      } else {
        return;
      }
    });
};

// // export const getContent = (token) => {
// //   return fetch(`${BASE_URL}/users/me`, {
// //     method: "GET",
// //     headers: {
// //       Accept: "application/json",
// //       "Content-Type": "application/json",
// //       Authorization: `Bearer ${token}`,
// //     },
// //   })
// //     .then(checkErrors)
// //     .then((data) => data);
// // };

// // getCards() {
// //     return fetch(`${this.baseUrl}/cards`, {
// //       headers: {
// //         authorization: `Bearer ${localStorage.getItem("jwt")}`,
// //         "Content-Type": "application/json",
// //       },
// //     }).then((res) => this._checkErrors(res));
// //   }

// // deleteCard(cardId) {
// //     return fetch(`${this.baseUrl}/cards/${cardId}`, {
// //       method: "DELETE",
// //       headers: {
// //         authorization: `Bearer ${localStorage.getItem("jwt")}`,
// //         "Content-Type": "application/json",
// //       },
// //     }).then((res) => this._checkErrors(res));
// //   }
