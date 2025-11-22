import Close from '../../assets/images/icons/closeicon.svg'
import '../create/create.css'
import Arrow from '../../assets/images/icons/arrowicon.svg'
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProject } from "../../reudx/projectslice";
import { DatePicker } from "antd";
import Alertmodal from '../../components/alertmodal/alertmodal'

const Create = ({ onClose, pushToast }) => {
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

  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // REQUIRED FIELD CHECK
    if (
      !projectCode.trim() ||
      !projectName.trim() ||
      !projectStatus.trim() ||
      !projectType.trim() ||
      !projectOwner.trim() ||
      !estimatedBudget.toString().trim() ||
      !projectComplexity.trim() ||
      !startDate.trim() ||
      !endDate.trim()
    ) {
      pushToast("error");   // show error toast
      return;               // stop submit, keep modal open
    }

    // SUCCESS
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

    pushToast("success");    // show success toast
    onClose();               // close modal
  };


  const handleCancel = () => {
    setProjectCode("");
    setProjectName("");
    setProjectStatus("Pending");
    setProjectType("Client");
    setProjectOwner("");
    setEstimatedBudget("");
    setProjectComplexity("");
    setStartDate("");
    setEndDate("");
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const handleBack = () => {
    setShowModal(false);
  };

  return (
    <div className="overlay">
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
              <div className="select-box">
                <select
                  value={projectStatus}
                  onChange={(e) => setProjectStatus(e.target.value)}
                  className="status-select"
                >
                  <option value="Pending">Pending</option>
                  <option value="Escalated">Escalated</option>
                  <option value="Completed">Completed</option>
                </select>
              </div>
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
                <DatePicker
                  format="DD/MM/YYYY"
                  onChange={(date, dateString) => setStartDate(dateString)}
                  className="antd-date"
                />
              </div>
            </div>

            <div className="form-group">
              <label>Estimated project end date</label>
              <div className="date-box">
                <DatePicker
                  format="DD/MM/YYYY"
                  onChange={(date, dateString) => setEndDate(dateString)}
                  className="antd-date"
                />
              </div>
            </div>

          </div>

          <div className="create-btn-section">
            <div className="create-btn-container">
              <div className="create-btn-tab">
                <button className='create-btn-2' onClick={handleSubmit}>Submit</button>
                <button className='create-btn-2' onClick={() => setShowModal(true)}>Cancel</button>
              </div>
            </div>
          </div>

        </div>
      </div>
      {showModal && (
        <Alertmodal
          onClose={handleClose}
          onBack={handleBack}
          onCancelData={handleCancel}   // 👈 ADD THIS
        />
      )}
    </div>
  );
};

export default Create;
