import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar as BootstrapNavbar,Button,Container,Nav } from 'react-bootstrap';
import './style.css';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase/firebaseConfg';
import UserAccount from './UserAccount';
import LogoImage from '../../assets/logo-white.png'
//http://exesunrise.com/public/img/logo/logo-white.png

function Navbar() {

  const [isUser, setIsUser] = useState(null);

  useEffect(() => {
    let listent = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsUser(user);
      } else {
        setIsUser(null)
      }
    })
    return () => {
      listent()
    }
  }, []);

    return (
        <>
            <header id='header'>
            <BootstrapNavbar expand="xl" className="navbar-dark position-relative py-3">
                <Container>
                    <BootstrapNavbar.Brand href="#home"><img className="img-fluid" id="headerImage" src={LogoImage} alt="" /></BootstrapNavbar.Brand>
                    <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
                    <BootstrapNavbar.Collapse id="basic-navbar-nav">
                <Nav className="mx-auto">
                  <Nav.Link className='mx-2' href="/">Home</Nav.Link>
                  <Link className='nav-link' to={'/about'}>About</Link>
                            {/* <Nav.Link className='mx-2' href="/about">About</Nav.Link> */}
                            <Nav.Link className='mx-2' href="#course">Academics</Nav.Link>
                            <Nav.Link className='mx-2' href="/students-life">Students Life</Nav.Link>
                            <Nav.Link className='mx-2' href="/events">News and Events</Nav.Link>
                            <Nav.Link className='mx-2' href="/location">Location</Nav.Link>
                            {/* <Nav.Link className='mx-2' href="#admission">Login</Nav.Link> */}
                </Nav>
                <BootstrapNavbar.Text>
                  {isUser ? <UserAccount user={isUser}/> : <Link to={'/login'}><Button variant='outline-light' className='px-4 fw-bold' >Login</Button></Link>}
                </BootstrapNavbar.Text>
                    </BootstrapNavbar.Collapse>
                </Container>
                </BootstrapNavbar>
                </header>
        </>
    )
}

export default Navbar



{/* <header id="header">
<div className="ms-5" style={{ minWidth: '100vw', backgroundImage: 'linear-gradient(to right, #10203F, white)' }}>
  <div className="d-flex justify-content-end text-end container">
    <p style={{ fontSize: '13px' }} className="mb-0 mx-2">
      <i className="mx-1 fa-solid fa-phone"></i>+91 8848764715
    </p>
    <p style={{ fontSize: '13px' }} className="mb-0 mx-2">
      <i className="mx-1 fa-regular fa-envelope"></i>sunrise@gmail.com
    </p>
  </div>
</div>
<div className="container">
  <nav className="navbar navbar-expand-xl navbar-dark position-relative">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">
        <img className="img-fluid" id="headerImage" src="http://exesunrise.com/public/img/logo/logo-white.png" alt="" />
      </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse m-0" id="navbarNav">
        <ul className="navbar-nav mx-auto">
          <li className="nav-item mx-2">
            <a className="nav-link active px-2" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item mx-2">
            <a className="nav-link active" aria-current="page" href="#">About</a>
          </li>
          <li className="nav-item mx-2">
            <a className="nav-link active" aria-current="page" href="#">Admission</a>
          </li>
          <li className="nav-item mx-2">
            <a className="nav-link active" aria-current="page" href="#">Course</a>
          </li>
          <li className="nav-item mx-2">
            <a className="nav-link active" aria-current="page" href="#">Department</a>
          </li>
          <li className="nav-item mx-2">
            <a className="nav-link active" aria-current="page" href="#">Notice Board</a>
          </li>
          <li className="nav-item mx-2">
            <a className="nav-link active" aria-current="page" href="#">Contact Us</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</div>
</header> */}