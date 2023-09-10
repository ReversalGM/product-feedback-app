import { useState } from "react"
import "./FeedbackMain.css"
import data from "/src/assets/data.json"
import { FeedbackCard } from "../FeedbackCard/FeedbackCard"
import { Button } from "/src/components/Button/Button.jsx"
import { Dropdown } from "/src/components/Dropdown/Dropdown"
export function FeedbackMain(props) {
  const filterList = [
    "Most Upvotes",
    "Least Upvotes",
    "Most Comments",
    "Least Comments",
  ]
  const [filter, setFilter] = useState(filterList[0])

  function handleFilterClick(newValue) {
    setFilter(newValue)
  }
  return (
    <>
      <header className="feedback__header">
        <h1 className="feedback__header-title">Frontend mentor</h1>
        <h2 className="feedback__header-subtitle">Feedback Board</h2>
        <button className="feedback__header-button btn">
          <img src="/src/assets/shared/mobile/icon-hamburger.svg"></img>
        </button>
      </header>
      <div className="feedback__filter">
        <span className="feedback__filter-text">
          Sort by :
          <Dropdown
            btnProps={{
              btnClasses: "feedback__filter-btn",
              btnIconRight: "/src/assets/shared/icon-arrow-down.svg",
              btnIconAltRight: "down-arrow icon",
            }}
            value={filter}
            setValue={handleFilterClick}
            valueList={filterList}
          ></Dropdown>
        </span>
        <Button btnClasses="btn--feedback" btnText="+ Add Feedback"></Button>
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
