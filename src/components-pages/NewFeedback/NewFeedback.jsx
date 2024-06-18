import "./NewFeedback.css"
import { FeedbackForm } from "../../components/FeedbackForm/FeedbackForm"
import { Button } from "../../components/Button/Button"
import { Link } from "react-router-dom"
import arrowLeftIcon from "/assets/images/icon-arrow-left.svg"

export function NewFeedback() {
  return (
    <div className="NewFeedback-container">
      <header className="NewFeedback__header">
        <Button
          element={Link}
          elementProps={{ to: "/" }}
          className="NewFeedback__header__btn"
          btnIcon={arrowLeftIcon}
          btnIconAlt="left-arrow icon"
        >
          Go Back
        </Button>
      </header>
      <main className="NewFeedback__main">
        <FeedbackForm />
      </main>
    </div>
  )
}
