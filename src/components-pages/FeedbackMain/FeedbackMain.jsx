import { useState } from "react"
import "./FeedbackMain.css"
import data from "/src/assets/data.json"
import { CategoryMenu } from "./CategoryMenu/CategoryMenu"
import { FeedbackCard } from "../FeedbackCard/FeedbackCard"
import { Button } from "/src/components/Button/Button.jsx"
import { Dropdown } from "/src/components/Dropdown/Dropdown"
import { RoadmapMenu } from "./RoadmapMenu/RoadmapMenu"
import { useViewport } from "../../hooks/useViewport"
import { Link } from "react-router-dom"

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
  const { width, height } = useViewport()

  function handleFilterClick(newValue) {
    setFilter(newValue)
  }
  return (
    <div className="feedback__page-container">
      <header className="feedback__header-container">
        <div className="feedback__header">
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
        </div>
        <div
          className={`feedback__menu-backdrop ${menuOpen && "opened"}`}
          onClick={() => {
            setMenuOpen(false)
          }}
        ></div>
        <div className={`feedback__menu ${menuOpen && "opened"}`}>
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

      <div className="feedback__filter">
        <span className="feedback__count">
          <img src="/src/assets/suggestions/icon-suggestions.svg" />
          {`${data?.productRequests?.length ?? 0} Suggestions`}
        </span>
        <span className="feedback__filter-text">
          Sort by :
          <Dropdown
            btnProps={{
              className: "feedback__filter-btn",
              btnIconRight: "/src/assets/shared/icon-arrow-down.svg",
              btnIconAltRight: "",
            }}
            value={filter}
            setValue={handleFilterClick}
            valueList={filterList}
          ></Dropdown>
        </span>
        <Button
          element={Link}
          elementProps={{ to: "/new" }}
          className="btn--feedback"
        >
          + Add Feedback
        </Button>
      </div>
      <div className="feedback__list">
        {data?.productRequests?.length > 0 ? (
          // list of suggestions
          data.productRequests
            .filter((feedback) => feedback.status === "suggestion")
            .map((feedback) => {
              return <FeedbackCard {...feedback} />
            })
        ) : (
          // empty state
          <div className="feedback__empty">
            <img
              className="feedback__empty__image"
              src="/src/assets/suggestions/illustration-empty.svg"
              alt=""
            ></img>
            <div className="feedback__empty__text-container">
              <h2 className="feedback__empty__title">
                There is no feeedback yet.
              </h2>
              <p className="feedback__empty__text">
                Got a suggestion? Found a bug that needs to be squashed? We love
                hearing about new ideas to improve our app.
              </p>
            </div>
            <Button
              element={Link}
              elementProps={{ to: "/new" }}
              className="btn--feedback"
            >
              + Add Feedback
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
