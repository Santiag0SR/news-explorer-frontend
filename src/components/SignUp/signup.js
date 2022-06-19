import { useState } from "react";
import PopupWithForm from "../PopupWithForm/popupwithform";

function SignUp({
  isOpen,
  onClose,
  handleFormSwitch,
  redirectText,
  onSignup,
  serverError,
  values,
  errors,
  isValid,
  onFormChange,
}) {
  const handleChange = (event) => {
    onFormChange(event);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSignup(values.email, values.password, values.name);
  };

  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      onSwitch={handleFormSwitch}
      redirectText={redirectText}
      modaltype={"signup-open"}
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
          value={!values.email ? "" : values.email}
          onChange={handleChange}
          required
        />
        <span
          id="email-input-error"
          className={`form__error ${
            errors.email === {} ? "from__error_hidden" : "from__error_visible"
          }`}
        >
          {errors.email}
        </span>
        <p className="form__subtitle">Password</p>
        <input
          className="form__input"
          id="password-signup-input"
          name="password"
          type="password"
          placeholder="Enter password"
          minLength={"8"}
          maxLength={"20"}
          value={!values.password ? "" : values.password}
          onChange={handleChange}
          required
        />
        <span
          id="password-input-error"
          className={`form__error ${
            errors.password === {}
              ? "from__error_hidden"
              : "from__error_visible"
          }`}
        >
          {errors.password}
        </span>
        <p className="form__subtitle">Username</p>
        <input
          className="form__input"
          id="user-signup-input"
          name="name"
          type="text"
          placeholder="Enter user"
          minLength={"2"}
          maxLength={"20"}
          value={!values.name ? "" : values.name}
          onChange={handleChange}
          required
        />
        <span
          id="user-input-error"
          className={`form__error ${
            errors.user === {} ? "from__error_hidden" : "from__error_visible"
          }`}
        >
          {errors.user}
        </span>
        <span
          id="server-error"
          className={`form__error form__error_type_server ${
            serverError === {} ? "from__error_hidden" : "from__error_visible"
          }`}
        >
          {serverError}
        </span>
        <button className={`form__submit  ${isValid && "form__submit_active"}`}>
          Sign up
        </button>
      </form>
    </PopupWithForm>
  );
}

export default SignUp;
