import { getDefaultNormalizer } from "@testing-library/react";

class Api {
  constructor(props) {
    this.baseUrl = props.baseUrl;
    this.headers = props.headers;
    this.keyword = props.keyword;
    this.apiKey = props.apiKey;
  }

  //   getProfile() {
  //     return fetch(`${this.baseUrl}/users/me`, {
  //       headers: this.headers,
  //     }).then((res) => console.log(res));
  //   }

  getNewsCards({ keyword, numberCards }) {
    return fetch(
      ` ${this.baseUrl}?q=${keyword}&pageSize=${numberCards}&apiKey=${this.apiKey}`,
      {
        method: "GET",
        headers: this.headers,
      }
    ).then((res) => {
      return res.json();
    });
  }
}

const api = new Api({
  baseUrl: "https://nomoreparties.co/news/v2/everything",
  headers: {
    Authorization: "fee2e9d671074296b23c0e764b18f3c7",
    "Content-Type": "application/json",
  },
  apiKey: "fee2e9d671074296b23c0e764b18f3c7",
});

// santisanchezromero@gmail.com
// 0dedde68476744e1977ef38e53c8b7ea

// santiago@carrerasinternacionales.com
// fee2e9d671074296b23c0e764b18f3c7
export default api;
