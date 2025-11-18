import React from 'react'
import '../home/home.css'
import Card from'../cards/card'
import Project from '../projects/project'

const home = () => {
    return (
        <div className='home'>
            <div className="text-field">
                <p>Wednesday, 22nd October</p>
                <h1>Good morning, Jacob Ramon</h1>
            </div>
            <Card/>
            <Project/>
        </div>
    )
}

export default home
