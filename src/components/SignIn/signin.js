import { useState, useCallback } from "react";
import PopupWithForm from "../PopupWithForm/popupwithform";

function SignIn(props) {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: target.validationMessage });
    setIsValid(target.closest("form").checkValidity());
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = values.email;
    const password = values.password;
    props.onSignin(email, password);
    resetForm();
  };

  return (
    <PopupWithForm
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
          value={values.email}
          onChange={handleChange}
          required
        />
        <span
          id="email-input-error"
          c
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
          value={values.password}
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
        <button className={`form__submit  ${isValid && "form__submit_active"}`}>
          Sign in
        </button>
      </form>
    </PopupWithForm>
  );
}

export default SignIn;
