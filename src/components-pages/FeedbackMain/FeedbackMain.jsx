import { useState } from "react"
import "./FeedbackMain.css"
import data from "/src/assets/data.json"
import { CategoryMenu } from "./CategoryMenu/CategoryMenu"
import { FeedbackCard } from "../FeedbackCard/FeedbackCard"
import { Button } from "/src/components/Button/Button.jsx"
import { Dropdown } from "/src/components/Dropdown/Dropdown"
import { RoadmapMenu } from "./RoadmapMenu/RoadmapMenu"
export function FeedbackMain(props) {
  const filterList = [
    "Most Upvotes",
    "Least Upvotes",
    "Most Comments",
    "Least Comments",
  ]
  const categoryList = ["All", "UI", "UX", "Enhancement", "Bug", "Feature"]
  const [filter, setFilter] = useState(filterList[0])
  const [category, setCategory] = useState(categoryList[0])
  const [menuOpen, setMenuOpen] = useState(false)

  function handleFilterClick(newValue) {
    setFilter(newValue)
  }
  return (
    <>
      {/* mobile header */}
      <header className="feedback__header">
        <h1 className="feedback__header-title">Frontend mentor</h1>
        <h2 className="feedback__header-subtitle">Feedback Board</h2>
        <button
          onClick={(event) => {
            setMenuOpen((curState) => !curState)
          }}
          className="feedback__header-button btn"
        >
          <img src="/src/assets/shared/mobile/icon-hamburger.svg"></img>
        </button>
        <div className={"feedback__menu" + (menuOpen ? " opened" : "")}>
          <div className="menu-group">
            <CategoryMenu
              categoryList={categoryList}
              category={category}
              setCategory={(newValue) => {
                setCategory(newValue)
              }}
            />
          </div>
          <div className="menu-group">
            <RoadmapMenu />
          </div>
        </div>
      </header>
      {/* desktop header
      <header>

      </header> */}
      <div className="feedback__filter">
        <span className="feedback__filter-text">
          Sort by :
          <Dropdown
            btnProps={{
              className: "feedback__filter-btn",
              btnIconRight: "/src/assets/shared/icon-arrow-down.svg",
              btnIconAltRight: "down-arrow icon",
            }}
            value={filter}
            setValue={handleFilterClick}
            valueList={filterList}
          ></Dropdown>
        </span>
        <Button className="btn--feedback">+ Add Feedback</Button>
      </div>
      <div className="feedback__list">
        {data.productRequests
          .filter((feedback) => feedback.status === "suggestion")
          .map((feedback) => {
            return <FeedbackCard {...feedback} />
          })}
      </div>
    </>
  )
}
