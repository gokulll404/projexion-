import Close from '../../assets/images/icons/closeicon.svg'
import '../create/create.css'
import Arrow from '../../assets/images/icons/arrowicon.svg'
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProject } from "../../reudx/projectslice";

const Create = ({ onClose }) => {
  const dispatch = useDispatch();


  const [projectCode, setProjectCode] = useState("");
  const [projectName, setProjectName] = useState("");
  const [projectStatus, setProjectStatus] = useState("Pending");
  const [projectType, setProjectType] = useState("Client");
  const [projectOwner, setProjectOwner] = useState("");
  const [estimatedBudget, setEstimatedBudget] = useState("");
  const [projectComplexity, setProjectComplexity] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      addProject({
        projectCode,
        projectName,
        projectStatus,
        projectType,
        projectOwner,
        estimatedBudget,
        projectComplexity,
        startDate,
        endDate,
      })
    );

    alert("Project added to Redux!");
  };

  return (
    <div className='create-container'>
      <div className="create-tab">
        <div className="header">
          <h1>Create Project</h1>
          <img
            src={Close}
            alt="close"
            className="close-icon"
            onClick={onClose}
            style={{ cursor: "pointer" }}
          />
        </div>

        <div className="create-project-container">

          <div className="form-group">
            <label>Project code</label>
            <input 
              type="text" 
              placeholder="Enter project code"
              value={projectCode}
              onChange={(e) => setProjectCode(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Project name</label>
            <input 
              type="text" 
              placeholder="Enter project name"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Project status</label>
            <input 
              type="text" 
              placeholder="Enter project status"
              value={projectStatus}
              onChange={(e) => setProjectStatus(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Project type</label>
            <div className="select-box">
              <select 
                value={projectType}
                onChange={(e) => setProjectType(e.target.value)}
              >
                <option>Client</option>
                <option>Internal Projects</option>
              </select>
              <span className="arrow"><img src={Arrow} alt="" /></span>
            </div>
          </div>

          <div className="form-group">
            <label>Project owner</label>
            <input 
              type="text" 
              placeholder="Enter the project owner"
              value={projectOwner}
              onChange={(e) => setProjectOwner(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Estimated budget</label>
            <div className="budget-box">
              <div className="currency">$</div>
              <input 
                type="number" 
                placeholder="Enter amount"
                value={estimatedBudget}
                onChange={(e) => setEstimatedBudget(e.target.value)}
              />
            </div>
          </div>

          <div className="form-group">
            <label>Project complexity</label>
            <input 
              type="text" 
              placeholder="Enter the project complexity"
              value={projectComplexity}
              onChange={(e) => setProjectComplexity(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Estimated project start date</label>
            <div className="date-box">
              <input 
                type="text" 
                placeholder="DD/MM/YYYY"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
              <span className="calendar">📅</span>
            </div>
          </div>

          <div className="form-group">
            <label>Estimated project end date</label>
            <div className="date-box">
              <input 
                type="text" 
                placeholder="DD/MM/YYYY"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
              <span className="calendar">📅</span>
            </div>
          </div>

        </div>

        <div className="create-btn-section">
          <div className="create-btn-container">
            <div className="create-btn-tab">
              <button className='create-btn-2' onClick={handleSubmit}>Submit</button>
              <button className='create-btn-2' onClick={onClose}>Cancel</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Create;
