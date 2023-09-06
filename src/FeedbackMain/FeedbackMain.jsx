import "./FeedbackMain.css"

import { FeedbackCard } from "../FeedbackCard/FeedbackCard"
export function FeedbackMain(props) {
  return (
    <>
      <div>FeedbackMain</div>
      <div className="feedback__list">
        <FeedbackCard />
      </div>
    </>
  )
}
