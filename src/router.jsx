import { createBrowserRouter } from "react-router-dom"
import App from "./App.jsx"

import { FeedbackMain } from "./FeedbackMain/FeedbackMain.jsx"
import { FeedbackDetail } from "./FeedbackDetail/FeedbackDetail.jsx"
import { EditSuggestion } from "./EditSuggestion/EditSuggestion.jsx"
import { NewSuggestion } from "./NewSuggestion/NewSuggestion.jsx"
import { Roadmap } from "./Roadmap/Roadmap.jsx"

export const router = createBrowserRouter([
  { path: "/", element: <FeedbackMain /> },
  { path: "/id", element: <FeedbackDetail /> },
  { path: "/new", element: <NewSuggestion /> },
  { path: "/edit", element: <EditSuggestion /> },
  { path: "/roadmap", element: <Roadmap /> },
])
