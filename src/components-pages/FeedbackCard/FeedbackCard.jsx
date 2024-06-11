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
  className,
}) {
  const [upvoted, setUpvoted] = useState(false)

  const statusMap = {
    "in-progress": "In Progress",
    planned: "Planned",
    live: "Live",
  }

  function handleUpvote(event) {
    setUpvoted((prev) => !prev)
  }

  function capitalize(str) {
    return str.slice(0, 1).toUpperCase() + str.slice(1)
  }
  return (
    <>
      <div className={"feedback-card " + className}>
        {status in statusMap && (
          <div className="feedback-card__status">
            <div className={"feedback-card__bullet " + className}></div>
            <h4>{statusMap[status]}</h4>
          </div>
        )}
        <h4 className="feedback-card__title">{title}</h4>
        <p className="feedback-card__description">{description}</p>
        <div className="feedback-card__category">{capitalize(category)}</div>
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
          {comments?.length ?? 0}
        </Button>
      </div>
    </>
  )
}
