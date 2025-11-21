import React from "react";
import "../table/table.css";
import { useSelector } from "react-redux";

const table = () => {
  const projects = useSelector((state) => state.projects?.list || []);

  return (
    <div className="projects-container">
      <h2>Projects</h2>
      <p className="subtitle">All projects</p>

      <div className="top-bar">
        <div className="search-box">
          <span className="icon">🔍</span>
          <input type="text" placeholder="Search" />
        </div>

        <button className="filter-btn">
          <span className="icon">⚙️</span> Filter
        </button>
      </div>

      <div className="table-wrapper">
        <table className="project-table">

          <thead>
            <tr>
              <th>Project Id <span className="sort-icons">▲▼</span></th>
              <th>Project Name <span className="sort-icons">▲▼</span></th>
              <th>Status <span className="sort-icons">▲▼</span></th>
              <th>Estimated budget <span className="sort-icons">▲▼</span></th>
              <th>Project owner <span className="sort-icons">▲▼</span></th>
              <th>Complexity <span className="sort-icons">▲▼</span></th>
              <th>Project start date <span className="sort-icons">▲▼</span></th>
              <th>Project end date <span className="sort-icons">▲▼</span></th>
            </tr>
          </thead>

          <tbody>

            {projects.length > 0 ? (
              projects.map((p, index) => (
                <tr key={index}>
                  <td>{p.projectCode}</td>
                  <td>{p.projectName}</td>
                  <td><span className="status pending">{p.projectStatus}</span></td>
                  <td>{p.estimatedBudget}</td>
                  <td>{p.projectOwner}</td>
                  <td>{p.projectComplexity}</td>
                  <td>{p.startDate}</td>
                  <td>{p.endDate}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8" style={{ textAlign: "center", padding: "20px" }}>
                  No projects available
                </td>
              </tr>
            )}
          </tbody>

        </table>
      </div>


      <div className="pagination">
        <span>Page</span>
        <input type="number" defaultValue="1" />
        <span>of 1</span>

        <div className="page-controls">
          <button className="page-btn">&#8592;</button>
          <button className="page-btn active">1</button>
          <button className="page-btn">&#8594;</button>
        </div>
      </div>

    </div>
  );
};

export default table;
