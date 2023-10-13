import "./FeedbackCard.css"
import { Button } from "/src/components/Button/Button.jsx"
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

  function handleUpvote(event) {
    setUpvoted((prev) => !prev)
  }
  return (
    <>
      <div className="feedback-card">
        <h4 className="feedback-card__title">{title}</h4>
        <p className="feedback-card__description">{description}</p>
        <div className="feedback-card__category">{category}</div>
        <Button
          className={`btn--upvote ${upvoted ? "btn--upvoted" : ""}`}
          btnIcon="/src/assets/shared/icon-arrow-up.svg"
          btnIconAlt="upvote icon"
          clickHandler={handleUpvote}
        >
          {upvotes + upvoted}
        </Button>
        <Button
          className="btn--comments"
          btnIcon="/src/assets/shared/icon-comments.svg"
          btnIconAlt="comment icon"
        >
          {comments?.length}
        </Button>

        {/* <button className="btn btn--comments">
          <img src="/src/assets/shared/icon-comments.svg" alt="comment icon" />
          <span className="btn__text">{comments?.length}</span>
        </button> */}
      </div>
    </>
  )
}
