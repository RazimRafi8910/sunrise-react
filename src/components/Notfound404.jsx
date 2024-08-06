import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Notfound404() {
  return (
      <>
          <div className='container'>
              <div className='text-center mt-5'>
              <h2>Invalid URL</h2>
              <Link to={'/'}><Button className='' variant='dark'>Home</Button></Link>
              </div>
          </div>
      </>
  )
}

export default Notfound404