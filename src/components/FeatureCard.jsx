import React from 'react';
import './cards/style.css';
import FeatureOne from '../assets/btech.jpg'
import FeatureTwo from '../assets/mtech.jpg'
import FeatureThree from '../assets/phd.jpg'

function featureCard({ image, tittle, description }) {

  let images = [FeatureOne,FeatureTwo,FeatureThree]

  return (
      <>
          <div className="col-lg-4 col-md-5 d-flex justify-content-center my-1">
                <div className="card shadow p-0 fade-in" style={{width:'24rem'}}>
                    <div className='rounded' style={{backgroundColor:'black'}}>
                      <img src={images[image]} className="featureimg card-img-top" alt="..."/>
                    </div>
                    <div className="card-body">
                      <h5 className="card-tittle text-dark fw-bold">{ tittle }</h5>
                      <p className="card-text" style={{ fontSize: '14px' }}>{ description }</p>
                      <a className="text-decoration-none text-primary fw-bold" href="/about">Read more</a>
                    </div>
                  </div>
                </div>
      </>
  )
}

export default featureCard