import { useState, useCallback } from "react";
import PopupWithForm from "../PopupWithForm/popupwithform";

function SignIn({
  onSignin,
  isOpen,
  onClose,
  handleFormSwitch,
  redirectText,
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
    onSignin(values.email, values.password);
  };

  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      onSwitch={handleFormSwitch}
      redirectText={redirectText}
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
          id="password-input"
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
        <span
          id="server-error"
          className={`form__error form__error_type_server ${
            serverError === {} ? "from__error_hidden" : "from__error_visible"
          }`}
        >
          {serverError}
        </span>
        <button className={`form__submit  ${isValid && "form__submit_active"}`}>
          Sign in
        </button>
      </form>
    </PopupWithForm>
  );
}

export default SignIn;
