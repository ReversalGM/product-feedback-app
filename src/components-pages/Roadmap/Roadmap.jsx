import "./Roadmap.css"
import { Button } from "../../components/Button/Button"
import { FeedbackCard } from "../FeedbackCard/FeedbackCard"
import data from "/src/assets/data.json"
import { useMemo } from "react"
import { Link } from "react-router-dom"
export function Roadmap() {
  const plannedList = useMemo(() => {
    return data.productRequests.filter((elem) => {
      return elem.status === "planned"
    })
  }, [data])
  const inprogressList = useMemo(() => {
    return data.productRequests.filter((elem) => {
      return elem.status === "in-progress"
    })
  }, [data])

  const liveList = useMemo(() => {
    return data.productRequests.filter((elem) => {
      return elem.status === "live"
    })
  }, [data])
  return (
    <>
      <header className="Roadmap__header">
        <Button
          element={Link}
          elementProps={{ to: "/" }}
          className="Roadmap__header__btn--go-back"
          btnIcon="/src/assets/shared/icon-arrow-left.svg"
          btnIconAlt="left-arrow icon"
        >
          Go Back
        </Button>
        <Button
          element={Link}
          elementProps={{ to: "/" }}
          className="Roadmap__header__btn--add-feedback"
        >
          + Add Feedback
        </Button>
        <h1 className="Roadmap__title">Roadmap</h1>
      </header>
      <main className="Roadmap__container">
        <fieldset className="Roadmap__column-selector">
          <input type="radio" id="planned" name="roadmap-select" />
          <label htmlFor="planned">Planned</label>
          <input type="radio" id="in-progress" name="roadmap-select" />
          <label htmlFor="in-progress">In-Progress</label>
          <input type="radio" id="live" name="roadmap-select" />
          <label htmlFor="live">Live</label>
        </fieldset>
        <div className="Roadmap__container">
          <div className="Roadmap__column Roadmap__column--planned">
            <h2 className="Roadmap__column__title">Planned</h2>
            <h3 className="Roadmap__column__subtitle">
              Ideas prioritized for research
            </h3>
            {plannedList.map((elem) => {
              return (
                <FeedbackCard
                  className={"feedback-card--orange"}
                  key={elem.id}
                  {...elem}
                />
              )
            })}
          </div>
          <div className="Roadmap__column Roadmap__column--in-progress">
            <h2 className="Roadmap__column__title">In-Progress</h2>
            <h3 className="Roadmap__column__subtitle">
              Currently being developed
            </h3>
          </div>
          <div className="Roadmap__column Roadmap__column--live">
            <h2 className="Roadmap__column__title">Live</h2>
            <h3 className="Roadmap__column__subtitle">Released features</h3>
          </div>
        </div>
      </main>
    </>
  )
}
