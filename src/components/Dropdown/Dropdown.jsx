import { useState } from "react"
import "./Dropdown.css"
import { Button } from "/src/components/Button/Button.jsx"
import { useClickOutside } from "/src/hooks/useClickOutside"

export function Dropdown(props) {
  const [active, setActive] = useState(false)

  //  Custom hook that references the dropdown and runs passed callback when a click event happens
  //  outside the area of the dropdown
  const dropdownRef = useClickOutside(() => {
    setActive(false)
  })

  return (
    <div ref={dropdownRef} className="Dropdown">
      <Button
        clickHandler={() => setActive((curVal) => !curVal)}
        {...props.btnProps}
        className="Dropdown__button"
      >
        {props.value}
      </Button>
      {active && (
        <ul className="Dropdown__menu">
          {props.valueList.map((element) => {
            return (
              <DropdownItem
                handleClick={() => {
                  props.setValue(element)
                  setActive(false)
                }}
                key={element}
                active={element === props.value}
              >
                {element}
              </DropdownItem>
            )
          })}
        </ul>
      )}
    </div>
  )
}

export function DropdownItem(props) {
  return (
    <>
      <li className="Dropdown__item" onClick={(event) => props.handleClick()}>
        {props.children}
        {props.active && (
          <img
            className="Dropdown__item__icon"
            src="/src/assets/shared/icon-check.svg"
            alt="checkmark icon"
          />
        )}
      </li>
    </>
  )
}
