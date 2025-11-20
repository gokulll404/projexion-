import '../home/home.css'
import Card from '../cards/card'
import Project from '../projects/project'
import Create from '../create/create'
import { useState } from 'react'

const Home = () => {
  const [showCreate, setShowCreate] = useState(false)

  return (
    <div className="home-wrapper">
    <div className="home">
      <div className="text-field">
        <p className='home-text'>Wednesday, 22nd October</p>
        <h1 className='home-header'>Good morning, Jacob Ramon</h1>
      </div>

      <Card onOpenCreate={() => setShowCreate(true)} />
      <Project />
    </div>

    {showCreate && <Create onClose={() => setShowCreate(false)} />}
  </div>
  )
}

export default Home
