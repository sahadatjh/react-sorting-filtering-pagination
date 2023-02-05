import React from 'react'
import Movies from './components/movies.component'
import Navbar from './components/navbar.component'

export default function Wraper() {
  return (
    <React.Fragment>
        <Navbar/>
        <div className='container'>
            <Movies/>
        </div>
    </React.Fragment>
  )
}
