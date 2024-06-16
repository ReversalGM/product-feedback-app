import "./Roadmap.css"
import { Button } from "../../components/Button/Button"
import { FeedbackCard } from "../FeedbackCard/FeedbackCard"
import data from "/src/assets/data.json"
import { useMemo, useState } from "react"
import { Link } from "react-router-dom"
import { RoadmapTabs } from "./RoadmapTabs/RoadmapTabs"
import { useViewport } from "../../hooks/useViewport"

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

  const { width, height } = useViewport()
  const TABLET_WIDTH = 768

  const tabData = [
    {
      name: "Planned",
      data: plannedList,
      description: "Ideas prioritized for research",
      cardClass: "feedback-card--orange",
      tabClass: "Tab--orange",
    },
    {
      name: "In-Progress",
      data: inprogressList,
      description: "Currently being developed",
      cardClass: "feedback-card--purple",
      tabClass: "Tab--purple",
    },
    {
      name: "Live",
      data: liveList,
      description: "Released features",
      cardClass: "feedback-card--blue",
      tabClass: "Tab--blue",
    },
  ]

  const [selectedTab, setSelectedTab] = useState(tabData[0])

  return (
    <div className="Roadmap-container">
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
      {width >= TABLET_WIDTH ? (
        // tablet and desktop layout
        <main className="Roadmap__main">
          {tabData.map((curTab) => {
            return (
              <>
                <div className="Roadmap__column__title__container">
                  <h2 className="Roadmap__column__title">{`${selectedTab.name}  (${selectedTab.data.length})`}</h2>
                  <h3 className="Roadmap__column__subtitle">
                    {selectedTab.description}
                  </h3>
                </div>
                <div className="Roadmap__column">
                  {curTab.data.map((elem) => {
                    return (
                      <FeedbackCard
                        className={curTab.cardClass}
                        key={elem.id}
                        {...elem}
                      />
                    )
                  })}
                </div>
              </>
            )
          })}
        </main>
      ) : (
        // mobile layout
        <main className="Roadmap__main">
          <div>
            <RoadmapTabs {...{ tabData, selectedTab, setSelectedTab }} />
          </div>

          <div className="Roadmap__container">
            <div className="Roadmap__column__title__container">
              <h2 className="Roadmap__column__title">{`${selectedTab.name}  (${selectedTab.data.length})`}</h2>
              <h3 className="Roadmap__column__subtitle">
                {selectedTab.description}
              </h3>
            </div>
            <div className="Roadmap__column">
              {selectedTab.data.map((elem) => {
                return (
                  <FeedbackCard
                    className={selectedTab.cardClass}
                    key={elem.id}
                    {...elem}
                  />
                )
              })}
            </div>
          </div>
        </main>
      )}
    </div>
  )
}
