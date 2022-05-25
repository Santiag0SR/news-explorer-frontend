const baseUrl = "https://newsapi.org/v2/everything";
const apiKey = "0dedde68476744e1977ef38e53c8b7ea";
var keyword = "apple";

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

  getNewsCards({ keyword }) {
    return fetch(
      ` ${this.baseUrl}?q=${keyword}&pageSize=3&apiKey=${this.apiKey}`,
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
    Authorization: "0dedde68476744e1977ef38e53c8b7ea",
    "Content-Type": "application/json",
  },
  apiKey: "0dedde68476744e1977ef38e53c8b7ea",
});

export default api;

// &${this.apiKey}
