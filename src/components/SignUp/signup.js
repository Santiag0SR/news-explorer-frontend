import { useState, useCallback } from "react";
import PopupWithForm from "../PopupWithForm/popupwithform";

function SignUp(props) {
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
    const name = values.user;
    props.onSignup(email, password, name);
    resetForm();
  };

  return (
    <PopupWithForm
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSwitch={props.handleFormSwitch}
      modaltype={"signup-open"}
      redirectText={props.redirectText}
      onChange={handleChange}
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
          value={values.email}
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
        <p className="form__subtitle">Username</p>
        <input
          className="form__input"
          id="user-signup-input"
          name="user"
          type="text"
          placeholder="Enter user"
          minLength={"2"}
          maxLength={"20"}
          value={values.user}
          onChange={handleChange}
          required
        />
        <span
          id="email-input-error"
          className={`form__error ${
            errors.user === {} ? "from__error_hidden" : "from__error_visible"
          }`}
        >
          {errors.user}
        </span>
        <button className={`form__submit  ${isValid && "form__submit_active"}`}>
          Sign up
        </button>
      </form>
    </PopupWithForm>
  );
}

export default SignUp;
