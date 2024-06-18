import "./EditFeedback.css"
import { Button } from "../../components/Button/Button"
import { Link } from "react-router-dom"
import { FeedbackForm } from "../../components/FeedbackForm/FeedbackForm"
import leftArrowIcon from "/assets/images/icon-arrow-left.svg"

export function EditFeedback() {
  return (
    <div className="EditFeedback-container">
      <header className="EditFeedback__header">
        <Button
          element={Link}
          elementProps={{ to: "/" }}
          className="EditFeedback__header__btn"
          btnIcon={leftArrowIcon}
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
