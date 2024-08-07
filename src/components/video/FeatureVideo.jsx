import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

function featureVideo() {
  return (
    <>
      <div className="text-center bg-dark border-bottom border-5 border-secondary" style={{ position: 'relative', width: '100%', height: '80vh', overflow: 'hidden' }}>
        <video style={{ objectFit: 'cover', width: '100%', height: '100%', opacity: 0.2 }} autoPlay controls loop muted>
          <source src="/WhatsApp Video 2024-07-17 at 10.36.19_777c5daa.mp4" type="video/mp4" />
        </video>
        <div className="overlay text-light typewriter" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <h3 className="college-name ">Sunrise College of Advanced Studies </h3>
          <p className="college-description">Empowering Minds, Illuminating Futures </p>
          <div>
            <a className='text-light' href="https://www.facebook.com/people/Sunrise-College-of-Advanced-Studies/61557401863207">
              <i className="fs-3 mx-2 fa-brands fa-facebook"></i>
            </a>
            <a className='text-light' href="https://www.instagram.com/sunrise_college?igsh=MTFjbmtuNXN4OWRpZQ%3D%3D">
              <i className="fs-3 mx-2 fa-brands fa-instagram"></i>
            </a>
            <a className='text-light' href="https://www.linkedin.com/school/sunrise-college-knr/">
              <i className="fs-3 mx-2 fa-brands fa-linkedin"></i>
            </a>
            <a className='text-light' href="https://youtube.com/@srccampus?si=KZkuZstCzJHfkiNJ">
              <i className="fs-3 mx-2 fa-brands fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default featureVideo