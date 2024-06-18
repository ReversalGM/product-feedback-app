import "./FeedbackDetail.css"
import { Button } from "../../components/Button/Button"
import { FeedbackCard } from "../FeedbackCard/FeedbackCard"
import { CommentCard } from "../CommentCard/CommentCard"
import { FormNewComment } from "./FormNewComment/FormNewComment"
import { Link, useParams } from "react-router-dom"
import data from "/assets/data.json"

export function FeedbackDetail() {
  let { feedbackId } = useParams()
  let postData = data.productRequests.find((element) => {
    return element.id == feedbackId
  })
  return (
    <div className="FeedbackDetail__header-container">
      <header className="FeedbackDetail__header">
        <Button
          element={Link}
          elementProps={{ to: "/" }}
          className="header__go-back-btn"
          btnIcon="/assets/shared/icon-arrow-left.svg"
          btnIconAlt="left-arrow icon"
        >
          Go Back
        </Button>
        <Button
          element={Link}
          elementProps={{ to: `/edit/${feedbackId}` }}
          className="header__edit-feedback-btn"
        >
          Edit Feedback
        </Button>
      </header>
      <main className="FeedbackDetail__body">
        <section className="FeedbackDetail__Post">
          <FeedbackCard {...postData} />
        </section>
        <section className="FeedbackDetail__New-Comments">
          <FormNewComment />
        </section>
        <section className="FeedbackDetail__Comments">
          <h2 className="Comments__title">{`${
            postData?.comments?.length ?? 0
          } Comments`}</h2>
          {postData?.comments.map((element) => {
            return <CommentCard key={element.id} {...element} />
          })}
        </section>
      </main>
    </div>
  )
}
