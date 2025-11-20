import React from 'react'
import Close from '../../assets/images/icons/closeicon.svg'
import '../create/create.css'
import Arrow from '../../assets/images/icons/arrowicon.svg'

const create = ({ onClose }) => {
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
            <input type="text" placeholder="Enter project code" />
          </div>

          <div className="form-group">
            <label>Project name</label>
            <input type="text" placeholder="Enter project name" />
          </div>

          <div className="form-group">
            <label>Project status</label>
            <input type="text" placeholder="Enter project status" />
          </div>

          <div className="form-group">
            <label>Project type</label>
            <div className="select-box">
              <select>
                <option>Client</option>
                <option>Internal Projects</option>
              </select>
              <span className="arrow"><img src={Arrow} alt="" /></span>
            </div>
          </div>

          <div className="form-group">
            <label>Project owner</label>
            <input type="text" placeholder="Enter the project owner" />
          </div>

          <div className="form-group">
            <label>Estimated budget</label>
            <div className="budget-box">
              <div className="currency">$</div>
              <input type="number" placeholder="Enter amount" />
            </div>
          </div>

          <div className="form-group">
            <label>Project complexity</label>
            <input type="text" placeholder="Enter the project complexity" />
          </div>

          <div className="form-group">
            <label>Estimated project start date</label>
            <div className="date-box">
              <input type="text" placeholder="DD/MM/YYYY" />
              <span className="calendar">📅</span>
            </div>
          </div>

          <div className="form-group">
            <label>Estimated project end date</label>
            <div className="date-box">
              <input type="text" placeholder="DD/MM/YYYY" />
              <span className="calendar">📅</span>
            </div>
          </div>

        </div>
        <div className="create-btn-section">
          <div className="create-btn-container">
            <div className="create-btn-tab">
              <button className='create-btn-2'>Submit</button>
              <button className='create-btn-2'>Cancel</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default create
