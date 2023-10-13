import "./CommentCard.css"
import { Button } from "../../components/Button/Button"
export function CommentCard({
  id,
  content,
  user: { image, name, username },
  replyingTo,
  replies,
  className,
}) {
  return (
    <div className={"comment-card" + (" " + className || "")}>
      <img
        className="comment-card__profile-picture"
        alt="User Profile Picture"
        src={image.slice(1)}
      />
      <h3 className="comment-card__real-name">{name}</h3>
      <h4 className="comment-card__username">{"@" + username}</h4>
      <Button className="comment-card__reply-btn">Reply</Button>
      <p className="comment-card__content">
        {replyingTo && (
          <span className="comment-card__replying-to">
            {"@" + replyingTo + " "}
          </span>
        )}
        {content}
      </p>
      {replies && (
        <div className="comment-card__replies__container">
          {replies.map((element) => {
            return (
              <CommentCard
                key={crypto.randomUUID()}
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
