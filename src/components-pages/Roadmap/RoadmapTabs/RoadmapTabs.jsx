import "./RoadmapTabs.css"
import { FeedbackCard } from "../../FeedbackCard/FeedbackCard"
import { Button } from "../../../components/Button/Button"

export function RoadmapTabs({ tabData, selectedTab, setSelectedTab }) {
  return (
    <nav>
      <ul className="TabList">
        {tabData.map((elem) => {
          return (
            <li key={elem.name}>
              <button
                className={`Tab ${
                  selectedTab.name === elem.name ? "Tab--selected" : ""
                } ${elem.tabClass}`}
                onClick={() => setSelectedTab(elem)}
              >{`${elem.name}  (${elem.data.length})`}</button>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
