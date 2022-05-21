import { useState } from "react";
import { Link } from "react-router-dom";
import "./signin.css";
import closeButton from "../../images/close_button.svg";
import PopupWithForm from "../PopupWithForm/popupwithform";

function SignIn(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleSignInSubmit(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <PopupWithForm
      onSubmit={handleSubmit}
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSwitch={props.handleFormSwitch}
      redirectText={props.redirectText}
      modaltype={"signin-open"}
    >
      <form className="form" onSubmit={handleSubmit}>
        <h2 className="form__title">Sign in</h2>
        <p className="form__subtitle">Email</p>
        <input
          className="form__input"
          id="email-input"
          name="email"
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <span
          id="email-input-error"
          className="form__error from__error_visible"
        >
          as dasd as
        </span>
        <p className="form__subtitle">Password</p>
        <input
          className="form__input"
          id="password-input"
          name="password"
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <span
          id="password-input-error"
          className="form__error from__error_visible"
        >
          as dasd as
        </span>
        <button
          className="form__submit form__submit_active"
          //   onClick={props.handleFormSwitch}
        >
          Sign in
        </button>
      </form>
      {/* link to login page */}
    </PopupWithForm>
  );
}

export default SignIn;
