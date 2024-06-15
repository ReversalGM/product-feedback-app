import "./CommentCard.css"
import { Button } from "../../components/Button/Button"
import { useState } from "react"
import { FormNewComment } from "../FeedbackDetail/FormNewComment/FormNewComment"
export function CommentCard({
  id,
  content,
  user: { image, name, username },
  replyingTo,
  replies,
  className,
}) {
  const [replying, setReplying] = useState(false)
  return (
    <div className={"comment-card" + (" " + className || "")}>
      <img
        className="comment-card__profile-picture"
        alt="User Profile Picture"
        src={image.slice(1)}
      />
      <h3 className="comment-card__real-name">{name}</h3>
      <h4 className="comment-card__username">{"@" + username}</h4>
      <Button
        elementProps={{ onClick: () => setReplying(true) }}
        className="comment-card__reply-btn"
      >
        Reply
      </Button>
      {replies && <div className="comment-card__extended-border"></div>}
      <p className="comment-card__content">
        {replyingTo && (
          <span className="comment-card__replying-to">
            {"@" + replyingTo + " "}
          </span>
        )}
        {content}
      </p>
      {replying && (
        <div className="comment-card__reply">
          <FormNewComment isReply={true} />
        </div>
      )}
      {replies && (
        <div className="comment-card__replies__container">
          {replies.map((element, index) => {
            return (
              <CommentCard
                key={index}
                className="comment-card--reply"
                {...element}
              />
            )
          })}
        </div>
      )}
    </div>
  )
}
