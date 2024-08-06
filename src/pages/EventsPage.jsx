import React from 'react'
import EventImage1 from '../assets/events/eventImage1.jpg'
import EventImage2 from '../assets/events/eventImage2.jpg'
import EventImage3 from '../assets/events/eventImage3.jpg'
import EventVideo1 from '../assets/events/eventVideo1.mp4'
import EventVideo2 from '../assets/events/eventVideo2.mp4'
import EventVideo3 from '../assets/events/eventVideo3.mp4'

function EventsPage() {
    return (
        <>
            <div className='container'>
                <div>
                    <h2>Events and news</h2>
                    <hr />
                </div>
                <div className='row'>
                    <div className='col-lg-6 col-md-6 col-12 mt-2'>
                        <img style={{ maxWidth: '90vw' }} className='imgfluid' src={EventImage1} alt="" />
                    </div>
                    <div className='col-lg-6 col-md-6 col-12 mt-2'>
                        <img style={{ maxWidth: '90vw' }} src={EventImage2} alt="" />
                    </div>
                    <div className='col-lg-6 col-md-6 col-12 mt-2'>
                        <img style={{ maxWidth: '50vw', maxHeight:'60vh' }} className='imgfluid' src={EventImage3} alt="" />
                    </div>

                </div>
                <div className='mt-4'>
                    <h2>Videos</h2>
                    <hr />
                </div>
                <div className='row'>
                <div className='col-lg-3'>
                        <video style={{ objectFit: 'cover', maxHeight: "70vh" }} autoPlay loop muted>
                            <source src={EventVideo1} type="video/mp4" />
                        </video>
                    </div>
                    <div className='col-lg-3'>
                        <video style={{ objectFit: 'cover', maxHeight: "70vh" }} autoPlay loop muted>
                            <source src={EventVideo3} type="video/mp4" />
                        </video>
                    </div>
                    <div className='col-lg-3'>
                        <video style={{ objectFit: 'cover', maxHeight: "70vh" }} autoPlay loop muted>
                            <source src={EventVideo2} type="video/mp4" />
                        </video>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EventsPage