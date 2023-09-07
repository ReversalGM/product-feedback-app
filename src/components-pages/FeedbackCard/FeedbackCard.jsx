import "./FeedbackCard.css"
import { useState } from "react"
export function FeedbackCard({
  id,
  title,
  category,
  upvotes,
  status,
  description,
  comments,
}) {
  const [upvoted, setUpvoted] = useState(false)
  return (
    <>
      <div className="feedback-card">
        <h4 className="feedback-card__title">{title}</h4>
        <p className="feedback-card__description">{description}</p>
        <div className="feedback-card__category">{category}</div>
        <button className={`btn btn--upvote ${upvoted ? "btn--upvoted" : ""}`}>
          <img
            src="/src/assets/shared/icon-arrow-up.svg"
            alt="upvote icon"
            className={`${upvoted ? "btn__icon--upvoted" : ""}`}
          />
          <span
            className="btn__text"
            onClick={(event) => {
              setUpvoted((prev) => !prev)
              console.log(upvoted)
            }}
          >
            {upvotes + upvoted}
          </span>
        </button>
        <button className="btn btn--comments">
          <img src="/src/assets/shared/icon-comments.svg" alt="comment icon" />
          <span className="btn__text">{comments?.length}</span>
        </button>
      </div>
    </>
  )
}
