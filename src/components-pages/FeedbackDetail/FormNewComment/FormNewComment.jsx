import "./FormNewComment.css"
import { useForm, useWatch } from "react-hook-form"
import { Button } from "../../../components/Button/Button"
import { useState } from "react"
export function FormNewComment() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm()

  function onSubmit(data) {
    console.log(data)
    return
  }

  const textareaContent = useWatch({
    control,
    name: "comment-content",
    defaultValue: "",
  })

  return (
    <>
      <form className="comment-form" onSubmit={handleSubmit(onSubmit)}>
        <h2 className="comment-form__title">Add Comment</h2>
        <textarea
          placeholder="Type your comment here"
          className="comment-form__text-area"
          maxLength="250"
          {...register("comment-content")}
        ></textarea>
        <p className="comment-form__char-remain">{`${
          250 - Number(textareaContent.length)
        } Characters left`}</p>
        <Button className="comment-form__submit-btn">Post Comment</Button>
      </form>
    </>
  )
}
