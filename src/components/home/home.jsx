import '../home/home.css'
import Card from '../cards/card'
import Project from '../projects/project'
import Create from '../create/create'
import Table from '../table/table'      
import { useState } from 'react'
import { useSelector } from "react-redux"  


const Home = () => {
  const [showCreate, setShowCreate] = useState(false)


  const projects = useSelector((state) => state.projects.list)

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

      {showCreate && <Create onClose={() => setShowCreate(false)} />}
    </div>
  )
}

export default Home
