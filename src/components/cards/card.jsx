import Client from '../../assets/images/cardsicon/client.svg'
import Internal from '../../assets/images/cardsicon/internal.svg'
import Running from '../../assets/images/cardsicon/running.svg'
import '../cards/card.css'
import { useSelector } from "react-redux";

const Card = ({ onOpenCreate }) => {
    
   const projects = useSelector((state) => state.projects.list);

  const runningCount = projects.filter(p => p.projectStatus === "Pending").length;
  const clientCount = projects.filter(p => p.projectType === "Client").length;
  const internalCount = projects.filter(p => p.projectType === "Internal Projects").length;

    return (
        <div className='card'>
            <div className="card-section">
                <div className="card1">

                    <div className="running-projects">
                        <img src={Running} alt="running" />
                        <p>Running projects</p>
                        <div className="count"><p>{runningCount}</p></div>
                    </div>




                    <div className="running-projects">
                        <img src={Internal} alt="running" />
                        <p>Client</p>
                        <div className="count"><p>{clientCount}</p></div>
                    </div>



                    <div className="running-projects">
                        <img src={Client} alt="running" />
                        <p>Internal Projects</p>
                        <div className="count"><p>{internalCount}</p></div>
                    </div>

                </div>
            </div>

            <div className="button">
                <button className='create-btn' onClick={onOpenCreate}>+ Create Project</button>
            </div>
        </div>
    )
}

export default Card;
