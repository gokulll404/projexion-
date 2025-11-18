
import React from 'react'
import Leftbar from '../components/leftbar/leftbar'
import Home from '../components/home/home'
import Card from '../components/cards/card'

const home = () => {
  return (
    <div className='Home' >
      <Leftbar />
      <Home/>
    </div>
  )
}

export default home
