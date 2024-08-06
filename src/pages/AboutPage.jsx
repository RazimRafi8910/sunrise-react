import React from 'react';
import CollageImage from '../assets/CollageImage.jpg'

function AboutPage() {
    return (
        <>
            <div className='container'>
                <div className='mt-4'>
                    <h2>About Us</h2>
                    <hr className='m-0' />
                </div>
                <div className='text-center'>
                    <h1 className='fw-bold'>Sunrise Collage of Advanced Studies</h1>
                </div>
                <div className="row mt-4">
                <div className='col-lg-6 col-md-6 col-12'>
                    <img className='rounded text-center' src={CollageImage} style={{ height: '60vh', maxWidth:'90vw' }} />
                </div>
                <div className='col-lg-6 col-md-6 col-12 mt-3'>
                    <h5>Welcome to Sunrise College of Advanced Studies (SRC), established in 2002 and formerly known as Aditya Kiran College of Applied Studies. In 2023, SRC underwent a transformative revamp under the leadership of Mr. Muhammed Jouhar KK, Chairman and Managing Director of EXE Group. Nestled in Kuttur's picturesque landscape, SRC focuses on holistic development through academic excellence and real-world exposure. Our comprehensive overhaul includes renovated infrastructure, a thriving academic culture, and activity-oriented groups. We offer a range of degree programs tailored to meet competitive demands, with a strong emphasis on industrial exposure and cultural clubs to nurture students' skills. With 100% placement assistance, our dedicated placement cell collaborates with industries to prepare students for success. Join us at SRC, where academic excellence meets real-world readiness, shaping future leaders since 2002.</h5>
                </div>
                </div>
            </div>
        </>
    )
}

export default AboutPage