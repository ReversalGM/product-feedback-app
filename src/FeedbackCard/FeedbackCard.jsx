import "./FeedbackCard.css"

export function FeedbackCard(props) {
  return (
    <>
      <div className="feedback-card">
        <h4 className="feedback-card__title">Add tags for solutions</h4>
        <p className="feedback-card__description">
          Easier to search for solutions based on a specific stack.
        </p>
        <div className="feedback-card__category">Enhancement</div>
        <button className="btn btn--upvote">
          <img src="/src/assets/shared/icon-arrow-up.svg" alt="upvote icon" />
          <span className="btn__text">99</span>
        </button>
        <button className="btn btn--comments">
          <img src="/src/assets/shared/icon-comments.svg" alt="comment icon" />
          <span className="btn__text">4</span>
        </button>
      </div>
    </>
  )
}

// "id": 2,
// "title": "Add a dark theme option",
// "category": "feature",
// "upvotes": 99,
// "status": "suggestion",
// "description": "It would help people with light sensitivities and who prefer dark mode.",
// "comments": [
