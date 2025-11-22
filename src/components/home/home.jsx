import '../home/home.css'
import Card from '../cards/card'
import Project from '../projects/project'
import Create from '../create/create'
import Table from '../table/table'
import { useState } from 'react'
import { useSelector } from "react-redux"
import Successmodal from "../successmodal/successmodal";

const Home = () => {
  const [showCreate, setShowCreate] = useState(false)
  const [toasts, setToasts] = useState([]);

  const projects = useSelector((state) => state.projects.list)

  const pushToast = (type = "success") => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, type }]);

    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 3000);
  };



  return (
    <div className="home-wrapper">
      <div className="home">

        <div className="text-field">
          <p className='home-text'>Wednesday, 22nd October</p>
          <h1 className='home-header'>Good morning, Jacob Ramon</h1>
        </div>

        <Card onOpenCreate={() => setShowCreate(true)} />

        {projects.length > 0 ? <Table /> : <Project />}

      </div>

      {showCreate && (
        <Create
          onClose={() => setShowCreate(false)}
          pushToast={pushToast}   // 👈 IMPORTANT
        />
      )}

      {/* Toasts appear OUTSIDE create modal */}
      <div className="toast-container">
        {toasts.map(t => (
          <Successmodal key={t.id} type={t.type} />
        ))}
      </div>
    </div>
  )
}

export default Home
