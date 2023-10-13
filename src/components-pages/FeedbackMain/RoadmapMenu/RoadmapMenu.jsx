import "./RoadmapMenu.css"
import { Link } from "react-router-dom"

export function RoadmapMenu() {
  return (
    <div className="roadmap-menu">
      <h2 className="roadmap-menu__title">Roadmap</h2>
      <Link className="roadmap-menu__link" to={"/roadmap"}>
        View
      </Link>
      <div className="roadmap-item__bullet roadmap-item__bullet--orange"></div>
      <h3 className="roadmap-item__title">Planned</h3>
      <h3 className="roadmap-item__count">2</h3>
      <div className="roadmap-item__bullet roadmap-item__bullet--purple"></div>
      <h3 className="roadmap-item__title">In-Progress</h3>
      <h3 className="roadmap-item__count">3</h3>
      <div className="roadmap-item__bullet roadmap-item__bullet--blue"></div>
      <h3 className="roadmap-item__title">Live</h3>
      <h3 className="roadmap-item__count">1</h3>
    </div>
  )
}
