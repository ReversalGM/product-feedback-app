import "./EditFeedback.css"
import { Button } from "../../components/Button/Button"
import { Link } from "react-router-dom"
import { FeedbackForm } from "../../components/FeedbackForm/FeedbackForm"

export function EditFeedback() {
  return (
    <div className="EditFeedback-container">
      <header className="EditFeedback__header">
        <Button
          element={Link}
          elementProps={{ to: "/" }}
          className="EditFeedback__header__btn"
          btnIcon="/src/assets/shared/icon-arrow-left.svg"
          btnIconAlt="left-arrow icon"
        >
          Go Back
        </Button>
      </header>
      <main className="EditFeedback__main">
        <FeedbackForm {...{ isEdit: true }} />
      </main>
    </div>
  )
}
