import "./FeedbackMain.css"
import data from "/src/assets/data.json"
import { FeedbackCard } from "../FeedbackCard/FeedbackCard"

export function FeedbackMain(props) {
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
          <button className="btn btn--filter">
            <span>Most Upvotes</span>
            <img
              className="btn__icon--filter"
              src="/src/assets/shared/icon-arrow-down.svg"
            ></img>
          </button>
        </span>
        <button className="btn btn--purple">+ Add Feedback</button>
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
