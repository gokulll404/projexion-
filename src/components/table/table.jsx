
import "../table/table.css";
import { useSelector } from "react-redux";
import Search from '../../assets/images/icons/search.svg'
import Filter from '../../assets/images/icons/filter.svg'
import TableArrow from '../../assets/images/icons/tablearrow.svg'
import Leftarrow from '../../assets/images/icons/leftarrow.svg'
import Rightarrow from '../../assets/images/icons/rightarrow.svg'


const table = () => {
  const projects = useSelector((state) => state.projects?.list || []);

  return (
    <div className="projects-container">
      <h2>Projects</h2>

      <div className="top-bar">
        <p className="subtitle">All projects</p>
        <div className="search-box">
           <img className="icon" src={Search} alt="" />
          <input type="text" placeholder="Search" />
        </div>

        <button className="filter-btn">
          <img className="icon" src={Filter} alt="" />Filter
        </button>
         <div className="table-bottom-line"></div>
      </div>

      <div className="table-wrapper">
        <table className="project-table">

          <thead>
            <tr>
              <th>Project Id <img className="sort-icons" src={TableArrow} alt="" /></th>
              <th>Project Name <img className="sort-icons" src={TableArrow} alt="" /></th>
              <th>Status <img className="sort-icons" src={TableArrow} alt="" /></th>
              <th>Estimated budget <img className="sort-icons" src={TableArrow} alt="" /></th>
              <th>Project owner <img className="sort-icons" src={TableArrow} alt="" /></th>
              <th>Complexity <img className="sort-icons" src={TableArrow} alt="" /></th>
              <th>Project start date <img className="sort-icons" src={TableArrow} alt="" /></th>
              <th>Project end date <img className="sort-icons" src={TableArrow} alt="" /></th>
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
          <button className="page-btn"><img src={Leftarrow} alt="" /></button>
          <button className="page-btn active">1</button>
          <button className="page-btn"><img src={Rightarrow} alt="" /></button>
        </div>
      </div>

    </div>
  );
};

export default table;
