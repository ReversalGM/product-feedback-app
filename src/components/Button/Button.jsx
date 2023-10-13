import { forwardRef } from "react"
import "./Button.css"

export const Button = forwardRef((props, ref) => {
  let Element = "element" in props ? props.element : "button"
  return (
    <Element
      className={"btn " + props?.className}
      onClick={(e) => props?.clickHandler && props?.clickHandler(e)}
      {...props?.elementProps}
      ref={ref}
    >
      {props.btnIcon && (
        <img
          className="btn__icon"
          src={props.btnIcon}
          alt={props.btnIconAlt}
        ></img>
      )}
      {props.children}
      {props.btnIconRight && (
        <img
          className="btn__icon--right"
          src={props.btnIconRight}
          alt={props.btnIconAltRight}
        ></img>
      )}
    </Element>
  )
})
