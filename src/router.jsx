import { createBrowserRouter } from "react-router-dom"

import { FeedbackMain } from "./FeedbackMain/FeedbackMain.jsx"
import { FeedbackDetail } from "./FeedbackDetail/FeedbackDetail.jsx"
import { EditFeedback } from "./EditFeedback/EditSuggestion.jsx"
import { NewFeedback } from "./NewFeedback/NewFeedback.jsx"
import { Roadmap } from "./Roadmap/Roadmap.jsx"

export const router = createBrowserRouter([
  { path: "/", element: <FeedbackMain /> },
  { path: "/:feedbackId", element: <FeedbackDetail /> },
  { path: "/new", element: <NewFeedback /> },
  { path: "/edit", element: <EditFeedback /> },
  { path: "/roadmap", element: <Roadmap /> },
])
