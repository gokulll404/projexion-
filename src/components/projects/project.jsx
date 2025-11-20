import '../../components/projects/project.css'
import Search from "../../assets/images/icons/search.svg"
import Filter from "../../assets/images/icons/filter.svg"
import { useState } from 'react'


const project = () => {
  const [activeTab, setActiveTab] = useState("running");
  return (
    <div className='projects'>
      <h1 className='project-header'>All Projects</h1>
      <div className="search">
        <div className="search-form">
          <div className="input-field">
            <img src={Search} alt="Search" className="search-icon" />
            <input type="search" className="search-input" placeholder="Search for projects here" />
          </div>
          <div className="filter-field">
            <div className="filter-box">
              <img src={Filter} alt="filter icon" className="filter-icon" />
              <span className="filter-text">Filters</span>
            </div>
          </div>
        </div>
      </div>
      <div className="tabs-container">
        <div className="tabs">
          <p
            className={`tab ${activeTab === "running" ? "active" : ""}`}
            onClick={() => setActiveTab("running")}
          >
            Running projects (0)
          </p>

          <p
            className={`tab ${activeTab === "escalated" ? "active" : ""}`}
            onClick={() => setActiveTab("escalated")}
          >
            Escalated projects (0)
          </p>

          <p
            className={`tab ${activeTab === "completed" ? "active" : ""}`}
            onClick={() => setActiveTab("completed")}
          >
            Completed projects (0)
          </p>
        </div>

        <div className="bottom-line"></div>
      </div>
    </div>
  )
}

export default project
