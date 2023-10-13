import "./CategoryMenu.css"
import { Button } from "../../../components/Button/Button"

export function CategoryMenu({ categoryList, category, setCategory }) {
  return (
    <ul className="list">
      {categoryList.map((element) => {
        return (
          <li>
            <Button
              clickHandler={(event) => {
                setCategory(element)
              }}
              className={
                "btn--list-item" + (category === element ? " selected" : "")
              }
            >
              {element}
            </Button>
          </li>
        )
      })}
    </ul>
  )
}
