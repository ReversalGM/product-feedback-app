import "./FeedbackCard.css"
import { Button } from "/src/components/Button/Button.jsx"
import { useState } from "react"
import { Link } from "react-router-dom"
import arrowUpIcon from "/assets/images/icon-arrow-up.svg"
import commentsIcon from "/assets/images/icon-comments.svg"

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
    return str ? str.slice(0, 1).toUpperCase() + str.slice(1) : ""
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
        <Link to={`/${id}`} className="feedback-card__title">
          {title}
        </Link>
        <p className="feedback-card__description">{description}</p>
        <div className="feedback-card__category">{capitalize(category)}</div>
        <Button
          className={`btn--upvote ${upvoted ? "btn--upvoted" : ""}`}
          btnIcon={arrowUpIcon}
          btnIconAlt="upvote icon"
          clickHandler={handleUpvote}
        >
          {upvotes + upvoted}
        </Button>
        <Button
          {...{ element: Link, elementProps: { to: `/${id}` } }}
          className="btn--comments"
          btnIcon={commentsIcon}
          btnIconAlt="comment icon"
        >
          {comments?.length ?? 0}
        </Button>
      </div>
    </>
  )
}
