import "./popupwithform.css";
import closeButton from "../../images/close_button.svg";

function PopupWithForm(props) {
  return (
    <div className={`modal  ${props.isOpen && `modal_${props.modaltype}`}`}>
      <div className={`modal__box`}>
        <button
          className={`modal__close-button modal__close-button_type_${props.moldalType} button`}
          type="button"
          style={{ backgroundImage: `url(${closeButton})` }}
          onClick={props.onClose}
        />
        {props.children}
        <div>
          <p className="from__redirection">
            or{" "}
            <button className="from__link" onClick={props.onSwitch}>
              {props.redirectText}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default PopupWithForm;
