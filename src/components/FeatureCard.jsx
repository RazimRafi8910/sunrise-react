import React from 'react';
import './cards/style.css';

function featureCard({ image, tittle, description }) {
  return (
      <>
          <div className="col-lg-4 col-md-5 d-flex justify-content-center my-1">
                <div className="card shadow p-0 fade-in" style={{width:'24rem'}}>
                    <div className='rounded' style={{backgroundColor:'black'}}>
                      <img src={image} className="featureimg card-img-top" alt="..."/>
                    </div>
                    <div className="card-body">
                      <h5 className="card-tittle text-dark fw-bold">{ tittle }</h5>
                      <p className="card-text" style={{ fontSize: '14px' }}>{ description }</p>
                      <a className="text-decoration-none text-primary fw-bold" href="#">Read more</a>
                    </div>
                  </div>
                </div>
      </>
  )
}

export default featureCard