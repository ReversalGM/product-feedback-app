import { createBrowserRouter } from "react-router-dom"

import { FeedbackMain } from "./components-pages/FeedbackMain/FeedbackMain.jsx"
import { FeedbackDetail } from "./components-pages/FeedbackDetail/FeedbackDetail.jsx"
import { EditFeedback } from "./components-pages/EditFeedback/EditFeedback.jsx"
import { NewFeedback } from "./components-pages/NewFeedback/NewFeedback.jsx"
import { Roadmap } from "./components-pages/Roadmap/Roadmap.jsx"

export const router = createBrowserRouter([
  { path: "/", element: <FeedbackMain /> },
  { path: "/:feedbackId", element: <FeedbackDetail /> },
  { path: "/new", element: <NewFeedback /> },
  { path: "/edit/:feedbackId", element: <EditFeedback /> },
  { path: "/roadmap", element: <Roadmap /> },
])
