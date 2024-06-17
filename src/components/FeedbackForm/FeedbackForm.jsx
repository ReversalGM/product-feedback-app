import "./FeedbackForm.css"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { Dropdown } from "/src/components/Dropdown/Dropdown.jsx"
import { Button } from "../../components/Button/Button"

export function FeedbackForm() {
  const [feedbackCategory, setFeedbackCategory] = useState("Feature")
  const categoryList = ["UI", "UX", "Enhancement", "Bug", "Feature"]
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm()

  function submitForm(data) {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(submitForm)} className="FeedbackForm__form">
      <img
        className="FeedbackForm__form__icon"
        src="/src/assets/shared/icon-new-feedback.svg"
      ></img>
      <h1 className="FeedbackForm__form__heading">Create New Feedback</h1>

      <div className="FeedbackForm__input-group">
        <label htmlFor="title" className="FeedbackForm__form__title">
          Feedback Title
        </label>
        <label htmlFor="title" className="FeedbackForm__form__subtitle">
          Add a short, descriptive headline
        </label>
        <input id="title" className="FeedbackForm__form__input" />
      </div>

      <div className="FeedbackForm__input-group">
        <label htmlFor="category" className="FeedbackForm__form__title">
          Category
        </label>
        <label htmlFor="category" className="FeedbackForm__form__subtitle">
          Choose a category for your feedback
        </label>
        <Dropdown
          className="FeedbackForm__dropdown"
          btnProps={{
            className: "FeedbackForm__dropdown__button",
            btnIconRight: "/src/assets/shared/icon-arrow-down.svg",
            btnIconAltRight: "down-arrow icon",
          }}
          value={feedbackCategory}
          setValue={(newElement) => {
            setFeedbackCategory(newElement)
          }}
          valueList={categoryList}
        ></Dropdown>
      </div>

      <div className="FeedbackForm__input-group">
        <label className="FeedbackForm__form__title" htmlFor="detail">
          Feedback Detail
        </label>
        <label className="FeedbackForm__form__subtitle" htmlFor="detail">
          Include any specific comments on what should be improved, added, etc.
        </label>
        <textarea
          id="detail"
          className="FeedbackForm__form__textarea"
          rows="6"
        ></textarea>
      </div>
      <div className="FeedbackForm__input-group--btn">
        <Button className="FeedbackForm__form__btn">Add Feedback</Button>
        <Button className="FeedbackForm__form__btn FeedbackForm__form__btn--blue">
          Cancel
        </Button>
      </div>
    </form>
  )
}
