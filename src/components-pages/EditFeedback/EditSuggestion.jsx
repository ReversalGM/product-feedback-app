import "./EditFeedback.css"
import { Button } from "../../components/Button/Button"
import { Dropdown } from "/src/components/Dropdown/Dropdown.jsx"
import { Link } from "react-router-dom"
import { useState } from "react"
import { useForm } from "react-hook-form"

export function EditFeedback() {
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
    <>
      <header className="NewFeedback__header">
        <Button
          element={Link}
          elementProps={{ to: "/" }}
          className="NewFeedback__header__btn"
          btnIcon="/src/assets/shared/icon-arrow-left.svg"
          btnIconAlt="left-arrow icon"
        >
          Go Back
        </Button>
      </header>
      <main className="NewFeedback__main">
        <form onSubmit={handleSubmit(submitForm)} className="NewFeedback__form">
          <img
            className="NewFeedback__form__icon"
            src="/src/assets/shared/icon-edit-feedback.svg"
          ></img>
          <h1 className="NewFeedback__form__heading">Create New Feedback</h1>

          <div className="NewFeedback__input-group">
            <label htmlFor="title" className="NewFeedback__form__title">
              Feedback Title
            </label>
            <label htmlFor="title" className="NewFeedback__form__subtitle">
              Add a short, descriptive headline
            </label>
            <textarea
              id="title"
              className="NewFeedback__form__textarea"
              rows="3"
            ></textarea>
          </div>

          <div className="NewFeedback__input-group">
            <label htmlFor="category" className="NewFeedback__form__title">
              Category
            </label>
            <label htmlFor="category" className="NewFeedback__form__subtitle">
              Choose a category for your feedback
            </label>
            <Dropdown
              className="NewFeedback__dropdown"
              btnProps={{
                className: "feedback__filter-btn",
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

          <div className="NewFeedback__input-group">
            <label className="NewFeedback__form__title" htmlFor="detail">
              Feedback Detail
            </label>
            <label className="NewFeedback__form__subtitle" htmlFor="detail">
              Include any specific comments on what should be improved, added,
              etc.
            </label>
            <textarea
              id="detail"
              className="NewFeedback__form__textarea"
              rows="6"
            ></textarea>
          </div>
          <div className="NewFeedback__input-group--btn">
            <Button className="NewFeedback__form__btn">Add Feedback</Button>
            <Button className="NewFeedback__form__btn NewFeedback__form__btn--blue">
              Cancel
            </Button>
            <Button className="NewFeedback__form__btn EditFeedback__form__btn--red">
              Delete
            </Button>
          </div>
        </form>
      </main>
    </>
  )
}
