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
                <div className=''>
                    <img src={CollageImage} style={{ height: '60vh' }} />
                </div>
            </div>
        </>
    )
}

export default AboutPage