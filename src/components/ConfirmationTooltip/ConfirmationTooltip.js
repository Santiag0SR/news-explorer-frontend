import closeButton from "../../images/close_button.svg";
import "./ConfirmationTooltip.css";

function ConfirmationTooltip(props) {
  return (
    <div
      className={`tooltip ${
        props.isOpen && `tooltip_confirmationtooltip-open`
      }`}
    >
      <div className={`tooltip__box`}>
        <button
          className={`tooltip__close-button button`}
          type="button"
          style={{ backgroundImage: `url(${closeButton})` }}
          onClick={props.onClose}
        />
        <h2 className="confirmationtooltip__title">
          Registration successfully completed!
        </h2>
        <button className="confirmationtooltip__link" onClick={props.onClick}>
          Sign In
        </button>
      </div>
    </div>
  );
}

export default ConfirmationTooltip;
