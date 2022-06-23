class Api {
  constructor(props) {
    this.baseUrl = props.baseUrl;
    this.headers = props.headers;
    this.keyword = props.keyword;
    this.apiKey = props.apiKey;
  }

  _checkErrors(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(res.status);
  }

  getNewsCards({ keyword, numberCards }) {
    return fetch(
      ` ${this.baseUrl}?q=${keyword}&pageSize=${numberCards}&apiKey=${this.apiKey}`,
      {
        method: "GET",
        headers: this.headers,
      }
    ).then(this._checkErrors);
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

export default api;
