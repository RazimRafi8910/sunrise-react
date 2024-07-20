import React from 'react';
import './cards/style.css';

function featureCard({ image, tittle, description }) {
  return (
      <>
          <div class="col-lg-4 col-md-5 d-flex justify-content-center my-1">
                <div class="card shadow p-0 fade-in" style={{width:'24rem'}}>
                    <div className='rounded' style={{backgroundColor:'black'}}>
                      <img src={image} class="featureimg card-img-top" alt="..."/>
                    </div>
                    <div class="card-body">
                      <h5 class="card-tittle text-dark fw-bold">{ tittle }</h5>
                      <p class="card-text" style={{ fontSize: '14px' }}>{ description }</p>
                      <a class="text-decoration-none text-primary fw-bold" href="#">Read more</a>
                    </div>
                  </div>
                </div>
      </>
  )
}

export default featureCard