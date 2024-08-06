import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './cards/style.css';
import { Link } from 'react-router-dom';
import AboutImage from '../assets/about1.webp'
//http://exesunrise.com/public/img/images/about1.webp

function AboutCard() {
    return (
        <>
            
            <div className=''>
                <div className='text-center'>
                    <h1 className='fw-bold'>About Sunrise</h1>
                    <h3 >Sunrise College of Advanced Studies </h3>
                </div>

                <div className='row my-5'>
                    <div className='col-lg-4 col-11 mx-auto'>
                    <img src={AboutImage} className='rounded-2' style={{width:"100%", height:"270px"}} />
                    </div>
                    <div className='col-lg-8 col-11 mx-auto'>
                        <p id='aboutDescription'>
                            Welcome to Sunrise College of Advanced Studies (SRC), formerly known as Aditya Kiran College of Applied Studies, established in 2002.
                            In May 2023, as part of the EXE Group of Companies Institutional Revamp Project, SRC underwent a transformation under the visionary leadership of Mr. Muhammed Jouhar KK, Chairman and Managing Director of EXE Group.
                            The college, nestled in the picturesque beauty of Kuttur, focuses on holistic development 
                            through a blend of academic excellence and real-world exposure. Empowering Minds, Illuminating Futures. Lighting the Path to Brilliance, Innovation, and Global Impact, One Enlightened Mind at a Time.
                        </p>
                        <Link to={'/about'}><Button variant='dark'style={{backgroundColor:"#10203F"}} >Read More </Button></Link>
                    </div>
                </div>

            </div>
                {/* <div className='col-lg-3 col-md-12 col-12'>
                    <img src="http://exesunrise.com/public/img/images/about1.webp" style={{width:"100%"}} alt="" srcset="" />
                </div>
                <div className='col-lg-9 col-md-12 col-12 bg-body-tertiary'>
                    <Card className='border border-light'>
                        <Card.Body>
                            <Card.Subtitle style={{fontSize:"18px"}} className="mb-2 text-muted">About Collage </Card.Subtitle>
                            <Card.Title style={{fontSize:"35px"}}>Sunrise collage of Advanced studice </Card.Title>
                            <Card.Text>
                            Welcome to Sunrise College of Advanced Studies (SRC), formerly known as Aditya Kiran College of Applied Studies, established in 2002.
                            In May 2023, as part of the EXE Group of Companies Institutional Revamp Project, SRC underwent a transformation under the visionary leadership of Mr. Muhammed Jouhar KK, Chairman and Managing Director of EXE Group.
                            The college, nestled in the picturesque beauty of Kuttur, focuses on holistic development 
                            through a blend of academic excellence and real-world exposure.
                            </Card.Text>
                        <Card.Link href="#"><Button variant="outline-primary">Read more {">"}</Button></Card.Link>
                        </Card.Body>
                    </Card>
                </div> */}
        </>
    )
}

export default AboutCard