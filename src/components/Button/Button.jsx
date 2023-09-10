import "./Button.css"
export function Button(props) {
  return (
    <>
      <button
        className={"btn " + props?.btnClasses}
        onClick={(e) => props?.clickHandler(e)}
      >
        {props.btnIcon && (
          <img
            className="btn__icon"
            src={props.btnIcon}
            alt={props.btnIconAlt}
          ></img>
        )}
        {props.btnText}
        {props.btnIconRight && (
          <img
            className="btn__icon--right"
            src={props.btnIconRight}
            alt={props.btnIconAltRight}
          ></img>
        )}
      </button>
    </>
  )
}
