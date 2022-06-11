import { useState } from "react";
import PopupWithForm from "../PopupWithForm/popupwithform";

function SignUp(props) {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isDisabled, setDisabled] = useState(true);

  // TO ADD WHEN BACKEND
  // const handleChange = (e) => {
  //   console.log(e);
  //   if (!e) {
  //     console.log(isDisabled);
  //     setDisabled(true);
  //   } else {
  //     setDisabled(false);
  //   }
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSignup(user, email, password);
    setEmail("");
    setPassword("");
    setUser("");
  };

  return (
    <PopupWithForm
      onSubmit={handleSubmit}
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSwitch={props.handleFormSwitch}
      modaltype={"signup-open"}
      redirectText={props.redirectText}
    >
      <form className="form" onSubmit={handleSubmit}>
        <h2 className="form__title">Sign Up</h2>

        <p className="form__subtitle">Email</p>
        <input
          className="form__input"
          id="email-signup-input"
          name="email"
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
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
          id="password-signup-input"
          name="password"
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <span
          id="password-input-error"
          className="form__error from__error_visible"
        >
          as dasd as
        </span>
        <p className="form__subtitle">Username</p>
        <input
          className="form__input"
          id="user-signup-input"
          name="user"
          type="text"
          placeholder="Enter user"
          value={user}
          onChange={(e) => {
            setUser(e.target.value);
          }}
          required
        />
        <span
          id="email-input-error"
          className="form__error from__error_visible"
        >
          as dasd as
        </span>
        <button
          className="form__submit form__submit_active"
          disabled={isDisabled}
        >
          Sign up
        </button>
      </form>
    </PopupWithForm>
  );
}

export default SignUp;
