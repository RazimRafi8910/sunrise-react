import React from 'react';
import './style.css';

function featureVideo() {
  return (
      <>
          <div className="text-center bg-dark border-bottom border-5 border-secondary" style={{ position: 'relative', width: '100%', height: '80vh', overflow: 'hidden' }}>
      <video style={{ objectFit: 'cover', width: '100%', height: '100%', opacity: 0.2 }} autoPlay loop muted>
        <source src="/WhatsApp Video 2024-07-17 at 10.36.19_777c5daa.mp4" type="video/mp4" />
      </video>
      <div className="overlay text-light typewriter" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <h3 className="college-name ">Sunrise College of Advanced Studies </h3>
        <p className="college-description">Empowering Minds, Illuminating Futures </p>
        <div>
          <i className="fs-3 mx-2 fa-brands fa-instagram"></i>
          <i className="fs-3 mx-2 fa-brands fa-facebook"></i>
          <i className="fs-3 mx-2 fa-brands fa-linkedin"></i>
          <i className="fs-3 mx-2 fa-brands fa-youtube"></i>
        </div>
      </div>
    </div>
      </>
  )
}

export default featureVideo