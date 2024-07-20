import React from 'react'

function featureVideo() {
  return (
      <>
          <div className="text-center bg-dark border-bottom border-5 border-secondary" style={{ position: 'relative', width: '100%', height: '80vh', overflow: 'hidden' }}>
      <video style={{ objectFit: 'cover', width: '100%', height: '100%', opacity: 0.2 }} autoPlay loop muted>
        <source src="/WhatsApp Video 2024-07-17 at 10.36.19_777c5daa.mp4" type="video/mp4" />
      </video>
      <div className="overlay text-light" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <h1 className="college-name" style={{ color: 'white', fontSize: '80px' }}>Sunrise College </h1>
        <p className="college-description">some description for college</p>
        <div>
          <i className="fs-4 mx-2 fa-brands fa-instagram"></i>
          <i className="fs-4 mx-2 fa-brands fa-facebook"></i>
          <i className="fs-4 mx-2 fa-brands fa-linkedin"></i>
          <i className="fs-4 mx-2 fa-brands fa-youtube"></i>
        </div>
      </div>
    </div>
      </>
  )
}

export default featureVideo