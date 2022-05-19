import "./popupwithform.css";
import closeButton from "../../images/close_button.svg";

function PopupWithForm(props) {
  return (
    <div className={`modal  ${props.isOpen && "modal_open"}`}>
      <div className={`modal__box`}>
        <button
          className={`modal__close-button modal__close-button_type_${props.moldalType} button`}
          type="button"
          style={{ backgroundImage: `url(${closeButton})` }}
          onClick={props.onClose}
        />
        <form className="form" onSubmit="{handleSubmit}">
          <h2 className="form__title">Sign in</h2>
          <p className="form__subtitle">Email</p>
          <input
            className="form__input"
            id="email-input"
            name="email"
            type="email"
            placeholder="Enter email"
            // value="{email}"
            // onChange="{(e) => setEmail(e.target.value)}"
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
            // value="{password}"
            // onChange="{(e) => setPassword(e.target.value)}"
          />
          <span
            id="password-input-error"
            className="form__error from__error_visible"
          >
            as dasd as
          </span>
          <button className="form__submit form__submit_active">Sign in</button>
        </form>
        {/* link to login page */}
        <div>
          <p className="from__redirection">
            or{" "}
            <a to="/signup" className="from__link">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default PopupWithForm;
